'use client';

import { custemAxios } from "@/utils";
import { useCallback, useEffect, useEffectEvent, useState } from "react";

export default function Event() {
    const [events, setEvents] = useState<any[] | []>([]);

    const getEventEffect = useEffectEvent(async () => {
        try {
            const response = await custemAxios.get<{ message: string; data: any[] }>('/loa/event');
            if (response.status !== 200) { throw new Error(response.data.message); }
            setEvents(response.data?.data as any[]);
        }
        catch (error) { console.error("loa/event api get error =>", error); }
    })

    useEffect(() => { getEventEffect(); }, [])

    const onChangeHandle = useCallback(async (e: React.ChangeEvent<HTMLSelectElement>, o: any) => {
        e.stopPropagation();
        try {
            switch (e.target.value) {
                case 'include': {
                    const response = await custemAxios.post<{ message: string; }>('/loa/event', { contents: o.id } as any);
                    if (response.status !== 200) { throw new Error(response.data.message); }
                } break;
                case `none`: {
                    const response = await custemAxios.delete(`/loa/event`, { data: { content: o.id } } as any);
                    if (response.status !== 200) { throw new Error((response.data as { message: string }).message); }
                } break;
            }
            getEventEffect();
        }
        catch (error) { console.error("loa/event api post, delet, error =>", error); }
    }, []);

    const onClickHandle = useCallback(async (e: any, o: any) => {
        e.stopPropagation();
        try {
            const response = await custemAxios.put<{ message: string; }>('/loa/event', { id: o.id } as any);
            if (response.status !== 200) { throw new Error(response.data.message); }
            getEventEffect();
        }
        catch (error) { console.error("loa/event api post, delet, error =>", error); }
    }, []);


    if (events.length === 0) return;
    const todayEvent = events.filter(item => item.profile && item.profile.length > 0);
    console.log(events);
    return (<>
        {todayEvent.length > 0 && (
            <ul className='flex flex-col w-[100%] bg-white border border-gray-200 rounded-ml shadow-lg p-2'>
                <li className='flex flex-row items-start justify-between pb-1 border-solid border-b-1 text-sm font-bold'>
                    🎁 Today Event
                </li>
                {events.filter(item => item.profile && item.profile.length > 0).map((o, i) =>
                    <li key={i} className={`duration-600 items-center flex flex-row text-[0.75rem] mt-1.5 group rounded-md justify-between`}>
                        <p>{o.etc.title}
                            <small> {o.etc.date.end.substring(0, 10).replace(/-/g, '.')}</small>
                        </p>
                        <ul className="flex flex-row gap-2">
                            {o.profile.map((obj: any, key: any) =>
                                <li
                                    key={key}
                                    className={`rounded-sm br-1 pr-2 pl-2 ${obj.etc.is_clear ? `bg-blue-200` : `bg-slate-200`}`}
                                    onClick={(e) => onClickHandle(e, obj)}
                                >
                                    {obj.profiles.account}
                                    {String(obj.profiles.character).padStart(2, '0')}
                                </li>
                            )}
                        </ul>
                    </li>
                )}
            </ul>
        )}
        <ul className="flex flex-row flex-wrap pb-4 pt-2">
            {events.map((o, i) =>
                <li key={i} className="w-[49%] mr-[1%] mb-2 min-w-80 h-45 overflow-hidden rounded-md bg-gray-200">
                    <span className="flex flex-row text-sm mt-1 mb-1 pl-1 pr-2 justify-between">
                        <select onChange={(e) => onChangeHandle(e, o)} value={o.profile.length === 0 ? `none` : `include`}>
                            <option>none</option>
                            <option>include</option>
                        </select>
                    </span>
                    <a href={o.etc.link} target="_blank" rel="noopener noreferrer" className="block group relative w-[100%]">
                        <img className="absolute inset-0 w-[100%] filter group-hover:brightness-35" src={o.etc.img} />
                        <div className="text-white absolute inset-0 p-2 flex flex-col opacity-0 group-hover:opacity-100">
                            <p>{o.etc.title}</p>
                            <p>
                                {o.etc.date.start.substring(0, 10).replace(/-/g, '.') + ' ~ ' + o.etc.date.end.substring(0, 10).replace(/-/g, '.')}
                            </p>
                            <b>{o.etc.date.reward && `${o.etc.date.reward.substring(0, 10).replace(/-/g, '.')}`}</b>
                        </div>
                    </a>
                </li>
            )}
            {events.length % 2 === 1 && <li className="w-[45%] min-w-80 h-45 overflow-hidden" />}
        </ul>
    </>)
}