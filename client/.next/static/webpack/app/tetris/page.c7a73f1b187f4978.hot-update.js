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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RenderTetris: function() { return /* binding */ RenderTetris; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ \"(app-pages-browser)/./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _tetris_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tetris.css */ \"(app-pages-browser)/./src/app/tetris/tetris.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst grid = 32;\nconst drawPieceAt = (gameGrid, data)=>{\n    const { row, col, color } = data;\n    const onePiece = document.createElement(\"div\");\n    onePiece.style.width = \"\".concat(grid, \"px\");\n    onePiece.style.height = \"\".concat(grid, \"px\");\n    onePiece.style.backgroundColor = color;\n    onePiece.style.border = \"1px solid black\";\n    onePiece.style.gridColumnStart = col;\n    onePiece.style.gridRowStart = row;\n    onePiece.setAttribute(\"id\", \"currentPiece\");\n    gameGrid.current.appendChild(onePiece);\n};\nconst RenderTetris = (param)=>{\n    let { children, tick, setTick, onGridReady } = param;\n    _s();\n    const gameGrid = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!gameGrid) return;\n        onGridReady(gameGrid);\n    }, [\n        gameGrid\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (tick) {\n            while(gameGrid.current.firstChild){\n                gameGrid.current.removeChild(gameGrid.current.firstChild);\n            }\n            setTick((prev)=>!prev);\n        }\n    }, [\n        tick\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (children) drawPieceAt(gameGrid, children);\n    }, [\n        children\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        id: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                onClick: ()=>clearInterval(intervalId),\n                children: \"stop game\"\n            }, void 0, false, {\n                fileName: \"/app/src/app/tetris/RenderTetris.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"playground\",\n                id: \"playGround\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"game-grid\",\n                    id: \"gameGrid\",\n                    ref: gameGrid\n                }, void 0, false, {\n                    fileName: \"/app/src/app/tetris/RenderTetris.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/app/src/app/tetris/RenderTetris.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/app/tetris/RenderTetris.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RenderTetris, \"5DC45CjhK5vbPsPYI3C7e0PX004=\");\n_c = RenderTetris;\nvar _c;\n$RefreshReg$(_c, \"RenderTetris\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGV0cmlzL1JlbmRlclRldHJpcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEM7QUFDWjtBQUNSO0FBRXRCLE1BQU1HLE9BQU87QUFDYixNQUFNQyxjQUFjLENBQUNDLFVBQVVDO0lBQzdCLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRSxHQUFHSDtJQUM1QixNQUFNSSxXQUFXQyxTQUFTQyxhQUFhLENBQUM7SUFDeENGLFNBQVNHLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEdBQVEsT0FBTFgsTUFBSztJQUMvQk8sU0FBU0csS0FBSyxDQUFDRSxNQUFNLEdBQUcsR0FBUSxPQUFMWixNQUFLO0lBQ2hDTyxTQUFTRyxLQUFLLENBQUNHLGVBQWUsR0FBR1A7SUFDakNDLFNBQVNHLEtBQUssQ0FBQ0ksTUFBTSxHQUFHO0lBQ3hCUCxTQUFTRyxLQUFLLENBQUNLLGVBQWUsR0FBR1Y7SUFDakNFLFNBQVNHLEtBQUssQ0FBQ00sWUFBWSxHQUFHWjtJQUM5QkcsU0FBU1UsWUFBWSxDQUFDLE1BQU87SUFDN0JmLFNBQVNnQixPQUFPLENBQUNDLFdBQVcsQ0FBQ1o7QUFDL0I7QUFDTyxNQUFNYSxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsV0FBVyxFQUFFOztJQUNuRSxNQUFNdEIsV0FBV0osNkNBQU1BLENBQUM7SUFFeEJELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDSyxVQUFVO1FBQ2ZzQixZQUFZdEI7SUFDZCxHQUFHO1FBQUNBO0tBQVM7SUFFYkwsZ0RBQVNBLENBQUM7UUFDUixJQUFJeUIsTUFBTTtZQUNSLE1BQU9wQixTQUFTZ0IsT0FBTyxDQUFDTyxVQUFVLENBQUU7Z0JBQ2xDdkIsU0FBU2dCLE9BQU8sQ0FBQ1EsV0FBVyxDQUFDeEIsU0FBU2dCLE9BQU8sQ0FBQ08sVUFBVTtZQUMxRDtZQUNBRixRQUFRLENBQUNJLE9BQVMsQ0FBQ0E7UUFDckI7SUFDRixHQUFHO1FBQUNMO0tBQUs7SUFFVHpCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSXdCLFVBQVVwQixZQUFZQyxVQUFVbUI7SUFDdEMsR0FBRztRQUFDQTtLQUFTO0lBRWIscUJBQ0UsOERBQUNPO1FBQUtDLElBQUc7OzBCQUNQLDhEQUFDOUIsd0RBQU1BO2dCQUFDK0IsU0FBUyxJQUFNQyxjQUFjQzswQkFBYzs7Ozs7OzBCQUNuRCw4REFBQ0M7Z0JBQUlDLFdBQVU7Z0JBQWFMLElBQUc7MEJBQzdCLDRFQUFDSTtvQkFBSUMsV0FBVTtvQkFBWUwsSUFBRztvQkFBV00sS0FBS2pDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0RCxFQUFFO0dBN0JXa0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90ZXRyaXMvUmVuZGVyVGV0cmlzLmpzPzJlMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgXCIuL3RldHJpcy5jc3NcIjtcblxuY29uc3QgZ3JpZCA9IDMyO1xuY29uc3QgZHJhd1BpZWNlQXQgPSAoZ2FtZUdyaWQsIGRhdGEpID0+IHtcbiAgY29uc3QgeyByb3csIGNvbCwgY29sb3IgfSA9IGRhdGE7XG4gIGNvbnN0IG9uZVBpZWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb25lUGllY2Uuc3R5bGUud2lkdGggPSBgJHtncmlkfXB4YDtcbiAgb25lUGllY2Uuc3R5bGUuaGVpZ2h0ID0gYCR7Z3JpZH1weGA7XG4gIG9uZVBpZWNlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICBvbmVQaWVjZS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibGFja1wiO1xuICBvbmVQaWVjZS5zdHlsZS5ncmlkQ29sdW1uU3RhcnQgPSBjb2w7XG4gIG9uZVBpZWNlLnN0eWxlLmdyaWRSb3dTdGFydCA9IHJvdztcbiAgb25lUGllY2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGN1cnJlbnRQaWVjZWApO1xuICBnYW1lR3JpZC5jdXJyZW50LmFwcGVuZENoaWxkKG9uZVBpZWNlKTtcbn07XG5leHBvcnQgY29uc3QgUmVuZGVyVGV0cmlzID0gKHsgY2hpbGRyZW4sIHRpY2ssIHNldFRpY2ssIG9uR3JpZFJlYWR5IH0pID0+IHtcbiAgY29uc3QgZ2FtZUdyaWQgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWdhbWVHcmlkKSByZXR1cm47XG4gICAgb25HcmlkUmVhZHkoZ2FtZUdyaWQpO1xuICB9LCBbZ2FtZUdyaWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0aWNrKSB7XG4gICAgICB3aGlsZSAoZ2FtZUdyaWQuY3VycmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGdhbWVHcmlkLmN1cnJlbnQucmVtb3ZlQ2hpbGQoZ2FtZUdyaWQuY3VycmVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHNldFRpY2soKHByZXYpID0+ICFwcmV2KTtcbiAgICB9XG4gIH0sIFt0aWNrXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2hpbGRyZW4pIGRyYXdQaWVjZUF0KGdhbWVHcmlkLCBjaGlsZHJlbik7XG4gIH0sIFtjaGlsZHJlbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gaWQ9XCJtYWluXCI+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCl9PntcInN0b3AgZ2FtZVwifTwvQnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5Z3JvdW5kXCIgaWQ9XCJwbGF5R3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1ncmlkXCIgaWQ9XCJnYW1lR3JpZFwiIHJlZj17Z2FtZUdyaWR9PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJCdXR0b24iLCJncmlkIiwiZHJhd1BpZWNlQXQiLCJnYW1lR3JpZCIsImRhdGEiLCJyb3ciLCJjb2wiLCJjb2xvciIsIm9uZVBpZWNlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImdyaWRDb2x1bW5TdGFydCIsImdyaWRSb3dTdGFydCIsInNldEF0dHJpYnV0ZSIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsIlJlbmRlclRldHJpcyIsImNoaWxkcmVuIiwidGljayIsInNldFRpY2siLCJvbkdyaWRSZWFkeSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInByZXYiLCJtYWluIiwiaWQiLCJvbkNsaWNrIiwiY2xlYXJJbnRlcnZhbCIsImludGVydmFsSWQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/tetris/RenderTetris.js\n"));

/***/ })

});