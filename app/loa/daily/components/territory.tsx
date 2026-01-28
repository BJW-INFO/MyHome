import { useCallback, useEffect, useEffectEvent, useState } from "react";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import duration from 'dayjs/plugin/duration';
import { custemAxios } from "@/utils";

dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);

function Timer({territory, update }: any) {
    const [time, setTime] = useState({ hour: 0, minute: 0 });

    const timeEffect = useEffectEvent(() => {
        if (territory.etc.expires === undefined) { return; }
        const expires = dayjs(territory.etc.expires);
        const remaining = expires.diff(dayjs(new Date()), 'minute');
        if (remaining > 0) {
            setTime({
                hour: Math.floor(remaining / 60),
                minute: remaining % 60,
            })
        }
    })

    useEffect(() => {
        timeEffect();
        const setTime = setInterval(() => { timeEffect(); }, 60000);
        return () => { clearInterval(setTime); };
    }, [territory])

    const onChageProfile = useCallback(async (e) => {
        e.stopPropagation();
        const response = await custemAxios.put<{ message: string; data: any[] }>(
            `/loa/daily/territory`,
            { id: territory.id, profile: e.target.value }
        )
        if (response.status !== 200) { throw new Error(response.data.message); }
        update();
    }, [territory])

    const onChageTime = useCallback(async (e) => {
        e.stopPropagation();
        const { profile } = territory;
        if (confirm(`${profile.account + String(profile.character).padStart(2, '0')} 의 항해를 시작 하시겠습니까?`)) {
            const [hours, minutes] = e.target.value.split(':').map(Number);
            const expires = dayjs().tz('Asia/Seoul').add(hours, 'hour').add(minutes, 'minute');
            const response = await custemAxios.post<{ message: string; data: any[] }>(
                `/loa/daily/territory`,
                { id: territory.id, expires: expires.format() }
            )
            if (response.status !== 200) { throw new Error(response.data.message); }
            update();
        }
    }, [territory])

    const onClickTime = useCallback(async(e) => {
        e.stopPropagation();
        if(territory.etc.expires === undefined) { return; }
        const { profile } = territory;
        if (confirm(`${profile.account + String(profile.character).padStart(2, '0')} 의 시간을 초기화 하시겠습니까?`)) {
            const response = await custemAxios.post<{ message: string; data: any[] }>(
                `/loa/daily/territory`,
                { id: territory.id }
            )
            if (response.status !== 200) { throw new Error(response.data.message); }
            update();
        }
    }, [territory])

    return (<>
        <li
            key={territory.id}
            className="transition-all w-[33%] duration-600 flex flex-row justify-between items-center text-[0.75rem] group rounded-md p-1 pr-1.5 pl-1.5"
            onClick={(e) => onClickTime(e)}
        >
            {territory.etc.expires === undefined
                ? (<>
                    <select
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => onChageProfile(e)}
                    >
                        {territory.profiles.map((o, i) =>
                            <option key={i} value={o.id}>
                                {o.account}
                                {String(o.character).padStart(2, '0')}
                            </option>
                        )}
                    </select>
                    <div className="flex flex-row items-center">
                        <p className='font-bold'>▶️</p>
                        <select
                            className="p-0.5"
                            onClick={(e) => e.stopPropagation()}
                            onChange={(e) => onChageTime(e)}
                        >
                            {Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0') + ':00').map((o, i) =>
                                <option key={i} value={o}>{o}</option>
                            )}
                        </select>
                    </div>
                </>)
                : (<>
                    {territory.profile.account}{String(territory.profile.character).padStart(2, '0')}
                    <b>
                        <span className="pr-1">⏹️</span>
                        {String(time.hour).padStart(2, '0')}:{String(time.minute).padStart(2, '0')}
                    </b>
                </>)
            }
        </li >
    </>)
}

export function Territory({ data }: any) {
    const [territory, setTerritory] = useState<any>([]);
    const getTerritory = useEffectEvent(async () => {
        try {
            const response = await custemAxios.get<{ message: string; data: any[] }>(`/loa/daily/territory`)
            if (response.status !== 200) { throw new Error(response.data.message); }
            setTerritory(response.data.data);
        } catch (error) {
            console.error("데이터 패치 실패:", error);
        }
    })
    useEffect(() => {
        if (data !== undefined) { setTerritory(data); } else { getTerritory(); }
    }, []);

    if (territory.length === 0) { return; }
    return (<>
        <ul className='flex flex-row gap-2 items-center'>
            {territory.map((o, i) => <Timer territory={o} update={getTerritory} />)}
        </ul>
    </>)
}
