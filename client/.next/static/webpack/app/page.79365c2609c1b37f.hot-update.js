"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withAuth */ \"(app-pages-browser)/./src/app/withAuth.js\");\n/* harmony import */ var _contexts_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contexts/axios */ \"(app-pages-browser)/./src/app/contexts/axios.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_lobbyReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux/lobbyReducer */ \"(app-pages-browser)/./src/app/redux/lobbyReducer.js\");\n/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/typography */ \"(app-pages-browser)/./node_modules/antd/lib/typography/index.js\");\n/* harmony import */ var antd_lib_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/flex */ \"(app-pages-browser)/./node_modules/antd/lib/flex/index.js\");\n/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/divider */ \"(app-pages-browser)/./node_modules/antd/lib/divider/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _root_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./root.css */ \"(app-pages-browser)/./src/app/root.css\");\n/* harmony import */ var _redux_sessionReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redux/sessionReducer */ \"(app-pages-browser)/./src/app/redux/sessionReducer.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst parseRoomUrl = (url)=>{\n    const trimmedUrl = url.split(\"/\")[0];\n    const regex = /#(\\w+)\\[(\\w+)\\]/;\n    const match = trimmedUrl.match(regex);\n    if (match) {\n        return {\n            name: match[1],\n            displayName: match[2]\n        };\n    }\n    return null;\n};\nconst fetchUserById = async (_axios, id)=>{\n    try {\n        if (!id) return undefined;\n        const response = await _axios.get(\"/user/\".concat(id));\n        console.log(\"!fetch result\", response);\n        return response.data;\n    } catch (e) {\n    // TODO: handle error\n    }\n};\nconst useRoomMembers = (room)=>{\n    _s();\n    const { axiosReady, axiosInstance } = (0,_contexts_axios__WEBPACK_IMPORTED_MODULE_4__.useAxios)();\n    const [owner, setOwner] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [opponent, setOpponent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!axiosReady || !room) return;\n        Promise.all([\n            fetchUserById(axiosInstance, room.owner),\n            fetchUserById(axiosInstance, room.opponent)\n        ]).then((param)=>{\n            let [ownerUser, opponentUser] = param;\n            setOwner(ownerUser);\n            setOpponent(opponentUser);\n        });\n    }, [\n        room,\n        axiosReady\n    ]);\n    return [\n        owner,\n        opponent\n    ];\n};\n_s(useRoomMembers, \"kQ6bqIj0hdxoc2Y04DyMssrRggM=\", false, function() {\n    return [\n        _contexts_axios__WEBPACK_IMPORTED_MODULE_4__.useAxios\n    ];\n});\nconst UserLink = (param)=>{\n    let { user } = param;\n    console.log(\"!user is: \", user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_flex__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            gap: \"0.5em\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                    href: \"/404\",\n                    className: \"userLink\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        children: user.displayname\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/page.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    children: user.username\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/src/app/page.js\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = UserLink;\nconst OneMember = (param)=>{\n    let { room, member, ownerActions } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"oneMember\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserLink, {\n                user: member\n            }, void 0, false, {\n                fileName: \"/app/src/app/page.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            ownerActions\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/app/page.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = OneMember;\nconst RenderRoomMembers = (param)=>{\n    let { room, owner, opponent, ownerActions } = param;\n    _s1();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_redux_sessionReducer__WEBPACK_IMPORTED_MODULE_9__.userSelector);\n    const isOwner = user.id == owner.id;\n    if (isOwner) alert(\"you are the owner\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_flex__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            vertical: true,\n            className: \"membersWrapper\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OneMember, {\n                    room: room,\n                    member: owner\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_divider__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                    children: \"VS\"\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined),\n                opponent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OneMember, {\n                    room: room,\n                    member: opponent,\n                    ownerActions: isOwner ? ownerActions : undefined\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.js\",\n                    lineNumber: 85,\n                    columnNumber: 11\n                }, undefined) || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    children: \"Waiting for opponent\"\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.js\",\n                    lineNumber: 90,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/src/app/page.js\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s1(RenderRoomMembers, \"ODc3cjw/vvoWaLFqHWcEGODyOfo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c2 = RenderRoomMembers;\nfunction Home() {\n    _s2();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const room = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_redux_lobbyReducer__WEBPACK_IMPORTED_MODULE_6__.roomSelector);\n    const { axiosReady, axiosInstance } = (0,_contexts_axios__WEBPACK_IMPORTED_MODULE_4__.useAxios)();\n    const [owner, opponent] = useRoomMembers(room);\n    // useEffect(() => {\n    //   console.log(\"Owner:\", owner);\n    //   console.log(\"Opponent:\", opponent);\n    // }, [owner, opponent]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!axiosReady) return;\n        const urlFormat = parseRoomUrl(window.location.hash);\n        if (urlFormat) {\n            try {\n                (async ()=>{\n                    await axiosInstance.post(\"/game/room/join/\".concat(urlFormat.displayName, \"/\").concat(urlFormat.name)).then((res)=>{\n                        dispatch((0,_redux_lobbyReducer__WEBPACK_IMPORTED_MODULE_6__.setRoom)(res.data.room));\n                    }).catch((e)=>{\n                        console.log(\"error here\", e);\n                    });\n                })();\n            // joinRoom(urlFormat);\n            } catch (e) {}\n        } else {\n            router.push(\"/404\", undefined, {\n                shallow: true\n            });\n        }\n    }, [\n        window.location,\n        axiosReady\n    ]);\n    const handleKickOpponent = async ()=>{\n        console.log(\"kick user: \" + opponent.displayname);\n    };\n    const ownerActions = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n            onClick: async ()=>await handleKickOpponent()\n        }, void 0, false, {\n            fileName: \"/app/src/app/page.js\",\n            lineNumber: 135,\n            columnNumber: 5\n        }, this);\n    if (room && owner) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"main\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RenderRoomMembers, {\n            room: room,\n            owner: owner,\n            opponent: opponent,\n            onerActions: ownerActions\n        }, void 0, false, {\n            fileName: \"/app/src/app/page.js\",\n            lineNumber: 141,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/app/src/app/page.js\",\n        lineNumber: 140,\n        columnNumber: 7\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: \"...veryfing room\"\n    }, void 0, false, {\n        fileName: \"/app/src/app/page.js\",\n        lineNumber: 149,\n        columnNumber: 10\n    }, this);\n}\n_s2(Home, \"ld2/kwclUY/+QCaCSbVwHterSGA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        _contexts_axios__WEBPACK_IMPORTED_MODULE_4__.useAxios,\n        useRoomMembers\n    ];\n});\n_c3 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c4 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Home));\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"UserLink\");\n$RefreshReg$(_c1, \"OneMember\");\n$RefreshReg$(_c2, \"RenderRoomMembers\");\n$RefreshReg$(_c3, \"Home\");\n$RefreshReg$(_c4, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0YsR0FBRztRQUFDUCxPQUFPQyxRQUFRO1FBQUUvQjtLQUFXO0lBRWhDLE1BQU1zQyxxQkFBcUI7UUFDekI1QyxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCUyxTQUFTWSxXQUFXO0lBQ2xEO0lBRUEsTUFBTUksZUFBZSxrQkFDbkIsOERBQUNtQjtZQUFPQyxTQUFTLFVBQVksTUFBTUY7Ozs7OztJQUdyQyxJQUFJdkMsUUFBUUcsT0FDVixxQkFDRSw4REFBQ3VDO1FBQUsxQixXQUFVO2tCQUNkLDRFQUFDTztZQUNDdkIsTUFBTUE7WUFDTkcsT0FBT0E7WUFDUEUsVUFBVUE7WUFDVnNDLGFBQWF0Qjs7Ozs7Ozs7Ozs7SUFJckIscUJBQU8sOERBQUNxQjtrQkFBTTs7Ozs7O0FBQ2hCO0lBdERTZjs7UUFDUTdELHNEQUFTQTtRQUNQTSxvREFBV0E7UUFDZkMsb0RBQVdBO1FBQ2NGLHFEQUFRQTtRQUNwQjRCOzs7TUFMbkI0QjtBQXdEVCwrREFBZSxNQUFBekQscURBQVFBLENBQUN5RCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuL3dpdGhBdXRoXCI7XG5pbXBvcnQgeyB1c2VBeGlvcyB9IGZyb20gXCIuL2NvbnRleHRzL2F4aW9zXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHJvb21TZWxlY3Rvciwgc2V0Um9vbSB9IGZyb20gXCIuL3JlZHV4L2xvYmJ5UmVkdWNlclwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgRmxleCwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgXCIuL3Jvb3QuY3NzXCI7XG5pbXBvcnQgeyB1c2VyU2VsZWN0b3IgfSBmcm9tIFwiLi9yZWR1eC9zZXNzaW9uUmVkdWNlclwiO1xuXG5jb25zdCBwYXJzZVJvb21VcmwgPSAodXJsKSA9PiB7XG4gIGNvbnN0IHRyaW1tZWRVcmwgPSB1cmwuc3BsaXQoXCIvXCIpWzBdO1xuICBjb25zdCByZWdleCA9IC8jKFxcdyspXFxbKFxcdyspXFxdLztcbiAgY29uc3QgbWF0Y2ggPSB0cmltbWVkVXJsLm1hdGNoKHJlZ2V4KTtcbiAgaWYgKG1hdGNoKSB7XG4gICAgcmV0dXJuIHsgbmFtZTogbWF0Y2hbMV0sIGRpc3BsYXlOYW1lOiBtYXRjaFsyXSB9O1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgZmV0Y2hVc2VyQnlJZCA9IGFzeW5jIChfYXhpb3MsIGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFpZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IF9heGlvcy5nZXQoYC91c2VyLyR7aWR9YCk7XG4gICAgY29uc29sZS5sb2coXCIhZmV0Y2ggcmVzdWx0XCIsIHJlc3BvbnNlKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFRPRE86IGhhbmRsZSBlcnJvclxuICB9XG59O1xuXG5jb25zdCB1c2VSb29tTWVtYmVycyA9IChyb29tKSA9PiB7XG4gIGNvbnN0IHsgYXhpb3NSZWFkeSwgYXhpb3NJbnN0YW5jZSB9ID0gdXNlQXhpb3MoKTtcbiAgY29uc3QgW293bmVyLCBzZXRPd25lcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW29wcG9uZW50LCBzZXRPcHBvbmVudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYXhpb3NSZWFkeSB8fCAhcm9vbSkgcmV0dXJuO1xuICAgIFByb21pc2UuYWxsKFtcbiAgICAgIGZldGNoVXNlckJ5SWQoYXhpb3NJbnN0YW5jZSwgcm9vbS5vd25lciksXG4gICAgICBmZXRjaFVzZXJCeUlkKGF4aW9zSW5zdGFuY2UsIHJvb20ub3Bwb25lbnQpLFxuICAgIF0pLnRoZW4oKFtvd25lclVzZXIsIG9wcG9uZW50VXNlcl0pID0+IHtcbiAgICAgIHNldE93bmVyKG93bmVyVXNlcik7XG4gICAgICBzZXRPcHBvbmVudChvcHBvbmVudFVzZXIpO1xuICAgIH0pO1xuICB9LCBbcm9vbSwgYXhpb3NSZWFkeV0pO1xuICByZXR1cm4gW293bmVyLCBvcHBvbmVudF07XG59O1xuXG5jb25zdCBVc2VyTGluayA9ICh7IHVzZXIgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIiF1c2VyIGlzOiBcIiwgdXNlcik7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGbGV4IGdhcD17XCIwLjVlbVwifT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi80MDRcIiBjbGFzc05hbWU9XCJ1c2VyTGlua1wiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5Pnt1c2VyLmRpc3BsYXluYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8VHlwb2dyYXBoeT57dXNlci51c2VybmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICA8L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBPbmVNZW1iZXIgPSAoeyByb29tLCBtZW1iZXIsIG93bmVyQWN0aW9ucyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvbmVNZW1iZXJcIj5cbiAgICAgIDxVc2VyTGluayB1c2VyPXttZW1iZXJ9PjwvVXNlckxpbms+XG4gICAgICB7b3duZXJBY3Rpb25zfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgUmVuZGVyUm9vbU1lbWJlcnMgPSAoeyByb29tLCBvd25lciwgb3Bwb25lbnQsIG93bmVyQWN0aW9ucyB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcih1c2VyU2VsZWN0b3IpO1xuICBjb25zdCBpc093bmVyID0gdXNlci5pZCA9PSBvd25lci5pZDtcbiAgaWYgKGlzT3duZXIpIGFsZXJ0KFwieW91IGFyZSB0aGUgb3duZXJcIik7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGbGV4IHZlcnRpY2FsIGNsYXNzTmFtZT1cIm1lbWJlcnNXcmFwcGVyXCI+XG4gICAgICAgIDxPbmVNZW1iZXIgcm9vbT17cm9vbX0gbWVtYmVyPXtvd25lcn0gLz5cbiAgICAgICAgPERpdmlkZXI+e1wiVlNcIn08L0RpdmlkZXI+XG4gICAgICAgIHsob3Bwb25lbnQgJiYgKFxuICAgICAgICAgIDxPbmVNZW1iZXJcbiAgICAgICAgICAgIHJvb209e3Jvb219XG4gICAgICAgICAgICBtZW1iZXI9e29wcG9uZW50fVxuICAgICAgICAgICAgb3duZXJBY3Rpb25zPXtpc093bmVyID8gb3duZXJBY3Rpb25zIDogdW5kZWZpbmVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpIHx8IDxUeXBvZ3JhcGh5PntcIldhaXRpbmcgZm9yIG9wcG9uZW50XCJ9PC9UeXBvZ3JhcGh5Pn1cbiAgICAgIDwvRmxleD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHJvb20gPSB1c2VTZWxlY3Rvcihyb29tU2VsZWN0b3IpO1xuICBjb25zdCB7IGF4aW9zUmVhZHksIGF4aW9zSW5zdGFuY2UgfSA9IHVzZUF4aW9zKCk7XG4gIGNvbnN0IFtvd25lciwgb3Bwb25lbnRdID0gdXNlUm9vbU1lbWJlcnMocm9vbSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhcIk93bmVyOlwiLCBvd25lcik7XG4gIC8vICAgY29uc29sZS5sb2coXCJPcHBvbmVudDpcIiwgb3Bwb25lbnQpO1xuICAvLyB9LCBbb3duZXIsIG9wcG9uZW50XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWF4aW9zUmVhZHkpIHJldHVybjtcbiAgICBjb25zdCB1cmxGb3JtYXQgPSBwYXJzZVJvb21Vcmwod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgIGlmICh1cmxGb3JtYXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgYXdhaXQgYXhpb3NJbnN0YW5jZVxuICAgICAgICAgICAgLnBvc3QoYC9nYW1lL3Jvb20vam9pbi8ke3VybEZvcm1hdC5kaXNwbGF5TmFtZX0vJHt1cmxGb3JtYXQubmFtZX1gKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaChzZXRSb29tKHJlcy5kYXRhLnJvb20pKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBoZXJlXCIsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKCk7XG4gICAgICAgIC8vIGpvaW5Sb29tKHVybEZvcm1hdCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIucHVzaChcIi80MDRcIiwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XG4gICAgfVxuICB9LCBbd2luZG93LmxvY2F0aW9uLCBheGlvc1JlYWR5XSk7XG5cbiAgY29uc3QgaGFuZGxlS2lja09wcG9uZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwia2ljayB1c2VyOiBcIiArIG9wcG9uZW50LmRpc3BsYXluYW1lKTtcbiAgfTtcblxuICBjb25zdCBvd25lckFjdGlvbnMgPSAoKSA9PiAoXG4gICAgPEJ1dHRvbiBvbkNsaWNrPXthc3luYyAoKSA9PiBhd2FpdCBoYW5kbGVLaWNrT3Bwb25lbnQoKX0+PC9CdXR0b24+XG4gICk7XG5cbiAgaWYgKHJvb20gJiYgb3duZXIpXG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPFJlbmRlclJvb21NZW1iZXJzXG4gICAgICAgICAgcm9vbT17cm9vbX1cbiAgICAgICAgICBvd25lcj17b3duZXJ9XG4gICAgICAgICAgb3Bwb25lbnQ9e29wcG9uZW50fVxuICAgICAgICAgIG9uZXJBY3Rpb25zPXtvd25lckFjdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgKTtcbiAgcmV0dXJuIDxtYWluPntcIi4uLnZlcnlmaW5nIHJvb21cIn08L21haW4+O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChIb21lKTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VSZWR1Y2VyIiwidXNlU3RhdGUiLCJ3aXRoQXV0aCIsInVzZUF4aW9zIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInJvb21TZWxlY3RvciIsInNldFJvb20iLCJUeXBvZ3JhcGh5IiwiRmxleCIsIkRpdmlkZXIiLCJMaW5rIiwidXNlclNlbGVjdG9yIiwicGFyc2VSb29tVXJsIiwidXJsIiwidHJpbW1lZFVybCIsInNwbGl0IiwicmVnZXgiLCJtYXRjaCIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsImZldGNoVXNlckJ5SWQiLCJfYXhpb3MiLCJpZCIsInVuZGVmaW5lZCIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlIiwidXNlUm9vbU1lbWJlcnMiLCJyb29tIiwiYXhpb3NSZWFkeSIsImF4aW9zSW5zdGFuY2UiLCJvd25lciIsInNldE93bmVyIiwib3Bwb25lbnQiLCJzZXRPcHBvbmVudCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwib3duZXJVc2VyIiwib3Bwb25lbnRVc2VyIiwiVXNlckxpbmsiLCJ1c2VyIiwiZ2FwIiwiaHJlZiIsImNsYXNzTmFtZSIsImRpc3BsYXluYW1lIiwidXNlcm5hbWUiLCJPbmVNZW1iZXIiLCJtZW1iZXIiLCJvd25lckFjdGlvbnMiLCJkaXYiLCJSZW5kZXJSb29tTWVtYmVycyIsImlzT3duZXIiLCJhbGVydCIsInZlcnRpY2FsIiwiSG9tZSIsInJvdXRlciIsImRpc3BhdGNoIiwidXJsRm9ybWF0Iiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwicG9zdCIsInJlcyIsImNhdGNoIiwicHVzaCIsInNoYWxsb3ciLCJoYW5kbGVLaWNrT3Bwb25lbnQiLCJCdXR0b24iLCJvbkNsaWNrIiwibWFpbiIsIm9uZXJBY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});