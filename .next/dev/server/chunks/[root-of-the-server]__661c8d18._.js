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
"[project]/utils/routers.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/utils/custemStorage.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/utils/aixos/custem.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "custemAxios",
    ()=>custemAxios
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/index.tsx [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$custemStorage$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/custemStorage.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-route] (ecmascript)");
;
;
const instance = ()=>{
    const init = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
        baseURL: '/api',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    init.interceptors.request.use((config)=>{
        config.headers['X-User-Password'] = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$custemStorage$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["custemStorage"].local.get('auth');
        return config;
    });
    return init;
};
const custemAxios = instance();
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
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$custemStorage$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/custemStorage.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$aixos$2f$custem$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/aixos/custem.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$jotai$2f$auth$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/jotai/auth.tsx [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$deepCopy$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/deepCopy.tsx [app-route] (ecmascript)");
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
        console.log(message + error);
        super(message);
        this.error = error;
        this.status = status;
    }
}
function CustomResponse(data, message = 'success') {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        message,
        data: data
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
const schedulerUpdated = async (props)=>{
    let { contents } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$deepCopy$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopy"])(props);
    try {
        const { error: updateError } = await supabase.rpc(`update_loa_event_contents`, {
            p_id: contents.map((data)=>data.id),
            p_is_clear: false
        });
        if (updateError) {
            return false;
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
const schedulerCallback = async (props)=>props.contents;
async function scheduler(props) {
    const { category: option, callback = schedulerCallback, updated = schedulerUpdated } = props;
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])().tz('Asia/Seoul');
    try {
        const category = typeof option === 'number' ? option : await getCategories(option.type, option.name);
        if (!category || category === 0) {
            return new Error(`not find categories`);
        }
        const { data: schedule, error: scheduleError } = await supabase.from(`schedulers`).select(`*`).eq(`category`, category).single();
        if (scheduleError) {
            throw scheduleError;
        }
        const { data: contents, error: contentsError } = await supabase.from('contents').select(`*`).eq('category', category);
        if (contentsError) {
            throw contentsError;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(schedule.updated_at).isBefore(today.startOf('day')) && today.hour() >= schedule.update_time) {
            switch(schedule.update_cycle){
                case __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$daysEnum$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WeekCycles"].DAILY:
                case __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$daysEnum$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WeekCycles"].WEEKLY:
                    {
                        if (schedule.update_weeks.length !== 0) {
                            if (!schedule.update_weeks.includes(today.day())) {
                                return await callback({
                                    contents: contents,
                                    category
                                });
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
        }
        const update = await updated({
            contents: contents,
            category: category
        });
        if (update !== undefined) {
            const { error: clearError } = await supabase.from('schedulers').update({
                update_at: new Date().toISOString()
            }).eq('category', category);
            if (clearError) {
                throw clearError;
            }
            return Promise.resolve(await callback({
                contents: update,
                category: category
            }));
        }
    } catch (error) {
        console.error(`scheduler error:`, error);
        return Promise.resolve([]);
    }
}
}),
"[project]/app/api/loa/props.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contentsSort",
    ()=>contentsSort
]);
const contentsSort = (data, type)=>{
    return [
        ...data
    ].sort((a, b)=>{
        // profiles 객체 내부의 값에 접근 (핵심!)
        const accA = a[type]?.account ?? '';
        const accB = b[type]?.account ?? '';
        const getWeight = (val)=>{
            if (val === 'U') return 0; // 1등: U
            if (val === '') return 1; // 2등: 빈 값
            return 2; // 3등: 나머지
        };
        const weightA = getWeight(accA);
        const weightB = getWeight(accB);
        if (weightA !== weightB) {
            return weightA - weightB;
        }
        if (accA !== accB) {
            return accA.localeCompare(accB);
        }
        // character도 profiles 안에 있으므로 경로 수정
        return (a.profiles?.character ?? 0) - (b.profiles?.character ?? 0);
    });
};
}),
"[project]/app/api/loa/daily/territory/route.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT,
    "territoryPatten",
    ()=>territoryPatten
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/props.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$loa$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/loa/props.tsx [app-route] (ecmascript)");
;
;
const territoryPatten = async ()=>{
    let result = [];
    try {
        const category = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCategories"])(`LOA`, `TERRITORY_TIME`);
        const { data: contents, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from(`contents`).select(`*,profile:profile(*)`).eq(`category`, category);
        for (const content of contents){
            const { data: profiles } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from(`profiles`).select(`*`).eq(`type`, content.profile.type).eq(`account`, content.profile.account);
            result.push({
                ...content,
                profiles: profiles
            });
        }
        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$loa$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contentsSort"])(result, `profile`);
    } catch (error) {
        throw error;
    }
    return result;
};
async function GET(req) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPassword"])(req.headers.get("X-User-Password"))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["passwordError"];
    }
    try {
        const territory = await territoryPatten();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CustomResponse"])(territory);
    } catch (e) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CustomError"](`loa/daily/territory => get error`, e.error, e.status);
    }
}
async function PUT(req) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPassword"])(req.headers.get("X-User-Password"))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["passwordError"];
    }
    try {
        const { id, profile } = await req.json();
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from(`contents`).update({
            profile: profile
        }).eq(`id`, id);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CustomResponse"])();
    } catch (e) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CustomError"](`loa/daily/territory => put error`, e.error, e.status);
    }
}
async function POST(req) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPassword"])(req.headers.get("X-User-Password"))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["passwordError"];
    }
    try {
        const { id, expires } = await req.json();
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from(`contents`).update({
            etc: expires === undefined ? {} : {
                expires: expires
            }
        }).eq(`id`, id);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CustomResponse"])();
    } catch (e) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$props$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CustomError"](`loa/daily/territory => put error`, e.error, e.status);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__661c8d18._.js.map