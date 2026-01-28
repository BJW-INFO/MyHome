module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/hooks/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// export { useAuth } from './useAuth';
}),
"[project]/utils/routers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "routers",
    ()=>routers
]);
const routers = [
    {
        path: '/real',
        label: "👤 REAL"
    },
    {
        path: '/loa',
        label: '🎮 Lost Ark',
        children: [
            {
                path: '/event',
                label: '🎉 EVENT'
            },
            {
                path: '/daily',
                label: '🚶 DAILY'
            },
            {
                path: '/weekly',
                label: '📅 WEEKLY'
            }
        ]
    },
    {
        path: '/maple',
        label: '🍁 Maple Story',
        children: [
            {
                path: '/event',
                label: '🎉 EVENT'
            },
            {
                path: '/daily',
                label: '🚶 DAILY'
            },
            {
                path: '/weekly',
                label: '📅 WEEKLY'
            }
        ]
    }
];
}),
"[project]/utils/deepCopy.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**깊은 복사*/ __turbopack_context__.s([
    "deepCopy",
    ()=>deepCopy
]);
const deepCopy = (obj)=>JSON.parse(JSON.stringify(obj));
}),
"[project]/utils/daysEnum.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DayOfWeek",
    ()=>DayOfWeek,
    "WeekCycles",
    ()=>WeekCycles
]);
var WeekCycles = /*#__PURE__*/ function(WeekCycles) {
    WeekCycles[WeekCycles["DAILY"] = 0] = "DAILY";
    WeekCycles[WeekCycles["WEEKLY"] = 1] = "WEEKLY";
    WeekCycles[WeekCycles["MONTHLY"] = 2] = "MONTHLY";
    WeekCycles[WeekCycles["Quarterly"] = 3] = "Quarterly";
    return WeekCycles;
}({});
var DayOfWeek = /*#__PURE__*/ function(DayOfWeek) {
    DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
    return DayOfWeek;
}({});
}),
"[project]/utils/custemStorage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**Client의 Storage 사용을 간소화*/ __turbopack_context__.s([
    "custemStorage",
    ()=>custemStorage
]);
const custemStorage = {
    local: {
        /**찾기 후 생성*/ get: (key, value = null)=>{
            if ("TURBOPACK compile-time truthy", 1) return;
            //TURBOPACK unreachable
            ;
        },
        /**생성*/ set: (key, value)=>{
            if ("TURBOPACK compile-time truthy", 1) return;
            //TURBOPACK unreachable
            ;
            const valueToJson = undefined;
        },
        /**단일 삭제*/ remove: (key)=>{
            if ("TURBOPACK compile-time truthy", 1) return;
            //TURBOPACK unreachable
            ;
        },
        /**모두 삭제*/ clear: ()=>{
            if ("TURBOPACK compile-time truthy", 1) return;
            //TURBOPACK unreachable
            ;
        }
    }
};
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/utils/aixos/custem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "custemAxios",
    ()=>custemAxios
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$custemStorage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/custemStorage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
;
const instance = ()=>{
    const init = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
        baseURL: '/api',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    init.interceptors.request.use((config)=>{
        config.headers['X-User-Password'] = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$custemStorage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["custemStorage"].local.get('auth');
        return config;
    });
    return init;
};
const custemAxios = instance();
}),
"[project]/utils/jotai/auth.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authAtom",
    ()=>authAtom,
    "authLoadingAtom",
    ()=>authLoadingAtom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jotai/esm/vanilla.mjs [app-ssr] (ecmascript)");
`use client`;
;
const authAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["atom"])(false);
const authLoadingAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["atom"])(false);
}),
"[project]/utils/index.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$routers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/routers.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$deepCopy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/deepCopy.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$daysEnum$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/daysEnum.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$custemStorage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/custemStorage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$aixos$2f$custem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/aixos/custem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$jotai$2f$auth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/jotai/auth.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$routers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/routers.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$ListBulletIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListBulletIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/ListBulletIcon.js [app-ssr] (ecmascript) <export default as ListBulletIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js [app-ssr] (ecmascript) <export default as XMarkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Header() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { initAuth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [paths, setPaths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleOutsideClick = (event)=>{
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setHover(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return ()=>{
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [
        hover
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setPaths(pathname.split('/').filter(Boolean));
    }, [
        pathname
    ]);
    const handleTogleClick = (e)=>{
        setHover((prev)=>!prev);
    };
    const handleClick = (e, parent, child = ``)=>{
        e.stopPropagation();
        setHover(false);
        router.push(parent + child);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center text-gray-600 bg-slate-300 p-2 shadow-md w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row items-center gap-3 w-full md:w-[768px] lg:w-[1024px] justify-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$ListBulletIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListBulletIcon$3e$__["ListBulletIcon"], {
                        className: "h-7 w-7",
                        onClick: handleTogleClick
                    }, void 0, false, {
                        fileName: "[project]/app/components/header.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-gray-600 text-xl font-bold",
                        children: paths.length === 0 ? `🏠 HOME` : __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$routers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routers"].find((router)=>router.path === `/${paths[0]}`)?.label
                    }, void 0, false, {
                        fileName: "[project]/app/components/header.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    hover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: menuRef,
                        className: "bg-white min-w-50 pt-1 pb-2 shadow-xl rounded-lg border border-gray-100 transition-shadow duration-300 fixed top-10 z-50 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-sm pl-3 pr-6 pb-1 border-b border-b-gray-200 hover:bg-gray-200 ${paths.length === 0 ? `font-bold` : ``}`,
                                onClick: (e)=>{
                                    handleClick(e, `/`);
                                },
                                children: "🏠 HOME"
                            }, void 0, false, {
                                fileName: "[project]/app/components/header.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$routers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routers"].map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: `text-sm pt-1 pl-3 pr-6 pb-1 border-b border-b-gray-200 group-hover:bg-gray-200 ${`/${paths[0]}` === o.path ? `font-bold` : ``}`,
                                            onClick: (e)=>{
                                                handleClick(e, o.path);
                                            },
                                            children: o.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/header.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        o.children?.map((obj, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: `text-sm pt-0 pl-7 pr-6 pb-0 border-b-gray-200 hover:bg-gray-100 max-h-0 group-hover:border-b group-hover:pt-1 group-hover:pb-1 group-hover:max-h-96 overflow-hidden transition-all duration-100 linear ${`/${paths[0]}` === o.path && `/${paths[1]}` === obj.path ? `font-bold` : ``}`,
                                                onClick: (e)=>{
                                                    handleClick(e, o.path, obj.path);
                                                },
                                                children: obj.label
                                            }, index, false, {
                                                fileName: "[project]/app/components/header.tsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/components/header.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/header.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__["XMarkIcon"], {
                        className: "ml-auto h-6 w-6",
                        onClick: initAuth
                    }, void 0, false, {
                        fileName: "[project]/app/components/header.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/header.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/header.tsx",
            lineNumber: 41,
            columnNumber: 5
        }, this)
    }, void 0, false);
} // <nav className='flex w-full md:w-[768px] lg:w-[1024px] justify-start'>
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
}),
"[project]/utils/zustand/auths.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth,
    "useLoaAuth",
    ()=>useLoaAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$aixos$2f$custem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/aixos/custem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$custemStorage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/custemStorage.tsx [app-ssr] (ecmascript)");
;
;
;
const useAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        state: undefined,
        message: `auth error`,
        password: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$custemStorage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["custemStorage"].local.get(`auth`, ``),
        init: ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$custemStorage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["custemStorage"].local.remove(`auth`);
            set(()=>({
                    state: undefined,
                    message: `auth error`
                }));
        },
        fetch: async ({ password } = {})=>{
            let result = false;
            set({
                state: undefined,
                message: 'auth loding...'
            });
            try {
                const response = await axios.post('/api', {
                    password: password
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.status === 200) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$custemStorage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["custemStorage"].local.set(`auth`, password);
                    result = true;
                }
            } catch (e) {}
            set(()=>({
                    state: result
                }));
        }
    }));
const useLoaAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        state: undefined,
        message: `lostArk API error`,
        init: async ()=>{
            let result = false;
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$aixos$2f$custem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["custemAxios"].get(`/loa`);
                if (response.status === 200) {
                    result = true;
                }
            } catch (e) {}
            set(()=>({
                    state: result
                }));
        }
    }));
}),
"[project]/app/components/authProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$zustand$2f$auths$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/zustand/auths.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Loading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: "로딩 보여주기"
    }, void 0, false);
}
const AuthProvider = ({ children })=>{
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$zustand$2f$auths$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const loaAPI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$zustand$2f$auths$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLoaAuth"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loaAPI.init?.();
        auth.fetch?.({
            password: auth.password()
        });
    }, []);
    const onSubmitAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (e)=>{
        e.preventDefault();
        if (auth === undefined) {
            return alert("🏃 Please Wait, Loading");
        }
        const { password } = Object.fromEntries(new FormData(e.currentTarget));
        auth.fetch?.({
            password: password
        });
    }, [
        auth
    ]);
    if (auth.state === undefined || auth.state) {} else {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    } // 인증 확인
// /**인증 되지 않았을때 인증 페이지로 Reddirect*/
// const notAuthEffectEvent = useEffectEvent(() => {
//   if (!isAuth && pathname !== '/') {
//     router.push('/');
//     initAuth();
//   }
// })
// useEffect(() => {
//   notAuthEffectEvent();
// }, [isAuth, pathname, router])
// /**Login(Password) API 송신*/
// const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   if (loding) { alert("🏃 Please Wait, Loading"); return; }
//   const pw = new FormData(event.target as HTMLFormElement).get('password') as string;
//   if (pw) { login(pw) } else { alert("Enter Your Account Key."); }
// }, [login, loding])
// if (!isAuth) { // 인증되지 않았을때
//   return (<>
//     <div className='flex h-screen justify-center items-center'>
//       <section className='card flex flex-col gap-2'>
//         <h1 className='text-lg font-bold'>
//           {loding ? `🏃 Please Wait, Loading` : `👉️ Sign In To Your Account`}
//         </h1>
//         {loding
//           ? (
//             <div className='flex gap-2 w-[100%] h-10 justify-center items-center'>
//               <div className='w-5 h-5 rounded-xl bg-indigo-400 animate-bounce' />
//               <div className='w-5 h-5 rounded-xl bg-violet-400 animate-bounce' />
//               <div className='w-5 h-5 rounded-xl bg-green-300 animate-bounce' />
//             </div>
//           )
//           : (
//             <form
//               className='flex flex-col sm:flex-row gap-2 w-[100%]'
//               onSubmit={handleSubmit}
//             >
//               <input type='password' name='password' className='p-2 bg-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-sky-300' />
//               <button className='p-2 pl-5 text-sm font-bold text-gray-600 pr-5 bg-sky-300 rounded-sm'>
//                 Login
//               </button>
//             </form>
//           )
//         }
//         <a className='text-sm text-cyan-600 self-end'>Contact Support?</a>
//       </section>
//     </div>
//   </>)
// }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dbedb0ec._.js.map