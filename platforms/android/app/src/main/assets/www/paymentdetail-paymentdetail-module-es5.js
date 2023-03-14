(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paymentdetail-paymentdetail-module"], {
    /***/
    "+dxq":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paymentdetail/paymentdetail.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function dxq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>paymentdetail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "B+1X":
    /*!*******************************************************!*\
      !*** ./src/app/paymentdetail/paymentdetail.module.ts ***!
      \*******************************************************/

    /*! exports provided: PaymentdetailPageModule */

    /***/
    function B1X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentdetailPageModule", function () {
        return PaymentdetailPageModule;
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


      var _paymentdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./paymentdetail-routing.module */
      "sDLx");
      /* harmony import */


      var _paymentdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./paymentdetail.page */
      "PRmZ");

      var PaymentdetailPageModule = /*#__PURE__*/_createClass(function PaymentdetailPageModule() {
        _classCallCheck(this, PaymentdetailPageModule);
      });

      PaymentdetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _paymentdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentdetailPageRoutingModule"]],
        declarations: [_paymentdetail_page__WEBPACK_IMPORTED_MODULE_6__["PaymentdetailPage"]]
      })], PaymentdetailPageModule);
      /***/
    },

    /***/
    "PRmZ":
    /*!*****************************************************!*\
      !*** ./src/app/paymentdetail/paymentdetail.page.ts ***!
      \*****************************************************/

    /*! exports provided: PaymentdetailPage */

    /***/
    function PRmZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentdetailPage", function () {
        return PaymentdetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_paymentdetail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./paymentdetail.page.html */
      "+dxq");
      /* harmony import */


      var _paymentdetail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./paymentdetail.page.scss */
      "TsQS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PaymentdetailPage = /*#__PURE__*/function () {
        function PaymentdetailPage() {
          _classCallCheck(this, PaymentdetailPage);
        }

        _createClass(PaymentdetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PaymentdetailPage;
      }();

      PaymentdetailPage.ctorParameters = function () {
        return [];
      };

      PaymentdetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-paymentdetail',
        template: _raw_loader_paymentdetail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_paymentdetail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PaymentdetailPage);
      /***/
    },

    /***/
    "TsQS":
    /*!*******************************************************!*\
      !*** ./src/app/paymentdetail/paymentdetail.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function TsQS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50ZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "sDLx":
    /*!***************************************************************!*\
      !*** ./src/app/paymentdetail/paymentdetail-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: PaymentdetailPageRoutingModule */

    /***/
    function sDLx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentdetailPageRoutingModule", function () {
        return PaymentdetailPageRoutingModule;
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


      var _paymentdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./paymentdetail.page */
      "PRmZ");

      var routes = [{
        path: '',
        component: _paymentdetail_page__WEBPACK_IMPORTED_MODULE_3__["PaymentdetailPage"]
      }];

      var PaymentdetailPageRoutingModule = /*#__PURE__*/_createClass(function PaymentdetailPageRoutingModule() {
        _classCallCheck(this, PaymentdetailPageRoutingModule);
      });

      PaymentdetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PaymentdetailPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=paymentdetail-paymentdetail-module-es5.js.map