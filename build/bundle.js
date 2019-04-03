/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/helpers/renderer.js":
/*!************************************!*\
  !*** ./server/helpers/renderer.js ***!
  \************************************/
/*! exports provided: renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderer\", function() { return renderer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/Routes */ \"./src/Routes.js\");\n\n\n\n\n\nvar renderer = function renderer(req) {\n  var context = {};\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n  return \"\\n        <html>\\n            <head>\\n            </head>\\n            <body>\\n                <div id='root'>\".concat(content, \"</div>\\n                <script src=\\\"bundle.js\\\"></script>\\n            </body>\\n        </html>\\n    \");\n};\n\n\n\n//# sourceURL=webpack:///./server/helpers/renderer.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ \"./server/server.js\");\n\nObject(_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/resources/product/product.router.js":
/*!****************************************************!*\
  !*** ./server/resources/product/product.router.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Router = __webpack_require__(/*! express */ \"express\").Router;\n\nvar products = __webpack_require__(/*! ./products.json */ \"./server/resources/product/products.json\");\n\nvar router = Router();\nrouter.route(\"/\").get(function (req, res) {\n  console.log(\"controller reached.\");\n  res.status(200).send({\n    data: products.groups\n  });\n}).post(function (req, res) {\n  res.status(200).send({\n    hello: \"data\"\n  });\n});\nrouter.route(\"/:id\").get(function (req, res) {\n  var product = products.groups.filter(function (product) {\n    return product.id === req.params.id;\n  });\n  res.status(200).send(product);\n}).put()[\"delete\"]();\nmodule.exports = router;\n\n//# sourceURL=webpack:///./server/resources/product/product.router.js?");

/***/ }),

/***/ "./server/resources/product/products.json":
/*!************************************************!*\
  !*** ./server/resources/product/products.json ***!
  \************************************************/
/*! exports provided: id, name, categoryType, groups, totalPages, categories, default */
/***/ (function(module) {

eval("module.exports = {\"id\":\"shop/new/all-new\",\"name\":\"All New\",\"categoryType\":\"subcat\",\"groups\":[{\"id\":\"wavy-jacquard-duvet-cover-shams-b2694\",\"name\":\"Wavy Jacquard Duvet Cover + Shams\",\"links\":{\"www\":\"https://www.westelm.com/products/wavy-jacquard-duvet-cover-shams-b2694/\"},\"priceRange\":{\"regular\":{\"high\":199,\"low\":34},\"selling\":{\"high\":159,\"low\":27},\"type\":\"special\"},\"thumbnail\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"thumbnail\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201912/0009/wavy-jacquard-duvet-cover-shams-m.jpg\",\"height\":363},\"hero\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"hero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201912/0009/wavy-jacquard-duvet-cover-shams-m.jpg\",\"height\":363},\"images\":[{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201912/0009/wavy-jacquard-duvet-cover-shams-1-m.jpg\",\"height\":363},{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/wavy-jacquard-duvet-cover-shams-m.jpg\",\"height\":363}],\"swatches\":[],\"messages\":[],\"flags\":[{\"bopisSuppress\":false,\"rank\":3,\"id\":\"newcore\"}],\"reviews\":{\"recommendationCount\":0,\"likelihood\":0,\"reviewCount\":0,\"averageRating\":0,\"id\":\"wavy-jacquard-duvet-cover-shams-b2694\",\"type\":\"GROUP_REVIEWS\"}},{\"id\":\"broken-lines-linen-cotton-duvet-cover-shams-b2689\",\"name\":\"Broken Lines Belgian Flax Linen Cotton Duvet Cover + Shams\",\"links\":{\"www\":\"https://www.westelm.com/products/broken-lines-linen-cotton-duvet-cover-shams-b2689/\"},\"priceRange\":{\"regular\":{\"high\":199,\"low\":44},\"selling\":{\"high\":159,\"low\":35},\"type\":\"special\"},\"thumbnail\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"thumbnail\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/broken-lines-linen-cotton-duvet-cover-shams-m.jpg\",\"height\":363},\"hero\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"hero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/broken-lines-linen-cotton-duvet-cover-shams-m.jpg\",\"height\":363},\"images\":[{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/broken-lines-linen-cotton-duvet-cover-shams-1-m.jpg\",\"height\":363},{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0052/broken-lines-linen-cotton-duvet-cover-shams-m.jpg\",\"height\":363},{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/broken-lines-linen-cotton-duvet-cover-shams-m.jpg\",\"height\":363}],\"swatches\":[],\"messages\":[],\"flags\":[{\"bopisSuppress\":false,\"rank\":3,\"id\":\"newcore\"}],\"reviews\":{\"recommendationCount\":0,\"likelihood\":0,\"reviewCount\":0,\"averageRating\":0,\"id\":\"broken-lines-linen-cotton-duvet-cover-shams-b2689\",\"type\":\"GROUP_REVIEWS\"}},{\"id\":\"organic-crinkle-duvet-cover-shams-white-b2691\",\"name\":\"Organic Crinkle Duvet Cover + Shams - White\",\"links\":{\"www\":\"https://www.westelm.com/products/organic-crinkle-duvet-cover-shams-white-b2691/\"},\"priceRange\":{\"selling\":{\"high\":159,\"low\":29}},\"thumbnail\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"thumbnail\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0032/organic-crinkle-duvet-cover-shams-white-m.jpg\",\"height\":363},\"hero\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"hero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0032/organic-crinkle-duvet-cover-shams-white-m.jpg\",\"height\":363},\"images\":[{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0028/organic-crinkle-duvet-cover-shams-white-m.jpg\",\"height\":363}],\"swatches\":[],\"messages\":[],\"flags\":[{\"bopisSuppress\":false,\"rank\":3,\"id\":\"newcore\"},{\"bopisSuppress\":false,\"rank\":7,\"id\":\"organic\"}],\"reviews\":{\"recommendationCount\":0,\"likelihood\":0,\"reviewCount\":0,\"averageRating\":0,\"id\":\"organic-crinkle-duvet-cover-shams-white-b2691\",\"type\":\"GROUP_REVIEWS\"}},{\"id\":\"organic-crinkle-duvet-cover-shams-blue-bird-b2692\",\"name\":\"Organic Crinkle Duvet Cover + Shams - Blue Bird\",\"links\":{\"www\":\"https://www.westelm.com/products/organic-crinkle-duvet-cover-shams-blue-bird-b2692/\"},\"priceRange\":{\"selling\":{\"high\":159,\"low\":29}},\"thumbnail\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"thumbnail\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0011/organic-crinkle-duvet-cover-shams-blue-bird-1-m.jpg\",\"height\":363},\"hero\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"hero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0011/organic-crinkle-duvet-cover-shams-blue-bird-1-m.jpg\",\"height\":363},\"images\":[{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0011/organic-crinkle-duvet-cover-shams-blue-bird-m.jpg\",\"height\":363},{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0015/organic-crinkle-duvet-cover-shams-m.jpg\",\"height\":363},{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/organic-crinkle-duvet-cover-shams-m.jpg\",\"height\":363}],\"swatches\":[],\"messages\":[],\"flags\":[{\"bopisSuppress\":false,\"rank\":3,\"id\":\"newcore\"},{\"bopisSuppress\":false,\"rank\":7,\"id\":\"organic\"}],\"reviews\":{\"recommendationCount\":0,\"likelihood\":0,\"reviewCount\":0,\"averageRating\":0,\"id\":\"organic-crinkle-duvet-cover-shams-blue-bird-b2692\",\"type\":\"GROUP_REVIEWS\"}},{\"id\":\"roar-rabbit-overlapping-tiles-duvet-cover-shams-b2686\",\"name\":\"Roar + Rabbit&#8482; Overlapping Tiles Duvet Cover + Shams\",\"links\":{\"www\":\"https://www.westelm.com/products/roar-rabbit-overlapping-tiles-duvet-cover-shams-b2686/\"},\"priceRange\":{\"regular\":{\"high\":229,\"low\":39},\"selling\":{\"high\":183,\"low\":31},\"type\":\"special\"},\"thumbnail\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"thumbnail\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0008/roar-rabbit-overlapping-tiles-duvet-cover-shams-1-m.jpg\",\"height\":363},\"hero\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"hero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0008/roar-rabbit-overlapping-tiles-duvet-cover-shams-1-m.jpg\",\"height\":363},\"images\":[{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0008/roar-rabbit-overlapping-tiles-duvet-cover-shams-m.jpg\",\"height\":363},{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0052/roar-rabbit-overlapping-tiles-duvet-cover-shams-m.jpg\",\"height\":363},{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0052/roar-rabbit-overlapping-tiles-duvet-cover-shams-1-m.jpg\",\"height\":363},{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/roar-rabbit-overlapping-tiles-duvet-cover-shams-m.jpg\",\"height\":363}],\"swatches\":[],\"messages\":[],\"flags\":[{\"bopisSuppress\":false,\"rank\":3,\"id\":\"newcore\"}],\"reviews\":{\"recommendationCount\":0,\"likelihood\":0,\"reviewCount\":0,\"averageRating\":0,\"id\":\"roar-rabbit-overlapping-tiles-duvet-cover-shams-b2686\",\"type\":\"GROUP_REVIEWS\"}},{\"id\":\"wide-channel-seersucker-duvet-cover-shams-b2693\",\"name\":\"Wide Channel Seersucker Duvet Cover + Shams\",\"links\":{\"www\":\"https://www.westelm.com/products/wide-channel-seersucker-duvet-cover-shams-b2693/\"},\"priceRange\":{\"regular\":{\"high\":159,\"low\":29},\"selling\":{\"high\":127,\"low\":23},\"type\":\"special\"},\"thumbnail\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"thumbnail\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0011/wide-channel-seersucker-duvet-cover-shams-1-m.jpg\",\"height\":363},\"hero\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"hero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0011/wide-channel-seersucker-duvet-cover-shams-1-m.jpg\",\"height\":363},\"images\":[{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0034/wide-channel-seersucker-duvet-cover-shams-m.jpg\",\"height\":363},{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0052/wide-channel-seersucker-duvet-cover-shams-m.jpg\",\"height\":363}],\"swatches\":[],\"messages\":[],\"flags\":[{\"bopisSuppress\":false,\"rank\":3,\"id\":\"newcore\"},{\"bopisSuppress\":false,\"rank\":9,\"id\":\"fairTrade\"}],\"reviews\":{\"recommendationCount\":0,\"likelihood\":0,\"reviewCount\":0,\"averageRating\":0,\"id\":\"wide-channel-seersucker-duvet-cover-shams-b2693\",\"type\":\"GROUP_REVIEWS\"}},{\"id\":\"plaid-seersucker-duvet-cover-shams-b2688\",\"name\":\"Plaid Seersucker Duvet Cover + Shams\",\"links\":{\"www\":\"https://www.westelm.com/products/plaid-seersucker-duvet-cover-shams-b2688/\"},\"priceRange\":{\"regular\":{\"high\":159,\"low\":29},\"selling\":{\"high\":127,\"low\":23},\"type\":\"special\"},\"thumbnail\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"thumbnail\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/plaid-seersucker-duvet-cover-shams-m.jpg\",\"height\":363},\"hero\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"hero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/plaid-seersucker-duvet-cover-shams-m.jpg\",\"height\":363},\"images\":[{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0034/plaid-seersucker-duvet-cover-shams-m.jpg\",\"height\":363},{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/plaid-seersucker-duvet-cover-shams-m.jpg\",\"height\":363}],\"swatches\":[],\"messages\":[],\"flags\":[{\"bopisSuppress\":false,\"rank\":3,\"id\":\"newcore\"},{\"bopisSuppress\":false,\"rank\":9,\"id\":\"fairTrade\"}],\"reviews\":{\"recommendationCount\":0,\"likelihood\":0,\"reviewCount\":0,\"averageRating\":0,\"id\":\"plaid-seersucker-duvet-cover-shams-b2688\",\"type\":\"GROUP_REVIEWS\"}},{\"id\":\"organic-voile-duvet-cover-shams-b2706\",\"name\":\"Organic Voile Duvet Cover + Shams\",\"links\":{\"www\":\"https://www.westelm.com/products/organic-voile-duvet-cover-shams-b2706/\"},\"priceRange\":{\"regular\":{\"high\":159,\"low\":29},\"selling\":{\"high\":127,\"low\":23},\"type\":\"special\"},\"thumbnail\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"thumbnail\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/organic-voile-duvet-cover-shams-1-m.jpg\",\"height\":363},\"hero\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"hero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/organic-voile-duvet-cover-shams-1-m.jpg\",\"height\":363},\"images\":[{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/organic-voile-duvet-cover-shams-m.jpg\",\"height\":363}],\"swatches\":[],\"messages\":[],\"flags\":[{\"bopisSuppress\":false,\"rank\":3,\"id\":\"newcore\"},{\"bopisSuppress\":false,\"rank\":7,\"id\":\"organic\"}],\"reviews\":{\"recommendationCount\":0,\"likelihood\":0,\"reviewCount\":0,\"averageRating\":0,\"id\":\"organic-voile-duvet-cover-shams-b2706\",\"type\":\"GROUP_REVIEWS\"}},{\"id\":\"tencel-terrazzo-duvet-cover-shams-b2687\",\"name\":\"TENCEL&#8482; Terrazzo Duvet Cover + Shams\",\"links\":{\"www\":\"https://www.westelm.com/products/tencel-terrazzo-duvet-cover-shams-b2687/\"},\"priceRange\":{\"regular\":{\"high\":159,\"low\":34},\"selling\":{\"high\":127,\"low\":27},\"type\":\"special\"},\"thumbnail\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"thumbnail\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/tencel-terrazzo-duvet-cover-shams-1-m.jpg\",\"height\":363},\"hero\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"hero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/tencel-terrazzo-duvet-cover-shams-1-m.jpg\",\"height\":363},\"images\":[{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/tencel-terrazzo-duvet-cover-shams-m.jpg\",\"height\":363},{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/tencel-terrazzo-duvet-cover-shams-m.jpg\",\"height\":363}],\"swatches\":[],\"messages\":[],\"flags\":[{\"bopisSuppress\":false,\"rank\":3,\"id\":\"newcore\"},{\"bopisSuppress\":false,\"rank\":8,\"id\":\"handmade\"},{\"bopisSuppress\":false,\"rank\":9,\"id\":\"fairTrade\"}],\"reviews\":{\"recommendationCount\":0,\"likelihood\":0,\"reviewCount\":0,\"averageRating\":0,\"id\":\"tencel-terrazzo-duvet-cover-shams-b2687\",\"type\":\"GROUP_REVIEWS\"}},{\"id\":\"organic-sateen-asha-duvet-cover-shams-b2710\",\"name\":\"Organic Sateen Asha Duvet Cover + Shams\",\"links\":{\"www\":\"https://www.westelm.com/products/organic-sateen-asha-duvet-cover-shams-b2710/\"},\"priceRange\":{\"regular\":{\"high\":159,\"low\":34},\"selling\":{\"high\":127,\"low\":27},\"type\":\"special\"},\"thumbnail\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"thumbnail\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/organic-sateen-asha-duvet-cover-shams-1-m.jpg\",\"height\":363},\"hero\":{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"hero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/organic-sateen-asha-duvet-cover-shams-1-m.jpg\",\"height\":363},\"images\":[{\"size\":\"m\",\"meta\":\"\",\"alt\":\"\",\"rel\":\"althero\",\"width\":363,\"href\":\"https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/organic-sateen-asha-duvet-cover-shams-m.jpg\",\"height\":363}],\"swatches\":[],\"messages\":[],\"flags\":[{\"bopisSuppress\":false,\"rank\":3,\"id\":\"newcore\"},{\"bopisSuppress\":false,\"rank\":7,\"id\":\"organic\"},{\"bopisSuppress\":false,\"rank\":9,\"id\":\"fairTrade\"}],\"reviews\":{\"recommendationCount\":0,\"likelihood\":0,\"reviewCount\":0,\"averageRating\":0,\"id\":\"organic-sateen-asha-duvet-cover-shams-b2710\",\"type\":\"GROUP_REVIEWS\"}}],\"totalPages\":48,\"categories\":[]};\n\n//# sourceURL=webpack:///./server/resources/product/products.json?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _resources_product_product_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/product/product.router */ \"./server/resources/product/product.router.js\");\n/* harmony import */ var _resources_product_product_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_product_product_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/renderer */ \"./server/helpers/renderer.js\");\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.disable(\"x-powered-by\");\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(Object(body_parser__WEBPACK_IMPORTED_MODULE_2__[\"json\"])());\napp.use(Object(body_parser__WEBPACK_IMPORTED_MODULE_2__[\"urlencoded\"])({\n  extended: true\n}));\napp.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()(\"dev\"));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](\"public\"));\napp.use(\"/api/products\", _resources_product_product_router__WEBPACK_IMPORTED_MODULE_4___default.a); // Server side rendering.\n\napp.get(\"*\", function (req, res) {\n  res.send(Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_5__[\"renderer\"])(req));\n});\n\nvar start = function start() {\n  try {\n    app.listen(8000, function () {\n      console.log(\"Server running on port 8000\");\n    });\n  } catch (e) {\n    console.log(\"Server could not be started.\");\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (start);\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Home */ \"./src/components/Home.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Layout */ \"./src/components/Layout.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/\",\n    component: _components_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  })));\n});\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Home = function Home() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Im the Best home component.\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/components/Home.js?");

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Layout = function Layout(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, \"Header\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", null, \"Footer\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n//# sourceURL=webpack:///./src/components/Layout.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });