(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboarding-onboarding-module"], {
    /***/
    "Illq":
    /*!*************************************************!*\
      !*** ./src/app/onboarding/onboarding.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function Illq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".wrapper {\n  width: 90%;\n  margin: 0% auto;\n}\n\n.logo {\n  margin-top: 25%;\n}\n\np {\n  font-size: 14px;\n  padding: 2% 8%;\n}\n\n.btndiv {\n  text-align: center;\n  margin-top: 25%;\n}\n\n.btn1 {\n  --background: transparent;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29uYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsVUFBQTtFQUNBLGVBQUE7QUFDRDs7QUFDQTtFQUNDLGVBQUE7QUFFRDs7QUFBQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0FBR0Q7O0FBREE7RUFDQyxrQkFBQTtFQUNBLGVBQUE7QUFJRDs7QUFGQTtFQUNDLHlCQUFBO0VBQ0csa0JBQUE7QUFLSiIsImZpbGUiOiJvbmJvYXJkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG5cdHdpZHRoOjkwJTtcclxuXHRtYXJnaW46IDAlIGF1dG87XHJcbn1cclxuLmxvZ297XHJcblx0bWFyZ2luLXRvcDogMjUlO1xyXG59XHJcbnB7XHJcblx0Zm9udC1zaXplOjE0cHg7XHJcblx0cGFkZGluZzogMiUgOCU7XHJcbn1cclxuLmJ0bmRpdntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLXRvcDogMjUlO1xyXG59XHJcbi5idG4xe1xyXG5cdC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "QKJs":
    /*!***********************************************!*\
      !*** ./src/app/onboarding/onboarding.page.ts ***!
      \***********************************************/

    /*! exports provided: OnboardingPage */

    /***/
    function QKJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingPage", function () {
        return OnboardingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_onboarding_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./onboarding.page.html */
      "bcPs");
      /* harmony import */


      var _onboarding_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./onboarding.page.scss */
      "Illq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");

      var OnboardingPage = /*#__PURE__*/function () {
        function OnboardingPage(navCtrl, menuCtrl, platform, statusbar) {
          _classCallCheck(this, OnboardingPage);

          this.navCtrl = navCtrl;
          this.menuCtrl = menuCtrl;
          this.platform = platform;
          this.statusbar = statusbar;
        }

        _createClass(OnboardingPage, [{
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
          key: "gotonext",
          value: function gotonext() {
            this.navCtrl.navigateForward('/onboarding1');
          }
        }]);

        return OnboardingPage;
      }();

      OnboardingPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
        }];
      };

      OnboardingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-onboarding',
        template: _raw_loader_onboarding_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_onboarding_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OnboardingPage);
      /***/
    },

    /***/
    "bcPs":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/onboarding.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function bcPs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>onboarding</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"assets/imgs/logo.svg\">\n\t\t</div>\n\t\t\n\t\t<p>UniqKidz is a special platform to help you cater to the needs of special children. Keep up with your special needs child's personality and interests to provide them with the best care! </p>\n\n\t\t<div class=\"btndiv\">\n\t\t\t<ion-button class=\"btn1\" (click)=\"gotonext()\">\n\t\t\t\t<img src=\"assets/imgs/icons/arrow.svg\" >\n\t\t\t</ion-button>\n\t\t</div>\n\t\t\n\t</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "eQKf":
    /*!*********************************************************!*\
      !*** ./src/app/onboarding/onboarding-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: OnboardingPageRoutingModule */

    /***/
    function eQKf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingPageRoutingModule", function () {
        return OnboardingPageRoutingModule;
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


      var _onboarding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./onboarding.page */
      "QKJs");

      var routes = [{
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingPage"]
      }];

      var OnboardingPageRoutingModule = function OnboardingPageRoutingModule() {
        _classCallCheck(this, OnboardingPageRoutingModule);
      };

      OnboardingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OnboardingPageRoutingModule);
      /***/
    },

    /***/
    "tSXo":
    /*!*************************************************!*\
      !*** ./src/app/onboarding/onboarding.module.ts ***!
      \*************************************************/

    /*! exports provided: OnboardingPageModule */

    /***/
    function tSXo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function () {
        return OnboardingPageModule;
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


      var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./onboarding-routing.module */
      "eQKf");
      /* harmony import */


      var _onboarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./onboarding.page */
      "QKJs");

      var OnboardingPageModule = function OnboardingPageModule() {
        _classCallCheck(this, OnboardingPageModule);
      };

      OnboardingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnboardingPageRoutingModule"]],
        declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingPage"]]
      })], OnboardingPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=onboarding-onboarding-module-es5.js.map