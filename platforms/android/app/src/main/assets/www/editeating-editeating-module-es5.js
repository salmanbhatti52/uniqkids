(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editeating-editeating-module"], {
    /***/
    "ADZo":
    /*!*************************************************!*\
      !*** ./src/app/editeating/editeating.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function ADZo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 11px;\n  padding-left: 18px;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 14px;\n  padding-left: 18px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 10% auto;\n}\n\n.field {\n  display: flex;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  background: #FFFFFF;\n  width: 85%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n  padding: 2% 0% 2% 7%;\n}\n\n.imgdiv {\n  margin-left: 7%;\n  margin-top: 4%;\n}\n\n.boxdiv {\n  margin-top: 5%;\n}\n\n.box1 {\n  background: #fff;\n  /*box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;*/\n  box-shadow: #0000001a 2px 5px 5px;\n  border-radius: 14px;\n}\n\n.text1 {\n  font-weight: 600;\n  font-size: 22px;\n  color: #000000;\n}\n\n.text2 {\n  font-weight: 500;\n  font-size: 14px;\n  color: #FFBF05;\n  margin-top: 5%;\n}\n\n.innerbox {\n  text-align: center;\n  padding: 10% 13%;\n}\n\n.icondiv {\n  background: #fff;\n  box-shadow: #0000001a 2px 5px 5px;\n  border-radius: 90px;\n  width: 24px;\n  height: 20px;\n  margin-left: 80%;\n}\n\n.icondiv img {\n  padding: 2px;\n}\n\n.left {\n  width: 45%;\n  float: left;\n  margin-right: 5%;\n  margin-top: 5%;\n}\n\n.right {\n  width: 45%;\n  float: left;\n  margin-left: 5%;\n}\n\n.clear {\n  clear: both;\n}\n\n.bg_white {\n  padding: 0.6em 0em;\n  /*background: #fff;*/\n}\n\n.vertical_list {\n  text-align: center;\n  height: 100px;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding: 0em 6px;\n}\n\n.vertical_slider ion-slide {\n  margin-left: 0em !important;\n  color: #B0B0B0;\n  /*border-top: 1px solid #B0B0B0;\n  border-bottom: 1px solid #B0B0B0;*/\n  font-size: 40px;\n  /* padding: 1em 0em; */\n}\n\n.vertical_slider ion-slide.swiper-slide-active {\n  color: #000 !important;\n  font-size: 44px !important;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVkaXRlYXRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDQyxXQUFBO0FBRUQ7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQUFBO0VBRUUsZUFBQTtFQUNFLGdCQUFBO0FBRUo7O0FBQUE7RUFDQyxrQkFBQTtFQUFvQixnQkFBQTtBQUlyQjs7QUFERTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkM7RUFDQyxrQkFBQTtFQUFvQixpQkFBQTtBQUt0Qjs7QUFIRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUZBO0VBQ0UscUJBQUE7QUFLRjs7QUFIQTtFQUNDLFVBQUE7RUFDQSxnQkFBQTtBQU1EOztBQUpBO0VBQ0MsYUFBQTtBQU9EOztBQUxBO0VBQ0MsYUFBQTtFQUNHLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBUUo7O0FBTkE7RUFFQyxXQUFBO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFRRjs7QUFOQTtFQUNDLGVBQUE7RUFDRyxjQUFBO0FBU0o7O0FBUEE7RUFFSSxjQUFBO0FBU0o7O0FBUEE7RUFDQyxnQkFBQTtFQUNHLDZDQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBQVVKOztBQVJBO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVdEOztBQVRBO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFZRDs7QUFWQTtFQUNDLGtCQUFBO0VBQ0MsZ0JBQUE7QUFhRjs7QUFYQTtFQUNFLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFjSjs7QUFaQTtFQUNFLFlBQUE7QUFlRjs7QUFiQTtFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0FBZ0JGOztBQWRBO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBaUJEOztBQWZBO0VBQ0MsV0FBQTtBQWtCRDs7QUFmQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFrQko7O0FBaEJBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBbUJKOztBQWRBO0VBQ0ksMkJBQUE7RUFDQSxjQUFBO0VBQ0E7b0NBQUE7RUFFQSxlQUFBO0VBQ0Esc0JBQUE7QUFpQko7O0FBYkE7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0FBZ0JKOztBQWJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFnQkYiLCJmaWxlIjoiZWRpdGVhdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgcGFkZGluZzogMSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuLmJhY2tidG57XHJcbiAgbWFyZ2luLWxlZnQ6MCU7XHJcbiAgcGFkZGluZy10b3A6MTFweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcblxyXG4uY3RpdGxle1xyXG5cdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50aXRsZWNsYXNze1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4uaW9ze1xyXG4gIC5iYWNrYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6MCU7XHJcbiAgICBwYWRkaW5nLXRvcDoxNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gIH1cclxuXHQudGl0bGVjbGFzc3tcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDExcHg7XHJcblx0fVxyXG4gIC5oZWFkQmcge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gICAgcGFkZGluZzogMyUgMCU7XHJcbiAgfVxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6ODAlO1xyXG5cdG1hcmdpbjoxMCUgYXV0bztcclxufVxyXG4uZmllbGR7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG4uaW5wdXRkaXZ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgd2lkdGg6IDg1JVxyXG59XHJcbi5waW5wdXRcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBvcGFjaXR5OiA0OCU7XHJcbiAgcGFkZGluZzogMiUgMCUgMiUgNyU7XHJcbn1cclxuLmltZ2RpdntcclxuXHRtYXJnaW4tbGVmdDogNyU7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG4uYm94ZGl2e1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5ib3gxe1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAvKmJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDM1JSkgMHB4IDVweCAxNXB4OyovXHJcbiAgICBib3gtc2hhZG93OiAjMDAwMDAwMWEgMnB4IDVweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcbi50ZXh0MXtcclxuXHRmb250LXdlaWdodDo2MDA7XHJcblx0Zm9udC1zaXplOjIycHg7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxufVxyXG4udGV4dDJ7XHJcblx0Zm9udC13ZWlnaHQ6NTAwO1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG5cdGNvbG9yOiNGRkJGMDU7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmlubmVyYm94e1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMCUgMTMlO1xyXG59XHJcbi5pY29uZGl2e1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogIzAwMDAwMDFhIDJweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XHJcbn1cclxuLmljb25kaXYgaW1ne1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG4ubGVmdHtcclxuXHR3aWR0aDogNDUlO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLnJpZ2h0e1xyXG5cdHdpZHRoOiA0NSU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0bWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbi5jbGVhcntcclxuXHRjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmJnX3doaXRle1xyXG4gICAgcGFkZGluZzogMC42ZW0gMGVtO1xyXG4gICAgLypiYWNrZ3JvdW5kOiAjZmZmOyovXHJcbn1cclxuLnZlcnRpY2FsX2xpc3R7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBhZGRpbmc6MGVtIDZweDtcclxufVxyXG4udmVydGljYWxfbGlzdCBwIHtcclxuICAgIC8vbWFyZ2luOiAwcHg7XHJcbn1cclxuLnZlcnRpY2FsX3NsaWRlciBpb24tc2xpZGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMGVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojQjBCMEIwO1xyXG4gICAgLypib3JkZXItdG9wOiAxcHggc29saWQgI0IwQjBCMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQjBCMEIwOyovXHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAvKiBwYWRkaW5nOiAxZW0gMGVtOyAqL1xyXG5cclxufVxyXG5cclxuLnZlcnRpY2FsX3NsaWRlciBpb24tc2xpZGUuc3dpcGVyLXNsaWRlLWFjdGl2ZXtcclxuICAgIGNvbG9yOiMwMDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogNDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiAjZmYwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "L6KK":
    /*!*********************************************************!*\
      !*** ./src/app/editeating/editeating-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: EditeatingPageRoutingModule */

    /***/
    function L6KK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditeatingPageRoutingModule", function () {
        return EditeatingPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _editeating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editeating.page */
      "x+1v");

      var routes = [{
        path: '',
        component: _editeating_page__WEBPACK_IMPORTED_MODULE_3__["EditeatingPage"]
      }];

      var EditeatingPageRoutingModule = /*#__PURE__*/_createClass(function EditeatingPageRoutingModule() {
        _classCallCheck(this, EditeatingPageRoutingModule);
      });

      EditeatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditeatingPageRoutingModule);
      /***/
    },

    /***/
    "dGYJ":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editeating/editeating.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function dGYJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t\t  <ion-toolbar class=\"headBgGlobal\">\r\n\t\t    <ion-buttons slot=\"start\" class=\"backbtn\">\r\n\t\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t\t  </ion-buttons>\r\n\t\t  <ion-title class=\"ctitle\">Eating Time</ion-title>\r\n\t\t</ion-toolbar>\r\n</ion-header> -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col class=\"backbtn\" size=\"2\">\r\n        <div>\r\n          <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"8\">\r\n        <ion-text class=\"ctitle\">Eating Time</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\">\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\t<div class=\"wrapper\">\r\n\t\t\t<ion-row class=\"bg_white\">\r\n    <ion-col size=\"2\"></ion-col>\r\n    <ion-col size=\"2\" class=\"vertical_list\">\r\n      <ion-slides (ionSlideDidChange)=\"getStartHoures()\" class=\"vertical_slider s_hours\" [options]=\"option\"  >\r\n        <ion-slide  *ngFor=\"let i of hours\" >\r\n          <ng-container *ngIf=\"i<=9\">\r\n            <p>0{{i}}</p>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"i>9\">\r\n            <p>{{i}}</p>\r\n          </ng-container>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-col>\r\n    <ion-col size=\"1\"></ion-col>\r\n    <ion-col size=\"2\" class=\"vertical_list\">\r\n      <ion-slides (ionSlideDidChange)=\"getStartHoures()\" class=\"vertical_slider s_mints\" [options]=\"option\"  >\r\n        <ion-slide  *ngFor=\"let i of mints\" >\r\n          <ng-container *ngIf=\"i<=9\">\r\n            <p>0{{i}}</p>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"i>9\">\r\n            <p>{{i}}</p>\r\n          </ng-container>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-col>\r\n    <ion-col size=\"1\"></ion-col>\r\n    <ion-col size=\"2\" class=\"vertical_list s_v\">\r\n      <ion-slides (ionSlideDidChange)=\"getStartHoures()\" class=\"vertical_slider\" [options]=\"option\"  >\r\n        <ion-slide>\r\n          <p style=\"font-size: 23px;\">AM</p>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <p style=\"font-size: 23px;\">PM</p>\r\n        </ion-slide>\r\n        <!-- <ion-slide>\r\n          <p style=\"font-size: 23px;\">AM</p>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <p style=\"font-size: 23px;\">PM</p>\r\n        </ion-slide> -->\r\n      </ion-slides>\r\n    </ion-col>\r\n  </ion-row>\r\n\t\t<div class=\"field\">\r\n\t\t\t<div class=\"inputdiv\">\r\n\t\t\t\t<div class=\"pinput\">\r\n\t\t\t\t\t<ion-input placeholder=\"Enter food name\" type=\"text\" [(ngModel)]=\"foodname\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"imgdiv\" (click)=\"add()\">\r\n\t\t\t\t<img src=\"assets/imgs/icons/plus.svg\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n    <p *ngIf=\"error.status\" class=\"error\">\r\n      {{error.message}}\r\n    </p>\r\n    \r\n\t\t\r\n\t\t<div class=\"boxdiv\">\r\n\t\t\t<div class=\"left\" *ngFor=\"let arr of editchildService.food;let i = index;\">\r\n\t\t\t\t<div class=\"box1\">\r\n\t\t\t\t\t<div class=\"innerbox\">\r\n            <div class=\"icondiv\" (click)=\"del(i)\"><ion-icon name=\"close\"></ion-icon></div>\r\n\t\t\t\t\t\t<div class=\"text1\">{{arr.eating_time}}</div>\r\n\t\t\t\t\t\t<div class=\"text2\">{{arr.food_name}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"right\">\r\n\t\t\t\t<div class=\"box1\">\r\n\t\t\t\t\t<div class=\"innerbox\">\r\n\t\t\t\t\t\t<div class=\"text1\">8:30 AM</div>\r\n\t\t\t\t\t\t<div class=\"text2\">Food Name</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div> -->\r\n\t\t\t<div class=\"clear\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "x+1v":
    /*!***********************************************!*\
      !*** ./src/app/editeating/editeating.page.ts ***!
      \***********************************************/

    /*! exports provided: EditeatingPage */

    /***/
    function x1v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditeatingPage", function () {
        return EditeatingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_editeating_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./editeating.page.html */
      "dGYJ");
      /* harmony import */


      var _editeating_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editeating.page.scss */
      "ADZo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_child_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/child.service */
      "ZEea");
      /* harmony import */


      var _services_editchild_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/editchild.service */
      "l2wf");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var EditeatingPage = /*#__PURE__*/function () {
        function EditeatingPage(navCtrl, childService, editchildService, route, location) {
          _classCallCheck(this, EditeatingPage);

          this.navCtrl = navCtrl;
          this.childService = childService;
          this.editchildService = editchildService;
          this.route = route;
          this.location = location;
          this.loaded = false;
          this.option = {
            loop: true,
            direction: 'vertical',
            slidesPerView: 3,
            centeredSlides: true,
            centeredSlidesBounds: true
          };
          this.hours = [];
          this.mints = [];
          this.array = [];
          this.foodname = '';
          this.Time = '';
          this.error = {
            status: false,
            message: ""
          };
          this.printTimeErrorBoolen = false;
        }

        _createClass(EditeatingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hours = Array.from({
              length: 12
            }, function (v, k) {
              return k + 1;
            });
            this.mints = Array.from({
              length: 60
            }, function (v, k) {
              return k + 0;
            });
            console.log('service food ===  entering food page', this.editchildService.food); // this.getfood();
          }
        }, {
          key: "goback",
          value: function goback() {
            this.location.back();
          }
        }, {
          key: "getStartHoures",
          value: function getStartHoures() {
            var _a, _b, _c;

            if (this.loaded) {
              this.sHours = (_a = document.querySelector(".s_hours .swiper-slide-active p")) === null || _a === void 0 ? void 0 : _a.textContent;
              this.sMints = (_b = document.querySelector(".s_mints .swiper-slide-active p")) === null || _b === void 0 ? void 0 : _b.textContent;
              this.sV = (_c = document.querySelector(".s_v .swiper-slide-active p")) === null || _c === void 0 ? void 0 : _c.textContent;
              var calStartTime = this.sHours + ':' + this.sMints + ' ' + this.sV;
              console.log('time', calStartTime);
            }
          }
        }, {
          key: "TimeComparisionFun",
          value: function TimeComparisionFun(dayFilter) {
            this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
            this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
            this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
            this.Time = this.sHours + ':' + this.sMints + ' ' + this.sV;
            console.log(this.Time, "----------", 'endTime');
          } // getfood(){
          //   console.log('food array',this.childService.food)
          //   this.editchildService.food.forEach(val=>{
          //   let data={
          //      medicationName:val.foodName,
          //      medicationTime:val.eatingTime
          //    }
          //    this.array.push(data)
          //   })
          // }

        }, {
          key: "add",
          value: function add() {
            var _this = this;

            this.TimeComparisionFun("dayFilter");

            if (this.foodname && this.Time) {
              var data = {
                eating_time: this.Time,
                food_name: this.foodname
              }; // this.array.push(data);

              this.editchildService.food.push(data);
              console.log('array after appending', this.editchildService.food);
              this.foodname = '';
            } else if (!this.foodname) {
              console.log('empty');
              this.error.status = true;
              this.error.message = "Field is required";
              setTimeout(function () {
                _this.error.status = false;
                _this.error.message = "";
              }, 2000);
            }

            if (!this.Time) {
              console.log('empty time');
            }
          }
        }, {
          key: "del",
          value: function del(i) {
            console.log('index====deleting', i);
            var splice = this.editchildService.food.splice(i, 1);
            console.log('splice', splice);
          }
        }]);

        return EditeatingPage;
      }();

      EditeatingPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_child_service__WEBPACK_IMPORTED_MODULE_5__["ChildService"]
        }, {
          type: _services_editchild_service__WEBPACK_IMPORTED_MODULE_6__["EditchildService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }];
      };

      EditeatingPage.propDecorators = {
        startSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['startSlides']
        }],
        endSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['endSlides']
        }]
      };
      EditeatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editeating',
        template: _raw_loader_editeating_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editeating_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditeatingPage);
      /***/
    },

    /***/
    "x/RH":
    /*!*************************************************!*\
      !*** ./src/app/editeating/editeating.module.ts ***!
      \*************************************************/

    /*! exports provided: EditeatingPageModule */

    /***/
    function xRH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditeatingPageModule", function () {
        return EditeatingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _editeating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./editeating-routing.module */
      "L6KK");
      /* harmony import */


      var _editeating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./editeating.page */
      "x+1v");

      var EditeatingPageModule = /*#__PURE__*/_createClass(function EditeatingPageModule() {
        _classCallCheck(this, EditeatingPageModule);
      });

      EditeatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editeating_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditeatingPageRoutingModule"]],
        declarations: [_editeating_page__WEBPACK_IMPORTED_MODULE_6__["EditeatingPage"]]
      })], EditeatingPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=editeating-editeating-module-es5.js.map