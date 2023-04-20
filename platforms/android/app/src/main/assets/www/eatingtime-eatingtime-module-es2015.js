(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eatingtime-eatingtime-module"],{

/***/ "6vi8":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eatingtime/eatingtime.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t\t  <ion-toolbar class=\"headBgGlobal\">\r\n\t\t    <ion-buttons slot=\"start\" class=\"backbtn\">\r\n\t\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t\t  </ion-buttons>\r\n\t\t  <ion-title class=\"ctitle\">Eating Time</ion-title>\r\n\t\t</ion-toolbar>\r\n</ion-header> -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col class=\"backbtn\" size=\"2\">\r\n        <div>\r\n          <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"8\">\r\n        <ion-text class=\"ctitle\">Eating Time</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\">\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\t<div class=\"wrapper\">\r\n\t\t\t<ion-row class=\"bg_white\">\r\n    <ion-col size=\"2\"></ion-col>\r\n    <ion-col size=\"2\" class=\"vertical_list\">\r\n      <ion-slides (ionSlideDidChange)=\"getStartHoures()\" class=\"vertical_slider s_hours\" [options]=\"option\"  >\r\n        <ion-slide  *ngFor=\"let i of hours\" >\r\n          <ng-container *ngIf=\"i<=9\">\r\n            <p>0{{i}}</p>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"i>9\">\r\n            <p>{{i}}</p>\r\n          </ng-container>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-col>\r\n    <ion-col size=\"1\"></ion-col>\r\n    <ion-col size=\"2\" class=\"vertical_list\">\r\n      <ion-slides (ionSlideDidChange)=\"getStartHoures()\" class=\"vertical_slider s_mints\" [options]=\"option\"  >\r\n        <ion-slide  *ngFor=\"let i of mints\" >\r\n          <ng-container *ngIf=\"i<=9\">\r\n            <p>0{{i}}</p>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"i>9\">\r\n            <p>{{i}}</p>\r\n          </ng-container>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-col>\r\n    <ion-col size=\"1\"></ion-col>\r\n    <ion-col size=\"2\" class=\"vertical_list s_v\">\r\n      <ion-slides (ionSlideDidChange)=\"getStartHoures()\" class=\"vertical_slider\" [options]=\"option\"  >\r\n        <ion-slide>\r\n          <p style=\"font-size: 23px;\">AM</p>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <p style=\"font-size: 23px;\">PM</p>\r\n        </ion-slide>\r\n        <!-- <ion-slide>\r\n          <p style=\"font-size: 23px;\">AM</p>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <p style=\"font-size: 23px;\">PM</p>\r\n        </ion-slide> -->\r\n      </ion-slides>\r\n    </ion-col>\r\n  </ion-row>\r\n\t\t<div class=\"field\">\r\n\t\t\t<div class=\"inputdiv\">\r\n\t\t\t\t<div class=\"pinput\">\r\n\t\t\t\t\t<ion-input placeholder=\"Enter food name\" type=\"text\" [(ngModel)]=\"foodname\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"imgdiv\" (click)=\"add()\">\r\n\t\t\t\t<img src=\"assets/imgs/icons/plus.svg\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n    <p *ngIf=\"error.status\" class=\"error\">\r\n      {{error.message}}\r\n    </p>\r\n    \r\n\t\t\r\n\t\t<div class=\"boxdiv\">\r\n\t\t\t<div class=\"left\" *ngFor=\"let arr of childService.food;let i = index;\">\r\n\t\t\t\t<div class=\"box1\">\r\n\t\t\t\t\t<div class=\"innerbox\">\r\n            <div class=\"icondiv\" (click)=\"del(i)\"><ion-icon name=\"close\"></ion-icon></div>\r\n\t\t\t\t\t\t<div class=\"text1\">{{arr.eatingTime}}</div>\r\n\t\t\t\t\t\t<div class=\"text2\">{{arr.foodName}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"right\">\r\n\t\t\t\t<div class=\"box1\">\r\n\t\t\t\t\t<div class=\"innerbox\">\r\n\t\t\t\t\t\t<div class=\"text1\">8:30 AM</div>\r\n\t\t\t\t\t\t<div class=\"text2\">Food Name</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div> -->\r\n\t\t\t<div class=\"clear\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Bg96":
/*!*********************************************************!*\
  !*** ./src/app/eatingtime/eatingtime-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EatingtimePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EatingtimePageRoutingModule", function() { return EatingtimePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _eatingtime_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eatingtime.page */ "YuSv");




const routes = [
    {
        path: '',
        component: _eatingtime_page__WEBPACK_IMPORTED_MODULE_3__["EatingtimePage"]
    }
];
let EatingtimePageRoutingModule = class EatingtimePageRoutingModule {
};
EatingtimePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EatingtimePageRoutingModule);



/***/ }),

/***/ "YuSv":
/*!***********************************************!*\
  !*** ./src/app/eatingtime/eatingtime.page.ts ***!
  \***********************************************/
/*! exports provided: EatingtimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EatingtimePage", function() { return EatingtimePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_eatingtime_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./eatingtime.page.html */ "6vi8");
/* harmony import */ var _eatingtime_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eatingtime.page.scss */ "g6ri");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_editchild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/editchild.service */ "l2wf");
/* harmony import */ var _services_child_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/child.service */ "ZEea");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let EatingtimePage = class EatingtimePage {
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
        this.foodname = '';
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
        console.log('service medication', this.childService.medication);
        this.getfood();
    }
    goback() {
        this.navCtrl.navigateBack('/addchild');
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
    getfood() {
        console.log('food array', this.editchildService.food);
        this.editchildService.food.forEach(val => {
            let data = {
                medicationName: val.foodName,
                medicationTime: val.eatingTime
            };
            this.array.push(data);
        });
    }
    add() {
        this.TimeComparisionFun("dayFilter");
        if (this.foodname && this.Time) {
            let data = {
                eatingTime: this.Time,
                foodName: this.foodname
            };
            this.array.push(data);
            this.childService.food.push(data);
            // this.editchildService.food.push(data);
            this.foodname = '';
        }
        else if (!this.foodname) {
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
        this.childService.food.map((el, index) => {
            console.log('index', i);
            let splice = this.childService.food.splice(i, 1);
            console.log('splice', splice);
        });
    }
};
EatingtimePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_child_service__WEBPACK_IMPORTED_MODULE_6__["ChildService"] },
    { type: _services_editchild_service__WEBPACK_IMPORTED_MODULE_5__["EditchildService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
EatingtimePage.propDecorators = {
    startSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['startSlides',] }],
    endSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['endSlides',] }]
};
EatingtimePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-eatingtime',
        template: _raw_loader_eatingtime_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_eatingtime_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EatingtimePage);



/***/ }),

/***/ "g6ri":
/*!*************************************************!*\
  !*** ./src/app/eatingtime/eatingtime.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 11px;\n  padding-left: 18px;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 14px;\n  padding-left: 18px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 10% auto;\n}\n\n.field {\n  display: flex;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  background: #FFFFFF;\n  width: 85%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n  padding: 2% 0% 2% 7%;\n}\n\n.imgdiv {\n  margin-left: 7%;\n  margin-top: 4%;\n}\n\n.boxdiv {\n  margin-top: 5%;\n}\n\n.box1 {\n  background: #fff;\n  /*box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;*/\n  box-shadow: #0000001a 2px 5px 5px;\n  border-radius: 14px;\n}\n\n.text1 {\n  font-weight: 600;\n  font-size: 22px;\n  color: #000000;\n}\n\n.text2 {\n  font-weight: 500;\n  font-size: 14px;\n  color: #FFBF05;\n  margin-top: 5%;\n}\n\n.innerbox {\n  text-align: center;\n  padding: 10% 13%;\n}\n\n.icondiv {\n  background: #fff;\n  box-shadow: #0000001a 2px 5px 5px;\n  border-radius: 90px;\n  width: 24px;\n  height: 20px;\n  margin-left: 80%;\n}\n\n.icondiv img {\n  padding: 2px;\n}\n\n.left {\n  width: 45%;\n  float: left;\n  margin-right: 5%;\n  margin-top: 5%;\n}\n\n.right {\n  width: 45%;\n  float: left;\n  margin-left: 5%;\n}\n\n.clear {\n  clear: both;\n}\n\n.bg_white {\n  padding: 0.6em 0em;\n  /*background: #fff;*/\n}\n\n.vertical_list {\n  text-align: center;\n  height: 100px;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding: 0em 6px;\n}\n\n.vertical_slider ion-slide {\n  margin-left: 0em !important;\n  color: #B0B0B0;\n  /*border-top: 1px solid #B0B0B0;\n  border-bottom: 1px solid #B0B0B0;*/\n  font-size: 40px;\n  /* padding: 1em 0em; */\n}\n\n.vertical_slider ion-slide.swiper-slide-active {\n  color: #000 !important;\n  font-size: 44px !important;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVhdGluZ3RpbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDQyxXQUFBO0FBRUQ7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQUFBO0VBRUUsZUFBQTtFQUNFLGdCQUFBO0FBRUo7O0FBQUE7RUFDQyxrQkFBQTtFQUFvQixnQkFBQTtBQUlyQjs7QUFERTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkM7RUFDQyxrQkFBQTtFQUFvQixpQkFBQTtBQUt0Qjs7QUFIRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUZBO0VBQ0UscUJBQUE7QUFLRjs7QUFIQTtFQUNDLFVBQUE7RUFDQSxnQkFBQTtBQU1EOztBQUpBO0VBQ0MsYUFBQTtBQU9EOztBQUxBO0VBQ0MsYUFBQTtFQUNHLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBUUo7O0FBTkE7RUFFQyxXQUFBO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFRRjs7QUFOQTtFQUNDLGVBQUE7RUFDRyxjQUFBO0FBU0o7O0FBUEE7RUFFSSxjQUFBO0FBU0o7O0FBUEE7RUFDQyxnQkFBQTtFQUNHLDZDQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBQVVKOztBQVJBO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVdEOztBQVRBO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFZRDs7QUFWQTtFQUNDLGtCQUFBO0VBQ0MsZ0JBQUE7QUFhRjs7QUFYQTtFQUNFLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFjSjs7QUFaQTtFQUNFLFlBQUE7QUFlRjs7QUFiQTtFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0FBZ0JGOztBQWRBO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBaUJEOztBQWZBO0VBQ0MsV0FBQTtBQWtCRDs7QUFmQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFrQko7O0FBaEJBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBbUJKOztBQWRBO0VBQ0ksMkJBQUE7RUFDQSxjQUFBO0VBQ0E7b0NBQUE7RUFFQSxlQUFBO0VBQ0Esc0JBQUE7QUFpQko7O0FBYkE7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0FBZ0JKOztBQWJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFnQkYiLCJmaWxlIjoiZWF0aW5ndGltZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgcGFkZGluZzoxJSAwJTtcclxufVxyXG4ubWVudWljb257XHJcblx0Y29sb3I6IzAwMDtcclxufVxyXG4uYmFja2J0bntcclxuICBtYXJnaW4tbGVmdDowJTtcclxuICBwYWRkaW5nLXRvcDoxMXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMThweDtcclxufVxyXG4uYmFja1N2ZyB7XHJcbiAgZmlsbDogIzMzMztcclxufVxyXG5cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcbiAgLmJhY2tidG57XHJcbiAgICBtYXJnaW4tbGVmdDowJTtcclxuICAgIHBhZGRpbmctdG9wOjE0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbiAgfVxyXG5cdC50aXRsZWNsYXNze1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTFweDtcclxuXHR9XHJcbiAgLmhlYWRCZyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgICBwYWRkaW5nOjMlIDAlO1xyXG4gIH1cclxufVxyXG4uYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbi53cmFwcGVye1xyXG5cdHdpZHRoOjgwJTtcclxuXHRtYXJnaW46MTAlIGF1dG87XHJcbn1cclxuLmZpZWxke1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmlucHV0ZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIHdpZHRoOiA4NSVcclxufVxyXG4ucGlucHV0XHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgb3BhY2l0eTogNDglO1xyXG4gIHBhZGRpbmc6IDIlIDAlIDIlIDclO1xyXG59XHJcbi5pbWdkaXZ7XHJcblx0bWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuLmJveGRpdntcclxuXHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4uYm94MXtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLypib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAzNSUpIDBweCA1cHggMTVweDsqL1xyXG4gICAgYm94LXNoYWRvdzogIzAwMDAwMDFhIDJweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG4udGV4dDF7XHJcblx0Zm9udC13ZWlnaHQ6NjAwO1xyXG5cdGZvbnQtc2l6ZToyMnB4O1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuLnRleHQye1xyXG5cdGZvbnQtd2VpZ2h0OjUwMDtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRjb2xvcjojRkZCRjA1O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5pbm5lcmJveHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTAlIDEzJTtcclxufVxyXG4uaWNvbmRpdntcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6ICMwMDAwMDAxYSAycHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA5MHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogODAlO1xyXG59XHJcbi5pY29uZGl2IGltZ3tcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuLmxlZnR7XHJcblx0d2lkdGg6IDQ1JTtcclxuXHRmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5yaWdodHtcclxuXHR3aWR0aDogNDUlO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG4uY2xlYXJ7XHJcblx0Y2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5iZ193aGl0ZXtcclxuICAgIHBhZGRpbmc6IDAuNmVtIDBlbTtcclxuICAgIC8qYmFja2dyb3VuZDogI2ZmZjsqL1xyXG59XHJcbi52ZXJ0aWNhbF9saXN0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBwYWRkaW5nOjBlbSA2cHg7XHJcbn1cclxuLnZlcnRpY2FsX2xpc3QgcCB7XHJcbiAgICAvL21hcmdpbjogMHB4O1xyXG59XHJcbi52ZXJ0aWNhbF9zbGlkZXIgaW9uLXNsaWRle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6I0IwQjBCMDtcclxuICAgIC8qYm9yZGVyLXRvcDogMXB4IHNvbGlkICNCMEIwQjA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0IwQjBCMDsqL1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgLyogcGFkZGluZzogMWVtIDBlbTsgKi9cclxuXHJcbn1cclxuXHJcbi52ZXJ0aWNhbF9zbGlkZXIgaW9uLXNsaWRlLnN3aXBlci1zbGlkZS1hY3RpdmV7XHJcbiAgICBjb2xvcjojMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDQ0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBjb2xvcjogI2ZmMDAwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "mhrQ":
/*!*************************************************!*\
  !*** ./src/app/eatingtime/eatingtime.module.ts ***!
  \*************************************************/
/*! exports provided: EatingtimePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EatingtimePageModule", function() { return EatingtimePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _eatingtime_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eatingtime-routing.module */ "Bg96");
/* harmony import */ var _eatingtime_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eatingtime.page */ "YuSv");







let EatingtimePageModule = class EatingtimePageModule {
};
EatingtimePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _eatingtime_routing_module__WEBPACK_IMPORTED_MODULE_5__["EatingtimePageRoutingModule"]
        ],
        declarations: [_eatingtime_page__WEBPACK_IMPORTED_MODULE_6__["EatingtimePage"]]
    })
], EatingtimePageModule);



/***/ })

}]);
//# sourceMappingURL=eatingtime-eatingtime-module-es2015.js.map