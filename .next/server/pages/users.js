"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/users";
exports.ids = ["pages/users"];
exports.modules = {

/***/ "./Api/index.js":
/*!**********************!*\
  !*** ./Api/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers),\n/* harmony export */   \"getTodos\": () => (/* binding */ getTodos),\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts),\n/* harmony export */   \"getAlbums\": () => (/* binding */ getAlbums),\n/* harmony export */   \"getPhotos\": () => (/* binding */ getPhotos)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getUsers = async () => {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://jsonplaceholder.typicode.com/users?_limit=10`);\n    return {\n      succes: true,\n      data: res.data\n    };\n  } catch (error) {\n    console.error(\"error\");\n    return {\n      succes: false\n    };\n  }\n};\nconst getTodos = async () => {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://jsonplaceholder.typicode.com/todos?_limit=12`);\n    return {\n      succes: true,\n      data: res.data\n    };\n  } catch (error) {\n    console.error(\"error\");\n    return {\n      succes: false\n    };\n  }\n};\nconst getPosts = async () => {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://jsonplaceholder.typicode.com/posts?_limit=12`);\n    return {\n      succes: true,\n      data: res.data\n    };\n  } catch (error) {\n    console.error(\"error\");\n    return {\n      succes: false\n    };\n  }\n};\nconst getAlbums = async () => {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://jsonplaceholder.typicode.com/albums?_limit=12`);\n    return {\n      succes: true,\n      data: res.data\n    };\n  } catch (error) {\n    console.error(\"error\");\n    return {\n      succes: false\n    };\n  }\n};\nconst getPhotos = async () => {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://jsonplaceholder.typicode.com/photos?_limit=12`);\n    return {\n      succes: true,\n      data: res.data\n    };\n  } catch (error) {\n    console.error(\"error\");\n    return {\n      succes: false\n    };\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcGkvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRU8sTUFBTUMsUUFBUSxHQUFHLFlBQVk7QUFDaEMsTUFBSTtBQUNBLFVBQU1DLEdBQUcsR0FBRyxNQUFNRixnREFBQSxDQUFXLHNEQUFYLENBQWxCO0FBQ0EsV0FBTztBQUFDSSxNQUFBQSxNQUFNLEVBQUcsSUFBVjtBQUFpQkMsTUFBQUEsSUFBSSxFQUFFSCxHQUFHLENBQUNHO0FBQTNCLEtBQVA7QUFDSCxHQUhELENBR0MsT0FBT0MsS0FBUCxFQUFjO0FBQ1hDLElBQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFjLE9BQWQ7QUFDQSxXQUFPO0FBQUVGLE1BQUFBLE1BQU0sRUFBRTtBQUFWLEtBQVA7QUFDSDtBQUNKLENBUk07QUFVQSxNQUFNSSxRQUFRLEdBQUcsWUFBWTtBQUNoQyxNQUFJO0FBQ0EsVUFBTU4sR0FBRyxHQUFHLE1BQU1GLGdEQUFBLENBQVcsc0RBQVgsQ0FBbEI7QUFDQSxXQUFPO0FBQUNJLE1BQUFBLE1BQU0sRUFBRyxJQUFWO0FBQWlCQyxNQUFBQSxJQUFJLEVBQUVILEdBQUcsQ0FBQ0c7QUFBM0IsS0FBUDtBQUNILEdBSEQsQ0FHQyxPQUFPQyxLQUFQLEVBQWM7QUFDWEMsSUFBQUEsT0FBTyxDQUFDRCxLQUFSLENBQWMsT0FBZDtBQUNBLFdBQU87QUFBRUYsTUFBQUEsTUFBTSxFQUFFO0FBQVYsS0FBUDtBQUNIO0FBQ0osQ0FSTTtBQVVBLE1BQU1LLFFBQVEsR0FBRyxZQUFZO0FBQ2hDLE1BQUk7QUFDQSxVQUFNUCxHQUFHLEdBQUcsTUFBTUYsZ0RBQUEsQ0FBVyxzREFBWCxDQUFsQjtBQUNBLFdBQU87QUFBQ0ksTUFBQUEsTUFBTSxFQUFHLElBQVY7QUFBaUJDLE1BQUFBLElBQUksRUFBRUgsR0FBRyxDQUFDRztBQUEzQixLQUFQO0FBQ0gsR0FIRCxDQUdDLE9BQU9DLEtBQVAsRUFBYztBQUNYQyxJQUFBQSxPQUFPLENBQUNELEtBQVIsQ0FBYyxPQUFkO0FBQ0EsV0FBTztBQUFFRixNQUFBQSxNQUFNLEVBQUU7QUFBVixLQUFQO0FBQ0g7QUFDSixDQVJNO0FBVUEsTUFBTU0sU0FBUyxHQUFHLFlBQVk7QUFDakMsTUFBSTtBQUNBLFVBQU1SLEdBQUcsR0FBRyxNQUFNRixnREFBQSxDQUFXLHVEQUFYLENBQWxCO0FBQ0EsV0FBTztBQUFDSSxNQUFBQSxNQUFNLEVBQUcsSUFBVjtBQUFpQkMsTUFBQUEsSUFBSSxFQUFFSCxHQUFHLENBQUNHO0FBQTNCLEtBQVA7QUFDSCxHQUhELENBR0MsT0FBT0MsS0FBUCxFQUFjO0FBQ1hDLElBQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFjLE9BQWQ7QUFDQSxXQUFPO0FBQUVGLE1BQUFBLE1BQU0sRUFBRTtBQUFWLEtBQVA7QUFDSDtBQUNKLENBUk07QUFVQSxNQUFNTyxTQUFTLEdBQUcsWUFBWTtBQUNqQyxNQUFJO0FBQ0EsVUFBTVQsR0FBRyxHQUFHLE1BQU1GLGdEQUFBLENBQVcsdURBQVgsQ0FBbEI7QUFDQSxXQUFPO0FBQUNJLE1BQUFBLE1BQU0sRUFBRyxJQUFWO0FBQWlCQyxNQUFBQSxJQUFJLEVBQUVILEdBQUcsQ0FBQ0c7QUFBM0IsS0FBUDtBQUNILEdBSEQsQ0FHQyxPQUFPQyxLQUFQLEVBQWM7QUFDWEMsSUFBQUEsT0FBTyxDQUFDRCxLQUFSLENBQWMsT0FBZDtBQUNBLFdBQU87QUFBRUYsTUFBQUEsTUFBTSxFQUFFO0FBQVYsS0FBUDtBQUNIO0FBQ0osQ0FSTSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL0FwaS9pbmRleC5qcz9kZDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5leHBvcnQgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnM/X2xpbWl0PTEwYCk7XG4gICAgICAgIHJldHVybiB7c3VjY2VzIDogdHJ1ZSAsIGRhdGE6IHJlcy5kYXRhIH1cbiAgICB9Y2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvclwiKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzOiBmYWxzZSB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VG9kb3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3M/X2xpbWl0PTEyYCk7XG4gICAgICAgIHJldHVybiB7c3VjY2VzIDogdHJ1ZSAsIGRhdGE6IHJlcy5kYXRhIH1cbiAgICB9Y2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvclwiKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzOiBmYWxzZSB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHM/X2xpbWl0PTEyYCk7XG4gICAgICAgIHJldHVybiB7c3VjY2VzIDogdHJ1ZSAsIGRhdGE6IHJlcy5kYXRhIH1cbiAgICB9Y2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvclwiKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzOiBmYWxzZSB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0QWxidW1zID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2FsYnVtcz9fbGltaXQ9MTJgKTtcbiAgICAgICAgcmV0dXJuIHtzdWNjZXMgOiB0cnVlICwgZGF0YTogcmVzLmRhdGEgfVxuICAgIH1jYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yXCIpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXM6IGZhbHNlIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQaG90b3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcGhvdG9zP19saW1pdD0xMmApO1xuICAgICAgICByZXR1cm4ge3N1Y2NlcyA6IHRydWUgLCBkYXRhOiByZXMuZGF0YSB9XG4gICAgfWNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3JcIik7XG4gICAgICAgIHJldHVybiB7IHN1Y2NlczogZmFsc2UgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRVc2VycyIsInJlcyIsImdldCIsInN1Y2NlcyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJnZXRUb2RvcyIsImdldFBvc3RzIiwiZ2V0QWxidW1zIiwiZ2V0UGhvdG9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Api/index.js\n");

/***/ }),

/***/ "./Redux/Actions.js":
/*!**************************!*\
  !*** ./Redux/Actions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setUsers\": () => (/* binding */ setUsers)\n/* harmony export */ });\n/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api */ \"./Api/index.js\");\n/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Types */ \"./Redux/Types.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst setUsers = async dispatch => {\n  const res = await (0,_Api__WEBPACK_IMPORTED_MODULE_0__.getUsers)();\n\n  if (res.succes) {\n    const action = {\n      type: _Types__WEBPACK_IMPORTED_MODULE_1__.SET_USERS,\n      payload: res.data\n    };\n    dispatch(action);\n  } else {}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWR1eC9BY3Rpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSU8sTUFBTUcsUUFBUSxHQUFHLE1BQU9DLFFBQVAsSUFBb0I7QUFDMUMsUUFBTUMsR0FBRyxHQUFHLE1BQU1MLDhDQUFRLEVBQTFCOztBQUNBLE1BQUlLLEdBQUcsQ0FBQ0MsTUFBUixFQUFnQjtBQUNkLFVBQU1DLE1BQU0sR0FBRztBQUFFQyxNQUFBQSxJQUFJLEVBQUVQLDZDQUFSO0FBQW1CUSxNQUFBQSxPQUFPLEVBQUVKLEdBQUcsQ0FBQ0s7QUFBaEMsS0FBZjtBQUNBTixJQUFBQSxRQUFRLENBQUVHLE1BQUYsQ0FBUjtBQUNELEdBSEQsTUFHTyxDQUNOO0FBQ0YsQ0FQTSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL1JlZHV4L0FjdGlvbnMuanM/MDQwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRVc2VycyB9IGZyb20gXCIuLi9BcGlcIjtcbmltcG9ydCB7IFNFVF9VU0VSUyB9IGZyb20gXCIuL1R5cGVzXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5cblxuZXhwb3J0IGNvbnN0IHNldFVzZXJzID0gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGdldFVzZXJzKCk7XG4gIGlmIChyZXMuc3VjY2VzKSB7XG4gICAgY29uc3QgYWN0aW9uID0geyB0eXBlOiBTRVRfVVNFUlMsIHBheWxvYWQ6IHJlcy5kYXRhIH07XG4gICAgZGlzcGF0Y2ggKGFjdGlvbik7XG4gIH0gZWxzZSB7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiZ2V0VXNlcnMiLCJTRVRfVVNFUlMiLCJ1c2VEaXNwYXRjaCIsInNldFVzZXJzIiwiZGlzcGF0Y2giLCJyZXMiLCJzdWNjZXMiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Redux/Actions.js\n");

/***/ }),

/***/ "./Redux/Types.js":
/*!************************!*\
  !*** ./Redux/Types.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SET_USERS\": () => (/* binding */ SET_USERS)\n/* harmony export */ });\nconst SET_USERS = \"SET_USERS\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWR1eC9UeXBlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsU0FBUyxHQUFHLFdBQWxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vUmVkdXgvVHlwZXMuanM/ZjUwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU0VUX1VTRVJTID0gXCJTRVRfVVNFUlNcIjsiXSwibmFtZXMiOlsiU0VUX1VTRVJTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Redux/Types.js\n");

/***/ }),

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Api */ \"./Api/index.js\");\n/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Redux/Actions */ \"./Redux/Actions.js\");\n\nvar _jsxFileName = \"/Users/dostonbekubaydullayev/Desktop/NextJs/pages/users.js\";\n\n\n\n\n\n\nconst users = () => {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    (0,_Redux_Actions__WEBPACK_IMPORTED_MODULE_5__.setUsers)(dispatch);\n  }, []);\n  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => users);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"p-5\",\n      children: \"Users\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TableContainer, {\n      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Table, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n              children: \"id\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n              children: \"name\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n              children: \"email\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TableBody, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (users);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNWSxLQUFLLEdBQUcsTUFBTTtBQUNoQixRQUFNQyxRQUFRLEdBQUdMLHdEQUFXLEVBQTVCO0FBRUZELEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkSSxJQUFBQSx3REFBUSxDQUFDRSxRQUFELENBQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0EsUUFBTUMsSUFBSSxHQUFHTCx3REFBVyxDQUFDTSxLQUFLLElBQUlILEtBQVYsQ0FBeEI7QUFDQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyw2REFBRDtBQUFnQixlQUFTLEVBQUVaLG9EQUEzQjtBQUFBLDZCQUNFLDhEQUFDLG9EQUFEO0FBQUEsZ0NBQ0UsOERBQUMsd0RBQUQ7QUFBQSxpQ0FDRSw4REFBQyx1REFBRDtBQUFBLG9DQUNFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUUsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFHRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBUUUsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBaUJELENBeEJEOztBQTJCQSxpRUFBZVksS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL3VzZXJzLmpzPzM2MWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUGFwZXIsXG4gIFRhYmxlLFxuICBUYWJsZUJvZHksXG4gIFRhYmxlQ2VsbCxcbiAgVGFibGVDb250YWluZXIsXG4gIFRhYmxlSGVhZCxcbiAgVGFibGVSb3csXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGdldFVzZXJzIH0gZnJvbSBcIi4uL0FwaVwiO1xuaW1wb3J0IHsgc2V0VXNlcnMgfSBmcm9tIFwiLi4vUmVkdXgvQWN0aW9uc1wiO1xuXG5jb25zdCB1c2VycyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRVc2VycyhkaXNwYXRjaCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHVzZXJzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInAtNVwiPlVzZXJzPC9oMT5cbiAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgICAgPFRhYmxlPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+aWQ8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5uYW1lPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+ZW1haWw8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlQm9keT48L1RhYmxlQm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJzO1xuIl0sIm5hbWVzIjpbIlBhcGVyIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImdldFVzZXJzIiwic2V0VXNlcnMiLCJ1c2VycyIsImRpc3BhdGNoIiwiZGF0YSIsInN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users.js\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users.js"));
module.exports = __webpack_exports__;

})();