"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var _middlewares_api_authMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares/api/authMiddleware */ \"(middleware)/./middlewares/api/authMiddleware.ts\");\n\n\nconst config = {\n    matcher: \"/api/:path*\"\n};\nfunction middleware(request) {\n    const authResult = (0,_middlewares_api_authMiddleware__WEBPACK_IMPORTED_MODULE_1__.authMiddleware)(request);\n    if (!authResult?.isValid) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            message: \"Unauthorized\"\n        }), {\n            status: 401\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ3VCO0FBRzNELE1BQU1FLFNBQVM7SUFDcEJDLFNBQVM7QUFDWCxFQUFFO0FBRWEsU0FBU0MsV0FBV0MsT0FBZ0I7SUFFakQsTUFBTUMsYUFBYUwsK0VBQWNBLENBQUNJO0lBQ2xDLElBQUcsQ0FBQ0MsWUFBWUMsU0FBUztRQUN2QixPQUFPLElBQUlQLHFEQUFZQSxDQUFDUSxLQUFLQyxTQUFTLENBQUM7WUFBRUMsU0FBUztRQUFlLElBQUk7WUFDbkVDLFFBQVE7UUFDVjtJQUNGO0lBQ0EsT0FBT1gscURBQVlBLENBQUNZLElBQUk7QUFDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyBhdXRoTWlkZGxld2FyZSB9IGZyb20gXCIuL21pZGRsZXdhcmVzL2FwaS9hdXRoTWlkZGxld2FyZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogXCIvYXBpLzpwYXRoKlwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBSZXF1ZXN0KSB7XHJcblxyXG4gIGNvbnN0IGF1dGhSZXN1bHQgPSBhdXRoTWlkZGxld2FyZShyZXF1ZXN0KVxyXG4gIGlmKCFhdXRoUmVzdWx0Py5pc1ZhbGlkKSB7XHJcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfSksIHtcclxuICAgICAgc3RhdHVzOiA0MDEsXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKVxyXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImF1dGhNaWRkbGV3YXJlIiwiY29uZmlnIiwibWF0Y2hlciIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiYXV0aFJlc3VsdCIsImlzVmFsaWQiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsInN0YXR1cyIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ }),

/***/ "(middleware)/./middlewares/api/authMiddleware.ts":
/*!*******************************************!*\
  !*** ./middlewares/api/authMiddleware.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authMiddleware: () => (/* binding */ authMiddleware)\n/* harmony export */ });\nconst validate = (token)=>{\n    const validToken = true;\n    if (!validToken || !token) {\n        return false;\n    }\n    return true;\n};\nfunction authMiddleware(req) {\n    const token = req.headers.get(\"authorization\")?.split(\" \")[1];\n    return {\n        isValid: validate(token)\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZXMvYXBpL2F1dGhNaWRkbGV3YXJlLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXLENBQUNDO0lBQ2hCLE1BQU1DLGFBQWE7SUFDbkIsSUFBSSxDQUFDQSxjQUFjLENBQUNELE9BQU87UUFDekIsT0FBTztJQUNUO0lBQ0EsT0FBTztBQUNUO0FBRU8sU0FBU0UsZUFBZUMsR0FBWTtJQUN6QyxNQUFNSCxRQUFRRyxJQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0JDLE1BQU0sSUFBSSxDQUFDLEVBQUU7SUFFN0QsT0FBTztRQUFFQyxTQUFTUixTQUFTQztJQUFPO0FBQ3BDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmVzL2FwaS9hdXRoTWlkZGxld2FyZS50cz9mNzExIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHZhbGlkYXRlID0gKHRva2VuOiBhbnkpID0+IHtcclxuICBjb25zdCB2YWxpZFRva2VuID0gdHJ1ZTtcclxuICBpZiAoIXZhbGlkVG9rZW4gfHwgIXRva2VuKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhNaWRkbGV3YXJlKHJlcTogUmVxdWVzdCk6IGFueSB7XHJcbiAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5nZXQoXCJhdXRob3JpemF0aW9uXCIpPy5zcGxpdChcIiBcIilbMV07XHJcblxyXG4gIHJldHVybiB7IGlzVmFsaWQ6IHZhbGlkYXRlKHRva2VuKSB9O1xyXG59Il0sIm5hbWVzIjpbInZhbGlkYXRlIiwidG9rZW4iLCJ2YWxpZFRva2VuIiwiYXV0aE1pZGRsZXdhcmUiLCJyZXEiLCJoZWFkZXJzIiwiZ2V0Iiwic3BsaXQiLCJpc1ZhbGlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middlewares/api/authMiddleware.ts\n");

/***/ })

});