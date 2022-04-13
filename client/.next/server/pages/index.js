"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/api/build-client.js

/* harmony default export */ const build_client = (({ req  })=>{
    if (true) {
        // We are on the server
        return external_axios_default().create({
            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
            headers: req.headers
        });
    } else {}
});

;// CONCATENATED MODULE: ./src/pages/index.js


const LandingPage = ({ currentUser  })=>{
    console.log(currentUser);
    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        children: "Landing Page"
    });
};
LandingPage.getInitialProps = async (context)=>{
    const client = build_client(context);
    const { data  } = await client.get('/api/users/currentuser');
    return data;
};
/* harmony default export */ const pages = (LandingPage);


/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(201));
module.exports = __webpack_exports__;

})();