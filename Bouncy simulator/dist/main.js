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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/background.png */ \"./src/img/background.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Monoton&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"body {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-size: 16px;\\n  color: #f2f2f2; }\\n\\n.container {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start; }\\n\\n.aside {\\n  align-self: flex-start; }\\n\\nh1 {\\n  margin: 5rem 1rem;\\n  padding: 1rem;\\n  text-align: center;\\n  font-family: 'Monoton', cursive;\\n  font-size: 3.2rem;\\n  max-width: 25rem; }\\n\\nnav {\\n  margin-top: 10rem;\\n  align-self: flex-start; }\\n\\n.start {\\n  width: 10rem;\\n  height: 3rem;\\n  padding: .7rem;\\n  text-align: center;\\n  margin: 1rem 0 2rem 4rem;\\n  border-radius: 0.5rem;\\n  font-size: 1rem;\\n  font-weight: bold;\\n  color: #3F3F3F; }\\n  .start:hover {\\n    cursor: pointer; }\\n\\n.canvasContainer {\\n  margin-left: 3rem; }\\n\\n#ball {\\n  position: absolute; }\\n\\n#board {\\n  position: absolute; }\\n\\n@media only screen and (max-width: 850px) {\\n  .container {\\n    flex-direction: column; }\\n  h1 {\\n    margin: 1rem;\\n    display: flex;\\n    flex-wrap: wrap; }\\n  nav {\\n    margin: 1rem; }\\n  .start {\\n    margin: 1rem; } }\\n\\n@media only screen and (max-width: 570px) {\\n  .canvasContainer {\\n    margin: 0; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Ball.js":
/*!*********************!*\
  !*** ./src/Ball.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nclass Ball {\n  constructor(position, vector, board) {\n    this.ctx = board.ballCanvas.getContext('2d');\n    this.position = position;\n    this.vector = vector;\n    this.radius = 20;\n    this.board = board;\n    this.DrawBall();\n  }\n\n  DrawBall() {\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"drawBall\"])(this.ctx, this.position.y * this.board.widht + this.radius, this.position.x * this.board.height + this.radius, '#E62C2C');\n  }\n\n  Move() {\n    let counter = 0;\n    const {\n      input\n    } = this.board;\n    let {\n      x,\n      y\n    } = this.position;\n    const game = setInterval(() => {\n      if (input[x][y] === \"Y\") {\n        this.HandleY(x, y);\n      } else if (input[x + 1][y] === \"Y\") {\n        this.HandleY(x + 1, y);\n      } else if (input[x - 1][y] === \"Y\") {\n        this.HandleY(x - 1, y);\n      }\n\n      if (input[x + this.vector.x][y + this.vector.y] === \"X\") {\n        if (input[x + this.vector.x][y] === \"X\" && input[x][y + this.vector.y] === \"X\") {\n          this.vector.x *= -1;\n          this.vector.y *= -1;\n        } else if (input[x + this.vector.x][y] === \"X\") {\n          this.vector.x *= -1;\n        } else if (input[x][y + this.vector.y] === \"X\") {\n          this.vector.y *= -1;\n        } else {\n          const direction = Math.random();\n\n          if (direction < 0.33) {\n            this.vector.x *= -1;\n          } else if (direction > 0.33 && direction < 0.66) {\n            this.vector.y *= -1;\n          } else {\n            this.vector.x *= -1;\n            this.vector.y *= -1;\n          }\n        }\n      } else if (input[x + this.vector.x][y] === \"X\") {\n        this.vector.x *= -1;\n      } else if (input[x][y + this.vector.y] === \"X\") {\n        this.vector.y *= -1;\n      }\n\n      this.drawMove(y * this.board.widht + this.radius, x * this.board.height + this.radius, this.vector.y * 2, this.vector.x * 2);\n      x += this.vector.x;\n      y += this.vector.y;\n      counter++;\n\n      if (counter >= 300) {\n        clearInterval(game);\n      }\n    }, 200);\n  }\n\n  HandleY(x, y) {\n    this.vector.x = this.vector.x * (Math.random() > 0.5 ? 1 : -1);\n    this.vector.y = this.vector.y * (Math.random() > 0.5 ? 1 : -1);\n    this.board.input[x][y] = \"0\";\n    this.board.ctx.clearRect(y * this.board.widht, x * this.board.height, this.board.widht - 1, this.board.height - 1);\n  }\n\n  drawMove(x, y, offsetX, offsetY) {\n    let counter = 0;\n    const move = setInterval(() => {\n      counter++;\n      this.ctx.clearRect(0, 0, this.board.ballCanvas.width, this.board.ballCanvas.height);\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"drawBall\"])(this.ctx, x, y, '#E62C2C');\n      x += offsetX;\n      y += offsetY;\n      if (counter >= 20) clearInterval(move);\n    }, 10);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n//# sourceURL=webpack:///./src/Ball.js?");

/***/ }),

/***/ "./src/Board.js":
/*!**********************!*\
  !*** ./src/Board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ \"./src/Ball.js\");\n/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Position */ \"./src/Position.js\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vector */ \"./src/Vector.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\n\n\nclass Board {\n  constructor(board, canvas, ballCanvas) {\n    this.input = board;\n    this.canvas = canvas;\n    this.ballCanvas = ballCanvas;\n    this.ctx = this.canvas.getContext('2d');\n    this.ball = null;\n    this.widht = 40;\n    this.height = 40;\n    this.canvas.width = this.input[0].length * this.widht;\n    this.canvas.height = this.input.length * this.height;\n    this.ballCanvas.width = this.input[0].length * this.height;\n    this.ballCanvas.height = this.input.length * this.widht;\n  }\n\n  initView() {\n    for (let i = 0; i < this.input.length; i++) {\n      for (let j = 0; j < this.input[i].length; j++) {\n        if (this.input[i][j] === \"X\") {\n          this.ctx.fillStyle = '#e6e6e6';\n          this.ctx.fillRect(j * this.widht, i * this.height, this.widht, this.height);\n          Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"drawRectangle\"])(this.ctx, j * this.widht, i * this.height, this.widht - 2, this.height - 2);\n        } else if (this.input[i][j] === \"1\") {\n          this.input[i][j] = \"0\";\n          this.ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"](new _Position__WEBPACK_IMPORTED_MODULE_1__[\"default\"](i, j), new _Vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"](1, 1), this);\n        } else if (this.input[i][j] === \"Y\") {\n          Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"drawHexagon\"])(this.ctx, j * this.widht + 20, i * this.height + 20, '#E6C243');\n        }\n      }\n    }\n  }\n\n  startBall() {\n    this.ball.Move();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n//# sourceURL=webpack:///./src/Board.js?");

/***/ }),

/***/ "./src/Position.js":
/*!*************************!*\
  !*** ./src/Position.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Position {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Position);\n\n//# sourceURL=webpack:///./src/Position.js?");

/***/ }),

/***/ "./src/Vector.js":
/*!***********************!*\
  !*** ./src/Vector.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Vector {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vector);\n\n//# sourceURL=webpack:///./src/Vector.js?");

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fce1e4942aa6cd83b8eb27d65cb33add.png\");\n\n//# sourceURL=webpack:///./src/img/background.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ \"./src/Board.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst canvas = document.querySelector(\"#board\");\nconst ballCanvas = document.querySelector('#ball');\nconst startButton = document.querySelector(\".start\");\nconst board = new _Board__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_input__WEBPACK_IMPORTED_MODULE_0__[\"default\"], canvas, ballCanvas);\nboard.initView();\nstartButton.addEventListener('click', () => {\n  startButton.disabled = true;\n  board.startBall();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// const inputBoard = [\n//   [\"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\"],\n//   [\"X\", \"1\", \"0\", \"0\", \"0\", \"0\", \"X\"],\n//   [\"X\", \"0\", \"0\", \"0\", \"0\", \"0\", \"X\"],\n//   [\"X\", \"0\", \"0\", \"0\", \"0\", \"0\", \"X\"],\n//   [\"X\", \"0\", \"0\", \"0\", \"0\", \"0\", \"X\"],\n//   [\"X\", \"0\", \"0\", \"0\", \"0\", \"0\", \"X\"],\n//   [\"X\", \"0\", \"0\", \"0\", \"0\", \"0\", \"X\"],\n//   [\"X\", \"0\", \"0\", \"0\", \"0\", \"0\", \"X\"],\n//   [\"X\", \"0\", \"0\", \"0\", \"0\", \"0\", \"X\"],\n//   [\"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\"]\n// ];\nconst inputBoard = [[\"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\"], [\"X\", \"1\", \"0\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\"], [\"X\", \"0\", \"0\", \"0\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\"], [\"X\", \"0\", \"0\", \"0\", \"0\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\"], [\"X\", \"0\", \"0\", \"0\", \"0\", \"0\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\"], [\"X\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"X\", \"X\", \"X\", \"X\", \"X\"], [\"X\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"X\", \"X\", \"X\", \"X\"], [\"X\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"Y\", \"0\", \"0\", \"0\", \"X\"], [\"X\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"X\"], [\"X\", \"0\", \"0\", \"0\", \"X\", \"0\", \"0\", \"0\", \"0\", \"Y\", \"0\", \"X\"], [\"X\", \"0\", \"0\", \"X\", \"X\", \"X\", \"0\", \"Y\", \"Y\", \"0\", \"0\", \"X\"], [\"X\", \"0\", \"0\", \"0\", \"X\", \"0\", \"0\", \"0\", \"0\", \"Y\", \"0\", \"X\"], [\"X\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"X\"], [\"X\", \"0\", \"0\", \"Y\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"X\"], [\"X\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"0\", \"Y\", \"0\", \"0\", \"X\"], [\"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\", \"X\"]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (inputBoard);\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: drawBall, drawRectangle, drawHexagon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawBall\", function() { return drawBall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawRectangle\", function() { return drawRectangle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawHexagon\", function() { return drawHexagon; });\nfunction drawBall(ctx, x, y, fill) {\n  ctx.beginPath();\n  ctx.arc(x, y, 20, 0, Math.PI * 2);\n  ctx.fillStyle = fill;\n  ctx.fill();\n  ctx.closePath();\n}\nfunction drawRectangle(ctx, x, y, width, height) {\n  ctx.shadowColor = '#f2f2f2';\n  ctx.shadowBlur = 1;\n  ctx.lineJoin = 'bevel';\n  ctx.lineWidth = 2;\n  ctx.strokeStyle = '#b3b3b3';\n  ctx.strokeRect(x, y, width, height);\n}\nfunction drawHexagon(ctx, x, y, fill) {\n  const numberOfSides = 6;\n  const size = 18;\n  ctx.beginPath();\n  ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));\n\n  for (let i = 1; i <= numberOfSides; i++) {\n    ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / numberOfSides), y + size * Math.sin(i * 2 * Math.PI / numberOfSides));\n  }\n\n  ctx.strokeStyle = fill;\n  ctx.lineWidth = 1.2;\n  ctx.stroke();\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });