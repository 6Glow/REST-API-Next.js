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
exports.id = "app/api/(dashboard)/blogs/route";
exports.ids = ["app/api/(dashboard)/blogs/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2F(dashboard)%2Fblogs%2Froute&page=%2Fapi%2F(dashboard)%2Fblogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2F(dashboard)%2Fblogs%2Froute.ts&appDir=E%3A%5Crest-api-next.js%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Crest-api-next.js&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2F(dashboard)%2Fblogs%2Froute&page=%2Fapi%2F(dashboard)%2Fblogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2F(dashboard)%2Fblogs%2Froute.ts&appDir=E%3A%5Crest-api-next.js%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Crest-api-next.js&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_rest_api_next_js_app_api_dashboard_blogs_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/(dashboard)/blogs/route.ts */ \"(rsc)/./app/api/(dashboard)/blogs/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/(dashboard)/blogs/route\",\n        pathname: \"/api/blogs\",\n        filename: \"route\",\n        bundlePath: \"app/api/(dashboard)/blogs/route\"\n    },\n    resolvedPagePath: \"E:\\\\rest-api-next.js\\\\app\\\\api\\\\(dashboard)\\\\blogs\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_rest_api_next_js_app_api_dashboard_blogs_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/(dashboard)/blogs/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkYoZGFzaGJvYXJkKSUyRmJsb2dzJTJGcm91dGUmcGFnZT0lMkZhcGklMkYoZGFzaGJvYXJkKSUyRmJsb2dzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGKGRhc2hib2FyZCklMkZibG9ncyUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDcmVzdC1hcGktbmV4dC5qcyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RSUzQSU1Q3Jlc3QtYXBpLW5leHQuanMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ1k7QUFDekY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0LWFwaS1uZXh0LmpzLz9hNGVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXHJlc3QtYXBpLW5leHQuanNcXFxcYXBwXFxcXGFwaVxcXFwoZGFzaGJvYXJkKVxcXFxibG9nc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvKGRhc2hib2FyZCkvYmxvZ3Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9ibG9nc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvKGRhc2hib2FyZCkvYmxvZ3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFxyZXN0LWFwaS1uZXh0LmpzXFxcXGFwcFxcXFxhcGlcXFxcKGRhc2hib2FyZClcXFxcYmxvZ3NcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpLyhkYXNoYm9hcmQpL2Jsb2dzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2F(dashboard)%2Fblogs%2Froute&page=%2Fapi%2F(dashboard)%2Fblogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2F(dashboard)%2Fblogs%2Froute.ts&appDir=E%3A%5Crest-api-next.js%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Crest-api-next.js&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/(dashboard)/blogs/route.ts":
/*!********************************************!*\
  !*** ./app/api/(dashboard)/blogs/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/models/user */ \"(rsc)/./lib/models/user.ts\");\n/* harmony import */ var _lib_models_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/models/category */ \"(rsc)/./lib/models/category.ts\");\n/* harmony import */ var _lib_models_blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/models/blog */ \"(rsc)/./lib/models/blog.ts\");\n\n\n\n\n\n\nconst GET = async (request)=>{\n    try {\n        const { searchParams } = new URL(request.url);\n        const userId = searchParams.get(\"userId\");\n        const categoryId = searchParams.get(\"categoryId\");\n        if (!userId || !mongoose__WEBPACK_IMPORTED_MODULE_2__.Types.ObjectId.isValid(userId)) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(JSON.stringify({\n                message: \"Invalid or missing userId\"\n            }), {\n                status: 400\n            });\n        }\n        if (!categoryId || !mongoose__WEBPACK_IMPORTED_MODULE_2__.Types.ObjectId.isValid(categoryId)) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(JSON.stringify({\n                message: \"Invalid or missing categoryId\"\n            }), {\n                status: 400\n            });\n        }\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const user = await _lib_models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(userId);\n        if (!user) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(JSON.stringify({\n                message: \"User not found\"\n            }), {\n                status: 404\n            });\n        }\n        const category = await _lib_models_category__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findById(categoryId);\n        if (!categoryId) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(JSON.stringify({\n                message: \"Category not found\"\n            }), {\n                status: 404\n            });\n        }\n        const filter = {\n            user: new mongoose__WEBPACK_IMPORTED_MODULE_2__.Types.ObjectId(userId),\n            category: new mongoose__WEBPACK_IMPORTED_MODULE_2__.Types.ObjectId(categoryId)\n        };\n        const blogs = await _lib_models_blog__WEBPACK_IMPORTED_MODULE_5__[\"default\"].find(filter);\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(JSON.stringify({\n            blogs\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Error in fetching blogs \" + error.message, {\n            status: 500\n        });\n    }\n};\nconst POST = async (request)=>{\n    try {\n        const { searchParams } = new URL(request.url);\n        const userId = searchParams.get(\"userId\");\n        const categoryId = searchParams.get(\"categoryId\");\n        const body = await request.json();\n        const { title, description } = body;\n        if (!userId || !mongoose__WEBPACK_IMPORTED_MODULE_2__.Types.ObjectId.isValid(userId)) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(JSON.stringify({\n                message: \"Invalid or missing userId\"\n            }), {\n                status: 400\n            });\n        }\n        if (!categoryId || !mongoose__WEBPACK_IMPORTED_MODULE_2__.Types.ObjectId.isValid(userId)) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(JSON.stringify({\n                message: \"Invalid or missing categoryId\"\n            }), {\n                status: 400\n            });\n        }\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const user = await _lib_models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(userId);\n        if (!user) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(JSON.stringify({\n                message: \"User not found\"\n            }), {\n                status: 404\n            });\n        }\n        const category = await _lib_models_category__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findById(categoryId);\n        if (!category) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(JSON.stringify({\n                message: \"Category not found\"\n            }), {\n                status: 404\n            });\n        }\n        const newBlog = new _lib_models_blog__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n            title,\n            description,\n            user: new mongoose__WEBPACK_IMPORTED_MODULE_2__.Types.ObjectId(userId),\n            category: new mongoose__WEBPACK_IMPORTED_MODULE_2__.Types.ObjectId(categoryId)\n        });\n        await newBlog.save();\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(JSON.stringify({\n            message: \"Blog is created\",\n            blog: newBlog\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Error in the fetching blog \" + error.message, {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpLyhkYXNoYm9hcmQpL2Jsb2dzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNZO0FBQ1Y7QUFDSTtBQUNRO0FBQ1I7QUFFOUIsTUFBTU0sTUFBTSxPQUFNQztJQUN2QixJQUFHO1FBRUQsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixRQUFRRyxHQUFHO1FBQzVDLE1BQU1DLFNBQVNILGFBQWFJLEdBQUcsQ0FBQztRQUNoQyxNQUFNQyxhQUFhTCxhQUFhSSxHQUFHLENBQUM7UUFFcEMsSUFBRyxDQUFDRCxVQUFVLENBQUNULDJDQUFLQSxDQUFDWSxRQUFRLENBQUNDLE9BQU8sQ0FBQ0osU0FBUTtZQUM1QyxPQUFPLElBQUlWLHFEQUFZQSxDQUNyQmUsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxTQUFTO1lBQTRCLElBQUk7Z0JBQ3hEQyxRQUFRO1lBQ1Y7UUFFSjtRQUVBLElBQUcsQ0FBQ04sY0FBYyxDQUFDWCwyQ0FBS0EsQ0FBQ1ksUUFBUSxDQUFDQyxPQUFPLENBQUNGLGFBQWE7WUFDckQsT0FBTyxJQUFJWixxREFBWUEsQ0FDckJlLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsU0FBUztZQUFnQyxJQUFJO2dCQUM1REMsUUFBUTtZQUNWO1FBRUo7UUFFQSxNQUFNbkIsbURBQU9BO1FBRWIsTUFBTW9CLE9BQU8sTUFBTWpCLHdEQUFJQSxDQUFDa0IsUUFBUSxDQUFDVjtRQUNqQyxJQUFHLENBQUNTLE1BQU07WUFDUixPQUFPLElBQUluQixxREFBWUEsQ0FBQ2UsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxTQUFTO1lBQWlCLElBQUk7Z0JBQ3JFQyxRQUFRO1lBQ1Y7UUFFSjtRQUVBLE1BQU1HLFdBQVcsTUFBTWxCLDREQUFRQSxDQUFDaUIsUUFBUSxDQUFDUjtRQUN6QyxJQUFHLENBQUNBLFlBQVc7WUFDYixPQUFPLElBQUlaLHFEQUFZQSxDQUNyQmUsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxTQUFTO1lBQXFCLElBQUk7Z0JBQ2pEQyxRQUFRO1lBQ1Y7UUFFSjtRQUVBLE1BQU1JLFNBQWE7WUFDakJILE1BQU0sSUFBSWxCLDJDQUFLQSxDQUFDWSxRQUFRLENBQUNIO1lBQ3pCVyxVQUFVLElBQUlwQiwyQ0FBS0EsQ0FBQ1ksUUFBUSxDQUFDRDtRQUMvQjtRQUVBLE1BQU1XLFFBQVEsTUFBTW5CLHdEQUFJQSxDQUFDb0IsSUFBSSxDQUFDRjtRQUM5QixPQUFPLElBQUl0QixxREFBWUEsQ0FBQ2UsS0FBS0MsU0FBUyxDQUFDO1lBQUVPO1FBQU0sSUFBSTtZQUNqREwsUUFBUTtRQUNWO0lBRUEsRUFBQyxPQUFNTyxPQUFXO1FBQ2hCLE9BQU8sSUFBSXpCLHFEQUFZQSxDQUFDLDZCQUE2QnlCLE1BQU1SLE9BQU8sRUFBRTtZQUNsRUMsUUFBUTtRQUNWO0lBQ0Y7QUFDRixFQUFFO0FBRUssTUFBTVEsT0FBTyxPQUFPcEI7SUFFekIsSUFBSTtRQUNGLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSUYsUUFBUUcsR0FBRztRQUM1QyxNQUFNQyxTQUFTSCxhQUFhSSxHQUFHLENBQUM7UUFDaEMsTUFBTUMsYUFBYUwsYUFBYUksR0FBRyxDQUFDO1FBRXBDLE1BQU1nQixPQUFPLE1BQU1yQixRQUFRc0IsSUFBSTtRQUMvQixNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFLEdBQUdIO1FBRS9CLElBQUcsQ0FBQ2pCLFVBQVUsQ0FBQ1QsMkNBQUtBLENBQUNZLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDSixTQUFRO1lBQzVDLE9BQU8sSUFBSVYscURBQVlBLENBQ3JCZSxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7WUFBNEIsSUFBSTtnQkFDeERDLFFBQVE7WUFDVjtRQUVKO1FBRUEsSUFBRyxDQUFDTixjQUFjLENBQUNYLDJDQUFLQSxDQUFDWSxRQUFRLENBQUNDLE9BQU8sQ0FBQ0osU0FBUztZQUNqRCxPQUFPLElBQUlWLHFEQUFZQSxDQUNyQmUsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxTQUFTO1lBQWdDLElBQUk7Z0JBQzVEQyxRQUFRO1lBQ1Y7UUFFSjtRQUVBLE1BQU1uQixtREFBT0E7UUFFYixNQUFNb0IsT0FBTyxNQUFNakIsd0RBQUlBLENBQUNrQixRQUFRLENBQUNWO1FBQ2pDLElBQUcsQ0FBQ1MsTUFBTTtZQUNSLE9BQU8sSUFBSW5CLHFEQUFZQSxDQUFDZSxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7WUFBaUIsSUFBSTtnQkFDckVDLFFBQVE7WUFDVjtRQUVKO1FBRUEsTUFBTUcsV0FBVyxNQUFNbEIsNERBQVFBLENBQUNpQixRQUFRLENBQUNSO1FBQ3pDLElBQUcsQ0FBQ1MsVUFBUztZQUNYLE9BQU8sSUFBSXJCLHFEQUFZQSxDQUNyQmUsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxTQUFTO1lBQXFCLElBQUk7Z0JBQ2pEQyxRQUFRO1lBQ1Y7UUFFSjtRQUVBLE1BQU1hLFVBQVUsSUFBSTNCLHdEQUFJQSxDQUFDO1lBQ3ZCeUI7WUFDQUM7WUFDQVgsTUFBTSxJQUFJbEIsMkNBQUtBLENBQUNZLFFBQVEsQ0FBQ0g7WUFDekJXLFVBQVUsSUFBSXBCLDJDQUFLQSxDQUFDWSxRQUFRLENBQUNEO1FBQy9CO1FBRUEsTUFBTW1CLFFBQVFDLElBQUk7UUFDbEIsT0FBTyxJQUFJaEMscURBQVlBLENBQUNlLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTO1lBQW1CZ0IsTUFBTUY7UUFBUSxJQUFJO1lBQ3JGYixRQUFRO1FBQ1Y7SUFDQSxFQUFDLE9BQU1PLE9BQVk7UUFDakIsT0FBTyxJQUFJekIscURBQVlBLENBQUMsZ0NBQWdDeUIsTUFBTVIsT0FBTyxFQUFFO1lBQ3JFQyxRQUFRO1FBQ1Y7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0LWFwaS1uZXh0LmpzLy4vYXBwL2FwaS8oZGFzaGJvYXJkKS9ibG9ncy9yb3V0ZS50cz8zZTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0IGZyb20gXCJAL2xpYi9kYlwiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbGliL21vZGVscy91c2VyXCI7XHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiQC9saWIvbW9kZWxzL2NhdGVnb3J5XCI7XHJcbmltcG9ydCBCbG9nIGZyb20gXCJAL2xpYi9tb2RlbHMvYmxvZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVCA9IGFzeW5jKHJlcXVlc3Q6IFJlcXVlc3QpID0+IHtcclxuICB0cnl7XHJcblxyXG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gICAgY29uc3QgdXNlcklkID0gc2VhcmNoUGFyYW1zLmdldCgndXNlcklkJyk7XHJcbiAgICBjb25zdCBjYXRlZ29yeUlkID0gc2VhcmNoUGFyYW1zLmdldCgnY2F0ZWdvcnlJZCcpO1xyXG5cclxuICAgIGlmKCF1c2VySWQgfHwgIVR5cGVzLk9iamVjdElkLmlzVmFsaWQodXNlcklkKSl7XHJcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJJbnZhbGlkIG9yIG1pc3NpbmcgdXNlcklkXCIgfSksIHtcclxuICAgICAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGlmKCFjYXRlZ29yeUlkIHx8ICFUeXBlcy5PYmplY3RJZC5pc1ZhbGlkKGNhdGVnb3J5SWQpKSB7XHJcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJJbnZhbGlkIG9yIG1pc3NpbmcgY2F0ZWdvcnlJZFwiIH0pLCB7XHJcbiAgICAgICAgICBzdGF0dXM6IDQwMFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGNvbm5lY3QoKTtcclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZCh1c2VySWQpO1xyXG4gICAgaWYoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIlVzZXIgbm90IGZvdW5kXCIgfSksIHsgXHJcbiAgICAgICAgc3RhdHVzOiA0MDRcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBDYXRlZ29yeS5maW5kQnlJZChjYXRlZ29yeUlkKTtcclxuICBpZighY2F0ZWdvcnlJZCl7XHJcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIkNhdGVnb3J5IG5vdCBmb3VuZFwiIH0pLCB7XHJcbiAgICAgICAgc3RhdHVzOiA0MDRcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsdGVyOiBhbnkgPXtcclxuICAgIHVzZXI6IG5ldyBUeXBlcy5PYmplY3RJZCh1c2VySWQpLFxyXG4gICAgY2F0ZWdvcnk6IG5ldyBUeXBlcy5PYmplY3RJZChjYXRlZ29yeUlkKSxcclxuICB9O1xyXG5cclxuICBjb25zdCBibG9ncyA9IGF3YWl0IEJsb2cuZmluZChmaWx0ZXIpO1xyXG4gIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgYmxvZ3MgfSksIHtcclxuICAgIHN0YXR1czogMjAwXHJcbiAgfSk7XHJcblxyXG4gIH1jYXRjaChlcnJvcjogYW55KXtcclxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiRXJyb3IgaW4gZmV0Y2hpbmcgYmxvZ3MgXCIgKyBlcnJvci5tZXNzYWdlLCB7XHJcbiAgICAgIHN0YXR1czogNTAwXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUE9TVCA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0KSA9PiB7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgICBjb25zdCB1c2VySWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidXNlcklkXCIpO1xyXG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJjYXRlZ29yeUlkXCIpO1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBib2R5O1xyXG5cclxuICAgIGlmKCF1c2VySWQgfHwgIVR5cGVzLk9iamVjdElkLmlzVmFsaWQodXNlcklkKSl7XHJcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJJbnZhbGlkIG9yIG1pc3NpbmcgdXNlcklkXCIgfSksIHtcclxuICAgICAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGlmKCFjYXRlZ29yeUlkIHx8ICFUeXBlcy5PYmplY3RJZC5pc1ZhbGlkKHVzZXJJZCkpIHtcclxuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIkludmFsaWQgb3IgbWlzc2luZyBjYXRlZ29yeUlkXCIgfSksIHtcclxuICAgICAgICAgIHN0YXR1czogNDAwXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdCgpO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKHVzZXJJZCk7XHJcbiAgICBpZighdXNlcikge1xyXG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiVXNlciBub3QgZm91bmRcIiB9KSwgeyBcclxuICAgICAgICBzdGF0dXM6IDQwNFxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IENhdGVnb3J5LmZpbmRCeUlkKGNhdGVnb3J5SWQpO1xyXG4gIGlmKCFjYXRlZ29yeSl7XHJcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIkNhdGVnb3J5IG5vdCBmb3VuZFwiIH0pLCB7XHJcbiAgICAgICAgc3RhdHVzOiA0MDRcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbmV3QmxvZyA9IG5ldyBCbG9nKHtcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICB1c2VyOiBuZXcgVHlwZXMuT2JqZWN0SWQodXNlcklkKSxcclxuICAgIGNhdGVnb3J5OiBuZXcgVHlwZXMuT2JqZWN0SWQoY2F0ZWdvcnlJZClcclxuICB9KTtcclxuXHJcbiAgYXdhaXQgbmV3QmxvZy5zYXZlKCk7XHJcbiAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIkJsb2cgaXMgY3JlYXRlZFwiLCBibG9nOiBuZXdCbG9nIH0pLCB7XHJcbiAgICBzdGF0dXM6IDIwMFxyXG4gIH0pXHJcbiAgfWNhdGNoKGVycm9yOiBhbnkpIHtcclxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiRXJyb3IgaW4gdGhlIGZldGNoaW5nIGJsb2cgXCIgKyBlcnJvci5tZXNzYWdlLCB7XHJcbiAgICAgIHN0YXR1czogNTAwXHJcbiAgICB9KVxyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJOZXh0UmVzcG9uc2UiLCJUeXBlcyIsIlVzZXIiLCJDYXRlZ29yeSIsIkJsb2ciLCJHRVQiLCJyZXF1ZXN0Iiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwidXNlcklkIiwiZ2V0IiwiY2F0ZWdvcnlJZCIsIk9iamVjdElkIiwiaXNWYWxpZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwic3RhdHVzIiwidXNlciIsImZpbmRCeUlkIiwiY2F0ZWdvcnkiLCJmaWx0ZXIiLCJibG9ncyIsImZpbmQiLCJlcnJvciIsIlBPU1QiLCJib2R5IiwianNvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJuZXdCbG9nIiwic2F2ZSIsImJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/(dashboard)/blogs/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst connect = async ()=>{\n    const connectionState = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState;\n    if (connectionState === 1) {\n        console.log(\"Already connected\");\n        return;\n    }\n    if (connectionState === 2) {\n        console.log(\"Connecting...\");\n        return;\n    }\n    try {\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            dbName: \"REST_APIs_with_Nextjs\",\n            bufferCommands: true\n        });\n        console.log(\"Connected\");\n    } catch (error) {\n        console.log(\"Error: \", error);\n        throw new Error(\"Error: \", error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVztBQUUzQyxNQUFNRyxVQUFVO0lBQ2QsTUFBTUMsa0JBQW1CTCw0REFBbUIsQ0FBQ08sVUFBVTtJQUV2RCxJQUFHRixvQkFBb0IsR0FBRTtRQUN2QkcsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDRjtJQUVBLElBQUdKLG9CQUFvQixHQUFFO1FBQ3ZCRyxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNGO0lBRUEsSUFBRztRQUNEVCx1REFBZ0IsQ0FBQ0MsYUFBYztZQUM3QlMsUUFBUTtZQUNSQyxnQkFBZ0I7UUFDbEI7UUFDQUgsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPRyxPQUFZO1FBQ25CSixRQUFRQyxHQUFHLENBQUMsV0FBV0c7UUFDdkIsTUFBTSxJQUFJQyxNQUFNLFdBQVdEO0lBQzdCO0FBQ0Y7QUFFQSxpRUFBZVIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3QtYXBpLW5leHQuanMvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG5cclxuY29uc3QgY29ubmVjdCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjb25uZWN0aW9uU3RhdGUgPSAgbW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlO1xyXG5cclxuICBpZihjb25uZWN0aW9uU3RhdGUgPT09IDEpe1xyXG4gICAgY29uc29sZS5sb2coXCJBbHJlYWR5IGNvbm5lY3RlZFwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmKGNvbm5lY3Rpb25TdGF0ZSA9PT0gMil7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RpbmcuLi5cIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB0cnl7XHJcbiAgICBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJISwge1xyXG4gICAgICBkYk5hbWU6IFwiUkVTVF9BUElzX3dpdGhfTmV4dGpzXCIsXHJcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvcilcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yOiBcIiwgZXJyb3IpXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJjb25uZWN0IiwiY29ubmVjdGlvblN0YXRlIiwiY29ubmVjdGlvbiIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZGJOYW1lIiwiYnVmZmVyQ29tbWFuZHMiLCJlcnJvciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./lib/models/blog.ts":
/*!****************************!*\
  !*** ./lib/models/blog.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst BlogSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: \"string\",\n        required: true\n    },\n    description: {\n        type: \"string\"\n    },\n    user: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"User\"\n    },\n    category: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"Category\"\n    }\n}, {\n    timestamps: true\n});\nconst Blog = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Blog || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Blog\", BlogSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL2Jsb2cudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLGFBQWEsSUFBSUgsNENBQU1BLENBQzNCO0lBQ0VJLE9BQU87UUFBRUMsTUFBTTtRQUFVQyxVQUFVO0lBQUs7SUFDeENDLGFBQWE7UUFBRUYsTUFBTTtJQUFTO0lBQzlCRyxNQUFNO1FBQUVILE1BQU1MLDRDQUFNQSxDQUFDUyxLQUFLLENBQUNDLFFBQVE7UUFBRUMsS0FBSztJQUFPO0lBQ2pEQyxVQUFVO1FBQUVQLE1BQU1MLDRDQUFNQSxDQUFDUyxLQUFLLENBQUNDLFFBQVE7UUFBRUMsS0FBSztJQUFXO0FBQzNELEdBQ0E7SUFDRUUsWUFBWTtBQUNkO0FBR0YsTUFBTUMsT0FBT1osNENBQU1BLENBQUNZLElBQUksSUFBSWIsK0NBQUtBLENBQUMsUUFBUUU7QUFFMUMsaUVBQWVXLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0LWFwaS1uZXh0LmpzLy4vbGliL21vZGVscy9ibG9nLnRzPzA0YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBCbG9nU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICB0aXRsZTogeyB0eXBlOiBcInN0cmluZ1wiLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgZGVzY3JpcHRpb246IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxyXG4gICAgdXNlcjogeyB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogXCJVc2VyXCIgfSxcclxuICAgIGNhdGVnb3J5OiB7IHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiBcIkNhdGVnb3J5XCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpbWVzdGFtcHM6IHRydWUsXHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgQmxvZyA9IG1vZGVscy5CbG9nIHx8IG1vZGVsKFwiQmxvZ1wiLCBCbG9nU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7Il0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwiQmxvZ1NjaGVtYSIsInRpdGxlIiwidHlwZSIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJ1c2VyIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsImNhdGVnb3J5IiwidGltZXN0YW1wcyIsIkJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/blog.ts\n");

/***/ }),

/***/ "(rsc)/./lib/models/category.ts":
/*!********************************!*\
  !*** ./lib/models/category.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CategorySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: \"string\",\n        required: true\n    },\n    user: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"User\"\n    }\n}, {\n    timestamps: true\n});\nconst Category = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Category || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Category\", CategorySchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL2NhdGVnb3J5LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUVqRCxNQUFNRyxpQkFBaUIsSUFBSUgsNENBQU1BLENBQy9CO0lBQ0VJLE9BQU87UUFBQ0MsTUFBTTtRQUFVQyxVQUFVO0lBQUk7SUFDdENDLE1BQU07UUFBQ0YsTUFBTUwsNENBQU1BLENBQUNRLEtBQUssQ0FBQ0MsUUFBUTtRQUFFQyxLQUFLO0lBQU07QUFDakQsR0FDQTtJQUNFQyxZQUFZO0FBQ2Q7QUFHRixNQUFNQyxXQUFXViw0Q0FBTUEsQ0FBQ1UsUUFBUSxJQUFJWCwrQ0FBS0EsQ0FBQyxZQUFZRTtBQUV0RCxpRUFBZVMsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3QtYXBpLW5leHQuanMvLi9saWIvbW9kZWxzL2NhdGVnb3J5LnRzPzBjMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgQ2F0ZWdvcnlTY2hlbWEgPSBuZXcgU2NoZW1hKFxyXG4gIHtcclxuICAgIHRpdGxlOiB7dHlwZTogJ3N0cmluZycsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIHVzZXI6IHt0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogXCJVc2VyXCJ9XHJcbiAgfSxcclxuICB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG4gIH1cclxuKTtcclxuXHJcbmNvbnN0IENhdGVnb3J5ID0gbW9kZWxzLkNhdGVnb3J5IHx8IG1vZGVsKCdDYXRlZ29yeScsIENhdGVnb3J5U2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5OyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsIkNhdGVnb3J5U2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwicmVxdWlyZWQiLCJ1c2VyIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInRpbWVzdGFtcHMiLCJDYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/category.ts\n");

/***/ }),

/***/ "(rsc)/./lib/models/user.ts":
/*!****************************!*\
  !*** ./lib/models/user.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: \"string\",\n        required: true,\n        unique: true\n    },\n    username: {\n        type: \"string\",\n        required: true,\n        unique: true\n    },\n    password: {\n        type: \"string\",\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL3VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLGFBQWEsSUFBSUgsNENBQU1BLENBQzNCO0lBQ0VJLE9BQU87UUFBQ0MsTUFBTTtRQUFVQyxVQUFVO1FBQU1DLFFBQVE7SUFBSTtJQUNwREMsVUFBVTtRQUFDSCxNQUFNO1FBQVVDLFVBQVU7UUFBTUMsUUFBUTtJQUFJO0lBQ3ZERSxVQUFVO1FBQUNKLE1BQU07UUFBVUMsVUFBVTtJQUFJO0FBQzNDLEdBQ0E7SUFDRUksWUFBWTtBQUNkO0FBR0YsTUFBTUMsT0FBT1QsNENBQU1BLENBQUNTLElBQUksSUFBSVYsK0NBQUtBLENBQUMsUUFBUUU7QUFHMUMsaUVBQWVRLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0LWFwaS1uZXh0LmpzLy4vbGliL21vZGVscy91c2VyLnRzPzM5MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICBlbWFpbDoge3R5cGU6IFwic3RyaW5nXCIsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWV9LFxyXG4gICAgdXNlcm5hbWU6IHt0eXBlOiBcInN0cmluZ1wiLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlfSxcclxuICAgIHBhc3N3b3JkOiB7dHlwZTogXCJzdHJpbmdcIiwgcmVxdWlyZWQ6IHRydWV9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbilcclxuXHJcbmNvbnN0IFVzZXIgPSBtb2RlbHMuVXNlciB8fCBtb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjsiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJVc2VyU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidGltZXN0YW1wcyIsIlVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/user.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2F(dashboard)%2Fblogs%2Froute&page=%2Fapi%2F(dashboard)%2Fblogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2F(dashboard)%2Fblogs%2Froute.ts&appDir=E%3A%5Crest-api-next.js%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Crest-api-next.js&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();