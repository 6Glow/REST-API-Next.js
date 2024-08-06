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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var _middlewares_api_authMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares/api/authMiddleware */ \"(middleware)/./middlewares/api/authMiddleware.ts\");\n/* harmony import */ var _middlewares_api_logMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares/api/logMiddleware */ \"(middleware)/./middlewares/api/logMiddleware.ts\");\n\n\n\nconst config = {\n    matcher: \"/api/:path*\"\n};\nfunction middleware(request) {\n    if (request.url.includes(\"/api/blogs\")) {\n        const logResult = (0,_middlewares_api_logMiddleware__WEBPACK_IMPORTED_MODULE_2__.logMiddleware)(request);\n        console.log(logResult.response);\n    }\n    const authResult = (0,_middlewares_api_authMiddleware__WEBPACK_IMPORTED_MODULE_1__.authMiddleware)(request);\n    if (!authResult?.isValid) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            message: \"Unauthorized\"\n        }), {\n            status: 401\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUN1QjtBQUNGO0FBR3pELE1BQU1HLFNBQVM7SUFDcEJDLFNBQVM7QUFDWCxFQUFFO0FBRWEsU0FBU0MsV0FBV0MsT0FBZ0I7SUFFakQsSUFBSUEsUUFBUUMsR0FBRyxDQUFDQyxRQUFRLENBQUMsZUFBZTtRQUN0QyxNQUFNQyxZQUFZUCw2RUFBYUEsQ0FBQ0k7UUFDaENJLFFBQVFDLEdBQUcsQ0FBQ0YsVUFBVUcsUUFBUTtJQUNoQztJQUVBLE1BQU1DLGFBQWFaLCtFQUFjQSxDQUFDSztJQUNsQyxJQUFHLENBQUNPLFlBQVlDLFNBQVU7UUFDeEIsT0FBTyxJQUFJZCxxREFBWUEsQ0FBQ2UsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVM7UUFBZSxJQUFJO1lBQ25FQyxRQUFRO1FBQ1Y7SUFDRjtJQUNBLE9BQU9sQixxREFBWUEsQ0FBQ21CLElBQUk7QUFDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyBhdXRoTWlkZGxld2FyZSB9IGZyb20gXCIuL21pZGRsZXdhcmVzL2FwaS9hdXRoTWlkZGxld2FyZVwiO1xyXG5pbXBvcnQgeyBsb2dNaWRkbGV3YXJlIH0gZnJvbSBcIi4vbWlkZGxld2FyZXMvYXBpL2xvZ01pZGRsZXdhcmVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIG1hdGNoZXI6IFwiL2FwaS86cGF0aCpcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogUmVxdWVzdCkge1xyXG5cclxuICBpZiAocmVxdWVzdC51cmwuaW5jbHVkZXMoXCIvYXBpL2Jsb2dzXCIpKSB7XHJcbiAgICBjb25zdCBsb2dSZXN1bHQgPSBsb2dNaWRkbGV3YXJlKHJlcXVlc3QpO1xyXG4gICAgY29uc29sZS5sb2cobG9nUmVzdWx0LnJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGF1dGhSZXN1bHQgPSBhdXRoTWlkZGxld2FyZShyZXF1ZXN0KVxyXG4gIGlmKCFhdXRoUmVzdWx0Py5pc1ZhbGlkICkge1xyXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH0pLCB7XHJcbiAgICAgIHN0YXR1czogNDAxLFxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KClcclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJhdXRoTWlkZGxld2FyZSIsImxvZ01pZGRsZXdhcmUiLCJjb25maWciLCJtYXRjaGVyIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJ1cmwiLCJpbmNsdWRlcyIsImxvZ1Jlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImF1dGhSZXN1bHQiLCJpc1ZhbGlkIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJuZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ }),

/***/ "(middleware)/./middlewares/api/logMiddleware.ts":
/*!******************************************!*\
  !*** ./middlewares/api/logMiddleware.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   logMiddleware: () => (/* binding */ logMiddleware)\n/* harmony export */ });\nfunction logMiddleware(req) {\n    return {\n        response: req.method + \" \" + req.url + \" YES\"\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZXMvYXBpL2xvZ01pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVNBLGNBQWNDLEdBQVk7SUFDeEMsT0FBTztRQUFFQyxVQUFVRCxJQUFJRSxNQUFNLEdBQUcsTUFBTUYsSUFBSUcsR0FBRyxHQUFHO0lBQU87QUFDekQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZXMvYXBpL2xvZ01pZGRsZXdhcmUudHM/ODhmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9nTWlkZGxld2FyZShyZXE6IFJlcXVlc3QpIHtcclxuICByZXR1cm4geyByZXNwb25zZTogcmVxLm1ldGhvZCArIFwiIFwiICsgcmVxLnVybCArIFwiIFlFU1wiIH07XHJcbn0iXSwibmFtZXMiOlsibG9nTWlkZGxld2FyZSIsInJlcSIsInJlc3BvbnNlIiwibWV0aG9kIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middlewares/api/logMiddleware.ts\n");

/***/ })

});