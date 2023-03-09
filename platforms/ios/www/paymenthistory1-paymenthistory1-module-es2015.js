(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paymenthistory1-paymenthistory1-module"],{

/***/ "+vEZ":
/*!***********************************************************!*\
  !*** ./src/app/paymenthistory1/paymenthistory1.module.ts ***!
  \***********************************************************/
/*! exports provided: Paymenthistory1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paymenthistory1PageModule", function() { return Paymenthistory1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _paymenthistory1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymenthistory1-routing.module */ "L/ab");
/* harmony import */ var _paymenthistory1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paymenthistory1.page */ "TC9Q");







let Paymenthistory1PageModule = class Paymenthistory1PageModule {
};
Paymenthistory1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _paymenthistory1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Paymenthistory1PageRoutingModule"]
        ],
        declarations: [_paymenthistory1_page__WEBPACK_IMPORTED_MODULE_6__["Paymenthistory1Page"]]
    })
], Paymenthistory1PageModule);



/***/ }),

/***/ "0LaC":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paymenthistory1/paymenthistory1.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t<ion-toolbar class=\"headBgGlobal\">\n\t    <ion-buttons slot=\"start\" class=\"backbtn\">\n\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t  </ion-buttons>\n\t  <ion-title class=\"ctitle\">Payment</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"wrapper\">\n\t\t<div class=\"main\">\n\t\t\t<table>\n\t\t  <tr>\n\t\t    <th>Serial No.</th>\n\t\t    <th>Date</th>\n\t\t    <th>Amount</th>\n\t\t    <th>Status</th>\n\t\t  </tr>\n\t\t  <tr>\n\t\t    <td>31256189</td>\n\t\t    <td>21-07-2021</td>\n\t\t    <td>$326</td>\n\t\t    <td style=\"color:#04948B\">Approved</td>\n\t\t  </tr>\n\t\t  <tr>\n\t\t    <td>31256189</td>\n\t\t    <td>21-07-2021</td>\n\t\t    <td>$326</td>\n\t\t    <td style=\"color:#FE9805\">Pending</td>\n\t\t  </tr>\n\t\t   <tr>\n\t\t    <td>31256189</td>\n\t\t    <td>21-07-2021</td>\n\t\t    <td>$326</td>\n\t\t    <td style=\"color:#04948B\">Approved</td>\n\t\t  </tr>\n\t\t   <tr>\n\t\t    <td>31256189</td>\n\t\t    <td>21-07-2021</td>\n\t\t    <td>$326</td>\n\t\t    <td style=\"color:#FE9805\">Pending</td>\n\t\t  </tr>\n\t\t  <tr>\n\t\t    <td>31256189</td>\n\t\t    <td>21-07-2021</td>\n\t\t    <td>$326</td>\n\t\t    <td style=\"color:#04948B\">Approved</td>\n\t\t  </tr>\n\t\t  <tr>\n\t\t    <td>31256189</td>\n\t\t    <td>21-07-2021</td>\n\t\t    <td>$326</td>\n\t\t    <td style=\"color:#FE9805\">Pending</td>\n\t\t  </tr>\n\t\t  <tr>\n\t\t    <td>31256189</td>\n\t\t    <td>21-07-2021</td>\n\t\t    <td>$326</td>\n\t\t    <td style=\"color:#04948B\">Approved</td>\n\t\t  </tr>\n\t\t  <tr>\n\t\t    <td>31256189</td>\n\t\t    <td>21-07-2021</td>\n\t\t    <td>$326</td>\n\t\t    <td style=\"color:#FE9805\">Pending</td>\n\t\t  </tr>\n\t\t</table>\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "L/ab":
/*!*******************************************************************!*\
  !*** ./src/app/paymenthistory1/paymenthistory1-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: Paymenthistory1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paymenthistory1PageRoutingModule", function() { return Paymenthistory1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _paymenthistory1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paymenthistory1.page */ "TC9Q");




const routes = [
    {
        path: '',
        component: _paymenthistory1_page__WEBPACK_IMPORTED_MODULE_3__["Paymenthistory1Page"]
    }
];
let Paymenthistory1PageRoutingModule = class Paymenthistory1PageRoutingModule {
};
Paymenthistory1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Paymenthistory1PageRoutingModule);



/***/ }),

/***/ "TC9Q":
/*!*********************************************************!*\
  !*** ./src/app/paymenthistory1/paymenthistory1.page.ts ***!
  \*********************************************************/
/*! exports provided: Paymenthistory1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paymenthistory1Page", function() { return Paymenthistory1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_paymenthistory1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./paymenthistory1.page.html */ "0LaC");
/* harmony import */ var _paymenthistory1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paymenthistory1.page.scss */ "pm4C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let Paymenthistory1Page = class Paymenthistory1Page {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.navigateBack('/earning');
    }
};
Paymenthistory1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
Paymenthistory1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-paymenthistory1',
        template: _raw_loader_paymenthistory1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_paymenthistory1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Paymenthistory1Page);



/***/ }),

/***/ "pm4C":
/*!***********************************************************!*\
  !*** ./src/app/paymenthistory1/paymenthistory1.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 5%;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 0% auto;\n}\n\n.main {\n  background: #fff;\n  /*box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;*/\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 10px;\n  border-radius: 14px;\n  margin-top: 5%;\n  padding: 5% 2%;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth {\n  padding: 8px;\n  font-size: 15px;\n  text-align: center;\n}\n\ntd {\n  padding: 10px 8px;\n  font-size: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BheW1lbnRoaXN0b3J5MS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUFBO0VBQ0MsZUFBQTtBQUdEOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQURBO0VBQ0Msa0JBQUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLHFCQUFBO0FBS0Y7O0FBSEE7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQU1EOztBQUpBO0VBQ0MsZ0JBQUE7RUFDQSxnREFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQU9EOztBQUpBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBT0Y7O0FBSkE7RUFDQyxZQUFBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0FBT0Y7O0FBTEE7RUFFRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQU9GIiwiZmlsZSI6InBheW1lbnRoaXN0b3J5MS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuLmJhY2tidG57XHJcblx0bWFyZ2luLWxlZnQ6NSU7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6OTAlO1xyXG5cdG1hcmdpbjowJSBhdXRvO1xyXG59XHJcbi5tYWlue1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Lypib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDsqL1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDJweCAxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcblx0cGFkZGluZzogNSUgMiU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aHtcclxuXHRwYWRkaW5nOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG50ZHtcclxuXHJcbiAgcGFkZGluZzogMTBweCA4cHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=paymenthistory1-paymenthistory1-module-es2015.js.map