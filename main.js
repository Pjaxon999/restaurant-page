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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*! modern-normalize v3.0.1 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the line height in all browsers.\n3. Prevent adjustments of font size after orientation changes in iOS.\n4. Use a more readable tab size (opinionated).\n*/\n\nhtml {\n\tfont-family:\n\t\tsystem-ui,\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji'; /* 1 */\n\tline-height: 1.15; /* 2 */\n\t-webkit-text-size-adjust: 100%; /* 3 */\n\ttab-size: 4; /* 4 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct font weight in Chrome and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\nCorrect table border color inheritance in Chrome and Safari. (https://issues.chromium.org/issues/40615503, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\tborder-color: currentcolor;\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n\n/* MAIN CSS */\n:root {\n\t/* Colors */\n\t--color-primary: #2A3D45;\n\t--color-secondary: #6F3E47;\n\t--color-accent: #B87333;\n\t--color-text: #FFFDD0;\n\t--color-overlay: rgba(0,0,0,0.6);\n\t--color-accent-hover: #9B5B27;\n\t--color-disabled: #6D2E4666;\n  \n\t/* Fonts */\n\t--heading-font: \"Cormorant Garamond\", serif;\n\t--body-font: \"Montserrat\", system-ui, sans-serif;\n\t--script-font: \"Great Vibes\", cursive;\n  \n\t/* Effects */\n\t--shadow-md: 0 4px 8px rgba(109,46,70,0.2);\n\t--transition-duration: 0.3s;\n\t--border-radius: 8px;\n}\n\nbody {\n\tbackground-color: var(--color-primary);\n\tmin-height: 100vh;\n\tfont-family: var(--body-font);\n\tcolor: var(--color-text);\n}\n\nnav {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\nnav button {\n\tbackground-color: var(--color-primary);\n\tcolor: var(--color-text);\n\tborder: none;\t\n\tpadding: 1.5em 2em;\n}\n\nnav button:hover {\n\ttransition-duration: var(--transition-duration);\n\tbackground-color: var(--color-secondary);\n}\n\nh1 {\n    font-size: 3em;\n    line-height: calc(1ex / 0.42);\n    margin: calc(1ex / 0.42) 0;\n\tfont-family: var(--script-font);\n}\n\nh2 {\n    font-size: 2em;\n    line-height: calc(1ex / 0.42);\n    margin: calc(1ex / 0.42) 0;\n\tfont-family: var(--heading-font);\n}\n\np {\n    font-size: 1em;\n    line-height: calc(1ex / 0.32);\n    margin: calc(1ex / 0.32) 0;\t\n\twidth: 30ch;\n    max-width: 100%;\n}\n\nli {\n\tpadding: 0.25em;\n}\n\na {\n\tcolor: var(--color-accent);\n}\n\na:hover {\n\tcolor: var(--color-accent-hover)\n}\n\nform {\n\tmargin: 0 auto;\n}\n\n.form-group {\n\tmargin-bottom: 1.5em;\n}\n\n.form-group label {\n\tdisplay: block;\n\tmargin-bottom: 0.5em;\n}\n\ninput,\nselect,\ntextarea {\n\twidth: 100%;\n\tpadding: 1em;\n\tborder: 1px solid var(--color-secondary);\n\tborder-radius: var(--border-radius);\n\tfont-family: var(--body-font);\n}\n\nimg {\n\twidth: 100%;\n\theight: 750px;\n\tobject-fit: cover;\n}\n\n.active {\n\tbackground-color: var(--color-disabled);\n}\n\n#content {\n\tbackground-color: var(--color-secondary);\n\tbox-shadow: var(--shadow-md);\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 500px;\n\talign-items: start;\n\theight: 750px;\n\tmax-width: 1200px;\n\tmargin: 0 auto;\n}\n\n.left-content {\n\tmax-width: 700px;\n\tpadding: 1.8em;\n}\n\n.left-content button {\n\tpadding: 1.5em 3em;\n\tbackground-color: var(--color-primary);\n\tcolor: var(--color-text);\n\tfont-weight: 700;\n\tbox-shadow: var(--shadow-md);\n\tborder-radius: var(--border-radius);\n}\n\n.left-content button:hover {\n\tbackground-color: var(--color-secondary);\n\ttransition-duration: var(--transition-duration);\n}\n\n.flourish {\n\tfont-family: var(--script-font);\n\tfont-style: italic;\n\tfont-size: 1.5em;\n}\n\n@media (max-width: 1023px) {\n\t#content {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\theight: auto;\n\t}\n\n\t.left-content {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tpadding: 0;\n\t}\n\n\tform {\n\t\tpadding: 1.5rem;\n\t  }\n\t  \n\t  input, select, textarea {\n\t\tpadding: 0.8rem;\n\t\tfont-size: 0.9rem;\n\t  }\n\n\tnav button {\n\t\tpadding: 1em .75em;\n\t}\n\n\t.left-content button {\n\t\tmargin-bottom: 1em;\n\t}\n\n\th1,\n\th2,\n\tp {\n\t\ttext-align: center;\n\t}\n\n\timg {\n\t\theight: auto;\n\t\tmax-width: 300px;\n\t\tmargin: 0 auto;\n\t}\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/aboutUs.js":
/*!************************!*\
  !*** ./src/aboutUs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAboutUs: () => (/* binding */ renderAboutUs)\n/* harmony export */ });\n/* harmony import */ var _assets_images_staff_L_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/staff-L.webp */ \"./src/assets/images/staff-L.webp\");\n\n\nfunction renderAboutUs() {\n    // Grab the div to append content\n    const content = document.getElementById('content');\n    content.replaceChildren();\n\n    // Create Elements to Render\n    const leftDiv = document.createElement('div');\n    const rightDiv = document.createElement('div');\n    const heading = document.createElement('h1');\n    const subHeading = document.createElement('h2');\n    const text = document.createElement('p');\n    const img = document.createElement('img');\n\n    // Add Classes to Elements\n    leftDiv.classList.add('left-content');\n    rightDiv.classList.add('right-content');\n\n    // Handle Image Element\n    img.src = _assets_images_staff_L_webp__WEBPACK_IMPORTED_MODULE_0__;\n    img.alt = \"image of restaurant staff preparing a delicious dish\";\n    img.loading = \"lazy\";\n\n    // Add content to elements\n    heading.textContent = \"Velvet Nocturne\";\n    subHeading.textContent = 'Where Culinary Alchemy Meets Timeless Romance';\n    text.textContent = \"In the twilight of 1997, a disillusioned Parisian chef and a starry-eyed sommelier crossed paths on a moonlit bridge over the Seine. Bound by a shared dream of crafting not meals, but memories, they vowed to create a sanctuary where time slows and senses awaken. Thus, Velvet Nocturne was born—a love letter to the art of lingering.\";\n\n    // Send Elements to Appropriate Location\n    leftDiv.append(heading, subHeading, text);\n    rightDiv.append(img);\n    content.append(leftDiv, rightDiv);\n}\n\n//# sourceURL=webpack:///./src/aboutUs.js?");

/***/ }),

/***/ "./src/assets/images/dining-room-L.webp":
/*!**********************************************!*\
  !*** ./src/assets/images/dining-room-L.webp ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/[folder]/dining-room-L.webp\";\n\n//# sourceURL=webpack:///./src/assets/images/dining-room-L.webp?");

/***/ }),

/***/ "./src/assets/images/dining-table-L.webp":
/*!***********************************************!*\
  !*** ./src/assets/images/dining-table-L.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/[folder]/dining-table-L.webp\";\n\n//# sourceURL=webpack:///./src/assets/images/dining-table-L.webp?");

/***/ }),

/***/ "./src/assets/images/reserved-L.webp":
/*!*******************************************!*\
  !*** ./src/assets/images/reserved-L.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/[folder]/reserved-L.webp\";\n\n//# sourceURL=webpack:///./src/assets/images/reserved-L.webp?");

/***/ }),

/***/ "./src/assets/images/staff-L.webp":
/*!****************************************!*\
  !*** ./src/assets/images/staff-L.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/[folder]/staff-L.webp\";\n\n//# sourceURL=webpack:///./src/assets/images/staff-L.webp?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHome: () => (/* binding */ renderHome)\n/* harmony export */ });\n/* harmony import */ var _assets_images_dining_room_L_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/dining-room-L.webp */ \"./src/assets/images/dining-room-L.webp\");\n\n\nfunction renderHome() {\n    // Grab the div to append content\n    const content = document.getElementById('content');\n    content.replaceChildren();\n\n    // Create Elements to Render\n    const leftDiv = document.createElement('div');\n    const rightDiv = document.createElement('div');\n    const heading = document.createElement('h1');\n    const subHeading = document.createElement('h2');\n    const text = document.createElement('p');\n    const flourish = document.createElement('p');\n    const img = document.createElement('img');\n\n    // Add Classes to Elements\n    leftDiv.classList.add('left-content');\n    rightDiv.classList.add('right-content');\n    flourish.classList.add('flourish');\n\n    // Handle Image Element\n    img.src = _assets_images_dining_room_L_webp__WEBPACK_IMPORTED_MODULE_0__;\n    img.alt = \"Elegant dining room with candlelit tables\";\n    img.loading = \"lazy\";\n\n    // Add content to elements\n    heading.textContent = \"Velvet Nocturne\";\n    subHeading.textContent = '\"Where Time Slows to a Whisper\"';\n    text.textContent = \"Step into an enclave of romance, where candlelit tables glow like fallen stars and burgundy shadows dance across velvet-draped walls. At Velvet Nocturne, every dish is a sonnet—crafted with heirloom ingredients, plated with precision, and paired with wines that hum of distant vineyards. This is not merely a meal, but a waltz of senses. Let our chefs compose your evening in minor keys and golden accents, while the soft murmur of clinking crystal serenades the night.\";\n    flourish.textContent = \"Bienvenue to the art of intimacy\";\n\n    // Send Elements to Appropriate Location\n    leftDiv.append(heading, subHeading, text, flourish);\n    rightDiv.append(img);\n    content.append(leftDiv, rightDiv);\n}\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _aboutUs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutUs.js */ \"./src/aboutUs.js\");\n/* harmony import */ var _reservations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reservations.js */ \"./src/reservations.js\");\n\n\n\n\n\n\n\n// Grab the tab buttons\nconst navButtons = document.querySelectorAll('.nav-button');\n\n// Check which button was clicked, run the appropriate render function\nfunction handleTabClick(event) {\n    const buttonText = event.target.textContent;\n\n    navButtons.forEach(button =>\n        button.classList.toggle('active', button === event.target)\n    );\n\n    switch(buttonText) {\n        case 'Home':\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.renderHome)();\n            break;\n        case 'Menu':\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.renderMenu)();\n            break;\n        case 'About Us':\n            (0,_aboutUs_js__WEBPACK_IMPORTED_MODULE_3__.renderAboutUs)();\n            break;\n        case 'Reservations':\n            (0,_reservations_js__WEBPACK_IMPORTED_MODULE_4__.renderReservations)();\n            break;\n        default:\n            alert('No module found for tab:', buttonText);\n            break;\n    }\n}\n\n// Add Event listener to each nav button\nnavButtons.forEach(button => {\n    button.addEventListener(\"click\", handleTabClick);\n});\n\n// Initial Page Load\nnavButtons[0].classList.add('active');\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.renderHome)();\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenu: () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_images_dining_table_L_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/dining-table-L.webp */ \"./src/assets/images/dining-table-L.webp\");\n\n\nfunction renderMenu() {\n    // Grab Content Div\n    const content = document.getElementById('content');\n    content.replaceChildren();\n\n    // Create Elements to Render\n    const leftDiv = document.createElement('div');\n    const rightDiv = document.createElement('div');\n    const heading = document.createElement('h1');\n    const subHeading = document.createElement('h2');\n    const text = document.createElement('p');\n    const list = document.createElement ('ul');\n    const img = document.createElement('img');\n\n    // Add Classes to Elements\n    leftDiv.classList.add('left-content');\n    rightDiv.classList.add('right-content');\n\n    // Handle Image\n    img.src = _assets_images_dining_table_L_webp__WEBPACK_IMPORTED_MODULE_0__;\n    img.alt = \"A beautiful table at a fancy restaurant with plates of delicious looking fancy food\";\n    img.loading = \"lazy\";\n\n    // Add Content to Elements\n    heading.textContent = \"Velvet Nocturne\";\n    subHeading.textContent = \"Menus to Stir the Senses\";\n    text.textContent = \"Peruse our menus like pages of a beloved novel—each dish a verse, each pairing a stanza. Let your evening unfold as a curated epic, from twilight aperitifs to midnight confections.\";\n\n    // Create a menu array, loop through the array to create the link and titles for each list item\n    const menuItems = [\n        { text: \"Dinner\", pdf: \"dinner-menu.pdf\" },\n        { text: \"Dessert\", pdf: \"dessert-menu.pdf\" },\n        { text: \"Wine & Spirits\", pdf: \"wine-menu.pdf\" },\n        { text: \"Brunch\", pdf: \"brunch-menu.pdf\" }\n    ];\n\n    menuItems.forEach(item => {\n        const li = document.createElement(\"li\");\n        const link = document.createElement(\"a\");\n        link.href = `./assets/menus/${item.pdf}`;\n        link.textContent = item.text;\n        li.appendChild(link);\n        list.appendChild(li);\n    });\n\n    // Avengers, Assemble!\n    leftDiv.append(heading, subHeading, text, list);\n    rightDiv.append(img);\n    content.append(leftDiv, rightDiv);\n}\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/reservations.js":
/*!*****************************!*\
  !*** ./src/reservations.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderReservations: () => (/* binding */ renderReservations)\n/* harmony export */ });\n/* harmony import */ var _assets_images_reserved_L_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/reserved-L.webp */ \"./src/assets/images/reserved-L.webp\");\n\n\nfunction renderReservations() {\n    // Grab the div to append content\n    const content = document.getElementById('content');\n    content.replaceChildren();\n\n    // Create Elements to Render\n    const leftDiv = document.createElement('div');\n    const rightDiv = document.createElement('div');\n    const heading = document.createElement('h1');\n    const subHeading = document.createElement('h2');\n    const form = document.createElement('form');\n    const img = document.createElement('img');\n    const button = document.createElement('button')\n\n    // Name input\n    const nameGroup = document.createElement('div');\n    nameGroup.classList.add('form-group');\n    const nameLabel = document.createElement('label');\n    nameLabel.textContent = \"Name\";\n    nameLabel.htmlFor = \"name\";\n    const nameInput = document.createElement('input');\n    nameInput.type = \"text\";\n    nameInput.id = \"name\";\n    nameInput.required = true;\n    nameGroup.append(nameLabel, nameInput);\n\n    // Date/Time group\n    const dateTimeGroup = document.createElement('div');\n    dateTimeGroup.classList.add('date-time-group');\n\n    // Date input\n    const dateGroup = document.createElement('div');\n    dateGroup.classList.add('form-group');\n    const dateLabel = document.createElement('label');\n    dateLabel.textContent = \"Date\";\n    dateLabel.htmlFor = \"date\";\n    const dateInput = document.createElement('input');\n    dateInput.type = \"date\";\n    dateInput.id = \"date\";\n    dateInput.min = \"2024-03-15\";\n    dateInput.required = true;\n    dateGroup.append(dateLabel, dateInput);\n\n    // Time select\n    const timeGroup = document.createElement('div');\n    timeGroup.classList.add('form-group');\n    const timeLabel = document.createElement('label');\n    timeLabel.textContent = \"Time\";\n    timeLabel.htmlFor = \"time\";\n    const timeSelect = document.createElement('select');\n    timeSelect.id = \"time\";\n    timeSelect.required = true;\n    ['Moonrise', '19:00 - Twilight', '20:30 - Midnight Sonata', '22:00 - Witching Hour']\n        .forEach(optionText => {\n        const option = document.createElement('option');\n        option.textContent = optionText;\n        timeSelect.appendChild(option);\n        });\n    timeGroup.append(timeLabel, timeSelect);\n\n    // Party size select\n    const partyGroup = document.createElement('div');\n    partyGroup.classList.add('form-group');\n    const partyLabel = document.createElement('label');\n    partyLabel.textContent = \"Party Size\";\n    partyLabel.htmlFor = \"party\";\n    const partySelect = document.createElement('select');\n    partySelect.id = \"party\";\n    partySelect.required = true;\n    ['How Many Souls?', '2 - Tête-à-Tête', '4 - Quartet', '6 - Secret Society']\n        .forEach(optionText => {\n        const option = document.createElement('option');\n        option.textContent = optionText;\n        partySelect.appendChild(option);\n        });\n    partyGroup.append(partyLabel, partySelect);\n\n    // Assemble form\n    dateTimeGroup.append(dateGroup, timeGroup, partyGroup);\n    form.append(nameGroup, dateTimeGroup);\n\n    // Fake submit button\n    button.type = \"button\";\n    button.id = \"fakeSubmit\";\n    button.textContent = \"Reserve Now!\";\n    button.addEventListener('click', () => {\n        alert(\"Your table is reserved. Expect a raven by moonrise.\");\n    });\n\n    // Add Classes to Elements\n    leftDiv.classList.add('left-content');\n    rightDiv.classList.add('right-content');\n\n    // Handle Image Element\n    img.src = _assets_images_reserved_L_webp__WEBPACK_IMPORTED_MODULE_0__;\n    img.alt = \"image of a restaurant table with a 'reserved' card\";\n    img.loading = \"lazy\";\n\n    // Add content to elements\n    heading.textContent = \"Velvet Nocturne\";\n    subHeading.textContent = 'Crafting Evenings, Not Reservations';\n\n    // Send Elements to Appropriate Location\n    leftDiv.append(heading, subHeading, form);\n    rightDiv.append(img);\n    content.append(leftDiv, rightDiv);\n}\n\n//# sourceURL=webpack:///./src/reservations.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;