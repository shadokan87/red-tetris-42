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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tetris_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tetris.css */ \"(app-pages-browser)/./src/app/tetris/tetris.css\");\n/* harmony import */ var _tetris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tetris */ \"(app-pages-browser)/./src/app/tetris/tetris.js\");\n/* harmony import */ var _RenderTetris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RenderTetris */ \"(app-pages-browser)/./src/app/tetris/RenderTetris.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst keyStokes = [\n    \"ArrowLeft\",\n    \"ArrowRight\",\n    \"ArrowUp\",\n    \"ArrowDown\"\n];\nclass Mutex {\n    trigger(callback) {\n        if (!this.mutex) {\n            this.mutex = true;\n            callback();\n            setTimeout(()=>{\n                this.mutex = false;\n            }, this.delay);\n        }\n    }\n    constructor(delay){\n        this.delay = delay;\n        this.mutex = false;\n    }\n}\nconst Tetris = ()=>{\n    _s();\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const [drawingData, setDrawingData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [tick, setTick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [gridRef, setGridRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new _tetris__WEBPACK_IMPORTED_MODULE_3__.Tetris(()=>{\n        alert(\"game over\");\n    }, (data)=>{\n        setDrawingData(data);\n    // drawPieceAt(data);\n    }, ()=>{\n        setTick(true);\n    // while (gameGrid.current.firstChild) {\n    //   gameGrid.current.removeChild(gameGrid.current.firstChild);\n    // }\n    }));\n    // useEffect(() => {\n    //   if (gameGrid && instance) {\n    //     instance.startGame();\n    //   }\n    // }, [gameGrid]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const mutex = new Mutex(10);\n        const handleKeyDown = (e)=>{\n            if (instance) {\n                if (keyStokes.includes(e.key)) {\n                    mutex.trigger(()=>{\n                        instance.RegisterKeyStroke(e.key);\n                    });\n                }\n            }\n        };\n        document.addEventListener(\"keydown\", handleKeyDown);\n        return ()=>{\n            document.removeEventListener(\"keydown\", handleKeyDown);\n        };\n    }, [\n        instance\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RenderTetris__WEBPACK_IMPORTED_MODULE_4__.RenderTetris, {\n        tick: tick,\n        setTick: setTick,\n        onGridReady: (ref)=>setGridRef(ref),\n        children: drawingData\n    }, void 0, false, {\n        fileName: \"/app/src/app/tetris/page.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Tetris, \"K1KtlZx2IFeaS0myaH6DrFHU6j4=\");\n_c = Tetris;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tetris);\nvar _c;\n$RefreshReg$(_c, \"Tetris\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGV0cmlzL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ29EO0FBQzlCO0FBQzBCO0FBQ2xCO0FBQ2dCO0FBRTlDLE1BQU1PLFlBQVk7SUFBQztJQUFhO0lBQWM7SUFBVztDQUFZO0FBRXJFLE1BQU1DO0lBTUpDLFFBQVFDLFFBQVEsRUFBRTtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUNBLEtBQUssR0FBRztZQUNiRDtZQUNBRSxXQUFXO2dCQUNULElBQUksQ0FBQ0QsS0FBSyxHQUFHO1lBQ2YsR0FBRyxJQUFJLENBQUNFLEtBQUs7UUFDZjtJQUNGO0lBYkFDLFlBQVlELEtBQUssQ0FBRTtRQUNqQixJQUFJLENBQUNBLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNGLEtBQUssR0FBRztJQUNmO0FBV0Y7QUFFQSxNQUFNUixTQUFTOztJQUNiLE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sQ0FBQ2UsYUFBYUMsZUFBZSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDaUIsTUFBTUMsUUFBUSxHQUFHbEIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDbUIsU0FBU0MsV0FBVyxHQUFHcEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDcUIsVUFBVUMsWUFBWSxHQUFHdEIsK0NBQVFBLENBQ3RDLElBQUlFLDJDQUFVQSxDQUNaO1FBQ0VxQixNQUFNO0lBQ1IsR0FDQSxDQUFDQztRQUNDUixlQUFlUTtJQUNmLHFCQUFxQjtJQUN2QixHQUNBO1FBQ0VOLFFBQVE7SUFDUix3Q0FBd0M7SUFDeEMsK0RBQStEO0lBQy9ELElBQUk7SUFDTjtJQUlKLG9CQUFvQjtJQUNwQixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLE1BQU07SUFDTixrQkFBa0I7SUFFbEJwQixnREFBU0EsQ0FBQztRQUNSLE1BQU1XLFFBQVEsSUFBSUgsTUFBTTtRQUV4QixNQUFNbUIsZ0JBQWdCLENBQUNDO1lBQ3JCLElBQUlMLFVBQVU7Z0JBQ1osSUFBSWhCLFVBQVVzQixRQUFRLENBQUNELEVBQUVFLEdBQUcsR0FBRztvQkFDN0JuQixNQUFNRixPQUFPLENBQUM7d0JBQ1pjLFNBQVNRLGlCQUFpQixDQUFDSCxFQUFFRSxHQUFHO29CQUNsQztnQkFDRjtZQUNGO1FBQ0Y7UUFFQUUsU0FBU0MsZ0JBQWdCLENBQUMsV0FBV047UUFFckMsT0FBTztZQUNMSyxTQUFTRSxtQkFBbUIsQ0FBQyxXQUFXUDtRQUMxQztJQUNGLEdBQUc7UUFBQ0o7S0FBUztJQUViLHFCQUNFLDhEQUFDakIsdURBQVlBO1FBQ1hhLE1BQU1BO1FBQ05DLFNBQVNBO1FBQ1RlLGFBQWEsQ0FBQ0MsTUFBUWQsV0FBV2M7a0JBRWhDbkI7Ozs7OztBQUdQO0dBMURNZDtLQUFBQTtBQTRETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3RldHJpcy9wYWdlLmpzP2YyY2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vdGV0cmlzLmNzc1wiO1xuaW1wb3J0IHsgVGV0cmlzIGFzIFRldHJpc0dhbWUgfSBmcm9tIFwiLi90ZXRyaXNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBSZW5kZXJUZXRyaXMgfSBmcm9tIFwiLi9SZW5kZXJUZXRyaXNcIjtcblxuY29uc3Qga2V5U3Rva2VzID0gW1wiQXJyb3dMZWZ0XCIsIFwiQXJyb3dSaWdodFwiLCBcIkFycm93VXBcIiwgXCJBcnJvd0Rvd25cIl07XG5cbmNsYXNzIE11dGV4IHtcbiAgY29uc3RydWN0b3IoZGVsYXkpIHtcbiAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgdGhpcy5tdXRleCA9IGZhbHNlO1xuICB9XG5cbiAgdHJpZ2dlcihjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5tdXRleCkge1xuICAgICAgdGhpcy5tdXRleCA9IHRydWU7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubXV0ZXggPSBmYWxzZTtcbiAgICAgIH0sIHRoaXMuZGVsYXkpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBUZXRyaXMgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbnRlcnZhbElkLCBzZXRJbnRlcnZhbElkXSA9IHVzZVN0YXRlKC0xKTtcbiAgY29uc3QgW2RyYXdpbmdEYXRhLCBzZXREcmF3aW5nRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3RpY2ssIHNldFRpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZ3JpZFJlZiwgc2V0R3JpZFJlZl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2luc3RhbmNlLCBzZXRJbnN0YW5jZV0gPSB1c2VTdGF0ZShcbiAgICBuZXcgVGV0cmlzR2FtZShcbiAgICAgICgpID0+IHtcbiAgICAgICAgYWxlcnQoXCJnYW1lIG92ZXJcIik7XG4gICAgICB9LFxuICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgc2V0RHJhd2luZ0RhdGEoZGF0YSk7XG4gICAgICAgIC8vIGRyYXdQaWVjZUF0KGRhdGEpO1xuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgc2V0VGljayh0cnVlKTtcbiAgICAgICAgLy8gd2hpbGUgKGdhbWVHcmlkLmN1cnJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAvLyAgIGdhbWVHcmlkLmN1cnJlbnQucmVtb3ZlQ2hpbGQoZ2FtZUdyaWQuY3VycmVudC5maXJzdENoaWxkKTtcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIClcbiAgKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmIChnYW1lR3JpZCAmJiBpbnN0YW5jZSkge1xuICAvLyAgICAgaW5zdGFuY2Uuc3RhcnRHYW1lKCk7XG4gIC8vICAgfVxuICAvLyB9LCBbZ2FtZUdyaWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG11dGV4ID0gbmV3IE11dGV4KDEwKTtcblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGlmIChrZXlTdG9rZXMuaW5jbHVkZXMoZS5rZXkpKSB7XG4gICAgICAgICAgbXV0ZXgudHJpZ2dlcigoKSA9PiB7XG4gICAgICAgICAgICBpbnN0YW5jZS5SZWdpc3RlcktleVN0cm9rZShlLmtleSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgfTtcbiAgfSwgW2luc3RhbmNlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVuZGVyVGV0cmlzXG4gICAgICB0aWNrPXt0aWNrfVxuICAgICAgc2V0VGljaz17c2V0VGlja31cbiAgICAgIG9uR3JpZFJlYWR5PXsocmVmKSA9PiBzZXRHcmlkUmVmKHJlZil9XG4gICAgPlxuICAgICAge2RyYXdpbmdEYXRhfVxuICAgIDwvUmVuZGVyVGV0cmlzPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV0cmlzO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiVGV0cmlzIiwiVGV0cmlzR2FtZSIsIkJ1dHRvbiIsIlJlbmRlclRldHJpcyIsImtleVN0b2tlcyIsIk11dGV4IiwidHJpZ2dlciIsImNhbGxiYWNrIiwibXV0ZXgiLCJzZXRUaW1lb3V0IiwiZGVsYXkiLCJjb25zdHJ1Y3RvciIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbElkIiwiZHJhd2luZ0RhdGEiLCJzZXREcmF3aW5nRGF0YSIsInRpY2siLCJzZXRUaWNrIiwiZ3JpZFJlZiIsInNldEdyaWRSZWYiLCJpbnN0YW5jZSIsInNldEluc3RhbmNlIiwiYWxlcnQiLCJkYXRhIiwiaGFuZGxlS2V5RG93biIsImUiLCJpbmNsdWRlcyIsImtleSIsIlJlZ2lzdGVyS2V5U3Ryb2tlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uR3JpZFJlYWR5IiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/tetris/page.js\n"));

/***/ })

});