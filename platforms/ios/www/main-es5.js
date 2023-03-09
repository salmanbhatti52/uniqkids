(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/salmanahmad/Desktop/uniqkidz/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
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
      /*! ./loginwithuser.service */
      "tqas");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/rest.service */
      "tnAE");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF"); // import { SplashScreen } from '@ionic-native/splash-screen/ngx';


      var AppComponent = /*#__PURE__*/function () {
        // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        function AppComponent(navCtrl, menuCtrl, userService, oneSignal, router, platform, ngZone, rest, statusbar // private splashScreen: SplashScreen
        ) {
          _classCallCheck(this, AppComponent);

          this.navCtrl = navCtrl;
          this.menuCtrl = menuCtrl;
          this.userService = userService;
          this.oneSignal = oneSignal;
          this.router = router;
          this.platform = platform;
          this.ngZone = ngZone;
          this.rest = rest;
          this.statusbar = statusbar;
          this.sender_id = '620446083343';
          this.oneSignalAppId = '7c8eac8b-868e-461d-b8db-91604121255b';
          this.appPages = [// { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
            // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
            // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
            // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
            // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
            // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
            // { title: 'Onboardinscreen', url: '/onboarding', icon: 'mail' },
            // { title: 'HomeScreen', url: '/homescreen', icon: 'mail' },
            // { title: 'Child', url: '/child', img: '/assets/imgs/icons/child.png' },
            // { title: 'Caregiver', url: '/caregiver',img: '/assets/imgs/icons/caregiver.png' },
            // { title: 'Chat', url: '/chat',img: '/assets/imgs/icons/chat.png'},
            // { title: 'Payment', url: '/payment', img: '/assets/imgs/icons/payment.png' },
            // { title: 'Notifications', url: '/notification', img: '/assets/imgs/icons/notification.png' },
            // { title: 'Requests', url: '/requests', img: '/assets/imgs/icons/requests.png' },
            // { title: 'Registeras', url: '/registeras', icon: 'mail' },
            // { title: 'Signin', url: '/signin', icon: 'mail' },
            // { title: 'Signup', url: '/signup', icon: 'mail' },
            // { title: 'Earnings', url: '/earning', icon: 'mail' },
            // { title: 'CGPofile', url: '/cgprofile', icon: 'mail' },
            // { title: 'ParentPofile', url: '/parentprofile', icon: 'mail' },
            // { title: 'OTP', url: '/otp', icon: 'mail' },
            // { title: 'Resetpassword', url: '/resetpassword', icon: 'mail' },
            // { title: 'TermsandCondition', url: '/termsandcondition', img: '/assets/imgs/icons/term.png' },
            // { title: 'Medication', url: '/medicationtime', icon: 'mail' },
          ];
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.initializeApp();
            });
          }
        }, {
          key: "parentprofile",
          value: function parentprofile() {
            this.menuCtrl.toggle();
            this.navCtrl.navigateForward('homescreen');
          }
        }, {
          key: "cgprofile",
          value: function cgprofile(type) {
            this.menuCtrl.toggle();

            if (type == 'Professional' || type == 'Family') {
              this.navCtrl.navigateForward('cghomescreen');
            }

            if (type == 'Agency') {
              this.navCtrl.navigateForward('agencyhomescreen');
            }
          }
        }, {
          key: "menu",
          value: function menu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            // this.platform.ready().then(() => {
            //   setTimeout(() => {
            //     this.splashScreen.hide();
            //   }, 1000);
            // });
            // this.userType = this.userService.userType
            // console.log('userType in initializeApp',this.userService.userType);
            // if (this.userService.userType==="parent") {
            //   this.userService.appPages=[
            //     { title: 'Child', url: '/child', img: '/assets/imgs/icons/child.png' },
            //     { title: 'Caregiver', url: '/caregiver',img: '/assets/imgs/icons/caregiver.png' },
            //     { title: 'Chat', url: '/chat',img: '/assets/imgs/icons/chat.png'},
            //     { title: 'Payment', url: '/payment', img: '/assets/imgs/icons/payment.png' },
            //     { title: 'Notifications', url: '/notification', img: '/assets/imgs/icons/notification.png' },
            //     { title: 'Requests', url: '/requests', img: '/assets/imgs/icons/requests.png' },
            //     { title: 'TermsandCondition', url: '/termsandcondition', img: '/assets/imgs/icons/term.png' },
            //   ]
            // }if (this.userService.userType==="caregiver") {
            //   this.userService.appPages=[
            //     { title: 'Requests', url: '/requests1', img: '/assets/imgs/icons/requests.png' },
            //     { title: 'Chat', url: '/chat',img: '/assets/imgs/icons/chat.png'},
            //     { title: 'Earnings', url: '/earning', icon: 'mail' },
            //     { title: 'Notifications', url: '/notification', img: '/assets/imgs/icons/notification.png' },
            //     { title: 'TermsandCondition', url: '/termsandcondition', img: '/assets/imgs/icons/term.png' },
            //   ]
            // }
            // this.oneSignal.setLogLevel({ logLevel: 6, visualLevel: 2 });
            // this.oneSignal.startInit(this.oneSignalAppId, this.sender_id);
            // this.oneSignal.endInit();
            // this.oneSignal.getIds().then((identity) => {
            //   console.log('identity',identity.userId);
            //   this.identy = identity;
            //   // alert(JSON.stringify(this.identy));
            //   localStorage.setItem('deviceID', this.identy.userId);
            // });
            //  console.log('this.identy.userId',this.identy.userId);
            this.uid = localStorage.getItem('uid');
            console.log('userloggedid in app compoenent::', this.uid);
            this.accountTypeId = localStorage.getItem('accountTypeId');
            console.log('accountTypeId:', this.accountTypeId);

            if (this.uid) {
              if (this.accountTypeId == 1) {
                this.userService.setSideMenu('Parent');
                this.userService.userType = 'Parent';
                this.navCtrl.navigateRoot('homescreen');
                console.log('userlogged parent app component::');
              }

              if (this.accountTypeId == 2) {
                this.userService.setSideMenu('Professional');
                this.userService.userType = 'Professional';
                this.navCtrl.navigateRoot('cghomescreen');
              }

              if (this.accountTypeId == 3) {
                this.userService.setSideMenu('Family');
                this.userService.userType = 'Family';
                this.navCtrl.navigateRoot('cghomescreen');
              }

              if (this.accountTypeId == 4) {
                this.userService.setSideMenu('Agency');
                this.userService.userType = 'Agency';
                this.navCtrl.navigateRoot('agencyhomescreen');
              }
            } else {
              this.navCtrl.navigateRoot('onboarding');
            }

            this.pushNotification();
          }
        }, {
          key: "pushNotification",
          value: function pushNotification() {
            var _this2 = this;

            console.log('push notification in function.....');
            this.oneSignal.startInit(this.oneSignalAppId, this.sender_id);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe(function (data) {
              console.log('data load', data.payload);
            });
            this.oneSignal.handleNotificationOpened().subscribe(function (data) {
              console.log('data open notification', data);

              if (data.notification.payload.additionalData.type === 'requestsending') {
                _this2.ngZone.run(function () {
                  return _this2.router.navigate(['requests1']);
                });
              }

              if (data.notification.payload.additionalData.type === 'requestrejection') {
                // this.router.navigate(['requests']);
                _this2.ngZone.run(function () {
                  return _this2.router.navigate(['requests']);
                });
              }

              if (data.notification.payload.additionalData.type === 'requestacceptance') {
                // this.router.navigate(['requests']);
                _this2.ngZone.run(function () {
                  return _this2.router.navigate(['requests']);
                });
              }

              if (data.notification.payload.additionalData.type === 'paymentConfirmation') {
                // this.router.navigate(['earning']);
                _this2.ngZone.run(function () {
                  return _this2.router.navigate(['earning']);
                });
              }

              if (data.notification.payload.additionalData.type === 'messageNotification') {
                // this.router.navigate(['inbox']);
                _this2.ngZone.run(function () {
                  return _this2.router.navigate(['chat']);
                });
              }
            });
            this.oneSignal.endInit();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.menuCtrl.toggle(); // this.userService.userType = "";

            localStorage.removeItem('userType');
            localStorage.removeItem('uid');
            localStorage.removeItem('accountTypeId');
            this.navCtrl.navigateForward('registeras');
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _loginwithuser_service__WEBPACK_IMPORTED_MODULE_5__["LoginwithuserService"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_8__["RestService"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <!-- <ion-list id=\"inbox-list\"> -->\n         <!--  <ion-list-header>Inbox</ion-list-header>\n          <ion-note>hi@ionicframework.com</ion-note> -->\n          \n           \n          <div *ngIf=\"userService.userType=='Parent'\">\n            <div class=\"profilePhoto-div\" style=\"margin-bottom: 10%;display: flex;\">\n              <div class=\"img-div\" (click)=\"parentprofile()\">\n                <img src=\"./assets/imgs/applogo.svg\" />\n                <!-- <img *ngIf=\"photoUrl=='' || photoUrl==undefined \" src=\"./assets/imgs/user.png\" /> -->\n                <!-- <div class=\"namediv\">\n                  John Doe\n                </div> -->\n              </div>\n              <div class=\"icondiv\" (click)=\"menu()\">\n                 <img src=\"./assets/imgs/icons/menuicon.png\" />\n              </div>\n              \n            </div>\n          </div>\n          <div *ngIf=\"userService.userType=='Professional'\">\n            <div class=\"profilePhoto-div\" style=\"margin-bottom: 10%;display: flex;\">\n              <div class=\"img-div\" (click)=\"cgprofile('Professional')\">\n                <img src=\"./assets/imgs/applogo.svg\" />\n                <!-- <img *ngIf=\"photoUrl=='' || photoUrl==undefined \" src=\"./assets/imgs/user.png\" /> -->\n                <!-- <div class=\"namediv\">\n                  Nancy Daniel\n                </div> -->\n              </div>\n              <div class=\"icondiv\" (click)=\"menu()\">\n                 <img src=\"./assets/imgs/icons/menuicon.png\" />\n              </div>\n              \n            </div>\n          </div>\n          <div *ngIf=\"userService.userType=='Agency'\">\n            <div class=\"profilePhoto-div\" style=\"margin-bottom: 10%;display: flex;\">\n              <div class=\"img-div\" (click)=\"cgprofile('Agency')\">\n                <img src=\"./assets/imgs/applogo.svg\" />\n                <!-- <img *ngIf=\"photoUrl=='' || photoUrl==undefined \" src=\"./assets/imgs/user.png\" /> -->\n                <!-- <div class=\"namediv\">\n                  Nancy Daniel\n                </div> -->\n              </div>\n              <div class=\"icondiv\" (click)=\"menu()\">\n                 <img src=\"./assets/imgs/icons/menuicon.png\" />\n              </div>\n              \n            </div>\n          </div>\n          \n          <div *ngIf=\"userService.userType=='Family'\">\n            <div class=\"profilePhoto-div\" style=\"margin-bottom: 10%;display: flex;\">\n              <div class=\"img-div\" (click)=\"cgprofile('Family')\">\n                <img src=\"./assets/imgs/applogo.svg\" />\n                <!-- <img *ngIf=\"photoUrl=='' || photoUrl==undefined \" src=\"./assets/imgs/user.png\" /> -->\n                <!-- <div class=\"namediv\">\n                  Nancy Daniel\n                </div> -->\n              </div>\n              <div class=\"icondiv\" (click)=\"menu()\">\n                 <img src=\"./assets/imgs/icons/menuicon.png\" />\n              </div>\n              \n            </div>\n          </div>\n          \n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of userService.appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n              <!-- <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon> -->\n              <img class=\"sidemenu-icons\" src=\"{{p.img}}\">\n              <ion-label class=\"title\">{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n       <!--  </ion-list> -->\n\n        <!-- <ion-list id=\"labels-list\">\n          <ion-list-header>Labels</ion-list-header>\n\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n            <ion-label>{{ label }}</ion-label>\n          </ion-item>\n        </ion-list> -->\n      </ion-content>\n      <div class=\"bottom\" (click)=\"logout()\">\n        <img src=\"/assets/imgs/icons/logout.png\"><span class=\"stext\">logout</span>\n      </div>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/stripe/ngx */
      "tF4M");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng2-search-filter */
      "cZdB");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "tAfe");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF"); // import { WebView } from '@ionic-native/ionic-webview/ngx';
      // import { SplashScreen } from '@ionic-native/splash-screen/ngx';
      // import { File } from '@ionic-native/file/ngx';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"]],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], // WebView,
        _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_9__["Stripe"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__["OneSignal"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], // SplashScreen,
        // File,
        // WebView,
        _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__["ImagePicker"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__["StatusBar"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "tnAE":
    /*!******************************************!*\
      !*** ./src/app/services/rest.service.ts ***!
      \******************************************/

    /*! exports provided: RestService */

    /***/
    function tnAE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestService", function () {
        return RestService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var RestService = /*#__PURE__*/function () {
        function RestService(http) {
          _classCallCheck(this, RestService);

          this.http = http;
          this.heroko = 'https://cors-anywhere.herokuapp.com/'; // baseURL:any='https://dev.eigix.com/uniqkidzs/api';

          this.baseURL = 'https://admin.uniqkidzapp.com/api';
          this.id = 'post';
        }

        _createClass(RestService, [{
          key: "sendRequest",
          value: function sendRequest(action, data) {
            return this.http.post("".concat(this.baseURL, "/").concat(action), JSON.stringify(data), {// headers: header,
            });
            return this.http.post("".concat(this.baseURL, "/").concat(action), JSON.stringify(data));
          }
        }, {
          key: "getRequest",
          value: function getRequest(action) {
            return this.http.get("".concat(this.baseURL, "/").concat(action));
          }
        }, {
          key: "formatAMPM",
          value: function formatAMPM(date, am) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var strTime;
            var ampm = hours >= 12 ? "pm" : "am";
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'

            minutes = minutes < 10 ? "0" + minutes : minutes;

            if (am == false) {
              strTime = hours + ":" + minutes;
            } else {
              strTime = hours + ":" + minutes + " " + ampm;
            }

            return strTime;
          }
        }]);

        return RestService;
      }();

      RestService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      RestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RestService);
      /***/
    },

    /***/
    "tqas":
    /*!******************************************!*\
      !*** ./src/app/loginwithuser.service.ts ***!
      \******************************************/

    /*! exports provided: LoginwithuserService */

    /***/
    function tqas(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginwithuserService", function () {
        return LoginwithuserService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoginwithuserService = /*#__PURE__*/function () {
        function LoginwithuserService() {
          _classCallCheck(this, LoginwithuserService);

          this.appPages = [];
          console.log('medication');
        }

        _createClass(LoginwithuserService, [{
          key: "setSideMenu",
          value: function setSideMenu(type) {
            if (type === "Parent") {
              this.userType = "Parent";
              this.appPages = [{
                title: 'Profile',
                url: '/parentprofileview',
                img: '/assets/imgs/icons/user.svg'
              }, {
                title: 'Child',
                url: '/child',
                img: '/assets/imgs/icons/child.svg'
              }, {
                title: 'Caregiver',
                url: '/caregiver',
                img: '/assets/imgs/icons/caregiver.svg'
              }, {
                title: 'Chat',
                url: '/chat',
                img: '/assets/imgs/icons/chat.svg'
              }, {
                title: 'Payment',
                url: '/paymentto',
                img: '/assets/imgs/icons/payment.svg'
              }, {
                title: 'Notifications',
                url: '/notification',
                img: '/assets/imgs/icons/notification.svg'
              }, {
                title: 'Requests',
                url: '/requests',
                img: '/assets/imgs/icons/requests.svg'
              }, {
                title: 'Terms and Condition',
                url: '/termsandcondition',
                img: '/assets/imgs/icons/term.svg'
              }];
            }

            if (type === "Professional") {
              this.userType = "Professional";
              this.appPages = [{
                title: 'Profile',
                url: '/cgviewprofile',
                img: '/assets/imgs/icons/user.svg'
              }, {
                title: 'Requests',
                url: '/requests1',
                img: '/assets/imgs/icons/requests.svg'
              }, {
                title: 'Chat',
                url: '/chat',
                img: '/assets/imgs/icons/chat.svg'
              }, {
                title: 'Earnings',
                url: '/earning',
                img: '/assets/imgs/icons/money.svg'
              }, {
                title: 'Notifications',
                url: '/notification',
                img: '/assets/imgs/icons/notification.svg'
              }, {
                title: 'Terms and Condition',
                url: '/termsandcondition',
                img: '/assets/imgs/icons/term.svg'
              }];
            }

            if (type === "Family") {
              this.userType = "Family";
              this.appPages = [{
                title: 'Profile',
                url: '/cgviewprofile',
                img: '/assets/imgs/icons/user.svg'
              }, {
                title: 'Requests',
                url: '/requests1',
                img: '/assets/imgs/icons/requests.svg'
              }, {
                title: 'Chat',
                url: '/chat',
                img: '/assets/imgs/icons/chat.svg'
              }, {
                title: 'Notifications',
                url: '/notification',
                img: '/assets/imgs/icons/notification.svg'
              }, {
                title: 'Terms and Condition',
                url: '/termsandcondition',
                img: '/assets/imgs/icons/term.svg'
              }];
            }

            if (type === "Agency") {
              this.userType = "Agency";
              this.appPages = [{
                title: 'Profile',
                url: '/cgviewprofile1',
                img: '/assets/imgs/icons/profile.svg'
              }, {
                title: 'Requests',
                url: '/requests1',
                img: '/assets/imgs/icons/requests.svg'
              }, {
                title: 'Chat',
                url: '/chat',
                img: '/assets/imgs/icons/chat.svg'
              }, {
                title: 'Earnings',
                url: '/earning',
                img: '/assets/imgs/icons/money.svg'
              }, {
                title: 'Notifications',
                url: '/notification',
                img: '/assets/imgs/icons/notification.svg'
              }, {
                title: 'Terms and Condition',
                url: '/termsandcondition',
                img: '/assets/imgs/icons/term.svg'
              }];
            }
          }
        }]);

        return LoginwithuserService;
      }();

      LoginwithuserService.ctorParameters = function () {
        return [];
      };

      LoginwithuserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoginwithuserService);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        redirectTo: 'onboarding',
        pathMatch: 'full'
      }, {
        path: 'folder/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | folder-folder-module */
          "folder-folder-module").then(__webpack_require__.bind(null,
          /*! ./folder/folder.module */
          "yIOV")).then(function (m) {
            return m.FolderPageModule;
          });
        }
      }, {
        path: 'registeras',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | registeras-registeras-module */
          "registeras-registeras-module").then(__webpack_require__.bind(null,
          /*! ./registeras/registeras.module */
          "wPbW")).then(function (m) {
            return m.RegisterasPageModule;
          });
        }
      }, {
        path: 'signin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | signin-signin-module */
          "signin-signin-module").then(__webpack_require__.bind(null,
          /*! ./signin/signin.module */
          "0m0A")).then(function (m) {
            return m.SigninPageModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | signup-signup-module */
          [__webpack_require__.e("common"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null,
          /*! ./signup/signup.module */
          "T9iC")).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: 'forgotpassword',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | forgotpassword-forgotpassword-module */
          "forgotpassword-forgotpassword-module").then(__webpack_require__.bind(null,
          /*! ./forgotpassword/forgotpassword.module */
          "IoKB")).then(function (m) {
            return m.ForgotpasswordPageModule;
          });
        }
      }, {
        path: 'cgprofile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cgprofile-cgprofile-module */
          "cgprofile-cgprofile-module").then(__webpack_require__.bind(null,
          /*! ./cgprofile/cgprofile.module */
          "Fjb3")).then(function (m) {
            return m.CgprofilePageModule;
          });
        }
      }, {
        path: 'parentprofile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | parentprofile-parentprofile-module */
          "parentprofile-parentprofile-module").then(__webpack_require__.bind(null,
          /*! ./parentprofile/parentprofile.module */
          "+wJU")).then(function (m) {
            return m.ParentprofilePageModule;
          });
        }
      }, {
        path: 'homescreen',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | homescreen-homescreen-module */
          [__webpack_require__.e("default~earning-earning-module~homescreen-homescreen-module~inbox-inbox-module~notification-notifica~ac9d4235"), __webpack_require__.e("common"), __webpack_require__.e("homescreen-homescreen-module")]).then(__webpack_require__.bind(null,
          /*! ./homescreen/homescreen.module */
          "lPtD")).then(function (m) {
            return m.HomescreenPageModule;
          });
        }
      }, {
        path: 'otp',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | otp-otp-module */
          "otp-otp-module").then(__webpack_require__.bind(null,
          /*! ./otp/otp.module */
          "ikiF")).then(function (m) {
            return m.OtpPageModule;
          });
        }
      }, {
        path: 'resetpassword',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | resetpassword-resetpassword-module */
          "resetpassword-resetpassword-module").then(__webpack_require__.bind(null,
          /*! ./resetpassword/resetpassword.module */
          "yIft")).then(function (m) {
            return m.ResetpasswordPageModule;
          });
        }
      }, {
        path: 'termsandcondition',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | termsandcondition-termsandcondition-module */
          [__webpack_require__.e("common"), __webpack_require__.e("termsandcondition-termsandcondition-module")]).then(__webpack_require__.bind(null,
          /*! ./termsandcondition/termsandcondition.module */
          "mcd0")).then(function (m) {
            return m.TermsandconditionPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | profile-profile-module */
          [__webpack_require__.e("default~earning-earning-module~homescreen-homescreen-module~inbox-inbox-module~notification-notifica~ac9d4235"), __webpack_require__.e("default~profile-profile-module~requestpopup-requestpopup-module"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "cRhG")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'onboarding',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | onboarding-onboarding-module */
          "onboarding-onboarding-module").then(__webpack_require__.bind(null,
          /*! ./onboarding/onboarding.module */
          "tSXo")).then(function (m) {
            return m.OnboardingPageModule;
          });
        }
      }, {
        path: 'child',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | child-child-module */
          "child-child-module").then(__webpack_require__.bind(null,
          /*! ./child/child.module */
          "utsK")).then(function (m) {
            return m.ChildPageModule;
          });
        }
      }, {
        path: 'childprofile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | childprofile-childprofile-module */
          [__webpack_require__.e("common"), __webpack_require__.e("childprofile-childprofile-module")]).then(__webpack_require__.bind(null,
          /*! ./childprofile/childprofile.module */
          "BF4i")).then(function (m) {
            return m.ChildprofilePageModule;
          });
        }
      }, {
        path: 'addchild',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | addchild-addchild-module */
          [__webpack_require__.e("common"), __webpack_require__.e("addchild-addchild-module")]).then(__webpack_require__.bind(null,
          /*! ./addchild/addchild.module */
          "LGv1")).then(function (m) {
            return m.AddchildPageModule;
          });
        }
      }, {
        path: 'medicationtime',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | medicationtime-medicationtime-module */
          [__webpack_require__.e("common"), __webpack_require__.e("medicationtime-medicationtime-module")]).then(__webpack_require__.bind(null,
          /*! ./medicationtime/medicationtime.module */
          "9oeA")).then(function (m) {
            return m.MedicationtimePageModule;
          });
        }
      }, {
        path: 'caregiver',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | caregiver-caregiver-module */
          "caregiver-caregiver-module").then(__webpack_require__.bind(null,
          /*! ./caregiver/caregiver.module */
          "khTF")).then(function (m) {
            return m.CaregiverPageModule;
          });
        }
      }, {
        path: 'chat',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | chat-chat-module */
          "chat-chat-module").then(__webpack_require__.bind(null,
          /*! ./chat/chat.module */
          "2yxt")).then(function (m) {
            return m.ChatPageModule;
          });
        }
      }, {
        path: 'inbox',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | inbox-inbox-module */
          [__webpack_require__.e("default~earning-earning-module~homescreen-homescreen-module~inbox-inbox-module~notification-notifica~ac9d4235"), __webpack_require__.e("inbox-inbox-module")]).then(__webpack_require__.bind(null,
          /*! ./inbox/inbox.module */
          "5gel")).then(function (m) {
            return m.InboxPageModule;
          });
        }
      }, {
        path: 'payment',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | payment-payment-module */
          [__webpack_require__.e("default~earning-earning-module~homescreen-homescreen-module~inbox-inbox-module~notification-notifica~ac9d4235"), __webpack_require__.e("payment-payment-module")]).then(__webpack_require__.bind(null,
          /*! ./payment/payment.module */
          "NSaA")).then(function (m) {
            return m.PaymentPageModule;
          });
        }
      }, {
        path: 'paymentto',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | paymentto-paymentto-module */
          [__webpack_require__.e("default~earning-earning-module~homescreen-homescreen-module~inbox-inbox-module~notification-notifica~ac9d4235"), __webpack_require__.e("common"), __webpack_require__.e("paymentto-paymentto-module")]).then(__webpack_require__.bind(null,
          /*! ./paymentto/paymentto.module */
          "8gnd")).then(function (m) {
            return m.PaymenttoPageModule;
          });
        }
      }, {
        path: 'paymenthistory',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | paymenthistory-paymenthistory-module */
          "paymenthistory-paymenthistory-module").then(__webpack_require__.bind(null,
          /*! ./paymenthistory/paymenthistory.module */
          "EDAp")).then(function (m) {
            return m.PaymenthistoryPageModule;
          });
        }
      }, {
        path: 'notification',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | notification-notification-module */
          [__webpack_require__.e("default~earning-earning-module~homescreen-homescreen-module~inbox-inbox-module~notification-notifica~ac9d4235"), __webpack_require__.e("notification-notification-module")]).then(__webpack_require__.bind(null,
          /*! ./notification/notification.module */
          "TLzw")).then(function (m) {
            return m.NotificationPageModule;
          });
        }
      }, {
        path: 'requests',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | requests-requests-module */
          "requests-requests-module").then(__webpack_require__.bind(null,
          /*! ./requests/requests.module */
          "q2Y4")).then(function (m) {
            return m.RequestsPageModule;
          });
        }
      }, {
        path: 'earning',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | earning-earning-module */
          [__webpack_require__.e("default~earning-earning-module~homescreen-homescreen-module~inbox-inbox-module~notification-notifica~ac9d4235"), __webpack_require__.e("earning-earning-module")]).then(__webpack_require__.bind(null,
          /*! ./earning/earning.module */
          "3OxA")).then(function (m) {
            return m.EarningPageModule;
          });
        }
      }, {
        path: 'paymenthistory1',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | paymenthistory1-paymenthistory1-module */
          "paymenthistory1-paymenthistory1-module").then(__webpack_require__.bind(null,
          /*! ./paymenthistory1/paymenthistory1.module */
          "+vEZ")).then(function (m) {
            return m.Paymenthistory1PageModule;
          });
        }
      }, {
        path: 'parentprofileview',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | parentprofileview-parentprofileview-module */
          "parentprofileview-parentprofileview-module").then(__webpack_require__.bind(null,
          /*! ./parentprofileview/parentprofileview.module */
          "82yy")).then(function (m) {
            return m.ParentprofileviewPageModule;
          });
        }
      }, {
        path: 'childprofile1',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | childprofile1-childprofile1-module */
          "childprofile1-childprofile1-module").then(__webpack_require__.bind(null,
          /*! ./childprofile1/childprofile1.module */
          "hPhd")).then(function (m) {
            return m.Childprofile1PageModule;
          });
        }
      }, {
        path: 'requests1',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | requests1-requests1-module */
          "requests1-requests1-module").then(__webpack_require__.bind(null,
          /*! ./requests1/requests1.module */
          "OCuJ")).then(function (m) {
            return m.Requests1PageModule;
          });
        }
      }, {
        path: 'cgviewprofile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cgviewprofile-cgviewprofile-module */
          "cgviewprofile-cgviewprofile-module").then(__webpack_require__.bind(null,
          /*! ./cgviewprofile/cgviewprofile.module */
          "1bxe")).then(function (m) {
            return m.CgviewprofilePageModule;
          });
        }
      }, {
        path: 'requestpopup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | requestpopup-requestpopup-module */
          [__webpack_require__.e("default~earning-earning-module~homescreen-homescreen-module~inbox-inbox-module~notification-notifica~ac9d4235"), __webpack_require__.e("default~profile-profile-module~requestpopup-requestpopup-module"), __webpack_require__.e("requestpopup-requestpopup-module")]).then(__webpack_require__.bind(null,
          /*! ./requestpopup/requestpopup.module */
          "6Kx3")).then(function (m) {
            return m.RequestpopupPageModule;
          });
        }
      }, {
        path: 'eatingtime',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | eatingtime-eatingtime-module */
          [__webpack_require__.e("common"), __webpack_require__.e("eatingtime-eatingtime-module")]).then(__webpack_require__.bind(null,
          /*! ./eatingtime/eatingtime.module */
          "mhrQ")).then(function (m) {
            return m.EatingtimePageModule;
          });
        }
      }, {
        path: 'snacktime',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | snacktime-snacktime-module */
          [__webpack_require__.e("common"), __webpack_require__.e("snacktime-snacktime-module")]).then(__webpack_require__.bind(null,
          /*! ./snacktime/snacktime.module */
          "pni9")).then(function (m) {
            return m.SnacktimePageModule;
          });
        }
      }, {
        path: 'likes',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | likes-likes-module */
          [__webpack_require__.e("common"), __webpack_require__.e("likes-likes-module")]).then(__webpack_require__.bind(null,
          /*! ./likes/likes.module */
          "AS/b")).then(function (m) {
            return m.LikesPageModule;
          });
        }
      }, {
        path: 'dislikes',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dislikes-dislikes-module */
          [__webpack_require__.e("common"), __webpack_require__.e("dislikes-dislikes-module")]).then(__webpack_require__.bind(null,
          /*! ./dislikes/dislikes.module */
          "gRpR")).then(function (m) {
            return m.DislikesPageModule;
          });
        }
      }, {
        path: 'favoriteactivities',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | favoriteactivities-favoriteactivities-module */
          [__webpack_require__.e("common"), __webpack_require__.e("favoriteactivities-favoriteactivities-module")]).then(__webpack_require__.bind(null,
          /*! ./favoriteactivities/favoriteactivities.module */
          "vwF2")).then(function (m) {
            return m.FavoriteactivitiesPageModule;
          });
        }
      }, {
        path: 'cghomescreen',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cghomescreen-cghomescreen-module */
          "cghomescreen-cghomescreen-module").then(__webpack_require__.bind(null,
          /*! ./cghomescreen/cghomescreen.module */
          "5jCD")).then(function (m) {
            return m.CghomescreenPageModule;
          });
        }
      }, {
        path: 'cgprofile1',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cgprofile1-cgprofile1-module */
          "cgprofile1-cgprofile1-module").then(__webpack_require__.bind(null,
          /*! ./cgprofile1/cgprofile1.module */
          "FhKm")).then(function (m) {
            return m.Cgprofile1PageModule;
          });
        }
      }, {
        path: 'cgviewprofile1',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cgviewprofile1-cgviewprofile1-module */
          "cgviewprofile1-cgviewprofile1-module").then(__webpack_require__.bind(null,
          /*! ./cgviewprofile1/cgviewprofile1.module */
          "3fgg")).then(function (m) {
            return m.Cgviewprofile1PageModule;
          });
        }
      }, {
        path: 'profile1',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile1-profile1-module */
          "profile1-profile1-module").then(__webpack_require__.bind(null,
          /*! ./profile1/profile1.module */
          "30IB")).then(function (m) {
            return m.Profile1PageModule;
          });
        }
      }, {
        path: 'agencyhomescreen',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | agencyhomescreen-agencyhomescreen-module */
          "agencyhomescreen-agencyhomescreen-module").then(__webpack_require__.bind(null,
          /*! ./agencyhomescreen/agencyhomescreen.module */
          "4JRw")).then(function (m) {
            return m.AgencyhomescreenPageModule;
          });
        }
      }, {
        path: 'cgsignup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | cgsignup-cgsignup-module */
          [__webpack_require__.e("common"), __webpack_require__.e("cgsignup-cgsignup-module")]).then(__webpack_require__.bind(null,
          /*! ./cgsignup/cgsignup.module */
          "YcQ3")).then(function (m) {
            return m.CgsignupPageModule;
          });
        }
      }, {
        path: 'editchild',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | editchild-editchild-module */
          [__webpack_require__.e("common"), __webpack_require__.e("editchild-editchild-module")]).then(__webpack_require__.bind(null,
          /*! ./editchild/editchild.module */
          "+I5a")).then(function (m) {
            return m.EditchildPageModule;
          });
        }
      }, {
        path: 'editmedication',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | editmedication-editmedication-module */
          [__webpack_require__.e("common"), __webpack_require__.e("editmedication-editmedication-module")]).then(__webpack_require__.bind(null,
          /*! ./editmedication/editmedication.module */
          "KWN/")).then(function (m) {
            return m.EditmedicationPageModule;
          });
        }
      }, {
        path: 'editeating',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | editeating-editeating-module */
          [__webpack_require__.e("common"), __webpack_require__.e("editeating-editeating-module")]).then(__webpack_require__.bind(null,
          /*! ./editeating/editeating.module */
          "x/RH")).then(function (m) {
            return m.EditeatingPageModule;
          });
        }
      }, {
        path: 'editsnack',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | editsnack-editsnack-module */
          [__webpack_require__.e("common"), __webpack_require__.e("editsnack-editsnack-module")]).then(__webpack_require__.bind(null,
          /*! ./editsnack/editsnack.module */
          "J22e")).then(function (m) {
            return m.EditsnackPageModule;
          });
        }
      }, {
        path: 'editlikes',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | editlikes-editlikes-module */
          [__webpack_require__.e("common"), __webpack_require__.e("editlikes-editlikes-module")]).then(__webpack_require__.bind(null,
          /*! ./editlikes/editlikes.module */
          "6y4q")).then(function (m) {
            return m.EditlikesPageModule;
          });
        }
      }, {
        path: 'editdislikes',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | editdislikes-editdislikes-module */
          [__webpack_require__.e("common"), __webpack_require__.e("editdislikes-editdislikes-module")]).then(__webpack_require__.bind(null,
          /*! ./editdislikes/editdislikes.module */
          "EnM8")).then(function (m) {
            return m.EditdislikesPageModule;
          });
        }
      }, {
        path: 'editfavorite',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | editfavorite-editfavorite-module */
          [__webpack_require__.e("common"), __webpack_require__.e("editfavorite-editfavorite-module")]).then(__webpack_require__.bind(null,
          /*! ./editfavorite/editfavorite.module */
          "WzWJ")).then(function (m) {
            return m.EditfavoritePageModule;
          });
        }
      }, {
        path: 'paymentmessage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | paymentmessage-paymentmessage-module */
          [__webpack_require__.e("common"), __webpack_require__.e("paymentmessage-paymentmessage-module")]).then(__webpack_require__.bind(null,
          /*! ./paymentmessage/paymentmessage.module */
          "Zht2")).then(function (m) {
            return m.PaymentmessagePageModule;
          });
        }
      }, {
        path: 'paymentdetail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | paymentdetail-paymentdetail-module */
          "paymentdetail-paymentdetail-module").then(__webpack_require__.bind(null,
          /*! ./paymentdetail/paymentdetail.module */
          "B+1X")).then(function (m) {
            return m.PaymentdetailPageModule;
          });
        }
      }, {
        path: 'onboarding1',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | onboarding1-onboarding1-module */
          "onboarding1-onboarding1-module").then(__webpack_require__.bind(null,
          /*! ./onboarding1/onboarding1.module */
          "ncPS")).then(function (m) {
            return m.Onboarding1PageModule;
          });
        }
      }, {
        path: 'onboarding2',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | onboarding2-onboarding2-module */
          "onboarding2-onboarding2-module").then(__webpack_require__.bind(null,
          /*! ./onboarding2/onboarding2.module */
          "e5pD")).then(function (m) {
            return m.Onboarding2PageModule;
          });
        }
      }, {
        path: 'cgprofile2',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cgprofile2-cgprofile2-module */
          "cgprofile2-cgprofile2-module").then(__webpack_require__.bind(null,
          /*! ./cgprofile2/cgprofile2.module */
          "bNhQ")).then(function (m) {
            return m.Cgprofile2PageModule;
          });
        }
      }, {
        path: 'editcgprofile2',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | editcgprofile2-editcgprofile2-module */
          "editcgprofile2-editcgprofile2-module").then(__webpack_require__.bind(null,
          /*! ./editcgprofile2/editcgprofile2.module */
          "twNt")).then(function (m) {
            return m.Editcgprofile2PageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.profilePhoto-div {\n  display: flex;\n  margin-bottom: 10%;\n  margin-left: 30%;\n  margin-top: 10%;\n}\n\n.icondiv {\n  margin-left: 32%;\n  margin-top: 10%;\n}\n\n.img-div {\n  text-align: center;\n  margin-top: 15%;\n}\n\n.img-div img {\n  width: 85px;\n  height: 86px;\n  text-align: center;\n}\n\n.namediv {\n  text-align: center;\n  font-size: 18px;\n  text-transform: capitalize;\n  margin: 10px auto 5%;\n  color: #000;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.sidemenu-icons {\n  width: 8%;\n  margin-right: 12%;\n  margin-left: 8%;\n  color: #000;\n}\n\n.title {\n  color: #000000;\n  font-size: 18px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.bottom {\n  text-align: right;\n  margin-right: 15%;\n  padding-bottom: 12%;\n}\n\n.stext {\n  color: #FE9805;\n  font-weight: 600;\n  font-size: 14px;\n  padding-left: 3%;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkY7O0FBUUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFMRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBSEY7O0FBS0E7RUFDRSxXQUFBO0VBQ0UsWUFBQTtFQUNGLGtCQUFBO0FBRkY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0FBREY7O0FBR0E7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUNBO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUQ7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtBQUdGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cblxuLnByb2ZpbGVQaG90by1kaXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuLmljb25kaXZ7XG4gIG1hcmdpbi1sZWZ0OiAzMiU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cbi5pbWctZGl2e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1JTtcbn1cbi5pbWctZGl2IGltZ3tcbiAgd2lkdGg6IDg1cHg7XG4gICAgaGVpZ2h0OiA4NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubmFtZWRpdntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW46IDEwcHggYXV0byA1JTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cbi5zaWRlbWVudS1pY29uc3tcbiAgd2lkdGg6IDglO1xuICBtYXJnaW4tcmlnaHQ6IDEyJTtcbiAgbWFyZ2luLWxlZnQ6IDglO1xuICBjb2xvcjojMDAwO1xufVxuLnRpdGxle1xuICBjb2xvcjojMDAwMDAwO1xuICBmb250LXNpemU6MThweDtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuLmJvdHRvbXtcbiB0ZXh0LWFsaWduOiByaWdodDtcbiBtYXJnaW4tcmlnaHQ6IDE1JTtcbiBwYWRkaW5nLWJvdHRvbTogMTIlO1xufVxuLnN0ZXh0e1xuICBjb2xvcjojRkU5ODA1O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6MTRweDtcbiAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufSJdfQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map