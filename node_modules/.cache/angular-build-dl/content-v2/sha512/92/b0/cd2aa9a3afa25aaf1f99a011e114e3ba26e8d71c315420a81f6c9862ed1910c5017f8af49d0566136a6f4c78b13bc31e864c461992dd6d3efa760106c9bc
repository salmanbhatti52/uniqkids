(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"], {
    /***/
    "0m0A":
    /*!*****************************************!*\
      !*** ./src/app/signin/signin.module.ts ***!
      \*****************************************/

    /*! exports provided: SigninPageModule */

    /***/
    function m0A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninPageModule", function () {
        return SigninPageModule;
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


      var _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signin-routing.module */
      "o9hh");
      /* harmony import */


      var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signin.page */
      "Pyzx");

      var SigninPageModule = function SigninPageModule() {
        _classCallCheck(this, SigninPageModule);
      };

      SigninPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigninPageRoutingModule"]],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
      })], SigninPageModule);
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
    "Pyzx":
    /*!***************************************!*\
      !*** ./src/app/signin/signin.page.ts ***!
      \***************************************/

    /*! exports provided: SigninPage */

    /***/
    function Pyzx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninPage", function () {
        return SigninPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./signin.page.html */
      "wuB5");
      /* harmony import */


      var _signin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signin.page.scss */
      "QHoY");
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


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");

      var SigninPage = /*#__PURE__*/function () {
        function SigninPage(navCtrl, menuCtrl, userService, loading, rest, oneSignal, platform, statusbar) {
          _classCallCheck(this, SigninPage);

          this.navCtrl = navCtrl;
          this.menuCtrl = menuCtrl;
          this.userService = userService;
          this.loading = loading;
          this.rest = rest;
          this.oneSignal = oneSignal;
          this.platform = platform;
          this.statusbar = statusbar;
          this.email = '';
          this.password = '';
          this.showPass = false;
          this.isLoading = false;
          this.emailError = {
            status: false,
            message: ''
          };
          this.passwordError = {
            status: false,
            message: ''
          };
          this.error = {
            status: false,
            message: ''
          };
          this.sender_id = '620446083343';
          this.oneSignalAppId = '7c8eac8b-868e-461d-b8db-91604121255b';
        }

        _createClass(SigninPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // this.player_id=localStorage.getItem('deviceID');
            // console.log('player_id',this.player_id);
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
            this.platform.ready().then(function () {
              // let status bar overlay webview
              _this2.statusbar.overlaysWebView(true); // set status bar to white
              // this.statusbar.backgroundColorByHexString('#FFFFFF');


              _this2.statusbar.styleLightContent();
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
          key: "goto",
          value: function goto() {
            this.navCtrl.navigateForward('/forgotpassword');
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
          key: "gotohome",
          value: function gotohome() {
            var _this3 = this;

            if (this.email && this.password) {
              if (!this.validateEmail(this.email)) {
                this.emailError.status = true;
                this.emailError.message = 'Invalid Email address.';
                setTimeout(function () {
                  _this3.emailError.status = false;
                  _this3.emailError.message = '';
                }, 3000);
                return;
              }

              this.loading.loadershow(); // const sender_id = '620446083343';
              // const oneSignalAppId = '7c8eac8b-868e-461d-b8db-91604121255b';
              // this.oneSignal.startInit(oneSignalAppId, sender_id);
              // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
              // this.oneSignal.endInit();
              // this.oneSignal.getIds().then((id) => {
              // console.log('player_id',id.userId);
              // this.player_id=id.userId;

              var signInData = {
                userEmail: this.email,
                userPassword: this.password,
                oneSignalId: this.player_id
              };
              this.rest.sendRequest('login', signInData).subscribe(function (data) {
                console.log('login request data::', data); // console.log('account_type',data.data.account_type_id);

                if (data.status == 'success') {
                  _this3.email = '';
                  _this3.password = '';

                  _this3.loading.hideLoader();

                  localStorage.setItem('user', JSON.stringify(data.data));
                  localStorage.setItem('uid', data.data.users_id); // id 1 is for parent

                  if (data.data.account_type_id == 1) {
                    _this3.loading.presentToast('Login Successfully!!!');

                    localStorage.setItem('accountTypeId', data.data.account_type_id);

                    _this3.userService.setSideMenu('Parent');

                    _this3.userService.userType = 'Parent';

                    _this3.navCtrl.navigateRoot('homescreen');
                  } // id 2 is for Professional


                  if (data.data.account_type_id == 2) {
                    _this3.loading.presentToast('Login Successfully!!!');

                    localStorage.setItem('accountTypeId', data.data.account_type_id);

                    _this3.userService.setSideMenu('Professional');

                    _this3.userService.userType = 'Professional';
                    console.log('service', _this3.userService.userType);

                    _this3.navCtrl.navigateRoot('cghomescreen');
                  } // id 3 is for Family


                  if (data.data.account_type_id == 3) {
                    _this3.loading.presentToast('Login Successfully!!!');

                    localStorage.setItem('accountTypeId', data.data.account_type_id);

                    _this3.userService.setSideMenu('Family');

                    _this3.userService.userType = 'Family';
                    console.log('service', _this3.userService.userType);

                    _this3.navCtrl.navigateRoot('cghomescreen');
                  } // id 4 is for Agency


                  if (data.data.account_type_id == 4) {
                    _this3.loading.presentToast('Login Successfully!!!');

                    localStorage.setItem('accountTypeId', data.data.account_type_id);

                    _this3.userService.setSideMenu('Agency');

                    _this3.userService.userType = 'Agency';
                    console.log('service', _this3.userService.userType);

                    _this3.navCtrl.navigateRoot('agencyhomescreen');
                  }
                }

                if (data.status == 'error') {
                  _this3.loading.hideLoader();

                  console.log('signup request data:', data.status);
                  _this3.error.status = true;
                  _this3.error.message = data.message;
                  setTimeout(function () {
                    _this3.error.status = false;
                    _this3.error.message = '';
                  }, 3000);
                }
              }, function (err) {}); // })
              // this.navCtrl.navigateRoot('/homescreen');
            }

            if (!this.email) {
              this.emailError.status = true;
              this.emailError.message = 'Email address is required';
            }

            if (!this.password) {
              this.passwordError.status = true;
              this.passwordError.message = 'Password is required';
            }

            setTimeout(function () {
              _this3.emailError.status = false;
              _this3.emailError.message = '';
              _this3.passwordError.status = false;
              _this3.passwordError.message = '';
            }, 3000);
          }
        }, {
          key: "validateEmail",
          value: function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
          }
        }, {
          key: "gotologin",
          value: function gotologin() {
            this.navCtrl.navigateBack('/registeras');
          }
        }]);

        return SigninPage;
      }();

      SigninPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _loginwithuser_service__WEBPACK_IMPORTED_MODULE_5__["LoginwithuserService"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"]
        }];
      };

      SigninPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signin',
        template: _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SigninPage);
      /***/
    },

    /***/
    "QHoY":
    /*!*****************************************!*\
      !*** ./src/app/signin/signin.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function QHoY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n}\n\n.header {\n  display: flex;\n  /*margin-top: 5%;*/\n}\n\n.back-btn {\n  font-size: 20px;\n  padding: 37px 0 0 15px;\n  fill: #333;\n  cursor: pointer;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.background {\n  /*--background: #FE9805;*/\n  /*--overflow: hidden;*/\n  --background: url('UniqKidz-Logo.png') 0% 0%/90% #FE9805 !important;\n}\n\n.topdiv {\n  height: 400px;\n  background: #FFFFFF;\n  border-radius: 0px 0px 50px 50px;\n}\n\n.logindiv {\n  position: absolute;\n  left: 30px;\n  top: 210px;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  width: 85%;\n  border-radius: 30px;\n}\n\n.wrapper {\n  width: 75%;\n  margin: 2% auto;\n}\n\n.headtxt {\n  font-weight: bold;\n  font-size: 30px;\n  color: #000000;\n  margin-top: 8%;\n}\n\n.fields {\n  margin-top: 5%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 8px;\n  background: #EBEBEB;\n  padding: 1% 4%;\n  margin-top: 5%;\n  align-items: center;\n  align-items: center;\n}\n\n.icondiv {\n  margin-top: 4%;\n  width: 8%;\n}\n\n.icondiv1 {\n  margin-top: 1%;\n  width: 8%;\n}\n\n.eye {\n  color: #737373;\n}\n\n.pinput {\n  width: 100%;\n  padding-left: 4%;\n  padding-top: 1%;\n  font-size: 15px;\n  opacity: 48%;\n}\n\n.check {\n  color: #737373;\n  text-align: right;\n  font-size: 13px;\n  margin-top: 3%;\n  width: 100%;\n  margin-right: 2%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #fd8f07f2;\n  outline: none;\n  width: 100%;\n  font-size: 15px;\n  margin-bottom: 10%;\n  height: 50px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 10px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n\n.btns {\n  font-size: 15px;\n  color: white;\n}\n\n.check {\n  color: #000000;\n  text-align: right;\n  font-size: 12px;\n  margin-top: 3%;\n  width: 100%;\n  margin-right: 2%;\n}\n\n.footer {\n  font-size: 17px;\n  text-align: center;\n  color: #000000;\n  /*bottom: 15px;\n  left: 80px;\n  position: absolute;*/\n}\n\n.bgtoolbar {\n  /*--background: #F7F7F7;*/\n  --background: #fd8f07f2;\n}\n\n.footer span {\n  color: #000;\n  font-weight: 400;\n  font-size: 20px;\n}\n\n.error {\n  color: red;\n  font-size: 12px;\n}\n\n/*@media only screen and (max-width:320px) {\n  .pinput\n  {\n    width: 85%;\n      padding-left: 4%;\n      padding-top: 1.5%;\n      font-size: 12px;\n  }\n\n\n}*/\n\n@media only screen and (max-width: 414px) {\n  .icondiv {\n    margin-top: 4%;\n    width: 8%;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .pinput {\n    width: 100%;\n    padding-left: 4%;\n    padding-top: 1.5%;\n    font-size: 12px;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  .background {\n    --background: url('UniqKidz-Logo.png') 0% 0%/110% #FE9805;\n  }\n\n  .pinput {\n    width: 100%;\n    padding-left: 4%;\n    padding-top: 0%;\n    font-size: 15px;\n    opacity: 48%;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .pinput {\n    width: 100%;\n    padding-left: 4%;\n    padding-top: 5.5%;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQUZBO0VBQ0cseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1FQUFBO0FBS0g7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFPRjs7QUFMQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBUUY7O0FBTkE7RUFDRSxpQkFBQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVNKOztBQVBBO0VBQ0UsY0FBQTtBQVVGOztBQVJBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFXRjs7QUFUQTtFQUNDLGNBQUE7RUFDQSxTQUFBO0FBWUQ7O0FBVkE7RUFDQyxjQUFBO0VBQ0EsU0FBQTtBQWFEOztBQVhBO0VBQ0UsY0FBQTtBQWNGOztBQVpBO0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBY0Y7O0FBWEE7RUFFRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWFGOztBQVZBO0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVlGOztBQVZBO0VBR0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0MsbUJBQUE7RUFDRCxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBV0Y7O0FBVEE7RUFDRyxlQUFBO0VBQ0EsWUFBQTtBQVlIOztBQVZBO0VBRUUsY0FBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFZSjs7QUFUQTtFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQTs7c0JBQUE7QUFhRjs7QUFUQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7QUFZRjs7QUFWQTtFQUVFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFZRjs7QUFUQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBWUY7O0FBUEE7Ozs7Ozs7Ozs7RUFBQTs7QUFZQTtFQUNFO0lBRUUsY0FBQTtJQUNBLFNBQUE7RUFRRjtBQUNGOztBQUhBO0VBQ0U7SUFFRSxXQUFBO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFJSjtBQUNGOztBQUFBO0VBRUU7SUFDRyx5REFBQTtFQUNIOztFQUNBO0lBRUUsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VBQ0Y7QUFDRjs7QUFHQTtFQUlJO0lBRUEsV0FBQTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBTEo7QUFDRiIsImZpbGUiOiJzaWduaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyptYXJnaW4tdG9wOiA1JTsqL1xyXG59XHJcbi5iYWNrLWJ0biB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDM3cHggMCAwIDE1cHg7XHJcbiAgZmlsbDogIzMzMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuLmJhY2tncm91bmR7XHJcbiAgIC8qLS1iYWNrZ3JvdW5kOiAjRkU5ODA1OyovXHJcbiAgIC8qLS1vdmVyZmxvdzogaGlkZGVuOyovXHJcbiAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWdzL1VuaXFLaWR6LUxvZ28ucG5nKSAwJSAwJS85MCUgI0ZFOTgwNSAhaW1wb3J0YW50O1xyXG59XHJcbi50b3BkaXZ7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNTBweCA1MHB4O1xyXG59XHJcbi5sb2dpbmRpdntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMzBweDtcclxuICB0b3A6IDIxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMzUlKSAwcHggNXB4IDE1cHg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcbi53cmFwcGVye1xyXG4gIHdpZHRoOjc1JTtcclxuICBtYXJnaW46MiUgYXV0bztcclxufVxyXG4uaGVhZHR4dHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luLXRvcDo4JTtcclxufVxyXG4uZmllbGRze1xyXG4gIG1hcmdpbi10b3A6NSU7XHJcbn1cclxuLmlucHV0ZGl2e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNFQkVCRUI7XHJcbiAgcGFkZGluZzogMSUgNCU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5pY29uZGl2e1xyXG4gbWFyZ2luLXRvcDogNCU7XHJcbiB3aWR0aDogOCU7XHJcbn1cclxuLmljb25kaXYxe1xyXG4gbWFyZ2luLXRvcDogMSU7XHJcbiB3aWR0aDogOCU7XHJcbn1cclxuLmV5ZXtcclxuICBjb2xvcjogIzczNzM3MztcclxufVxyXG4ucGlucHV0XHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgb3BhY2l0eTogNDglO1xyXG59XHJcblxyXG4uY2hlY2tcclxue1xyXG4gIGNvbG9yOiAjNzM3MzczO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG59XHJcblxyXG4uaW9uYnV0dG9uXHJcbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5pYlxyXG57XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6ICNmZDhmMDdmMjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5idG5ze1xyXG4gICBmb250LXNpemU6IDE1cHg7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2hlY2tcclxue1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxufVxyXG5cclxuLmZvb3RlclxyXG57XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjojMDAwMDAwO1xyXG4gIC8qYm90dG9tOiAxNXB4O1xyXG4gIGxlZnQ6IDgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyovXHJcbn1cclxuLmJndG9vbGJhcntcclxuICAvKi0tYmFja2dyb3VuZDogI0Y3RjdGNzsqL1xyXG4gIC0tYmFja2dyb3VuZDogI2ZkOGYwN2YyO1xyXG59XHJcbi5mb290ZXIgc3BhblxyXG57XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuXHJcblxyXG4vKkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjBweCkge1xyXG4gIC5waW5wdXRcclxuICB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMS41JTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcblxyXG59Ki9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkge1xyXG4gIC5pY29uZGl2XHJcbiAge1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICB3aWR0aDogOCU7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjBweCkge1xyXG4gIC5waW5wdXRcclxuICB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA0JTtcclxuICAgICAgcGFkZGluZy10b3A6IDEuNSU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIHtcclxuXHJcbiAgLmJhY2tncm91bmR7XHJcbiAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZ3MvVW5pcUtpZHotTG9nby5wbmcpIDAlIDAlLzExMCUgI0ZFOTgwNTtcclxuICB9XHJcbiAgLnBpbnB1dFxyXG4gIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0JTtcclxuICAgIHBhZGRpbmctdG9wOiAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG9wYWNpdHk6IDQ4JTtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KVxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KVxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKSB7XHJcbiAgICAucGlucHV0XHJcbiAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1LjUlO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "o9hh":
    /*!*************************************************!*\
      !*** ./src/app/signin/signin-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SigninPageRoutingModule */

    /***/
    function o9hh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninPageRoutingModule", function () {
        return SigninPageRoutingModule;
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


      var _signin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signin.page */
      "Pyzx");

      var routes = [{
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_3__["SigninPage"]
      }];

      var SigninPageRoutingModule = function SigninPageRoutingModule() {
        _classCallCheck(this, SigninPageRoutingModule);
      };

      SigninPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SigninPageRoutingModule);
      /***/
    },

    /***/
    "wuB5":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function wuB5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content class=\"background\">\n\n  <div class=\"topdiv\">\n\t\t<div class=\"header\">\n\t    <div class=\"back-btn\">\n\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t      </div>\n   \t</div>\n   \t<div style=\"text-align: center;margin-top: 4%;\">\n  \t\t<img src=\"assets/imgs/ulogo.png\">\n  \t</div>\t\n  </div>\n  <div class=\"logindiv\">\n\t  <div class=\"wrapper\">\n\t  \t\n\t  \t<div class=\"headtxt\">Hey there,<br> Welcome</div>\n\t  \t<p style=\"margin-bottom: 10%;font-size:14px;color: #000000;opacity:0.8;\">Enter your username/email and password to login to your UniqKidz account.</p>\n\n\t  \t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t<img src=\"assets/imgs/icons/email.svg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"Email\" type=\"email\" [(ngModel)]=\"email\"></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p *ngIf=\"emailError.status\" class=\"error\">\n\t\t    {{emailError.message}}\n\t\t  </p>\n\t\t\t\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"icondiv1\">\n\t\t\t\t\t\t<img src=\"assets/imgs/icons/lock.svg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"Password\" \n\t\t\t\t\t\t\ttype=\"{{showPass ? 'text':'password' }}\"\n\t\t\t\t\t\t\t[(ngModel)]=\"password\"\n\t\t\t\t\t\t></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t<!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\n\t\t\t\t\t\t<ion-icon name=\"eye\" class=\"eye\"  *ngIf=\"!showPass\" (click)=\"togglePass()\"></ion-icon>\n\t\t\t\t\t\t<ion-icon name=\"eye-off\" class=\"eye\"  *ngIf=\"showPass\" (click)=\"togglePass()\"></ion-icon>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p *ngIf=\"passwordError.status\" class=\"error\">\n\t\t    {{passwordError.message}}\n\t\t  </p>\n\n\t\t\t<div class=\"check\">\n\t\t\t\t<div class=\"ch2\" (click)=\"goto()\">\n\t\t\t\t\tForgot password?\n\t\t\t\t</div>\n\t\t\t</div>\t\n\n\t\t\t<p *ngIf=\"error.status\" class=\"error\">\n\t\t    {{error.message}}\n\t\t  </p>\n\t\t\t<div class=\"ionbutton\" (click)=\"gotohome()\">\n\t\t\t\t<ion-button class=\"ib\">\n\t\t\t\t <span class=\"btns\">log in</span> \n\t\t\t\t</ion-button>\n\t\t\t</div>\n\n\t\t\t <!-- <div class=\"signup\">\n\t      <p>Don't have an account already?</p>\n\t      <p (click)=\"signupPage()\" class=\"signupText\">SIGN UP</p>\n\t    </div> -->\n\n\t  </div>\n\n\t</div>\n \n \n\t<!-- <div class=\"footer\">\n\t\tAlready got an account? <span (click)=\"gotologin()\">Login</span>\n\t</div> -->\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n\t<ion-toolbar class=\"bgtoolbar\">\n\t\t<div class=\"footer\">\n\t\t\tNot a member? <span (click)=\"gotologin()\">Register now.</span>\n\t\t</div>\n\t</ion-toolbar> \n</ion-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=signin-signin-module-es5.js.map