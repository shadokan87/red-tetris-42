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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withAuth */ \"(app-pages-browser)/./src/app/withAuth.js\");\n/* harmony import */ var _contexts_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contexts/axios */ \"(app-pages-browser)/./src/app/contexts/axios.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_lobbyReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux/lobbyReducer */ \"(app-pages-browser)/./src/app/redux/lobbyReducer.js\");\n/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/typography */ \"(app-pages-browser)/./node_modules/antd/lib/typography/index.js\");\n/* harmony import */ var antd_lib_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/flex */ \"(app-pages-browser)/./node_modules/antd/lib/flex/index.js\");\n/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/divider */ \"(app-pages-browser)/./node_modules/antd/lib/divider/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/button */ \"(app-pages-browser)/./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/popover */ \"(app-pages-browser)/./node_modules/antd/lib/popover/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _root_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./root.css */ \"(app-pages-browser)/./src/app/root.css\");\n/* harmony import */ var _redux_sessionReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redux/sessionReducer */ \"(app-pages-browser)/./src/app/redux/sessionReducer.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst parseRoomUrl = (url)=>{\n    const trimmedUrl = url.split(\"/\")[0];\n    const regex = /#(\\w+)\\[(\\w+)\\]/;\n    const match = trimmedUrl.match(regex);\n    if (match) {\n        return {\n            name: match[1],\n            displayName: match[2]\n        };\n    }\n    return null;\n};\nconst fetchUserById = async (_axios, id)=>{\n    try {\n        if (!id) return undefined;\n        const response = await _axios.get(\"/user/\".concat(id));\n        console.log(\"!fetch result\", response);\n        return response.data;\n    } catch (e) {\n    // TODO: handle error\n    }\n};\nconst useRoomMembers = (room)=>{\n    _s();\n    const { axiosReady, axiosInstance } = (0,_contexts_axios__WEBPACK_IMPORTED_MODULE_4__.useAxios)();\n    const [owner, setOwner] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [opponent, setOpponent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!axiosReady || !room) return;\n        Promise.all([\n            fetchUserById(axiosInstance, room.owner),\n            fetchUserById(axiosInstance, room.opponent)\n        ]).then((param)=>{\n            let [ownerUser, opponentUser] = param;\n            setOwner(ownerUser);\n            setOpponent(opponentUser);\n        });\n    }, [\n        room,\n        axiosReady\n    ]);\n    return [\n        owner,\n        opponent\n    ];\n};\n_s(useRoomMembers, \"kQ6bqIj0hdxoc2Y04DyMssrRggM=\", false, function() {\n    return [\n        _contexts_axios__WEBPACK_IMPORTED_MODULE_4__.useAxios\n    ];\n});\nconst UserLink = (param)=>{\n    let { user } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_flex__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            gap: \"0.5em\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                    href: \"/404\",\n                    className: \"userLink\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        children: user.displayname\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/page.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    children: user.username\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/src/app/page.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = UserLink;\nconst OneMember = (param)=>{\n    let { room, member, ownerActions } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"oneMember\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_flex__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            gap: \"0.5em\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserLink, {\n                    user: member\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                ownerActions\n            ]\n        }, void 0, true, {\n            fileName: \"/app/src/app/page.js\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/app/src/app/page.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = OneMember;\nconst RenderRoomMembers = (param)=>{\n    let { room, owner, opponent, ownerActions } = param;\n    _s1();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_redux_sessionReducer__WEBPACK_IMPORTED_MODULE_9__.userSelector);\n    const isOwner = user.id == owner.id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_flex__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            vertical: true,\n            className: \"membersWrapper\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OneMember, {\n                    room: room,\n                    member: owner\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_divider__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                    children: \"VS\"\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined),\n                opponent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OneMember, {\n                    room: room,\n                    member: opponent,\n                    ownerActions: isOwner && ownerActions() || undefined\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.js\",\n                    lineNumber: 85,\n                    columnNumber: 11\n                }, undefined) || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    children: \"Waiting for opponent\"\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.js\",\n                    lineNumber: 90,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/src/app/page.js\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s1(RenderRoomMembers, \"ODc3cjw/vvoWaLFqHWcEGODyOfo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c2 = RenderRoomMembers;\nfunction Home() {\n    _s2();\n    var _s = $RefreshSig$();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_redux_sessionReducer__WEBPACK_IMPORTED_MODULE_9__.userSelector);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const room = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_redux_lobbyReducer__WEBPACK_IMPORTED_MODULE_6__.roomSelector);\n    const { axiosReady, axiosInstance } = (0,_contexts_axios__WEBPACK_IMPORTED_MODULE_4__.useAxios)();\n    const [owner, opponent] = useRoomMembers(room);\n    // useEffect(() => {\n    //   console.log(\"Owner:\", owner);\n    //   console.log(\"Opponent:\", opponent);\n    // }, [owner, opponent]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!axiosReady) return;\n        const urlFormat = parseRoomUrl(window.location.hash);\n        if (urlFormat) {\n            try {\n                (async ()=>{\n                    await axiosInstance.post(\"/game/room/join/\".concat(urlFormat.displayName, \"/\").concat(urlFormat.name)).then((res)=>{\n                        dispatch((0,_redux_lobbyReducer__WEBPACK_IMPORTED_MODULE_6__.setRoom)(res.data.room));\n                    }).catch((e)=>{\n                        console.log(\"error here\", e);\n                    });\n                })();\n            // joinRoom(urlFormat);\n            } catch (e) {}\n        } else {\n            router.push(\"/404\", undefined, {\n                shallow: true\n            });\n        }\n    }, [\n        window.location,\n        axiosReady\n    ]);\n    const handleKickOpponent = async ()=>{\n        console.log(\"kick user: \" + opponent.displayname);\n    };\n    const OwnerActions = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_13___default()), {\n            type: \"primary\",\n            onClick: async ()=>await handleKickOpponent(),\n            children: \"kick\"\n        }, void 0, false, {\n            fileName: \"/app/src/app/page.js\",\n            lineNumber: 136,\n            columnNumber: 5\n        }, this);\n    const MemberFooterActions = ()=>{\n        _s();\n        const isOwner = user.id == owner.id;\n        const [showPopover, setShowPopover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n        if (isOwner) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onMouseEnter: ()=>{\n                console.log(\"enter\");\n                setShowPopover(true);\n            },\n            onMouseLeave: ()=>{\n                setShowPopover(false);\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_popover__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                content: \"Opponent not ready\",\n                trigger: \"hover\",\n                open: showPopover,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_13___default()), {\n                    disabled: !room.opponentReady,\n                    type: \"primary\",\n                    onClick: async ()=>await handleKickOpponent(),\n                    children: \"Start game\"\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.js\",\n                    lineNumber: 160,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/app/src/app/page.js\",\n                lineNumber: 155,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/app/src/app/page.js\",\n            lineNumber: 146,\n            columnNumber: 9\n        }, this);\n        else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    };\n    _s(MemberFooterActions, \"qpWDmbPoVH6Vbp+8Qs1GTDr71/Y=\");\n    if (room && owner) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"main\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_flex__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            vertical: true,\n            gap: \"0.5em\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RenderRoomMembers, {\n                    room: room,\n                    owner: owner,\n                    opponent: opponent,\n                    ownerActions: OwnerActions\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.js\",\n                    lineNumber: 177,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MemberFooterActions, {}, void 0, false, {\n                    fileName: \"/app/src/app/page.js\",\n                    lineNumber: 183,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/src/app/page.js\",\n            lineNumber: 176,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/app/src/app/page.js\",\n        lineNumber: 175,\n        columnNumber: 7\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: \"...veryfing room\"\n    }, void 0, false, {\n        fileName: \"/app/src/app/page.js\",\n        lineNumber: 187,\n        columnNumber: 10\n    }, this);\n}\n_s2(Home, \"bT0b9lkUtbY/qiPtGtIToa0O7V4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        _contexts_axios__WEBPACK_IMPORTED_MODULE_4__.useAxios,\n        useRoomMembers\n    ];\n});\n_c3 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c4 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Home));\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"UserLink\");\n$RefreshReg$(_c1, \"OneMember\");\n$RefreshReg$(_c2, \"RenderRoomMembers\");\n$RefreshReg$(_c3, \"Home\");\n$RefreshReg$(_c4, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OUQsc0RBQVNBO1FBQ1hPLG9EQUFXQTtRQUNQRCxvREFBV0E7UUFDZkMsb0RBQVdBO1FBQ2NGLHFEQUFRQTtRQUNwQjhCOzs7TUFObkIyQjtBQThGVCwrREFBZSxNQUFBMUQscURBQVFBLENBQUMwRCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuL3dpdGhBdXRoXCI7XG5pbXBvcnQgeyB1c2VBeGlvcyB9IGZyb20gXCIuL2NvbnRleHRzL2F4aW9zXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHJvb21TZWxlY3Rvciwgc2V0Um9vbSB9IGZyb20gXCIuL3JlZHV4L2xvYmJ5UmVkdWNlclwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgRmxleCwgRGl2aWRlciwgQnV0dG9uLCBQb3BvdmVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBcIi4vcm9vdC5jc3NcIjtcbmltcG9ydCB7IHVzZXJTZWxlY3RvciB9IGZyb20gXCIuL3JlZHV4L3Nlc3Npb25SZWR1Y2VyXCI7XG5cbmNvbnN0IHBhcnNlUm9vbVVybCA9ICh1cmwpID0+IHtcbiAgY29uc3QgdHJpbW1lZFVybCA9IHVybC5zcGxpdChcIi9cIilbMF07XG4gIGNvbnN0IHJlZ2V4ID0gLyMoXFx3KylcXFsoXFx3KylcXF0vO1xuICBjb25zdCBtYXRjaCA9IHRyaW1tZWRVcmwubWF0Y2gocmVnZXgpO1xuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4geyBuYW1lOiBtYXRjaFsxXSwgZGlzcGxheU5hbWU6IG1hdGNoWzJdIH07XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBmZXRjaFVzZXJCeUlkID0gYXN5bmMgKF9heGlvcywgaWQpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIWlkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgX2F4aW9zLmdldChgL3VzZXIvJHtpZH1gKTtcbiAgICBjb25zb2xlLmxvZyhcIiFmZXRjaCByZXN1bHRcIiwgcmVzcG9uc2UpO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gVE9ETzogaGFuZGxlIGVycm9yXG4gIH1cbn07XG5cbmNvbnN0IHVzZVJvb21NZW1iZXJzID0gKHJvb20pID0+IHtcbiAgY29uc3QgeyBheGlvc1JlYWR5LCBheGlvc0luc3RhbmNlIH0gPSB1c2VBeGlvcygpO1xuICBjb25zdCBbb3duZXIsIHNldE93bmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbb3Bwb25lbnQsIHNldE9wcG9uZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFheGlvc1JlYWR5IHx8ICFyb29tKSByZXR1cm47XG4gICAgUHJvbWlzZS5hbGwoW1xuICAgICAgZmV0Y2hVc2VyQnlJZChheGlvc0luc3RhbmNlLCByb29tLm93bmVyKSxcbiAgICAgIGZldGNoVXNlckJ5SWQoYXhpb3NJbnN0YW5jZSwgcm9vbS5vcHBvbmVudCksXG4gICAgXSkudGhlbigoW293bmVyVXNlciwgb3Bwb25lbnRVc2VyXSkgPT4ge1xuICAgICAgc2V0T3duZXIob3duZXJVc2VyKTtcbiAgICAgIHNldE9wcG9uZW50KG9wcG9uZW50VXNlcik7XG4gICAgfSk7XG4gIH0sIFtyb29tLCBheGlvc1JlYWR5XSk7XG4gIHJldHVybiBbb3duZXIsIG9wcG9uZW50XTtcbn07XG5cbmNvbnN0IFVzZXJMaW5rID0gKHsgdXNlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGbGV4IGdhcD17XCIwLjVlbVwifT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi80MDRcIiBjbGFzc05hbWU9XCJ1c2VyTGlua1wiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5Pnt1c2VyLmRpc3BsYXluYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8VHlwb2dyYXBoeT57dXNlci51c2VybmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICA8L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBPbmVNZW1iZXIgPSAoeyByb29tLCBtZW1iZXIsIG93bmVyQWN0aW9ucyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvbmVNZW1iZXJcIj5cbiAgICAgIDxGbGV4IGdhcD17XCIwLjVlbVwifT5cbiAgICAgICAgPFVzZXJMaW5rIHVzZXI9e21lbWJlcn0+PC9Vc2VyTGluaz5cbiAgICAgICAge293bmVyQWN0aW9uc31cbiAgICAgIDwvRmxleD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFJlbmRlclJvb21NZW1iZXJzID0gKHsgcm9vbSwgb3duZXIsIG9wcG9uZW50LCBvd25lckFjdGlvbnMgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IodXNlclNlbGVjdG9yKTtcbiAgY29uc3QgaXNPd25lciA9IHVzZXIuaWQgPT0gb3duZXIuaWQ7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGbGV4IHZlcnRpY2FsIGNsYXNzTmFtZT1cIm1lbWJlcnNXcmFwcGVyXCI+XG4gICAgICAgIDxPbmVNZW1iZXIgcm9vbT17cm9vbX0gbWVtYmVyPXtvd25lcn0gLz5cbiAgICAgICAgPERpdmlkZXI+e1wiVlNcIn08L0RpdmlkZXI+XG4gICAgICAgIHsob3Bwb25lbnQgJiYgKFxuICAgICAgICAgIDxPbmVNZW1iZXJcbiAgICAgICAgICAgIHJvb209e3Jvb219XG4gICAgICAgICAgICBtZW1iZXI9e29wcG9uZW50fVxuICAgICAgICAgICAgb3duZXJBY3Rpb25zPXsoaXNPd25lciAmJiBvd25lckFjdGlvbnMoKSkgfHwgdW5kZWZpbmVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpIHx8IDxUeXBvZ3JhcGh5PntcIldhaXRpbmcgZm9yIG9wcG9uZW50XCJ9PC9UeXBvZ3JhcGh5Pn1cbiAgICAgIDwvRmxleD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IodXNlclNlbGVjdG9yKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCByb29tID0gdXNlU2VsZWN0b3Iocm9vbVNlbGVjdG9yKTtcbiAgY29uc3QgeyBheGlvc1JlYWR5LCBheGlvc0luc3RhbmNlIH0gPSB1c2VBeGlvcygpO1xuICBjb25zdCBbb3duZXIsIG9wcG9uZW50XSA9IHVzZVJvb21NZW1iZXJzKHJvb20pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coXCJPd25lcjpcIiwgb3duZXIpO1xuICAvLyAgIGNvbnNvbGUubG9nKFwiT3Bwb25lbnQ6XCIsIG9wcG9uZW50KTtcbiAgLy8gfSwgW293bmVyLCBvcHBvbmVudF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFheGlvc1JlYWR5KSByZXR1cm47XG4gICAgY29uc3QgdXJsRm9ybWF0ID0gcGFyc2VSb29tVXJsKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgICBpZiAodXJsRm9ybWF0KSB7XG4gICAgICB0cnkge1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGF3YWl0IGF4aW9zSW5zdGFuY2VcbiAgICAgICAgICAgIC5wb3N0KGAvZ2FtZS9yb29tL2pvaW4vJHt1cmxGb3JtYXQuZGlzcGxheU5hbWV9LyR7dXJsRm9ybWF0Lm5hbWV9YClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0Um9vbShyZXMuZGF0YS5yb29tKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaGVyZVwiLCBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpO1xuICAgICAgICAvLyBqb2luUm9vbSh1cmxGb3JtYXQpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2goXCIvNDA0XCIsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pO1xuICAgIH1cbiAgfSwgW3dpbmRvdy5sb2NhdGlvbiwgYXhpb3NSZWFkeV0pO1xuXG4gIGNvbnN0IGhhbmRsZUtpY2tPcHBvbmVudCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImtpY2sgdXNlcjogXCIgKyBvcHBvbmVudC5kaXNwbGF5bmFtZSk7XG4gIH07XG5cbiAgY29uc3QgT3duZXJBY3Rpb25zID0gKCkgPT4gKFxuICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXthc3luYyAoKSA9PiBhd2FpdCBoYW5kbGVLaWNrT3Bwb25lbnQoKX0+XG4gICAgICB7XCJraWNrXCJ9XG4gICAgPC9CdXR0b24+XG4gICk7XG5cbiAgY29uc3QgTWVtYmVyRm9vdGVyQWN0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBpc093bmVyID0gdXNlci5pZCA9PSBvd25lci5pZDtcbiAgICBjb25zdCBbc2hvd1BvcG92ZXIsIHNldFNob3dQb3BvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBpZiAoaXNPd25lcilcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXJcIik7XG4gICAgICAgICAgICBzZXRTaG93UG9wb3Zlcih0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd1BvcG92ZXIoZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgY29udGVudD1cIk9wcG9uZW50IG5vdCByZWFkeVwiXG4gICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXJcIlxuICAgICAgICAgICAgb3Blbj17c2hvd1BvcG92ZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXJvb20ub3Bwb25lbnRSZWFkeX1cbiAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiBhd2FpdCBoYW5kbGVLaWNrT3Bwb25lbnQoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1wiU3RhcnQgZ2FtZVwifVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgZWxzZSByZXR1cm4gPD48Lz47XG4gIH07XG5cbiAgaWYgKHJvb20gJiYgb3duZXIpXG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPEZsZXggdmVydGljYWwgZ2FwPXtcIjAuNWVtXCJ9PlxuICAgICAgICAgIDxSZW5kZXJSb29tTWVtYmVyc1xuICAgICAgICAgICAgcm9vbT17cm9vbX1cbiAgICAgICAgICAgIG93bmVyPXtvd25lcn1cbiAgICAgICAgICAgIG9wcG9uZW50PXtvcHBvbmVudH1cbiAgICAgICAgICAgIG93bmVyQWN0aW9ucz17T3duZXJBY3Rpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1lbWJlckZvb3RlckFjdGlvbnMgLz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9tYWluPlxuICAgICk7XG4gIHJldHVybiA8bWFpbj57XCIuLi52ZXJ5ZmluZyByb29tXCJ9PC9tYWluPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoSG9tZSk7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwid2l0aEF1dGgiLCJ1c2VBeGlvcyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJyb29tU2VsZWN0b3IiLCJzZXRSb29tIiwiVHlwb2dyYXBoeSIsIkZsZXgiLCJEaXZpZGVyIiwiQnV0dG9uIiwiUG9wb3ZlciIsIkxpbmsiLCJ1c2VyU2VsZWN0b3IiLCJwYXJzZVJvb21VcmwiLCJ1cmwiLCJ0cmltbWVkVXJsIiwic3BsaXQiLCJyZWdleCIsIm1hdGNoIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZmV0Y2hVc2VyQnlJZCIsIl9heGlvcyIsImlkIiwidW5kZWZpbmVkIiwicmVzcG9uc2UiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImUiLCJ1c2VSb29tTWVtYmVycyIsInJvb20iLCJheGlvc1JlYWR5IiwiYXhpb3NJbnN0YW5jZSIsIm93bmVyIiwic2V0T3duZXIiLCJvcHBvbmVudCIsInNldE9wcG9uZW50IiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJvd25lclVzZXIiLCJvcHBvbmVudFVzZXIiLCJVc2VyTGluayIsInVzZXIiLCJnYXAiLCJocmVmIiwiY2xhc3NOYW1lIiwiZGlzcGxheW5hbWUiLCJ1c2VybmFtZSIsIk9uZU1lbWJlciIsIm1lbWJlciIsIm93bmVyQWN0aW9ucyIsImRpdiIsIlJlbmRlclJvb21NZW1iZXJzIiwiaXNPd25lciIsInZlcnRpY2FsIiwiSG9tZSIsInJvdXRlciIsImRpc3BhdGNoIiwidXJsRm9ybWF0Iiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwicG9zdCIsInJlcyIsImNhdGNoIiwicHVzaCIsInNoYWxsb3ciLCJoYW5kbGVLaWNrT3Bwb25lbnQiLCJPd25lckFjdGlvbnMiLCJ0eXBlIiwib25DbGljayIsIk1lbWJlckZvb3RlckFjdGlvbnMiLCJzaG93UG9wb3ZlciIsInNldFNob3dQb3BvdmVyIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiY29udGVudCIsInRyaWdnZXIiLCJvcGVuIiwiZGlzYWJsZWQiLCJvcHBvbmVudFJlYWR5IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});