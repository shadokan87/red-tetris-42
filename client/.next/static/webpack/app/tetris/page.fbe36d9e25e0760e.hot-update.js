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

/***/ "(app-pages-browser)/./src/app/tetris/page.js":
/*!********************************!*\
  !*** ./src/app/tetris/page.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tetris_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tetris.css */ \"(app-pages-browser)/./src/app/tetris/tetris.css\");\n/* harmony import */ var _tetris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tetris */ \"(app-pages-browser)/./src/app/tetris/tetris.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ \"(app-pages-browser)/./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst keyStokes = [\n    \"ArrowLeft\",\n    \"ArrowRight\",\n    \"ArrowUp\",\n    \"ArrowDown\"\n];\nconst Tetris = ()=>{\n    _s();\n    const grid = 32;\n    const gameGrid = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const drawPieceAt = (data)=>{\n        const { row, col, color } = data;\n        const onePiece = document.createElement(\"div\");\n        onePiece.style.width = \"\".concat(grid, \"px\");\n        onePiece.style.height = \"\".concat(grid, \"px\");\n        onePiece.style.backgroundColor = color;\n        onePiece.style.border = \"1px solid black\";\n        onePiece.style.gridColumnStart = col;\n        onePiece.style.gridRowStart = row;\n        onePiece.setAttribute(\"id\", \"currentPiece\");\n        gameGrid.current.appendChild(onePiece);\n    };\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new _tetris__WEBPACK_IMPORTED_MODULE_3__.Tetris(()=>{\n        alert(\"game over\");\n    }, (data)=>{\n        drawPieceAt(data);\n    }, ()=>{\n        while(gameGrid.current.firstChild){\n            gameGrid.current.removeChild(gameGrid.current.firstChild);\n        }\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (gameGrid && instance) {\n            instance.startGame();\n        }\n    }, [\n        gameGrid\n    ]);\n    let lastKeyStrokeTime = 0;\n    const delay = 500; // delay in ms\n    document.addEventListener(\"keydown\", function(e) {\n        const currentTime = new Date().getTime();\n        if (currentTime - lastKeyStrokeTime > delay) {\n            if (instance) {\n                if (keyStokes.includes(e.key)) {\n                    console.log(\"register\");\n                    instance.RegisterKeyStroke(e.key);\n                }\n            }\n            lastKeyStrokeTime = currentTime;\n        }\n    });\n    // listen to keyboard events to move the active tetromino\n    // document.addEventListener(\"keydown\", function (e) {\n    //   if (gameOver) return;\n    //   // left and right arrow keys (move)\n    //   if (e.keyCode === 37 || e.keyCode === 39) {\n    //     const col = e.keyCode === 37 ? tetromino.col - 1 : tetromino.col + 1;\n    //     if (isValidMove(tetromino.matrix, tetromino.row, col)) {\n    //       tetromino.col = col;\n    //     }\n    //   }\n    //   // up arrow key (rotate)\n    //   if (e.keyCode === 38) {\n    //     const matrix = rotate(tetromino.matrix);\n    //     if (isValidMove(matrix, tetromino.row, tetromino.col)) {\n    //       tetromino.matrix = matrix;\n    //     }\n    //   }\n    //   // down arrow key (drop)\n    //   if (e.keyCode === 40) {\n    //     const row = tetromino.row + 1;\n    //     if (!isValidMove(tetromino.matrix, row, tetromino.col)) {\n    //       tetromino.row = row - 1;\n    //       placeTetromino();\n    //       return;\n    //     }\n    //     tetromino.row = row;\n    //   }\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        id: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {\n                onClick: ()=>clearInterval(intervalId),\n                children: \"stop game\"\n            }, void 0, false, {\n                fileName: \"/app/src/app/tetris/page.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"playground\",\n                id: \"playGround\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"game-grid\",\n                    id: \"gameGrid\",\n                    ref: gameGrid\n                }, void 0, false, {\n                    fileName: \"/app/src/app/tetris/page.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/app/src/app/tetris/page.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/app/tetris/page.js\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Tetris, \"VDtijicZFCMDvrA9yyRBg7x47Lo=\");\n_c = Tetris;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tetris);\nvar _c;\n$RefreshReg$(_c, \"Tetris\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGV0cmlzL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNvRDtBQUM5QjtBQUMwQjtBQUNsQjtBQUU5QixNQUFNTSxZQUFZO0lBQUM7SUFBYTtJQUFjO0lBQVc7Q0FBWTtBQUVyRSxNQUFNSCxTQUFTOztJQUNiLE1BQU1JLE9BQU87SUFFYixNQUFNQyxXQUFXUCw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNUSxjQUFjLENBQUNDO1FBQ25CLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRSxHQUFHSDtRQUM1QixNQUFNSSxXQUFXQyxTQUFTQyxhQUFhLENBQUM7UUFDeENGLFNBQVNHLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEdBQVEsT0FBTFgsTUFBSztRQUMvQk8sU0FBU0csS0FBSyxDQUFDRSxNQUFNLEdBQUcsR0FBUSxPQUFMWixNQUFLO1FBQ2hDTyxTQUFTRyxLQUFLLENBQUNHLGVBQWUsR0FBR1A7UUFDakNDLFNBQVNHLEtBQUssQ0FBQ0ksTUFBTSxHQUFHO1FBQ3hCUCxTQUFTRyxLQUFLLENBQUNLLGVBQWUsR0FBR1Y7UUFDakNFLFNBQVNHLEtBQUssQ0FBQ00sWUFBWSxHQUFHWjtRQUM5QkcsU0FBU1UsWUFBWSxDQUFDLE1BQU87UUFDN0JoQixTQUFTaUIsT0FBTyxDQUFDQyxXQUFXLENBQUNaO0lBQy9CO0lBQ0EsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUcxQiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sQ0FBQzJCLFVBQVVDLFlBQVksR0FBRzVCLCtDQUFRQSxDQUN0QyxJQUFJRSwyQ0FBVUEsQ0FDWjtRQUNFMkIsTUFBTTtJQUNSLEdBQ0EsQ0FBQ3JCO1FBQ0NELFlBQVlDO0lBQ2QsR0FDQTtRQUNFLE1BQU9GLFNBQVNpQixPQUFPLENBQUNPLFVBQVUsQ0FBRTtZQUNsQ3hCLFNBQVNpQixPQUFPLENBQUNRLFdBQVcsQ0FBQ3pCLFNBQVNpQixPQUFPLENBQUNPLFVBQVU7UUFDMUQ7SUFDRjtJQUlKaEMsZ0RBQVNBLENBQUM7UUFDUixJQUFJUSxZQUFZcUIsVUFBVTtZQUN4QkEsU0FBU0ssU0FBUztRQUNwQjtJQUNGLEdBQUc7UUFBQzFCO0tBQVM7SUFFYixJQUFJMkIsb0JBQW9CO0lBQ3hCLE1BQU1DLFFBQVEsS0FBSyxjQUFjO0lBRWpDckIsU0FBU3NCLGdCQUFnQixDQUFDLFdBQVcsU0FBVUMsQ0FBQztRQUM5QyxNQUFNQyxjQUFjLElBQUlDLE9BQU9DLE9BQU87UUFDdEMsSUFBSUYsY0FBY0osb0JBQW9CQyxPQUFPO1lBQzNDLElBQUlQLFVBQVU7Z0JBQ1osSUFBSXZCLFVBQVVvQyxRQUFRLENBQUNKLEVBQUVLLEdBQUcsR0FBRztvQkFDN0JDLFFBQVFDLEdBQUcsQ0FBQztvQkFDWmhCLFNBQVNpQixpQkFBaUIsQ0FBQ1IsRUFBRUssR0FBRztnQkFDbEM7WUFDRjtZQUNBUixvQkFBb0JJO1FBQ3RCO0lBQ0Y7SUFDQSx5REFBeUQ7SUFDekQsc0RBQXNEO0lBQ3RELDBCQUEwQjtJQUUxQix3Q0FBd0M7SUFDeEMsZ0RBQWdEO0lBQ2hELDRFQUE0RTtJQUU1RSwrREFBK0Q7SUFDL0QsNkJBQTZCO0lBQzdCLFFBQVE7SUFDUixNQUFNO0lBRU4sNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QiwrQ0FBK0M7SUFDL0MsK0RBQStEO0lBQy9ELG1DQUFtQztJQUNuQyxRQUFRO0lBQ1IsTUFBTTtJQUVOLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIscUNBQXFDO0lBRXJDLGdFQUFnRTtJQUNoRSxpQ0FBaUM7SUFFakMsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixRQUFRO0lBRVIsMkJBQTJCO0lBQzNCLE1BQU07SUFDTixNQUFNO0lBRU4scUJBQ0UsOERBQUNRO1FBQUtDLElBQUc7OzBCQUNQLDhEQUFDM0Msd0RBQU1BO2dCQUFDNEMsU0FBUyxJQUFNQyxjQUFjdkI7MEJBQWM7Ozs7OzswQkFDbkQsOERBQUN3QjtnQkFBSUMsV0FBVTtnQkFBYUosSUFBRzswQkFDN0IsNEVBQUNHO29CQUFJQyxXQUFVO29CQUFZSixJQUFHO29CQUFXSyxLQUFLN0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXREO0dBbEdNTDtLQUFBQTtBQW9HTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3RldHJpcy9wYWdlLmpzP2YyY2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vdGV0cmlzLmNzc1wiO1xuaW1wb3J0IHsgVGV0cmlzIGFzIFRldHJpc0dhbWUgfSBmcm9tIFwiLi90ZXRyaXNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5cbmNvbnN0IGtleVN0b2tlcyA9IFtcIkFycm93TGVmdFwiLCBcIkFycm93UmlnaHRcIiwgXCJBcnJvd1VwXCIsIFwiQXJyb3dEb3duXCJdO1xuXG5jb25zdCBUZXRyaXMgPSAoKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSAzMjtcblxuICBjb25zdCBnYW1lR3JpZCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgZHJhd1BpZWNlQXQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgcm93LCBjb2wsIGNvbG9yIH0gPSBkYXRhO1xuICAgIGNvbnN0IG9uZVBpZWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvbmVQaWVjZS5zdHlsZS53aWR0aCA9IGAke2dyaWR9cHhgO1xuICAgIG9uZVBpZWNlLnN0eWxlLmhlaWdodCA9IGAke2dyaWR9cHhgO1xuICAgIG9uZVBpZWNlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIG9uZVBpZWNlLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XG4gICAgb25lUGllY2Uuc3R5bGUuZ3JpZENvbHVtblN0YXJ0ID0gY29sO1xuICAgIG9uZVBpZWNlLnN0eWxlLmdyaWRSb3dTdGFydCA9IHJvdztcbiAgICBvbmVQaWVjZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgY3VycmVudFBpZWNlYCk7XG4gICAgZ2FtZUdyaWQuY3VycmVudC5hcHBlbmRDaGlsZChvbmVQaWVjZSk7XG4gIH07XG4gIGNvbnN0IFtpbnRlcnZhbElkLCBzZXRJbnRlcnZhbElkXSA9IHVzZVN0YXRlKC0xKTtcbiAgY29uc3QgW2luc3RhbmNlLCBzZXRJbnN0YW5jZV0gPSB1c2VTdGF0ZShcbiAgICBuZXcgVGV0cmlzR2FtZShcbiAgICAgICgpID0+IHtcbiAgICAgICAgYWxlcnQoXCJnYW1lIG92ZXJcIik7XG4gICAgICB9LFxuICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgZHJhd1BpZWNlQXQoZGF0YSk7XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB3aGlsZSAoZ2FtZUdyaWQuY3VycmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgZ2FtZUdyaWQuY3VycmVudC5yZW1vdmVDaGlsZChnYW1lR3JpZC5jdXJyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGdhbWVHcmlkICYmIGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS5zdGFydEdhbWUoKTtcbiAgICB9XG4gIH0sIFtnYW1lR3JpZF0pO1xuXG4gIGxldCBsYXN0S2V5U3Ryb2tlVGltZSA9IDA7XG4gIGNvbnN0IGRlbGF5ID0gNTAwOyAvLyBkZWxheSBpbiBtc1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBpZiAoY3VycmVudFRpbWUgLSBsYXN0S2V5U3Ryb2tlVGltZSA+IGRlbGF5KSB7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKGtleVN0b2tlcy5pbmNsdWRlcyhlLmtleSkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyXCIpO1xuICAgICAgICAgIGluc3RhbmNlLlJlZ2lzdGVyS2V5U3Ryb2tlKGUua2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGFzdEtleVN0cm9rZVRpbWUgPSBjdXJyZW50VGltZTtcbiAgICB9XG4gIH0pO1xuICAvLyBsaXN0ZW4gdG8ga2V5Ym9hcmQgZXZlbnRzIHRvIG1vdmUgdGhlIGFjdGl2ZSB0ZXRyb21pbm9cbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgLy8gICBpZiAoZ2FtZU92ZXIpIHJldHVybjtcblxuICAvLyAgIC8vIGxlZnQgYW5kIHJpZ2h0IGFycm93IGtleXMgKG1vdmUpXG4gIC8vICAgaWYgKGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSAzOSkge1xuICAvLyAgICAgY29uc3QgY29sID0gZS5rZXlDb2RlID09PSAzNyA/IHRldHJvbWluby5jb2wgLSAxIDogdGV0cm9taW5vLmNvbCArIDE7XG5cbiAgLy8gICAgIGlmIChpc1ZhbGlkTW92ZSh0ZXRyb21pbm8ubWF0cml4LCB0ZXRyb21pbm8ucm93LCBjb2wpKSB7XG4gIC8vICAgICAgIHRldHJvbWluby5jb2wgPSBjb2w7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuXG4gIC8vICAgLy8gdXAgYXJyb3cga2V5IChyb3RhdGUpXG4gIC8vICAgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcbiAgLy8gICAgIGNvbnN0IG1hdHJpeCA9IHJvdGF0ZSh0ZXRyb21pbm8ubWF0cml4KTtcbiAgLy8gICAgIGlmIChpc1ZhbGlkTW92ZShtYXRyaXgsIHRldHJvbWluby5yb3csIHRldHJvbWluby5jb2wpKSB7XG4gIC8vICAgICAgIHRldHJvbWluby5tYXRyaXggPSBtYXRyaXg7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuXG4gIC8vICAgLy8gZG93biBhcnJvdyBrZXkgKGRyb3ApXG4gIC8vICAgaWYgKGUua2V5Q29kZSA9PT0gNDApIHtcbiAgLy8gICAgIGNvbnN0IHJvdyA9IHRldHJvbWluby5yb3cgKyAxO1xuXG4gIC8vICAgICBpZiAoIWlzVmFsaWRNb3ZlKHRldHJvbWluby5tYXRyaXgsIHJvdywgdGV0cm9taW5vLmNvbCkpIHtcbiAgLy8gICAgICAgdGV0cm9taW5vLnJvdyA9IHJvdyAtIDE7XG5cbiAgLy8gICAgICAgcGxhY2VUZXRyb21pbm8oKTtcbiAgLy8gICAgICAgcmV0dXJuO1xuICAvLyAgICAgfVxuXG4gIC8vICAgICB0ZXRyb21pbm8ucm93ID0gcm93O1xuICAvLyAgIH1cbiAgLy8gfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBpZD1cIm1haW5cIj5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKX0+e1wic3RvcCBnYW1lXCJ9PC9CdXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlncm91bmRcIiBpZD1cInBsYXlHcm91bmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWdyaWRcIiBpZD1cImdhbWVHcmlkXCIgcmVmPXtnYW1lR3JpZH0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXRyaXM7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJUZXRyaXMiLCJUZXRyaXNHYW1lIiwiQnV0dG9uIiwia2V5U3Rva2VzIiwiZ3JpZCIsImdhbWVHcmlkIiwiZHJhd1BpZWNlQXQiLCJkYXRhIiwicm93IiwiY29sIiwiY29sb3IiLCJvbmVQaWVjZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93U3RhcnQiLCJzZXRBdHRyaWJ1dGUiLCJjdXJyZW50IiwiYXBwZW5kQ2hpbGQiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWxJZCIsImluc3RhbmNlIiwic2V0SW5zdGFuY2UiLCJhbGVydCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInN0YXJ0R2FtZSIsImxhc3RLZXlTdHJva2VUaW1lIiwiZGVsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJpbmNsdWRlcyIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJSZWdpc3RlcktleVN0cm9rZSIsIm1haW4iLCJpZCIsIm9uQ2xpY2siLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/tetris/page.js\n"));

/***/ })

});