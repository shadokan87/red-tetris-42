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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RenderTetris: function() { return /* binding */ RenderTetris; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tetris_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tetris.css */ \"(app-pages-browser)/./src/app/tetris/tetris.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst grid = 32;\nconst drawPieceAt = (gameGrid, data)=>{\n    const { row, col, color } = data;\n    const onePiece = document.createElement(\"div\");\n    onePiece.style.width = \"\".concat(grid, \"px\");\n    onePiece.style.height = \"\".concat(grid, \"px\");\n    onePiece.style.backgroundColor = color;\n    onePiece.style.border = \"1px solid black\";\n    onePiece.style.gridColumnStart = col;\n    onePiece.style.gridRowStart = row;\n    onePiece.setAttribute(\"id\", \"currentPiece\");\n    gameGrid.current.appendChild(onePiece);\n};\nconst RenderTetris = (param)=>{\n    let { children, tick, setTick, onGridReady } = param;\n    _s();\n    const gameGrid = useRef(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!gameGrid) return;\n        onGridReady(gameGrid);\n    }, [\n        gameGrid\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (tick) {\n            while(gameGrid.current.firstChild){\n                gameGrid.current.removeChild(gameGrid.current.firstChild);\n            }\n            setTick(false);\n        }\n    }, [\n        tick\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        id: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                onClick: ()=>clearInterval(intervalId),\n                children: \"stop game\"\n            }, void 0, false, {\n                fileName: \"/app/src/app/tetris/RenderTetris.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"playground\",\n                id: \"playGround\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"game-grid\",\n                    id: \"gameGrid\",\n                    ref: gameGrid\n                }, void 0, false, {\n                    fileName: \"/app/src/app/tetris/RenderTetris.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/app/src/app/tetris/RenderTetris.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/app/tetris/RenderTetris.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RenderTetris, \"Qxr1zOKSBFtxZ+H8+ALvRmdhPog=\");\n_c = RenderTetris;\nvar _c;\n$RefreshReg$(_c, \"RenderTetris\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGV0cmlzL1JlbmRlclRldHJpcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDO0FBQ1o7QUFFdEIsTUFBTUMsT0FBTztBQUNiLE1BQU1DLGNBQWMsQ0FBQ0MsVUFBVUM7SUFDN0IsTUFBTSxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFLEdBQUdIO0lBQzVCLE1BQU1JLFdBQVdDLFNBQVNDLGFBQWEsQ0FBQztJQUN4Q0YsU0FBU0csS0FBSyxDQUFDQyxLQUFLLEdBQUcsR0FBUSxPQUFMWCxNQUFLO0lBQy9CTyxTQUFTRyxLQUFLLENBQUNFLE1BQU0sR0FBRyxHQUFRLE9BQUxaLE1BQUs7SUFDaENPLFNBQVNHLEtBQUssQ0FBQ0csZUFBZSxHQUFHUDtJQUNqQ0MsU0FBU0csS0FBSyxDQUFDSSxNQUFNLEdBQUc7SUFDeEJQLFNBQVNHLEtBQUssQ0FBQ0ssZUFBZSxHQUFHVjtJQUNqQ0UsU0FBU0csS0FBSyxDQUFDTSxZQUFZLEdBQUdaO0lBQzlCRyxTQUFTVSxZQUFZLENBQUMsTUFBTztJQUM3QmYsU0FBU2dCLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDWjtBQUMvQjtBQUNPLE1BQU1hLGVBQWU7UUFBQyxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxXQUFXLEVBQUU7O0lBQ25FLE1BQU10QixXQUFXdUIsT0FBTztJQUV4QjFCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDRyxVQUFVO1FBQ2ZzQixZQUFZdEI7SUFDZCxHQUFHO1FBQUNBO0tBQVM7SUFFYkgsZ0RBQVNBLENBQUM7UUFDUixJQUFJdUIsTUFBTTtZQUNSLE1BQU9wQixTQUFTZ0IsT0FBTyxDQUFDUSxVQUFVLENBQUU7Z0JBQ2xDeEIsU0FBU2dCLE9BQU8sQ0FBQ1MsV0FBVyxDQUFDekIsU0FBU2dCLE9BQU8sQ0FBQ1EsVUFBVTtZQUMxRDtZQUNBSCxRQUFRO1FBQ1Y7SUFDRixHQUFHO1FBQUNEO0tBQUs7SUFDVCxxQkFDRSw4REFBQ007UUFBS0MsSUFBRzs7MEJBQ1AsOERBQUNDO2dCQUFPQyxTQUFTLElBQU1DLGNBQWNDOzBCQUFjOzs7Ozs7MEJBQ25ELDhEQUFDQztnQkFBSUMsV0FBVTtnQkFBYU4sSUFBRzswQkFDN0IsNEVBQUNLO29CQUFJQyxXQUFVO29CQUFZTixJQUFHO29CQUFXTyxLQUFLbEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRELEVBQUU7R0F4QldrQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3RldHJpcy9SZW5kZXJUZXRyaXMuanM/MmUwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vdGV0cmlzLmNzc1wiO1xuXG5jb25zdCBncmlkID0gMzI7XG5jb25zdCBkcmF3UGllY2VBdCA9IChnYW1lR3JpZCwgZGF0YSkgPT4ge1xuICBjb25zdCB7IHJvdywgY29sLCBjb2xvciB9ID0gZGF0YTtcbiAgY29uc3Qgb25lUGllY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvbmVQaWVjZS5zdHlsZS53aWR0aCA9IGAke2dyaWR9cHhgO1xuICBvbmVQaWVjZS5zdHlsZS5oZWlnaHQgPSBgJHtncmlkfXB4YDtcbiAgb25lUGllY2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gIG9uZVBpZWNlLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XG4gIG9uZVBpZWNlLnN0eWxlLmdyaWRDb2x1bW5TdGFydCA9IGNvbDtcbiAgb25lUGllY2Uuc3R5bGUuZ3JpZFJvd1N0YXJ0ID0gcm93O1xuICBvbmVQaWVjZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgY3VycmVudFBpZWNlYCk7XG4gIGdhbWVHcmlkLmN1cnJlbnQuYXBwZW5kQ2hpbGQob25lUGllY2UpO1xufTtcbmV4cG9ydCBjb25zdCBSZW5kZXJUZXRyaXMgPSAoeyBjaGlsZHJlbiwgdGljaywgc2V0VGljaywgb25HcmlkUmVhZHkgfSkgPT4ge1xuICBjb25zdCBnYW1lR3JpZCA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZ2FtZUdyaWQpIHJldHVybjtcbiAgICBvbkdyaWRSZWFkeShnYW1lR3JpZCk7XG4gIH0sIFtnYW1lR3JpZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRpY2spIHtcbiAgICAgIHdoaWxlIChnYW1lR3JpZC5jdXJyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZ2FtZUdyaWQuY3VycmVudC5yZW1vdmVDaGlsZChnYW1lR3JpZC5jdXJyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgc2V0VGljayhmYWxzZSk7XG4gICAgfVxuICB9LCBbdGlja10pO1xuICByZXR1cm4gKFxuICAgIDxtYWluIGlkPVwibWFpblwiPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsSWQpfT57XCJzdG9wIGdhbWVcIn08L0J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWdyb3VuZFwiIGlkPVwicGxheUdyb3VuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtZ3JpZFwiIGlkPVwiZ2FtZUdyaWRcIiByZWY9e2dhbWVHcmlkfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiZ3JpZCIsImRyYXdQaWVjZUF0IiwiZ2FtZUdyaWQiLCJkYXRhIiwicm93IiwiY29sIiwiY29sb3IiLCJvbmVQaWVjZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93U3RhcnQiLCJzZXRBdHRyaWJ1dGUiLCJjdXJyZW50IiwiYXBwZW5kQ2hpbGQiLCJSZW5kZXJUZXRyaXMiLCJjaGlsZHJlbiIsInRpY2siLCJzZXRUaWNrIiwib25HcmlkUmVhZHkiLCJ1c2VSZWYiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJtYWluIiwiaWQiLCJCdXR0b24iLCJvbkNsaWNrIiwiY2xlYXJJbnRlcnZhbCIsImludGVydmFsSWQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/tetris/RenderTetris.js\n"));

/***/ })

});