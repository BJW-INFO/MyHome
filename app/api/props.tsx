import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { createClient } from '@supabase/supabase-js'
import { deepCopy, WeekCycles } from "@/utils";
import { NextResponse } from "next/server";

dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * 비밀번호 유효 여부
 * @param pw password input
 * @returns password validity
 */
export const isPassword = (pw: string | null) => {
    return pw !== null && process.env.WEB_PASS_KEY === pw;
}

export const passwordError = NextResponse.json(
    { message: "Unauthorized Request", data: [], },
    { status: 401 }
);

export class CustomError extends Error {
    public status: number;
    public error: any;
    constructor(message: string, error: any, status: number) {
        console.log(message + error);
        super(message);
        this.error = error;
        this.status = status;
    }
}

export function CustomResponse<T>(data?: T | T[] | null, message: string = 'success'): NextResponse {
    return NextResponse.json(
        {
            message,
            data: data
        },
        { status: 200 }
    );
}

/** 슈퍼베이스 연결 */
export const supabase = createClient(
    process.env.SUPABASE_API_BASE as string,
    process.env.SUPABASE_API_KEY as string
)

export const getCategories = async (type: string, name: string): Promise<number> => {
    let result = 0;
    try {
        const { data, error }: any = await supabase
            .from('categories')
            .select('id')
            .eq('type', type.toUpperCase()).eq('name', name.toUpperCase())
            .single();
        if (error) { throw error; } else { result = data.id; }
    }
    catch (error) { console.error(`getCategroies error:`, error); }
    finally { return result }
}

type SchedulerUpdated = (props: schedulerFuncstionProps & { category: number }) => Promise<any>;
type SchedulerCallback = (props: schedulerFuncstionProps) => Promise<any>;

interface schedulerFuncstionProps {
    category: number,
    contents: any,
}

interface schedulerProps {
    category: number | { type: string, name: string },
    updated?: SchedulerUpdated,
    callback?: SchedulerCallback,
}

const schedulerUpdated: SchedulerUpdated = async (props: schedulerFuncstionProps) => {
    let { contents } = deepCopy(props);
    try {
        const { error: updateError }: any = await supabase.rpc(`update_loa_event_contents`, {
            p_id: contents.map((data: any) => data.id),
            p_is_clear: false,
        });
        if (updateError) { return false; }
        for (const content of contents) { content.etc.is_clear = false; }
        return contents;
    }
    catch (error) {
        console.error(`schedulerCallback error:`, error);
        return undefined;
    }
}

const schedulerCallback: SchedulerCallback = async (props: schedulerFuncstionProps) => props.contents;

export async function scheduler(props: schedulerProps): Promise<any> {
    const { category: option, callback = schedulerCallback, updated = schedulerUpdated, } = props;
    const today = dayjs().tz('Asia/Seoul');
    try {
        const category = typeof option === 'number' ? option : await getCategories(option.type, option.name)
        if (!category || category === 0) { return new Error(`not find categories`); }

        const { data: schedule, error: scheduleError }: any = await supabase.from(`schedulers`).select(`*`).eq(`category`, category).single();
        if (scheduleError) { throw scheduleError; }

        const { data: contents, error: contentsError }: any = await supabase.from('contents').select(`*`).eq('category', category);
        if (contentsError) { throw contentsError }

        if (dayjs(schedule.updated_at).isBefore(today.startOf('day')) && today.hour() >= schedule.update_time) {
            switch (schedule.update_cycle) {
                case WeekCycles.DAILY:
                case WeekCycles.WEEKLY: {
                    if (schedule.update_weeks.length !== 0) {
                        if (!schedule.update_weeks.includes(today.day())) { return await callback({ contents: contents, category }) }
                    }
                    else if (schedule.update_cycle === WeekCycles.WEEKLY) { throw new Error(`Weekly schedule not update_weeks`) }
                } break;
                case WeekCycles.MONTHLY:
                case WeekCycles.Quarterly: {
                    /*
                    2 => 월간확인 [] 해당 월이 지났는지 확인
                    3 => 날짜로 확인
                    월간은 강제로 해당달의 1일로 바꿔버린다.
                    */

                } break;
            }
        }
        const update = await updated({ contents: contents, category: category });
        if (update !== undefined) {
            const { error: clearError } = await supabase.from('schedulers').update({ update_at: new Date().toISOString() }).eq('category', category);
            if (clearError) { throw clearError }
            return Promise.resolve(await callback({ contents: update, category: category }));
        }
    }
    catch (error) {
        console.error(`scheduler error:`, error);
        return Promise.resolve([]);
    }
}