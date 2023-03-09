(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inbox-inbox-module"],{

/***/ "2jHE":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t <ion-toolbar class=\"headBgGlobal\">\n\t<ion-row>\n\t  <ion-col class=\"backbtn\" size=\"2\">\n\t\t<div>\n\t\t  <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t\t</div>\n\t  </ion-col>\n\n\t  <ion-col class=\"titleclass\" size=\"8\">\n\t\t<ion-text class=\"ctitle\">{{name}}</ion-text>\n\t  </ion-col>\n\n\t  <ion-col size=\"2\">\n\n\t  </ion-col>\n\t</ion-row>\n\t\t<!-- <ion-buttons slot=\"start\" class=\"backbtn\">\n\t\t\t  <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t\t  </ion-buttons>\n\t   <ion-title class=\"ctitle\">{{name}}</ion-title> -->\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\t\t<div  no-lines *ngFor=\"let chat of messages\">\t\n\t\t\t<div class=\"linediv\" *ngIf=\"chat.date\">\n\t\t\t\t<div class=\"leftline\"></div>\n\t\t\t\t<div class=\"label\">{{chat.date}}</div>\n\t\t\t\t<div class=\"rightline\"></div>\n\t\t\t</div>\t\n\t\t\t<div *ngIf=\"chat.userId!=loggedid\">\n\t\t\t\t<div class=\"main\">\n\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t<img src=\"{{chat.profilepic}}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"chat.messageType=='text'\">\n\t\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t\t<p>{{chat.message}}</p>\n\t\t\t\t\t\t\t\t<div class=\"time\">{{chat.time}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"chat.messageType=='attachment'\">\n\t\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t\t<img class=\"attachment_sender\" src=\"{{chat.message}}\" />\n\t\t\t\t\t\t\t\t<div class=\"time\">{{chat.time}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\n\t\t\t<div class=\"main2\" *ngIf=\"chat.userId==loggedid\">\n\t\t\t\t<div class=\"right1\">\n\t\t\t\t\t<div *ngIf=\"chat.messageType=='text'\">\n\t\t\t\t\t\t<div class=\"text1\" >\n\t\t\t\t\t\t\t{{chat.message}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"chat.messageType=='attachment'\">\n\t\t\t\t\t\t<div class=\"text1\">\n\t\t\t\t<img class=\"attachment_sender\" src=\"{{chat.message}}\" />\n\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\n\t\t\n\n\t\t<!-- <div class=\"main2\">\n\t\t\t<div class=\"right\">\n\t\t\t\t<img src=\"assets/imgs/msgimg.png\">\n\t\t\t</div>\n\t\t</div> -->\n\t</div>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n\t<div class=\"bottomdiv\">\n\t\t<div class=\"imgdiv\" (click)=\"selectImages('profile')\">\n\t\t\t<img src=\"assets/imgs/icons/attachment.png\">\n\t\t</div>\n\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<!-- <ion-input placeholder=\"Type Your message here...\" type=\"text\" [(ngModel)]=\"data.message\"></ion-input> -->\n\t\t\t\t\t<ion-textarea\n\t\t\tclass=\"input\"\n\t\t\trows=\"1\"\n\t\t\tcols=\"20\"\n\t\t\t[(ngModel)]=\"data.message\"\n\t\t\tplaceholder=\"Type Your message here...\"\n\t\t\t(keypress)=\"userTyping($event)\"\n\t\t  ></ion-textarea>\n\t\t\t\t</div>\n\t\t\t\t<img src=\"assets/imgs/icons/send.png\" class=\"cimg\" (click)=\"sendMsg()\">\n\t\t\t\t<div class=\"clear\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t</div>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "5gel":
/*!***************************************!*\
  !*** ./src/app/inbox/inbox.module.ts ***!
  \***************************************/
/*! exports provided: InboxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPageModule", function() { return InboxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inbox-routing.module */ "zxsJ");
/* harmony import */ var _inbox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inbox.page */ "cinZ");







let InboxPageModule = class InboxPageModule {
};
InboxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__["InboxPageRoutingModule"]
        ],
        declarations: [_inbox_page__WEBPACK_IMPORTED_MODULE_6__["InboxPage"]]
    })
], InboxPageModule);



/***/ }),

/***/ "cNf8":
/*!***************************************!*\
  !*** ./src/app/inbox/inbox.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 10px;\n  padding-left: 18px;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 12px;\n  padding-left: 18px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 10% auto;\n}\n\n.linediv {\n  display: flex;\n}\n\n.leftline {\n  border-top: 1px solid #BFBFBF;\n  width: 40%;\n}\n\n.label {\n  color: #BFBFBF;\n  font-size: 8px;\n  text-align: center;\n  margin-top: -1.5%;\n  margin-left: 3%;\n  width: 13%;\n}\n\n.rightline {\n  border-top: 1px solid #BFBFBF;\n  width: 40%;\n  margin-left: 3%;\n}\n\n.main {\n  width: 90%;\n  /* display: flex;*/\n  margin: 5% auto;\n}\n\n.left {\n  width: 18%;\n  float: left;\n  margin-top: 3%;\n}\n\n.left img {\n  width: 44px;\n  height: 44px;\n  border-radius: 50px;\n}\n\n.right {\n  display: flex;\n  /*justify-content: flex-end;*/\n}\n\n.text {\n  padding-top: 2%;\n}\n\n.text p {\n  margin: 0px;\n  /*padding: 5%;*/\n  background: #EBEBEB;\n  padding: 8px 12px;\n  width: auto;\n  border-radius: 10px;\n  /*float: left;*/\n  max-width: 250px;\n}\n\n.clear {\n  clear: both;\n}\n\n.time {\n  color: #BFBFBF;\n  font-size: 8px;\n  margin-top: 2%;\n}\n\n.main2 {\n  width: 90%;\n  display: flex;\n  margin: 5% auto;\n  justify-content: flex-end;\n}\n\n.right1 {\n  width: 90%;\n  float: left;\n}\n\n.text1 {\n  background: #FE9805;\n  padding: 8px 12px;\n  width: auto;\n  border-radius: 10px;\n  float: right;\n  color: #fff;\n  max-width: -webkit-fill-available;\n}\n\n.text1 p {\n  margin: 0px;\n  padding: 5%;\n  color: #fff;\n}\n\n.bottomdiv {\n  display: flex;\n  padding: 3% 2%;\n}\n\n.imgdiv {\n  width: 15%;\n  float: left;\n  margin-top: 2%;\n}\n\n.inputdiv {\n  border-radius: 8px;\n  background: #F6F6F6;\n  width: 80%;\n  float: left;\n}\n\n.pinput {\n  font-size: 15px;\n  color: #000;\n  padding: 0% 3%;\n  width: 85%;\n  float: left;\n}\n\n.cimg {\n  width: 8%;\n  float: left;\n  margin-top: 6%;\n}\n\n.userimage {\n  width: 10%;\n  float: right;\n}\n\n.userimage img {\n  border-radius: 50px;\n  width: 28px;\n  height: 28px;\n}\n\n.right-bubble {\n  width: 90%;\n  float: left;\n  margin-bottom: 2%;\n}\n\n.user-message {\n  width: auto;\n  background-color: #FF3B5B;\n  padding: 3px;\n  border-radius: 5px;\n  float: right;\n  padding: 5px;\n  color: #fff;\n  max-width: 50%;\n  min-width: 20%;\n}\n\n.user-message p {\n  color: #fff;\n  margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2luYm94LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUFBO0VBQ0MsZUFBQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFEQTtFQUVFLGVBQUE7RUFDRSxnQkFBQTtBQUdKOztBQURBO0VBQ0Msa0JBQUE7RUFBb0IsZ0JBQUE7QUFLckI7O0FBRkM7RUFDQyxrQkFBQTtFQUFvQixpQkFBQTtBQU10Qjs7QUFKRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFIQTtFQUNFLHFCQUFBO0FBTUY7O0FBSkE7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7QUFPRDs7QUFMQTtFQUNDLGFBQUE7QUFRRDs7QUFOQTtFQUNDLDZCQUFBO0VBQ0MsVUFBQTtBQVNGOztBQVBBO0VBQ0MsY0FBQTtFQUNHLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFVSjs7QUFSQTtFQUNDLDZCQUFBO0VBQ0MsVUFBQTtFQUNFLGVBQUE7QUFXSjs7QUFUQTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNDLGVBQUE7QUFZRjs7QUFWQTtFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQWFEOztBQVhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWNGOztBQVpBO0VBQ0MsYUFBQTtFQUNDLDZCQUFBO0FBZUY7O0FBYkE7RUFDRSxlQUFBO0FBZ0JGOztBQWJBO0VBQ0MsV0FBQTtFQUNDLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBZ0JGOztBQWRBO0VBQ0MsV0FBQTtBQWlCRDs7QUFmQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQWtCRjs7QUFmQTtFQUNDLFVBQUE7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBa0JGOztBQWhCQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBbUJGOztBQWpCQTtFQUNDLG1CQUFBO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FBb0JGOztBQWxCQTtFQUNDLFdBQUE7RUFDRyxXQUFBO0VBQ0EsV0FBQTtBQXFCSjs7QUFuQkE7RUFDQyxhQUFBO0VBQ0csY0FBQTtBQXNCSjs7QUFwQkE7RUFDQyxVQUFBO0VBQ0csV0FBQTtFQUNBLGNBQUE7QUF1Qko7O0FBckJBO0VBQ0Msa0JBQUE7RUFDRyxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBd0JKOztBQXRCQTtFQUNDLGVBQUE7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBeUJGOztBQXZCQTtFQUNDLFNBQUE7RUFDQyxXQUFBO0VBQ0EsY0FBQTtBQTBCRjs7QUFwQkE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQXVCSjs7QUFyQkU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBd0JKOztBQXRCRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUF5Qko7O0FBdkJFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUEwQko7O0FBeEJFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUEyQkoiLCJmaWxlIjoiaW5ib3gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6IDElIDAlO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcbi5iYWNrYnRue1xyXG5cdG1hcmdpbi1sZWZ0OjAlO1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG59XHJcbi5iYWNrU3ZnIHtcclxuICBmaWxsOiAjMzMzO1xyXG59XHJcblxyXG4uY3RpdGxle1xyXG5cdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50aXRsZWNsYXNze1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4uaW9ze1xyXG5cdC50aXRsZWNsYXNze1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTFweDtcclxuXHR9XHJcbiAgLmJhY2tidG57XHJcbiAgICBtYXJnaW4tbGVmdDowJTtcclxuICAgIHBhZGRpbmctdG9wOjEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbiAgfVxyXG4gIC5oZWFkQmcge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gICAgcGFkZGluZzogMyUgMCU7XHJcbiAgfVxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6OTAlO1xyXG5cdG1hcmdpbjoxMCUgYXV0bztcclxufVxyXG4ubGluZWRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5sZWZ0bGluZXtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI0JGQkZCRjtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcbi5sYWJlbHtcclxuXHRjb2xvcjogI0JGQkZCRjtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTEuNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICB3aWR0aDogMTMlO1xyXG59XHJcbi5yaWdodGxpbmV7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNCRkJGQkY7XHJcbiAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG4ubWFpbntcclxuXHR3aWR0aDogOTAlO1xyXG4gLyogZGlzcGxheTogZmxleDsqL1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG4ubGVmdHtcclxuXHR3aWR0aDogMTglO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbi10b3A6IDMlXHJcbn1cclxuLmxlZnQgaW1ne1xyXG4gIHdpZHRoOiA0NHB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcbi5yaWdodHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gIC8qanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsqL1xyXG59XHJcbi50ZXh0e1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuXHJcbn1cclxuLnRleHQgcHtcclxuXHRtYXJnaW46IDBweDtcclxuICAvKnBhZGRpbmc6IDUlOyovXHJcbiAgYmFja2dyb3VuZDogI0VCRUJFQjtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICB3aWR0aDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC8qZmxvYXQ6IGxlZnQ7Ki9cclxuICBtYXgtd2lkdGg6IDI1MHB4O1xyXG59XHJcbi5jbGVhcntcclxuXHRjbGVhcjogYm90aDtcclxufVxyXG4udGltZXtcclxuICBjb2xvcjojQkZCRkJGO1xyXG4gIGZvbnQtc2l6ZTo4cHg7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi5tYWluMntcclxuXHR3aWR0aDogOTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLnJpZ2h0MXtcclxuICB3aWR0aDogOTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi50ZXh0MXtcclxuXHRiYWNrZ3JvdW5kOiAjRkU5ODA1O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1heC13aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG4udGV4dDEgcHtcclxuXHRtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmJvdHRvbWRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMyUgMiU7XHJcbn1cclxuLmltZ2RpdntcclxuXHR3aWR0aDogMTUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4uaW5wdXRkaXZ7XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0Y2RjZGNjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4ucGlucHV0e1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBwYWRkaW5nOiAwJSAzJTtcclxuICB3aWR0aDogODUlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5jaW1ne1xyXG5cdHdpZHRoOiA4JTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tdG9wOiA2JTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLnVzZXJpbWFnZXtcclxuICAgIHdpZHRoOjEwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgLnVzZXJpbWFnZSBpbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgfVxyXG4gIC5yaWdodC1idWJibGV7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIH1cclxuICAudXNlci1tZXNzYWdle1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzQjVCO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIG1pbi13aWR0aDogMjAlO1xyXG4gIH1cclxuICAudXNlci1tZXNzYWdlIHB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "cinZ":
/*!*************************************!*\
  !*** ./src/app/inbox/inbox.page.ts ***!
  \*************************************/
/*! exports provided: InboxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPage", function() { return InboxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inbox_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inbox.page.html */ "2jHE");
/* harmony import */ var _inbox_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox.page.scss */ "cNf8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let InboxPage = class InboxPage {
    constructor(navCtrl, activatedRoute, alertController, rest, transfer, camera, loading) {
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.rest = rest;
        this.transfer = transfer;
        this.camera = camera;
        this.loading = loading;
        // @ViewChild(IonContent, {read: IonContent, static: false}) myContent: IonContent;
        // @ViewChild('allnewmessages') allnewmessages:ElementRef;
        this.messages = [];
        this.data = { type: '', name: '', message: '' };
        this.error = {
            status: false,
            message: "",
        };
        this.chatImagesArray = [];
    }
    ngOnInit() {
        this.logeduser = JSON.parse(localStorage.getItem('user'));
        console.log('loagged details', this.logeduser);
        this.loggedid = this.logeduser.users_id;
        console.log('loagged details', this.loggedid);
        this.recieverid = this.activatedRoute.snapshot.params["id"];
        console.log('recieverid', this.recieverid);
        this.name = this.activatedRoute.snapshot.params["name"];
        console.log('name:', this.name);
    }
    goback() {
        this.navCtrl.navigateBack('/chat');
        clearInterval(this.autoSaveInterval);
    }
    ionViewWillEnter() {
        this.scrollDown();
        // Get all  messages....
        this.getMessages();
        this.autoSaveInterval = setInterval(() => {
            this.updateMessages();
        }, 2000);
    }
    ionViewWillLeave() {
        clearInterval(this.autoSaveInterval);
        console.log("clear");
    }
    userTyping(event) {
        this.scrollDown();
    }
    updateMessages() {
        // geting all chats Messages
        this.rest
            .sendRequest("chat", {
            requestType: "updateMessages",
            userId: this.loggedid,
            otherUserId: this.recieverid,
        })
            .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('update response', res);
            if (res.status == "success") {
                let unread_messages = res.data.unread_messages;
                let chatLength = res.data.chat_length;
                console.log("receving All chats unread messages", unread_messages);
                if (unread_messages.length > 0) {
                    if (chatLength != unread_messages.length) {
                        for (var i = 0; i < unread_messages.length; i++) {
                            this.messages.push({
                                userId: unread_messages[i].userId,
                                time: unread_messages[i].time,
                                message: unread_messages[i].message,
                                messageType: unread_messages[i].msgType,
                                profilepic: unread_messages[i].profile_pic
                            });
                        }
                        this.scrollDown();
                    }
                }
            }
        }));
    }
    getMessages() {
        console.log("logged in user", this.loggedid);
        console.log("recieverid in user", this.recieverid);
        // geting all chats Messages
        this.rest
            .sendRequest("chat", {
            requestType: "getMessages",
            userId: this.loggedid,
            otherUserId: this.recieverid,
        })
            .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.scrollDown();
            console.log("get messages response", res);
            if (res.status == "success") {
                this.error.status = false;
                res.data.chat_messages.forEach(val => {
                    if (val.profile_pic == '' || val.profile_pic == null) {
                        this.image = 'assets/imgs/userprofile.png';
                    }
                    else {
                        this.image = val.profile_pic;
                    }
                    let obj = {
                        userId: val.userId,
                        name: val.name,
                        profilepic: this.image,
                        message: val.message,
                        time: val.time,
                        messageType: val.msgType,
                        date: val.date
                    };
                    this.messages.push(obj);
                });
                // this.messages = res.data.chat_messages;
                console.log("receving All chats messages", this.messages);
                this.messages.map((messages, index) => {
                    if (messages.messageType == "attachment") {
                        this.chatImagesArray.push({
                            image: messages.message,
                        });
                    }
                });
                console.log("allMsg array ", this.chatImagesArray);
            }
            if (res.status == "error") {
                this.error.status = true;
                this.error.message = res.message;
                return;
            }
        }));
    }
    sendMsg() {
        console.log('inmessages');
        var time = new Date();
        this.currentTime = time.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
        });
        console.log('currentTime', this.currentTime);
        if (this.data.message != '') {
            var d = moment__WEBPACK_IMPORTED_MODULE_10__().format('LLLL');
            let splitdate = d.split(',');
            let date = splitdate[1];
            let time = moment__WEBPACK_IMPORTED_MODULE_10__().format('LT');
            console.log('date', splitdate);
            let dateformatted = time;
            console.log('formatted date', dateformatted);
            console.log('user ids are = ', this.loggedid, this.recieverid);
            let messsage = {
                userId: this.loggedid,
                message: this.data.message,
                time: this.currentTime,
                messageType: "text"
            };
            this.messages.push(messsage);
            console.log('push messages', this.messages);
            let msgToSend = this.data.message;
            this.data.message = '';
            this.scrollDown();
            this.sendMessage(this.recieverid, msgToSend, "text");
        }
    }
    sendMessage(senderUserID, msg, type) {
        let fiedlstosend = {
            requestType: "sendMessage",
            userId: this.loggedid,
            otherUserId: senderUserID,
            content: msg,
            sendingTime: this.currentTime,
            messageType: type
        };
        this.rest.sendRequest('chat', fiedlstosend).subscribe((res) => {
            console.log("send msg response", res);
        });
    }
    selectImages(imageType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "alertclassimg",
                header: "Select Attachment",
                buttons: [
                    {
                        text: "Choose from Gallery",
                        handler: (res) => this.takePhotoFromGallery(imageType),
                    },
                    {
                        text: "Camera",
                        handler: (res) => this.takePhotoFromCamera(imageType),
                    },
                    {
                        text: "Cancel",
                    },
                ],
            });
            yield alert.present();
            yield alert.onDidDismiss();
        });
    }
    takePhotoFromGallery(imageType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                // allowEdit: true,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                sourceType: 0,
            };
            yield this.camera.getPicture(options).then((imageData) => {
                var time = new Date();
                this.currentTime = time.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: false,
                });
                let imagedata = `data:image/png;base64,${imageData}`;
                console.log("select from gallary", imagedata);
                this.messages.push({
                    requestType: "sendMessage",
                    userId: this.loggedid,
                    otherUserId: this.recieverid,
                    message: imagedata,
                    sendingTime: this.currentTime,
                    messageType: "attachment"
                });
                console.log("image added from gallary", this.messages);
                this.loading.presentLoader("Uploading image");
                this.uploadChatImage(imagedata);
            });
        });
    }
    takePhotoFromCamera(imageType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                // allowEdit: true,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                saveToPhotoAlbum: false,
                correctOrientation: true,
            };
            yield this.camera.getPicture(options).then((imageData) => {
                var time = new Date();
                this.currentTime = time.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: false,
                });
                let imagedata = `data:image/png;base64,${imageData}`;
                console.log("select from Camera", imagedata);
                this.messages.push({
                    requestType: "sendMessage",
                    userId: this.loggedid,
                    otherUserId: this.recieverid,
                    message: imagedata,
                    sendingTime: this.currentTime,
                    messageType: "attachment"
                });
                console.log("image added from gallary", this.messages);
                this.loading.presentLoader("Uploading image");
                this.uploadChatImage(imagedata);
                // setTimeout(() => {
                //   this.extras.dismiss();
                //   this.scrollDown();
                // }, 5000);
            }, (err) => {
                console.log(err);
            });
        });
    }
    uploadChatImage(imageData) {
        console.log(this.recieverid, 'id recieverid');
        const fileTransfer = this.transfer.create();
        const random = Math.floor(Math.random() * 100);
        const options = {
            fileKey: "attachment",
            fileName: "myChat_" + random + ".jpg",
            chunkedMode: false,
            httpMethod: "post",
            mimeType: "image/jpeg",
            headers: {},
            params: {
                image: "YPOP",
            },
        };
        fileTransfer
            .upload(imageData, "https://admin.uniqkidzapp.com/api/upload_attachment", options)
            .then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let newProfImage = JSON.parse(data.response);
            console.log('newProfImage', newProfImage);
            let getimage = newProfImage.data;
            console.log('get image only', getimage);
            console.log("Image name after uploading", getimage);
            this.sendMessage(this.recieverid, getimage, "attachment");
            this.loading.dismiss();
            this.scrollDown();
        }), (err) => {
            this.loading.dismiss();
            console.log("Error");
            console.log(err);
            return;
        });
    }
    scrollDown() {
        this.content.scrollToBottom(50);
    }
};
InboxPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] }
];
InboxPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"],] }]
};
InboxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inbox',
        template: _raw_loader_inbox_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inbox_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InboxPage);



/***/ }),

/***/ "zxsJ":
/*!***********************************************!*\
  !*** ./src/app/inbox/inbox-routing.module.ts ***!
  \***********************************************/
/*! exports provided: InboxPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPageRoutingModule", function() { return InboxPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inbox_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox.page */ "cinZ");




const routes = [
    {
        path: '',
        component: _inbox_page__WEBPACK_IMPORTED_MODULE_3__["InboxPage"]
    }
];
let InboxPageRoutingModule = class InboxPageRoutingModule {
};
InboxPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InboxPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=inbox-inbox-module-es2015.js.map