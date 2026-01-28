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
"[project]/app/api/loa/route.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lostArkApi",
    ()=>lostArkApi
]);
const lostArkApi = {
    event: async ()=>{
        try {
            console.log(process.env.LOSTARK_API_BASE);
        // const response = await client.get('/news/events');
        // return response.data; 
        } catch (error) {
            console.error("LostArk API Error:", error.response?.data || error.message);
        }
    }
};
}),
"[project]/app/api/loa/event/route.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4066f218eae40f49cb67a4332aa922736c0616bcb1":"GET"},"",""] */ __turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$loa$2f$route$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/loa/route.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
async function GET(req) {
    // const password = req.headers.get("X-User-Password");
    // if (password === null || !isPassword(password as string)) {
    //     return NextResponse.json(
    //         { ok: false, message: "Unauthorized Request" },
    //         { status: 401 }
    //     );
    // }
    const getLoaEvent = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$loa$2f$route$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lostArkApi"].event();
    // console.log(process.env.LOSTARK_API_BASE); 
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: true
    });
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
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    GET
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(GET, "4066f218eae40f49cb67a4332aa922736c0616bcb1", null);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__50531f9c._.js.map