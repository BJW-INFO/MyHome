module.exports = [
"[project]/app/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
'use client';
function Header() {
// return (<>
//   <div className='flex justify-center bg-slate-500 text-white p-2 shadow-md w-full'>
//     <nav className='flex w-full md:w-[768px] lg:w-[1024px] justify-start'>
//       <ul className="flex flex-row w-full space-x-3">
//         {routers.map((o, i) =>
//           <li key={i}>
//             {/* <Link href={o.path} className={selectParentsClass(i)} onClick={() => onClickHendle(i, 0)}>
//               {o.label}
//             </Link> */}
//           </li>
//         )}
//       </ul>
//     </nav>
//   </div>
// </>)
} // import Link from 'next/link';
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
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/utils/routers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "routers",
    ()=>routers
]);
const routers = [
    {
        path: '/',
        label: 'Home'
    },
    {
        path: '/real',
        label: "Real",
        children: [
            {
                path: '',
                label: "ALL"
            },
            {
                path: '/repeal',
                label: 'Repeal'
            }
        ]
    },
    {
        path: '/loa',
        label: 'Lost Ark',
        children: [
            {
                path: '',
                label: "ALL"
            },
            {
                path: '/event',
                label: 'Event'
            },
            {
                path: '/daily',
                label: 'Daily'
            },
            {
                path: '/weekly',
                label: 'Weekly'
            }
        ]
    },
    {
        path: '/maple',
        label: 'Maple Story',
        children: [
            {
                path: '',
                label: "ALL"
            },
            {
                path: '/daily',
                label: 'Daily'
            },
            {
                path: '/weekly',
                label: 'Weekly'
            }
        ]
    }
];
}),
"[project]/utils/deepCopy.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deepCopy",
    ()=>deepCopy
]);
const deepCopy = (obj)=>JSON.parse(JSON.stringify(obj));
}),
"[project]/utils/daysEnum.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DaysEnum",
    ()=>DaysEnum
]);
var DaysEnum = /*#__PURE__*/ function(DaysEnum) {
    DaysEnum[DaysEnum["Sunday"] = 0] = "Sunday";
    DaysEnum[DaysEnum["Monday"] = 1] = "Monday";
    DaysEnum[DaysEnum["Tuesday"] = 2] = "Tuesday";
    DaysEnum[DaysEnum["Wednesday"] = 3] = "Wednesday";
    DaysEnum[DaysEnum["Thursday"] = 4] = "Thursday";
    DaysEnum[DaysEnum["Friday"] = 5] = "Friday";
    DaysEnum[DaysEnum["Saturday"] = 6] = "Saturday";
    DaysEnum[DaysEnum["Daily"] = 7] = "Daily";
    DaysEnum[DaysEnum["Weekly"] = 8] = "Weekly";
    DaysEnum[DaysEnum["Monthly"] = 9] = "Monthly";
    return DaysEnum;
}({});
}),
"[project]/utils/costemStorage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "costemStorage",
    ()=>costemStorage
]);
const costemStorage = {
    local: {
        get: (key, value = null)=>{
            if (localStorage.getItem(key) === null) {
                costemStorage.local.set(key, value);
            }
            return localStorage.getItem(key);
        },
        set: (key, value)=>{
            const valueToJson = JSON.stringify(value);
            localStorage.setItem(key, valueToJson);
        }
    }
};
}),
"[project]/utils/index.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$routers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/routers.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$deepCopy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/deepCopy.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$daysEnum$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/daysEnum.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$costemStorage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/costemStorage.tsx [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/hooks/useAuth.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$costemStorage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/costemStorage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const useAuth = ()=>{
    const [auth, setAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$costemStorage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["costemStorage"].local.get('authPw', ''));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log(auth);
    }, [
        auth
    ]);
};
}),
"[project]/app/components/authProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAuth.tsx [app-ssr] (ecmascript)");
'use client';
;
;
const AuthProvider = ({ children })=>{
    // 일단 세션을 사용할 것인가.
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
// const [user, setUser] = useState<User | null>(null);
// const isAuthenticated = !!user;
// // 로그인 상태 복원 로직 (localStorage 등)
// useEffect(() => {
//   // 이 로직은 브라우저에서만 실행되어야 합니다. (CSR)
//   const storedUser = localStorage.getItem('user');
//   if (storedUser) {
//     setUser(JSON.parse(storedUser));
//   }
// }, []);
// const login = (userData: User) => {
//   setUser(userData);
//   localStorage.setItem('user', JSON.stringify(userData));
// };
// const logout = () => {
//   setUser(null);
//   localStorage.removeItem('user');
// };
// const contextValue: AuthContextType = { user, isAuthenticated, login, logout };
// return (
//   <AuthContext.Provider value={contextValue}>
//     {children}
//   </AuthContext.Provider>
// );
};
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7dd3c429._.js.map