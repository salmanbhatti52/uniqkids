(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editdislikes-editdislikes-module"], {
    /***/
    "EnM8":
    /*!*****************************************************!*\
      !*** ./src/app/editdislikes/editdislikes.module.ts ***!
      \*****************************************************/

    /*! exports provided: EditdislikesPageModule */

    /***/
    function EnM8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditdislikesPageModule", function () {
        return EditdislikesPageModule;
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


      var _editdislikes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./editdislikes-routing.module */
      "fJl1");
      /* harmony import */


      var _editdislikes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./editdislikes.page */
      "L3z+");

      var EditdislikesPageModule = function EditdislikesPageModule() {
        _classCallCheck(this, EditdislikesPageModule);
      };

      EditdislikesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editdislikes_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditdislikesPageRoutingModule"]],
        declarations: [_editdislikes_page__WEBPACK_IMPORTED_MODULE_6__["EditdislikesPage"]]
      })], EditdislikesPageModule);
      /***/
    },

    /***/
    "L3z+":
    /*!***************************************************!*\
      !*** ./src/app/editdislikes/editdislikes.page.ts ***!
      \***************************************************/

    /*! exports provided: EditdislikesPage */

    /***/
    function L3z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditdislikesPage", function () {
        return EditdislikesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_editdislikes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./editdislikes.page.html */
      "UvnY");
      /* harmony import */


      var _editdislikes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editdislikes.page.scss */
      "i+2T");
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

      var EditdislikesPage = /*#__PURE__*/function () {
        function EditdislikesPage(navCtrl, childService, editchildService, route, location) {
          _classCallCheck(this, EditdislikesPage);

          this.navCtrl = navCtrl;
          this.childService = childService;
          this.editchildService = editchildService;
          this.route = route;
          this.location = location;
          this.array = [];
          this.dislikes = '';
          this.error = {
            status: false,
            message: ""
          };
          console.log('service dislikes ===  entering dislikessss page', this.editchildService.dislikes);
        }

        _createClass(EditdislikesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.getdislikes();
          }
        }, {
          key: "goback",
          value: function goback() {
            this.location.back();
          } //  getdislikes(){
          //   this.childService.dislikes.forEach(val=>{
          //   let data={
          //      title:val.likes,
          //    }
          //    this.array.push(data)
          //   })
          // }

        }, {
          key: "add",
          value: function add() {
            var _this = this;

            if (this.dislikes) {
              // let data={
              //   dislike: this.dislikes,
              // }
              // this.array.push(data);
              this.editchildService.dislikes.push(this.dislikes); // this.editchildService.dislikes1.push(this.dislikes);

              this.dislikes = '';
            } else if (!this.dislikes) {
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
            var splice = this.editchildService.dislikes.splice(i, 1);
            console.log('splice', splice);
          }
        }]);

        return EditdislikesPage;
      }();

      EditdislikesPage.ctorParameters = function () {
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

      EditdislikesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editdislikes',
        template: _raw_loader_editdislikes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editdislikes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditdislikesPage);
      /***/
    },

    /***/
    "UvnY":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editdislikes/editdislikes.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function UvnY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t\t  <ion-toolbar class=\"headBgGlobal\">\n\t\t    <ion-buttons slot=\"start\" class=\"backbtn\">\n\t\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t\t  </ion-buttons>\n\t\t  <ion-title class=\"ctitle\">Likes</ion-title>\n\t\t</ion-toolbar>\n</ion-header> -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t<ion-toolbar class=\"headBgGlobal\">\n\t  <ion-row>\n\t\t<ion-col class=\"backbtn\" size=\"2\">\n\t\t  <div>\n\t\t\t<img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t\t  </div>\n\t\t</ion-col>\n  \n\t\t<ion-col class=\"titleclass\" size=\"8\">\n\t\t  <ion-text class=\"ctitle\">Likes</ion-text>\n\t\t</ion-col>\n  \n\t\t<ion-col size=\"2\">\n  \n\t\t</ion-col>\n\t  </ion-row>\n  </ion-toolbar>\n  </ion-header>\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\t\t<div class=\"logodiv\">\n\t\t\t<img src=\"assets/imgs/dislikelogo.svg\">\n\t\t</div>\n\n\t\t<div class=\"field\">\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-input placeholder=\"Enter dislikes\" type=\"text\" [(ngModel)]=\"dislikes\"></ion-input>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"imgdiv\" (click)=\"add()\">\n\t\t\t\t<img src=\"assets/imgs/icons/plus.svg\">\n\t\t\t</div>\n\t\t</div>\n\n\t\t<p *ngIf=\"error.status\" class=\"error\">\n      {{error.message}}\n    </p>\n\n\t\t<div style=\"display: flex; flex-wrap: wrap;\">\n\t\t\t<div class=\"box\" *ngFor=\"let dislike of editchildService.dislikes;let i = index;\">\n\n\t\t\t\t<ion-chip class=\"chip\" (click)=\"del(i)\">  \n\t\t\t     <ion-label class=\"label\">{{dislike}}</ion-label>\n\t\t\t     <img src=\"assets/imgs/icons/cross2.png\" class=\"chipimg\">  \n\t\t\t  </ion-chip>  \n\t\t\t</div>\n\t\t</div>\n\t\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "fJl1":
    /*!*************************************************************!*\
      !*** ./src/app/editdislikes/editdislikes-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: EditdislikesPageRoutingModule */

    /***/
    function fJl1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditdislikesPageRoutingModule", function () {
        return EditdislikesPageRoutingModule;
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


      var _editdislikes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editdislikes.page */
      "L3z+");

      var routes = [{
        path: '',
        component: _editdislikes_page__WEBPACK_IMPORTED_MODULE_3__["EditdislikesPage"]
      }];

      var EditdislikesPageRoutingModule = function EditdislikesPageRoutingModule() {
        _classCallCheck(this, EditdislikesPageRoutingModule);
      };

      EditdislikesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditdislikesPageRoutingModule);
      /***/
    },

    /***/
    "i+2T":
    /*!*****************************************************!*\
      !*** ./src/app/editdislikes/editdislikes.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function i2T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 11px;\n  padding-left: 18px;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 14px;\n  padding-left: 18px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 10% auto;\n}\n\n.logodiv {\n  text-align: center;\n}\n\n.field {\n  display: flex;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  background: #FFFFFF;\n  width: 85%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n  padding: 2% 0% 2% 7%;\n}\n\n.imgdiv {\n  margin-left: 7%;\n  margin-top: 4%;\n}\n\n.box {\n  display: flex;\n  margin-top: 5%;\n}\n\n.chip {\n  background: #EC3B95;\n  border-radius: 7px;\n}\n\n.label {\n  font-size: 14px;\n  color: #FFFFFF;\n}\n\n.chipimg {\n  margin-left: 5px;\n  margin-top: 2px;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXRkaXNsaWtlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNDLFdBQUE7QUFFRDs7QUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBREE7RUFFRSxlQUFBO0VBQ0UsZ0JBQUE7QUFHSjs7QUFEQTtFQUNDLGtCQUFBO0VBQW9CLGdCQUFBO0FBS3JCOztBQUZFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBTXRCOztBQUpFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSEE7RUFDRyxxQkFBQTtBQU1IOztBQUpBO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FBT0Q7O0FBTEE7RUFDRSxrQkFBQTtBQVFGOztBQU5BO0VBQ0MsYUFBQTtBQVNEOztBQVBBO0VBQ0MsYUFBQTtFQUNHLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBVUo7O0FBUkE7RUFFQyxXQUFBO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFVRjs7QUFSQTtFQUNDLGVBQUE7RUFDRyxjQUFBO0FBV0o7O0FBVEE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQVlGOztBQVZBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQWFGOztBQVhBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFjRjs7QUFaQTtFQUNFLGdCQUFBO0VBQ0UsZUFBQTtBQWVKOztBQVpBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFlRiIsImZpbGUiOiJlZGl0ZGlzbGlrZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6IDElIDAlO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcbi5iYWNrYnRue1xyXG4gIG1hcmdpbi1sZWZ0OjAlO1xyXG4gIHBhZGRpbmctdG9wOjExcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG59XHJcbi5iYWNrU3ZnIHtcclxuICBmaWxsOiAjMzMzO1xyXG59XHJcblxyXG4uY3RpdGxle1xyXG5cdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50aXRsZWNsYXNze1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4uaW9ze1xyXG4gIC5iYWNrYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6MCU7XHJcbiAgICBwYWRkaW5nLXRvcDoxNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gIH1cclxuXHQudGl0bGVjbGFzc3tcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDExcHg7XHJcblx0fVxyXG4gIC5oZWFkQmcge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gICAgcGFkZGluZzogMyUgMCU7XHJcbiAgfVxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6ODAlO1xyXG5cdG1hcmdpbjoxMCUgYXV0bztcclxufVxyXG4ubG9nb2RpdntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZpZWxke1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmlucHV0ZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIHdpZHRoOiA4NSVcclxufVxyXG4ucGlucHV0XHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgb3BhY2l0eTogNDglO1xyXG4gIHBhZGRpbmc6IDIlIDAlIDIlIDclO1xyXG59XHJcbi5pbWdkaXZ7XHJcblx0bWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuLmJveHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5jaGlwe1xyXG4gIGJhY2tncm91bmQ6ICNFQzNCOTU7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbi5sYWJlbHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmNoaXBpbWd7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBjb2xvcjogI2ZmMDAwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=editdislikes-editdislikes-module-es5.js.map