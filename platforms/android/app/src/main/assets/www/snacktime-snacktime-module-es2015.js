(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["snacktime-snacktime-module"],{

/***/ "K6o6":
/*!*******************************************************!*\
  !*** ./src/app/snacktime/snacktime-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SnacktimePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnacktimePageRoutingModule", function() { return SnacktimePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _snacktime_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snacktime.page */ "Spk6");




const routes = [
    {
        path: '',
        component: _snacktime_page__WEBPACK_IMPORTED_MODULE_3__["SnacktimePage"]
    }
];
let SnacktimePageRoutingModule = class SnacktimePageRoutingModule {
};
SnacktimePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SnacktimePageRoutingModule);



/***/ }),

/***/ "Spk6":
/*!*********************************************!*\
  !*** ./src/app/snacktime/snacktime.page.ts ***!
  \*********************************************/
/*! exports provided: SnacktimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnacktimePage", function() { return SnacktimePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_snacktime_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./snacktime.page.html */ "UTut");
/* harmony import */ var _snacktime_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snacktime.page.scss */ "XtL3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_child_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/child.service */ "ZEea");
/* harmony import */ var _services_editchild_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/editchild.service */ "l2wf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let SnacktimePage = class SnacktimePage {
    constructor(navCtrl, childService, editchildService, route) {
        this.navCtrl = navCtrl;
        this.childService = childService;
        this.editchildService = editchildService;
        this.route = route;
        this.loaded = false;
        this.option = {
            loop: true,
            direction: 'vertical',
            slidesPerView: 3,
            centeredSlides: true,
            centeredSlidesBounds: true
        };
        this.hours = [];
        this.mints = [];
        this.array = [];
        this.snackname = '';
        this.Time = '';
        this.error = {
            status: false,
            message: "",
        };
        this.printTimeErrorBoolen = false;
    }
    ngOnInit() {
        this.hours = Array.from({ length: 12 }, (v, k) => k + 1);
        this.mints = Array.from({ length: 60 }, (v, k) => k + 0);
        // this.page=this.editchildService.editpage
        this.snacktime();
    }
    getStartHoures() {
        var _a, _b, _c;
        if (this.loaded) {
            this.sHours = (_a = document.querySelector(".s_hours .swiper-slide-active p")) === null || _a === void 0 ? void 0 : _a.textContent;
            this.sMints = (_b = document.querySelector(".s_mints .swiper-slide-active p")) === null || _b === void 0 ? void 0 : _b.textContent;
            this.sV = (_c = document.querySelector(".s_v .swiper-slide-active p")) === null || _c === void 0 ? void 0 : _c.textContent;
            var calStartTime = this.sHours + ':' + this.sMints + ' ' + this.sV;
            console.log('time', calStartTime);
        }
    }
    TimeComparisionFun(dayFilter) {
        this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
        this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
        this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
        this.Time = this.sHours + ':' + this.sMints + ' ' + this.sV;
        console.log(this.Time, "----------", 'endTime');
    }
    goback() {
        this.navCtrl.navigateBack('/addchild');
    }
    snacktime() {
        console.log('snackarray', this.childService.snack);
        this.childService.snack.forEach(val => {
            let data = {
                snackName: val.snackName,
                snackTime: val.snackTime
            };
            this.array.push(data);
        });
    }
    add() {
        this.TimeComparisionFun("dayFilter");
        if (this.snackname && this.Time) {
            let data = {
                snackTime: this.Time,
                snackName: this.snackname
            };
            this.array.push(data);
            this.childService.snack.push(data);
            // this.editchildService.snack.push(data);
            this.snackname = '';
        }
        else if (!this.snackname) {
            console.log('empty');
            this.error.status = true;
            this.error.message = "Field is required";
            setTimeout(() => {
                this.error.status = false;
                this.error.message = "";
            }, 2000);
        }
        if (!this.Time) {
            console.log('empty time');
        }
    }
    del(i) {
        console.log('index', i);
        this.childService.snack.map((el, index) => {
            console.log('index', i);
            let splice = this.childService.snack.splice(i, 1);
            console.log('splice', splice);
        });
    }
};
SnacktimePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_child_service__WEBPACK_IMPORTED_MODULE_5__["ChildService"] },
    { type: _services_editchild_service__WEBPACK_IMPORTED_MODULE_6__["EditchildService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
SnacktimePage.propDecorators = {
    startSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['startSlides',] }],
    endSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['endSlides',] }]
};
SnacktimePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-snacktime',
        template: _raw_loader_snacktime_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_snacktime_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SnacktimePage);



/***/ }),

/***/ "UTut":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/snacktime/snacktime.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t\t  <ion-toolbar class=\"headBgGlobal\">\r\n\t\t    <ion-buttons slot=\"start\" class=\"backbtn\">\r\n\t\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t\t  </ion-buttons>\r\n\t\t  <ion-title class=\"ctitle\">Snack Time</ion-title>\r\n\t\t</ion-toolbar>\r\n</ion-header> -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col class=\"backbtn\" size=\"2\">\r\n        <div>\r\n          <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"8\">\r\n        <ion-text class=\"ctitle\">Snack Time</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\">\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\t<div class=\"wrapper\">\r\n\t\t\t<ion-row class=\"bg_white\">\r\n    <ion-col size=\"2\"></ion-col>\r\n    <ion-col size=\"2\" class=\"vertical_list\">\r\n      <ion-slides (ionSlideDidChange)=\"getStartHoures()\" class=\"vertical_slider s_hours\" [options]=\"option\"  >\r\n        <ion-slide  *ngFor=\"let i of hours\" >\r\n          <ng-container *ngIf=\"i<=9\">\r\n            <p>0{{i}}</p>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"i>9\">\r\n            <p>{{i}}</p>\r\n          </ng-container>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-col>\r\n    <ion-col size=\"1\"></ion-col>\r\n    <ion-col size=\"2\" class=\"vertical_list\">\r\n      <ion-slides (ionSlideDidChange)=\"getStartHoures()\" class=\"vertical_slider s_mints\" [options]=\"option\"  >\r\n        <ion-slide  *ngFor=\"let i of mints\" >\r\n          <ng-container *ngIf=\"i<=9\">\r\n            <p>0{{i}}</p>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"i>9\">\r\n            <p>{{i}}</p>\r\n          </ng-container>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-col>\r\n    <ion-col size=\"1\"></ion-col>\r\n    <ion-col size=\"2\" class=\"vertical_list s_v\">\r\n      <ion-slides (ionSlideDidChange)=\"getStartHoures()\" class=\"vertical_slider\" [options]=\"option\"  >\r\n        <ion-slide>\r\n          <p style=\"font-size: 23px;\">AM</p>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <p style=\"font-size: 23px;\">PM</p>\r\n        </ion-slide>\r\n        <!-- <ion-slide>\r\n          <p style=\"font-size: 23px;\">AM</p>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <p style=\"font-size: 23px;\">PM</p>\r\n        </ion-slide> -->\r\n      </ion-slides>\r\n    </ion-col>\r\n  </ion-row>\r\n\t\t<div class=\"field\">\r\n\t\t\t<div class=\"inputdiv\">\r\n\t\t\t\t<div class=\"pinput\">\r\n\t\t\t\t\t<ion-input placeholder=\"Enter snack name\" type=\"text\" [(ngModel)]=\"snackname\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"imgdiv\" (click)=\"add()\">\r\n\t\t\t\t<img src=\"assets/imgs/icons/plus.svg\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n    <p *ngIf=\"error.status\" class=\"error\">\r\n      {{error.message}}\r\n    </p>\r\n\t\t\r\n\t\t<div class=\"boxdiv\">\r\n\t\t\t<div class=\"left\" *ngFor=\"let arr of childService.snack;let i = index;\">\r\n\t\t\t\t<div class=\"box1\">\r\n\t\t\t\t\t<div class=\"innerbox\">\r\n            <div class=\"icondiv\" (click)=\"del(i)\"><ion-icon name=\"close\"></ion-icon></div>\r\n\t\t\t\t\t\t<div class=\"text1\">{{arr.snackTime}}</div>\r\n\t\t\t\t\t\t<div class=\"text2\">{{arr.snackName}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"right\">\r\n\t\t\t\t<div class=\"box1\">\r\n\t\t\t\t\t<div class=\"innerbox\">\r\n\t\t\t\t\t\t<div class=\"text1\">8:30 AM</div>\r\n\t\t\t\t\t\t<div class=\"text2\">Snack Name</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div> -->\r\n\t\t\t<div class=\"clear\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "XtL3":
/*!***********************************************!*\
  !*** ./src/app/snacktime/snacktime.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 11px;\n  padding-left: 18px;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 14px;\n  padding-left: 18px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 10% auto;\n}\n\n.field {\n  display: flex;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  background: #FFFFFF;\n  width: 85%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n  padding: 2% 0% 2% 7%;\n}\n\n.imgdiv {\n  margin-left: 7%;\n  margin-top: 4%;\n}\n\n.boxdiv {\n  margin-top: 5%;\n}\n\n.box1 {\n  background: #fff;\n  /*box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;*/\n  box-shadow: #0000001a 2px 5px 5px;\n  border-radius: 14px;\n}\n\n.text1 {\n  font-weight: 600;\n  font-size: 22px;\n  color: #000000;\n}\n\n.text2 {\n  font-weight: 500;\n  font-size: 14px;\n  color: #FFBF05;\n  margin-top: 5%;\n}\n\n.innerbox {\n  text-align: center;\n  padding: 10% 13%;\n}\n\n.icondiv {\n  background: #fff;\n  box-shadow: #0000001a 2px 5px 5px;\n  border-radius: 90px;\n  width: 24px;\n  height: 20px;\n  margin-left: 80%;\n}\n\n.icondiv img {\n  padding: 2px;\n}\n\n.left {\n  width: 45%;\n  float: left;\n  margin-right: 5%;\n  margin-top: 5%;\n}\n\n.right {\n  width: 45%;\n  float: left;\n  margin-left: 5%;\n}\n\n.clear {\n  clear: both;\n}\n\n.bg_white {\n  padding: 0.6em 0em;\n  /*background: #fff;*/\n}\n\n.vertical_list {\n  text-align: center;\n  height: 100px;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding: 0em 6px;\n}\n\n.vertical_slider ion-slide {\n  margin-left: 0em !important;\n  color: #B0B0B0;\n  /*border-top: 1px solid #B0B0B0;\n  border-bottom: 1px solid #B0B0B0;*/\n  font-size: 40px;\n  /* padding: 1em 0em; */\n}\n\n.vertical_slider ion-slide.swiper-slide-active {\n  color: #000 !important;\n  font-size: 44px !important;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNuYWNrdGltZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNDLFdBQUE7QUFFRDs7QUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBREE7RUFFRSxlQUFBO0VBQ0UsZ0JBQUE7QUFHSjs7QUFEQTtFQUNDLGtCQUFBO0VBQW9CLGdCQUFBO0FBS3JCOztBQUZFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBTXRCOztBQUpFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSEE7RUFDRSxxQkFBQTtBQU1GOztBQUpBO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FBT0Q7O0FBTEE7RUFDQyxhQUFBO0FBUUQ7O0FBTkE7RUFDQyxhQUFBO0VBQ0csbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFTSjs7QUFQQTtFQUVDLFdBQUE7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQVNGOztBQVBBO0VBQ0MsZUFBQTtFQUNHLGNBQUE7QUFVSjs7QUFSQTtFQUVJLGNBQUE7QUFVSjs7QUFSQTtFQUNDLGdCQUFBO0VBQ0csNkNBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBV0o7O0FBVEE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBWUQ7O0FBVkE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQWFEOztBQVhBO0VBQ0Msa0JBQUE7RUFDQyxnQkFBQTtBQWNGOztBQVpBO0VBQ0UsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQWVKOztBQWJBO0VBQ0UsWUFBQTtBQWdCRjs7QUFkQTtFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0FBaUJGOztBQWZBO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBa0JEOztBQWhCQTtFQUNDLFdBQUE7QUFtQkQ7O0FBaEJBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFvQko7O0FBZkE7RUFDSSwyQkFBQTtFQUNBLGNBQUE7RUFDQTtvQ0FBQTtFQUVBLGVBQUE7RUFDQSxzQkFBQTtBQWtCSjs7QUFkQTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7QUFpQko7O0FBZEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQWlCRiIsImZpbGUiOiJzbmFja3RpbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6IDElIDAlO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcbi5iYWNrYnRue1xyXG4gIG1hcmdpbi1sZWZ0OjAlO1xyXG4gIHBhZGRpbmctdG9wOjExcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG59XHJcbi5iYWNrU3ZnIHtcclxuICBmaWxsOiAjMzMzO1xyXG59XHJcblxyXG4uY3RpdGxle1xyXG5cdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50aXRsZWNsYXNze1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4uaW9ze1xyXG4gIC5iYWNrYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6MCU7XHJcbiAgICBwYWRkaW5nLXRvcDoxNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gIH1cclxuXHQudGl0bGVjbGFzc3tcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDExcHg7XHJcblx0fVxyXG4gIC5oZWFkQmcge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gICAgcGFkZGluZzogMyUgMCU7XHJcbiAgfVxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6ODAlO1xyXG5cdG1hcmdpbjoxMCUgYXV0bztcclxufVxyXG4uZmllbGR7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG4uaW5wdXRkaXZ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgd2lkdGg6IDg1JVxyXG59XHJcbi5waW5wdXRcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBvcGFjaXR5OiA0OCU7XHJcbiAgcGFkZGluZzogMiUgMCUgMiUgNyU7XHJcbn1cclxuLmltZ2RpdntcclxuXHRtYXJnaW4tbGVmdDogNyU7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG4uYm94ZGl2e1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5ib3gxe1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAvKmJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDM1JSkgMHB4IDVweCAxNXB4OyovXHJcbiAgICBib3gtc2hhZG93OiAjMDAwMDAwMWEgMnB4IDVweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcbi50ZXh0MXtcclxuXHRmb250LXdlaWdodDo2MDA7XHJcblx0Zm9udC1zaXplOjIycHg7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxufVxyXG4udGV4dDJ7XHJcblx0Zm9udC13ZWlnaHQ6NTAwO1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG5cdGNvbG9yOiNGRkJGMDU7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmlubmVyYm94e1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMCUgMTMlO1xyXG59XHJcbi5pY29uZGl2e1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogIzAwMDAwMDFhIDJweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XHJcbn1cclxuLmljb25kaXYgaW1ne1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG4ubGVmdHtcclxuXHR3aWR0aDogNDUlO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLnJpZ2h0e1xyXG5cdHdpZHRoOiA0NSU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0bWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbi5jbGVhcntcclxuXHRjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmJnX3doaXRle1xyXG4gICAgcGFkZGluZzogMC42ZW0gMGVtO1xyXG4gICAgLypiYWNrZ3JvdW5kOiAjZmZmOyovXHJcbn1cclxuLnZlcnRpY2FsX2xpc3R7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBhZGRpbmc6MGVtIDZweDtcclxufVxyXG4udmVydGljYWxfbGlzdCBwIHtcclxuICAgIC8vbWFyZ2luOiAwcHg7XHJcbn1cclxuLnZlcnRpY2FsX3NsaWRlciBpb24tc2xpZGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMGVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojQjBCMEIwO1xyXG4gICAgLypib3JkZXItdG9wOiAxcHggc29saWQgI0IwQjBCMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQjBCMEIwOyovXHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAvKiBwYWRkaW5nOiAxZW0gMGVtOyAqL1xyXG5cclxufVxyXG5cclxuLnZlcnRpY2FsX3NsaWRlciBpb24tc2xpZGUuc3dpcGVyLXNsaWRlLWFjdGl2ZXtcclxuICAgIGNvbG9yOiMwMDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogNDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiAjZmYwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */");

/***/ }),

/***/ "pni9":
/*!***********************************************!*\
  !*** ./src/app/snacktime/snacktime.module.ts ***!
  \***********************************************/
/*! exports provided: SnacktimePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnacktimePageModule", function() { return SnacktimePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _snacktime_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./snacktime-routing.module */ "K6o6");
/* harmony import */ var _snacktime_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./snacktime.page */ "Spk6");







let SnacktimePageModule = class SnacktimePageModule {
};
SnacktimePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _snacktime_routing_module__WEBPACK_IMPORTED_MODULE_5__["SnacktimePageRoutingModule"]
        ],
        declarations: [_snacktime_page__WEBPACK_IMPORTED_MODULE_6__["SnacktimePage"]]
    })
], SnacktimePageModule);



/***/ })

}]);
//# sourceMappingURL=snacktime-snacktime-module-es2015.js.map