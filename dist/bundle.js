/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/marek.jpg */ "./src/Images/marek.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/markus.jpg */ "./src/Images/markus.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/paul.jpg */ "./src/Images/paul.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/chef.svg */ "./src/Images/chef.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/alexander.jpg */ "./src/Images/alexander.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\n    --background: rgba(255, 253, 130, 0.85);\n    --font-size: calc(.9em + .5vw);\n    --line-height: calc(1.2em + 1vw);\n    font-size: 16px;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    font-weight: 400;\n    overflow-x: hidden;\n    /* overflow: hidden; */\n\n\n}\n\n/* navigation styles start here */\n\nheader {\n    background: var(--background);\n    text-align: center;\n    position: fixed;\n    z-index: 999;\n    /*This ensures the header is always on top of everyhing else */\n    width: 100%;\n    color: #fff;\n    font-size: calc(.3em + .7vw);\n    line-height: calc(2em + 2vw);\n}\n\n/* .logo-scrolled {\n    --text: #ffffff;\n\n    color: var(--text);\n} */\n\n/* #home_btn a {\n    text-decoration: none;\n    color: #fff;\n} */\n\n.nav-toggle {\n    display: none;\n}\n\n.nav-toggle-label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-left: 1em;\n    height: 100%;\n    display: flex;\n    align-items: center;\n}\n\n.nav-toggle-label span,\n.nav-toggle-label span::before,\n.nav-toggle-label span::after {\n    display: block;\n    background: #fff;\n    height: 2px;\n    width: 2em;\n    border-radius: 2px;\n    position: relative;\n}\n\n.nav-toggle-label span::before,\n.nav-toggle-label span::after {\n    content: '';\n    position: absolute;\n\n}\n\n.nav-toggle-label span::before {\n    bottom: 7px;\n}\n\n.nav-toggle-label span::after {\n    top: 7px;\n}\n\nnav {\n    position: absolute;\n    text-align: left;\n    top: 100%;\n    left: 0;\n    background: var(--background);\n    width: 100%;\n    /* display: none; */\n    transform: scale(1, 0);\n    transform-origin: top;\n    transition: transform 400ms ease-in-out;\n}\n\nnav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n\n}\n\nnav li {\n    margin-bottom: 1em;\n    margin-left: 1em;\n}\n\nnav li {\n\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    opacity: 0;\n    transition: opacity 150ms ease-in-out;\n}\n\n.nav-toggle:checked~nav {\n    /* display: block; */\n    transform: scale(1, 1);\n}\n\n.nav-toggle:checked~nav li {\n    opacity: 1;\n    transition: opacity 250ms ease-in-out 250ms;\n}\n\n.nav-scrolled {\n    --text: #f5f5f5;\n    --background: #272525;\n\n    color: var(--text);\n    background: var(--background);\n    box-shadow: 0 3px 20px rgba(black, 0.2);\n    /* opacity: 0.4; */\n}\n\n#home_btn {\n    user-select: none;\n}\n\n/* ----------First section----------- */\n\n.first-section {\n    position: relative;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100vw;\n    height: 100vh;\n\n\n}\n\n.logo {\n    margin-top: 1rem;\n}\n\n.text_header {\n    position: absolute;\n    color: var(--background);\n    font-size: 90px;\n    font-family: 'Great vibes', 'cursive';\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n/* --------Second content--------- */\n\n.content {\n    --font-size: calc(.5em + .5vw);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    padding: 5em 2em 5em 2em;\n    font-size: var(--font-size);\n}\n\n.content > h1 {\n    position: relative;\n    font-family: 'Rowdies', 'cursive';\n}\n\n.content > h1::after {\n    content: '';\n    width: 100px;\n    height: 3px;\n    position: absolute;\n    left: 3em;\n    bottom: -.5em;\n    background: var(--background);\n}\n\n.content > p {\n    font-family: 'Dongle', 'sans-serif';\n    font-size: 2em;\n}\n\n.fade_in {\n    opacity: 0;\n    transition: opacity 250ms ease-in;\n}\n\n.fade_in.appear {\n    opacity: 1;\n}\n\n/* ---------Third Section----------- */\n\n.third-section {\n    --background: #f4f4f4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--font-size);\n    background: var(--background);\n}\n\n\n.from_left {\n    width: 100vw;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    transform: translateX(-50%);\n}\n\n\n.from_right {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2em;\n    height: 100%;\n    padding: 1em;\n    transform: translateX(50%);\n}\n\n.from_right>p {\n    font-family: 'Dongle', 'sans-serif';\n}\n\n\n.from-right {\n    width: 100vw;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    transform: translateX(50%);\n}\n\n\n.from-left {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    padding: 1em;\n    font-size: 1.2em;\n    transform: translateX(-50%);\n}\n\n.from-left > p {\n    font-family: 'Dongle', 'sans-serif';\n}\n\n.from_left,\n.from_right {\n    transition:\n        opacity 250ms ease-in,\n        transform 400ms ease-in;\n    opacity: 0;\n}\n\n.from_left.appear,\n.from_right.appear {\n    transform: translateX(0);\n    opacity: 1;\n}\n\n.from-left,\n.from-right {\n    transition:\n        opacity 250ms ease-in,\n        transform 400ms ease-in;\n    opacity: 0;\n}\n\n.from-left.appear,\n.from-right.appear {\n    transform: translateX(0);\n    opacity: 1;\n}\n\n/* ---------Menu content--------- */\n\n.head_container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 5em 3em 2em 3em;\n    font-family: 'Great vibes', 'cursive';\n}\n\n.cards {\n    --font-size: calc(1em + .8vw);\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n    font-family: 'Dongle', 'sans-serif';\n    font-size: var(--font-size);\n}\n\n.rice-dish p span {\n    color: red;\n}\n\n.rice-dish p span + span {\n    color: green;\n}\n\n.rice-dish ul li span {\n    color: green;\n}\n\n.chilli-only {\n    color: red !important; \n}\n\n.special-sat ul li span {\n    color: green;\n}\n\n.fries-menu ul li span {\n    color: green;\n}\n\n.small-chops ul li span {\n    color: green;\n}\n\n.extra ul li span {\n    color: green;\n}\n\n.bonus_div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.bonus {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    /* background-position: center; */\n    padding: 10em;\n    min-height: 100%;\n}\n\n/* -----------Contact---------- */\n\n .contact {\n    background-image: linear-gradient(to bottom, rgba(32, 32, 43, 0.62), rgba(32, 30, 31, 0.83)), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n    padding-top: 2rem;\n    font-size: 1rem;\n    width: 100vw;\n    height: 100vh;\n }\n\n .logo-div {\n    font-family: 'Great vibes','cursive';\n }\n\n/* -----------Media Query--------- */\n\n@media screen and (min-width: 950px) {\n    .nav-toggle-label {\n        display: none;\n    }\n\n    header {\n        display: grid;\n        background: transparent;\n        grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;\n    }\n\n    .header {\n        grid-column: 2 / 3;\n    }\n\n    nav {\n        all: unset;\n        grid-column: 3 / 5;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        margin-right: 1em;\n        background: transparent;\n    }\n\n    nav li {\n        cursor: pointer;\n        opacity: 1;\n        position: relative;\n    }\n\n    nav li::before {\n        content: '';\n        display: block;\n        height: 3px;\n        background: var(--background);\n        position: absolute;\n        /* bottom: -.5em; */\n        /* top: -.75em; */\n        left: 0;\n        right: 0;\n        transform: scale(0, 1);\n        /* transform-origin: right; */\n        transition: transform ease-in-out 250ms;\n    }\n\n    nav li:hover::before {\n        transform: scale(1, 1);\n    }\n\n    nav ul {\n        display: flex;\n    }\n\n    nav li {\n        margin-left: 3em;\n        margin-bottom: 0;\n    }\n\n    .second-section {\n        font-size: var(--font-size);\n        padding: 5em 8em 10em 8em;\n    }\n\n    /* .second_content > h1::after {\n        left: 50px;\n        bottom: -4px;\n    } */\n\n    .third-section {\n        --background: #f4f4f4;\n        display: grid;\n        /* column-gap: 2em; */\n        align-items: center;\n        font-size: var(--font-size);\n        background: var(--background);\n        grid-template-columns: minmax(1em, 1fr) repeat(2, minmax(200px, 400px)) minmax(1em, 1fr);\n        /* grid-template-columns: 1fr 1fr; */\n    }\n\n    .from_left {\n        width: 100%;\n        grid-column: 1 / 3;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        padding: 10em;\n        transform: translateX(-50%);\n    }\n\n    .from_right {\n        grid-column: 3 / 5;\n        justify-content: center;\n        align-items: center;\n        font-size: 1.2em;\n        height: 100%;\n        padding: 1em;\n        transform: translateX(50%);\n    }\n\n    .from-right {\n        grid-column: 3 / 5;\n        grid-row: 1 / 2;\n        width: 100%;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        padding: 10em;\n        transform: translateX(50%);\n    }\n\n    .from-left {\n        grid-column: 1 / 3;\n        height: 100%;\n        padding: 1em;\n        font-size: 1.2em;\n        transform: translateX(-50%);\n    }\n\n    .contact {\n        padding-top: 5rem;\n        font-size: 1.4rem;\n    }\n\n\n\n}\n\n/* @media screen and (max-width: 1151px) {\n    ---------Menu content---------\n\n    .card {\n        flex-direction: column;\n    }\n\n    .maxycard_image {\n        padding: 5em;\n    }\n\n    .codedcard_image {\n        padding: 5em;\n    }\n\n    .card_price {\n        margin: 1.2rem 0 1.2rem 0;\n    }\n} */", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;IAEI,uCAAuC;IACvC,8BAA8B;IAC9B,gCAAgC;IAChC,eAAe;AACnB;;AAEA;;;IAGI,sBAAsB;AAC1B;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,SAAS;IACT,gBAAgB;IAChB,kBAAkB;IAClB,sBAAsB;;;AAG1B;;AAEA,iCAAiC;;AAEjC;IACI,6BAA6B;IAC7B,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,8DAA8D;IAC9D,WAAW;IACX,WAAW;IACX,4BAA4B;IAC5B,4BAA4B;AAChC;;AAEA;;;;GAIG;;AAEH;;;GAGG;;AAEH;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;;;IAGI,cAAc;IACd,gBAAgB;IAChB,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;;IAEI,WAAW;IACX,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,SAAS;IACT,OAAO;IACP,6BAA6B;IAC7B,WAAW;IACX,mBAAmB;IACnB,sBAAsB;IACtB,qBAAqB;IACrB,uCAAuC;AAC3C;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;;AAEpB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;;IAEI,iBAAiB;IACjB,yBAAyB;IACzB,UAAU;IACV,qCAAqC;AACzC;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,2CAA2C;AAC/C;;AAEA;IACI,eAAe;IACf,qBAAqB;;IAErB,kBAAkB;IAClB,6BAA6B;IAC7B,uCAAuC;IACvC,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,uCAAuC;;AAEvC;IACI,kBAAkB;IAClB,mDAA0C;IAC1C,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;IACtB,YAAY;IACZ,aAAa;;;AAGjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,eAAe;IACf,qCAAqC;IACrC,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA,oCAAoC;;AAEpC;IACI,8BAA8B;IAC9B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,wBAAwB;IACxB,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,mCAAmC;IACnC,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,iCAAiC;AACrC;;AAEA;IACI,UAAU;AACd;;AAEA,sCAAsC;;AAEtC;IACI,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,6BAA6B;AACjC;;;AAGA;IACI,YAAY;IACZ,yDAAiD;IACjD,sBAAsB;IACtB,4BAA4B;IAC5B,2BAA2B;IAC3B,aAAa;IACb,2BAA2B;AAC/B;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,0BAA0B;AAC9B;;AAEA;IACI,mCAAmC;AACvC;;;AAGA;IACI,YAAY;IACZ,yDAA+C;IAC/C,sBAAsB;IACtB,4BAA4B;IAC5B,2BAA2B;IAC3B,aAAa;IACb,0BAA0B;AAC9B;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,2BAA2B;AAC/B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;;IAEI;;+BAE2B;IAC3B,UAAU;AACd;;AAEA;;IAEI,wBAAwB;IACxB,UAAU;AACd;;AAEA;;IAEI;;+BAE2B;IAC3B,UAAU;AACd;;AAEA;;IAEI,wBAAwB;IACxB,UAAU;AACd;;AAEA,mCAAmC;;AAEnC;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,qCAAqC;AACzC;;AAEA;IACI,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mCAAmC;IACnC,2BAA2B;AAC/B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mDAAyC;IACzC,wBAAwB;IACxB,4BAA4B;IAC5B,iCAAiC;IACjC,aAAa;IACb,gBAAgB;AACpB;;AAEA,iCAAiC;;CAEhC;IACG,qIAAgI;IAChI,sBAAsB;IACtB,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,aAAa;CAChB;;CAEA;IACG,oCAAoC;CACvC;;AAED,oCAAoC;;AAEpC;IACI;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;QACb,uBAAuB;QACvB,sDAAsD;IAC1D;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,UAAU;QACV,kBAAkB;QAClB,aAAa;QACb,yBAAyB;QACzB,mBAAmB;QACnB,iBAAiB;QACjB,uBAAuB;IAC3B;;IAEA;QACI,eAAe;QACf,UAAU;QACV,kBAAkB;IACtB;;IAEA;QACI,WAAW;QACX,cAAc;QACd,WAAW;QACX,6BAA6B;QAC7B,kBAAkB;QAClB,mBAAmB;QACnB,iBAAiB;QACjB,OAAO;QACP,QAAQ;QACR,sBAAsB;QACtB,6BAA6B;QAC7B,uCAAuC;IAC3C;;IAEA;QACI,sBAAsB;IAC1B;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,gBAAgB;QAChB,gBAAgB;IACpB;;IAEA;QACI,2BAA2B;QAC3B,yBAAyB;IAC7B;;IAEA;;;OAGG;;IAEH;QACI,qBAAqB;QACrB,aAAa;QACb,qBAAqB;QACrB,mBAAmB;QACnB,2BAA2B;QAC3B,6BAA6B;QAC7B,wFAAwF;QACxF,oCAAoC;IACxC;;IAEA;QACI,WAAW;QACX,kBAAkB;QAClB,yDAAiD;QACjD,sBAAsB;QACtB,4BAA4B;QAC5B,2BAA2B;QAC3B,aAAa;QACb,2BAA2B;IAC/B;;IAEA;QACI,kBAAkB;QAClB,uBAAuB;QACvB,mBAAmB;QACnB,gBAAgB;QAChB,YAAY;QACZ,YAAY;QACZ,0BAA0B;IAC9B;;IAEA;QACI,kBAAkB;QAClB,eAAe;QACf,WAAW;QACX,yDAA+C;QAC/C,sBAAsB;QACtB,4BAA4B;QAC5B,2BAA2B;QAC3B,aAAa;QACb,0BAA0B;IAC9B;;IAEA;QACI,kBAAkB;QAClB,YAAY;QACZ,YAAY;QACZ,gBAAgB;QAChB,2BAA2B;IAC/B;;IAEA;QACI,iBAAiB;QACjB,iBAAiB;IACrB;;;;AAIJ;;AAEA;;;;;;;;;;;;;;;;;;GAkBG","sourcesContent":[":root {\n\n    --background: rgba(255, 253, 130, 0.85);\n    --font-size: calc(.9em + .5vw);\n    --line-height: calc(1.2em + 1vw);\n    font-size: 16px;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    font-weight: 400;\n    overflow-x: hidden;\n    /* overflow: hidden; */\n\n\n}\n\n/* navigation styles start here */\n\nheader {\n    background: var(--background);\n    text-align: center;\n    position: fixed;\n    z-index: 999;\n    /*This ensures the header is always on top of everyhing else */\n    width: 100%;\n    color: #fff;\n    font-size: calc(.3em + .7vw);\n    line-height: calc(2em + 2vw);\n}\n\n/* .logo-scrolled {\n    --text: #ffffff;\n\n    color: var(--text);\n} */\n\n/* #home_btn a {\n    text-decoration: none;\n    color: #fff;\n} */\n\n.nav-toggle {\n    display: none;\n}\n\n.nav-toggle-label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-left: 1em;\n    height: 100%;\n    display: flex;\n    align-items: center;\n}\n\n.nav-toggle-label span,\n.nav-toggle-label span::before,\n.nav-toggle-label span::after {\n    display: block;\n    background: #fff;\n    height: 2px;\n    width: 2em;\n    border-radius: 2px;\n    position: relative;\n}\n\n.nav-toggle-label span::before,\n.nav-toggle-label span::after {\n    content: '';\n    position: absolute;\n\n}\n\n.nav-toggle-label span::before {\n    bottom: 7px;\n}\n\n.nav-toggle-label span::after {\n    top: 7px;\n}\n\nnav {\n    position: absolute;\n    text-align: left;\n    top: 100%;\n    left: 0;\n    background: var(--background);\n    width: 100%;\n    /* display: none; */\n    transform: scale(1, 0);\n    transform-origin: top;\n    transition: transform 400ms ease-in-out;\n}\n\nnav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n\n}\n\nnav li {\n    margin-bottom: 1em;\n    margin-left: 1em;\n}\n\nnav li {\n\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    opacity: 0;\n    transition: opacity 150ms ease-in-out;\n}\n\n.nav-toggle:checked~nav {\n    /* display: block; */\n    transform: scale(1, 1);\n}\n\n.nav-toggle:checked~nav li {\n    opacity: 1;\n    transition: opacity 250ms ease-in-out 250ms;\n}\n\n.nav-scrolled {\n    --text: #f5f5f5;\n    --background: #272525;\n\n    color: var(--text);\n    background: var(--background);\n    box-shadow: 0 3px 20px rgba(black, 0.2);\n    /* opacity: 0.4; */\n}\n\n#home_btn {\n    user-select: none;\n}\n\n/* ----------First section----------- */\n\n.first-section {\n    position: relative;\n    background: url('../src/Images/marek.jpg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100vw;\n    height: 100vh;\n\n\n}\n\n.logo {\n    margin-top: 1rem;\n}\n\n.text_header {\n    position: absolute;\n    color: var(--background);\n    font-size: 90px;\n    font-family: 'Great vibes', 'cursive';\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n/* --------Second content--------- */\n\n.content {\n    --font-size: calc(.5em + .5vw);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    padding: 5em 2em 5em 2em;\n    font-size: var(--font-size);\n}\n\n.content > h1 {\n    position: relative;\n    font-family: 'Rowdies', 'cursive';\n}\n\n.content > h1::after {\n    content: '';\n    width: 100px;\n    height: 3px;\n    position: absolute;\n    left: 3em;\n    bottom: -.5em;\n    background: var(--background);\n}\n\n.content > p {\n    font-family: 'Dongle', 'sans-serif';\n    font-size: 2em;\n}\n\n.fade_in {\n    opacity: 0;\n    transition: opacity 250ms ease-in;\n}\n\n.fade_in.appear {\n    opacity: 1;\n}\n\n/* ---------Third Section----------- */\n\n.third-section {\n    --background: #f4f4f4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--font-size);\n    background: var(--background);\n}\n\n\n.from_left {\n    width: 100vw;\n    background-image: url('../src/Images/markus.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    transform: translateX(-50%);\n}\n\n\n.from_right {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2em;\n    height: 100%;\n    padding: 1em;\n    transform: translateX(50%);\n}\n\n.from_right>p {\n    font-family: 'Dongle', 'sans-serif';\n}\n\n\n.from-right {\n    width: 100vw;\n    background-image: url('../src/Images/paul.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    transform: translateX(50%);\n}\n\n\n.from-left {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    padding: 1em;\n    font-size: 1.2em;\n    transform: translateX(-50%);\n}\n\n.from-left > p {\n    font-family: 'Dongle', 'sans-serif';\n}\n\n.from_left,\n.from_right {\n    transition:\n        opacity 250ms ease-in,\n        transform 400ms ease-in;\n    opacity: 0;\n}\n\n.from_left.appear,\n.from_right.appear {\n    transform: translateX(0);\n    opacity: 1;\n}\n\n.from-left,\n.from-right {\n    transition:\n        opacity 250ms ease-in,\n        transform 400ms ease-in;\n    opacity: 0;\n}\n\n.from-left.appear,\n.from-right.appear {\n    transform: translateX(0);\n    opacity: 1;\n}\n\n/* ---------Menu content--------- */\n\n.head_container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 5em 3em 2em 3em;\n    font-family: 'Great vibes', 'cursive';\n}\n\n.cards {\n    --font-size: calc(1em + .8vw);\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n    font-family: 'Dongle', 'sans-serif';\n    font-size: var(--font-size);\n}\n\n.rice-dish p span {\n    color: red;\n}\n\n.rice-dish p span + span {\n    color: green;\n}\n\n.rice-dish ul li span {\n    color: green;\n}\n\n.chilli-only {\n    color: red !important; \n}\n\n.special-sat ul li span {\n    color: green;\n}\n\n.fries-menu ul li span {\n    color: green;\n}\n\n.small-chops ul li span {\n    color: green;\n}\n\n.extra ul li span {\n    color: green;\n}\n\n.bonus_div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.bonus {\n    background: url('../src/Images/chef.svg');\n    background-size: contain;\n    background-repeat: no-repeat;\n    /* background-position: center; */\n    padding: 10em;\n    min-height: 100%;\n}\n\n/* -----------Contact---------- */\n\n .contact {\n    background-image: linear-gradient(to bottom, rgba(32, 32, 43, 0.62), rgba(32, 30, 31, 0.83)), url(\"../src/Images/alexander.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n    padding-top: 2rem;\n    font-size: 1rem;\n    width: 100vw;\n    height: 100vh;\n }\n\n .logo-div {\n    font-family: 'Great vibes','cursive';\n }\n\n/* -----------Media Query--------- */\n\n@media screen and (min-width: 950px) {\n    .nav-toggle-label {\n        display: none;\n    }\n\n    header {\n        display: grid;\n        background: transparent;\n        grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;\n    }\n\n    .header {\n        grid-column: 2 / 3;\n    }\n\n    nav {\n        all: unset;\n        grid-column: 3 / 5;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        margin-right: 1em;\n        background: transparent;\n    }\n\n    nav li {\n        cursor: pointer;\n        opacity: 1;\n        position: relative;\n    }\n\n    nav li::before {\n        content: '';\n        display: block;\n        height: 3px;\n        background: var(--background);\n        position: absolute;\n        /* bottom: -.5em; */\n        /* top: -.75em; */\n        left: 0;\n        right: 0;\n        transform: scale(0, 1);\n        /* transform-origin: right; */\n        transition: transform ease-in-out 250ms;\n    }\n\n    nav li:hover::before {\n        transform: scale(1, 1);\n    }\n\n    nav ul {\n        display: flex;\n    }\n\n    nav li {\n        margin-left: 3em;\n        margin-bottom: 0;\n    }\n\n    .second-section {\n        font-size: var(--font-size);\n        padding: 5em 8em 10em 8em;\n    }\n\n    /* .second_content > h1::after {\n        left: 50px;\n        bottom: -4px;\n    } */\n\n    .third-section {\n        --background: #f4f4f4;\n        display: grid;\n        /* column-gap: 2em; */\n        align-items: center;\n        font-size: var(--font-size);\n        background: var(--background);\n        grid-template-columns: minmax(1em, 1fr) repeat(2, minmax(200px, 400px)) minmax(1em, 1fr);\n        /* grid-template-columns: 1fr 1fr; */\n    }\n\n    .from_left {\n        width: 100%;\n        grid-column: 1 / 3;\n        background-image: url('../src/Images/markus.jpg');\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        padding: 10em;\n        transform: translateX(-50%);\n    }\n\n    .from_right {\n        grid-column: 3 / 5;\n        justify-content: center;\n        align-items: center;\n        font-size: 1.2em;\n        height: 100%;\n        padding: 1em;\n        transform: translateX(50%);\n    }\n\n    .from-right {\n        grid-column: 3 / 5;\n        grid-row: 1 / 2;\n        width: 100%;\n        background-image: url('../src/Images/paul.jpg');\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        padding: 10em;\n        transform: translateX(50%);\n    }\n\n    .from-left {\n        grid-column: 1 / 3;\n        height: 100%;\n        padding: 1em;\n        font-size: 1.2em;\n        transform: translateX(-50%);\n    }\n\n    .contact {\n        padding-top: 5rem;\n        font-size: 1.4rem;\n    }\n\n\n\n}\n\n/* @media screen and (max-width: 1151px) {\n    ---------Menu content---------\n\n    .card {\n        flex-direction: column;\n    }\n\n    .maxycard_image {\n        padding: 5em;\n    }\n\n    .codedcard_image {\n        padding: 5em;\n    }\n\n    .card_price {\n        margin: 1.2rem 0 1.2rem 0;\n    }\n} */"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/Components/Contact.js":
/*!***********************************!*\
  !*** ./src/Components/Contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Images/logo.svg */ "./src/Images/logo.svg");
/* harmony import */ var _Images_alexander_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Images/alexander.jpg */ "./src/Images/alexander.jpg");



const contact = () => {
  const alexander = new Image();
  alexander.src = _Images_alexander_jpg__WEBPACK_IMPORTED_MODULE_1__;

  const logoColor = new Image();
  logoColor.src = _Images_logo_svg__WEBPACK_IMPORTED_MODULE_0__;

  const contact = document.createElement("div");
  const logoDiv = document.createElement("div");
  logoDiv.innerHTML = `
        <img src="../src/Images/logoColor.svg" alt="logo">
        <hr>
        <h1>Grab a Bite</h1>
    `;
  const locationDiv = document.createElement("div");
  locationDiv.innerHTML = `
        <h3>Location</h3>
        <h2> Amasaman - Abease </h2>
        <h5>Delivery & Pick up Available</h5>
        <hr>
        <h2>0200191485</h2>
        <h2>0573767116</h2>
    `;
  contact.classList.add("contact");
  logoDiv.classList.add("logo-div");

  contact.appendChild(logoDiv);
  contact.appendChild(locationDiv);

  return contact;
};

const loadContact = () => {
  const contents = document.querySelector(".contents");
  contents.innerHTML = "";
  contents.appendChild(contact());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);


/***/ }),

/***/ "./src/Components/Home.js":
/*!********************************!*\
  !*** ./src/Components/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Images_marek_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Images/marek.jpg */ "./src/Images/marek.jpg");
/* harmony import */ var _Images_markus_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Images/markus.jpg */ "./src/Images/markus.jpg");
/* harmony import */ var _Images_paul_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/paul.jpg */ "./src/Images/paul.jpg");
/* harmony import */ var _Images_hop_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/hop.svg */ "./src/Images/hop.svg");
/* harmony import */ var _Images_stand_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Images/stand.svg */ "./src/Images/stand.svg");
/* harmony import */ var _fadeinAndNavChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fadeinAndNavChange */ "./src/fadeinAndNavChange.js");







const home = () => {
  // const container = document.querySelector(".container");

  //   Creates first section elements and appends into the Dom
  const home = document.createElement("div");
  const firstSection = document.createElement("div");
  const textHeader = document.createElement("h1");

  //   Adds classlist to elements and adds contents to the elements created
  firstSection.classList.add("first-section");
  home.classList.add("home");
  textHeader.textContent = "Welcome To Bannycue";
  textHeader.classList.add("text_header");

  firstSection.appendChild(textHeader);
  home.appendChild(firstSection);
  //   container.appendChild(contents);

  //   Creating Images
  const image = new Image();
  image.src = _Images_marek_jpg__WEBPACK_IMPORTED_MODULE_0__;

  const paul = new Image();
  paul.src = _Images_paul_jpg__WEBPACK_IMPORTED_MODULE_2__;
  paul.classList.add("paul_img");

  const markus = new Image();
  markus.src = _Images_markus_jpg__WEBPACK_IMPORTED_MODULE_1__;
  markus.classList.add("markus_img");

  const hop = new Image();
  hop.src = _Images_hop_svg__WEBPACK_IMPORTED_MODULE_3__;

  const stand = new Image();
  stand.src = _Images_stand_svg__WEBPACK_IMPORTED_MODULE_4__;

  //   Creates second section elements and appends in the Dom
  const secondSection = document.createElement("div");
  const secondSectionDiv = document.createElement("div");
  const secondSectionH1 = document.createElement("h1");
  const secondSectionPara = document.createElement("p");

  const thirdSection = document.createElement("div");
  const fromLeft = document.createElement("div");
  const fromRight = document.createElement("div");
  const fromRightPara = document.createElement("p");
  const svgDiv = document.createElement("div");

  const thirdSectionClone = document.createElement("div");
  const fromRightClone = document.createElement("div");
  const fromLeftClone = document.createElement("div");
  const fromLeftParaClone = document.createElement("p");
  const svgDivClone = document.createElement("div");

  //  Adds classlists to the elements
  secondSection.classList.add("second-section");
  secondSectionDiv.classList.add("content");
  secondSectionPara.classList.add("fade_in");

  thirdSection.classList.add("third-section");
  fromLeft.classList.add("from_left");
  fromLeft.classList.add("slide_in");
  fromRight.classList.add("from_right");
  fromRight.classList.add("slide_in");
  svgDiv.classList.add("svg");

  thirdSectionClone.classList.add("third-section");
  fromRightClone.classList.add("from-right");
  fromRightClone.classList.add("slide_in");
  fromLeftClone.classList.add("from-left");
  fromLeftClone.classList.add("slide_in");
  svgDivClone.classList.add("svg");

  //   Adding text content to the elements and appending to the Dom

  secondSectionH1.textContent = "Rabbit 101";
  secondSectionPara.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, iusto! Iste error at id explicabo consequatur culpa totam dolor obcaecati adipisci voluptates. Qui aliquam, accusamus explicabo nostrum optio reprehenderit quasi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis sit impedit, ducimus libero quisquam hic iure nulla neque. Inventore placeat natus incidunt minima itaque repellendus nostrum, cupiditate quos sed facere! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui atque consequuntur quas natus ex excepturi culpa numquam molestias aliquam, distinctio vel veniam veritatis ipsam ratione quisquam quibusdam. Deserunt, dolorum aut.";
  fromRightPara.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum fugit ea molestiae perspiciatis, voluptates deleniti maiores, sunt aliquid perferendis atque officia dolore. Dolorem incidunt tempora tenetur sit id nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, laborum totam quibusdam quos vero quia incidunt. Iste inventore debitis, possimus, consectetur architecto quia molestias eos dolor, mollitia nulla nisi. Perspiciatis?";
  fromLeftParaClone.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum fugit ea molestiae perspiciatis, voluptates deleniti maiores, sunt aliquid perferendis atque officia dolore. Dolorem incidunt tempora tenetur sit id nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, laborum totam quibusdam quos vero quia incidunt. Iste inventore debitis, possimus, consectetur architecto quia molestias eos dolor, mollitia nulla nisi. Perspiciatis?";

  secondSectionDiv.appendChild(secondSectionH1);
  secondSectionDiv.appendChild(secondSectionPara);

  svgDiv.appendChild(stand);
  fromRight.appendChild(fromRightPara);
  fromRight.appendChild(svgDiv);
  thirdSection.appendChild(fromLeft);
  thirdSection.appendChild(fromRight);

  thirdSectionClone.appendChild(fromRightClone);
  thirdSectionClone.appendChild(fromLeftClone);

  svgDivClone.appendChild(hop);
  fromLeftClone.appendChild(fromLeftParaClone);
  fromLeftClone.appendChild(svgDivClone);

  secondSection.appendChild(secondSectionDiv);
  home.appendChild(secondSection);
  home.appendChild(thirdSection);
  home.appendChild(thirdSectionClone);

  // container.appendChild(contents);

  return home;
};

// The loadHome function clears some contents in the Dom and appends home to Dom
function loadHome() {
  const contents = document.querySelector(".contents");
  contents.textContent = "";
  contents.appendChild(home());
  (0,_fadeinAndNavChange__WEBPACK_IMPORTED_MODULE_5__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/Components/Menu.js":
/*!********************************!*\
  !*** ./src/Components/Menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Images_markus_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Images/markus.jpg */ "./src/Images/markus.jpg");
/* harmony import */ var _Images_paul_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Images/paul.jpg */ "./src/Images/paul.jpg");
/* harmony import */ var _Images_chef_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/chef.svg */ "./src/Images/chef.svg");
/* harmony import */ var _Images_BannycueColor_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/BannycueColor.svg */ "./src/Images/BannycueColor.svg");
/* harmony import */ var _Images_design_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Images/design.svg */ "./src/Images/design.svg");
/* harmony import */ var _fadeinAndNavChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fadeinAndNavChange */ "./src/fadeinAndNavChange.js");







const menuPage = () => {
  // const container = document.querySelector(".container");

  const menu = document.createElement("div");
  const firstSection = document.createElement("div");
  const textHeader = document.createElement("h1");
  const menuDiv = document.createElement("div");
  const textTitle = document.createElement("div");
  const cards = document.createElement("div");
  const bonusDiv = document.createElement("div");
  const bonusImage = document.createElement("div");

  const riceDishMenu = document.createElement("div");
  const menuTitle = document.createElement("h1");
  const menuPara = document.createElement("p");
  const riceDishUl = document.createElement("ul");

  const firstRiceLi = document.createElement("li");
  const secondRiceLi = document.createElement("li");
  const thirdRiceLi = document.createElement("li");
  const fourthRiceLi = document.createElement("li");
  const fifthRiceLi = document.createElement("li");
  const sixthRiceLi = document.createElement("li");
  const riceLine = document.createElement("hr");

  const specialSatMenu = document.createElement("div");
  const satTitle = document.createElement("h1");
  const specialSatUl = document.createElement("ul");
  const firstSatLi = document.createElement("li");
  const secondSatLi = document.createElement("li");
  const thirdSatLi = document.createElement("li");
  const fourthSatLi = document.createElement("li");
  const specLine = document.createElement("hr");

  const fries = document.createElement("div");
  const friesMenu = document.createElement("div");
  const friesTitle = document.createElement("h1");
  const friesUl = document.createElement("ul");
  const firstFriesLi = document.createElement("li");
  const secondFriesLi = document.createElement("li");

  const smallChopsMenu = document.createElement("div");
  const smallChopTitle = document.createElement("h1");
  const smallChopsUl = document.createElement("ul");
  const firstChopsLi = document.createElement("li");
  const secondChopsLi = document.createElement("li");
  const friesLine = document.createElement("hr");

  const extraMenu = document.createElement("div");
  const extraTitle = document.createElement("h1");
  const extraUl = document.createElement("ul");
  const firstExtraLi = document.createElement("li");
  const secondExtraLi = document.createElement("li");
  const thirdExtraLi = document.createElement("li");
  const fourthExraLi = document.createElement("li");

  riceDishMenu.classList.add("rice-dish");
  specialSatMenu.classList.add("special-sat");
  fries.classList.add("fries");
  friesMenu.classList.add("fries-menu");
  smallChopsMenu.classList.add("small-chops");
  extraMenu.classList.add("extra");

  menuTitle.textContent = "RICE DISHES";
  satTitle.textContent = "SPECIAL SATURDAY";
  friesTitle.textContent = "FRIES";
  smallChopTitle.textContent = "SMALL CHOPS";
  extraTitle.textContent = "EXTRA";

  menuPara.innerHTML = `Served with <span>chilli</span> and <span>toast veg</span> and grilled protein`;
  firstRiceLi.innerHTML = "Coconut fried rice";
  secondRiceLi.innerHTML = "Vegetable rice";
  thirdRiceLi.innerHTML = "Plain rice";
  fourthRiceLi.innerHTML = `<span>GHS 15.00</span>-pack of rice dishes options served with <span>grilled chicken</span> and <span class="chilli-only">chilli only</span> is available`;
  fifthRiceLi.innerHTML = `<span>GHS 30.00</span>-Assorted fried rice`;
  sixthRiceLi.innerHTML = `<span>GHS 35.00</span>-Assorted fried rice with toast veg`;

  firstSatLi.innerHTML = `<span>GHS 20.00</span>-Grilled tilapia & Banku`;
  secondSatLi.innerHTML = `<span>GHS 250.00</span>-Family size package (full grilled rabbit + fried rice + toast veg)`;
  thirdSatLi.innerHTML = `<span>GHS 150.00</span>-Full grilled rabbit `;
  fourthSatLi.innerHTML = `<span>GHS 90.00</span>-Half grilled rabbit `;

  firstFriesLi.innerHTML = `<span>GHS 30.00</span>-Grilled rabbit and yam chips `;
  secondFriesLi.innerHTML = `<span>GHS 20.00</span>-Grilled chicken and yam chips`;
  firstChopsLi.innerHTML = `<span>GHS 10.00</span>-Rabbit Kebab`;
  secondChopsLi.innerHTML = `<span>GHS 10.00</span>-Chicken Kebab`;

  firstExtraLi.innerHTML = `<span>GHS 20.00</span>-Grilled rabbit`;
  secondExtraLi.innerHTML = `<span>GHS 10.00</span>-Grilled chicken`;
  thirdExtraLi.innerHTML = `<span>GHS 5.00</span>-Toast Veg`;
  fourthExraLi.innerHTML = `<span>GHS 12.00</span>-Grilled Tilapia`;

  riceDishUl.appendChild(firstRiceLi);
  riceDishUl.appendChild(secondRiceLi);
  riceDishUl.appendChild(thirdRiceLi);
  riceDishUl.appendChild(fourthRiceLi);
  riceDishUl.appendChild(fifthRiceLi);
  riceDishUl.appendChild(sixthRiceLi);

  specialSatMenu.appendChild(satTitle);
  specialSatUl.appendChild(firstSatLi);
  specialSatUl.appendChild(secondSatLi);
  specialSatUl.appendChild(thirdSatLi);
  specialSatUl.appendChild(fourthSatLi);

  friesUl.appendChild(firstFriesLi);
  friesUl.appendChild(secondFriesLi);
  friesMenu.appendChild(friesTitle);
  friesMenu.appendChild(friesUl);

  smallChopsUl.appendChild(firstChopsLi);
  smallChopsUl.appendChild(secondChopsLi);
  smallChopsMenu.appendChild(smallChopTitle);
  smallChopsMenu.appendChild(smallChopsUl);

  extraMenu.appendChild(extraTitle);
  extraUl.appendChild(firstExtraLi);
  extraUl.appendChild(secondExtraLi);
  extraUl.appendChild(thirdExtraLi);
  extraUl.appendChild(fourthExraLi);

  riceDishMenu.appendChild(menuTitle);
  riceDishMenu.appendChild(menuPara);
  riceDishMenu.appendChild(riceDishUl);
  riceDishMenu.appendChild(riceLine);
  specialSatMenu.appendChild(specialSatUl);
  specialSatMenu.appendChild(specLine);
  fries.appendChild(friesMenu);
  fries.appendChild(smallChopsMenu);
  fries.appendChild(friesLine);
  extraMenu.appendChild(extraUl);

  // riceDishMenu.appendChild(riceDishMenu);

  menu.classList.add("menu");
  firstSection.classList.add("first-section");
  textHeader.textContent = "Menu";
  textHeader.classList.add("text_header");
  menuDiv.classList.add("head_container");
  cards.classList.add("cards");

  bonusDiv.classList.add("bonus_div");
  bonusImage.classList.add("bonus");

  const chef = new Image();
  chef.src = _Images_chef_svg__WEBPACK_IMPORTED_MODULE_2__;

  const bannycueLogo = new Image();
  bannycueLogo.src = _Images_BannycueColor_svg__WEBPACK_IMPORTED_MODULE_3__;
  bannycueLogo.classList.add("banny-logo");

  const design = new Image();
  design.src = _Images_design_svg__WEBPACK_IMPORTED_MODULE_4__;
  design.classList.add("design");

  const paul = new Image();
  paul.src = _Images_paul_jpg__WEBPACK_IMPORTED_MODULE_1__;
  paul.classList.add("paul_img");

  const markus = new Image();
  markus.src = _Images_markus_jpg__WEBPACK_IMPORTED_MODULE_0__;
  markus.classList.add("markus_img");

  // const riceImg = document.createElement("img");
  // riceImg.classList.add("rice-img");
  // riceImg.appendChild(paul);
  // riceDishMenu.appendChild(riceImg);

  firstSection.appendChild(textHeader);
  textTitle.appendChild(bannycueLogo);
  menuDiv.appendChild(textTitle);
  bonusDiv.appendChild(bonusImage);

  cards.appendChild(riceDishMenu);
  cards.appendChild(specialSatMenu);
  cards.appendChild(fries);
  cards.appendChild(extraMenu);

  menu.appendChild(firstSection);
  menu.appendChild(menuDiv);
  menu.appendChild(cards);
  menu.appendChild(bonusDiv);

  return menu;
};

function loadMenu() {
  const contents = document.querySelector(".contents");
  contents.textContent = "";
  contents.appendChild(menuPage());
  (0,_fadeinAndNavChange__WEBPACK_IMPORTED_MODULE_5__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),

/***/ "./src/Components/Navbar.js":
/*!**********************************!*\
  !*** ./src/Components/Navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/Components/Home.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ "./src/Components/Menu.js");
/* harmony import */ var _Images_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/logo.svg */ "./src/Images/logo.svg");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact */ "./src/Components/Contact.js");





const createNavbar = () => {
  // const container = document.querySelector(".container");
  const header = document.createElement("header");

  const logoImg = new Image();
  logoImg.src = _Images_logo_svg__WEBPACK_IMPORTED_MODULE_2__;

  const logoContainer = document.createElement("div");
  logoContainer.innerHTML = `<img src="../src/Images/logo.svg" alt="logo">`;
  const headerInput = document.createElement("input");
  const headerNav = document.createElement("nav");
  const headerUl = document.createElement("ul");
  const headerHomeLi = document.createElement("li");
  const headerMenuLi = document.createElement("li");
  const headerAboutLi = document.createElement("li");
  const headerContactLi = document.createElement("li");
  const headerLabel = document.createElement("label");
  const headerSpan = document.createElement("span");

  logoContainer.classList.add("logo");
  // headerH1.textContent = "Bannycue";
  headerInput.classList.add("nav-toggle");
  headerInput.id = "nav-toggle";
  headerInput.type = "checkbox";

  headerHomeLi.id = "home_btn";
  headerHomeLi.textContent = "HOME";
  headerHomeLi.addEventListener("click", () => {
    (0,_Home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  headerMenuLi.id = "menu_btn";
  headerMenuLi.textContent = "MENU";
  headerMenuLi.addEventListener("click", () => {
    (0,_Menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  headerAboutLi.id = "about_btn";
  headerAboutLi.textContent = "ABOUT US";

  headerContactLi.id = "contact_btn";
  headerContactLi.textContent = "CONTACT US";
  headerContactLi.addEventListener("click", () => {
    (0,_Contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
  });

  headerLabel.classList.add("nav-toggle-label");
  headerLabel.htmlFor = "nav-toggle";

  headerUl.appendChild(headerHomeLi);
  headerUl.appendChild(headerMenuLi);
  headerUl.appendChild(headerAboutLi);
  headerUl.appendChild(headerContactLi);
  headerNav.appendChild(headerUl);

  headerLabel.appendChild(headerSpan);

  header.appendChild(logoContainer);
  header.appendChild(headerInput);
  header.appendChild(headerNav);
  header.appendChild(headerLabel);

  return header;
  // container.appendChild(header);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavbar);


/***/ }),

/***/ "./src/fadeinAndNavChange.js":
/*!***********************************!*\
  !*** ./src/fadeinAndNavChange.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fadeinAndNavChange = () => {
  const faders = document.querySelectorAll(".fade_in");
  const sliders = document.querySelectorAll(".slide_in");

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  sliders.forEach((slider) => {
    appearOnScroll.observe(slider);
  });

  // NavBar Change
  const header = document.querySelector("header");
  //   const logo = document.querySelector(".logo");
  const sectionOne = document.querySelector(".first-section");

  const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px",
  };

  const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
        // logo.classList.add("logo-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
        // logo.classList.remove("logo-scrolled");
      }
    });
  },
  sectionOneOptions);

  sectionOneObserver.observe(sectionOne);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fadeinAndNavChange);


/***/ }),

/***/ "./src/mainContent.js":
/*!****************************!*\
  !*** ./src/mainContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Images_marek_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images/marek.jpg */ "./src/Images/marek.jpg");
/* harmony import */ var _Images_markus_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Images/markus.jpg */ "./src/Images/markus.jpg");
/* harmony import */ var _Images_paul_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Images/paul.jpg */ "./src/Images/paul.jpg");
/* harmony import */ var _Images_hop_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Images/hop.svg */ "./src/Images/hop.svg");
/* harmony import */ var _Images_stand_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Images/stand.svg */ "./src/Images/stand.svg");






const mainContent = () => {
  // const container = document.querySelector(".container");
  const contents = document.createElement("div");
  const firstSection = document.createElement("div");
  const textHeader = document.createElement("h1");

  firstSection.classList.add("first-section");
  contents.classList.add("contents");
  textHeader.textContent = "Welcome To Bannycue";
  textHeader.classList.add("text_header");

  firstSection.appendChild(textHeader);
  contents.appendChild(firstSection);
  // container.appendChild(contents);

  const image = new Image();
  image.src = _Images_marek_jpg__WEBPACK_IMPORTED_MODULE_0__;

  const paul = new Image();
  paul.src = _Images_paul_jpg__WEBPACK_IMPORTED_MODULE_2__;
  paul.classList.add("paul_img");

  const markus = new Image();
  markus.src = _Images_markus_jpg__WEBPACK_IMPORTED_MODULE_1__;
  markus.classList.add("markus_img");

  const hop = new Image();
  hop.src = _Images_hop_svg__WEBPACK_IMPORTED_MODULE_3__;

  const stand = new Image();
  stand.src = _Images_stand_svg__WEBPACK_IMPORTED_MODULE_4__;

  const secondSection = document.createElement("div");
  const secondSectionDiv = document.createElement("div");
  const secondSectionH1 = document.createElement("h1");
  const secondSectionPara = document.createElement("p");

  const thirdSection = document.createElement("div");
  const fromLeft = document.createElement("div");
  const fromRight = document.createElement("div");
  const fromRightPara = document.createElement("p");
  const svgDiv = document.createElement("div");

  const thirdSectionClone = document.createElement("div");
  const fromRightClone = document.createElement("div");
  const fromLeftClone = document.createElement("div");
  const fromLeftParaClone = document.createElement("p");
  const svgDivClone = document.createElement("div");

  secondSection.classList.add("second-section");
  secondSectionDiv.classList.add("content");
  secondSectionPara.classList.add("fade_in");

  thirdSection.classList.add("third-section");
  fromLeft.classList.add("from_left");
  fromLeft.classList.add("slide_in");
  fromRight.classList.add("from_right");
  fromRight.classList.add("slide_in");
  svgDiv.classList.add("svg");

  thirdSectionClone.classList.add("third-section");
  fromRightClone.classList.add("from-right");
  fromRightClone.classList.add("slide_in");
  fromLeftClone.classList.add("from-left");
  fromLeftClone.classList.add("slide_in");
  svgDivClone.classList.add("svg");

  secondSectionH1.textContent = "Rabbit 101";
  secondSectionPara.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, iusto! Iste error at id explicabo consequatur culpa totam dolor obcaecati adipisci voluptates. Qui aliquam, accusamus explicabo nostrum optio reprehenderit quasi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis sit impedit, ducimus libero quisquam hic iure nulla neque. Inventore placeat natus incidunt minima itaque repellendus nostrum, cupiditate quos sed facere! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui atque consequuntur quas natus ex excepturi culpa numquam molestias aliquam, distinctio vel veniam veritatis ipsam ratione quisquam quibusdam. Deserunt, dolorum aut.";
  fromRightPara.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum fugit ea molestiae perspiciatis, voluptates deleniti maiores, sunt aliquid perferendis atque officia dolore. Dolorem incidunt tempora tenetur sit id nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, laborum totam quibusdam quos vero quia incidunt. Iste inventore debitis, possimus, consectetur architecto quia molestias eos dolor, mollitia nulla nisi. Perspiciatis?";
  fromLeftParaClone.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum fugit ea molestiae perspiciatis, voluptates deleniti maiores, sunt aliquid perferendis atque officia dolore. Dolorem incidunt tempora tenetur sit id nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, laborum totam quibusdam quos vero quia incidunt. Iste inventore debitis, possimus, consectetur architecto quia molestias eos dolor, mollitia nulla nisi. Perspiciatis?";

  secondSectionDiv.appendChild(secondSectionH1);
  secondSectionDiv.appendChild(secondSectionPara);

  svgDiv.appendChild(stand);
  fromRight.appendChild(fromRightPara);
  fromRight.appendChild(svgDiv);
  thirdSection.appendChild(fromLeft);
  thirdSection.appendChild(fromRight);

  thirdSectionClone.appendChild(fromRightClone);
  thirdSectionClone.appendChild(fromLeftClone);

  svgDivClone.appendChild(hop);
  fromLeftClone.appendChild(fromLeftParaClone);
  fromLeftClone.appendChild(svgDivClone);

  secondSection.appendChild(secondSectionDiv);
  contents.appendChild(secondSection);
  contents.appendChild(thirdSection);
  contents.appendChild(thirdSectionClone);

  // container.appendChild(contents);

  return contents;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainContent);


/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContent */ "./src/mainContent.js");
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Navbar */ "./src/Components/Navbar.js");
/* harmony import */ var _fadeinAndNavChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fadeinAndNavChange */ "./src/fadeinAndNavChange.js");




function pageLoad() {
  const container = document.querySelector(".container");

  container.appendChild((0,_Components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"])());
  container.appendChild((0,_mainContent__WEBPACK_IMPORTED_MODULE_0__["default"])());
  (0,_fadeinAndNavChange__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);


/***/ }),

/***/ "./src/Images/BannycueColor.svg":
/*!**************************************!*\
  !*** ./src/Images/BannycueColor.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a6cdeda4e4325057f49.svg";

/***/ }),

/***/ "./src/Images/alexander.jpg":
/*!**********************************!*\
  !*** ./src/Images/alexander.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0af5077aaced8ee799f5.jpg";

/***/ }),

/***/ "./src/Images/chef.svg":
/*!*****************************!*\
  !*** ./src/Images/chef.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a028326fa1db8046e4aa.svg";

/***/ }),

/***/ "./src/Images/design.svg":
/*!*******************************!*\
  !*** ./src/Images/design.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8dcb49e2a81d214f57e6.svg";

/***/ }),

/***/ "./src/Images/hop.svg":
/*!****************************!*\
  !*** ./src/Images/hop.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa9750de200d5a5c2135.svg";

/***/ }),

/***/ "./src/Images/logo.svg":
/*!*****************************!*\
  !*** ./src/Images/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7b0450a9e5b02364590.svg";

/***/ }),

/***/ "./src/Images/marek.jpg":
/*!******************************!*\
  !*** ./src/Images/marek.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f444d9bb60b7543f344c.jpg";

/***/ }),

/***/ "./src/Images/markus.jpg":
/*!*******************************!*\
  !*** ./src/Images/markus.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7201ded240796145f8e9.jpg";

/***/ }),

/***/ "./src/Images/paul.jpg":
/*!*****************************!*\
  !*** ./src/Images/paul.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69745e83db2204e4398f.jpg";

/***/ }),

/***/ "./src/Images/stand.svg":
/*!******************************!*\
  !*** ./src/Images/stand.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a5001c0563123f281fa.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8s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QUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLDhDQUFLOztBQUVuQjtBQUNBLGFBQWEsNkNBQUk7QUFDakI7O0FBRUE7QUFDQSxlQUFlLCtDQUFNO0FBQ3JCOztBQUVBO0FBQ0EsWUFBWSw0Q0FBRzs7QUFFZjtBQUNBLGNBQWMsOENBQUs7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWtCO0FBQ3BCOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUhrQjtBQUNKO0FBQ0E7QUFDa0I7QUFDZDtBQUNhOztBQUV2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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OztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FrQztBQUNaOztBQUV0QixxREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL0NvbXBvbmVudHMvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvQ29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9Db21wb25lbnRzL01lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL0NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9mYWRlaW5BbmROYXZDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL21haW5Db250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9tYXJlay5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL21hcmt1cy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL3BhdWwuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9jaGVmLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvYWxleGFuZGVyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuXFxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1MywgMTMwLCAwLjg1KTtcXG4gICAgLS1mb250LXNpemU6IGNhbGMoLjllbSArIC41dncpO1xcbiAgICAtLWxpbmUtaGVpZ2h0OiBjYWxjKDEuMmVtICsgMXZ3KTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcblxcblxcbn1cXG5cXG4vKiBuYXZpZ2F0aW9uIHN0eWxlcyBzdGFydCBoZXJlICovXFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIC8qVGhpcyBlbnN1cmVzIHRoZSBoZWFkZXIgaXMgYWx3YXlzIG9uIHRvcCBvZiBldmVyeWhpbmcgZWxzZSAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyguM2VtICsgLjd2dyk7XFxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDJlbSArIDJ2dyk7XFxufVxcblxcbi8qIC5sb2dvLXNjcm9sbGVkIHtcXG4gICAgLS10ZXh0OiAjZmZmZmZmO1xcblxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufSAqL1xcblxcbi8qICNob21lX2J0biBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59ICovXFxuXFxuLm5hdi10b2dnbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2LXRvZ2dsZS1sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW4sXFxuLm5hdi10b2dnbGUtbGFiZWwgc3Bhbjo6YmVmb3JlLFxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5hdi10b2dnbGUtbGFiZWwgc3Bhbjo6YmVmb3JlLFxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG59XFxuXFxuLm5hdi10b2dnbGUtbGFiZWwgc3Bhbjo6YmVmb3JlIHtcXG4gICAgYm90dG9tOiA3cHg7XFxufVxcblxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmFmdGVyIHtcXG4gICAgdG9wOiA3cHg7XFxufVxcblxcbm5hdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxufVxcblxcbm5hdiBsaSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59XFxuXFxubmF2IGxpIHtcXG5cXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5uYXYtdG9nZ2xlOmNoZWNrZWR+bmF2IHtcXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxufVxcblxcbi5uYXYtdG9nZ2xlOmNoZWNrZWR+bmF2IGxpIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluLW91dCAyNTBtcztcXG59XFxuXFxuLm5hdi1zY3JvbGxlZCB7XFxuICAgIC0tdGV4dDogI2Y1ZjVmNTtcXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjcyNTI1O1xcblxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBib3gtc2hhZG93OiAwIDNweCAyMHB4IHJnYmEoYmxhY2ssIDAuMik7XFxuICAgIC8qIG9wYWNpdHk6IDAuNDsgKi9cXG59XFxuXFxuI2hvbWVfYnRuIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS1GaXJzdCBzZWN0aW9uLS0tLS0tLS0tLS0gKi9cXG5cXG4uZmlyc3Qtc2VjdGlvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuXFxufVxcblxcbi5sb2dvIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnRleHRfaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGZvbnQtc2l6ZTogOTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCB2aWJlcycsICdjdXJzaXZlJztcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi8qIC0tLS0tLS0tU2Vjb25kIGNvbnRlbnQtLS0tLS0tLS0gKi9cXG5cXG4uY29udGVudCB7XFxuICAgIC0tZm9udC1zaXplOiBjYWxjKC41ZW0gKyAuNXZ3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogNWVtIDJlbSA1ZW0gMmVtO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5jb250ZW50ID4gaDEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm93ZGllcycsICdjdXJzaXZlJztcXG59XFxuXFxuLmNvbnRlbnQgPiBoMTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAzZW07XFxuICAgIGJvdHRvbTogLS41ZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uY29udGVudCA+IHAge1xcbiAgICBmb250LWZhbWlseTogJ0RvbmdsZScsICdzYW5zLXNlcmlmJztcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5mYWRlX2luIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4uZmFkZV9pbi5hcHBlYXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS1UaGlyZCBTZWN0aW9uLS0tLS0tLS0tLS0gKi9cXG5cXG4udGhpcmQtc2VjdGlvbiB7XFxuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcblxcbi5mcm9tX2xlZnQge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG5cXG5cXG4uZnJvbV9yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxufVxcblxcbi5mcm9tX3JpZ2h0PnAge1xcbiAgICBmb250LWZhbWlseTogJ0RvbmdsZScsICdzYW5zLXNlcmlmJztcXG59XFxuXFxuXFxuLmZyb20tcmlnaHQge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxufVxcblxcblxcbi5mcm9tLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuXFxuLmZyb20tbGVmdCA+IHAge1xcbiAgICBmb250LWZhbWlseTogJ0RvbmdsZScsICdzYW5zLXNlcmlmJztcXG59XFxuXFxuLmZyb21fbGVmdCxcXG4uZnJvbV9yaWdodCB7XFxuICAgIHRyYW5zaXRpb246XFxuICAgICAgICBvcGFjaXR5IDI1MG1zIGVhc2UtaW4sXFxuICAgICAgICB0cmFuc2Zvcm0gNDAwbXMgZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmZyb21fbGVmdC5hcHBlYXIsXFxuLmZyb21fcmlnaHQuYXBwZWFyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZnJvbS1sZWZ0LFxcbi5mcm9tLXJpZ2h0IHtcXG4gICAgdHJhbnNpdGlvbjpcXG4gICAgICAgIG9wYWNpdHkgMjUwbXMgZWFzZS1pbixcXG4gICAgICAgIHRyYW5zZm9ybSA0MDBtcyBlYXNlLWluO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uZnJvbS1sZWZ0LmFwcGVhcixcXG4uZnJvbS1yaWdodC5hcHBlYXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIC0tLS0tLS0tLU1lbnUgY29udGVudC0tLS0tLS0tLSAqL1xcblxcbi5oZWFkX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDVlbSAzZW0gMmVtIDNlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCB2aWJlcycsICdjdXJzaXZlJztcXG59XFxuXFxuLmNhcmRzIHtcXG4gICAgLS1mb250LXNpemU6IGNhbGMoMWVtICsgLjh2dyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnRG9uZ2xlJywgJ3NhbnMtc2VyaWYnO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5yaWNlLWRpc2ggcCBzcGFuIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnJpY2UtZGlzaCBwIHNwYW4gKyBzcGFuIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucmljZS1kaXNoIHVsIGxpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5jaGlsbGktb25seSB7XFxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDsgXFxufVxcblxcbi5zcGVjaWFsLXNhdCB1bCBsaSBzcGFuIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uZnJpZXMtbWVudSB1bCBsaSBzcGFuIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uc21hbGwtY2hvcHMgdWwgbGkgc3BhbiB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmV4dHJhIHVsIGxpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5ib251c19kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvbnVzIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXFxuICAgIHBhZGRpbmc6IDEwZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tQ29udGFjdC0tLS0tLS0tLS0gKi9cXG5cXG4gLmNvbnRhY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDMyLCAzMiwgNDMsIDAuNjIpLCByZ2JhKDMyLCAzMCwgMzEsIDAuODMpKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuIH1cXG5cXG4gLmxvZ28tZGl2IHtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCB2aWJlcycsJ2N1cnNpdmUnO1xcbiB9XFxuXFxuLyogLS0tLS0tLS0tLS1NZWRpYSBRdWVyeS0tLS0tLS0tLSAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk1MHB4KSB7XFxuICAgIC5uYXYtdG9nZ2xlLWxhYmVsIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gbWlubWF4KDYwMHB4LCAzZnIpIDFmcjtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcblxcbiAgICBuYXYge1xcbiAgICAgICAgYWxsOiB1bnNldDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAzIC8gNTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgbmF2IGxpIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgbmF2IGxpOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGhlaWdodDogM3B4O1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAvKiBib3R0b206IC0uNWVtOyAqL1xcbiAgICAgICAgLyogdG9wOiAtLjc1ZW07ICovXFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xcbiAgICAgICAgLyogdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7ICovXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMjUwbXM7XFxuICAgIH1cXG5cXG4gICAgbmF2IGxpOmhvdmVyOjpiZWZvcmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gICAgfVxcblxcbiAgICBuYXYgdWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICBuYXYgbGkge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgLnNlY29uZC1zZWN0aW9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgICAgIHBhZGRpbmc6IDVlbSA4ZW0gMTBlbSA4ZW07XFxuICAgIH1cXG5cXG4gICAgLyogLnNlY29uZF9jb250ZW50ID4gaDE6OmFmdGVyIHtcXG4gICAgICAgIGxlZnQ6IDUwcHg7XFxuICAgICAgICBib3R0b206IC00cHg7XFxuICAgIH0gKi9cXG5cXG4gICAgLnRoaXJkLXNlY3Rpb24ge1xcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZjRmNGY0O1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIC8qIGNvbHVtbi1nYXA6IDJlbTsgKi9cXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDFlbSwgMWZyKSByZXBlYXQoMiwgbWlubWF4KDIwMHB4LCA0MDBweCkpIG1pbm1heCgxZW0sIDFmcik7XFxuICAgICAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7ICovXFxuICAgIH1cXG5cXG4gICAgLmZyb21fbGVmdCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDEwZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIH1cXG5cXG4gICAgLmZyb21fcmlnaHQge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDMgLyA1O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcbiAgICB9XFxuXFxuICAgIC5mcm9tLXJpZ2h0IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAzIC8gNTtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogMTBlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcbiAgICB9XFxuXFxuICAgIC5mcm9tLWxlZnQge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgfVxcblxcbiAgICAuY29udGFjdCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICB9XFxuXFxuXFxuXFxufVxcblxcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTFweCkge1xcbiAgICAtLS0tLS0tLS1NZW51IGNvbnRlbnQtLS0tLS0tLS1cXG5cXG4gICAgLmNhcmQge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubWF4eWNhcmRfaW1hZ2Uge1xcbiAgICAgICAgcGFkZGluZzogNWVtO1xcbiAgICB9XFxuXFxuICAgIC5jb2RlZGNhcmRfaW1hZ2Uge1xcbiAgICAgICAgcGFkZGluZzogNWVtO1xcbiAgICB9XFxuXFxuICAgIC5jYXJkX3ByaWNlIHtcXG4gICAgICAgIG1hcmdpbjogMS4ycmVtIDAgMS4ycmVtIDA7XFxuICAgIH1cXG59ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksdUNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsZUFBZTtBQUNuQjs7QUFFQTs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCOzs7QUFHMUI7O0FBRUEsaUNBQWlDOztBQUVqQztJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWiw4REFBOEQ7SUFDOUQsV0FBVztJQUNYLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsNEJBQTRCO0FBQ2hDOztBQUVBOzs7O0dBSUc7O0FBRUg7OztHQUdHOztBQUVIO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGtCQUFrQjs7QUFFdEI7O0FB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XCI6cm9vdCB7XFxuXFxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1MywgMTMwLCAwLjg1KTtcXG4gICAgLS1mb250LXNpemU6IGNhbGMoLjllbSArIC41dncpO1xcbiAgICAtLWxpbmUtaGVpZ2h0OiBjYWxjKDEuMmVtICsgMXZ3KTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcblxcblxcbn1cXG5cXG4vKiBuYXZpZ2F0aW9uIHN0eWxlcyBzdGFydCBoZXJlICovXFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIC8qVGhpcyBlbnN1cmVzIHRoZSBoZWFkZXIgaXMgYWx3YXlzIG9uIHRvcCBvZiBldmVyeWhpbmcgZWxzZSAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyguM2VtICsgLjd2dyk7XFxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDJlbSArIDJ2dyk7XFxufVxcblxcbi8qIC5sb2dvLXNjcm9sbGVkIHtcXG4gICAgLS10ZXh0OiAjZmZmZmZmO1xcblxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufSAqL1xcblxcbi8qICNob21lX2J0biBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59ICovXFxuXFxuLm5hdi10b2dnbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2LXRvZ2dsZS1sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW4sXFxuLm5hdi10b2dnbGUtbGFiZWwgc3Bhbjo6YmVmb3JlLFxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5hdi10b2dnbGUtbGFiZWwgc3Bhbjo6YmVmb3JlLFxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG59XFxuXFxuLm5hdi10b2dnbGUtbGFiZWwgc3Bhbjo6YmVmb3JlIHtcXG4gICAgYm90dG9tOiA3cHg7XFxufVxcblxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmFmdGVyIHtcXG4gICAgdG9wOiA3cHg7XFxufVxcblxcbm5hdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxufVxcblxcbm5hdiBsaSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59XFxuXFxubmF2IGxpIHtcXG5cXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5uYXYtdG9nZ2xlOmNoZWNrZWR+bmF2IHtcXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxufVxcblxcbi5uYXYtdG9nZ2xlOmNoZWNrZWR+bmF2IGxpIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluLW91dCAyNTBtcztcXG59XFxuXFxuLm5hdi1zY3JvbGxlZCB7XFxuICAgIC0tdGV4dDogI2Y1ZjVmNTtcXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjcyNTI1O1xcblxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBib3gtc2hhZG93OiAwIDNweCAyMHB4IHJnYmEoYmxhY2ssIDAuMik7XFxuICAgIC8qIG9wYWNpdHk6IDAuNDsgKi9cXG59XFxuXFxuI2hvbWVfYnRuIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS1GaXJzdCBzZWN0aW9uLS0tLS0tLS0tLS0gKi9cXG5cXG4uZmlyc3Qtc2VjdGlvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9zcmMvSW1hZ2VzL21hcmVrLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG5cXG59XFxuXFxuLmxvZ28ge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4udGV4dF9oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgZm9udC1zaXplOiA5MHB4O1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IHZpYmVzJywgJ2N1cnNpdmUnO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLyogLS0tLS0tLS1TZWNvbmQgY29udGVudC0tLS0tLS0tLSAqL1xcblxcbi5jb250ZW50IHtcXG4gICAgLS1mb250LXNpemU6IGNhbGMoLjVlbSArIC41dncpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiA1ZW0gMmVtIDVlbSAyZW07XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG59XFxuXFxuLmNvbnRlbnQgPiBoMSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb3dkaWVzJywgJ2N1cnNpdmUnO1xcbn1cXG5cXG4uY29udGVudCA+IGgxOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDNlbTtcXG4gICAgYm90dG9tOiAtLjVlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi5jb250ZW50ID4gcCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRG9uZ2xlJywgJ3NhbnMtc2VyaWYnO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLmZhZGVfaW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW47XFxufVxcblxcbi5mYWRlX2luLmFwcGVhciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIC0tLS0tLS0tLVRoaXJkIFNlY3Rpb24tLS0tLS0tLS0tLSAqL1xcblxcbi50aGlyZC1zZWN0aW9uIHtcXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjRmNGY0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuXFxuLmZyb21fbGVmdCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9zcmMvSW1hZ2VzL21hcmt1cy5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMGVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcblxcblxcbi5mcm9tX3JpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG59XFxuXFxuLmZyb21fcmlnaHQ+cCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRG9uZ2xlJywgJ3NhbnMtc2VyaWYnO1xcbn1cXG5cXG5cXG4uZnJvbS1yaWdodCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9zcmMvSW1hZ2VzL3BhdWwuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxufVxcblxcblxcbi5mcm9tLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuXFxuLmZyb20tbGVmdCA+IHAge1xcbiAgICBmb250LWZhbWlseTogJ0RvbmdsZScsICdzYW5zLXNlcmlmJztcXG59XFxuXFxuLmZyb21fbGVmdCxcXG4uZnJvbV9yaWdodCB7XFxuICAgIHRyYW5zaXRpb246XFxuICAgICAgICBvcGFjaXR5IDI1MG1zIGVhc2UtaW4sXFxuICAgICAgICB0cmFuc2Zvcm0gNDAwbXMgZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmZyb21fbGVmdC5hcHBlYXIsXFxuLmZyb21fcmlnaHQuYXBwZWFyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZnJvbS1sZWZ0LFxcbi5mcm9tLXJpZ2h0IHtcXG4gICAgdHJhbnNpdGlvbjpcXG4gICAgICAgIG9wYWNpdHkgMjUwbXMgZWFzZS1pbixcXG4gICAgICAgIHRyYW5zZm9ybSA0MDBtcyBlYXNlLWluO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uZnJvbS1sZWZ0LmFwcGVhcixcXG4uZnJvbS1yaWdodC5hcHBlYXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIC0tLS0tLS0tLU1lbnUgY29udGVudC0tLS0tLS0tLSAqL1xcblxcbi5oZWFkX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDVlbSAzZW0gMmVtIDNlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCB2aWJlcycsICdjdXJzaXZlJztcXG59XFxuXFxuLmNhcmRzIHtcXG4gICAgLS1mb250LXNpemU6IGNhbGMoMWVtICsgLjh2dyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnRG9uZ2xlJywgJ3NhbnMtc2VyaWYnO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5yaWNlLWRpc2ggcCBzcGFuIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnJpY2UtZGlzaCBwIHNwYW4gKyBzcGFuIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucmljZS1kaXNoIHVsIGxpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5jaGlsbGktb25seSB7XFxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDsgXFxufVxcblxcbi5zcGVjaWFsLXNhdCB1bCBsaSBzcGFuIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uZnJpZXMtbWVudSB1bCBsaSBzcGFuIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uc21hbGwtY2hvcHMgdWwgbGkgc3BhbiB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmV4dHJhIHVsIGxpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5ib251c19kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvbnVzIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9zcmMvSW1hZ2VzL2NoZWYuc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAqL1xcbiAgICBwYWRkaW5nOiAxMGVtO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLUNvbnRhY3QtLS0tLS0tLS0tICovXFxuXFxuIC5jb250YWN0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgzMiwgMzIsIDQzLCAwLjYyKSwgcmdiYSgzMiwgMzAsIDMxLCAwLjgzKSksIHVybChcXFwiLi4vc3JjL0ltYWdlcy9hbGV4YW5kZXIuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiB9XFxuXFxuIC5sb2dvLWRpdiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgdmliZXMnLCdjdXJzaXZlJztcXG4gfVxcblxcbi8qIC0tLS0tLS0tLS0tTWVkaWEgUXVlcnktLS0tLS0tLS0gKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NTBweCkge1xcbiAgICAubmF2LXRvZ2dsZS1sYWJlbCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIG1pbm1heCg2MDBweCwgM2ZyKSAxZnI7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICAgIGFsbDogdW5zZXQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMyAvIDU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgIG5hdiBsaSB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIG5hdiBsaTo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBoZWlnaHQ6IDNweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgLyogYm90dG9tOiAtLjVlbTsgKi9cXG4gICAgICAgIC8qIHRvcDogLS43NWVtOyAqL1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcXG4gICAgICAgIC8qIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0OyAqL1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IDI1MG1zO1xcbiAgICB9XFxuXFxuICAgIG5hdiBsaTpob3Zlcjo6YmVmb3JlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICAgIH1cXG5cXG4gICAgbmF2IHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgbmF2IGxpIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgIC5zZWNvbmQtc2VjdGlvbiB7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgICAgICBwYWRkaW5nOiA1ZW0gOGVtIDEwZW0gOGVtO1xcbiAgICB9XFxuXFxuICAgIC8qIC5zZWNvbmRfY29udGVudCA+IGgxOjphZnRlciB7XFxuICAgICAgICBsZWZ0OiA1MHB4O1xcbiAgICAgICAgYm90dG9tOiAtNHB4O1xcbiAgICB9ICovXFxuXFxuICAgIC50aGlyZC1zZWN0aW9uIHtcXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAvKiBjb2x1bW4tZ2FwOiAyZW07ICovXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxZW0sIDFmcikgcmVwZWF0KDIsIG1pbm1heCgyMDBweCwgNDAwcHgpKSBtaW5tYXgoMWVtLCAxZnIpO1xcbiAgICAgICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyAqL1xcbiAgICB9XFxuXFxuICAgIC5mcm9tX2xlZnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3NyYy9JbWFnZXMvbWFya3VzLmpwZycpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAxMGVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB9XFxuXFxuICAgIC5mcm9tX3JpZ2h0IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAzIC8gNTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG4gICAgfVxcblxcbiAgICAuZnJvbS1yaWdodCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMyAvIDU7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3JjL0ltYWdlcy9wYXVsLmpwZycpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAxMGVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxuICAgIH1cXG5cXG4gICAgLmZyb20tbGVmdCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWN0IHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIH1cXG5cXG5cXG5cXG59XFxuXFxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MXB4KSB7XFxuICAgIC0tLS0tLS0tLU1lbnUgY29udGVudC0tLS0tLS0tLVxcblxcbiAgICAuY2FyZCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5tYXh5Y2FyZF9pbWFnZSB7XFxuICAgICAgICBwYWRkaW5nOiA1ZW07XFxuICAgIH1cXG5cXG4gICAgLmNvZGVkY2FyZF9pbWFnZSB7XFxuICAgICAgICBwYWRkaW5nOiA1ZW07XFxuICAgIH1cXG5cXG4gICAgLmNhcmRfcHJpY2Uge1xcbiAgICAgICAgbWFyZ2luOiAxLjJyZW0gMCAxLjJyZW0gMDtcXG4gICAgfVxcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IExvZ29Db2xvciBmcm9tIFwiLi4vSW1hZ2VzL2xvZ28uc3ZnXCI7XG5pbXBvcnQgQWxleGFuZGVyIGZyb20gXCIuLi9JbWFnZXMvYWxleGFuZGVyLmpwZ1wiO1xuXG5jb25zdCBjb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBhbGV4YW5kZXIgPSBuZXcgSW1hZ2UoKTtcbiAgYWxleGFuZGVyLnNyYyA9IEFsZXhhbmRlcjtcblxuICBjb25zdCBsb2dvQ29sb3IgPSBuZXcgSW1hZ2UoKTtcbiAgbG9nb0NvbG9yLnNyYyA9IExvZ29Db2xvcjtcblxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvZ29EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9JbWFnZXMvbG9nb0NvbG9yLnN2Z1wiIGFsdD1cImxvZ29cIj5cbiAgICAgICAgPGhyPlxuICAgICAgICA8aDE+R3JhYiBhIEJpdGU8L2gxPlxuICAgIGA7XG4gIGNvbnN0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9jYXRpb25EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDM+TG9jYXRpb248L2gzPlxuICAgICAgICA8aDI+IEFtYXNhbWFuIC0gQWJlYXNlIDwvaDI+XG4gICAgICAgIDxoNT5EZWxpdmVyeSAmIFBpY2sgdXAgQXZhaWxhYmxlPC9oNT5cbiAgICAgICAgPGhyPlxuICAgICAgICA8aDI+MDIwMDE5MTQ4NTwvaDI+XG4gICAgICAgIDxoMj4wNTczNzY3MTE2PC9oMj5cbiAgICBgO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICBsb2dvRGl2LmNsYXNzTGlzdC5hZGQoXCJsb2dvLWRpdlwiKTtcblxuICBjb250YWN0LmFwcGVuZENoaWxkKGxvZ29EaXYpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KTtcblxuICByZXR1cm4gY29udGFjdDtcbn07XG5cbmNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudHNcIik7XG4gIGNvbnRlbnRzLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnRlbnRzLmFwcGVuZENoaWxkKGNvbnRhY3QoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDtcbiIsImltcG9ydCBNYXJlayBmcm9tIFwiLi4vSW1hZ2VzL21hcmVrLmpwZ1wiO1xuaW1wb3J0IE1hcmt1cyBmcm9tIFwiLi4vSW1hZ2VzL21hcmt1cy5qcGdcIjtcbmltcG9ydCBQYXVsIGZyb20gXCIuLi9JbWFnZXMvcGF1bC5qcGdcIjtcbmltcG9ydCBIb3AgZnJvbSBcIi4uL0ltYWdlcy9ob3Auc3ZnXCI7XG5pbXBvcnQgU3RhbmQgZnJvbSBcIi4uL0ltYWdlcy9zdGFuZC5zdmdcIjtcbmltcG9ydCBmYWRlaW5BbmROYXZDaGFuZ2UgZnJvbSBcIi4uL2ZhZGVpbkFuZE5hdkNoYW5nZVwiO1xuXG5jb25zdCBob21lID0gKCkgPT4ge1xuICAvLyBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuICAvLyAgIENyZWF0ZXMgZmlyc3Qgc2VjdGlvbiBlbGVtZW50cyBhbmQgYXBwZW5kcyBpbnRvIHRoZSBEb21cbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZpcnN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgLy8gICBBZGRzIGNsYXNzbGlzdCB0byBlbGVtZW50cyBhbmQgYWRkcyBjb250ZW50cyB0byB0aGUgZWxlbWVudHMgY3JlYXRlZFxuICBmaXJzdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImZpcnN0LXNlY3Rpb25cIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gIHRleHRIZWFkZXIudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgVG8gQmFubnljdWVcIjtcbiAgdGV4dEhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGV4dF9oZWFkZXJcIik7XG5cbiAgZmlyc3RTZWN0aW9uLmFwcGVuZENoaWxkKHRleHRIZWFkZXIpO1xuICBob21lLmFwcGVuZENoaWxkKGZpcnN0U2VjdGlvbik7XG4gIC8vICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRzKTtcblxuICAvLyAgIENyZWF0aW5nIEltYWdlc1xuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5zcmMgPSBNYXJlaztcblxuICBjb25zdCBwYXVsID0gbmV3IEltYWdlKCk7XG4gIHBhdWwuc3JjID0gUGF1bDtcbiAgcGF1bC5jbGFzc0xpc3QuYWRkKFwicGF1bF9pbWdcIik7XG5cbiAgY29uc3QgbWFya3VzID0gbmV3IEltYWdlKCk7XG4gIG1hcmt1cy5zcmMgPSBNYXJrdXM7XG4gIG1hcmt1cy5jbGFzc0xpc3QuYWRkKFwibWFya3VzX2ltZ1wiKTtcblxuICBjb25zdCBob3AgPSBuZXcgSW1hZ2UoKTtcbiAgaG9wLnNyYyA9IEhvcDtcblxuICBjb25zdCBzdGFuZCA9IG5ldyBJbWFnZSgpO1xuICBzdGFuZC5zcmMgPSBTdGFuZDtcblxuICAvLyAgIENyZWF0ZXMgc2Vjb25kIHNlY3Rpb24gZWxlbWVudHMgYW5kIGFwcGVuZHMgaW4gdGhlIERvbVxuICBjb25zdCBzZWNvbmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2Vjb25kU2VjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNlY29uZFNlY3Rpb25IMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3Qgc2Vjb25kU2VjdGlvblBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb25zdCB0aGlyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmcm9tTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZyb21SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZyb21SaWdodFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgc3ZnRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCB0aGlyZFNlY3Rpb25DbG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZyb21SaWdodENsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJvbUxlZnRDbG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZyb21MZWZ0UGFyYUNsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHN2Z0RpdkNsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAvLyAgQWRkcyBjbGFzc2xpc3RzIHRvIHRoZSBlbGVtZW50c1xuICBzZWNvbmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtc2VjdGlvblwiKTtcbiAgc2Vjb25kU2VjdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgc2Vjb25kU2VjdGlvblBhcmEuY2xhc3NMaXN0LmFkZChcImZhZGVfaW5cIik7XG5cbiAgdGhpcmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0aGlyZC1zZWN0aW9uXCIpO1xuICBmcm9tTGVmdC5jbGFzc0xpc3QuYWRkKFwiZnJvbV9sZWZ0XCIpO1xuICBmcm9tTGVmdC5jbGFzc0xpc3QuYWRkKFwic2xpZGVfaW5cIik7XG4gIGZyb21SaWdodC5jbGFzc0xpc3QuYWRkKFwiZnJvbV9yaWdodFwiKTtcbiAgZnJvbVJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJzbGlkZV9pblwiKTtcbiAgc3ZnRGl2LmNsYXNzTGlzdC5hZGQoXCJzdmdcIik7XG5cbiAgdGhpcmRTZWN0aW9uQ2xvbmUuY2xhc3NMaXN0LmFkZChcInRoaXJkLXNlY3Rpb25cIik7XG4gIGZyb21SaWdodENsb25lLmNsYXNzTGlzdC5hZGQoXCJmcm9tLXJpZ2h0XCIpO1xuICBmcm9tUmlnaHRDbG9uZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVfaW5cIik7XG4gIGZyb21MZWZ0Q2xvbmUuY2xhc3NMaXN0LmFkZChcImZyb20tbGVmdFwiKTtcbiAgZnJvbUxlZnRDbG9uZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVfaW5cIik7XG4gIHN2Z0RpdkNsb25lLmNsYXNzTGlzdC5hZGQoXCJzdmdcIik7XG5cbiAgLy8gICBBZGRpbmcgdGV4dCBjb250ZW50IHRvIHRoZSBlbGVtZW50cyBhbmQgYXBwZW5kaW5nIHRvIHRoZSBEb21cblxuICBzZWNvbmRTZWN0aW9uSDEudGV4dENvbnRlbnQgPSBcIlJhYmJpdCAxMDFcIjtcbiAgc2Vjb25kU2VjdGlvblBhcmEudGV4dENvbnRlbnQgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmFtLCBpdXN0byEgSXN0ZSBlcnJvciBhdCBpZCBleHBsaWNhYm8gY29uc2VxdWF0dXIgY3VscGEgdG90YW0gZG9sb3Igb2JjYWVjYXRpIGFkaXBpc2NpIHZvbHVwdGF0ZXMuIFF1aSBhbGlxdWFtLCBhY2N1c2FtdXMgZXhwbGljYWJvIG5vc3RydW0gb3B0aW8gcmVwcmVoZW5kZXJpdCBxdWFzaSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmVpY2llbmRpcyBzaXQgaW1wZWRpdCwgZHVjaW11cyBsaWJlcm8gcXVpc3F1YW0gaGljIGl1cmUgbnVsbGEgbmVxdWUuIEludmVudG9yZSBwbGFjZWF0IG5hdHVzIGluY2lkdW50IG1pbmltYSBpdGFxdWUgcmVwZWxsZW5kdXMgbm9zdHJ1bSwgY3VwaWRpdGF0ZSBxdW9zIHNlZCBmYWNlcmUhIExvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWkgYXRxdWUgY29uc2VxdXVudHVyIHF1YXMgbmF0dXMgZXggZXhjZXB0dXJpIGN1bHBhIG51bXF1YW0gbW9sZXN0aWFzIGFsaXF1YW0sIGRpc3RpbmN0aW8gdmVsIHZlbmlhbSB2ZXJpdGF0aXMgaXBzYW0gcmF0aW9uZSBxdWlzcXVhbSBxdWlidXNkYW0uIERlc2VydW50LCBkb2xvcnVtIGF1dC5cIjtcbiAgZnJvbVJpZ2h0UGFyYS50ZXh0Q29udGVudCA9XG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOdWxsYSBlYXJ1bSBmdWdpdCBlYSBtb2xlc3RpYWUgcGVyc3BpY2lhdGlzLCB2b2x1cHRhdGVzIGRlbGVuaXRpIG1haW9yZXMsIHN1bnQgYWxpcXVpZCBwZXJmZXJlbmRpcyBhdHF1ZSBvZmZpY2lhIGRvbG9yZS4gRG9sb3JlbSBpbmNpZHVudCB0ZW1wb3JhIHRlbmV0dXIgc2l0IGlkIG5hbSEgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQW5pbWksIGxhYm9ydW0gdG90YW0gcXVpYnVzZGFtIHF1b3MgdmVybyBxdWlhIGluY2lkdW50LiBJc3RlIGludmVudG9yZSBkZWJpdGlzLCBwb3NzaW11cywgY29uc2VjdGV0dXIgYXJjaGl0ZWN0byBxdWlhIG1vbGVzdGlhcyBlb3MgZG9sb3IsIG1vbGxpdGlhIG51bGxhIG5pc2kuIFBlcnNwaWNpYXRpcz9cIjtcbiAgZnJvbUxlZnRQYXJhQ2xvbmUudGV4dENvbnRlbnQgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTnVsbGEgZWFydW0gZnVnaXQgZWEgbW9sZXN0aWFlIHBlcnNwaWNpYXRpcywgdm9sdXB0YXRlcyBkZWxlbml0aSBtYWlvcmVzLCBzdW50IGFsaXF1aWQgcGVyZmVyZW5kaXMgYXRxdWUgb2ZmaWNpYSBkb2xvcmUuIERvbG9yZW0gaW5jaWR1bnQgdGVtcG9yYSB0ZW5ldHVyIHNpdCBpZCBuYW0hIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFuaW1pLCBsYWJvcnVtIHRvdGFtIHF1aWJ1c2RhbSBxdW9zIHZlcm8gcXVpYSBpbmNpZHVudC4gSXN0ZSBpbnZlbnRvcmUgZGViaXRpcywgcG9zc2ltdXMsIGNvbnNlY3RldHVyIGFyY2hpdGVjdG8gcXVpYSBtb2xlc3RpYXMgZW9zIGRvbG9yLCBtb2xsaXRpYSBudWxsYSBuaXNpLiBQZXJzcGljaWF0aXM/XCI7XG5cbiAgc2Vjb25kU2VjdGlvbkRpdi5hcHBlbmRDaGlsZChzZWNvbmRTZWN0aW9uSDEpO1xuICBzZWNvbmRTZWN0aW9uRGl2LmFwcGVuZENoaWxkKHNlY29uZFNlY3Rpb25QYXJhKTtcblxuICBzdmdEaXYuYXBwZW5kQ2hpbGQoc3RhbmQpO1xuICBmcm9tUmlnaHQuYXBwZW5kQ2hpbGQoZnJvbVJpZ2h0UGFyYSk7XG4gIGZyb21SaWdodC5hcHBlbmRDaGlsZChzdmdEaXYpO1xuICB0aGlyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoZnJvbUxlZnQpO1xuICB0aGlyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoZnJvbVJpZ2h0KTtcblxuICB0aGlyZFNlY3Rpb25DbG9uZS5hcHBlbmRDaGlsZChmcm9tUmlnaHRDbG9uZSk7XG4gIHRoaXJkU2VjdGlvbkNsb25lLmFwcGVuZENoaWxkKGZyb21MZWZ0Q2xvbmUpO1xuXG4gIHN2Z0RpdkNsb25lLmFwcGVuZENoaWxkKGhvcCk7XG4gIGZyb21MZWZ0Q2xvbmUuYXBwZW5kQ2hpbGQoZnJvbUxlZnRQYXJhQ2xvbmUpO1xuICBmcm9tTGVmdENsb25lLmFwcGVuZENoaWxkKHN2Z0RpdkNsb25lKTtcblxuICBzZWNvbmRTZWN0aW9uLmFwcGVuZENoaWxkKHNlY29uZFNlY3Rpb25EaXYpO1xuICBob21lLmFwcGVuZENoaWxkKHNlY29uZFNlY3Rpb24pO1xuICBob21lLmFwcGVuZENoaWxkKHRoaXJkU2VjdGlvbik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQodGhpcmRTZWN0aW9uQ2xvbmUpO1xuXG4gIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50cyk7XG5cbiAgcmV0dXJuIGhvbWU7XG59O1xuXG4vLyBUaGUgbG9hZEhvbWUgZnVuY3Rpb24gY2xlYXJzIHNvbWUgY29udGVudHMgaW4gdGhlIERvbSBhbmQgYXBwZW5kcyBob21lIHRvIERvbVxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IGNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50c1wiKTtcbiAgY29udGVudHMudGV4dENvbnRlbnQgPSBcIlwiO1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChob21lKCkpO1xuICBmYWRlaW5BbmROYXZDaGFuZ2UoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG4iLCJpbXBvcnQgTWFya3VzIGZyb20gXCIuLi9JbWFnZXMvbWFya3VzLmpwZ1wiO1xuaW1wb3J0IFBhdWwgZnJvbSBcIi4uL0ltYWdlcy9wYXVsLmpwZ1wiO1xuaW1wb3J0IENoZWYgZnJvbSBcIi4uL0ltYWdlcy9jaGVmLnN2Z1wiO1xuaW1wb3J0IEJhbm55Y3VlQ29sb3IgZnJvbSBcIi4uL0ltYWdlcy9CYW5ueWN1ZUNvbG9yLnN2Z1wiO1xuaW1wb3J0IERlc2lnbiBmcm9tIFwiLi4vSW1hZ2VzL2Rlc2lnbi5zdmdcIjtcbmltcG9ydCBmYWRlaW5BbmROYXZDaGFuZ2UgZnJvbSBcIi4uL2ZhZGVpbkFuZE5hdkNoYW5nZVwiO1xuXG5jb25zdCBtZW51UGFnZSA9ICgpID0+IHtcbiAgLy8gY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZpcnN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0ZXh0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJvbnVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYm9udXNJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgcmljZURpc2hNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBtZW51UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCByaWNlRGlzaFVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIGNvbnN0IGZpcnN0UmljZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBzZWNvbmRSaWNlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRoaXJkUmljZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBmb3VydGhSaWNlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGZpZnRoUmljZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBzaXh0aFJpY2VMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgcmljZUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cbiAgY29uc3Qgc3BlY2lhbFNhdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzYXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3Qgc3BlY2lhbFNhdFVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBmaXJzdFNhdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBzZWNvbmRTYXRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgdGhpcmRTYXRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgZm91cnRoU2F0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHNwZWNMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuXG4gIGNvbnN0IGZyaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJpZXNNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJpZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgZnJpZXNVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgZmlyc3RGcmllc0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBzZWNvbmRGcmllc0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGNvbnN0IHNtYWxsQ2hvcHNNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc21hbGxDaG9wVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IHNtYWxsQ2hvcHNVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgZmlyc3RDaG9wc0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBzZWNvbmRDaG9wc0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBmcmllc0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cbiAgY29uc3QgZXh0cmFNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZXh0cmFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgZXh0cmFVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgZmlyc3RFeHRyYUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBzZWNvbmRFeHRyYUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0aGlyZEV4dHJhTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGZvdXJ0aEV4cmFMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICByaWNlRGlzaE1lbnUuY2xhc3NMaXN0LmFkZChcInJpY2UtZGlzaFwiKTtcbiAgc3BlY2lhbFNhdE1lbnUuY2xhc3NMaXN0LmFkZChcInNwZWNpYWwtc2F0XCIpO1xuICBmcmllcy5jbGFzc0xpc3QuYWRkKFwiZnJpZXNcIik7XG4gIGZyaWVzTWVudS5jbGFzc0xpc3QuYWRkKFwiZnJpZXMtbWVudVwiKTtcbiAgc21hbGxDaG9wc01lbnUuY2xhc3NMaXN0LmFkZChcInNtYWxsLWNob3BzXCIpO1xuICBleHRyYU1lbnUuY2xhc3NMaXN0LmFkZChcImV4dHJhXCIpO1xuXG4gIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiUklDRSBESVNIRVNcIjtcbiAgc2F0VGl0bGUudGV4dENvbnRlbnQgPSBcIlNQRUNJQUwgU0FUVVJEQVlcIjtcbiAgZnJpZXNUaXRsZS50ZXh0Q29udGVudCA9IFwiRlJJRVNcIjtcbiAgc21hbGxDaG9wVGl0bGUudGV4dENvbnRlbnQgPSBcIlNNQUxMIENIT1BTXCI7XG4gIGV4dHJhVGl0bGUudGV4dENvbnRlbnQgPSBcIkVYVFJBXCI7XG5cbiAgbWVudVBhcmEuaW5uZXJIVE1MID0gYFNlcnZlZCB3aXRoIDxzcGFuPmNoaWxsaTwvc3Bhbj4gYW5kIDxzcGFuPnRvYXN0IHZlZzwvc3Bhbj4gYW5kIGdyaWxsZWQgcHJvdGVpbmA7XG4gIGZpcnN0UmljZUxpLmlubmVySFRNTCA9IFwiQ29jb251dCBmcmllZCByaWNlXCI7XG4gIHNlY29uZFJpY2VMaS5pbm5lckhUTUwgPSBcIlZlZ2V0YWJsZSByaWNlXCI7XG4gIHRoaXJkUmljZUxpLmlubmVySFRNTCA9IFwiUGxhaW4gcmljZVwiO1xuICBmb3VydGhSaWNlTGkuaW5uZXJIVE1MID0gYDxzcGFuPkdIUyAxNS4wMDwvc3Bhbj4tcGFjayBvZiByaWNlIGRpc2hlcyBvcHRpb25zIHNlcnZlZCB3aXRoIDxzcGFuPmdyaWxsZWQgY2hpY2tlbjwvc3Bhbj4gYW5kIDxzcGFuIGNsYXNzPVwiY2hpbGxpLW9ubHlcIj5jaGlsbGkgb25seTwvc3Bhbj4gaXMgYXZhaWxhYmxlYDtcbiAgZmlmdGhSaWNlTGkuaW5uZXJIVE1MID0gYDxzcGFuPkdIUyAzMC4wMDwvc3Bhbj4tQXNzb3J0ZWQgZnJpZWQgcmljZWA7XG4gIHNpeHRoUmljZUxpLmlubmVySFRNTCA9IGA8c3Bhbj5HSFMgMzUuMDA8L3NwYW4+LUFzc29ydGVkIGZyaWVkIHJpY2Ugd2l0aCB0b2FzdCB2ZWdgO1xuXG4gIGZpcnN0U2F0TGkuaW5uZXJIVE1MID0gYDxzcGFuPkdIUyAyMC4wMDwvc3Bhbj4tR3JpbGxlZCB0aWxhcGlhICYgQmFua3VgO1xuICBzZWNvbmRTYXRMaS5pbm5lckhUTUwgPSBgPHNwYW4+R0hTIDI1MC4wMDwvc3Bhbj4tRmFtaWx5IHNpemUgcGFja2FnZSAoZnVsbCBncmlsbGVkIHJhYmJpdCArIGZyaWVkIHJpY2UgKyB0b2FzdCB2ZWcpYDtcbiAgdGhpcmRTYXRMaS5pbm5lckhUTUwgPSBgPHNwYW4+R0hTIDE1MC4wMDwvc3Bhbj4tRnVsbCBncmlsbGVkIHJhYmJpdCBgO1xuICBmb3VydGhTYXRMaS5pbm5lckhUTUwgPSBgPHNwYW4+R0hTIDkwLjAwPC9zcGFuPi1IYWxmIGdyaWxsZWQgcmFiYml0IGA7XG5cbiAgZmlyc3RGcmllc0xpLmlubmVySFRNTCA9IGA8c3Bhbj5HSFMgMzAuMDA8L3NwYW4+LUdyaWxsZWQgcmFiYml0IGFuZCB5YW0gY2hpcHMgYDtcbiAgc2Vjb25kRnJpZXNMaS5pbm5lckhUTUwgPSBgPHNwYW4+R0hTIDIwLjAwPC9zcGFuPi1HcmlsbGVkIGNoaWNrZW4gYW5kIHlhbSBjaGlwc2A7XG4gIGZpcnN0Q2hvcHNMaS5pbm5lckhUTUwgPSBgPHNwYW4+R0hTIDEwLjAwPC9zcGFuPi1SYWJiaXQgS2ViYWJgO1xuICBzZWNvbmRDaG9wc0xpLmlubmVySFRNTCA9IGA8c3Bhbj5HSFMgMTAuMDA8L3NwYW4+LUNoaWNrZW4gS2ViYWJgO1xuXG4gIGZpcnN0RXh0cmFMaS5pbm5lckhUTUwgPSBgPHNwYW4+R0hTIDIwLjAwPC9zcGFuPi1HcmlsbGVkIHJhYmJpdGA7XG4gIHNlY29uZEV4dHJhTGkuaW5uZXJIVE1MID0gYDxzcGFuPkdIUyAxMC4wMDwvc3Bhbj4tR3JpbGxlZCBjaGlja2VuYDtcbiAgdGhpcmRFeHRyYUxpLmlubmVySFRNTCA9IGA8c3Bhbj5HSFMgNS4wMDwvc3Bhbj4tVG9hc3QgVmVnYDtcbiAgZm91cnRoRXhyYUxpLmlubmVySFRNTCA9IGA8c3Bhbj5HSFMgMTIuMDA8L3NwYW4+LUdyaWxsZWQgVGlsYXBpYWA7XG5cbiAgcmljZURpc2hVbC5hcHBlbmRDaGlsZChmaXJzdFJpY2VMaSk7XG4gIHJpY2VEaXNoVWwuYXBwZW5kQ2hpbGQoc2Vjb25kUmljZUxpKTtcbiAgcmljZURpc2hVbC5hcHBlbmRDaGlsZCh0aGlyZFJpY2VMaSk7XG4gIHJpY2VEaXNoVWwuYXBwZW5kQ2hpbGQoZm91cnRoUmljZUxpKTtcbiAgcmljZURpc2hVbC5hcHBlbmRDaGlsZChmaWZ0aFJpY2VMaSk7XG4gIHJpY2VEaXNoVWwuYXBwZW5kQ2hpbGQoc2l4dGhSaWNlTGkpO1xuXG4gIHNwZWNpYWxTYXRNZW51LmFwcGVuZENoaWxkKHNhdFRpdGxlKTtcbiAgc3BlY2lhbFNhdFVsLmFwcGVuZENoaWxkKGZpcnN0U2F0TGkpO1xuICBzcGVjaWFsU2F0VWwuYXBwZW5kQ2hpbGQoc2Vjb25kU2F0TGkpO1xuICBzcGVjaWFsU2F0VWwuYXBwZW5kQ2hpbGQodGhpcmRTYXRMaSk7XG4gIHNwZWNpYWxTYXRVbC5hcHBlbmRDaGlsZChmb3VydGhTYXRMaSk7XG5cbiAgZnJpZXNVbC5hcHBlbmRDaGlsZChmaXJzdEZyaWVzTGkpO1xuICBmcmllc1VsLmFwcGVuZENoaWxkKHNlY29uZEZyaWVzTGkpO1xuICBmcmllc01lbnUuYXBwZW5kQ2hpbGQoZnJpZXNUaXRsZSk7XG4gIGZyaWVzTWVudS5hcHBlbmRDaGlsZChmcmllc1VsKTtcblxuICBzbWFsbENob3BzVWwuYXBwZW5kQ2hpbGQoZmlyc3RDaG9wc0xpKTtcbiAgc21hbGxDaG9wc1VsLmFwcGVuZENoaWxkKHNlY29uZENob3BzTGkpO1xuICBzbWFsbENob3BzTWVudS5hcHBlbmRDaGlsZChzbWFsbENob3BUaXRsZSk7XG4gIHNtYWxsQ2hvcHNNZW51LmFwcGVuZENoaWxkKHNtYWxsQ2hvcHNVbCk7XG5cbiAgZXh0cmFNZW51LmFwcGVuZENoaWxkKGV4dHJhVGl0bGUpO1xuICBleHRyYVVsLmFwcGVuZENoaWxkKGZpcnN0RXh0cmFMaSk7XG4gIGV4dHJhVWwuYXBwZW5kQ2hpbGQoc2Vjb25kRXh0cmFMaSk7XG4gIGV4dHJhVWwuYXBwZW5kQ2hpbGQodGhpcmRFeHRyYUxpKTtcbiAgZXh0cmFVbC5hcHBlbmRDaGlsZChmb3VydGhFeHJhTGkpO1xuXG4gIHJpY2VEaXNoTWVudS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICByaWNlRGlzaE1lbnUuYXBwZW5kQ2hpbGQobWVudVBhcmEpO1xuICByaWNlRGlzaE1lbnUuYXBwZW5kQ2hpbGQocmljZURpc2hVbCk7XG4gIHJpY2VEaXNoTWVudS5hcHBlbmRDaGlsZChyaWNlTGluZSk7XG4gIHNwZWNpYWxTYXRNZW51LmFwcGVuZENoaWxkKHNwZWNpYWxTYXRVbCk7XG4gIHNwZWNpYWxTYXRNZW51LmFwcGVuZENoaWxkKHNwZWNMaW5lKTtcbiAgZnJpZXMuYXBwZW5kQ2hpbGQoZnJpZXNNZW51KTtcbiAgZnJpZXMuYXBwZW5kQ2hpbGQoc21hbGxDaG9wc01lbnUpO1xuICBmcmllcy5hcHBlbmRDaGlsZChmcmllc0xpbmUpO1xuICBleHRyYU1lbnUuYXBwZW5kQ2hpbGQoZXh0cmFVbCk7XG5cbiAgLy8gcmljZURpc2hNZW51LmFwcGVuZENoaWxkKHJpY2VEaXNoTWVudSk7XG5cbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgZmlyc3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJmaXJzdC1zZWN0aW9uXCIpO1xuICB0ZXh0SGVhZGVyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIHRleHRIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRleHRfaGVhZGVyXCIpO1xuICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkX2NvbnRhaW5lclwiKTtcbiAgY2FyZHMuY2xhc3NMaXN0LmFkZChcImNhcmRzXCIpO1xuXG4gIGJvbnVzRGl2LmNsYXNzTGlzdC5hZGQoXCJib251c19kaXZcIik7XG4gIGJvbnVzSW1hZ2UuY2xhc3NMaXN0LmFkZChcImJvbnVzXCIpO1xuXG4gIGNvbnN0IGNoZWYgPSBuZXcgSW1hZ2UoKTtcbiAgY2hlZi5zcmMgPSBDaGVmO1xuXG4gIGNvbnN0IGJhbm55Y3VlTG9nbyA9IG5ldyBJbWFnZSgpO1xuICBiYW5ueWN1ZUxvZ28uc3JjID0gQmFubnljdWVDb2xvcjtcbiAgYmFubnljdWVMb2dvLmNsYXNzTGlzdC5hZGQoXCJiYW5ueS1sb2dvXCIpO1xuXG4gIGNvbnN0IGRlc2lnbiA9IG5ldyBJbWFnZSgpO1xuICBkZXNpZ24uc3JjID0gRGVzaWduO1xuICBkZXNpZ24uY2xhc3NMaXN0LmFkZChcImRlc2lnblwiKTtcblxuICBjb25zdCBwYXVsID0gbmV3IEltYWdlKCk7XG4gIHBhdWwuc3JjID0gUGF1bDtcbiAgcGF1bC5jbGFzc0xpc3QuYWRkKFwicGF1bF9pbWdcIik7XG5cbiAgY29uc3QgbWFya3VzID0gbmV3IEltYWdlKCk7XG4gIG1hcmt1cy5zcmMgPSBNYXJrdXM7XG4gIG1hcmt1cy5jbGFzc0xpc3QuYWRkKFwibWFya3VzX2ltZ1wiKTtcblxuICAvLyBjb25zdCByaWNlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgLy8gcmljZUltZy5jbGFzc0xpc3QuYWRkKFwicmljZS1pbWdcIik7XG4gIC8vIHJpY2VJbWcuYXBwZW5kQ2hpbGQocGF1bCk7XG4gIC8vIHJpY2VEaXNoTWVudS5hcHBlbmRDaGlsZChyaWNlSW1nKTtcblxuICBmaXJzdFNlY3Rpb24uYXBwZW5kQ2hpbGQodGV4dEhlYWRlcik7XG4gIHRleHRUaXRsZS5hcHBlbmRDaGlsZChiYW5ueWN1ZUxvZ28pO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKHRleHRUaXRsZSk7XG4gIGJvbnVzRGl2LmFwcGVuZENoaWxkKGJvbnVzSW1hZ2UpO1xuXG4gIGNhcmRzLmFwcGVuZENoaWxkKHJpY2VEaXNoTWVudSk7XG4gIGNhcmRzLmFwcGVuZENoaWxkKHNwZWNpYWxTYXRNZW51KTtcbiAgY2FyZHMuYXBwZW5kQ2hpbGQoZnJpZXMpO1xuICBjYXJkcy5hcHBlbmRDaGlsZChleHRyYU1lbnUpO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQoZmlyc3RTZWN0aW9uKTtcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51RGl2KTtcbiAgbWVudS5hcHBlbmRDaGlsZChjYXJkcyk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoYm9udXNEaXYpO1xuXG4gIHJldHVybiBtZW51O1xufTtcblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IGNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50c1wiKTtcbiAgY29udGVudHMudGV4dENvbnRlbnQgPSBcIlwiO1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChtZW51UGFnZSgpKTtcbiAgZmFkZWluQW5kTmF2Q2hhbmdlKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51O1xuIiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL0hvbWVcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9NZW51XCI7XG5pbXBvcnQgTG9nb0ltZyBmcm9tIFwiLi4vSW1hZ2VzL2xvZ28uc3ZnXCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vQ29udGFjdFwiO1xuXG5jb25zdCBjcmVhdGVOYXZiYXIgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IGxvZ29JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbG9nb0ltZy5zcmMgPSBMb2dvSW1nO1xuXG4gIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2dvQ29udGFpbmVyLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIi4uL3NyYy9JbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJsb2dvXCI+YDtcbiAgY29uc3QgaGVhZGVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGhlYWRlck5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IGhlYWRlclVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBoZWFkZXJIb21lTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGhlYWRlck1lbnVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgaGVhZGVyQWJvdXRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgaGVhZGVyQ29udGFjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBoZWFkZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgaGVhZGVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gIC8vIGhlYWRlckgxLnRleHRDb250ZW50ID0gXCJCYW5ueWN1ZVwiO1xuICBoZWFkZXJJbnB1dC5jbGFzc0xpc3QuYWRkKFwibmF2LXRvZ2dsZVwiKTtcbiAgaGVhZGVySW5wdXQuaWQgPSBcIm5hdi10b2dnbGVcIjtcbiAgaGVhZGVySW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuICBoZWFkZXJIb21lTGkuaWQgPSBcImhvbWVfYnRuXCI7XG4gIGhlYWRlckhvbWVMaS50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICBoZWFkZXJIb21lTGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkSG9tZSgpO1xuICB9KTtcblxuICBoZWFkZXJNZW51TGkuaWQgPSBcIm1lbnVfYnRuXCI7XG4gIGhlYWRlck1lbnVMaS50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuICBoZWFkZXJNZW51TGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkTWVudSgpO1xuICB9KTtcblxuICBoZWFkZXJBYm91dExpLmlkID0gXCJhYm91dF9idG5cIjtcbiAgaGVhZGVyQWJvdXRMaS50ZXh0Q29udGVudCA9IFwiQUJPVVQgVVNcIjtcblxuICBoZWFkZXJDb250YWN0TGkuaWQgPSBcImNvbnRhY3RfYnRuXCI7XG4gIGhlYWRlckNvbnRhY3RMaS50ZXh0Q29udGVudCA9IFwiQ09OVEFDVCBVU1wiO1xuICBoZWFkZXJDb250YWN0TGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkQ29udGFjdCgpO1xuICB9KTtcblxuICBoZWFkZXJMYWJlbC5jbGFzc0xpc3QuYWRkKFwibmF2LXRvZ2dsZS1sYWJlbFwiKTtcbiAgaGVhZGVyTGFiZWwuaHRtbEZvciA9IFwibmF2LXRvZ2dsZVwiO1xuXG4gIGhlYWRlclVsLmFwcGVuZENoaWxkKGhlYWRlckhvbWVMaSk7XG4gIGhlYWRlclVsLmFwcGVuZENoaWxkKGhlYWRlck1lbnVMaSk7XG4gIGhlYWRlclVsLmFwcGVuZENoaWxkKGhlYWRlckFib3V0TGkpO1xuICBoZWFkZXJVbC5hcHBlbmRDaGlsZChoZWFkZXJDb250YWN0TGkpO1xuICBoZWFkZXJOYXYuYXBwZW5kQ2hpbGQoaGVhZGVyVWwpO1xuXG4gIGhlYWRlckxhYmVsLmFwcGVuZENoaWxkKGhlYWRlclNwYW4pO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcklucHV0KTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlck5hdik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMYWJlbCk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbiAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXZiYXI7XG4iLCJjb25zdCBmYWRlaW5BbmROYXZDaGFuZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGZhZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFkZV9pblwiKTtcbiAgY29uc3Qgc2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVfaW5cIik7XG5cbiAgY29uc3QgYXBwZWFyT3B0aW9ucyA9IHtcbiAgICB0aHJlc2hvbGQ6IDAsXG4gICAgcm9vdE1hcmdpbjogXCIwcHggMHB4IC0yMDBweCAwcHhcIixcbiAgfTtcblxuICBjb25zdCBhcHBlYXJPblNjcm9sbCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbiAoXG4gICAgZW50cmllcyxcbiAgICBhcHBlYXJPblNjcm9sbFxuICApIHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xuICAgICAgICBhcHBlYXJPblNjcm9sbC51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgYXBwZWFyT3B0aW9ucyk7XG5cbiAgZmFkZXJzLmZvckVhY2goKGZhZGVyKSA9PiB7XG4gICAgYXBwZWFyT25TY3JvbGwub2JzZXJ2ZShmYWRlcik7XG4gIH0pO1xuXG4gIHNsaWRlcnMuZm9yRWFjaCgoc2xpZGVyKSA9PiB7XG4gICAgYXBwZWFyT25TY3JvbGwub2JzZXJ2ZShzbGlkZXIpO1xuICB9KTtcblxuICAvLyBOYXZCYXIgQ2hhbmdlXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gIC8vICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nb1wiKTtcbiAgY29uc3Qgc2VjdGlvbk9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlyc3Qtc2VjdGlvblwiKTtcblxuICBjb25zdCBzZWN0aW9uT25lT3B0aW9ucyA9IHtcbiAgICByb290TWFyZ2luOiBcIi0yMDBweCAwcHggMHB4IDBweFwiLFxuICB9O1xuXG4gIGNvbnN0IHNlY3Rpb25PbmVPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbiAoXG4gICAgZW50cmllcyxcbiAgICBzZWN0aW9uT25lT2JzZXJ2ZXJcbiAgKSB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1zY3JvbGxlZFwiKTtcbiAgICAgICAgLy8gbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nby1zY3JvbGxlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXNjcm9sbGVkXCIpO1xuICAgICAgICAvLyBsb2dvLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2dvLXNjcm9sbGVkXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBzZWN0aW9uT25lT3B0aW9ucyk7XG5cbiAgc2VjdGlvbk9uZU9ic2VydmVyLm9ic2VydmUoc2VjdGlvbk9uZSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZmFkZWluQW5kTmF2Q2hhbmdlO1xuIiwiaW1wb3J0IE1hcmVrIGZyb20gXCIuL0ltYWdlcy9tYXJlay5qcGdcIjtcbmltcG9ydCBNYXJrdXMgZnJvbSBcIi4vSW1hZ2VzL21hcmt1cy5qcGdcIjtcbmltcG9ydCBQYXVsIGZyb20gXCIuL0ltYWdlcy9wYXVsLmpwZ1wiO1xuaW1wb3J0IEhvcCBmcm9tIFwiLi9JbWFnZXMvaG9wLnN2Z1wiO1xuaW1wb3J0IFN0YW5kIGZyb20gXCIuL0ltYWdlcy9zdGFuZC5zdmdcIjtcblxuY29uc3QgbWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICBjb25zdCBjb250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZpcnN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgZmlyc3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJmaXJzdC1zZWN0aW9uXCIpO1xuICBjb250ZW50cy5jbGFzc0xpc3QuYWRkKFwiY29udGVudHNcIik7XG4gIHRleHRIZWFkZXIudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgVG8gQmFubnljdWVcIjtcbiAgdGV4dEhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGV4dF9oZWFkZXJcIik7XG5cbiAgZmlyc3RTZWN0aW9uLmFwcGVuZENoaWxkKHRleHRIZWFkZXIpO1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChmaXJzdFNlY3Rpb24pO1xuICAvLyBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudHMpO1xuXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IE1hcmVrO1xuXG4gIGNvbnN0IHBhdWwgPSBuZXcgSW1hZ2UoKTtcbiAgcGF1bC5zcmMgPSBQYXVsO1xuICBwYXVsLmNsYXNzTGlzdC5hZGQoXCJwYXVsX2ltZ1wiKTtcblxuICBjb25zdCBtYXJrdXMgPSBuZXcgSW1hZ2UoKTtcbiAgbWFya3VzLnNyYyA9IE1hcmt1cztcbiAgbWFya3VzLmNsYXNzTGlzdC5hZGQoXCJtYXJrdXNfaW1nXCIpO1xuXG4gIGNvbnN0IGhvcCA9IG5ldyBJbWFnZSgpO1xuICBob3Auc3JjID0gSG9wO1xuXG4gIGNvbnN0IHN0YW5kID0gbmV3IEltYWdlKCk7XG4gIHN0YW5kLnNyYyA9IFN0YW5kO1xuXG4gIGNvbnN0IHNlY29uZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzZWNvbmRTZWN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2Vjb25kU2VjdGlvbkgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBzZWNvbmRTZWN0aW9uUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGNvbnN0IHRoaXJkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZyb21MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJvbVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJvbVJpZ2h0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBzdmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IHRoaXJkU2VjdGlvbkNsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJvbVJpZ2h0Q2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmcm9tTGVmdENsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJvbUxlZnRQYXJhQ2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgc3ZnRGl2Q2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHNlY29uZFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlY29uZC1zZWN0aW9uXCIpO1xuICBzZWNvbmRTZWN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICBzZWNvbmRTZWN0aW9uUGFyYS5jbGFzc0xpc3QuYWRkKFwiZmFkZV9pblwiKTtcblxuICB0aGlyZFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRoaXJkLXNlY3Rpb25cIik7XG4gIGZyb21MZWZ0LmNsYXNzTGlzdC5hZGQoXCJmcm9tX2xlZnRcIik7XG4gIGZyb21MZWZ0LmNsYXNzTGlzdC5hZGQoXCJzbGlkZV9pblwiKTtcbiAgZnJvbVJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmcm9tX3JpZ2h0XCIpO1xuICBmcm9tUmlnaHQuY2xhc3NMaXN0LmFkZChcInNsaWRlX2luXCIpO1xuICBzdmdEaXYuY2xhc3NMaXN0LmFkZChcInN2Z1wiKTtcblxuICB0aGlyZFNlY3Rpb25DbG9uZS5jbGFzc0xpc3QuYWRkKFwidGhpcmQtc2VjdGlvblwiKTtcbiAgZnJvbVJpZ2h0Q2xvbmUuY2xhc3NMaXN0LmFkZChcImZyb20tcmlnaHRcIik7XG4gIGZyb21SaWdodENsb25lLmNsYXNzTGlzdC5hZGQoXCJzbGlkZV9pblwiKTtcbiAgZnJvbUxlZnRDbG9uZS5jbGFzc0xpc3QuYWRkKFwiZnJvbS1sZWZ0XCIpO1xuICBmcm9tTGVmdENsb25lLmNsYXNzTGlzdC5hZGQoXCJzbGlkZV9pblwiKTtcbiAgc3ZnRGl2Q2xvbmUuY2xhc3NMaXN0LmFkZChcInN2Z1wiKTtcblxuICBzZWNvbmRTZWN0aW9uSDEudGV4dENvbnRlbnQgPSBcIlJhYmJpdCAxMDFcIjtcbiAgc2Vjb25kU2VjdGlvblBhcmEudGV4dENvbnRlbnQgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmFtLCBpdXN0byEgSXN0ZSBlcnJvciBhdCBpZCBleHBsaWNhYm8gY29uc2VxdWF0dXIgY3VscGEgdG90YW0gZG9sb3Igb2JjYWVjYXRpIGFkaXBpc2NpIHZvbHVwdGF0ZXMuIFF1aSBhbGlxdWFtLCBhY2N1c2FtdXMgZXhwbGljYWJvIG5vc3RydW0gb3B0aW8gcmVwcmVoZW5kZXJpdCBxdWFzaSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmVpY2llbmRpcyBzaXQgaW1wZWRpdCwgZHVjaW11cyBsaWJlcm8gcXVpc3F1YW0gaGljIGl1cmUgbnVsbGEgbmVxdWUuIEludmVudG9yZSBwbGFjZWF0IG5hdHVzIGluY2lkdW50IG1pbmltYSBpdGFxdWUgcmVwZWxsZW5kdXMgbm9zdHJ1bSwgY3VwaWRpdGF0ZSBxdW9zIHNlZCBmYWNlcmUhIExvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWkgYXRxdWUgY29uc2VxdXVudHVyIHF1YXMgbmF0dXMgZXggZXhjZXB0dXJpIGN1bHBhIG51bXF1YW0gbW9sZXN0aWFzIGFsaXF1YW0sIGRpc3RpbmN0aW8gdmVsIHZlbmlhbSB2ZXJpdGF0aXMgaXBzYW0gcmF0aW9uZSBxdWlzcXVhbSBxdWlidXNkYW0uIERlc2VydW50LCBkb2xvcnVtIGF1dC5cIjtcbiAgZnJvbVJpZ2h0UGFyYS50ZXh0Q29udGVudCA9XG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOdWxsYSBlYXJ1bSBmdWdpdCBlYSBtb2xlc3RpYWUgcGVyc3BpY2lhdGlzLCB2b2x1cHRhdGVzIGRlbGVuaXRpIG1haW9yZXMsIHN1bnQgYWxpcXVpZCBwZXJmZXJlbmRpcyBhdHF1ZSBvZmZpY2lhIGRvbG9yZS4gRG9sb3JlbSBpbmNpZHVudCB0ZW1wb3JhIHRlbmV0dXIgc2l0IGlkIG5hbSEgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQW5pbWksIGxhYm9ydW0gdG90YW0gcXVpYnVzZGFtIHF1b3MgdmVybyBxdWlhIGluY2lkdW50LiBJc3RlIGludmVudG9yZSBkZWJpdGlzLCBwb3NzaW11cywgY29uc2VjdGV0dXIgYXJjaGl0ZWN0byBxdWlhIG1vbGVzdGlhcyBlb3MgZG9sb3IsIG1vbGxpdGlhIG51bGxhIG5pc2kuIFBlcnNwaWNpYXRpcz9cIjtcbiAgZnJvbUxlZnRQYXJhQ2xvbmUudGV4dENvbnRlbnQgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTnVsbGEgZWFydW0gZnVnaXQgZWEgbW9sZXN0aWFlIHBlcnNwaWNpYXRpcywgdm9sdXB0YXRlcyBkZWxlbml0aSBtYWlvcmVzLCBzdW50IGFsaXF1aWQgcGVyZmVyZW5kaXMgYXRxdWUgb2ZmaWNpYSBkb2xvcmUuIERvbG9yZW0gaW5jaWR1bnQgdGVtcG9yYSB0ZW5ldHVyIHNpdCBpZCBuYW0hIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFuaW1pLCBsYWJvcnVtIHRvdGFtIHF1aWJ1c2RhbSBxdW9zIHZlcm8gcXVpYSBpbmNpZHVudC4gSXN0ZSBpbnZlbnRvcmUgZGViaXRpcywgcG9zc2ltdXMsIGNvbnNlY3RldHVyIGFyY2hpdGVjdG8gcXVpYSBtb2xlc3RpYXMgZW9zIGRvbG9yLCBtb2xsaXRpYSBudWxsYSBuaXNpLiBQZXJzcGljaWF0aXM/XCI7XG5cbiAgc2Vjb25kU2VjdGlvbkRpdi5hcHBlbmRDaGlsZChzZWNvbmRTZWN0aW9uSDEpO1xuICBzZWNvbmRTZWN0aW9uRGl2LmFwcGVuZENoaWxkKHNlY29uZFNlY3Rpb25QYXJhKTtcblxuICBzdmdEaXYuYXBwZW5kQ2hpbGQoc3RhbmQpO1xuICBmcm9tUmlnaHQuYXBwZW5kQ2hpbGQoZnJvbVJpZ2h0UGFyYSk7XG4gIGZyb21SaWdodC5hcHBlbmRDaGlsZChzdmdEaXYpO1xuICB0aGlyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoZnJvbUxlZnQpO1xuICB0aGlyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoZnJvbVJpZ2h0KTtcblxuICB0aGlyZFNlY3Rpb25DbG9uZS5hcHBlbmRDaGlsZChmcm9tUmlnaHRDbG9uZSk7XG4gIHRoaXJkU2VjdGlvbkNsb25lLmFwcGVuZENoaWxkKGZyb21MZWZ0Q2xvbmUpO1xuXG4gIHN2Z0RpdkNsb25lLmFwcGVuZENoaWxkKGhvcCk7XG4gIGZyb21MZWZ0Q2xvbmUuYXBwZW5kQ2hpbGQoZnJvbUxlZnRQYXJhQ2xvbmUpO1xuICBmcm9tTGVmdENsb25lLmFwcGVuZENoaWxkKHN2Z0RpdkNsb25lKTtcblxuICBzZWNvbmRTZWN0aW9uLmFwcGVuZENoaWxkKHNlY29uZFNlY3Rpb25EaXYpO1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChzZWNvbmRTZWN0aW9uKTtcbiAgY29udGVudHMuYXBwZW5kQ2hpbGQodGhpcmRTZWN0aW9uKTtcbiAgY29udGVudHMuYXBwZW5kQ2hpbGQodGhpcmRTZWN0aW9uQ2xvbmUpO1xuXG4gIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50cyk7XG5cbiAgcmV0dXJuIGNvbnRlbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpbkNvbnRlbnQ7XG4iLCJpbXBvcnQgbWFpbkNvbnRlbnQgZnJvbSBcIi4vbWFpbkNvbnRlbnRcIjtcbmltcG9ydCBjcmVhdGVOYXZiYXIgZnJvbSBcIi4vQ29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBmYWRlaW5BbmROYXZDaGFuZ2UgZnJvbSBcIi4vZmFkZWluQW5kTmF2Q2hhbmdlXCI7XG5cbmZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2YmFyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQoKSk7XG4gIGZhZGVpbkFuZE5hdkNoYW5nZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9wYWdlTG9hZFwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbnBhZ2VMb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=