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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../withAuth */ \"(app-pages-browser)/./src/app/withAuth.js\");\n/* harmony import */ var _app_contexts_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/axios */ \"(app-pages-browser)/./src/app/contexts/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/table */ \"(app-pages-browser)/./node_modules/antd/lib/table/index.js\");\n/* harmony import */ var antd_lib_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/flex */ \"(app-pages-browser)/./node_modules/antd/lib/flex/index.js\");\n/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/typography */ \"(app-pages-browser)/./node_modules/antd/lib/typography/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst columns = [\n    {\n        title: \"Score Limit\",\n        dataIndex: \"scoreLimit\",\n        key: \"scoreLimit\",\n        width: 100\n    },\n    {\n        title: \"Is Winner\",\n        dataIndex: \"isWinner\",\n        key: \"isWinner\",\n        width: 100,\n        render: (isWinner)=>isWinner ? \"Yes\" : \"No\"\n    },\n    {\n        title: \"Left Player\",\n        children: [\n            {\n                title: \"Username\",\n                dataIndex: [\n                    \"leftPlayer\",\n                    \"username\"\n                ],\n                key: \"leftPlayerUsername\"\n            },\n            {\n                title: \"Display Name\",\n                dataIndex: [\n                    \"leftPlayer\",\n                    \"displayname\"\n                ],\n                key: \"leftPlayerDisplayname\"\n            }\n        ]\n    },\n    {\n        title: \"Left Player Score\",\n        children: [\n            {\n                title: \"Level\",\n                dataIndex: [\n                    \"leftPlayerScore\",\n                    \"level\"\n                ],\n                key: \"leftPlayerLevel\"\n            },\n            {\n                title: \"Points\",\n                dataIndex: [\n                    \"leftPlayerScore\",\n                    \"points\"\n                ],\n                key: \"leftPlayerPoints\"\n            },\n            {\n                title: \"Line Clears\",\n                dataIndex: [\n                    \"leftPlayerScore\",\n                    \"lineClears\"\n                ],\n                key: \"leftPlayerLineClears\"\n            }\n        ]\n    },\n    {\n        title: \"Right Player\",\n        children: [\n            {\n                title: \"Username\",\n                dataIndex: [\n                    \"rightPlayer\",\n                    \"username\"\n                ],\n                key: \"rightPlayerUsername\"\n            },\n            {\n                title: \"Display Name\",\n                dataIndex: [\n                    \"rightPlayer\",\n                    \"displayname\"\n                ],\n                key: \"rightPlayerDisplayname\"\n            }\n        ]\n    },\n    {\n        title: \"Right Player Score\",\n        children: [\n            {\n                title: \"Level\",\n                dataIndex: [\n                    \"rightPlayerScore\",\n                    \"level\"\n                ],\n                key: \"rightPlayerLevel\"\n            },\n            {\n                title: \"Points\",\n                dataIndex: [\n                    \"rightPlayerScore\",\n                    \"points\"\n                ],\n                key: \"rightPlayerPoints\"\n            },\n            {\n                title: \"Line Clears\",\n                dataIndex: [\n                    \"rightPlayerScore\",\n                    \"lineClears\"\n                ],\n                key: \"rightPlayerLineClears\"\n            }\n        ]\n    }\n];\nfunction Profile(param) {\n    let { params } = param;\n    _s();\n    const { axiosReady, axiosInstance } = (0,_app_contexts_axios__WEBPACK_IMPORTED_MODULE_3__.useAxios)();\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    async function fetchUserProfile(username) {\n        try {\n            const response = axiosInstance.get(\"/userProfile/\".concat(username));\n            return response;\n        } catch (e) {\n            console.error(e);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!axiosReady) return;\n        (async ()=>{\n            const response = await fetchUserProfile(params.username);\n            setProfile(response.data.profile);\n            setGames(response.data.Games);\n            console.log(\"!response\", response);\n        })();\n        console.log(\"params are\", params);\n    }, [\n        params,\n        axiosReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_flex__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        vertical: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_flex__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                justify: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Profile of \".concat(params.username)\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/profile/[username]/page.js\",\n                        lineNumber: 122,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/app/src/app/profile/[username]/page.js\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/app/src/app/profile/[username]/page.js\",\n                lineNumber: 121,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                columns: columns,\n                dataSource: games,\n                bordered: true,\n                size: \"middle\",\n                scroll: {\n                    x: \"calc(700px + 50%)\",\n                    y: 240\n                }\n            }, void 0, false, {\n                fileName: \"/app/src/app/profile/[username]/page.js\",\n                lineNumber: 124,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/app/profile/[username]/page.js\",\n        lineNumber: 120,\n        columnNumber: 12\n    }, this);\n}\n_s(Profile, \"kWNaD+G7Km4Wf/55dghYKebCKII=\", false, function() {\n    return [\n        _app_contexts_axios__WEBPACK_IMPORTED_MODULE_3__.useAxios\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Profile));\nvar _c, _c1;\n$RefreshReg$(_c, \"Profile\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9bdXNlcm5hbWVdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUN3QztBQUNGO0FBQ1U7QUFDSjtBQUNHO0FBQUE7QUFBQTtBQUUvQyxNQUFNUSxVQUFVO0lBQ1o7UUFDSUMsT0FBTztRQUNQQyxXQUFXO1FBQ1hDLEtBQUs7UUFDTEMsT0FBTztJQUNYO0lBQ0E7UUFDSUgsT0FBTztRQUNQQyxXQUFXO1FBQ1hDLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxRQUFRLENBQUNDLFdBQWNBLFdBQVcsUUFBUTtJQUM5QztJQUNBO1FBQ0lMLE9BQU87UUFDUE0sVUFBVTtZQUNOO2dCQUNJTixPQUFPO2dCQUNQQyxXQUFXO29CQUFDO29CQUFjO2lCQUFXO2dCQUNyQ0MsS0FBSztZQUNUO1lBQ0E7Z0JBQ0lGLE9BQU87Z0JBQ1BDLFdBQVc7b0JBQUM7b0JBQWM7aUJBQWM7Z0JBQ3hDQyxLQUFLO1lBQ1Q7U0FDSDtJQUNMO0lBQ0E7UUFDSUYsT0FBTztRQUNQTSxVQUFVO1lBQ047Z0JBQ0lOLE9BQU87Z0JBQ1BDLFdBQVc7b0JBQUM7b0JBQW1CO2lCQUFRO2dCQUN2Q0MsS0FBSztZQUNUO1lBQ0E7Z0JBQ0lGLE9BQU87Z0JBQ1BDLFdBQVc7b0JBQUM7b0JBQW1CO2lCQUFTO2dCQUN4Q0MsS0FBSztZQUNUO1lBQ0E7Z0JBQ0lGLE9BQU87Z0JBQ1BDLFdBQVc7b0JBQUM7b0JBQW1CO2lCQUFhO2dCQUM1Q0MsS0FBSztZQUNUO1NBQ0g7SUFDTDtJQUNBO1FBQ0lGLE9BQU87UUFDUE0sVUFBVTtZQUNOO2dCQUNJTixPQUFPO2dCQUNQQyxXQUFXO29CQUFDO29CQUFlO2lCQUFXO2dCQUN0Q0MsS0FBSztZQUNUO1lBQ0E7Z0JBQ0lGLE9BQU87Z0JBQ1BDLFdBQVc7b0JBQUM7b0JBQWU7aUJBQWM7Z0JBQ3pDQyxLQUFLO1lBQ1Q7U0FDSDtJQUNMO0lBQ0E7UUFDSUYsT0FBTztRQUNQTSxVQUFVO1lBQ047Z0JBQ0lOLE9BQU87Z0JBQ1BDLFdBQVc7b0JBQUM7b0JBQW9CO2lCQUFRO2dCQUN4Q0MsS0FBSztZQUNUO1lBQ0E7Z0JBQ0lGLE9BQU87Z0JBQ1BDLFdBQVc7b0JBQUM7b0JBQW9CO2lCQUFTO2dCQUN6Q0MsS0FBSztZQUNUO1lBQ0E7Z0JBQ0lGLE9BQU87Z0JBQ1BDLFdBQVc7b0JBQUM7b0JBQW9CO2lCQUFhO2dCQUM3Q0MsS0FBSztZQUNUO1NBQ0g7SUFDTDtDQUNIO0FBRUQsU0FBU0ssUUFBUSxLQUFVO1FBQVYsRUFBRUMsTUFBTSxFQUFFLEdBQVY7O0lBQ2IsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLGFBQWEsRUFBRSxHQUFHakIsNkRBQVFBO0lBQzlDLE1BQU0sQ0FBQ2tCLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2tCLE9BQU9DLFNBQVMsR0FBR25CLCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsZUFBZW9CLGlCQUFpQkMsUUFBUTtRQUNwQyxJQUFJO1lBQ0EsTUFBTUMsV0FBV1AsY0FBY1EsR0FBRyxDQUFDLGdCQUF5QixPQUFURjtZQUNuRCxPQUFPQztRQUNYLEVBQUUsT0FBT0UsR0FBRztZQUNSQyxRQUFRQyxLQUFLLENBQUNGO1FBQ2xCO0lBQ0o7SUFFQXpCLGdEQUFTQSxDQUFDO1FBQ04sSUFBSSxDQUFDZSxZQUNEO1FBQ0g7WUFDRyxNQUFNUSxXQUFXLE1BQU1GLGlCQUFpQlAsT0FBT1EsUUFBUTtZQUN2REosV0FBV0ssU0FBU0ssSUFBSSxDQUFDWCxPQUFPO1lBQ2hDRyxTQUFTRyxTQUFTSyxJQUFJLENBQUNDLEtBQUs7WUFDNUJILFFBQVFJLEdBQUcsQ0FBQyxhQUFhUDtRQUM3QjtRQUNBRyxRQUFRSSxHQUFHLENBQUMsY0FBY2hCO0lBQzlCLEdBQUc7UUFBQ0E7UUFBUUM7S0FBVztJQUV2QixxQkFBTyw4REFBQ1oscURBQUlBO1FBQUM0QixRQUFROzswQkFDakIsOERBQUM1QixxREFBSUE7Z0JBQUM2QixTQUFROzBCQUNkLDRFQUFDNUIsMkRBQVVBOzhCQUFDLDRFQUFDNkI7a0NBQUksY0FBOEIsT0FBaEJuQixPQUFPUSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OzBCQUU5Qyw4REFBQ3BCLHNEQUFLQTtnQkFDRkcsU0FBU0E7Z0JBQ1Q2QixZQUFZZjtnQkFDWmdCLFFBQVE7Z0JBQ1JDLE1BQUs7Z0JBQ0xDLFFBQVE7b0JBQUVDLEdBQUc7b0JBQXFCQyxHQUFHO2dCQUFJOzs7Ozs7Ozs7Ozs7QUFHckQ7R0F0Q1MxQjs7UUFDaUNkLHlEQUFRQTs7O0tBRHpDYztBQXdDVCwrREFBZSxNQUFBZixxREFBUUEsQ0FBQ2UsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2ZpbGUvW3VzZXJuYW1lXS9wYWdlLmpzP2M1ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB1c2VSb3V0ZXIgZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uLy4uL3dpdGhBdXRoJztcbmltcG9ydCB7IHVzZUF4aW9zIH0gZnJvbSBcIkAvYXBwL2NvbnRleHRzL2F4aW9zXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSwgRmxleCwgVHlwb2dyYXBoeSB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICdTY29yZSBMaW1pdCcsXG4gICAgICAgIGRhdGFJbmRleDogJ3Njb3JlTGltaXQnLFxuICAgICAgICBrZXk6ICdzY29yZUxpbWl0JyxcbiAgICAgICAgd2lkdGg6IDEwMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdJcyBXaW5uZXInLFxuICAgICAgICBkYXRhSW5kZXg6ICdpc1dpbm5lcicsXG4gICAgICAgIGtleTogJ2lzV2lubmVyJyxcbiAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgcmVuZGVyOiAoaXNXaW5uZXIpID0+IChpc1dpbm5lciA/ICdZZXMnIDogJ05vJyksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnTGVmdCBQbGF5ZXInLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnVXNlcm5hbWUnLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogWydsZWZ0UGxheWVyJywgJ3VzZXJuYW1lJ10sXG4gICAgICAgICAgICAgICAga2V5OiAnbGVmdFBsYXllclVzZXJuYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdEaXNwbGF5IE5hbWUnLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogWydsZWZ0UGxheWVyJywgJ2Rpc3BsYXluYW1lJ10sXG4gICAgICAgICAgICAgICAga2V5OiAnbGVmdFBsYXllckRpc3BsYXluYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnTGVmdCBQbGF5ZXIgU2NvcmUnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTGV2ZWwnLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogWydsZWZ0UGxheWVyU2NvcmUnLCAnbGV2ZWwnXSxcbiAgICAgICAgICAgICAgICBrZXk6ICdsZWZ0UGxheWVyTGV2ZWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BvaW50cycsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ2xlZnRQbGF5ZXJTY29yZScsICdwb2ludHMnXSxcbiAgICAgICAgICAgICAgICBrZXk6ICdsZWZ0UGxheWVyUG9pbnRzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMaW5lIENsZWFycycsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ2xlZnRQbGF5ZXJTY29yZScsICdsaW5lQ2xlYXJzJ10sXG4gICAgICAgICAgICAgICAga2V5OiAnbGVmdFBsYXllckxpbmVDbGVhcnMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdSaWdodCBQbGF5ZXInLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnVXNlcm5hbWUnLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogWydyaWdodFBsYXllcicsICd1c2VybmFtZSddLFxuICAgICAgICAgICAgICAgIGtleTogJ3JpZ2h0UGxheWVyVXNlcm5hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Rpc3BsYXkgTmFtZScsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ3JpZ2h0UGxheWVyJywgJ2Rpc3BsYXluYW1lJ10sXG4gICAgICAgICAgICAgICAga2V5OiAncmlnaHRQbGF5ZXJEaXNwbGF5bmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1JpZ2h0IFBsYXllciBTY29yZScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMZXZlbCcsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ3JpZ2h0UGxheWVyU2NvcmUnLCAnbGV2ZWwnXSxcbiAgICAgICAgICAgICAgICBrZXk6ICdyaWdodFBsYXllckxldmVsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQb2ludHMnLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogWydyaWdodFBsYXllclNjb3JlJywgJ3BvaW50cyddLFxuICAgICAgICAgICAgICAgIGtleTogJ3JpZ2h0UGxheWVyUG9pbnRzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMaW5lIENsZWFycycsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ3JpZ2h0UGxheWVyU2NvcmUnLCAnbGluZUNsZWFycyddLFxuICAgICAgICAgICAgICAgIGtleTogJ3JpZ2h0UGxheWVyTGluZUNsZWFycycsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG5dO1xuXG5mdW5jdGlvbiBQcm9maWxlKHsgcGFyYW1zIH0pIHtcbiAgICBjb25zdCB7IGF4aW9zUmVhZHksIGF4aW9zSW5zdGFuY2UgfSA9IHVzZUF4aW9zKCk7XG4gICAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2dhbWVzLCBzZXRHYW1lc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJQcm9maWxlKHVzZXJuYW1lKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF4aW9zSW5zdGFuY2UuZ2V0KGAvdXNlclByb2ZpbGUvJHt1c2VybmFtZX1gKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghYXhpb3NSZWFkeSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hVc2VyUHJvZmlsZShwYXJhbXMudXNlcm5hbWUpO1xuICAgICAgICAgICAgc2V0UHJvZmlsZShyZXNwb25zZS5kYXRhLnByb2ZpbGUpO1xuICAgICAgICAgICAgc2V0R2FtZXMocmVzcG9uc2UuZGF0YS5HYW1lcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiFyZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgICAgIH0pKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyYW1zIGFyZVwiLCBwYXJhbXMpO1xuICAgIH0sIFtwYXJhbXMsIGF4aW9zUmVhZHldKTtcblxuICAgIHJldHVybiA8RmxleCB2ZXJ0aWNhbD5cbiAgICAgICAgPEZsZXgganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICA8VHlwb2dyYXBoeT48aDE+e2BQcm9maWxlIG9mICR7cGFyYW1zLnVzZXJuYW1lfWB9PC9oMT48L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgZGF0YVNvdXJjZT17Z2FtZXN9XG4gICAgICAgICAgICBib3JkZXJlZFxuICAgICAgICAgICAgc2l6ZT1cIm1pZGRsZVwiXG4gICAgICAgICAgICBzY3JvbGw9e3sgeDogJ2NhbGMoNzAwcHggKyA1MCUpJywgeTogMjQwIH19XG4gICAgICAgIC8+XG4gICAgPC9GbGV4PlxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChQcm9maWxlKTsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwid2l0aEF1dGgiLCJ1c2VBeGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGFibGUiLCJGbGV4IiwiVHlwb2dyYXBoeSIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImtleSIsIndpZHRoIiwicmVuZGVyIiwiaXNXaW5uZXIiLCJjaGlsZHJlbiIsIlByb2ZpbGUiLCJwYXJhbXMiLCJheGlvc1JlYWR5IiwiYXhpb3NJbnN0YW5jZSIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwiZ2FtZXMiLCJzZXRHYW1lcyIsImZldGNoVXNlclByb2ZpbGUiLCJ1c2VybmFtZSIsInJlc3BvbnNlIiwiZ2V0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRhdGEiLCJHYW1lcyIsImxvZyIsInZlcnRpY2FsIiwianVzdGlmeSIsImgxIiwiZGF0YVNvdXJjZSIsImJvcmRlcmVkIiwic2l6ZSIsInNjcm9sbCIsIngiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/[username]/page.js\n"));

/***/ })

});