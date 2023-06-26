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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\n    --background: rgba(255, 253, 130, 0.85);\n    --font-size: calc(.9em + .5vw);\n    --line-height: calc(1.2em + 1vw);\n    font-size: 16px;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    font-weight: 400;\n    overflow-x: hidden;\n    /* overflow: hidden; */\n\n\n}\n\n/* navigation styles start here */\n\nheader {\n    background: var(--background);\n    text-align: center;\n    position: fixed;\n    z-index: 999;\n    /*This ensures the header is always on top of everyhing else */\n    width: 100%;\n    color: #fff;\n    font-size: calc(.3em + .7vw);\n    line-height: calc(2em + 2vw);\n}\n\n/* .logo-scrolled {\n    --text: #ffffff;\n\n    color: var(--text);\n} */\n\n/* #home_btn a {\n    text-decoration: none;\n    color: #fff;\n} */\n\n.nav-toggle {\n    display: none;\n}\n\n.nav-toggle-label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-left: 1em;\n    height: 100%;\n    display: flex;\n    align-items: center;\n}\n\n.nav-toggle-label span,\n.nav-toggle-label span::before,\n.nav-toggle-label span::after {\n    display: block;\n    background: #fff;\n    height: 2px;\n    width: 2em;\n    border-radius: 2px;\n    position: relative;\n}\n\n.nav-toggle-label span::before,\n.nav-toggle-label span::after {\n    content: '';\n    position: absolute;\n\n}\n\n.nav-toggle-label span::before {\n    bottom: 7px;\n}\n\n.nav-toggle-label span::after {\n    top: 7px;\n}\n\nnav {\n    position: absolute;\n    text-align: left;\n    top: 100%;\n    left: 0;\n    background: var(--background);\n    width: 100%;\n    /* display: none; */\n    transform: scale(1, 0);\n    transform-origin: top;\n    transition: transform 400ms ease-in-out;\n}\n\nnav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n\n}\n\nnav li {\n    margin-bottom: 1em;\n    margin-left: 1em;\n}\n\nnav li {\n\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    opacity: 0;\n    transition: opacity 150ms ease-in-out;\n}\n\n.nav-toggle:checked~nav {\n    /* display: block; */\n    transform: scale(1, 1);\n}\n\n.nav-toggle:checked~nav li {\n    opacity: 1;\n    transition: opacity 250ms ease-in-out 250ms;\n}\n\n.nav-scrolled {\n    --text: #f5f5f5;\n    --background: #272525;\n\n    color: var(--text);\n    background: var(--background);\n    box-shadow: 0 3px 20px rgba(black, 0.2);\n}\n\n#home_btn {\n    user-select: none;\n}\n\n/* ----------First section----------- */\n\n.first-section {\n    position: relative;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100vw;\n    height: 100vh;\n\n\n}\n\n.text_header {\n    position: absolute;\n    color: var(--background);\n    font-size: 90px;\n    font-family: 'Great vibes', 'cursive';\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n/* --------Second content--------- */\n\n.content {\n    --font-size: calc(.5em + .5vw);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    padding: 5em 2em 5em 2em;\n    font-size: var(--font-size);\n}\n\n.content > h1 {\n    position: relative;\n    font-family: 'Rowdies', 'cursive';\n}\n\n.content > h1::after {\n    content: '';\n    width: 100px;\n    height: 3px;\n    position: absolute;\n    left: 3em;\n    bottom: -.5em;\n    background: var(--background);\n}\n\n.content > p {\n    font-family: 'Dongle', 'sans-serif';\n    font-size: 2em;\n}\n\n/* .banny_header {\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n} */\n\n/* .markus_img {\n    width: 100%;\n} */\n\n/* .paul_img {\n    width: 100%;\n} */\n\n/* .inside {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--font-size);\n} */\n\n\n\n.fade_in {\n    opacity: 0;\n    transition: opacity 250ms ease-in;\n}\n\n.fade_in.appear {\n    opacity: 1;\n}\n\n/* ---------Third Section----------- */\n\n.third-section {\n    --background: #f4f4f4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--font-size);\n    background: var(--background);\n}\n\n\n.from_left {\n    width: 100vw;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    transform: translateX(-50%);\n}\n\n\n.from_right {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2em;\n    height: 100%;\n    padding: 1em;\n    transform: translateX(50%);\n}\n\n.from_right>p {\n    font-family: 'Dongle', 'sans-serif';\n}\n\n\n.from-right {\n    width: 100vw;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    transform: translateX(50%);\n}\n\n\n.from-left {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    padding: 1em;\n    font-size: 1.2em;\n    transform: translateX(-50%);\n}\n\n.from-left > p {\n    font-family: 'Dongle', 'sans-serif';\n}\n\n.from_left,\n.from_right {\n    transition:\n        opacity 250ms ease-in,\n        transform 400ms ease-in;\n    opacity: 0;\n}\n\n.from_left.appear,\n.from_right.appear {\n    transform: translateX(0);\n    opacity: 1;\n}\n\n.from-left,\n.from-right {\n    transition:\n        opacity 250ms ease-in,\n        transform 400ms ease-in;\n    opacity: 0;\n}\n\n.from-left.appear,\n.from-right.appear {\n    transform: translateX(0);\n    opacity: 1;\n}\n\n/* ---------Menu content--------- */\n\n.head_container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 5em 3em 2em 3em;\n    font-family: 'Great vibes', 'cursive';\n}\n\n.cards {\n    --font-size: calc(1em + .8vw);\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n    font-family: 'Dongle', 'sans-serif';\n    font-size: var(--font-size);\n}\n\n.rice-dish p span {\n    color: red;\n}\n\n.rice-dish p span + span {\n    color: green;\n}\n\n.rice-dish ul li span {\n    color: green;\n}\n\n.chilli-only {\n    color: red !important; \n}\n\n.special-sat ul li span {\n    color: green;\n}\n\n.fries-menu ul li span {\n    color: green;\n}\n\n.small-chops ul li span {\n    color: green;\n}\n\n.extra ul li span {\n    color: green;\n}\n\n/* .card {\n    display: flex;\n    margin: 5em;\n    width: 60%;\n    height: 100%;\n    box-shadow: 0 0 15px rgba(0, 0, 0, .20);\n}\n\n.maxycard_image {\n    background: url('../src/Images/paul.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    max-width: 100%;\n}\n\n.card_text {\n    padding: 2rem;\n    background: #e9eb9c;\n}\n\n.card_text>h1 {\n    font-family: 'Rowdies', 'cursive';\n}\n\n.card_text>p {\n    font-family: 'Dongle', 'sans-serif';\n}\n\n.card_price {\n    font-size: 2rem;\n    color: #444;\n    font-weight: 800;\n    margin-bottom: 1.5rem;\n}\n\n.card_btn {\n    cursor: pointer;\n    display: inline-block;\n    background-color: #000;\n    color: #fff;\n    text-decoration: none;\n    padding: 10px 25px;\n}\n\n.card_btn:hover {\n    background: var(--background);\n    color: black;\n}\n\n.codedcard_image {\n    background: url('../src/Images/markus.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    min-height: 100%;\n}\n\n.justme_image {\n    background: url('../src/Images/markus.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    min-height: 100%;\n} */\n\n.bonus_div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.bonus {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    /* background-position: center; */\n    padding: 10em;\n    min-height: 100%;\n}\n\n/* -----------Media Query--------- */\n\n@media screen and (min-width: 950px) {\n    .nav-toggle-label {\n        display: none;\n    }\n\n    header {\n        display: grid;\n        background: transparent;\n        grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;\n    }\n\n    .header {\n        grid-column: 2 / 3;\n    }\n\n    nav {\n        all: unset;\n        grid-column: 3 / 5;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        margin-right: 1em;\n        background: transparent;\n    }\n\n    nav li {\n        cursor: pointer;\n        opacity: 1;\n        position: relative;\n    }\n\n    nav li::before {\n        content: '';\n        display: block;\n        height: 3px;\n        background: var(--background);\n        position: absolute;\n        /* bottom: -.5em; */\n        /* top: -.75em; */\n        left: 0;\n        right: 0;\n        transform: scale(0, 1);\n        /* transform-origin: right; */\n        transition: transform ease-in-out 250ms;\n    }\n\n    nav li:hover::before {\n        transform: scale(1, 1);\n    }\n\n    nav ul {\n        display: flex;\n    }\n\n    nav li {\n        margin-left: 3em;\n        margin-bottom: 0;\n    }\n\n    .second-section {\n        font-size: var(--font-size);\n        padding: 5em 8em 10em 8em;\n    }\n\n    /* .second_content > h1::after {\n        left: 50px;\n        bottom: -4px;\n    } */\n\n    .third-section {\n        --background: #f4f4f4;\n        display: grid;\n        /* column-gap: 2em; */\n        align-items: center;\n        font-size: var(--font-size);\n        background: var(--background);\n        grid-template-columns: minmax(1em, 1fr) repeat(2, minmax(200px, 400px)) minmax(1em, 1fr);\n        /* grid-template-columns: 1fr 1fr; */\n    }\n\n    .from_left {\n        width: 100%;\n        grid-column: 1 / 3;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        padding: 10em;\n        transform: translateX(-50%);\n    }\n\n    .from_right {\n        grid-column: 3 / 5;\n        justify-content: center;\n        align-items: center;\n        font-size: 1.2em;\n        height: 100%;\n        padding: 1em;\n        transform: translateX(50%);\n    }\n\n    .from-right {\n        grid-column: 3 / 5;\n        grid-row: 1 / 2;\n        width: 100%;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        padding: 10em;\n        transform: translateX(50%);\n    }\n\n    .from-left {\n        grid-column: 1 / 3;\n        height: 100%;\n        padding: 1em;\n        font-size: 1.2em;\n        transform: translateX(-50%);\n    }\n\n\n\n}\n\n/* @media screen and (max-width: 1151px) {\n    ---------Menu content---------\n\n    .card {\n        flex-direction: column;\n    }\n\n    .maxycard_image {\n        padding: 5em;\n    }\n\n    .codedcard_image {\n        padding: 5em;\n    }\n\n    .card_price {\n        margin: 1.2rem 0 1.2rem 0;\n    }\n} */", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n\n    --background: rgba(255, 253, 130, 0.85);\n    --font-size: calc(.9em + .5vw);\n    --line-height: calc(1.2em + 1vw);\n    font-size: 16px;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    font-weight: 400;\n    overflow-x: hidden;\n    /* overflow: hidden; */\n\n\n}\n\n/* navigation styles start here */\n\nheader {\n    background: var(--background);\n    text-align: center;\n    position: fixed;\n    z-index: 999;\n    /*This ensures the header is always on top of everyhing else */\n    width: 100%;\n    color: #fff;\n    font-size: calc(.3em + .7vw);\n    line-height: calc(2em + 2vw);\n}\n\n/* .logo-scrolled {\n    --text: #ffffff;\n\n    color: var(--text);\n} */\n\n/* #home_btn a {\n    text-decoration: none;\n    color: #fff;\n} */\n\n.nav-toggle {\n    display: none;\n}\n\n.nav-toggle-label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-left: 1em;\n    height: 100%;\n    display: flex;\n    align-items: center;\n}\n\n.nav-toggle-label span,\n.nav-toggle-label span::before,\n.nav-toggle-label span::after {\n    display: block;\n    background: #fff;\n    height: 2px;\n    width: 2em;\n    border-radius: 2px;\n    position: relative;\n}\n\n.nav-toggle-label span::before,\n.nav-toggle-label span::after {\n    content: '';\n    position: absolute;\n\n}\n\n.nav-toggle-label span::before {\n    bottom: 7px;\n}\n\n.nav-toggle-label span::after {\n    top: 7px;\n}\n\nnav {\n    position: absolute;\n    text-align: left;\n    top: 100%;\n    left: 0;\n    background: var(--background);\n    width: 100%;\n    /* display: none; */\n    transform: scale(1, 0);\n    transform-origin: top;\n    transition: transform 400ms ease-in-out;\n}\n\nnav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n\n}\n\nnav li {\n    margin-bottom: 1em;\n    margin-left: 1em;\n}\n\nnav li {\n\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    opacity: 0;\n    transition: opacity 150ms ease-in-out;\n}\n\n.nav-toggle:checked~nav {\n    /* display: block; */\n    transform: scale(1, 1);\n}\n\n.nav-toggle:checked~nav li {\n    opacity: 1;\n    transition: opacity 250ms ease-in-out 250ms;\n}\n\n.nav-scrolled {\n    --text: #f5f5f5;\n    --background: #272525;\n\n    color: var(--text);\n    background: var(--background);\n    box-shadow: 0 3px 20px rgba(black, 0.2);\n}\n\n#home_btn {\n    user-select: none;\n}\n\n/* ----------First section----------- */\n\n.first-section {\n    position: relative;\n    background: url('../src/Images/marek.jpg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100vw;\n    height: 100vh;\n\n\n}\n\n.text_header {\n    position: absolute;\n    color: var(--background);\n    font-size: 90px;\n    font-family: 'Great vibes', 'cursive';\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n/* --------Second content--------- */\n\n.content {\n    --font-size: calc(.5em + .5vw);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    padding: 5em 2em 5em 2em;\n    font-size: var(--font-size);\n}\n\n.content > h1 {\n    position: relative;\n    font-family: 'Rowdies', 'cursive';\n}\n\n.content > h1::after {\n    content: '';\n    width: 100px;\n    height: 3px;\n    position: absolute;\n    left: 3em;\n    bottom: -.5em;\n    background: var(--background);\n}\n\n.content > p {\n    font-family: 'Dongle', 'sans-serif';\n    font-size: 2em;\n}\n\n/* .banny_header {\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n} */\n\n/* .markus_img {\n    width: 100%;\n} */\n\n/* .paul_img {\n    width: 100%;\n} */\n\n/* .inside {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--font-size);\n} */\n\n\n\n.fade_in {\n    opacity: 0;\n    transition: opacity 250ms ease-in;\n}\n\n.fade_in.appear {\n    opacity: 1;\n}\n\n/* ---------Third Section----------- */\n\n.third-section {\n    --background: #f4f4f4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--font-size);\n    background: var(--background);\n}\n\n\n.from_left {\n    width: 100vw;\n    background-image: url('../src/Images/markus.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    transform: translateX(-50%);\n}\n\n\n.from_right {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2em;\n    height: 100%;\n    padding: 1em;\n    transform: translateX(50%);\n}\n\n.from_right>p {\n    font-family: 'Dongle', 'sans-serif';\n}\n\n\n.from-right {\n    width: 100vw;\n    background-image: url('../src/Images/paul.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    transform: translateX(50%);\n}\n\n\n.from-left {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    padding: 1em;\n    font-size: 1.2em;\n    transform: translateX(-50%);\n}\n\n.from-left > p {\n    font-family: 'Dongle', 'sans-serif';\n}\n\n.from_left,\n.from_right {\n    transition:\n        opacity 250ms ease-in,\n        transform 400ms ease-in;\n    opacity: 0;\n}\n\n.from_left.appear,\n.from_right.appear {\n    transform: translateX(0);\n    opacity: 1;\n}\n\n.from-left,\n.from-right {\n    transition:\n        opacity 250ms ease-in,\n        transform 400ms ease-in;\n    opacity: 0;\n}\n\n.from-left.appear,\n.from-right.appear {\n    transform: translateX(0);\n    opacity: 1;\n}\n\n/* ---------Menu content--------- */\n\n.head_container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 5em 3em 2em 3em;\n    font-family: 'Great vibes', 'cursive';\n}\n\n.cards {\n    --font-size: calc(1em + .8vw);\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n    font-family: 'Dongle', 'sans-serif';\n    font-size: var(--font-size);\n}\n\n.rice-dish p span {\n    color: red;\n}\n\n.rice-dish p span + span {\n    color: green;\n}\n\n.rice-dish ul li span {\n    color: green;\n}\n\n.chilli-only {\n    color: red !important; \n}\n\n.special-sat ul li span {\n    color: green;\n}\n\n.fries-menu ul li span {\n    color: green;\n}\n\n.small-chops ul li span {\n    color: green;\n}\n\n.extra ul li span {\n    color: green;\n}\n\n/* .card {\n    display: flex;\n    margin: 5em;\n    width: 60%;\n    height: 100%;\n    box-shadow: 0 0 15px rgba(0, 0, 0, .20);\n}\n\n.maxycard_image {\n    background: url('../src/Images/paul.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    max-width: 100%;\n}\n\n.card_text {\n    padding: 2rem;\n    background: #e9eb9c;\n}\n\n.card_text>h1 {\n    font-family: 'Rowdies', 'cursive';\n}\n\n.card_text>p {\n    font-family: 'Dongle', 'sans-serif';\n}\n\n.card_price {\n    font-size: 2rem;\n    color: #444;\n    font-weight: 800;\n    margin-bottom: 1.5rem;\n}\n\n.card_btn {\n    cursor: pointer;\n    display: inline-block;\n    background-color: #000;\n    color: #fff;\n    text-decoration: none;\n    padding: 10px 25px;\n}\n\n.card_btn:hover {\n    background: var(--background);\n    color: black;\n}\n\n.codedcard_image {\n    background: url('../src/Images/markus.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    min-height: 100%;\n}\n\n.justme_image {\n    background: url('../src/Images/markus.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 10em;\n    min-height: 100%;\n} */\n\n.bonus_div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.bonus {\n    background: url('../src/Images/chef.svg');\n    background-size: contain;\n    background-repeat: no-repeat;\n    /* background-position: center; */\n    padding: 10em;\n    min-height: 100%;\n}\n\n/* -----------Media Query--------- */\n\n@media screen and (min-width: 950px) {\n    .nav-toggle-label {\n        display: none;\n    }\n\n    header {\n        display: grid;\n        background: transparent;\n        grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;\n    }\n\n    .header {\n        grid-column: 2 / 3;\n    }\n\n    nav {\n        all: unset;\n        grid-column: 3 / 5;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        margin-right: 1em;\n        background: transparent;\n    }\n\n    nav li {\n        cursor: pointer;\n        opacity: 1;\n        position: relative;\n    }\n\n    nav li::before {\n        content: '';\n        display: block;\n        height: 3px;\n        background: var(--background);\n        position: absolute;\n        /* bottom: -.5em; */\n        /* top: -.75em; */\n        left: 0;\n        right: 0;\n        transform: scale(0, 1);\n        /* transform-origin: right; */\n        transition: transform ease-in-out 250ms;\n    }\n\n    nav li:hover::before {\n        transform: scale(1, 1);\n    }\n\n    nav ul {\n        display: flex;\n    }\n\n    nav li {\n        margin-left: 3em;\n        margin-bottom: 0;\n    }\n\n    .second-section {\n        font-size: var(--font-size);\n        padding: 5em 8em 10em 8em;\n    }\n\n    /* .second_content > h1::after {\n        left: 50px;\n        bottom: -4px;\n    } */\n\n    .third-section {\n        --background: #f4f4f4;\n        display: grid;\n        /* column-gap: 2em; */\n        align-items: center;\n        font-size: var(--font-size);\n        background: var(--background);\n        grid-template-columns: minmax(1em, 1fr) repeat(2, minmax(200px, 400px)) minmax(1em, 1fr);\n        /* grid-template-columns: 1fr 1fr; */\n    }\n\n    .from_left {\n        width: 100%;\n        grid-column: 1 / 3;\n        background-image: url('../src/Images/markus.jpg');\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        padding: 10em;\n        transform: translateX(-50%);\n    }\n\n    .from_right {\n        grid-column: 3 / 5;\n        justify-content: center;\n        align-items: center;\n        font-size: 1.2em;\n        height: 100%;\n        padding: 1em;\n        transform: translateX(50%);\n    }\n\n    .from-right {\n        grid-column: 3 / 5;\n        grid-row: 1 / 2;\n        width: 100%;\n        background-image: url('../src/Images/paul.jpg');\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        padding: 10em;\n        transform: translateX(50%);\n    }\n\n    .from-left {\n        grid-column: 1 / 3;\n        height: 100%;\n        padding: 1em;\n        font-size: 1.2em;\n        transform: translateX(-50%);\n    }\n\n\n\n}\n\n/* @media screen and (max-width: 1151px) {\n    ---------Menu content---------\n\n    .card {\n        flex-direction: column;\n    }\n\n    .maxycard_image {\n        padding: 5em;\n    }\n\n    .codedcard_image {\n        padding: 5em;\n    }\n\n    .card_price {\n        margin: 1.2rem 0 1.2rem 0;\n    }\n} */"],"sourceRoot":""}]);
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
// import createNavbar from "./navBar";
// import Marek from "./marek.jpg";






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



const createNavbar = () => {
  // const container = document.querySelector(".container");
  const header = document.createElement("header");

  const headerH1 = document.createElement("h1");
  const headerInput = document.createElement("input");
  const headerNav = document.createElement("nav");
  const headerUl = document.createElement("ul");
  const headerHomeLi = document.createElement("li");
  const headerMenuLi = document.createElement("li");
  const headerAboutLi = document.createElement("li");
  const headerContactLi = document.createElement("li");
  const headerLabel = document.createElement("label");
  const headerSpan = document.createElement("span");

  headerH1.classList.add("header");
  headerH1.textContent = "Bannycue";
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

  headerLabel.classList.add("nav-toggle-label");
  headerLabel.htmlFor = "nav-toggle";

  headerUl.appendChild(headerHomeLi);
  headerUl.appendChild(headerMenuLi);
  headerUl.appendChild(headerAboutLi);
  headerUl.appendChild(headerContactLi);
  headerNav.appendChild(headerUl);

  headerLabel.appendChild(headerSpan);

  header.appendChild(headerH1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxRQUFRLE1BQU0sT0FBTyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxTQUFTLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxTQUFTLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLHVFQUF1RSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZ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O1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDWjs7QUFFdEIscURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9Db21wb25lbnRzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL0NvbXBvbmVudHMvTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvQ29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL2ZhZGVpbkFuZE5hdkNoYW5nZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvbWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL21hcmVrLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvbWFya3VzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvcGF1bC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL2NoZWYuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcblxcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTMsIDEzMCwgMC44NSk7XFxuICAgIC0tZm9udC1zaXplOiBjYWxjKC45ZW0gKyAuNXZ3KTtcXG4gICAgLS1saW5lLWhlaWdodDogY2FsYygxLjJlbSArIDF2dyk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG5cXG5cXG59XFxuXFxuLyogbmF2aWdhdGlvbiBzdHlsZXMgc3RhcnQgaGVyZSAqL1xcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICAvKlRoaXMgZW5zdXJlcyB0aGUgaGVhZGVyIGlzIGFsd2F5cyBvbiB0b3Agb2YgZXZlcnloaW5nIGVsc2UgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IGNhbGMoLjNlbSArIC43dncpO1xcbiAgICBsaW5lLWhlaWdodDogY2FsYygyZW0gKyAydncpO1xcbn1cXG5cXG4vKiAubG9nby1zY3JvbGxlZCB7XFxuICAgIC0tdGV4dDogI2ZmZmZmZjtcXG5cXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcbn0gKi9cXG5cXG4vKiAjaG9tZV9idG4gYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxufSAqL1xcblxcbi5uYXYtdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hdi10b2dnbGUtbGFiZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2LXRvZ2dsZS1sYWJlbCBzcGFuLFxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmJlZm9yZSxcXG4ubmF2LXRvZ2dsZS1sYWJlbCBzcGFuOjphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmJlZm9yZSxcXG4ubmF2LXRvZ2dsZS1sYWJlbCBzcGFuOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxufVxcblxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmJlZm9yZSB7XFxuICAgIGJvdHRvbTogN3B4O1xcbn1cXG5cXG4ubmF2LXRvZ2dsZS1sYWJlbCBzcGFuOjphZnRlciB7XFxuICAgIHRvcDogN3B4O1xcbn1cXG5cXG5uYXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDApO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxubmF2IHVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbn1cXG5cXG5uYXYgbGkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxufVxcblxcbm5hdiBsaSB7XFxuXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubmF2LXRvZ2dsZTpjaGVja2Vkfm5hdiB7XFxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbn1cXG5cXG4ubmF2LXRvZ2dsZTpjaGVja2Vkfm5hdiBsaSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbi1vdXQgMjUwbXM7XFxufVxcblxcbi5uYXYtc2Nyb2xsZWQge1xcbiAgICAtLXRleHQ6ICNmNWY1ZjU7XFxuICAgIC0tYmFja2dyb3VuZDogIzI3MjUyNTtcXG5cXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgYm94LXNoYWRvdzogMCAzcHggMjBweCByZ2JhKGJsYWNrLCAwLjIpO1xcbn1cXG5cXG4jaG9tZV9idG4ge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLUZpcnN0IHNlY3Rpb24tLS0tLS0tLS0tLSAqL1xcblxcbi5maXJzdC1zZWN0aW9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG5cXG59XFxuXFxuLnRleHRfaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGZvbnQtc2l6ZTogOTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCB2aWJlcycsICdjdXJzaXZlJztcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi8qIC0tLS0tLS0tU2Vjb25kIGNvbnRlbnQtLS0tLS0tLS0gKi9cXG5cXG4uY29udGVudCB7XFxuICAgIC0tZm9udC1zaXplOiBjYWxjKC41ZW0gKyAuNXZ3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogNWVtIDJlbSA1ZW0gMmVtO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5jb250ZW50ID4gaDEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm93ZGllcycsICdjdXJzaXZlJztcXG59XFxuXFxuLmNvbnRlbnQgPiBoMTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAzZW07XFxuICAgIGJvdHRvbTogLS41ZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uY29udGVudCA+IHAge1xcbiAgICBmb250LWZhbWlseTogJ0RvbmdsZScsICdzYW5zLXNlcmlmJztcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi8qIC5iYW5ueV9oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn0gKi9cXG5cXG4vKiAubWFya3VzX2ltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn0gKi9cXG5cXG4vKiAucGF1bF9pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG59ICovXFxuXFxuLyogLmluc2lkZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxufSAqL1xcblxcblxcblxcbi5mYWRlX2luIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4uZmFkZV9pbi5hcHBlYXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS1UaGlyZCBTZWN0aW9uLS0tLS0tLS0tLS0gKi9cXG5cXG4udGhpcmQtc2VjdGlvbiB7XFxuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcblxcbi5mcm9tX2xlZnQge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG5cXG5cXG4uZnJvbV9yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxufVxcblxcbi5mcm9tX3JpZ2h0PnAge1xcbiAgICBmb250LWZhbWlseTogJ0RvbmdsZScsICdzYW5zLXNlcmlmJztcXG59XFxuXFxuXFxuLmZyb20tcmlnaHQge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxufVxcblxcblxcbi5mcm9tLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuXFxuLmZyb20tbGVmdCA+IHAge1xcbiAgICBmb250LWZhbWlseTogJ0RvbmdsZScsICdzYW5zLXNlcmlmJztcXG59XFxuXFxuLmZyb21fbGVmdCxcXG4uZnJvbV9yaWdodCB7XFxuICAgIHRyYW5zaXRpb246XFxuICAgICAgICBvcGFjaXR5IDI1MG1zIGVhc2UtaW4sXFxuICAgICAgICB0cmFuc2Zvcm0gNDAwbXMgZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmZyb21fbGVmdC5hcHBlYXIsXFxuLmZyb21fcmlnaHQuYXBwZWFyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZnJvbS1sZWZ0LFxcbi5mcm9tLXJpZ2h0IHtcXG4gICAgdHJhbnNpdGlvbjpcXG4gICAgICAgIG9wYWNpdHkgMjUwbXMgZWFzZS1pbixcXG4gICAgICAgIHRyYW5zZm9ybSA0MDBtcyBlYXNlLWluO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uZnJvbS1sZWZ0LmFwcGVhcixcXG4uZnJvbS1yaWdodC5hcHBlYXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIC0tLS0tLS0tLU1lbnUgY29udGVudC0tLS0tLS0tLSAqL1xcblxcbi5oZWFkX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDVlbSAzZW0gMmVtIDNlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCB2aWJlcycsICdjdXJzaXZlJztcXG59XFxuXFxuLmNhcmRzIHtcXG4gICAgLS1mb250LXNpemU6IGNhbGMoMWVtICsgLjh2dyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnRG9uZ2xlJywgJ3NhbnMtc2VyaWYnO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5yaWNlLWRpc2ggcCBzcGFuIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnJpY2UtZGlzaCBwIHNwYW4gKyBzcGFuIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucmljZS1kaXNoIHVsIGxpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5jaGlsbGktb25seSB7XFxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDsgXFxufVxcblxcbi5zcGVjaWFsLXNhdCB1bCBsaSBzcGFuIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uZnJpZXMtbWVudSB1bCBsaSBzcGFuIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uc21hbGwtY2hvcHMgdWwgbGkgc3BhbiB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmV4dHJhIHVsIGxpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi8qIC5jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiA1ZW07XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAuMjApO1xcbn1cXG5cXG4ubWF4eWNhcmRfaW1hZ2Uge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3NyYy9JbWFnZXMvcGF1bC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMGVtO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkX3RleHQge1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZTllYjljO1xcbn1cXG5cXG4uY2FyZF90ZXh0PmgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb3dkaWVzJywgJ2N1cnNpdmUnO1xcbn1cXG5cXG4uY2FyZF90ZXh0PnAge1xcbiAgICBmb250LWZhbWlseTogJ0RvbmdsZScsICdzYW5zLXNlcmlmJztcXG59XFxuXFxuLmNhcmRfcHJpY2Uge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiAjNDQ0O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi5jYXJkX2J0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxufVxcblxcbi5jYXJkX2J0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5jb2RlZGNhcmRfaW1hZ2Uge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3NyYy9JbWFnZXMvbWFya3VzLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5qdXN0bWVfaW1hZ2Uge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3NyYy9JbWFnZXMvbWFya3VzLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufSAqL1xcblxcbi5ib251c19kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvbnVzIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXFxuICAgIHBhZGRpbmc6IDEwZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tTWVkaWEgUXVlcnktLS0tLS0tLS0gKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NTBweCkge1xcbiAgICAubmF2LXRvZ2dsZS1sYWJlbCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIG1pbm1heCg2MDBweCwgM2ZyKSAxZnI7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICAgIGFsbDogdW5zZXQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMyAvIDU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgIG5hdiBsaSB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIG5hdiBsaTo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBoZWlnaHQ6IDNweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgLyogYm90dG9tOiAtLjVlbTsgKi9cXG4gICAgICAgIC8qIHRvcDogLS43NWVtOyAqL1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcXG4gICAgICAgIC8qIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0OyAqL1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IDI1MG1zO1xcbiAgICB9XFxuXFxuICAgIG5hdiBsaTpob3Zlcjo6YmVmb3JlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICAgIH1cXG5cXG4gICAgbmF2IHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgbmF2IGxpIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgIC5zZWNvbmQtc2VjdGlvbiB7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgICAgICBwYWRkaW5nOiA1ZW0gOGVtIDEwZW0gOGVtO1xcbiAgICB9XFxuXFxuICAgIC8qIC5zZWNvbmRfY29udGVudCA+IGgxOjphZnRlciB7XFxuICAgICAgICBsZWZ0OiA1MHB4O1xcbiAgICAgICAgYm90dG9tOiAtNHB4O1xcbiAgICB9ICovXFxuXFxuICAgIC50aGlyZC1zZWN0aW9uIHtcXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAvKiBjb2x1bW4tZ2FwOiAyZW07ICovXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxZW0sIDFmcikgcmVwZWF0KDIsIG1pbm1heCgyMDBweCwgNDAwcHgpKSBtaW5tYXgoMWVtLCAxZnIpO1xcbiAgICAgICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyAqL1xcbiAgICB9XFxuXFxuICAgIC5mcm9tX2xlZnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAxMGVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB9XFxuXFxuICAgIC5mcm9tX3JpZ2h0IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAzIC8gNTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG4gICAgfVxcblxcbiAgICAuZnJvbS1yaWdodCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMyAvIDU7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDEwZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG4gICAgfVxcblxcbiAgICAuZnJvbS1sZWZ0IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIH1cXG5cXG5cXG5cXG59XFxuXFxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MXB4KSB7XFxuICAgIC0tLS0tLS0tLU1lbnUgY29udGVudC0tLS0tLS0tLVxcblxcbiAgICAuY2FyZCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5tYXh5Y2FyZF9pbWFnZSB7XFxuICAgICAgICBwYWRkaW5nOiA1ZW07XFxuICAgIH1cXG5cXG4gICAgLmNvZGVkY2FyZF9pbWFnZSB7XFxuICAgICAgICBwYWRkaW5nOiA1ZW07XFxuICAgIH1cXG5cXG4gICAgLmNhcmRfcHJpY2Uge1xcbiAgICAgICAgbWFyZ2luOiAxLjJyZW0gMCAxLjJyZW0gMDtcXG4gICAgfVxcbn0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSx1Q0FBdUM7SUFDdkMsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyxlQUFlO0FBQ25COztBQUVBOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7OztBQUcxQjs7QUFFQSxpQ0FBaUM7O0FBRWpDO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLDhEQUE4RDtJQUM5RCxXQUFXO0lBQ1gsV0FBVztJQUNYLDRCQUE0QjtJQUM1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7Ozs7R0FJRzs7QUFFSDs7O0dBR0c7O0FBRUg7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdB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Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxjQUFjO1FBQ2QsV0FBVztRQUNYLDZCQUE2QjtRQUM3QixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixPQUFPO1FBQ1AsUUFBUTtRQUNSLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsdUNBQXVDO0lBQzNDOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSwyQkFBMkI7UUFDM0IseUJBQXlCO0lBQzdCOztJQUVBOzs7T0FHRzs7SUFFSDtRQUNJLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0IsNkJBQTZCO1FBQzdCLHdGQUF3RjtRQUN4RixvQ0FBb0M7SUFDeEM7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLHlEQUFpRDtRQUNqRCxzQkFBc0I7UUFDdEIsNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUMzQixhQUFhO1FBQ2IsMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixZQUFZO1FBQ1osMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixXQUFXO1FBQ1gseURBQStDO1FBQy9DLHNCQUFzQjtRQUN0Qiw0QkFBNEI7UUFDNUIsMkJBQTJCO1FBQzNCLGFBQWE7UUFDYiwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsMkJBQTJCO0lBQy9COzs7O0FBSUo7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuXFxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1MywgMTMwLCAwLjg1KTtcXG4gICAgLS1mb250LXNpemU6IGNhbGMoLjllbSArIC41dncpO1xcbiAgICAtLWxpbmUtaGVpZ2h0OiBjYWxjKDEuMmVtICsgMXZ3KTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcblxcblxcbn1cXG5cXG4vKiBuYXZpZ2F0aW9uIHN0eWxlcyBzdGFydCBoZXJlICovXFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIC8qVGhpcyBlbnN1cmVzIHRoZSBoZWFkZXIgaXMgYWx3YXlzIG9uIHRvcCBvZiBldmVyeWhpbmcgZWxzZSAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyguM2VtICsgLjd2dyk7XFxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDJlbSArIDJ2dyk7XFxufVxcblxcbi8qIC5sb2dvLXNjcm9sbGVkIHtcXG4gICAgLS10ZXh0OiAjZmZmZmZmO1xcblxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufSAqL1xcblxcbi8qICNob21lX2J0biBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59ICovXFxuXFxuLm5hdi10b2dnbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2LXRvZ2dsZS1sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW4sXFxuLm5hdi10b2dnbGUtbGFiZWwgc3Bhbjo6YmVmb3JlLFxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5hdi10b2dnbGUtbGFiZWwgc3Bhbjo6YmVmb3JlLFxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG59XFxuXFxuLm5hdi10b2dnbGUtbGFiZWwgc3Bhbjo6YmVmb3JlIHtcXG4gICAgYm90dG9tOiA3cHg7XFxufVxcblxcbi5uYXYtdG9nZ2xlLWxhYmVsIHNwYW46OmFmdGVyIHtcXG4gICAgdG9wOiA3cHg7XFxufVxcblxcbm5hdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxufVxcblxcbm5hdiBsaSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59XFxuXFxubmF2IGxpIHtcXG5cXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5uYXYtdG9nZ2xlOmNoZWNrZWR+bmF2IHtcXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxufVxcblxcbi5uYXYtdG9nZ2xlOmNoZWNrZWR+bmF2IGxpIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluLW91dCAyNTBtcztcXG59XFxuXFxuLm5hdi1zY3JvbGxlZCB7XFxuICAgIC0tdGV4dDogI2Y1ZjVmNTtcXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjcyNTI1O1xcblxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBib3gtc2hhZG93OiAwIDNweCAyMHB4IHJnYmEoYmxhY2ssIDAuMik7XFxufVxcblxcbiNob21lX2J0biB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tRmlyc3Qgc2VjdGlvbi0tLS0tLS0tLS0tICovXFxuXFxuLmZpcnN0LXNlY3Rpb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3JjL0ltYWdlcy9tYXJlay5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuXFxufVxcblxcbi50ZXh0X2hlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBmb250LXNpemU6IDkwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgdmliZXMnLCAnY3Vyc2l2ZSc7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLVNlY29uZCBjb250ZW50LS0tLS0tLS0tICovXFxuXFxuLmNvbnRlbnQge1xcbiAgICAtLWZvbnQtc2l6ZTogY2FsYyguNWVtICsgLjV2dyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDVlbSAyZW0gNWVtIDJlbTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbn1cXG5cXG4uY29udGVudCA+IGgxIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LWZhbWlseTogJ1Jvd2RpZXMnLCAnY3Vyc2l2ZSc7XFxufVxcblxcbi5jb250ZW50ID4gaDE6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogM2VtO1xcbiAgICBib3R0b206IC0uNWVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmNvbnRlbnQgPiBwIHtcXG4gICAgZm9udC1mYW1pbHk6ICdEb25nbGUnLCAnc2Fucy1zZXJpZic7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4vKiAuYmFubnlfaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59ICovXFxuXFxuLyogLm1hcmt1c19pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG59ICovXFxuXFxuLyogLnBhdWxfaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufSAqL1xcblxcbi8qIC5pbnNpZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbn0gKi9cXG5cXG5cXG5cXG4uZmFkZV9pbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmZhZGVfaW4uYXBwZWFyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLyogLS0tLS0tLS0tVGhpcmQgU2VjdGlvbi0tLS0tLS0tLS0tICovXFxuXFxuLnRoaXJkLXNlY3Rpb24ge1xcbiAgICAtLWJhY2tncm91bmQ6ICNmNGY0ZjQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG5cXG4uZnJvbV9sZWZ0IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3NyYy9JbWFnZXMvbWFya3VzLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuXFxuXFxuLmZyb21fcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcbn1cXG5cXG4uZnJvbV9yaWdodD5wIHtcXG4gICAgZm9udC1mYW1pbHk6ICdEb25nbGUnLCAnc2Fucy1zZXJpZic7XFxufVxcblxcblxcbi5mcm9tLXJpZ2h0IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3NyYy9JbWFnZXMvcGF1bC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMGVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG59XFxuXFxuXFxuLmZyb20tbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG5cXG4uZnJvbS1sZWZ0ID4gcCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRG9uZ2xlJywgJ3NhbnMtc2VyaWYnO1xcbn1cXG5cXG4uZnJvbV9sZWZ0LFxcbi5mcm9tX3JpZ2h0IHtcXG4gICAgdHJhbnNpdGlvbjpcXG4gICAgICAgIG9wYWNpdHkgMjUwbXMgZWFzZS1pbixcXG4gICAgICAgIHRyYW5zZm9ybSA0MDBtcyBlYXNlLWluO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uZnJvbV9sZWZ0LmFwcGVhcixcXG4uZnJvbV9yaWdodC5hcHBlYXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5mcm9tLWxlZnQsXFxuLmZyb20tcmlnaHQge1xcbiAgICB0cmFuc2l0aW9uOlxcbiAgICAgICAgb3BhY2l0eSAyNTBtcyBlYXNlLWluLFxcbiAgICAgICAgdHJhbnNmb3JtIDQwMG1zIGVhc2UtaW47XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5mcm9tLWxlZnQuYXBwZWFyLFxcbi5mcm9tLXJpZ2h0LmFwcGVhciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLyogLS0tLS0tLS0tTWVudSBjb250ZW50LS0tLS0tLS0tICovXFxuXFxuLmhlYWRfY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNWVtIDNlbSAyZW0gM2VtO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IHZpYmVzJywgJ2N1cnNpdmUnO1xcbn1cXG5cXG4uY2FyZHMge1xcbiAgICAtLWZvbnQtc2l6ZTogY2FsYygxZW0gKyAuOHZ3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdEb25nbGUnLCAnc2Fucy1zZXJpZic7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG59XFxuXFxuLnJpY2UtZGlzaCBwIHNwYW4ge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ucmljZS1kaXNoIHAgc3BhbiArIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5yaWNlLWRpc2ggdWwgbGkgc3BhbiB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmNoaWxsaS1vbmx5IHtcXG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50OyBcXG59XFxuXFxuLnNwZWNpYWwtc2F0IHVsIGxpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5mcmllcy1tZW51IHVsIGxpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5zbWFsbC1jaG9wcyB1bCBsaSBzcGFuIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uZXh0cmEgdWwgbGkgc3BhbiB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLyogLmNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDVlbTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIC4yMCk7XFxufVxcblxcbi5tYXh5Y2FyZF9pbWFnZSB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3JjL0ltYWdlcy9wYXVsLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwZW07XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmRfdGV4dCB7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJhY2tncm91bmQ6ICNlOWViOWM7XFxufVxcblxcbi5jYXJkX3RleHQ+aDEge1xcbiAgICBmb250LWZhbWlseTogJ1Jvd2RpZXMnLCAnY3Vyc2l2ZSc7XFxufVxcblxcbi5jYXJkX3RleHQ+cCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRG9uZ2xlJywgJ3NhbnMtc2VyaWYnO1xcbn1cXG5cXG4uY2FyZF9wcmljZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICM0NDQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLmNhcmRfYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXG59XFxuXFxuLmNhcmRfYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmNvZGVkY2FyZF9pbWFnZSB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3JjL0ltYWdlcy9tYXJrdXMuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBlbTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLmp1c3RtZV9pbWFnZSB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3JjL0ltYWdlcy9tYXJrdXMuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBlbTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59ICovXFxuXFxuLmJvbnVzX2RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9udXMge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3NyYy9JbWFnZXMvY2hlZi5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXFxuICAgIHBhZGRpbmc6IDEwZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tTWVkaWEgUXVlcnktLS0tLS0tLS0gKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NTBweCkge1xcbiAgICAubmF2LXRvZ2dsZS1sYWJlbCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIG1pbm1heCg2MDBweCwgM2ZyKSAxZnI7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICAgIGFsbDogdW5zZXQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMyAvIDU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgIG5hdiBsaSB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIG5hdiBsaTo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBoZWlnaHQ6IDNweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgLyogYm90dG9tOiAtLjVlbTsgKi9cXG4gICAgICAgIC8qIHRvcDogLS43NWVtOyAqL1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcXG4gICAgICAgIC8qIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0OyAqL1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IDI1MG1zO1xcbiAgICB9XFxuXFxuICAgIG5hdiBsaTpob3Zlcjo6YmVmb3JlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICAgIH1cXG5cXG4gICAgbmF2IHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgbmF2IGxpIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgIC5zZWNvbmQtc2VjdGlvbiB7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgICAgICBwYWRkaW5nOiA1ZW0gOGVtIDEwZW0gOGVtO1xcbiAgICB9XFxuXFxuICAgIC8qIC5zZWNvbmRfY29udGVudCA+IGgxOjphZnRlciB7XFxuICAgICAgICBsZWZ0OiA1MHB4O1xcbiAgICAgICAgYm90dG9tOiAtNHB4O1xcbiAgICB9ICovXFxuXFxuICAgIC50aGlyZC1zZWN0aW9uIHtcXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAvKiBjb2x1bW4tZ2FwOiAyZW07ICovXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxZW0sIDFmcikgcmVwZWF0KDIsIG1pbm1heCgyMDBweCwgNDAwcHgpKSBtaW5tYXgoMWVtLCAxZnIpO1xcbiAgICAgICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyAqL1xcbiAgICB9XFxuXFxuICAgIC5mcm9tX2xlZnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3NyYy9JbWFnZXMvbWFya3VzLmpwZycpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAxMGVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB9XFxuXFxuICAgIC5mcm9tX3JpZ2h0IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAzIC8gNTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG4gICAgfVxcblxcbiAgICAuZnJvbS1yaWdodCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMyAvIDU7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3JjL0ltYWdlcy9wYXVsLmpwZycpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAxMGVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxuICAgIH1cXG5cXG4gICAgLmZyb20tbGVmdCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB9XFxuXFxuXFxuXFxufVxcblxcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTFweCkge1xcbiAgICAtLS0tLS0tLS1NZW51IGNvbnRlbnQtLS0tLS0tLS1cXG5cXG4gICAgLmNhcmQge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubWF4eWNhcmRfaW1hZ2Uge1xcbiAgICAgICAgcGFkZGluZzogNWVtO1xcbiAgICB9XFxuXFxuICAgIC5jb2RlZGNhcmRfaW1hZ2Uge1xcbiAgICAgICAgcGFkZGluZzogNWVtO1xcbiAgICB9XFxuXFxuICAgIC5jYXJkX3ByaWNlIHtcXG4gICAgICAgIG1hcmdpbjogMS4ycmVtIDAgMS4ycmVtIDA7XFxuICAgIH1cXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBNYXJlayBmcm9tIFwiLi4vSW1hZ2VzL21hcmVrLmpwZ1wiO1xuaW1wb3J0IE1hcmt1cyBmcm9tIFwiLi4vSW1hZ2VzL21hcmt1cy5qcGdcIjtcbmltcG9ydCBQYXVsIGZyb20gXCIuLi9JbWFnZXMvcGF1bC5qcGdcIjtcbmltcG9ydCBIb3AgZnJvbSBcIi4uL0ltYWdlcy9ob3Auc3ZnXCI7XG5pbXBvcnQgU3RhbmQgZnJvbSBcIi4uL0ltYWdlcy9zdGFuZC5zdmdcIjtcbmltcG9ydCBmYWRlaW5BbmROYXZDaGFuZ2UgZnJvbSBcIi4uL2ZhZGVpbkFuZE5hdkNoYW5nZVwiO1xuXG5jb25zdCBob21lID0gKCkgPT4ge1xuICAvLyBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuICAvLyAgIENyZWF0ZXMgZmlyc3Qgc2VjdGlvbiBlbGVtZW50cyBhbmQgYXBwZW5kcyBpbnRvIHRoZSBEb21cbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZpcnN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgLy8gICBBZGRzIGNsYXNzbGlzdCB0byBlbGVtZW50cyBhbmQgYWRkcyBjb250ZW50cyB0byB0aGUgZWxlbWVudHMgY3JlYXRlZFxuICBmaXJzdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImZpcnN0LXNlY3Rpb25cIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gIHRleHRIZWFkZXIudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgVG8gQmFubnljdWVcIjtcbiAgdGV4dEhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGV4dF9oZWFkZXJcIik7XG5cbiAgZmlyc3RTZWN0aW9uLmFwcGVuZENoaWxkKHRleHRIZWFkZXIpO1xuICBob21lLmFwcGVuZENoaWxkKGZpcnN0U2VjdGlvbik7XG4gIC8vICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRzKTtcblxuICAvLyAgIENyZWF0aW5nIEltYWdlc1xuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5zcmMgPSBNYXJlaztcblxuICBjb25zdCBwYXVsID0gbmV3IEltYWdlKCk7XG4gIHBhdWwuc3JjID0gUGF1bDtcbiAgcGF1bC5jbGFzc0xpc3QuYWRkKFwicGF1bF9pbWdcIik7XG5cbiAgY29uc3QgbWFya3VzID0gbmV3IEltYWdlKCk7XG4gIG1hcmt1cy5zcmMgPSBNYXJrdXM7XG4gIG1hcmt1cy5jbGFzc0xpc3QuYWRkKFwibWFya3VzX2ltZ1wiKTtcblxuICBjb25zdCBob3AgPSBuZXcgSW1hZ2UoKTtcbiAgaG9wLnNyYyA9IEhvcDtcblxuICBjb25zdCBzdGFuZCA9IG5ldyBJbWFnZSgpO1xuICBzdGFuZC5zcmMgPSBTdGFuZDtcblxuICAvLyAgIENyZWF0ZXMgc2Vjb25kIHNlY3Rpb24gZWxlbWVudHMgYW5kIGFwcGVuZHMgaW4gdGhlIERvbVxuICBjb25zdCBzZWNvbmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2Vjb25kU2VjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNlY29uZFNlY3Rpb25IMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3Qgc2Vjb25kU2VjdGlvblBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb25zdCB0aGlyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmcm9tTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZyb21SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZyb21SaWdodFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgc3ZnRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCB0aGlyZFNlY3Rpb25DbG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZyb21SaWdodENsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJvbUxlZnRDbG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZyb21MZWZ0UGFyYUNsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHN2Z0RpdkNsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAvLyAgQWRkcyBjbGFzc2xpc3RzIHRvIHRoZSBlbGVtZW50c1xuICBzZWNvbmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtc2VjdGlvblwiKTtcbiAgc2Vjb25kU2VjdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgc2Vjb25kU2VjdGlvblBhcmEuY2xhc3NMaXN0LmFkZChcImZhZGVfaW5cIik7XG5cbiAgdGhpcmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0aGlyZC1zZWN0aW9uXCIpO1xuICBmcm9tTGVmdC5jbGFzc0xpc3QuYWRkKFwiZnJvbV9sZWZ0XCIpO1xuICBmcm9tTGVmdC5jbGFzc0xpc3QuYWRkKFwic2xpZGVfaW5cIik7XG4gIGZyb21SaWdodC5jbGFzc0xpc3QuYWRkKFwiZnJvbV9yaWdodFwiKTtcbiAgZnJvbVJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJzbGlkZV9pblwiKTtcbiAgc3ZnRGl2LmNsYXNzTGlzdC5hZGQoXCJzdmdcIik7XG5cbiAgdGhpcmRTZWN0aW9uQ2xvbmUuY2xhc3NMaXN0LmFkZChcInRoaXJkLXNlY3Rpb25cIik7XG4gIGZyb21SaWdodENsb25lLmNsYXNzTGlzdC5hZGQoXCJmcm9tLXJpZ2h0XCIpO1xuICBmcm9tUmlnaHRDbG9uZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVfaW5cIik7XG4gIGZyb21MZWZ0Q2xvbmUuY2xhc3NMaXN0LmFkZChcImZyb20tbGVmdFwiKTtcbiAgZnJvbUxlZnRDbG9uZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVfaW5cIik7XG4gIHN2Z0RpdkNsb25lLmNsYXNzTGlzdC5hZGQoXCJzdmdcIik7XG5cbiAgLy8gICBBZGRpbmcgdGV4dCBjb250ZW50IHRvIHRoZSBlbGVtZW50cyBhbmQgYXBwZW5kaW5nIHRvIHRoZSBEb21cblxuICBzZWNvbmRTZWN0aW9uSDEudGV4dENvbnRlbnQgPSBcIlJhYmJpdCAxMDFcIjtcbiAgc2Vjb25kU2VjdGlvblBhcmEudGV4dENvbnRlbnQgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmFtLCBpdXN0byEgSXN0ZSBlcnJvciBhdCBpZCBleHBsaWNhYm8gY29uc2VxdWF0dXIgY3VscGEgdG90YW0gZG9sb3Igb2JjYWVjYXRpIGFkaXBpc2NpIHZvbHVwdGF0ZXMuIFF1aSBhbGlxdWFtLCBhY2N1c2FtdXMgZXhwbGljYWJvIG5vc3RydW0gb3B0aW8gcmVwcmVoZW5kZXJpdCBxdWFzaSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmVpY2llbmRpcyBzaXQgaW1wZWRpdCwgZHVjaW11cyBsaWJlcm8gcXVpc3F1YW0gaGljIGl1cmUgbnVsbGEgbmVxdWUuIEludmVudG9yZSBwbGFjZWF0IG5hdHVzIGluY2lkdW50IG1pbmltYSBpdGFxdWUgcmVwZWxsZW5kdXMgbm9zdHJ1bSwgY3VwaWRpdGF0ZSBxdW9zIHNlZCBmYWNlcmUhIExvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWkgYXRxdWUgY29uc2VxdXVudHVyIHF1YXMgbmF0dXMgZXggZXhjZXB0dXJpIGN1bHBhIG51bXF1YW0gbW9sZXN0aWFzIGFsaXF1YW0sIGRpc3RpbmN0aW8gdmVsIHZlbmlhbSB2ZXJpdGF0aXMgaXBzYW0gcmF0aW9uZSBxdWlzcXVhbSBxdWlidXNkYW0uIERlc2VydW50LCBkb2xvcnVtIGF1dC5cIjtcbiAgZnJvbVJpZ2h0UGFyYS50ZXh0Q29udGVudCA9XG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOdWxsYSBlYXJ1bSBmdWdpdCBlYSBtb2xlc3RpYWUgcGVyc3BpY2lhdGlzLCB2b2x1cHRhdGVzIGRlbGVuaXRpIG1haW9yZXMsIHN1bnQgYWxpcXVpZCBwZXJmZXJlbmRpcyBhdHF1ZSBvZmZpY2lhIGRvbG9yZS4gRG9sb3JlbSBpbmNpZHVudCB0ZW1wb3JhIHRlbmV0dXIgc2l0IGlkIG5hbSEgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQW5pbWksIGxhYm9ydW0gdG90YW0gcXVpYnVzZGFtIHF1b3MgdmVybyBxdWlhIGluY2lkdW50LiBJc3RlIGludmVudG9yZSBkZWJpdGlzLCBwb3NzaW11cywgY29uc2VjdGV0dXIgYXJjaGl0ZWN0byBxdWlhIG1vbGVzdGlhcyBlb3MgZG9sb3IsIG1vbGxpdGlhIG51bGxhIG5pc2kuIFBlcnNwaWNpYXRpcz9cIjtcbiAgZnJvbUxlZnRQYXJhQ2xvbmUudGV4dENvbnRlbnQgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTnVsbGEgZWFydW0gZnVnaXQgZWEgbW9sZXN0aWFlIHBlcnNwaWNpYXRpcywgdm9sdXB0YXRlcyBkZWxlbml0aSBtYWlvcmVzLCBzdW50IGFsaXF1aWQgcGVyZmVyZW5kaXMgYXRxdWUgb2ZmaWNpYSBkb2xvcmUuIERvbG9yZW0gaW5jaWR1bnQgdGVtcG9yYSB0ZW5ldHVyIHNpdCBpZCBuYW0hIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFuaW1pLCBsYWJvcnVtIHRvdGFtIHF1aWJ1c2RhbSBxdW9zIHZlcm8gcXVpYSBpbmNpZHVudC4gSXN0ZSBpbnZlbnRvcmUgZGViaXRpcywgcG9zc2ltdXMsIGNvbnNlY3RldHVyIGFyY2hpdGVjdG8gcXVpYSBtb2xlc3RpYXMgZW9zIGRvbG9yLCBtb2xsaXRpYSBudWxsYSBuaXNpLiBQZXJzcGljaWF0aXM/XCI7XG5cbiAgc2Vjb25kU2VjdGlvbkRpdi5hcHBlbmRDaGlsZChzZWNvbmRTZWN0aW9uSDEpO1xuICBzZWNvbmRTZWN0aW9uRGl2LmFwcGVuZENoaWxkKHNlY29uZFNlY3Rpb25QYXJhKTtcblxuICBzdmdEaXYuYXBwZW5kQ2hpbGQoc3RhbmQpO1xuICBmcm9tUmlnaHQuYXBwZW5kQ2hpbGQoZnJvbVJpZ2h0UGFyYSk7XG4gIGZyb21SaWdodC5hcHBlbmRDaGlsZChzdmdEaXYpO1xuICB0aGlyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoZnJvbUxlZnQpO1xuICB0aGlyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoZnJvbVJpZ2h0KTtcblxuICB0aGlyZFNlY3Rpb25DbG9uZS5hcHBlbmRDaGlsZChmcm9tUmlnaHRDbG9uZSk7XG4gIHRoaXJkU2VjdGlvbkNsb25lLmFwcGVuZENoaWxkKGZyb21MZWZ0Q2xvbmUpO1xuXG4gIHN2Z0RpdkNsb25lLmFwcGVuZENoaWxkKGhvcCk7XG4gIGZyb21MZWZ0Q2xvbmUuYXBwZW5kQ2hpbGQoZnJvbUxlZnRQYXJhQ2xvbmUpO1xuICBmcm9tTGVmdENsb25lLmFwcGVuZENoaWxkKHN2Z0RpdkNsb25lKTtcblxuICBzZWNvbmRTZWN0aW9uLmFwcGVuZENoaWxkKHNlY29uZFNlY3Rpb25EaXYpO1xuICBob21lLmFwcGVuZENoaWxkKHNlY29uZFNlY3Rpb24pO1xuICBob21lLmFwcGVuZENoaWxkKHRoaXJkU2VjdGlvbik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQodGhpcmRTZWN0aW9uQ2xvbmUpO1xuXG4gIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50cyk7XG5cbiAgcmV0dXJuIGhvbWU7XG59O1xuXG4vLyBUaGUgbG9hZEhvbWUgZnVuY3Rpb24gY2xlYXJzIHNvbWUgY29udGVudHMgaW4gdGhlIERvbSBhbmQgYXBwZW5kcyBob21lIHRvIERvbVxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IGNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50c1wiKTtcbiAgY29udGVudHMudGV4dENvbnRlbnQgPSBcIlwiO1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChob21lKCkpO1xuICBmYWRlaW5BbmROYXZDaGFuZ2UoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG4iLCIvLyBpbXBvcnQgY3JlYXRlTmF2YmFyIGZyb20gXCIuL25hdkJhclwiO1xuLy8gaW1wb3J0IE1hcmVrIGZyb20gXCIuL21hcmVrLmpwZ1wiO1xuaW1wb3J0IE1hcmt1cyBmcm9tIFwiLi4vSW1hZ2VzL21hcmt1cy5qcGdcIjtcbmltcG9ydCBQYXVsIGZyb20gXCIuLi9JbWFnZXMvcGF1bC5qcGdcIjtcbmltcG9ydCBDaGVmIGZyb20gXCIuLi9JbWFnZXMvY2hlZi5zdmdcIjtcbmltcG9ydCBCYW5ueWN1ZUNvbG9yIGZyb20gXCIuLi9JbWFnZXMvQmFubnljdWVDb2xvci5zdmdcIjtcbmltcG9ydCBEZXNpZ24gZnJvbSBcIi4uL0ltYWdlcy9kZXNpZ24uc3ZnXCI7XG5cbmNvbnN0IG1lbnVQYWdlID0gKCkgPT4ge1xuICAvLyBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZpcnN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0ZXh0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJvbnVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYm9udXNJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgcmljZURpc2hNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBtZW51UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCByaWNlRGlzaFVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIGNvbnN0IGZpcnN0UmljZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBzZWNvbmRSaWNlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRoaXJkUmljZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBmb3VydGhSaWNlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGZpZnRoUmljZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBzaXh0aFJpY2VMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgcmljZUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cbiAgY29uc3Qgc3BlY2lhbFNhdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzYXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3Qgc3BlY2lhbFNhdFVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBmaXJzdFNhdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBzZWNvbmRTYXRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgdGhpcmRTYXRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgZm91cnRoU2F0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHNwZWNMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuXG4gIGNvbnN0IGZyaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJpZXNNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJpZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgZnJpZXNVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgZmlyc3RGcmllc0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBzZWNvbmRGcmllc0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGNvbnN0IHNtYWxsQ2hvcHNNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc21hbGxDaG9wVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IHNtYWxsQ2hvcHNVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgZmlyc3RDaG9wc0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBzZWNvbmRDaG9wc0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBmcmllc0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cbiAgY29uc3QgZXh0cmFNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZXh0cmFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgZXh0cmFVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgZmlyc3RFeHRyYUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBzZWNvbmRFeHRyYUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0aGlyZEV4dHJhTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGZvdXJ0aEV4cmFMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICByaWNlRGlzaE1lbnUuY2xhc3NMaXN0LmFkZChcInJpY2UtZGlzaFwiKTtcbiAgc3BlY2lhbFNhdE1lbnUuY2xhc3NMaXN0LmFkZChcInNwZWNpYWwtc2F0XCIpO1xuICBmcmllcy5jbGFzc0xpc3QuYWRkKFwiZnJpZXNcIik7XG4gIGZyaWVzTWVudS5jbGFzc0xpc3QuYWRkKFwiZnJpZXMtbWVudVwiKTtcbiAgc21hbGxDaG9wc01lbnUuY2xhc3NMaXN0LmFkZChcInNtYWxsLWNob3BzXCIpO1xuICBleHRyYU1lbnUuY2xhc3NMaXN0LmFkZChcImV4dHJhXCIpO1xuXG4gIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiUklDRSBESVNIRVNcIjtcbiAgc2F0VGl0bGUudGV4dENvbnRlbnQgPSBcIlNQRUNJQUwgU0FUVVJEQVlcIjtcbiAgZnJpZXNUaXRsZS50ZXh0Q29udGVudCA9IFwiRlJJRVNcIjtcbiAgc21hbGxDaG9wVGl0bGUudGV4dENvbnRlbnQgPSBcIlNNQUxMIENIT1BTXCI7XG4gIGV4dHJhVGl0bGUudGV4dENvbnRlbnQgPSBcIkVYVFJBXCI7XG5cbiAgbWVudVBhcmEuaW5uZXJIVE1MID0gYFNlcnZlZCB3aXRoIDxzcGFuPmNoaWxsaTwvc3Bhbj4gYW5kIDxzcGFuPnRvYXN0IHZlZzwvc3Bhbj4gYW5kIGdyaWxsZWQgcHJvdGVpbmA7XG4gIGZpcnN0UmljZUxpLmlubmVySFRNTCA9IFwiQ29jb251dCBmcmllZCByaWNlXCI7XG4gIHNlY29uZFJpY2VMaS5pbm5lckhUTUwgPSBcIlZlZ2V0YWJsZSByaWNlXCI7XG4gIHRoaXJkUmljZUxpLmlubmVySFRNTCA9IFwiUGxhaW4gcmljZVwiO1xuICBmb3VydGhSaWNlTGkuaW5uZXJIVE1MID0gYDxzcGFuPkdIUyAxNS4wMDwvc3Bhbj4tcGFjayBvZiByaWNlIGRpc2hlcyBvcHRpb25zIHNlcnZlZCB3aXRoIDxzcGFuPmdyaWxsZWQgY2hpY2tlbjwvc3Bhbj4gYW5kIDxzcGFuIGNsYXNzPVwiY2hpbGxpLW9ubHlcIj5jaGlsbGkgb25seTwvc3Bhbj4gaXMgYXZhaWxhYmxlYDtcbiAgZmlmdGhSaWNlTGkuaW5uZXJIVE1MID0gYDxzcGFuPkdIUyAzMC4wMDwvc3Bhbj4tQXNzb3J0ZWQgZnJpZWQgcmljZWA7XG4gIHNpeHRoUmljZUxpLmlubmVySFRNTCA9IGA8c3Bhbj5HSFMgMzUuMDA8L3NwYW4+LUFzc29ydGVkIGZyaWVkIHJpY2Ugd2l0aCB0b2FzdCB2ZWdgO1xuXG4gIGZpcnN0U2F0TGkuaW5uZXJIVE1MID0gYDxzcGFuPkdIUyAyMC4wMDwvc3Bhbj4tR3JpbGxlZCB0aWxhcGlhICYgQmFua3VgO1xuICBzZWNvbmRTYXRMaS5pbm5lckhUTUwgPSBgPHNwYW4+R0hTIDI1MC4wMDwvc3Bhbj4tRmFtaWx5IHNpemUgcGFja2FnZSAoZnVsbCBncmlsbGVkIHJhYmJpdCArIGZyaWVkIHJpY2UgKyB0b2FzdCB2ZWcpYDtcbiAgdGhpcmRTYXRMaS5pbm5lckhUTUwgPSBgPHNwYW4+R0hTIDE1MC4wMDwvc3Bhbj4tRnVsbCBncmlsbGVkIHJhYmJpdCBgO1xuICBmb3VydGhTYXRMaS5pbm5lckhUTUwgPSBgPHNwYW4+R0hTIDkwLjAwPC9zcGFuPi1IYWxmIGdyaWxsZWQgcmFiYml0IGA7XG5cbiAgZmlyc3RGcmllc0xpLmlubmVySFRNTCA9IGA8c3Bhbj5HSFMgMzAuMDA8L3NwYW4+LUdyaWxsZWQgcmFiYml0IGFuZCB5YW0gY2hpcHMgYDtcbiAgc2Vjb25kRnJpZXNMaS5pbm5lckhUTUwgPSBgPHNwYW4+R0hTIDIwLjAwPC9zcGFuPi1HcmlsbGVkIGNoaWNrZW4gYW5kIHlhbSBjaGlwc2A7XG4gIGZpcnN0Q2hvcHNMaS5pbm5lckhUTUwgPSBgPHNwYW4+R0hTIDEwLjAwPC9zcGFuPi1SYWJiaXQgS2ViYWJgO1xuICBzZWNvbmRDaG9wc0xpLmlubmVySFRNTCA9IGA8c3Bhbj5HSFMgMTAuMDA8L3NwYW4+LUNoaWNrZW4gS2ViYWJgO1xuXG4gIGZpcnN0RXh0cmFMaS5pbm5lckhUTUwgPSBgPHNwYW4+R0hTIDIwLjAwPC9zcGFuPi1HcmlsbGVkIHJhYmJpdGA7XG4gIHNlY29uZEV4dHJhTGkuaW5uZXJIVE1MID0gYDxzcGFuPkdIUyAxMC4wMDwvc3Bhbj4tR3JpbGxlZCBjaGlja2VuYDtcbiAgdGhpcmRFeHRyYUxpLmlubmVySFRNTCA9IGA8c3Bhbj5HSFMgNS4wMDwvc3Bhbj4tVG9hc3QgVmVnYDtcbiAgZm91cnRoRXhyYUxpLmlubmVySFRNTCA9IGA8c3Bhbj5HSFMgMTIuMDA8L3NwYW4+LUdyaWxsZWQgVGlsYXBpYWA7XG5cbiAgcmljZURpc2hVbC5hcHBlbmRDaGlsZChmaXJzdFJpY2VMaSk7XG4gIHJpY2VEaXNoVWwuYXBwZW5kQ2hpbGQoc2Vjb25kUmljZUxpKTtcbiAgcmljZURpc2hVbC5hcHBlbmRDaGlsZCh0aGlyZFJpY2VMaSk7XG4gIHJpY2VEaXNoVWwuYXBwZW5kQ2hpbGQoZm91cnRoUmljZUxpKTtcbiAgcmljZURpc2hVbC5hcHBlbmRDaGlsZChmaWZ0aFJpY2VMaSk7XG4gIHJpY2VEaXNoVWwuYXBwZW5kQ2hpbGQoc2l4dGhSaWNlTGkpO1xuXG4gIHNwZWNpYWxTYXRNZW51LmFwcGVuZENoaWxkKHNhdFRpdGxlKTtcbiAgc3BlY2lhbFNhdFVsLmFwcGVuZENoaWxkKGZpcnN0U2F0TGkpO1xuICBzcGVjaWFsU2F0VWwuYXBwZW5kQ2hpbGQoc2Vjb25kU2F0TGkpO1xuICBzcGVjaWFsU2F0VWwuYXBwZW5kQ2hpbGQodGhpcmRTYXRMaSk7XG4gIHNwZWNpYWxTYXRVbC5hcHBlbmRDaGlsZChmb3VydGhTYXRMaSk7XG5cbiAgZnJpZXNVbC5hcHBlbmRDaGlsZChmaXJzdEZyaWVzTGkpO1xuICBmcmllc1VsLmFwcGVuZENoaWxkKHNlY29uZEZyaWVzTGkpO1xuICBmcmllc01lbnUuYXBwZW5kQ2hpbGQoZnJpZXNUaXRsZSk7XG4gIGZyaWVzTWVudS5hcHBlbmRDaGlsZChmcmllc1VsKTtcblxuICBzbWFsbENob3BzVWwuYXBwZW5kQ2hpbGQoZmlyc3RDaG9wc0xpKTtcbiAgc21hbGxDaG9wc1VsLmFwcGVuZENoaWxkKHNlY29uZENob3BzTGkpO1xuICBzbWFsbENob3BzTWVudS5hcHBlbmRDaGlsZChzbWFsbENob3BUaXRsZSk7XG4gIHNtYWxsQ2hvcHNNZW51LmFwcGVuZENoaWxkKHNtYWxsQ2hvcHNVbCk7XG5cbiAgZXh0cmFNZW51LmFwcGVuZENoaWxkKGV4dHJhVGl0bGUpO1xuICBleHRyYVVsLmFwcGVuZENoaWxkKGZpcnN0RXh0cmFMaSk7XG4gIGV4dHJhVWwuYXBwZW5kQ2hpbGQoc2Vjb25kRXh0cmFMaSk7XG4gIGV4dHJhVWwuYXBwZW5kQ2hpbGQodGhpcmRFeHRyYUxpKTtcbiAgZXh0cmFVbC5hcHBlbmRDaGlsZChmb3VydGhFeHJhTGkpO1xuXG4gIHJpY2VEaXNoTWVudS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICByaWNlRGlzaE1lbnUuYXBwZW5kQ2hpbGQobWVudVBhcmEpO1xuICByaWNlRGlzaE1lbnUuYXBwZW5kQ2hpbGQocmljZURpc2hVbCk7XG4gIHJpY2VEaXNoTWVudS5hcHBlbmRDaGlsZChyaWNlTGluZSk7XG4gIHNwZWNpYWxTYXRNZW51LmFwcGVuZENoaWxkKHNwZWNpYWxTYXRVbCk7XG4gIHNwZWNpYWxTYXRNZW51LmFwcGVuZENoaWxkKHNwZWNMaW5lKTtcbiAgZnJpZXMuYXBwZW5kQ2hpbGQoZnJpZXNNZW51KTtcbiAgZnJpZXMuYXBwZW5kQ2hpbGQoc21hbGxDaG9wc01lbnUpO1xuICBmcmllcy5hcHBlbmRDaGlsZChmcmllc0xpbmUpO1xuICBleHRyYU1lbnUuYXBwZW5kQ2hpbGQoZXh0cmFVbCk7XG5cbiAgLy8gcmljZURpc2hNZW51LmFwcGVuZENoaWxkKHJpY2VEaXNoTWVudSk7XG5cbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgZmlyc3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJmaXJzdC1zZWN0aW9uXCIpO1xuICB0ZXh0SGVhZGVyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIHRleHRIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRleHRfaGVhZGVyXCIpO1xuICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkX2NvbnRhaW5lclwiKTtcbiAgY2FyZHMuY2xhc3NMaXN0LmFkZChcImNhcmRzXCIpO1xuXG4gIGJvbnVzRGl2LmNsYXNzTGlzdC5hZGQoXCJib251c19kaXZcIik7XG4gIGJvbnVzSW1hZ2UuY2xhc3NMaXN0LmFkZChcImJvbnVzXCIpO1xuXG4gIGNvbnN0IGNoZWYgPSBuZXcgSW1hZ2UoKTtcbiAgY2hlZi5zcmMgPSBDaGVmO1xuXG4gIGNvbnN0IGJhbm55Y3VlTG9nbyA9IG5ldyBJbWFnZSgpO1xuICBiYW5ueWN1ZUxvZ28uc3JjID0gQmFubnljdWVDb2xvcjtcbiAgYmFubnljdWVMb2dvLmNsYXNzTGlzdC5hZGQoXCJiYW5ueS1sb2dvXCIpO1xuXG4gIGNvbnN0IGRlc2lnbiA9IG5ldyBJbWFnZSgpO1xuICBkZXNpZ24uc3JjID0gRGVzaWduO1xuICBkZXNpZ24uY2xhc3NMaXN0LmFkZChcImRlc2lnblwiKTtcblxuICBjb25zdCBwYXVsID0gbmV3IEltYWdlKCk7XG4gIHBhdWwuc3JjID0gUGF1bDtcbiAgcGF1bC5jbGFzc0xpc3QuYWRkKFwicGF1bF9pbWdcIik7XG5cbiAgY29uc3QgbWFya3VzID0gbmV3IEltYWdlKCk7XG4gIG1hcmt1cy5zcmMgPSBNYXJrdXM7XG4gIG1hcmt1cy5jbGFzc0xpc3QuYWRkKFwibWFya3VzX2ltZ1wiKTtcblxuICBmaXJzdFNlY3Rpb24uYXBwZW5kQ2hpbGQodGV4dEhlYWRlcik7XG4gIHRleHRUaXRsZS5hcHBlbmRDaGlsZChiYW5ueWN1ZUxvZ28pO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKHRleHRUaXRsZSk7XG4gIGJvbnVzRGl2LmFwcGVuZENoaWxkKGJvbnVzSW1hZ2UpO1xuXG4gIGNhcmRzLmFwcGVuZENoaWxkKHJpY2VEaXNoTWVudSk7XG4gIGNhcmRzLmFwcGVuZENoaWxkKHNwZWNpYWxTYXRNZW51KTtcbiAgY2FyZHMuYXBwZW5kQ2hpbGQoZnJpZXMpO1xuICBjYXJkcy5hcHBlbmRDaGlsZChleHRyYU1lbnUpO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQoZmlyc3RTZWN0aW9uKTtcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51RGl2KTtcbiAgbWVudS5hcHBlbmRDaGlsZChjYXJkcyk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoYm9udXNEaXYpO1xuXG4gIHJldHVybiBtZW51O1xufTtcblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IGNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50c1wiKTtcbiAgY29udGVudHMudGV4dENvbnRlbnQgPSBcIlwiO1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChtZW51UGFnZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL01lbnVcIjtcblxuY29uc3QgY3JlYXRlTmF2YmFyID0gKCkgPT4ge1xuICAvLyBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICBjb25zdCBoZWFkZXJIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgaGVhZGVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGhlYWRlck5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IGhlYWRlclVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBoZWFkZXJIb21lTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGhlYWRlck1lbnVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgaGVhZGVyQWJvdXRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgaGVhZGVyQ29udGFjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBoZWFkZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgaGVhZGVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGhlYWRlckgxLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIGhlYWRlckgxLnRleHRDb250ZW50ID0gXCJCYW5ueWN1ZVwiO1xuICBoZWFkZXJJbnB1dC5jbGFzc0xpc3QuYWRkKFwibmF2LXRvZ2dsZVwiKTtcbiAgaGVhZGVySW5wdXQuaWQgPSBcIm5hdi10b2dnbGVcIjtcbiAgaGVhZGVySW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuICBoZWFkZXJIb21lTGkuaWQgPSBcImhvbWVfYnRuXCI7XG4gIGhlYWRlckhvbWVMaS50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICBoZWFkZXJIb21lTGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkSG9tZSgpO1xuICB9KTtcblxuICBoZWFkZXJNZW51TGkuaWQgPSBcIm1lbnVfYnRuXCI7XG4gIGhlYWRlck1lbnVMaS50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuICBoZWFkZXJNZW51TGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkTWVudSgpO1xuICB9KTtcblxuICBoZWFkZXJBYm91dExpLmlkID0gXCJhYm91dF9idG5cIjtcbiAgaGVhZGVyQWJvdXRMaS50ZXh0Q29udGVudCA9IFwiQUJPVVQgVVNcIjtcbiAgaGVhZGVyQ29udGFjdExpLmlkID0gXCJjb250YWN0X2J0blwiO1xuICBoZWFkZXJDb250YWN0TGkudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1QgVVNcIjtcblxuICBoZWFkZXJMYWJlbC5jbGFzc0xpc3QuYWRkKFwibmF2LXRvZ2dsZS1sYWJlbFwiKTtcbiAgaGVhZGVyTGFiZWwuaHRtbEZvciA9IFwibmF2LXRvZ2dsZVwiO1xuXG4gIGhlYWRlclVsLmFwcGVuZENoaWxkKGhlYWRlckhvbWVMaSk7XG4gIGhlYWRlclVsLmFwcGVuZENoaWxkKGhlYWRlck1lbnVMaSk7XG4gIGhlYWRlclVsLmFwcGVuZENoaWxkKGhlYWRlckFib3V0TGkpO1xuICBoZWFkZXJVbC5hcHBlbmRDaGlsZChoZWFkZXJDb250YWN0TGkpO1xuICBoZWFkZXJOYXYuYXBwZW5kQ2hpbGQoaGVhZGVyVWwpO1xuXG4gIGhlYWRlckxhYmVsLmFwcGVuZENoaWxkKGhlYWRlclNwYW4pO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJIMSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJJbnB1dCk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJOYXYpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTGFiZWwpO1xuXG4gIHJldHVybiBoZWFkZXI7XG4gIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2YmFyO1xuIiwiY29uc3QgZmFkZWluQW5kTmF2Q2hhbmdlID0gKCkgPT4ge1xuICBjb25zdCBmYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhZGVfaW5cIik7XG4gIGNvbnN0IHNsaWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlX2luXCIpO1xuXG4gIGNvbnN0IGFwcGVhck9wdGlvbnMgPSB7XG4gICAgdGhyZXNob2xkOiAwLFxuICAgIHJvb3RNYXJnaW46IFwiMHB4IDBweCAtMjAwcHggMHB4XCIsXG4gIH07XG5cbiAgY29uc3QgYXBwZWFyT25TY3JvbGwgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKFxuICAgIGVudHJpZXMsXG4gICAgYXBwZWFyT25TY3JvbGxcbiAgKSB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcbiAgICAgICAgYXBwZWFyT25TY3JvbGwudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGFwcGVhck9wdGlvbnMpO1xuXG4gIGZhZGVycy5mb3JFYWNoKChmYWRlcikgPT4ge1xuICAgIGFwcGVhck9uU2Nyb2xsLm9ic2VydmUoZmFkZXIpO1xuICB9KTtcblxuICBzbGlkZXJzLmZvckVhY2goKHNsaWRlcikgPT4ge1xuICAgIGFwcGVhck9uU2Nyb2xsLm9ic2VydmUoc2xpZGVyKTtcbiAgfSk7XG5cbiAgLy8gTmF2QmFyIENoYW5nZVxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICAvLyAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ29cIik7XG4gIGNvbnN0IHNlY3Rpb25PbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0LXNlY3Rpb25cIik7XG5cbiAgY29uc3Qgc2VjdGlvbk9uZU9wdGlvbnMgPSB7XG4gICAgcm9vdE1hcmdpbjogXCItMjAwcHggMHB4IDBweCAwcHhcIixcbiAgfTtcblxuICBjb25zdCBzZWN0aW9uT25lT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKFxuICAgIGVudHJpZXMsXG4gICAgc2VjdGlvbk9uZU9ic2VydmVyXG4gICkge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtc2Nyb2xsZWRcIik7XG4gICAgICAgIC8vIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ28tc2Nyb2xsZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1zY3JvbGxlZFwiKTtcbiAgICAgICAgLy8gbG9nby5jbGFzc0xpc3QucmVtb3ZlKFwibG9nby1zY3JvbGxlZFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgc2VjdGlvbk9uZU9wdGlvbnMpO1xuXG4gIHNlY3Rpb25PbmVPYnNlcnZlci5vYnNlcnZlKHNlY3Rpb25PbmUpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZhZGVpbkFuZE5hdkNoYW5nZTtcbiIsImltcG9ydCBNYXJlayBmcm9tIFwiLi9JbWFnZXMvbWFyZWsuanBnXCI7XG5pbXBvcnQgTWFya3VzIGZyb20gXCIuL0ltYWdlcy9tYXJrdXMuanBnXCI7XG5pbXBvcnQgUGF1bCBmcm9tIFwiLi9JbWFnZXMvcGF1bC5qcGdcIjtcbmltcG9ydCBIb3AgZnJvbSBcIi4vSW1hZ2VzL2hvcC5zdmdcIjtcbmltcG9ydCBTdGFuZCBmcm9tIFwiLi9JbWFnZXMvc3RhbmQuc3ZnXCI7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gKCkgPT4ge1xuICAvLyBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgY29uc3QgY29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmaXJzdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0ZXh0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gIGZpcnN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZmlyc3Qtc2VjdGlvblwiKTtcbiAgY29udGVudHMuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRzXCIpO1xuICB0ZXh0SGVhZGVyLnRleHRDb250ZW50ID0gXCJXZWxjb21lIFRvIEJhbm55Y3VlXCI7XG4gIHRleHRIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRleHRfaGVhZGVyXCIpO1xuXG4gIGZpcnN0U2VjdGlvbi5hcHBlbmRDaGlsZCh0ZXh0SGVhZGVyKTtcbiAgY29udGVudHMuYXBwZW5kQ2hpbGQoZmlyc3RTZWN0aW9uKTtcbiAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRzKTtcblxuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5zcmMgPSBNYXJlaztcblxuICBjb25zdCBwYXVsID0gbmV3IEltYWdlKCk7XG4gIHBhdWwuc3JjID0gUGF1bDtcbiAgcGF1bC5jbGFzc0xpc3QuYWRkKFwicGF1bF9pbWdcIik7XG5cbiAgY29uc3QgbWFya3VzID0gbmV3IEltYWdlKCk7XG4gIG1hcmt1cy5zcmMgPSBNYXJrdXM7XG4gIG1hcmt1cy5jbGFzc0xpc3QuYWRkKFwibWFya3VzX2ltZ1wiKTtcblxuICBjb25zdCBob3AgPSBuZXcgSW1hZ2UoKTtcbiAgaG9wLnNyYyA9IEhvcDtcblxuICBjb25zdCBzdGFuZCA9IG5ldyBJbWFnZSgpO1xuICBzdGFuZC5zcmMgPSBTdGFuZDtcblxuICBjb25zdCBzZWNvbmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2Vjb25kU2VjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNlY29uZFNlY3Rpb25IMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3Qgc2Vjb25kU2VjdGlvblBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb25zdCB0aGlyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmcm9tTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZyb21SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZyb21SaWdodFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgc3ZnRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCB0aGlyZFNlY3Rpb25DbG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZyb21SaWdodENsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZnJvbUxlZnRDbG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZyb21MZWZ0UGFyYUNsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHN2Z0RpdkNsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBzZWNvbmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtc2VjdGlvblwiKTtcbiAgc2Vjb25kU2VjdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgc2Vjb25kU2VjdGlvblBhcmEuY2xhc3NMaXN0LmFkZChcImZhZGVfaW5cIik7XG5cbiAgdGhpcmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0aGlyZC1zZWN0aW9uXCIpO1xuICBmcm9tTGVmdC5jbGFzc0xpc3QuYWRkKFwiZnJvbV9sZWZ0XCIpO1xuICBmcm9tTGVmdC5jbGFzc0xpc3QuYWRkKFwic2xpZGVfaW5cIik7XG4gIGZyb21SaWdodC5jbGFzc0xpc3QuYWRkKFwiZnJvbV9yaWdodFwiKTtcbiAgZnJvbVJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJzbGlkZV9pblwiKTtcbiAgc3ZnRGl2LmNsYXNzTGlzdC5hZGQoXCJzdmdcIik7XG5cbiAgdGhpcmRTZWN0aW9uQ2xvbmUuY2xhc3NMaXN0LmFkZChcInRoaXJkLXNlY3Rpb25cIik7XG4gIGZyb21SaWdodENsb25lLmNsYXNzTGlzdC5hZGQoXCJmcm9tLXJpZ2h0XCIpO1xuICBmcm9tUmlnaHRDbG9uZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVfaW5cIik7XG4gIGZyb21MZWZ0Q2xvbmUuY2xhc3NMaXN0LmFkZChcImZyb20tbGVmdFwiKTtcbiAgZnJvbUxlZnRDbG9uZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVfaW5cIik7XG4gIHN2Z0RpdkNsb25lLmNsYXNzTGlzdC5hZGQoXCJzdmdcIik7XG5cbiAgc2Vjb25kU2VjdGlvbkgxLnRleHRDb250ZW50ID0gXCJSYWJiaXQgMTAxXCI7XG4gIHNlY29uZFNlY3Rpb25QYXJhLnRleHRDb250ZW50ID1cbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5hbSwgaXVzdG8hIElzdGUgZXJyb3IgYXQgaWQgZXhwbGljYWJvIGNvbnNlcXVhdHVyIGN1bHBhIHRvdGFtIGRvbG9yIG9iY2FlY2F0aSBhZGlwaXNjaSB2b2x1cHRhdGVzLiBRdWkgYWxpcXVhbSwgYWNjdXNhbXVzIGV4cGxpY2FibyBub3N0cnVtIG9wdGlvIHJlcHJlaGVuZGVyaXQgcXVhc2kgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlaWNpZW5kaXMgc2l0IGltcGVkaXQsIGR1Y2ltdXMgbGliZXJvIHF1aXNxdWFtIGhpYyBpdXJlIG51bGxhIG5lcXVlLiBJbnZlbnRvcmUgcGxhY2VhdCBuYXR1cyBpbmNpZHVudCBtaW5pbWEgaXRhcXVlIHJlcGVsbGVuZHVzIG5vc3RydW0sIGN1cGlkaXRhdGUgcXVvcyBzZWQgZmFjZXJlISBMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVpIGF0cXVlIGNvbnNlcXV1bnR1ciBxdWFzIG5hdHVzIGV4IGV4Y2VwdHVyaSBjdWxwYSBudW1xdWFtIG1vbGVzdGlhcyBhbGlxdWFtLCBkaXN0aW5jdGlvIHZlbCB2ZW5pYW0gdmVyaXRhdGlzIGlwc2FtIHJhdGlvbmUgcXVpc3F1YW0gcXVpYnVzZGFtLiBEZXNlcnVudCwgZG9sb3J1bSBhdXQuXCI7XG4gIGZyb21SaWdodFBhcmEudGV4dENvbnRlbnQgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTnVsbGEgZWFydW0gZnVnaXQgZWEgbW9sZXN0aWFlIHBlcnNwaWNpYXRpcywgdm9sdXB0YXRlcyBkZWxlbml0aSBtYWlvcmVzLCBzdW50IGFsaXF1aWQgcGVyZmVyZW5kaXMgYXRxdWUgb2ZmaWNpYSBkb2xvcmUuIERvbG9yZW0gaW5jaWR1bnQgdGVtcG9yYSB0ZW5ldHVyIHNpdCBpZCBuYW0hIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFuaW1pLCBsYWJvcnVtIHRvdGFtIHF1aWJ1c2RhbSBxdW9zIHZlcm8gcXVpYSBpbmNpZHVudC4gSXN0ZSBpbnZlbnRvcmUgZGViaXRpcywgcG9zc2ltdXMsIGNvbnNlY3RldHVyIGFyY2hpdGVjdG8gcXVpYSBtb2xlc3RpYXMgZW9zIGRvbG9yLCBtb2xsaXRpYSBudWxsYSBuaXNpLiBQZXJzcGljaWF0aXM/XCI7XG4gIGZyb21MZWZ0UGFyYUNsb25lLnRleHRDb250ZW50ID1cbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE51bGxhIGVhcnVtIGZ1Z2l0IGVhIG1vbGVzdGlhZSBwZXJzcGljaWF0aXMsIHZvbHVwdGF0ZXMgZGVsZW5pdGkgbWFpb3Jlcywgc3VudCBhbGlxdWlkIHBlcmZlcmVuZGlzIGF0cXVlIG9mZmljaWEgZG9sb3JlLiBEb2xvcmVtIGluY2lkdW50IHRlbXBvcmEgdGVuZXR1ciBzaXQgaWQgbmFtISBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbmltaSwgbGFib3J1bSB0b3RhbSBxdWlidXNkYW0gcXVvcyB2ZXJvIHF1aWEgaW5jaWR1bnQuIElzdGUgaW52ZW50b3JlIGRlYml0aXMsIHBvc3NpbXVzLCBjb25zZWN0ZXR1ciBhcmNoaXRlY3RvIHF1aWEgbW9sZXN0aWFzIGVvcyBkb2xvciwgbW9sbGl0aWEgbnVsbGEgbmlzaS4gUGVyc3BpY2lhdGlzP1wiO1xuXG4gIHNlY29uZFNlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoc2Vjb25kU2VjdGlvbkgxKTtcbiAgc2Vjb25kU2VjdGlvbkRpdi5hcHBlbmRDaGlsZChzZWNvbmRTZWN0aW9uUGFyYSk7XG5cbiAgc3ZnRGl2LmFwcGVuZENoaWxkKHN0YW5kKTtcbiAgZnJvbVJpZ2h0LmFwcGVuZENoaWxkKGZyb21SaWdodFBhcmEpO1xuICBmcm9tUmlnaHQuYXBwZW5kQ2hpbGQoc3ZnRGl2KTtcbiAgdGhpcmRTZWN0aW9uLmFwcGVuZENoaWxkKGZyb21MZWZ0KTtcbiAgdGhpcmRTZWN0aW9uLmFwcGVuZENoaWxkKGZyb21SaWdodCk7XG5cbiAgdGhpcmRTZWN0aW9uQ2xvbmUuYXBwZW5kQ2hpbGQoZnJvbVJpZ2h0Q2xvbmUpO1xuICB0aGlyZFNlY3Rpb25DbG9uZS5hcHBlbmRDaGlsZChmcm9tTGVmdENsb25lKTtcblxuICBzdmdEaXZDbG9uZS5hcHBlbmRDaGlsZChob3ApO1xuICBmcm9tTGVmdENsb25lLmFwcGVuZENoaWxkKGZyb21MZWZ0UGFyYUNsb25lKTtcbiAgZnJvbUxlZnRDbG9uZS5hcHBlbmRDaGlsZChzdmdEaXZDbG9uZSk7XG5cbiAgc2Vjb25kU2VjdGlvbi5hcHBlbmRDaGlsZChzZWNvbmRTZWN0aW9uRGl2KTtcbiAgY29udGVudHMuYXBwZW5kQ2hpbGQoc2Vjb25kU2VjdGlvbik7XG4gIGNvbnRlbnRzLmFwcGVuZENoaWxkKHRoaXJkU2VjdGlvbik7XG4gIGNvbnRlbnRzLmFwcGVuZENoaWxkKHRoaXJkU2VjdGlvbkNsb25lKTtcblxuICAvLyBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudHMpO1xuXG4gIHJldHVybiBjb250ZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5Db250ZW50O1xuIiwiaW1wb3J0IG1haW5Db250ZW50IGZyb20gXCIuL21haW5Db250ZW50XCI7XG5pbXBvcnQgY3JlYXRlTmF2YmFyIGZyb20gXCIuL0NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgZmFkZWluQW5kTmF2Q2hhbmdlIGZyb20gXCIuL2ZhZGVpbkFuZE5hdkNoYW5nZVwiO1xuXG5mdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdmJhcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db250ZW50KCkpO1xuICBmYWRlaW5BbmROYXZDaGFuZ2UoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSBcIi4vcGFnZUxvYWRcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5wYWdlTG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9