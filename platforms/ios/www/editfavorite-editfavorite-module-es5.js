(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editfavorite-editfavorite-module"], {
    /***/
    "3IOP":
    /*!*****************************************************!*\
      !*** ./src/app/editfavorite/editfavorite.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function IOP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 11px;\n  padding-left: 18px;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 14px;\n  padding-left: 18px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 10% auto;\n}\n\n.logodiv {\n  text-align: center;\n}\n\n.field {\n  display: flex;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  background: #FFFFFF;\n  width: 85%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n  padding: 2% 0% 2% 7%;\n}\n\n.imgdiv {\n  margin-left: 7%;\n  margin-top: 4%;\n}\n\n.box {\n  display: flex;\n  margin-top: 5%;\n}\n\n.chip {\n  background: #09A8F9;\n  border-radius: 7px;\n}\n\n.label {\n  font-size: 14px;\n  color: #FFFFFF;\n}\n\n.chipimg {\n  margin-left: 5px;\n  margin-top: 2px;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXRmYXZvcml0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNDLFdBQUE7QUFFRDs7QUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBREE7RUFFRSxlQUFBO0VBQ0UsZ0JBQUE7QUFHSjs7QUFEQTtFQUNDLGtCQUFBO0VBQW9CLGdCQUFBO0FBS3JCOztBQUZFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBTXRCOztBQUpFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSEE7RUFDRSxxQkFBQTtBQU1GOztBQUpBO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FBT0Q7O0FBTEE7RUFDRSxrQkFBQTtBQVFGOztBQU5BO0VBQ0MsYUFBQTtBQVNEOztBQVBBO0VBQ0MsYUFBQTtFQUNHLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBVUo7O0FBUkE7RUFFQyxXQUFBO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFVRjs7QUFSQTtFQUNDLGVBQUE7RUFDRyxjQUFBO0FBV0o7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQVdGOztBQVRBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQVlGOztBQVZBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFhRjs7QUFYQTtFQUNFLGdCQUFBO0VBQ0UsZUFBQTtBQWNKOztBQVpBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFlRiIsImZpbGUiOiJlZGl0ZmF2b3JpdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6IDElIDAlO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcbi5iYWNrYnRue1xyXG4gIG1hcmdpbi1sZWZ0OjAlO1xyXG4gIHBhZGRpbmctdG9wOjExcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG59XHJcbi5iYWNrU3ZnIHtcclxuICBmaWxsOiAjMzMzO1xyXG59XHJcblxyXG4uY3RpdGxle1xyXG5cdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50aXRsZWNsYXNze1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4uaW9ze1xyXG4gIC5iYWNrYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6MCU7XHJcbiAgICBwYWRkaW5nLXRvcDoxNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gIH1cclxuXHQudGl0bGVjbGFzc3tcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDExcHg7XHJcblx0fVxyXG4gIC5oZWFkQmcge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gICAgcGFkZGluZzogMyUgMCU7XHJcbiAgfVxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6ODAlO1xyXG5cdG1hcmdpbjoxMCUgYXV0bztcclxufVxyXG4ubG9nb2RpdntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZpZWxke1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmlucHV0ZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIHdpZHRoOiA4NSVcclxufVxyXG4ucGlucHV0XHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgb3BhY2l0eTogNDglO1xyXG4gIHBhZGRpbmc6IDIlIDAlIDIlIDclO1xyXG59XHJcbi5pbWdkaXZ7XHJcblx0bWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuXHJcbi5ib3h7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4uY2hpcHtcclxuICBiYWNrZ3JvdW5kOiMwOUE4Rjk7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbi5sYWJlbHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmNoaXBpbWd7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiAjZmYwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "7Id1":
    /*!***************************************************!*\
      !*** ./src/app/editfavorite/editfavorite.page.ts ***!
      \***************************************************/

    /*! exports provided: EditfavoritePage */

    /***/
    function Id1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditfavoritePage", function () {
        return EditfavoritePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_editfavorite_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./editfavorite.page.html */
      "i1zD");
      /* harmony import */


      var _editfavorite_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editfavorite.page.scss */
      "3IOP");
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
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var EditfavoritePage = /*#__PURE__*/function () {
        function EditfavoritePage(navCtrl, childService, editchildService, route, location) {
          _classCallCheck(this, EditfavoritePage);

          this.navCtrl = navCtrl;
          this.childService = childService;
          this.editchildService = editchildService;
          this.route = route;
          this.location = location;
          this.array = [];
          this.favorite = '';
          this.error = {
            status: false,
            message: ""
          };
          console.log('service favourte ===  entering favourte page', this.editchildService.favorite);
        }

        _createClass(EditfavoritePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goback",
          value: function goback() {
            this.location.back();
          }
        }, {
          key: "add",
          value: function add() {
            var _this = this;

            if (this.favorite) {
              // let data={
              //   favourite_activity: this.favorite,
              // }
              // this.array.push(data);
              this.editchildService.favorite.push(this.favorite); // this.editchildService.favorite1.push(this.favorite);

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
            console.log('index', i);
            var splice = this.editchildService.favorite.splice(i, 1);
            console.log('splice', splice);
          }
        }]);

        return EditfavoritePage;
      }();

      EditfavoritePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_child_service__WEBPACK_IMPORTED_MODULE_5__["ChildService"]
        }, {
          type: _services_editchild_service__WEBPACK_IMPORTED_MODULE_6__["EditchildService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }];
      };

      EditfavoritePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editfavorite',
        template: _raw_loader_editfavorite_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editfavorite_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditfavoritePage);
      /***/
    },

    /***/
    "WzWJ":
    /*!*****************************************************!*\
      !*** ./src/app/editfavorite/editfavorite.module.ts ***!
      \*****************************************************/

    /*! exports provided: EditfavoritePageModule */

    /***/
    function WzWJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditfavoritePageModule", function () {
        return EditfavoritePageModule;
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


      var _editfavorite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./editfavorite-routing.module */
      "uyrp");
      /* harmony import */


      var _editfavorite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./editfavorite.page */
      "7Id1");

      var EditfavoritePageModule = function EditfavoritePageModule() {
        _classCallCheck(this, EditfavoritePageModule);
      };

      EditfavoritePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editfavorite_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditfavoritePageRoutingModule"]],
        declarations: [_editfavorite_page__WEBPACK_IMPORTED_MODULE_6__["EditfavoritePage"]]
      })], EditfavoritePageModule);
      /***/
    },

    /***/
    "i1zD":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editfavorite/editfavorite.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function i1zD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t\t  <ion-toolbar class=\"headBgGlobal\">\n\t\t    <ion-buttons slot=\"start\" class=\"backbtn\">\n\t\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t\t  </ion-buttons>\n\t\t  <ion-title class=\"ctitle\">Favorite Activities</ion-title>\n\t\t</ion-toolbar>\n</ion-header> -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t<ion-toolbar class=\"headBgGlobal\">\n\t  <ion-row>\n\t\t<ion-col class=\"backbtn\" size=\"2\">\n\t\t  <div>\n\t\t\t<img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t\t  </div>\n\t\t</ion-col>\n  \n\t\t<ion-col class=\"titleclass\" size=\"8\">\n\t\t  <ion-text class=\"ctitle\">Favorite Activities</ion-text>\n\t\t</ion-col>\n  \n\t\t<ion-col size=\"2\">\n  \n\t\t</ion-col>\n\t  </ion-row>\n  </ion-toolbar>\n  </ion-header>\n\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\t\t<div class=\"logodiv\">\n\t\t\t<img src=\"assets/imgs/girl.svg\">\n\t\t</div>\n\n\t\t<div class=\"field\">\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-input placeholder=\"Enter favorite activities\" type=\"text\" [(ngModel)]=\"favorite\"></ion-input>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"imgdiv\" (click)=\"add()\">\n\t\t\t\t<img src=\"assets/imgs/icons/plus.svg\">\n\t\t\t</div>\n\t\t</div>\n\n\t\t<p *ngIf=\"error.status\" class=\"error\">\n      {{error.message}}\n    </p>\n\n\t\t<div style=\"display: flex;flex-wrap: wrap;\">\n\t\t\t<div class=\"box\" *ngFor=\"let fav of editchildService.favorite;let i = index;\">\n\n\t\t\t\t<ion-chip class=\"chip\" (click)=\"del(i)\">  \n\t\t\t     <ion-label class=\"label\">{{fav}}</ion-label>\n\t\t\t     <img src=\"assets/imgs/icons/cross3.png\" class=\"chipimg\">  \n\t\t\t  </ion-chip>  \n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "uyrp":
    /*!*************************************************************!*\
      !*** ./src/app/editfavorite/editfavorite-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: EditfavoritePageRoutingModule */

    /***/
    function uyrp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditfavoritePageRoutingModule", function () {
        return EditfavoritePageRoutingModule;
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


      var _editfavorite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editfavorite.page */
      "7Id1");

      var routes = [{
        path: '',
        component: _editfavorite_page__WEBPACK_IMPORTED_MODULE_3__["EditfavoritePage"]
      }];

      var EditfavoritePageRoutingModule = function EditfavoritePageRoutingModule() {
        _classCallCheck(this, EditfavoritePageRoutingModule);
      };

      EditfavoritePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditfavoritePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=editfavorite-editfavorite-module-es5.js.map