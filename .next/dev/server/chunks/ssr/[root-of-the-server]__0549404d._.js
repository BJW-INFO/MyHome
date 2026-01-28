module.exports = [
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
"[project]/utils/index.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$routers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/routers.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$deepCopy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/deepCopy.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$daysEnum$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/daysEnum.tsx [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/app/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/components/header.tsx'\n\nExpected '>', got 'li'");
e.code = 'MODULE_UNPARSABLE';
throw e;
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0549404d._.js.map