(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favoriteactivities-favoriteactivities-module"], {
    /***/
    "/sah":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favoriteactivities/favoriteactivities.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sah(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t\t  <ion-toolbar class=\"headBgGlobal\">\n\t\t    <ion-buttons slot=\"start\" class=\"backbtn\">\n\t\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t\t  </ion-buttons>\n\t\t  <ion-title class=\"ctitle\">Favorite Activities</ion-title>\n\t\t</ion-toolbar>\n</ion-header> -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t<ion-toolbar class=\"headBgGlobal\">\n\t  <ion-row>\n\t\t<ion-col class=\"backbtn\" size=\"2\">\n\t\t  <div>\n\t\t\t<img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t\t  </div>\n\t\t</ion-col>\n  \n\t\t<ion-col class=\"titleclass\" size=\"8\">\n\t\t  <ion-text class=\"ctitle\">Favorite Activities</ion-text>\n\t\t</ion-col>\n  \n\t\t<ion-col size=\"2\">\n  \n\t\t</ion-col>\n\t  </ion-row>\n  </ion-toolbar>\n  </ion-header>\n  \n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\t\t<div class=\"logodiv\">\n\t\t\t<img src=\"assets/imgs/girl.svg\">\n\t\t</div>\n\n\t\t<div class=\"field\">\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-input placeholder=\"Enter favorite activities\" type=\"text\" [(ngModel)]=\"favorite\"></ion-input>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"imgdiv\" (click)=\"add()\">\n\t\t\t\t<img src=\"assets/imgs/icons/plus.svg\">\n\t\t\t</div>\n\t\t</div>\n\n\t\t<p *ngIf=\"error.status\" class=\"error\">\n      {{error.message}}\n    </p>\n\n\t\t<div style=\"display: flex;flex-wrap: wrap;\">\n\t\t\t<div class=\"box\" *ngFor=\"let likes of childService.favorite;let i = index;\">\n\n\t\t\t\t<ion-chip class=\"chip\" (click)=\"del(i)\">  \n\t\t\t     <ion-label class=\"label\">{{likes}}</ion-label>\n\t\t\t     <img src=\"assets/imgs/icons/cross3.png\" class=\"chipimg\">  \n\t\t\t  </ion-chip>  \n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "kLwl":
    /*!*****************************************************************!*\
      !*** ./src/app/favoriteactivities/favoriteactivities.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function kLwl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 11px;\n  padding-left: 18px;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 14px;\n  padding-left: 18px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 10% auto;\n}\n\n.logodiv {\n  text-align: center;\n}\n\n.field {\n  display: flex;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  background: #FFFFFF;\n  width: 85%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n  padding: 2% 0% 2% 7%;\n}\n\n.imgdiv {\n  margin-left: 7%;\n  margin-top: 4%;\n}\n\n.box {\n  display: flex;\n  margin-top: 5%;\n}\n\n.chip {\n  background: #09A8F9;\n  border-radius: 7px;\n}\n\n.label {\n  font-size: 14px;\n  color: #FFFFFF;\n}\n\n.chipimg {\n  margin-left: 5px;\n  margin-top: 2px;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zhdm9yaXRlYWN0aXZpdGllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNDLFdBQUE7QUFFRDs7QUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBREE7RUFFRSxlQUFBO0VBQ0UsZ0JBQUE7QUFHSjs7QUFEQTtFQUNDLGtCQUFBO0VBQW9CLGdCQUFBO0FBS3JCOztBQUZFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBTXRCOztBQUpFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSEE7RUFDRSxxQkFBQTtBQU1GOztBQUpBO0VBQ0UscUJBQUE7QUFPRjs7QUFMQTtFQUNDLFVBQUE7RUFDQSxnQkFBQTtBQVFEOztBQU5BO0VBQ0Usa0JBQUE7QUFTRjs7QUFQQTtFQUNDLGFBQUE7QUFVRDs7QUFSQTtFQUNDLGFBQUE7RUFDRyxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQVdKOztBQVRBO0VBRUMsV0FBQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBV0Y7O0FBVEE7RUFDQyxlQUFBO0VBQ0csY0FBQTtBQVlKOztBQVRBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFZRjs7QUFWQTtFQUVFLG1CQUFBO0VBQ0Esa0JBQUE7QUFZRjs7QUFWQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBYUY7O0FBWEE7RUFDRSxnQkFBQTtFQUNFLGVBQUE7QUFjSjs7QUFaQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBZUYiLCJmaWxlIjoiZmF2b3JpdGVhY3Rpdml0aWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkQmcge1xyXG4gIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICBwYWRkaW5nOiAxJSAwJTtcclxufVxyXG4ubWVudWljb257XHJcblx0Y29sb3I6IzAwMDtcclxufVxyXG4uYmFja2J0bntcclxuICBtYXJnaW4tbGVmdDowJTtcclxuICBwYWRkaW5nLXRvcDoxMXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMThweDtcclxufVxyXG4uYmFja1N2ZyB7XHJcbiAgZmlsbDogIzMzMztcclxufVxyXG5cclxuLmN0aXRsZXtcclxuXHQvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGl0bGVjbGFzc3tcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuLmlvc3tcclxuICAuYmFja2J0bntcclxuICAgIG1hcmdpbi1sZWZ0OjAlO1xyXG4gICAgcGFkZGluZy10b3A6MTRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICB9XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuICAuaGVhZEJnIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICAgIHBhZGRpbmc6IDMlIDAlO1xyXG4gIH1cclxufVxyXG4uYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6ODAlO1xyXG5cdG1hcmdpbjoxMCUgYXV0bztcclxufVxyXG4ubG9nb2RpdntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZpZWxke1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmlucHV0ZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIHdpZHRoOiA4NSVcclxufVxyXG4ucGlucHV0XHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgb3BhY2l0eTogNDglO1xyXG4gIHBhZGRpbmc6IDIlIDAlIDIlIDclO1xyXG59XHJcbi5pbWdkaXZ7XHJcblx0bWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuXHJcbi5ib3h7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4uY2hpcHtcclxuICAvLyBiYWNrZ3JvdW5kOiAjMEI4N0M2O1xyXG4gIGJhY2tncm91bmQ6ICMwOUE4Rjk7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbi5sYWJlbHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmNoaXBpbWd7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiAjZmYwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "u/P+":
    /*!*************************************************************************!*\
      !*** ./src/app/favoriteactivities/favoriteactivities-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: FavoriteactivitiesPageRoutingModule */

    /***/
    function uP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoriteactivitiesPageRoutingModule", function () {
        return FavoriteactivitiesPageRoutingModule;
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


      var _favoriteactivities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./favoriteactivities.page */
      "uyR2");

      var routes = [{
        path: '',
        component: _favoriteactivities_page__WEBPACK_IMPORTED_MODULE_3__["FavoriteactivitiesPage"]
      }];

      var FavoriteactivitiesPageRoutingModule = /*#__PURE__*/_createClass(function FavoriteactivitiesPageRoutingModule() {
        _classCallCheck(this, FavoriteactivitiesPageRoutingModule);
      });

      FavoriteactivitiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FavoriteactivitiesPageRoutingModule);
      /***/
    },

    /***/
    "uyR2":
    /*!***************************************************************!*\
      !*** ./src/app/favoriteactivities/favoriteactivities.page.ts ***!
      \***************************************************************/

    /*! exports provided: FavoriteactivitiesPage */

    /***/
    function uyR2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoriteactivitiesPage", function () {
        return FavoriteactivitiesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_favoriteactivities_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./favoriteactivities.page.html */
      "/sah");
      /* harmony import */


      var _favoriteactivities_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./favoriteactivities.page.scss */
      "kLwl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_child_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/child.service */
      "ZEea");
      /* harmony import */


      var _services_editchild_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/editchild.service */
      "l2wf");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var FavoriteactivitiesPage = /*#__PURE__*/function () {
        function FavoriteactivitiesPage(navCtrl, childService, editchildService, route) {
          _classCallCheck(this, FavoriteactivitiesPage);

          this.navCtrl = navCtrl;
          this.childService = childService;
          this.editchildService = editchildService;
          this.route = route; // array=[
          // 	{ title: 'Cars'},
          //    { title: 'Playing with toys' },
          // ]

          this.array = [];
          this.favorite = '';
          this.error = {
            status: false,
            message: ""
          };
        }

        _createClass(FavoriteactivitiesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goback",
          value: function goback() {
            this.navCtrl.navigateBack('/addchild');
          }
        }, {
          key: "add",
          value: function add() {
            var _this = this;

            if (this.favorite) {
              var data = {
                title: this.favorite
              };
              this.array.push(data);
              this.childService.favorite.push(this.favorite); // this.editchildService.favorite.push(this.favorite);

              this.favorite = '';
            } else if (!this.favorite) {
              console.log('empty');
              this.error.status = true;
              this.error.message = "Field is required";
              setTimeout(function () {
                _this.error.status = false;
                _this.error.message = "";
              }, 2000);
            }
          }
        }, {
          key: "del",
          value: function del(i) {
            var _this2 = this;

            console.log('index', i);
            this.childService.favorite.map(function (el, index) {
              console.log('index', i);

              var splice = _this2.childService.favorite.splice(i, 1);

              console.log('splice', splice);
            });
          }
        }]);

        return FavoriteactivitiesPage;
      }();

      FavoriteactivitiesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_child_service__WEBPACK_IMPORTED_MODULE_5__["ChildService"]
        }, {
          type: _services_editchild_service__WEBPACK_IMPORTED_MODULE_6__["EditchildService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      };

      FavoriteactivitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-favoriteactivities',
        template: _raw_loader_favoriteactivities_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_favoriteactivities_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FavoriteactivitiesPage);
      /***/
    },

    /***/
    "vwF2":
    /*!*****************************************************************!*\
      !*** ./src/app/favoriteactivities/favoriteactivities.module.ts ***!
      \*****************************************************************/

    /*! exports provided: FavoriteactivitiesPageModule */

    /***/
    function vwF2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoriteactivitiesPageModule", function () {
        return FavoriteactivitiesPageModule;
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


      var _favoriteactivities_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./favoriteactivities-routing.module */
      "u/P+");
      /* harmony import */


      var _favoriteactivities_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./favoriteactivities.page */
      "uyR2");

      var FavoriteactivitiesPageModule = /*#__PURE__*/_createClass(function FavoriteactivitiesPageModule() {
        _classCallCheck(this, FavoriteactivitiesPageModule);
      });

      FavoriteactivitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favoriteactivities_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoriteactivitiesPageRoutingModule"]],
        declarations: [_favoriteactivities_page__WEBPACK_IMPORTED_MODULE_6__["FavoriteactivitiesPage"]]
      })], FavoriteactivitiesPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=favoriteactivities-favoriteactivities-module-es5.js.map