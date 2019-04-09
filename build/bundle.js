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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/store */ \"./src/store/index.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/** Function: configureStore\n *  Arguments: None\n *  Defenition:\n *      configures the redux store with the enhacers\n *      ,reducers and middlewares\n *  Returns: None\n **/\n\nvar configureStore = function configureStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_src_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configureStore);\n\n//# sourceURL=webpack:///./server/helpers/createStore.js?");

/***/ }),

/***/ "./server/helpers/renderer.js":
/*!************************************!*\
  !*** ./server/helpers/renderer.js ***!
  \************************************/
/*! exports provided: renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderer\", function() { return renderer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/Routes */ \"./src/Routes.js\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nvar renderer = function renderer(req, store) {\n  var context = {};\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(_src_Routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])))));\n  var data = fs__WEBPACK_IMPORTED_MODULE_7___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_8___default.a.resolve('./src/index.html')).toString();\n  return data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(content, \"</div>\\n        <script>window.INITIAL_STATE = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()(store.getState()), \"</script>\\n        \"));\n};\n\n\n\n//# sourceURL=webpack:///./server/helpers/renderer.js?");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ \"./server/resources/product/products.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/').get(function (req, res) {\n  res.status(200).send(_products__WEBPACK_IMPORTED_MODULE_1__[\"products\"].groups);\n}).post(function (req, res) {\n  res.status(200).send({\n    hello: 'data'\n  });\n});\nrouter.route('/:id').get(function (req, res) {\n  var product = _products__WEBPACK_IMPORTED_MODULE_1__[\"products\"].groups.filter(function (product) {\n    return product.id === req.params.id;\n  });\n  res.status(200).send(product);\n}).put()[\"delete\"]();\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/resources/product/product.router.js?");

/***/ }),

/***/ "./server/resources/product/products.js":
/*!**********************************************!*\
  !*** ./server/resources/product/products.js ***!
  \**********************************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"products\", function() { return products; });\nvar products = {\n  id: 'shop/new/all-new',\n  name: 'All New',\n  categoryType: 'subcat',\n  groups: [{\n    id: 'wavy-jacquard-duvet-cover-shams-b2694',\n    name: 'Wavy Jacquard Duvet Cover + Shams',\n    links: {\n      www: 'https://www.westelm.com/products/wavy-jacquard-duvet-cover-shams-b2694/'\n    },\n    priceRange: {\n      regular: {\n        high: 199,\n        low: 34\n      },\n      selling: {\n        high: 159,\n        low: 27\n      },\n      type: 'special'\n    },\n    thumbnail: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'thumbnail',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201912/0009/wavy-jacquard-duvet-cover-shams-m.jpg',\n      height: 363\n    },\n    hero: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'hero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201912/0009/wavy-jacquard-duvet-cover-shams-m.jpg',\n      height: 363\n    },\n    images: [{\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201912/0009/wavy-jacquard-duvet-cover-shams-1-m.jpg',\n      height: 363\n    }, {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/wavy-jacquard-duvet-cover-shams-m.jpg',\n      height: 363\n    }],\n    swatches: [],\n    messages: [],\n    flags: [{\n      bopisSuppress: false,\n      rank: 3,\n      id: 'newcore'\n    }],\n    reviews: {\n      recommendationCount: 0,\n      likelihood: 0,\n      reviewCount: 0,\n      averageRating: 0,\n      id: 'wavy-jacquard-duvet-cover-shams-b2694',\n      type: 'GROUP_REVIEWS'\n    }\n  }, {\n    id: 'broken-lines-linen-cotton-duvet-cover-shams-b2689',\n    name: 'Broken Lines Belgian Flax Linen Cotton Duvet Cover + Shams',\n    links: {\n      www: 'https://www.westelm.com/products/broken-lines-linen-cotton-duvet-cover-shams-b2689/'\n    },\n    priceRange: {\n      regular: {\n        high: 199,\n        low: 44\n      },\n      selling: {\n        high: 159,\n        low: 35\n      },\n      type: 'special'\n    },\n    thumbnail: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'thumbnail',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/broken-lines-linen-cotton-duvet-cover-shams-m.jpg',\n      height: 363\n    },\n    hero: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'hero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/broken-lines-linen-cotton-duvet-cover-shams-m.jpg',\n      height: 363\n    },\n    images: [{\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/broken-lines-linen-cotton-duvet-cover-shams-1-m.jpg',\n      height: 363\n    }, {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0052/broken-lines-linen-cotton-duvet-cover-shams-m.jpg',\n      height: 363\n    }, {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/broken-lines-linen-cotton-duvet-cover-shams-m.jpg',\n      height: 363\n    }],\n    swatches: [],\n    messages: [],\n    flags: [{\n      bopisSuppress: false,\n      rank: 3,\n      id: 'newcore'\n    }],\n    reviews: {\n      recommendationCount: 0,\n      likelihood: 0,\n      reviewCount: 0,\n      averageRating: 0,\n      id: 'broken-lines-linen-cotton-duvet-cover-shams-b2689',\n      type: 'GROUP_REVIEWS'\n    }\n  }, {\n    id: 'organic-crinkle-duvet-cover-shams-white-b2691',\n    name: 'Organic Crinkle Duvet Cover + Shams - White',\n    links: {\n      www: 'https://www.westelm.com/products/organic-crinkle-duvet-cover-shams-white-b2691/'\n    },\n    priceRange: {\n      selling: {\n        high: 159,\n        low: 29\n      }\n    },\n    thumbnail: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'thumbnail',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0032/organic-crinkle-duvet-cover-shams-white-m.jpg',\n      height: 363\n    },\n    hero: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'hero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0032/organic-crinkle-duvet-cover-shams-white-m.jpg',\n      height: 363\n    },\n    images: [{\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0028/organic-crinkle-duvet-cover-shams-white-m.jpg',\n      height: 363\n    }],\n    swatches: [],\n    messages: [],\n    flags: [{\n      bopisSuppress: false,\n      rank: 3,\n      id: 'newcore'\n    }, {\n      bopisSuppress: false,\n      rank: 7,\n      id: 'organic'\n    }],\n    reviews: {\n      recommendationCount: 0,\n      likelihood: 0,\n      reviewCount: 0,\n      averageRating: 0,\n      id: 'organic-crinkle-duvet-cover-shams-white-b2691',\n      type: 'GROUP_REVIEWS'\n    }\n  }, {\n    id: 'organic-crinkle-duvet-cover-shams-blue-bird-b2692',\n    name: 'Organic Crinkle Duvet Cover + Shams - Blue Bird',\n    links: {\n      www: 'https://www.westelm.com/products/organic-crinkle-duvet-cover-shams-blue-bird-b2692/'\n    },\n    priceRange: {\n      selling: {\n        high: 159,\n        low: 29\n      }\n    },\n    thumbnail: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'thumbnail',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0011/organic-crinkle-duvet-cover-shams-blue-bird-1-m.jpg',\n      height: 363\n    },\n    hero: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'hero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0011/organic-crinkle-duvet-cover-shams-blue-bird-1-m.jpg',\n      height: 363\n    },\n    images: [{\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0011/organic-crinkle-duvet-cover-shams-blue-bird-m.jpg',\n      height: 363\n    }, {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0015/organic-crinkle-duvet-cover-shams-m.jpg',\n      height: 363\n    }, {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/organic-crinkle-duvet-cover-shams-m.jpg',\n      height: 363\n    }],\n    swatches: [],\n    messages: [],\n    flags: [{\n      bopisSuppress: false,\n      rank: 3,\n      id: 'newcore'\n    }, {\n      bopisSuppress: false,\n      rank: 7,\n      id: 'organic'\n    }],\n    reviews: {\n      recommendationCount: 0,\n      likelihood: 0,\n      reviewCount: 0,\n      averageRating: 0,\n      id: 'organic-crinkle-duvet-cover-shams-blue-bird-b2692',\n      type: 'GROUP_REVIEWS'\n    }\n  }, {\n    id: 'roar-rabbit-overlapping-tiles-duvet-cover-shams-b2686',\n    name: 'Roar + Rabbit&#8482; Overlapping Tiles Duvet Cover + Shams',\n    links: {\n      www: 'https://www.westelm.com/products/roar-rabbit-overlapping-tiles-duvet-cover-shams-b2686/'\n    },\n    priceRange: {\n      regular: {\n        high: 229,\n        low: 39\n      },\n      selling: {\n        high: 183,\n        low: 31\n      },\n      type: 'special'\n    },\n    thumbnail: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'thumbnail',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0008/roar-rabbit-overlapping-tiles-duvet-cover-shams-1-m.jpg',\n      height: 363\n    },\n    hero: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'hero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0008/roar-rabbit-overlapping-tiles-duvet-cover-shams-1-m.jpg',\n      height: 363\n    },\n    images: [{\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0008/roar-rabbit-overlapping-tiles-duvet-cover-shams-m.jpg',\n      height: 363\n    }, {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0052/roar-rabbit-overlapping-tiles-duvet-cover-shams-m.jpg',\n      height: 363\n    }, {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0052/roar-rabbit-overlapping-tiles-duvet-cover-shams-1-m.jpg',\n      height: 363\n    }, {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/roar-rabbit-overlapping-tiles-duvet-cover-shams-m.jpg',\n      height: 363\n    }],\n    swatches: [],\n    messages: [],\n    flags: [{\n      bopisSuppress: false,\n      rank: 3,\n      id: 'newcore'\n    }],\n    reviews: {\n      recommendationCount: 0,\n      likelihood: 0,\n      reviewCount: 0,\n      averageRating: 0,\n      id: 'roar-rabbit-overlapping-tiles-duvet-cover-shams-b2686',\n      type: 'GROUP_REVIEWS'\n    }\n  }, {\n    id: 'wide-channel-seersucker-duvet-cover-shams-b2693',\n    name: 'Wide Channel Seersucker Duvet Cover + Shams',\n    links: {\n      www: 'https://www.westelm.com/products/wide-channel-seersucker-duvet-cover-shams-b2693/'\n    },\n    priceRange: {\n      regular: {\n        high: 159,\n        low: 29\n      },\n      selling: {\n        high: 127,\n        low: 23\n      },\n      type: 'special'\n    },\n    thumbnail: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'thumbnail',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0011/wide-channel-seersucker-duvet-cover-shams-1-m.jpg',\n      height: 363\n    },\n    hero: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'hero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0011/wide-channel-seersucker-duvet-cover-shams-1-m.jpg',\n      height: 363\n    },\n    images: [{\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0034/wide-channel-seersucker-duvet-cover-shams-m.jpg',\n      height: 363\n    }, {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0052/wide-channel-seersucker-duvet-cover-shams-m.jpg',\n      height: 363\n    }],\n    swatches: [],\n    messages: [],\n    flags: [{\n      bopisSuppress: false,\n      rank: 3,\n      id: 'newcore'\n    }, {\n      bopisSuppress: false,\n      rank: 9,\n      id: 'fairTrade'\n    }],\n    reviews: {\n      recommendationCount: 0,\n      likelihood: 0,\n      reviewCount: 0,\n      averageRating: 0,\n      id: 'wide-channel-seersucker-duvet-cover-shams-b2693',\n      type: 'GROUP_REVIEWS'\n    }\n  }, {\n    id: 'plaid-seersucker-duvet-cover-shams-b2688',\n    name: 'Plaid Seersucker Duvet Cover + Shams',\n    links: {\n      www: 'https://www.westelm.com/products/plaid-seersucker-duvet-cover-shams-b2688/'\n    },\n    priceRange: {\n      regular: {\n        high: 159,\n        low: 29\n      },\n      selling: {\n        high: 127,\n        low: 23\n      },\n      type: 'special'\n    },\n    thumbnail: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'thumbnail',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/plaid-seersucker-duvet-cover-shams-m.jpg',\n      height: 363\n    },\n    hero: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'hero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/plaid-seersucker-duvet-cover-shams-m.jpg',\n      height: 363\n    },\n    images: [{\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0034/plaid-seersucker-duvet-cover-shams-m.jpg',\n      height: 363\n    }, {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/plaid-seersucker-duvet-cover-shams-m.jpg',\n      height: 363\n    }],\n    swatches: [],\n    messages: [],\n    flags: [{\n      bopisSuppress: false,\n      rank: 3,\n      id: 'newcore'\n    }, {\n      bopisSuppress: false,\n      rank: 9,\n      id: 'fairTrade'\n    }],\n    reviews: {\n      recommendationCount: 0,\n      likelihood: 0,\n      reviewCount: 0,\n      averageRating: 0,\n      id: 'plaid-seersucker-duvet-cover-shams-b2688',\n      type: 'GROUP_REVIEWS'\n    }\n  }, {\n    id: 'organic-voile-duvet-cover-shams-b2706',\n    name: 'Organic Voile Duvet Cover + Shams',\n    links: {\n      www: 'https://www.westelm.com/products/organic-voile-duvet-cover-shams-b2706/'\n    },\n    priceRange: {\n      regular: {\n        high: 159,\n        low: 29\n      },\n      selling: {\n        high: 127,\n        low: 23\n      },\n      type: 'special'\n    },\n    thumbnail: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'thumbnail',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/organic-voile-duvet-cover-shams-1-m.jpg',\n      height: 363\n    },\n    hero: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'hero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/organic-voile-duvet-cover-shams-1-m.jpg',\n      height: 363\n    },\n    images: [{\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/organic-voile-duvet-cover-shams-m.jpg',\n      height: 363\n    }],\n    swatches: [],\n    messages: [],\n    flags: [{\n      bopisSuppress: false,\n      rank: 3,\n      id: 'newcore'\n    }, {\n      bopisSuppress: false,\n      rank: 7,\n      id: 'organic'\n    }],\n    reviews: {\n      recommendationCount: 0,\n      likelihood: 0,\n      reviewCount: 0,\n      averageRating: 0,\n      id: 'organic-voile-duvet-cover-shams-b2706',\n      type: 'GROUP_REVIEWS'\n    }\n  }, {\n    id: 'tencel-terrazzo-duvet-cover-shams-b2687',\n    name: 'TENCEL&#8482; Terrazzo Duvet Cover + Shams',\n    links: {\n      www: 'https://www.westelm.com/products/tencel-terrazzo-duvet-cover-shams-b2687/'\n    },\n    priceRange: {\n      regular: {\n        high: 159,\n        low: 34\n      },\n      selling: {\n        high: 127,\n        low: 27\n      },\n      type: 'special'\n    },\n    thumbnail: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'thumbnail',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/tencel-terrazzo-duvet-cover-shams-1-m.jpg',\n      height: 363\n    },\n    hero: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'hero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/tencel-terrazzo-duvet-cover-shams-1-m.jpg',\n      height: 363\n    },\n    images: [{\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/tencel-terrazzo-duvet-cover-shams-m.jpg',\n      height: 363\n    }, {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/tencel-terrazzo-duvet-cover-shams-m.jpg',\n      height: 363\n    }],\n    swatches: [],\n    messages: [],\n    flags: [{\n      bopisSuppress: false,\n      rank: 3,\n      id: 'newcore'\n    }, {\n      bopisSuppress: false,\n      rank: 8,\n      id: 'handmade'\n    }, {\n      bopisSuppress: false,\n      rank: 9,\n      id: 'fairTrade'\n    }],\n    reviews: {\n      recommendationCount: 0,\n      likelihood: 0,\n      reviewCount: 0,\n      averageRating: 0,\n      id: 'tencel-terrazzo-duvet-cover-shams-b2687',\n      type: 'GROUP_REVIEWS'\n    }\n  }, {\n    id: 'organic-sateen-asha-duvet-cover-shams-b2710',\n    name: 'Organic Sateen Asha Duvet Cover + Shams',\n    links: {\n      www: 'https://www.westelm.com/products/organic-sateen-asha-duvet-cover-shams-b2710/'\n    },\n    priceRange: {\n      regular: {\n        high: 159,\n        low: 34\n      },\n      selling: {\n        high: 127,\n        low: 27\n      },\n      type: 'special'\n    },\n    thumbnail: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'thumbnail',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/organic-sateen-asha-duvet-cover-shams-1-m.jpg',\n      height: 363\n    },\n    hero: {\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'hero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/organic-sateen-asha-duvet-cover-shams-1-m.jpg',\n      height: 363\n    },\n    images: [{\n      size: 'm',\n      meta: '',\n      alt: '',\n      rel: 'althero',\n      width: 363,\n      href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/organic-sateen-asha-duvet-cover-shams-m.jpg',\n      height: 363\n    }],\n    swatches: [],\n    messages: [],\n    flags: [{\n      bopisSuppress: false,\n      rank: 3,\n      id: 'newcore'\n    }, {\n      bopisSuppress: false,\n      rank: 7,\n      id: 'organic'\n    }, {\n      bopisSuppress: false,\n      rank: 9,\n      id: 'fairTrade'\n    }],\n    reviews: {\n      recommendationCount: 0,\n      likelihood: 0,\n      reviewCount: 0,\n      averageRating: 0,\n      id: 'organic-sateen-asha-duvet-cover-shams-b2710',\n      type: 'GROUP_REVIEWS'\n    }\n  }],\n  totalPages: 48,\n  categories: []\n};\n\n\n//# sourceURL=webpack:///./server/resources/product/products.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Routes */ \"./src/Routes.js\");\n/* harmony import */ var _resources_product_product_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources/product/product.router */ \"./server/resources/product/product.router.js\");\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/renderer */ \"./server/helpers/renderer.js\");\n/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/createStore */ \"./server/helpers/createStore.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.disable('x-powered-by');\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(Object(body_parser__WEBPACK_IMPORTED_MODULE_3__[\"json\"])());\napp.use(Object(body_parser__WEBPACK_IMPORTED_MODULE_3__[\"urlencoded\"])({\n  extended: true\n}));\napp.use(morgan__WEBPACK_IMPORTED_MODULE_4___default()('dev'));\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_10___default.a.resolve('./public')));\napp.use('/api/products', _resources_product_product_router__WEBPACK_IMPORTED_MODULE_7__[\"default\"]); // Server side rendering.\n\napp.get('*', function (req, res) {\n  var store = Object(_helpers_createStore__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_5__[\"matchRoutes\"])(_src_Routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"], req.path).map(function (_ref) {\n    var route = _ref.route;\n    return route.loadData ? route.loadData(store) : null;\n  }); // eslint-disable-next-line promise/catch-or-return\n\n  Promise.all(promises).then(function () {\n    res.send(Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_8__[\"renderer\"])(req, store));\n  });\n});\n\nvar start = function start() {\n  try {\n    app.listen(8000, function () {\n      console.log('Server running on port 8000');\n    });\n  } catch (e) {\n    console.log('Server could not be started.');\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (start);\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _containers_ProductList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/ProductList */ \"./src/containers/ProductList.js\");\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ProductList */ \"./src/components/ProductList.js\");\n/* harmony import */ var _pages_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Layout */ \"./src/pages/Layout.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  component: _pages_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  routes: [{\n    path: '/',\n    component: _containers_ProductList__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    loadData: _components_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"loadData\"]\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/actions/products.js":
/*!*********************************!*\
  !*** ./src/actions/products.js ***!
  \*********************************/
/*! exports provided: GET_PRODUCT, GET_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, updateProduct, createProduct, getProducts, deleteProduct, getOneProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PRODUCT\", function() { return GET_PRODUCT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PRODUCTS\", function() { return GET_PRODUCTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CREATE_PRODUCT\", function() { return CREATE_PRODUCT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_PRODUCT\", function() { return UPDATE_PRODUCT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_PRODUCT\", function() { return DELETE_PRODUCT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProduct\", function() { return updateProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProduct\", function() { return createProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProducts\", function() { return getProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProduct\", function() { return deleteProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOneProduct\", function() { return getOneProduct; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n // Action types for the redux store management.\n\nvar GET_PRODUCTS = 'GET_PRODUCTS';\nvar GET_PRODUCT = 'GET_PRODUCT';\nvar UPDATE_PRODUCT = 'UPDATE_PRODUCT';\nvar DELETE_PRODUCT = 'DELETE_PRODUCT';\nvar CREATE_PRODUCT = 'CREATE_PRODUCT'; // Endpoints related to the Products management.\n\nvar productEndpoint = 'http://localhost:8000/api/products/';\n/**\n * sends a request to the backend to fetch\n * data and dispatch to the store.\n * @function getProducts\n * @param {None}\n * @returns {None}\n */\n\nvar getProducts = function getProducts() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(dispatch) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(productEndpoint);\n\n              case 2:\n                res = _context.sent;\n                dispatch({\n                  type: GET_PRODUCTS,\n                  payload: res\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n};\n/**\n * sends a request to the backend to fetch\n * on product and dispatch to the store.\n * @function getOneProduct\n * @param {None}\n * @returns {None}\n */\n\n\nvar getOneProduct = function getOneProduct(requestData) {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref2 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(dispatch) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(productEndpoint + requestData.id + '/');\n\n              case 2:\n                res = _context2.sent;\n                dispatch({\n                  type: GET_PRODUCT,\n                  payload: res\n                });\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }()\n  );\n};\n/**\n * sends a request to the backend to create\n * a product and dispatch to the store.\n * @function createProduct\n * @param {None}\n * @returns {None}\n */\n\n\nvar createProduct = function createProduct(requestData) {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref3 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3(dispatch) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(productEndpoint);\n\n              case 2:\n                res = _context3.sent;\n                dispatch({\n                  type: CREATE_PRODUCT,\n                  payload: res\n                });\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x3) {\n        return _ref3.apply(this, arguments);\n      };\n    }()\n  );\n};\n/**\n * sends a request to the backend to update\n * a product and dispatch to the store.\n * @function updateProduct\n * @param {None}\n * @returns {None}\n */\n\n\nvar updateProduct = function updateProduct(requestData) {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref4 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee4(dispatch) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(productEndpoint);\n\n              case 2:\n                res = _context4.sent;\n                dispatch({\n                  type: UPDATE_PRODUCT,\n                  payload: res\n                });\n\n              case 4:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      return function (_x4) {\n        return _ref4.apply(this, arguments);\n      };\n    }()\n  );\n};\n/**\n * sends a request to the backend to delete\n * a product and dispatch to the store.\n * @function deleteProduct\n * @param {None}\n * @returns {None}\n */\n\n\nvar deleteProduct = function deleteProduct(requestData) {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref5 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee5(dispatch) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                _context5.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default.a[\"delete\"](productEndpoint + requestData.id + '/');\n\n              case 2:\n                res = _context5.sent;\n                dispatch({\n                  type: DELETE_PRODUCT,\n                  payload: res\n                });\n\n              case 4:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5);\n      }));\n\n      return function (_x5) {\n        return _ref5.apply(this, arguments);\n      };\n    }()\n  );\n}; // Exporting the specialized functions and some action types.\n\n\n\n\n//# sourceURL=webpack:///./src/actions/products.js?");

/***/ }),

/***/ "./src/components/Carousel.js":
/*!************************************!*\
  !*** ./src/components/Carousel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Carousel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.scss */ \"./src/components/Carousel.scss\");\n/* harmony import */ var _Carousel_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Carousel_scss__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// eslint-disable-next-line no-unused-vars\n\n\n/**\n * Carousel class that display a carousel\n * @class Carousel\n * @params {None}\n * @returns {JSX.Element} jsx to render to screen.\n */\n\nvar Carousel =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Carousel, _Component);\n\n  /**\n   * constructor for the class.\n   * @function constructor\n   * @param {object} props - props for the class.\n   * @returns {none}\n   */\n  function Carousel(props) {\n    var _this;\n\n    _classCallCheck(this, Carousel);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"changeSelectedImage\", function (image) {\n      return function (e) {\n        _this.setState(function (prevState, props) {\n          return {\n            selectedImage: image\n          };\n        });\n      };\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"scrollLeft\", function () {\n      var $scrollDiv = document.getElementById('scrollCarousel');\n      $scrollDiv.scrollBy(-200, 0);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"scrollRight\", function () {\n      var $scrollDiv = document.getElementById('scrollCarousel');\n      $scrollDiv.scrollBy(200, 0);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"closeCarousel\", function () {\n      _this.props.toggleCarouselDisplay();\n    });\n\n    _this.state = {\n      selectedImage: _this.props.images[0]\n    };\n    return _this;\n  }\n  /**\n   * Sets the current selected image in state\n   * to the image that was selected.\n   * @function changeSelectedImage\n   * @param {Object} image - the image that is selected.\n   * @returns {none}\n   */\n\n\n  _createClass(Carousel, [{\n    key: \"renderImages\",\n\n    /**\n     * Renders all the images in the list passed from product\n     * @function renderImages\n     * @param {None}\n     * @returns {JSX.Element} jsx to render to screen.\n     */\n    value: function renderImages() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          images = _this$props.images,\n          name = _this$props.name;\n      return images.map(function (image, idx) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          key: idx,\n          onClick: _this2.changeSelectedImage(image),\n          className: \"carouse-mini-image\",\n          src: image.href,\n          alt: name\n        });\n      });\n    }\n    /**\n     * Scroll the images in the carousel to the left.\n     * @function scrollLeft\n     * @param {None}\n     * @returns {None}\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var selectedImage = this.state.selectedImage;\n      var name = this.props.name;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"data-test\": \"component-carousel\",\n        className: \"carousel\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"carousel-content\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"carousel-body\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        \"data-test\": \"carousel-close-btn\",\n        className: \"close\",\n        onClick: this.closeCarousel\n      }, \"\\xD7\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"data-test\": \"carousel-image\",\n        className: \"carousel-selectedImage-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: \"carousel-main-image\",\n        src: selectedImage.href,\n        alt: name\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"carousel-scrollable-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"child arrow-div\",\n        onClick: this.scrollLeft\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"arrow left\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"data-test\": \"small-images\",\n        id: \"scrollCarousel\",\n        className: \"carousel-mini-images child\"\n      }, this.renderImages()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"child arrow-div\",\n        onClick: this.scrollRight\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"arrow right\"\n      }))))));\n    }\n  }]);\n\n  return Carousel;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\n//# sourceURL=webpack:///./src/components/Carousel.js?");

/***/ }),

/***/ "./src/components/Carousel.scss":
/*!**************************************!*\
  !*** ./src/components/Carousel.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/Carousel.scss?");

/***/ }),

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel */ \"./src/components/Carousel.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Product_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product.scss */ \"./src/components/Product.scss\");\n/* harmony import */ var _Product_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Product_scss__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// eslint-disable-next-line no-unused-vars\n // eslint-disable-next-line no-unused-vars\n\n\n\n\n/**\n * Product class that display a single product to the screen.\n * @class Product\n * @params {None}\n * @returns {JSX.Element} jsx to render to screen.\n */\n\nvar Product =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Product, _Component);\n\n  /**\n   * constructor for the class.\n   * @function constructor\n   * @param {object} props - props for the class.\n   * @returns {none}\n   */\n  function Product(props) {\n    var _this;\n\n    _classCallCheck(this, Product);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Product).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"changeImage\", function () {\n      if (_this.props.product.images[1]) _this.setState(function (prevState) {\n        if (prevState.image !== _this.props.product.images[1]) return {\n          image: _this.props.product.images[1]\n        };else return {\n          image: _this.props.product.hero\n        };\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"toggleCarouselDisplay\", function () {\n      _this.setState(function (prevState) {\n        return {\n          displayCarousel: !prevState.displayCarousel\n        };\n      });\n    });\n\n    _this.state = {\n      image: props.product.hero,\n      displayCarousel: false\n    };\n    return _this;\n  }\n  /**\n   * renders the price in a secified format.\n   * @function renderPrice\n   * @param {object} price - price to render.\n   * @returns {JSX.Element} jsx to render to screen.\n   */\n\n\n  _createClass(Product, [{\n    key: \"renderPrice\",\n    value: function renderPrice(price) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"currency-symbol\"\n      }, \"$\"), price.low, \" - \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"currency-symbol\"\n      }, \"$\"), price.high);\n    }\n    /**\n     * Swaps the images of hero on enter and on\n     * exit by using the image param in components state.\n     * @function changeImage\n     * @param {none}\n     * @returns {none}\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var product = this.props.product;\n      var image = this.state.image;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"data-test\": \"component-product\",\n        className: \"product column\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"data-test\": \"product-image\",\n        className: \"product-image\",\n        onMouseEnter: this.changeImage,\n        onMouseLeave: this.changeImage\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: image.href,\n        alt: product.name,\n        height: image.height,\n        width: image.width\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        \"data-test\": \"product-quicklook\",\n        className: \"product-overlay\",\n        onClick: this.toggleCarouselDisplay\n      }, \"Quicklook\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        \"data-test\": \"product-name\",\n        className: \"product-name\"\n      }, product.name), product.priceRange.regular && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        \"data-test\": \"product-regular-price\",\n        className: \"product-regular-price\"\n      }, \"Sugg. Price:\", ' ', this.renderPrice(product.priceRange.regular)), product.priceRange.selling && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        \"data-test\": \"product-selling-price\",\n        className: \"product-selling-price \".concat(product.priceRange.regular ? 'discounted' : '')\n      }, \"Our Price:\", ' ', this.renderPrice(product.priceRange.selling)), this.state.displayCarousel && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"data-test\": \"component-carousel\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        images: product.images,\n        name: product.name,\n        toggleCarouselDisplay: this.toggleCarouselDisplay\n      })));\n    }\n  }]);\n\n  return Product;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]); // Required props for the Product Component.\n\n\nProduct.propTypes = {\n  product: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\n//# sourceURL=webpack:///./src/components/Product.js?");

/***/ }),

/***/ "./src/components/Product.scss":
/*!*************************************!*\
  !*** ./src/components/Product.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/Product.scss?");

/***/ }),

/***/ "./src/components/ProductList.js":
/*!***************************************!*\
  !*** ./src/components/ProductList.js ***!
  \***************************************/
/*! exports provided: loadData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadData\", function() { return loadData; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Loading */ \"./src/pages/Loading.js\");\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ \"./src/components/Product.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/products */ \"./src/actions/products.js\");\n/* harmony import */ var _ProductList_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductList.scss */ \"./src/components/ProductList.scss\");\n/* harmony import */ var _ProductList_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProductList_scss__WEBPACK_IMPORTED_MODULE_5__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n// eslint-disable-next-line no-unused-vars\n // eslint-disable-next-line no-unused-vars\n\n // eslint-disable-next-line no-unused-vars\n\n\n\n\n\n/**\n * ProductList class that renders all the products.\n * @class ProductList\n * @returns {JSX.Element} jsx to render to screen.\n */\n\nvar ProductList =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ProductList, _Component);\n\n  /**\n   * constructor for the class.\n   * @function constructor\n   * @param {object} props - props for the class.\n   * @returns {None}\n   */\n  function ProductList(props) {\n    var _this;\n\n    _classCallCheck(this, ProductList);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductList).call(this, props));\n    _this.state = {\n      loading: _this.props.products.data ? false : true\n    };\n    return _this;\n  }\n  /**\n   * ComponentDidMount called after the\n   * component is mounted to the DOM.\n   * @function componentDidMount\n   * @param {None}\n   * @returns {None}\n   */\n\n\n  _createClass(ProductList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var getProducts = this.props.getProducts;\n      getProducts();\n    }\n    /**\n     * ComponentDidUpdate called after the\n     * state of the class is updated.\n     * @function componentDidUpdate\n     * @param {None}\n     * @returns {None}\n     */\n\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if (prevProps.products !== this.props.products && this.props.products.data) {\n        this.setState({\n          loading: false\n        });\n      }\n    }\n    /**\n     * renders each product from the array.\n     * @function renderPrice\n     * @param {None}\n     * @returns {JSX.Element} jsx of product to render.\n     */\n\n  }, {\n    key: \"renderProducts\",\n    value: function renderProducts() {\n      return this.props.products.data.map(function (product) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          key: product.id,\n          product: product\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var loading = this.state.loading;\n      if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"data-test\": \"component-loading\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Loading__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"data-test\": \"product-list-component\",\n        className: \"product-list row\"\n      }, this.renderProducts());\n    }\n  }]);\n\n  return ProductList;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]); // Proptypes for the class.\n\n\nProductList.propTypes = {\n  getProducts: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,\n  products: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object\n  /**\n   * load data dispatches state to the store.\n   * @function loadData\n   * @param {object} store - state of the app.\n   * @returns {Redux.store} state of the app.\n   */\n\n};\n\nvar loadData = function loadData(store) {\n  return store.dispatch(Object(_actions_products__WEBPACK_IMPORTED_MODULE_4__[\"getProducts\"])());\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\n\n//# sourceURL=webpack:///./src/components/ProductList.js?");

/***/ }),

/***/ "./src/components/ProductList.scss":
/*!*****************************************!*\
  !*** ./src/components/ProductList.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/ProductList.scss?");

/***/ }),

/***/ "./src/containers/ProductList.js":
/*!***************************************!*\
  !*** ./src/containers/ProductList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/products */ \"./src/actions/products.js\");\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductList */ \"./src/components/ProductList.js\");\n\n\n\n/**\n * constructor for the class.\n * @function mapStateToProps\n * @param {object} state - state of the app.\n * @returns {object} props passed to component.\n */\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n  var products = _ref.products;\n  return {\n    products: products\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, {\n  getProducts: _actions_products__WEBPACK_IMPORTED_MODULE_1__[\"getProducts\"]\n})(_components_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n\n//# sourceURL=webpack:///./src/containers/ProductList.js?");

/***/ }),

/***/ "./src/pages/Layout.js":
/*!*****************************!*\
  !*** ./src/pages/Layout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.scss */ \"./src/pages/Layout.scss\");\n/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_scss__WEBPACK_IMPORTED_MODULE_3__);\n// eslint-disable-next-line no-unused-vars\n\n\n\n\n/**\n * Functional React Component that renders a layout to screen.\n * @funtion Layout\n * @params {Object} props - Component props.\n * @returns {JSX.Element} - Layout component for a basic layout in app.\n */\n\nvar Layout = function Layout(_ref) {\n  var route = _ref.route;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-test\": \"component-layout\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    \"data-test\": \"header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"WSI\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n    \"data-test\": \"main\"\n  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(route.routes)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n    \"data-test\": \"footer\"\n  }));\n};\n\nLayout.propTypes = {\n  route: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n//# sourceURL=webpack:///./src/pages/Layout.js?");

/***/ }),

/***/ "./src/pages/Layout.scss":
/*!*******************************!*\
  !*** ./src/pages/Layout.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/Layout.scss?");

/***/ }),

/***/ "./src/pages/Loading.js":
/*!******************************!*\
  !*** ./src/pages/Loading.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Loading_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading.scss */ \"./src/pages/Loading.scss\");\n/* harmony import */ var _Loading_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Loading_scss__WEBPACK_IMPORTED_MODULE_1__);\n// eslint-disable-next-line no-unused-vars\n\n\n/**\n * Functional react component that creates a\n * loading icon to render on screen.\n * @funtion Loading\n * @params {Object} props - Component props specific to setup.\n * @returns {JSX.Element} - rendered component.\n */\n\nvar Loading = function Loading() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-test\": \"component-loading\",\n    className: \"sk-fading-circle\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-test\": \"circle\",\n    className: \"sk-circle1 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-test\": \"circle\",\n    className: \"sk-circle2 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-test\": \"circle\",\n    className: \"sk-circle3 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-test\": \"circle\",\n    className: \"sk-circle4 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-test\": \"circle\",\n    className: \"sk-circle5 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-test\": \"circle\",\n    className: \"sk-circle6 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-test\": \"circle\",\n    className: \"sk-circle7 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-test\": \"circle\",\n    className: \"sk-circle8 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-test\": \"circle\",\n    className: \"sk-circle9 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-test\": \"circle\",\n    className: \"sk-circle10 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-test\": \"circle\",\n    className: \"sk-circle11 sk-circle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-test\": \"circle\",\n    className: \"sk-circle12 sk-circle\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);\n\n//# sourceURL=webpack:///./src/pages/Loading.js?");

/***/ }),

/***/ "./src/pages/Loading.scss":
/*!********************************!*\
  !*** ./src/pages/Loading.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/Loading.scss?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _productsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsReducer */ \"./src/store/productsReducer.js\");\n\n // Returns a merged reducer for redux state.\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  products: _productsReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/productsReducer.js":
/*!**************************************!*\
  !*** ./src/store/productsReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/products */ \"./src/actions/products.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // Provides the initial state for the products model\n\nvar initialState = {\n  data: [],\n  errors: []\n  /**\n   * Redux Reducer to maintain the state of the products.\n   * @funtion products\n   * @params {Object} state - state of the application.\n   * @params {Object} action - action to be reduced.\n   * @returns {Object} - new State\n   */\n\n};\n\nvar products = function products() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  switch (action.type) {\n    case _actions_products__WEBPACK_IMPORTED_MODULE_0__[\"GET_PRODUCTS\"]:\n      return _objectSpread({}, state, {\n        data: action.payload.data,\n        errors: []\n      });\n\n    default:\n      return _objectSpread({}, state);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (products);\n\n//# sourceURL=webpack:///./src/store/productsReducer.js?");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

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

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

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

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });