(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homescreen-homescreen-module"],{

/***/ "5uIQ":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homescreen/homescreen.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t\t  <ion-toolbar class=\"headBgGlobal\">\r\n\t\t    <ion-buttons slot=\"start\" style=\"margin-left: 2%;\">\r\n\t\t      <ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n\t\t  </ion-buttons>\r\n\t\t  <ion-buttons slot=\"end\" style=\"margin-right: 2%;\" (click)=\"goto()\">\r\n\t\t    <img src=\"{{parentProfile}}\" class=\"pimg\">\r\n\t\t  </ion-buttons>\r\n\t\t</ion-toolbar>\r\n</ion-header> -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n   <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col class=\"backbtn\" size=\"2\">\r\n        <div>\r\n          <ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"8\">\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\">\r\n        <div (click)=\"goto()\">\r\n          <img src=\"{{parentProfile}}\" class=\"pimg\">\r\n          <!-- <img src=\"assets/imgs/clogo.png\" *ngIf=\"userType=='caregiver'\"> -->\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\r\n\t<div class=\"wrapper\">\r\n\t\t<div class=\"text\">Welcome</div>\r\n\t\t<div class=\"text1\">{{name}}</div>\r\n\r\n\t\t<div class=\"timer\" *ngIf=\"picture==false\">\r\n\t\t\t<!-- <img src=\"assets/imgs/timer.png\"> -->\r\n\t\t\t<img src=\"assets/imgs/logo.svg\">\r\n\t\t</div>\r\n\r\n    <div *ngIf=\"mobile=='android'\"> \r\n      <svg\r\n      id=\"progress-circle\"\r\n      width=\"50vh\"\r\n      height=\"25vh\"\r\n      viewBox=\"0 0 200 200\"\r\n      *ngIf=\"progressbar==true\"\r\n      >\r\n      <linearGradient id=\"grad1\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\r\n        <stop offset=\"0%\" stop-color=#FE9805></stop>\r\n        <stop offset=\"100%\" stop-color=#FE9805></stop>\r\n      </linearGradient>\r\n      <circle cx=\"50%\" cy=\"50%\" stroke=\"#f3f3f3\" stroke-width=\"12\" fill=\"none\" [attr.r]=\"circleR\"/>\r\n      <circle cx=\"50%\" cy=\"50%\"\r\n        stroke=\"url(#grad1)\"\r\n        [attr.r]=\"circleR\"\r\n        stroke-width=\"12\"\r\n        stroke-linecap=\"round\"\r\n        fill=\"none\"\r\n        [attr.stroke-dasharray]=\"circleDasharray\"\r\n        [attr.stroke-dashoffset]=\"percentageOffset(percent| async)\"\r\n      />\r\n      <text x=\"50%\" y=\"55%\" class=\"timer-text\">{{time | async }}</text>\r\n      <!-- <text x=\"50%\" y=\"55%\" class=\"timer-text\" *ngIf=\"mobile=='android'\">{{time | async }}</text>\r\n      <text x=\"50%\" y=\"-45%\" class=\"timer-text\" *ngIf=\"mobile=='ios'\">{{time | async }}</text> -->\r\n      </svg>\r\n    </div>\r\n\r\n    <div *ngIf=\"mobile=='ios'\"> \r\n      <svg\r\n      id=\"progress-circle\"\r\n      width=\"40vh\"\r\n      height=\"25vh\"\r\n      viewBox=\"0 0 200 200\"\r\n      *ngIf=\"progressbar==true\"\r\n      >\r\n      <linearGradient id=\"grad1\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\r\n        <stop offset=\"0%\" stop-color=#FE9805></stop>\r\n        <stop offset=\"100%\" stop-color=#FE9805></stop>\r\n      </linearGradient>\r\n      <circle cx=\"50%\" cy=\"50%\" stroke=\"#f3f3f3\" stroke-width=\"12\" fill=\"none\" [attr.r]=\"circleR\"/>\r\n      <circle cx=\"50%\" cy=\"50%\"\r\n        stroke=\"url(#grad1)\"\r\n        [attr.r]=\"circleR\"\r\n        stroke-width=\"12\"\r\n        stroke-linecap=\"round\"\r\n        fill=\"none\"\r\n        [attr.stroke-dasharray]=\"circleDasharray\"\r\n        [attr.stroke-dashoffset]=\"percentageOffset(percent| async)\"\r\n      />\r\n      \r\n      <text x=\"50%\" y=\"55%\" class=\"timer-text\" *ngIf=\"mobile=='android'\">{{time | async }}</text>\r\n      <text x=\"50%\" y=\"-45%\" class=\"timer-text\" *ngIf=\"mobile=='ios'\">{{time | async }}</text>\r\n      </svg>\r\n    </div>\r\n  \r\n\t\t<div *ngFor=\"let child of childsarray;let i = index;\">\r\n\t\t\t<div  *ngIf=\"child.status=='Active'\">\r\n\r\n        <!-- <div *ngIf=\"child.date==currentdate\"> -->\r\n          <div  class=\"main\" [class.ativeindex]=\"activeid == child.hiringid\" [disabled]=\"disabled[i]\">\r\n            <div class=\"inner\" >\r\n              <div class=\"left\" (click)=\"gotoprofile(child)\">\r\n                <img src=\"{{child.profile}}\" width=\"140px\" height=\"125px\">\r\n              </div>\r\n              <div class=\"right\">\r\n\r\n\r\n\r\n\r\n                <div class=\"rtext\">{{child.childname}},<span style=\"font-weight:400;margin-left: 3%;\">{{child.age}} years</span>\r\n                  </div>\r\n                <div class=\"rtext1\">Care Giver</div>\r\n                <div class=\"rtext2\">{{child.fname}} {{child.lname}}</div>\r\n                <div class=\"rtext3\">Date : {{child.date}}</div>\r\n                <div class=\"rtext3\">Timing</div>\r\n                <div class=\"rtext4\">{{child.starttime}} - {{child.endtime}}</div>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"tbtndiv\">\r\n              <ion-button class=\"tbtn\" (click)=\"viewtimer(child,i)\" [disabled]=\"disabled[i]\">view timer</ion-button>\r\n            </div>\r\n\r\n          </div>\r\n        <!-- </div> -->\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n \r\n\t\t<!-- <div class=\"main\" (click)=\"gotoprofile()\">\r\n\t\t\t<div class=\"inner\">\r\n\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t<img src=\"assets/imgs/boy.png\" width=\"140px\" height=\"125px\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t<div class=\"rtext\">Emily,<span style=\"font-weight:400;margin-left: 3%;\">3 years</span></div>\r\n\t\t\t\t\t<div class=\"rtext1\">Care Giver</div>\r\n\t\t\t\t\t<div class=\"rtext2\">Ana Claudia</div>\r\n\t\t\t\t\t<div class=\"rtext3\">Timing</div>\r\n\t\t\t\t\t<div class=\"rtext4\">8:40 pm - 6:00 am</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "EaT9":
/*!*********************************************************!*\
  !*** ./src/app/homescreen/homescreen-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HomescreenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomescreenPageRoutingModule", function() { return HomescreenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _homescreen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homescreen.page */ "pBMl");




const routes = [
    {
        path: '',
        component: _homescreen_page__WEBPACK_IMPORTED_MODULE_3__["HomescreenPage"]
    }
];
let HomescreenPageRoutingModule = class HomescreenPageRoutingModule {
};
HomescreenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomescreenPageRoutingModule);



/***/ }),

/***/ "KKpI":
/*!*************************************************!*\
  !*** ./src/app/homescreen/homescreen.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*.cheader{\n\tposition: fixed;\n}*/\n.headBg {\n  --background: #F7F7F7;\n  padding-top: 8%;\n}\n.menuicon {\n  color: #000;\n}\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n.pimg {\n  width: 41px;\n  height: 41px;\n  border-radius: 50px;\n}\n.logo {\n  text-align: right;\n  margin-right: 5%;\n}\n.logo img {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\n.background {\n  --background: #F7F7F7;\n}\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n.timer {\n  text-align: center;\n}\n.text {\n  font-size: 18px;\n  color: #000;\n  font-weight: 600;\n}\n.text1 {\n  color: #FE9805;\n  font-size: 29px;\n  font-weight: 600;\n}\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 7%;\n}\n.left img {\n  border-radius: 7px;\n}\n.inner {\n  padding: 2% 3%;\n  display: flex;\n}\n.right {\n  margin-left: 5%;\n  width: 50%;\n  margin-top: 2%;\n}\n.rtext {\n  font-size: 20px;\n  font-weight: 600;\n}\n.rtext1 {\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 2%;\n  color: #000000;\n}\n.rtext3 {\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 4%;\n  color: #000000;\n}\n.rtext4 {\n  margin-top: 3%;\n}\n#progress-circle {\n  margin-top: 50px;\n  transform: rotate(-90deg);\n}\n.timer-text {\n  transform: rotate(90deg);\n  transform-origin: center;\n  font-size: 32px;\n  text-anchor: middle;\n  font-weight: 600;\n  fill: #333;\n}\n.tbtndiv {\n  width: 85%;\n  margin: 0% auto;\n  padding-bottom: 5px;\n}\n.tbtn {\n  font-size: 18px;\n  --background: #FE9805;\n  width: 100%;\n  height: 45px;\n  text-transform: capitalize;\n}\n.ativeindex {\n  background: #ffffff;\n  border: 2px solid #fe9805;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWVzY3JlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FBR0E7RUFDQyxxQkFBQTtFQUNBLGVBQUE7QUFDRDtBQUNBO0VBQ0MsV0FBQTtBQUVEO0FBRUM7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDSDtBQUVBO0VBQ0MsV0FBQTtFQUNHLFlBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0E7RUFDQyxpQkFBQTtFQUNDLGdCQUFBO0FBRUY7QUFBQTtFQUNDLFdBQUE7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQURBO0VBQ0UscUJBQUE7QUFJRjtBQUZBO0VBQ0MsVUFBQTtFQUNBLGVBQUE7QUFLRDtBQUhBO0VBQ0Msa0JBQUE7QUFNRDtBQUpBO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQU9EO0FBTEE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUUQ7QUFOQTtFQUNDLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFTRDtBQVBBO0VBQ0Msa0JBQUE7QUFVRDtBQVJBO0VBQ0MsY0FBQTtFQUNBLGFBQUE7QUFXRDtBQVRBO0VBQ0MsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBWUQ7QUFWQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQWFEO0FBWEE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQWNEO0FBWkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQWVEO0FBYkE7RUFDQyxjQUFBO0FBZ0JEO0FBYkE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FBZ0JGO0FBYkE7RUFDRSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBZ0JGO0FBZEE7RUFDQyxVQUFBO0VBQ0csZUFBQTtFQUNBLG1CQUFBO0FBaUJKO0FBZkE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBa0JKO0FBZkE7RUFDQyxtQkFBQTtFQUNHLHlCQUFBO0FBa0JKIiwiZmlsZSI6ImhvbWVzY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouY2hlYWRlcntcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcbn0qL1xyXG4uaGVhZEJnIHtcclxuXHQtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcblx0cGFkZGluZy10b3A6IDglO1xyXG4gIH1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuLmlvc3tcclxuXHRcclxuXHQuaGVhZEJnIHtcclxuXHQgIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuXHQgIHBhZGRpbmc6IDMlIDAlO1xyXG5cdH1cclxuICB9XHJcbi5waW1ne1xyXG5cdHdpZHRoOiA0MXB4O1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4ubG9nb3tcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbi5sb2dvIGltZ3tcclxuXHR3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6OTAlO1xyXG5cdG1hcmdpbjo1JSBhdXRvO1xyXG59XHJcbi50aW1lcntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHR7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGNvbG9yOiMwMDA7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGV4dDF7XHJcblx0Y29sb3I6I0ZFOTgwNTtcclxuXHRmb250LXNpemU6IDI5cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ubWFpbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogNyU7XHJcbn1cclxuLmxlZnQgaW1ne1xyXG5cdGJvcmRlci1yYWRpdXM6N3B4O1xyXG59XHJcbi5pbm5lcntcclxuXHRwYWRkaW5nOjIlIDMlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnJpZ2h0e1xyXG5cdG1hcmdpbi1sZWZ0OiA1JTtcclxuXHR3aWR0aDogNTAlO1xyXG5cdG1hcmdpbi10b3A6MiU7XHJcbn1cclxuLnJ0ZXh0e1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LXdlaWdodDo2MDA7XHJcbn1cclxuLnJ0ZXh0MXtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6NjAwO1xyXG5cdG1hcmdpbi10b3A6IDIlO1xyXG5cdGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5ydGV4dDN7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OjYwMDtcclxuXHRtYXJnaW4tdG9wOiA0JTtcclxuXHRjb2xvcjogIzAwMDAwMDtcclxufVxyXG4ucnRleHQ0e1xyXG5cdG1hcmdpbi10b3A6IDMlO1xyXG59XHJcblxyXG4jcHJvZ3Jlc3MtY2lyY2xle1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxufVxyXG5cclxuLnRpbWVyLXRleHR7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuLnRidG5kaXZ7XHJcblx0d2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMCUgYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLnRidG57XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRTk4MDU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uYXRpdmVpbmRleHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZlOTgwNTtcclxufSJdfQ== */");

/***/ }),

/***/ "lPtD":
/*!*************************************************!*\
  !*** ./src/app/homescreen/homescreen.module.ts ***!
  \*************************************************/
/*! exports provided: HomescreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomescreenPageModule", function() { return HomescreenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _homescreen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homescreen-routing.module */ "EaT9");
/* harmony import */ var _homescreen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homescreen.page */ "pBMl");







let HomescreenPageModule = class HomescreenPageModule {
};
HomescreenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _homescreen_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomescreenPageRoutingModule"]
        ],
        declarations: [_homescreen_page__WEBPACK_IMPORTED_MODULE_6__["HomescreenPage"]]
    })
], HomescreenPageModule);



/***/ }),

/***/ "pBMl":
/*!***********************************************!*\
  !*** ./src/app/homescreen/homescreen.page.ts ***!
  \***********************************************/
/*! exports provided: HomescreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomescreenPage", function() { return HomescreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_homescreen_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./homescreen.page.html */ "5uIQ");
/* harmony import */ var _homescreen_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homescreen.page.scss */ "KKpI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var _services_editchild_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/editchild.service */ "l2wf");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");











const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;
let HomescreenPage = class HomescreenPage {
    constructor(navCtrl, loading, rest, editchild, platform, statusbar) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.rest = rest;
        this.editchild = editchild;
        this.platform = platform;
        this.statusbar = statusbar;
        this.childsarray = [];
        this.childsarray2 = [];
        this.error = {
            status: false,
            message: '',
        };
        this.picture = false;
        this.startduraation = 1;
        this.circleR = circleR;
        this.circleDasharray = circleDasharray;
        this.parentProfile = 'assets/imgs/profilelogo.png';
        this.time = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"]('00:00');
        this.percent = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"](100);
        this.progressbar = false;
        this.timer = 0;
        this.removebtn = false;
        this.activeid = 0;
        this.disabled = [];
    }
    ngOnInit() {
        this.userType = localStorage.getItem('userType');
        console.log('userType:', this.userType);
        this.accountid = localStorage.getItem('accountTypeId');
        console.log('accountid:', this.accountid);
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log('user details', this.user);
        this.name = this.user.first_name;
        console.log('first_name', this.name);
        this.parentid = this.user.users_id;
        console.log('parent id:', this.parentid);
        if (this.platform.is('android')) {
            this.mobile = 'android';
        }
        if (this.platform.is('ios')) {
            this.mobile = 'ios';
        }
        this.platform.ready().then(() => {
            // let status bar overlay webview
            this.statusbar.overlaysWebView(true);
            // set status bar to white
            // this.statusbar.backgroundColorByHexString('#FFFFFF');
            this.statusbar.styleDefault();
        });
    }
    goto() {
        this.navCtrl.navigateForward('/parentprofileview');
    }
    ionViewWillEnter() {
        this.getprofile();
        this.showchild();
    }
    getprofile() {
        this.rest.sendRequest('get_profile_picture', { userId: this.parentid }).subscribe((data) => {
            console.log('profile get data:', data);
            if (data.data.profile_picture == null || data.data.profile_picture == '') {
                this.parentProfile = this.parentProfile;
            }
            else {
                this.parentProfile = data.data.profile_picture;
            }
        });
    }
    showchild() {
        this.currentdate = moment__WEBPACK_IMPORTED_MODULE_9__(new Date()).format('YYYY-MM-DD');
        console.log('curent date', this.currentdate);
        const currentDate = moment__WEBPACK_IMPORTED_MODULE_9__(new Date()).format('DD-MM-YY');
        this.childsarray = [];
        this.loading.loadershow();
        this.rest.sendRequest('home_screen_hirings', { parentId: this.parentid }).subscribe((data) => {
            console.log('home_screen_hirings', data);
            if (data.status == 'success') {
                this.loading.hideLoader();
                // if(data.data[0]){
                //   if(data.data[0].child_details.profile_picture==null || data.data[0].child_details.profile_picture==''){
                //     this.defaultProfile='assets/imgs/profilelogo.png';
                //   }else{
                //     this.defaultProfile=data.data[0].child_details.profile_picture
                //   }
                //   let currentDateTime=data.data[0].current_time
                //   console.log('current time',data.data[0].current_time);
                //   let obj={
                //     caregiverid:data.data[0].caregiver_id,
                //     hiringid:data.data[0].hiring_id,
                //     fname:data.data[0].caregiver_details.first_name,
                //     lname:data.data[0].caregiver_details.last_name,
                //     profile:this.defaultProfile,
                //     age:data.data[0].child_details.age,
                //     childid:data.data[0].child_details.child_id,
                //     parentid:data.data[0].child_details.parent_id,
                //     childname:data.data[0].child_details.child_name,
                //     starttime:data.data[0].start_time,
                //     endtime:data.data[0].end_time,
                //     status:data.data[0].status,
                //     date:data.data[0].date
                //   }
                //   if(data.data[0].status=='Active'){
                //     // console.log('statttt time===>>>',data.data[i].start_time);
                //     if(currentDate==data.data[0].date){
                //       this.childsarray.push(obj);
                //     }
                //     //  this.childsarray.push(obj)
                //     // console.log('endddd  time===>>>',data.data[0].end_time);
                //     // if(data.data[0].end_time>currentDateTime){
                //     //   this.dutyTimer(currentDateTime,data.data[0].end_time,data.data[0].date)
                //     //   // console.log('time===>>>',data.data[i].end_time);
                //     // }
                //     //  this.childsarray.push(obj)
                //    // this.getdifference(data.data[i].end_time,data.data[i].start_time);
                //     this.picture=true;
                //   }
                // }
                // if(data.data[1]){
                //   if(data.data[1].child_details.profile_picture==null || data.data[1].child_details.profile_picture==''){
                //     this.defaultProfile='assets/imgs/profilelogo.png';
                //   }else{
                //     this.defaultProfile=data.data[1].child_details.profile_picture
                //   }
                //   let currentDateTime=data.data[0].current_time
                //   console.log('current time',data.data[1].current_time);
                //   let obj={
                //     caregiverid:data.data[1].caregiver_id,
                //     hiringid:data.data[0].hiring_id,
                //     fname:data.data[1].caregiver_details.first_name,
                //     lname:data.data[1].caregiver_details.last_name,
                //     profile:this.defaultProfile,
                //     age:data.data[1].child_details.age,
                //     childid:data.data[1].child_details.child_id,
                //     parentid:data.data[1].child_details.parent_id,
                //     childname:data.data[1].child_details.child_name,
                //     starttime:data.data[1].start_time,
                //     endtime:data.data[1].end_time,
                //     status:data.data[1].status,
                //     date:data.data[1].date
                //   }
                //   if(data.data[1].status=='Active'){
                //     // console.log('statttt time===>>>',data.data[i].start_time);
                //     if(currentDate==data.data[1].date){
                //       this.childsarray2.push(obj);
                //     }
                //     //  this.childsarray.push(obj)
                //     // console.log('endddd  time===>>>',data.data[0].end_time);
                //     // if(data.data[0].end_time>currentDateTime){
                //     //   this.dutyTimer(currentDateTime,data.data[0].end_time,data.data[0].date)
                //     //   // console.log('time===>>>',data.data[i].end_time);
                //     // }
                //     //  this.childsarray.push(obj)
                //    // this.getdifference(data.data[i].end_time,data.data[i].start_time);
                //     this.picture=true;
                //   }
                // }
                for (let i = 0; i < data.data.length; i++) {
                    //  console.log('data',data.data)
                    if (data.data[i].child_details.profile_picture == null || data.data[i].child_details.profile_picture == '') {
                        this.defaultProfile = 'assets/imgs/profilelogo.png';
                    }
                    else {
                        this.defaultProfile = data.data[i].child_details.profile_picture;
                    }
                    const currentDate = moment__WEBPACK_IMPORTED_MODULE_9__(new Date()).format('DD-MM-YY');
                    console.log('current date', currentDate);
                    const obj = {
                        caregiverid: data.data[i].caregiver_id,
                        hiringid: data.data[i].hiring_id,
                        fname: data.data[i].caregiver_details.first_name,
                        lname: data.data[i].caregiver_details.last_name,
                        profile: this.defaultProfile,
                        age: data.data[i].child_details.age,
                        childid: data.data[i].child_details.child_id,
                        parentid: data.data[i].child_details.parent_id,
                        childname: data.data[i].child_details.child_name,
                        starttime: data.data[i].start_time,
                        endtime: data.data[i].end_time,
                        status: data.data[i].status,
                        date: data.data[i].date
                    };
                    if (data.data[i].status == 'Active') {
                        console.log('statttt time===>>>', data.data[i].date);
                        if (currentDate == data.data[i].date) {
                            this.childsarray.push(obj);
                            this.disabled.push(false);
                        }
                        // console.log('endddd  time===>>>',data.data[i].end_time);
                        // if(data.data[i].end_time>currentDateTime){
                        //   this.dutyTimer(currentDateTime,data.data[i].end_time,data.data[i].date)
                        // }
                        //  this.childsarray.push(obj)
                        // this.getdifference(data.data[i].end_time,data.data[i].start_time);
                        this.picture = true;
                    }
                }
                //  data.data.forEach(val=>{
                //    if(val.child_details.profile_picture==null || val.child_details.profile_picture==''){
                //      this.defaultProfile='assets/imgs/userprofile.png';
                //    }else{
                //      this.defaultProfile=val.child_details.profile_picture
                //    }
                //    let obj={
                //      caregiverid:val.caregiver_id,
                //      fname:val.caregiver_details.first_name,
                //      lname:val.caregiver_details.last_name,
                //      profile:this.defaultProfile,
                //      age:val.child_details.age,
                //      childid:val.child_details.child_id,
                //      parentid:val.child_details.parent_id,
                //      childname:val.child_details.child_name,
                //      starttime:val.start_time,
                //      endtime:val.end_time,
                //      date:val.date,
                //      status:val.status,
                //    }
                //    if(val.status=='Active'){
                //     /*  let currentDateTime = new Date(); */
                //      this.childsarray.push(obj);
                //      this.picture=true;
                //      if(val.end_time>currentDateTime){
                //        //  this.updateTimeInteval =setInterval(()=>{
                //         this.dutyTimer(currentDateTime,val.end_time,val.date)
                //         // },1000)
                //     }
                //   /*   if(StartdateTime.getTime() < currentDateTime.getTime()){
                //       console.log("date.....",new Date(StartdateTime).getTime());
                //       this.getdifference(obj.endtime,obj.starttime);
                //     }
                //     else{
                //       console.log("duty not started");
                //     } */
                //    }
                //  })
                console.log('requestsarray:', this.childsarray);
            }
            if (data.status == 'error') {
                this.loading.hideLoader();
                console.log('signup request data:', data.status);
                this.error.status = true;
                this.error.message = data.message;
                setTimeout(() => {
                    this.error.status = false;
                    this.error.message = '';
                }, 3000);
                return;
            }
        });
    }
    // dutyTimer(starttime,endtime,date){
    //   const StartdateTimeMake = date + ' ' + starttime;
    //   const EnddateTimeMake = date + ' ' + endtime;
    //   const StartdateTime = new Date(StartdateTimeMake);
    //   const EnddateTime = new Date(StartdateTime);
    //   const currentDateTime = new Date();
    //   // if(StartdateTime.getTime() < currentDateTime.getTime() ){
    //   //   console.log("date.....",new Date(StartdateTime).getTime());
    //   // }
    //   // else{
    //   //   console.log("duty not started");
    //   // }
    // }
    viewtimer(child, i) {
        // console.log('index for array',i)
        // console.log('child.hiringid',child.hiringid);
        this.activeid = child.hiringid;
        console.log('a this.activeid ===', this.activeid);
        // console.log('this.disabled === after',this.disabled);
        const currentDateTime = moment__WEBPACK_IMPORTED_MODULE_9__(new Date()).format('h:mm a');
        console.log('current time', currentDateTime);
        // console.log('starttime',child.starttime);
        // console.log('edit time with new date',moment().format('HH:MM'));
        // console.log('child hiring date::',child.date);
        var convertedTime = moment__WEBPACK_IMPORTED_MODULE_9__(currentDateTime, 'hh:mm a').format('HH:mm');
        console.log('conveted time', convertedTime);
        var starttime = moment__WEBPACK_IMPORTED_MODULE_9__(child.starttime, 'hh:mm a').format('HH:mm');
        console.log('started conveted time', starttime);
        if (convertedTime > starttime) {
            this.rest.sendRequest('view_timer_details', { hiringId: child.hiringid }).subscribe((data) => {
                console.log('date time:', data);
                // console.log('start time:::',data.data.start_time)
                // console.log('current time time:::',data.data.current_time)
                this.progressbar = true;
                // this.starttime=data.data.start_time;
                this.currenttime = moment__WEBPACK_IMPORTED_MODULE_9__(data.data.current_time, 'hh:mm a').format('HH:mm');
                // console.log('current conveted time into 24 hour',this.currenttime);
                var endtime24format = moment__WEBPACK_IMPORTED_MODULE_9__(data.data.end_time, 'hh:mm a').format('HH:mm');
                // console.log('end conveted time into 24 hour',endtime24format);
                // this.currenttime=data.data.current_time;
                if (endtime24format > this.currenttime) {
                    this.disabled.map((data, index) => {
                        if (i == index) {
                            this.disabled[index] = true;
                            console.log('index====', index);
                        }
                        else {
                            this.disabled[index] = false;
                        }
                    });
                    this.getdifference(data.data.end_time, data.data.current_time);
                }
            });
        }
        else {
            this.loading.presentToast('This job is not started Yet!');
        }
    }
    getdifference(end, start) {
        console.log(end, start);
        // this.editchild.childstime.push(start)
        // this.editchild.childetime.push(end)
        this.starttime = start;
        this.endtime = end;
        console.log(this.endtime, 'endtime' + 'start', this.starttime);
        const diff = moment__WEBPACK_IMPORTED_MODULE_9__(this.endtime, 'HH:mm a').diff(moment__WEBPACK_IMPORTED_MODULE_9__(this.starttime, 'HH:mm a'));
        const d = moment__WEBPACK_IMPORTED_MODULE_9__["duration"](diff);
        const hours = Math.floor(d.asHours());
        const minutes = Math.floor(d.asMinutes());
        this.seconds = Math.floor(d.asSeconds());
        this.total = hours + ' hours ' + minutes + ' minutes';
        // console.log('this.total',this.total);
        console.log('asSeconds', this.seconds);
        this.starttimer(this.seconds);
    }
    starttimer(duration) {
        // console.log('seconds in func::::',duration)
        this.timer = duration;
        // console.log('timer',this.timer);
        clearInterval(this.interval);
        this.updatetimevalue();
        this.interval = setInterval(() => {
            this.updatetimevalue();
        }, 1000);
    }
    percentageOffset(percent) {
        const percentagefloat = percent / 100;
        return circleDasharray * (1 - percentagefloat);
    }
    updatetimevalue() {
        let hours = this.timer / 3600;
        let minutes = this.timer % 3600 / 60;
        // let minutes:any=this.timer / 60;
        let seconds = this.timer % 60;
        hours = String('0' + Math.floor(hours)).slice(-2);
        minutes = String('0' + Math.floor(minutes)).slice(-2);
        seconds = String('0' + Math.floor(seconds)).slice(-2);
        const text = hours + ':' + minutes + ':' + seconds;
        this.time.next(text);
        // console.log('time',text);
        this.totaltime = this.seconds;
        const percentage = ((this.totaltime - this.timer) / this.totaltime) * 100;
        this.percent.next(percentage);
        // console.log('percentage',percentage)
        --this.timer;
        if (this.timer < -1) {
            this.starttimer(this.seconds);
        }
        if (this.timer < 0) {
            clearInterval(this.interval);
            this.timer = 0;
        }
    }
    // ionViewWillLeave(){
    //   clearInterval(this.interval)
    //   clearInterval(this.updateTimeInteval)
    // }
    gotoprofile(id) {
        if (this.accountid == 1) {
            this.navCtrl.navigateForward(['/profile', {
                    page: 'homescreen',
                    userid: id.caregiverid,
                }]);
        }
        // else if(this.userType=='caregiver'){
        //   this.navCtrl.navigateForward('/childprofile1');
        // }
    }
};
HomescreenPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
    { type: _services_editchild_service__WEBPACK_IMPORTED_MODULE_7__["EditchildService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"] }
];
HomescreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-homescreen',
        template: _raw_loader_homescreen_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_homescreen_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomescreenPage);



/***/ })

}]);
//# sourceMappingURL=homescreen-homescreen-module-es2015.js.map