(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paymenthistory-paymenthistory-module"],{

/***/ "23ql":
/*!*******************************************************!*\
  !*** ./src/app/paymenthistory/paymenthistory.page.ts ***!
  \*******************************************************/
/*! exports provided: PaymenthistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymenthistoryPage", function() { return PaymenthistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_paymenthistory_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./paymenthistory.page.html */ "YOzA");
/* harmony import */ var _paymenthistory_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paymenthistory.page.scss */ "JW6Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






let PaymenthistoryPage = class PaymenthistoryPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.time = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('00:00');
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.navigateBack('/payment');
    }
};
PaymenthistoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
PaymenthistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-paymenthistory',
        template: _raw_loader_paymenthistory_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_paymenthistory_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaymenthistoryPage);



/***/ }),

/***/ "EDAp":
/*!*********************************************************!*\
  !*** ./src/app/paymenthistory/paymenthistory.module.ts ***!
  \*********************************************************/
/*! exports provided: PaymenthistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymenthistoryPageModule", function() { return PaymenthistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _paymenthistory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymenthistory-routing.module */ "pvOg");
/* harmony import */ var _paymenthistory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paymenthistory.page */ "23ql");







let PaymenthistoryPageModule = class PaymenthistoryPageModule {
};
PaymenthistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _paymenthistory_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymenthistoryPageRoutingModule"]
        ],
        declarations: [_paymenthistory_page__WEBPACK_IMPORTED_MODULE_6__["PaymenthistoryPage"]]
    })
], PaymenthistoryPageModule);



/***/ }),

/***/ "JW6Q":
/*!*********************************************************!*\
  !*** ./src/app/paymenthistory/paymenthistory.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 5%;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.card {\n  background: #FE9805;\n  width: 80%;\n  margin: 5% auto;\n  border-radius: 20px;\n  text-align: center;\n}\n\n.inner {\n  padding: 10% 0%;\n}\n\n.text1 {\n  font-size: 34px;\n  color: #fff;\n}\n\n.text2 {\n  font-size: 43px;\n  color: #fff;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 0% auto;\n}\n\n.main {\n  background: #fff;\n  /*box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;*/\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 10px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.inner1 {\n  padding: 3%;\n  display: flex;\n}\n\n.imgdiv img {\n  border-radius: 50%;\n  width: 44px;\n  height: 44px;\n}\n\n.textdiv {\n  margin-left: 4%;\n  margin-top: 1%;\n  width: 30%;\n}\n\n.text {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000000;\n}\n\n.para {\n  font-size: 10px;\n  font-weight: 400;\n  color: #000000;\n  margin-top: 6%;\n}\n\n.right {\n  margin-left: 30%;\n}\n\n.date {\n  font-size: 10px;\n  color: #CFCFCF;\n}\n\n.time {\n  font-size: 18px;\n  font-weight: 400;\n  margin-top: 4%;\n  margin-left: 5%;\n  color: #FE9805;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBheW1lbnRoaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDQyxXQUFBO0FBRUQ7O0FBQUE7RUFDQyxlQUFBO0FBR0Q7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBREE7RUFDQyxrQkFBQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UscUJBQUE7QUFLRjs7QUFIQTtFQUNDLG1CQUFBO0VBQ0MsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTUY7O0FBSkE7RUFDQyxlQUFBO0FBT0Q7O0FBTEE7RUFDQyxlQUFBO0VBQ0MsV0FBQTtBQVFGOztBQU5BO0VBQ0MsZUFBQTtFQUNDLFdBQUE7RUFDQSxpQkFBQTtBQVNGOztBQVBBO0VBQ0MsVUFBQTtFQUNBLGVBQUE7QUFVRDs7QUFSQTtFQUNDLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVdEOztBQVRBO0VBQ0MsV0FBQTtFQUNBLGFBQUE7QUFZRDs7QUFWQTtFQUNDLGtCQUFBO0VBQ0csV0FBQTtFQUNBLFlBQUE7QUFhSjs7QUFYQTtFQUNDLGVBQUE7RUFDRyxjQUFBO0VBQ0EsVUFBQTtBQWNKOztBQVpBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWVEOztBQWJBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFnQkQ7O0FBWkE7RUFDRSxnQkFBQTtBQWVGOztBQWJBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7QUFnQkQ7O0FBZEE7RUFDQyxlQUFBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFpQkYiLCJmaWxlIjoicGF5bWVudGhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcbi5iYWNrYnRue1xyXG5cdG1hcmdpbi1sZWZ0OjUlO1xyXG59XHJcbi5iYWNrU3ZnIHtcclxuICBmaWxsOiAjMzMzO1xyXG59XHJcblxyXG4uY3RpdGxle1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbi5jYXJke1xyXG5cdGJhY2tncm91bmQ6ICNGRTk4MDU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmlubmVye1xyXG5cdHBhZGRpbmc6IDEwJSAwJTtcclxufVxyXG4udGV4dDF7XHJcblx0Zm9udC1zaXplOiAzNHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi50ZXh0MntcclxuXHRmb250LXNpemU6IDQzcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6OTAlO1xyXG5cdG1hcmdpbjowJSBhdXRvO1xyXG59XHJcbi5tYWlue1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Lypib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDsqL1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDJweCAxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmlubmVyMXtcclxuXHRwYWRkaW5nOiAzJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5pbWdkaXYgaW1ne1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG59XHJcbi50ZXh0ZGl2e1xyXG5cdG1hcmdpbi1sZWZ0OiA0JTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG4udGV4dHtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG59XHJcbi5wYXJhe1xyXG5cdGZvbnQtc2l6ZTogMTBweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcblx0bWFyZ2luLXRvcDogNiU7XHJcblxyXG59XHJcblxyXG4ucmlnaHR7XHJcblx0IG1hcmdpbi1sZWZ0OiAzMCU7XHJcbn1cclxuLmRhdGV7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdGNvbG9yOiNDRkNGQ0Y7XHJcbn1cclxuLnRpbWV7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIGNvbG9yOiAjRkU5ODA1O1xyXG59Il19 */");

/***/ }),

/***/ "YOzA":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paymenthistory/paymenthistory.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t<ion-toolbar class=\"headBgGlobal\">\r\n\t    <ion-buttons slot=\"start\" class=\"backbtn\">\r\n\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t  </ion-buttons>\r\n\t  <ion-title class=\"ctitle\">Payment</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\t<div class=\"card\">\r\n\t\t<div class=\"inner\">\r\n\t\t\t<div class=\"text1\">Total Paid</div>\r\n\t\t\t<div class=\"text2\">$10,000</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<h6 style=\"font-size: 14px;margin-left: 4%;\">October, 2021</h6>\r\n\r\n\t<div class=\"wrapper\">\r\n\t\t<div class=\"main\">\r\n\t\t\t<h1>{{ time | async }}</h1>\r\n\r\n\t\t\t<ion-button (click)=\"starttimer(300)\"> start</ion-button>\r\n\t\t\t<div class=\"inner1\">\r\n\t\t\t\t<div class=\"imgdiv\">\r\n\t\t\t\t\t<img src=\"assets/imgs/chat.png\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"textdiv\">\r\n\t\t\t\t\t<div class=\"text\">Justin Ortiz</div>\r\n\t\t\t\t\t<div class=\"para\">$10/hr</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t<div class=\"date\">01 Oct, 2021</div>\r\n\t\t\t\t\t<div class=\"time\">$269</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"main\">\r\n\t\t\t<div class=\"inner1\">\r\n\t\t\t\t<div class=\"imgdiv\">\r\n\t\t\t\t\t<img src=\"assets/imgs/chat.png\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"textdiv\">\r\n\t\t\t\t\t<div class=\"text\">Justin Ortiz</div>\r\n\t\t\t\t\t<div class=\"para\">$10/hr</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t<div class=\"date\">01 Oct, 2021</div>\r\n\t\t\t\t\t<div class=\"time\">$269</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "pvOg":
/*!*****************************************************************!*\
  !*** ./src/app/paymenthistory/paymenthistory-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PaymenthistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymenthistoryPageRoutingModule", function() { return PaymenthistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _paymenthistory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paymenthistory.page */ "23ql");




const routes = [
    {
        path: '',
        component: _paymenthistory_page__WEBPACK_IMPORTED_MODULE_3__["PaymenthistoryPage"]
    }
];
let PaymenthistoryPageRoutingModule = class PaymenthistoryPageRoutingModule {
};
PaymenthistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymenthistoryPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=paymenthistory-paymenthistory-module-es2015.js.map