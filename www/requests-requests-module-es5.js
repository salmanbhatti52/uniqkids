(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["requests-requests-module"], {
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
    "A3FS":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/requests/requests.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function A3FS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t <ion-toolbar class=\"headBgGlobal\">\n\t\t<ion-row>\n\t\t\t<ion-col style=\"padding-top:6px;\" size=\"2\">\n\t\t\t\t<div>\n\t\t\t\t\t<ion-menu-button class=\"menuicon\"></ion-menu-button>\n        </div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col class=\"titleclass\" size=\"8\">\n\t\t\t\t<ion-text class=\"ctitle\">Requests</ion-text>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"2\">\n\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t    <!-- <ion-buttons slot=\"start\" style=\"margin-left: 2%;\">\n\t      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n\t  </ion-buttons>\n\t   <ion-title class=\"ctitle\">Requests</ion-title> -->\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\t\t<ion-segment\n      id=\"segment\"\n      mode=\"ios\"\n      (ionChange)=\"segmentChanged($event)\"\n      #mySegment>\n      <ion-segment-button mode=\"ios\" value=\"current\">\n        <ion-label>Current</ion-label>\n      </ion-segment-button>\n      <ion-segment-button checked mode=\"ios\" value=\"pending\">\n        <ion-label>Pending</ion-label>\n      </ion-segment-button>\n      <ion-segment-button mode=\"ios\" value=\"previous\">\n        <ion-label>Previous</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <div *ngFor=\"let req of requestsarray\">\n    \t<div *ngIf=\"requestsType=='pending'\">\n    \t\t<div  *ngIf=\"req.status=='Pending'\">\n\t    \t\t<div class=\"main\" (click)=\"gotoprofile(req)\">\n\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t<div class=\"top\">\n\t\t\t\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{req.profile}}\" width=\"145px\" height=\"135px\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t\t\t\t<div class=\"rightinner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"textdiv\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rtext\">{{req.fname}} {{req.lname}} <span class=\"rtext1\">${{req.price}}/hr</span></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"t1\">Child</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"t2\">{{req.childname}}</div>\n                      <div class=\"t2\">Date : {{req.date}}</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"t1\">Timing</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"t2\">{{req.starttime}} - {{req.endtime}}</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"rtext1\"></div> -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rtext2\">{{req.about}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n    \t</div>\n    \t\n    \t<div  *ngIf=\"requestsType=='current'\" style=\"margin-top: 8%;\">\n    \t\t<div *ngIf=\"req.status=='Active'\">\n    \t\t\t<div class=\"main\" (click)=\"gotoprofile(req)\">\n\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t<div class=\"top\">\n\t\t\t\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{req.profile}}\" width=\"145px\" height=\"135px\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t\t\t\t<div class=\"rightinner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"textdiv\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rtext\">{{req.fname}} {{req.lname}} <span class=\"rtext1\">${{req.price}}/hr</span></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"t1\">Child</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"t2\">{{req.childname}}</div>\n                      <div class=\"t2\">Date : {{req.date}}</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"t1\">Timing</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"t2\">{{req.starttime}} - {{req.endtime}}</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"rtext1\">${{req.price}}/hr</div> -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rtext2\">{{req.about}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n    \t\t</div>\n    \t</div>\n\n    \t<div  *ngIf=\"requestsType=='previous'\" style=\"margin-top: 8%;\">\n    \t\t<div *ngIf=\"req.status=='Completed'\">\n    \t\t\t<div class=\"main\" (click)=\"gotoprofile(req)\">\n\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t<div class=\"top\">\n\t\t\t\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{req.profile}}\" width=\"145px\" height=\"135px\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t\t\t\t<div class=\"rightinner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"textdiv\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rtext\">{{req.fname}} {{req.lname}} <span class=\"rtext1\">${{req.price}}/hr</span></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"t1\">Child</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"t2\">{{req.childname}}</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"t1\">Timing</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"t2\">{{req.starttime}} - {{req.endtime}}</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"rtext1\">${{req.price}}/hr</div> -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rtext2\">{{req.about}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n    \t\t</div>\n    \t</div>\n    </div>\n    \n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "NXow":
    /*!*******************************************!*\
      !*** ./src/app/requests/requests.page.ts ***!
      \*******************************************/

    /*! exports provided: RequestsPage */

    /***/
    function NXow(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestsPage", function () {
        return RequestsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_requests_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./requests.page.html */
      "A3FS");
      /* harmony import */


      var _requests_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./requests.page.scss */
      "uZg3");
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

      var RequestsPage = /*#__PURE__*/function () {
        function RequestsPage(navCtrl, loading, rest) {
          _classCallCheck(this, RequestsPage);

          this.navCtrl = navCtrl;
          this.loading = loading;
          this.rest = rest;
          this.requestsarray = [];
          this.error = {
            status: false,
            message: ""
          };
          this.parentid = localStorage.getItem('uid');
          console.log('parent id :', this.parentid); // this.showrequest();
        }

        _createClass(RequestsPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (this.requestsType) {
              if (this.requestsType === 'current') {
                this.mySegment.nativeElement.children[0].click();
                console.log('click event', this.mySegment.nativeElement.children[0].click());
              }

              if (this.requestsType === 'pending') {
                this.mySegment.nativeElement.children[1].click();
              }

              if (this.requestsType === 'previous') {
                this.mySegment.nativeElement.children[2].click();
              }
            } else {
              this.requestsType = 'current';
              this.mySegment.nativeElement.children[0].click();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            if (ev.detail.value === 'current') {
              this.requestsType = 'current';
              this.showrequest();
              this.requestsarray = [];
            }

            if (ev.detail.value === 'pending') {
              this.requestsType = 'pending';
              this.showrequest();
              this.requestsarray = [];
            }

            if (ev.detail.value === 'previous') {
              this.requestsType = 'previous';
              this.showrequest();
              this.requestsarray = [];
            }

            localStorage.setItem('requestType', this.requestsType);
          }
        }, {
          key: "showrequest",
          value: function showrequest() {
            var _this2 = this;

            this.requestsarray = [];
            this.loading.loadershow();
            this.rest.sendRequest("parent_requests", {
              parentId: this.parentid
            }).subscribe(function (data) {
              console.log('parent_requests', data);

              if (data.status == 'success') {
                _this2.loading.hideLoader();

                data.data.forEach(function (val) {
                  if (val.child_details.profile_picture == null || val.child_details.profile_picture == '') {
                    _this2.defaultProfile = 'assets/imgs/profilelogo.png';
                  } else {
                    _this2.defaultProfile = val.child_details.profile_picture;
                  }

                  var data = {
                    caregiverid: val.caregiver_id,
                    fname: val.caregiver_details.first_name,
                    lname: val.caregiver_details.last_name,
                    price: val.caregiver_details.per_hour_rate,
                    profile: _this2.defaultProfile,
                    childid: val.child_details.child_id,
                    parentid: val.child_details.parent_id,
                    childname: val.child_details.child_name,
                    starttime: val.start_time,
                    endtime: val.end_time,
                    status: val.status,
                    hiringid: val.hiring_id,
                    about: val.caregiver_details.about,
                    date: val.date
                  };

                  _this2.requestsarray.push(data);
                });
                console.log('requestsarray:', _this2.requestsarray);
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
            });
          }
        }, {
          key: "gotoprofile",
          value: function gotoprofile(req) {
            this.navCtrl.navigateForward(['/profile', {
              page: 'requests',
              userid: req.caregiverid
            }]);
          }
        }]);

        return RequestsPage;
      }();

      RequestsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }];
      };

      RequestsPage.propDecorators = {
        mySegment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['mySegment', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }]
      };
      RequestsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-requests',
        template: _raw_loader_requests_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_requests_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RequestsPage);
      /***/
    },

    /***/
    "QFjp":
    /*!*****************************************************!*\
      !*** ./src/app/requests/requests-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: RequestsPageRoutingModule */

    /***/
    function QFjp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestsPageRoutingModule", function () {
        return RequestsPageRoutingModule;
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


      var _requests_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./requests.page */
      "NXow");

      var routes = [{
        path: '',
        component: _requests_page__WEBPACK_IMPORTED_MODULE_3__["RequestsPage"]
      }];

      var RequestsPageRoutingModule = function RequestsPageRoutingModule() {
        _classCallCheck(this, RequestsPageRoutingModule);
      };

      RequestsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RequestsPageRoutingModule);
      /***/
    },

    /***/
    "q2Y4":
    /*!*********************************************!*\
      !*** ./src/app/requests/requests.module.ts ***!
      \*********************************************/

    /*! exports provided: RequestsPageModule */

    /***/
    function q2Y4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestsPageModule", function () {
        return RequestsPageModule;
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


      var _requests_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./requests-routing.module */
      "QFjp");
      /* harmony import */


      var _requests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./requests.page */
      "NXow");

      var RequestsPageModule = function RequestsPageModule() {
        _classCallCheck(this, RequestsPageModule);
      };

      RequestsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _requests_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestsPageRoutingModule"]],
        declarations: [_requests_page__WEBPACK_IMPORTED_MODULE_6__["RequestsPage"]]
      })], RequestsPageModule);
      /***/
    },

    /***/
    "uZg3":
    /*!*********************************************!*\
      !*** ./src/app/requests/requests.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function uZg3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 6% auto;\n}\n\nion-segment {\n  padding: 5px 5px;\n  border-radius: 10px;\n  margin-top: 10px;\n  --background: #EBEBEB;\n}\n\nion-segment ion-segment-button {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 10px;\n  --background-checked: #fe9805;\n  --indicator-color: transparent !important;\n  --color: #00000;\n  --color-checked: #fff;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.left img {\n  border-radius: 7px;\n}\n\n.inner {\n  padding: 2% 2.5%;\n}\n\n.top {\n  display: flex;\n}\n\n.right {\n  margin-left: 3%;\n  width: 55%;\n  margin-top: 1%;\n}\n\n.rightinner {\n  display: flex;\n}\n\n.textdiv {\n  width: 100%;\n}\n\n.rtext {\n  font-size: 19px;\n  font-weight: 600;\n}\n\n.rtext1 {\n  font-size: 14px;\n  font-weight: 400;\n  color: #FE9805;\n  margin-top: 3%;\n  margin-left: 13%;\n}\n\n.t1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 3%;\n}\n\n.t2 {\n  color: #000000;\n  font-size: 14px;\n  margin-top: 3%;\n}\n\n.rtext2 {\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 1%;\n  overflow: hidden;\n  height: 40px;\n}\n\n@media only screen and (max-width: 320px) {\n  .right {\n    margin-left: 3%;\n    margin-top: 1%;\n  }\n\n  .rightinner {\n    display: flex;\n  }\n\n  .rtext {\n    font-size: 14px;\n    font-weight: 600;\n  }\n\n  .rtext1 {\n    font-size: 10px;\n    font-weight: 400;\n    color: #FE9805;\n    margin-top: 2%;\n    margin-left: 13%;\n  }\n\n  .t1 {\n    color: #000000;\n    font-size: 11px;\n    font-weight: 600;\n    margin-top: 15%;\n  }\n\n  .t2 {\n    color: #000000;\n    font-size: 11px;\n    margin-top: 15%;\n  }\n\n  .rtext2 {\n    font-size: 14px;\n    font-weight: 400;\n    margin-top: 1%;\n  }\n}\n\n@media only screen and (max-width: 414px) {\n  .rtext1 {\n    font-size: 12px;\n    font-weight: 400;\n    color: #FE9805;\n    margin-top: 2%;\n    margin-left: 15%;\n  }\n\n  .t1 {\n    color: #000000;\n    font-size: 14px;\n    font-weight: 600;\n    margin-top: 3%;\n  }\n\n  .t2 {\n    color: #000000;\n    font-size: 14px;\n    margin-top: 3%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlcXVlc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUNBO0VBRUUsZUFBQTtFQUNFLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDQyxrQkFBQTtFQUFvQixnQkFBQTtBQUdyQjs7QUFBQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBSXRCOztBQUZDO0VBQ0MscUJBQUE7RUFDQSxjQUFBO0FBSUY7O0FBREE7RUFDRSxxQkFBQTtBQUlGOztBQUZBO0VBQ0MsVUFBQTtFQUNBLGVBQUE7QUFLRDs7QUFIQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBTUY7O0FBTEU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFKQTtFQUNDLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFPRDs7QUFMQTtFQUNDLGtCQUFBO0FBUUQ7O0FBTkE7RUFDQyxnQkFBQTtBQVNEOztBQU5BO0VBQ0MsYUFBQTtBQVNEOztBQVBBO0VBQ0MsZUFBQTtFQUNHLFVBQUE7RUFDQSxjQUFBO0FBVUo7O0FBUkE7RUFDQyxhQUFBO0FBV0Q7O0FBVEE7RUFDQyxXQUFBO0FBWUQ7O0FBVkE7RUFDQyxlQUFBO0VBQ0csZ0JBQUE7QUFhSjs7QUFYQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFjRDs7QUFaQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBZUQ7O0FBYkE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFnQkQ7O0FBYkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDRyxZQUFBO0FBZ0JKOztBQWJBO0VBQ0M7SUFDQyxlQUFBO0lBQ0MsY0FBQTtFQWdCRDs7RUFkRDtJQUNDLGFBQUE7RUFpQkE7O0VBZkQ7SUFDQyxlQUFBO0lBQ0csZ0JBQUE7RUFrQkg7O0VBaEJEO0lBQ0MsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQW1CQTs7RUFqQkQ7SUFDQyxjQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtFQW9CQTs7RUFsQkQ7SUFDQyxjQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUFxQkE7O0VBbEJEO0lBQ0MsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQXFCQTtBQUNGOztBQWxCQTtFQUVDO0lBQ0MsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQW1CQTs7RUFqQkQ7SUFDQyxjQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQW9CQTs7RUFsQkQ7SUFDQyxjQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7RUFxQkE7QUFDRiIsImZpbGUiOiJyZXF1ZXN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgcGFkZGluZzogMSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuXHQuaGVhZEJnIHtcclxuXHRcdC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuXHRcdHBhZGRpbmc6IDMlIDAlO1xyXG5cdH1cclxufVxyXG4uYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbi53cmFwcGVye1xyXG5cdHdpZHRoOjkwJTtcclxuXHRtYXJnaW46NiUgYXV0bztcclxufVxyXG5pb24tc2VnbWVudCB7XHJcbiAgcGFkZGluZzogNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRUJFQkVCO1xyXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMDtcclxuICAgIC0tbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgLS1tYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZTk4MDU7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3I6ICMwMDAwMDtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcbi5tYWlue1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweDtcclxuXHRtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4ubGVmdCBpbWd7XHJcblx0Ym9yZGVyLXJhZGl1czo3cHg7XHJcbn1cclxuLmlubmVye1xyXG5cdHBhZGRpbmc6IDIlIDIuNSU7XHJcblx0XHJcbn1cclxuLnRvcHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5yaWdodHtcclxuXHRtYXJnaW4tbGVmdDogMyU7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuLnJpZ2h0aW5uZXJ7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG4udGV4dGRpdntcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4ucnRleHR7XHJcblx0Zm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ucnRleHQxe1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDo0MDA7XHJcblx0Y29sb3I6I0ZFOTgwNTtcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxuXHRtYXJnaW4tbGVmdDoxMyVcclxufVxyXG4udDF7XHJcblx0Y29sb3I6ICMwMDAwMDA7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcbn1cclxuLnQye1xyXG5cdGNvbG9yOiAjMDAwMDAwO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxufVxyXG5cclxuLnJ0ZXh0MntcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdG1hcmdpbi10b3A6IDElO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjBweCkge1xyXG5cdC5yaWdodHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAzJTtcclxuXHQgIG1hcmdpbi10b3A6IDElO1xyXG5cdH1cclxuXHQucmlnaHRpbm5lcntcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cdC5ydGV4dHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHQgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHR9XHJcblx0LnJ0ZXh0MXtcclxuXHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRcdGNvbG9yOiNGRTk4MDU7XHJcblx0XHRtYXJnaW4tdG9wOiAyJTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMyVcclxuXHR9XHJcblx0LnQxe1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRmb250LXNpemU6IDExcHg7XHJcblx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0bWFyZ2luLXRvcDogMTUlO1xyXG5cdH1cclxuXHQudDJ7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdGZvbnQtc2l6ZTogMTFweDtcclxuXHRcdG1hcmdpbi10b3A6IDE1JTtcclxuXHR9XHJcblxyXG5cdC5ydGV4dDJ7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRmb250LXdlaWdodDo0MDA7XHJcblx0XHRtYXJnaW4tdG9wOiAxJTtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkge1xyXG5cdFxyXG5cdC5ydGV4dDF7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRmb250LXdlaWdodDo0MDA7XHJcblx0XHRjb2xvcjojRkU5ODA1O1xyXG5cdFx0bWFyZ2luLXRvcDogMiU7XHJcblx0XHRtYXJnaW4tbGVmdDogMTUlXHJcblx0fVxyXG5cdC50MXtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdG1hcmdpbi10b3A6IDMlO1xyXG5cdH1cclxuXHQudDJ7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdG1hcmdpbi10b3A6IDMlO1xyXG5cdH1cclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=requests-requests-module-es5.js.map