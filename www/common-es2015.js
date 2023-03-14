(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "Cuvt":
/*!*********************************************************!*\
  !*** ./src/app/paymentmessage/paymentmessage.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 14px;\n  background: #00000029;\n  padding: 1% 5%;\n  margin-top: 5%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n}\n\n.btndiv {\n  margin-top: 5%;\n  display: flex;\n}\n\n.btn1 {\n  --background: #FE9805;\n  --box-shadow: none;\n  --border-radius: 12px;\n  width: 47%;\n  height: 46px;\n}\n\n.btn2 {\n  --background:#E63F3F;\n  --box-shadow: none;\n  --border-radius: 12px;\n  width: 47%;\n  height: 46px;\n  margin-left: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BheW1lbnRtZXNzYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBQUQ7O0FBRUE7RUFDQyxhQUFBO0VBQ0MsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDRCxjQUFBO0FBQ0Q7O0FBR0E7RUFFQyxXQUFBO0VBQ0EsZUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBR0E7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBQUFEOztBQUVBO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDRDs7QUFDQTtFQUNDLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVEIiwiZmlsZSI6InBheW1lbnRtZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ud3JhcHBlcntcclxuXHR3aWR0aDogOTAlO1xyXG5cdG1hcmdpbjo1JSBhdXRvO1xyXG59XHJcbi5pbnB1dGRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDI5O1xyXG4gIHBhZGRpbmc6IDElIDUlO1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG5cclxuLnBpbnB1dFxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG9wYWNpdHk6IDQ4JTtcclxufVxyXG4uYnRuZGl2e1xyXG5cdG1hcmdpbi10b3A6NSU7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG4uYnRuMXtcclxuXHQtLWJhY2tncm91bmQ6ICNGRTk4MDU7XHJcblx0LS1ib3gtc2hhZG93OiBub25lO1xyXG5cdC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHR3aWR0aDogNDclO1xyXG5cdGhlaWdodDogNDZweDtcclxufVxyXG4uYnRuMntcclxuXHQtLWJhY2tncm91bmQ6I0U2M0YzRjtcclxuXHQtLWJveC1zaGFkb3c6IG5vbmU7XHJcblx0LS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cdHdpZHRoOiA0NyU7XHJcblx0aGVpZ2h0OiA0NnB4O1xyXG5cdG1hcmdpbi1sZWZ0OiA0JTtcclxufSJdfQ== */");

/***/ }),

/***/ "G6L6":
/*!***************************************************************!*\
  !*** ./src/app/termsandcondition/termsandcondition.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backicon {\n  margin-left: 10%;\n  margin-top: 6px;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .backicon {\n  margin-left: 10%;\n  margin-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 5% auto;\n}\n\np {\n  text-align: left;\n  font-size: 16px;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlcm1zYW5kY29uZGl0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUFBO0VBQ0MsZ0JBQUE7RUFDRyxlQUFBO0FBR0o7O0FBQUE7RUFFRSxlQUFBO0VBQ0UsZ0JBQUE7QUFFSjs7QUFBQTtFQUNDLGtCQUFBO0VBQW9CLGdCQUFBO0FBSXJCOztBQURDO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkM7RUFDQyxrQkFBQTtFQUFvQixpQkFBQTtBQUt0Qjs7QUFIQztFQUNDLHFCQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUZBO0VBQ0MscUJBQUE7QUFLRDs7QUFIQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBTUQ7O0FBSkE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBT0QiLCJmaWxlIjoidGVybXNhbmRjb25kaXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6IDElIDAlO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcbi5iYWNraWNvbntcclxuXHRtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4uY3RpdGxle1xyXG5cdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50aXRsZWNsYXNze1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4uaW9ze1xyXG5cdC5iYWNraWNvbntcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMCU7XHJcblx0XHRtYXJnaW4tdG9wOiA4cHg7XHJcblx0fVxyXG5cdC50aXRsZWNsYXNze1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTFweDtcclxuXHR9XHJcblx0LmhlYWRCZyB7XHJcblx0XHQtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcblx0XHRwYWRkaW5nOiAzJSAwJTtcclxuXHQgIH1cclxufVxyXG4uYmFja2dyb3VuZHtcclxuXHQtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6IDgwJTtcclxuXHRtYXJnaW46IDUlIGF1dG87XHJcbn1cclxucHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRjb2xvcjogIzAwMDAwMDtcclxufSJdfQ== */");

/***/ }),

/***/ "OoBq":
/*!*******************************************************!*\
  !*** ./src/app/paymentmessage/paymentmessage.page.ts ***!
  \*******************************************************/
/*! exports provided: PaymentmessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentmessagePage", function() { return PaymentmessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_paymentmessage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./paymentmessage.page.html */ "srlL");
/* harmony import */ var _paymentmessage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paymentmessage.page.scss */ "Cuvt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");







let PaymentmessagePage = class PaymentmessagePage {
    constructor(modal, navParams, navCtrl, loading, rest) {
        this.modal = modal;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.rest = rest;
        this.parentid = this.navParams.get('parentid');
        console.log('parentid', this.parentid);
        this.caregiverid = this.navParams.get('caregiverid');
        console.log('caregiverid', this.caregiverid);
        this.hiringid = this.navParams.get('hiringid');
        console.log('hiringid', this.hiringid);
        this.totalamount = this.navParams.get('amount');
        console.log('totalamount', this.totalamount);
    }
    ngOnInit() {
    }
    Completed() {
        let sendata = {
            parentId: this.parentid,
            hiringId: this.hiringid,
            caregiverId: this.caregiverid,
            comments: this.comments,
            amount: this.totalamount
        };
        this.rest.sendRequest("complete_job", sendata).subscribe((data) => {
            if (data.status == 'success') {
                this.modal.dismiss(data).then(res => {
                    console.log('modal res', res);
                    console.log('complete_job::', sendata);
                    this.loading.presentToast('Request Completed');
                });
            }
            if (data.status == 'error') {
                this.loading.presentToast(data.message);
            }
        });
    }
    Cancel() {
        this.modal.dismiss().then(res => {
            console.log('modal res', res);
        });
    }
};
PaymentmessagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] }
];
PaymentmessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-paymentmessage',
        template: _raw_loader_paymentmessage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_paymentmessage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaymentmessagePage);



/***/ }),

/***/ "RDnp":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/termsandcondition/termsandcondition.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t  <ion-toolbar class=\"headBgGlobal\">\n\t\t<ion-row>\n\t\t\t<ion-col style=\"padding-top:6px;\" size=\"2\">\n\t\t\t\t<div>\n\t\t\t\t\t<ion-menu-button class=\"menuicon\"></ion-menu-button>\n          <div class=\"backicon\" (click)=\"closemodal()\">\n            <img src=\"assets/imgs/icons/backbtn.svg\" *ngIf=\"page=='terms'\">\n          </div>\n        </div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col class=\"titleclass\" size=\"8\">\n\t\t\t\t<ion-text class=\"ctitle\">Terms & Conditions</ion-text>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"2\">\n\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t    <!-- <ion-buttons slot=\"start\">\n\t      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n\t    </ion-buttons>\n\t    <ion-title class=\"ctitle\">Terms & Conditions</ion-title> -->\n\t  </ion-toolbar>\n</ion-header>\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\t\t<p>The UniqKidz logo and all the intellectual content displayed on this application are the sole property of UniqKidz, LLC unless otherwise specified or recognizable. Users may not copy, share, replicate, sell, or modify the intellectual property of Uniqkidz in any way without receiving express consent from the owners. To use the UniqKidz service, users are responsible for providing the right information. Failure to do so will result in the termination of a user account or the unavailability of service.Racism, obscenity, and other ethical issues may also result in the termination of your account. \n\t\tThis software is recommended for use by individuals over 13. Individuals accessing the software do so at \n\t\ttheir own responsibility. Uniqkidz reserves the right to terminate a user account with or without prior \n\t\twarning or notice and for any reason including any threats that it may pose to the community. \n\t\tThe suspension of any account due to reasons that the user is responsible for, will not exempt them from \n\t\tany pending payments. </p>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "ZEea":
/*!*******************************************!*\
  !*** ./src/app/services/child.service.ts ***!
  \*******************************************/
/*! exports provided: ChildService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildService", function() { return ChildService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ChildService = class ChildService {
    constructor() {
        this.medication = [];
        this.food = [];
        this.snack = [];
        this.likes = [];
        this.dislikes = [];
        this.favorite = [];
        this.childarray = [];
    }
};
ChildService.ctorParameters = () => [];
ChildService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChildService);



/***/ }),

/***/ "Zcj0":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ "KF81");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "kE+6":
/*!*************************************************************!*\
  !*** ./src/app/termsandcondition/termsandcondition.page.ts ***!
  \*************************************************************/
/*! exports provided: TermsandconditionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsandconditionPage", function() { return TermsandconditionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_termsandcondition_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./termsandcondition.page.html */ "RDnp");
/* harmony import */ var _termsandcondition_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./termsandcondition.page.scss */ "G6L6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let TermsandconditionPage = class TermsandconditionPage {
    constructor(modal, navParams) {
        this.modal = modal;
        this.navParams = navParams;
    }
    ngOnInit() {
        this.page = this.navParams.get('termsaandcondition');
        console.log('page', this.page);
    }
    closemodal() {
        this.modal.dismiss();
    }
};
TermsandconditionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
TermsandconditionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-termsandcondition',
        template: _raw_loader_termsandcondition_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_termsandcondition_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TermsandconditionPage);



/***/ }),

/***/ "l2wf":
/*!***********************************************!*\
  !*** ./src/app/services/editchild.service.ts ***!
  \***********************************************/
/*! exports provided: EditchildService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditchildService", function() { return EditchildService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let EditchildService = class EditchildService {
    constructor() {
        // console.log(this.childstime,'time array in service')
        // console.log(this.childetime,'time array in service')
        this.medication = [];
        this.food = [];
        this.snack = [];
        this.likes = [];
        this.dislikes = [];
        this.favorite = [];
        this.likes1 = [];
        this.dislikes1 = [];
        this.favorite1 = [];
        this.childstime = [];
        this.childetime = [];
        this.timearray = [];
        this.time = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('00:00');
        this.percent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](100);
        this.timer = 0;
        // this.starttime=this.childstime
        // console.log('starttime',this.starttime)
        // this.endtime=this.childetime
        // console.log('endtime',this.endtime)
    }
};
EditchildService.ctorParameters = () => [];
EditchildService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EditchildService);



/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "spDm":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-1457892a.js */ "W6o/");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "srlL":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paymentmessage/paymentmessage.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>paymentmessage</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\t<div class=\"wrapper\">\n\t\t<div class=\"inputdiv\">\n\t\t\t<div class=\"pinput\">\n\t\t\t\t<ion-textarea placeholder=\"About\"  rows=\"6\" cols=\"20\" [(ngModel)]=\"comments\"></ion-textarea>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"btndiv\">\n\t\t\t<ion-button class=\"btn1\" (click)=\"Completed()\">Complete Job</ion-button>\n\t\t\t<ion-button class=\"btn2\" (click)=\"Cancel()\">Cancel</ion-button>\n\t\t</div>\n\t</div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map