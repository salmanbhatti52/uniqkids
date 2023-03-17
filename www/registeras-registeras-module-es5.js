(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registeras-registeras-module"], {
    /***/
    "9mS2":
    /*!***********************************************!*\
      !*** ./src/app/registeras/registeras.page.ts ***!
      \***********************************************/

    /*! exports provided: RegisterasPage */

    /***/
    function mS2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterasPage", function () {
        return RegisterasPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_registeras_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./registeras.page.html */
      "9uir");
      /* harmony import */


      var _registeras_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./registeras.page.scss */
      "IZSn");
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

      var RegisterasPage = /*#__PURE__*/function () {
        function RegisterasPage(navCtrl, menuCtrl, userService) {
          _classCallCheck(this, RegisterasPage);

          this.navCtrl = navCtrl;
          this.menuCtrl = menuCtrl;
          this.userService = userService;
        }

        _createClass(RegisterasPage, [{
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
          key: "gotologin",
          value: function gotologin() {
            this.navCtrl.navigateRoot('/signin');
          }
        }, {
          key: "parent",
          value: function parent() {
            this.userService.setSideMenu("Parent");
            this.userService.userType = 'Parent';
            console.log('service', this.userService.userType);
            localStorage.setItem('userType', 'Parent');
            this.navCtrl.navigateRoot('/signup');
          }
        }, {
          key: "caregiver",
          value: function caregiver() {
            this.userService.setSideMenu("caregiver");
            this.userService.userType = 'caregiver';
            console.log('service', this.userService.userType);
            localStorage.setItem('userType', 'caregiver');
            this.navCtrl.navigateRoot('/cgsignup');
          }
        }]);

        return RegisterasPage;
      }();

      RegisterasPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _loginwithuser_service__WEBPACK_IMPORTED_MODULE_5__["LoginwithuserService"]
        }];
      };

      RegisterasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registeras',
        template: _raw_loader_registeras_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registeras_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterasPage);
      /***/
    },

    /***/
    "9uir":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registeras/registeras.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function uir(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>registeras</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\t\t<div style=\"text-align: center;\">\n  \t\t<img src=\"assets/imgs/ulogo.png\" height=\"102px\">\n  \t</div>\n  \t<div class=\"mandiv\">\n  \t\t<img src=\"assets/imgs/grouplogo.svg\">\n  \t</div>\n    <p style=\"margin:5px 0px;font-size: 14px;color: #000000;opacity: 0.8;text-align: center;\">Help us understand your relationship with the child better by selecting your role in their life! </p>\n  \t<div class=\"btndiv\">\n\t  \t<button class=\"btn ion-activatable ripple-parent\" (click)=\"parent()\">\n\t  \t\t<img src=\"assets/imgs/manlogo.svg\">\n\t\t\t\t<div class=\"text\">Parent</div>\n\t\t\t\t <ion-ripple-effect></ion-ripple-effect>\n\t\t\t</button>\n\n\n\t  \t<button class=\"btn1 ion-activatable ripple-parent\" (click)=\"caregiver()\">\n\t  \t\t<img src=\"assets/imgs/child.svg\">\n\t\t\t\t<div class=\"text1\">Caregiver</div>\n\t\t\t\t <ion-ripple-effect></ion-ripple-effect>\n\t\t\t</button>\n  \t\n  \t</div>\n  \t\n\t</div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n\t<ion-toolbar class=\"bgtoolbar\">\n\t\t<div class=\"footer\">\n\t\t\tAlready got an account? <span (click)=\"gotologin()\">Login</span>\n\t\t</div>\n\t</ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "IZSn":
    /*!*************************************************!*\
      !*** ./src/app/registeras/registeras.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function IZSn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 10% auto;\n}\n\n.btn {\n  margin-top: 5%;\n  outline: none;\n  background: #FE9805;\n  border-radius: 12px;\n  display: flex;\n  width: 100%;\n}\n\n.btn img {\n  padding: 6% 10%;\n}\n\n.text {\n  color: #FFFFFF;\n  font-size: 30px;\n  padding: 14% 5% 14% 0%;\n  margin: 0px;\n  width: 100%;\n}\n\n.btn1 {\n  margin-top: 8%;\n  outline: none;\n  background: #FFFFFF;\n  border-radius: 12px;\n  display: flex;\n  width: 100%;\n  border: 3px solid #FE9805;\n}\n\n.btn1 img {\n  padding: 6% 10%;\n}\n\n.text1 {\n  color: #FE9805;\n  font-size: 30px;\n  padding: 14% 5% 14% 0%;\n  margin: 0px;\n  width: 100%;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.footer {\n  font-size: 17px;\n  text-align: center;\n  color: #000000;\n}\n\n.bgtoolbar {\n  --background: #F7F7F7;\n}\n\nspan {\n  color: #000;\n  font-weight: 400;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlZ2lzdGVyYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MscUJBQUE7QUFDRDs7QUFDQTtFQUNDLFVBQUE7RUFDQSxnQkFBQTtBQUVEOztBQUNBO0VBQ0MsY0FBQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFFRjs7QUFBQTtFQUNDLGVBQUE7QUFHRDs7QUFEQTtFQUNDLGNBQUE7RUFDRyxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUZBO0VBQ0MsY0FBQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUtGOztBQUhBO0VBQ0MsZUFBQTtBQU1EOztBQUpBO0VBQ0MsY0FBQTtFQUNDLGVBQUE7RUFDQSxzQkFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBT0o7O0FBTEE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBUUY7O0FBTEE7RUFFQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBT0Q7O0FBTEE7RUFDQyxxQkFBQTtBQVFEOztBQU5BO0VBRUMsV0FBQTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBQVFGIiwiZmlsZSI6InJlZ2lzdGVyYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcblx0LS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbi53cmFwcGVye1xyXG5cdHdpZHRoOjgwJTtcclxuXHRtYXJnaW46MTAlIGF1dG87XHJcbn1cclxuXHJcbi5idG57XHJcblx0bWFyZ2luLXRvcDogNSU7ICBcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNGRTk4MDU7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYnRuIGltZ3tcclxuXHRwYWRkaW5nOiA2JSAxMCU7XHJcbn1cclxuLnRleHR7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxNCUgNSUgMTQlIDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYnRuMXtcclxuXHRtYXJnaW4tdG9wOiA4JTsgIFxyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjsgXHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjozcHggc29saWQgI0ZFOTgwNTtcclxufVxyXG4uYnRuMSBpbWd7XHJcblx0cGFkZGluZzogNiUgMTAlO1xyXG59XHJcbi50ZXh0MXtcclxuXHRjb2xvcjogI0ZFOTgwNTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcGFkZGluZzogMTQlIDUlIDE0JSAwJTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJpcHBsZS1wYXJlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZm9vdGVyXHJcbntcclxuXHRmb250LXNpemU6IDE3cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuLmJndG9vbGJhcntcclxuXHQtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuc3BhblxyXG57XHJcblx0Y29sb3I6ICMwMDA7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "wPbW":
    /*!*************************************************!*\
      !*** ./src/app/registeras/registeras.module.ts ***!
      \*************************************************/

    /*! exports provided: RegisterasPageModule */

    /***/
    function wPbW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterasPageModule", function () {
        return RegisterasPageModule;
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


      var _registeras_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./registeras-routing.module */
      "zfwD");
      /* harmony import */


      var _registeras_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registeras.page */
      "9mS2");

      var RegisterasPageModule = /*#__PURE__*/_createClass(function RegisterasPageModule() {
        _classCallCheck(this, RegisterasPageModule);
      });

      RegisterasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registeras_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterasPageRoutingModule"]],
        declarations: [_registeras_page__WEBPACK_IMPORTED_MODULE_6__["RegisterasPage"]]
      })], RegisterasPageModule);
      /***/
    },

    /***/
    "zfwD":
    /*!*********************************************************!*\
      !*** ./src/app/registeras/registeras-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: RegisterasPageRoutingModule */

    /***/
    function zfwD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterasPageRoutingModule", function () {
        return RegisterasPageRoutingModule;
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


      var _registeras_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./registeras.page */
      "9mS2");

      var routes = [{
        path: '',
        component: _registeras_page__WEBPACK_IMPORTED_MODULE_3__["RegisterasPage"]
      }];

      var RegisterasPageRoutingModule = /*#__PURE__*/_createClass(function RegisterasPageRoutingModule() {
        _classCallCheck(this, RegisterasPageRoutingModule);
      });

      RegisterasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterasPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=registeras-registeras-module-es5.js.map