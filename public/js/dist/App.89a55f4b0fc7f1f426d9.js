/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ShoppingList_ShoppingList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShoppingList/ShoppingList */ \"./src/components/ShoppingList/ShoppingList.js\");\n/* harmony import */ var _Products_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products/Product */ \"./src/components/Products/Product.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n/* harmony import */ var _Products_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Products/Products */ \"./src/components/Products/Products.js\");\n/* harmony import */ var _PostForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostForm */ \"./src/components/PostForm.js\");\n\n\n\n\n\n\nfunction App(props) {\n  const [cart, updateCart] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const products = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    item: '',\n    brand: '',\n    units: '',\n    quantity: 0,\n    isPurchased: false\n  }]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pageLayoutDiv\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShoppingList_ShoppingList__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Products_Product__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null));\n}\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"headerDiv\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"headerImage\",\n    src: \"https://i.imgur.com/1Chk6Po.gif\"\n  })));\n}\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/components/PostForm.js":
/*!************************************!*\
  !*** ./src/components/PostForm.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass PostForm extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    this.changeHandler = e => {\n      this.setState({\n        [e.target.name]: e.target.value\n      });\n    };\n\n    this.submitHandler = e => {\n      e.preventDefault();\n      console.log(this.state);\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:3000/', this.state).then(response => {\n        console.log(response);\n      }).catch(error => {\n        console.log(error);\n      });\n    };\n\n    this.state = {\n      category: '',\n      name: '',\n      cost: '',\n      image: ''\n    };\n  }\n\n  render() {\n    const {\n      category,\n      name,\n      cost,\n      image\n    } = this.state;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"postFormDiv\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: this.submitHandler\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Category:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"category\",\n      value: category,\n      onChange: this.changeHandler\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Name:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"name\",\n      value: name,\n      onChange: this.changeHandler\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Cost:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"cost\",\n      value: cost,\n      onChange: this.changeHandler\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Image\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"image\",\n      value: image,\n      onChange: this.changeHandler\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"submit\"\n    }, \"Submit\")));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (PostForm);\n\n//# sourceURL=webpack:///./src/components/PostForm.js?");

/***/ }),

/***/ "./src/components/Products/Cart.js":
/*!*****************************************!*\
  !*** ./src/components/Products/Cart.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Cart; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Cart(_ref) {\n  let {\n    cart,\n    setCart\n  } = _ref;\n\n  const getTotalSum = () => {\n    return cart.reduce((sum, _ref2) => {\n      let {\n        cost,\n        quantity\n      } = _ref2;\n      return sum + cost * quantity;\n    }, 0);\n  };\n\n  const clearCart = () => {\n    setCart([]);\n  };\n\n  const setQuantity = (product, amount) => {\n    const newCart = [...cart];\n    newCart.find(item => item.name === product.name).quantity = amount;\n    setCart(newCart);\n  };\n\n  const removeFromCart = productToRemove => {\n    setCart(cart.filter(product => product !== productToRemove));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"totalCost\"\n  }, \"Total Cost: $\", getTotalSum()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"productsBoughtList\"\n  }, cart.map((product, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"productList\",\n    key: idx\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"$\", product.cost), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"foodPics\",\n    src: product.image,\n    alt: product.name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    value: product.quantity,\n    onChange: e => setQuantity(product, parseInt(e.target.value))\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: () => removeFromCart(product)\n  }, \"Remove\")))));\n}\n\n//# sourceURL=webpack:///./src/components/Products/Cart.js?");

/***/ }),

/***/ "./src/components/Products/Product.js":
/*!********************************************!*\
  !*** ./src/components/Products/Product.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Product; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products */ \"./src/components/Products/Products.js\");\n/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart */ \"./src/components/Products/Cart.js\");\n/* harmony import */ var _PostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PostForm */ \"./src/components/PostForm.js\");\n\n\n\n\nconst PAGE_PRODUCTS = 'products';\nconst PAGE_CART = 'cart';\nconst PAGE_ADD = 'add';\nfunction Product(props) {\n  const [cart, setCart] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(PAGE_PRODUCTS);\n\n  const navigateTo = nextPage => {\n    setPage(nextPage);\n  };\n\n  const getCartTotal = () => {\n    return cart.reduce((sum, _ref) => {\n      let {\n        quantity\n      } = _ref;\n      return sum + quantity;\n    }, 0);\n  };\n\n  const clearCart = () => {\n    setCart([]);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"productsListDiv\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"productsHeader\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"gocartButton\",\n    onClick: () => navigateTo(PAGE_CART)\n  }, \"Go to Cart (\", getCartTotal(), \")\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"storeButton\",\n    onClick: () => navigateTo(PAGE_PRODUCTS)\n  }, \"Go to Store\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"clearCartButton\",\n    onClick: clearCart\n  }, \"Clear Cart\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"cartButton\",\n    onClick: () => navigateTo(PAGE_ADD)\n  }, \"AddItem\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"productsListingsDiv\"\n  }, page === PAGE_PRODUCTS && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Products__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    cart: cart,\n    setCart: setCart\n  }), page === PAGE_CART && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cart__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    cart: cart,\n    setCart: setCart\n  }), page === PAGE_ADD && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostForm__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    cart: cart,\n    setCart: setCart\n  })));\n}\n\n//# sourceURL=webpack:///./src/components/Products/Product.js?");

/***/ }),

/***/ "./src/components/Products/Products.js":
/*!*********************************************!*\
  !*** ./src/components/Products/Products.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Products; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst HOME_GARDEN = 'Home and Garden';\nconst DAIRY = 'Dairy';\nconst MEAT = 'Meat';\nconst FRUITSVEGGIES = 'Fruits & Veggies';\nconst CANNEDGOODS = 'Canned Goods';\nconst FROZENFOODS = 'Frozen Foods';\nconst BEVERAGES = 'Beverages';\nfunction Products(_ref) {\n  let {\n    setCart,\n    cart\n  } = _ref;\n  const [products] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    category: FRUITSVEGGIES,\n    name: 'Banana',\n    cost: 0.39,\n    image: 'https://i.imgur.com/jJTK0bS.jpg'\n  }, {\n    category: FRUITSVEGGIES,\n    name: 'Strawberries',\n    cost: 3.99,\n    image: 'https://i.imgur.com/XoAHviU.jpg'\n  }, {\n    category: FRUITSVEGGIES,\n    name: 'Pineapple',\n    cost: 0.39,\n    image: 'https://i.imgur.com/iILIsdp.jpg'\n  }, {\n    category: FRUITSVEGGIES,\n    name: 'Bell Pepper',\n    cost: 0.79,\n    image: 'https://i.imgur.com/0LusTr7.jpg'\n  }, {\n    category: FRUITSVEGGIES,\n    name: 'Avocado',\n    cost: 0.99,\n    image: 'https://i.imgur.com/s5Jl7ZJ.jpg'\n  }, {\n    category: MEAT,\n    name: 'Ground Beef',\n    brand: '',\n    units: '1 lb',\n    instock: 30,\n    cost: 3.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/uN8Bz9P.jpg'\n  }, {\n    category: MEAT,\n    name: 'Pork Chops',\n    brand: '',\n    units: '1 lb',\n    instock: 30,\n    cost: 5.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/ZNYARmN.jpg'\n  }, {\n    category: MEAT,\n    name: 'Chicken Thighs',\n    brand: '',\n    units: '2 lb',\n    instock: 30,\n    cost: 6.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/Cnj0W7a.jpg'\n  }, {\n    category: MEAT,\n    name: 'Brats',\n    brand: '',\n    units: '5 pack',\n    instock: 30,\n    cost: 3.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/qYQ6n65.jpg'\n  }, {\n    category: MEAT,\n    name: 'Ribeye',\n    brand: '',\n    units: '2 lb',\n    instock: 30,\n    cost: 21.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/WD6jQec.jpg'\n  }, {\n    category: CANNEDGOODS,\n    name: 'Corn',\n    brand: '',\n    units: '16 oz',\n    instock: 30,\n    cost: 1.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/mjxOSbh.jpg'\n  }, {\n    category: CANNEDGOODS,\n    name: 'Chicken Noodle',\n    brand: 'Progressive',\n    units: '16 oz',\n    instock: 30,\n    cost: 2.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/mrrKwFg.jpg'\n  }, {\n    category: CANNEDGOODS,\n    name: 'Clam Chowder',\n    brand: 'Progressive',\n    units: '16 oz',\n    instock: 30,\n    cost: 2.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/0vWvtIk.jpg'\n  }, {\n    category: CANNEDGOODS,\n    name: 'Baked Beans',\n    brand: \"Bush's\",\n    units: '16 oz',\n    instock: 30,\n    cost: 1.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/EIEdnjd.png'\n  }, {\n    category: CANNEDGOODS,\n    name: 'Pasta Sauce',\n    brand: 'Bertolli',\n    units: '20 oz',\n    instock: 30,\n    cost: 1.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/aKK2IB4.jpg'\n  }, {\n    category: FROZENFOODS,\n    name: 'Chicken Strips',\n    brand: 'Tyson',\n    units: '2 lbs',\n    instock: 30,\n    cost: 8.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/9qiHoIh.jpg'\n  }, {\n    category: FROZENFOODS,\n    name: 'Mini Corn Dogs',\n    brand: '',\n    units: '2 lbs',\n    instock: 30,\n    cost: 6.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/VT5I78i.jpg'\n  }, {\n    category: FROZENFOODS,\n    name: 'Hot Pockets',\n    brand: 'Tyson',\n    units: '2 pack',\n    instock: 30,\n    cost: 3.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/53RMfnm.jpg'\n  }, {\n    category: FROZENFOODS,\n    name: 'Cauliflower MAc',\n    brand: 'Tyson',\n    units: '16 oz',\n    instock: 30,\n    cost: 4.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/VelLDBY.jpg'\n  }, {\n    category: FROZENFOODS,\n    name: 'Pad Thai',\n    brand: '',\n    units: '16 oz',\n    instock: 30,\n    cost: 3.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/XG6BPG8.jpg'\n  }, {\n    category: DAIRY,\n    name: 'Milk',\n    brand: 'DairyPure',\n    units: '1 Gallon',\n    instock: 30,\n    cost: 3.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/Jah0pQA.jpg'\n  }, {\n    category: DAIRY,\n    name: 'Eggs',\n    brand: 'Great Value',\n    units: '18 eggs',\n    instock: 30,\n    cost: 2.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/KTYjv1N.jpg'\n  }, {\n    category: DAIRY,\n    name: 'Swiss Cheese',\n    brand: 'Kraft',\n    units: '16 slices',\n    instock: 30,\n    cost: 2.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/SBoerDZ.jpg'\n  }, {\n    category: DAIRY,\n    name: 'String Cheese',\n    brand: 'DairyPure',\n    units: '24 pack',\n    instock: 30,\n    cost: 3.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/D8lLO4z.jpg'\n  }, {\n    category: BEVERAGES,\n    name: 'Fat Tire Beer',\n    brand: 'Fat Tire',\n    units: '6 12oz bottles',\n    instock: 30,\n    cost: 10.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/hXgOaZb.jpg'\n  }, {\n    category: BEVERAGES,\n    name: 'Apothic Red',\n    brand: 'Apothic',\n    units: '750ml',\n    instock: 30,\n    cost: 9.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/c4R6ouY.jpg'\n  }, {\n    category: BEVERAGES,\n    name: 'Pink Lemonade',\n    brand: 'Simply',\n    units: '1 Gallon',\n    instock: 30,\n    cost: 4.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/4UBfRDf.jpg'\n  }, {\n    category: BEVERAGES,\n    name: 'Orange Juice',\n    brand: 'Sunny D',\n    units: '1 Gallon',\n    instock: 30,\n    cost: 4.59,\n    isPurchased: false,\n    image: 'https://i.imgur.com/imXSGFx.jpg'\n  }, {\n    category: BEVERAGES,\n    name: 'Coke',\n    brand: 'Coca Cola',\n    units: '12oz 24 pack',\n    instock: 30,\n    cost: 8.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/uqBAixr.jpg'\n  }]);\n\n  const addToCart = product => {\n    let newCart = [...cart];\n    let itemInCart = newCart.find(item => product.name === item.name);\n\n    if (itemInCart) {\n      itemInCart.quantity++;\n      product.instock--;\n    } else {\n      itemInCart = _objectSpread(_objectSpread({}, product), {}, {\n        quantity: 1\n      });\n      newCart.push(itemInCart); // product.quantity--;\n    }\n\n    setCart(newCart);\n  };\n\n  const [category, setCategory] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(FRUITSVEGGIES);\n\n  const getProductsInCategory = () => {\n    return products.filter(product => product.category === category);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"productSelection\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Products\"), \"Select a category\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    onChange: e => setCategory(e.target.value)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: FRUITSVEGGIES\n  }, FRUITSVEGGIES), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: DAIRY\n  }, DAIRY), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: MEAT\n  }, MEAT), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: CANNEDGOODS\n  }, CANNEDGOODS), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: FROZENFOODS\n  }, FROZENFOODS), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: BEVERAGES\n  }, BEVERAGES))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"productsListss\"\n  }, getProductsInCategory().map((product, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"product\",\n    key: idx\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"$\", product.cost), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"foodPics\",\n    src: product.image,\n    alt: product.name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"buyButton\",\n    onClick: () => addToCart(product)\n  }, \"Add to Cart\")))));\n}\n\n//# sourceURL=webpack:///./src/components/Products/Products.js?");

/***/ }),

/***/ "./src/components/ShoppingList/ShoppingList.js":
/*!*****************************************************!*\
  !*** ./src/components/ShoppingList/ShoppingList.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ShoppingList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.json */ \"./src/components/ShoppingList/data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ \"./src/components/ShoppingList/data.json\", 1);\n/* harmony import */ var _ShoppingToDoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShoppingToDoList */ \"./src/components/ShoppingList/ShoppingToDoList.js\");\n/* harmony import */ var _ShoppingToDoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShoppingToDoForm */ \"./src/components/ShoppingList/ShoppingToDoForm.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction ShoppingList() {\n  const [toDoList, setToDoList] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(_data_json__WEBPACK_IMPORTED_MODULE_1__);\n\n  const handleToggle = id => {\n    let mapped = toDoList.map(task => {\n      return task.id === Number(id) ? _objectSpread(_objectSpread({}, task), {}, {\n        complete: !task.complete\n      }) : _objectSpread({}, task);\n    });\n    setToDoList(mapped);\n  };\n\n  const handleFilter = () => {\n    let filtered = toDoList.filter(task => {\n      return !task.complete;\n    });\n    setToDoList(filtered);\n  };\n\n  const addTask = userInput => {\n    let copy = [...toDoList];\n    copy = [...copy, {\n      id: toDoList.length + 1,\n      task: userInput,\n      complete: false\n    }];\n    setToDoList(copy);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"shoppingListDiv\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"shoppingListInnerDiv\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"shoppingListTitle\"\n  }, \"Shopping List\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShoppingToDoList__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    toDoList: toDoList,\n    handleToggle: handleToggle,\n    handleFilter: handleFilter\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShoppingToDoForm__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    addTask: addTask\n  })));\n}\n\n//# sourceURL=webpack:///./src/components/ShoppingList/ShoppingList.js?");

/***/ }),

/***/ "./src/components/ShoppingList/ShoppingToDo.js":
/*!*****************************************************!*\
  !*** ./src/components/ShoppingList/ShoppingToDo.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ShoppingToDo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ShoppingToDo(_ref) {\n  let {\n    todo,\n    handleToggle\n  } = _ref;\n\n  const handleClick = e => {\n    e.preventDefault();\n    handleToggle(e.currentTarget.id);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: todo.id,\n    key: todo.id + todo.task,\n    name: \"todo\",\n    value: todo.id,\n    onClick: handleClick,\n    className: todo.complete ? 'todo strike' : 'todo'\n  }, todo.task);\n}\n\n//# sourceURL=webpack:///./src/components/ShoppingList/ShoppingToDo.js?");

/***/ }),

/***/ "./src/components/ShoppingList/ShoppingToDoForm.js":
/*!*********************************************************!*\
  !*** ./src/components/ShoppingList/ShoppingToDoForm.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ShoppingToDoForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ShoppingToDoForm(_ref) {\n  let {\n    addTask\n  } = _ref;\n  const [userInput, setUserInput] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const handleChange = e => {\n    setUserInput(e.currentTarget.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    addTask(userInput);\n    setUserInput('');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    value: userInput,\n    type: \"text\",\n    onChange: handleChange,\n    placeholder: \"Enter Groceries...\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Submit\"));\n}\n\n//# sourceURL=webpack:///./src/components/ShoppingList/ShoppingToDoForm.js?");

/***/ }),

/***/ "./src/components/ShoppingList/ShoppingToDoList.js":
/*!*********************************************************!*\
  !*** ./src/components/ShoppingList/ShoppingToDoList.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ShoppingToDoList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ShoppingToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShoppingToDo */ \"./src/components/ShoppingList/ShoppingToDo.js\");\n\n\nfunction ShoppingToDoList(_ref) {\n  let {\n    toDoList,\n    handleToggle,\n    handleFilter\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"ShoppingToDoListDiv\"\n  }, toDoList.map(todo => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShoppingToDo__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n      todo: todo,\n      handleToggle: handleToggle,\n      handleFilter: handleFilter\n    });\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: handleFilter\n  }, \"Clear Completed\"));\n}\n\n//# sourceURL=webpack:///./src/components/ShoppingList/ShoppingToDoList.js?");

/***/ }),

/***/ "./src/components/ShoppingList/data.json":
/*!***********************************************!*\
  !*** ./src/components/ShoppingList/data.json ***!
  \***********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/*! exports used: default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"id\\\":1,\\\"task\\\":\\\"Gallon of Milk\\\",\\\"complete\\\":false},{\\\"id\\\":2,\\\"task\\\":\\\"Chicken Thighs\\\",\\\"complete\\\":false},{\\\"id\\\":3,\\\"task\\\":\\\"Light Bulbs\\\",\\\"complete\\\":false},{\\\"id\\\":4,\\\"task\\\":\\\"Coke\\\",\\\"complete\\\":false},{\\\"id\\\":5,\\\"task\\\":\\\"Bananas\\\",\\\"complete\\\":false},{\\\"id\\\":6,\\\"task\\\":\\\"Wine\\\",\\\"complete\\\":false},{\\\"id\\\":7,\\\"task\\\":\\\"Hot Pockets\\\",\\\"complete\\\":false}]\");\n\n//# sourceURL=webpack:///./src/components/ShoppingList/data.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n\n\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null), app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });