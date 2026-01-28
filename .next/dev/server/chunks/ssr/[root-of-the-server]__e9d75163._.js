module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center bg-slate-500 text-white p-2 shadow-md w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex w-full md:w-[768px] lg:w-[1024px] justify-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex flex-row w-full space-x-3",
                    children: routers.map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {}, i, false, {
                            fileName: "[project]/app/components/header.tsx",
                            lineNumber: 11,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/header.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/header.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/header.tsx",
            lineNumber: 7,
            columnNumber: 5
        }, this)
    }, void 0, false);
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e9d75163._.js.map