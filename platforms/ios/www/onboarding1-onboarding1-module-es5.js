(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboarding1-onboarding1-module"], {
    /***/
    "LYhr":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding1/onboarding1.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function LYhr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>onboarding1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content> -->\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"assets/imgs/logo1.svg\">\n\t\t</div>\n\t\t\n\t\t<!-- <p>UniqKidz is a special platform to help you cater to the needs of special children. Keep up with your special needs child's personality and interests to provide them with the best care!</p> -->\n\n\t\t<div class=\"btndiv\">\n\t\t\t<ion-button class=\"btn1\" (click)=\"gotonext()\">\n\t\t\t\t<img src=\"assets/imgs/icons/arrow.svg\" >\n\t\t\t</ion-button>\n\t\t</div>\n\t\t\n\t</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "WeK9":
    /*!***********************************************************!*\
      !*** ./src/app/onboarding1/onboarding1-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: Onboarding1PageRoutingModule */

    /***/
    function WeK9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Onboarding1PageRoutingModule", function () {
        return Onboarding1PageRoutingModule;
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


      var _onboarding1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./onboarding1.page */
      "eNzX");

      var routes = [{
        path: '',
        component: _onboarding1_page__WEBPACK_IMPORTED_MODULE_3__["Onboarding1Page"]
      }];

      var Onboarding1PageRoutingModule = function Onboarding1PageRoutingModule() {
        _classCallCheck(this, Onboarding1PageRoutingModule);
      };

      Onboarding1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Onboarding1PageRoutingModule);
      /***/
    },

    /***/
    "axk3":
    /*!***************************************************!*\
      !*** ./src/app/onboarding1/onboarding1.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function axk3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".wrapper {\n  width: 90%;\n  margin: 0% auto;\n}\n\n.logo {\n  margin-top: 25%;\n}\n\np {\n  font-size: 14px;\n  padding: 2% 8%;\n}\n\n.btndiv {\n  text-align: center;\n  margin-top: 25%;\n}\n\n.btn1 {\n  --background: transparent;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29uYm9hcmRpbmcxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxlQUFBO0FBRUQ7O0FBQUE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtBQUdEOztBQURBO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0FBSUQ7O0FBRkE7RUFDQyx5QkFBQTtFQUNHLGtCQUFBO0FBS0oiLCJmaWxlIjoib25ib2FyZGluZzEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcblx0d2lkdGg6OTAlO1xyXG5cdG1hcmdpbjogMCUgYXV0bztcclxufVxyXG4ubG9nb3tcclxuXHRtYXJnaW4tdG9wOiAyNSU7XHJcbn1cclxucHtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRwYWRkaW5nOiAyJSA4JTtcclxufVxyXG4uYnRuZGl2e1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW4tdG9wOiAyNSU7XHJcbn1cclxuLmJ0bjF7XHJcblx0LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "eNzX":
    /*!*************************************************!*\
      !*** ./src/app/onboarding1/onboarding1.page.ts ***!
      \*************************************************/

    /*! exports provided: Onboarding1Page */

    /***/
    function eNzX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Onboarding1Page", function () {
        return Onboarding1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_onboarding1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./onboarding1.page.html */
      "LYhr");
      /* harmony import */


      var _onboarding1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./onboarding1.page.scss */
      "axk3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var Onboarding1Page = /*#__PURE__*/function () {
        function Onboarding1Page(navCtrl, menuCtrl) {
          _classCallCheck(this, Onboarding1Page);

          this.navCtrl = navCtrl;
          this.menuCtrl = menuCtrl;
        }

        _createClass(Onboarding1Page, [{
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
          key: "gotonext",
          value: function gotonext() {
            this.navCtrl.navigateForward('/registeras');
          }
        }]);

        return Onboarding1Page;
      }();

      Onboarding1Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }];
      };

      Onboarding1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-onboarding1',
        template: _raw_loader_onboarding1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_onboarding1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Onboarding1Page);
      /***/
    },

    /***/
    "ncPS":
    /*!***************************************************!*\
      !*** ./src/app/onboarding1/onboarding1.module.ts ***!
      \***************************************************/

    /*! exports provided: Onboarding1PageModule */

    /***/
    function ncPS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Onboarding1PageModule", function () {
        return Onboarding1PageModule;
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


      var _onboarding1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./onboarding1-routing.module */
      "WeK9");
      /* harmony import */


      var _onboarding1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./onboarding1.page */
      "eNzX");

      var Onboarding1PageModule = function Onboarding1PageModule() {
        _classCallCheck(this, Onboarding1PageModule);
      };

      Onboarding1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _onboarding1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Onboarding1PageRoutingModule"]],
        declarations: [_onboarding1_page__WEBPACK_IMPORTED_MODULE_6__["Onboarding1Page"]]
      })], Onboarding1PageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=onboarding1-onboarding1-module-es5.js.map