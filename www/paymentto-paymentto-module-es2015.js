(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paymentto-paymentto-module"],{

/***/ "8gnd":
/*!***********************************************!*\
  !*** ./src/app/paymentto/paymentto.module.ts ***!
  \***********************************************/
/*! exports provided: PaymenttoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymenttoPageModule", function() { return PaymenttoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _paymentto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymentto-routing.module */ "AST7");
/* harmony import */ var _paymentto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paymentto.page */ "iFGd");







let PaymenttoPageModule = class PaymenttoPageModule {
};
PaymenttoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _paymentto_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymenttoPageRoutingModule"]
        ],
        declarations: [_paymentto_page__WEBPACK_IMPORTED_MODULE_6__["PaymenttoPage"]]
    })
], PaymenttoPageModule);



/***/ }),

/***/ "AST7":
/*!*******************************************************!*\
  !*** ./src/app/paymentto/paymentto-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PaymenttoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymenttoPageRoutingModule", function() { return PaymenttoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _paymentto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paymentto.page */ "iFGd");




const routes = [
    {
        path: '',
        component: _paymentto_page__WEBPACK_IMPORTED_MODULE_3__["PaymenttoPage"]
    }
];
let PaymenttoPageRoutingModule = class PaymenttoPageRoutingModule {
};
PaymenttoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymenttoPageRoutingModule);



/***/ }),

/***/ "Bn+c":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paymentto/paymentto.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t  <ion-toolbar class=\"headBgGlobal\">\n      <ion-row>\n        <ion-col style=\"padding-top:6px;\" size=\"2\">\n          <div>\n            <ion-menu-button class=\"menuicon\"></ion-menu-button>\n          </div>\n        </ion-col>\n  \n        <ion-col class=\"titleclass\" size=\"8\">\n          <ion-text class=\"ctitle\">Payment</ion-text>\n        </ion-col>\n  \n        <ion-col size=\"2\">\n  \n        </ion-col>\n      </ion-row>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\t\t<p style=\"text-align: center;font-size: 15px;font-weight: 600;\">All your payments organized at one place.</p>\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"assets/imgs/paylogo.svg\">\n\t\t</div>\n\n\t\t<ion-segment\n      id=\"segment\"\n      mode=\"ios\"\n      (ionChange)=\"segmentChanged($event)\"\n      #mySegment>\n      <ion-segment-button checked mode=\"ios\" value=\"pending\">\n        <ion-label>Pending</ion-label>\n      </ion-segment-button>\n      <ion-segment-button mode=\"ios\" value=\"completed\">\n        <ion-label>Completed</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n\t\t<!-- <div class=\"main\">\n\t\t\t<div class=\"inner\">\n\t\t\t\t<div class=\"imgdiv\">\n\t\t\t\t\t<img src=\"assets/imgs/chat.png\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"textdiv\">\n\t\t\t\t\t<div class=\"text\">Justin Ortiz, $10/hr</div>\n\t\t\t\t\t<div class=\"para\">$56</div>\n\t\t\t\t</div>\n\t\t\t\t<ion-button class=\"btn1\">Make Payment</ion-button>\n\t\t\t</div>\n\t\t</div> -->\n\t\t<div *ngIf=\"paymentType=='pending'\">\n      <div *ngIf=\"textdetail==false\" style=\"margin-top:10%;text-align: center;\">\n        <div class=\"defaulttext\">Clear pending payments today to get back on track!  </div>\n      </div>\n\t\t\t<div *ngFor=\"let pay of paymentarray\">\n\t\t\t\t<!-- <div *ngIf=\"pay.status=='Active'\"> -->\n\t\t\t\t\t<div class=\"date\">{{pay.date}}</div>\n\t\t\t\t\t<div class=\"main2\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"inner1\">\n\t\t\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t\t\t<div class=\"imgdiv1\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{pay.profile}}\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"textdiv1\">\n\t\t\t\t\t\t\t\t\t<div class=\"text1\">{{pay.fname}} {{pay.lname}}, ${{pay.hourrate}}/hr</div>\n\t\t\t\t\t\t\t\t\t<div class=\"para1\">${{pay.totalamount}}/hr</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t\t\t<ion-button class=\"btn1\" (click)=\" presentModal(pay)\">Make Payment</ion-button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\t\t\n\t\t\t\t<!-- </div> -->\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\n\t\t<div *ngIf=\"paymentType=='completed'\">\n      <div *ngIf=\"textdetail2==false\" style=\"margin-top:10%;text-align: center;\">\n        <div class=\"defaulttext\">Any payments that you have completed through UniqKidz will appear here.  </div>\n      </div>\n\t\t\t<div  *ngFor=\"let pay of paymentarray\" style=\"margin-top: 5%;\">\n\t\t\t\t<!-- <div *ngIf=\"pay.status=='Completed'\"> -->\n\t\t\t\t\t<div class=\"date\">{{pay.date}}</div>\n\t\t\t\t\t<div class=\"main2\" >\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"inner1\">\n\t\t\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t\t\t<div class=\"imgdiv1\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{pay.profile}}\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"textdiv1\">\n\t\t\t\t\t\t\t\t\t<div class=\"text1\">{{pay.fname}} {{pay.lname}}, ${{pay.hourrate}}/hr</div>\n\t\t\t\t\t\t\t\t\t<div class=\"para1\">${{pay.totalamount}}/hr</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t\t\t<ion-button class=\"btn1\" (click)=\"viewdetail(pay)\">View Details</ion-button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t<!-- </div> -->\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t\n\n\t</div>\n\n</ion-content>\n\n<!-- <ion-footer class=\"ion-no-border\">\n<ion-toolbar class=\"bgtoolbar\">\n\t<div class=\"ionbutton\" (click)=\"send()\">\n\t\t<ion-button class=\"ib\">Send Payment</ion-button>\n\t</div>\n</ion-toolbar>\n</ion-footer> -->\n");

/***/ }),

/***/ "EJ3r":
/*!***********************************************!*\
  !*** ./src/app/paymentto/paymentto.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.menubtn {\n  margin-left: 3%;\n}\n\n.plusbtn {\n  margin-right: 3%;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.logo {\n  margin-top: 10%;\n}\n\nion-segment {\n  padding: 5px 5px;\n  border-radius: 10px;\n  margin-top: 10px;\n  --background: #EBEBEB;\n}\n\nion-segment ion-segment-button {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 10px;\n  --background-checked: #fe9805;\n  --indicator-color: transparent !important;\n  --color: #00000;\n  --color-checked: #fff;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n/*.main{\n\tbackground: #fff\n\tbox-shadow: rgba(0, 0, 0, 0.35) 0px 2px 10px;\n\tborder-radius: 14px;\n\tmargin-top: 15%;\n}\n.date{\n  font-size: 14px;\n  margin-top: 5%;\n}\n.main2{\n\tbackground: #fff;\n\tbox-shadow: rgba(0, 0, 0, 0.35) 0px 2px 10px;\n\tborder-radius: 14px;\n\tmargin-top: 3%;\n}\n.inner{\n\tpadding: 3%;\n\tdisplay: flex;\n}\n.imgdiv img{\n\tborder-radius: 50%;\n    width: 44px;\n    height: 44px;\n}\n.textdiv{\n\tmargin-left: 4%;\n  margin-top: 1%;\n}\n.text{\n\tfont-size: 15px;\n\tfont-weight: 500;\n\tcolor:#000000;\n}\n.para{\n\tfont-size: 10px;\n\tfont-weight: 400;\n\tcolor:#000000;\n\tmargin-top: 6%;\n\n}\n\n.time{\n\tfont-size: 18px;\n  font-weight: 400;\n  margin-top: 4%;\n  color: #FE9805;\n   margin-left: 25%;\n}\n\n.footer\n{\n\tfont-size: 17px;\n\ttext-align: center;\n\tcolor:#000000;\n}\n.bgtoolbar{\n\t--background: #F7F7F7;\n}\n.ionbutton\n{\t\n\twidth: 80%;\n    margin: 0% auto;\n}\n.ib\n{\n\n\tcolor: white;\n  --background: #FE9805;\n  outline: none;\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 5%;\n  height: 58px;\n   --border-width: 1px; \n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}*/\n\n.btn1 {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 110px;\n  font-size: 12px;\n  font-weight: 600;\n  height: 45px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\n@media only screen and (max-width: 320px) {\n  .btn1 {\n    color: white;\n    --background: #FE9805;\n    outline: none;\n    width: 100px;\n    font-size: 11px;\n    font-weight: 600;\n    height: 40px;\n    --border-width: 1px;\n    --border-style: solid;\n    --border-color: white;\n    --border-radius: 12px;\n    --box-shadow: none;\n    text-transform: capitalize;\n  }\n}\n\n.main2 {\n  background: #fff;\n  /*box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;*/\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 10px;\n  border-radius: 14px;\n  margin-top: 2%;\n}\n\n.inner1 {\n  padding: 3%;\n  display: flex;\n}\n\n.left {\n  width: 65%;\n  float: left;\n  display: flex;\n}\n\n.imgdiv1 img {\n  border-radius: 50%;\n  width: 44px;\n  height: 44px;\n}\n\n.textdiv1 {\n  margin-left: 4%;\n  margin-top: 1%;\n}\n\n.text1 {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000000;\n}\n\n.para1 {\n  font-size: 10px;\n  font-weight: 400;\n  color: #000000;\n  margin-top: 6%;\n}\n\n.right {\n  width: 35%;\n  float: left;\n}\n\n.clear {\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BheW1lbnR0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNDLFdBQUE7QUFFRDs7QUFBQTtFQUNDLGVBQUE7QUFHRDs7QUFEQTtFQUNDLGdCQUFBO0FBSUQ7O0FBRkE7RUFDRSxVQUFBO0FBS0Y7O0FBRkE7RUFFRSxlQUFBO0VBQ0UsZ0JBQUE7QUFJSjs7QUFGQTtFQUNDLGtCQUFBO0VBQW9CLGdCQUFBO0FBTXJCOztBQUhDO0VBQ0Msa0JBQUE7RUFBb0IsaUJBQUE7QUFPdEI7O0FBTEU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFPSjs7QUFKQTtFQUNFLHFCQUFBO0FBT0Y7O0FBTEE7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQVFEOztBQU5BO0VBQ0UsZUFBQTtBQVNGOztBQVBBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFVRjs7QUFURTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVdKOztBQVJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTs7QUFrRkE7RUFHQyxZQUFBO0VBQ0MscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFTRjs7QUFOQTtFQUNFO0lBR0UsWUFBQTtJQUNBLHFCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtJQUNBLDBCQUFBO0VBT0Y7QUFDRjs7QUFIQTtFQUNFLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUhBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFNRjs7QUFKQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQU9GOztBQUxBO0VBQ0Usa0JBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVFKOztBQU5BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFTRjs7QUFQQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBV0Y7O0FBUkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQVdGOztBQVRBO0VBQ0UsV0FBQTtBQVlGIiwiZmlsZSI6InBheW1lbnR0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgcGFkZGluZzoxJSAwJTtcclxufVxyXG4ubWVudWljb257XHJcblx0Y29sb3I6IzAwMDtcclxufVxyXG4ubWVudWJ0bntcclxuXHRtYXJnaW4tbGVmdDozJTtcclxufVxyXG4ucGx1c2J0bntcclxuXHRtYXJnaW4tcmlnaHQ6MyU7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuICAuaGVhZEJnIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICAgIHBhZGRpbmc6MyUgMCU7XHJcbiAgfVxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6OTAlO1xyXG5cdG1hcmdpbjo1JSBhdXRvO1xyXG59XHJcbi5sb2dve1xyXG4gIG1hcmdpbi10b3A6IDEwJVxyXG59XHJcbmlvbi1zZWdtZW50IHtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAtLWJhY2tncm91bmQ6ICNFQkVCRUI7XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAtLW1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZlOTgwNTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogIzAwMDAwO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuLyoubWFpbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmXHJcblx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggMnB4IDEwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweDtcclxuXHRtYXJnaW4tdG9wOiAxNSU7XHJcbn1cclxuLmRhdGV7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5tYWluMntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDJweCAxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcbn1cclxuLmlubmVye1xyXG5cdHBhZGRpbmc6IDMlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmltZ2RpdiBpbWd7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDQ0cHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbn1cclxuLnRleHRkaXZ7XHJcblx0bWFyZ2luLWxlZnQ6IDQlO1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG59XHJcbi50ZXh0e1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuLnBhcmF7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRtYXJnaW4tdG9wOiA2JTtcclxuXHJcbn1cclxuXHJcbi50aW1le1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG4gIGNvbG9yOiAjRkU5ODA1O1xyXG4gICBtYXJnaW4tbGVmdDogMjUlO1xyXG59XHJcblxyXG4uZm9vdGVyXHJcbntcclxuXHRmb250LXNpemU6IDE3cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuLmJndG9vbGJhcntcclxuXHQtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLmlvbmJ1dHRvblxyXG57XHRcclxuXHR3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwJSBhdXRvO1xyXG59XHJcbi5pYlxyXG57XHJcblxyXG5cdGNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6ICNGRTk4MDU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICBoZWlnaHQ6IDU4cHg7XHJcbiAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7IFxyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59Ki9cclxuLmJ0bjFcclxue1xyXG5cclxuIGNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6ICNGRTk4MDU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuICAuYnRuMVxyXG4gIHtcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRTk4MDU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubWFpbjJ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAvKmJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4OyovXHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggMnB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4uaW5uZXIxe1xyXG4gIHBhZGRpbmc6IDMlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmxlZnR7XHJcbiAgd2lkdGg6NjUlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmltZ2RpdjEgaW1ne1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG59XHJcbi50ZXh0ZGl2MXtcclxuICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuLnRleHQxe1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuLnBhcmExe1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiMwMDAwMDA7XHJcbiAgbWFyZ2luLXRvcDogNiU7XHJcblxyXG59XHJcbi5yaWdodHtcclxuICB3aWR0aDogMzUlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5jbGVhcntcclxuICBjbGVhcjogYm90aDtcclxufSJdfQ== */");

/***/ }),

/***/ "iFGd":
/*!*********************************************!*\
  !*** ./src/app/paymentto/paymentto.page.ts ***!
  \*********************************************/
/*! exports provided: PaymenttoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymenttoPage", function() { return PaymenttoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_paymentto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./paymentto.page.html */ "Bn+c");
/* harmony import */ var _paymentto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paymentto.page.scss */ "EJ3r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _paymentmessage_paymentmessage_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../paymentmessage/paymentmessage.page */ "OoBq");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let PaymenttoPage = class PaymenttoPage {
    constructor(navCtrl, modalController, alertController, loading, rest) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.alertController = alertController;
        this.loading = loading;
        this.rest = rest;
        this.paymentarray = [];
        this.time1 = '09:51';
        this.textdetail = false;
        this.textdetail2 = false;
    }
    ngOnInit() {
        this.uid = localStorage.getItem('uid');
        console.log('userid', this.uid);
    }
    ionViewWillEnter() {
        if (this.paymentType) {
            if (this.paymentType === 'pending') {
                this.mySegment.nativeElement.children[0].click();
                this.pendingdetails();
                this.paymentarray = [];
            }
            if (this.paymentType === 'completed') {
                this.mySegment.nativeElement.children[1].click();
                this.completeddetails();
                this.paymentarray = [];
            }
        }
        else {
            this.paymentType = 'pending';
            this.mySegment.nativeElement.children[0].click();
            this.paymentarray = [];
        }
    }
    pendingdetails() {
        this.paymentarray = [];
        this.loading.loadershow();
        this.rest.sendRequest("parent_pending_payments", { parentId: this.uid }).subscribe((data) => {
            console.log('get data:', data);
            if (data.status == "success") {
                this.textdetail = true;
                this.loading.hideLoader();
                data.data.forEach(val => {
                    let date = moment__WEBPACK_IMPORTED_MODULE_8__(val.date).format('MMMM,YYYY');
                    console.log('date', date);
                    this.time = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('hh:mm');
                    console.log('time', this.time);
                    if (val.caregiver_details.profile_picture == '' || val.caregiver_details.profile_picture == null) {
                        this.image = 'assets/imgs/profilelogo.png';
                    }
                    else {
                        this.image = val.caregiver_details.profile_picture;
                    }
                    var fixedamount = val.total_payment.toFixed(2);
                    console.log('fixed amoubt', fixedamount);
                    let obj = {
                        caregiverid: val.caregiver_details.users_id,
                        hiringid: val.hiring_id,
                        parentid: val.parent_id,
                        profile: this.image,
                        fname: val.caregiver_details.first_name,
                        lname: val.caregiver_details.last_name,
                        hourrate: val.caregiver_details.per_hour_rate,
                        totalamount: fixedamount,
                        date: date,
                        status: val.status,
                        time: val.end_time
                    };
                    this.paymentarray.push(obj);
                });
                console.log('paymentarray', this.paymentarray);
            }
            if (data.status == "error") {
                this.loading.hideLoader();
            }
        });
    }
    completeddetails() {
        this.paymentarray = [];
        this.loading.loadershow();
        this.rest.sendRequest("parent_completed_payments", { parentId: this.uid }).subscribe((data) => {
            console.log('get data:', data);
            if (data.status == "success") {
                this.loading.hideLoader();
                this.textdetail2 = true;
                data.data.forEach(val => {
                    let date = moment__WEBPACK_IMPORTED_MODULE_8__(val.date).format('Do MMMM,YYYY');
                    console.log('date', date);
                    if (val.caregiver_details.profile_picture == '' || val.caregiver_details.profile_picture == null) {
                        this.image = 'assets/imgs/profilelogo.png';
                    }
                    else {
                        this.image = val.caregiver_details.profile_picture;
                    }
                    var fixedamount = val.total_payment.toFixed(2);
                    console.log('fixed amount', fixedamount);
                    let obj = {
                        caregiverid: val.caregiver_details.users_id,
                        hiringid: val.hiring_id,
                        parentid: val.parent_id,
                        profile: this.image,
                        fname: val.caregiver_details.first_name,
                        lname: val.caregiver_details.last_name,
                        hourrate: val.caregiver_details.per_hour_rate,
                        totalamount: fixedamount,
                        date: date,
                        status: val.status
                    };
                    this.paymentarray.push(obj);
                });
                console.log('paymentarray', this.paymentarray);
            }
            if (data.status == "error") {
                this.loading.hideLoader();
            }
        });
    }
    segmentChanged(ev) {
        if (ev.detail.value === 'pending') {
            this.paymentType = 'pending';
            this.pendingdetails();
        }
        if (ev.detail.value === 'completed') {
            this.paymentType = 'completed';
            this.completeddetails();
        }
        localStorage.setItem('paymentType', this.paymentType);
    }
    next() {
        this.navCtrl.navigateForward('/paymenthistory');
    }
    send() {
        this.navCtrl.navigateForward('/paymenthistory');
    }
    presentModal(pay) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('caregiverid', pay.caregiverid);
            console.log('parentid', pay.parentid);
            console.log('hiringid', pay.hiringid);
            const modal = yield this.modalController.create({
                component: _paymentmessage_paymentmessage_page__WEBPACK_IMPORTED_MODULE_5__["PaymentmessagePage"],
                cssClass: 'paymentclass',
                componentProps: {
                    parentid: pay.parentid,
                    caregiverid: pay.caregiverid,
                    hiringid: pay.hiringid,
                    amount: pay.totalamount
                }
            });
            modal.onDidDismiss().then((data) => {
                console.log('data', data);
                if (data.data.data == "Transaction successful") {
                    this.ionViewWillEnter();
                    console.log('in dismiss modal');
                }
            });
            return yield modal.present();
        });
    }
    viewdetail(pay) {
        console.log('innnnnnnnn');
        console.log('caregiverid', pay.caregiverid);
        console.log('parentid', pay.parentid);
        console.log('hiringid', pay.hiringid);
        let sendData = {
            hiringId: pay.hiringid,
            parentId: pay.parentid,
            caregiverId: pay.caregiverid
        };
        this.rest.sendRequest("job_details", sendData).subscribe((data) => {
            console.log('job_details::', data);
            this.desc = data.data.comments;
            this.popup(this.desc);
        });
    }
    popup(desc) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'transactionclass',
                message: desc,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                        },
                        cssClass: 'btn_ok',
                    },
                ],
            });
            yield alert.present();
        });
    }
};
PaymenttoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] }
];
PaymenttoPage.propDecorators = {
    mySegment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mySegment', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }]
};
PaymenttoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-paymentto',
        template: _raw_loader_paymentto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_paymentto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaymenttoPage);



/***/ })

}]);
//# sourceMappingURL=paymentto-paymentto-module-es2015.js.map