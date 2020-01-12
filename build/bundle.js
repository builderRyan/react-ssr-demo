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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _require = __webpack_require__(/*! ./utils */ \"./utils.js\"),\n    getIPAdress = _require.getIPAdress;\n\nvar ip = getIPAdress();\n\nmodule.exports = {\n  domain: 'http://' + ip,\n  secret: 'ssr_2020'\n};\n\n//# sourceURL=webpack:///./config.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/component/Header/style/Header.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/component/Header/style/Header.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".Header_header_hfKsB {\\r\\n  height: 60px;\\r\\n  line-height: 60px;\\r\\n  background: #fff;\\r\\n  padding: 0 20px;\\r\\n}\\r\\n\\r\\n.Header_nav-item_2b6P7 {\\r\\n  font-size: 16px;\\r\\n  color: #333;\\r\\n  cursor: pointer;\\r\\n  text-decoration: none;\\r\\n  margin-right: 20px;\\r\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"header\": \"Header_header_hfKsB\",\n\t\"nav-item\": \"Header_nav-item_2b6P7\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/component/Header/style/Header.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/container/Favorites/style/Favorites.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/container/Favorites/style/Favorites.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".Favorites_favorites_3pGQw {\\r\\n  padding: 0 20px;\\r\\n}\\r\\n\\r\\n.Favorites_item_37wuU {\\r\\n  line-height: 45px;\\r\\n  font-size: 16px;\\r\\n  color: #333;\\r\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"favorites\": \"Favorites_favorites_3pGQw\",\n\t\"item\": \"Favorites_item_37wuU\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/container/Favorites/style/Favorites.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/container/Home/style/Home.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/container/Home/style/Home.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\r\\n* {\\r\\n  font-size: inherit;\\r\\n  font-weight: normal;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.Home_home_20VPb {\\r\\n  background: #fff;\\r\\n  padding: 0 20px;\\r\\n}\\r\\n\\r\\n.Home_item_3efx9 {\\r\\n  line-height: 45px;\\r\\n  font-size: 16px;\\r\\n  color: #333;\\r\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"home\": \"Home_home_20VPb\",\n\t\"item\": \"Home_item_3efx9\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/container/Home/style/Home.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _component = __webpack_require__(/*! ./component */ \"./src/component/index.js\");\n\nvar _store = __webpack_require__(/*! ./component/Header/store/ */ \"./src/component/Header/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(props) {\n  // console.log(props)\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_component.Header, { staticContext: props.staticContext }),\n    (0, _reactRouterConfig.renderRoutes)(props.route.routes)\n  );\n};\n\nApp.loadData = function (store) {\n  // 这个函数负责在服务器端渲染之前，把这个路由需要的数据提前加载好\n  return store.dispatch(_store.headerActions.getLoginInfo());\n};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _Home = __webpack_require__(/*! ./container/Home */ \"./src/container/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./container/Login */ \"./src/container/Login/index.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Favorites = __webpack_require__(/*! ./container/Favorites */ \"./src/container/Favorites/index.js\");\n\nvar _Favorites2 = _interopRequireDefault(_Favorites);\n\nvar _ = __webpack_require__(/*! ./container/404 */ \"./src/container/404/index.js\");\n\nvar _2 = _interopRequireDefault(_);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const Routers = (\n//   <div>\n//     <Route path='/' exact component={Home} />\n//     <Route path='/login' exact component={Login} />\n//   </div>\n// )\n\n// 当我加载显示Home组件之前， 我希望调用Home.loadData方法，提前获取到必要的异步数据\n// 然后再做服务器端渲染，把页面返回给用户\n\nexports.default = [{\n  path: '/',\n  component: _App2.default,\n  loadData: _App2.default.loadData,\n  key: 'app',\n  routes: [{\n    path: '/',\n    component: _Home2.default,\n    exact: true,\n    loadData: _Home2.default.loadData,\n    key: 'home'\n  }, {\n    path: '/login',\n    component: _Login2.default,\n    exact: true,\n    key: 'login'\n  }, {\n    path: '/favorites',\n    component: _Favorites2.default,\n    exact: true,\n    loadData: _Favorites2.default.loadData,\n    key: 'favorites'\n  }, {\n    component: _2.default\n  }]\n}];\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _config = __webpack_require__(/*! ../../config */ \"./config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar request = _axios2.default.create({\n  baseURL: '/',\n  withCredentials: true,\n  timeout: 5000,\n  params: {\n    ID: 12345\n  }\n});\n\nexports.default = request;\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/component/Header/index.js":
/*!***************************************!*\
  !*** ./src/component/Header/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _store = __webpack_require__(/*! ./store/ */ \"./src/component/Header/store/index.js\");\n\nvar _withStyle = __webpack_require__(/*! ../../hoc/withStyle */ \"./src/hoc/withStyle.js\");\n\nvar _withStyle2 = _interopRequireDefault(_withStyle);\n\nvar _Header = __webpack_require__(/*! ./style/Header.css */ \"./src/component/Header/style/Header.css\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_Component) {\n  _inherits(Header, _Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          login = _props.login,\n          handleLogin = _props.handleLogin,\n          handleLogout = _props.handleLogout;\n\n\n      return _react2.default.createElement(\n        'div',\n        { className: _Header2.default.header },\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/', className: _Header2.default['nav-item'] },\n          '\\u9996\\u9875'\n        ),\n        login ? _react2.default.createElement(\n          _react.Fragment,\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/favorites', className: _Header2.default['nav-item'] },\n            '\\u6536\\u85CF\\u5217\\u8868'\n          ),\n          _react2.default.createElement(\n            'a',\n            { className: _Header2.default['nav-item'], onClick: handleLogout },\n            '\\u9000\\u51FA'\n          )\n        ) : _react2.default.createElement(\n          'a',\n          { className: _Header2.default['nav-item'], onClick: handleLogin },\n          '\\u767B\\u5F55'\n        )\n      );\n    }\n  }]);\n\n  return Header;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    login: state.header.login\n  };\n};\n\nvar mapDisPatchToProps = function mapDisPatchToProps(dispatch) {\n  return {\n    handleLogin: function handleLogin() {\n      dispatch(_store.headerActions.login());\n    },\n    handleLogout: function handleLogout() {\n      dispatch(_store.headerActions.logout());\n    }\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDisPatchToProps)((0, _withStyle2.default)(Header, _Header2.default));\n\n//# sourceURL=webpack:///./src/component/Header/index.js?");

/***/ }),

/***/ "./src/component/Header/store/actions.js":
/*!***********************************************!*\
  !*** ./src/component/Header/store/actions.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.logout = exports.login = exports.getLoginInfo = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/component/Header/store/constants.js\");\n\nvar changeLogin = function changeLogin(value) {\n  return {\n    type: _constants.CHANGE_LOGIN,\n    value: value\n  };\n};\n\nvar getLoginInfo = exports.getLoginInfo = function getLoginInfo() {\n  return function (dispatch, getState, request) {\n    return request.get('/api/getLoginInfo').then(function (res) {\n      var value = res.data.data;\n      dispatch(changeLogin(value));\n    });\n  };\n};\n\nvar login = exports.login = function login() {\n  return function (dispatch, getState, request) {\n    return request.get('/api/login').then(function (res) {\n      if (res.data.ret === 0) {\n        dispatch(changeLogin(true));\n      }\n    });\n  };\n};\n\nvar logout = exports.logout = function logout() {\n  return function (dispatch, getState, request) {\n    return request.get('/api/logout').then(function (res) {\n      if (res.data.ret === 0) {\n        dispatch(changeLogin(false));\n      }\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/component/Header/store/actions.js?");

/***/ }),

/***/ "./src/component/Header/store/constants.js":
/*!*************************************************!*\
  !*** ./src/component/Header/store/constants.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LOGIN = exports.CHANGE_LOGIN = 'change_login';\n\n//# sourceURL=webpack:///./src/component/Header/store/constants.js?");

/***/ }),

/***/ "./src/component/Header/store/index.js":
/*!*********************************************!*\
  !*** ./src/component/Header/store/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.headerActions = exports.headerReducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/component/Header/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/component/Header/store/actions.js\");\n\nvar headerActions = _interopRequireWildcard(_actions);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.headerReducer = _reducer2.default;\nexports.headerActions = headerActions;\n\n//# sourceURL=webpack:///./src/component/Header/store/index.js?");

/***/ }),

/***/ "./src/component/Header/store/reducer.js":
/*!***********************************************!*\
  !*** ./src/component/Header/store/reducer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/component/Header/store/constants.js\");\n\nvar defaultState = {\n  login: true\n};\n\nvar headerReducer = function headerReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.CHANGE_LOGIN:\n      return _extends({}, state, {\n        login: action.value\n      });\n    default:\n      return state;\n  }\n};\n\nexports.default = headerReducer;\n\n//# sourceURL=webpack:///./src/component/Header/store/reducer.js?");

/***/ }),

/***/ "./src/component/Header/style/Header.css":
/*!***********************************************!*\
  !*** ./src/component/Header/style/Header.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Header.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/component/Header/style/Header.css\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/component/Header/style/Header.css?");

/***/ }),

/***/ "./src/component/index.js":
/*!********************************!*\
  !*** ./src/component/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Header = __webpack_require__(/*! ./Header */ \"./src/component/Header/index.js\");\n\nObject.defineProperty(exports, 'Header', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Header).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/component/index.js?");

/***/ }),

/***/ "./src/container/404/index.js":
/*!************************************!*\
  !*** ./src/container/404/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NotFound = function (_Component) {\n  _inherits(NotFound, _Component);\n\n  function NotFound(props) {\n    _classCallCheck(this, NotFound);\n\n    var _this = _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, props));\n\n    var staticContext = props.staticContext;\n\n    staticContext && (staticContext.pageName = 404);\n    return _this;\n  }\n\n  _createClass(NotFound, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        '404, Not Found!'\n      );\n    }\n  }]);\n\n  return NotFound;\n}(_react.Component);\n\nexports.default = NotFound;\n\n//# sourceURL=webpack:///./src/container/404/index.js?");

/***/ }),

/***/ "./src/container/Favorites/index.js":
/*!******************************************!*\
  !*** ./src/container/Favorites/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/container/Favorites/store/actions.js\");\n\nvar _Favorites = __webpack_require__(/*! ./style/Favorites.css */ \"./src/container/Favorites/style/Favorites.css\");\n\nvar _Favorites2 = _interopRequireDefault(_Favorites);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Favorites = function (_Component) {\n  _inherits(Favorites, _Component);\n\n  function Favorites() {\n    _classCallCheck(this, Favorites);\n\n    return _possibleConstructorReturn(this, (Favorites.__proto__ || Object.getPrototypeOf(Favorites)).apply(this, arguments));\n  }\n\n  _createClass(Favorites, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      if (!this.props.list.length) {\n        this.props.getList();\n      }\n    }\n  }, {\n    key: 'renderList',\n    value: function renderList() {\n      var list = this.props.list;\n\n      return list.map(function (item) {\n        return _react2.default.createElement(\n          'p',\n          { key: item.id, className: _Favorites2.default.item },\n          item.title\n        );\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var login = this.props.login;\n\n\n      if (login) {\n        return _react2.default.createElement(\n          'div',\n          { className: _Favorites2.default.favorites },\n          _react2.default.createElement(\n            _reactHelmet.Helmet,\n            null,\n            _react2.default.createElement(\n              'title',\n              null,\n              '\\u8BB0\\u5F55\\u7F8E\\u597D\\u751F\\u6D3B'\n            ),\n            _react2.default.createElement('meta', { name: 'description', content: '\\u540C\\u4E00\\u4E2A\\u4E16\\u754C\\uFF0C\\u540C\\u4E00\\u4E2A\\u68A6\\u60F3' })\n          ),\n          this.renderList()\n        );\n      }\n\n      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n    }\n  }]);\n\n  return Favorites;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    login: state.header.login,\n    list: state.favorites.favoritesList\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getList: function getList() {\n      dispatch((0, _actions.getFavoritesList)());\n    }\n  };\n};\n\nvar DecoratedFavorites = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Favorites);\n\nDecoratedFavorites.loadData = function (store) {\n  // 这个函数负责在服务器端渲染之前，把这个路由需要的数据提前加载好\n  return store.dispatch((0, _actions.getFavoritesList)());\n};\n\nexports.default = DecoratedFavorites;\n\n//# sourceURL=webpack:///./src/container/Favorites/index.js?");

/***/ }),

/***/ "./src/container/Favorites/store/actions.js":
/*!**************************************************!*\
  !*** ./src/container/Favorites/store/actions.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getFavoritesList = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/container/Favorites/store/constants.js\");\n\nvar favoritesList = function favoritesList(list) {\n  return {\n    type: _constants.CHANGE_FAVORITESLIST_LIST,\n    list: list\n  };\n};\n\nvar getFavoritesList = exports.getFavoritesList = function getFavoritesList() {\n  return function (dispatch, getState, request) {\n    return request.get('/api/getFavoritesList').then(function (res) {\n      var list = res.data.data;\n      dispatch(favoritesList(list));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/container/Favorites/store/actions.js?");

/***/ }),

/***/ "./src/container/Favorites/store/constants.js":
/*!****************************************************!*\
  !*** ./src/container/Favorites/store/constants.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_FAVORITESLIST_LIST = exports.CHANGE_FAVORITESLIST_LIST = 'change_favorites_list';\n\n//# sourceURL=webpack:///./src/container/Favorites/store/constants.js?");

/***/ }),

/***/ "./src/container/Favorites/store/index.js":
/*!************************************************!*\
  !*** ./src/container/Favorites/store/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.favoritesReducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/container/Favorites/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.favoritesReducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/container/Favorites/store/index.js?");

/***/ }),

/***/ "./src/container/Favorites/store/reducer.js":
/*!**************************************************!*\
  !*** ./src/container/Favorites/store/reducer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/container/Favorites/store/constants.js\");\n\nvar defaultState = {\n  favoritesList: []\n};\n\nvar favoritesReducer = function favoritesReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var actions = arguments[1];\n\n  switch (actions.type) {\n    case _constants.CHANGE_FAVORITESLIST_LIST:\n      return _extends({}, state, {\n        favoritesList: actions.list\n      });\n    default:\n      return state;\n  }\n};\n\nexports.default = favoritesReducer;\n\n//# sourceURL=webpack:///./src/container/Favorites/store/reducer.js?");

/***/ }),

/***/ "./src/container/Favorites/style/Favorites.css":
/*!*****************************************************!*\
  !*** ./src/container/Favorites/style/Favorites.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Favorites.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/container/Favorites/style/Favorites.css\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/container/Favorites/style/Favorites.css?");

/***/ }),

/***/ "./src/container/Home/index.js":
/*!*************************************!*\
  !*** ./src/container/Home/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/container/Home/store/actions.js\");\n\nvar _withStyle = __webpack_require__(/*! ../../hoc/withStyle */ \"./src/hoc/withStyle.js\");\n\nvar _withStyle2 = _interopRequireDefault(_withStyle);\n\nvar _Home = __webpack_require__(/*! ./style/Home.css */ \"./src/container/Home/style/Home.css\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      if (!this.props.list.length) {\n        this.props.getList();\n      }\n    }\n  }, {\n    key: 'renderList',\n    value: function renderList() {\n      var list = this.props.list;\n\n      return list.map(function (item) {\n        return _react2.default.createElement(\n          'p',\n          {\n            key: item.id,\n            className: _Home2.default.item\n          },\n          item.title\n        );\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var name = this.props.name;\n\n      return _react2.default.createElement(\n        'div',\n        { className: _Home2.default.home },\n        _react2.default.createElement(\n          _reactHelmet.Helmet,\n          null,\n          _react2.default.createElement(\n            'title',\n            null,\n            '\\u53D1\\u73B0\\u66F4\\u591A\\u4F18\\u8D28\\u5185\\u5BB9'\n          ),\n          _react2.default.createElement('meta', { name: 'description', content: '\\u6613\\u83B7\\u5F97\\u7684\\u4F18\\u8D28\\u5185\\u5BB9\\uFF0C\\u57FA\\u4E8E\\u95EE\\u7B54\\u7684\\u5185\\u5BB9\\u751F\\u4EA7\\u65B9\\u5F0F\\u548C\\u72EC\\u7279\\u7684\\u793E\\u533A\\u673A\\u5236' })\n        ),\n        this.renderList(),\n        _react2.default.createElement(\n          'button',\n          {\n            onClick: function onClick() {\n              alert(2019);\n            }\n          },\n          'click'\n        )\n      );\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    name: state.home.name,\n    list: state.home.newsList\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getList: function getList() {\n      dispatch((0, _actions.getNewsList)());\n    }\n  };\n};\n\nvar DecoratedHome = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _withStyle2.default)(Home, _Home2.default));\n\nDecoratedHome.loadData = function (store) {\n  // 这个函数负责在服务器端渲染之前，把这个路由需要的数据提前加载好\n  return store.dispatch((0, _actions.getNewsList)());\n};\n\nexports.default = DecoratedHome;\n\n//# sourceURL=webpack:///./src/container/Home/index.js?");

/***/ }),

/***/ "./src/container/Home/store/actions.js":
/*!*********************************************!*\
  !*** ./src/container/Home/store/actions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getNewsList = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/container/Home/store/constants.js\");\n\nvar createGetListAction = function createGetListAction(list) {\n  return {\n    type: _constants.CHANGE_NEWS_LIST,\n    list: list\n  };\n};\n\nvar getNewsList = exports.getNewsList = function getNewsList() {\n  return function (dispatch, getState, request) {\n    return request.get('/api/getNewsList').then(function (res) {\n      var list = res.data.data;\n      dispatch(createGetListAction(list));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/container/Home/store/actions.js?");

/***/ }),

/***/ "./src/container/Home/store/constants.js":
/*!***********************************************!*\
  !*** ./src/container/Home/store/constants.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_NEWS_LIST = exports.CHANGE_NEWS_LIST = 'change_news_list';\n\n//# sourceURL=webpack:///./src/container/Home/store/constants.js?");

/***/ }),

/***/ "./src/container/Home/store/index.js":
/*!*******************************************!*\
  !*** ./src/container/Home/store/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.homeReducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/container/Home/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.homeReducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/container/Home/store/index.js?");

/***/ }),

/***/ "./src/container/Home/store/reducer.js":
/*!*********************************************!*\
  !*** ./src/container/Home/store/reducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/container/Home/store/constants.js\");\n\nvar defaultState = {\n  name: 'abc',\n  newsList: []\n};\n\nvar homeReducer = function homeReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var actions = arguments[1];\n\n  switch (actions.type) {\n    case _constants.CHANGE_NEWS_LIST:\n      return _extends({}, state, {\n        newsList: actions.list\n      });\n    default:\n      return state;\n  }\n};\n\nexports.default = homeReducer;\n\n//# sourceURL=webpack:///./src/container/Home/store/reducer.js?");

/***/ }),

/***/ "./src/container/Home/style/Home.css":
/*!*******************************************!*\
  !*** ./src/container/Home/style/Home.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Home.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/container/Home/style/Home.css\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/container/Home/style/Home.css?");

/***/ }),

/***/ "./src/container/Login/index.js":
/*!**************************************!*\
  !*** ./src/container/Login/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Login = function Login(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h3',\n      null,\n      'login page'\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      'props.name:' + props.name\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    name: state.name\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    dispatch: dispatch\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);\n\n//# sourceURL=webpack:///./src/container/Login/index.js?");

/***/ }),

/***/ "./src/hoc/withStyle.js":
/*!******************************!*\
  !*** ./src/hoc/withStyle.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nexports.default = function (DecoratedComponent, style) {\n  return function (_Component) {\n    _inherits(StyleComponent, _Component);\n\n    function StyleComponent(props) {\n      _classCallCheck(this, StyleComponent);\n\n      var _this = _possibleConstructorReturn(this, (StyleComponent.__proto__ || Object.getPrototypeOf(StyleComponent)).call(this, props));\n\n      var staticContext = props.staticContext;\n\n      staticContext && staticContext.styles.push(style._getCss());\n      return _this;\n    }\n\n    _createClass(StyleComponent, [{\n      key: 'render',\n      value: function render() {\n        return _react2.default.createElement(DecoratedComponent, this.props);\n      }\n    }]);\n\n    return StyleComponent;\n  }(_react.Component);\n};\n\n//# sourceURL=webpack:///./src/hoc/withStyle.js?");

/***/ }),

/***/ "./src/server/createServerRequest.js":
/*!*******************************************!*\
  !*** ./src/server/createServerRequest.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _config = __webpack_require__(/*! ../../config */ \"./config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar createServerRequest = function createServerRequest(req) {\n  return _axios2.default.create({\n    baseURL: _config2.default.domain,\n    headers: {\n      cookie: req.get('cookie') || ''\n    },\n    withCredentials: true,\n    timeout: 5000,\n    params: {\n      secret: _config2.default.secret\n    }\n  });\n};\n\nexports.default = createServerRequest;\n\n//# sourceURL=webpack:///./src/server/createServerRequest.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _httpProxyMiddleware = __webpack_require__(/*! http-proxy-middleware */ \"http-proxy-middleware\");\n\nvar _httpProxyMiddleware2 = _interopRequireDefault(_httpProxyMiddleware);\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\nvar _Routes = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\nvar _config = __webpack_require__(/*! ../../config */ \"./config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use(_express2.default.static('public'));\n\napp.use('/api', (0, _httpProxyMiddleware2.default)({\n  target: _config2.default.domain,\n  changeOrigin: true\n}));\n\napp.get('*', function (req, res) {\n  var store = (0, _store.getStore)(req);\n\n  // 根据路由的路径来往store里填数据\n  var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);\n\n  // console.log(matchedRoutes);\n\n  // const matched = []\n  // routes.some((route) => {\n  //   const match = matchPath(req.path, route)\n  //   if (match) {\n  //     matched.push(route)\n  //   } \n  // })\n\n  // 让 matchedRoutes 里面所有的组件对应的loadData都执行一次\n  var promises = [];\n  matchedRoutes.forEach(function (item) {\n    if (item.route.loadData) {\n      var promise = new Promise(function (resolve, reject) {\n        item.route.loadData(store).then(resolve).catch(resolve);\n      });\n      promises.push(promise);\n    }\n  });\n\n  Promise.all(promises).then(function () {\n    var context = {\n      styles: []\n    };\n    var html = (0, _utils.render)({ store: store, routes: _Routes2.default, req: req, context: context });\n\n    // console.log('context', context)\n    if (context.action === 'REPLACE') {\n      res.redirect(301, context.url);\n    } else if (context.pageName === 404) {\n      res.status(404);\n    }\n    res.send(html);\n  });\n});\n\napp.listen(3000);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = exports.render = function render(_ref) {\n  var store = _ref.store,\n      routes = _ref.routes,\n      req = _ref.req,\n      context = _ref.context;\n\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: context },\n      _react2.default.createElement(\n        'div',\n        null,\n        (0, _reactRouterConfig.renderRoutes)(routes)\n      )\n    )\n  ));\n\n  var helmet = _reactHelmet.Helmet.renderStatic();\n\n  var stylesStr = context.styles && context.styles.join('\\n') || '';\n\n  return '<html lang=\"en\">\\n    <head>\\n      ' + helmet.title.toString() + '\\n      ' + helmet.meta.toString() + '\\n      ' + helmet.link.toString() + '\\n      <style>\\n        ' + stylesStr + '\\n      </style>\\n    </head>\\n    <body>\\n      <div id=\\'root\\'>\\n        <h1>' + content + '</h1>\\n      </div>\\n      <script>\\n        window.context = {\\n          state: ' + JSON.stringify(store.getState()) + '\\n        }\\n      </script>\\n      <script type=\"text/javascript\" src=\\'/index.js\\'></script>\\n    </body>\\n    </html>';\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getClientStore = exports.getStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _request = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _createServerRequest = __webpack_require__(/*! ../server/createServerRequest */ \"./src/server/createServerRequest.js\");\n\nvar _createServerRequest2 = _interopRequireDefault(_createServerRequest);\n\nvar _store = __webpack_require__(/*! ../component/Header/store */ \"./src/component/Header/store/index.js\");\n\nvar _store2 = __webpack_require__(/*! ../container/Home/store */ \"./src/container/Home/store/index.js\");\n\nvar _store3 = __webpack_require__(/*! ../container/Favorites/store */ \"./src/container/Favorites/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)({\n  home: _store2.homeReducer,\n  header: _store.headerReducer,\n  favorites: _store3.favoritesReducer\n});\n\n// 单例的 store\n// const store = createStore(reducer, applyMiddleware(thunk))\n\nvar getStore = exports.getStore = function getStore(req) {\n  // 改变服务器端的 store 内容，我们用 serverRequest\n  return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument((0, _createServerRequest2.default)(req))));\n};\n\nvar getClientStore = exports.getClientStore = function getClientStore() {\n  // 改变客户端的 store 内容, 我们用 clientRequest\n  var defaultStore = window.context.state;\n  return (0, _redux.createStore)(reducer, defaultStore, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request2.default)));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//获取本机ip地址\nfunction getIPAdress() {\n  var interfaces = __webpack_require__(/*! os */ \"os\").networkInterfaces();\n  for (var devName in interfaces) {\n    var iface = interfaces[devName];\n    for (var i = 0; i < iface.length; i++) {\n      var alias = iface[i];\n      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {\n        console.log(\"\\n--------IP地址：\" + alias.address + \"------\\n\");\n        return alias.address;\n      }\n    }\n  }\n}\n\nmodule.exports = {\n  getIPAdress: getIPAdress\n};\n\n//# sourceURL=webpack:///./utils.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-proxy-middleware\");\n\n//# sourceURL=webpack:///external_%22http-proxy-middleware%22?");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");\n\n//# sourceURL=webpack:///external_%22os%22?");

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

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

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

/***/ })

/******/ });