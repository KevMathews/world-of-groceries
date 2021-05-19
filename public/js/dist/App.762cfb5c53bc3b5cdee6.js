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
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ShoppingList_ShoppingList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShoppingList/ShoppingList */ \"./src/components/ShoppingList/ShoppingList.js\");\n/* harmony import */ var _Products_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products/Product */ \"./src/components/Products/Product.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n/* harmony import */ var _Products_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Products/Products */ \"./src/components/Products/Products.js\");\n/* harmony import */ var _PostForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostForm */ \"./src/components/PostForm.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/Grid.js\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ \"./node_modules/@material-ui/core/esm/Box/Box.js\");\n\n\n\n\n\n\n\n\n\n\nfunction App(props) {\n  const [cart, updateCart] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const products = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    item: '',\n    brand: '',\n    units: '',\n    quantity: 0,\n    isPurchased: false\n  }]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    container: true,\n    direction: \"column\",\n    justify: \"center\",\n    alignItems: \"center\",\n    spacing: 1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    xs: 12,\n    md: 12,\n    lg: 12,\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__[/* default */ \"a\"], {\n    mt: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    xs: 12,\n    md: 12,\n    lg: 12,\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Products_Product__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    xs: 12,\n    md: 12,\n    lg: 12,\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShoppingList_ShoppingList__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], null)));\n}\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/Grid.js\");\n\n\n\nfunction Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    container: true,\n    direction: \"row\",\n    justify: \"center\",\n    alignItems: \"center\",\n    spacing: 0\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    xs: 11,\n    sm: 10,\n    md: 12,\n    lg: 12,\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"headerImage\",\n    id: \"mainLogo\",\n    src: \"./img/logo2.gif\"\n  }), \";\"));\n}\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/components/PostForm.js":
/*!************************************!*\
  !*** ./src/components/PostForm.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products */ \"./src/components/Products.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass PostForm extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    this.changeHandler = e => {\n      this.setState({\n        [e.target.name]: e.target.value\n      });\n    };\n\n    this.submitHandler = e => {\n      e.preventDefault(); // const newItem = this.state;\n      // const theProps = props.products;\n      // console.log(theProps);\n      // theProps.push(newItem);\n    };\n\n    this.state = {\n      category: '',\n      name: '',\n      cost: '',\n      image: ''\n    };\n  }\n\n  render() {\n    const {\n      category,\n      name,\n      cost,\n      image\n    } = this.state;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"postFormDiv\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: this.submitHandler\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Category:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"category\",\n      value: category,\n      onChange: this.changeHandler\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Name:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"name\",\n      value: name,\n      onChange: this.changeHandler\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Cost:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"cost\",\n      value: cost,\n      onChange: this.changeHandler\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Image\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"image\",\n      value: image,\n      onChange: this.changeHandler\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"submit\"\n    }, \"Submit\")));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (PostForm);\n\n//# sourceURL=webpack:///./src/components/PostForm.js?");

/***/ }),

/***/ "./src/components/Products.js":
/*!************************************!*\
  !*** ./src/components/Products.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export default */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Products() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"productsListDiv\"\n  }, \"Products\"));\n}\n\n//# sourceURL=webpack:///./src/components/Products.js?");

/***/ }),

/***/ "./src/components/Products/Cart.js":
/*!*****************************************!*\
  !*** ./src/components/Products/Cart.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Cart; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/Grid.js\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ \"./node_modules/@material-ui/core/esm/Box/Box.js\");\n/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ \"./node_modules/@material-ui/core/esm/Input/Input.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/Typography.js\");\n\n\n\n\n\n\nfunction Cart(_ref) {\n  let {\n    cart,\n    setCart\n  } = _ref;\n\n  const getTotalSum = () => {\n    return cart.reduce((sum, _ref2) => {\n      let {\n        cost,\n        quantity\n      } = _ref2;\n      return sum + cost * quantity;\n    }, 0);\n  };\n\n  const clearCart = () => {\n    setCart([]);\n  };\n\n  const setQuantity = (product, amount) => {\n    const newCart = [...cart];\n    newCart.find(item => item.name === product.name).quantity = amount;\n    setCart(newCart);\n  };\n\n  const removeFromCart = productToRemove => {\n    setCart(cart.filter(product => product !== productToRemove));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    mt: 2\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    container: true,\n    direction: \"row\",\n    justify: \"center\",\n    alignItems: \"center\",\n    spacing: 1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    variant: \"h6\"\n  }, \"Total Cost: $\", getTotalSum()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"totalCost\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    mt: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    container: true,\n    direction: \"row\",\n    justify: \"center\",\n    alignItems: \"center\",\n    spacing: 1\n  }, cart.map((product, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    item: true,\n    key: idx,\n    className: \"product\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    variant: \"subtitle1\",\n    justify: \"center\"\n  }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    variant: \"body2\",\n    justify: \"center\"\n  }, \"$\", product.cost), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"foodPics\",\n    src: product.image,\n    alt: product.name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    className: \"inputValue\",\n    value: product.quantity,\n    helperText: \"Set Quantity\",\n    onChange: e => setQuantity(product, parseInt(e.target.value))\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: () => removeFromCart(product)\n  }, \"Remove\"))))));\n}\n\n//# sourceURL=webpack:///./src/components/Products/Cart.js?");

/***/ }),

/***/ "./src/components/Products/Product.js":
/*!********************************************!*\
  !*** ./src/components/Products/Product.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Product; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products */ \"./src/components/Products/Products.js\");\n/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart */ \"./src/components/Products/Cart.js\");\n/* harmony import */ var _PostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PostForm */ \"./src/components/PostForm.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/Grid.js\");\n/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ \"./node_modules/@material-ui/icons/ShoppingCart.js\");\n/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_RemoveShoppingCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/RemoveShoppingCart */ \"./node_modules/@material-ui/icons/RemoveShoppingCart.js\");\n/* harmony import */ var _material_ui_icons_RemoveShoppingCart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveShoppingCart__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Store */ \"./node_modules/@material-ui/icons/Store.js\");\n/* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/Button.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst PAGE_PRODUCTS = 'products';\nconst PAGE_CART = 'cart';\nconst PAGE_ADD = 'add';\nfunction Product(props) {\n  const [cart, setCart] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(PAGE_PRODUCTS);\n\n  const navigateTo = nextPage => {\n    setPage(nextPage);\n  };\n\n  const getCartTotal = () => {\n    return cart.reduce((sum, _ref) => {\n      let {\n        quantity\n      } = _ref;\n      return sum + quantity;\n    }, 0);\n  };\n\n  const clearCart = () => {\n    setCart([]);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    container: true,\n    direction: \"row\",\n    justify: \"center\",\n    alignItems: \"center\",\n    spacing: 2\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"], {\n    onClick: () => navigateTo(PAGE_PRODUCTS),\n    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      style: {\n        marginRight: 14\n      }\n    }),\n    variant: \"contained\",\n    color: \"primary\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"], {\n    onClick: () => navigateTo(PAGE_CART),\n    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      elevation: 8\n    }),\n    variant: \"contained\",\n    size: \"small\",\n    color: \"primary\"\n  }, \"(\", getCartTotal(), \")\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"], {\n    onClick: clearCart,\n    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_RemoveShoppingCart__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      style: {\n        marginRight: -14\n      }\n    }),\n    variant: \"contained\",\n    color: \"secondary\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    container: true,\n    direction: \"row\",\n    justify: \"center\",\n    alignItems: \"center\" // spacing={12}\n    ,\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    xs: 12,\n    item: true\n  }, page === PAGE_PRODUCTS && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Products__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    cart: cart,\n    setCart: setCart\n  }), page === PAGE_CART && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cart__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    cart: cart,\n    setCart: setCart\n  }), page === PAGE_ADD && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostForm__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    cart: cart,\n    setCart: setCart\n  }))));\n}\n\n//# sourceURL=webpack:///./src/components/Products/Product.js?");

/***/ }),

/***/ "./src/components/Products/Products.js":
/*!*********************************************!*\
  !*** ./src/components/Products/Products.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Products; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ \"./node_modules/@material-ui/core/esm/Box/Box.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/Button.js\");\n/* harmony import */ var _PostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PostForm */ \"./src/components/PostForm.js\");\n/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/AddShoppingCart */ \"./node_modules/@material-ui/icons/AddShoppingCart.js\");\n/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_RemoveShoppingCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/RemoveShoppingCart */ \"./node_modules/@material-ui/icons/RemoveShoppingCart.js\");\n/* harmony import */ var _material_ui_icons_RemoveShoppingCart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveShoppingCart__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/Grid.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/Typography.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/makeStyles.js\");\n/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputLabel */ \"./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js\");\n/* harmony import */ var _material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/NativeSelect */ \"./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js\");\n/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormControl */ \"./node_modules/@material-ui/core/esm/FormControl/FormControl.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst HOME_GARDEN = 'Home and Garden';\nconst DAIRY = 'Dairy';\nconst MEAT = 'Meat';\nconst FRUITSVEGGIES = 'Fruits & Veggies';\nconst CANNEDGOODS = 'Canned Goods';\nconst FROZENFOODS = 'Frozen Foods';\nconst BEVERAGES = 'Beverages';\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"])(theme => ({\n  formControl: {\n    margin: theme.spacing(1),\n    minWidth: 120,\n    maxWidth: 300\n  },\n  chips: {\n    display: 'flex',\n    flexWrap: 'wrap'\n  },\n  chip: {\n    margin: 2\n  },\n  noLabel: {\n    marginTop: theme.spacing(3)\n  }\n}));\nfunction Products(_ref) {\n  let {\n    setCart,\n    cart\n  } = _ref;\n  const classes = useStyles();\n  const [products] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    category: FRUITSVEGGIES,\n    name: 'Banana',\n    cost: 0.39,\n    image: 'https://i.imgur.com/jJTK0bS.jpg'\n  }, {\n    category: FRUITSVEGGIES,\n    name: 'Strawberries',\n    cost: 3.99,\n    image: 'https://i.imgur.com/XoAHviU.jpg'\n  }, {\n    category: FRUITSVEGGIES,\n    name: 'Pineapple',\n    cost: 0.39,\n    image: 'https://i.imgur.com/iILIsdp.jpg'\n  }, {\n    category: FRUITSVEGGIES,\n    name: 'Bell Pepper',\n    cost: 0.79,\n    image: 'https://i.imgur.com/0LusTr7.jpg'\n  }, {\n    category: FRUITSVEGGIES,\n    name: 'Avocado',\n    cost: 0.99,\n    image: 'https://i.imgur.com/s5Jl7ZJ.jpg'\n  }, {\n    category: MEAT,\n    name: 'Ground Beef',\n    brand: '',\n    units: '1 lb',\n    instock: 30,\n    cost: 3.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/uN8Bz9P.jpg'\n  }, {\n    category: MEAT,\n    name: 'Pork Chops',\n    brand: '',\n    units: '1 lb',\n    instock: 30,\n    cost: 5.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/ZNYARmN.jpg'\n  }, {\n    category: MEAT,\n    name: 'Chicken Thighs',\n    brand: '',\n    units: '2 lb',\n    instock: 30,\n    cost: 6.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/Cnj0W7a.jpg'\n  }, {\n    category: MEAT,\n    name: 'Brats',\n    brand: '',\n    units: '5 pack',\n    instock: 30,\n    cost: 3.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/qYQ6n65.jpg'\n  }, {\n    category: MEAT,\n    name: 'Ribeye',\n    brand: '',\n    units: '2 lb',\n    instock: 30,\n    cost: 21.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/WD6jQec.jpg'\n  }, {\n    category: CANNEDGOODS,\n    name: 'Corn',\n    brand: '',\n    units: '16 oz',\n    instock: 30,\n    cost: 1.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/mjxOSbh.jpg'\n  }, {\n    category: CANNEDGOODS,\n    name: 'Chicken Noodle',\n    brand: 'Progressive',\n    units: '16 oz',\n    instock: 30,\n    cost: 2.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/mrrKwFg.jpg'\n  }, {\n    category: CANNEDGOODS,\n    name: 'Clam Chowder',\n    brand: 'Progressive',\n    units: '16 oz',\n    instock: 30,\n    cost: 2.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/0vWvtIk.jpg'\n  }, {\n    category: CANNEDGOODS,\n    name: 'Baked Beans',\n    brand: \"Bush's\",\n    units: '16 oz',\n    instock: 30,\n    cost: 1.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/EIEdnjd.png'\n  }, {\n    category: CANNEDGOODS,\n    name: 'Pasta Sauce',\n    brand: 'Bertolli',\n    units: '20 oz',\n    instock: 30,\n    cost: 1.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/aKK2IB4.jpg'\n  }, {\n    category: FROZENFOODS,\n    name: 'Chicken Strips',\n    brand: 'Tyson',\n    units: '2 lbs',\n    instock: 30,\n    cost: 8.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/9qiHoIh.jpg'\n  }, {\n    category: FROZENFOODS,\n    name: 'Mini Corn Dogs',\n    brand: '',\n    units: '2 lbs',\n    instock: 30,\n    cost: 6.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/VT5I78i.jpg'\n  }, {\n    category: FROZENFOODS,\n    name: 'Hot Pockets',\n    brand: 'Tyson',\n    units: '2 pack',\n    instock: 30,\n    cost: 3.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/53RMfnm.jpg'\n  }, {\n    category: FROZENFOODS,\n    name: 'Cauliflower Mac',\n    brand: 'Tyson',\n    units: '16 oz',\n    instock: 30,\n    cost: 4.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/VelLDBY.jpg'\n  }, {\n    category: FROZENFOODS,\n    name: 'Pad Thai',\n    brand: '',\n    units: '16 oz',\n    instock: 30,\n    cost: 3.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/XG6BPG8.jpg'\n  }, {\n    category: DAIRY,\n    name: 'Milk',\n    brand: 'DairyPure',\n    units: '1 Gallon',\n    instock: 30,\n    cost: 3.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/Jah0pQA.jpg'\n  }, {\n    category: DAIRY,\n    name: 'Eggs',\n    brand: 'Great Value',\n    units: '18 eggs',\n    instock: 30,\n    cost: 2.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/KTYjv1N.jpg'\n  }, {\n    category: DAIRY,\n    name: 'Swiss Cheese',\n    brand: 'Kraft',\n    units: '16 slices',\n    instock: 30,\n    cost: 2.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/SBoerDZ.jpg'\n  }, {\n    category: DAIRY,\n    name: 'String Cheese',\n    brand: 'DairyPure',\n    units: '24 pack',\n    instock: 30,\n    cost: 3.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/D8lLO4z.jpg'\n  }, {\n    category: BEVERAGES,\n    name: 'Fat Tire Beer',\n    brand: 'Fat Tire',\n    units: '6 12oz bottles',\n    instock: 30,\n    cost: 10.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/hXgOaZb.jpg'\n  }, {\n    category: BEVERAGES,\n    name: 'Apothic Red',\n    brand: 'Apothic',\n    units: '750ml',\n    instock: 30,\n    cost: 9.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/c4R6ouY.jpg'\n  }, {\n    category: BEVERAGES,\n    name: 'Pink Lemonade',\n    brand: 'Simply',\n    units: '1 Gallon',\n    instock: 30,\n    cost: 4.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/4UBfRDf.jpg'\n  }, {\n    category: BEVERAGES,\n    name: 'Orange Juice',\n    brand: 'Sunny D',\n    units: '1 Gallon',\n    instock: 30,\n    cost: 4.59,\n    isPurchased: false,\n    image: 'https://i.imgur.com/imXSGFx.jpg'\n  }, {\n    category: BEVERAGES,\n    name: 'Coke',\n    brand: 'Coca Cola',\n    units: '12oz 24 pack',\n    instock: 30,\n    cost: 8.99,\n    isPurchased: false,\n    image: 'https://i.imgur.com/uqBAixr.jpg'\n  }]);\n\n  const addToCart = product => {\n    let newCart = [...cart];\n    let itemInCart = newCart.find(item => product.name === item.name);\n\n    if (itemInCart) {\n      itemInCart.quantity++;\n      product.instock--;\n    } else {\n      itemInCart = _objectSpread(_objectSpread({}, product), {}, {\n        quantity: 1\n      });\n      newCart.push(itemInCart); // product.quantity--;\n    }\n\n    setCart(newCart);\n  };\n\n  const removeFromCart = product => {\n    let newCart = [...cart];\n    let itemInCart = newCart.find(item => product.name === item.name);\n\n    if (itemInCart) {\n      itemInCart.quantity--;\n      product.instock--;\n    } else if (!itemInCart) {\n      itemInCart = _objectSpread({}, product);\n      newCart.push(itemInCart); // product.quantity--;\n    }\n\n    setCart(newCart);\n  };\n\n  const [category, setCategory] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(FRUITSVEGGIES);\n\n  const getProductsInCategory = () => {\n    return products.filter(product => product.category === category);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    mt: 1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    container: true,\n    direction: \"column\",\n    justify: \"center\",\n    alignItems: \"center\",\n    spacing: 0\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    item: true,\n    xs: 9,\n    sm: 9\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__[/* default */ \"a\"], {\n    className: classes.formControl\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__[/* default */ \"a\"], {\n    htmlFor: \"select\"\n  }, \"Select a category:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__[/* default */ \"a\"], {\n    id: \"select\",\n    onChange: e => setCategory(e.target.value)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    id: \"selVal\",\n    value: FRUITSVEGGIES\n  }, FRUITSVEGGIES), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    id: \"selVal\",\n    value: DAIRY\n  }, DAIRY), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    id: \"selVal\",\n    value: MEAT\n  }, MEAT), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    id: \"selVal\",\n    value: CANNEDGOODS\n  }, CANNEDGOODS), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    id: \"selVal\",\n    value: FROZENFOODS\n  }, FROZENFOODS), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    id: \"selVal\",\n    value: BEVERAGES\n  }, BEVERAGES)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    mt: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    container: true,\n    direction: \"row\",\n    justify: \"center\",\n    alignItems: \"center\",\n    spacing: 2,\n    item: true\n  }, getProductsInCategory().map((product, cost) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    item: true,\n    key: cost,\n    className: \"product\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[/* default */ \"a\"], {\n    variant: \"subtitle1\",\n    justify: \"center\"\n  }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[/* default */ \"a\"], {\n    variant: \"body2\"\n  }, \"$\", product.cost), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"foodPics\",\n    src: product.image,\n    alt: product.name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    size: \"small\",\n    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_RemoveShoppingCart__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      style: {\n        marginRight: -14\n      }\n    }),\n    variant: \"contained\",\n    style: {\n      backgroundColor: 'red',\n      color: '#FFFFFF'\n    },\n    onClick: () => removeFromCart(product),\n    className: \"minusButton\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    size: \"small\",\n    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      style: {\n        marginRight: -14\n      }\n    }),\n    variant: \"contained\",\n    style: {\n      backgroundColor: '#12824C',\n      color: '#FFFFFF'\n    },\n    onClick: () => addToCart(product),\n    className: \"addButton\"\n  }))))));\n}\n\n//# sourceURL=webpack:///./src/components/Products/Products.js?");

/***/ }),

/***/ "./src/components/ShoppingList/ShoppingList.js":
/*!*****************************************************!*\
  !*** ./src/components/ShoppingList/ShoppingList.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ShoppingList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.json */ \"./src/components/ShoppingList/data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ \"./src/components/ShoppingList/data.json\", 1);\n/* harmony import */ var _ShoppingToDoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShoppingToDoList */ \"./src/components/ShoppingList/ShoppingToDoList.js\");\n/* harmony import */ var _ShoppingToDoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShoppingToDoForm */ \"./src/components/ShoppingList/ShoppingToDoForm.js\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ \"./node_modules/@material-ui/core/esm/Box/Box.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/makeStyles.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/Card/Card.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/CardContent/CardContent.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/Typography/Typography.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/CardActions/CardActions.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n // import Tablet from '/public/img/tablet2.png';\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"])({\n  root: {\n    width: 900,\n    maxWidth: '100%',\n    border: 'solid',\n    borderWidth: 2,\n    borderRadius: 10,\n    marginTop: 10,\n    textAlign: 'center'\n  },\n  bullet: {\n    display: 'inline-block',\n    margin: '0 2px',\n    transform: 'scale(0.8)'\n  },\n  title: {\n    fontSize: 19,\n    color: 'white'\n  },\n  pos: {\n    marginBottom: 12\n  }\n});\nfunction ShoppingList() {\n  const [toDoList, setToDoList] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(_data_json__WEBPACK_IMPORTED_MODULE_1__);\n  const classes = useStyles();\n  const bull = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: classes.bullet\n  }, \"\\u2022\");\n\n  const handleToggle = id => {\n    let mapped = toDoList.map(task => {\n      return task.id === Number(id) ? _objectSpread(_objectSpread({}, task), {}, {\n        complete: !task.complete\n      }) : _objectSpread({}, task);\n    });\n    setToDoList(mapped);\n  };\n\n  const handleFilter = () => {\n    let filtered = toDoList.filter(task => {\n      return !task.complete;\n    });\n    setToDoList(filtered);\n  };\n\n  const addTask = userInput => {\n    let copy = [...toDoList];\n    copy = [...copy, {\n      id: toDoList.length + 1,\n      task: userInput,\n      complete: false\n    }];\n    setToDoList(copy);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    className: classes.root,\n    elevation: 8\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    boxShadow: 8\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ \"a\"], {\n    className: classes.title,\n    style: {\n      backgroundColor: 'blue'\n    },\n    title: \"Shopping List\",\n    color: \"white\",\n    elevation: 8\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[/* default */ \"a\"], {\n    className: classes.pos,\n    color: \"textSecondary\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[/* default */ \"a\"], {\n    variant: \"body2\",\n    component: \"p\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShoppingToDoList__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    toDoList: toDoList,\n    handleToggle: handleToggle,\n    handleFilter: handleFilter\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShoppingToDoForm__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    addTask: addTask\n  }))));\n}\n\n//# sourceURL=webpack:///./src/components/ShoppingList/ShoppingList.js?");

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
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ShoppingToDoForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/Grid.js\");\n\n\nfunction ShoppingToDoForm(_ref) {\n  let {\n    addTask\n  } = _ref;\n  const [userInput, setUserInput] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const handleChange = e => {\n    setUserInput(e.currentTarget.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    addTask(userInput);\n    setUserInput('');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    container: true,\n    direction: \"column\",\n    justify: \"center\",\n    alignItems: \"center\",\n    spacing: 0,\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    xs: 12,\n    sm: 12,\n    md: 12,\n    lg: 12,\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    value: userInput,\n    type: \"text\",\n    onChange: handleChange,\n    placeholder: \"Enter Groceries...\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Submit\"))));\n}\n\n//# sourceURL=webpack:///./src/components/ShoppingList/ShoppingToDoForm.js?");

/***/ }),

/***/ "./src/components/ShoppingList/ShoppingToDoList.js":
/*!*********************************************************!*\
  !*** ./src/components/ShoppingList/ShoppingToDoList.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ShoppingToDoList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ShoppingToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShoppingToDo */ \"./src/components/ShoppingList/ShoppingToDo.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/Grid.js\");\n\n\n\nfunction ShoppingToDoList(_ref) {\n  let {\n    toDoList,\n    handleToggle,\n    handleFilter\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    container: true,\n    direction: \"row\",\n    justify: \"center\",\n    alignItems: \"center\",\n    spacing: 1,\n    item: true\n  }, toDoList.map(todo => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n      xs: 1,\n      sm: 1,\n      md: 1,\n      lg: 1,\n      item: true,\n      className: \"groceryList\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShoppingToDo__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n      todo: todo,\n      handleToggle: handleToggle,\n      handleFilter: handleFilter\n    })));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    container: true,\n    direction: \"column\",\n    justify: \"center\",\n    alignItems: \"center\",\n    spacing: 1,\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    xs: 3,\n    sm: 3,\n    md: 3,\n    lg: 3,\n    item: true,\n    className: \"groceryList2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: handleFilter\n  }, \"Clear Completed\"))));\n}\n\n//# sourceURL=webpack:///./src/components/ShoppingList/ShoppingToDoList.js?");

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