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
"[project]/app/api/props.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomError",
    ()=>CustomError,
    "CustomResponse",
    ()=>CustomResponse,
    "getCategories",
    ()=>getCategories,
    "isPassword",
    ()=>isPassword,
    "passwordError",
    ()=>passwordError,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/index.tsx [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$daysEnum$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/daysEnum.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$utc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$timezone$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const isPassword = (pw)=>{
    return pw !== null && process.env.WEB_PASS_KEY === pw;
};
const passwordError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
    message: "Unauthorized Request",
    data: []
}, {
    status: 401
});
class CustomError extends Error {
    status;
    error;
    constructor(message, error, status){
        super(message);
        this.error = error;
        this.status = status;
    }
}
function CustomResponse(data, message = 'success') {
    let array = [];
    if (data === undefined || data === null) {
        array = [];
    } else {
        array = Array.isArray(data) ? data : [
            data
        ];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        message,
        data: Array.isArray(data) ? data : [
            data
        ]
    }, {
        status: 200
    });
}
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
        return result;
    }
};
const schedulerCallback = async (contents, isToday = true)=>{
    if (!isToday) {
        return contents;
    }
    try {
        const { error: updateError } = await supabase.rpc(`update_loa_event_contents`, {
            p_id: contents.map((data)=>data.id),
            p_is_clear: false
        });
        if (updateError) {
            return undefined;
        }
        for (const content of contents){
            content.etc.is_clear = false;
        }
        return contents;
    } catch (error) {
        console.error(`schedulerCallback error:`, error);
        return undefined;
    }
};
async function scheduler(option, callback = schedulerCallback) {
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])().tz('Asia/Seoul');
    let category = 0;
    try {
        if (typeof option === 'number') {
            category = option;
        } else if (typeof option === 'object' && option !== null) {
            category = await getCategories(option.type, option.name);
            if (category === 0) {
                throw new Error(`not find categories`);
            }
        }
        const { data: schedule, error: scheduleError } = await supabase.from(`schedulers`).select(`*`).eq(`category`, category).single();
        if (scheduleError) {
            throw scheduleError;
        }
        const { data: contents, error: contentsError } = await supabase.from('contents').select(`*`).eq('category', category);
        if (contentsError) {
            throw contentsError;
        }
        // if (dayjs(schedule.updated_at).isBefore(today.startOf('day')) && today.hour() >= schedule.update_time) {
        switch(schedule.update_cycle){
            case __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$daysEnum$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WeekCycles"].DAILY:
            case __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$daysEnum$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WeekCycles"].WEEKLY:
                {
                    if (schedule.update_weeks.length !== 0) {
                        if (!schedule.update_weeks.includes(today.day())) {
                            return await callback(contents, false);
                        }
                    } else if (schedule.update_cycle === __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$daysEnum$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WeekCycles"].WEEKLY) {
                        throw new Error(`Weekly schedule not update_weeks`);
                    }
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$daysEnum$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WeekCycles"].MONTHLY:
            case __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$daysEnum$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WeekCycles"].Quarterly:
                {
                /*
                    2 => 월간확인 [] 해당 월이 지났는지 확인
                    3 => 날짜로 확인
                    월간은 강제로 해당달의 1일로 바꿔버린다.
                    */ }
                break;
        }
        // }
        const result = await callback(contents);
        if (result !== undefined) {
            const { error: clearError } = await supabase.from('schedulers').update({
                update_at: new Date().toISOString()
            }).eq('category', category);
            if (clearError) {
                throw clearError;
            }
            return Promise.resolve(result);
        } else {
            throw new Error(`callback error`);
        }
    } catch (error) {
        console.error(`scheduler error:`, error);
        return Promise.resolve([]);
    }
}
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
            console.error("api/loa error:", error.message);
        }
    }
};
}),
"[project]/app/api/loa/event/route.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "eventPatten",
    ()=>eventPatten,
    "initLostArkEventEtcProp",
    ()=>initLostArkEventEtcProp,
    "initLostArkEventProp",
    ()=>initLostArkEventProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dayjs/dayjs.min.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dayjs/plugin/duration.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$utc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dayjs/plugin/utc.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$timezone$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dayjs/plugin/timezone.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/props.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$loa$2f$route$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/loa/route.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/index.tsx [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$deepCopy$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/deepCopy.tsx [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$utc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$timezone$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const initLostArkEventEtcProp = {
    end: ``,
    reward: ``,
    title: ``,
    is_clear: false
};
const initLostArkEventProp = {
    event: {
        title: ``,
        img: ``,
        link: ``,
        date: {
            start: ``,
            end: ``,
            reward: ``
        }
    },
    profiles: []
};
const setEventArray = (array)=>array.reduce((accumulator, current)=>{
        const result = {
            id: current.id,
            profile: current.profile,
            is_clear: current.etc.is_clear
        };
        const duplicate = accumulator.find((group)=>group.title === current.etc.title);
        if (duplicate) {
            duplicate.data.push(result);
        } else {
            accumulator.push({
                title: current.etc.title,
                end: current.etc.reward || current.etc.end,
                update_at: current.update_at,
                data: [
                    result
                ]
            });
        }
        return accumulator;
    }, []);
const eventPatten = async (events)=>{
    let contents = [];
    try {
        //! 해당요일이 아닐때 내가 정렬을 안한다..
        const setScheduler = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scheduler"])({
            type: 'LOA',
            name: 'EVENT'
        }, async (contents, isToday)=>{
            const contentsArray = setEventArray(contents);
            if ("TURBOPACK compile-time truthy", 1) {
                const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])().tz('Asia/Seoul');
                for (const arry of contentsArray){
                    if (today.isAfter((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(arry.end).tz('Asia/Seoul'), `day`)) {
                        const { error: deletError } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].rpc(`delete_loa_event_contents`, {
                            p_id: arry.data.map((data)=>data.id)
                        });
                        if (deletError) {
                            throw undefined;
                        } else {
                            break;
                        }
                    }
                    const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].rpc(`update_loa_event_contents`, {
                        p_id: arry.data.map((data)=>data.id),
                        p_is_clear: false
                    });
                    console.log(updateError);
                    if (updateError) {
                        return undefined;
                    }
                    //! 여기 확인하기 클리어여부 초기화 
                    console.log(arry);
                }
            }
            return contentsArray;
        });
        for (const event of events){
            const profiles = setScheduler.find((group)=>group.title === event.Title);
            contents.push({
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$deepCopy$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopy"])(initLostArkEventProp),
                event: {
                    title: event.Title,
                    img: event.Thumbnail,
                    link: event.Link,
                    date: {
                        start: event.StartDate,
                        end: event.EndDate,
                        reward: event.RewardDate
                    }
                },
                profiles: profiles !== undefined ? profiles.data : []
            });
        }
    } catch (error) {
        throw error;
    }
    return contents;
};
async function GET(req) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPassword"])(req.headers.get("X-User-Password"))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["passwordError"];
    }
    try {
        const events = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$loa$2f$route$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lostArkApi"].event();
        const response = await eventPatten(events);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CustomResponse"])(response);
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CustomError"]) {
            console.error(`${e.message}`, e.error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: e.message,
                data: []
            }, {
                status: e.status
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'An unexpected error occurred during API processing.',
            data: []
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPassword"])(req.headers.get("X-User-Password"))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["passwordError"];
    }
    try {
        const { end, reward, title } = await req.json();
        const category = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCategories"])(`LOA`, `EVENT`);
        const { error: initError } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].rpc(`insert_loa_event_contents`, {
            p_category: category,
            p_etc: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$deepCopy$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopy"])(initLostArkEventEtcProp),
                end: end,
                reward: reward,
                title: title
            }
        });
        if (initError) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CustomError"]('loa/event => insert error', initError, 500);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CustomResponse"])();
    } catch (e) {
        console.log('loa/event => insert error:', e.error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: e.message,
            data: []
        }, {
            status: e.status
        });
    }
}
async function DELETE(req) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPassword"])(req.headers.get("X-User-Password"))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["passwordError"];
    }
    try {
        const { id } = await req.json();
        const { error: deleteError } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].rpc(`delete_loa_event_contents`, {
            p_id: id
        });
        if (deleteError) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CustomError"]('loa/event => delete error', deleteError, 500);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CustomResponse"])();
    } catch (e) {
        console.log('loa/event => delete error:', e.error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: e.message,
            data: []
        }, {
            status: e.status
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__716028f5._.js.map