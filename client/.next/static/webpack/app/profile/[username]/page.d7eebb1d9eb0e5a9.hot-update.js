"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/[username]/page",{

/***/ "(app-pages-browser)/./src/app/profile/[username]/page.js":
/*!********************************************!*\
  !*** ./src/app/profile/[username]/page.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../withAuth */ \"(app-pages-browser)/./src/app/withAuth.js\");\n/* harmony import */ var _app_contexts_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/axios */ \"(app-pages-browser)/./src/app/contexts/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/table */ \"(app-pages-browser)/./node_modules/antd/lib/table/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nasync function fetchUserProfile(_axios, username) {\n    try {\n        const response = _axios.get(\"/userProfile/\".concat(username));\n        return response;\n    } catch (e) {\n        console.error(e);\n    }\n}\nconst data = [\n    {\n        \"scoreLimit\": 100,\n        \"isWinner\": true,\n        \"leftPlayer\": {\n            \"username\": \"shadokan87\",\n            \"displayname\": \"shadokan\"\n        },\n        \"leftPlayerScore\": {\n            \"level\": 2,\n            \"points\": 100,\n            \"lineClears\": 1\n        },\n        \"rightPlayer\": {\n            \"username\": \"shinobi87\",\n            \"displayname\": \"shinobi\"\n        },\n        \"rightPlayerScore\": {\n            \"level\": 1,\n            \"points\": 0,\n            \"lineClears\": 0\n        }\n    }\n];\nfunction Profile(param) {\n    let { params } = param;\n    _s();\n    const { axiosReady, axiosInstance } = (0,_app_contexts_axios__WEBPACK_IMPORTED_MODULE_3__.useAxios)();\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!axiosReady) return;\n        (async ()=>{\n            const response = await fetchUserProfile(axiosInstance, params.username);\n            console.log(\"!response\", response);\n        })();\n        console.log(\"params are\", params);\n    }, [\n        params,\n        axiosReady\n    ]);\n    const columns = [\n        {\n            title: \"Score Limit\",\n            dataIndex: \"scoreLimit\",\n            key: \"scoreLimit\",\n            width: 100\n        },\n        {\n            title: \"Is Winner\",\n            dataIndex: \"isWinner\",\n            key: \"isWinner\",\n            width: 100,\n            render: (isWinner)=>isWinner ? \"Yes\" : \"No\"\n        },\n        {\n            title: \"Left Player\",\n            children: [\n                {\n                    title: \"Username\",\n                    dataIndex: [\n                        \"leftPlayer\",\n                        \"username\"\n                    ],\n                    key: \"leftPlayerUsername\"\n                },\n                {\n                    title: \"Display Name\",\n                    dataIndex: [\n                        \"leftPlayer\",\n                        \"displayname\"\n                    ],\n                    key: \"leftPlayerDisplayname\"\n                }\n            ]\n        },\n        {\n            title: \"Left Player Score\",\n            children: [\n                {\n                    title: \"Level\",\n                    dataIndex: [\n                        \"leftPlayerScore\",\n                        \"level\"\n                    ],\n                    key: \"leftPlayerLevel\"\n                },\n                {\n                    title: \"Points\",\n                    dataIndex: [\n                        \"leftPlayerScore\",\n                        \"points\"\n                    ],\n                    key: \"leftPlayerPoints\"\n                },\n                {\n                    title: \"Line Clears\",\n                    dataIndex: [\n                        \"leftPlayerScore\",\n                        \"lineClears\"\n                    ],\n                    key: \"leftPlayerLineClears\"\n                }\n            ]\n        },\n        {\n            title: \"Right Player\",\n            children: [\n                {\n                    title: \"Username\",\n                    dataIndex: [\n                        \"rightPlayer\",\n                        \"username\"\n                    ],\n                    key: \"rightPlayerUsername\"\n                },\n                {\n                    title: \"Display Name\",\n                    dataIndex: [\n                        \"rightPlayer\",\n                        \"displayname\"\n                    ],\n                    key: \"rightPlayerDisplayname\"\n                }\n            ]\n        },\n        {\n            title: \"Right Player Score\",\n            children: [\n                {\n                    title: \"Level\",\n                    dataIndex: [\n                        \"rightPlayerScore\",\n                        \"level\"\n                    ],\n                    key: \"rightPlayerLevel\"\n                },\n                {\n                    title: \"Points\",\n                    dataIndex: [\n                        \"rightPlayerScore\",\n                        \"points\"\n                    ],\n                    key: \"rightPlayerPoints\"\n                },\n                {\n                    title: \"Line Clears\",\n                    dataIndex: [\n                        \"rightPlayerScore\",\n                        \"lineClears\"\n                    ],\n                    key: \"rightPlayerLineClears\"\n                }\n            ]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        columns: columns,\n        dataSource: data,\n        bordered: true,\n        size: \"middle\",\n        scroll: {\n            x: \"calc(700px + 50%)\",\n            y: 240\n        }\n    }, void 0, false, {\n        fileName: \"/app/src/app/profile/[username]/page.js\",\n        lineNumber: 139,\n        columnNumber: 12\n    }, this);\n// const columns = [\n//     {\n//         title: 'scoreLimit',\n//         key: 'scoreLimit',\n//         fixed: 'left'\n//     },\n//     {\n//         title: 'leftPlayer'\n//     }\n// ]\n// if (!user)\n//     return <h1>{\"profile page\" + JSON.stringify(params)}</h1>\n// else return <>{\"ok\"}</>;\n}\n_s(Profile, \"1+UiR0dxFpDRMnpIhfyOq/hhYpA=\", false, function() {\n    return [\n        _app_contexts_axios__WEBPACK_IMPORTED_MODULE_3__.useAxios\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Profile));\nvar _c, _c1;\n$RefreshReg$(_c, \"Profile\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9bdXNlcm5hbWVdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDd0M7QUFDRjtBQUNVO0FBQ0o7QUFDZjtBQUU3QixlQUFlTSxpQkFBaUJDLE1BQU0sRUFBRUMsUUFBUTtJQUM1QyxJQUFJO1FBQ0EsTUFBTUMsV0FBV0YsT0FBT0csR0FBRyxDQUFDLGdCQUF5QixPQUFURjtRQUM1QyxPQUFPQztJQUNYLEVBQUUsT0FBT0UsR0FBRztRQUNSQyxRQUFRQyxLQUFLLENBQUNGO0lBQ2xCO0FBQ0o7QUFFQSxNQUFNRyxPQUFPO0lBQUM7UUFDVixjQUFjO1FBQ2QsWUFBWTtRQUNaLGNBQWM7WUFDVixZQUFZO1lBQ1osZUFBZTtRQUNuQjtRQUNBLG1CQUFtQjtZQUNmLFNBQVM7WUFDVCxVQUFVO1lBQ1YsY0FBYztRQUNsQjtRQUNBLGVBQWU7WUFDWCxZQUFZO1lBQ1osZUFBZTtRQUNuQjtRQUNBLG9CQUFvQjtZQUNoQixTQUFTO1lBQ1QsVUFBVTtZQUNWLGNBQWM7UUFDbEI7SUFDSjtDQUFFO0FBQ0YsU0FBU0MsUUFBUSxLQUFVO1FBQVYsRUFBRUMsTUFBTSxFQUFFLEdBQVY7O0lBQ2IsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLGFBQWEsRUFBRSxHQUFHaEIsNkRBQVFBO0lBQzlDLE1BQU0sQ0FBQ2lCLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1UsTUFBTU8sUUFBUSxHQUFHakIsK0NBQVFBLENBQUM7SUFFakNELGdEQUFTQSxDQUFDO1FBQ04sSUFBSSxDQUFDYyxZQUNEO1FBQ0g7WUFDRyxNQUFNUixXQUFXLE1BQU1ILGlCQUFpQlksZUFBZUYsT0FBT1IsUUFBUTtZQUN0RUksUUFBUVUsR0FBRyxDQUFDLGFBQWFiO1FBQzdCO1FBQ0FHLFFBQVFVLEdBQUcsQ0FBQyxjQUFjTjtJQUM5QixHQUFHO1FBQUNBO1FBQVFDO0tBQVc7SUFFdkIsTUFBTU0sVUFBVTtRQUNaO1lBQ0lDLE9BQU87WUFDUEMsV0FBVztZQUNYQyxLQUFLO1lBQ0xDLE9BQU87UUFDWDtRQUNBO1lBQ0lILE9BQU87WUFDUEMsV0FBVztZQUNYQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsUUFBUSxDQUFDQyxXQUFjQSxXQUFXLFFBQVE7UUFDOUM7UUFDQTtZQUNJTCxPQUFPO1lBQ1BNLFVBQVU7Z0JBQ047b0JBQ0lOLE9BQU87b0JBQ1BDLFdBQVc7d0JBQUM7d0JBQWM7cUJBQVc7b0JBQ3JDQyxLQUFLO2dCQUNUO2dCQUNBO29CQUNJRixPQUFPO29CQUNQQyxXQUFXO3dCQUFDO3dCQUFjO3FCQUFjO29CQUN4Q0MsS0FBSztnQkFDVDthQUNIO1FBQ0w7UUFDQTtZQUNJRixPQUFPO1lBQ1BNLFVBQVU7Z0JBQ047b0JBQ0lOLE9BQU87b0JBQ1BDLFdBQVc7d0JBQUM7d0JBQW1CO3FCQUFRO29CQUN2Q0MsS0FBSztnQkFDVDtnQkFDQTtvQkFDSUYsT0FBTztvQkFDUEMsV0FBVzt3QkFBQzt3QkFBbUI7cUJBQVM7b0JBQ3hDQyxLQUFLO2dCQUNUO2dCQUNBO29CQUNJRixPQUFPO29CQUNQQyxXQUFXO3dCQUFDO3dCQUFtQjtxQkFBYTtvQkFDNUNDLEtBQUs7Z0JBQ1Q7YUFDSDtRQUNMO1FBQ0E7WUFDSUYsT0FBTztZQUNQTSxVQUFVO2dCQUNOO29CQUNJTixPQUFPO29CQUNQQyxXQUFXO3dCQUFDO3dCQUFlO3FCQUFXO29CQUN0Q0MsS0FBSztnQkFDVDtnQkFDQTtvQkFDSUYsT0FBTztvQkFDUEMsV0FBVzt3QkFBQzt3QkFBZTtxQkFBYztvQkFDekNDLEtBQUs7Z0JBQ1Q7YUFDSDtRQUNMO1FBQ0E7WUFDSUYsT0FBTztZQUNQTSxVQUFVO2dCQUNOO29CQUNJTixPQUFPO29CQUNQQyxXQUFXO3dCQUFDO3dCQUFvQjtxQkFBUTtvQkFDeENDLEtBQUs7Z0JBQ1Q7Z0JBQ0E7b0JBQ0lGLE9BQU87b0JBQ1BDLFdBQVc7d0JBQUM7d0JBQW9CO3FCQUFTO29CQUN6Q0MsS0FBSztnQkFDVDtnQkFDQTtvQkFDSUYsT0FBTztvQkFDUEMsV0FBVzt3QkFBQzt3QkFBb0I7cUJBQWE7b0JBQzdDQyxLQUFLO2dCQUNUO2FBQ0g7UUFDTDtLQUNIO0lBQ0QscUJBQU8sOERBQUNyQixzREFBS0E7UUFDVGtCLFNBQVNBO1FBQ1RRLFlBQVlqQjtRQUNaa0IsUUFBUTtRQUNSQyxNQUFLO1FBQ0xDLFFBQVE7WUFBRUMsR0FBRztZQUFxQkMsR0FBRztRQUFJOzs7Ozs7QUFFN0Msb0JBQW9CO0FBQ3BCLFFBQVE7QUFDUiwrQkFBK0I7QUFDL0IsNkJBQTZCO0FBQzdCLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QsUUFBUTtBQUNSLDhCQUE4QjtBQUM5QixRQUFRO0FBQ1IsSUFBSTtBQUNKLGFBQWE7QUFDYixnRUFBZ0U7QUFDaEUsMkJBQTJCO0FBQy9CO0dBeEhTckI7O1FBQ2lDYix5REFBUUE7OztLQUR6Q2E7QUEwSFQsK0RBQWUsTUFBQWQscURBQVFBLENBQUNjLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9maWxlL1t1c2VybmFtZV0vcGFnZS5qcz9jNWQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgdXNlUm91dGVyIGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi93aXRoQXV0aCc7XG5pbXBvcnQgeyB1c2VBeGlvcyB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy9heGlvc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICdhbnRkJztcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyUHJvZmlsZShfYXhpb3MsIHVzZXJuYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBfYXhpb3MuZ2V0KGAvdXNlclByb2ZpbGUvJHt1c2VybmFtZX1gKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG59XG5cbmNvbnN0IGRhdGEgPSBbe1xuICAgIFwic2NvcmVMaW1pdFwiOiAxMDAsXG4gICAgXCJpc1dpbm5lclwiOiB0cnVlLFxuICAgIFwibGVmdFBsYXllclwiOiB7XG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJzaGFkb2thbjg3XCIsXG4gICAgICAgIFwiZGlzcGxheW5hbWVcIjogXCJzaGFkb2thblwiXG4gICAgfSxcbiAgICBcImxlZnRQbGF5ZXJTY29yZVwiOiB7XG4gICAgICAgIFwibGV2ZWxcIjogMixcbiAgICAgICAgXCJwb2ludHNcIjogMTAwLFxuICAgICAgICBcImxpbmVDbGVhcnNcIjogMVxuICAgIH0sXG4gICAgXCJyaWdodFBsYXllclwiOiB7XG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJzaGlub2JpODdcIixcbiAgICAgICAgXCJkaXNwbGF5bmFtZVwiOiBcInNoaW5vYmlcIlxuICAgIH0sXG4gICAgXCJyaWdodFBsYXllclNjb3JlXCI6IHtcbiAgICAgICAgXCJsZXZlbFwiOiAxLFxuICAgICAgICBcInBvaW50c1wiOiAwLFxuICAgICAgICBcImxpbmVDbGVhcnNcIjogMFxuICAgIH1cbn1dXG5mdW5jdGlvbiBQcm9maWxlKHsgcGFyYW1zIH0pIHtcbiAgICBjb25zdCB7IGF4aW9zUmVhZHksIGF4aW9zSW5zdGFuY2UgfSA9IHVzZUF4aW9zKCk7XG4gICAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWF4aW9zUmVhZHkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoVXNlclByb2ZpbGUoYXhpb3NJbnN0YW5jZSwgcGFyYW1zLnVzZXJuYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIXJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJhbXMgYXJlXCIsIHBhcmFtcyk7XG4gICAgfSwgW3BhcmFtcywgYXhpb3NSZWFkeV0pO1xuXG4gICAgY29uc3QgY29sdW1ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdTY29yZSBMaW1pdCcsXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICdzY29yZUxpbWl0JyxcbiAgICAgICAgICAgIGtleTogJ3Njb3JlTGltaXQnLFxuICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdJcyBXaW5uZXInLFxuICAgICAgICAgICAgZGF0YUluZGV4OiAnaXNXaW5uZXInLFxuICAgICAgICAgICAga2V5OiAnaXNXaW5uZXInLFxuICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgIHJlbmRlcjogKGlzV2lubmVyKSA9PiAoaXNXaW5uZXIgPyAnWWVzJyA6ICdObycpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0xlZnQgUGxheWVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1VzZXJuYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ2xlZnRQbGF5ZXInLCAndXNlcm5hbWUnXSxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnbGVmdFBsYXllclVzZXJuYW1lJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEaXNwbGF5IE5hbWUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFsnbGVmdFBsYXllcicsICdkaXNwbGF5bmFtZSddLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdsZWZ0UGxheWVyRGlzcGxheW5hbWUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0xlZnQgUGxheWVyIFNjb3JlJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0xldmVsJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ2xlZnRQbGF5ZXJTY29yZScsICdsZXZlbCddLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdsZWZ0UGxheWVyTGV2ZWwnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1BvaW50cycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogWydsZWZ0UGxheWVyU2NvcmUnLCAncG9pbnRzJ10sXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2xlZnRQbGF5ZXJQb2ludHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0xpbmUgQ2xlYXJzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ2xlZnRQbGF5ZXJTY29yZScsICdsaW5lQ2xlYXJzJ10sXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2xlZnRQbGF5ZXJMaW5lQ2xlYXJzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdSaWdodCBQbGF5ZXInLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVXNlcm5hbWUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFsncmlnaHRQbGF5ZXInLCAndXNlcm5hbWUnXSxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAncmlnaHRQbGF5ZXJVc2VybmFtZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGlzcGxheSBOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ3JpZ2h0UGxheWVyJywgJ2Rpc3BsYXluYW1lJ10sXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3JpZ2h0UGxheWVyRGlzcGxheW5hbWUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1JpZ2h0IFBsYXllciBTY29yZScsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdMZXZlbCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogWydyaWdodFBsYXllclNjb3JlJywgJ2xldmVsJ10sXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3JpZ2h0UGxheWVyTGV2ZWwnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1BvaW50cycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogWydyaWdodFBsYXllclNjb3JlJywgJ3BvaW50cyddLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdyaWdodFBsYXllclBvaW50cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTGluZSBDbGVhcnMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFsncmlnaHRQbGF5ZXJTY29yZScsICdsaW5lQ2xlYXJzJ10sXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3JpZ2h0UGxheWVyTGluZUNsZWFycycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgXTtcbiAgICByZXR1cm4gPFRhYmxlXG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XG4gICAgICAgIGJvcmRlcmVkXG4gICAgICAgIHNpemU9XCJtaWRkbGVcIlxuICAgICAgICBzY3JvbGw9e3sgeDogJ2NhbGMoNzAwcHggKyA1MCUpJywgeTogMjQwIH19XG4gICAgLz5cbiAgICAvLyBjb25zdCBjb2x1bW5zID0gW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICB0aXRsZTogJ3Njb3JlTGltaXQnLFxuICAgIC8vICAgICAgICAga2V5OiAnc2NvcmVMaW1pdCcsXG4gICAgLy8gICAgICAgICBmaXhlZDogJ2xlZnQnXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIHRpdGxlOiAnbGVmdFBsYXllcidcbiAgICAvLyAgICAgfVxuICAgIC8vIF1cbiAgICAvLyBpZiAoIXVzZXIpXG4gICAgLy8gICAgIHJldHVybiA8aDE+e1wicHJvZmlsZSBwYWdlXCIgKyBKU09OLnN0cmluZ2lmeShwYXJhbXMpfTwvaDE+XG4gICAgLy8gZWxzZSByZXR1cm4gPD57XCJva1wifTwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoUHJvZmlsZSk7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIndpdGhBdXRoIiwidXNlQXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRhYmxlIiwiZmV0Y2hVc2VyUHJvZmlsZSIsIl9heGlvcyIsInVzZXJuYW1lIiwicmVzcG9uc2UiLCJnZXQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGF0YSIsIlByb2ZpbGUiLCJwYXJhbXMiLCJheGlvc1JlYWR5IiwiYXhpb3NJbnN0YW5jZSIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwic2V0RGF0YSIsImxvZyIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImtleSIsIndpZHRoIiwicmVuZGVyIiwiaXNXaW5uZXIiLCJjaGlsZHJlbiIsImRhdGFTb3VyY2UiLCJib3JkZXJlZCIsInNpemUiLCJzY3JvbGwiLCJ4IiwieSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/[username]/page.js\n"));

/***/ })

});