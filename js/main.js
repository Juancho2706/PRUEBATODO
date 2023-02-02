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
___CSS_LOADER_EXPORT___.push([module.id, "body{\r\n    margin: 0;\r\n    border:0;\r\n    background-color: rgb(236, 236, 236);\r\n    font-family: sans-serif;\r\n    overflow: hidden;\r\n    display: grid;\r\n    grid-template-columns: 100% 0px 0px 0px;\r\n}\r\n.footer{\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n    margin-top: -14px;\r\n    margin-bottom: -20px;\r\n    text-decoration: none;\r\n}\r\n.contenedor{\r\n    display: grid;\r\n    grid-template-columns: minmax(80px,80px) minmax(300px,auto);\r\n    grid-template-rows: 100vh;\r\n    gap: 10px;\r\n}\r\n.contenedor.inactive{\r\n    opacity: 20%;\r\n    pointer-events: none;\r\n}\r\n.oscurito{\r\n    background-color: rgba(0, 0, 0, 0);\r\n    transition: 0.4s;\r\n}\r\n.oscurito.inactive{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 80%);\r\n    z-index: 1;\r\n    transition: 0.4s;\r\n}\r\n.izquierda{\r\n    background-color: rgb(109 113 255);\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n.derecha{\r\n    display: grid;\r\n    grid-template-rows: 0.3fr 5fr 0.2fr;\r\n    gap: 10px;\r\n    padding: 15px;\r\n}\r\n.headerbar{\r\n    gap: 5px;\r\n    display: grid;\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    grid-template-columns: 30px 30px 30px 30px 30px minmax(300px,100%) auto auto auto auto auto auto auto;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-items: center;\r\n    padding-inline: 10px;\r\n    border-radius: 5px;\r\n    background-color: white;\r\n}\r\n.headerbar>img{\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n.maincontent{\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    border-radius: 5px;\r\n    border: 0.1px solid;\r\n    border-color: lightgrey;\r\n    display: grid;\r\n    grid-template-columns: 200px 1fr;\r\n    background-color: white;\r\n}\r\n.iconos{\r\n    height: 20px;\r\n}\r\n.divA{\r\n    border-right: 0.1px solid lightgrey;\r\n    display: grid;\r\n    align-items: center;\r\n    justify-items: center;\r\n    grid-template-rows: 0.5fr 4fr;\r\n    justify-content: center;\r\n}\r\n.divA>div{\r\n    display: grid;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n.slide{\r\n    position: relative;\r\n    background-color: white;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    transition: .4s;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.2fr 0.2fr 7fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n}\r\n.slide.active{\r\n    transform: translate(-300px,0px);\r\n    z-index: 2;\r\n}\r\n.tituloslide{\r\n    display: grid;\r\n    grid-template-columns: 5fr 1fr 1fr;\r\n    background-color: rgb(109 113 255);\r\n    height: 100%;\r\n    width: 100%;\r\n    justify-items: center;\r\n    align-items: center;\r\n} \r\ntextarea{\r\n    resize: none;\r\n    width: 90%;\r\n    height: 90%;\r\n}\r\n.divtitulo{\r\n    padding: 20px;\r\n    display: grid;\r\n}\r\ninput[type=\"checkbox\"]{\r\n    display: none;\r\n}\r\ninput:checked{\r\n    display: block;\r\n}\r\n.foldername{\r\n    padding: 10px;\r\n}\r\n.newfolder{\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 40%;\r\n    background-color: white;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    transition: 0.5s;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: 0.5fr 0.5fr 0.5fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n    z-index: 2;\r\n    pointer-events: none;\r\n    justify-items: center;\r\n}\r\n.newfolder.active{\r\n    pointer-events: auto;\r\n    opacity: 1;\r\n    transition: .5s;\r\n\r\n}\r\n.post{\r\n    display: grid;\r\n    grid-template-columns: 0.5fr 6fr 0.5fr 1fr;\r\n    border: 0.5px solid lightgrey;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    margin-inline: 20px;\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    align-items: center;\r\n    transition: 0.5s;\r\n}\r\n.Baja{\r\n    justify-self: center;\r\n    background-color: rgb(0, 174, 255);\r\n    border-radius: 56px;\r\n    padding: 5px;\r\n    font-size: 0.7em;\r\n    color: white;\r\n    border: 1px solid black;\r\n}\r\n.Media{\r\n    justify-self: center;\r\n    background-color: orange;\r\n    border-radius: 56px;\r\n    padding: 5px;\r\n    font-size: 0.7em;\r\n    color: white;\r\n    border: 1px solid black;\r\n}\r\n.Alta{\r\n    justify-self: center;\r\n    background-color: rgb(255, 72, 0);\r\n    border-radius: 56px;\r\n    padding: 5px;\r\n    font-size: 0.7em;\r\n    color: white;\r\n    border: 1px solid black;\r\n}\r\n.delete{\r\n    width: 35px;\r\n    justify-self: right;\r\n    padding-inline: 2px;\r\n   display: inline-block;\r\noutline: 0;\r\ntext-align: center;\r\ncursor: pointer;\r\nheight: 34px;\r\npadding: 0 13px;\r\ncolor: #fff;\r\nvertical-align: top;\r\nborder-radius: 3px;\r\nborder: 1px solid transparent;\r\ntransition: all .3s ease;\r\nbackground: #cc4d29;\r\nborder-color: #cc4d29;\r\nfont-weight: 600;\r\ntext-transform: uppercase;\r\nline-height: 16px;\r\nfont-size: 11px; \r\n}\r\n\r\n.delete:hover {\r\n    background: #e4461b;\r\n    border-color: #e4461b;\r\n}\r\n\r\n  .btn-24,\r\n.btn-24 *,\r\n.btn-24 :after,\r\n.btn-24 :before,\r\n.btn-24:after,\r\n.btn-24:before {\r\n  border: 0 solid;\r\n  box-sizing: border-box;\r\n}\r\n.btn-24 {\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-appearance: button;\r\n  background-color: #000;\r\n  background-image: none;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\r\n    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,\r\n    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;\r\n  font-size: 100%;\r\n  font-weight: 900;\r\n  line-height: 1.5;\r\n  margin: 0;\r\n  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);\r\n  padding: 0;\r\n  text-transform: uppercase;\r\n}\r\n.btn-24:disabled {\r\n  cursor: default;\r\n}\r\n.btn-24:-moz-focusring {\r\n  outline: auto;\r\n}\r\n.btn-24 svg {\r\n  display: block;\r\n  vertical-align: middle;\r\n}\r\n.btn-24 [hidden] {\r\n  display: none;\r\n}\r\n.btn-24 {\r\n    --background: #4760db;\r\n    background: none;\r\n    overflow: hidden;\r\n    padding: 0.8rem 3rem;\r\n    border-radius: 20px;\r\n    position: relative;\r\n}\r\n.btn-24 span {\r\n  display: block;\r\n  position: relative;\r\n  transition: transform 0.2s ease;\r\n}\r\n.btn-24:after,\r\n.btn-24:before {\r\n  --tilt: 20px;\r\n  background: #fff;\r\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%);\r\n  clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%);\r\n  content: \"\";\r\n  display: block;\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  transition: -webkit-clip-path 0.2s ease;\r\n  transition: clip-path 0.2s ease;\r\n  transition: clip-path 0.2s ease, -webkit-clip-path 0.2s ease;\r\n  width: 100%;\r\n  z-index: -1;\r\n}\r\n.btn-24:after {\r\n  --thickness: 5px;\r\n  background: var(--background);\r\n  height: calc(100% - var(--thickness) * 2);\r\n  left: var(--thickness);\r\n  top: var(--thickness);\r\n  width: calc(100% - var(--thickness) * 2);\r\n}\r\n.btn-24:hover span {\r\n  transform: translateX(-20px);\r\n}\r\n.btn-24:hover:after,\r\n.btn-24:hover:before {\r\n  -webkit-clip-path: polygon(\r\n    0 0,\r\n    calc(100% - var(--tilt)) 0,\r\n    100% 50%,\r\n    calc(100% - var(--tilt)) 100%,\r\n    0 100%\r\n  );\r\n  clip-path: polygon(\r\n    0 0,\r\n    calc(100% - var(--tilt)) 0,\r\n    100% 50%,\r\n    calc(100% - var(--tilt)) 100%,\r\n    0 100%\r\n  );\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body{\r\n    margin: 0;\r\n    border:0;\r\n    background-color: rgb(236, 236, 236);\r\n    font-family: sans-serif;\r\n    overflow: hidden;\r\n    display: grid;\r\n    grid-template-columns: 100% 0px 0px 0px;\r\n}\r\n.footer{\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n    margin-top: -14px;\r\n    margin-bottom: -20px;\r\n    text-decoration: none;\r\n}\r\n.contenedor{\r\n    display: grid;\r\n    grid-template-columns: minmax(80px,80px) minmax(300px,auto);\r\n    grid-template-rows: 100vh;\r\n    gap: 10px;\r\n}\r\n.contenedor.inactive{\r\n    opacity: 20%;\r\n    pointer-events: none;\r\n}\r\n.oscurito{\r\n    background-color: rgba(0, 0, 0, 0);\r\n    transition: 0.4s;\r\n}\r\n.oscurito.inactive{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 80%);\r\n    z-index: 1;\r\n    transition: 0.4s;\r\n}\r\n.izquierda{\r\n    background-color: rgb(109 113 255);\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n.derecha{\r\n    display: grid;\r\n    grid-template-rows: 0.3fr 5fr 0.2fr;\r\n    gap: 10px;\r\n    padding: 15px;\r\n}\r\n.headerbar{\r\n    gap: 5px;\r\n    display: grid;\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    grid-template-columns: 30px 30px 30px 30px 30px minmax(300px,100%) auto auto auto auto auto auto auto;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-items: center;\r\n    padding-inline: 10px;\r\n    border-radius: 5px;\r\n    background-color: white;\r\n}\r\n.headerbar>img{\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n.maincontent{\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    border-radius: 5px;\r\n    border: 0.1px solid;\r\n    border-color: lightgrey;\r\n    display: grid;\r\n    grid-template-columns: 200px 1fr;\r\n    background-color: white;\r\n}\r\n.iconos{\r\n    height: 20px;\r\n}\r\n.divA{\r\n    border-right: 0.1px solid lightgrey;\r\n    display: grid;\r\n    align-items: center;\r\n    justify-items: center;\r\n    grid-template-rows: 0.5fr 4fr;\r\n    justify-content: center;\r\n}\r\n.divA>div{\r\n    display: grid;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n.slide{\r\n    position: relative;\r\n    background-color: white;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    transition: .4s;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.2fr 0.2fr 7fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n}\r\n.slide.active{\r\n    transform: translate(-300px,0px);\r\n    z-index: 2;\r\n}\r\n.tituloslide{\r\n    display: grid;\r\n    grid-template-columns: 5fr 1fr 1fr;\r\n    background-color: rgb(109 113 255);\r\n    height: 100%;\r\n    width: 100%;\r\n    justify-items: center;\r\n    align-items: center;\r\n} \r\ntextarea{\r\n    resize: none;\r\n    width: 90%;\r\n    height: 90%;\r\n}\r\n.divtitulo{\r\n    padding: 20px;\r\n    display: grid;\r\n}\r\ninput[type=\"checkbox\"]{\r\n    display: none;\r\n}\r\ninput:checked{\r\n    display: block;\r\n}\r\n.foldername{\r\n    padding: 10px;\r\n}\r\n.newfolder{\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 40%;\r\n    background-color: white;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    transition: 0.5s;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: 0.5fr 0.5fr 0.5fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n    z-index: 2;\r\n    pointer-events: none;\r\n    justify-items: center;\r\n}\r\n.newfolder.active{\r\n    pointer-events: auto;\r\n    opacity: 1;\r\n    transition: .5s;\r\n\r\n}\r\n.post{\r\n    display: grid;\r\n    grid-template-columns: 0.5fr 6fr 0.5fr 1fr;\r\n    border: 0.5px solid lightgrey;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    margin-inline: 20px;\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    align-items: center;\r\n    transition: 0.5s;\r\n}\r\n.Baja{\r\n    justify-self: center;\r\n    background-color: rgb(0, 174, 255);\r\n    border-radius: 56px;\r\n    padding: 5px;\r\n    font-size: 0.7em;\r\n    color: white;\r\n    border: 1px solid black;\r\n}\r\n.Media{\r\n    justify-self: center;\r\n    background-color: orange;\r\n    border-radius: 56px;\r\n    padding: 5px;\r\n    font-size: 0.7em;\r\n    color: white;\r\n    border: 1px solid black;\r\n}\r\n.Alta{\r\n    justify-self: center;\r\n    background-color: rgb(255, 72, 0);\r\n    border-radius: 56px;\r\n    padding: 5px;\r\n    font-size: 0.7em;\r\n    color: white;\r\n    border: 1px solid black;\r\n}\r\n.delete{\r\n    width: 35px;\r\n    justify-self: right;\r\n    padding-inline: 2px;\r\n   display: inline-block;\r\noutline: 0;\r\ntext-align: center;\r\ncursor: pointer;\r\nheight: 34px;\r\npadding: 0 13px;\r\ncolor: #fff;\r\nvertical-align: top;\r\nborder-radius: 3px;\r\nborder: 1px solid transparent;\r\ntransition: all .3s ease;\r\nbackground: #cc4d29;\r\nborder-color: #cc4d29;\r\nfont-weight: 600;\r\ntext-transform: uppercase;\r\nline-height: 16px;\r\nfont-size: 11px; \r\n}\r\n\r\n.delete:hover {\r\n    background: #e4461b;\r\n    border-color: #e4461b;\r\n}\r\n\r\n  .btn-24,\r\n.btn-24 *,\r\n.btn-24 :after,\r\n.btn-24 :before,\r\n.btn-24:after,\r\n.btn-24:before {\r\n  border: 0 solid;\r\n  box-sizing: border-box;\r\n}\r\n.btn-24 {\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-appearance: button;\r\n  background-color: #000;\r\n  background-image: none;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\r\n    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,\r\n    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;\r\n  font-size: 100%;\r\n  font-weight: 900;\r\n  line-height: 1.5;\r\n  margin: 0;\r\n  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);\r\n  padding: 0;\r\n  text-transform: uppercase;\r\n}\r\n.btn-24:disabled {\r\n  cursor: default;\r\n}\r\n.btn-24:-moz-focusring {\r\n  outline: auto;\r\n}\r\n.btn-24 svg {\r\n  display: block;\r\n  vertical-align: middle;\r\n}\r\n.btn-24 [hidden] {\r\n  display: none;\r\n}\r\n.btn-24 {\r\n    --background: #4760db;\r\n    background: none;\r\n    overflow: hidden;\r\n    padding: 0.8rem 3rem;\r\n    border-radius: 20px;\r\n    position: relative;\r\n}\r\n.btn-24 span {\r\n  display: block;\r\n  position: relative;\r\n  transition: transform 0.2s ease;\r\n}\r\n.btn-24:after,\r\n.btn-24:before {\r\n  --tilt: 20px;\r\n  background: #fff;\r\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%);\r\n  clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%);\r\n  content: \"\";\r\n  display: block;\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  transition: -webkit-clip-path 0.2s ease;\r\n  transition: clip-path 0.2s ease;\r\n  transition: clip-path 0.2s ease, -webkit-clip-path 0.2s ease;\r\n  width: 100%;\r\n  z-index: -1;\r\n}\r\n.btn-24:after {\r\n  --thickness: 5px;\r\n  background: var(--background);\r\n  height: calc(100% - var(--thickness) * 2);\r\n  left: var(--thickness);\r\n  top: var(--thickness);\r\n  width: calc(100% - var(--thickness) * 2);\r\n}\r\n.btn-24:hover span {\r\n  transform: translateX(-20px);\r\n}\r\n.btn-24:hover:after,\r\n.btn-24:hover:before {\r\n  -webkit-clip-path: polygon(\r\n    0 0,\r\n    calc(100% - var(--tilt)) 0,\r\n    100% 50%,\r\n    calc(100% - var(--tilt)) 100%,\r\n    0 100%\r\n  );\r\n  clip-path: polygon(\r\n    0 0,\r\n    calc(100% - var(--tilt)) 0,\r\n    100% 50%,\r\n    calc(100% - var(--tilt)) 100%,\r\n    0 100%\r\n  );\r\n}"],"sourceRoot":""}]);
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
    //footer
    const ilovehtml = document.querySelector('.love')
        ilovehtml.src = _imgindex__WEBPACK_IMPORTED_MODULE_0__.bibliodeiconos[16]
    const igithtml = document.querySelector('.gitlogo')
        igithtml.src = _imgindex__WEBPACK_IMPORTED_MODULE_0__.bibliodeiconos[17]
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
/* harmony import */ var _src_heart_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/heart.png */ "./src/heart.png");
/* harmony import */ var _src_github_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/github.png */ "./src/github.png");
/* harmony import */ var _src_logo_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/logo.png */ "./src/logo.png");

















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
    "15": _src_exit_png__WEBPACK_IMPORTED_MODULE_11__,
    "16": _src_heart_png__WEBPACK_IMPORTED_MODULE_12__,
    "17": _src_github_png__WEBPACK_IMPORTED_MODULE_13__,
    "18": _src_logo_png__WEBPACK_IMPORTED_MODULE_14__
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
            mainfolder[index] = parsed
            let $selecciondefault = document.createElement('option')
            seleccionMF = index;
            $selecciondefault.value = seleccionMF.toString()
            $selecciondefault.innerText = mainfolder[index].nombredecarpeta
            document.getElementById('selectfolder').append($selecciondefault)
        } 
        seleccionMF = 0
        ;(0,_makeatodo__WEBPACK_IMPORTED_MODULE_1__.recargaposts)(0)
    }
    document.querySelector('.newfolder').style.display = "grid";
    document.querySelector('.oscurito').style.display = "block";
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
        _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder.push(nuevofolder)
        localStorage.setItem(0,JSON.stringify(nuevofolder))
    }else{
        contacarpetas = _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder.length
        _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder.push(nuevofolder)
        const selectnewfolder = document.getElementById('selectfolder')
                let $seleccioncarp = document.createElement('option')
                $seleccioncarp.value = (_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder.length - 1).toString()
                $seleccioncarp.innerText = titulocarp
                selectnewfolder.append($seleccioncarp)
        for (let index = 0; index < _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder.length; index++) {
            localStorage.setItem(index,JSON.stringify(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[index]))
        }
    }
}

const Nuevotodo = (titulo, desc, prio) => {
    const title = titulo
    const descripcion = desc
    const today = new Date()
    const prioridad = prio
    const datecreation = today.toLocaleDateString({
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })
    return {title,descripcion,datecreation,prioridad}
}

function postearUI(titulo, desc,index, datetoday, prio){
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
        _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF].sustodos.splice(index,1)
        localStorage.setItem(_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF,JSON.stringify(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF]))
        divpost.remove()
    })
    const fecha = document.createElement('p')
        fecha.innerText = datetoday
    const priori = document.createElement('div')
          priori.className = prio
          priori.append((document.createElement('p').innerText = prio))
          
    divpost.append(fecha)
    divcontent.append(p,p2)
    divpost.append(divcontent)
    divpost.append(priori)
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
const $prioridades = document.getElementById('prioridad')

$botoncrear.addEventListener('click',(e)=>{
    console.log($prioridades.value)
    secrea($titulo.value, $contenido.value,$prioridades.value)
})

function sehaceuntodo(){
    $divparaeltodo.classList.toggle('active')
    elresto.classList.toggle('inactive')
    $titulo.value = ''
    $contenido.value = ''
}

function secrea (titulo, desc, prio){
    let nuevoitem = Nuevotodo(titulo, desc,prio) //
    _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF].sustodos.push(nuevoitem)
    postearUI(nuevoitem.title,nuevoitem.descripcion,_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF].sustodos.length - 1,nuevoitem.datecreation,nuevoitem.prioridad) //
    localStorage.setItem(_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF,JSON.stringify(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF]))
}

function recargaposts (num) {
    document.querySelector('.divB').innerHTML = ''
    for (let index = 0; index < _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[num].sustodos.length; index++) {
        let b = _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[num].sustodos[index]
        postearUI(b.title,b.descripcion,_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[num].sustodos.indexOf(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[num].sustodos[index]),b.datecreation, b.prioridad)
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
/* harmony import */ var _makeatodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeatodo */ "./src/makeatodo.js");



const bottonnewfolder = document.getElementById('botoncrearcarpeta')

const nombrenewfolder = document.getElementById('NombredeNuevaCarpeta')
const cerrarx = document.querySelector('.iconos.cerrarcarpeta')
const uinuevofolder = document.querySelector('.newfolder')
cerrarx.src = _imgindex__WEBPACK_IMPORTED_MODULE_0__.bibliodeiconos[15]
cerrarx.addEventListener('click',(e)=>{
    _makeatodo__WEBPACK_IMPORTED_MODULE_1__.elresto.classList.toggle('inactive')
    uinuevofolder.classList.toggle('active')
})
bottonnewfolder.addEventListener('click',(e)=>{
    ;(0,_makeatodo__WEBPACK_IMPORTED_MODULE_1__.NuevaCarpeta)(nombrenewfolder.value)
    _makeatodo__WEBPACK_IMPORTED_MODULE_1__.elresto.classList.toggle('inactive')
    uinuevofolder.classList.toggle('active')
})
function newfolderui(){
    _makeatodo__WEBPACK_IMPORTED_MODULE_1__.elresto.classList.toggle('inactive')
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

/***/ "./src/github.png":
/*!************************!*\
  !*** ./src/github.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/e4de70655abd41f4aa30.png";

/***/ }),

/***/ "./src/heart.png":
/*!***********************!*\
  !*** ./src/heart.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/a13e3857c7c7f11756ac.png";

/***/ }),

/***/ "./src/information.png":
/*!*****************************!*\
  !*** ./src/information.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/86c0601bf76bf409d279.png";

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/9b447c922e109ed807d1.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssVUFBVSxLQUFLLDhCQUE4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Ozs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ltZ2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21ha2VhdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25ld2ZvbGRlcnVpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAwcHggMHB4IDBweDtcXHJcXG59XFxyXFxuLmZvb3RlcntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4uY29udGVuZWRvcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoODBweCw4MHB4KSBtaW5tYXgoMzAwcHgsYXV0byk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwdmg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuLmNvbnRlbmVkb3IuaW5hY3RpdmV7XFxyXFxuICAgIG9wYWNpdHk6IDIwJTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcbi5vc2N1cml0b3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG59XFxyXFxuLm9zY3VyaXRvLmluYWN0aXZle1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCA4MCUpO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG4uaXpxdWllcmRhe1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5IDExMyAyNTUpO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xcclxcbn1cXHJcXG4uZGVyZWNoYXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjNmciA1ZnIgMC4yZnI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuLmhlYWRlcmJhcntcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHggMzBweCAzMHB4IG1pbm1heCgzMDBweCwxMDAlKSBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5oZWFkZXJiYXI+aW1ne1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG4ubWFpbmNvbnRlbnR7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmljb25vc3tcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG4uZGl2QXtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjFweCBzb2xpZCBsaWdodGdyZXk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA0ZnI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uZGl2QT5kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbi5zbGlkZXtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggM3B4IDZweCwgcmdiKDAgMCAwIC8gMjMlKSAwcHggM3B4IDZweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC41ZnIgMC41ZnIgMC4yZnIgMC4yZnIgN2ZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNsaWRlLmFjdGl2ZXtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwMHB4LDBweCk7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxufVxcclxcbi50aXR1bG9zbGlkZXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyIDFmcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSAxMTMgMjU1KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn0gXFxyXFxudGV4dGFyZWF7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxufVxcclxcbi5kaXZ0aXR1bG97XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbmlucHV0OmNoZWNrZWR7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG4uZm9sZGVybmFtZXtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuLm5ld2ZvbGRlcntcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDQwJTtcXHJcXG4gICAgbGVmdDogNDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggM3B4IDZweCwgcmdiKDAgMCAwIC8gMjMlKSAwcHggM3B4IDZweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDAuNWZyIDAuNWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLm5ld2ZvbGRlci5hY3RpdmV7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNXM7XFxyXFxuXFxyXFxufVxcclxcbi5wb3N0e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDZmciAwLjVmciAxZnI7XFxyXFxuICAgIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmV5O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAzcHggNnB4LCByZ2IoMCAwIDAgLyAyMyUpIDBweCAzcHggNnB4O1xcclxcbiAgICBtYXJnaW4taW5saW5lOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG4uQmFqYXtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNzQsIDI1NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjdlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuLk1lZGlhe1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43ZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi5BbHRhe1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzIsIDApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43ZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi5kZWxldGV7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMnB4O1xcclxcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5vdXRsaW5lOiAwO1xcclxcbnRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5jdXJzb3I6IHBvaW50ZXI7XFxyXFxuaGVpZ2h0OiAzNHB4O1xcclxcbnBhZGRpbmc6IDAgMTNweDtcXHJcXG5jb2xvcjogI2ZmZjtcXHJcXG52ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbmJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG5ib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG50cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxyXFxuYmFja2dyb3VuZDogI2NjNGQyOTtcXHJcXG5ib3JkZXItY29sb3I6ICNjYzRkMjk7XFxyXFxuZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbmxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbmZvbnQtc2l6ZTogMTFweDsgXFxyXFxufVxcclxcblxcclxcbi5kZWxldGU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZTQ0NjFiO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNlNDQ2MWI7XFxyXFxufVxcclxcblxcclxcbiAgLmJ0bi0yNCxcXHJcXG4uYnRuLTI0ICosXFxyXFxuLmJ0bi0yNCA6YWZ0ZXIsXFxyXFxuLmJ0bi0yNCA6YmVmb3JlLFxcclxcbi5idG4tMjQ6YWZ0ZXIsXFxyXFxuLmJ0bi0yNDpiZWZvcmUge1xcclxcbiAgYm9yZGVyOiAwIHNvbGlkO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLmJ0bi0yNCB7XFxyXFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxcclxcbiAgICBTZWdvZSBVSSwgUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgQXJpYWwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZixcXHJcXG4gICAgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2wsIE5vdG8gQ29sb3IgRW1vamk7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIzAwMCwgI2ZmZik7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuLmJ0bi0yNDpkaXNhYmxlZCB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbi5idG4tMjQ6LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgb3V0bGluZTogYXV0bztcXHJcXG59XFxyXFxuLmJ0bi0yNCBzdmcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG4uYnRuLTI0IFtoaWRkZW5dIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5idG4tMjQge1xcclxcbiAgICAtLWJhY2tncm91bmQ6ICM0NzYwZGI7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbSAzcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5idG4tMjQgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxyXFxufVxcclxcbi5idG4tMjQ6YWZ0ZXIsXFxyXFxuLmJ0bi0yNDpiZWZvcmUge1xcclxcbiAgLS10aWx0OiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDUwJSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDUwJSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LWNsaXAtcGF0aCAwLjJzIGVhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMC4ycyBlYXNlO1xcclxcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuMnMgZWFzZSwgLXdlYmtpdC1jbGlwLXBhdGggMC4ycyBlYXNlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuLmJ0bi0yNDphZnRlciB7XFxyXFxuICAtLXRoaWNrbmVzczogNXB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRoaWNrbmVzcykgKiAyKTtcXHJcXG4gIGxlZnQ6IHZhcigtLXRoaWNrbmVzcyk7XFxyXFxuICB0b3A6IHZhcigtLXRoaWNrbmVzcyk7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tdGhpY2tuZXNzKSAqIDIpO1xcclxcbn1cXHJcXG4uYnRuLTI0OmhvdmVyIHNwYW4ge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXHJcXG59XFxyXFxuLmJ0bi0yNDpob3ZlcjphZnRlcixcXHJcXG4uYnRuLTI0OmhvdmVyOmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgMCAwLFxcclxcbiAgICBjYWxjKDEwMCUgLSB2YXIoLS10aWx0KSkgMCxcXHJcXG4gICAgMTAwJSA1MCUsXFxyXFxuICAgIGNhbGMoMTAwJSAtIHZhcigtLXRpbHQpKSAxMDAlLFxcclxcbiAgICAwIDEwMCVcXHJcXG4gICk7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxyXFxuICAgIDAgMCxcXHJcXG4gICAgY2FsYygxMDAlIC0gdmFyKC0tdGlsdCkpIDAsXFxyXFxuICAgIDEwMCUgNTAlLFxcclxcbiAgICBjYWxjKDEwMCUgLSB2YXIoLS10aWx0KSkgMTAwJSxcXHJcXG4gICAgMCAxMDAlXFxyXFxuICApO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFFBQVE7SUFDUixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCx5QkFBeUI7SUFDekIsU0FBUztBQUNiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxr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Ozs7OztHQU1DO0FBQ0hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlIDBweCAwcHggMHB4O1xcclxcbn1cXHJcXG4uZm9vdGVye1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTE0cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5jb250ZW5lZG9ye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg4MHB4LDgwcHgpIG1pbm1heCgzMDBweCxhdXRvKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDB2aDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4uY29udGVuZWRvci5pbmFjdGl2ZXtcXHJcXG4gICAgb3BhY2l0eTogMjAlO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuLm9zY3VyaXRve1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG4ub3NjdXJpdG8uaW5hY3RpdmV7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDgwJSk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcbi5penF1aWVyZGF7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDkgMTEzIDI1NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XFxyXFxufVxcclxcbi5kZXJlY2hhe1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDVmciAwLjJmcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG4uaGVhZGVyYmFye1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweCAzMHB4IDMwcHggbWlubWF4KDMwMHB4LDEwMCUpIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmhlYWRlcmJhcj5pbWd7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcbi5tYWluY29udGVudHtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uaWNvbm9ze1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbi5kaXZBe1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDAuMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDRmcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5kaXZBPmRpdntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuLnNsaWRle1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAzcHggNnB4LCByZ2IoMCAwIDAgLyAyMyUpIDBweCAzcHggNnB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjVmciAwLjVmciAwLjJmciAwLjJmciA3ZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uc2xpZGUuYWN0aXZle1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAwcHgsMHB4KTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuLnRpdHVsb3NsaWRle1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5IDExMyAyNTUpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufSBcXHJcXG50ZXh0YXJlYXtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG59XFxyXFxuLmRpdnRpdHVsb3tcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuaW5wdXQ6Y2hlY2tlZHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5mb2xkZXJuYW1le1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4ubmV3Zm9sZGVye1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNDAlO1xcclxcbiAgICBsZWZ0OiA0MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAzcHggNnB4LCByZ2IoMCAwIDAgLyAyMyUpIDBweCAzcHggNnB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC41ZnIgMC41ZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ubmV3Zm9sZGVyLmFjdGl2ZXtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IC41cztcXHJcXG5cXHJcXG59XFxyXFxuLnBvc3R7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgNmZyIDAuNWZyIDFmcjtcXHJcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyZXk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDNweCA2cHgsIHJnYigwIDAgMCAvIDIzJSkgMHB4IDNweCA2cHg7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcbi5CYWphe1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE3NCwgMjU1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDAuN2VtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG4uTWVkaWF7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjdlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuLkFsdGF7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3MiwgMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjdlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuLmRlbGV0ZXtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiAycHg7XFxyXFxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbm91dGxpbmU6IDA7XFxyXFxudGV4dC1hbGlnbjogY2VudGVyO1xcclxcbmN1cnNvcjogcG9pbnRlcjtcXHJcXG5oZWlnaHQ6IDM0cHg7XFxyXFxucGFkZGluZzogMCAxM3B4O1xcclxcbmNvbG9yOiAjZmZmO1xcclxcbnZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbmJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbnRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcXHJcXG5iYWNrZ3JvdW5kOiAjY2M0ZDI5O1xcclxcbmJvcmRlci1jb2xvcjogI2NjNGQyOTtcXHJcXG5mb250LXdlaWdodDogNjAwO1xcclxcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxubGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuZm9udC1zaXplOiAxMXB4OyBcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlNDQ2MWI7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2U0NDYxYjtcXHJcXG59XFxyXFxuXFxyXFxuICAuYnRuLTI0LFxcclxcbi5idG4tMjQgKixcXHJcXG4uYnRuLTI0IDphZnRlcixcXHJcXG4uYnRuLTI0IDpiZWZvcmUsXFxyXFxuLmJ0bi0yNDphZnRlcixcXHJcXG4uYnRuLTI0OmJlZm9yZSB7XFxyXFxuICBib3JkZXI6IDAgc29saWQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4uYnRuLTI0IHtcXHJcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXFxyXFxuICAgIFNlZ29lIFVJLCBSb2JvdG8sIEhlbHZldGljYSBOZXVlLCBBcmlhbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLFxcclxcbiAgICBBcHBsZSBDb2xvciBFbW9qaSwgU2Vnb2UgVUkgRW1vamksIFNlZ29lIFVJIFN5bWJvbCwgTm90byBDb2xvciBFbW9qaTtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCgjMDAwLCAjZmZmKTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG4uYnRuLTI0OmRpc2FibGVkIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuLmJ0bi0yNDotbW96LWZvY3VzcmluZyB7XFxyXFxuICBvdXRsaW5lOiBhdXRvO1xcclxcbn1cXHJcXG4uYnRuLTI0IHN2ZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcbi5idG4tMjQgW2hpZGRlbl0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmJ0bi0yNCB7XFxyXFxuICAgIC0tYmFja2dyb3VuZDogIzQ3NjBkYjtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcGFkZGluZzogMC44cmVtIDNyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmJ0bi0yNCBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuLmJ0bi0yNDphZnRlcixcXHJcXG4uYnRuLTI0OmJlZm9yZSB7XFxyXFxuICAtLXRpbHQ6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgNTAlLCAxMDAlIDEwMCUsIDAgMTAwJSk7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgNTAlLCAxMDAlIDEwMCUsIDAgMTAwJSk7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtY2xpcC1wYXRoIDAuMnMgZWFzZTtcXHJcXG4gIHRyYW5zaXRpb246IGNsaXAtcGF0aCAwLjJzIGVhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMC4ycyBlYXNlLCAtd2Via2l0LWNsaXAtcGF0aCAwLjJzIGVhc2U7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG4uYnRuLTI0OmFmdGVyIHtcXHJcXG4gIC0tdGhpY2tuZXNzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdGhpY2tuZXNzKSAqIDIpO1xcclxcbiAgbGVmdDogdmFyKC0tdGhpY2tuZXNzKTtcXHJcXG4gIHRvcDogdmFyKC0tdGhpY2tuZXNzKTtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS10aGlja25lc3MpICogMik7XFxyXFxufVxcclxcbi5idG4tMjQ6aG92ZXIgc3BhbiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xcclxcbn1cXHJcXG4uYnRuLTI0OmhvdmVyOmFmdGVyLFxcclxcbi5idG4tMjQ6aG92ZXI6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKFxcclxcbiAgICAwIDAsXFxyXFxuICAgIGNhbGMoMTAwJSAtIHZhcigtLXRpbHQpKSAwLFxcclxcbiAgICAxMDAlIDUwJSxcXHJcXG4gICAgY2FsYygxMDAlIC0gdmFyKC0tdGlsdCkpIDEwMCUsXFxyXFxuICAgIDAgMTAwJVxcclxcbiAgKTtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgMCAwLFxcclxcbiAgICBjYWxjKDEwMCUgLSB2YXIoLS10aWx0KSkgMCxcXHJcXG4gICAgMTAwJSA1MCUsXFxyXFxuICAgIGNhbGMoMTAwJSAtIHZhcigtLXRpbHQpKSAxMDAlLFxcclxcbiAgICAwIDEwMCVcXHJcXG4gICk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0ICRtYWluY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluY29udGVudCcpXHJcbmltcG9ydCB7IGJpYmxpb2RlaWNvbm9zIH0gZnJvbSBcIi4vaW1naW5kZXhcIlxyXG5pbXBvcnQgeyBsYXNlbGVjY2lvbk1GIH0gZnJvbSBcIi4vbWFpblwiXHJcbmltcG9ydCB7cmVjYXJnYXBvc3RzLCBzZWhhY2V1bnRvZG99IGZyb20gXCIuL21ha2VhdG9kb1wiXHJcbmltcG9ydCB7IG5ld2ZvbGRlcnVpIH0gZnJvbSBcIi4vbmV3Zm9sZGVydWlcIlxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhcm1haW5kaXYoKXtcclxuICAgIFxyXG4gICAgLy9kaXYgaXpxIG1haW4gY29udGVudFxyXG4gICAgY29uc3Qgc2VsZWNjaW9uU0VMRUNUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGZvbGRlcicpXHJcbiAgICBzZWxlY2Npb25TRUxFQ1QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBsYXNlbGVjY2lvbk1GKHNlbGVjdGVkVmFsdWUpXHJcbiAgICAgICAgcmVjYXJnYXBvc3RzKHNlbGVjdGVkVmFsdWUpXHJcbiAgICAgICAgcmV0dXJuIFxyXG4gICAgICB9KTtcclxuICAgIGNvbnN0IGJvdHRvbm5ld2ZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25uZXdmb2xkZXInKVxyXG4gICAgICAgIGJvdHRvbm5ld2ZvbGRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e25ld2ZvbGRlcnVpKCl9KVxyXG4gICAgY29uc3QgYm90dG9ubmV3dGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25uZXd0b2RvJylcclxuICAgIGJvdHRvbm5ld3Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntzZWhhY2V1bnRvZG8oKX0pXHJcbiAgICAvL2RpdiBkZXIgbWFpbiBjb250ZW50XHJcbiAgICBjb25zdCBkaXZCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBkaXZCLmNsYXNzTmFtZSA9ICdkaXZCJ1xyXG4gICAgICAgICRtYWluY29udGVudC5hcHBlbmQoZGl2QilcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVib25lcygpe1xyXG4gICAgLy9tZW51aXpxXHJcbiAgICBjb25zdCBkaXZpenEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXpxdWllcmRhJylcclxuICAgIC8vaGVhZGVyXHJcbiAgICBjb25zdCBkaXZoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyYmFyJylcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMzsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmKChpbmRleCA8IDUpIHx8IChpbmRleCA9PSA2KSB8fCAoIChpbmRleCA+PSA4KSAmJiAoaW5kZXggPD0gMTApKSB8fCAoaW5kZXggPT0gMTIpKXtcclxuICAgICAgICAgICAgbGV0IG51ZXZvaWNvbm8gPSBuZXcgSW1hZ2UoKVxyXG4gICAgICAgICAgICBudWV2b2ljb25vLnNyYyA9IGJpYmxpb2RlaWNvbm9zW2luZGV4XVxyXG4gICAgICAgICAgICBkaXZoZWFkZXIuYXBwZW5kKG51ZXZvaWNvbm8pXHJcbiAgICAgICAgfWVsc2UgaWYoaW5kZXggPT0gNSl7XHJcbiAgICAgICAgICAgIGxldCBudWV2b2ljb25vID0gbmV3IEltYWdlKClcclxuICAgICAgICAgICAgbnVldm9pY29uby5zdHlsZS5oZWlnaHQgPSAnMCdcclxuICAgICAgICAgICAgZGl2aGVhZGVyLmFwcGVuZChudWV2b2ljb25vKVxyXG4gICAgICAgIH1lbHNlIGlmKGluZGV4ID09IDcpe1xyXG4gICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICAgIHAuaW5uZXJUZXh0ID0gJ0VzcGHDsW9sJ1xyXG4gICAgICAgICAgICBkaXZoZWFkZXIuYXBwZW5kKHApXHJcbiAgICAgICAgfWVsc2UgaWYoaW5kZXggPT0gMTEpe1xyXG4gICAgICAgICAgICBjb25zdCBudWV2b3VzdWFyaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAgICAgbnVldm91c3VhcmlvLmlubmVySFRNTCA9ICdKdWFuIFZpbGxlZ2FzPGJyPkFkbWluJ1xyXG4gICAgICAgICAgICBkaXZoZWFkZXIuYXBwZW5kKG51ZXZvdXN1YXJpbylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL21haW5kaXZcclxuICAgIGdlbmVyYXJtYWluZGl2KClcclxuICAgIC8vZm9vdGVyXHJcbiAgICBjb25zdCBpbG92ZWh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG92ZScpXHJcbiAgICAgICAgaWxvdmVodG1sLnNyYyA9IGJpYmxpb2RlaWNvbm9zWzE2XVxyXG4gICAgY29uc3QgaWdpdGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2l0bG9nbycpXHJcbiAgICAgICAgaWdpdGh0bWwuc3JjID0gYmlibGlvZGVpY29ub3NbMTddXHJcbn1cclxuXHJcbmV4cG9ydCB7Z2VuZXJhdGVib25lc31cclxuZXhwb3J0IHskbWFpbmNvbnRlbnR9IiwiaW1wb3J0IGljaGF0IGZyb20gJy4uL3NyYy9jaGF0LnBuZydcclxuaW1wb3J0IGljaGVja2VkIGZyb20gJy4uL3NyYy9jaGVja2VkLnBuZydcclxuaW1wb3J0IGlpbmZvcm1hdGlvbiBmcm9tICcuLi9zcmMvaW5mb3JtYXRpb24ucG5nJ1xyXG5pbXBvcnQgaW1lc3NhZ2UgZnJvbSAnLi4vc3JjL21lc3NhZ2UucG5nJ1xyXG5pbXBvcnQgaXN0YXIgZnJvbSAnLi4vc3JjL3N0YXIucG5nJ1xyXG5pbXBvcnQgaWZsYWcgZnJvbSAnLi4vc3JjL21leGljb2ZsYWcucG5nJ1xyXG5pbXBvcnQgaXNlYXJjaCBmcm9tICcuLi9zcmMvc2VhcmNoLnBuZydcclxuaW1wb3J0IGljYXJ0IGZyb20gJy4uL3NyYy9jYXJ0LnBuZydcclxuaW1wb3J0IGliZWxsIGZyb20gJy4uL3NyYy9ub3RpZmljYXRpb24ucG5nJ1xyXG5pbXBvcnQgaXVzZXIgZnJvbSAnLi4vc3JjL3Byb2ZpbGUucG5nJ1xyXG5pbXBvcnQgaWRvbmUgZnJvbSAnLi4vc3JjL2NoZWNrZWQucG5nJ1xyXG5pbXBvcnQgaXRyYXNoIGZyb20gJy4uL3NyYy90cmFzaC5wbmcnXHJcbmltcG9ydCBpZXhpdCBmcm9tICcuLi9zcmMvZXhpdC5wbmcnXHJcbmltcG9ydCBpbG92ZSBmcm9tICcuLi9zcmMvaGVhcnQucG5nJ1xyXG5pbXBvcnQgaWdpdCBmcm9tICcuLi9zcmMvZ2l0aHViLnBuZydcclxuaW1wb3J0IGlsb2dvIGZyb20gJy4uL3NyYy9sb2dvLnBuZydcclxuXHJcbmNvbnN0IGJpYmxpb2RlaWNvbm9zID0ge1xyXG4gICAgXCIwXCI6IGljaGF0LFxyXG4gICAgXCIxXCI6IGljaGVja2VkLFxyXG4gICAgXCIyXCI6IGlpbmZvcm1hdGlvbixcclxuICAgIFwiM1wiOiBpbWVzc2FnZSxcclxuICAgIFwiNFwiOiBpc3RhcixcclxuICAgIFwiNlwiOiBpZmxhZyxcclxuICAgIFwiOFwiOiBpc2VhcmNoLFxyXG4gICAgXCI5XCI6IGljYXJ0LFxyXG4gICAgXCIxMFwiOiBpYmVsbCxcclxuICAgIFwiMTJcIjogaXVzZXIsXHJcbiAgICBcIjEzXCI6IGlkb25lLFxyXG4gICAgXCIxNFwiOiBpdHJhc2gsXHJcbiAgICBcIjE1XCI6IGlleGl0LFxyXG4gICAgXCIxNlwiOiBpbG92ZSxcclxuICAgIFwiMTdcIjogaWdpdCxcclxuICAgIFwiMThcIjogaWxvZ29cclxufVxyXG5cclxuZXhwb3J0IHtiaWJsaW9kZWljb25vc30iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCB7IGdlbmVyYXRlYm9uZXMgfSBmcm9tICcuL2dlbmVyYXRvcic7XHJcbmltcG9ydCB7IE51ZXZhQ2FycGV0YSwgcmVjYXJnYXBvc3RzIH0gZnJvbSAnLi9tYWtlYXRvZG8nO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmxldCBtYWluZm9sZGVyID0gW11cclxubGV0IG1haW52YXJmb3J0b2RvID0gW11cclxubGV0IHNlbGVjY2lvbk1GXHJcbmxldCBjb250YWRvciA9IDBcclxubGV0IGN1YW50YXNjYXJwZXRhc3RpZW5lbWFpbiA9IDBcclxuZ2VuZXJhdGVib25lcygpXHJcblxyXG5mdW5jdGlvbiBsYXNlbGVjY2lvbk1GKG51bSl7XHJcbiAgICBzZWxlY2Npb25NRiA9IG51bVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBpZih0aGlzLmxvY2FsU3RvcmFnZS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgc2VsZWNjaW9uTUYgPSAwXHJcbiAgICAgICAgTnVldmFDYXJwZXRhKCdDYXJwZXRhIDEnKVxyXG4gICAgICAgIGxldCAkc2VsZWNjaW9uZGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcbiAgICAgICAgICAgICRzZWxlY2Npb25kZWZhdWx0LnZhbHVlID0gc2VsZWNjaW9uTUYudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAkc2VsZWNjaW9uZGVmYXVsdC5pbm5lclRleHQgPSBtYWluZm9sZGVyWzBdLm5vbWJyZWRlY2FycGV0YVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0Zm9sZGVyJykuYXBwZW5kKCRzZWxlY2Npb25kZWZhdWx0KVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIG1haW5mb2xkZXIgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5kZXgpO1xyXG4gICAgICAgICAgICBsZXQgcGFyc2VkID0gSlNPTi5wYXJzZShpdGVtKTtcclxuICAgICAgICAgICAgbWFpbmZvbGRlcltpbmRleF0gPSBwYXJzZWRcclxuICAgICAgICAgICAgbGV0ICRzZWxlY2Npb25kZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcclxuICAgICAgICAgICAgc2VsZWNjaW9uTUYgPSBpbmRleDtcclxuICAgICAgICAgICAgJHNlbGVjY2lvbmRlZmF1bHQudmFsdWUgPSBzZWxlY2Npb25NRi50b1N0cmluZygpXHJcbiAgICAgICAgICAgICRzZWxlY2Npb25kZWZhdWx0LmlubmVyVGV4dCA9IG1haW5mb2xkZXJbaW5kZXhdLm5vbWJyZWRlY2FycGV0YVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0Zm9sZGVyJykuYXBwZW5kKCRzZWxlY2Npb25kZWZhdWx0KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgc2VsZWNjaW9uTUYgPSAwXHJcbiAgICAgICAgcmVjYXJnYXBvc3RzKDApXHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3Zm9sZGVyJykuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9zY3VyaXRvJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGN1YW50YXNjYXJwZXRhc3RpZW5lbWFpbiA9IG1haW5mb2xkZXIubGVuZ3RoXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7bWFpbnZhcmZvcnRvZG8sIG1haW5mb2xkZXIsIHNlbGVjY2lvbk1GLCBjb250YWRvciwgY3VhbnRhc2NhcnBldGFzdGllbmVtYWluLCBsYXNlbGVjY2lvbk1GfSIsImltcG9ydCB7IHNldERhdGUgfSBmcm9tIFwiZGF0ZS1mbnNcIlxyXG5pbXBvcnQgeyBiaWJsaW9kZWljb25vcyB9IGZyb20gXCIuL2ltZ2luZGV4XCJcclxuaW1wb3J0IHsgbWFpbmZvbGRlciwgc2VsZWNjaW9uTUYgfSBmcm9tIFwiLi9tYWluXCJcclxuXHJcbmxldCBjb250YWNhcnBldGFzID0gMFxyXG5cclxuY29uc3QgTnVldmFDYXJwZXRhID0gKHRpdHVsb2NhcnApID0+IHtcclxuICAgIGxldCBudWV2b2ZvbGRlciA9IHtcclxuICAgICAgICBub21icmVkZWNhcnBldGE6IHRpdHVsb2NhcnAsXHJcbiAgICAgICAgc3VzdG9kb3M6IG5ldyBBcnJheVxyXG4gICAgfVxyXG4gICAgaWYobG9jYWxTdG9yYWdlLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICBtYWluZm9sZGVyLnB1c2gobnVldm9mb2xkZXIpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oMCxKU09OLnN0cmluZ2lmeShudWV2b2ZvbGRlcikpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb250YWNhcnBldGFzID0gbWFpbmZvbGRlci5sZW5ndGhcclxuICAgICAgICBtYWluZm9sZGVyLnB1c2gobnVldm9mb2xkZXIpXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0bmV3Zm9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGZvbGRlcicpXHJcbiAgICAgICAgICAgICAgICBsZXQgJHNlbGVjY2lvbmNhcnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxyXG4gICAgICAgICAgICAgICAgJHNlbGVjY2lvbmNhcnAudmFsdWUgPSAobWFpbmZvbGRlci5sZW5ndGggLSAxKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAkc2VsZWNjaW9uY2FycC5pbm5lclRleHQgPSB0aXR1bG9jYXJwXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RuZXdmb2xkZXIuYXBwZW5kKCRzZWxlY2Npb25jYXJwKVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtYWluZm9sZGVyLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpbmRleCxKU09OLnN0cmluZ2lmeShtYWluZm9sZGVyW2luZGV4XSkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBOdWV2b3RvZG8gPSAodGl0dWxvLCBkZXNjLCBwcmlvKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRpdHVsb1xyXG4gICAgY29uc3QgZGVzY3JpcGNpb24gPSBkZXNjXHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuICAgIGNvbnN0IHByaW9yaWRhZCA9IHByaW9cclxuICAgIGNvbnN0IGRhdGVjcmVhdGlvbiA9IHRvZGF5LnRvTG9jYWxlRGF0ZVN0cmluZyh7XHJcbiAgICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgICAgbW9udGg6ICcyLWRpZ2l0JyxcclxuICAgICAgICB5ZWFyOiAnbnVtZXJpYydcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge3RpdGxlLGRlc2NyaXBjaW9uLGRhdGVjcmVhdGlvbixwcmlvcmlkYWR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3RlYXJVSSh0aXR1bG8sIGRlc2MsaW5kZXgsIGRhdGV0b2RheSwgcHJpbyl7XHJcbiAgICBjb25zdCBlbGRpdmIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGl2QicpXHJcbiAgICBjb25zdCBkaXZwb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGRpdmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbGV0IGNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpdkInKS5jaGlsZEVsZW1lbnRDb3VudCArIDFcclxuICAgIGRpdnBvc3QuY2xhc3NOYW1lID0gKFwicG9zdCBudW1cIiArIGNvdW50LnRvU3RyaW5nKCkpXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBwLmlubmVyVGV4dCA9IHRpdHVsb1xyXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGxldCBzaG9ydGVyc3RyaW5nID0gZGVzYy5zbGljZSgwLDMwKVxyXG4gICAgcDIuaW5uZXJUZXh0ID0gc2hvcnRlcnN0cmluZyArICcuLi4nXHJcbiAgICBjb25zdCBidXR0b25kZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgYnV0dG9uZGVsZXRlLmlubmVyVGV4dCA9ICdYJ1xyXG4gICAgYnV0dG9uZGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpXHJcbiAgICBidXR0b25kZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XHJcbiAgICAgICAgbWFpbmZvbGRlcltzZWxlY2Npb25NRl0uc3VzdG9kb3Muc3BsaWNlKGluZGV4LDEpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2VsZWNjaW9uTUYsSlNPTi5zdHJpbmdpZnkobWFpbmZvbGRlcltzZWxlY2Npb25NRl0pKVxyXG4gICAgICAgIGRpdnBvc3QucmVtb3ZlKClcclxuICAgIH0pXHJcbiAgICBjb25zdCBmZWNoYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIGZlY2hhLmlubmVyVGV4dCA9IGRhdGV0b2RheVxyXG4gICAgY29uc3QgcHJpb3JpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgIHByaW9yaS5jbGFzc05hbWUgPSBwcmlvXHJcbiAgICAgICAgICBwcmlvcmkuYXBwZW5kKChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykuaW5uZXJUZXh0ID0gcHJpbykpXHJcbiAgICAgICAgICBcclxuICAgIGRpdnBvc3QuYXBwZW5kKGZlY2hhKVxyXG4gICAgZGl2Y29udGVudC5hcHBlbmQocCxwMilcclxuICAgIGRpdnBvc3QuYXBwZW5kKGRpdmNvbnRlbnQpXHJcbiAgICBkaXZwb3N0LmFwcGVuZChwcmlvcmkpXHJcbiAgICBkaXZwb3N0LmFwcGVuZChidXR0b25kZWxldGUpXHJcbiAgICBlbGRpdmIuYXBwZW5kKGRpdnBvc3QpXHJcbn1cclxuXHJcbmNvbnN0IGVscmVzdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3NjdXJpdG8nKVxyXG5jb25zdCAkZGl2cGFyYWVsdG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZScpXHJcbmNvbnN0IGNlcnJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZXJyYXInKVxyXG5jb25zdCBlc3RyZWxsYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFyJylcclxuZXN0cmVsbGEuc3JjID0gYmlibGlvZGVpY29ub3NbNF1cclxuY2VycmFyLnNyYyA9IGJpYmxpb2RlaWNvbm9zWzE1XVxyXG4gICAgY2VycmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgJGRpdnBhcmFlbHRvZG8uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICAgICAgICBlbHJlc3RvLmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcclxuICAgIH0pXHJcbmNvbnN0ICR0aXR1bG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVGl0dWxvJylcclxuY29uc3QgJGJvdG9uY3JlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm90b25jcmVhcicpXHJcbmNvbnN0ICRjb250ZW5pZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVuaWRvJylcclxuY29uc3QgJHByaW9yaWRhZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaWRhZCcpXHJcblxyXG4kYm90b25jcmVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XHJcbiAgICBjb25zb2xlLmxvZygkcHJpb3JpZGFkZXMudmFsdWUpXHJcbiAgICBzZWNyZWEoJHRpdHVsby52YWx1ZSwgJGNvbnRlbmlkby52YWx1ZSwkcHJpb3JpZGFkZXMudmFsdWUpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBzZWhhY2V1bnRvZG8oKXtcclxuICAgICRkaXZwYXJhZWx0b2RvLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICBlbHJlc3RvLmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcclxuICAgICR0aXR1bG8udmFsdWUgPSAnJ1xyXG4gICAgJGNvbnRlbmlkby52YWx1ZSA9ICcnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlY3JlYSAodGl0dWxvLCBkZXNjLCBwcmlvKXtcclxuICAgIGxldCBudWV2b2l0ZW0gPSBOdWV2b3RvZG8odGl0dWxvLCBkZXNjLHByaW8pIC8vXHJcbiAgICBtYWluZm9sZGVyW3NlbGVjY2lvbk1GXS5zdXN0b2Rvcy5wdXNoKG51ZXZvaXRlbSlcclxuICAgIHBvc3RlYXJVSShudWV2b2l0ZW0udGl0bGUsbnVldm9pdGVtLmRlc2NyaXBjaW9uLG1haW5mb2xkZXJbc2VsZWNjaW9uTUZdLnN1c3RvZG9zLmxlbmd0aCAtIDEsbnVldm9pdGVtLmRhdGVjcmVhdGlvbixudWV2b2l0ZW0ucHJpb3JpZGFkKSAvL1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2VsZWNjaW9uTUYsSlNPTi5zdHJpbmdpZnkobWFpbmZvbGRlcltzZWxlY2Npb25NRl0pKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWNhcmdhcG9zdHMgKG51bSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpdkInKS5pbm5lckhUTUwgPSAnJ1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1haW5mb2xkZXJbbnVtXS5zdXN0b2Rvcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBsZXQgYiA9IG1haW5mb2xkZXJbbnVtXS5zdXN0b2Rvc1tpbmRleF1cclxuICAgICAgICBwb3N0ZWFyVUkoYi50aXRsZSxiLmRlc2NyaXBjaW9uLG1haW5mb2xkZXJbbnVtXS5zdXN0b2Rvcy5pbmRleE9mKG1haW5mb2xkZXJbbnVtXS5zdXN0b2Rvc1tpbmRleF0pLGIuZGF0ZWNyZWF0aW9uLCBiLnByaW9yaWRhZClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtzZWhhY2V1bnRvZG8sIHBvc3RlYXJVSSwgTnVldmFDYXJwZXRhLGNvbnRhY2FycGV0YXMsIGVscmVzdG8sIHJlY2FyZ2Fwb3N0c30iLCJpbXBvcnQgeyBiaWJsaW9kZWljb25vcyB9IGZyb20gXCIuL2ltZ2luZGV4XCJcclxuaW1wb3J0IHsgZWxyZXN0bywgTnVldmFDYXJwZXRhIH0gZnJvbSBcIi4vbWFrZWF0b2RvXCJcclxuXHJcbmNvbnN0IGJvdHRvbm5ld2ZvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3RvbmNyZWFyY2FycGV0YScpXHJcblxyXG5jb25zdCBub21icmVuZXdmb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTm9tYnJlZGVOdWV2YUNhcnBldGEnKVxyXG5jb25zdCBjZXJyYXJ4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb25vcy5jZXJyYXJjYXJwZXRhJylcclxuY29uc3QgdWludWV2b2ZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdmb2xkZXInKVxyXG5jZXJyYXJ4LnNyYyA9IGJpYmxpb2RlaWNvbm9zWzE1XVxyXG5jZXJyYXJ4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcclxuICAgIGVscmVzdG8uY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxyXG4gICAgdWludWV2b2ZvbGRlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG59KVxyXG5ib3R0b25uZXdmb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xyXG4gICAgTnVldmFDYXJwZXRhKG5vbWJyZW5ld2ZvbGRlci52YWx1ZSlcclxuICAgIGVscmVzdG8uY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxyXG4gICAgdWludWV2b2ZvbGRlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG59KVxyXG5mdW5jdGlvbiBuZXdmb2xkZXJ1aSgpe1xyXG4gICAgZWxyZXN0by5jbGFzc0xpc3QudG9nZ2xlKCdpbmFjdGl2ZScpXHJcbiAgICB1aW51ZXZvZm9sZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbn1cclxuXHJcbmV4cG9ydCB7bmV3Zm9sZGVydWl9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=