import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { NextRequest, NextResponse } from "next/server";
import { CustomError, CustomResponse, getCategories, isPassword, passwordError, scheduler, supabase } from "@api/props";
import { lostArkApi } from "../route";
import { contentsSort } from "../props";

dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);


export interface LoaEventEtcProp {
    title: string,
    img: string,
    link: string,
    date: {
        start: string,
        end: string,
        reward: string | null,
    }
}

export interface LoaEventProfileProp {
    is_clear: boolean,
    profiles: {
        id: number,
        account: string,
        character: number,
    }
}

export interface LoaEventProp {
    id: number,
    category: number,
    updateAt: string,
    profile: LoaEventProfileProp,
    etc: LoaEventEtcProp,
}

export const eventPatten = async (events: any): Promise<any> => {
    const today = dayjs().tz('Asia/Seoul');
    let contents: LoaEventProp[] = [];
    try {
        const setScheduler = await scheduler({
            category: { type: 'LOA', name: 'EVENT' },
            updated: async ({ contents, category }) => {
                try {
                    let duplications: { delete: LoaEventProp[], update: LoaEventProp[] } = { delete: [], update: [] };
                    for (const content of contents) {
                        if (events.find((event: any) => event.Title === content.etc.title)) {
                            const end = today.isAfter(dayjs(content.end).tz('Asia/Seoul'), `day`);
                            duplications[end ? 'delete' : 'update'].push(content);
                        }
                    }
                    for (const [action, content] of Object.entries(duplications)) {
                        const arry = content.map((content: LoaEventProp) => content.id);
                        await supabase.rpc(`${action}_loa_event_contents`, {
                            p_parents: arry,
                            ...(action === 'update' ? { p_is_clear: false } : {})
                        })
                    }
                    for (const event of events) {
                        if (duplications.update.find((content: LoaEventProp) => content.etc.title === event.Title)) { continue; }
                        const { data, error } = await supabase.rpc(`insert_loa_event_contents`, {
                            p_category: category,
                            p_etc: {
                                title: event.Title,
                                img: event.Thumbnail,
                                link: event.Link,
                                date: {
                                    start: event.StartDate,
                                    end: event.EndDate,
                                    reward: event.RewardDate || null,
                                }
                            } as LoaEventEtcProp
                        })
                        duplications.update.push(data);
                    }
                    return duplications.update;
                }
                catch (error) {
                    console.log(error);
                    return undefined;
                }
            },
            callback: async ({ contents }) => {
                let result: LoaEventProp[] = [];
                for (const content of contents) {
                    const { data } = await supabase.from('contents').select('id, etc, profiles:profile(*)').eq('parent', content.id);
                    const sortedData = data ? contentsSort(data,`profiles`) : [];
                    result.push({
                        ...content,
                        profile: sortedData // 정렬된 데이터가 들어감
                    });
                }
                return result;
            }
        })
        contents = setScheduler;
    }
    catch (error: any) { throw error; }
    return contents;
}

export async function GET(req: NextRequest) {
    if (!isPassword(req.headers.get("X-User-Password"))) { return passwordError; }
    try {
        const events = await lostArkApi.event();
        const response = await eventPatten(events);
        return CustomResponse(response);
    }
    catch (e: any) {
        if (e instanceof CustomError) {
            console.error(`${e.message}`, e.error);
            return NextResponse.json(
                { message: e.message, data: [], },
                { status: e.status },
            );
        }
        return NextResponse.json(
            { message: 'An unexpected error occurred during API processing.', data: [], },
            { status: 500 },
        );
    }
}

export async function POST(req: NextRequest) {
    if (!isPassword(req.headers.get("X-User-Password"))) { return passwordError; }
    try {
        const { contents } = await req.json();
        const category = await getCategories('LOA', 'EVENT_ACTIVE');
        const { data } = await supabase.from('profiles').select('id').eq('type', 'LOA').eq(`character`, 0).neq('account', '');
        const { error: initError }: any = await supabase.rpc(`insert_contents`, {
            p_category: category,
            p_parent: contents,
            p_profiles: data?.map(d => d.id)
        });
        if (initError) { throw new CustomError('loa/event => insert error', initError, 500) }
        return CustomResponse();
    }
    catch (e: any) {
        console.log('loa/event => insert error:', e.error);
        return NextResponse.json(
            { message: e.message, data: [], },
            { status: e.status },
        );
    }
}

export async function DELETE(req: NextRequest) {
    if (!isPassword(req.headers.get("X-User-Password"))) { return passwordError; }
    try {
        const { content } = await req.json();
        const category = await getCategories('LOA', 'EVENT_ACTIVE');
        const { error: deleteError }: any = await supabase.rpc(`delete_parent_contents`, {
            p_category: category,
            p_parent: content,
        })
        if (deleteError) { throw new CustomError('loa/event => delete error', deleteError, 500) }
        return CustomResponse();
    }
    catch (e: any) {
        console.log('loa/event => delete error:', e.error);
        return NextResponse.json(
            { message: e.message, data: [], },
            { status: e.status },
        );
    }
}

export async function PUT(req: NextRequest) {
    if (!isPassword(req.headers.get("X-User-Password"))) { return passwordError; }
    try {
        const { id } = await req.json();
        const { data } = await supabase.from('contents').select('etc').eq('id', id).single();
        const { error } = await supabase
            .from('contents')
            .update({ etc: { ...data?.etc, is_clear: !data?.etc.is_clear } })
            .eq('id', id);
        if (error) { throw new CustomError('loa/event => update error', error, 500) }
        return CustomResponse();
    }
    catch (e: any) {
        console.log('loa/event => insert error:', e.error);
        return NextResponse.json(
            { message: e.message, data: [], },
            { status: e.status },
        );
    }
}