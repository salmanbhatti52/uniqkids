(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parentprofile-parentprofile-module"], {
    /***/
    "+wJU":
    /*!*******************************************************!*\
      !*** ./src/app/parentprofile/parentprofile.module.ts ***!
      \*******************************************************/

    /*! exports provided: ParentprofilePageModule */

    /***/
    function wJU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParentprofilePageModule", function () {
        return ParentprofilePageModule;
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


      var _parentprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./parentprofile-routing.module */
      "GunC");
      /* harmony import */


      var _parentprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./parentprofile.page */
      "navK");

      var ParentprofilePageModule = function ParentprofilePageModule() {
        _classCallCheck(this, ParentprofilePageModule);
      };

      ParentprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _parentprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ParentprofilePageRoutingModule"]],
        declarations: [_parentprofile_page__WEBPACK_IMPORTED_MODULE_6__["ParentprofilePage"]]
      })], ParentprofilePageModule);
      /***/
    },

    /***/
    "7ch9":
    /*!*********************************************!*\
      !*** ./src/app/services/loading.service.ts ***!
      \*********************************************/

    /*! exports provided: LoadingService */

    /***/
    function ch9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
        return LoadingService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var LoadingService = /*#__PURE__*/function () {
        function LoadingService(toastCtrl, loadingCtrl) {
          _classCallCheck(this, LoadingService);

          this.toastCtrl = toastCtrl;
          this.loadingCtrl = loadingCtrl;
        }

        _createClass(LoadingService, [{
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.toast = true;
                      _context.next = 3;
                      return this.toastCtrl.create({
                        message: message,
                        duration: 2000,
                        position: 'bottom'
                      }).then(function (a) {
                        a.present().then(function () {
                          console.log('presented');

                          if (!_this.toast) {
                            a.dismiss().then(function () {
                              return console.log('abort presenting');
                            });
                          }
                        });
                      });

                    case 3:
                      return _context.abrupt("return", _context.sent);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "loadershow",
          value: function loadershow(content) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.loadingCtrl.create({
                        cssClass: 'loadingdiv',
                        message: ''
                      }).then(function (res) {
                        res.present();
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "hideLoader",
          value: function hideLoader() {
            this.loadingCtrl.dismiss().then(function (res) {
              console.log('Loading dismissed!', res);
            })["catch"](function (error) {
              console.log('error', error);
            });
          }
        }, {
          key: "presentLoader",
          value: function presentLoader(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: "ionloading",
                        message: message
                      });

                    case 2:
                      this.loading = _context3.sent;
                      _context3.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return LoadingService;
      }();

      LoadingService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoadingService);
      /***/
    },

    /***/
    "7zUo":
    /*!*******************************************************!*\
      !*** ./src/app/parentprofile/parentprofile.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function zUo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 70%;\n  margin: 5% auto;\n}\n\n.logodiv {\n  /*background: #ffff;*/\n  width: 110px;\n  margin: 0% auto;\n  /*border-radius: 90px;*/\n  height: 110px;\n}\n\n.logodiv img {\n  border-radius: 90px;\n  width: 110px;\n  height: 110px;\n}\n\n.name {\n  text-align: center;\n  font-weight: bold;\n  margin-top: 5%;\n  font-size: 20px;\n}\n\n.fields {\n  margin-top: 5%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 8px;\n  background: #FFFFFF;\n  padding: 1% 5%;\n  margin-top: 5%;\n}\n\n.pinput {\n  width: 100%;\n  color: #000;\n  opacity: 48%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #fd8f07f2;\n  outline: none;\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10%;\n  height: 50px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhcmVudHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBRkY7O0FBSUE7RUFDQyxXQUFBO0FBREQ7O0FBR0E7RUFFRSxlQUFBO0VBQ0UsZ0JBQUE7QUFESjs7QUFHQTtFQUNDLGtCQUFBO0VBQW9CLGdCQUFBO0FBQ3JCOztBQUVDO0VBQ0Msa0JBQUE7RUFBb0IsaUJBQUE7QUFFdEI7O0FBQUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQUVEOztBQUFBO0VBQ0MscUJBQUE7RUFDRyxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUdKOztBQURBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUlGOztBQUZBO0VBQ0Msa0JBQUE7RUFDQyxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBRkE7RUFDQyxjQUFBO0FBS0Q7O0FBSEE7RUFDQyxhQUFBO0VBQ0csa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDSCxjQUFBO0FBTUQ7O0FBRkE7RUFFQyxXQUFBO0VBQ0EsV0FBQTtFQUNDLFlBQUE7QUFJRjs7QUFEQTtFQUVFLGtCQUFBO0VBQ0QsV0FBQTtFQUNBLGVBQUE7QUFHRDs7QUFEQTtFQUdDLFlBQUE7RUFDQyx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0QsZUFBQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0MsbUJBQUE7RUFDRCxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRUYiLCJmaWxlIjoicGFyZW50cHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY2hlYWRlcntcclxuLy8gXHRwb3NpdGlvbjogZml4ZWQ7XHJcbi8vIH1cclxuLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6IDElIDAlO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuICAuaGVhZEJnIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICAgIHBhZGRpbmc6IDMlIDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG4ud3JhcHBlcntcclxuXHR3aWR0aDo3MCU7XHJcblx0bWFyZ2luOjUlIGF1dG87XHJcbn1cclxuLmxvZ29kaXZ7XHJcblx0LypiYWNrZ3JvdW5kOiAjZmZmZjsqL1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgbWFyZ2luOiAwJSBhdXRvO1xyXG4gICAgLypib3JkZXItcmFkaXVzOiA5MHB4OyovXHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG59XHJcbi5sb2dvZGl2IGltZ3tcclxuXHQgYm9yZGVyLXJhZGl1czogOTBweDtcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxufVxyXG4ubmFtZXtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uZmllbGRze1xyXG5cdG1hcmdpbi10b3A6NSU7XHJcbn1cclxuLmlucHV0ZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgcGFkZGluZzogMSUgNSU7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcblxyXG4ucGlucHV0XHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRjb2xvcjogIzAwMDtcclxuICBvcGFjaXR5OiA0OCU7XHJcbn1cclxuXHJcbi5pb25idXR0b25cclxue1x0XHJcbiBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmliXHJcbntcclxuXHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogI2ZkOGYwN2YyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gICAtLWJvcmRlci13aWR0aDogMXB4OyBcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "C+Rs":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parentprofile/parentprofile.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function CRs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>cgprofile</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t<ion-toolbar class=\"headBgGlobal\">\n\t  <!-- <ion-buttons slot=\"start\">\n\t\t<ion-menu-button class=\"menuicon\"></ion-menu-button>\n\t  </ion-buttons>\n\t  <ion-title class=\"ctitle\">Complete Profile</ion-title> -->\n\n\t  <ion-row>\n\t\t  <ion-col style=\"padding-top:6px;\" size=\"2\">\n\t\t\t  <div>\n\t\t\t\t  <ion-menu-button class=\"menuicon\"></ion-menu-button>\n\t  </div>\n\t\t  </ion-col>\n\n\t\t  <ion-col class=\"titleclass\" size=\"8\">\n\t\t\t  <ion-text class=\"ctitle\">Complete Profile</ion-text>\n\t\t  </ion-col>\n\n\t\t  <ion-col size=\"2\">\n\n\t\t  </ion-col>\n\t  </ion-row>\n\n\t</ion-toolbar>\n  </ion-header>\n<ion-content class=\"background\">\n\n\t<div class=\"wrapper\">\n\t\t\n\t\t<div class=\"logodiv\" (click)=\"uploadPic()\">\n\t\t\t<!-- <img src=\"assets/imgs/icons/msglogo.svg\"> -->\n\t\t\t<img src=\"{{defaultProfile}}\">\n\t\t</div>\n\t\t<div class=\"name\">{{fname}} {{lname}}</div>\n\t\t\n\t\t<div class=\"fields\">\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-input placeholder=\"Email\" type=\"email\" [(ngModel)]=\"email\" readonly></ion-input>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"fields\">\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-input placeholder=\"Mobile number\" type=\"tel\" [(ngModel)]=\"mobilenumber\"></ion-input>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<p *ngIf=\"mobilenumberError.status\" class=\"error\">\n\t    {{mobilenumberError.message}}\n\t  </p>\n\n\t\t<div class=\"fields\">\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-input placeholder=\"Relation with child\" type=\"text\" [(ngModel)]=\"relationwithchild\"></ion-input>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<p *ngIf=\"relationError.status\" class=\"error\">\n\t    {{relationError.message}}\n\t  </p>\n\n\t\t<div class=\"fields\">\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-input placeholder=\"Street address\" type=\"text\" [(ngModel)]=\"address\"></ion-input>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<p *ngIf=\"addressError.status\" class=\"error\">\n\t    {{addressError.message}}\n\t  </p>\n\n\t\t<div class=\"fields\">\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-textarea placeholder=\"About\"  rows=\"6\" cols=\"20\" [(ngModel)]=\"about\"></ion-textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<p *ngIf=\"aboutError.status\" class=\"error\">\n\t    {{aboutError.message}}\n\t  </p>\n\n\t\t<div class=\"ionbutton\" (click)=\"update()\">\n\t\t\t<ion-button class=\"ib\">Done</ion-button>\n\t\t</div>\n\n\t</div>\n\n</ion-content>\n\n";
      /***/
    },

    /***/
    "GunC":
    /*!***************************************************************!*\
      !*** ./src/app/parentprofile/parentprofile-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ParentprofilePageRoutingModule */

    /***/
    function GunC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParentprofilePageRoutingModule", function () {
        return ParentprofilePageRoutingModule;
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


      var _parentprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./parentprofile.page */
      "navK");

      var routes = [{
        path: '',
        component: _parentprofile_page__WEBPACK_IMPORTED_MODULE_3__["ParentprofilePage"]
      }];

      var ParentprofilePageRoutingModule = function ParentprofilePageRoutingModule() {
        _classCallCheck(this, ParentprofilePageRoutingModule);
      };

      ParentprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ParentprofilePageRoutingModule);
      /***/
    },

    /***/
    "navK":
    /*!*****************************************************!*\
      !*** ./src/app/parentprofile/parentprofile.page.ts ***!
      \*****************************************************/

    /*! exports provided: ParentprofilePage */

    /***/
    function navK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParentprofilePage", function () {
        return ParentprofilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_parentprofile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./parentprofile.page.html */
      "C+Rs");
      /* harmony import */


      var _parentprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./parentprofile.page.scss */
      "7zUo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/rest.service */
      "tnAE");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "tAfe");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var ParentprofilePage = /*#__PURE__*/function () {
        function ParentprofilePage(camera, alertCtrl, navctrl, loading, imagePicker, sanitizer, rest) {
          _classCallCheck(this, ParentprofilePage);

          this.camera = camera;
          this.alertCtrl = alertCtrl;
          this.navctrl = navctrl;
          this.loading = loading;
          this.imagePicker = imagePicker;
          this.sanitizer = sanitizer;
          this.rest = rest;
          this.defaultProfile = 'assets/imgs/profilelogo.png';
          this.mobilenumber = '';
          this.relationwithchild = '';
          this.address = '';
          this.about = '';
          this.mobilenumberError = {
            status: false,
            message: ""
          };
          this.relationError = {
            status: false,
            message: ""
          };
          this.addressError = {
            status: false,
            message: ""
          };
          this.aboutError = {
            status: false,
            message: ""
          };
          this.error = {
            status: false,
            message: ""
          };
          this.cameraOptions = {
            quality: 50,
            allowEdit: false,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.galleryOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 50,
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
          };
          this.accountTypeId = localStorage.getItem('accountTypeId');
          console.log('accountTypeId', this.accountTypeId);
        }

        _createClass(ParentprofilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.imagePicker.requestReadPermission();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.userid = localStorage.getItem('uid');
            console.log('userid', this.userid);
            this.getprofiledata(this.userid);
          }
        }, {
          key: "getprofiledata",
          value: function getprofiledata(userid) {
            var _this2 = this;

            this.loading.loadershow();
            this.rest.sendRequest("get_profile_details", {
              userId: userid
            }).subscribe(function (data) {
              console.log('get_profile_details data::', data);

              if (data.status == 'success') {
                console.log('suucesssss');
                _this2.fname = data.data.first_name;
                _this2.lname = data.data.last_name;
                _this2.email = data.data.email;

                if (data.data.profile_picture == '' || data.data.profile_picture == null) {
                  _this2.defaultProfile = 'assets/imgs/profilelogo.png';
                } else {
                  _this2.defaultProfile = data.data.profile_picture;
                }

                _this2.relationwithchild = data.data.relation_with_child;
                _this2.mobilenumber = data.data.mobile_number;
                _this2.address = data.data.street_address;
                _this2.about = data.data.about;

                _this2.loading.hideLoader();
              }

              if (data.status == 'error') {
                _this2.loading.hideLoader();

                console.log('signup request data:', data.status);
                _this2.error.status = true;
                _this2.error.message = data.message;
                setTimeout(function () {
                  _this2.error.status = false;
                  _this2.error.message = "";
                }, 3000);
                return;
              }
            }, function (err) {});
          }
        }, {
          key: "uploadPic",
          value: function uploadPic() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this3 = this;

              var confirm;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertCtrl.create({
                        header: 'Choose from',
                        cssClass: 'profileAlertBox',
                        buttons: [{
                          text: 'Camera',
                          handler: function handler() {
                            _this3.camera.getPicture(_this3.cameraOptions).then(function (imageData) {
                              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                  while (1) {
                                    switch (_context5.prev = _context5.next) {
                                      case 0:
                                        // console.log('imagedata is = ' , imageData); 
                                        this.picUrl = imageData;
                                        this.defaultProfile = "data:image/png;base64,".concat(imageData); // console.log('defaultProfile is = ' , this.defaultProfile); 

                                      case 2:
                                      case "end":
                                        return _context5.stop();
                                    }
                                  }
                                }, _callee5, this);
                              }));
                            }, function (err) {});
                          }
                        }, {
                          text: 'Gallery',
                          handler: function handler() {
                            // this.camera.getPicture(this.galleryOptions)
                            // .then(async imageData => {
                            //  this.picUrl=imageData;
                            //   this.defaultProfile = `data:image/png;base64,${imageData}`
                            // }, err => {
                            // })
                            var options = {
                              maximumImagesCount: 1,
                              outputType: 1
                            };

                            _this3.imagePicker.getPictures(options).then(function (results) {
                              console.log('all selected', results);

                              if (results != null) {
                                for (var i = 0; i < results.length; i++) {
                                  console.log('each one' + results[i]);

                                  if (results[i] != "") {
                                    // let dturl=this.sanitizer.bypassSecurityTrustResourceUrl(results[i]);
                                    // console.log('image sanitizewe:?',dturl)
                                    console.log('data:image/jpeg;base64,', results[i]);
                                    _this3.picUrl = results[i];
                                    _this3.defaultProfile = "data:image/png;base64,".concat(results[i]);
                                  }
                                }
                              }
                            }, function (err) {
                              console.log('error', err);
                            });
                          }
                        }]
                      });

                    case 2:
                      confirm = _context6.sent;
                      _context6.next = 5;
                      return confirm.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "update",
          value: function update() {
            var _this4 = this;

            if (this.mobilenumber && this.relationwithchild && this.address && this.about) {
              var profiledata = {
                userId: this.userid,
                accountTypeId: this.accountTypeId,
                profilePicture: this.picUrl,
                mobileNumber: this.mobilenumber,
                streetAddress: this.address,
                about: this.about,
                relationWithChild: this.relationwithchild
              }; // console.log('parentprofile',JSON.stringify(profiledata))

              this.loading.loadershow();
              this.rest.sendRequest("update_profile", profiledata).subscribe(function (data) {
                console.log('update_profile data::', data);

                if (data.status == 'success') {
                  _this4.loading.hideLoader();

                  _this4.loading.presentToast('Profile Update Successfully!!'); //  if(this.accountTypeId==1){


                  _this4.navctrl.navigateRoot('homescreen'); //  }

                }

                if (data.status == 'error') {
                  _this4.loading.hideLoader();

                  console.log('signup request data:', data.status);
                  _this4.error.status = true;
                  _this4.error.message = data.message;
                  setTimeout(function () {
                    _this4.error.status = false;
                    _this4.error.message = "";
                  }, 3000);
                  return;
                }
              }, function (err) {});
            }

            if (!this.mobilenumber) {
              this.mobilenumberError.status = true;
              this.mobilenumberError.message = "mobilenumber is required";
            }

            if (!this.relationwithchild) {
              this.relationError.status = true;
              this.relationError.message = "Field is required";
            }

            if (!this.address) {
              this.addressError.status = true;
              this.addressError.message = "Address is required";
            }

            if (!this.about) {
              this.aboutError.status = true;
              this.aboutError.message = "Field is required";
            }

            setTimeout(function () {
              _this4.mobilenumberError.status = false;
              _this4.mobilenumberError.message = "";
              _this4.relationError.status = false;
              _this4.relationError.message = "";
              _this4.addressError.status = false;
              _this4.addressError.message = "";
              _this4.aboutError.status = false;
              _this4.aboutError.message = "";
            }, 3000);
          }
        }]);

        return ParentprofilePage;
      }();

      ParentprofilePage.ctorParameters = function () {
        return [{
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
        }];
      };

      ParentprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-parentprofile',
        template: _raw_loader_parentprofile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parentprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ParentprofilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=parentprofile-parentprofile-module-es5.js.map