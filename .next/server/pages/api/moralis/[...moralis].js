"use strict";
(() => {
var exports = {};
exports.id = 128;
exports.ids = [128];
exports.modules = {

/***/ 146:
/***/ ((module) => {

module.exports = require("@moralisweb3/next");

/***/ }),

/***/ 974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _moralisweb3_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _moralisweb3_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_next__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_moralisweb3_next__WEBPACK_IMPORTED_MODULE_0__.MoralisNextApi)({
    apiKey: process.env.MORALIS_API_KEY,
    authentication: {
        domain: "amazing.dapp",
        uri: process.env.NEXTAUTH_URL,
        timeout: 120
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(974));
module.exports = __webpack_exports__;

})();