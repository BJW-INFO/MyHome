'use client';
import { useAuth } from "@/utils/zustand/auths";
import { routers } from "@/utils";
import { 
  ListBulletIcon,
  XMarkIcon
} from '@heroicons/react/24/solid';

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const auth = useAuth();
  const [hover, setHover] = useState(false);
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) { setHover(false); }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => { document.removeEventListener('mousedown', handleOutsideClick); };
  }, [hover]);

  useEffect(() => {
    setPaths(pathname.split('/').filter(Boolean))
  }, [pathname])

  const handleTogleClick = (e: React.MouseEvent) => { setHover(prev => !prev); }

  const handleClick = (e: React.MouseEvent, parent: string, child: string = ``) => {
    e.stopPropagation();
    setHover(false);
    router.push(parent+child);
  }

  return (<>
    <div className='flex justify-center text-gray-600 bg-slate-300 p-2 shadow-md w-full'>
      <div className="flex flex-row items-center gap-3 w-full md:w-[768px] lg:w-[1024px] justify-start">
        <ListBulletIcon className="h-7 w-7" onClick={handleTogleClick} />
        <h1 className="text-gray-600 text-xl font-bold">
          {paths.length === 0 ? `🏠 HOME` : routers.find(router => router.path === `/${paths[0]}`)?.label}
        </h1>
        {hover && (
          <div ref={menuRef} className="bg-white min-w-50 pt-1 pb-2 shadow-xl rounded-lg border border-gray-100 transition-shadow duration-300 fixed top-10 z-50 text-sm">
            <p
              className={`text-sm pl-3 pr-6 pb-1 border-b border-b-gray-200 hover:bg-gray-200 ${paths.length === 0 ? `font-bold` : ``}`}
               onClick={(e) => { handleClick(e,`/`)}}
            >
              🏠 HOME
            </p>
            {routers.map((o, i) =>
              <ul key={i} className="group">
                <li
                  className={`text-sm pt-1 pl-3 pr-6 pb-1 border-b border-b-gray-200 group-hover:bg-gray-200 ${`/${paths[0]}` === o.path ? `font-bold` : ``}`}
                  onClick={(e) => { handleClick(e, o.path) }}
                >
                  {o.label}
                </li>
                {o.children?.map((obj, index) =>
                  <li
                    key={index}
                    className={`text-sm pt-0 pl-7 pr-6 pb-0 border-b-gray-200 hover:bg-gray-100 max-h-0 group-hover:border-b group-hover:pt-1 group-hover:pb-1 group-hover:max-h-96 overflow-hidden transition-all duration-100 linear ${ `/${paths[0]}` === o.path && `/${paths[1]}` === obj.path ? `font-bold` : ``}`}
                    onClick={(e) => { handleClick(e, o.path, obj.path) }}
                  >
                    {obj.label}
                  </li>
                )}
              </ul>
            )}
          </div>
        )}
        <XMarkIcon className="ml-auto h-6 w-6" onClick={()=>auth.init?.()}/>
      </div>
    </div >
  </>)
}

// <nav className='flex w-full md:w-[768px] lg:w-[1024px] justify-start'>
//   <ul className="flex flex-row w-full space-x-3">
//     {routers.map((o, i) =>
//       <li key={i}>
//         {/* <Link href={o.path} className={selectParentsClass(i)} onClick={() => onClickHendle(i, 0)}>
//           {o.label}
//         </Link> */}
//       </li>
//     )}
//   </ul>
// </nav>

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { routers } from '@utils/index';
// import { useState } from 'react';

// export function Header() {
//   const [ selet, setSelet ] = useState({
//     parent: 0, children: 0,
//   })

//   const selectParentsClass = (i: number) => {
//     let result = "hover:text-slate-200 duration-200 border-white transition-all ";
//     return result += (selet.parent === i ? "font-bold" : "font-normal");
//   };

//   const selectChildrenClass = (i: number) => {
//     let result = "text-slate-600 hover:text-slate-800 duration-200 border-white transition-all ";
//     return result += (selet.children === i ? "font-bold" : "font-normal");
//   }

//   const onClickHendle = (parentNum:number,childrenNum:number) => {
//     setSelet({ parent:parentNum, children:childrenNum });
//   }

//   return (<>
//     {/* parent header */}
//     <div className='flex justify-center bg-slate-500 text-white p-2 shadow-md w-full'>
//       <nav className='flex w-full md:w-[768px] lg:w-[1024px] justify-start'>
//         <ul className="flex flex-row w-full space-x-3">
//           {routers.map((o, i) =>
//             <li key={i}>
//               <Link href={o.path} className={selectParentsClass(i)} onClick={() => onClickHendle(i,0)}>
//                 {o.label}
//               </Link>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </div>
//     {/* children header */}
//     {routers[selet.parent].children && (
//       <div className='flex justify-center px-2 px-1 shadow-md w-full'>
//         <nav className='flex w-full md:w-[768px] lg:w-[1024px] justify-start text-sm'>
//           <ul className="flex flex-row w-full space-x-3">
//             {routers[selet.parent]?.children?.map((o, i) =>
//               <li key={i}>
//                 <Link href={routers[selet.parent].path+o.path} className={selectChildrenClass(i)} onClick={()=> onClickHendle(selet.parent,i)}>
//                   {o.label}
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </nav>
//       </div>
//     )}
//   </>);
// }