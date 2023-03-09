import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let EditeatingPage = class EditeatingPage {
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
        console.log('service medication', this.editchildService.food);
        this.getfood();
    }
    goback() {
        this.navCtrl.navigateBack('/editchild');
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
        console.log('food array', this.childService.food);
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
            this.editchildService.food.push(data);
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
        this.editchildService.food.map((el, index) => {
            console.log('index', i);
            let splice = this.editchildService.food.splice(i, 1);
            console.log('splice', splice);
        });
    }
};
__decorate([
    ViewChild('startSlides')
], EditeatingPage.prototype, "startSlides", void 0);
__decorate([
    ViewChild('endSlides')
], EditeatingPage.prototype, "endSlides", void 0);
EditeatingPage = __decorate([
    Component({
        selector: 'app-editeating',
        templateUrl: './editeating.page.html',
        styleUrls: ['./editeating.page.scss'],
    })
], EditeatingPage);
export { EditeatingPage };
//# sourceMappingURL=editeating.page.js.map