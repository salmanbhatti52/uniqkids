(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dislikes-dislikes-module"],{

/***/ "KSQ3":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dislikes/dislikes.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t\t  <ion-toolbar class=\"headBgGlobal\">\r\n\t\t    <ion-buttons slot=\"start\" class=\"backbtn\">\r\n\t\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t\t  </ion-buttons>\r\n\t\t  <ion-title class=\"ctitle\">Likes</ion-title>\r\n\t\t</ion-toolbar>\r\n</ion-header> -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t<ion-toolbar class=\"headBgGlobal\">\r\n\t  <ion-row>\r\n\t\t<ion-col class=\"backbtn\" size=\"2\">\r\n\t\t  <div>\r\n\t\t\t<img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t\t  </div>\r\n\t\t</ion-col>\r\n  \r\n\t\t<ion-col class=\"titleclass\" size=\"8\">\r\n\t\t  <ion-text class=\"ctitle\">Likes</ion-text>\r\n\t\t</ion-col>\r\n  \r\n\t\t<ion-col size=\"2\">\r\n  \r\n\t\t</ion-col>\r\n\t  </ion-row>\r\n  </ion-toolbar>\r\n  </ion-header>\r\n  \r\n\r\n<ion-content class=\"background\">\r\n\t<div class=\"wrapper\">\r\n\t\t<div class=\"logodiv\">\r\n\t\t\t<img src=\"assets/imgs/dislikelogo.svg\">\r\n\t\t</div>\r\n\r\n\t\t<div class=\"field\">\r\n\t\t\t<div class=\"inputdiv\">\r\n\t\t\t\t<div class=\"pinput\">\r\n\t\t\t\t\t<ion-input placeholder=\"Enter dislikes\" type=\"text\" [(ngModel)]=\"dislikes\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"imgdiv\" (click)=\"add()\">\r\n\t\t\t\t<img src=\"assets/imgs/icons/plus.svg\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<p *ngIf=\"error.status\" class=\"error\">\r\n      {{error.message}}\r\n    </p>\r\n\r\n\t\t<div style=\"display: flex; flex-wrap: wrap;\">\r\n\t\t\t<div class=\"box\" *ngFor=\"let likes of childService.dislikes;let i = index;\">\r\n\r\n\t\t\t\t<ion-chip class=\"chip\" (click)=\"del(i)\">  \r\n\t\t\t     <ion-label class=\"label\">{{likes}}</ion-label>\r\n\t\t\t     <img src=\"assets/imgs/icons/cross2.png\" class=\"chipimg\">  \r\n\t\t\t  </ion-chip>  \r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "R3yJ":
/*!*********************************************!*\
  !*** ./src/app/dislikes/dislikes.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 11px;\n  padding-left: 18px;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 14px;\n  padding-left: 18px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 10% auto;\n}\n\n.logodiv {\n  text-align: center;\n}\n\n.field {\n  display: flex;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  background: #FFFFFF;\n  width: 85%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n  padding: 2% 0% 2% 7%;\n}\n\n.imgdiv {\n  margin-left: 7%;\n  margin-top: 4%;\n}\n\n.box {\n  display: flex;\n  margin-top: 5%;\n}\n\n.chip {\n  background: #EC3B95;\n  border-radius: 7px;\n}\n\n.label {\n  font-size: 14px;\n  color: #FFFFFF;\n}\n\n.chipimg {\n  margin-left: 5px;\n  margin-top: 2px;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRpc2xpa2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFEQTtFQUVFLGVBQUE7RUFDRSxnQkFBQTtBQUdKOztBQURBO0VBQ0Msa0JBQUE7RUFBb0IsZ0JBQUE7QUFLckI7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhDO0VBQ0Msa0JBQUE7RUFBb0IsaUJBQUE7QUFNdEI7O0FBSkU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFIQTtFQUNFLHFCQUFBO0FBTUY7O0FBSkE7RUFDRSxxQkFBQTtBQU9GOztBQUxBO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FBUUQ7O0FBTkE7RUFDRSxrQkFBQTtBQVNGOztBQVBBO0VBQ0MsYUFBQTtBQVVEOztBQVJBO0VBQ0MsYUFBQTtFQUNHLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBV0o7O0FBVEE7RUFFQyxXQUFBO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFXRjs7QUFUQTtFQUNDLGVBQUE7RUFDRyxjQUFBO0FBWUo7O0FBVkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQWFGOztBQVhBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQWNGOztBQVpBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFlRjs7QUFiQTtFQUNFLGdCQUFBO0VBQ0UsZUFBQTtBQWdCSjs7QUFiQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBZ0JGIiwiZmlsZSI6ImRpc2xpa2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkQmcge1xyXG4gIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICBwYWRkaW5nOiAxJSAwJTtcclxufVxyXG4ubWVudWljb257XHJcblx0Y29sb3I6IzAwMDtcclxufVxyXG4uYmFja2J0bntcclxuICBtYXJnaW4tbGVmdDowJTtcclxuICBwYWRkaW5nLXRvcDoxMXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMThweDtcclxufVxyXG4uYmFja1N2ZyB7XHJcbiAgZmlsbDogIzMzMztcclxufVxyXG5cclxuLmN0aXRsZXtcclxuXHQvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGl0bGVjbGFzc3tcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuLmlvc3tcclxuICAuYmFja2J0bntcclxuICAgIG1hcmdpbi1sZWZ0OjAlO1xyXG4gICAgcGFkZGluZy10b3A6MTRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICB9XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuICAuaGVhZEJnIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICAgIHBhZGRpbmc6IDMlIDAlO1xyXG4gIH1cclxufVxyXG4uYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6ODAlO1xyXG5cdG1hcmdpbjoxMCUgYXV0bztcclxufVxyXG4ubG9nb2RpdntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZpZWxke1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmlucHV0ZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIHdpZHRoOiA4NSVcclxufVxyXG4ucGlucHV0XHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgb3BhY2l0eTogNDglO1xyXG4gIHBhZGRpbmc6IDIlIDAlIDIlIDclO1xyXG59XHJcbi5pbWdkaXZ7XHJcblx0bWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuLmJveHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5jaGlwe1xyXG4gIGJhY2tncm91bmQ6ICNFQzNCOTU7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbi5sYWJlbHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmNoaXBpbWd7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBjb2xvcjogI2ZmMDAwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "eoMh":
/*!*****************************************************!*\
  !*** ./src/app/dislikes/dislikes-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DislikesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DislikesPageRoutingModule", function() { return DislikesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dislikes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dislikes.page */ "g+Sm");




const routes = [
    {
        path: '',
        component: _dislikes_page__WEBPACK_IMPORTED_MODULE_3__["DislikesPage"]
    }
];
let DislikesPageRoutingModule = class DislikesPageRoutingModule {
};
DislikesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DislikesPageRoutingModule);



/***/ }),

/***/ "g+Sm":
/*!*******************************************!*\
  !*** ./src/app/dislikes/dislikes.page.ts ***!
  \*******************************************/
/*! exports provided: DislikesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DislikesPage", function() { return DislikesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dislikes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dislikes.page.html */ "KSQ3");
/* harmony import */ var _dislikes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dislikes.page.scss */ "R3yJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_child_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/child.service */ "ZEea");
/* harmony import */ var _services_editchild_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/editchild.service */ "l2wf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let DislikesPage = class DislikesPage {
    constructor(navCtrl, childService, editchildService, route) {
        this.navCtrl = navCtrl;
        this.childService = childService;
        this.editchildService = editchildService;
        this.route = route;
        // array=[
        // 	{ title: 'Cars'},
        //    	{ title: 'Playing with toys' },
        // ]
        this.array = [];
        this.dislikes = '';
        this.error = {
            status: false,
            message: "",
        };
    }
    ngOnInit() {
        // this.getdislikes();
    }
    goback() {
        this.navCtrl.navigateBack('/addchild');
    }
    //  getdislikes(){
    //   this.childService.dislikes.forEach(val=>{
    //   let data={
    //      title:val.likes,
    //    }
    //    this.array.push(data)
    //   })
    // }
    add() {
        if (this.dislikes) {
            // let data={
            //   title: this.dislikes,
            // }
            // this.array.push(data);
            this.childService.dislikes.push(this.dislikes);
            // this.editchildService.dislikes.push(this.dislikes);
            this.dislikes = '';
        }
        else if (!this.dislikes) {
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
        this.childService.dislikes.map((el, index) => {
            console.log('index', i);
            let splice = this.childService.dislikes.splice(i, 1);
            console.log('splice', splice);
        });
    }
};
DislikesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_child_service__WEBPACK_IMPORTED_MODULE_5__["ChildService"] },
    { type: _services_editchild_service__WEBPACK_IMPORTED_MODULE_6__["EditchildService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
DislikesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dislikes',
        template: _raw_loader_dislikes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dislikes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DislikesPage);



/***/ }),

/***/ "gRpR":
/*!*********************************************!*\
  !*** ./src/app/dislikes/dislikes.module.ts ***!
  \*********************************************/
/*! exports provided: DislikesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DislikesPageModule", function() { return DislikesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _dislikes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dislikes-routing.module */ "eoMh");
/* harmony import */ var _dislikes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dislikes.page */ "g+Sm");







let DislikesPageModule = class DislikesPageModule {
};
DislikesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dislikes_routing_module__WEBPACK_IMPORTED_MODULE_5__["DislikesPageRoutingModule"]
        ],
        declarations: [_dislikes_page__WEBPACK_IMPORTED_MODULE_6__["DislikesPage"]]
    })
], DislikesPageModule);



/***/ })

}]);
//# sourceMappingURL=dislikes-dislikes-module-es2015.js.map