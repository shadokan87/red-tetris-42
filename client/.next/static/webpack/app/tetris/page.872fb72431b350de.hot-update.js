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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RenderTetris: function() { return /* binding */ RenderTetris; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ \"(app-pages-browser)/./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _tetris_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tetris.css */ \"(app-pages-browser)/./src/app/tetris/tetris.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst grid = 32;\nconst drawPieceAt = (gameGrid, data)=>{\n    const { row, col, color } = data;\n    const onePiece = document.createElement(\"div\");\n    onePiece.style.width = \"\".concat(grid, \"px\");\n    onePiece.style.height = \"\".concat(grid, \"px\");\n    onePiece.style.backgroundColor = color;\n    onePiece.style.border = \"1px solid black\";\n    onePiece.style.gridColumnStart = col;\n    onePiece.style.gridRowStart = row;\n    onePiece.setAttribute(\"id\", \"currentPiece\");\n    gameGrid.current.appendChild(onePiece);\n};\nconst RenderTetris = (param)=>{\n    let { children, onGridReady } = param;\n    _s();\n    const gameGrid = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!gameGrid) return;\n        onGridReady(gameGrid);\n    }, [\n        gameGrid\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (children) drawPieceAt(gameGrid, children);\n    }, [\n        children\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        id: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                onClick: ()=>clearInterval(intervalId),\n                children: \"stop game\"\n            }, void 0, false, {\n                fileName: \"/app/src/app/tetris/RenderTetris.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"playground\",\n                id: \"playGround\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"game-grid\",\n                    id: \"gameGrid\",\n                    ref: gameGrid\n                }, void 0, false, {\n                    fileName: \"/app/src/app/tetris/RenderTetris.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/app/src/app/tetris/RenderTetris.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/app/tetris/RenderTetris.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RenderTetris, \"Qxr1zOKSBFtxZ+H8+ALvRmdhPog=\");\n_c = RenderTetris;\nvar _c;\n$RefreshReg$(_c, \"RenderTetris\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGV0cmlzL1JlbmRlclRldHJpcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEM7QUFDWjtBQUNSO0FBRXRCLE1BQU1HLE9BQU87QUFDYixNQUFNQyxjQUFjLENBQUNDLFVBQVVDO0lBQzdCLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRSxHQUFHSDtJQUM1QixNQUFNSSxXQUFXQyxTQUFTQyxhQUFhLENBQUM7SUFDeENGLFNBQVNHLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEdBQVEsT0FBTFgsTUFBSztJQUMvQk8sU0FBU0csS0FBSyxDQUFDRSxNQUFNLEdBQUcsR0FBUSxPQUFMWixNQUFLO0lBQ2hDTyxTQUFTRyxLQUFLLENBQUNHLGVBQWUsR0FBR1A7SUFDakNDLFNBQVNHLEtBQUssQ0FBQ0ksTUFBTSxHQUFHO0lBQ3hCUCxTQUFTRyxLQUFLLENBQUNLLGVBQWUsR0FBR1Y7SUFDakNFLFNBQVNHLEtBQUssQ0FBQ00sWUFBWSxHQUFHWjtJQUM5QkcsU0FBU1UsWUFBWSxDQUFDLE1BQU87SUFDN0JmLFNBQVNnQixPQUFPLENBQUNDLFdBQVcsQ0FBQ1o7QUFDL0I7QUFDTyxNQUFNYSxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUU7O0lBQ3BELE1BQU1wQixXQUFXSiw2Q0FBTUEsQ0FBQztJQUV4QkQsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNLLFVBQVU7UUFDZm9CLFlBQVlwQjtJQUNkLEdBQUc7UUFBQ0E7S0FBUztJQUViTCxnREFBU0EsQ0FBQztRQUNSLElBQUl3QixVQUFVcEIsWUFBWUMsVUFBVW1CO0lBQ3RDLEdBQUc7UUFBQ0E7S0FBUztJQUViLHFCQUNFLDhEQUFDRTtRQUFLQyxJQUFHOzswQkFDUCw4REFBQ3pCLHdEQUFNQTtnQkFBQzBCLFNBQVMsSUFBTUMsY0FBY0M7MEJBQWM7Ozs7OzswQkFDbkQsOERBQUNDO2dCQUFJQyxXQUFVO2dCQUFhTCxJQUFHOzBCQUM3Qiw0RUFBQ0k7b0JBQUlDLFdBQVU7b0JBQVlMLElBQUc7b0JBQVdNLEtBQUs1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEQsRUFBRTtHQXBCV2tCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdGV0cmlzL1JlbmRlclRldHJpcy5qcz8yZTBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFwiLi90ZXRyaXMuY3NzXCI7XG5cbmNvbnN0IGdyaWQgPSAzMjtcbmNvbnN0IGRyYXdQaWVjZUF0ID0gKGdhbWVHcmlkLCBkYXRhKSA9PiB7XG4gIGNvbnN0IHsgcm93LCBjb2wsIGNvbG9yIH0gPSBkYXRhO1xuICBjb25zdCBvbmVQaWVjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9uZVBpZWNlLnN0eWxlLndpZHRoID0gYCR7Z3JpZH1weGA7XG4gIG9uZVBpZWNlLnN0eWxlLmhlaWdodCA9IGAke2dyaWR9cHhgO1xuICBvbmVQaWVjZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgb25lUGllY2Uuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcbiAgb25lUGllY2Uuc3R5bGUuZ3JpZENvbHVtblN0YXJ0ID0gY29sO1xuICBvbmVQaWVjZS5zdHlsZS5ncmlkUm93U3RhcnQgPSByb3c7XG4gIG9uZVBpZWNlLnNldEF0dHJpYnV0ZShcImlkXCIsIGBjdXJyZW50UGllY2VgKTtcbiAgZ2FtZUdyaWQuY3VycmVudC5hcHBlbmRDaGlsZChvbmVQaWVjZSk7XG59O1xuZXhwb3J0IGNvbnN0IFJlbmRlclRldHJpcyA9ICh7IGNoaWxkcmVuLCBvbkdyaWRSZWFkeSB9KSA9PiB7XG4gIGNvbnN0IGdhbWVHcmlkID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFnYW1lR3JpZCkgcmV0dXJuO1xuICAgIG9uR3JpZFJlYWR5KGdhbWVHcmlkKTtcbiAgfSwgW2dhbWVHcmlkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2hpbGRyZW4pIGRyYXdQaWVjZUF0KGdhbWVHcmlkLCBjaGlsZHJlbik7XG4gIH0sIFtjaGlsZHJlbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gaWQ9XCJtYWluXCI+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCl9PntcInN0b3AgZ2FtZVwifTwvQnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5Z3JvdW5kXCIgaWQ9XCJwbGF5R3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1ncmlkXCIgaWQ9XCJnYW1lR3JpZFwiIHJlZj17Z2FtZUdyaWR9PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJCdXR0b24iLCJncmlkIiwiZHJhd1BpZWNlQXQiLCJnYW1lR3JpZCIsImRhdGEiLCJyb3ciLCJjb2wiLCJjb2xvciIsIm9uZVBpZWNlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImdyaWRDb2x1bW5TdGFydCIsImdyaWRSb3dTdGFydCIsInNldEF0dHJpYnV0ZSIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsIlJlbmRlclRldHJpcyIsImNoaWxkcmVuIiwib25HcmlkUmVhZHkiLCJtYWluIiwiaWQiLCJvbkNsaWNrIiwiY2xlYXJJbnRlcnZhbCIsImludGVydmFsSWQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/tetris/RenderTetris.js\n"));

/***/ })

});