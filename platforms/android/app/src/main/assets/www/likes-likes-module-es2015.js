(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["likes-likes-module"],{

/***/ "1MZ9":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/likes/likes.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t\t  <ion-toolbar class=\"headBgGlobal\">\r\n\t\t    <ion-buttons slot=\"start\" class=\"backbtn\">\r\n\t\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t\t  </ion-buttons>\r\n\t\t  <ion-title class=\"ctitle\">Likes</ion-title>\r\n\t\t</ion-toolbar>\r\n</ion-header> -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col class=\"backbtn\" size=\"2\">\r\n        <div>\r\n          <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"8\">\r\n        <ion-text class=\"ctitle\">Likes</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\">\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\t<div class=\"wrapper\">\r\n\t\t<div class=\"logodiv\">\r\n\t\t\t<img src=\"assets/imgs/blacklogo2.svg\">\r\n\t\t</div>\r\n\t\t<div class=\"field\">\r\n\t\t\t<div class=\"inputdiv\">\r\n\t\t\t\t<div class=\"pinput\">\r\n\t\t\t\t\t<ion-input placeholder=\"Enter likes\" type=\"text\" [(ngModel)]=\"likes\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"imgdiv\" (click)=\"add()\">\r\n\t\t\t\t<img src=\"assets/imgs/icons/plus.svg\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<p *ngIf=\"error.status\" class=\"error\">\r\n      {{error.message}}\r\n    </p>\r\n\t\t\r\n\t\t<div style=\"display: flex; flex-wrap: wrap;\">\r\n\t\t\t<div class=\"box\" *ngFor=\"let likes of childService.likes;let i = index;\">\r\n\r\n\t\t\t\t<ion-chip class=\"chip\" (click)=\"del(i)\">  \r\n\t\t\t     <ion-label class=\"label\">{{likes}}</ion-label>\r\n\t\t\t     <img src=\"assets/imgs/icons/cross.png\" class=\"chipimg\">  \r\n\t\t\t  </ion-chip>  \r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "4b2y":
/*!***********************************************!*\
  !*** ./src/app/likes/likes-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LikesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesPageRoutingModule", function() { return LikesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _likes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes.page */ "mtix");




const routes = [
    {
        path: '',
        component: _likes_page__WEBPACK_IMPORTED_MODULE_3__["LikesPage"]
    }
];
let LikesPageRoutingModule = class LikesPageRoutingModule {
};
LikesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LikesPageRoutingModule);



/***/ }),

/***/ "AS/b":
/*!***************************************!*\
  !*** ./src/app/likes/likes.module.ts ***!
  \***************************************/
/*! exports provided: LikesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesPageModule", function() { return LikesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _likes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./likes-routing.module */ "4b2y");
/* harmony import */ var _likes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./likes.page */ "mtix");







let LikesPageModule = class LikesPageModule {
};
LikesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _likes_routing_module__WEBPACK_IMPORTED_MODULE_5__["LikesPageRoutingModule"]
        ],
        declarations: [_likes_page__WEBPACK_IMPORTED_MODULE_6__["LikesPage"]]
    })
], LikesPageModule);



/***/ }),

/***/ "g99Z":
/*!***************************************!*\
  !*** ./src/app/likes/likes.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 11px;\n  padding-left: 18px;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 14px;\n  padding-left: 18px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 10% auto;\n}\n\n.logodiv {\n  text-align: center;\n}\n\n.field {\n  display: flex;\n  margin-top: 5%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  background: #FFFFFF;\n  width: 85%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n  padding: 2% 0% 2% 7%;\n}\n\n.imgdiv {\n  margin-left: 7%;\n  margin-top: 4%;\n}\n\n.box {\n  display: flex;\n  margin-top: 5%;\n}\n\n.clear {\n  clear: both;\n}\n\n.chip {\n  background: #8CC540;\n  border-radius: 7px;\n}\n\n.label {\n  font-size: 14px;\n  color: #FFFFFF;\n}\n\n.chipimg {\n  margin-left: 5px;\n  margin-top: 2px;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxpa2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFEQTtFQUVFLGVBQUE7RUFDRSxnQkFBQTtBQUdKOztBQURBO0VBQ0Msa0JBQUE7RUFBb0IsZ0JBQUE7QUFLckI7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhDO0VBQ0Msa0JBQUE7RUFBb0IsaUJBQUE7QUFNdEI7O0FBSkU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFIQTtFQUNFLHFCQUFBO0FBTUY7O0FBSkE7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7QUFPRDs7QUFMQTtFQUNFLGtCQUFBO0FBUUY7O0FBTkE7RUFDQyxhQUFBO0VBQ0MsY0FBQTtBQVNGOztBQVBBO0VBQ0MsYUFBQTtFQUNHLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBVUo7O0FBUkE7RUFFQyxXQUFBO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFVRjs7QUFSQTtFQUNDLGVBQUE7RUFDRyxjQUFBO0FBV0o7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQVdGOztBQVRBO0VBQ0UsV0FBQTtBQVlGOztBQVRBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQVlGOztBQVZBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFhRjs7QUFYQTtFQUNFLGdCQUFBO0VBQ0UsZUFBQTtBQWNKOztBQVhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFjRiIsImZpbGUiOiJsaWtlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgcGFkZGluZzogMSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuLmJhY2tidG57XHJcbiAgbWFyZ2luLWxlZnQ6MCU7XHJcbiAgcGFkZGluZy10b3A6MTFweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcbiAgLmJhY2tidG57XHJcbiAgICBtYXJnaW4tbGVmdDowJTtcclxuICAgIHBhZGRpbmctdG9wOjE0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbiAgfVxyXG5cdC50aXRsZWNsYXNze1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTFweDtcclxuXHR9XHJcbiAgLmhlYWRCZyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgICBwYWRkaW5nOiAzJSAwJTtcclxuICB9XHJcbn1cclxuLmJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG4ud3JhcHBlcntcclxuXHR3aWR0aDo4MCU7XHJcblx0bWFyZ2luOjEwJSBhdXRvO1xyXG59XHJcbi5sb2dvZGl2e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZmllbGR7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4uaW5wdXRkaXZ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgd2lkdGg6IDg1JVxyXG59XHJcbi5waW5wdXRcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBvcGFjaXR5OiA0OCU7XHJcbiAgcGFkZGluZzogMiUgMCUgMiUgNyU7XHJcbn1cclxuLmltZ2RpdntcclxuXHRtYXJnaW4tbGVmdDogNyU7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG5cclxuLmJveHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5jbGVhcntcclxuICBjbGVhcjpib3RoO1xyXG59XHJcblxyXG4uY2hpcHtcclxuICBiYWNrZ3JvdW5kOiAjOENDNTQwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG4ubGFiZWx7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5jaGlwaW1ne1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgY29sb3I6ICNmZjAwMDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */");

/***/ }),

/***/ "mtix":
/*!*************************************!*\
  !*** ./src/app/likes/likes.page.ts ***!
  \*************************************/
/*! exports provided: LikesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesPage", function() { return LikesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_likes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./likes.page.html */ "1MZ9");
/* harmony import */ var _likes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes.page.scss */ "g99Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_child_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/child.service */ "ZEea");
/* harmony import */ var _services_editchild_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/editchild.service */ "l2wf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let LikesPage = class LikesPage {
    constructor(navCtrl, childService, editchildService, route) {
        this.navCtrl = navCtrl;
        this.childService = childService;
        this.editchildService = editchildService;
        this.route = route;
        // array=[
        // 	{ title: 'Cars'},
        //    { title: 'Playing with toys' },
        // ]
        this.array = [];
        this.likes = '';
        this.error = {
            status: false,
            message: "",
        };
    }
    ngOnInit() {
        this.getlikes();
    }
    goback() {
        this.navCtrl.navigateBack('/addchild');
    }
    getlikes() {
        console.log('medarray', this.childService.likes);
        this.childService.likes.forEach(val => {
            let data = {
                title: val.likes,
            };
            this.array.push(data);
        });
    }
    add() {
        if (this.likes) {
            let data = {
                title: this.likes,
            };
            this.array.push(data);
            this.childService.likes.push(this.likes);
            // this.editchildService.likes.push(this.likes);
            this.likes = '';
        }
        else if (!this.likes) {
            console.log('empty');
            this.error.status = true;
            this.error.message = "Field is required";
            setTimeout(() => {
                this.error.status = false;
                this.error.message = "";
            }, 2000);
        }
    }
    del(i) {
        console.log('index', i);
        this.childService.likes.map((el, index) => {
            console.log('index', i);
            let splice = this.childService.likes.splice(i, 1);
            console.log('splice', splice);
        });
    }
};
LikesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_child_service__WEBPACK_IMPORTED_MODULE_5__["ChildService"] },
    { type: _services_editchild_service__WEBPACK_IMPORTED_MODULE_6__["EditchildService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
LikesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-likes',
        template: _raw_loader_likes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_likes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LikesPage);



/***/ })

}]);
//# sourceMappingURL=likes-likes-module-es2015.js.map