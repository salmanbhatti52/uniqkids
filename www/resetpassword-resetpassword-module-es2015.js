(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resetpassword-resetpassword-module"],{

/***/ "IKP2":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/resetpassword.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content class=\"background\">\n\n  <div class=\"topdiv\">\n    <div class=\"header\">\n      <div class=\"back-btn\">\n        <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n        </div>\n    </div>\n    <div style=\"text-align: center;margin-top: 4%;\">\n      <img src=\"assets/imgs/ulogo.png\">\n    </div>  \n  </div>\n  <div class=\"logindiv\">\n    <div class=\"wrapper\">\n      \n      <div class=\"headtxt\">Forgot,<br>Password?</div>\n      <p style=\"margin-bottom: 10%;font-size:14px;color: #000000;opacity:0.8;\">Enter your email to get the recovery <br>OTP</p>\n\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"emaildiv\">\n\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t<img src=\"assets/imgs/icons/lock.svg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"New Password\"\n\t\t\t\t\t\t type=\"{{showPass ? 'text':'password' }}\"\n\t\t\t\t\t\t  [(ngModel)]=\"newPassword\"\n\t\t\t\t\t\t></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t<!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\n\t\t\t\t\t\t<ion-icon name=\"eye\" class=\"eye\"  *ngIf=\"!showPass\" (click)=\"togglePass()\"></ion-icon>\n\t\t\t\t\t\t<ion-icon name=\"eye-off\" class=\"eye\"  *ngIf=\"showPass\" (click)=\"togglePass()\"></ion-icon>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p *ngIf=\"newPassError.status\" class=\"error\">{{newPassError.message}}</p>\n\t\t\t\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"emaildiv\">\n\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t<img src=\"assets/imgs/icons/lock.svg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"Confirm Password\"\n\t\t\t\t\t\t type=\"{{showcPass ? 'text':'password' }}\"\n\t\t\t\t\t\t  [(ngModel)]=\"confirmPassword\"></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t<!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\n\t\t\t\t\t\t<ion-icon name=\"eye\" class=\"eye\"  *ngIf=\"!showcPass\" (click)=\"togglecPass()\"></ion-icon>\n\t\t\t\t\t\t<ion-icon name=\"eye-off\" class=\"eye\"  *ngIf=\"showcPass\" (click)=\"togglecPass()\"></ion-icon>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p *ngIf=\"confPassError.status\" class=\"error\">{{confPassError.message}}</p>\n\n\t\t\t<p *ngIf=\"error.status\" class=\"error\">{{error.message}}</p>\n\n      <div class=\"ionbutton\" (click)=\"gotologin()\">\n\t\t\t\t<ion-button class=\"ib\">Reset</ion-button>\n\t\t\t</div>\n\n      \n    </div>\n\n  </div>\n \n \n</ion-content>\n");

/***/ }),

/***/ "PFJr":
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n}\n\n.header {\n  display: flex;\n  /*margin-top: 5%;*/\n}\n\n.back-btn {\n  font-size: 20px;\n  padding: 37px 0 0 15px;\n  fill: #333;\n  cursor: pointer;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.background {\n  /*--background: #FE9805;*/\n  /*--overflow: hidden;*/\n  --background: url('UniqKidz-Logo.png') 40% 0/90% #FE9805 !important;\n}\n\n.topdiv {\n  height: 400px;\n  background: #FFFFFF;\n  border-radius: 0px 0px 50px 50px;\n}\n\n.logindiv {\n  position: absolute;\n  left: 30px;\n  top: 240px;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  width: 85%;\n  border-radius: 30px;\n}\n\n.wrapper {\n  width: 75%;\n  margin: 2% auto;\n}\n\n.headtxt {\n  font-weight: bold;\n  font-size: 30px;\n  color: #000000;\n  margin-top: 8%;\n}\n\n.fields {\n  margin-top: 5%;\n}\n\n.emaildiv {\n  display: flex;\n  border-radius: 8px;\n  background: #EBEBEB;\n  padding: 1% 4%;\n  margin-top: 5%;\n}\n\n.icondiv {\n  margin-top: 6%;\n  width: 8%;\n}\n\n.eye {\n  color: #737373;\n}\n\n.pinput {\n  width: 85%;\n  padding-left: 4%;\n  padding-top: 1%;\n  font-size: 15px;\n  opacity: 48%;\n}\n\n.check {\n  color: #000000;\n  text-align: right;\n  font-size: 12px;\n  margin-top: 3%;\n  width: 100%;\n  margin-right: 2%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 100%;\n  font-size: 18px;\n  margin-bottom: 10%;\n  height: 50px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 10px;\n  --box-shadow: none;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n/*.signup {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 47px;\n  margin-bottom: 10px;\n}\n.signup p {\n  font-size: 14px;\n}\n\n.signupText {\n  cursor: pointer;\n  font-weight: 600;\n  letter-spacing: 0;\n}*/\n\n.footer {\n  font-size: 17px;\n  text-align: center;\n  color: #000000;\n}\n\n.bgtoolbar {\n  --background: #F7F7F7;\n}\n\nspan {\n  color: #000;\n  font-weight: 400;\n  font-size: 20px;\n}\n\n@media only screen and (max-width: 414px) {\n  .icondiv {\n    margin-top: 6%;\n    width: 8%;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .pinput {\n    width: 85%;\n    padding-left: 4%;\n    font-size: 12px;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .pinput {\n    width: 85%;\n    padding-left: 4%;\n    padding-top: 5.5%;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc2V0cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFGQTtFQUNHLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtRUFBQTtBQUtIOztBQUhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFNRjs7QUFKQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQVFGOztBQU5BO0VBQ0MsaUJBQUE7RUFDRyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFTSjs7QUFQQTtFQUNDLGNBQUE7QUFVRDs7QUFSQTtFQUNDLGFBQUE7RUFDRyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNILGNBQUE7QUFXRDs7QUFSQTtFQUNDLGNBQUE7RUFDQSxTQUFBO0FBV0Q7O0FBVEE7RUFDRSxjQUFBO0FBWUY7O0FBVEE7RUFFQyxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNHLFlBQUE7QUFXSjs7QUFSQTtFQUVDLGNBQUE7RUFDRyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBVUo7O0FBUEE7RUFFRSxrQkFBQTtFQUNELFdBQUE7RUFDQSxlQUFBO0FBU0Q7O0FBUEE7RUFHQyxZQUFBO0VBQ0MscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQyxtQkFBQTtFQUNELHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQVFGOztBQUxBOzs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7O0FBa0JBO0VBRUMsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQU1EOztBQUpBO0VBQ0MscUJBQUE7QUFPRDs7QUFMQTtFQUVDLFdBQUE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7QUFPRjs7QUFIQTtFQUNDO0lBRUMsY0FBQTtJQUNDLFNBQUE7RUFLRDtBQUNGOztBQUFBO0VBQ0M7SUFFQyxVQUFBO0lBQ0csZ0JBQUE7SUFDQSxlQUFBO0VBQ0g7QUFDRjs7QUFJQTtFQUlHO0lBRUQsVUFBQTtJQUNHLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBTkg7QUFDRiIsImZpbGUiOiJyZXNldHBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkQmcge1xyXG4gIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qbWFyZ2luLXRvcDogNSU7Ki9cclxufVxyXG4uYmFjay1idG4ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiAzN3B4IDAgMCAxNXB4O1xyXG4gIGZpbGw6ICMzMzM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5iYWNrU3ZnIHtcclxuICBmaWxsOiAjMzMzO1xyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAvKi0tYmFja2dyb3VuZDogI0ZFOTgwNTsqL1xyXG4gICAvKi0tb3ZlcmZsb3c6IGhpZGRlbjsqL1xyXG4gICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1ncy9VbmlxS2lkei1Mb2dvLnBuZykgNDAlIDAvOTAlICNGRTk4MDUgIWltcG9ydGFudDtcclxufVxyXG4udG9wZGl2e1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDUwcHggNTBweDtcclxufVxyXG4ubG9naW5kaXZ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgdG9wOiAyNDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDM1JSkgMHB4IDVweCAxNXB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG4ud3JhcHBlcntcclxuICB3aWR0aDo3NSU7XHJcbiAgbWFyZ2luOjIlIGF1dG87XHJcbn1cclxuLmhlYWR0eHR7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbi10b3A6OCU7XHJcbn1cclxuLmZpZWxkc3tcclxuXHRtYXJnaW4tdG9wOjUlO1xyXG59XHJcbi5lbWFpbGRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0VCRUJFQjtcclxuICAgIHBhZGRpbmc6IDElIDQlO1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG5cclxufVxyXG4uaWNvbmRpdntcclxuIG1hcmdpbi10b3A6IDYlO1xyXG4gd2lkdGg6IDglO1xyXG59XHJcbi5leWV7XHJcbiAgY29sb3I6ICM3MzczNzM7XHJcbn1cclxuXHJcbi5waW5wdXRcclxue1xyXG5cdHdpZHRoOiA4NSU7XHJcblx0cGFkZGluZy1sZWZ0OiA0JTtcclxuXHRwYWRkaW5nLXRvcDogMSU7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG4gICAgb3BhY2l0eTogNDglO1xyXG59XHJcblxyXG4uY2hlY2tcclxue1xyXG5cdGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxufVxyXG5cclxuLmlvbmJ1dHRvblxyXG57XHJcbiBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmliXHJcbntcclxuXHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogI0ZFOTgwNTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKi5zaWdudXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDQ3cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uc2lnbnVwIHAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNpZ251cFRleHQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG59Ki9cclxuXHJcbi5mb290ZXJcclxue1xyXG5cdGZvbnQtc2l6ZTogMTdweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxufVxyXG4uYmd0b29sYmFye1xyXG5cdC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG5zcGFuXHJcbntcclxuXHRjb2xvcjogIzAwMDtcclxuICBmb250LXdlaWdodDo0MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNHB4KSB7XHJcblx0Lmljb25kaXZcclxuXHR7XHJcblx0XHRtYXJnaW4tdG9wOiA2JTtcclxuXHQgIHdpZHRoOiA4JTtcclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMHB4KSB7XHJcblx0LnBpbnB1dFxyXG5cdHtcclxuXHRcdHdpZHRoOiA4NSU7XHJcblx0ICAgIHBhZGRpbmctbGVmdDogNCU7XHJcblx0ICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweClcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweClcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xyXG4gIFx0LnBpbnB1dFxyXG5cdHtcclxuXHRcdHdpZHRoOiA4NSU7XHJcblx0ICAgIHBhZGRpbmctbGVmdDogNCU7XHJcblx0ICAgIHBhZGRpbmctdG9wOiA1LjUlO1xyXG5cdCAgICBmb250LXNpemU6IDE0cHg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "YI85":
/*!*****************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.ts ***!
  \*****************************************************/
/*! exports provided: ResetpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPage", function() { return ResetpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_resetpassword_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./resetpassword.page.html */ "IKP2");
/* harmony import */ var _resetpassword_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetpassword.page.scss */ "PFJr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let ResetpasswordPage = class ResetpasswordPage {
    constructor(navCtrl, menuCtrl, activatedRoute, rest) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.activatedRoute = activatedRoute;
        this.rest = rest;
        this.showPass = false;
        this.showcPass = false;
        this.newPassError = {
            status: false,
            message: '',
        };
        this.confPassError = {
            status: false,
            message: '',
        };
        this.error = {
            status: false,
            message: '',
        };
        this.recoveryEmail = this.activatedRoute.snapshot.params['email'];
        console.log('recoveryEmail::', this.recoveryEmail);
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }
    ionViewWillLeave() {
        // enable the root left menu when leaving this page
        this.menuCtrl.enable(true);
    }
    goback() {
        this.navCtrl.navigateBack('/otp');
    }
    togglePass() {
        this.showPass = !this.showPass;
    }
    togglecPass() {
        this.showcPass = !this.showcPass;
    }
    gotologin() {
        if (this.newPassword && this.confirmPassword) {
            if (this.newPassword === this.confirmPassword) {
                this.rest
                    .sendRequest('forgot_password', {
                    requestType: 'reset_password',
                    email: this.recoveryEmail,
                    userPassword: this.newPassword,
                    confirmPassword: this.confirmPassword
                })
                    .subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.newPassword = '';
                    this.confirmPassword = '';
                    this.navCtrl.navigateForward('/signin');
                }), (err) => {
                    this.error.status = true;
                    this.error.message = err.error.message;
                    setTimeout(() => {
                        this.error.status = false;
                        this.error.message = '';
                    }, 3000);
                });
            }
            else {
                this.confPassError.status = true;
                this.confPassError.message = 'Password not match!';
                setTimeout(() => {
                    this.confPassError.status = false;
                    this.confPassError.message = '';
                }, 3000);
            }
        }
        if (!this.newPassword) {
            this.newPassError.status = true;
            this.newPassError.message = 'Password is required';
        }
        if (!this.confirmPassword) {
            this.confPassError.status = true;
            this.confPassError.message = 'Confirm Password is required';
        }
        setTimeout(() => {
            this.newPassError.status = false;
            this.newPassError.message = '';
            this.confPassError.status = false;
            this.confPassError.message = '';
        }, 3000);
    }
};
ResetpasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] }
];
ResetpasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resetpassword',
        template: _raw_loader_resetpassword_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resetpassword_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResetpasswordPage);



/***/ }),

/***/ "yIft":
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.module.ts ***!
  \*******************************************************/
/*! exports provided: ResetpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPageModule", function() { return ResetpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resetpassword-routing.module */ "zrPg");
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resetpassword.page */ "YI85");







let ResetpasswordPageModule = class ResetpasswordPageModule {
};
ResetpasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetpasswordPageRoutingModule"]
        ],
        declarations: [_resetpassword_page__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordPage"]]
    })
], ResetpasswordPageModule);



/***/ }),

/***/ "zrPg":
/*!***************************************************************!*\
  !*** ./src/app/resetpassword/resetpassword-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ResetpasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPageRoutingModule", function() { return ResetpasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetpassword.page */ "YI85");




const routes = [
    {
        path: '',
        component: _resetpassword_page__WEBPACK_IMPORTED_MODULE_3__["ResetpasswordPage"]
    }
];
let ResetpasswordPageRoutingModule = class ResetpasswordPageRoutingModule {
};
ResetpasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetpasswordPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=resetpassword-resetpassword-module-es2015.js.map