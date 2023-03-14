(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medicationtime-medicationtime-module"], {
    /***/
    "1wR1":
    /*!*********************************************************!*\
      !*** ./src/app/medicationtime/medicationtime.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function wR1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 11px;\n  padding-left: 18px;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 14px;\n  padding-left: 18px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 10% auto;\n}\n\n.field {\n  display: flex;\n  margin-top: 5%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  background: #FFFFFF;\n  width: 85%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n  padding: 2% 0% 2% 7%;\n}\n\n.imgdiv {\n  margin-left: 7%;\n  margin-top: 4%;\n}\n\n.boxdiv {\n  margin-top: 10%;\n}\n\n.box1 {\n  background: #fff;\n  /*box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;*/\n  box-shadow: #0000001a 2px 5px 5px;\n  border-radius: 14px;\n}\n\n.text1 {\n  font-weight: 600;\n  font-size: 22px;\n  color: #000000;\n}\n\n.text2 {\n  font-weight: 500;\n  font-size: 14px;\n  color: #FFBF05;\n  margin-top: 5%;\n}\n\n.innerbox {\n  text-align: center;\n  padding: 10% 13%;\n}\n\n.icondiv {\n  background: #fff;\n  box-shadow: #0000001a 2px 5px 5px;\n  border-radius: 90px;\n  width: 24px;\n  height: 20px;\n  margin-left: 80%;\n}\n\n.icondiv img {\n  padding: 2px;\n}\n\n.left {\n  width: 45%;\n  float: left;\n  margin-right: 5%;\n  margin-top: 5%;\n}\n\n.right {\n  width: 45%;\n  /*float: left;*/\n  margin-left: 5%;\n}\n\n.clear {\n  clear: both;\n}\n\n.bg_white {\n  padding: 0.6em 0em;\n  /*background: #fff;*/\n}\n\n.vertical_list {\n  text-align: center;\n  height: 100px;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding: 0em 6px;\n}\n\n.vertical_slider ion-slide {\n  margin-left: 0em !important;\n  color: #B0B0B0;\n  /*border-top: 1px solid #B0B0B0;\n  border-bottom: 1px solid #B0B0B0;*/\n  font-size: 40px;\n  /* padding: 1em 0em; */\n}\n\n.vertical_slider ion-slide.swiper-slide-active {\n  color: #000 !important;\n  font-size: 44px !important;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lZGljYXRpb250aW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFEQTtFQUVFLGVBQUE7RUFDRSxnQkFBQTtBQUdKOztBQURBO0VBQ0Msa0JBQUE7RUFBb0IsZ0JBQUE7QUFLckI7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhDO0VBQ0Msa0JBQUE7RUFBb0IsaUJBQUE7QUFNdEI7O0FBSkU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFIQTtFQUNFLHFCQUFBO0FBTUY7O0FBSkE7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7QUFPRDs7QUFMQTtFQUNDLGFBQUE7RUFDQSxjQUFBO0FBUUQ7O0FBTkE7RUFDQyxhQUFBO0VBQ0csbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFTSjs7QUFQQTtFQUVDLFdBQUE7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQVNGOztBQVBBO0VBQ0MsZUFBQTtFQUNHLGNBQUE7QUFVSjs7QUFSQTtFQUVJLGVBQUE7QUFVSjs7QUFSQTtFQUNDLGdCQUFBO0VBQ0csNkNBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBV0o7O0FBVEE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBWUQ7O0FBVkE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQWFEOztBQVhBO0VBQ0Msa0JBQUE7RUFDQyxnQkFBQTtBQWNGOztBQVpBO0VBQ0UsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQWVGOztBQWJBO0VBQ0UsWUFBQTtBQWdCRjs7QUFkQTtFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBaUJEOztBQWZBO0VBQ0MsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBa0JEOztBQWhCQTtFQUNDLFdBQUE7QUFtQkQ7O0FBaEJBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFvQko7O0FBZkE7RUFDSSwyQkFBQTtFQUNBLGNBQUE7RUFDQTtvQ0FBQTtFQUVBLGVBQUE7RUFDQSxzQkFBQTtBQWtCSjs7QUFkQTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7QUFpQko7O0FBZEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQWlCRiIsImZpbGUiOiJtZWRpY2F0aW9udGltZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgcGFkZGluZzogMSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuLmJhY2tidG57XHJcbiAgbWFyZ2luLWxlZnQ6MCU7XHJcbiAgcGFkZGluZy10b3A6MTFweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcbiAgLmJhY2tidG57XHJcbiAgICBtYXJnaW4tbGVmdDowJTtcclxuICAgIHBhZGRpbmctdG9wOjE0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbiAgfVxyXG5cdC50aXRsZWNsYXNze1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTFweDtcclxuXHR9XHJcbiAgLmhlYWRCZyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgICBwYWRkaW5nOiAzJSAwJTtcclxuICB9XHJcbn1cclxuLmJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG4ud3JhcHBlcntcclxuXHR3aWR0aDo4MCU7XHJcblx0bWFyZ2luOjEwJSBhdXRvO1xyXG59XHJcbi5maWVsZHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5pbnB1dGRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICB3aWR0aDogODUlXHJcbn1cclxuLnBpbnB1dFxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG9wYWNpdHk6IDQ4JTtcclxuICBwYWRkaW5nOiAyJSAwJSAyJSA3JTtcclxufVxyXG4uaW1nZGl2e1xyXG5cdG1hcmdpbi1sZWZ0OiA3JTtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG59XHJcbi5ib3hkaXZ7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5ib3gxe1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAvKmJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDM1JSkgMHB4IDVweCAxNXB4OyovXHJcbiAgICBib3gtc2hhZG93OiAjMDAwMDAwMWEgMnB4IDVweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcbi50ZXh0MXtcclxuXHRmb250LXdlaWdodDo2MDA7XHJcblx0Zm9udC1zaXplOjIycHg7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxufVxyXG4udGV4dDJ7XHJcblx0Zm9udC13ZWlnaHQ6NTAwO1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG5cdGNvbG9yOiNGRkJGMDU7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmlubmVyYm94e1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMCUgMTMlO1xyXG59XHJcbi5pY29uZGl2e1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogIzAwMDAwMDFhIDJweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4MCU7XHJcbn1cclxuLmljb25kaXYgaW1ne1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG4ubGVmdHtcclxuXHR3aWR0aDogNDUlO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbi1yaWdodDo1JTtcclxuXHRtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4ucmlnaHR7XHJcblx0d2lkdGg6IDQ1JTtcclxuXHQvKmZsb2F0OiBsZWZ0OyovXHJcblx0bWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbi5jbGVhcntcclxuXHRjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmJnX3doaXRle1xyXG4gICAgcGFkZGluZzogMC42ZW0gMGVtO1xyXG4gICAgLypiYWNrZ3JvdW5kOiAjZmZmOyovXHJcbn1cclxuLnZlcnRpY2FsX2xpc3R7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBhZGRpbmc6MGVtIDZweDtcclxufVxyXG4udmVydGljYWxfbGlzdCBwIHtcclxuICAgIC8vbWFyZ2luOiAwcHg7XHJcbn1cclxuLnZlcnRpY2FsX3NsaWRlciBpb24tc2xpZGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMGVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojQjBCMEIwO1xyXG4gICAgLypib3JkZXItdG9wOiAxcHggc29saWQgI0IwQjBCMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQjBCMEIwOyovXHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAvKiBwYWRkaW5nOiAxZW0gMGVtOyAqL1xyXG5cclxufVxyXG5cclxuLnZlcnRpY2FsX3NsaWRlciBpb24tc2xpZGUuc3dpcGVyLXNsaWRlLWFjdGl2ZXtcclxuICAgIGNvbG9yOiMwMDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogNDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiAjZmYwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "670i":
    /*!*****************************************************************!*\
      !*** ./src/app/medicationtime/medicationtime-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: MedicationtimePageRoutingModule */

    /***/
    function i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicationtimePageRoutingModule", function () {
        return MedicationtimePageRoutingModule;
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


      var _medicationtime_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./medicationtime.page */
      "P6u0");

      var routes = [{
        path: '',
        component: _medicationtime_page__WEBPACK_IMPORTED_MODULE_3__["MedicationtimePage"]
      }];

      var MedicationtimePageRoutingModule = /*#__PURE__*/_createClass(function MedicationtimePageRoutingModule() {
        _classCallCheck(this, MedicationtimePageRoutingModule);
      });

      MedicationtimePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MedicationtimePageRoutingModule);
      /***/
    },

    /***/
    "9oeA":
    /*!*********************************************************!*\
      !*** ./src/app/medicationtime/medicationtime.module.ts ***!
      \*********************************************************/

    /*! exports provided: MedicationtimePageModule */

    /***/
    function oeA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicationtimePageModule", function () {
        return MedicationtimePageModule;
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


      var _medicationtime_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./medicationtime-routing.module */
      "670i");
      /* harmony import */


      var _medicationtime_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./medicationtime.page */
      "P6u0");

      var MedicationtimePageModule = /*#__PURE__*/_createClass(function MedicationtimePageModule() {
        _classCallCheck(this, MedicationtimePageModule);
      });

      MedicationtimePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _medicationtime_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicationtimePageRoutingModule"]],
        declarations: [_medicationtime_page__WEBPACK_IMPORTED_MODULE_6__["MedicationtimePage"]]
      })], MedicationtimePageModule);
      /***/
    },

    /***/
    "P6u0":
    /*!*******************************************************!*\
      !*** ./src/app/medicationtime/medicationtime.page.ts ***!
      \*******************************************************/

    /*! exports provided: MedicationtimePage */

    /***/
    function P6u0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicationtimePage", function () {
        return MedicationtimePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_medicationtime_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./medicationtime.page.html */
      "h0jl");
      /* harmony import */


      var _medicationtime_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./medicationtime.page.scss */
      "1wR1");
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

      var MedicationtimePage = /*#__PURE__*/function () {
        function MedicationtimePage(navCtrl, childService, editchildService, route) {
          _classCallCheck(this, MedicationtimePage);

          this.navCtrl = navCtrl;
          this.childService = childService;
          this.editchildService = editchildService;
          this.route = route;
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
          this.medicationname = '';
          this.Time = '';
          this.error = {
            status: false,
            message: ""
          };
          this.printTimeErrorBoolen = false;
        }

        _createClass(MedicationtimePage, [{
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
            this.getmedication();
            console.log('service medication', this.childService.medication);
          }
        }, {
          key: "goback",
          value: function goback() {
            this.navCtrl.navigateBack('/addchild');
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
          }
        }, {
          key: "getmedication",
          value: function getmedication() {
            var _this = this;

            console.log('medarray', this.medarr);
            this.childService.medication.forEach(function (val) {
              var data = {
                medicationName: val.medicationName,
                medicationTime: val.medicationTime
              };

              _this.array.push(data);
            });
          }
        }, {
          key: "add",
          value: function add() {
            var _this2 = this;

            this.TimeComparisionFun("dayFilter");

            if (this.medicationname && this.Time) {
              var data = {
                medicationTime: this.Time,
                medicationName: this.medicationname
              };
              this.array.push(data);
              this.childService.medication.push(data); // this.editchildService.medication.push(data);

              this.medicationname = '';
            } else if (!this.medicationname) {
              console.log('empty');
              this.error.status = true;
              this.error.message = "Field is required";
              setTimeout(function () {
                _this2.error.status = false;
                _this2.error.message = "";
              }, 2000);
            }

            if (!this.Time) {
              console.log('empty time');
            }
          }
        }, {
          key: "del",
          value: function del(i) {
            var _this3 = this;

            console.log('index', i);
            var arr = [{
              time: '8:30 AM',
              name: 'Medication Name'
            }, {
              time: '8:30 AM',
              name: 'Medication Name'
            }];
            this.childService.medication.map(function (el, index) {
              console.log('index', i);

              var splice = _this3.childService.medication.splice(i, 1);

              console.log('splice', splice);
            });
          }
        }]);

        return MedicationtimePage;
      }();

      MedicationtimePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_child_service__WEBPACK_IMPORTED_MODULE_5__["ChildService"]
        }, {
          type: _services_editchild_service__WEBPACK_IMPORTED_MODULE_6__["EditchildService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      };

      MedicationtimePage.propDecorators = {
        startSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['startSlides']
        }],
        endSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['endSlides']
        }]
      };
      MedicationtimePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-medicationtime',
        template: _raw_loader_medicationtime_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_medicationtime_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MedicationtimePage);
      /***/
    },

    /***/
    "h0jl":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/medicationtime/medicationtime.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function h0jl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t\t  <ion-toolbar class=\"headBgGlobal\">\n        <ion-row>\n          <ion-col class=\"backbtn\" size=\"2\">\n            <div>\n              <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n            </div>\n          </ion-col>\n    \n          <ion-col class=\"titleclass\" size=\"8\">\n            <ion-text class=\"ctitle\">Medications Time</ion-text>\n          </ion-col>\n    \n          <ion-col size=\"2\">\n    \n          </ion-col>\n        </ion-row>\n\t\t    <!-- <ion-buttons slot=\"start\" class=\"backbtn\">\n\t\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t\t  </ion-buttons>\n\t\t  <ion-title class=\"ctitle\">Medications Time</ion-title> -->\n\t\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\n\t<ion-row class=\"bg_white\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides (ionSlideDidChange)=\"getStartHoures()\" class=\"vertical_slider s_hours\" [options]=\"option\"  >\n        <ion-slide  *ngFor=\"let i of hours\" >\n          <ng-container *ngIf=\"i<=9\">\n            <p>0{{i}}</p>\n          </ng-container>\n          <ng-container *ngIf=\"i>9\">\n            <p>{{i}}</p>\n          </ng-container>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides (ionSlideDidChange)=\"getStartHoures()\" class=\"vertical_slider s_mints\" [options]=\"option\"  >\n        <ion-slide  *ngFor=\"let i of mints\" >\n          <ng-container *ngIf=\"i<=9\">\n            <p>0{{i}}</p>\n          </ng-container>\n          <ng-container *ngIf=\"i>9\">\n            <p>{{i}}</p>\n          </ng-container>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list s_v\">\n      <ion-slides (ionSlideDidChange)=\"getStartHoures()\" class=\"vertical_slider\" [options]=\"option\"  >\n        <ion-slide>\n          <p style=\"font-size: 23px;\">AM</p>\n        </ion-slide>\n        <ion-slide>\n          <p style=\"font-size: 23px;\">PM</p>\n        </ion-slide>\n        <!-- <ion-slide>\n          <p style=\"font-size: 23px;\">AM</p>\n        </ion-slide>\n        <ion-slide>\n          <p style=\"font-size: 23px;\">PM</p>\n        </ion-slide> -->\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n\t\t<div class=\"field\">\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-input placeholder=\"Enter medication name\" type=\"text\" [(ngModel)]=\"medicationname\"></ion-input>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"imgdiv\" (click)=\"add()\">\n\t\t\t\t<img src=\"assets/imgs/icons/plus.svg\">\n\t\t\t</div>\n\t\t</div>\n\n    <p *ngIf=\"error.status\" class=\"error\">\n      {{error.message}}\n    </p>\n\t\t\n\t\t\n\t\t<div class=\"boxdiv\" >\n\t\t\t<div class=\"left\" *ngFor=\"let arr of array;let i = index;\">\n\t\t\t\t<div class=\"box1\">\n\t\t\t\t\t<div class=\"innerbox\">\n            <div class=\"icondiv\" (click)=\"del(i)\"><ion-icon name=\"close\"></ion-icon></div>\n\t\t\t\t\t\t<div class=\"text1\">{{arr.medicationTime}}</div>\n\t\t\t\t\t\t<div class=\"text2\">{{arr.medicationName}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"right\">\n\t\t\t\t<div class=\"box1\">\n\t\t\t\t\t<div class=\"innerbox\">\n\t\t\t\t\t\t<div class=\"text1\">8:30 AM</div>\n\t\t\t\t\t\t<div class=\"text2\">Medication Name</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\t\t\n\t</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=medicationtime-medicationtime-module-es5.js.map