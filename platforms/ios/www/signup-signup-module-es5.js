(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
    /***/
    "6h0i":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function h0i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\t<ion-header class=\"ion-no-border\">\n    <ion-toolbar class=\"headBg\">\n      <div class=\"header\">\n        <div class=\"back-btn\">\n         \t<img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n<ion-content class=\"background\" fullscreen>\n\n  \n  <!-- <div class=\"header\">\n    <div class=\"back-btn\">\n      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n      </div>\n  </div> -->\n  <div style=\"text-align: center;margin-top: 4%;\">\n    <img src=\"assets/imgs/ulogo.png\">\n  </div>\t\n  \n  <div class=\"logindiv\">\n\t\t  <div class=\"wrapper\">\n\t\t  \t\n\t\t  \t<div class=\"headtxt\">Sign up today</div>\n\t\t  \t<p style=\"margin-bottom: 10%;font-size:14px;color: #000000;opacity:0.8;\">UniqKidz holds all the important information that you need about your child. </p>\n\n\t\t  \t<div class=\"fields\">\n\t\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/user.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"First Name\" type=\"text\"  [(ngModel)]=\"firstname\"></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<p *ngIf=\"firstnameError.status\" class=\"error\">\n\t\t      {{firstnameError.message}}\n\t\t    </p>\n\n\t\t\t\t<div class=\"fields\">\n\t\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/user.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Last Name\" type=\"text\"  [(ngModel)]=\"lastname\"></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<p *ngIf=\"lastnameError.status\" class=\"error\">\n\t\t      {{lastnameError.message}}\n\t\t    </p>\n\t\t  \n\t\t  \t<div class=\"fields\">\n\t\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/email.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Email\" type=\"email\"  [(ngModel)]=\"email\"></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<p *ngIf=\"emailError.status\" class=\"error\">\n\t\t\t    {{emailError.message}}\n\t\t\t  </p>\n\n\t\t\t\t<div class=\"fields\">\n\t\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/lock.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Password\"\n\t\t\t\t\t\t\t [(ngModel)]=\"password\"\n\t\t\t\t\t\t\t type=\"{{showPass ? 'text':'password' }}\"\n\t\t\t\t\t\t\t ></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<ion-icon name=\"eye\" class=\"eye\"  *ngIf=\"!showPass\" (click)=\"togglePass()\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"eye-off\" class=\"eye\"  *ngIf=\"showPass\" (click)=\"togglePass()\"></ion-icon>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t <p *ngIf=\"passwordError.status\" class=\"error\">\n\t\t\t\t    {{passwordError.message}}\n\t\t\t\t  </p>\n\n\t\t\t\t<div class=\"fields\">\n\t\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/lock.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Password\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"confirmPassword\"\n\t\t\t\t\t\t\t\ttype=\"{{showcPass ? 'text':'password' }}\"\n\t\t\t\t\t\t\t></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"icondiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/eye.svg\">\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<ion-icon name=\"eye\" class=\"eye\"  *ngIf=\"!showcPass\" (click)=\"togglecPass()\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"eye-off\" class=\"eye\"  *ngIf=\"showcPass\" (click)=\"togglecPass()\"></ion-icon>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<p *ngIf=\"confirmPasswordError.status\" class=\"error\">\n\t\t\t    {{confirmPasswordError.message}}\n\t\t\t  </p>\n\n        <p style=\"margin-bottom: 10%;font-size: 11px;color: #000000;opacity: 0.8;\">By signing up, you agree to our <span style=\"text-decoration: underline;\" (click)=\"termsandcondition('terms')\">Terms and Conditions</span> </p>\n\t\t\t  <p *ngIf=\"error.status\" class=\"error\">{{error.message}}</p>\n\t\t\t\t<div class=\"ionbutton\" (click)=\"gotohome()\">\n\t\t\t\t\t<ion-button class=\"ib\" id=\"post\" #id>\n\t\t\t\t\t <span class=\"btns\">register</span> \n\t\t\t\t\t</ion-button>\n\t\t\t\t</div>\n\n\t\t\t\t <!-- <div class=\"signup\">\n\t\t      <p>Don't have an account already?</p>\n\t\t      <p (click)=\"signupPage()\" class=\"signupText\">SIGN UP</p>\n\t\t    </div> -->\n\n\t\t  </div>\n\n\t  </div>\n \n \n\t<!-- <div class=\"footer\">\n\t\tAlready a member? <span (click)=\"gotologin()\">Login here</span>\n     \n\t</div> -->\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" *ngIf=\"showfooter==true\">\n\t<ion-toolbar class=\"bgtoolbar\">\n\t\t<div class=\"footer\">\n\t\t\tAlready a member? <span (click)=\"gotologin()\">Login here</span>\n\t\t</div>\n\t</ion-toolbar>\n</ion-footer>\n";
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
    "RPFs":
    /*!*************************************************!*\
      !*** ./src/app/signup/signup-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SignupPageRoutingModule */

    /***/
    function RPFs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
        return SignupPageRoutingModule;
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


      var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.page */
      "yL7A");

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }];

      var SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupPageRoutingModule);
      /***/
    },

    /***/
    "T9iC":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.module.ts ***!
      \*****************************************/

    /*! exports provided: SignupPageModule */

    /***/
    function T9iC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
        return SignupPageModule;
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


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-routing.module */
      "RPFs");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup.page */
      "yL7A");

      var SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
      })], SignupPageModule);
      /***/
    },

    /***/
    "fJgH":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function fJgH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #ffffff;\n}\n\n.header {\n  display: flex;\n  /*margin-top: 5%;*/\n}\n\n.back-btn {\n  font-size: 20px;\n  padding: 37px 0 0 15px;\n  fill: #333;\n  cursor: pointer;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.background {\n  /*--overflow: hidden;*/\n  --background: url('backlogo.png') fixed 70% #FE9805 !important;\n}\n\n.topdiv {\n  height: 400px;\n  background: #FFFFFF;\n  border-radius: 0px 0px 50px 50px;\n}\n\n.logindiv {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  width: 85%;\n  border-radius: 30px;\n  margin: 0% auto;\n}\n\n.wrapper {\n  width: 75%;\n  margin: 5% auto 2%;\n  padding-top: 1px;\n}\n\n.headtxt {\n  font-weight: bold;\n  font-size: 30px;\n  color: #000000;\n  margin-top: 8%;\n}\n\n.fields {\n  margin-top: 5%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 8px;\n  background: #EBEBEB;\n  padding: 1% 4%;\n  margin-top: 5%;\n  align-items: center;\n  position: relative;\n}\n\n.icondiv {\n  margin-top: 4%;\n  width: 8%;\n}\n\n.eye {\n  color: #737373;\n}\n\n.pinput {\n  width: 100%;\n  padding-left: 4%;\n  padding-top: 1%;\n  font-size: 15px;\n  opacity: 48%;\n}\n\n.check {\n  color: #737373;\n  text-align: right;\n  font-size: 13px;\n  margin-top: 3%;\n  width: 100%;\n  margin-right: 2%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #fd8f07f2;\n  outline: none;\n  width: 100%;\n  font-size: 15px;\n  margin-bottom: 10%;\n  height: 50px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 10px;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\n.btns {\n  font-size: 15px;\n  color: white;\n}\n\n.footer {\n  font-size: 17px;\n  text-align: center;\n  color: #000000;\n  padding: 10px 0px;\n}\n\n.bgtoolbar {\n  /*--background: #F7F7F7;*/\n  --background: #fd8f07f2;\n}\n\n.footer span {\n  color: #000;\n  font-weight: 400;\n  font-size: 20px;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n\n/*@media only screen and (max-width:320px) {\n\t.pinput\n\t{\n\t\twidth: 85%;\n\t\tpadding-left: 4%;\n\t\tpadding-top: 1.5%;\n\t\tfont-size: 12px;\n\t}\n\n\n}*/\n\n@media only screen and (max-width: 414px) {\n  .icondiv {\n    margin-top: 4%;\n    width: 8%;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .pinput {\n    width: 85%;\n    padding-left: 4%;\n    padding-top: 1.5%;\n    font-size: 12px;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .pinput {\n    width: 85%;\n    padding-left: 4%;\n    padding-top: 5.5%;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQUZBO0VBRUUsc0JBQUE7RUFDQyw4REFBQTtBQUlIOztBQUZBO0VBQ0MsYUFBQTtFQUNDLG1CQUFBO0VBQ0EsZ0NBQUE7QUFLRjs7QUFIQTtFQUlFLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUlEOztBQUZBO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFLRDs7QUFIQTtFQUNDLGNBQUE7QUFNRDs7QUFKQTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBT0Q7O0FBSkE7RUFDQyxjQUFBO0VBQ0EsU0FBQTtBQU9EOztBQUxBO0VBQ0MsY0FBQTtBQVFEOztBQU5BO0VBRUMsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBUUQ7O0FBTEE7RUFFQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQU9EOztBQUpBO0VBRUMsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQU1EOztBQUpBO0VBR0MsWUFBQTtFQUNDLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0MsbUJBQUE7RUFDRCxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUZBO0VBRUMsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUlFLGlCQUFBO0FBQ0g7O0FBQ0E7RUFDQyx5QkFBQTtFQUNBLHVCQUFBO0FBRUQ7O0FBQUE7RUFFQyxXQUFBO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUdBOzs7Ozs7Ozs7O0VBQUE7O0FBWUE7RUFDQztJQUVDLGNBQUE7SUFDQyxTQUFBO0VBRkQ7QUFDRjs7QUFPQTtFQUNDO0lBRUMsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBTkE7QUFDRjs7QUFXQTtFQUlDO0lBRUMsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBYkE7QUFDRiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyptYXJnaW4tdG9wOiA1JTsqL1xyXG59XHJcbi5iYWNrLWJ0biB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDM3cHggMCAwIDE1cHg7XHJcbiAgZmlsbDogIzMzMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuLmJhY2tncm91bmR7XHJcblx0Ly8gIC0tYmFja2dyb3VuZDogI0ZFOTgwNTtcclxuXHQgLyotLW92ZXJmbG93OiBoaWRkZW47Ki9cclxuICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZ3MvYmFja2xvZ28ucG5nKSBmaXhlZCA3MCUgI0ZFOTgwNSAhaW1wb3J0YW50O1xyXG59XHJcbi50b3BkaXZ7XHJcblx0aGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNTBweCA1MHB4O1xyXG59XHJcbi5sb2dpbmRpdntcclxuXHQvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gbGVmdDogMzBweDtcclxuICAvLyB0b3A6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMzUlKSAwcHggNXB4IDE1cHg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIG1hcmdpbjogMCUgYXV0bztcclxufVxyXG4ud3JhcHBlcntcclxuXHR3aWR0aDo3NSU7XHJcblx0bWFyZ2luOjUlIGF1dG8gMiU7XHJcblx0cGFkZGluZy10b3A6IDFweDtcclxufVxyXG4uaGVhZHR4dHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0Y29sb3I6ICMwMDAwMDA7XHJcblx0bWFyZ2luLXRvcDo4JTtcclxufVxyXG4uZmllbGRze1xyXG5cdG1hcmdpbi10b3A6NSU7XHJcbn1cclxuLmlucHV0ZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdGJhY2tncm91bmQ6ICNFQkVCRUI7XHJcblx0cGFkZGluZzogMSUgNCU7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pY29uZGl2e1xyXG4gbWFyZ2luLXRvcDogNCU7XHJcbiB3aWR0aDogOCU7XHJcbn1cclxuLmV5ZXtcclxuXHRjb2xvcjogIzczNzM3MztcclxufVxyXG4ucGlucHV0XHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLWxlZnQ6IDQlO1xyXG5cdHBhZGRpbmctdG9wOiAxJTtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0b3BhY2l0eTogNDglO1xyXG59XHJcblxyXG4uY2hlY2tcclxue1xyXG5cdGNvbG9yOiAjNzM3MzczO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tcmlnaHQ6IDIlO1xyXG59XHJcblxyXG4uaW9uYnV0dG9uXHJcbntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5pYlxyXG57XHJcblxyXG5cdGNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6ICNmZDhmMDdmMjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uYnRuc3tcclxuXHQgZm9udC1zaXplOiAxNXB4O1xyXG5cdCBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uZm9vdGVyXHJcbntcclxuXHRmb250LXNpemU6IDE3cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcblx0Ly8gYm90dG9tOiAxMHB4O1xyXG4gIC8vIGxlZnQ6IDgwcHg7XHJcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIFx0cGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuLmJndG9vbGJhcntcclxuXHQvKi0tYmFja2dyb3VuZDogI0Y3RjdGNzsqL1xyXG5cdC0tYmFja2dyb3VuZDogI2ZkOGYwN2YyO1xyXG59XHJcbi5mb290ZXIgc3BhblxyXG57XHJcblx0Y29sb3I6ICMwMDA7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBjb2xvcjogI2ZmMDAwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcblxyXG5cclxuLypAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuXHQucGlucHV0XHJcblx0e1xyXG5cdFx0d2lkdGg6IDg1JTtcclxuXHRcdHBhZGRpbmctbGVmdDogNCU7XHJcblx0XHRwYWRkaW5nLXRvcDogMS41JTtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHR9XHJcblxyXG5cclxufSovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpIHtcclxuXHQuaWNvbmRpdlxyXG5cdHtcclxuXHRcdG1hcmdpbi10b3A6IDQlO1xyXG5cdCAgd2lkdGg6IDglO1xyXG5cdH1cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuXHQucGlucHV0XHJcblx0e1xyXG5cdFx0d2lkdGg6IDg1JTtcclxuXHRcdHBhZGRpbmctbGVmdDogNCU7XHJcblx0XHRwYWRkaW5nLXRvcDogMS41JTtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweClcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweClcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xyXG5cdC5waW5wdXRcclxuXHR7XHJcblx0XHR3aWR0aDogODUlO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA0JTtcclxuXHRcdHBhZGRpbmctdG9wOiA1LjUlO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "yL7A":
    /*!***************************************!*\
      !*** ./src/app/signup/signup.page.ts ***!
      \***************************************/

    /*! exports provided: SignupPage */

    /***/
    function yL7A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
        return SignupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./signup.page.html */
      "6h0i");
      /* harmony import */


      var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signup.page.scss */
      "fJgH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _loginwithuser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../loginwithuser.service */
      "tqas");
      /* harmony import */


      var _services_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/rest.service */
      "tnAE");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _termsandcondition_termsandcondition_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../termsandcondition/termsandcondition.page */
      "kE+6");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(navCtrl, modalController, platform, userService, loading, rest, menuCtrl, cd, oneSignal) {
          _classCallCheck(this, SignupPage);

          this.navCtrl = navCtrl;
          this.modalController = modalController;
          this.platform = platform;
          this.userService = userService;
          this.loading = loading;
          this.rest = rest;
          this.menuCtrl = menuCtrl;
          this.cd = cd;
          this.oneSignal = oneSignal;
          this.showPass = false;
          this.showcPass = false;
          this.showfooter = true;
          this.showhide = false;
          this.firstname = '';
          this.lastname = '';
          this.email = '';
          this.password = '';
          this.confirmPassword = '';
          this.isLoading = true;
          this.emailError = {
            status: false,
            message: ''
          };
          this.firstnameError = {
            status: false,
            message: ''
          };
          this.lastnameError = {
            status: false,
            message: ''
          };
          this.passwordError = {
            status: false,
            message: ''
          };
          this.confirmPasswordError = {
            status: false,
            message: ''
          };
          this.error = {
            status: false,
            message: ''
          };
          this.modal = 'terms';
          this.sender_id = '620446083343';
          this.oneSignalAppId = '7c8eac8b-868e-461d-b8db-91604121255b';
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.userType = localStorage.getItem('userType');
            console.log('userType', this.userType);
            this.player_id = localStorage.getItem('deviceID');
            console.log('player_id', this.player_id);
            this.platform.keyboardDidShow.subscribe(function (ev) {
              console.log('keyboard show', ev);
              _this2.showfooter = false;

              _this2.cd.detectChanges();

              console.log('showFooter', _this2.showfooter);
            });
            this.platform.keyboardDidHide.subscribe(function (ev) {
              if (_this2.showhide == true) {
                _this2.showfooter = true;
                _this2.showhide = false;

                _this2.cd.detectChanges();

                console.log('keyboard hide');
              } else {
                _this2.showhide = true;
              }
            });
            this.oneSignal.setLogLevel({
              logLevel: 6,
              visualLevel: 2
            });
            this.oneSignal.startInit(this.oneSignalAppId, this.sender_id);
            this.oneSignal.endInit();
            this.oneSignal.getIds().then(function (identity) {
              console.log('identity', identity.userId);
              _this2.identy = identity;
              _this2.player_id = _this2.identy.userId; // alert(JSON.stringify(this.identy));
              // localStorage.setItem('deviceID', this.identy.userId);
            });
          }
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
          key: "gotologin",
          value: function gotologin() {
            this.navCtrl.navigateForward('/signin');
          }
        }, {
          key: "goback",
          value: function goback() {
            this.navCtrl.navigateBack('/registeras');
          }
        }, {
          key: "togglePass",
          value: function togglePass() {
            this.showPass = !this.showPass;
          }
        }, {
          key: "togglecPass",
          value: function togglecPass() {
            this.showcPass = !this.showcPass;
          }
        }, {
          key: "gotohome",
          value: function gotohome() {
            var _this3 = this;

            // this.token=localStorage.getItem('token')
            //   console.log('token get:',this.token)
            if (this.firstname && this.lastname && this.email && this.password && this.confirmPassword) {
              if (!this.validateEmail(this.email)) {
                this.emailError.status = true;
                this.emailError.message = 'Invalid Email address.';
                setTimeout(function () {
                  _this3.emailError.status = false;
                  _this3.emailError.message = '';
                }, 3000);
                return;
              }

              if (this.password !== this.confirmPassword) {
                this.confirmPasswordError.status = true; // eslint-disable-next-line @typescript-eslint/quotes

                this.confirmPasswordError.message = "Password didn't match.";
                setTimeout(function () {
                  _this3.confirmPasswordError.status = false;
                  _this3.confirmPasswordError.message = '';
                }, 3000);
                return;
              } // this.navCtrl.navigateRoot('/homescreen');


              this.loading.loadershow();
              var signUpData = {
                firstName: this.firstname,
                lastName: this.lastname,
                userEmail: this.email,
                userPassword: this.password,
                confirmPassword: this.confirmPassword,
                oneSignalId: this.player_id,
                accountTypeId: 1,
                userType: 1
              };
              this.rest.sendRequest('signup', signUpData).subscribe(function (data) {
                console.log('signup request data', data);

                if (data.status == 'success') {
                  _this3.firstname = '';
                  _this3.lastname = '';
                  _this3.email = '';
                  _this3.password = '';
                  _this3.confirmPassword = '';

                  _this3.loading.hideLoader();

                  localStorage.setItem('user', JSON.stringify(data.data));
                  localStorage.setItem('uid', data.data.users_id);
                  localStorage.setItem('accountTypeId', data.data.account_type_id);

                  _this3.loading.presentToast('Registered Successfully!!!');

                  _this3.navCtrl.navigateRoot('homescreen');
                }

                if (data.status == 'error') {
                  _this3.loading.hideLoader(); // console.log('signup request data:',data.status);


                  _this3.error.status = true;
                  _this3.error.message = data.message;
                  setTimeout(function () {
                    _this3.error.status = false;
                    _this3.error.message = '';
                  }, 3000);
                  return;
                }
              }, function (err) {});
            }

            if (!this.firstname) {
              this.firstnameError.status = true;
              this.firstnameError.message = 'Firstname is required';
            }

            if (!this.lastname) {
              this.lastnameError.status = true;
              this.lastnameError.message = 'Lastname is required';
            }

            if (!this.email) {
              this.emailError.status = true;
              this.emailError.message = 'Email address is required';
            }

            if (!this.password) {
              this.passwordError.status = true;
              this.passwordError.message = 'Password is required';
            }

            if (!this.confirmPassword) {
              this.confirmPasswordError.status = true;
              this.confirmPasswordError.message = 'Confirm Password is required';
            }

            setTimeout(function () {
              _this3.emailError.status = false;
              _this3.emailError.message = '';
              _this3.firstnameError.status = false;
              _this3.firstnameError.message = '';
              _this3.lastnameError.status = false;
              _this3.lastnameError.message = '';
              _this3.passwordError.status = false;
              _this3.passwordError.message = '';
              _this3.confirmPasswordError.status = false;
              _this3.confirmPasswordError.message = '';
            }, 3000);

            if (this.userType == 'parent') {
              this.navCtrl.navigateRoot('/homescreen');
            }

            if (this.userType == 'caregiver') {
              this.navCtrl.navigateRoot('/cghomescreen');
            }
          }
        }, {
          key: "validateEmail",
          value: function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
          }
        }, {
          key: "termsandcondition",
          value: function termsandcondition(terms) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalController.create({
                        component: _termsandcondition_termsandcondition_page__WEBPACK_IMPORTED_MODULE_8__["TermsandconditionPage"],
                        cssClass: 'termsclass',
                        componentProps: {
                          termsaandcondition: terms
                        }
                      });

                    case 2:
                      modal = _context5.sent;
                      _context5.next = 5;
                      return modal.present();

                    case 5:
                      return _context5.abrupt("return", _context5.sent);

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _loginwithuser_service__WEBPACK_IMPORTED_MODULE_5__["LoginwithuserService"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"]
        }];
      };

      SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SignupPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=signup-signup-module-es5.js.map