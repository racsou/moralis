"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 146:
/***/ ((module) => {

module.exports = require("@moralisweb3/next");

/***/ }),

/***/ 550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
// EXTERNAL MODULE: external "@moralisweb3/next"
var next_ = __webpack_require__(146);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].ts


/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    providers: [
        (0,next_.MoralisNextAuthProvider)()
    ],
    // adding user info to the user session object
    callbacks: {
        async jwt ({ token , user  }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session ({ session , token  }) {
            session.user = token.user;
            return session;
        }
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(550));
module.exports = __webpack_exports__;

})();