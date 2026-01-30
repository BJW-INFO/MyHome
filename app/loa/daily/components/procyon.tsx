import { custemAxios, custemStorage } from "@/utils";
import { useCallback, useEffect, useEffectEvent, useState } from "react";
import { procyonProp } from "@/app/api/loa/daily/procyon/route";
import { ProfileProp } from "@/app/api/loa/props";

//! 커스텀 리스폰 다심만들기

export function Procyon({ defultData = undefined }: any) {
    const [onlyGold, setOnlyGold] = useState<boolean>(custemStorage.local.get(`onlyGold`, true));
    const [data, setData] = useState<procyonProp>({
        profiles: [],
        procyons: [],
    });

    const getDataEffect = useEffectEvent(async () => {
        try {
            const response = await custemAxios.get<{ message: string; data: any }>(`/loa/daily/procyon`)
            if (response.status !== 200) { throw new Error(response.data.message); }
            setData(response.data.data);
        } catch (error) {
            console.error("데이터 패치 실패:", error);
        }
    })

    useEffect(() => {
        if (defultData !== undefined) { setData(defultData); } else { getDataEffect(); }
    }, [])

    const onClickOnlyGold = useCallback(() => {
        setOnlyGold(!onlyGold);
        custemStorage.local.set(`onlyGold`, !onlyGold);
    }, [onlyGold])

    const onChangetoggle = useCallback(async(e:React.ChangeEvent<HTMLInputElement>,profile:ProfileProp)=>{
        e.stopPropagation();
        // const response = await custemAxios.put(`/loa/daily/procyon`);
    },[])

    const selectProcyon = useCallback(() => {
        const { procyons } = data;
        if (procyons.length === 6) {
            return new Date().getHours() < 12 ? procyons.slice(0, 3) : procyons.slice(3, 6);
        } else { return procyons; }
    }, [data])

    if (data.profiles.length === 0) { return; }
    else {
        const profiles = data.profiles;
        const procyons = onlyGold
            ? selectProcyon().filter(island => island.reward.some(r => r.name.includes('골드')))
            : selectProcyon()
        return (<>
            <div className='w-[100%] bg-white border border-gray-200 rounded-xl shadow-lg p-2'>
                <ul>
                    <li className='flex flex-row items-start justify-between gap-1 pb-1 border-solid border-b-1'>
                        <div className='flex flex-row gap-1 text-sm'>
                            <b className='text-sm'>🧭 프로키온</b>
                            {procyons.map((o, i) =>
                                <div key={i} className={`transition-all duration-600 flex flex-col text-[0.75rem] group rounded-md pt-0.25 pb-0.25 pl-1.5 pr-1.5`}>
                                    <p className='whitespace-nowrap'>{o.name}</p>
                                </div>
                            )}
                        </div>
                        <div className='flex flex-row gap-1 text-xs items-center text-orange-400' onClick={onClickOnlyGold}>
                            only gold
                        </div>
                    </li>
                    {onlyGold
                        ? procyons.length === 0 && <li className='text-xs pt-2 text-gray-500'> 당일 골드 보상이 없습니다.</li>
                        : profiles.map((value, index) =>
                            <li key={index}>
                                {value.account + String(value.character).padStart(2, `0`)}
                                <input 
                                    type="checkbox" 
                                    value={value.etc.is_clear || false }
                                    onChange={(e)=>onChangetoggle(e,value)}
                                />
                            </li>
                        )
                    }
                </ul>
            </div>
        </>)
    }
}