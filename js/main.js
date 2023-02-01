/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\r\n    margin: 0;\r\n    border:0;\r\n    background-color: rgb(236, 236, 236);\r\n    font-family: sans-serif;\r\n    overflow: hidden;\r\n    display: grid;\r\n    grid-template-columns: 100% 0px 0px 0px;\r\n}\r\n.contenedor{\r\n    display: grid;\r\n    grid-template-columns: minmax(80px,80px) minmax(300px,auto);\r\n    grid-template-rows: 100vh;\r\n    gap: 10px;\r\n}\r\n.contenedor.inactive{\r\n    opacity: 20%;\r\n    pointer-events: none;\r\n}\r\n.oscurito{\r\n    background-color: rgba(0, 0, 0, 0);\r\n    transition: 0.4s;\r\n}\r\n.oscurito.inactive{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 80%);\r\n    z-index: 1;\r\n    transition: 0.4s;\r\n}\r\n.izquierda{\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n.derecha{\r\n    display: grid;\r\n    grid-template-rows: 0.3fr 5fr 0.2fr;\r\n    gap: 10px;\r\n    padding: 15px;\r\n}\r\n.headerbar{\r\n    gap: 5px;\r\n    display: grid;\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    grid-template-columns: 30px 30px 30px 30px 30px minmax(300px,100%) auto auto auto auto auto auto auto;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-items: center;\r\n    padding-inline: 10px;\r\n    border-radius: 5px;\r\n    background-color: white;\r\n}\r\n.headerbar>img{\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n.maincontent{\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    border-radius: 5px;\r\n    border: 0.1px solid;\r\n    border-color: lightgrey;\r\n    display: grid;\r\n    grid-template-columns: 200px 1fr;\r\n    background-color: white;\r\n}\r\n.iconos{\r\n    height: 20px;\r\n}\r\n.divA{\r\n    border-right: 0.1px solid lightgrey;\r\n    display: grid;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-items: start;\r\n    grid-template-rows: 0.5fr 0.5fr 8fr;\r\n}\r\n.divA>div{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n.slide{\r\n    position: relative;\r\n    background-color: white;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    border-left: 0.1px solid lightgrey;\r\n    transition: .4s;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.2fr 7fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n}\r\n.slide.active{\r\n    transform: translate(-300px,0px);\r\n    z-index: 2;\r\n}\r\n.tituloslide{\r\n    display: grid;\r\n    grid-template-columns: 5fr 1fr 1fr;\r\n    background-color: lightgrey;\r\n    height: 100%;\r\n    width: 100%;\r\n    justify-items: center;\r\n    align-items: center;\r\n} \r\ntextarea{\r\n    resize: none;\r\n    width: 90%;\r\n    height: 90%;\r\n}\r\n.divtitulo{\r\n    padding: 20px;\r\n    display: grid;\r\n}\r\ninput[type=\"checkbox\"]{\r\n    display: none;\r\n}\r\ninput:checked{\r\n    display: block;\r\n}\r\n.newfolder{\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 40%;\r\n    background-color: white;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    border-left: 0.1px solid lightgrey;\r\n    transition: 0.5s;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: 0.5fr 0.5fr 0.5fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n    z-index: 2;\r\n    pointer-events: none;\r\n}\r\n.newfolder.active{\r\n    pointer-events: auto;\r\n    opacity: 1;\r\n    transition: .5s;\r\n\r\n}\r\n.post{\r\n    display: grid;\r\n    grid-template-columns: 6fr 0.5fr;\r\n    border: 0.5px solid lightgrey;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    margin-inline: 20px;\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n}\r\n.delete{\r\n    min-width: 300px;\r\n    min-height: 60px;\r\n    font-family: 'Nunito', sans-serif;\r\n    font-size: 22px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1.3px;\r\n    font-weight: 700;\r\n    color: #313133;\r\n    background: #4FD1C5;\r\n  background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);\r\n    border: none;\r\n    border-radius: 1000px;\r\n    box-shadow: 12px 12px 24px rgba(79,209,197,.64);\r\n    transition: all 0.3s ease-in-out 0s;\r\n    cursor: pointer;\r\n    outline: none;\r\n    position: relative;\r\n    padding: 10px;\r\n    }\r\n  \r\n    .delete::before {\r\n  content: '';\r\n    border-radius: 1000px;\r\n    min-width: calc(300px + 12px);\r\n    min-height: calc(60px + 12px);\r\n    border: 6px solid #00FFCB;\r\n    box-shadow: 0 0 60px rgba(0,255,203,.64);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    opacity: 0;\r\n    transition: all .3s ease-in-out 0s;\r\n  }\r\n  \r\n  .delete:hover, .delete:focus {\r\n    color: #313133;\r\n    transform: translateY(-6px);\r\n  }\r\n  \r\n  .delete:hover::before, .delete:focus::before {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .delete::after {\r\n    content: '';\r\n    width: 30px; height: 30px;\r\n    border-radius: 100%;\r\n    border: 6px solid #00FFCB;\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    animation: ring 1.5s infinite;\r\n  }\r\n  \r\n  .delete:hover::after, .delete:focus::after {\r\n    animation: none;\r\n    display: none;\r\n  }\r\n  \r\n  @keyframes ring {\r\n    0% {\r\n      width: 30px;\r\n      height: 30px;\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      width: 300px;\r\n      height: 300px;\r\n      opacity: 0;\r\n    }\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body{\r\n    margin: 0;\r\n    border:0;\r\n    background-color: rgb(236, 236, 236);\r\n    font-family: sans-serif;\r\n    overflow: hidden;\r\n    display: grid;\r\n    grid-template-columns: 100% 0px 0px 0px;\r\n}\r\n.contenedor{\r\n    display: grid;\r\n    grid-template-columns: minmax(80px,80px) minmax(300px,auto);\r\n    grid-template-rows: 100vh;\r\n    gap: 10px;\r\n}\r\n.contenedor.inactive{\r\n    opacity: 20%;\r\n    pointer-events: none;\r\n}\r\n.oscurito{\r\n    background-color: rgba(0, 0, 0, 0);\r\n    transition: 0.4s;\r\n}\r\n.oscurito.inactive{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 80%);\r\n    z-index: 1;\r\n    transition: 0.4s;\r\n}\r\n.izquierda{\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n.derecha{\r\n    display: grid;\r\n    grid-template-rows: 0.3fr 5fr 0.2fr;\r\n    gap: 10px;\r\n    padding: 15px;\r\n}\r\n.headerbar{\r\n    gap: 5px;\r\n    display: grid;\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    grid-template-columns: 30px 30px 30px 30px 30px minmax(300px,100%) auto auto auto auto auto auto auto;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-items: center;\r\n    padding-inline: 10px;\r\n    border-radius: 5px;\r\n    background-color: white;\r\n}\r\n.headerbar>img{\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n.maincontent{\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    border-radius: 5px;\r\n    border: 0.1px solid;\r\n    border-color: lightgrey;\r\n    display: grid;\r\n    grid-template-columns: 200px 1fr;\r\n    background-color: white;\r\n}\r\n.iconos{\r\n    height: 20px;\r\n}\r\n.divA{\r\n    border-right: 0.1px solid lightgrey;\r\n    display: grid;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-items: start;\r\n    grid-template-rows: 0.5fr 0.5fr 8fr;\r\n}\r\n.divA>div{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n.slide{\r\n    position: relative;\r\n    background-color: white;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    border-left: 0.1px solid lightgrey;\r\n    transition: .4s;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.2fr 7fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n}\r\n.slide.active{\r\n    transform: translate(-300px,0px);\r\n    z-index: 2;\r\n}\r\n.tituloslide{\r\n    display: grid;\r\n    grid-template-columns: 5fr 1fr 1fr;\r\n    background-color: lightgrey;\r\n    height: 100%;\r\n    width: 100%;\r\n    justify-items: center;\r\n    align-items: center;\r\n} \r\ntextarea{\r\n    resize: none;\r\n    width: 90%;\r\n    height: 90%;\r\n}\r\n.divtitulo{\r\n    padding: 20px;\r\n    display: grid;\r\n}\r\ninput[type=\"checkbox\"]{\r\n    display: none;\r\n}\r\ninput:checked{\r\n    display: block;\r\n}\r\n.newfolder{\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 40%;\r\n    background-color: white;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    border-left: 0.1px solid lightgrey;\r\n    transition: 0.5s;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: 0.5fr 0.5fr 0.5fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n    z-index: 2;\r\n    pointer-events: none;\r\n}\r\n.newfolder.active{\r\n    pointer-events: auto;\r\n    opacity: 1;\r\n    transition: .5s;\r\n\r\n}\r\n.post{\r\n    display: grid;\r\n    grid-template-columns: 6fr 0.5fr;\r\n    border: 0.5px solid lightgrey;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    margin-inline: 20px;\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n}\r\n.delete{\r\n    min-width: 300px;\r\n    min-height: 60px;\r\n    font-family: 'Nunito', sans-serif;\r\n    font-size: 22px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1.3px;\r\n    font-weight: 700;\r\n    color: #313133;\r\n    background: #4FD1C5;\r\n  background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);\r\n    border: none;\r\n    border-radius: 1000px;\r\n    box-shadow: 12px 12px 24px rgba(79,209,197,.64);\r\n    transition: all 0.3s ease-in-out 0s;\r\n    cursor: pointer;\r\n    outline: none;\r\n    position: relative;\r\n    padding: 10px;\r\n    }\r\n  \r\n    .delete::before {\r\n  content: '';\r\n    border-radius: 1000px;\r\n    min-width: calc(300px + 12px);\r\n    min-height: calc(60px + 12px);\r\n    border: 6px solid #00FFCB;\r\n    box-shadow: 0 0 60px rgba(0,255,203,.64);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    opacity: 0;\r\n    transition: all .3s ease-in-out 0s;\r\n  }\r\n  \r\n  .delete:hover, .delete:focus {\r\n    color: #313133;\r\n    transform: translateY(-6px);\r\n  }\r\n  \r\n  .delete:hover::before, .delete:focus::before {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .delete::after {\r\n    content: '';\r\n    width: 30px; height: 30px;\r\n    border-radius: 100%;\r\n    border: 6px solid #00FFCB;\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    animation: ring 1.5s infinite;\r\n  }\r\n  \r\n  .delete:hover::after, .delete:focus::after {\r\n    animation: none;\r\n    display: none;\r\n  }\r\n  \r\n  @keyframes ring {\r\n    0% {\r\n      width: 30px;\r\n      height: 30px;\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      width: 300px;\r\n      height: 300px;\r\n      opacity: 0;\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/generator.js":
/*!**************************!*\
  !*** ./src/generator.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$maincontent": () => (/* binding */ $maincontent),
/* harmony export */   "generatebones": () => (/* binding */ generatebones)
/* harmony export */ });
/* harmony import */ var _imgindex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgindex */ "./src/imgindex.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _makeatodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeatodo */ "./src/makeatodo.js");
/* harmony import */ var _newfolderui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newfolderui */ "./src/newfolderui.js");
const $maincontent = document.querySelector('.maincontent')
;





function generarmaindiv(){
    
    //div izq main content
    const seleccionSELECT = document.getElementById('selectfolder')
    seleccionSELECT.addEventListener("change", function() {
        const selectedValue = this.value;
        (0,_main__WEBPACK_IMPORTED_MODULE_1__.laseleccionMF)(selectedValue)
        ;(0,_makeatodo__WEBPACK_IMPORTED_MODULE_2__.recargaposts)(selectedValue)
        console.log(selectedValue);
        return 
      });
    const bottonnewfolder = document.querySelector('.buttonnewfolder')
        bottonnewfolder.addEventListener('click', (e)=>{;(0,_newfolderui__WEBPACK_IMPORTED_MODULE_3__.newfolderui)()})
    const bottonnewtask = document.querySelector('.buttonnewtodo')
    bottonnewtask.addEventListener('click', (e)=>{;(0,_makeatodo__WEBPACK_IMPORTED_MODULE_2__.sehaceuntodo)()})
    //div der main content
    const divB = document.createElement('div')
        divB.className = 'divB'
        $maincontent.append(divB)
}

function generatebones(){
    //menuizq
    const divizq = document.querySelector('.izquierda')
    //header
    const divheader = document.querySelector('.headerbar')
    for (let index = 0; index < 13; index++) {
        if((index < 5) || (index == 6) || ( (index >= 8) && (index <= 10)) || (index == 12)){
            let nuevoicono = new Image()
            nuevoicono.src = _imgindex__WEBPACK_IMPORTED_MODULE_0__.bibliodeiconos[index]
            divheader.append(nuevoicono)
        }else if(index == 5){
            let nuevoicono = new Image()
            nuevoicono.style.height = '0'
            divheader.append(nuevoicono)
        }else if(index == 7){
            const p = document.createElement('p')
            p.innerText = 'Español'
            divheader.append(p)
        }else if(index == 11){
            const nuevousuario = document.createElement('p')
            nuevousuario.innerHTML = 'Juan Villegas<br>Admin'
            divheader.append(nuevousuario)
        }
    }
    //maindiv
    generarmaindiv()
}




/***/ }),

/***/ "./src/imgindex.js":
/*!*************************!*\
  !*** ./src/imgindex.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bibliodeiconos": () => (/* binding */ bibliodeiconos)
/* harmony export */ });
/* harmony import */ var _src_chat_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/chat.png */ "./src/chat.png");
/* harmony import */ var _src_checked_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/checked.png */ "./src/checked.png");
/* harmony import */ var _src_information_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/information.png */ "./src/information.png");
/* harmony import */ var _src_message_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/message.png */ "./src/message.png");
/* harmony import */ var _src_star_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/star.png */ "./src/star.png");
/* harmony import */ var _src_mexicoflag_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/mexicoflag.png */ "./src/mexicoflag.png");
/* harmony import */ var _src_search_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/search.png */ "./src/search.png");
/* harmony import */ var _src_cart_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/cart.png */ "./src/cart.png");
/* harmony import */ var _src_notification_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/notification.png */ "./src/notification.png");
/* harmony import */ var _src_profile_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/profile.png */ "./src/profile.png");
/* harmony import */ var _src_trash_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/trash.png */ "./src/trash.png");
/* harmony import */ var _src_exit_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/exit.png */ "./src/exit.png");














const bibliodeiconos = {
    "0": _src_chat_png__WEBPACK_IMPORTED_MODULE_0__,
    "1": _src_checked_png__WEBPACK_IMPORTED_MODULE_1__,
    "2": _src_information_png__WEBPACK_IMPORTED_MODULE_2__,
    "3": _src_message_png__WEBPACK_IMPORTED_MODULE_3__,
    "4": _src_star_png__WEBPACK_IMPORTED_MODULE_4__,
    "6": _src_mexicoflag_png__WEBPACK_IMPORTED_MODULE_5__,
    "8": _src_search_png__WEBPACK_IMPORTED_MODULE_6__,
    "9": _src_cart_png__WEBPACK_IMPORTED_MODULE_7__,
    "10": _src_notification_png__WEBPACK_IMPORTED_MODULE_8__,
    "12": _src_profile_png__WEBPACK_IMPORTED_MODULE_9__,
    "13": _src_checked_png__WEBPACK_IMPORTED_MODULE_1__,
    "14": _src_trash_png__WEBPACK_IMPORTED_MODULE_10__,
    "15": _src_exit_png__WEBPACK_IMPORTED_MODULE_11__
}



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contador": () => (/* binding */ contador),
/* harmony export */   "cuantascarpetastienemain": () => (/* binding */ cuantascarpetastienemain),
/* harmony export */   "laseleccionMF": () => (/* binding */ laseleccionMF),
/* harmony export */   "mainfolder": () => (/* binding */ mainfolder),
/* harmony export */   "mainvarfortodo": () => (/* binding */ mainvarfortodo),
/* harmony export */   "seleccionMF": () => (/* binding */ seleccionMF)
/* harmony export */ });
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ "./src/generator.js");
/* harmony import */ var _makeatodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeatodo */ "./src/makeatodo.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



let mainfolder = []
let mainvarfortodo = []
let seleccionMF
let contador = 0
let cuantascarpetastienemain = 0
;(0,_generator__WEBPACK_IMPORTED_MODULE_0__.generatebones)()

function laseleccionMF(num){
    seleccionMF = num
}


window.addEventListener("load", function() {
    if(this.localStorage.length == 0){
        seleccionMF = 0
        ;(0,_makeatodo__WEBPACK_IMPORTED_MODULE_1__.NuevaCarpeta)('Carpeta 1')
        let $selecciondefault = document.createElement('option')
            $selecciondefault.value = seleccionMF.toString()
            $selecciondefault.innerText = mainfolder[0].nombredecarpeta
            document.getElementById('selectfolder').append($selecciondefault)
    }else {
        mainfolder = []
        for (let index = 0; index < localStorage.length; index++) {
            let item = localStorage.getItem(index);
            let parsed = JSON.parse(item);
            console.log(item,index)
            console.log(mainfolder, 'antes del parse',index)
            mainfolder[index] = parsed
            console.log(parsed,index)
            console.log(mainfolder, 'luegodel parse',index)
            // mainfolder = parsed
            let $selecciondefault = document.createElement('option')
            seleccionMF = index;
            $selecciondefault.value = seleccionMF.toString()
            console.log(mainfolder, index)
            $selecciondefault.innerText = mainfolder[index].nombredecarpeta
            document.getElementById('selectfolder').append($selecciondefault)
        } 
        seleccionMF = 0
        ;(0,_makeatodo__WEBPACK_IMPORTED_MODULE_1__.recargaposts)(0)
        // contador = mainfolder[seleccionMF].sustodos.length
    }
    document.querySelector('.newfolder').style.display = "grid";
    document.querySelector('.oscurito').style.display = "block";
    
    console.log('finaldemain', mainfolder)
    cuantascarpetastienemain = mainfolder.length
  });





/***/ }),

/***/ "./src/makeatodo.js":
/*!**************************!*\
  !*** ./src/makeatodo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NuevaCarpeta": () => (/* binding */ NuevaCarpeta),
/* harmony export */   "contacarpetas": () => (/* binding */ contacarpetas),
/* harmony export */   "elresto": () => (/* binding */ elresto),
/* harmony export */   "postearUI": () => (/* binding */ postearUI),
/* harmony export */   "recargaposts": () => (/* binding */ recargaposts),
/* harmony export */   "sehaceuntodo": () => (/* binding */ sehaceuntodo)
/* harmony export */ });
/* harmony import */ var _imgindex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgindex */ "./src/imgindex.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/main.js");


let contacarpetas = 0


const NuevaCarpeta = (titulocarp) => {
    let nuevofolder = {
        nombredecarpeta: titulocarp,
        sustodos: new Array
    }
    if(localStorage.length == 0){
        
        console.log(contacarpetas, 'primeracarpeta')
        _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder.push(nuevofolder)
        console.log(nuevofolder, 'nuevofolder NUEVA CARPETA')
        console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder, 'mainfolder con nuevofolder NUEVA CARPETA')
        console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[0].nombredecarpeta, 'mainfolder con nuevofolder NUEVA CARPETA')
        localStorage.setItem(0,JSON.stringify(nuevofolder))
        // console.log(contacarpetas, 'luego de primeracarpeta')
    }else{
        console.log(contacarpetas, 'segundacarpeta before')
        contacarpetas = _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder.length
        console.log(nuevofolder, 'nuevo fold antes de push')
        _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder.push(nuevofolder)
        const selectnewfolder = document.getElementById('selectfolder')
                let $seleccioncarp = document.createElement('option')
                $seleccioncarp.value = (_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder.length - 1).toString()
                $seleccioncarp.innerText = titulocarp
                selectnewfolder.append($seleccioncarp)
        console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder, 'luegodel push a mainfolder')
        for (let index = 0; index < _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder.length; index++) {
            localStorage.setItem(index,JSON.stringify(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[index]))
        }
        console.log(localStorage)
    }
    console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder, 'luegodecrearfolder')
    console.log(localStorage, 'localstorage')
    
}

const Nuevotodo = (titulo, desc) => {
    const title = titulo
    const descripcion = desc
    return {title,descripcion}
}

function postearUI(titulo, desc,index){
    const eldivb = document.querySelector('.divB')
    const divpost = document.createElement('div')
    const divcontent = document.createElement('div')
    let count = document.querySelector('.divB').childElementCount + 1
    divpost.className = ("post num" + count.toString())
    const p = document.createElement('p')
    p.innerText = titulo
    const p2 = document.createElement('p')
    let shorterstring = desc.slice(0,30)
    p2.innerText = shorterstring + '...'
    const buttondelete = document.createElement('button')
    buttondelete.innerText = 'X'
    buttondelete.classList.add('delete')
    buttondelete.addEventListener('click', (e) =>{
        console.log('antes', _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder)
        _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF].sustodos.splice(index,1)
        console.log('despues', _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder)
        localStorage.setItem(_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF,JSON.stringify(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF]))
        console.log(_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF)
        divpost.remove()
    })
    divcontent.append(p,p2)
    divpost.append(divcontent)
    divpost.append(buttondelete)
    eldivb.append(divpost)
}

const elresto = document.querySelector('.oscurito')
const $divparaeltodo = document.querySelector('.slide')
const cerrar = document.querySelector('.cerrar')
const estrella = document.querySelector('.star')
estrella.src = _imgindex__WEBPACK_IMPORTED_MODULE_0__.bibliodeiconos[4]
cerrar.src = _imgindex__WEBPACK_IMPORTED_MODULE_0__.bibliodeiconos[15]
    cerrar.addEventListener('click', (e)=>{
        $divparaeltodo.classList.toggle('active')
        elresto.classList.toggle('inactive')
    })
const $titulo = document.querySelector('#Titulo')
const $botoncrear = document.querySelector('#botoncrear')
const $contenido = document.querySelector('#contenido')

$botoncrear.addEventListener('click',(e)=>{
    secrea($titulo.value, $contenido.value)
})

function sehaceuntodo(){
    $divparaeltodo.classList.toggle('active')
    elresto.classList.toggle('inactive')
    $titulo.value = ''
    $contenido.value = ''
}

function secrea (titulo, desc){
    let nuevoitem = Nuevotodo(titulo, desc)
    console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder)
    _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF].sustodos.push(nuevoitem)
    console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder, 'afterpush')
    // mainvarfortodo.push(nuevoitem)
    // mainfolder[seleccionMF].sustodos.push = mainvarfortodo
    postearUI(nuevoitem.title,nuevoitem.descripcion,_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF].sustodos.length - 1)
    console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF].sustodos.length - 1, 'index?')
    console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainvarfortodo, 'secrea')
    console.log(nuevoitem, 'secrea')
    console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder, 'secrea')
    console.log(_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF, 'secrea')
    localStorage.setItem(_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF,JSON.stringify(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF]))
}

function recargaposts (num) {
    console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[num])
    document.querySelector('.divB').innerHTML = ''
    for (let index = 0; index < _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[num].sustodos.length; index++) {
        let b = _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[num].sustodos[index]
        postearUI(b.title,b.descripcion,_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[num].sustodos.indexOf(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[num].sustodos[index]))
    }
}



/***/ }),

/***/ "./src/newfolderui.js":
/*!****************************!*\
  !*** ./src/newfolderui.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newfolderui": () => (/* binding */ newfolderui)
/* harmony export */ });
/* harmony import */ var _imgindex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgindex */ "./src/imgindex.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _makeatodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeatodo */ "./src/makeatodo.js");




const bottonnewfolder = document.getElementById('botoncrearcarpeta')

const nombrenewfolder = document.getElementById('NombredeNuevaCarpeta')
const cerrarx = document.querySelector('.iconos.cerrarcarpeta')
const uinuevofolder = document.querySelector('.newfolder')
cerrarx.src = _imgindex__WEBPACK_IMPORTED_MODULE_0__.bibliodeiconos[15]
cerrarx.addEventListener('click',(e)=>{
    _makeatodo__WEBPACK_IMPORTED_MODULE_2__.elresto.classList.toggle('inactive')
    uinuevofolder.classList.toggle('active')
})
bottonnewfolder.addEventListener('click',(e)=>{
    ;(0,_makeatodo__WEBPACK_IMPORTED_MODULE_2__.NuevaCarpeta)(nombrenewfolder.value)
    _makeatodo__WEBPACK_IMPORTED_MODULE_2__.elresto.classList.toggle('inactive')
    uinuevofolder.classList.toggle('active')
})
function newfolderui(){
    _makeatodo__WEBPACK_IMPORTED_MODULE_2__.elresto.classList.toggle('inactive')
    uinuevofolder.classList.toggle('active')
}



/***/ }),

/***/ "./src/cart.png":
/*!**********************!*\
  !*** ./src/cart.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/fd7efef2528953f41743.png";

/***/ }),

/***/ "./src/chat.png":
/*!**********************!*\
  !*** ./src/chat.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/ed81216f0a2318ba09a5.png";

/***/ }),

/***/ "./src/checked.png":
/*!*************************!*\
  !*** ./src/checked.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/26dc9b310077c8c82d66.png";

/***/ }),

/***/ "./src/exit.png":
/*!**********************!*\
  !*** ./src/exit.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/1bef7a919a4df0fce11c.png";

/***/ }),

/***/ "./src/information.png":
/*!*****************************!*\
  !*** ./src/information.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/86c0601bf76bf409d279.png";

/***/ }),

/***/ "./src/message.png":
/*!*************************!*\
  !*** ./src/message.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/2e57660a9550a7734cfb.png";

/***/ }),

/***/ "./src/mexicoflag.png":
/*!****************************!*\
  !*** ./src/mexicoflag.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/07d607aa11d9f3f72747.png";

/***/ }),

/***/ "./src/notification.png":
/*!******************************!*\
  !*** ./src/notification.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/484858d4a78592e53374.png";

/***/ }),

/***/ "./src/profile.png":
/*!*************************!*\
  !*** ./src/profile.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/5faf09a7795d28bf5a2b.png";

/***/ }),

/***/ "./src/search.png":
/*!************************!*\
  !*** ./src/search.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/76569e8932c2d5c0a495.png";

/***/ }),

/***/ "./src/star.png":
/*!**********************!*\
  !*** ./src/star.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/31f56353221ca9d677f6.png";

/***/ }),

/***/ "./src/trash.png":
/*!***********************!*\
  !*** ./src/trash.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/75a240e2c6fe787afc0e.png";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxvQkFBb0IsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFVB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QUM7QUFDRDtBQUNBLElBQUksZ0VBQXdCO0FBQzVCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbWdpbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tYWtlYXRvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9uZXdmb2xkZXJ1aS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCUgMHB4IDBweCAwcHg7XFxyXFxufVxcclxcbi5jb250ZW5lZG9ye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg4MHB4LDgwcHgpIG1pbm1heCgzMDBweCxhdXRvKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDB2aDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4uY29udGVuZWRvci5pbmFjdGl2ZXtcXHJcXG4gICAgb3BhY2l0eTogMjAlO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuLm9zY3VyaXRve1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG4ub3NjdXJpdG8uaW5hY3RpdmV7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDgwJSk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcbi5penF1aWVyZGF7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtcXHJcXG59XFxyXFxuLmRlcmVjaGF7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4zZnIgNWZyIDAuMmZyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcbi5oZWFkZXJiYXJ7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4IDMwcHggMzBweCBtaW5tYXgoMzAwcHgsMTAwJSkgYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uaGVhZGVyYmFyPmltZ3tcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuLm1haW5jb250ZW50e1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMC4xcHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmV5O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5pY29ub3N7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuLmRpdkF7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMC4xcHggc29saWQgbGlnaHRncmV5O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC41ZnIgOGZyO1xcclxcbn1cXHJcXG4uZGl2QT5kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbi5zbGlkZXtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggM3B4IDZweCwgcmdiKDAgMCAwIC8gMjMlKSAwcHggM3B4IDZweDtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDAuMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC41ZnIgMC41ZnIgMC4yZnIgN2ZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNsaWRlLmFjdGl2ZXtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwMHB4LDBweCk7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxufVxcclxcbi50aXR1bG9zbGlkZXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyIDFmcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufSBcXHJcXG50ZXh0YXJlYXtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG59XFxyXFxuLmRpdnRpdHVsb3tcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuaW5wdXQ6Y2hlY2tlZHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5uZXdmb2xkZXJ7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA0MCU7XFxyXFxuICAgIGxlZnQ6IDQwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDNweCA2cHgsIHJnYigwIDAgMCAvIDIzJSkgMHB4IDNweCA2cHg7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAwLjFweCBzb2xpZCBsaWdodGdyZXk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjVmciAwLjVmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG4ubmV3Zm9sZGVyLmFjdGl2ZXtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IC41cztcXHJcXG5cXHJcXG59XFxyXFxuLnBvc3R7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDAuNWZyO1xcclxcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JleTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggM3B4IDZweCwgcmdiKDAgMCAwIC8gMjMlKSAwcHggM3B4IDZweDtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogMjBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuLmRlbGV0ZXtcXHJcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gICAgbWluLWhlaWdodDogNjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjNweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgY29sb3I6ICMzMTMxMzM7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0RkQxQzU7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTI5LDIzMCwyMTcsMSkgMCUsIHJnYmEoNzksMjA5LDE5NywxKSAxMDAlKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDEycHggMTJweCAyNHB4IHJnYmEoNzksMjA5LDE5NywuNjQpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAuZGVsZXRlOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXHJcXG4gICAgbWluLXdpZHRoOiBjYWxjKDMwMHB4ICsgMTJweCk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoNjBweCArIDEycHgpO1xcclxcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjMDBGRkNCO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgNjBweCByZ2JhKDAsMjU1LDIwMywuNjQpO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0IDBzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlOmhvdmVyLCAuZGVsZXRlOmZvY3VzIHtcXHJcXG4gICAgY29sb3I6ICMzMTMxMzM7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZTpob3Zlcjo6YmVmb3JlLCAuZGVsZXRlOmZvY3VzOjpiZWZvcmUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICB3aWR0aDogMzBweDsgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjMDBGRkNCO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgYW5pbWF0aW9uOiByaW5nIDEuNXMgaW5maW5pdGU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGU6aG92ZXI6OmFmdGVyLCAuZGVsZXRlOmZvY3VzOjphZnRlciB7XFxyXFxuICAgIGFuaW1hdGlvbjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQGtleWZyYW1lcyByaW5nIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFFBQVE7SUFDUixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxhQUFh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RUFFQTtJQUNFLGNBQWM7SUFDZCwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVyxFQUFFLFlBQVk7SUFDekIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixhQUFhO0VBQ2Y7O0VBRUE7SUFDRTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osVUFBVTtJQUNaO0lBQ0E7TUFDRSxZQUFZO01BQ1osYUFBYTtNQUNiLFVBQVU7SUFDWjtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAwcHggMHB4IDBweDtcXHJcXG59XFxyXFxuLmNvbnRlbmVkb3J7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDgwcHgsODBweCkgbWlubWF4KDMwMHB4LGF1dG8pO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHZoO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbi5jb250ZW5lZG9yLmluYWN0aXZle1xcclxcbiAgICBvcGFjaXR5OiAyMCU7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG4ub3NjdXJpdG97XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcbi5vc2N1cml0by5pbmFjdGl2ZXtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgODAlKTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG59XFxyXFxuLml6cXVpZXJkYXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xcclxcbn1cXHJcXG4uZGVyZWNoYXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjNmciA1ZnIgMC4yZnI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuLmhlYWRlcmJhcntcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHggMzBweCAzMHB4IG1pbm1heCgzMDBweCwxMDAlKSBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5oZWFkZXJiYXI+aW1ne1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG4ubWFpbmNvbnRlbnR7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmljb25vc3tcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG4uZGl2QXtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjFweCBzb2xpZCBsaWdodGdyZXk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjVmciA4ZnI7XFxyXFxufVxcclxcbi5kaXZBPmRpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuLnNsaWRle1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAzcHggNnB4LCByZ2IoMCAwIDAgLyAyMyUpIDBweCAzcHggNnB4O1xcclxcbiAgICBib3JkZXItbGVmdDogMC4xcHggc29saWQgbGlnaHRncmV5O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjVmciAwLjVmciAwLjJmciA3ZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uc2xpZGUuYWN0aXZle1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAwcHgsMHB4KTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuLnRpdHVsb3NsaWRle1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59IFxcclxcbnRleHRhcmVhe1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbn1cXHJcXG4uZGl2dGl0dWxve1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJde1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5pbnB1dDpjaGVja2Vke1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLm5ld2ZvbGRlcntcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDQwJTtcXHJcXG4gICAgbGVmdDogNDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggM3B4IDZweCwgcmdiKDAgMCAwIC8gMjMlKSAwcHggM3B4IDZweDtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDAuMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDAuNWZyIDAuNWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcbi5uZXdmb2xkZXIuYWN0aXZle1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcclxcblxcclxcbn1cXHJcXG4ucG9zdHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMC41ZnI7XFxyXFxuICAgIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmV5O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAzcHggNnB4LCByZ2IoMCAwIDAgLyAyMyUpIDBweCAzcHggNnB4O1xcclxcbiAgICBtYXJnaW4taW5saW5lOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4uZGVsZXRle1xcclxcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjb2xvcjogIzMxMzEzMztcXHJcXG4gICAgYmFja2dyb3VuZDogIzRGRDFDNTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMjksMjMwLDIxNywxKSAwJSwgcmdiYSg3OSwyMDksMTk3LDEpIDEwMCUpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMTJweCAxMnB4IDI0cHggcmdiYSg3OSwyMDksMTk3LC42NCk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIC5kZWxldGU6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcclxcbiAgICBtaW4td2lkdGg6IGNhbGMoMzAwcHggKyAxMnB4KTtcXHJcXG4gICAgbWluLWhlaWdodDogY2FsYyg2MHB4ICsgMTJweCk7XFxyXFxuICAgIGJvcmRlcjogNnB4IHNvbGlkICMwMEZGQ0I7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwyNTUsMjAzLC42NCk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQgMHM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGU6aG92ZXIsIC5kZWxldGU6Zm9jdXMge1xcclxcbiAgICBjb2xvcjogIzMxMzEzMztcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlOmhvdmVyOjpiZWZvcmUsIC5kZWxldGU6Zm9jdXM6OmJlZm9yZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGU6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogNnB4IHNvbGlkICMwMEZGQ0I7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBhbmltYXRpb246IHJpbmcgMS41cyBpbmZpbml0ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZTpob3Zlcjo6YWZ0ZXIsIC5kZWxldGU6Zm9jdXM6OmFmdGVyIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIHJpbmcge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0ICRtYWluY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluY29udGVudCcpXHJcbmltcG9ydCB7IGJpYmxpb2RlaWNvbm9zIH0gZnJvbSBcIi4vaW1naW5kZXhcIlxyXG5pbXBvcnQgeyBsYXNlbGVjY2lvbk1GIH0gZnJvbSBcIi4vbWFpblwiXHJcblxyXG5pbXBvcnQge3JlY2FyZ2Fwb3N0cywgc2VoYWNldW50b2RvfSBmcm9tIFwiLi9tYWtlYXRvZG9cIlxyXG5pbXBvcnQgeyBuZXdmb2xkZXJ1aSB9IGZyb20gXCIuL25ld2ZvbGRlcnVpXCJcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXJtYWluZGl2KCl7XHJcbiAgICBcclxuICAgIC8vZGl2IGl6cSBtYWluIGNvbnRlbnRcclxuICAgIGNvbnN0IHNlbGVjY2lvblNFTEVDVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3Rmb2xkZXInKVxyXG4gICAgc2VsZWNjaW9uU0VMRUNULmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgbGFzZWxlY2Npb25NRihzZWxlY3RlZFZhbHVlKVxyXG4gICAgICAgIHJlY2FyZ2Fwb3N0cyhzZWxlY3RlZFZhbHVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkVmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBcclxuICAgICAgfSk7XHJcbiAgICBjb25zdCBib3R0b25uZXdmb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9ubmV3Zm9sZGVyJylcclxuICAgICAgICBib3R0b25uZXdmb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntuZXdmb2xkZXJ1aSgpfSlcclxuICAgIGNvbnN0IGJvdHRvbm5ld3Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9ubmV3dG9kbycpXHJcbiAgICBib3R0b25uZXd0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57c2VoYWNldW50b2RvKCl9KVxyXG4gICAgLy9kaXYgZGVyIG1haW4gY29udGVudFxyXG4gICAgY29uc3QgZGl2QiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgZGl2Qi5jbGFzc05hbWUgPSAnZGl2QidcclxuICAgICAgICAkbWFpbmNvbnRlbnQuYXBwZW5kKGRpdkIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlYm9uZXMoKXtcclxuICAgIC8vbWVudWl6cVxyXG4gICAgY29uc3QgZGl2aXpxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml6cXVpZXJkYScpXHJcbiAgICAvL2hlYWRlclxyXG4gICAgY29uc3QgZGl2aGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcmJhcicpXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTM7IGluZGV4KyspIHtcclxuICAgICAgICBpZigoaW5kZXggPCA1KSB8fCAoaW5kZXggPT0gNikgfHwgKCAoaW5kZXggPj0gOCkgJiYgKGluZGV4IDw9IDEwKSkgfHwgKGluZGV4ID09IDEyKSl7XHJcbiAgICAgICAgICAgIGxldCBudWV2b2ljb25vID0gbmV3IEltYWdlKClcclxuICAgICAgICAgICAgbnVldm9pY29uby5zcmMgPSBiaWJsaW9kZWljb25vc1tpbmRleF1cclxuICAgICAgICAgICAgZGl2aGVhZGVyLmFwcGVuZChudWV2b2ljb25vKVxyXG4gICAgICAgIH1lbHNlIGlmKGluZGV4ID09IDUpe1xyXG4gICAgICAgICAgICBsZXQgbnVldm9pY29ubyA9IG5ldyBJbWFnZSgpXHJcbiAgICAgICAgICAgIG51ZXZvaWNvbm8uc3R5bGUuaGVpZ2h0ID0gJzAnXHJcbiAgICAgICAgICAgIGRpdmhlYWRlci5hcHBlbmQobnVldm9pY29ubylcclxuICAgICAgICB9ZWxzZSBpZihpbmRleCA9PSA3KXtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgICBwLmlubmVyVGV4dCA9ICdFc3Bhw7FvbCdcclxuICAgICAgICAgICAgZGl2aGVhZGVyLmFwcGVuZChwKVxyXG4gICAgICAgIH1lbHNlIGlmKGluZGV4ID09IDExKXtcclxuICAgICAgICAgICAgY29uc3QgbnVldm91c3VhcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICAgIG51ZXZvdXN1YXJpby5pbm5lckhUTUwgPSAnSnVhbiBWaWxsZWdhczxicj5BZG1pbidcclxuICAgICAgICAgICAgZGl2aGVhZGVyLmFwcGVuZChudWV2b3VzdWFyaW8pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9tYWluZGl2XHJcbiAgICBnZW5lcmFybWFpbmRpdigpXHJcbn1cclxuXHJcbmV4cG9ydCB7Z2VuZXJhdGVib25lc31cclxuZXhwb3J0IHskbWFpbmNvbnRlbnR9IiwiaW1wb3J0IGljaGF0IGZyb20gJy4uL3NyYy9jaGF0LnBuZydcclxuaW1wb3J0IGljaGVja2VkIGZyb20gJy4uL3NyYy9jaGVja2VkLnBuZydcclxuaW1wb3J0IGlpbmZvcm1hdGlvbiBmcm9tICcuLi9zcmMvaW5mb3JtYXRpb24ucG5nJ1xyXG5pbXBvcnQgaW1lc3NhZ2UgZnJvbSAnLi4vc3JjL21lc3NhZ2UucG5nJ1xyXG5pbXBvcnQgaXN0YXIgZnJvbSAnLi4vc3JjL3N0YXIucG5nJ1xyXG5pbXBvcnQgaWZsYWcgZnJvbSAnLi4vc3JjL21leGljb2ZsYWcucG5nJ1xyXG5pbXBvcnQgaXNlYXJjaCBmcm9tICcuLi9zcmMvc2VhcmNoLnBuZydcclxuaW1wb3J0IGljYXJ0IGZyb20gJy4uL3NyYy9jYXJ0LnBuZydcclxuaW1wb3J0IGliZWxsIGZyb20gJy4uL3NyYy9ub3RpZmljYXRpb24ucG5nJ1xyXG5pbXBvcnQgaXVzZXIgZnJvbSAnLi4vc3JjL3Byb2ZpbGUucG5nJ1xyXG5pbXBvcnQgaWRvbmUgZnJvbSAnLi4vc3JjL2NoZWNrZWQucG5nJ1xyXG5pbXBvcnQgaXRyYXNoIGZyb20gJy4uL3NyYy90cmFzaC5wbmcnXHJcbmltcG9ydCBpZXhpdCBmcm9tICcuLi9zcmMvZXhpdC5wbmcnXHJcblxyXG5jb25zdCBiaWJsaW9kZWljb25vcyA9IHtcclxuICAgIFwiMFwiOiBpY2hhdCxcclxuICAgIFwiMVwiOiBpY2hlY2tlZCxcclxuICAgIFwiMlwiOiBpaW5mb3JtYXRpb24sXHJcbiAgICBcIjNcIjogaW1lc3NhZ2UsXHJcbiAgICBcIjRcIjogaXN0YXIsXHJcbiAgICBcIjZcIjogaWZsYWcsXHJcbiAgICBcIjhcIjogaXNlYXJjaCxcclxuICAgIFwiOVwiOiBpY2FydCxcclxuICAgIFwiMTBcIjogaWJlbGwsXHJcbiAgICBcIjEyXCI6IGl1c2VyLFxyXG4gICAgXCIxM1wiOiBpZG9uZSxcclxuICAgIFwiMTRcIjogaXRyYXNoLFxyXG4gICAgXCIxNVwiOiBpZXhpdFxyXG59XHJcblxyXG5leHBvcnQge2JpYmxpb2RlaWNvbm9zfSIsImltcG9ydCB7IGdlbmVyYXRlYm9uZXMgfSBmcm9tICcuL2dlbmVyYXRvcic7XHJcbmltcG9ydCB7IE51ZXZhQ2FycGV0YSwgcG9zdGVhclVJLCByZWNhcmdhcG9zdHMgfSBmcm9tICcuL21ha2VhdG9kbyc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5sZXQgbWFpbmZvbGRlciA9IFtdXHJcbmxldCBtYWludmFyZm9ydG9kbyA9IFtdXHJcbmxldCBzZWxlY2Npb25NRlxyXG5sZXQgY29udGFkb3IgPSAwXHJcbmxldCBjdWFudGFzY2FycGV0YXN0aWVuZW1haW4gPSAwXHJcbmdlbmVyYXRlYm9uZXMoKVxyXG5cclxuZnVuY3Rpb24gbGFzZWxlY2Npb25NRihudW0pe1xyXG4gICAgc2VsZWNjaW9uTUYgPSBudW1cclxufVxyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcclxuICAgIGlmKHRoaXMubG9jYWxTdG9yYWdlLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICBzZWxlY2Npb25NRiA9IDBcclxuICAgICAgICBOdWV2YUNhcnBldGEoJ0NhcnBldGEgMScpXHJcbiAgICAgICAgbGV0ICRzZWxlY2Npb25kZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcclxuICAgICAgICAgICAgJHNlbGVjY2lvbmRlZmF1bHQudmFsdWUgPSBzZWxlY2Npb25NRi50b1N0cmluZygpXHJcbiAgICAgICAgICAgICRzZWxlY2Npb25kZWZhdWx0LmlubmVyVGV4dCA9IG1haW5mb2xkZXJbMF0ubm9tYnJlZGVjYXJwZXRhXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3Rmb2xkZXInKS5hcHBlbmQoJHNlbGVjY2lvbmRlZmF1bHQpXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgbWFpbmZvbGRlciA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmRleCk7XHJcbiAgICAgICAgICAgIGxldCBwYXJzZWQgPSBKU09OLnBhcnNlKGl0ZW0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLGluZGV4KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYWluZm9sZGVyLCAnYW50ZXMgZGVsIHBhcnNlJyxpbmRleClcclxuICAgICAgICAgICAgbWFpbmZvbGRlcltpbmRleF0gPSBwYXJzZWRcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFyc2VkLGluZGV4KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYWluZm9sZGVyLCAnbHVlZ29kZWwgcGFyc2UnLGluZGV4KVxyXG4gICAgICAgICAgICAvLyBtYWluZm9sZGVyID0gcGFyc2VkXHJcbiAgICAgICAgICAgIGxldCAkc2VsZWNjaW9uZGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcbiAgICAgICAgICAgIHNlbGVjY2lvbk1GID0gaW5kZXg7XHJcbiAgICAgICAgICAgICRzZWxlY2Npb25kZWZhdWx0LnZhbHVlID0gc2VsZWNjaW9uTUYudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYWluZm9sZGVyLCBpbmRleClcclxuICAgICAgICAgICAgJHNlbGVjY2lvbmRlZmF1bHQuaW5uZXJUZXh0ID0gbWFpbmZvbGRlcltpbmRleF0ubm9tYnJlZGVjYXJwZXRhXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3Rmb2xkZXInKS5hcHBlbmQoJHNlbGVjY2lvbmRlZmF1bHQpXHJcbiAgICAgICAgfSBcclxuICAgICAgICBzZWxlY2Npb25NRiA9IDBcclxuICAgICAgICByZWNhcmdhcG9zdHMoMClcclxuICAgICAgICAvLyBjb250YWRvciA9IG1haW5mb2xkZXJbc2VsZWNjaW9uTUZdLnN1c3RvZG9zLmxlbmd0aFxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld2ZvbGRlcicpLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vc2N1cml0bycpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCdmaW5hbGRlbWFpbicsIG1haW5mb2xkZXIpXHJcbiAgICBjdWFudGFzY2FycGV0YXN0aWVuZW1haW4gPSBtYWluZm9sZGVyLmxlbmd0aFxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5leHBvcnQge21haW52YXJmb3J0b2RvLCBtYWluZm9sZGVyLCBzZWxlY2Npb25NRiwgY29udGFkb3IsIGN1YW50YXNjYXJwZXRhc3RpZW5lbWFpbiwgbGFzZWxlY2Npb25NRn0iLCJpbXBvcnQgeyBiaWJsaW9kZWljb25vcyB9IGZyb20gXCIuL2ltZ2luZGV4XCJcclxuaW1wb3J0IHsgY29udGFkb3IsIG1haW5mb2xkZXIsIG1haW52YXJmb3J0b2RvLCBzZWxlY2Npb25NRiB9IGZyb20gXCIuL21haW5cIlxyXG5sZXQgY29udGFjYXJwZXRhcyA9IDBcclxuXHJcblxyXG5jb25zdCBOdWV2YUNhcnBldGEgPSAodGl0dWxvY2FycCkgPT4ge1xyXG4gICAgbGV0IG51ZXZvZm9sZGVyID0ge1xyXG4gICAgICAgIG5vbWJyZWRlY2FycGV0YTogdGl0dWxvY2FycCxcclxuICAgICAgICBzdXN0b2RvczogbmV3IEFycmF5XHJcbiAgICB9XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UubGVuZ3RoID09IDApe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRhY2FycGV0YXMsICdwcmltZXJhY2FycGV0YScpXHJcbiAgICAgICAgbWFpbmZvbGRlci5wdXNoKG51ZXZvZm9sZGVyKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG51ZXZvZm9sZGVyLCAnbnVldm9mb2xkZXIgTlVFVkEgQ0FSUEVUQScpXHJcbiAgICAgICAgY29uc29sZS5sb2cobWFpbmZvbGRlciwgJ21haW5mb2xkZXIgY29uIG51ZXZvZm9sZGVyIE5VRVZBIENBUlBFVEEnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1haW5mb2xkZXJbMF0ubm9tYnJlZGVjYXJwZXRhLCAnbWFpbmZvbGRlciBjb24gbnVldm9mb2xkZXIgTlVFVkEgQ0FSUEVUQScpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oMCxKU09OLnN0cmluZ2lmeShudWV2b2ZvbGRlcikpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29udGFjYXJwZXRhcywgJ2x1ZWdvIGRlIHByaW1lcmFjYXJwZXRhJylcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRhY2FycGV0YXMsICdzZWd1bmRhY2FycGV0YSBiZWZvcmUnKVxyXG4gICAgICAgIGNvbnRhY2FycGV0YXMgPSBtYWluZm9sZGVyLmxlbmd0aFxyXG4gICAgICAgIGNvbnNvbGUubG9nKG51ZXZvZm9sZGVyLCAnbnVldm8gZm9sZCBhbnRlcyBkZSBwdXNoJylcclxuICAgICAgICBtYWluZm9sZGVyLnB1c2gobnVldm9mb2xkZXIpXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0bmV3Zm9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGZvbGRlcicpXHJcbiAgICAgICAgICAgICAgICBsZXQgJHNlbGVjY2lvbmNhcnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxyXG4gICAgICAgICAgICAgICAgJHNlbGVjY2lvbmNhcnAudmFsdWUgPSAobWFpbmZvbGRlci5sZW5ndGggLSAxKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAkc2VsZWNjaW9uY2FycC5pbm5lclRleHQgPSB0aXR1bG9jYXJwXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RuZXdmb2xkZXIuYXBwZW5kKCRzZWxlY2Npb25jYXJwKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1haW5mb2xkZXIsICdsdWVnb2RlbCBwdXNoIGEgbWFpbmZvbGRlcicpXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1haW5mb2xkZXIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGluZGV4LEpTT04uc3RyaW5naWZ5KG1haW5mb2xkZXJbaW5kZXhdKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cobWFpbmZvbGRlciwgJ2x1ZWdvZGVjcmVhcmZvbGRlcicpXHJcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UsICdsb2NhbHN0b3JhZ2UnKVxyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IE51ZXZvdG9kbyA9ICh0aXR1bG8sIGRlc2MpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gdGl0dWxvXHJcbiAgICBjb25zdCBkZXNjcmlwY2lvbiA9IGRlc2NcclxuICAgIHJldHVybiB7dGl0bGUsZGVzY3JpcGNpb259XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3RlYXJVSSh0aXR1bG8sIGRlc2MsaW5kZXgpe1xyXG4gICAgY29uc3QgZWxkaXZiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpdkInKVxyXG4gICAgY29uc3QgZGl2cG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBkaXZjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxldCBjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXZCJykuY2hpbGRFbGVtZW50Q291bnQgKyAxXHJcbiAgICBkaXZwb3N0LmNsYXNzTmFtZSA9IChcInBvc3QgbnVtXCIgKyBjb3VudC50b1N0cmluZygpKVxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcC5pbm5lclRleHQgPSB0aXR1bG9cclxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBsZXQgc2hvcnRlcnN0cmluZyA9IGRlc2Muc2xpY2UoMCwzMClcclxuICAgIHAyLmlubmVyVGV4dCA9IHNob3J0ZXJzdHJpbmcgKyAnLi4uJ1xyXG4gICAgY29uc3QgYnV0dG9uZGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGJ1dHRvbmRlbGV0ZS5pbm5lclRleHQgPSAnWCdcclxuICAgIGJ1dHRvbmRlbGV0ZS5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKVxyXG4gICAgYnV0dG9uZGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbnRlcycsIG1haW5mb2xkZXIpXHJcbiAgICAgICAgbWFpbmZvbGRlcltzZWxlY2Npb25NRl0uc3VzdG9kb3Muc3BsaWNlKGluZGV4LDEpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Rlc3B1ZXMnLCBtYWluZm9sZGVyKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNlbGVjY2lvbk1GLEpTT04uc3RyaW5naWZ5KG1haW5mb2xkZXJbc2VsZWNjaW9uTUZdKSlcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY2Npb25NRilcclxuICAgICAgICBkaXZwb3N0LnJlbW92ZSgpXHJcbiAgICB9KVxyXG4gICAgZGl2Y29udGVudC5hcHBlbmQocCxwMilcclxuICAgIGRpdnBvc3QuYXBwZW5kKGRpdmNvbnRlbnQpXHJcbiAgICBkaXZwb3N0LmFwcGVuZChidXR0b25kZWxldGUpXHJcbiAgICBlbGRpdmIuYXBwZW5kKGRpdnBvc3QpXHJcbn1cclxuXHJcbmNvbnN0IGVscmVzdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3NjdXJpdG8nKVxyXG5jb25zdCAkZGl2cGFyYWVsdG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZScpXHJcbmNvbnN0IGNlcnJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZXJyYXInKVxyXG5jb25zdCBlc3RyZWxsYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFyJylcclxuZXN0cmVsbGEuc3JjID0gYmlibGlvZGVpY29ub3NbNF1cclxuY2VycmFyLnNyYyA9IGJpYmxpb2RlaWNvbm9zWzE1XVxyXG4gICAgY2VycmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgJGRpdnBhcmFlbHRvZG8uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICAgICAgICBlbHJlc3RvLmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcclxuICAgIH0pXHJcbmNvbnN0ICR0aXR1bG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVGl0dWxvJylcclxuY29uc3QgJGJvdG9uY3JlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm90b25jcmVhcicpXHJcbmNvbnN0ICRjb250ZW5pZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVuaWRvJylcclxuXHJcbiRib3RvbmNyZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcclxuICAgIHNlY3JlYSgkdGl0dWxvLnZhbHVlLCAkY29udGVuaWRvLnZhbHVlKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gc2VoYWNldW50b2RvKCl7XHJcbiAgICAkZGl2cGFyYWVsdG9kby5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgZWxyZXN0by5jbGFzc0xpc3QudG9nZ2xlKCdpbmFjdGl2ZScpXHJcbiAgICAkdGl0dWxvLnZhbHVlID0gJydcclxuICAgICRjb250ZW5pZG8udmFsdWUgPSAnJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWNyZWEgKHRpdHVsbywgZGVzYyl7XHJcbiAgICBsZXQgbnVldm9pdGVtID0gTnVldm90b2RvKHRpdHVsbywgZGVzYylcclxuICAgIGNvbnNvbGUubG9nKG1haW5mb2xkZXIpXHJcbiAgICBtYWluZm9sZGVyW3NlbGVjY2lvbk1GXS5zdXN0b2Rvcy5wdXNoKG51ZXZvaXRlbSlcclxuICAgIGNvbnNvbGUubG9nKG1haW5mb2xkZXIsICdhZnRlcnB1c2gnKVxyXG4gICAgLy8gbWFpbnZhcmZvcnRvZG8ucHVzaChudWV2b2l0ZW0pXHJcbiAgICAvLyBtYWluZm9sZGVyW3NlbGVjY2lvbk1GXS5zdXN0b2Rvcy5wdXNoID0gbWFpbnZhcmZvcnRvZG9cclxuICAgIHBvc3RlYXJVSShudWV2b2l0ZW0udGl0bGUsbnVldm9pdGVtLmRlc2NyaXBjaW9uLG1haW5mb2xkZXJbc2VsZWNjaW9uTUZdLnN1c3RvZG9zLmxlbmd0aCAtIDEpXHJcbiAgICBjb25zb2xlLmxvZyhtYWluZm9sZGVyW3NlbGVjY2lvbk1GXS5zdXN0b2Rvcy5sZW5ndGggLSAxLCAnaW5kZXg/JylcclxuICAgIGNvbnNvbGUubG9nKG1haW52YXJmb3J0b2RvLCAnc2VjcmVhJylcclxuICAgIGNvbnNvbGUubG9nKG51ZXZvaXRlbSwgJ3NlY3JlYScpXHJcbiAgICBjb25zb2xlLmxvZyhtYWluZm9sZGVyLCAnc2VjcmVhJylcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjY2lvbk1GLCAnc2VjcmVhJylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNlbGVjY2lvbk1GLEpTT04uc3RyaW5naWZ5KG1haW5mb2xkZXJbc2VsZWNjaW9uTUZdKSlcclxufVxyXG5cclxuZnVuY3Rpb24gcmVjYXJnYXBvc3RzIChudW0pIHtcclxuICAgIGNvbnNvbGUubG9nKG1haW5mb2xkZXJbbnVtXSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXZCJykuaW5uZXJIVE1MID0gJydcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtYWluZm9sZGVyW251bV0uc3VzdG9kb3MubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgbGV0IGIgPSBtYWluZm9sZGVyW251bV0uc3VzdG9kb3NbaW5kZXhdXHJcbiAgICAgICAgcG9zdGVhclVJKGIudGl0bGUsYi5kZXNjcmlwY2lvbixtYWluZm9sZGVyW251bV0uc3VzdG9kb3MuaW5kZXhPZihtYWluZm9sZGVyW251bV0uc3VzdG9kb3NbaW5kZXhdKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtzZWhhY2V1bnRvZG8sIHBvc3RlYXJVSSwgTnVldmFDYXJwZXRhLGNvbnRhY2FycGV0YXMsIGVscmVzdG8sIHJlY2FyZ2Fwb3N0c30iLCJpbXBvcnQgeyBiaWJsaW9kZWljb25vcyB9IGZyb20gXCIuL2ltZ2luZGV4XCJcclxuaW1wb3J0IHsgY3VhbnRhc2NhcnBldGFzdGllbmVtYWluLCBtYWluZm9sZGVyIH0gZnJvbSBcIi4vbWFpblwiXHJcbmltcG9ydCB7IGNvbnRhY2FycGV0YXMsIGVscmVzdG8sIE51ZXZhQ2FycGV0YSB9IGZyb20gXCIuL21ha2VhdG9kb1wiXHJcblxyXG5jb25zdCBib3R0b25uZXdmb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90b25jcmVhcmNhcnBldGEnKVxyXG5cclxuY29uc3Qgbm9tYnJlbmV3Zm9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ05vbWJyZWRlTnVldmFDYXJwZXRhJylcclxuY29uc3QgY2VycmFyeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29ub3MuY2VycmFyY2FycGV0YScpXHJcbmNvbnN0IHVpbnVldm9mb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3Zm9sZGVyJylcclxuY2VycmFyeC5zcmMgPSBiaWJsaW9kZWljb25vc1sxNV1cclxuY2VycmFyeC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XHJcbiAgICBlbHJlc3RvLmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcclxuICAgIHVpbnVldm9mb2xkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxufSlcclxuYm90dG9ubmV3Zm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcclxuICAgIE51ZXZhQ2FycGV0YShub21icmVuZXdmb2xkZXIudmFsdWUpXHJcbiAgICBlbHJlc3RvLmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcclxuICAgIHVpbnVldm9mb2xkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxufSlcclxuZnVuY3Rpb24gbmV3Zm9sZGVydWkoKXtcclxuICAgIGVscmVzdG8uY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxyXG4gICAgdWludWV2b2ZvbGRlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG59XHJcblxyXG5leHBvcnQge25ld2ZvbGRlcnVpfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9