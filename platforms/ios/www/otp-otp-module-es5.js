(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp-otp-module"], {
    /***/
    "HLTW":
    /*!*************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otp/otp.page.html ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function HLTW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<!-- <ion-content class=\"background\" fullscreen>\n\t<ion-header class=\"ion-no-border\">\n    <ion-toolbar class=\"headBgGlobal\">\n      <div class=\"header\">\n        <div class=\"back-btn\">\n         \t\n         \t\t<img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"wrapper\">\n  \t<div style=\"text-align: center;height: 150px;\">\n  \t\t<img src=\"assets/imgs/logo.png\" height=\"102px\">\n  \t</div>\n  \t<div class=\"headtxt\">Verification <br>Code</div>\n  \t<p style=\"margin-bottom: 10%;font-size:14px;color: #000000;opacity:0.8;\">Please enter 4 digit code<br>forwarded to your email</p>\n\n  \t<div class=\"pinCode\">\n        <div class=\"pins\">\n          <ion-input\n            #Field1\n            (keyup)=\"next($event,Field2,Field1)\"\n            class=\"pinInput\"\n            maxlength=\"1\"\n            size=\"1\"\n           \n            type=\"tel\"\n            value=\"\"\n          ></ion-input>\n          <ion-input\n            #Field2\n            (keyup)=\"next($event,Field3,Field1)\"\n            class=\"pinInput\"\n            maxlength=\"1\"\n            size=\"1\"\n           \n            type=\"tel\"\n            value=\"\"\n          ></ion-input>\n          <ion-input\n            #Field3\n            (keyup)=\"next($event,Field4,Field2)\"\n            class=\"pinInput\"\n            maxlength=\"1\"\n            size=\"1\"\n           \n            type=\"tel\"\n            value=\"\"\n          ></ion-input>\n          <ion-input\n            #Field4\n            (keyup)=\"next($event,Field4,Field3)\"\n            class=\"pinInput\"\n            maxlength=\"1\"\n            size=\"1\"\n           \n            type=\"tel\"\n            value=\"\"\n          ></ion-input>\n        </div>\n      </div>\n\t\t\n\n\t\t\n\n\t\t<div class=\"ionbutton\" (click)=\"resetpass()\">\n\t\t\t<ion-button class=\"ib\">Next</ion-button>\n\t\t</div>\n\n  </div>\n  \n\n</ion-content> -->\n\n\n<ion-content class=\"background\">\n\n  <div class=\"topdiv\">\n    <div class=\"header\">\n      <div class=\"back-btn\">\n        <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n        </div>\n    </div>\n    <div style=\"text-align: center;margin-top: 4%;\">\n      <img src=\"assets/imgs/ulogo.png\">\n    </div>  \n  </div>\n  <div class=\"logindiv\">\n    <div class=\"wrapper\">\n    <div class=\"headtxt\">Verification <br>Code</div>\n    <p style=\"margin-bottom: 10%;font-size:14px;color: #000000;opacity:0.8;\">Please enter 4 digit code<br>forwarded to your email</p>\n\n    <div class=\"pinCode\">\n        <div class=\"pins\">\n          <ion-input\n            #Field1\n            (keyup)=\"next($event,Field2,Field1)\"\n            class=\"pinInput\"\n            maxlength=\"1\"\n            size=\"1\"\n            [(ngModel)]=\"pin1\"\n            type=\"tel\"\n            value=\"\"\n          ></ion-input>\n          <ion-input\n            #Field2\n            (keyup)=\"next($event,Field3,Field1)\"\n            class=\"pinInput\"\n            maxlength=\"1\"\n            size=\"1\"\n            [(ngModel)]=\"pin2\"\n            type=\"tel\"\n            value=\"\"\n          ></ion-input>\n          <ion-input\n            #Field3\n            (keyup)=\"next($event,Field4,Field2)\"\n            class=\"pinInput\"\n            maxlength=\"1\"\n            size=\"1\"\n            [(ngModel)]=\"pin3\"\n            type=\"tel\"\n            value=\"\"\n          ></ion-input>\n          <ion-input\n            #Field4\n            (keyup)=\"next($event,Field4,Field3)\"\n            class=\"pinInput\"\n            maxlength=\"1\"\n            size=\"1\"\n            [(ngModel)]=\"pin4\"\n            type=\"tel\"\n            value=\"\"\n          ></ion-input>\n        </div>\n        <p *ngIf=\"pinError.status\" class=\"error\">{{pinError.message}}</p>\n        <p *ngIf=\"Error.status\" class=\"error\">{{Error.message}}</p>\n      </div>\n    \n\n    \n\n    <div class=\"ionbutton\" (click)=\"resetpass()\">\n      <ion-button class=\"ib\">Next</ion-button>\n    </div>\n\n  </div>\n\n  </div>\n \n \n  <!-- <div class=\"footer\">\n    Already got an account? <span (click)=\"gotologin()\">Login</span>\n  </div> -->\n</ion-content>\n\n";
      /***/
    },

    /***/
    "L5nD":
    /*!*******************************************!*\
      !*** ./src/app/otp/otp-routing.module.ts ***!
      \*******************************************/

    /*! exports provided: OtpPageRoutingModule */

    /***/
    function L5nD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPageRoutingModule", function () {
        return OtpPageRoutingModule;
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


      var _otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./otp.page */
      "so1i");

      var routes = [{
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_3__["OtpPage"]
      }];

      var OtpPageRoutingModule = function OtpPageRoutingModule() {
        _classCallCheck(this, OtpPageRoutingModule);
      };

      OtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OtpPageRoutingModule);
      /***/
    },

    /***/
    "NLUG":
    /*!***********************************!*\
      !*** ./src/app/otp/otp.page.scss ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function NLUG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n}\n\n.header {\n  display: flex;\n  /*margin-top: 5%;*/\n}\n\n.back-btn {\n  font-size: 20px;\n  padding: 37px 0 0 15px;\n  fill: #333;\n  cursor: pointer;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.background {\n  /*--background: #FE9805;*/\n  /*--overflow: hidden;*/\n  --background: url('UniqKidz-Logo.png') 40% 0/90% #FE9805 !important;\n}\n\n.topdiv {\n  height: 400px;\n  background: #FFFFFF;\n  border-radius: 0px 0px 50px 50px;\n}\n\n.logindiv {\n  position: absolute;\n  left: 30px;\n  top: 240px;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  width: 85%;\n  border-radius: 30px;\n}\n\n.wrapper {\n  width: 70%;\n  margin: 2% auto;\n}\n\n.headtxt {\n  font-weight: bold;\n  font-size: 30px;\n  color: #000000;\n  margin-top: 8%;\n}\n\n.pinInput {\n  height: 45px;\n  width: 50px;\n  color: #000000;\n  text-align: center;\n  background-color: #EBEBEB;\n  border-radius: 12px;\n  font-size: 15px;\n  /* border: 1px solid #c5e2ee; */\n  margin-right: 15px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  opacity: 48%;\n}\n\n.pins {\n  margin: 30px 0px;\n  display: flex;\n  justify-content: space-around;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 100%;\n  font-size: 18px;\n  margin-bottom: 10%;\n  font-weight: bold;\n  height: 50px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL290cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQUZBO0VBQ0cseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1FQUFBO0FBS0g7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFPRjs7QUFMQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBUUY7O0FBTkE7RUFDRSxpQkFBQTtFQUNDLGVBQUE7RUFDQyxjQUFBO0VBQ0EsY0FBQTtBQVNKOztBQU5BO0VBQ0csWUFBQTtFQUNELFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFTRjs7QUFQQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBVUY7O0FBUEE7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBUEE7RUFHRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNDLG1CQUFBO0VBQ0QscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVFGOztBQU5BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFTRiIsImZpbGUiOiJvdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyptYXJnaW4tdG9wOiA1JTsqL1xyXG59XHJcbi5iYWNrLWJ0biB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDM3cHggMCAwIDE1cHg7XHJcbiAgZmlsbDogIzMzMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuLmJhY2tncm91bmR7XHJcbiAgIC8qLS1iYWNrZ3JvdW5kOiAjRkU5ODA1OyovXHJcbiAgIC8qLS1vdmVyZmxvdzogaGlkZGVuOyovXHJcbiAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWdzL1VuaXFLaWR6LUxvZ28ucG5nKSA0MCUgMC85MCUgI0ZFOTgwNSAhaW1wb3J0YW50O1xyXG59XHJcbi50b3BkaXZ7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNTBweCA1MHB4O1xyXG59XHJcbi5sb2dpbmRpdntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMzBweDtcclxuICB0b3A6IDI0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMzUlKSAwcHggNXB4IDE1cHg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcbi53cmFwcGVye1xyXG4gIHdpZHRoOjcwJTtcclxuICBtYXJnaW46MiUgYXV0bztcclxufVxyXG4uaGVhZHR4dHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW4tdG9wOjglO1xyXG59XHJcblxyXG4ucGluSW5wdXQge1xyXG4gICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkVCRUI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgI2M1ZTJlZTsgKi9cclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIG9wYWNpdHk6IDQ4JTtcclxufVxyXG4ucGlucyB7XHJcbiAgbWFyZ2luOiAzMHB4IDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uaW9uYnV0dG9uXHJcbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5pYlxyXG57XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6ICNGRTk4MDU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGhlaWdodDogNTBweDtcclxuICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiAjZmYwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "ikiF":
    /*!***********************************!*\
      !*** ./src/app/otp/otp.module.ts ***!
      \***********************************/

    /*! exports provided: OtpPageModule */

    /***/
    function ikiF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPageModule", function () {
        return OtpPageModule;
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


      var _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./otp-routing.module */
      "L5nD");
      /* harmony import */


      var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./otp.page */
      "so1i");

      var OtpPageModule = function OtpPageModule() {
        _classCallCheck(this, OtpPageModule);
      };

      OtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpPageRoutingModule"]],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
      })], OtpPageModule);
      /***/
    },

    /***/
    "so1i":
    /*!*********************************!*\
      !*** ./src/app/otp/otp.page.ts ***!
      \*********************************/

    /*! exports provided: OtpPage */

    /***/
    function so1i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPage", function () {
        return OtpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./otp.page.html */
      "HLTW");
      /* harmony import */


      var _otp_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./otp.page.scss */
      "NLUG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/rest.service */
      "tnAE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var OtpPage = /*#__PURE__*/function () {
        function OtpPage(navCtrl, menuCtrl, activatedRoute, rest) {
          _classCallCheck(this, OtpPage);

          this.navCtrl = navCtrl;
          this.menuCtrl = menuCtrl;
          this.activatedRoute = activatedRoute;
          this.rest = rest;
          this.pinError = {
            status: false,
            message: ''
          };
          this.Error = {
            status: false,
            message: ''
          };
          this.recoveryEmail = this.activatedRoute.snapshot.params['email'];
          console.log('recoveryEmail::', this.recoveryEmail);
        }

        _createClass(OtpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.menuCtrl.enable(false);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            // enable the root left menu when leaving this page
            this.menuCtrl.enable(true);
          }
        }, {
          key: "next",
          value: function next(e, elNext, elBack) {
            console.log(e);
            console.log(e.keyCode);

            if (e.keyCode === 8 || e.keyCode === 229) {
              elBack.setFocus();
            } else {
              elNext.setFocus();
            }
          }
        }, {
          key: "goback",
          value: function goback() {
            this.navCtrl.navigateBack('/forgotpassword');
          }
        }, {
          key: "resetpass",
          value: function resetpass() {
            var _this = this;

            if (this.pin1 && this.pin2 && this.pin3 && this.pin4) {
              console.log(this.pin1 + this.pin2 + this.pin3 + this.pin4);

              if (!this.isANumber(this.pin1) || !this.isANumber(this.pin2) || !this.isANumber(this.pin3) || !this.isANumber(this.pin4)) {
                this.pinError.status = true;
                this.pinError.message = 'Pin should contain only numbers!';
                setTimeout(function () {
                  _this.pinError.status = false;
                  _this.pinError.message = '';
                }, 3000);
              } else {
                this.rest.sendRequest('forgot_password', {
                  requestType: 'match_code',
                  email: this.recoveryEmail,
                  code: this.pin1 + this.pin2 + this.pin3 + this.pin4
                }).subscribe(function (data) {
                  _this.pin1 = '';
                  _this.pin2 = '';
                  _this.pin3 = '';
                  _this.pin4 = '';

                  _this.navCtrl.navigateForward(['/resetpassword', {
                    email: _this.recoveryEmail
                  }]);
                }, function (err) {
                  _this.pinError.status = true;
                  _this.pinError.message = err.error.message;
                  setTimeout(function () {
                    _this.pinError.status = false;
                    _this.pinError.message = '';
                  }, 3000);
                });
              }
            }

            if (!this.pin1 && !this.pin2 && !this.pin3 && !this.pin4) {
              this.Error.status = true;
              this.Error.message = 'Pin is required';
            }

            setTimeout(function () {
              _this.Error.status = false;
              _this.Error.message = '';
            }, 3000);
          }
        }, {
          key: "isANumber",
          value: function isANumber(n) {
            var numStr = /^[0-9]+$/;
            return numStr.test(n.toString());
          }
        }]);

        return OtpPage;
      }();

      OtpPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }];
      };

      OtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-otp',
        template: _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_otp_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OtpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=otp-otp-module-es5.js.map