module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/props.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCategories",
    ()=>getCategories,
    "isPassword",
    ()=>isPassword,
    "scheduler",
    ()=>scheduler,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dayjs/dayjs.min.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dayjs/plugin/duration.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$utc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dayjs/plugin/utc.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$timezone$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dayjs/plugin/timezone.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-route] (ecmascript)");
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$utc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$timezone$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const isPassword = (pw)=>{
    return process.env.WEB_PASS_KEY === pw;
};
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])(process.env.SUPABASE_API_BASE, process.env.SUPABASE_API_KEY);
const getCategories = async (type, name)=>{
    let result = 0;
    try {
        const { data, error } = await supabase.from('categories').select('id').eq('type', type.toUpperCase()).eq('name', name.toUpperCase()).single();
        if (error) {
            throw error;
        } else {
            result = data.id;
        }
    } catch (error) {
        console.error(`getCategroies error:`, error);
    } finally{
        return result === 0 ? undefined : result;
    }
};
async function scheduler(option, callback) {
    const todayAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])().tz('Asia/Seoul');
    let category = 0;
    try {
        if (typeof option === 'number') {
            category = option;
        } else if (typeof option === 'object' && option !== null) {
            category = await getCategories(option.type, option.name);
            if (category === undefined) {
                throw new Error(`not find categories`);
            }
        }
        const { data, error } = await supabase.from(`schedulers`).select(`*`).eq(`category`, category);
        console.log(data);
    } catch (error) {
        console.error(`scheduler error:`, error);
    }
}
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
"[project]/app/api/loa/route.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lostArkApi",
    ()=>lostArkApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-route] (ecmascript)");
;
const lostArkApi = {
    event: async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].get(`${process.env.LOSTARK_API_BASE}/news/events`, {
                headers: {
                    Accept: "application/json",
                    Authorization: `bearer ${process.env.LOSTARK_API_KEY}`
                }
            });
            return response.data;
        } catch (error) {
            console.error("LostArk API Error:", error.response?.data || error.message);
        }
    }
};
}),
"[project]/utils/routers.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "routers",
    ()=>routers
]);
const routers = [
    {
        path: '/real',
        label: "👤 REAL",
        children: [
            {
                path: '/repeal',
                label: '🪙 REPEAL'
            }
        ]
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
"[project]/utils/deepCopy.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**깊은 복사*/ __turbopack_context__.s([
    "deepCopy",
    ()=>deepCopy
]);
const deepCopy = (obj)=>JSON.parse(JSON.stringify(obj));
}),
"[project]/utils/daysEnum.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/utils/costemStorage.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**Client의 Storage 사용을 간소화*/ __turbopack_context__.s([
    "costemStorage",
    ()=>costemStorage
]);
const costemStorage = {
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
"[project]/utils/costemAxios.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "costemAxios",
    ()=>costemAxios
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/index.tsx [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$costemStorage$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/costemStorage.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-route] (ecmascript)");
;
;
const costemAxios = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});
costemAxios.interceptors.request.use((config)=>{
    config.headers['X-User-Password'] = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$costemStorage$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["costemStorage"].local.get('auth');
    return config;
});
}),
"[project]/utils/jotai/auth.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authAtom",
    ()=>authAtom,
    "authLoadingAtom",
    ()=>authLoadingAtom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jotai/esm/vanilla.mjs [app-route] (ecmascript)");
`use client`;
;
const authAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["atom"])(false);
const authLoadingAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["atom"])(false);
}),
"[project]/utils/index.tsx [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$routers$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/routers.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$deepCopy$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/deepCopy.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$daysEnum$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/daysEnum.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$costemStorage$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/costemStorage.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$costemAxios$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/costemAxios.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$jotai$2f$auth$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/jotai/auth.tsx [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/app/api/loa/event/route.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "eventPatten",
    ()=>eventPatten,
    "initLostArkEventProp",
    ()=>initLostArkEventProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/props.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$loa$2f$route$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/loa/route.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/index.tsx [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$deepCopy$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/deepCopy.tsx [app-route] (ecmascript)");
;
;
;
;
const initLostArkEventProp = {
    title: '',
    img: '',
    link: '',
    explain: `how to join`,
    is_clear: false,
    date: {
        start: '',
        end: '',
        reward: ''
    }
};
const eventPatten = async (events)=>{
    let contents = [];
    try {
        /**
         * 카테고리를 가져오기
         * 카테고리에 입력된 스케쥴을 가져온다
         * 스케쥴의 etc에서 아이디값들을 가져와서 체크한다.
         * 컨텐츠엔 date: { start, end reward } 가 있다.
         */ const a = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scheduler"])({
            type: 'LOA',
            name: 'EVENT'
        }, ()=>{});
        for (const event of events){
            const initContents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$deepCopy$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopy"])(initLostArkEventProp);
            contents.push({
                ...initContents,
                title: event.Title,
                img: event.Thumbnail,
                link: event.Link,
                date: {
                    start: event.StartDate,
                    end: event.EndDate,
                    reward: event.RewardDate
                }
            });
        }
    } catch (error) {}
    return contents;
};
async function GET(req) {
    const password = req.headers.get("X-User-Password");
    if (password === null || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPassword"])(password)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Unauthorized Request",
            data: []
        }, {
            status: 401
        });
    }
    try {
        const events = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$loa$2f$route$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lostArkApi"].event();
        const response = await eventPatten(events);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'success',
            data: response
        }, {
            status: 200
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Server Internal Error Occurred',
            data: []
        }, {
            status: 500
        });
    }
} // import { initResponseProp, ResponseProp, supabase } from "app/api/props";
 // import { LOSTARK_API_BASE, LOSTARK_API_KEY } from "../props";
 // import dayjs from 'dayjs';
 // import utc from 'dayjs/plugin/utc';
 // import timezone from 'dayjs/plugin/timezone';
 // // 자신의 아이디 기억어떻게함? 
 // // 스케줄 etc에 넣어서 기억하는건 되는데 각이벤트들이 기억 어떻게함?
 // // 문제가 고유번호가 없음 
 // dayjs.extend(utc);
 // dayjs.extend(timezone);
 // const newsApi = async (options: RequestInit = {}) => {
 //     if (!LOSTARK_API_KEY) return new Response(`Lost Ark Api key undefine`, { status: 500 });
 //     const url = `${LOSTARK_API_BASE}/news/events`;
 //     const option: RequestInit = {
 //         ...options,
 //         headers: {
 //             'Accept': 'application/json',
 //             'Authorization': `bearer ${LOSTARK_API_KEY}`,
 //             ...options.headers,
 //         },
 //     };
 //     const response = await fetch(url, option);
 //     if (!response.ok) {
 //         const errorBody = await response.text();
 //         throw new Error(`lostArk contentsApi Error: ${response.status} - ${response.statusText}. Body: ${errorBody}`);
 //     }
 //     return response;
 // };
 // const getNews = async (): Promise<ResponseProp> => {
 //     let result = JSON.parse(JSON.stringify({
 //         ...initResponseProp,
 //         name: "event",
 //         link: `https://lostark.game.onstove.com/News/Event/Now`,
 //         isUndefine: true,
 //     }));
 //     const getApi = await newsApi({ method: 'GET', });
 //     const newsTable = await getApi.json();
 //     const { data: category, error: errorCategory }: any = await supabase.from('categories').select('id').eq('type', 'LOA').in('name',['EVENT_DAILY','EVENT_WEEK']);
 //     if (errorCategory) {
 //         console.error(`getNews to category error:`, errorCategory);
 //         throw errorCategory;
 //     }
 //     // 스케줄러 하면 유저데이터를 들고온다.. 
 //     for (const news of newsTable) {
 //         result.subContents.push({
 //             ...initResponseProp,
 //             name: news.Title,
 //             img: news.Thumbnail,
 //             link: news.Link,
 //             etc: {
 //                 startAt: news.StartDate,
 //                 endAt: news.EndDate,
 //                 rewardAt: news.RewardDate,
 //                 updateWeek: 7,
 //                 updateAt: 6,
 //             }
 //         })
 //     }
 //     return result;
 // }
 // export async function GET(request: Request) {
 //     try {
 //         const result: ResponseProp = await getNews();
 //         return new Response(JSON.stringify(result), {
 //             status: 200,
 //             headers: { 'Content-Type': 'application/json' }
 //         });
 //     }
 //     catch (error) {
 //         console.error('API execution error:', error);
 //         const errorMessage = error instanceof Error ? error.message : 'Unknown error';
 //         return new Response(`Internal Server Error: ${errorMessage}`, { status: 500 });
 //     }
 // }
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__494db0f0._.js.map