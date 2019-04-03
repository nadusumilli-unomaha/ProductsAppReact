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

/***/ "./server/helpers/createStore.js":
/*!***************************************!*\
  !*** ./server/helpers/createStore.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/store */ \"./src/store/index.js\");\n\n\n\n/** Function: configureStore\n *  Arguments: None\n *  Defenition:\n *      configures the redux store with the enhacers\n *      ,reducers and middlewares\n *  Returns: None\n **/\n\nvar configureStore = function configureStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_src_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_0___default.a)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configureStore);\n\n//# sourceURL=webpack:///./server/helpers/createStore.js?");

/***/ }),

/***/ "./server/helpers/renderer.js":
/*!************************************!*\
  !*** ./server/helpers/renderer.js ***!
  \************************************/
/*! exports provided: renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderer\", function() { return renderer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/Routes */ \"./src/Routes.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar renderer = function renderer(req, store) {\n  var context = {};\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))));\n  return \"\\n        <html>\\n            <head>\\n            </head>\\n            <body>\\n                <div id='root'>\".concat(content, \"</div>\\n                <script src=\\\"bundle.js\\\"></script>\\n            </body>\\n        </html>\\n    \");\n};\n\n\n\n//# sourceURL=webpack:///./server/helpers/renderer.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _resources_product_product_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/product/product.router */ \"./server/resources/product/product.router.js\");\n/* harmony import */ var _resources_product_product_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_resources_product_product_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/renderer */ \"./server/helpers/renderer.js\");\n/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/createStore */ \"./server/helpers/createStore.js\");\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.disable(\"x-powered-by\");\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(Object(body_parser__WEBPACK_IMPORTED_MODULE_3__[\"json\"])());\napp.use(Object(body_parser__WEBPACK_IMPORTED_MODULE_3__[\"urlencoded\"])({\n  extended: true\n}));\napp.use(morgan__WEBPACK_IMPORTED_MODULE_4___default()(\"dev\"));\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"](\"public\"));\napp.use(\"/api/products\", _resources_product_product_router__WEBPACK_IMPORTED_MODULE_5___default.a); // Server side rendering.\n\napp.get(\"*\", function (req, res) {\n  var store = Object(_helpers_createStore__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  res.send(Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_6__[\"renderer\"])(req, store));\n});\n\nvar start = function start() {\n  try {\n    app.listen(8000, function () {\n      console.log(\"Server running on port 8000\");\n    });\n  } catch (e) {\n    console.log(\"Server could not be started.\");\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (start);\n\n//# sourceURL=webpack:///./server/server.js?");

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

/***/ "./src/actions/products.js":
/*!*********************************!*\
  !*** ./src/actions/products.js ***!
  \*********************************/
/*! exports provided: REQUEST_ERROR, REQUEST_SUCCESS, REQUEST_LOADING, updateProduct, createProduct, getProducts, deleteProduct, getOneProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_ERROR\", function() { return REQUEST_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_SUCCESS\", function() { return REQUEST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_LOADING\", function() { return REQUEST_LOADING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProduct\", function() { return updateProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProduct\", function() { return createProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProducts\", function() { return getProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProduct\", function() { return deleteProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOneProduct\", function() { return getOneProduct; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n // Action types for the redux store management.\n\nvar REQUEST_SUCCESS = \"REQUEST_SUCCESS\";\nvar REQUEST_ERROR = \"REQUEST_ERROR\";\nvar REQUEST_LOADING = \"REQUEST_LOADING\"; // Endpoints related to the Products management.\n\nvar product_endpoint = \"http://localhost:8000/api/products/\"; // Request methods to create server requests.\n\nvar HTTP_POST = \"post\";\nvar HTTP_GET = \"get\";\nvar HTTP_DELETE = \"delete\";\nvar HTTP_PUT = \"put\";\n/** Function: productRequests\n *  Arguments:\n *      - request_data: the data to be sent with the request.\n *      - request_url: The url to send the request to.\n *      - request_method: The method to use to send the request.\n *  Defenition:\n *      Sends a request to the backend to perform actions on\n *      products data.\n *  Returns: None\n **/\n\nvar productRequests = function productRequests(request_data, request_url, request_method) {\n  return function (dispatch) {\n    var settings = {}; // Settings the axios request settings.\n\n    settings.data = request_data;\n    settings.url = request_url;\n    settings.method = request_method; // Request to the backend.\n\n    axios__WEBPACK_IMPORTED_MODULE_0___default()(settings).then(function (res) {\n      return dispatch({\n        type: REQUEST_SUCCESS,\n        payload: res.data\n      });\n    }, function (err) {\n      return dispatch({\n        type: REQUEST_ERROR,\n        payload: err.response.data\n      });\n    });\n  };\n};\n/** Specialized Function: deleteProduct\n *  Arguments:\n *      - request_data: The data to delete a product.\n *  Defenition:\n *      Calls the productRequests function above with the delete\n *      method and the session url preset.\n *  Returns: None\n **/\n\n\nvar deleteProduct = function deleteProduct(request_data) {\n  return function (dispatch) {\n    return dispatch(productRequests(request_data, \"\".concat(product_endpoint).concat(request_data.id, \"/\"), HTTP_DELETE));\n  };\n};\n/** Specialized Function: getProducts\n *  Arguments:\n *      - request_data: The data required to fetch all products.\n *  Defenition:\n *      Calls the productRequests function above with the get method\n *      and the session url preset.\n *  Returns: None\n **/\n\n\nvar getProducts = function getProducts(request_data) {\n  return function (dispatch) {\n    return dispatch(productRequests(request_data, product_endpoint, HTTP_GET));\n  };\n};\n/** Specialized Function: getProducts\n *  Arguments:\n *      - request_data: The data required to fetch all products.\n *  Defenition:\n *      Calls the productRequests function above with the get method\n *      and the session url preset.\n *  Returns: None\n **/\n\n\nvar getOneProduct = function getOneProduct(request_data) {\n  return function (dispatch) {\n    return dispatch(productRequests(request_data, \"\".concat(product_endpoint).concat(request_data.id, \"/\"), HTTP_GET));\n  };\n};\n/** Specialized Function: createProduct\n *  Arguments:\n *      - request_data: The data to create a product.\n *  Defenition:\n *      Calls the productRequests function above with the post method\n *      and the register url preset.\n *  Returns: None\n **/\n\n\nvar createProduct = function createProduct(request_data) {\n  return function (dispatch) {\n    return dispatch(productRequests(request_data, product_endpoint, HTTP_POST));\n  };\n};\n/** Specialized Function: updateProduct\n *  Arguments:\n *      - request_data: The data to update a product.\n *  Defenition:\n *      Calls the productRequests function above with the put method\n *      and the profile url preset to update the profile.\n *  Returns: None\n **/\n\n\nvar updateProduct = function updateProduct(request_data) {\n  return function (dispatch) {\n    return dispatch(productRequests(request_data, \"\".concat(product_endpoint).concat(request_data.id, \"/\"), HTTP_PUT));\n  };\n}; // Exporting the specialized functions and some action types.\n\n\n\n\n//# sourceURL=webpack:///./src/actions/products.js?");

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _containers_ProductList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/ProductList */ \"./src/containers/ProductList.js\");\n\n\n\nvar Home = function Home() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_ProductList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/components/Home.js?");

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

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Product =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Product, _Component);\n\n  function Product() {\n    _classCallCheck(this, Product);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Product).apply(this, arguments));\n  }\n\n  _createClass(Product, [{\n    key: \"render\",\n    value: function render() {\n      var product = this.props.product;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: product.hero.href,\n        height: product.hero.height,\n        width: product.hero.width,\n        alt: product.name\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, product.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, product.price));\n    }\n  }]);\n\n  return Product;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nProduct.propTypes = {\n  product: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\n//# sourceURL=webpack:///./src/components/Product.js?");

/***/ }),

/***/ "./src/components/ProductList.js":
/*!***************************************!*\
  !*** ./src/components/ProductList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Loading */ \"./src/pages/Loading.js\");\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product */ \"./src/components/Product.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar ProductList =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ProductList, _Component);\n\n  function ProductList(props) {\n    var _this;\n\n    _classCallCheck(this, ProductList);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductList).call(this, props));\n    _this.state = {\n      products: [],\n      loading: true\n    };\n    return _this;\n  }\n\n  _createClass(ProductList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var getProducts = this.props.getProducts;\n      getProducts();\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if (prevProps.products.data !== this.props.products.data) {\n        this.setState(function (prevState, props) {\n          return {\n            products: props.products.data,\n            loading: !prevState.loading\n          };\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          loading = _this$state.loading,\n          products = _this$state.products;\n      if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, products.map(function (product) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Product__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          key: product.id,\n          product: product\n        });\n      }));\n    }\n  }]);\n\n  return ProductList;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nProductList.propTypes = {\n  getProducts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  getOneProduct: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  products: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\n\n//# sourceURL=webpack:///./src/components/ProductList.js?");

/***/ }),

/***/ "./src/containers/ProductList.js":
/*!***************************************!*\
  !*** ./src/containers/ProductList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/products */ \"./src/actions/products.js\");\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductList */ \"./src/components/ProductList.js\");\n\n\n\n\nvar MapStateToProps = function MapStateToProps(_ref) {\n  var products = _ref.products;\n  return {\n    products: products\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(MapStateToProps, {\n  getProducts: _actions_products__WEBPACK_IMPORTED_MODULE_1__[\"getProducts\"],\n  getOneProduct: _actions_products__WEBPACK_IMPORTED_MODULE_1__[\"getOneProduct\"]\n})(_components_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n\n//# sourceURL=webpack:///./src/containers/ProductList.js?");

/***/ }),

/***/ "./src/pages/Loading.css":
/*!*******************************!*\
  !*** ./src/pages/Loading.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/Loading.css?");

/***/ }),

/***/ "./src/pages/Loading.js":
/*!******************************!*\
  !*** ./src/pages/Loading.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading.css */ \"./src/pages/Loading.css\");\n/* harmony import */ var _Loading_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Loading_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/** Function: Loading\n *  Arguments: None\n *  Defenition:\n *      retunrs the jsx for the loading icon.\n *  Returns: None\n **/\n\nvar Loading = function Loading(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sk-fading-circle\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sk-circle1 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sk-circle2 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sk-circle3 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sk-circle4 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sk-circle5 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sk-circle6 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sk-circle7 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sk-circle8 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sk-circle9 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sk-circle10 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sk-circle11 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sk-circle12 sk-circle\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);\n\n//# sourceURL=webpack:///./src/pages/Loading.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ \"./src/store/products.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  products: _products__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/products.js":
/*!*******************************!*\
  !*** ./src/store/products.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/products */ \"./src/actions/products.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // Provides the initial state for the user model\n// This is paseed to components as initial state.\n\nvar initial_state = {\n  data: [],\n  errors: []\n};\n/** Function: user\n *  Arguments:\n *      - state: The state of the user model.\n *      - action: The type and payload from the user actions.\n *  Defenition:\n *      This function checks the type of action and based on\n *      the type it performs changes to the user models state.\n *  Returns:\n *      - state: the state of the user model.\n **/\n\nvar products = function products() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial_state;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_products__WEBPACK_IMPORTED_MODULE_0__[\"REQUEST_SUCCESS\"]:\n      return _objectSpread({}, state, {\n        data: action.payload.data,\n        errors: []\n      });\n\n    case _actions_products__WEBPACK_IMPORTED_MODULE_0__[\"REQUEST_ERROR\"]:\n      return _objectSpread({}, state, {\n        data: [],\n        errors: [action.payload]\n      });\n\n    case _actions_products__WEBPACK_IMPORTED_MODULE_0__[\"REQUEST_LOADING\"]:\n      return _objectSpread({}, state);\n\n    default:\n      return _objectSpread({}, state);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (products);\n\n//# sourceURL=webpack:///./src/store/products.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });