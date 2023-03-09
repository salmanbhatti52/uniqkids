import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let EditsnackPage = class EditsnackPage {
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
        this.navCtrl.navigateBack('/editchild');
    }
    snacktime() {
        console.log('snackarray', this.editchildService.snack);
        this.editchildService.snack.forEach(val => {
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
            this.editchildService.snack.push(data);
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
        this.editchildService.snack.map((el, index) => {
            console.log('index', i);
            let splice = this.editchildService.snack.splice(i, 1);
            console.log('splice', splice);
        });
    }
};
__decorate([
    ViewChild('startSlides')
], EditsnackPage.prototype, "startSlides", void 0);
__decorate([
    ViewChild('endSlides')
], EditsnackPage.prototype, "endSlides", void 0);
EditsnackPage = __decorate([
    Component({
        selector: 'app-editsnack',
        templateUrl: './editsnack.page.html',
        styleUrls: ['./editsnack.page.scss'],
    })
], EditsnackPage);
export { EditsnackPage };
//# sourceMappingURL=editsnack.page.js.map