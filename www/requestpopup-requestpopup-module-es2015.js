(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["requestpopup-requestpopup-module"],{

/***/ "6Kx3":
/*!*****************************************************!*\
  !*** ./src/app/requestpopup/requestpopup.module.ts ***!
  \*****************************************************/
/*! exports provided: RequestpopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestpopupPageModule", function() { return RequestpopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _requestpopup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requestpopup-routing.module */ "di2t");
/* harmony import */ var _requestpopup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requestpopup.page */ "Moub");







let RequestpopupPageModule = class RequestpopupPageModule {
};
RequestpopupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _requestpopup_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestpopupPageRoutingModule"]
        ],
        declarations: [_requestpopup_page__WEBPACK_IMPORTED_MODULE_6__["RequestpopupPage"]]
    })
], RequestpopupPageModule);



/***/ }),

/***/ "di2t":
/*!*************************************************************!*\
  !*** ./src/app/requestpopup/requestpopup-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RequestpopupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestpopupPageRoutingModule", function() { return RequestpopupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _requestpopup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requestpopup.page */ "Moub");




const routes = [
    {
        path: '',
        component: _requestpopup_page__WEBPACK_IMPORTED_MODULE_3__["RequestpopupPage"]
    }
];
let RequestpopupPageRoutingModule = class RequestpopupPageRoutingModule {
};
RequestpopupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RequestpopupPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=requestpopup-requestpopup-module-es2015.js.map