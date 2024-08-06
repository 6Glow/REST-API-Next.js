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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var _middlewares_api_authMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares/api/authMiddleware */ \"(middleware)/./middlewares/api/authMiddleware.ts\");\n\n\nconst config = {\n    matcher: \"/api/:path*\"\n};\nfunction middleware(request) {\n    const authResult = (0,_middlewares_api_authMiddleware__WEBPACK_IMPORTED_MODULE_1__.authMiddleware)(request);\n    if (!authResult?.isValid && request.url.includes(\"/api/blogs\")) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            message: \"Unauthorized\"\n        }), {\n            status: 401\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ3VCO0FBRzNELE1BQU1FLFNBQVM7SUFDcEJDLFNBQVM7QUFDWCxFQUFFO0FBRWEsU0FBU0MsV0FBV0MsT0FBZ0I7SUFFakQsTUFBTUMsYUFBYUwsK0VBQWNBLENBQUNJO0lBQ2xDLElBQUcsQ0FBQ0MsWUFBWUMsV0FBV0YsUUFBUUcsR0FBRyxDQUFDQyxRQUFRLENBQUMsZUFBZTtRQUM3RCxPQUFPLElBQUlULHFEQUFZQSxDQUFDVSxLQUFLQyxTQUFTLENBQUM7WUFBRUMsU0FBUztRQUFlLElBQUk7WUFDbkVDLFFBQVE7UUFDVjtJQUNGO0lBQ0EsT0FBT2IscURBQVlBLENBQUNjLElBQUk7QUFDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyBhdXRoTWlkZGxld2FyZSB9IGZyb20gXCIuL21pZGRsZXdhcmVzL2FwaS9hdXRoTWlkZGxld2FyZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogXCIvYXBpLzpwYXRoKlwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBSZXF1ZXN0KSB7XHJcblxyXG4gIGNvbnN0IGF1dGhSZXN1bHQgPSBhdXRoTWlkZGxld2FyZShyZXF1ZXN0KVxyXG4gIGlmKCFhdXRoUmVzdWx0Py5pc1ZhbGlkICYmIHJlcXVlc3QudXJsLmluY2x1ZGVzKFwiL2FwaS9ibG9nc1wiKSkge1xyXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH0pLCB7XHJcbiAgICAgIHN0YXR1czogNDAxLFxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KClcclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJhdXRoTWlkZGxld2FyZSIsImNvbmZpZyIsIm1hdGNoZXIiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsImF1dGhSZXN1bHQiLCJpc1ZhbGlkIiwidXJsIiwiaW5jbHVkZXMiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsInN0YXR1cyIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});