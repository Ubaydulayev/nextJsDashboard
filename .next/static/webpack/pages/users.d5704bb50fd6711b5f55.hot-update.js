"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./Api/index.js":
/*!**********************!*\
  !*** ./Api/index.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUsers\": function() { return /* binding */ getUsers; },\n/* harmony export */   \"getTodos\": function() { return /* binding */ getTodos; },\n/* harmony export */   \"getPosts\": function() { return /* binding */ getPosts; },\n/* harmony export */   \"getAlbums\": function() { return /* binding */ getAlbums; },\n/* harmony export */   \"getPhotos\": function() { return /* binding */ getPhotos; }\n/* harmony export */ });\n/* harmony import */ var _Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar getUsers = /*#__PURE__*/function () {\n  var _ref = (0,_Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var res;\n    return _Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/users?_limit=10\");\n\n          case 3:\n            res = _context.sent;\n            return _context.abrupt(\"return\", {\n              success: true,\n              data: res.data\n            });\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            console.error(\"error\");\n            return _context.abrupt(\"return\", {\n              success: false\n            });\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function getUsers() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar getTodos = /*#__PURE__*/function () {\n  var _ref2 = (0,_Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {\n    var res;\n    return _Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/todos?_limit=12\");\n\n          case 3:\n            res = _context2.sent;\n            return _context2.abrupt(\"return\", {\n              success: true,\n              data: res.data\n            });\n\n          case 7:\n            _context2.prev = 7;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.error(\"error\");\n            return _context2.abrupt(\"return\", {\n              success: false\n            });\n\n          case 11:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 7]]);\n  }));\n\n  return function getTodos() {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar getPosts = /*#__PURE__*/function () {\n  var _ref3 = (0,_Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {\n    var res;\n    return _Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/posts?_limit=12\");\n\n          case 3:\n            res = _context3.sent;\n            return _context3.abrupt(\"return\", {\n              success: true,\n              data: res.data\n            });\n\n          case 7:\n            _context3.prev = 7;\n            _context3.t0 = _context3[\"catch\"](0);\n            console.error(\"error\");\n            return _context3.abrupt(\"return\", {\n              success: false\n            });\n\n          case 11:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 7]]);\n  }));\n\n  return function getPosts() {\n    return _ref3.apply(this, arguments);\n  };\n}();\nvar getAlbums = /*#__PURE__*/function () {\n  var _ref4 = (0,_Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {\n    var res;\n    return _Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.prev = 0;\n            _context4.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/albums?_limit=12\");\n\n          case 3:\n            res = _context4.sent;\n            return _context4.abrupt(\"return\", {\n              success: true,\n              data: res.data\n            });\n\n          case 7:\n            _context4.prev = 7;\n            _context4.t0 = _context4[\"catch\"](0);\n            console.error(\"error\");\n            return _context4.abrupt(\"return\", {\n              success: false\n            });\n\n          case 11:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[0, 7]]);\n  }));\n\n  return function getAlbums() {\n    return _ref4.apply(this, arguments);\n  };\n}();\nvar getPhotos = /*#__PURE__*/function () {\n  var _ref5 = (0,_Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {\n    var res;\n    return _Users_dostonbekubaydullayev_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.prev = 0;\n            _context5.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/photos?_limit=12\");\n\n          case 3:\n            res = _context5.sent;\n            return _context5.abrupt(\"return\", {\n              success: true,\n              data: res.data\n            });\n\n          case 7:\n            _context5.prev = 7;\n            _context5.t0 = _context5[\"catch\"](0);\n            console.error(\"error\");\n            return _context5.abrupt(\"return\", {\n              success: false\n            });\n\n          case 11:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5, null, [[0, 7]]);\n  }));\n\n  return function getPhotos() {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBZDtBQUxpQiw4Q0FNVjtBQUFFSCxjQUFBQSxPQUFPLEVBQUU7QUFBWCxhQU5VOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVRPLFNBQVM7QUFBQTtBQUFBO0FBQUEsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9BcGkvaW5kZXguanM/ZGQ4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzP19saW1pdD0xMGApO1xuICAgICAgICByZXR1cm4ge3N1Y2Nlc3MgOiB0cnVlICwgZGF0YTogcmVzLmRhdGEgfVxuICAgIH1jYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yXCIpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VG9kb3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3M/X2xpbWl0PTEyYCk7XG4gICAgICAgIHJldHVybiB7c3VjY2VzcyA6IHRydWUgLCBkYXRhOiByZXMuZGF0YSB9XG4gICAgfWNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3JcIik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cz9fbGltaXQ9MTJgKTtcbiAgICAgICAgcmV0dXJuIHtzdWNjZXNzIDogdHJ1ZSAsIGRhdGE6IHJlcy5kYXRhIH1cbiAgICB9Y2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvclwiKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldEFsYnVtcyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9hbGJ1bXM/X2xpbWl0PTEyYCk7XG4gICAgICAgIHJldHVybiB7c3VjY2VzcyA6IHRydWUgLCBkYXRhOiByZXMuZGF0YSB9XG4gICAgfWNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3JcIik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQaG90b3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcGhvdG9zP19saW1pdD0xMmApO1xuICAgICAgICByZXR1cm4ge3N1Y2Nlc3MgOiB0cnVlICwgZGF0YTogcmVzLmRhdGEgfVxuICAgIH1jYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yXCIpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJheGlvcyIsImdldFVzZXJzIiwiZ2V0IiwicmVzIiwic3VjY2VzcyIsImRhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRUb2RvcyIsImdldFBvc3RzIiwiZ2V0QWxidW1zIiwiZ2V0UGhvdG9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Api/index.js\n");

/***/ })

});