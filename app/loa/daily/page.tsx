
'use client';
import { custemAxios } from "@/utils";
import { useEffect, useEffectEvent, useState } from "react";
import { Territory } from "./components/territory";
import { Procyon } from "./components/procyon";

export default function Daily() {
  const [dailys, setDailys] = useState<any>();

  const getDailys = useEffectEvent(async () => {
    try {
      const response = await custemAxios.get<{ message: string; data: any[] }>('/loa/daily');
      if (response.status !== 200) { throw new Error(response.data.message); }
      
      setDailys(response.data.data);
    }
    catch (error) { console.error("loa/event api get error =>", error); }
  })
  
  useEffect(() => { getDailys(); }, [])

  if(!dailys) return;
  return (<>
    <Territory data={dailys.territory} />
    <Procyon />


  </>);
}