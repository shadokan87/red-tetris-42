"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signin/page",{

/***/ "(app-pages-browser)/./src/app/signin/page.js":
/*!********************************!*\
  !*** ./src/app/signin/page.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Signin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_sessionReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/sessionReducer */ \"(app-pages-browser)/./src/app/redux/sessionReducer.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input */ \"(app-pages-browser)/./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/typography */ \"(app-pages-browser)/./node_modules/antd/lib/typography/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ \"(app-pages-browser)/./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ \"(app-pages-browser)/./node_modules/antd/lib/form/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n\nconst SIGNIN_URL = \"http://localhost:3000/auth/signin\";\nasync function loginUser(payload) {}\nfunction Signin() {\n    const onFinish = (values)=>{\n        console.log(\"Received values of form: \", values);\n        (async ()=>await loginUser(values))();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"landing\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/app/src/app/signin/page.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onFinish: onFinish,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                        name: \"username\",\n                        rules: [\n                            {\n                                required: true\n                            }\n                        ],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            placeholder: \"username\"\n                        }, void 0, false, {\n                            fileName: \"/app/src/app/signin/page.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/signin/page.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                        name: \"password\",\n                        rules: [\n                            {\n                                required: true\n                            }\n                        ],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Password, {\n                            placeholder: \"password\"\n                        }, void 0, false, {\n                            fileName: \"/app/src/app/signin/page.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/signin/page.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            type: \"primary\",\n                            htmlType: \"submit\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                children: \"Signin\"\n                            }, void 0, false, {\n                                fileName: \"/app/src/app/signin/page.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/app/src/app/signin/page.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/signin/page.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/src/app/signin/page.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/app/signin/page.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = Signin;\nvar _c;\n$RefreshReg$(_c, \"Signin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbmluL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMwQztBQUNjO0FBQ0Q7QUFDTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hDO0FBRTdCLE1BQU1RLGFBQWE7QUFFbkIsZUFBZUMsVUFBVUMsT0FBTyxHQUFHO0FBRXBCLFNBQVNDO0lBQ3RCLE1BQU1DLFdBQVcsQ0FBQ0M7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQyw2QkFBNkJGO1FBQ3hDLFdBQVksTUFBTUosVUFBVUksT0FBTTtJQUNyQztJQUVBLHFCQUNFLDhEQUFDRztRQUFLQyxXQUFXOzswQkFDZiw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDWCxxREFBSUE7Z0JBQUNLLFVBQVVBOztrQ0FDZCw4REFBQ0wscURBQUlBLENBQUNZLElBQUk7d0JBQUNDLE1BQUs7d0JBQVdDLE9BQU87NEJBQUM7Z0NBQUVDLFVBQVU7NEJBQUs7eUJBQUU7a0NBQ3BELDRFQUFDbEIsc0RBQUtBOzRCQUFDbUIsYUFBWTs7Ozs7Ozs7Ozs7a0NBRXJCLDhEQUFDaEIscURBQUlBLENBQUNZLElBQUk7d0JBQUNDLE1BQUs7d0JBQVdDLE9BQU87NEJBQUM7Z0NBQUVDLFVBQVU7NEJBQUs7eUJBQUU7a0NBQ3BELDRFQUFDbEIsc0RBQUtBLENBQUNvQixRQUFROzRCQUFDRCxhQUFZOzs7Ozs7Ozs7OztrQ0FFOUIsOERBQUNoQixxREFBSUEsQ0FBQ1ksSUFBSTtrQ0FDUiw0RUFBQ2Isd0RBQU1BOzRCQUFDbUIsTUFBSzs0QkFBVUMsVUFBUztzQ0FDOUIsNEVBQUNyQiwyREFBVUE7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekI7S0F4QndCTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NpZ25pbi9wYWdlLmpzP2ZiMjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdG9rZW5TZWxlY3RvciB9IGZyb20gXCIuLi9yZWR1eC9zZXNzaW9uUmVkdWNlclwiO1xuaW1wb3J0IHsgdXNlclNlbGVjdG9yIH0gZnJvbSBcIi4uL3JlZHV4L3Nlc3Npb25SZWR1Y2VyXCI7XG5pbXBvcnQgeyBGbGV4LCBJbnB1dCwgVHlwb2dyYXBoeSwgQnV0dG9uLCBGb3JtIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBcIi4vc2lnbmluLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgU0lHTklOX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvc2lnbmluXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvZ2luVXNlcihwYXlsb2FkKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduaW4oKSB7XG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgdmFsdWVzIG9mIGZvcm06IFwiLCB2YWx1ZXMpO1xuICAgIChhc3luYyAoKSA9PiBhd2FpdCBsb2dpblVzZXIodmFsdWVzKSkoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17XCJsYW5kaW5nXCJ9PlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDxGb3JtIG9uRmluaXNoPXtvbkZpbmlzaH0+XG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInVzZXJuYW1lXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlIH1dfT5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiIC8+XG4gICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJwYXNzd29yZFwiIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSB9XX0+XG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PntcIlNpZ25pblwifTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwidG9rZW5TZWxlY3RvciIsInVzZXJTZWxlY3RvciIsIkZsZXgiLCJJbnB1dCIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJGb3JtIiwiU0lHTklOX1VSTCIsImxvZ2luVXNlciIsInBheWxvYWQiLCJTaWduaW4iLCJvbkZpbmlzaCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiSXRlbSIsIm5hbWUiLCJydWxlcyIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJQYXNzd29yZCIsInR5cGUiLCJodG1sVHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signin/page.js\n"));

/***/ })

});