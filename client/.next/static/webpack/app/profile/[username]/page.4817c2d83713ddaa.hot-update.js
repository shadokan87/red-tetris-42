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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../withAuth */ \"(app-pages-browser)/./src/app/withAuth.js\");\n/* harmony import */ var _app_contexts_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/axios */ \"(app-pages-browser)/./src/app/contexts/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nasync function fetchUserProfile(_axios, username) {\n    try {\n        const response = _axios.get(\"/userProfile/\".concat(username));\n        return response;\n    } catch (e) {\n        console.error(e);\n    }\n}\nconst data = {\n    \"scoreLimit\": 100,\n    \"isWinner\": true,\n    \"leftPlayer\": {\n        \"username\": \"shadokan87\",\n        \"displayname\": \"shadokan\"\n    },\n    \"leftPlayerScore\": {\n        \"level\": 2,\n        \"points\": 100,\n        \"lineClears\": 1\n    },\n    \"rightPlayer\": {\n        \"username\": \"shinobi87\",\n        \"displayname\": \"shinobi\"\n    },\n    \"rightPlayerScore\": {\n        \"level\": 1,\n        \"points\": 0,\n        \"lineClears\": 0\n    }\n};\nfunction Profile(param) {\n    let { params } = param;\n    _s();\n    const { axiosReady, axiosInstance } = (0,_app_contexts_axios__WEBPACK_IMPORTED_MODULE_3__.useAxios)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const columns = [\n        {\n            title: \"Score Limit\",\n            dataIndex: \"scoreLimit\",\n            key: \"scoreLimit\",\n            width: 100\n        },\n        {\n            title: \"Is Winner\",\n            dataIndex: \"isWinner\",\n            key: \"isWinner\",\n            width: 100,\n            render: (isWinner)=>isWinner ? \"Yes\" : \"No\"\n        },\n        {\n            title: \"Left Player\",\n            children: [\n                {\n                    title: \"Username\",\n                    dataIndex: [\n                        \"leftPlayer\",\n                        \"username\"\n                    ],\n                    key: \"leftPlayerUsername\"\n                },\n                {\n                    title: \"Display Name\",\n                    dataIndex: [\n                        \"leftPlayer\",\n                        \"displayname\"\n                    ],\n                    key: \"leftPlayerDisplayname\"\n                }\n            ]\n        },\n        {\n            title: \"Left Player Score\",\n            children: [\n                {\n                    title: \"Level\",\n                    dataIndex: [\n                        \"leftPlayerScore\",\n                        \"level\"\n                    ],\n                    key: \"leftPlayerLevel\"\n                },\n                {\n                    title: \"Points\",\n                    dataIndex: [\n                        \"leftPlayerScore\",\n                        \"points\"\n                    ],\n                    key: \"leftPlayerPoints\"\n                },\n                {\n                    title: \"Line Clears\",\n                    dataIndex: [\n                        \"leftPlayerScore\",\n                        \"lineClears\"\n                    ],\n                    key: \"leftPlayerLineClears\"\n                }\n            ]\n        },\n        {\n            title: \"Right Player\",\n            children: [\n                {\n                    title: \"Username\",\n                    dataIndex: [\n                        \"rightPlayer\",\n                        \"username\"\n                    ],\n                    key: \"rightPlayerUsername\"\n                },\n                {\n                    title: \"Display Name\",\n                    dataIndex: [\n                        \"rightPlayer\",\n                        \"displayname\"\n                    ],\n                    key: \"rightPlayerDisplayname\"\n                }\n            ]\n        },\n        {\n            title: \"Right Player Score\",\n            children: [\n                {\n                    title: \"Level\",\n                    dataIndex: [\n                        \"rightPlayerScore\",\n                        \"level\"\n                    ],\n                    key: \"rightPlayerLevel\"\n                },\n                {\n                    title: \"Points\",\n                    dataIndex: [\n                        \"rightPlayerScore\",\n                        \"points\"\n                    ],\n                    key: \"rightPlayerPoints\"\n                },\n                {\n                    title: \"Line Clears\",\n                    dataIndex: [\n                        \"rightPlayerScore\",\n                        \"lineClears\"\n                    ],\n                    key: \"rightPlayerLineClears\"\n                }\n            ]\n        }\n    ];\n    // const columns = [\n    //     {\n    //         title: 'scoreLimit',\n    //         key: 'scoreLimit',\n    //         fixed: 'left'\n    //     },\n    //     {\n    //         title: 'leftPlayer'\n    //     }\n    // ]\n    // useEffect(() => {\n    //     if (!axiosReady)\n    //         return;\n    //     (async () => {\n    //         const response = await fetchUserProfile(axiosInstance, params.username);\n    //         console.log(\"!response\", response);\n    //     })();\n    //     console.log(\"params are\", params);\n    // }, [params, axiosReady]);\n    if (!user) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"profile page\" + JSON.stringify(params)\n    }, void 0, false, {\n        fileName: \"/app/src/app/profile/[username]/page.js\",\n        lineNumber: 148,\n        columnNumber: 16\n    }, this);\n    else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: \"ok\"\n    }, void 0, false);\n}\n_s(Profile, \"sFWrg7czYryBWpI+dhHNtga3UhI=\", false, function() {\n    return [\n        _app_contexts_axios__WEBPACK_IMPORTED_MODULE_3__.useAxios\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Profile));\nvar _c, _c1;\n$RefreshReg$(_c, \"Profile\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9bdXNlcm5hbWVdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3QztBQUNGO0FBQ1U7QUFDSjtBQUU1QyxlQUFlSyxpQkFBaUJDLE1BQU0sRUFBRUMsUUFBUTtJQUM1QyxJQUFJO1FBQ0EsTUFBTUMsV0FBV0YsT0FBT0csR0FBRyxDQUFDLGdCQUF5QixPQUFURjtRQUM1QyxPQUFPQztJQUNYLEVBQUUsT0FBT0UsR0FBRztRQUNSQyxRQUFRQyxLQUFLLENBQUNGO0lBQ2xCO0FBQ0o7QUFDQSxNQUFNRyxPQUFPO0lBQ1QsY0FBYztJQUNkLFlBQVk7SUFDWixjQUFjO1FBQ1YsWUFBWTtRQUNaLGVBQWU7SUFDbkI7SUFDQSxtQkFBbUI7UUFDZixTQUFTO1FBQ1QsVUFBVTtRQUNWLGNBQWM7SUFDbEI7SUFDQSxlQUFlO1FBQ1gsWUFBWTtRQUNaLGVBQWU7SUFDbkI7SUFDQSxvQkFBb0I7UUFDaEIsU0FBUztRQUNULFVBQVU7UUFDVixjQUFjO0lBQ2xCO0FBQ0o7QUFDQSxTQUFTQyxRQUFRLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjs7SUFDYixNQUFNLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUFFLEdBQUdmLDZEQUFRQTtJQUM5QyxNQUFNLENBQUNnQixNQUFNQyxRQUFRLEdBQUdmLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1nQixVQUFVO1FBQ1o7WUFDRUMsT0FBTztZQUNQQyxXQUFXO1lBQ1hDLEtBQUs7WUFDTEMsT0FBTztRQUNUO1FBQ0E7WUFDRUgsT0FBTztZQUNQQyxXQUFXO1lBQ1hDLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxRQUFRLENBQUNDLFdBQWNBLFdBQVcsUUFBUTtRQUM1QztRQUNBO1lBQ0VMLE9BQU87WUFDUE0sVUFBVTtnQkFDUjtvQkFDRU4sT0FBTztvQkFDUEMsV0FBVzt3QkFBQzt3QkFBYztxQkFBVztvQkFDckNDLEtBQUs7Z0JBQ1A7Z0JBQ0E7b0JBQ0VGLE9BQU87b0JBQ1BDLFdBQVc7d0JBQUM7d0JBQWM7cUJBQWM7b0JBQ3hDQyxLQUFLO2dCQUNQO2FBQ0Q7UUFDSDtRQUNBO1lBQ0VGLE9BQU87WUFDUE0sVUFBVTtnQkFDUjtvQkFDRU4sT0FBTztvQkFDUEMsV0FBVzt3QkFBQzt3QkFBbUI7cUJBQVE7b0JBQ3ZDQyxLQUFLO2dCQUNQO2dCQUNBO29CQUNFRixPQUFPO29CQUNQQyxXQUFXO3dCQUFDO3dCQUFtQjtxQkFBUztvQkFDeENDLEtBQUs7Z0JBQ1A7Z0JBQ0E7b0JBQ0VGLE9BQU87b0JBQ1BDLFdBQVc7d0JBQUM7d0JBQW1CO3FCQUFhO29CQUM1Q0MsS0FBSztnQkFDUDthQUNEO1FBQ0g7UUFDQTtZQUNFRixPQUFPO1lBQ1BNLFVBQVU7Z0JBQ1I7b0JBQ0VOLE9BQU87b0JBQ1BDLFdBQVc7d0JBQUM7d0JBQWU7cUJBQVc7b0JBQ3RDQyxLQUFLO2dCQUNQO2dCQUNBO29CQUNFRixPQUFPO29CQUNQQyxXQUFXO3dCQUFDO3dCQUFlO3FCQUFjO29CQUN6Q0MsS0FBSztnQkFDUDthQUNEO1FBQ0g7UUFDQTtZQUNFRixPQUFPO1lBQ1BNLFVBQVU7Z0JBQ1I7b0JBQ0VOLE9BQU87b0JBQ1BDLFdBQVc7d0JBQUM7d0JBQW9CO3FCQUFRO29CQUN4Q0MsS0FBSztnQkFDUDtnQkFDQTtvQkFDRUYsT0FBTztvQkFDUEMsV0FBVzt3QkFBQzt3QkFBb0I7cUJBQVM7b0JBQ3pDQyxLQUFLO2dCQUNQO2dCQUNBO29CQUNFRixPQUFPO29CQUNQQyxXQUFXO3dCQUFDO3dCQUFvQjtxQkFBYTtvQkFDN0NDLEtBQUs7Z0JBQ1A7YUFDRDtRQUNIO0tBQ0Q7SUFFSCxvQkFBb0I7SUFDcEIsUUFBUTtJQUNSLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsOEJBQThCO0lBQzlCLFFBQVE7SUFDUixJQUFJO0lBRUosb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1GQUFtRjtJQUNuRiw4Q0FBOEM7SUFDOUMsWUFBWTtJQUNaLHlDQUF5QztJQUN6Qyw0QkFBNEI7SUFDNUIsSUFBSSxDQUFDTCxNQUNELHFCQUFPLDhEQUFDVTtrQkFBSSxpQkFBaUJDLEtBQUtDLFNBQVMsQ0FBQ2Y7Ozs7OztTQUMzQyxxQkFBTztrQkFBRzs7QUFDbkI7R0FqSFNEOztRQUNpQ1oseURBQVFBOzs7S0FEekNZO0FBbUhULCtEQUFlLE1BQUFiLHFEQUFRQSxDQUFDYSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZmlsZS9bdXNlcm5hbWVdL3BhZ2UuanM/YzVkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHVzZVJvdXRlciBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vd2l0aEF1dGgnO1xuaW1wb3J0IHsgdXNlQXhpb3MgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvYXhpb3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyUHJvZmlsZShfYXhpb3MsIHVzZXJuYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBfYXhpb3MuZ2V0KGAvdXNlclByb2ZpbGUvJHt1c2VybmFtZX1gKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG59XG5jb25zdCBkYXRhID0ge1xuICAgIFwic2NvcmVMaW1pdFwiOiAxMDAsXG4gICAgXCJpc1dpbm5lclwiOiB0cnVlLFxuICAgIFwibGVmdFBsYXllclwiOiB7XG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJzaGFkb2thbjg3XCIsXG4gICAgICAgIFwiZGlzcGxheW5hbWVcIjogXCJzaGFkb2thblwiXG4gICAgfSxcbiAgICBcImxlZnRQbGF5ZXJTY29yZVwiOiB7XG4gICAgICAgIFwibGV2ZWxcIjogMixcbiAgICAgICAgXCJwb2ludHNcIjogMTAwLFxuICAgICAgICBcImxpbmVDbGVhcnNcIjogMVxuICAgIH0sXG4gICAgXCJyaWdodFBsYXllclwiOiB7XG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJzaGlub2JpODdcIixcbiAgICAgICAgXCJkaXNwbGF5bmFtZVwiOiBcInNoaW5vYmlcIlxuICAgIH0sXG4gICAgXCJyaWdodFBsYXllclNjb3JlXCI6IHtcbiAgICAgICAgXCJsZXZlbFwiOiAxLFxuICAgICAgICBcInBvaW50c1wiOiAwLFxuICAgICAgICBcImxpbmVDbGVhcnNcIjogMFxuICAgIH1cbn1cbmZ1bmN0aW9uIFByb2ZpbGUoeyBwYXJhbXMgfSkge1xuICAgIGNvbnN0IHsgYXhpb3NSZWFkeSwgYXhpb3NJbnN0YW5jZSB9ID0gdXNlQXhpb3MoKTtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ1Njb3JlIExpbWl0JyxcbiAgICAgICAgICBkYXRhSW5kZXg6ICdzY29yZUxpbWl0JyxcbiAgICAgICAgICBrZXk6ICdzY29yZUxpbWl0JyxcbiAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdJcyBXaW5uZXInLFxuICAgICAgICAgIGRhdGFJbmRleDogJ2lzV2lubmVyJyxcbiAgICAgICAgICBrZXk6ICdpc1dpbm5lcicsXG4gICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICByZW5kZXI6IChpc1dpbm5lcikgPT4gKGlzV2lubmVyID8gJ1llcycgOiAnTm8nKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnTGVmdCBQbGF5ZXInLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnVXNlcm5hbWUnLFxuICAgICAgICAgICAgICBkYXRhSW5kZXg6IFsnbGVmdFBsYXllcicsICd1c2VybmFtZSddLFxuICAgICAgICAgICAgICBrZXk6ICdsZWZ0UGxheWVyVXNlcm5hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdEaXNwbGF5IE5hbWUnLFxuICAgICAgICAgICAgICBkYXRhSW5kZXg6IFsnbGVmdFBsYXllcicsICdkaXNwbGF5bmFtZSddLFxuICAgICAgICAgICAgICBrZXk6ICdsZWZ0UGxheWVyRGlzcGxheW5hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdMZWZ0IFBsYXllciBTY29yZScsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdMZXZlbCcsXG4gICAgICAgICAgICAgIGRhdGFJbmRleDogWydsZWZ0UGxheWVyU2NvcmUnLCAnbGV2ZWwnXSxcbiAgICAgICAgICAgICAga2V5OiAnbGVmdFBsYXllckxldmVsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnUG9pbnRzJyxcbiAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ2xlZnRQbGF5ZXJTY29yZScsICdwb2ludHMnXSxcbiAgICAgICAgICAgICAga2V5OiAnbGVmdFBsYXllclBvaW50cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJ0xpbmUgQ2xlYXJzJyxcbiAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ2xlZnRQbGF5ZXJTY29yZScsICdsaW5lQ2xlYXJzJ10sXG4gICAgICAgICAgICAgIGtleTogJ2xlZnRQbGF5ZXJMaW5lQ2xlYXJzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnUmlnaHQgUGxheWVyJyxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJ1VzZXJuYW1lJyxcbiAgICAgICAgICAgICAgZGF0YUluZGV4OiBbJ3JpZ2h0UGxheWVyJywgJ3VzZXJuYW1lJ10sXG4gICAgICAgICAgICAgIGtleTogJ3JpZ2h0UGxheWVyVXNlcm5hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdEaXNwbGF5IE5hbWUnLFxuICAgICAgICAgICAgICBkYXRhSW5kZXg6IFsncmlnaHRQbGF5ZXInLCAnZGlzcGxheW5hbWUnXSxcbiAgICAgICAgICAgICAga2V5OiAncmlnaHRQbGF5ZXJEaXNwbGF5bmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ1JpZ2h0IFBsYXllciBTY29yZScsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdMZXZlbCcsXG4gICAgICAgICAgICAgIGRhdGFJbmRleDogWydyaWdodFBsYXllclNjb3JlJywgJ2xldmVsJ10sXG4gICAgICAgICAgICAgIGtleTogJ3JpZ2h0UGxheWVyTGV2ZWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdQb2ludHMnLFxuICAgICAgICAgICAgICBkYXRhSW5kZXg6IFsncmlnaHRQbGF5ZXJTY29yZScsICdwb2ludHMnXSxcbiAgICAgICAgICAgICAga2V5OiAncmlnaHRQbGF5ZXJQb2ludHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdMaW5lIENsZWFycycsXG4gICAgICAgICAgICAgIGRhdGFJbmRleDogWydyaWdodFBsYXllclNjb3JlJywgJ2xpbmVDbGVhcnMnXSxcbiAgICAgICAgICAgICAga2V5OiAncmlnaHRQbGF5ZXJMaW5lQ2xlYXJzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF07XG5cbiAgICAvLyBjb25zdCBjb2x1bW5zID0gW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICB0aXRsZTogJ3Njb3JlTGltaXQnLFxuICAgIC8vICAgICAgICAga2V5OiAnc2NvcmVMaW1pdCcsXG4gICAgLy8gICAgICAgICBmaXhlZDogJ2xlZnQnXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIHRpdGxlOiAnbGVmdFBsYXllcidcbiAgICAvLyAgICAgfVxuICAgIC8vIF1cblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGlmICghYXhpb3NSZWFkeSlcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgKGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hVc2VyUHJvZmlsZShheGlvc0luc3RhbmNlLCBwYXJhbXMudXNlcm5hbWUpO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCIhcmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xuICAgIC8vICAgICB9KSgpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInBhcmFtcyBhcmVcIiwgcGFyYW1zKTtcbiAgICAvLyB9LCBbcGFyYW1zLCBheGlvc1JlYWR5XSk7XG4gICAgaWYgKCF1c2VyKVxuICAgICAgICByZXR1cm4gPGgxPntcInByb2ZpbGUgcGFnZVwiICsgSlNPTi5zdHJpbmdpZnkocGFyYW1zKX08L2gxPlxuICAgIGVsc2UgcmV0dXJuIDw+e1wib2tcIn08Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFByb2ZpbGUpOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ3aXRoQXV0aCIsInVzZUF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmZXRjaFVzZXJQcm9maWxlIiwiX2F4aW9zIiwidXNlcm5hbWUiLCJyZXNwb25zZSIsImdldCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkYXRhIiwiUHJvZmlsZSIsInBhcmFtcyIsImF4aW9zUmVhZHkiLCJheGlvc0luc3RhbmNlIiwidXNlciIsInNldFVzZXIiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJ3aWR0aCIsInJlbmRlciIsImlzV2lubmVyIiwiY2hpbGRyZW4iLCJoMSIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/[username]/page.js\n"));

/***/ })

});