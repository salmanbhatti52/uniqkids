(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paymentdetail-paymentdetail-module"],{

/***/ "+dxq":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paymentdetail/paymentdetail.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>paymentdetail</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "B+1X":
/*!*******************************************************!*\
  !*** ./src/app/paymentdetail/paymentdetail.module.ts ***!
  \*******************************************************/
/*! exports provided: PaymentdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentdetailPageModule", function() { return PaymentdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _paymentdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymentdetail-routing.module */ "sDLx");
/* harmony import */ var _paymentdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paymentdetail.page */ "PRmZ");







let PaymentdetailPageModule = class PaymentdetailPageModule {
};
PaymentdetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _paymentdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentdetailPageRoutingModule"]
        ],
        declarations: [_paymentdetail_page__WEBPACK_IMPORTED_MODULE_6__["PaymentdetailPage"]]
    })
], PaymentdetailPageModule);



/***/ }),

/***/ "PRmZ":
/*!*****************************************************!*\
  !*** ./src/app/paymentdetail/paymentdetail.page.ts ***!
  \*****************************************************/
/*! exports provided: PaymentdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentdetailPage", function() { return PaymentdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_paymentdetail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./paymentdetail.page.html */ "+dxq");
/* harmony import */ var _paymentdetail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paymentdetail.page.scss */ "TsQS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PaymentdetailPage = class PaymentdetailPage {
    constructor() { }
    ngOnInit() {
    }
};
PaymentdetailPage.ctorParameters = () => [];
PaymentdetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-paymentdetail',
        template: _raw_loader_paymentdetail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_paymentdetail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaymentdetailPage);



/***/ }),

/***/ "TsQS":
/*!*******************************************************!*\
  !*** ./src/app/paymentdetail/paymentdetail.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50ZGV0YWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "sDLx":
/*!***************************************************************!*\
  !*** ./src/app/paymentdetail/paymentdetail-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PaymentdetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentdetailPageRoutingModule", function() { return PaymentdetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _paymentdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paymentdetail.page */ "PRmZ");




const routes = [
    {
        path: '',
        component: _paymentdetail_page__WEBPACK_IMPORTED_MODULE_3__["PaymentdetailPage"]
    }
];
let PaymentdetailPageRoutingModule = class PaymentdetailPageRoutingModule {
};
PaymentdetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentdetailPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=paymentdetail-paymentdetail-module-es2015.js.map