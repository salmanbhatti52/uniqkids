(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agencyhomescreen-agencyhomescreen-module"], {
    /***/
    "0Ph9":
    /*!*************************************************************!*\
      !*** ./src/app/agencyhomescreen/agencyhomescreen.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function Ph9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*.cheader{\n\tposition: fixed;\n}*/\n.headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n.menuicon {\n  color: #000;\n}\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n.pimg {\n  width: 41px;\n  height: 41px;\n  border-radius: 50px;\n}\n.logo {\n  text-align: right;\n  margin-right: 5%;\n}\n.logo img {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\n.background {\n  --background: #F7F7F7;\n}\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n.timer {\n  text-align: center;\n}\n.text {\n  font-size: 18px;\n  color: #000;\n  font-weight: 600;\n}\n.text1 {\n  color: #FE9805;\n  font-size: 29px;\n  font-weight: 600;\n}\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 7%;\n}\n.left img {\n  border-radius: 7px;\n}\n.inner {\n  padding: 2% 3%;\n  display: flex;\n}\n.right {\n  margin-left: 5%;\n  width: 50%;\n  margin-top: 2%;\n}\n.rtext {\n  font-size: 20px;\n  font-weight: 600;\n}\n.rtext1 {\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 2%;\n  color: #000000;\n}\n.rtext2 {\n  font-size: 14px;\n  margin-top: 1%;\n}\n.rtext3 {\n  font-size: 13px;\n  font-weight: 600;\n  margin-top: 1%;\n  color: #000000;\n  overflow: hidden;\n  height: 50px;\n}\n.rtext4 {\n  margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FnZW5jeWhvbWVzY3JlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FBR0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNBO0VBQ0MsV0FBQTtBQUVEO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFFSjtBQUVBO0VBQ0MsV0FBQTtFQUNHLFlBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0E7RUFDQyxpQkFBQTtFQUNDLGdCQUFBO0FBRUY7QUFBQTtFQUNDLFdBQUE7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQURBO0VBQ0UscUJBQUE7QUFJRjtBQUZBO0VBQ0MsVUFBQTtFQUNBLGVBQUE7QUFLRDtBQUhBO0VBQ0Msa0JBQUE7QUFNRDtBQUpBO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQU9EO0FBTEE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUUQ7QUFOQTtFQUNDLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFTRDtBQVBBO0VBQ0Msa0JBQUE7QUFVRDtBQVJBO0VBQ0MsY0FBQTtFQUNBLGFBQUE7QUFXRDtBQVRBO0VBQ0MsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBWUQ7QUFWQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQWFEO0FBWEE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQWNEO0FBWkE7RUFDQyxlQUFBO0VBQ0MsY0FBQTtBQWVGO0FBYkE7RUFDQyxlQUFBO0VBQ0csZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWdCSjtBQWRBO0VBQ0MsY0FBQTtBQWlCRCIsImZpbGUiOiJhZ2VuY3lob21lc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmNoZWFkZXJ7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG59Ki9cclxuLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6IDElIDAlO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcbi5pb3N7XHJcbiAgLmhlYWRCZyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgICBwYWRkaW5nOiAzJSAwJTtcclxuICB9XHJcbiAgXHJcbn1cclxuLnBpbWd7XHJcblx0d2lkdGg6IDQxcHg7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcbi5sb2dve1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuLmxvZ28gaW1ne1xyXG5cdHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG4ud3JhcHBlcntcclxuXHR3aWR0aDo5MCU7XHJcblx0bWFyZ2luOjUlIGF1dG87XHJcbn1cclxuLnRpbWVye1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGV4dHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Y29sb3I6IzAwMDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50ZXh0MXtcclxuXHRjb2xvcjojRkU5ODA1O1xyXG5cdGZvbnQtc2l6ZTogMjlweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5tYWlue1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweDtcclxuXHRtYXJnaW4tdG9wOiA3JTtcclxufVxyXG4ubGVmdCBpbWd7XHJcblx0Ym9yZGVyLXJhZGl1czo3cHg7XHJcbn1cclxuLmlubmVye1xyXG5cdHBhZGRpbmc6MiUgMyU7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG4ucmlnaHR7XHJcblx0bWFyZ2luLWxlZnQ6IDUlO1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0bWFyZ2luLXRvcDoyJTtcclxufVxyXG4ucnRleHR7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGZvbnQtd2VpZ2h0OjYwMDtcclxufVxyXG4ucnRleHQxe1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDo2MDA7XHJcblx0bWFyZ2luLXRvcDogMiU7XHJcblx0Y29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLnJ0ZXh0MntcclxuXHRmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuLnJ0ZXh0M3tcclxuXHRmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLnJ0ZXh0NHtcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "4JRw":
    /*!*************************************************************!*\
      !*** ./src/app/agencyhomescreen/agencyhomescreen.module.ts ***!
      \*************************************************************/

    /*! exports provided: AgencyhomescreenPageModule */

    /***/
    function JRw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgencyhomescreenPageModule", function () {
        return AgencyhomescreenPageModule;
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


      var _agencyhomescreen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./agencyhomescreen-routing.module */
      "5l5s");
      /* harmony import */


      var _agencyhomescreen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./agencyhomescreen.page */
      "rdAD");

      var AgencyhomescreenPageModule = function AgencyhomescreenPageModule() {
        _classCallCheck(this, AgencyhomescreenPageModule);
      };

      AgencyhomescreenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _agencyhomescreen_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgencyhomescreenPageRoutingModule"]],
        declarations: [_agencyhomescreen_page__WEBPACK_IMPORTED_MODULE_6__["AgencyhomescreenPage"]]
      })], AgencyhomescreenPageModule);
      /***/
    },

    /***/
    "5l5s":
    /*!*********************************************************************!*\
      !*** ./src/app/agencyhomescreen/agencyhomescreen-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: AgencyhomescreenPageRoutingModule */

    /***/
    function l5s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgencyhomescreenPageRoutingModule", function () {
        return AgencyhomescreenPageRoutingModule;
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


      var _agencyhomescreen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./agencyhomescreen.page */
      "rdAD");

      var routes = [{
        path: '',
        component: _agencyhomescreen_page__WEBPACK_IMPORTED_MODULE_3__["AgencyhomescreenPage"]
      }];

      var AgencyhomescreenPageRoutingModule = function AgencyhomescreenPageRoutingModule() {
        _classCallCheck(this, AgencyhomescreenPageRoutingModule);
      };

      AgencyhomescreenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AgencyhomescreenPageRoutingModule);
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
    "KCJQ":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agencyhomescreen/agencyhomescreen.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KCJQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t\t  <ion-toolbar class=\"headBgGlobal\">\n\t\t    <ion-buttons slot=\"start\" style=\"margin-left: 2%;\">\n\t\t      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n\t\t  </ion-buttons>\n\t\t  <ion-buttons slot=\"end\" style=\"margin-right: 2%;\" (click)=\"goto()\">\n\n\t\t    <img src=\"{{agencyProfile}}\" class=\"pimg\">\n\t\t  </ion-buttons>\n\t\t</ion-toolbar>\n</ion-header> -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n   <ion-row>\n     <ion-col class=\"backbtn\" size=\"2\">\n       <div>\n         <ion-menu-button class=\"menuicon\"></ion-menu-button>\n       </div>\n     </ion-col>\n\n     <ion-col size=\"8\">\n     </ion-col>\n\n     <ion-col size=\"2\">\n       <div (click)=\"goto()\">\n         <img src=\"{{agencyProfile}}\" class=\"pimg\">\n         <!-- <img src=\"assets/imgs/clogo.png\" *ngIf=\"userType=='caregiver'\"> -->\n       </div>\n     </ion-col>\n   </ion-row>\n </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\n\t<div class=\"wrapper\">\n\t\t<div class=\"text\">Welcome</div>\n\t\t<div class=\"text1\">{{name}}</div>\n\t\t<div class=\"timer\" *ngIf=\"picture==false\">\n\t\t\t<!-- <img src=\"assets/imgs/timer.png\"> -->\n\t\t\t<img src=\"assets/imgs/logo.svg\">\n\t\t</div>\n\t\t<div *ngFor=\"let child of childsarray\">\n\t\t\t<div  *ngIf=\"child.status=='Active'\">\n\t\t\t\t<div class=\"main\">\n\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t\t<img src=\"{{child.profile}}\" width=\"140px\" height=\"125px\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t\t<div class=\"rtext\">{{child.childname}},<span style=\"font-weight:400;margin-left: 3%;\">{{child.age}} years</span></div>\n\t\t\t\t\t\t\t<div class=\"rtext1\">Timing</div>\n\t\t\t\t\t\t\t<div class=\"rtext2\">{{child.starttime}} - {{child.endtime}}</div>\n\t\t\t\t\t\t\t<div class=\"rtext3\">{{child.about}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<!-- <div class=\"main\">\n\t\t\t<div class=\"inner\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<img src=\"assets/imgs/boy.png\" width=\"140px\" height=\"125px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right\">\n\t\t\t\t\t<div class=\"rtext\">Emily,<span style=\"font-weight:400;margin-left: 3%;\">3 years</span></div>\n\t\t\t\t\t<div class=\"rtext1\">Timing</div>\n\t\t\t\t\t<div class=\"rtext2\">8:40 pm - 6:00 am</div>\n\t\t\t\t\t<div class=\"rtext3\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div> -->\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "rdAD":
    /*!***********************************************************!*\
      !*** ./src/app/agencyhomescreen/agencyhomescreen.page.ts ***!
      \***********************************************************/

    /*! exports provided: AgencyhomescreenPage */

    /***/
    function rdAD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgencyhomescreenPage", function () {
        return AgencyhomescreenPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_agencyhomescreen_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./agencyhomescreen.page.html */
      "KCJQ");
      /* harmony import */


      var _agencyhomescreen_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./agencyhomescreen.page.scss */
      "0Ph9");
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

      var AgencyhomescreenPage = /*#__PURE__*/function () {
        function AgencyhomescreenPage(navCtrl, loading, rest, platform, statusbar) {
          _classCallCheck(this, AgencyhomescreenPage);

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
          this.agencyProfile = 'assets/imgs/profilelogo.png';
          this.accountid = localStorage.getItem('accountTypeId');
          console.log('accountid:', this.accountid);
          this.user = JSON.parse(localStorage.getItem('user'));
          console.log('user details', this.user);
          this.name = this.user.first_name;
          console.log('first_name', this.name);
          this.userid = this.user.users_id;
          console.log('caaregiver id:', this.userid);
        }

        _createClass(AgencyhomescreenPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.platform.ready().then(function () {
              // let status bar overlay webview
              _this2.statusbar.overlaysWebView(true); // set status bar to white
              // this.statusbar.backgroundColorByHexString('#FFFFFF');


              _this2.statusbar.styleDefault();
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getprofile();
            this.showchild();
          }
        }, {
          key: "getprofile",
          value: function getprofile() {
            var _this3 = this;

            this.rest.sendRequest('get_profile_picture', {
              userId: this.userid
            }).subscribe(function (data) {
              console.log('profile get data:', data);

              if (data.data.profile_picture == null || data.data.profile_picture == '') {
                _this3.agencyProfile = _this3.agencyProfile;
              } else {
                _this3.agencyProfile = data.data.profile_picture;
              }
            });
          }
        }, {
          key: "showchild",
          value: function showchild() {
            var _this4 = this;

            this.childsarray = [];
            this.loading.loadershow();
            this.rest.sendRequest('caregiver_requests', {
              caregiverId: this.userid
            }).subscribe(function (data) {
              console.log('caregiver_requests', data);

              _this4.loading.hideLoader();

              if (data.status == 'success') {
                data.data.forEach(function (val) {
                  if (val.child_details.profile_picture == null || val.child_details.profile_picture == '') {
                    _this4.defaultProfile = 'assets/imgs/profilelogo.png';
                  } else {
                    _this4.defaultProfile = val.child_details.profile_picture;
                  }

                  var data = {
                    parentid: val.parent_id,
                    fname: val.parent_details.first_name,
                    lname: val.parent_details.last_name,
                    age: val.child_details.age,
                    profile: _this4.defaultProfile,
                    childid: val.child_id,
                    childname: val.child_details.child_name,
                    starttime: val.start_time,
                    endtime: val.end_time,
                    status: val.status,
                    about: val.child_details.additional_notes
                  };

                  if (val.status == 'Active') {
                    _this4.childsarray.push(data);

                    _this4.picture = true;
                  }
                });
                console.log('requestsarray:', _this4.childsarray);
              }

              if (data.status == 'error') {
                _this4.loading.hideLoader();

                console.log('signup request data:', data.status);
                _this4.error.status = true;
                _this4.error.message = data.message;
                setTimeout(function () {
                  _this4.error.status = false;
                  _this4.error.message = '';
                }, 3000);
                return;
              }
            });
          }
        }, {
          key: "goto",
          value: function goto() {
            this.navCtrl.navigateForward('/cgviewprofile1');
          }
        }]);

        return AgencyhomescreenPage;
      }();

      AgencyhomescreenPage.ctorParameters = function () {
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

      AgencyhomescreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-agencyhomescreen',
        template: _raw_loader_agencyhomescreen_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agencyhomescreen_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AgencyhomescreenPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=agencyhomescreen-agencyhomescreen-module-es5.js.map