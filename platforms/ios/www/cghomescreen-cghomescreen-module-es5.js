(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cghomescreen-cghomescreen-module"], {
    /***/
    "1PF4":
    /*!***************************************************!*\
      !*** ./src/app/cghomescreen/cghomescreen.page.ts ***!
      \***************************************************/

    /*! exports provided: CghomescreenPage */

    /***/
    function PF4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CghomescreenPage", function () {
        return CghomescreenPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cghomescreen_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cghomescreen.page.html */
      "5sxX");
      /* harmony import */


      var _cghomescreen_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cghomescreen.page.scss */
      "XjAF");
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


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");

      var CghomescreenPage = /*#__PURE__*/function () {
        function CghomescreenPage(navCtrl, loading, rest, platform, statusbar) {
          _classCallCheck(this, CghomescreenPage);

          this.navCtrl = navCtrl;
          this.loading = loading;
          this.rest = rest;
          this.platform = platform;
          this.statusbar = statusbar;
          this.childsarray = [];
          this.picture = false;
          this.error = {
            status: false,
            message: ''
          };
          this.caregiverProfile = 'assets/imgs/profilelogo.png';
          this.accountid = localStorage.getItem('accountTypeId');
          console.log('accountid:', this.accountid);
          this.user = JSON.parse(localStorage.getItem('user'));
          console.log('user details', this.user);
          this.name = this.user.first_name;
          console.log('first_name', this.name);
          this.userid = this.user.users_id;
          console.log('caaregiver id:', this.userid);
        }

        _createClass(CghomescreenPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.platform.ready().then(function () {
              // let status bar overlay webview
              _this.statusbar.overlaysWebView(true); // set status bar to white
              // this.statusbar.backgroundColorByHexString('#FFFFFF');


              _this.statusbar.styleDefault();
            });
          }
        }, {
          key: "goto",
          value: function goto() {
            this.navCtrl.navigateForward('/cgprofile');
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getprofile(); // if(details==null){
            //   this.caregiverProfile=this.caregiverProfile;
            // }else{
            //   this.caregiverProfile=details.profile_picture;
            // }

            this.showchild();
          }
        }, {
          key: "getprofile",
          value: function getprofile() {
            var _this2 = this;

            this.rest.sendRequest('get_profile_picture', {
              userId: this.userid
            }).subscribe(function (data) {
              console.log('profile get data:', data);

              if (data.data.profile_picture == null || data.data.profile_picture == '') {
                _this2.caregiverProfile = _this2.caregiverProfile;
              } else {
                _this2.caregiverProfile = data.data.profile_picture;
              }
            });
          }
        }, {
          key: "showchild",
          value: function showchild() {
            var _this3 = this;

            this.childsarray = [];
            this.loading.loadershow();
            this.rest.sendRequest('caregiver_requests', {
              caregiverId: this.userid
            }).subscribe(function (data) {
              console.log('caregiver_requests', data);

              _this3.loading.hideLoader();

              if (data.status == 'success') {
                data.data.forEach(function (val) {
                  if (val.child_details.profile_picture == null || val.child_details.profile_picture == '') {
                    _this3.defaultProfile = 'assets/imgs/profilelogo.png';
                  } else {
                    _this3.defaultProfile = val.child_details.profile_picture;
                  }

                  var data = {
                    parentid: val.parent_id,
                    fname: val.parent_details.first_name,
                    lname: val.parent_details.last_name,
                    age: val.child_details.age,
                    profile: _this3.defaultProfile,
                    childid: val.child_id,
                    childname: val.child_details.child_name,
                    starttime: val.start_time,
                    endtime: val.end_time,
                    status: val.status,
                    date: val.date,
                    about: val.child_details.additional_notes
                  };

                  if (val.status == 'Active') {
                    _this3.childsarray.push(data);

                    _this3.picture = true;
                  }
                });
                console.log('requestsarray:', _this3.childsarray);
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
                return;
              }
            });
          }
        }, {
          key: "gotoprofile",
          value: function gotoprofile(child) {
            console.log('profile..........":');
            this.navCtrl.navigateForward(['/childprofile1', {
              parentid: child.parentid,
              childid: child.childid
            }]);
          }
        }]);

        return CghomescreenPage;
      }();

      CghomescreenPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]
        }];
      };

      CghomescreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cghomescreen',
        template: _raw_loader_cghomescreen_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cghomescreen_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CghomescreenPage);
      /***/
    },

    /***/
    "5J5L":
    /*!*************************************************************!*\
      !*** ./src/app/cghomescreen/cghomescreen-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: CghomescreenPageRoutingModule */

    /***/
    function J5L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CghomescreenPageRoutingModule", function () {
        return CghomescreenPageRoutingModule;
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


      var _cghomescreen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cghomescreen.page */
      "1PF4");

      var routes = [{
        path: '',
        component: _cghomescreen_page__WEBPACK_IMPORTED_MODULE_3__["CghomescreenPage"]
      }];

      var CghomescreenPageRoutingModule = function CghomescreenPageRoutingModule() {
        _classCallCheck(this, CghomescreenPageRoutingModule);
      };

      CghomescreenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CghomescreenPageRoutingModule);
      /***/
    },

    /***/
    "5jCD":
    /*!*****************************************************!*\
      !*** ./src/app/cghomescreen/cghomescreen.module.ts ***!
      \*****************************************************/

    /*! exports provided: CghomescreenPageModule */

    /***/
    function jCD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CghomescreenPageModule", function () {
        return CghomescreenPageModule;
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


      var _cghomescreen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cghomescreen-routing.module */
      "5J5L");
      /* harmony import */


      var _cghomescreen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cghomescreen.page */
      "1PF4");

      var CghomescreenPageModule = function CghomescreenPageModule() {
        _classCallCheck(this, CghomescreenPageModule);
      };

      CghomescreenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cghomescreen_routing_module__WEBPACK_IMPORTED_MODULE_5__["CghomescreenPageRoutingModule"]],
        declarations: [_cghomescreen_page__WEBPACK_IMPORTED_MODULE_6__["CghomescreenPage"]]
      })], CghomescreenPageModule);
      /***/
    },

    /***/
    "5sxX":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cghomescreen/cghomescreen.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function sxX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t\t  <ion-toolbar class=\"headBgGlobal\">\n\t\t    <ion-buttons slot=\"start\" style=\"margin-left: 2%;\">\n\t\t      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n\t\t  </ion-buttons>\n\t\t  <ion-buttons slot=\"end\" style=\"margin-right: 2%;\" (click)=\"goto()\">\n\n\t\t    <img src=\"{{caregiverProfile}}\" class=\"pimg\">\n\t\t  </ion-buttons>\n\t\t</ion-toolbar>\n</ion-header> -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n   <ion-row>\n     <ion-col class=\"backbtn\" size=\"2\">\n       <div>\n         <ion-menu-button class=\"menuicon\"></ion-menu-button>\n       </div>\n     </ion-col>\n\n     <ion-col size=\"8\">\n     </ion-col>\n\n     <ion-col size=\"2\">\n       <div (click)=\"goto()\">\n         <img src=\"{{caregiverProfile}}\" class=\"pimg\">\n         <!-- <img src=\"assets/imgs/clogo.png\" *ngIf=\"userType=='caregiver'\"> -->\n       </div>\n     </ion-col>\n   </ion-row>\n </ion-toolbar>\n</ion-header>\n<ion-content class=\"background\">\n\n\t<div class=\"wrapper\">\n\t\t<div class=\"text\">Welcome</div>\n\t\t<div class=\"text1\">{{name}}</div>\n\t\t\t<div class=\"timer\" *ngIf=\"picture==false\">\n\t\t\t\t<!-- <img src=\"assets/imgs/timer.png\"> -->\n\t\t\t\t<img src=\"assets/imgs/logo.svg\">\n\t\t\t</div>\n\t\t<div *ngFor=\"let child of childsarray\">\n\t\t\t<p *ngIf=\"error.status\" class=\"error\">\n\t\t    {{error.message}}\n\t\t  </p>\n\t\t\t<!-- <div  *ngIf=\"child.status=='Pending'\" class=\"nothing\">No Child Exist</div> -->\n\t\t\t<div  *ngIf=\"child.status=='Active'\">\n\t\t\t\t<div class=\"main\" (click)=\"gotoprofile(child)\">\n\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t\t<img src=\"{{child.profile}}\" width=\"140px\" height=\"125px\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t\t<div class=\"rtext\">{{child.childname}},<span style=\"font-weight:400;margin-left: 3%;\">{{child.age}} years</span></div>\n\t\t\t\t\t\t\t<div class=\"rtext2\">Date : {{child.date}}</div>\n\t\t\t\t\t\t\t<div class=\"rtext1\">Timing</div>\n\t\t\t\t\t\t\t<div class=\"rtext2\">{{child.starttime}} - {{child.endtime}}</div>\n\t\t\t\t\t\t\t<div class=\"rtext3\">{{child.about}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<!-- <div class=\"main\" (click)=\"gotoprofile()\">\n\t\t\t<div class=\"inner\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<img src=\"assets/imgs/boy.png\" width=\"140px\" height=\"125px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right\">\n\t\t\t\t\t<div class=\"rtext\">Emily,<span style=\"font-weight:400;margin-left: 3%;\">3 years</span></div>\n\t\t\t\t\t<div class=\"rtext1\">Timing</div>\n\t\t\t\t\t<div class=\"rtext2\">8:40 pm - 6:00 am</div>\n\t\t\t\t\t<div class=\"rtext3\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div> -->\n\t</div>\n</ion-content>\n";
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
              var _this4 = this;

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

                          if (!_this4.toast) {
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
    "XjAF":
    /*!*****************************************************!*\
      !*** ./src/app/cghomescreen/cghomescreen.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function XjAF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*.cheader{\n\tposition: fixed;\n}*/\n.headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n.menuicon {\n  color: #000;\n}\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n.pimg {\n  width: 41px;\n  height: 41px;\n  border-radius: 50px;\n}\n.logo {\n  text-align: right;\n  margin-right: 5%;\n}\n.logo img {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\n.background {\n  --background: #F7F7F7;\n}\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n.timer {\n  text-align: center;\n}\n.text {\n  font-size: 18px;\n  color: #000;\n  font-weight: 600;\n}\n.text1 {\n  color: #FE9805;\n  font-size: 29px;\n  font-weight: 600;\n}\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 7%;\n}\n.left img {\n  border-radius: 7px;\n}\n.inner {\n  padding: 2% 3%;\n  display: flex;\n}\n.right {\n  margin-left: 5%;\n  width: 50%;\n  margin-top: 2%;\n}\n.rtext {\n  font-size: 20px;\n  font-weight: 600;\n}\n.rtext1 {\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 2%;\n  color: #000000;\n}\n.rtext2 {\n  font-size: 14px;\n  margin-top: 1%;\n}\n.rtext3 {\n  font-size: 13px;\n  font-weight: 600;\n  margin-top: 1%;\n  color: #000000;\n  overflow: hidden;\n  height: 50px;\n}\n.rtext4 {\n  margin-top: 3%;\n}\n.nothing {\n  color: #000;\n  font-size: 20px;\n  text-align: center;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  font-weight: 600;\n  padding: 15px;\n  border-radius: 10px;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NnaG9tZXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBQUE7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0E7RUFDQyxXQUFBO0FBRUQ7QUFDQztFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUVIO0FBRUE7RUFDQyxXQUFBO0VBQ0csWUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDQTtFQUNDLGlCQUFBO0VBQ0MsZ0JBQUE7QUFFRjtBQUFBO0VBQ0MsV0FBQTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtBQUdGO0FBREE7RUFDRSxxQkFBQTtBQUlGO0FBRkE7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQUtEO0FBSEE7RUFDQyxrQkFBQTtBQU1EO0FBSkE7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBT0Q7QUFMQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFRRDtBQU5BO0VBQ0MsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVNEO0FBUEE7RUFDQyxrQkFBQTtBQVVEO0FBUkE7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBQVdEO0FBVEE7RUFDQyxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFZRDtBQVZBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBYUQ7QUFYQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBY0Q7QUFaQTtFQUNDLGVBQUE7RUFDQyxjQUFBO0FBZUY7QUFiQTtFQUNDLGVBQUE7RUFDRyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBZ0JKO0FBZEE7RUFDQyxjQUFBO0FBaUJEO0FBZEE7RUFDQyxXQUFBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWlCRiIsImZpbGUiOiJjZ2hvbWVzY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouY2hlYWRlcntcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcbn0qL1xyXG4uaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgcGFkZGluZzogMSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuLmlvc3tcclxuXHQuaGVhZEJnIHtcclxuXHQgIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuXHQgIHBhZGRpbmc6IDMlIDAlO1xyXG5cdH1cclxuXHRcclxuICB9XHJcbi5waW1ne1xyXG5cdHdpZHRoOiA0MXB4O1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4ubG9nb3tcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbi5sb2dvIGltZ3tcclxuXHR3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6OTAlO1xyXG5cdG1hcmdpbjo1JSBhdXRvO1xyXG59XHJcbi50aW1lcntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHR7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGNvbG9yOiMwMDA7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGV4dDF7XHJcblx0Y29sb3I6I0ZFOTgwNTtcclxuXHRmb250LXNpemU6IDI5cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ubWFpbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogNyU7XHJcbn1cclxuLmxlZnQgaW1ne1xyXG5cdGJvcmRlci1yYWRpdXM6N3B4O1xyXG59XHJcbi5pbm5lcntcclxuXHRwYWRkaW5nOjIlIDMlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnJpZ2h0e1xyXG5cdG1hcmdpbi1sZWZ0OiA1JTtcclxuXHR3aWR0aDogNTAlO1xyXG5cdG1hcmdpbi10b3A6MiU7XHJcbn1cclxuLnJ0ZXh0e1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LXdlaWdodDo2MDA7XHJcbn1cclxuLnJ0ZXh0MXtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6NjAwO1xyXG5cdG1hcmdpbi10b3A6IDIlO1xyXG5cdGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5ydGV4dDJ7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG59XHJcbi5ydGV4dDN7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5ydGV4dDR7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcbn1cclxuXHJcbi5ub3RoaW5ne1xyXG5cdGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAzNSUpIDBweCA1cHggMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMCVcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=cghomescreen-cghomescreen-module-es5.js.map