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
___CSS_LOADER_EXPORT___.push([module.id, "body{\r\n    margin: 0;\r\n    border:0;\r\n    background-color: rgb(236, 236, 236);\r\n    font-family: sans-serif;\r\n    overflow: hidden;\r\n    display: grid;\r\n    grid-template-columns: 100% 0px 0px 0px;\r\n}\r\n.footer{\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n    margin-top: -14px;\r\n    margin-bottom: -20px;\r\n    text-decoration: none;\r\n}\r\n.contenedor{\r\n    display: grid;\r\n    grid-template-columns: minmax(80px,80px) minmax(300px,auto);\r\n    grid-template-rows: 100vh;\r\n    gap: 10px;\r\n}\r\n.contenedor.inactive{\r\n    opacity: 20%;\r\n    pointer-events: none;\r\n}\r\n.oscurito{\r\n    background-color: rgba(0, 0, 0, 0);\r\n    transition: 0.4s;\r\n}\r\n.oscurito.inactive{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 80%);\r\n    z-index: 1;\r\n    transition: 0.4s;\r\n}\r\n.izquierda{\r\n    background-color: rgb(109 113 255);\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n.derecha{\r\n    display: grid;\r\n    grid-template-rows: 0.3fr 5fr 0.2fr;\r\n    gap: 10px;\r\n    padding: 15px;\r\n}\r\n.headerbar{\r\n    gap: 5px;\r\n    display: grid;\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    grid-template-columns: 30px 30px 30px 30px 30px minmax(300px,100%) auto auto auto auto auto auto auto;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-items: center;\r\n    padding-inline: 10px;\r\n    border-radius: 5px;\r\n    background-color: white;\r\n}\r\n.headerbar>img{\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n.maincontent{\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    border-radius: 5px;\r\n    border: 0.1px solid;\r\n    border-color: lightgrey;\r\n    display: grid;\r\n    grid-template-columns: 200px 1fr;\r\n    background-color: white;\r\n}\r\n.iconos{\r\n    height: 20px;\r\n}\r\n.divA{\r\n    border-right: 0.1px solid lightgrey;\r\n    display: grid;\r\n    align-items: center;\r\n    justify-items: center;\r\n    grid-template-rows: 0.5fr 4fr;\r\n    justify-content: center;\r\n}\r\n.divA>div{\r\n    display: grid;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n.slide{\r\n    position: relative;\r\n    background-color: white;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    transition: .4s;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.2fr 0.2fr 7fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n}\r\n.slide.active{\r\n    transform: translate(-300px,0px);\r\n    z-index: 2;\r\n}\r\n.tituloslide{\r\n    display: grid;\r\n    grid-template-columns: 5fr 1fr 1fr;\r\n    background-color: rgb(109 113 255);\r\n    height: 100%;\r\n    width: 100%;\r\n    justify-items: center;\r\n    align-items: center;\r\n} \r\ntextarea{\r\n    resize: none;\r\n    width: 90%;\r\n    height: 90%;\r\n}\r\n.divtitulo{\r\n    padding: 20px;\r\n    display: grid;\r\n}\r\ninput[type=\"checkbox\"]{\r\n    display: none;\r\n}\r\ninput:checked{\r\n    display: block;\r\n}\r\n.foldername{\r\n    padding: 10px;\r\n}\r\n.newfolder{\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 40%;\r\n    background-color: white;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    transition: 0.5s;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: 0.5fr 0.5fr 0.5fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n    z-index: 2;\r\n    pointer-events: none;\r\n    justify-items: center;\r\n}\r\n.newfolder.active{\r\n    pointer-events: auto;\r\n    opacity: 1;\r\n    transition: .5s;\r\n\r\n}\r\n.post{\r\n    display: grid;\r\n    grid-template-columns: 0.5fr 6fr 0.5fr 1fr;\r\n    border: 0.5px solid lightgrey;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    margin-inline: 20px;\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    align-items: center;\r\n    transition: 0.5s;\r\n}\r\n.post:hover {\r\n    box-shadow: #D6D6E7 0 3px 7px inset;\r\n    transform: translateY(2px);\r\n}\r\n.Baja{\r\n    justify-self: center;\r\n    background-color: rgb(0, 174, 255);\r\n    border-radius: 56px;\r\n    padding: 5px;\r\n    font-size: 0.7em;\r\n    color: white;\r\n    border: 1px solid black;\r\n}\r\n.Media{\r\n    justify-self: center;\r\n    background-color: orange;\r\n    border-radius: 56px;\r\n    padding: 5px;\r\n    font-size: 0.7em;\r\n    color: white;\r\n    border: 1px solid black;\r\n}\r\n.Alta{\r\n    justify-self: center;\r\n    background-color: rgb(255, 72, 0);\r\n    border-radius: 56px;\r\n    padding: 5px;\r\n    font-size: 0.7em;\r\n    color: white;\r\n    border: 1px solid black;\r\n}\r\n.delete{\r\n    width: 35px;\r\n    justify-self: right;\r\n    padding-inline: 2px;\r\n   display: inline-block;\r\noutline: 0;\r\ntext-align: center;\r\ncursor: pointer;\r\nheight: 34px;\r\npadding: 0 13px;\r\ncolor: #fff;\r\nvertical-align: top;\r\nborder-radius: 3px;\r\nborder: 1px solid transparent;\r\ntransition: all .3s ease;\r\nbackground: #cc4d29;\r\nborder-color: #cc4d29;\r\nfont-weight: 600;\r\ntext-transform: uppercase;\r\nline-height: 16px;\r\nfont-size: 11px; \r\n}\r\n\r\n.delete:hover {\r\n    background: #e4461b;\r\n    border-color: #e4461b;\r\n}\r\n\r\n  .btn-24,\r\n.btn-24 *,\r\n.btn-24 :after,\r\n.btn-24 :before,\r\n.btn-24:after,\r\n.btn-24:before {\r\n  border: 0 solid;\r\n  box-sizing: border-box;\r\n}\r\n.btn-24 {\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-appearance: button;\r\n  background-color: #000;\r\n  background-image: none;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\r\n    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,\r\n    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;\r\n  font-size: 100%;\r\n  font-weight: 900;\r\n  line-height: 1.5;\r\n  margin: 0;\r\n  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);\r\n  padding: 0;\r\n  text-transform: uppercase;\r\n}\r\n.btn-24:disabled {\r\n  cursor: default;\r\n}\r\n.btn-24:-moz-focusring {\r\n  outline: auto;\r\n}\r\n.btn-24 svg {\r\n  display: block;\r\n  vertical-align: middle;\r\n}\r\n.btn-24 [hidden] {\r\n  display: none;\r\n}\r\n.btn-24 {\r\n    --background: #4760db;\r\n    background: none;\r\n    overflow: hidden;\r\n    padding: 0.8rem 3rem;\r\n    border-radius: 20px;\r\n    position: relative;\r\n}\r\n.btn-24 span {\r\n  display: block;\r\n  position: relative;\r\n  transition: transform 0.2s ease;\r\n}\r\n.btn-24:after,\r\n.btn-24:before {\r\n  --tilt: 20px;\r\n  background: #fff;\r\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%);\r\n  clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%);\r\n  content: \"\";\r\n  display: block;\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  transition: -webkit-clip-path 0.2s ease;\r\n  transition: clip-path 0.2s ease;\r\n  transition: clip-path 0.2s ease, -webkit-clip-path 0.2s ease;\r\n  width: 100%;\r\n  z-index: -1;\r\n}\r\n.btn-24:after {\r\n  --thickness: 5px;\r\n  background: var(--background);\r\n  height: calc(100% - var(--thickness) * 2);\r\n  left: var(--thickness);\r\n  top: var(--thickness);\r\n  width: calc(100% - var(--thickness) * 2);\r\n}\r\n.btn-24:hover span {\r\n  transform: translateX(-20px);\r\n}\r\n.btn-24:hover:after,\r\n.btn-24:hover:before {\r\n  -webkit-clip-path: polygon(\r\n    0 0,\r\n    calc(100% - var(--tilt)) 0,\r\n    100% 50%,\r\n    calc(100% - var(--tilt)) 100%,\r\n    0 100%\r\n  );\r\n  clip-path: polygon(\r\n    0 0,\r\n    calc(100% - var(--tilt)) 0,\r\n    100% 50%,\r\n    calc(100% - var(--tilt)) 100%,\r\n    0 100%\r\n  );\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body{\r\n    margin: 0;\r\n    border:0;\r\n    background-color: rgb(236, 236, 236);\r\n    font-family: sans-serif;\r\n    overflow: hidden;\r\n    display: grid;\r\n    grid-template-columns: 100% 0px 0px 0px;\r\n}\r\n.footer{\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n    margin-top: -14px;\r\n    margin-bottom: -20px;\r\n    text-decoration: none;\r\n}\r\n.contenedor{\r\n    display: grid;\r\n    grid-template-columns: minmax(80px,80px) minmax(300px,auto);\r\n    grid-template-rows: 100vh;\r\n    gap: 10px;\r\n}\r\n.contenedor.inactive{\r\n    opacity: 20%;\r\n    pointer-events: none;\r\n}\r\n.oscurito{\r\n    background-color: rgba(0, 0, 0, 0);\r\n    transition: 0.4s;\r\n}\r\n.oscurito.inactive{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 80%);\r\n    z-index: 1;\r\n    transition: 0.4s;\r\n}\r\n.izquierda{\r\n    background-color: rgb(109 113 255);\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n.derecha{\r\n    display: grid;\r\n    grid-template-rows: 0.3fr 5fr 0.2fr;\r\n    gap: 10px;\r\n    padding: 15px;\r\n}\r\n.headerbar{\r\n    gap: 5px;\r\n    display: grid;\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    grid-template-columns: 30px 30px 30px 30px 30px minmax(300px,100%) auto auto auto auto auto auto auto;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-items: center;\r\n    padding-inline: 10px;\r\n    border-radius: 5px;\r\n    background-color: white;\r\n}\r\n.headerbar>img{\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n.maincontent{\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    border-radius: 5px;\r\n    border: 0.1px solid;\r\n    border-color: lightgrey;\r\n    display: grid;\r\n    grid-template-columns: 200px 1fr;\r\n    background-color: white;\r\n}\r\n.iconos{\r\n    height: 20px;\r\n}\r\n.divA{\r\n    border-right: 0.1px solid lightgrey;\r\n    display: grid;\r\n    align-items: center;\r\n    justify-items: center;\r\n    grid-template-rows: 0.5fr 4fr;\r\n    justify-content: center;\r\n}\r\n.divA>div{\r\n    display: grid;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n.slide{\r\n    position: relative;\r\n    background-color: white;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    transition: .4s;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.2fr 0.2fr 7fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n}\r\n.slide.active{\r\n    transform: translate(-300px,0px);\r\n    z-index: 2;\r\n}\r\n.tituloslide{\r\n    display: grid;\r\n    grid-template-columns: 5fr 1fr 1fr;\r\n    background-color: rgb(109 113 255);\r\n    height: 100%;\r\n    width: 100%;\r\n    justify-items: center;\r\n    align-items: center;\r\n} \r\ntextarea{\r\n    resize: none;\r\n    width: 90%;\r\n    height: 90%;\r\n}\r\n.divtitulo{\r\n    padding: 20px;\r\n    display: grid;\r\n}\r\ninput[type=\"checkbox\"]{\r\n    display: none;\r\n}\r\ninput:checked{\r\n    display: block;\r\n}\r\n.foldername{\r\n    padding: 10px;\r\n}\r\n.newfolder{\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 40%;\r\n    background-color: white;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    transition: 0.5s;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: 0.5fr 0.5fr 0.5fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n    z-index: 2;\r\n    pointer-events: none;\r\n    justify-items: center;\r\n}\r\n.newfolder.active{\r\n    pointer-events: auto;\r\n    opacity: 1;\r\n    transition: .5s;\r\n\r\n}\r\n.post{\r\n    display: grid;\r\n    grid-template-columns: 0.5fr 6fr 0.5fr 1fr;\r\n    border: 0.5px solid lightgrey;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    margin-inline: 20px;\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    align-items: center;\r\n    transition: 0.5s;\r\n}\r\n.post:hover {\r\n    box-shadow: #D6D6E7 0 3px 7px inset;\r\n    transform: translateY(2px);\r\n}\r\n.Baja{\r\n    justify-self: center;\r\n    background-color: rgb(0, 174, 255);\r\n    border-radius: 56px;\r\n    padding: 5px;\r\n    font-size: 0.7em;\r\n    color: white;\r\n    border: 1px solid black;\r\n}\r\n.Media{\r\n    justify-self: center;\r\n    background-color: orange;\r\n    border-radius: 56px;\r\n    padding: 5px;\r\n    font-size: 0.7em;\r\n    color: white;\r\n    border: 1px solid black;\r\n}\r\n.Alta{\r\n    justify-self: center;\r\n    background-color: rgb(255, 72, 0);\r\n    border-radius: 56px;\r\n    padding: 5px;\r\n    font-size: 0.7em;\r\n    color: white;\r\n    border: 1px solid black;\r\n}\r\n.delete{\r\n    width: 35px;\r\n    justify-self: right;\r\n    padding-inline: 2px;\r\n   display: inline-block;\r\noutline: 0;\r\ntext-align: center;\r\ncursor: pointer;\r\nheight: 34px;\r\npadding: 0 13px;\r\ncolor: #fff;\r\nvertical-align: top;\r\nborder-radius: 3px;\r\nborder: 1px solid transparent;\r\ntransition: all .3s ease;\r\nbackground: #cc4d29;\r\nborder-color: #cc4d29;\r\nfont-weight: 600;\r\ntext-transform: uppercase;\r\nline-height: 16px;\r\nfont-size: 11px; \r\n}\r\n\r\n.delete:hover {\r\n    background: #e4461b;\r\n    border-color: #e4461b;\r\n}\r\n\r\n  .btn-24,\r\n.btn-24 *,\r\n.btn-24 :after,\r\n.btn-24 :before,\r\n.btn-24:after,\r\n.btn-24:before {\r\n  border: 0 solid;\r\n  box-sizing: border-box;\r\n}\r\n.btn-24 {\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-appearance: button;\r\n  background-color: #000;\r\n  background-image: none;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\r\n    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,\r\n    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;\r\n  font-size: 100%;\r\n  font-weight: 900;\r\n  line-height: 1.5;\r\n  margin: 0;\r\n  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);\r\n  padding: 0;\r\n  text-transform: uppercase;\r\n}\r\n.btn-24:disabled {\r\n  cursor: default;\r\n}\r\n.btn-24:-moz-focusring {\r\n  outline: auto;\r\n}\r\n.btn-24 svg {\r\n  display: block;\r\n  vertical-align: middle;\r\n}\r\n.btn-24 [hidden] {\r\n  display: none;\r\n}\r\n.btn-24 {\r\n    --background: #4760db;\r\n    background: none;\r\n    overflow: hidden;\r\n    padding: 0.8rem 3rem;\r\n    border-radius: 20px;\r\n    position: relative;\r\n}\r\n.btn-24 span {\r\n  display: block;\r\n  position: relative;\r\n  transition: transform 0.2s ease;\r\n}\r\n.btn-24:after,\r\n.btn-24:before {\r\n  --tilt: 20px;\r\n  background: #fff;\r\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%);\r\n  clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%);\r\n  content: \"\";\r\n  display: block;\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  transition: -webkit-clip-path 0.2s ease;\r\n  transition: clip-path 0.2s ease;\r\n  transition: clip-path 0.2s ease, -webkit-clip-path 0.2s ease;\r\n  width: 100%;\r\n  z-index: -1;\r\n}\r\n.btn-24:after {\r\n  --thickness: 5px;\r\n  background: var(--background);\r\n  height: calc(100% - var(--thickness) * 2);\r\n  left: var(--thickness);\r\n  top: var(--thickness);\r\n  width: calc(100% - var(--thickness) * 2);\r\n}\r\n.btn-24:hover span {\r\n  transform: translateX(-20px);\r\n}\r\n.btn-24:hover:after,\r\n.btn-24:hover:before {\r\n  -webkit-clip-path: polygon(\r\n    0 0,\r\n    calc(100% - var(--tilt)) 0,\r\n    100% 50%,\r\n    calc(100% - var(--tilt)) 100%,\r\n    0 100%\r\n  );\r\n  clip-path: polygon(\r\n    0 0,\r\n    calc(100% - var(--tilt)) 0,\r\n    100% 50%,\r\n    calc(100% - var(--tilt)) 100%,\r\n    0 100%\r\n  );\r\n}"],"sourceRoot":""}]);
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
    $divparaeltodo.classList.toggle('active')
    elresto.classList.toggle('inactive')
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
/* harmony export */   "newfolderui": () => (/* binding */ newfolderui),
/* harmony export */   "uinuevofolder": () => (/* binding */ uinuevofolder)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFN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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW1naW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbWFrZWF0b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmV3Zm9sZGVydWkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlIDBweCAwcHggMHB4O1xcclxcbn1cXHJcXG4uZm9vdGVye1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTE0cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5jb250ZW5lZG9ye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg4MHB4LDgwcHgpIG1pbm1heCgzMDBweCxhdXRvKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDB2aDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4uY29udGVuZWRvci5pbmFjdGl2ZXtcXHJcXG4gICAgb3BhY2l0eTogMjAlO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuLm9zY3VyaXRve1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG4ub3NjdXJpdG8uaW5hY3RpdmV7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDgwJSk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcbi5penF1aWVyZGF7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDkgMTEzIDI1NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XFxyXFxufVxcclxcbi5kZXJlY2hhe1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDVmciAwLjJmcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG4uaGVhZGVyYmFye1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweCAzMHB4IDMwcHggbWlubWF4KDMwMHB4LDEwMCUpIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmhlYWRlcmJhcj5pbWd7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcbi5tYWluY29udGVudHtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uaWNvbm9ze1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbi5kaXZBe1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDAuMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDRmcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5kaXZBPmRpdntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuLnNsaWRle1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAzcHggNnB4LCByZ2IoMCAwIDAgLyAyMyUpIDBweCAzcHggNnB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjVmciAwLjVmciAwLjJmciAwLjJmciA3ZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uc2xpZGUuYWN0aXZle1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAwcHgsMHB4KTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuLnRpdHVsb3NsaWRle1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5IDExMyAyNTUpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufSBcXHJcXG50ZXh0YXJlYXtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG59XFxyXFxuLmRpdnRpdHVsb3tcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuaW5wdXQ6Y2hlY2tlZHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5mb2xkZXJuYW1le1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4ubmV3Zm9sZGVye1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNDAlO1xcclxcbiAgICBsZWZ0OiA0MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAzcHggNnB4LCByZ2IoMCAwIDAgLyAyMyUpIDBweCAzcHggNnB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC41ZnIgMC41ZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ubmV3Zm9sZGVyLmFjdGl2ZXtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IC41cztcXHJcXG5cXHJcXG59XFxyXFxuLnBvc3R7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgNmZyIDAuNWZyIDFmcjtcXHJcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyZXk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDNweCA2cHgsIHJnYigwIDAgMCAvIDIzJSkgMHB4IDNweCA2cHg7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcbi5wb3N0OmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogI0Q2RDZFNyAwIDNweCA3cHggaW5zZXQ7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcclxcbn1cXHJcXG4uQmFqYXtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNzQsIDI1NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjdlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuLk1lZGlhe1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43ZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi5BbHRhe1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzIsIDApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43ZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi5kZWxldGV7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMnB4O1xcclxcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5vdXRsaW5lOiAwO1xcclxcbnRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5jdXJzb3I6IHBvaW50ZXI7XFxyXFxuaGVpZ2h0OiAzNHB4O1xcclxcbnBhZGRpbmc6IDAgMTNweDtcXHJcXG5jb2xvcjogI2ZmZjtcXHJcXG52ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbmJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG5ib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG50cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxyXFxuYmFja2dyb3VuZDogI2NjNGQyOTtcXHJcXG5ib3JkZXItY29sb3I6ICNjYzRkMjk7XFxyXFxuZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbmxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbmZvbnQtc2l6ZTogMTFweDsgXFxyXFxufVxcclxcblxcclxcbi5kZWxldGU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZTQ0NjFiO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNlNDQ2MWI7XFxyXFxufVxcclxcblxcclxcbiAgLmJ0bi0yNCxcXHJcXG4uYnRuLTI0ICosXFxyXFxuLmJ0bi0yNCA6YWZ0ZXIsXFxyXFxuLmJ0bi0yNCA6YmVmb3JlLFxcclxcbi5idG4tMjQ6YWZ0ZXIsXFxyXFxuLmJ0bi0yNDpiZWZvcmUge1xcclxcbiAgYm9yZGVyOiAwIHNvbGlkO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLmJ0bi0yNCB7XFxyXFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxcclxcbiAgICBTZWdvZSBVSSwgUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgQXJpYWwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZixcXHJcXG4gICAgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2wsIE5vdG8gQ29sb3IgRW1vamk7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIzAwMCwgI2ZmZik7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuLmJ0bi0yNDpkaXNhYmxlZCB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbi5idG4tMjQ6LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgb3V0bGluZTogYXV0bztcXHJcXG59XFxyXFxuLmJ0bi0yNCBzdmcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG4uYnRuLTI0IFtoaWRkZW5dIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5idG4tMjQge1xcclxcbiAgICAtLWJhY2tncm91bmQ6ICM0NzYwZGI7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbSAzcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5idG4tMjQgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxyXFxufVxcclxcbi5idG4tMjQ6YWZ0ZXIsXFxyXFxuLmJ0bi0yNDpiZWZvcmUge1xcclxcbiAgLS10aWx0OiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDUwJSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDUwJSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LWNsaXAtcGF0aCAwLjJzIGVhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMC4ycyBlYXNlO1xcclxcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuMnMgZWFzZSwgLXdlYmtpdC1jbGlwLXBhdGggMC4ycyBlYXNlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuLmJ0bi0yNDphZnRlciB7XFxyXFxuICAtLXRoaWNrbmVzczogNXB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRoaWNrbmVzcykgKiAyKTtcXHJcXG4gIGxlZnQ6IHZhcigtLXRoaWNrbmVzcyk7XFxyXFxuICB0b3A6IHZhcigtLXRoaWNrbmVzcyk7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tdGhpY2tuZXNzKSAqIDIpO1xcclxcbn1cXHJcXG4uYnRuLTI0OmhvdmVyIHNwYW4ge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXHJcXG59XFxyXFxuLmJ0bi0yNDpob3ZlcjphZnRlcixcXHJcXG4uYnRuLTI0OmhvdmVyOmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgMCAwLFxcclxcbiAgICBjYWxjKDEwMCUgLSB2YXIoLS10aWx0KSkgMCxcXHJcXG4gICAgMTAwJSA1MCUsXFxyXFxuICAgIGNhbGMoMTAwJSAtIHZhcigtLXRpbHQpKSAxMDAlLFxcclxcbiAgICAwIDEwMCVcXHJcXG4gICk7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxyXFxuICAgIDAgMCxcXHJcXG4gICAgY2FsYygxMDAlIC0gdmFyKC0tdGlsdCkpIDAsXFxyXFxuICAgIDEwMCUgNTAlLFxcclxcbiAgICBjYWxjKDEwMCUgLSB2YXIoLS10aWx0KSkgMTAwJSxcXHJcXG4gICAgMCAxMDAlXFxyXFxuICApO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFFBQVE7SUFDUixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUNB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QUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLE1BQU07RUFDTix1Q0FBdUM7RUFDdkMsK0JBQStCO0VBQy9CLDREQUE0RDtFQUM1RCxXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHlDQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7O0VBRUU7Ozs7OztHQU1DO0VBQ0Q7Ozs7OztHQU1DO0FBQ0hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlIDBweCAwcHggMHB4O1xcclxcbn1cXHJcXG4uZm9vdGVye1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTE0cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5jb250ZW5lZG9ye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg4MHB4LDgwcHgpIG1pbm1heCgzMDBweCxhdXRvKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDB2aDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4uY29udGVuZWRvci5pbmFjdGl2ZXtcXHJcXG4gICAgb3BhY2l0eTogMjAlO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuLm9zY3VyaXRve1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG4ub3NjdXJpdG8uaW5hY3RpdmV7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDgwJSk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcbi5penF1aWVyZGF7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDkgMTEzIDI1NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XFxyXFxufVxcclxcbi5kZXJlY2hhe1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDVmciAwLjJmcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG4uaGVhZGVyYmFye1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweCAzMHB4IDMwcHggbWlubWF4KDMwMHB4LDEwMCUpIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmhlYWRlcmJhcj5pbWd7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcbi5tYWluY29udGVudHtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uaWNvbm9ze1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbi5kaXZBe1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDAuMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDRmcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5kaXZBPmRpdntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuLnNsaWRle1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAzcHggNnB4LCByZ2IoMCAwIDAgLyAyMyUpIDBweCAzcHggNnB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjVmciAwLjVmciAwLjJmciAwLjJmciA3ZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uc2xpZGUuYWN0aXZle1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAwcHgsMHB4KTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuLnRpdHVsb3NsaWRle1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5IDExMyAyNTUpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufSBcXHJcXG50ZXh0YXJlYXtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG59XFxyXFxuLmRpdnRpdHVsb3tcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuaW5wdXQ6Y2hlY2tlZHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5mb2xkZXJuYW1le1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4ubmV3Zm9sZGVye1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNDAlO1xcclxcbiAgICBsZWZ0OiA0MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAzcHggNnB4LCByZ2IoMCAwIDAgLyAyMyUpIDBweCAzcHggNnB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC41ZnIgMC41ZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ubmV3Zm9sZGVyLmFjdGl2ZXtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IC41cztcXHJcXG5cXHJcXG59XFxyXFxuLnBvc3R7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgNmZyIDAuNWZyIDFmcjtcXHJcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyZXk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDNweCA2cHgsIHJnYigwIDAgMCAvIDIzJSkgMHB4IDNweCA2cHg7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcbi5wb3N0OmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogI0Q2RDZFNyAwIDNweCA3cHggaW5zZXQ7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcclxcbn1cXHJcXG4uQmFqYXtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNzQsIDI1NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjdlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuLk1lZGlhe1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43ZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi5BbHRhe1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzIsIDApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43ZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi5kZWxldGV7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMnB4O1xcclxcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5vdXRsaW5lOiAwO1xcclxcbnRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5jdXJzb3I6IHBvaW50ZXI7XFxyXFxuaGVpZ2h0OiAzNHB4O1xcclxcbnBhZGRpbmc6IDAgMTNweDtcXHJcXG5jb2xvcjogI2ZmZjtcXHJcXG52ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbmJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG5ib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG50cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxyXFxuYmFja2dyb3VuZDogI2NjNGQyOTtcXHJcXG5ib3JkZXItY29sb3I6ICNjYzRkMjk7XFxyXFxuZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbmxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbmZvbnQtc2l6ZTogMTFweDsgXFxyXFxufVxcclxcblxcclxcbi5kZWxldGU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZTQ0NjFiO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNlNDQ2MWI7XFxyXFxufVxcclxcblxcclxcbiAgLmJ0bi0yNCxcXHJcXG4uYnRuLTI0ICosXFxyXFxuLmJ0bi0yNCA6YWZ0ZXIsXFxyXFxuLmJ0bi0yNCA6YmVmb3JlLFxcclxcbi5idG4tMjQ6YWZ0ZXIsXFxyXFxuLmJ0bi0yNDpiZWZvcmUge1xcclxcbiAgYm9yZGVyOiAwIHNvbGlkO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLmJ0bi0yNCB7XFxyXFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxcclxcbiAgICBTZWdvZSBVSSwgUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgQXJpYWwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZixcXHJcXG4gICAgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2wsIE5vdG8gQ29sb3IgRW1vamk7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIzAwMCwgI2ZmZik7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuLmJ0bi0yNDpkaXNhYmxlZCB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbi5idG4tMjQ6LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgb3V0bGluZTogYXV0bztcXHJcXG59XFxyXFxuLmJ0bi0yNCBzdmcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG4uYnRuLTI0IFtoaWRkZW5dIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5idG4tMjQge1xcclxcbiAgICAtLWJhY2tncm91bmQ6ICM0NzYwZGI7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbSAzcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5idG4tMjQgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxyXFxufVxcclxcbi5idG4tMjQ6YWZ0ZXIsXFxyXFxuLmJ0bi0yNDpiZWZvcmUge1xcclxcbiAgLS10aWx0OiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDUwJSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDUwJSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LWNsaXAtcGF0aCAwLjJzIGVhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMC4ycyBlYXNlO1xcclxcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuMnMgZWFzZSwgLXdlYmtpdC1jbGlwLXBhdGggMC4ycyBlYXNlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuLmJ0bi0yNDphZnRlciB7XFxyXFxuICAtLXRoaWNrbmVzczogNXB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRoaWNrbmVzcykgKiAyKTtcXHJcXG4gIGxlZnQ6IHZhcigtLXRoaWNrbmVzcyk7XFxyXFxuICB0b3A6IHZhcigtLXRoaWNrbmVzcyk7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tdGhpY2tuZXNzKSAqIDIpO1xcclxcbn1cXHJcXG4uYnRuLTI0OmhvdmVyIHNwYW4ge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXHJcXG59XFxyXFxuLmJ0bi0yNDpob3ZlcjphZnRlcixcXHJcXG4uYnRuLTI0OmhvdmVyOmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgMCAwLFxcclxcbiAgICBjYWxjKDEwMCUgLSB2YXIoLS10aWx0KSkgMCxcXHJcXG4gICAgMTAwJSA1MCUsXFxyXFxuICAgIGNhbGMoMTAwJSAtIHZhcigtLXRpbHQpKSAxMDAlLFxcclxcbiAgICAwIDEwMCVcXHJcXG4gICk7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxyXFxuICAgIDAgMCxcXHJcXG4gICAgY2FsYygxMDAlIC0gdmFyKC0tdGlsdCkpIDAsXFxyXFxuICAgIDEwMCUgNTAlLFxcclxcbiAgICBjYWxjKDEwMCUgLSB2YXIoLS10aWx0KSkgMTAwJSxcXHJcXG4gICAgMCAxMDAlXFxyXFxuICApO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCAkbWFpbmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbmNvbnRlbnQnKVxyXG5pbXBvcnQgeyBiaWJsaW9kZWljb25vcyB9IGZyb20gXCIuL2ltZ2luZGV4XCJcclxuaW1wb3J0IHsgbGFzZWxlY2Npb25NRiB9IGZyb20gXCIuL21haW5cIlxyXG5pbXBvcnQge3JlY2FyZ2Fwb3N0cywgc2VoYWNldW50b2RvfSBmcm9tIFwiLi9tYWtlYXRvZG9cIlxyXG5pbXBvcnQgeyBuZXdmb2xkZXJ1aSB9IGZyb20gXCIuL25ld2ZvbGRlcnVpXCJcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXJtYWluZGl2KCl7XHJcbiAgICBcclxuICAgIC8vZGl2IGl6cSBtYWluIGNvbnRlbnRcclxuICAgIGNvbnN0IHNlbGVjY2lvblNFTEVDVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3Rmb2xkZXInKVxyXG4gICAgc2VsZWNjaW9uU0VMRUNULmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgbGFzZWxlY2Npb25NRihzZWxlY3RlZFZhbHVlKVxyXG4gICAgICAgIHJlY2FyZ2Fwb3N0cyhzZWxlY3RlZFZhbHVlKVxyXG4gICAgICAgIHJldHVybiBcclxuICAgICAgfSk7XHJcbiAgICBjb25zdCBib3R0b25uZXdmb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9ubmV3Zm9sZGVyJylcclxuICAgICAgICBib3R0b25uZXdmb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntuZXdmb2xkZXJ1aSgpfSlcclxuICAgIGNvbnN0IGJvdHRvbm5ld3Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9ubmV3dG9kbycpXHJcbiAgICBib3R0b25uZXd0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57c2VoYWNldW50b2RvKCl9KVxyXG4gICAgLy9kaXYgZGVyIG1haW4gY29udGVudFxyXG4gICAgY29uc3QgZGl2QiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgZGl2Qi5jbGFzc05hbWUgPSAnZGl2QidcclxuICAgICAgICAkbWFpbmNvbnRlbnQuYXBwZW5kKGRpdkIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlYm9uZXMoKXtcclxuICAgIC8vbWVudWl6cVxyXG4gICAgY29uc3QgZGl2aXpxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml6cXVpZXJkYScpXHJcbiAgICAvL2hlYWRlclxyXG4gICAgY29uc3QgZGl2aGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcmJhcicpXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTM7IGluZGV4KyspIHtcclxuICAgICAgICBpZigoaW5kZXggPCA1KSB8fCAoaW5kZXggPT0gNikgfHwgKCAoaW5kZXggPj0gOCkgJiYgKGluZGV4IDw9IDEwKSkgfHwgKGluZGV4ID09IDEyKSl7XHJcbiAgICAgICAgICAgIGxldCBudWV2b2ljb25vID0gbmV3IEltYWdlKClcclxuICAgICAgICAgICAgbnVldm9pY29uby5zcmMgPSBiaWJsaW9kZWljb25vc1tpbmRleF1cclxuICAgICAgICAgICAgZGl2aGVhZGVyLmFwcGVuZChudWV2b2ljb25vKVxyXG4gICAgICAgIH1lbHNlIGlmKGluZGV4ID09IDUpe1xyXG4gICAgICAgICAgICBsZXQgbnVldm9pY29ubyA9IG5ldyBJbWFnZSgpXHJcbiAgICAgICAgICAgIG51ZXZvaWNvbm8uc3R5bGUuaGVpZ2h0ID0gJzAnXHJcbiAgICAgICAgICAgIGRpdmhlYWRlci5hcHBlbmQobnVldm9pY29ubylcclxuICAgICAgICB9ZWxzZSBpZihpbmRleCA9PSA3KXtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgICBwLmlubmVyVGV4dCA9ICdFc3Bhw7FvbCdcclxuICAgICAgICAgICAgZGl2aGVhZGVyLmFwcGVuZChwKVxyXG4gICAgICAgIH1lbHNlIGlmKGluZGV4ID09IDExKXtcclxuICAgICAgICAgICAgY29uc3QgbnVldm91c3VhcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICAgIG51ZXZvdXN1YXJpby5pbm5lckhUTUwgPSAnSnVhbiBWaWxsZWdhczxicj5BZG1pbidcclxuICAgICAgICAgICAgZGl2aGVhZGVyLmFwcGVuZChudWV2b3VzdWFyaW8pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9tYWluZGl2XHJcbiAgICBnZW5lcmFybWFpbmRpdigpXHJcbiAgICAvL2Zvb3RlclxyXG4gICAgY29uc3QgaWxvdmVodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvdmUnKVxyXG4gICAgICAgIGlsb3ZlaHRtbC5zcmMgPSBiaWJsaW9kZWljb25vc1sxNl1cclxuICAgIGNvbnN0IGlnaXRodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdpdGxvZ28nKVxyXG4gICAgICAgIGlnaXRodG1sLnNyYyA9IGJpYmxpb2RlaWNvbm9zWzE3XVxyXG59XHJcblxyXG5leHBvcnQge2dlbmVyYXRlYm9uZXN9XHJcbmV4cG9ydCB7JG1haW5jb250ZW50fSIsImltcG9ydCBpY2hhdCBmcm9tICcuLi9zcmMvY2hhdC5wbmcnXHJcbmltcG9ydCBpY2hlY2tlZCBmcm9tICcuLi9zcmMvY2hlY2tlZC5wbmcnXHJcbmltcG9ydCBpaW5mb3JtYXRpb24gZnJvbSAnLi4vc3JjL2luZm9ybWF0aW9uLnBuZydcclxuaW1wb3J0IGltZXNzYWdlIGZyb20gJy4uL3NyYy9tZXNzYWdlLnBuZydcclxuaW1wb3J0IGlzdGFyIGZyb20gJy4uL3NyYy9zdGFyLnBuZydcclxuaW1wb3J0IGlmbGFnIGZyb20gJy4uL3NyYy9tZXhpY29mbGFnLnBuZydcclxuaW1wb3J0IGlzZWFyY2ggZnJvbSAnLi4vc3JjL3NlYXJjaC5wbmcnXHJcbmltcG9ydCBpY2FydCBmcm9tICcuLi9zcmMvY2FydC5wbmcnXHJcbmltcG9ydCBpYmVsbCBmcm9tICcuLi9zcmMvbm90aWZpY2F0aW9uLnBuZydcclxuaW1wb3J0IGl1c2VyIGZyb20gJy4uL3NyYy9wcm9maWxlLnBuZydcclxuaW1wb3J0IGlkb25lIGZyb20gJy4uL3NyYy9jaGVja2VkLnBuZydcclxuaW1wb3J0IGl0cmFzaCBmcm9tICcuLi9zcmMvdHJhc2gucG5nJ1xyXG5pbXBvcnQgaWV4aXQgZnJvbSAnLi4vc3JjL2V4aXQucG5nJ1xyXG5pbXBvcnQgaWxvdmUgZnJvbSAnLi4vc3JjL2hlYXJ0LnBuZydcclxuaW1wb3J0IGlnaXQgZnJvbSAnLi4vc3JjL2dpdGh1Yi5wbmcnXHJcbmltcG9ydCBpbG9nbyBmcm9tICcuLi9zcmMvbG9nby5wbmcnXHJcblxyXG5jb25zdCBiaWJsaW9kZWljb25vcyA9IHtcclxuICAgIFwiMFwiOiBpY2hhdCxcclxuICAgIFwiMVwiOiBpY2hlY2tlZCxcclxuICAgIFwiMlwiOiBpaW5mb3JtYXRpb24sXHJcbiAgICBcIjNcIjogaW1lc3NhZ2UsXHJcbiAgICBcIjRcIjogaXN0YXIsXHJcbiAgICBcIjZcIjogaWZsYWcsXHJcbiAgICBcIjhcIjogaXNlYXJjaCxcclxuICAgIFwiOVwiOiBpY2FydCxcclxuICAgIFwiMTBcIjogaWJlbGwsXHJcbiAgICBcIjEyXCI6IGl1c2VyLFxyXG4gICAgXCIxM1wiOiBpZG9uZSxcclxuICAgIFwiMTRcIjogaXRyYXNoLFxyXG4gICAgXCIxNVwiOiBpZXhpdCxcclxuICAgIFwiMTZcIjogaWxvdmUsXHJcbiAgICBcIjE3XCI6IGlnaXQsXHJcbiAgICBcIjE4XCI6IGlsb2dvXHJcbn1cclxuXHJcbmV4cG9ydCB7YmlibGlvZGVpY29ub3N9IiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZWJvbmVzIH0gZnJvbSAnLi9nZW5lcmF0b3InO1xyXG5pbXBvcnQgeyBOdWV2YUNhcnBldGEsIHJlY2FyZ2Fwb3N0cyB9IGZyb20gJy4vbWFrZWF0b2RvJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5sZXQgbWFpbmZvbGRlciA9IFtdXHJcbmxldCBtYWludmFyZm9ydG9kbyA9IFtdXHJcbmxldCBzZWxlY2Npb25NRlxyXG5sZXQgY29udGFkb3IgPSAwXHJcbmxldCBjdWFudGFzY2FycGV0YXN0aWVuZW1haW4gPSAwXHJcbmdlbmVyYXRlYm9uZXMoKVxyXG5cclxuZnVuY3Rpb24gbGFzZWxlY2Npb25NRihudW0pe1xyXG4gICAgc2VsZWNjaW9uTUYgPSBudW1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYodGhpcy5sb2NhbFN0b3JhZ2UubGVuZ3RoID09IDApe1xyXG4gICAgICAgIHNlbGVjY2lvbk1GID0gMFxyXG4gICAgICAgIE51ZXZhQ2FycGV0YSgnQ2FycGV0YSAxJylcclxuICAgICAgICBsZXQgJHNlbGVjY2lvbmRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxyXG4gICAgICAgICAgICAkc2VsZWNjaW9uZGVmYXVsdC52YWx1ZSA9IHNlbGVjY2lvbk1GLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgJHNlbGVjY2lvbmRlZmF1bHQuaW5uZXJUZXh0ID0gbWFpbmZvbGRlclswXS5ub21icmVkZWNhcnBldGFcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGZvbGRlcicpLmFwcGVuZCgkc2VsZWNjaW9uZGVmYXVsdClcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBtYWluZm9sZGVyID0gW11cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZGV4KTtcclxuICAgICAgICAgICAgbGV0IHBhcnNlZCA9IEpTT04ucGFyc2UoaXRlbSk7XHJcbiAgICAgICAgICAgIG1haW5mb2xkZXJbaW5kZXhdID0gcGFyc2VkXHJcbiAgICAgICAgICAgIGxldCAkc2VsZWNjaW9uZGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcbiAgICAgICAgICAgIHNlbGVjY2lvbk1GID0gaW5kZXg7XHJcbiAgICAgICAgICAgICRzZWxlY2Npb25kZWZhdWx0LnZhbHVlID0gc2VsZWNjaW9uTUYudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAkc2VsZWNjaW9uZGVmYXVsdC5pbm5lclRleHQgPSBtYWluZm9sZGVyW2luZGV4XS5ub21icmVkZWNhcnBldGFcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGZvbGRlcicpLmFwcGVuZCgkc2VsZWNjaW9uZGVmYXVsdClcclxuICAgICAgICB9IFxyXG4gICAgICAgIHNlbGVjY2lvbk1GID0gMFxyXG4gICAgICAgIHJlY2FyZ2Fwb3N0cygwKVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld2ZvbGRlcicpLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vc2N1cml0bycpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBjdWFudGFzY2FycGV0YXN0aWVuZW1haW4gPSBtYWluZm9sZGVyLmxlbmd0aFxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5leHBvcnQge21haW52YXJmb3J0b2RvLCBtYWluZm9sZGVyLCBzZWxlY2Npb25NRiwgY29udGFkb3IsIGN1YW50YXNjYXJwZXRhc3RpZW5lbWFpbiwgbGFzZWxlY2Npb25NRn0iLCJpbXBvcnQgeyBzZXREYXRlIH0gZnJvbSBcImRhdGUtZm5zXCJcclxuaW1wb3J0IHsgYmlibGlvZGVpY29ub3MgfSBmcm9tIFwiLi9pbWdpbmRleFwiXHJcbmltcG9ydCB7IG1haW5mb2xkZXIsIHNlbGVjY2lvbk1GIH0gZnJvbSBcIi4vbWFpblwiXHJcblxyXG5sZXQgY29udGFjYXJwZXRhcyA9IDBcclxuXHJcbmNvbnN0IE51ZXZhQ2FycGV0YSA9ICh0aXR1bG9jYXJwKSA9PiB7XHJcbiAgICBsZXQgbnVldm9mb2xkZXIgPSB7XHJcbiAgICAgICAgbm9tYnJlZGVjYXJwZXRhOiB0aXR1bG9jYXJwLFxyXG4gICAgICAgIHN1c3RvZG9zOiBuZXcgQXJyYXlcclxuICAgIH1cclxuICAgIGlmKGxvY2FsU3RvcmFnZS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgbWFpbmZvbGRlci5wdXNoKG51ZXZvZm9sZGVyKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKDAsSlNPTi5zdHJpbmdpZnkobnVldm9mb2xkZXIpKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29udGFjYXJwZXRhcyA9IG1haW5mb2xkZXIubGVuZ3RoXHJcbiAgICAgICAgbWFpbmZvbGRlci5wdXNoKG51ZXZvZm9sZGVyKVxyXG4gICAgICAgIGNvbnN0IHNlbGVjdG5ld2ZvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3Rmb2xkZXInKVxyXG4gICAgICAgICAgICAgICAgbGV0ICRzZWxlY2Npb25jYXJwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcclxuICAgICAgICAgICAgICAgICRzZWxlY2Npb25jYXJwLnZhbHVlID0gKG1haW5mb2xkZXIubGVuZ3RoIC0gMSkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgJHNlbGVjY2lvbmNhcnAuaW5uZXJUZXh0ID0gdGl0dWxvY2FycFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0bmV3Zm9sZGVyLmFwcGVuZCgkc2VsZWNjaW9uY2FycClcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWFpbmZvbGRlci5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaW5kZXgsSlNPTi5zdHJpbmdpZnkobWFpbmZvbGRlcltpbmRleF0pKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgTnVldm90b2RvID0gKHRpdHVsbywgZGVzYywgcHJpbykgPT4ge1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aXR1bG9cclxuICAgIGNvbnN0IGRlc2NyaXBjaW9uID0gZGVzY1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXHJcbiAgICBjb25zdCBwcmlvcmlkYWQgPSBwcmlvXHJcbiAgICBjb25zdCBkYXRlY3JlYXRpb24gPSB0b2RheS50b0xvY2FsZURhdGVTdHJpbmcoe1xyXG4gICAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgeWVhcjogJ251bWVyaWMnXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHt0aXRsZSxkZXNjcmlwY2lvbixkYXRlY3JlYXRpb24scHJpb3JpZGFkfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3N0ZWFyVUkodGl0dWxvLCBkZXNjLGluZGV4LCBkYXRldG9kYXksIHByaW8pe1xyXG4gICAgY29uc3QgZWxkaXZiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpdkInKVxyXG4gICAgY29uc3QgZGl2cG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBkaXZjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxldCBjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXZCJykuY2hpbGRFbGVtZW50Q291bnQgKyAxXHJcbiAgICBkaXZwb3N0LmNsYXNzTmFtZSA9IChcInBvc3QgbnVtXCIgKyBjb3VudC50b1N0cmluZygpKVxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcC5pbm5lclRleHQgPSB0aXR1bG9cclxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBsZXQgc2hvcnRlcnN0cmluZyA9IGRlc2Muc2xpY2UoMCwzMClcclxuICAgIHAyLmlubmVyVGV4dCA9IHNob3J0ZXJzdHJpbmcgKyAnLi4uJ1xyXG4gICAgY29uc3QgYnV0dG9uZGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGJ1dHRvbmRlbGV0ZS5pbm5lclRleHQgPSAnWCdcclxuICAgIGJ1dHRvbmRlbGV0ZS5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKVxyXG4gICAgYnV0dG9uZGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xyXG4gICAgICAgIG1haW5mb2xkZXJbc2VsZWNjaW9uTUZdLnN1c3RvZG9zLnNwbGljZShpbmRleCwxKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNlbGVjY2lvbk1GLEpTT04uc3RyaW5naWZ5KG1haW5mb2xkZXJbc2VsZWNjaW9uTUZdKSlcclxuICAgICAgICBkaXZwb3N0LnJlbW92ZSgpXHJcbiAgICB9KVxyXG4gICAgY29uc3QgZmVjaGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBmZWNoYS5pbm5lclRleHQgPSBkYXRldG9kYXlcclxuICAgIGNvbnN0IHByaW9yaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICBwcmlvcmkuY2xhc3NOYW1lID0gcHJpb1xyXG4gICAgICAgICAgcHJpb3JpLmFwcGVuZCgoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLmlubmVyVGV4dCA9IHByaW8pKVxyXG4gICAgICAgICAgXHJcbiAgICBkaXZwb3N0LmFwcGVuZChmZWNoYSlcclxuICAgIGRpdmNvbnRlbnQuYXBwZW5kKHAscDIpXHJcbiAgICBkaXZwb3N0LmFwcGVuZChkaXZjb250ZW50KVxyXG4gICAgZGl2cG9zdC5hcHBlbmQocHJpb3JpKVxyXG4gICAgZGl2cG9zdC5hcHBlbmQoYnV0dG9uZGVsZXRlKVxyXG4gICAgZWxkaXZiLmFwcGVuZChkaXZwb3N0KVxyXG59XHJcblxyXG5jb25zdCBlbHJlc3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9zY3VyaXRvJylcclxuY29uc3QgJGRpdnBhcmFlbHRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUnKVxyXG5jb25zdCBjZXJyYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2VycmFyJylcclxuY29uc3QgZXN0cmVsbGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcicpXHJcbmVzdHJlbGxhLnNyYyA9IGJpYmxpb2RlaWNvbm9zWzRdXHJcbmNlcnJhci5zcmMgPSBiaWJsaW9kZWljb25vc1sxNV1cclxuICAgIGNlcnJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICAgICRkaXZwYXJhZWx0b2RvLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICAgICAgZWxyZXN0by5jbGFzc0xpc3QudG9nZ2xlKCdpbmFjdGl2ZScpXHJcbiAgICB9KVxyXG5jb25zdCAkdGl0dWxvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1RpdHVsbycpXHJcbmNvbnN0ICRib3RvbmNyZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvdG9uY3JlYXInKVxyXG5jb25zdCAkY29udGVuaWRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbmlkbycpXHJcbmNvbnN0ICRwcmlvcmlkYWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcmlkYWQnKVxyXG5cclxuJGJvdG9uY3JlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xyXG4gICAgY29uc29sZS5sb2coJHByaW9yaWRhZGVzLnZhbHVlKVxyXG4gICAgc2VjcmVhKCR0aXR1bG8udmFsdWUsICRjb250ZW5pZG8udmFsdWUsJHByaW9yaWRhZGVzLnZhbHVlKVxyXG4gICAgJGRpdnBhcmFlbHRvZG8uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICAgIGVscmVzdG8uY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gc2VoYWNldW50b2RvKCl7XHJcbiAgICAkZGl2cGFyYWVsdG9kby5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgZWxyZXN0by5jbGFzc0xpc3QudG9nZ2xlKCdpbmFjdGl2ZScpXHJcbiAgICAkdGl0dWxvLnZhbHVlID0gJydcclxuICAgICRjb250ZW5pZG8udmFsdWUgPSAnJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWNyZWEgKHRpdHVsbywgZGVzYywgcHJpbyl7XHJcbiAgICBsZXQgbnVldm9pdGVtID0gTnVldm90b2RvKHRpdHVsbywgZGVzYyxwcmlvKSAvL1xyXG4gICAgbWFpbmZvbGRlcltzZWxlY2Npb25NRl0uc3VzdG9kb3MucHVzaChudWV2b2l0ZW0pXHJcbiAgICBwb3N0ZWFyVUkobnVldm9pdGVtLnRpdGxlLG51ZXZvaXRlbS5kZXNjcmlwY2lvbixtYWluZm9sZGVyW3NlbGVjY2lvbk1GXS5zdXN0b2Rvcy5sZW5ndGggLSAxLG51ZXZvaXRlbS5kYXRlY3JlYXRpb24sbnVldm9pdGVtLnByaW9yaWRhZCkgLy9cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNlbGVjY2lvbk1GLEpTT04uc3RyaW5naWZ5KG1haW5mb2xkZXJbc2VsZWNjaW9uTUZdKSlcclxufVxyXG5cclxuZnVuY3Rpb24gcmVjYXJnYXBvc3RzIChudW0pIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXZCJykuaW5uZXJIVE1MID0gJydcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtYWluZm9sZGVyW251bV0uc3VzdG9kb3MubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgbGV0IGIgPSBtYWluZm9sZGVyW251bV0uc3VzdG9kb3NbaW5kZXhdXHJcbiAgICAgICAgcG9zdGVhclVJKGIudGl0bGUsYi5kZXNjcmlwY2lvbixtYWluZm9sZGVyW251bV0uc3VzdG9kb3MuaW5kZXhPZihtYWluZm9sZGVyW251bV0uc3VzdG9kb3NbaW5kZXhdKSxiLmRhdGVjcmVhdGlvbiwgYi5wcmlvcmlkYWQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7c2VoYWNldW50b2RvLCBwb3N0ZWFyVUksIE51ZXZhQ2FycGV0YSxjb250YWNhcnBldGFzLCBlbHJlc3RvLCByZWNhcmdhcG9zdHN9IiwiaW1wb3J0IHsgYmlibGlvZGVpY29ub3MgfSBmcm9tIFwiLi9pbWdpbmRleFwiXHJcbmltcG9ydCB7IGVscmVzdG8sIE51ZXZhQ2FycGV0YSB9IGZyb20gXCIuL21ha2VhdG9kb1wiXHJcblxyXG5jb25zdCBib3R0b25uZXdmb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90b25jcmVhcmNhcnBldGEnKVxyXG5cclxuY29uc3Qgbm9tYnJlbmV3Zm9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ05vbWJyZWRlTnVldmFDYXJwZXRhJylcclxuY29uc3QgY2VycmFyeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29ub3MuY2VycmFyY2FycGV0YScpXHJcbmV4cG9ydCBjb25zdCB1aW51ZXZvZm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld2ZvbGRlcicpXHJcbmNlcnJhcnguc3JjID0gYmlibGlvZGVpY29ub3NbMTVdXHJcbmNlcnJhcnguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xyXG4gICAgZWxyZXN0by5jbGFzc0xpc3QudG9nZ2xlKCdpbmFjdGl2ZScpXHJcbiAgICB1aW51ZXZvZm9sZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbn0pXHJcbmJvdHRvbm5ld2ZvbGRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XHJcbiAgICBOdWV2YUNhcnBldGEobm9tYnJlbmV3Zm9sZGVyLnZhbHVlKVxyXG4gICAgZWxyZXN0by5jbGFzc0xpc3QudG9nZ2xlKCdpbmFjdGl2ZScpXHJcbiAgICB1aW51ZXZvZm9sZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbn0pXHJcbmZ1bmN0aW9uIG5ld2ZvbGRlcnVpKCl7XHJcbiAgICBlbHJlc3RvLmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcclxuICAgIHVpbnVldm9mb2xkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxufVxyXG5cclxuZXhwb3J0IHtuZXdmb2xkZXJ1aX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==