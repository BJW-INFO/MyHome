import { NextRequest } from "next/server";
import dayjs from "dayjs";
import { CustomError, CustomResponse, getCategories, isPassword, passwordError, scheduler } from "@api/props";
import { lostArkApi } from "@api/loa/route";
import { ProfileProp } from "@api/loa/props";

export interface procyonProp {
    profiles: ProfileProp[],
    procyons: {
        name: string,
        icon: string,
        reward: {
            name: string,
            img: string,
        }[],
    }[],
}

export const procyonPatten = async (calendars: any) => {
    const today = dayjs().tz('Asia/Seoul');
    let result: procyonProp = { profiles: [], procyons: [] };
    try {
        result.profiles = await scheduler({
            category: { type: 'LOA', name: 'PROCYON' },
            callback: async ({ contents }) => {
                if (contents === false) { return []; }
                return contents.map((content: any) => ({
                    id: content.id,
                    account: content.profile.account,
                    character: content.profile.character,
                    etc: content.etc,
                }));
            }
        });
        const todayCalendars = calendars.filter((procyon: any) => {
            if (procyon.CategoryName !== '모험 섬') return false;
            return procyon.StartTimes.some((time: string) => {
                const startTime = dayjs(time).tz('Asia/Seoul');
                return startTime.isSame(today, 'day');
            });
        })
        if (todayCalendars.length === 6) {
            todayCalendars.sort((a: any, b: any) => { return new Date(a.StartTimes[0]).getTime() - new Date(b.StartTimes[0]).getTime(); });
        }
        result.procyons = todayCalendars.map((todayCalendar: any) => {
            return {
                name: todayCalendar.Location,
                icon: todayCalendar.ContentsIcon,
                reward: todayCalendar.RewardItems[0].Items.map((item: any) => ({
                    name: item.Name,
                    img: item.Icon
                })),

            }
        })
    } catch (error: any) { throw error; }
    return result;
}

export async function GET(req: NextRequest) {
    if (!isPassword(req.headers.get("X-User-Password"))) { return passwordError; }
    try {
        const calendars = await lostArkApi.calendar();
        const procyon = await procyonPatten(calendars);
        return CustomResponse(procyon);
    } catch (e: any) {
        return new CustomError(`loa/daily/territory => get error`, e.error, e.status);
    }
}

export async function PUT(req: NextRequest) {
    if (!isPassword(req.headers.get("X-User-Password"))) { return passwordError; }
    try {
        // const calendars = await lostArkApi.calendar();
        // const procyon = await procyonPatten(calendars);
        // 업데이트 
        return CustomResponse();
    } catch (e: any) {
        return new CustomError(`loa/daily/territory => get error`, e.error, e.status);
    }
}