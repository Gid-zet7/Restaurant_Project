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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/fullLockup.svg */ "./src/Images/fullLockup.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/markus.jpg */ "./src/Images/markus.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/paul.jpg */ "./src/Images/paul.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/chef.svg */ "./src/Images/chef.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/alexander.jpg */ "./src/Images/alexander.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\n    --background: rgba(255, 253, 130, 0.85);\n    --font-size: calc(.9em + .5vw);\n    --line-height: calc(1.2em + 1vw);\n    font-size: 16px;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    font-weight: 400;\n    overflow-x: hidden;\n    /* overflow: hidden; */\n\n\n}\n\n/* navigation styles start here */\n\nheader {\n    background: var(--background);\n    text-align: center;\n    position: fixed;\n    z-index: 999;\n    /*This ensures the header is always on top of everyhing else */\n    width: 100%;\n    color: #fff;\n    font-size: calc(.3em + .7vw);\n    line-height: calc(2em + 2vw);\n}\n\n/* .logo-scrolled {\n    --text: #ffffff;\n\n    color: var(--text);\n} */\n\n/* #home_btn a {\n    text-decoration: none;\n    color: #fff;\n} */\n\n.nav-toggle {\n    display: none;\n}\n\n.nav-toggle-label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-left: 1em;\n    height: 100%;\n    display: flex;\n    align-items: center;\n}\n\n.nav-toggle-label span,\n.nav-toggle-label span::before,\n.nav-toggle-label span::after {\n    display: block;\n    background: #fff;\n    height: 2px;\n    width: 2em;\n    border-radius: 2px;\n    position: relative;\n}\n\n.nav-toggle-label span::before,\n.nav-toggle-label span::after {\n    content: '';\n    position: absolute;\n\n}\n\n.nav-toggle-label span::before {\n    bottom: 7px;\n}\n\n.nav-toggle-label span::after {\n    top: 7px;\n}\n\nnav {\n    position: absolute;\n    text-align: left;\n    top: 100%;\n    left: 0;\n    background: var(--background);\n    width: 100%;\n    /* display: none; */\n    transform: scale(1, 0);\n    transform-origin: top;\n    transition: transform 400ms ease-in-out;\n}\n\nnav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n\n}\n\nnav li {\n    margin-bottom: 1em;\n    margin-left: 1em;\n}\n\nnav li {\n\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    opacity: 0;\n    transition: opacity 150ms ease-in-out;\n}\n\n.nav-toggle:checked~nav {\n    /* display: block; */\n    transform: scale(1, 1);\n}\n\n.nav-toggle:checked~nav li {\n    opacity: 1;\n    transition: opacity 250ms ease-in-out 250ms;\n}\n\n.nav-scrolled {\n    --text: #f5f5f5;\n    --background: #272525;\n\n    color: var(--text);\n    background: var(--background);\n    box-shadow: 0 3px 20px rgba(black, 0.2);\n}\n\n#home_btn {\n    user-select: none;\n}\n\n/* ----------First section----------- */\n\n.first-section {\n    position: relative;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100vw;\n    height: 100vh;\n\n\n}\n\n.logo {\n    margin-top: 1rem;\n    padding: 2rem;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n}\n\n.text_header {\n    position: absolute;\n    color: var(--background);\n    font-size: 90px;\n    font-family: 'Great vibes', 'cursive';\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n/* --------Second content--------- */\n\n.content {\n    --font-size: calc(.5em + .5vw);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    padding: 5em 2em 5em 2em;\n    font-size: var(--font-size);\n}\n\n.content > h1 {\n    position: relative;\n    font-family: 'Rowdies', 'cursive';\n}\n\n.content > h1::after {\n    content: '';\n    width: 100px;\n    height: 3px;\n    position: absolute;\n    left: 3em;\n    bottom: -.5em;\n    background: var(--background);\n}\n\n.content > p {\n    font-family: 'Dongle', 'sans-serif';\n    font-size: 2em;\n}\n\n.fade_in {\n    opacity: 0;\n    transition: opacity 250ms ease-in;\n}\n\n.fade_in.appear {\n    opacity: 1;\n}\n\n/* ---------Third Section----------- */\n\n.third-section {\n    --background: #f4f4f4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--font-size);\n    background: var(--background);\n}\n\n\n.from_left {\n    width: 100vw;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    transform: translateX(-50%);\n}\n\n\n.from_right {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2em;\n    height: 100%;\n    padding: 1em;\n    transform: translateX(50%);\n}\n\n.from_right>p {\n    font-family: 'Dongle', 'sans-serif';\n}\n\n\n.from-right {\n    width: 100vw;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    transform: translateX(50%);\n}\n\n\n.from-left {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    padding: 1em;\n    font-size: 1.2em;\n    transform: translateX(-50%);\n}\n\n.from-left > p {\n    font-family: 'Dongle', 'sans-serif';\n}\n\n.from_left,\n.from_right {\n    transition:\n        opacity 250ms ease-in,\n        transform 400ms ease-in;\n    opacity: 0;\n}\n\n.from_left.appear,\n.from_right.appear {\n    transform: translateX(0);\n    opacity: 1;\n}\n\n.from-left,\n.from-right {\n    transition:\n        opacity 250ms ease-in,\n        transform 400ms ease-in;\n    opacity: 0;\n}\n\n.from-left.appear,\n.from-right.appear {\n    transform: translateX(0);\n    opacity: 1;\n}\n\n/* ---------Menu content--------- */\n\n.head_container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 5em 3em 2em 3em;\n    font-family: 'Great vibes', 'cursive';\n}\n\n.cards {\n    --font-size: calc(1em + .8vw);\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n    font-family: 'Dongle', 'sans-serif';\n    font-size: var(--font-size);\n}\n\n.rice-dish p span {\n    color: red;\n}\n\n.rice-dish p span + span {\n    color: green;\n}\n\n.rice-dish ul li span {\n    color: green;\n}\n\n.chilli-only {\n    color: red !important; \n}\n\n.special-sat ul li span {\n    color: green;\n}\n\n.fries-menu ul li span {\n    color: green;\n}\n\n.small-chops ul li span {\n    color: green;\n}\n\n.extra ul li span {\n    color: green;\n}\n\n.bonus_div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.bonus {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    /* background-position: center; */\n    padding: 10em;\n    min-height: 100%;\n}\n\n/* -----------Contact---------- */\n\n .contact {\n    background-image: linear-gradient(to bottom, rgba(32, 32, 43, 0.62), rgba(12, 10, 11, 0.83)), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n    padding-top: 2rem;\n    font-size: 1rem;\n    width: 100vw;\n    height: 100vh;\n }\n\n .logo-div {\n    font-family: 'Great vibes','cursive';\n }\n\n/* -----------Media Query--------- */\n\n@media screen and (min-width: 950px) {\n    .nav-toggle-label {\n        display: none;\n    }\n\n    header {\n        display: grid;\n        background: transparent;\n        grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;\n    }\n\n    .header {\n        grid-column: 2 / 3;\n    }\n\n    nav {\n        all: unset;\n        grid-column: 3 / 5;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        margin-right: 1em;\n        background: transparent;\n    }\n\n    nav li {\n        cursor: pointer;\n        opacity: 1;\n        position: relative;\n    }\n\n    nav li::before {\n        content: '';\n        display: block;\n        height: 3px;\n        background: var(--background);\n        position: absolute;\n        /* bottom: -.5em; */\n        /* top: -.75em; */\n        left: 0;\n        right: 0;\n        transform: scale(0, 1);\n        /* transform-origin: right; */\n        transition: transform ease-in-out 250ms;\n    }\n\n    nav li:hover::before {\n        transform: scale(1, 1);\n    }\n\n    nav ul {\n        display: flex;\n    }\n\n    nav li {\n        margin-left: 3em;\n        margin-bottom: 0;\n    }\n\n    /* .logo {\n        padding-top: 1rem;\n        background-image: url(\"../src/Images/fullLockup.svg\");\n        background-repeat: no-repeat;\n        background-size: contain;\n        background-position: center;\n    } */\n\n    .second-section {\n        font-size: var(--font-size);\n        padding: 5em 8em 10em 8em;\n    }\n\n    /* .second_content > h1::after {\n        left: 50px;\n        bottom: -4px;\n    } */\n\n    .third-section {\n        --background: #f4f4f4;\n        display: grid;\n        /* column-gap: 2em; */\n        align-items: center;\n        font-size: var(--font-size);\n        background: var(--background);\n        grid-template-columns: minmax(1em, 1fr) repeat(2, minmax(200px, 400px)) minmax(1em, 1fr);\n        /* grid-template-columns: 1fr 1fr; */\n    }\n\n    .from_left {\n        width: 100%;\n        grid-column: 1 / 3;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        padding: 10em;\n        transform: translateX(-50%);\n    }\n\n    .from_right {\n        grid-column: 3 / 5;\n        justify-content: center;\n        align-items: center;\n        font-size: 1.2em;\n        height: 100%;\n        padding: 1em;\n        transform: translateX(50%);\n    }\n\n    .from-right {\n        grid-column: 3 / 5;\n        grid-row: 1 / 2;\n        width: 100%;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        padding: 10em;\n        transform: translateX(50%);\n    }\n\n    .from-left {\n        grid-column: 1 / 3;\n        height: 100%;\n        padding: 1em;\n        font-size: 1.2em;\n        transform: translateX(-50%);\n    }\n\n    .contact {\n        padding-top: 5rem;\n        font-size: 1.4rem;\n    }\n\n\n\n}\n\n/* @media screen and (max-width: 1151px) {\n    ---------Menu content---------\n\n    .card {\n        flex-direction: column;\n    }\n\n    .maxycard_image {\n        padding: 5em;\n    }\n\n    .codedcard_image {\n        padding: 5em;\n    }\n\n    .card_price {\n        margin: 1.2rem 0 1.2rem 0;\n    }\n} */", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n\n    --background: rgba(255, 253, 130, 0.85);\n    --font-size: calc(.9em + .5vw);\n    --line-height: calc(1.2em + 1vw);\n    font-size: 16px;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    font-weight: 400;\n    overflow-x: hidden;\n    /* overflow: hidden; */\n\n\n}\n\n/* navigation styles start here */\n\nheader {\n    background: var(--background);\n    text-align: center;\n    position: fixed;\n    z-index: 999;\n    /*This ensures the header is always on top of everyhing else */\n    width: 100%;\n    color: #fff;\n    font-size: calc(.3em + .7vw);\n    line-height: calc(2em + 2vw);\n}\n\n/* .logo-scrolled {\n    --text: #ffffff;\n\n    color: var(--text);\n} */\n\n/* #home_btn a {\n    text-decoration: none;\n    color: #fff;\n} */\n\n.nav-toggle {\n    display: none;\n}\n\n.nav-toggle-label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-left: 1em;\n    height: 100%;\n    display: flex;\n    align-items: center;\n}\n\n.nav-toggle-label span,\n.nav-toggle-label span::before,\n.nav-toggle-label span::after {\n    display: block;\n    background: #fff;\n    height: 2px;\n    width: 2em;\n    border-radius: 2px;\n    position: relative;\n}\n\n.nav-toggle-label span::before,\n.nav-toggle-label span::after {\n    content: '';\n    position: absolute;\n\n}\n\n.nav-toggle-label span::before {\n    bottom: 7px;\n}\n\n.nav-toggle-label span::after {\n    top: 7px;\n}\n\nnav {\n    position: absolute;\n    text-align: left;\n    top: 100%;\n    left: 0;\n    background: var(--background);\n    width: 100%;\n    /* display: none; */\n    transform: scale(1, 0);\n    transform-origin: top;\n    transition: transform 400ms ease-in-out;\n}\n\nnav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n\n}\n\nnav li {\n    margin-bottom: 1em;\n    margin-left: 1em;\n}\n\nnav li {\n\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    opacity: 0;\n    transition: opacity 150ms ease-in-out;\n}\n\n.nav-toggle:checked~nav {\n    /* display: block; */\n    transform: scale(1, 1);\n}\n\n.nav-toggle:checked~nav li {\n    opacity: 1;\n    transition: opacity 250ms ease-in-out 250ms;\n}\n\n.nav-scrolled {\n    --text: #f5f5f5;\n    --background: #272525;\n\n    color: var(--text);\n    background: var(--background);\n    box-shadow: 0 3px 20px rgba(black, 0.2);\n}\n\n#home_btn {\n    user-select: none;\n}\n\n/* ----------First section----------- */\n\n.first-section {\n    position: relative;\n    background-image: url('../src/Images/marek.jpg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100vw;\n    height: 100vh;\n\n\n}\n\n.logo {\n    margin-top: 1rem;\n    padding: 2rem;\n    background-image: url(\"../src/Images/fullLockup.svg\");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n}\n\n.text_header {\n    position: absolute;\n    color: var(--background);\n    font-size: 90px;\n    font-family: 'Great vibes', 'cursive';\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n/* --------Second content--------- */\n\n.content {\n    --font-size: calc(.5em + .5vw);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    padding: 5em 2em 5em 2em;\n    font-size: var(--font-size);\n}\n\n.content > h1 {\n    position: relative;\n    font-family: 'Rowdies', 'cursive';\n}\n\n.content > h1::after {\n    content: '';\n    width: 100px;\n    height: 3px;\n    position: absolute;\n    left: 3em;\n    bottom: -.5em;\n    background: var(--background);\n}\n\n.content > p {\n    font-family: 'Dongle', 'sans-serif';\n    font-size: 2em;\n}\n\n.fade_in {\n    opacity: 0;\n    transition: opacity 250ms ease-in;\n}\n\n.fade_in.appear {\n    opacity: 1;\n}\n\n/* ---------Third Section----------- */\n\n.third-section {\n    --background: #f4f4f4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--font-size);\n    background: var(--background);\n}\n\n\n.from_left {\n    width: 100vw;\n    background-image: url('../src/Images/markus.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    transform: translateX(-50%);\n}\n\n\n.from_right {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2em;\n    height: 100%;\n    padding: 1em;\n    transform: translateX(50%);\n}\n\n.from_right>p {\n    font-family: 'Dongle', 'sans-serif';\n}\n\n\n.from-right {\n    width: 100vw;\n    background-image: url('../src/Images/paul.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    transform: translateX(50%);\n}\n\n\n.from-left {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    padding: 1em;\n    font-size: 1.2em;\n    transform: translateX(-50%);\n}\n\n.from-left > p {\n    font-family: 'Dongle', 'sans-serif';\n}\n\n.from_left,\n.from_right {\n    transition:\n        opacity 250ms ease-in,\n        transform 400ms ease-in;\n    opacity: 0;\n}\n\n.from_left.appear,\n.from_right.appear {\n    transform: translateX(0);\n    opacity: 1;\n}\n\n.from-left,\n.from-right {\n    transition:\n        opacity 250ms ease-in,\n        transform 400ms ease-in;\n    opacity: 0;\n}\n\n.from-left.appear,\n.from-right.appear {\n    transform: translateX(0);\n    opacity: 1;\n}\n\n/* ---------Menu content--------- */\n\n.head_container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 5em 3em 2em 3em;\n    font-family: 'Great vibes', 'cursive';\n}\n\n.cards {\n    --font-size: calc(1em + .8vw);\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n    font-family: 'Dongle', 'sans-serif';\n    font-size: var(--font-size);\n}\n\n.rice-dish p span {\n    color: red;\n}\n\n.rice-dish p span + span {\n    color: green;\n}\n\n.rice-dish ul li span {\n    color: green;\n}\n\n.chilli-only {\n    color: red !important; \n}\n\n.special-sat ul li span {\n    color: green;\n}\n\n.fries-menu ul li span {\n    color: green;\n}\n\n.small-chops ul li span {\n    color: green;\n}\n\n.extra ul li span {\n    color: green;\n}\n\n.bonus_div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.bonus {\n    background: url('../src/Images/chef.svg');\n    background-size: contain;\n    background-repeat: no-repeat;\n    /* background-position: center; */\n    padding: 10em;\n    min-height: 100%;\n}\n\n/* -----------Contact---------- */\n\n .contact {\n    background-image: linear-gradient(to bottom, rgba(32, 32, 43, 0.62), rgba(12, 10, 11, 0.83)), url(\"../src/Images/alexander.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n    padding-top: 2rem;\n    font-size: 1rem;\n    width: 100vw;\n    height: 100vh;\n }\n\n .logo-div {\n    font-family: 'Great vibes','cursive';\n }\n\n/* -----------Media Query--------- */\n\n@media screen and (min-width: 950px) {\n    .nav-toggle-label {\n        display: none;\n    }\n\n    header {\n        display: grid;\n        background: transparent;\n        grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;\n    }\n\n    .header {\n        grid-column: 2 / 3;\n    }\n\n    nav {\n        all: unset;\n        grid-column: 3 / 5;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        margin-right: 1em;\n        background: transparent;\n    }\n\n    nav li {\n        cursor: pointer;\n        opacity: 1;\n        position: relative;\n    }\n\n    nav li::before {\n        content: '';\n        display: block;\n        height: 3px;\n        background: var(--background);\n        position: absolute;\n        /* bottom: -.5em; */\n        /* top: -.75em; */\n        left: 0;\n        right: 0;\n        transform: scale(0, 1);\n        /* transform-origin: right; */\n        transition: transform ease-in-out 250ms;\n    }\n\n    nav li:hover::before {\n        transform: scale(1, 1);\n    }\n\n    nav ul {\n        display: flex;\n    }\n\n    nav li {\n        margin-left: 3em;\n        margin-bottom: 0;\n    }\n\n    /* .logo {\n        padding-top: 1rem;\n        background-image: url(\"../src/Images/fullLockup.svg\");\n        background-repeat: no-repeat;\n        background-size: contain;\n        background-position: center;\n    } */\n\n    .second-section {\n        font-size: var(--font-size);\n        padding: 5em 8em 10em 8em;\n    }\n\n    /* .second_content > h1::after {\n        left: 50px;\n        bottom: -4px;\n    } */\n\n    .third-section {\n        --background: #f4f4f4;\n        display: grid;\n        /* column-gap: 2em; */\n        align-items: center;\n        font-size: var(--font-size);\n        background: var(--background);\n        grid-template-columns: minmax(1em, 1fr) repeat(2, minmax(200px, 400px)) minmax(1em, 1fr);\n        /* grid-template-columns: 1fr 1fr; */\n    }\n\n    .from_left {\n        width: 100%;\n        grid-column: 1 / 3;\n        background-image: url('../src/Images/markus.jpg');\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        padding: 10em;\n        transform: translateX(-50%);\n    }\n\n    .from_right {\n        grid-column: 3 / 5;\n        justify-content: center;\n        align-items: center;\n        font-size: 1.2em;\n        height: 100%;\n        padding: 1em;\n        transform: translateX(50%);\n    }\n\n    .from-right {\n        grid-column: 3 / 5;\n        grid-row: 1 / 2;\n        width: 100%;\n        background-image: url('../src/Images/paul.jpg');\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        padding: 10em;\n        transform: translateX(50%);\n    }\n\n    .from-left {\n        grid-column: 1 / 3;\n        height: 100%;\n        padding: 1em;\n        font-size: 1.2em;\n        transform: translateX(-50%);\n    }\n\n    .contact {\n        padding-top: 5rem;\n        font-size: 1.4rem;\n    }\n\n\n\n}\n\n/* @media screen and (max-width: 1151px) {\n    ---------Menu content---------\n\n    .card {\n        flex-direction: column;\n    }\n\n    .maxycard_image {\n        padding: 5em;\n    }\n\n    .codedcard_image {\n        padding: 5em;\n    }\n\n    .card_price {\n        margin: 1.2rem 0 1.2rem 0;\n    }\n} */"],"sourceRoot":""}]);
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
/* harmony import */ var _Images_fullLockupColor_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Images/fullLockupColor.svg */ "./src/Images/fullLockupColor.svg");
/* harmony import */ var _Images_alexander_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Images/alexander.jpg */ "./src/Images/alexander.jpg");



const contact = () => {
  const alexander = new Image();
  alexander.src = _Images_alexander_jpg__WEBPACK_IMPORTED_MODULE_1__;

  const fullLockupC = new Image();
  fullLockupC.src = _Images_fullLockupColor_svg__WEBPACK_IMPORTED_MODULE_0__;

  const contact = document.createElement("div");
  const lockupDiv = document.createElement("div");
  lockupDiv.innerHTML = `
        <img src="../src/Images/fullLockupColor.svg" alt="">
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
  lockupDiv.classList.add("logo-div");

  contact.appendChild(lockupDiv);
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
/* harmony import */ var _Images_fullLockup_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/fullLockup.svg */ "./src/Images/fullLockup.svg");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact */ "./src/Components/Contact.js");





const createNavbar = () => {
  // const container = document.querySelector(".container");
  const header = document.createElement("header");

  const fullLockupB = new Image();
  fullLockupB.src = _Images_fullLockup_svg__WEBPACK_IMPORTED_MODULE_2__;

  const logoContainer = document.createElement("div");
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

/***/ "./src/Images/fullLockup.svg":
/*!***********************************!*\
  !*** ./src/Images/fullLockup.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a5df316e69091c9067e.svg";

/***/ }),

/***/ "./src/Images/fullLockupColor.svg":
/*!****************************************!*\
  !*** ./src/Images/fullLockupColor.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb8244bcf89fe8b933b9.svg";

/***/ }),

/***/ "./src/Images/hop.svg":
/*!****************************!*\
  !*** ./src/Images/hop.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa9750de200d5a5c2135.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsU0FBUyxNQUFNLHNCQUFz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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSw2Q0FBSTs7QUFFakI7QUFDQSxxQkFBcUIsc0RBQWE7QUFDbEM7O0FBRUE7QUFDQSxlQUFlLCtDQUFNO0FBQ3JCOztBQUVBO0FBQ0EsYUFBYSw2Q0FBSTtBQUNqQjs7QUFFQTtBQUNBLGVBQWUsK0NBQU07QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWtCO0FBQ3BCOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hNTTtBQUNBO0FBQ29C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QUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDWjs7QUFFdEIscURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9Db21wb25lbnRzL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL0NvbXBvbmVudHMvSG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvQ29tcG9uZW50cy9NZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9Db21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvZmFkZWluQW5kTmF2Q2hhbmdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9tYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvbWFyZWsuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9mdWxsTG9ja3VwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvbWFya3VzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvcGF1bC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL2NoZWYuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9hbGV4YW5kZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuXFxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1MywgMTMwLCAwLjg1KTtcXG4gICAgLS1mb250LXNpemU6IGNhbGMoLjllbSArIC41dncpO1xcbiAgICAtLWxpbmUtaGVpZ2h0OiBjYWxjKDEuMmVtICsgMXZ3KTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcblxcblxcbn1cXG5cXG4vKiBuYXZpZ2F0aW9uIHN0eWxlcyBzdGFydCBoZXJlICovXFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIC8qVGhpcyBlbnN1cmVzIHRoZSBoZWFkZXIgaXMgYWx3YXlzIG9uIHRvcCBvZiBldmVyeWhpbmcgZWxzZSAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyguM2VtICsgLjd2dyk7XFxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDJlbSArIDJ2dyk7XFxufVxcblxcbi8qIC5sb2dvLXNjcm9sbGVkIHtcXG4gICAgLS10ZXh0OiAjZmZmZmZmO1xcblxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufSAqL1xcblxcbi8qICNob21lX2J0biBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59ICovXFxuXFxuLm5hdi10b2dnbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2LXRvZ2dsZS1sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW4sXFxuLm5hdi10b2dnbGUtbGFiZWwgc3Bhbjo6YmVmb3JlLFxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5hdi10b2dnbGUtbGFiZWwgc3Bhbjo6YmVmb3JlLFxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG59XFxuXFxuLm5hdi10b2dnbGUtbGFiZWwgc3Bhbjo6YmVmb3JlIHtcXG4gICAgYm90dG9tOiA3cHg7XFxufVxcblxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmFmdGVyIHtcXG4gICAgdG9wOiA3cHg7XFxufVxcblxcbm5hdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxufVxcblxcbm5hdiBsaSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59XFxuXFxubmF2IGxpIHtcXG5cXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5uYXYtdG9nZ2xlOmNoZWNrZWR+bmF2IHtcXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxufVxcblxcbi5uYXYtdG9nZ2xlOmNoZWNrZWR+bmF2IGxpIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluLW91dCAyNTBtcztcXG59XFxuXFxuLm5hdi1zY3JvbGxlZCB7XFxuICAgIC0tdGV4dDogI2Y1ZjVmNTtcXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjcyNTI1O1xcblxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBib3gtc2hhZG93OiAwIDNweCAyMHB4IHJnYmEoYmxhY2ssIDAuMik7XFxufVxcblxcbiNob21lX2J0biB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tRmlyc3Qgc2VjdGlvbi0tLS0tLS0tLS0tICovXFxuXFxuLmZpcnN0LXNlY3Rpb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcblxcbn1cXG5cXG4ubG9nbyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4udGV4dF9oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgZm9udC1zaXplOiA5MHB4O1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IHZpYmVzJywgJ2N1cnNpdmUnO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLyogLS0tLS0tLS1TZWNvbmQgY29udGVudC0tLS0tLS0tLSAqL1xcblxcbi5jb250ZW50IHtcXG4gICAgLS1mb250LXNpemU6IGNhbGMoLjVlbSArIC41dncpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiA1ZW0gMmVtIDVlbSAyZW07XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG59XFxuXFxuLmNvbnRlbnQgPiBoMSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb3dkaWVzJywgJ2N1cnNpdmUnO1xcbn1cXG5cXG4uY29udGVudCA+IGgxOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDNlbTtcXG4gICAgYm90dG9tOiAtLjVlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi5jb250ZW50ID4gcCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRG9uZ2xlJywgJ3NhbnMtc2VyaWYnO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLmZhZGVfaW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW47XFxufVxcblxcbi5mYWRlX2luLmFwcGVhciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIC0tLS0tLS0tLVRoaXJkIFNlY3Rpb24tLS0tLS0tLS0tLSAqL1xcblxcbi50aGlyZC1zZWN0aW9uIHtcXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjRmNGY0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuXFxuLmZyb21fbGVmdCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMGVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcblxcblxcbi5mcm9tX3JpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG59XFxuXFxuLmZyb21fcmlnaHQ+cCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRG9uZ2xlJywgJ3NhbnMtc2VyaWYnO1xcbn1cXG5cXG5cXG4uZnJvbS1yaWdodCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMGVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG59XFxuXFxuXFxuLmZyb20tbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG5cXG4uZnJvbS1sZWZ0ID4gcCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRG9uZ2xlJywgJ3NhbnMtc2VyaWYnO1xcbn1cXG5cXG4uZnJvbV9sZWZ0LFxcbi5mcm9tX3JpZ2h0IHtcXG4gICAgdHJhbnNpdGlvbjpcXG4gICAgICAgIG9wYWNpdHkgMjUwbXMgZWFzZS1pbixcXG4gICAgICAgIHRyYW5zZm9ybSA0MDBtcyBlYXNlLWluO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uZnJvbV9sZWZ0LmFwcGVhcixcXG4uZnJvbV9yaWdodC5hcHBlYXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5mcm9tLWxlZnQsXFxuLmZyb20tcmlnaHQge1xcbiAgICB0cmFuc2l0aW9uOlxcbiAgICAgICAgb3BhY2l0eSAyNTBtcyBlYXNlLWluLFxcbiAgICAgICAgdHJhbnNmb3JtIDQwMG1zIGVhc2UtaW47XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5mcm9tLWxlZnQuYXBwZWFyLFxcbi5mcm9tLXJpZ2h0LmFwcGVhciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLyogLS0tLS0tLS0tTWVudSBjb250ZW50LS0tLS0tLS0tICovXFxuXFxuLmhlYWRfY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNWVtIDNlbSAyZW0gM2VtO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IHZpYmVzJywgJ2N1cnNpdmUnO1xcbn1cXG5cXG4uY2FyZHMge1xcbiAgICAtLWZvbnQtc2l6ZTogY2FsYygxZW0gKyAuOHZ3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdEb25nbGUnLCAnc2Fucy1zZXJpZic7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG59XFxuXFxuLnJpY2UtZGlzaCBwIHNwYW4ge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ucmljZS1kaXNoIHAgc3BhbiArIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5yaWNlLWRpc2ggdWwgbGkgc3BhbiB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmNoaWxsaS1vbmx5IHtcXG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50OyBcXG59XFxuXFxuLnNwZWNpYWwtc2F0IHVsIGxpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5mcmllcy1tZW51IHVsIGxpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5zbWFsbC1jaG9wcyB1bCBsaSBzcGFuIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uZXh0cmEgdWwgbGkgc3BhbiB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmJvbnVzX2RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9udXMge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIC8qIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgKi9cXG4gICAgcGFkZGluZzogMTBlbTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS1Db250YWN0LS0tLS0tLS0tLSAqL1xcblxcbiAuY29udGFjdCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMzIsIDMyLCA0MywgMC42MiksIHJnYmEoMTIsIDEwLCAxMSwgMC44MykpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gfVxcblxcbiAubG9nby1kaXYge1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IHZpYmVzJywnY3Vyc2l2ZSc7XFxuIH1cXG5cXG4vKiAtLS0tLS0tLS0tLU1lZGlhIFF1ZXJ5LS0tLS0tLS0tICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTUwcHgpIHtcXG4gICAgLm5hdi10b2dnbGUtbGFiZWwge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byBtaW5tYXgoNjAwcHgsIDNmcikgMWZyO1xcbiAgICB9XFxuXFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgICBhbGw6IHVuc2V0O1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDMgLyA1O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICBuYXYgbGkge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICBuYXYgbGk6OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgaGVpZ2h0OiAzcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIC8qIGJvdHRvbTogLS41ZW07ICovXFxuICAgICAgICAvKiB0b3A6IC0uNzVlbTsgKi9cXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XFxuICAgICAgICAvKiB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDsgKi9cXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAyNTBtcztcXG4gICAgfVxcblxcbiAgICBuYXYgbGk6aG92ZXI6OmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgICB9XFxuXFxuICAgIG5hdiB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIG5hdiBsaSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogM2VtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICAvKiAubG9nbyB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vc3JjL0ltYWdlcy9mdWxsTG9ja3VwLnN2Z1xcXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgfSAqL1xcblxcbiAgICAuc2Vjb25kLXNlY3Rpb24ge1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgICAgICAgcGFkZGluZzogNWVtIDhlbSAxMGVtIDhlbTtcXG4gICAgfVxcblxcbiAgICAvKiAuc2Vjb25kX2NvbnRlbnQgPiBoMTo6YWZ0ZXIge1xcbiAgICAgICAgbGVmdDogNTBweDtcXG4gICAgICAgIGJvdHRvbTogLTRweDtcXG4gICAgfSAqL1xcblxcbiAgICAudGhpcmQtc2VjdGlvbiB7XFxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmNGY0ZjQ7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgLyogY29sdW1uLWdhcDogMmVtOyAqL1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMWVtLCAxZnIpIHJlcGVhdCgyLCBtaW5tYXgoMjAwcHgsIDQwMHB4KSkgbWlubWF4KDFlbSwgMWZyKTtcXG4gICAgICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgKi9cXG4gICAgfVxcblxcbiAgICAuZnJvbV9sZWZ0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogMTBlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgfVxcblxcbiAgICAuZnJvbV9yaWdodCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMyAvIDU7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxuICAgIH1cXG5cXG4gICAgLmZyb20tcmlnaHQge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDMgLyA1O1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAxMGVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxuICAgIH1cXG5cXG4gICAgLmZyb20tbGVmdCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWN0IHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIH1cXG5cXG5cXG5cXG59XFxuXFxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MXB4KSB7XFxuICAgIC0tLS0tLS0tLU1lbnUgY29udGVudC0tLS0tLS0tLVxcblxcbiAgICAuY2FyZCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5tYXh5Y2FyZF9pbWFnZSB7XFxuICAgICAgICBwYWRkaW5nOiA1ZW07XFxuICAgIH1cXG5cXG4gICAgLmNvZGVkY2FyZF9pbWFnZSB7XFxuICAgICAgICBwYWRkaW5nOiA1ZW07XFxuICAgIH1cXG5cXG4gICAgLmNhcmRfcHJpY2Uge1xcbiAgICAgICAgbWFyZ2luOiAxLjJyZW0gMCAxLjJyZW0gMDtcXG4gICAgfVxcbn0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSx1Q0FBdUM7SUFDdkMsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyxlQUFlO0FBQ25COztBQUVBOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7OztBQUcxQjs7QUFFQSxpQ0FBaUM7O0FBRWpDO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLDhEQUE4RDtJQUM5RCxXQUFXO0lBQ1gsV0FBVztJQUNYLDRCQUE0QjtJQUM1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7Ozs7R0FJRzs7QUFFSDs7O0dBR0c7O0FBRUg7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJ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InNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcblxcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTMsIDEzMCwgMC44NSk7XFxuICAgIC0tZm9udC1zaXplOiBjYWxjKC45ZW0gKyAuNXZ3KTtcXG4gICAgLS1saW5lLWhlaWdodDogY2FsYygxLjJlbSArIDF2dyk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG5cXG5cXG59XFxuXFxuLyogbmF2aWdhdGlvbiBzdHlsZXMgc3RhcnQgaGVyZSAqL1xcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICAvKlRoaXMgZW5zdXJlcyB0aGUgaGVhZGVyIGlzIGFsd2F5cyBvbiB0b3Agb2YgZXZlcnloaW5nIGVsc2UgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IGNhbGMoLjNlbSArIC43dncpO1xcbiAgICBsaW5lLWhlaWdodDogY2FsYygyZW0gKyAydncpO1xcbn1cXG5cXG4vKiAubG9nby1zY3JvbGxlZCB7XFxuICAgIC0tdGV4dDogI2ZmZmZmZjtcXG5cXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcbn0gKi9cXG5cXG4vKiAjaG9tZV9idG4gYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxufSAqL1xcblxcbi5uYXYtdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hdi10b2dnbGUtbGFiZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2LXRvZ2dsZS1sYWJlbCBzcGFuLFxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmJlZm9yZSxcXG4ubmF2LXRvZ2dsZS1sYWJlbCBzcGFuOjphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmJlZm9yZSxcXG4ubmF2LXRvZ2dsZS1sYWJlbCBzcGFuOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxufVxcblxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmJlZm9yZSB7XFxuICAgIGJvdHRvbTogN3B4O1xcbn1cXG5cXG4ubmF2LXRvZ2dsZS1sYWJlbCBzcGFuOjphZnRlciB7XFxuICAgIHRvcDogN3B4O1xcbn1cXG5cXG5uYXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDApO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxubmF2IHVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbn1cXG5cXG5uYXYgbGkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxufVxcblxcbm5hdiBsaSB7XFxuXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubmF2LXRvZ2dsZTpjaGVja2Vkfm5hdiB7XFxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbn1cXG5cXG4ubmF2LXRvZ2dsZTpjaGVja2Vkfm5hdiBsaSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbi1vdXQgMjUwbXM7XFxufVxcblxcbi5uYXYtc2Nyb2xsZWQge1xcbiAgICAtLXRleHQ6ICNmNWY1ZjU7XFxuICAgIC0tYmFja2dyb3VuZDogIzI3MjUyNTtcXG5cXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgYm94LXNoYWRvdzogMCAzcHggMjBweCByZ2JhKGJsYWNrLCAwLjIpO1xcbn1cXG5cXG4jaG9tZV9idG4ge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLUZpcnN0IHNlY3Rpb24tLS0tLS0tLS0tLSAqL1xcblxcbi5maXJzdC1zZWN0aW9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3NyYy9JbWFnZXMvbWFyZWsuanBnJyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcblxcbn1cXG5cXG4ubG9nbyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vc3JjL0ltYWdlcy9mdWxsTG9ja3VwLnN2Z1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLnRleHRfaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGZvbnQtc2l6ZTogOTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCB2aWJlcycsICdjdXJzaXZlJztcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi8qIC0tLS0tLS0tU2Vjb25kIGNvbnRlbnQtLS0tLS0tLS0gKi9cXG5cXG4uY29udGVudCB7XFxuICAgIC0tZm9udC1zaXplOiBjYWxjKC41ZW0gKyAuNXZ3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogNWVtIDJlbSA1ZW0gMmVtO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5jb250ZW50ID4gaDEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm93ZGllcycsICdjdXJzaXZlJztcXG59XFxuXFxuLmNvbnRlbnQgPiBoMTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAzZW07XFxuICAgIGJvdHRvbTogLS41ZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uY29udGVudCA+IHAge1xcbiAgICBmb250LWZhbWlseTogJ0RvbmdsZScsICdzYW5zLXNlcmlmJztcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5mYWRlX2luIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4uZmFkZV9pbi5hcHBlYXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS1UaGlyZCBTZWN0aW9uLS0tLS0tLS0tLS0gKi9cXG5cXG4udGhpcmQtc2VjdGlvbiB7XFxuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcblxcbi5mcm9tX2xlZnQge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3JjL0ltYWdlcy9tYXJrdXMuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG5cXG5cXG4uZnJvbV9yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxufVxcblxcbi5mcm9tX3JpZ2h0PnAge1xcbiAgICBmb250LWZhbWlseTogJ0RvbmdsZScsICdzYW5zLXNlcmlmJztcXG59XFxuXFxuXFxuLmZyb20tcmlnaHQge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3JjL0ltYWdlcy9wYXVsLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcbn1cXG5cXG5cXG4uZnJvbS1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcblxcbi5mcm9tLWxlZnQgPiBwIHtcXG4gICAgZm9udC1mYW1pbHk6ICdEb25nbGUnLCAnc2Fucy1zZXJpZic7XFxufVxcblxcbi5mcm9tX2xlZnQsXFxuLmZyb21fcmlnaHQge1xcbiAgICB0cmFuc2l0aW9uOlxcbiAgICAgICAgb3BhY2l0eSAyNTBtcyBlYXNlLWluLFxcbiAgICAgICAgdHJhbnNmb3JtIDQwMG1zIGVhc2UtaW47XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5mcm9tX2xlZnQuYXBwZWFyLFxcbi5mcm9tX3JpZ2h0LmFwcGVhciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmZyb20tbGVmdCxcXG4uZnJvbS1yaWdodCB7XFxuICAgIHRyYW5zaXRpb246XFxuICAgICAgICBvcGFjaXR5IDI1MG1zIGVhc2UtaW4sXFxuICAgICAgICB0cmFuc2Zvcm0gNDAwbXMgZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmZyb20tbGVmdC5hcHBlYXIsXFxuLmZyb20tcmlnaHQuYXBwZWFyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS1NZW51IGNvbnRlbnQtLS0tLS0tLS0gKi9cXG5cXG4uaGVhZF9jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA1ZW0gM2VtIDJlbSAzZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgdmliZXMnLCAnY3Vyc2l2ZSc7XFxufVxcblxcbi5jYXJkcyB7XFxuICAgIC0tZm9udC1zaXplOiBjYWxjKDFlbSArIC44dncpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBmb250LWZhbWlseTogJ0RvbmdsZScsICdzYW5zLXNlcmlmJztcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbn1cXG5cXG4ucmljZS1kaXNoIHAgc3BhbiB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5yaWNlLWRpc2ggcCBzcGFuICsgc3BhbiB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnJpY2UtZGlzaCB1bCBsaSBzcGFuIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uY2hpbGxpLW9ubHkge1xcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7IFxcbn1cXG5cXG4uc3BlY2lhbC1zYXQgdWwgbGkgc3BhbiB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmZyaWVzLW1lbnUgdWwgbGkgc3BhbiB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnNtYWxsLWNob3BzIHVsIGxpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5leHRyYSB1bCBsaSBzcGFuIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uYm9udXNfZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib251cyB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3JjL0ltYWdlcy9jaGVmLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIC8qIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgKi9cXG4gICAgcGFkZGluZzogMTBlbTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS1Db250YWN0LS0tLS0tLS0tLSAqL1xcblxcbiAuY29udGFjdCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMzIsIDMyLCA0MywgMC42MiksIHJnYmEoMTIsIDEwLCAxMSwgMC44MykpLCB1cmwoXFxcIi4uL3NyYy9JbWFnZXMvYWxleGFuZGVyLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gfVxcblxcbiAubG9nby1kaXYge1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IHZpYmVzJywnY3Vyc2l2ZSc7XFxuIH1cXG5cXG4vKiAtLS0tLS0tLS0tLU1lZGlhIFF1ZXJ5LS0tLS0tLS0tICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTUwcHgpIHtcXG4gICAgLm5hdi10b2dnbGUtbGFiZWwge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byBtaW5tYXgoNjAwcHgsIDNmcikgMWZyO1xcbiAgICB9XFxuXFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgICBhbGw6IHVuc2V0O1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDMgLyA1O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICBuYXYgbGkge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICBuYXYgbGk6OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgaGVpZ2h0OiAzcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIC8qIGJvdHRvbTogLS41ZW07ICovXFxuICAgICAgICAvKiB0b3A6IC0uNzVlbTsgKi9cXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XFxuICAgICAgICAvKiB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDsgKi9cXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAyNTBtcztcXG4gICAgfVxcblxcbiAgICBuYXYgbGk6aG92ZXI6OmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgICB9XFxuXFxuICAgIG5hdiB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIG5hdiBsaSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogM2VtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICAvKiAubG9nbyB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vc3JjL0ltYWdlcy9mdWxsTG9ja3VwLnN2Z1xcXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgfSAqL1xcblxcbiAgICAuc2Vjb25kLXNlY3Rpb24ge1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgICAgICAgcGFkZGluZzogNWVtIDhlbSAxMGVtIDhlbTtcXG4gICAgfVxcblxcbiAgICAvKiAuc2Vjb25kX2NvbnRlbnQgPiBoMTo6YWZ0ZXIge1xcbiAgICAgICAgbGVmdDogNTBweDtcXG4gICAgICAgIGJvdHRvbTogLTRweDtcXG4gICAgfSAqL1xcblxcbiAgICAudGhpcmQtc2VjdGlvbiB7XFxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmNGY0ZjQ7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgLyogY29sdW1uLWdhcDogMmVtOyAqL1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMWVtLCAxZnIpIHJlcGVhdCgyLCBtaW5tYXgoMjAwcHgsIDQwMHB4KSkgbWlubWF4KDFlbSwgMWZyKTtcXG4gICAgICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgKi9cXG4gICAgfVxcblxcbiAgICAuZnJvbV9sZWZ0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9zcmMvSW1hZ2VzL21hcmt1cy5qcGcnKTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogMTBlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgfVxcblxcbiAgICAuZnJvbV9yaWdodCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMyAvIDU7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxuICAgIH1cXG5cXG4gICAgLmZyb20tcmlnaHQge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDMgLyA1O1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3NyYy9JbWFnZXMvcGF1bC5qcGcnKTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogMTBlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcbiAgICB9XFxuXFxuICAgIC5mcm9tLWxlZnQge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgfVxcblxcbiAgICAuY29udGFjdCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICB9XFxuXFxuXFxuXFxufVxcblxcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTFweCkge1xcbiAgICAtLS0tLS0tLS1NZW51IGNvbnRlbnQtLS0tLS0tLS1cXG5cXG4gICAgLmNhcmQge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubWF4eWNhcmRfaW1hZ2Uge1xcbiAgICAgICAgcGFkZGluZzogNWVtO1xcbiAgICB9XFxuXFxuICAgIC5jb2RlZGNhcmRfaW1hZ2Uge1xcbiAgICAgICAgcGFkZGluZzogNWVtO1xcbiAgICB9XFxuXFxuICAgIC5jYXJkX3ByaWNlIHtcXG4gICAgICAgIG1hcmdpbjogMS4ycmVtIDAgMS4ycmVtIDA7XFxuICAgIH1cXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBmdWxsTG9ja3VwQ29sb3IgZnJvbSBcIi4uL0ltYWdlcy9mdWxsTG9ja3VwQ29sb3Iuc3ZnXCI7XG5pbXBvcnQgQWxleGFuZGVyIGZyb20gXCIuLi9JbWFnZXMvYWxleGFuZGVyLmpwZ1wiO1xuXG5jb25zdCBjb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBhbGV4YW5kZXIgPSBuZXcgSW1hZ2UoKTtcbiAgYWxleGFuZGVyLnNyYyA9IEFsZXhhbmRlcjtcblxuICBjb25zdCBmdWxsTG9ja3VwQyA9IG5ldyBJbWFnZSgpO1xuICBmdWxsTG9ja3VwQy5zcmMgPSBmdWxsTG9ja3VwQ29sb3I7XG5cbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxvY2t1cERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvY2t1cERpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL0ltYWdlcy9mdWxsTG9ja3VwQ29sb3Iuc3ZnXCIgYWx0PVwiXCI+XG4gICAgICAgIDxocj5cbiAgICAgICAgPGgxPkdyYWIgYSBCaXRlPC9oMT5cbiAgICBgO1xuICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvY2F0aW9uRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgzPkxvY2F0aW9uPC9oMz5cbiAgICAgICAgPGgyPiBBbWFzYW1hbiAtIEFiZWFzZSA8L2gyPlxuICAgICAgICA8aDU+RGVsaXZlcnkgJiBQaWNrIHVwIEF2YWlsYWJsZTwvaDU+XG4gICAgICAgIDxocj5cbiAgICAgICAgPGgyPjAyMDAxOTE0ODU8L2gyPlxuICAgICAgICA8aDI+MDU3Mzc2NzExNjwvaDI+XG4gICAgYDtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgbG9ja3VwRGl2LmNsYXNzTGlzdC5hZGQoXCJsb2dvLWRpdlwiKTtcblxuICBjb250YWN0LmFwcGVuZENoaWxkKGxvY2t1cERpdik7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xuXG4gIHJldHVybiBjb250YWN0O1xufTtcblxuY29uc3QgbG9hZENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50c1wiKTtcbiAgY29udGVudHMuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGVudHMuYXBwZW5kQ2hpbGQoY29udGFjdCgpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0O1xuIiwiaW1wb3J0IE1hcmVrIGZyb20gXCIuLi9JbWFnZXMvbWFyZWsuanBnXCI7XG5pbXBvcnQgTWFya3VzIGZyb20gXCIuLi9JbWFnZXMvbWFya3VzLmpwZ1wiO1xuaW1wb3J0IFBhdWwgZnJvbSBcIi4uL0ltYWdlcy9wYXVsLmpwZ1wiO1xuaW1wb3J0IEhvcCBmcm9tIFwiLi4vSW1hZ2VzL2hvcC5zdmdcIjtcbmltcG9ydCBTdGFuZCBmcm9tIFwiLi4vSW1hZ2VzL3N0YW5kLnN2Z1wiO1xuaW1wb3J0IGZhZGVpbkFuZE5hdkNoYW5nZSBmcm9tIFwiLi4vZmFkZWluQW5kTmF2Q2hhbmdlXCI7XG5cbmNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuXG4gIC8vICAgQ3JlYXRlcyBmaXJzdCBzZWN0aW9uIGVsZW1lbnRzIGFuZCBhcHBlbmRzIGludG8gdGhlIERvbVxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZmlyc3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGV4dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuICAvLyAgIEFkZHMgY2xhc3NsaXN0IHRvIGVsZW1lbnRzIGFuZCBhZGRzIGNvbnRlbnRzIHRvIHRoZSBlbGVtZW50cyBjcmVhdGVkXG4gIGZpcnN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZmlyc3Qtc2VjdGlvblwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgdGV4dEhlYWRlci50ZXh0Q29udGVudCA9IFwiV2VsY29tZSBUbyBCYW5ueWN1ZVwiO1xuICB0ZXh0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0X2hlYWRlclwiKTtcblxuICBmaXJzdFNlY3Rpb24uYXBwZW5kQ2hpbGQodGV4dEhlYWRlcik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoZmlyc3RTZWN0aW9uKTtcbiAgLy8gICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudHMpO1xuXG4gIC8vICAgQ3JlYXRpbmcgSW1hZ2VzXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IE1hcmVrO1xuXG4gIGNvbnN0IHBhdWwgPSBuZXcgSW1hZ2UoKTtcbiAgcGF1bC5zcmMgPSBQYXVsO1xuICBwYXVsLmNsYXNzTGlzdC5hZGQoXCJwYXVsX2ltZ1wiKTtcblxuICBjb25zdCBtYXJrdXMgPSBuZXcgSW1hZ2UoKTtcbiAgbWFya3VzLnNyYyA9IE1hcmt1cztcbiAgbWFya3VzLmNsYXNzTGlzdC5hZGQoXCJtYXJrdXNfaW1nXCIpO1xuXG4gIGNvbnN0IGhvcCA9IG5ldyBJbWFnZSgpO1xuICBob3Auc3JjID0gSG9wO1xuXG4gIGNvbnN0IHN0YW5kID0gbmV3IEltYWdlKCk7XG4gIHN0YW5kLnNyYyA9IFN0YW5kO1xuXG4gIC8vICAgQ3JlYXRlcyBzZWNvbmQgc2VjdGlvbiBlbGVtZW50cyBhbmQgYXBwZW5kcyBpbiB0aGUgRG9tXG4gIGNvbnN0IHNlY29uZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzZWNvbmRTZWN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2Vjb25kU2VjdGlvbkgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBzZWNvbmRTZWN0aW9uUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGNvbnN0IHRoaXJkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZyb21MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJvbVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJvbVJpZ2h0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBzdmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IHRoaXJkU2VjdGlvbkNsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJvbVJpZ2h0Q2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmcm9tTGVmdENsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJvbUxlZnRQYXJhQ2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgc3ZnRGl2Q2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vICBBZGRzIGNsYXNzbGlzdHMgdG8gdGhlIGVsZW1lbnRzXG4gIHNlY29uZFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlY29uZC1zZWN0aW9uXCIpO1xuICBzZWNvbmRTZWN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICBzZWNvbmRTZWN0aW9uUGFyYS5jbGFzc0xpc3QuYWRkKFwiZmFkZV9pblwiKTtcblxuICB0aGlyZFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRoaXJkLXNlY3Rpb25cIik7XG4gIGZyb21MZWZ0LmNsYXNzTGlzdC5hZGQoXCJmcm9tX2xlZnRcIik7XG4gIGZyb21MZWZ0LmNsYXNzTGlzdC5hZGQoXCJzbGlkZV9pblwiKTtcbiAgZnJvbVJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmcm9tX3JpZ2h0XCIpO1xuICBmcm9tUmlnaHQuY2xhc3NMaXN0LmFkZChcInNsaWRlX2luXCIpO1xuICBzdmdEaXYuY2xhc3NMaXN0LmFkZChcInN2Z1wiKTtcblxuICB0aGlyZFNlY3Rpb25DbG9uZS5jbGFzc0xpc3QuYWRkKFwidGhpcmQtc2VjdGlvblwiKTtcbiAgZnJvbVJpZ2h0Q2xvbmUuY2xhc3NMaXN0LmFkZChcImZyb20tcmlnaHRcIik7XG4gIGZyb21SaWdodENsb25lLmNsYXNzTGlzdC5hZGQoXCJzbGlkZV9pblwiKTtcbiAgZnJvbUxlZnRDbG9uZS5jbGFzc0xpc3QuYWRkKFwiZnJvbS1sZWZ0XCIpO1xuICBmcm9tTGVmdENsb25lLmNsYXNzTGlzdC5hZGQoXCJzbGlkZV9pblwiKTtcbiAgc3ZnRGl2Q2xvbmUuY2xhc3NMaXN0LmFkZChcInN2Z1wiKTtcblxuICAvLyAgIEFkZGluZyB0ZXh0IGNvbnRlbnQgdG8gdGhlIGVsZW1lbnRzIGFuZCBhcHBlbmRpbmcgdG8gdGhlIERvbVxuXG4gIHNlY29uZFNlY3Rpb25IMS50ZXh0Q29udGVudCA9IFwiUmFiYml0IDEwMVwiO1xuICBzZWNvbmRTZWN0aW9uUGFyYS50ZXh0Q29udGVudCA9XG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOYW0sIGl1c3RvISBJc3RlIGVycm9yIGF0IGlkIGV4cGxpY2FibyBjb25zZXF1YXR1ciBjdWxwYSB0b3RhbSBkb2xvciBvYmNhZWNhdGkgYWRpcGlzY2kgdm9sdXB0YXRlcy4gUXVpIGFsaXF1YW0sIGFjY3VzYW11cyBleHBsaWNhYm8gbm9zdHJ1bSBvcHRpbyByZXByZWhlbmRlcml0IHF1YXNpIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSZWljaWVuZGlzIHNpdCBpbXBlZGl0LCBkdWNpbXVzIGxpYmVybyBxdWlzcXVhbSBoaWMgaXVyZSBudWxsYSBuZXF1ZS4gSW52ZW50b3JlIHBsYWNlYXQgbmF0dXMgaW5jaWR1bnQgbWluaW1hIGl0YXF1ZSByZXBlbGxlbmR1cyBub3N0cnVtLCBjdXBpZGl0YXRlIHF1b3Mgc2VkIGZhY2VyZSEgTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1aSBhdHF1ZSBjb25zZXF1dW50dXIgcXVhcyBuYXR1cyBleCBleGNlcHR1cmkgY3VscGEgbnVtcXVhbSBtb2xlc3RpYXMgYWxpcXVhbSwgZGlzdGluY3RpbyB2ZWwgdmVuaWFtIHZlcml0YXRpcyBpcHNhbSByYXRpb25lIHF1aXNxdWFtIHF1aWJ1c2RhbS4gRGVzZXJ1bnQsIGRvbG9ydW0gYXV0LlwiO1xuICBmcm9tUmlnaHRQYXJhLnRleHRDb250ZW50ID1cbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE51bGxhIGVhcnVtIGZ1Z2l0IGVhIG1vbGVzdGlhZSBwZXJzcGljaWF0aXMsIHZvbHVwdGF0ZXMgZGVsZW5pdGkgbWFpb3Jlcywgc3VudCBhbGlxdWlkIHBlcmZlcmVuZGlzIGF0cXVlIG9mZmljaWEgZG9sb3JlLiBEb2xvcmVtIGluY2lkdW50IHRlbXBvcmEgdGVuZXR1ciBzaXQgaWQgbmFtISBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbmltaSwgbGFib3J1bSB0b3RhbSBxdWlidXNkYW0gcXVvcyB2ZXJvIHF1aWEgaW5jaWR1bnQuIElzdGUgaW52ZW50b3JlIGRlYml0aXMsIHBvc3NpbXVzLCBjb25zZWN0ZXR1ciBhcmNoaXRlY3RvIHF1aWEgbW9sZXN0aWFzIGVvcyBkb2xvciwgbW9sbGl0aWEgbnVsbGEgbmlzaS4gUGVyc3BpY2lhdGlzP1wiO1xuICBmcm9tTGVmdFBhcmFDbG9uZS50ZXh0Q29udGVudCA9XG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOdWxsYSBlYXJ1bSBmdWdpdCBlYSBtb2xlc3RpYWUgcGVyc3BpY2lhdGlzLCB2b2x1cHRhdGVzIGRlbGVuaXRpIG1haW9yZXMsIHN1bnQgYWxpcXVpZCBwZXJmZXJlbmRpcyBhdHF1ZSBvZmZpY2lhIGRvbG9yZS4gRG9sb3JlbSBpbmNpZHVudCB0ZW1wb3JhIHRlbmV0dXIgc2l0IGlkIG5hbSEgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQW5pbWksIGxhYm9ydW0gdG90YW0gcXVpYnVzZGFtIHF1b3MgdmVybyBxdWlhIGluY2lkdW50LiBJc3RlIGludmVudG9yZSBkZWJpdGlzLCBwb3NzaW11cywgY29uc2VjdGV0dXIgYXJjaGl0ZWN0byBxdWlhIG1vbGVzdGlhcyBlb3MgZG9sb3IsIG1vbGxpdGlhIG51bGxhIG5pc2kuIFBlcnNwaWNpYXRpcz9cIjtcblxuICBzZWNvbmRTZWN0aW9uRGl2LmFwcGVuZENoaWxkKHNlY29uZFNlY3Rpb25IMSk7XG4gIHNlY29uZFNlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoc2Vjb25kU2VjdGlvblBhcmEpO1xuXG4gIHN2Z0Rpdi5hcHBlbmRDaGlsZChzdGFuZCk7XG4gIGZyb21SaWdodC5hcHBlbmRDaGlsZChmcm9tUmlnaHRQYXJhKTtcbiAgZnJvbVJpZ2h0LmFwcGVuZENoaWxkKHN2Z0Rpdik7XG4gIHRoaXJkU2VjdGlvbi5hcHBlbmRDaGlsZChmcm9tTGVmdCk7XG4gIHRoaXJkU2VjdGlvbi5hcHBlbmRDaGlsZChmcm9tUmlnaHQpO1xuXG4gIHRoaXJkU2VjdGlvbkNsb25lLmFwcGVuZENoaWxkKGZyb21SaWdodENsb25lKTtcbiAgdGhpcmRTZWN0aW9uQ2xvbmUuYXBwZW5kQ2hpbGQoZnJvbUxlZnRDbG9uZSk7XG5cbiAgc3ZnRGl2Q2xvbmUuYXBwZW5kQ2hpbGQoaG9wKTtcbiAgZnJvbUxlZnRDbG9uZS5hcHBlbmRDaGlsZChmcm9tTGVmdFBhcmFDbG9uZSk7XG4gIGZyb21MZWZ0Q2xvbmUuYXBwZW5kQ2hpbGQoc3ZnRGl2Q2xvbmUpO1xuXG4gIHNlY29uZFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2Vjb25kU2VjdGlvbkRpdik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoc2Vjb25kU2VjdGlvbik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQodGhpcmRTZWN0aW9uKTtcbiAgaG9tZS5hcHBlbmRDaGlsZCh0aGlyZFNlY3Rpb25DbG9uZSk7XG5cbiAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRzKTtcblxuICByZXR1cm4gaG9tZTtcbn07XG5cbi8vIFRoZSBsb2FkSG9tZSBmdW5jdGlvbiBjbGVhcnMgc29tZSBjb250ZW50cyBpbiB0aGUgRG9tIGFuZCBhcHBlbmRzIGhvbWUgdG8gRG9tXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgY29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRzXCIpO1xuICBjb250ZW50cy50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGNvbnRlbnRzLmFwcGVuZENoaWxkKGhvbWUoKSk7XG4gIGZhZGVpbkFuZE5hdkNoYW5nZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcbiIsImltcG9ydCBNYXJrdXMgZnJvbSBcIi4uL0ltYWdlcy9tYXJrdXMuanBnXCI7XG5pbXBvcnQgUGF1bCBmcm9tIFwiLi4vSW1hZ2VzL3BhdWwuanBnXCI7XG5pbXBvcnQgQ2hlZiBmcm9tIFwiLi4vSW1hZ2VzL2NoZWYuc3ZnXCI7XG5pbXBvcnQgQmFubnljdWVDb2xvciBmcm9tIFwiLi4vSW1hZ2VzL0Jhbm55Y3VlQ29sb3Iuc3ZnXCI7XG5pbXBvcnQgRGVzaWduIGZyb20gXCIuLi9JbWFnZXMvZGVzaWduLnN2Z1wiO1xuaW1wb3J0IGZhZGVpbkFuZE5hdkNoYW5nZSBmcm9tIFwiLi4vZmFkZWluQW5kTmF2Q2hhbmdlXCI7XG5cbmNvbnN0IG1lbnVQYWdlID0gKCkgPT4ge1xuICAvLyBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZmlyc3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGV4dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRleHRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYm9udXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBib251c0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCByaWNlRGlzaE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IG1lbnVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHJpY2VEaXNoVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgY29uc3QgZmlyc3RSaWNlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHNlY29uZFJpY2VMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgdGhpcmRSaWNlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGZvdXJ0aFJpY2VMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgZmlmdGhSaWNlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHNpeHRoUmljZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCByaWNlTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblxuICBjb25zdCBzcGVjaWFsU2F0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNhdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBzcGVjaWFsU2F0VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGZpcnN0U2F0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHNlY29uZFNhdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0aGlyZFNhdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBmb3VydGhTYXRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3Qgc3BlY0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cbiAgY29uc3QgZnJpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmcmllc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmcmllc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBmcmllc1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBmaXJzdEZyaWVzTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHNlY29uZEZyaWVzTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgY29uc3Qgc21hbGxDaG9wc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzbWFsbENob3BUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3Qgc21hbGxDaG9wc1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBmaXJzdENob3BzTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHNlY29uZENob3BzTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGZyaWVzTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblxuICBjb25zdCBleHRyYU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBleHRyYVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBleHRyYVVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBmaXJzdEV4dHJhTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHNlY29uZEV4dHJhTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRoaXJkRXh0cmFMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgZm91cnRoRXhyYUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIHJpY2VEaXNoTWVudS5jbGFzc0xpc3QuYWRkKFwicmljZS1kaXNoXCIpO1xuICBzcGVjaWFsU2F0TWVudS5jbGFzc0xpc3QuYWRkKFwic3BlY2lhbC1zYXRcIik7XG4gIGZyaWVzLmNsYXNzTGlzdC5hZGQoXCJmcmllc1wiKTtcbiAgZnJpZXNNZW51LmNsYXNzTGlzdC5hZGQoXCJmcmllcy1tZW51XCIpO1xuICBzbWFsbENob3BzTWVudS5jbGFzc0xpc3QuYWRkKFwic21hbGwtY2hvcHNcIik7XG4gIGV4dHJhTWVudS5jbGFzc0xpc3QuYWRkKFwiZXh0cmFcIik7XG5cbiAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJSSUNFIERJU0hFU1wiO1xuICBzYXRUaXRsZS50ZXh0Q29udGVudCA9IFwiU1BFQ0lBTCBTQVRVUkRBWVwiO1xuICBmcmllc1RpdGxlLnRleHRDb250ZW50ID0gXCJGUklFU1wiO1xuICBzbWFsbENob3BUaXRsZS50ZXh0Q29udGVudCA9IFwiU01BTEwgQ0hPUFNcIjtcbiAgZXh0cmFUaXRsZS50ZXh0Q29udGVudCA9IFwiRVhUUkFcIjtcblxuICBtZW51UGFyYS5pbm5lckhUTUwgPSBgU2VydmVkIHdpdGggPHNwYW4+Y2hpbGxpPC9zcGFuPiBhbmQgPHNwYW4+dG9hc3QgdmVnPC9zcGFuPiBhbmQgZ3JpbGxlZCBwcm90ZWluYDtcbiAgZmlyc3RSaWNlTGkuaW5uZXJIVE1MID0gXCJDb2NvbnV0IGZyaWVkIHJpY2VcIjtcbiAgc2Vjb25kUmljZUxpLmlubmVySFRNTCA9IFwiVmVnZXRhYmxlIHJpY2VcIjtcbiAgdGhpcmRSaWNlTGkuaW5uZXJIVE1MID0gXCJQbGFpbiByaWNlXCI7XG4gIGZvdXJ0aFJpY2VMaS5pbm5lckhUTUwgPSBgPHNwYW4+R0hTIDE1LjAwPC9zcGFuPi1wYWNrIG9mIHJpY2UgZGlzaGVzIG9wdGlvbnMgc2VydmVkIHdpdGggPHNwYW4+Z3JpbGxlZCBjaGlja2VuPC9zcGFuPiBhbmQgPHNwYW4gY2xhc3M9XCJjaGlsbGktb25seVwiPmNoaWxsaSBvbmx5PC9zcGFuPiBpcyBhdmFpbGFibGVgO1xuICBmaWZ0aFJpY2VMaS5pbm5lckhUTUwgPSBgPHNwYW4+R0hTIDMwLjAwPC9zcGFuPi1Bc3NvcnRlZCBmcmllZCByaWNlYDtcbiAgc2l4dGhSaWNlTGkuaW5uZXJIVE1MID0gYDxzcGFuPkdIUyAzNS4wMDwvc3Bhbj4tQXNzb3J0ZWQgZnJpZWQgcmljZSB3aXRoIHRvYXN0IHZlZ2A7XG5cbiAgZmlyc3RTYXRMaS5pbm5lckhUTUwgPSBgPHNwYW4+R0hTIDIwLjAwPC9zcGFuPi1HcmlsbGVkIHRpbGFwaWEgJiBCYW5rdWA7XG4gIHNlY29uZFNhdExpLmlubmVySFRNTCA9IGA8c3Bhbj5HSFMgMjUwLjAwPC9zcGFuPi1GYW1pbHkgc2l6ZSBwYWNrYWdlIChmdWxsIGdyaWxsZWQgcmFiYml0ICsgZnJpZWQgcmljZSArIHRvYXN0IHZlZylgO1xuICB0aGlyZFNhdExpLmlubmVySFRNTCA9IGA8c3Bhbj5HSFMgMTUwLjAwPC9zcGFuPi1GdWxsIGdyaWxsZWQgcmFiYml0IGA7XG4gIGZvdXJ0aFNhdExpLmlubmVySFRNTCA9IGA8c3Bhbj5HSFMgOTAuMDA8L3NwYW4+LUhhbGYgZ3JpbGxlZCByYWJiaXQgYDtcblxuICBmaXJzdEZyaWVzTGkuaW5uZXJIVE1MID0gYDxzcGFuPkdIUyAzMC4wMDwvc3Bhbj4tR3JpbGxlZCByYWJiaXQgYW5kIHlhbSBjaGlwcyBgO1xuICBzZWNvbmRGcmllc0xpLmlubmVySFRNTCA9IGA8c3Bhbj5HSFMgMjAuMDA8L3NwYW4+LUdyaWxsZWQgY2hpY2tlbiBhbmQgeWFtIGNoaXBzYDtcbiAgZmlyc3RDaG9wc0xpLmlubmVySFRNTCA9IGA8c3Bhbj5HSFMgMTAuMDA8L3NwYW4+LVJhYmJpdCBLZWJhYmA7XG4gIHNlY29uZENob3BzTGkuaW5uZXJIVE1MID0gYDxzcGFuPkdIUyAxMC4wMDwvc3Bhbj4tQ2hpY2tlbiBLZWJhYmA7XG5cbiAgZmlyc3RFeHRyYUxpLmlubmVySFRNTCA9IGA8c3Bhbj5HSFMgMjAuMDA8L3NwYW4+LUdyaWxsZWQgcmFiYml0YDtcbiAgc2Vjb25kRXh0cmFMaS5pbm5lckhUTUwgPSBgPHNwYW4+R0hTIDEwLjAwPC9zcGFuPi1HcmlsbGVkIGNoaWNrZW5gO1xuICB0aGlyZEV4dHJhTGkuaW5uZXJIVE1MID0gYDxzcGFuPkdIUyA1LjAwPC9zcGFuPi1Ub2FzdCBWZWdgO1xuICBmb3VydGhFeHJhTGkuaW5uZXJIVE1MID0gYDxzcGFuPkdIUyAxMi4wMDwvc3Bhbj4tR3JpbGxlZCBUaWxhcGlhYDtcblxuICByaWNlRGlzaFVsLmFwcGVuZENoaWxkKGZpcnN0UmljZUxpKTtcbiAgcmljZURpc2hVbC5hcHBlbmRDaGlsZChzZWNvbmRSaWNlTGkpO1xuICByaWNlRGlzaFVsLmFwcGVuZENoaWxkKHRoaXJkUmljZUxpKTtcbiAgcmljZURpc2hVbC5hcHBlbmRDaGlsZChmb3VydGhSaWNlTGkpO1xuICByaWNlRGlzaFVsLmFwcGVuZENoaWxkKGZpZnRoUmljZUxpKTtcbiAgcmljZURpc2hVbC5hcHBlbmRDaGlsZChzaXh0aFJpY2VMaSk7XG5cbiAgc3BlY2lhbFNhdE1lbnUuYXBwZW5kQ2hpbGQoc2F0VGl0bGUpO1xuICBzcGVjaWFsU2F0VWwuYXBwZW5kQ2hpbGQoZmlyc3RTYXRMaSk7XG4gIHNwZWNpYWxTYXRVbC5hcHBlbmRDaGlsZChzZWNvbmRTYXRMaSk7XG4gIHNwZWNpYWxTYXRVbC5hcHBlbmRDaGlsZCh0aGlyZFNhdExpKTtcbiAgc3BlY2lhbFNhdFVsLmFwcGVuZENoaWxkKGZvdXJ0aFNhdExpKTtcblxuICBmcmllc1VsLmFwcGVuZENoaWxkKGZpcnN0RnJpZXNMaSk7XG4gIGZyaWVzVWwuYXBwZW5kQ2hpbGQoc2Vjb25kRnJpZXNMaSk7XG4gIGZyaWVzTWVudS5hcHBlbmRDaGlsZChmcmllc1RpdGxlKTtcbiAgZnJpZXNNZW51LmFwcGVuZENoaWxkKGZyaWVzVWwpO1xuXG4gIHNtYWxsQ2hvcHNVbC5hcHBlbmRDaGlsZChmaXJzdENob3BzTGkpO1xuICBzbWFsbENob3BzVWwuYXBwZW5kQ2hpbGQoc2Vjb25kQ2hvcHNMaSk7XG4gIHNtYWxsQ2hvcHNNZW51LmFwcGVuZENoaWxkKHNtYWxsQ2hvcFRpdGxlKTtcbiAgc21hbGxDaG9wc01lbnUuYXBwZW5kQ2hpbGQoc21hbGxDaG9wc1VsKTtcblxuICBleHRyYU1lbnUuYXBwZW5kQ2hpbGQoZXh0cmFUaXRsZSk7XG4gIGV4dHJhVWwuYXBwZW5kQ2hpbGQoZmlyc3RFeHRyYUxpKTtcbiAgZXh0cmFVbC5hcHBlbmRDaGlsZChzZWNvbmRFeHRyYUxpKTtcbiAgZXh0cmFVbC5hcHBlbmRDaGlsZCh0aGlyZEV4dHJhTGkpO1xuICBleHRyYVVsLmFwcGVuZENoaWxkKGZvdXJ0aEV4cmFMaSk7XG5cbiAgcmljZURpc2hNZW51LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG4gIHJpY2VEaXNoTWVudS5hcHBlbmRDaGlsZChtZW51UGFyYSk7XG4gIHJpY2VEaXNoTWVudS5hcHBlbmRDaGlsZChyaWNlRGlzaFVsKTtcbiAgcmljZURpc2hNZW51LmFwcGVuZENoaWxkKHJpY2VMaW5lKTtcbiAgc3BlY2lhbFNhdE1lbnUuYXBwZW5kQ2hpbGQoc3BlY2lhbFNhdFVsKTtcbiAgc3BlY2lhbFNhdE1lbnUuYXBwZW5kQ2hpbGQoc3BlY0xpbmUpO1xuICBmcmllcy5hcHBlbmRDaGlsZChmcmllc01lbnUpO1xuICBmcmllcy5hcHBlbmRDaGlsZChzbWFsbENob3BzTWVudSk7XG4gIGZyaWVzLmFwcGVuZENoaWxkKGZyaWVzTGluZSk7XG4gIGV4dHJhTWVudS5hcHBlbmRDaGlsZChleHRyYVVsKTtcblxuICAvLyByaWNlRGlzaE1lbnUuYXBwZW5kQ2hpbGQocmljZURpc2hNZW51KTtcblxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICBmaXJzdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImZpcnN0LXNlY3Rpb25cIik7XG4gIHRleHRIZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgdGV4dEhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGV4dF9oZWFkZXJcIik7XG4gIG1lbnVEaXYuY2xhc3NMaXN0LmFkZChcImhlYWRfY29udGFpbmVyXCIpO1xuICBjYXJkcy5jbGFzc0xpc3QuYWRkKFwiY2FyZHNcIik7XG5cbiAgYm9udXNEaXYuY2xhc3NMaXN0LmFkZChcImJvbnVzX2RpdlwiKTtcbiAgYm9udXNJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYm9udXNcIik7XG5cbiAgY29uc3QgY2hlZiA9IG5ldyBJbWFnZSgpO1xuICBjaGVmLnNyYyA9IENoZWY7XG5cbiAgY29uc3QgYmFubnljdWVMb2dvID0gbmV3IEltYWdlKCk7XG4gIGJhbm55Y3VlTG9nby5zcmMgPSBCYW5ueWN1ZUNvbG9yO1xuICBiYW5ueWN1ZUxvZ28uY2xhc3NMaXN0LmFkZChcImJhbm55LWxvZ29cIik7XG5cbiAgY29uc3QgZGVzaWduID0gbmV3IEltYWdlKCk7XG4gIGRlc2lnbi5zcmMgPSBEZXNpZ247XG4gIGRlc2lnbi5jbGFzc0xpc3QuYWRkKFwiZGVzaWduXCIpO1xuXG4gIGNvbnN0IHBhdWwgPSBuZXcgSW1hZ2UoKTtcbiAgcGF1bC5zcmMgPSBQYXVsO1xuICBwYXVsLmNsYXNzTGlzdC5hZGQoXCJwYXVsX2ltZ1wiKTtcblxuICBjb25zdCBtYXJrdXMgPSBuZXcgSW1hZ2UoKTtcbiAgbWFya3VzLnNyYyA9IE1hcmt1cztcbiAgbWFya3VzLmNsYXNzTGlzdC5hZGQoXCJtYXJrdXNfaW1nXCIpO1xuXG4gIC8vIGNvbnN0IHJpY2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAvLyByaWNlSW1nLmNsYXNzTGlzdC5hZGQoXCJyaWNlLWltZ1wiKTtcbiAgLy8gcmljZUltZy5hcHBlbmRDaGlsZChwYXVsKTtcbiAgLy8gcmljZURpc2hNZW51LmFwcGVuZENoaWxkKHJpY2VJbWcpO1xuXG4gIGZpcnN0U2VjdGlvbi5hcHBlbmRDaGlsZCh0ZXh0SGVhZGVyKTtcbiAgdGV4dFRpdGxlLmFwcGVuZENoaWxkKGJhbm55Y3VlTG9nbyk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQodGV4dFRpdGxlKTtcbiAgYm9udXNEaXYuYXBwZW5kQ2hpbGQoYm9udXNJbWFnZSk7XG5cbiAgY2FyZHMuYXBwZW5kQ2hpbGQocmljZURpc2hNZW51KTtcbiAgY2FyZHMuYXBwZW5kQ2hpbGQoc3BlY2lhbFNhdE1lbnUpO1xuICBjYXJkcy5hcHBlbmRDaGlsZChmcmllcyk7XG4gIGNhcmRzLmFwcGVuZENoaWxkKGV4dHJhTWVudSk7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChmaXJzdFNlY3Rpb24pO1xuICBtZW51LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuICBtZW51LmFwcGVuZENoaWxkKGNhcmRzKTtcbiAgbWVudS5hcHBlbmRDaGlsZChib251c0Rpdik7XG5cbiAgcmV0dXJuIG1lbnU7XG59O1xuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgY29uc3QgY29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRzXCIpO1xuICBjb250ZW50cy50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1lbnVQYWdlKCkpO1xuICBmYWRlaW5BbmROYXZDaGFuZ2UoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL01lbnVcIjtcbmltcG9ydCBmdWxsTG9ja3VwIGZyb20gXCIuLi9JbWFnZXMvZnVsbExvY2t1cC5zdmdcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9Db250YWN0XCI7XG5cbmNvbnN0IGNyZWF0ZU5hdmJhciA9ICgpID0+IHtcbiAgLy8gY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgZnVsbExvY2t1cEIgPSBuZXcgSW1hZ2UoKTtcbiAgZnVsbExvY2t1cEIuc3JjID0gZnVsbExvY2t1cDtcblxuICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGhlYWRlck5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IGhlYWRlclVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBoZWFkZXJIb21lTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGhlYWRlck1lbnVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgaGVhZGVyQWJvdXRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgaGVhZGVyQ29udGFjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBoZWFkZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgaGVhZGVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gIC8vIGhlYWRlckgxLnRleHRDb250ZW50ID0gXCJCYW5ueWN1ZVwiO1xuICBoZWFkZXJJbnB1dC5jbGFzc0xpc3QuYWRkKFwibmF2LXRvZ2dsZVwiKTtcbiAgaGVhZGVySW5wdXQuaWQgPSBcIm5hdi10b2dnbGVcIjtcbiAgaGVhZGVySW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuICBoZWFkZXJIb21lTGkuaWQgPSBcImhvbWVfYnRuXCI7XG4gIGhlYWRlckhvbWVMaS50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICBoZWFkZXJIb21lTGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkSG9tZSgpO1xuICB9KTtcblxuICBoZWFkZXJNZW51TGkuaWQgPSBcIm1lbnVfYnRuXCI7XG4gIGhlYWRlck1lbnVMaS50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuICBoZWFkZXJNZW51TGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkTWVudSgpO1xuICB9KTtcblxuICBoZWFkZXJBYm91dExpLmlkID0gXCJhYm91dF9idG5cIjtcbiAgaGVhZGVyQWJvdXRMaS50ZXh0Q29udGVudCA9IFwiQUJPVVQgVVNcIjtcblxuICBoZWFkZXJDb250YWN0TGkuaWQgPSBcImNvbnRhY3RfYnRuXCI7XG4gIGhlYWRlckNvbnRhY3RMaS50ZXh0Q29udGVudCA9IFwiQ09OVEFDVCBVU1wiO1xuICBoZWFkZXJDb250YWN0TGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkQ29udGFjdCgpO1xuICB9KTtcblxuICBoZWFkZXJMYWJlbC5jbGFzc0xpc3QuYWRkKFwibmF2LXRvZ2dsZS1sYWJlbFwiKTtcbiAgaGVhZGVyTGFiZWwuaHRtbEZvciA9IFwibmF2LXRvZ2dsZVwiO1xuXG4gIGhlYWRlclVsLmFwcGVuZENoaWxkKGhlYWRlckhvbWVMaSk7XG4gIGhlYWRlclVsLmFwcGVuZENoaWxkKGhlYWRlck1lbnVMaSk7XG4gIGhlYWRlclVsLmFwcGVuZENoaWxkKGhlYWRlckFib3V0TGkpO1xuICBoZWFkZXJVbC5hcHBlbmRDaGlsZChoZWFkZXJDb250YWN0TGkpO1xuICBoZWFkZXJOYXYuYXBwZW5kQ2hpbGQoaGVhZGVyVWwpO1xuXG4gIGhlYWRlckxhYmVsLmFwcGVuZENoaWxkKGhlYWRlclNwYW4pO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcklucHV0KTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlck5hdik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMYWJlbCk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbiAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXZiYXI7XG4iLCJjb25zdCBmYWRlaW5BbmROYXZDaGFuZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGZhZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFkZV9pblwiKTtcbiAgY29uc3Qgc2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVfaW5cIik7XG5cbiAgY29uc3QgYXBwZWFyT3B0aW9ucyA9IHtcbiAgICB0aHJlc2hvbGQ6IDAsXG4gICAgcm9vdE1hcmdpbjogXCIwcHggMHB4IC0yMDBweCAwcHhcIixcbiAgfTtcblxuICBjb25zdCBhcHBlYXJPblNjcm9sbCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbiAoXG4gICAgZW50cmllcyxcbiAgICBhcHBlYXJPblNjcm9sbFxuICApIHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xuICAgICAgICBhcHBlYXJPblNjcm9sbC51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgYXBwZWFyT3B0aW9ucyk7XG5cbiAgZmFkZXJzLmZvckVhY2goKGZhZGVyKSA9PiB7XG4gICAgYXBwZWFyT25TY3JvbGwub2JzZXJ2ZShmYWRlcik7XG4gIH0pO1xuXG4gIHNsaWRlcnMuZm9yRWFjaCgoc2xpZGVyKSA9PiB7XG4gICAgYXBwZWFyT25TY3JvbGwub2JzZXJ2ZShzbGlkZXIpO1xuICB9KTtcblxuICAvLyBOYXZCYXIgQ2hhbmdlXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gIC8vICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nb1wiKTtcbiAgY29uc3Qgc2VjdGlvbk9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlyc3Qtc2VjdGlvblwiKTtcblxuICBjb25zdCBzZWN0aW9uT25lT3B0aW9ucyA9IHtcbiAgICByb290TWFyZ2luOiBcIi0yMDBweCAwcHggMHB4IDBweFwiLFxuICB9O1xuXG4gIGNvbnN0IHNlY3Rpb25PbmVPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbiAoXG4gICAgZW50cmllcyxcbiAgICBzZWN0aW9uT25lT2JzZXJ2ZXJcbiAgKSB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1zY3JvbGxlZFwiKTtcbiAgICAgICAgLy8gbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nby1zY3JvbGxlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXNjcm9sbGVkXCIpO1xuICAgICAgICAvLyBsb2dvLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2dvLXNjcm9sbGVkXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBzZWN0aW9uT25lT3B0aW9ucyk7XG5cbiAgc2VjdGlvbk9uZU9ic2VydmVyLm9ic2VydmUoc2VjdGlvbk9uZSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZmFkZWluQW5kTmF2Q2hhbmdlO1xuIiwiaW1wb3J0IE1hcmVrIGZyb20gXCIuL0ltYWdlcy9tYXJlay5qcGdcIjtcbmltcG9ydCBNYXJrdXMgZnJvbSBcIi4vSW1hZ2VzL21hcmt1cy5qcGdcIjtcbmltcG9ydCBQYXVsIGZyb20gXCIuL0ltYWdlcy9wYXVsLmpwZ1wiO1xuaW1wb3J0IEhvcCBmcm9tIFwiLi9JbWFnZXMvaG9wLnN2Z1wiO1xuaW1wb3J0IFN0YW5kIGZyb20gXCIuL0ltYWdlcy9zdGFuZC5zdmdcIjtcblxuY29uc3QgbWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICBjb25zdCBjb250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZpcnN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgZmlyc3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJmaXJzdC1zZWN0aW9uXCIpO1xuICBjb250ZW50cy5jbGFzc0xpc3QuYWRkKFwiY29udGVudHNcIik7XG4gIHRleHRIZWFkZXIudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgVG8gQmFubnljdWVcIjtcbiAgdGV4dEhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGV4dF9oZWFkZXJcIik7XG5cbiAgZmlyc3RTZWN0aW9uLmFwcGVuZENoaWxkKHRleHRIZWFkZXIpO1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChmaXJzdFNlY3Rpb24pO1xuICAvLyBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudHMpO1xuXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IE1hcmVrO1xuXG4gIGNvbnN0IHBhdWwgPSBuZXcgSW1hZ2UoKTtcbiAgcGF1bC5zcmMgPSBQYXVsO1xuICBwYXVsLmNsYXNzTGlzdC5hZGQoXCJwYXVsX2ltZ1wiKTtcblxuICBjb25zdCBtYXJrdXMgPSBuZXcgSW1hZ2UoKTtcbiAgbWFya3VzLnNyYyA9IE1hcmt1cztcbiAgbWFya3VzLmNsYXNzTGlzdC5hZGQoXCJtYXJrdXNfaW1nXCIpO1xuXG4gIGNvbnN0IGhvcCA9IG5ldyBJbWFnZSgpO1xuICBob3Auc3JjID0gSG9wO1xuXG4gIGNvbnN0IHN0YW5kID0gbmV3IEltYWdlKCk7XG4gIHN0YW5kLnNyYyA9IFN0YW5kO1xuXG4gIGNvbnN0IHNlY29uZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzZWNvbmRTZWN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2Vjb25kU2VjdGlvbkgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBzZWNvbmRTZWN0aW9uUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGNvbnN0IHRoaXJkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZyb21MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJvbVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJvbVJpZ2h0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBzdmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IHRoaXJkU2VjdGlvbkNsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJvbVJpZ2h0Q2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmcm9tTGVmdENsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJvbUxlZnRQYXJhQ2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgc3ZnRGl2Q2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHNlY29uZFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlY29uZC1zZWN0aW9uXCIpO1xuICBzZWNvbmRTZWN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICBzZWNvbmRTZWN0aW9uUGFyYS5jbGFzc0xpc3QuYWRkKFwiZmFkZV9pblwiKTtcblxuICB0aGlyZFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRoaXJkLXNlY3Rpb25cIik7XG4gIGZyb21MZWZ0LmNsYXNzTGlzdC5hZGQoXCJmcm9tX2xlZnRcIik7XG4gIGZyb21MZWZ0LmNsYXNzTGlzdC5hZGQoXCJzbGlkZV9pblwiKTtcbiAgZnJvbVJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmcm9tX3JpZ2h0XCIpO1xuICBmcm9tUmlnaHQuY2xhc3NMaXN0LmFkZChcInNsaWRlX2luXCIpO1xuICBzdmdEaXYuY2xhc3NMaXN0LmFkZChcInN2Z1wiKTtcblxuICB0aGlyZFNlY3Rpb25DbG9uZS5jbGFzc0xpc3QuYWRkKFwidGhpcmQtc2VjdGlvblwiKTtcbiAgZnJvbVJpZ2h0Q2xvbmUuY2xhc3NMaXN0LmFkZChcImZyb20tcmlnaHRcIik7XG4gIGZyb21SaWdodENsb25lLmNsYXNzTGlzdC5hZGQoXCJzbGlkZV9pblwiKTtcbiAgZnJvbUxlZnRDbG9uZS5jbGFzc0xpc3QuYWRkKFwiZnJvbS1sZWZ0XCIpO1xuICBmcm9tTGVmdENsb25lLmNsYXNzTGlzdC5hZGQoXCJzbGlkZV9pblwiKTtcbiAgc3ZnRGl2Q2xvbmUuY2xhc3NMaXN0LmFkZChcInN2Z1wiKTtcblxuICBzZWNvbmRTZWN0aW9uSDEudGV4dENvbnRlbnQgPSBcIlJhYmJpdCAxMDFcIjtcbiAgc2Vjb25kU2VjdGlvblBhcmEudGV4dENvbnRlbnQgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmFtLCBpdXN0byEgSXN0ZSBlcnJvciBhdCBpZCBleHBsaWNhYm8gY29uc2VxdWF0dXIgY3VscGEgdG90YW0gZG9sb3Igb2JjYWVjYXRpIGFkaXBpc2NpIHZvbHVwdGF0ZXMuIFF1aSBhbGlxdWFtLCBhY2N1c2FtdXMgZXhwbGljYWJvIG5vc3RydW0gb3B0aW8gcmVwcmVoZW5kZXJpdCBxdWFzaSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmVpY2llbmRpcyBzaXQgaW1wZWRpdCwgZHVjaW11cyBsaWJlcm8gcXVpc3F1YW0gaGljIGl1cmUgbnVsbGEgbmVxdWUuIEludmVudG9yZSBwbGFjZWF0IG5hdHVzIGluY2lkdW50IG1pbmltYSBpdGFxdWUgcmVwZWxsZW5kdXMgbm9zdHJ1bSwgY3VwaWRpdGF0ZSBxdW9zIHNlZCBmYWNlcmUhIExvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWkgYXRxdWUgY29uc2VxdXVudHVyIHF1YXMgbmF0dXMgZXggZXhjZXB0dXJpIGN1bHBhIG51bXF1YW0gbW9sZXN0aWFzIGFsaXF1YW0sIGRpc3RpbmN0aW8gdmVsIHZlbmlhbSB2ZXJpdGF0aXMgaXBzYW0gcmF0aW9uZSBxdWlzcXVhbSBxdWlidXNkYW0uIERlc2VydW50LCBkb2xvcnVtIGF1dC5cIjtcbiAgZnJvbVJpZ2h0UGFyYS50ZXh0Q29udGVudCA9XG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOdWxsYSBlYXJ1bSBmdWdpdCBlYSBtb2xlc3RpYWUgcGVyc3BpY2lhdGlzLCB2b2x1cHRhdGVzIGRlbGVuaXRpIG1haW9yZXMsIHN1bnQgYWxpcXVpZCBwZXJmZXJlbmRpcyBhdHF1ZSBvZmZpY2lhIGRvbG9yZS4gRG9sb3JlbSBpbmNpZHVudCB0ZW1wb3JhIHRlbmV0dXIgc2l0IGlkIG5hbSEgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQW5pbWksIGxhYm9ydW0gdG90YW0gcXVpYnVzZGFtIHF1b3MgdmVybyBxdWlhIGluY2lkdW50LiBJc3RlIGludmVudG9yZSBkZWJpdGlzLCBwb3NzaW11cywgY29uc2VjdGV0dXIgYXJjaGl0ZWN0byBxdWlhIG1vbGVzdGlhcyBlb3MgZG9sb3IsIG1vbGxpdGlhIG51bGxhIG5pc2kuIFBlcnNwaWNpYXRpcz9cIjtcbiAgZnJvbUxlZnRQYXJhQ2xvbmUudGV4dENvbnRlbnQgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTnVsbGEgZWFydW0gZnVnaXQgZWEgbW9sZXN0aWFlIHBlcnNwaWNpYXRpcywgdm9sdXB0YXRlcyBkZWxlbml0aSBtYWlvcmVzLCBzdW50IGFsaXF1aWQgcGVyZmVyZW5kaXMgYXRxdWUgb2ZmaWNpYSBkb2xvcmUuIERvbG9yZW0gaW5jaWR1bnQgdGVtcG9yYSB0ZW5ldHVyIHNpdCBpZCBuYW0hIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFuaW1pLCBsYWJvcnVtIHRvdGFtIHF1aWJ1c2RhbSBxdW9zIHZlcm8gcXVpYSBpbmNpZHVudC4gSXN0ZSBpbnZlbnRvcmUgZGViaXRpcywgcG9zc2ltdXMsIGNvbnNlY3RldHVyIGFyY2hpdGVjdG8gcXVpYSBtb2xlc3RpYXMgZW9zIGRvbG9yLCBtb2xsaXRpYSBudWxsYSBuaXNpLiBQZXJzcGljaWF0aXM/XCI7XG5cbiAgc2Vjb25kU2VjdGlvbkRpdi5hcHBlbmRDaGlsZChzZWNvbmRTZWN0aW9uSDEpO1xuICBzZWNvbmRTZWN0aW9uRGl2LmFwcGVuZENoaWxkKHNlY29uZFNlY3Rpb25QYXJhKTtcblxuICBzdmdEaXYuYXBwZW5kQ2hpbGQoc3RhbmQpO1xuICBmcm9tUmlnaHQuYXBwZW5kQ2hpbGQoZnJvbVJpZ2h0UGFyYSk7XG4gIGZyb21SaWdodC5hcHBlbmRDaGlsZChzdmdEaXYpO1xuICB0aGlyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoZnJvbUxlZnQpO1xuICB0aGlyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoZnJvbVJpZ2h0KTtcblxuICB0aGlyZFNlY3Rpb25DbG9uZS5hcHBlbmRDaGlsZChmcm9tUmlnaHRDbG9uZSk7XG4gIHRoaXJkU2VjdGlvbkNsb25lLmFwcGVuZENoaWxkKGZyb21MZWZ0Q2xvbmUpO1xuXG4gIHN2Z0RpdkNsb25lLmFwcGVuZENoaWxkKGhvcCk7XG4gIGZyb21MZWZ0Q2xvbmUuYXBwZW5kQ2hpbGQoZnJvbUxlZnRQYXJhQ2xvbmUpO1xuICBmcm9tTGVmdENsb25lLmFwcGVuZENoaWxkKHN2Z0RpdkNsb25lKTtcblxuICBzZWNvbmRTZWN0aW9uLmFwcGVuZENoaWxkKHNlY29uZFNlY3Rpb25EaXYpO1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChzZWNvbmRTZWN0aW9uKTtcbiAgY29udGVudHMuYXBwZW5kQ2hpbGQodGhpcmRTZWN0aW9uKTtcbiAgY29udGVudHMuYXBwZW5kQ2hpbGQodGhpcmRTZWN0aW9uQ2xvbmUpO1xuXG4gIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50cyk7XG5cbiAgcmV0dXJuIGNvbnRlbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpbkNvbnRlbnQ7XG4iLCJpbXBvcnQgbWFpbkNvbnRlbnQgZnJvbSBcIi4vbWFpbkNvbnRlbnRcIjtcbmltcG9ydCBjcmVhdGVOYXZiYXIgZnJvbSBcIi4vQ29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBmYWRlaW5BbmROYXZDaGFuZ2UgZnJvbSBcIi4vZmFkZWluQW5kTmF2Q2hhbmdlXCI7XG5cbmZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2YmFyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQoKSk7XG4gIGZhZGVpbkFuZE5hdkNoYW5nZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9wYWdlTG9hZFwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbnBhZ2VMb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=