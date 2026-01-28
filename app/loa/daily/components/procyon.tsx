import { custemAxios, custemStorage } from "@/utils";
import { useCallback, useEffect, useEffectEvent, useState } from "react";
import { BarsArrowDownIcon, BarsArrowUpIcon } from "@heroicons/react/24/outline";

export function Procyon({ data }: any) {
    const [onlyGold, setOnlyGold] = useState<boolean>(custemStorage.local.get(`onlyGold`, true));
    const [procyons, setProcyons] = useState<any[]>([]);

    const procyonEffect = useEffectEvent(async () => {
        try {
            const response = await custemAxios.get<{ message: string; data: any[] }>(`/loa/daily/procyon`)
            if (response.status !== 200) { throw new Error(response.data.message); }
            setProcyons(response.data.data);
        } catch (error) {
            console.error("데이터 패치 실패:", error);
        }
    })

    useEffect(() => {
        if (data !== undefined) { setProcyons(data); } else { procyonEffect(); }
    }, [])

    const onClickOnlyGold = useCallback(() => {
        const result = !onlyGold
        setOnlyGold(result);
        custemStorage.local.set(`onlyGold`, result);
    }, [onlyGold])

    const selectProcyon = (isWeekDay: boolean) => {
        if (!isWeekDay) return procyons;
        const todayAt = new Date().getHours();
        return todayAt < 12 ? procyons.slice(0, 3) : procyons.slice(3, 6);
    }

    if (procyons.length === 0) return;
    else {
        console.log(procyons);
        const isWeekDay: boolean = procyons.length === 6;
        const procyon = selectProcyon(isWeekDay);
        const goldProcyon: any = [];
        // const goldProcyon = procyon.filter(island => island.reward.some(r => r.name.includes('골드')));
        return (<>
            <div className='w-[100%] bg-white border border-gray-200 rounded-xl shadow-lg p-2'>
                <ul>
                    <li className='flex flex-row items-start justify-between gap-1 pb-1 border-solid border-b-1'>
                        <div className='flex flex-row gap-1 text-sm'>
                            <b className='text-sm'>🧭 프로키온</b>
                            {procyon.map((o, i) =>
                                <div key={i} className={`transition-all duration-600 flex flex-col text-[0.75rem] group rounded-md pt-0.25 pb-0.25 pl-1.5 pr-1.5`}>
                                    <p className='whitespace-nowrap'>{o.name}</p>
                                </div>
                            )}
                        </div>
                        <div className='flex flex-row gap-1 text-xs items-center text-orange-400' onClick={onClickOnlyGold}>
                            only gold
                        </div>
                    </li>
                    {onlyGold && goldProcyon.length === 0 && <li className='text-xs pt-2 text-gray-500'> 당일 골드 보상이 없습니다.</li>}
                    {onlyGold ? goldProcyon : procyon.map((o, i) =>
                        <li key={i} onClick={() => { }} className='flex flex-row tems-center justify-between p-0.5 border-dashed border-b-1 hover:bg-gray-100'>
                            {/* <p className='text-sm'>{obj.account}{String(.character).padStart(2, '0')}</p> */}
                            ddd
                        </li>
                    )}
                </ul>
            </div>
        </>)
    }
}