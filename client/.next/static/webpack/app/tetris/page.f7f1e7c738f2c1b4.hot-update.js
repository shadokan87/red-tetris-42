"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tetris/page",{

/***/ "(app-pages-browser)/./src/app/tetris/RenderTetris.js":
/*!****************************************!*\
  !*** ./src/app/tetris/RenderTetris.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RenderTetris: function() { return /* binding */ RenderTetris; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst RenderTetris = (param)=>{\n    let { children, tick, setTick } = param;\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        id: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                onClick: ()=>clearInterval(intervalId),\n                children: \"stop game\"\n            }, void 0, false, {\n                fileName: \"/app/src/app/tetris/RenderTetris.js\",\n                lineNumber: 4,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"playground\",\n                id: \"playGround\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"game-grid\",\n                    id: \"gameGrid\",\n                    ref: gameGrid\n                }, void 0, false, {\n                    fileName: \"/app/src/app/tetris/RenderTetris.js\",\n                    lineNumber: 6,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/app/src/app/tetris/RenderTetris.js\",\n                lineNumber: 5,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/app/tetris/RenderTetris.js\",\n        lineNumber: 3,\n        columnNumber: 3\n    }, undefined);\n};\n_c = RenderTetris;\nvar _c;\n$RefreshReg$(_c, \"RenderTetris\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGV0cmlzL1JlbmRlclRldHJpcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrQztBQUMzQixNQUFNQyxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtrQkFDdEQsOERBQUNDO1FBQUtDLElBQUc7OzBCQUNQLDhEQUFDQztnQkFBT0MsU0FBUyxJQUFNQyxjQUFjQzswQkFBYzs7Ozs7OzBCQUNuRCw4REFBQ0M7Z0JBQUlDLFdBQVU7Z0JBQWFOLElBQUc7MEJBQzdCLDRFQUFDSztvQkFBSUMsV0FBVTtvQkFBWU4sSUFBRztvQkFBV08sS0FBS0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3BELEVBQUU7S0FQV2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90ZXRyaXMvUmVuZGVyVGV0cmlzLmpzPzJlMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgUmVuZGVyVGV0cmlzID0gKHsgY2hpbGRyZW4sIHRpY2ssIHNldFRpY2sgfSkgPT4ge1xuICA8bWFpbiBpZD1cIm1haW5cIj5cbiAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCl9PntcInN0b3AgZ2FtZVwifTwvQnV0dG9uPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWdyb3VuZFwiIGlkPVwicGxheUdyb3VuZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWdyaWRcIiBpZD1cImdhbWVHcmlkXCIgcmVmPXtnYW1lR3JpZH0+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbWFpbj47XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlJlbmRlclRldHJpcyIsImNoaWxkcmVuIiwidGljayIsInNldFRpY2siLCJtYWluIiwiaWQiLCJCdXR0b24iLCJvbkNsaWNrIiwiY2xlYXJJbnRlcnZhbCIsImludGVydmFsSWQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJnYW1lR3JpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/tetris/RenderTetris.js\n"));

/***/ })

});