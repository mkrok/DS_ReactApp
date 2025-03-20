/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/bizcard/bizcard.js":
/*!*******************************************!*\
  !*** ./src/components/bizcard/bizcard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ \"./src/components/bizcard/template.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _wrapNativeSuper(t) { var r = \"function\" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if (\"function\" != typeof t) throw new TypeError(\"Super expression must either be null or a function\"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }\nfunction _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf(\"[native code]\"); } catch (n) { return \"function\" == typeof t; } }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\n\nvar BizCard = /*#__PURE__*/function (_HTMLElement) {\n  function BizCard() {\n    _classCallCheck(this, BizCard);\n    return _callSuper(this, BizCard, arguments);\n  }\n  _inherits(BizCard, _HTMLElement);\n  return _createClass(BizCard, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.innerHTML = _template_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render({\n        first_name: 'Emmett',\n        last_name: 'Brown',\n        title: 'Student of all Sciences',\n        phone: '555-4385',\n        email: 'emmett@docbrown.flux',\n        website: 'www.docbrown.flux'\n      });\n    }\n  }]);\n}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));\nif (!customElements.get('biz-card')) {\n  customElements.define('biz-card', BizCard);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BizCard);\n\n//# sourceURL=webpack://DS_Runner/./src/components/bizcard/bizcard.js?");

/***/ }),

/***/ "./src/components/bizcard/template.js":
/*!********************************************!*\
  !*** ./src/components/bizcard/template.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  render: function render(props) {\n    return \"\".concat(this.html(props), \"\\n                \").concat(this.css(props));\n  },\n  html: function html(p) {\n    return \" <div class=\\\"biz-card\\\">\\n                    <div class=\\\"logo\\\"></div>\\n                    <div class=\\\"top-text\\\">\\n                        <h1>\".concat(p.first_name, \" \").concat(p.last_name, \"</h1>\\n                        <h3>\").concat(p.title, \"</h3>\\n                    </div>\\n                \\n                    <div class=\\\"bottom-text\\\">\\n                        <h3>phone: \").concat(p.phone, \"</h3>\\n                        <h3>\").concat(p.email, \" / \").concat(p.website, \"</h3>\\n                    </div>\\n                </div>\");\n  },\n  css: function css(p) {\n    return \"<style>\\n                        .biz-card {\\n                            font-size: 16px;\\n                            font-family: sans-serif;\\n                            color: white;\\n                            width: 700px;\\n                            height: 400px;\\n                            display: inline-block;\\n                            border-color: #9a9a9a;\\n                            background-size: 5%;\\n                            background-image: url(\\\"background-pattern.png\\\");\\n                            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n                        }\\n                    \\n                        .biz-card .logo {\\n                            height: 100px;\\n                            margin-top: 10%;\\n                            text-align: center;\\n                            background-image: url(\\\"biz-card-logo.png\\\");\\n                            background-size: contain;\\n                            background-position-x: center;\\n                            background-repeat: no-repeat;\\n                        }\\n                    \\n                        .biz-card .top-text {\\n                            text-align: center;\\n                        }\\n                    \\n                        .biz-card .top-text h1 {\\n                            font-size: 2.5em;\\n                            margin-bottom: 0;\\n                        }\\n                    \\n                        .biz-card .top-text h3 {\\n                            margin: 0;\\n                        }\\n                    \\n                        .biz-card .bottom-text {\\n                            text-align: center;\\n                            margin-top: 10%;\\n                        }\\n                    \\n                        .biz-card .bottom-text h3 {\\n                            margin: 0;\\n                        }\\n                    </style>\";\n  }\n});\n\n//# sourceURL=webpack://DS_Runner/./src/components/bizcard/template.js?");

/***/ }),

/***/ "./src/components/button/button.js":
/*!*****************************************!*\
  !*** ./src/components/button/button.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ \"./src/components/button/template.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _wrapNativeSuper(t) { var r = \"function\" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if (\"function\" != typeof t) throw new TypeError(\"Super expression must either be null or a function\"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }\nfunction _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf(\"[native code]\"); } catch (n) { return \"function\" == typeof t; } }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\n\nvar MkButton = /*#__PURE__*/function (_HTMLElement) {\n  function MkButton() {\n    _classCallCheck(this, MkButton);\n    return _callSuper(this, MkButton, arguments);\n  }\n  _inherits(MkButton, _HTMLElement);\n  return _createClass(MkButton, [{\n    key: \"onclick\",\n    value: function onclick() {\n      alert('clicked!');\n      console.log(this.getAttribute('custom'));\n    }\n  }, {\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.innerHTML = _template_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render({\n        title: 'Click me!',\n        color: this.getAttribute('bg-color') || 'red'\n      });\n      this.addEventListener('click', this.onclick);\n      console.log(this.getAttribute('custom'));\n    }\n  }]);\n}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));\nif (!customElements.get('mk-button')) {\n  customElements.define('mk-button', MkButton);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MkButton);\n\n//# sourceURL=webpack://DS_Runner/./src/components/button/button.js?");

/***/ }),

/***/ "./src/components/button/template.js":
/*!*******************************************!*\
  !*** ./src/components/button/template.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  render: function render(props) {\n    return \"\".concat(this.html(props), \"\\n            \").concat(this.css(props));\n  },\n  html: function html(p) {\n    return \"<button>\".concat(p.title, \"</button>\");\n  },\n  css: function css(p) {\n    return \"<style>\\n      button {\\n        background-color: \".concat(p.color || '#444', \";\\n        color: white;\\n        padding: 1em;\\n        font-size: \").concat(p.size === 'large' ? '2em' : '1em', \";\\n        margin: 10px;\\n      }\\n    </style>\");\n  }\n});\n\n//# sourceURL=webpack://DS_Runner/./src/components/button/template.js?");

/***/ }),

/***/ "./src/runner.js":
/*!***********************!*\
  !*** ./src/runner.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/button/button */ \"./src/components/button/button.js\");\n/* harmony import */ var _components_bizcard_bizcard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/bizcard/bizcard */ \"./src/components/bizcard/bizcard.js\");\n\n\n\n//# sourceURL=webpack://DS_Runner/./src/runner.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/runner.js");
/******/ 	
/******/ })()
;