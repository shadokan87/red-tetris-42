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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../withAuth */ \"(app-pages-browser)/./src/app/withAuth.js\");\n/* harmony import */ var _app_contexts_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/axios */ \"(app-pages-browser)/./src/app/contexts/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/table */ \"(app-pages-browser)/./node_modules/antd/lib/table/index.js\");\n/* harmony import */ var antd_lib_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/flex */ \"(app-pages-browser)/./node_modules/antd/lib/flex/index.js\");\n/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/typography */ \"(app-pages-browser)/./node_modules/antd/lib/typography/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _app_redux_sessionReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/redux/sessionReducer */ \"(app-pages-browser)/./src/app/redux/sessionReducer.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst columns = [\n    {\n        title: \"Score Limit\",\n        dataIndex: \"scoreLimit\",\n        key: \"scoreLimit\",\n        width: 100\n    },\n    {\n        title: \"Is Winner\",\n        dataIndex: \"isWinner\",\n        key: \"isWinner\",\n        width: 100,\n        render: (isWinner)=>isWinner ? \"Yes\" : \"No\"\n    },\n    {\n        title: \"Left Player\",\n        children: [\n            {\n                title: \"Username\",\n                dataIndex: [\n                    \"leftPlayer\",\n                    \"username\"\n                ],\n                key: \"leftPlayerUsername\"\n            },\n            {\n                title: \"Display Name\",\n                dataIndex: [\n                    \"leftPlayer\",\n                    \"displayname\"\n                ],\n                key: \"leftPlayerDisplayname\"\n            }\n        ]\n    },\n    {\n        title: \"Left Player Score\",\n        children: [\n            {\n                title: \"Level\",\n                dataIndex: [\n                    \"leftPlayerScore\",\n                    \"level\"\n                ],\n                key: \"leftPlayerLevel\"\n            },\n            {\n                title: \"Points\",\n                dataIndex: [\n                    \"leftPlayerScore\",\n                    \"points\"\n                ],\n                key: \"leftPlayerPoints\"\n            },\n            {\n                title: \"Line Clears\",\n                dataIndex: [\n                    \"leftPlayerScore\",\n                    \"lineClears\"\n                ],\n                key: \"leftPlayerLineClears\"\n            }\n        ]\n    },\n    {\n        title: \"Right Player\",\n        children: [\n            {\n                title: \"Username\",\n                dataIndex: [\n                    \"rightPlayer\",\n                    \"username\"\n                ],\n                key: \"rightPlayerUsername\"\n            },\n            {\n                title: \"Display Name\",\n                dataIndex: [\n                    \"rightPlayer\",\n                    \"displayname\"\n                ],\n                key: \"rightPlayerDisplayname\"\n            }\n        ]\n    },\n    {\n        title: \"Right Player Score\",\n        children: [\n            {\n                title: \"Level\",\n                dataIndex: [\n                    \"rightPlayerScore\",\n                    \"level\"\n                ],\n                key: \"rightPlayerLevel\"\n            },\n            {\n                title: \"Points\",\n                dataIndex: [\n                    \"rightPlayerScore\",\n                    \"points\"\n                ],\n                key: \"rightPlayerPoints\"\n            },\n            {\n                title: \"Line Clears\",\n                dataIndex: [\n                    \"rightPlayerScore\",\n                    \"lineClears\"\n                ],\n                key: \"rightPlayerLineClears\"\n            }\n        ]\n    }\n];\nfunction Profile(param) {\n    let { params } = param;\n    _s();\n    const { axiosReady, axiosInstance } = (0,_app_contexts_axios__WEBPACK_IMPORTED_MODULE_3__.useAxios)();\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_app_redux_sessionReducer__WEBPACK_IMPORTED_MODULE_6__.userSelector);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    async function fetchUserProfile(username) {\n        return axiosInstance.get(\"/userProfile/\".concat(username));\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!axiosReady) return;\n        (async ()=>{\n            const response = await fetchUserProfile(params.username).catch((e)=>{\n                router.push(\"/404\", undefined, {\n                    shallow: true\n                });\n            });\n            if (!response) return;\n            setProfile(response.data.profile);\n            setGames(response.data.Games);\n            console.log(\"!response\", response);\n        })();\n        console.log(\"params are\", params);\n    }, [\n        params,\n        axiosReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_flex__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        vertical: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_flex__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                justify: \"center\",\n                children: profile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: profile.id == user.id ? \"Your profile\" : \"Profile of \".concat(profile.username)\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/profile/[username]/page.js\",\n                        lineNumber: 125,\n                        columnNumber: 37\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/app/src/app/profile/[username]/page.js\",\n                    lineNumber: 125,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"/app/src/app/profile/[username]/page.js\",\n                lineNumber: 124,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                columns: columns,\n                dataSource: games,\n                bordered: true,\n                size: \"middle\",\n                scroll: {\n                    x: \"calc(700px + 50%)\",\n                    y: 240\n                }\n            }, void 0, false, {\n                fileName: \"/app/src/app/profile/[username]/page.js\",\n                lineNumber: 127,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/app/profile/[username]/page.js\",\n        lineNumber: 123,\n        columnNumber: 12\n    }, this);\n}\n_s(Profile, \"epRxWHbBk2oco9QxxOMxE03NjAk=\", false, function() {\n    return [\n        _app_contexts_axios__WEBPACK_IMPORTED_MODULE_3__.useAxios,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Profile));\nvar _c, _c1;\n$RefreshReg$(_c, \"Profile\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9bdXNlcm5hbWVdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ047QUFDVTtBQUNKO0FBQ0c7QUFBQTtBQUFBO0FBQ0w7QUFDZ0I7QUFFMUQsTUFBTVUsVUFBVTtJQUNaO1FBQ0lDLE9BQU87UUFDUEMsV0FBVztRQUNYQyxLQUFLO1FBQ0xDLE9BQU87SUFDWDtJQUNBO1FBQ0lILE9BQU87UUFDUEMsV0FBVztRQUNYQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsUUFBUSxDQUFDQyxXQUFjQSxXQUFXLFFBQVE7SUFDOUM7SUFDQTtRQUNJTCxPQUFPO1FBQ1BNLFVBQVU7WUFDTjtnQkFDSU4sT0FBTztnQkFDUEMsV0FBVztvQkFBQztvQkFBYztpQkFBVztnQkFDckNDLEtBQUs7WUFDVDtZQUNBO2dCQUNJRixPQUFPO2dCQUNQQyxXQUFXO29CQUFDO29CQUFjO2lCQUFjO2dCQUN4Q0MsS0FBSztZQUNUO1NBQ0g7SUFDTDtJQUNBO1FBQ0lGLE9BQU87UUFDUE0sVUFBVTtZQUNOO2dCQUNJTixPQUFPO2dCQUNQQyxXQUFXO29CQUFDO29CQUFtQjtpQkFBUTtnQkFDdkNDLEtBQUs7WUFDVDtZQUNBO2dCQUNJRixPQUFPO2dCQUNQQyxXQUFXO29CQUFDO29CQUFtQjtpQkFBUztnQkFDeENDLEtBQUs7WUFDVDtZQUNBO2dCQUNJRixPQUFPO2dCQUNQQyxXQUFXO29CQUFDO29CQUFtQjtpQkFBYTtnQkFDNUNDLEtBQUs7WUFDVDtTQUNIO0lBQ0w7SUFDQTtRQUNJRixPQUFPO1FBQ1BNLFVBQVU7WUFDTjtnQkFDSU4sT0FBTztnQkFDUEMsV0FBVztvQkFBQztvQkFBZTtpQkFBVztnQkFDdENDLEtBQUs7WUFDVDtZQUNBO2dCQUNJRixPQUFPO2dCQUNQQyxXQUFXO29CQUFDO29CQUFlO2lCQUFjO2dCQUN6Q0MsS0FBSztZQUNUO1NBQ0g7SUFDTDtJQUNBO1FBQ0lGLE9BQU87UUFDUE0sVUFBVTtZQUNOO2dCQUNJTixPQUFPO2dCQUNQQyxXQUFXO29CQUFDO29CQUFvQjtpQkFBUTtnQkFDeENDLEtBQUs7WUFDVDtZQUNBO2dCQUNJRixPQUFPO2dCQUNQQyxXQUFXO29CQUFDO29CQUFvQjtpQkFBUztnQkFDekNDLEtBQUs7WUFDVDtZQUNBO2dCQUNJRixPQUFPO2dCQUNQQyxXQUFXO29CQUFDO29CQUFvQjtpQkFBYTtnQkFDN0NDLEtBQUs7WUFDVDtTQUNIO0lBQ0w7Q0FDSDtBQUVELFNBQVNLLFFBQVEsS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWOztJQUNiLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxhQUFhLEVBQUUsR0FBR25CLDZEQUFRQTtJQUM5QyxNQUFNLENBQUNvQixTQUFTQyxXQUFXLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNvQixPQUFPQyxTQUFTLEdBQUdyQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU1zQixPQUFPbEIsd0RBQVdBLENBQUNDLG1FQUFZQTtJQUNyQyxNQUFNa0IsU0FBUzNCLDBEQUFTQTtJQUV4QixlQUFlNEIsaUJBQWlCQyxRQUFRO1FBQ3BDLE9BQU9SLGNBQWNTLEdBQUcsQ0FBQyxnQkFBeUIsT0FBVEQ7SUFDN0M7SUFFQTFCLGdEQUFTQSxDQUFDO1FBQ04sSUFBSSxDQUFDaUIsWUFDRDtRQUNIO1lBQ0csTUFBTVcsV0FBVyxNQUFNSCxpQkFBaUJULE9BQU9VLFFBQVEsRUFBRUcsS0FBSyxDQUFDQyxDQUFBQTtnQkFFM0ROLE9BQU9PLElBQUksQ0FBQyxRQUFRQyxXQUFXO29CQUFFQyxTQUFTO2dCQUFLO1lBQ25EO1lBQ0EsSUFBSSxDQUFDTCxVQUNEO1lBQ0pSLFdBQVdRLFNBQVNNLElBQUksQ0FBQ2YsT0FBTztZQUNoQ0csU0FBU00sU0FBU00sSUFBSSxDQUFDQyxLQUFLO1lBQzVCQyxRQUFRQyxHQUFHLENBQUMsYUFBYVQ7UUFDN0I7UUFDQVEsUUFBUUMsR0FBRyxDQUFDLGNBQWNyQjtJQUM5QixHQUFHO1FBQUNBO1FBQVFDO0tBQVc7SUFDdkIscUJBQU8sOERBQUNkLHFEQUFJQTtRQUFDbUMsUUFBUTs7MEJBQ2pCLDhEQUFDbkMscURBQUlBO2dCQUFDb0MsU0FBUTswQkFDVHBCLHlCQUFXLDhEQUFDZiwyREFBVUE7OEJBQUMsNEVBQUNvQztrQ0FBSXJCLFFBQVFzQixFQUFFLElBQUlsQixLQUFLa0IsRUFBRSxHQUFHLGlCQUFpQixjQUErQixPQUFqQnRCLFFBQVFPLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRXhHLDhEQUFDeEIsc0RBQUtBO2dCQUNGSyxTQUFTQTtnQkFDVG1DLFlBQVlyQjtnQkFDWnNCLFFBQVE7Z0JBQ1JDLE1BQUs7Z0JBQ0xDLFFBQVE7b0JBQUVDLEdBQUc7b0JBQXFCQyxHQUFHO2dCQUFJOzs7Ozs7Ozs7Ozs7QUFHckQ7R0F2Q1NoQzs7UUFDaUNoQix5REFBUUE7UUFHakNNLG9EQUFXQTtRQUNUUixzREFBU0E7OztLQUxuQmtCO0FBeUNULCtEQUFlLE1BQUFqQixxREFBUUEsQ0FBQ2lCLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9maWxlL1t1c2VybmFtZV0vcGFnZS5qcz9jNWQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vd2l0aEF1dGgnO1xuaW1wb3J0IHsgdXNlQXhpb3MgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvYXhpb3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYmxlLCBGbGV4LCBUeXBvZ3JhcGh5IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlclNlbGVjdG9yIH0gZnJvbSBcIkAvYXBwL3JlZHV4L3Nlc3Npb25SZWR1Y2VyXCI7XG5cbmNvbnN0IGNvbHVtbnMgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Njb3JlIExpbWl0JyxcbiAgICAgICAgZGF0YUluZGV4OiAnc2NvcmVMaW1pdCcsXG4gICAgICAgIGtleTogJ3Njb3JlTGltaXQnLFxuICAgICAgICB3aWR0aDogMTAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0lzIFdpbm5lcicsXG4gICAgICAgIGRhdGFJbmRleDogJ2lzV2lubmVyJyxcbiAgICAgICAga2V5OiAnaXNXaW5uZXInLFxuICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICByZW5kZXI6IChpc1dpbm5lcikgPT4gKGlzV2lubmVyID8gJ1llcycgOiAnTm8nKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdMZWZ0IFBsYXllcicsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdVc2VybmFtZScsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ2xlZnRQbGF5ZXInLCAndXNlcm5hbWUnXSxcbiAgICAgICAgICAgICAgICBrZXk6ICdsZWZ0UGxheWVyVXNlcm5hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Rpc3BsYXkgTmFtZScsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ2xlZnRQbGF5ZXInLCAnZGlzcGxheW5hbWUnXSxcbiAgICAgICAgICAgICAgICBrZXk6ICdsZWZ0UGxheWVyRGlzcGxheW5hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdMZWZ0IFBsYXllciBTY29yZScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMZXZlbCcsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ2xlZnRQbGF5ZXJTY29yZScsICdsZXZlbCddLFxuICAgICAgICAgICAgICAgIGtleTogJ2xlZnRQbGF5ZXJMZXZlbCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnUG9pbnRzJyxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFsnbGVmdFBsYXllclNjb3JlJywgJ3BvaW50cyddLFxuICAgICAgICAgICAgICAgIGtleTogJ2xlZnRQbGF5ZXJQb2ludHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xpbmUgQ2xlYXJzJyxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFsnbGVmdFBsYXllclNjb3JlJywgJ2xpbmVDbGVhcnMnXSxcbiAgICAgICAgICAgICAgICBrZXk6ICdsZWZ0UGxheWVyTGluZUNsZWFycycsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1JpZ2h0IFBsYXllcicsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdVc2VybmFtZScsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ3JpZ2h0UGxheWVyJywgJ3VzZXJuYW1lJ10sXG4gICAgICAgICAgICAgICAga2V5OiAncmlnaHRQbGF5ZXJVc2VybmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnRGlzcGxheSBOYW1lJyxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFsncmlnaHRQbGF5ZXInLCAnZGlzcGxheW5hbWUnXSxcbiAgICAgICAgICAgICAgICBrZXk6ICdyaWdodFBsYXllckRpc3BsYXluYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnUmlnaHQgUGxheWVyIFNjb3JlJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xldmVsJyxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFsncmlnaHRQbGF5ZXJTY29yZScsICdsZXZlbCddLFxuICAgICAgICAgICAgICAgIGtleTogJ3JpZ2h0UGxheWVyTGV2ZWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BvaW50cycsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ3JpZ2h0UGxheWVyU2NvcmUnLCAncG9pbnRzJ10sXG4gICAgICAgICAgICAgICAga2V5OiAncmlnaHRQbGF5ZXJQb2ludHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xpbmUgQ2xlYXJzJyxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFsncmlnaHRQbGF5ZXJTY29yZScsICdsaW5lQ2xlYXJzJ10sXG4gICAgICAgICAgICAgICAga2V5OiAncmlnaHRQbGF5ZXJMaW5lQ2xlYXJzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbl07XG5cbmZ1bmN0aW9uIFByb2ZpbGUoeyBwYXJhbXMgfSkge1xuICAgIGNvbnN0IHsgYXhpb3NSZWFkeSwgYXhpb3NJbnN0YW5jZSB9ID0gdXNlQXhpb3MoKTtcbiAgICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZ2FtZXMsIHNldEdhbWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IodXNlclNlbGVjdG9yKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlclByb2ZpbGUodXNlcm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGF4aW9zSW5zdGFuY2UuZ2V0KGAvdXNlclByb2ZpbGUvJHt1c2VybmFtZX1gKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWF4aW9zUmVhZHkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoVXNlclByb2ZpbGUocGFyYW1zLnVzZXJuYW1lKS5jYXRjaChlID0+IHtcblxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiLzQwNFwiLCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZXRQcm9maWxlKHJlc3BvbnNlLmRhdGEucHJvZmlsZSk7XG4gICAgICAgICAgICBzZXRHYW1lcyhyZXNwb25zZS5kYXRhLkdhbWVzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIXJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJhbXMgYXJlXCIsIHBhcmFtcyk7XG4gICAgfSwgW3BhcmFtcywgYXhpb3NSZWFkeV0pO1xuICAgIHJldHVybiA8RmxleCB2ZXJ0aWNhbD5cbiAgICAgICAgPEZsZXgganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAge3Byb2ZpbGUgJiYgPFR5cG9ncmFwaHk+PGgxPntwcm9maWxlLmlkID09IHVzZXIuaWQgPyAnWW91ciBwcm9maWxlJyA6IGBQcm9maWxlIG9mICR7cHJvZmlsZS51c2VybmFtZX1gfTwvaDE+PC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgPC9GbGV4PlxuICAgICAgICA8VGFibGVcbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICBkYXRhU291cmNlPXtnYW1lc31cbiAgICAgICAgICAgIGJvcmRlcmVkXG4gICAgICAgICAgICBzaXplPVwibWlkZGxlXCJcbiAgICAgICAgICAgIHNjcm9sbD17eyB4OiAnY2FsYyg3MDBweCArIDUwJSknLCB5OiAyNDAgfX1cbiAgICAgICAgLz5cbiAgICA8L0ZsZXg+XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFByb2ZpbGUpOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ3aXRoQXV0aCIsInVzZUF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUYWJsZSIsIkZsZXgiLCJUeXBvZ3JhcGh5IiwidXNlU2VsZWN0b3IiLCJ1c2VyU2VsZWN0b3IiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJ3aWR0aCIsInJlbmRlciIsImlzV2lubmVyIiwiY2hpbGRyZW4iLCJQcm9maWxlIiwicGFyYW1zIiwiYXhpb3NSZWFkeSIsImF4aW9zSW5zdGFuY2UiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImdhbWVzIiwic2V0R2FtZXMiLCJ1c2VyIiwicm91dGVyIiwiZmV0Y2hVc2VyUHJvZmlsZSIsInVzZXJuYW1lIiwiZ2V0IiwicmVzcG9uc2UiLCJjYXRjaCIsImUiLCJwdXNoIiwidW5kZWZpbmVkIiwic2hhbGxvdyIsImRhdGEiLCJHYW1lcyIsImNvbnNvbGUiLCJsb2ciLCJ2ZXJ0aWNhbCIsImp1c3RpZnkiLCJoMSIsImlkIiwiZGF0YVNvdXJjZSIsImJvcmRlcmVkIiwic2l6ZSIsInNjcm9sbCIsIngiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/[username]/page.js\n"));

/***/ })

});