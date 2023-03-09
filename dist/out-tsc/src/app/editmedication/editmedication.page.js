import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let EditmedicationPage = class EditmedicationPage {
    constructor(navCtrl, editchildService, route) {
        this.navCtrl = navCtrl;
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
        this.medicationname = '';
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
        this.medication = this.route.snapshot.params['medication'];
        this.medicationarray = JSON.parse(this.medication);
        console.log('medication get:', this.medicationarray);
        console.log('service medication', this.editchildService.medication);
        this.getmedication();
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
    getmedication() {
        console.log('medarray', this.medicationarray);
        // this.medicationarray.forEach(val=>{
        // let data={
        //    medicationName:val.medicationname,
        //    medicationTime:val.medicationtime
        //  }
        //  this.array.push(data)
        // })
        this.editchildService.medication.forEach(val => {
            let data = {
                medicationName: val.medicationName,
                medicationTime: val.medicationTime
            };
            this.array.push(data);
        });
    }
    add() {
        this.TimeComparisionFun("dayFilter");
        if (this.medicationname && this.Time) {
            let data = {
                medicationTime: this.Time,
                medicationName: this.medicationname
            };
            this.array.push(data);
            this.editchildService.medication.push(data);
            this.medicationname = '';
        }
        else if (!this.medicationname) {
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
        this.array.map((el, index) => {
            console.log('index', i);
            let splice = this.array.splice(i, 1);
            console.log('splice', splice);
            let splice1 = this.editchildService.medication.splice(i, 1);
            console.log('splice', splice);
        });
    }
};
__decorate([
    ViewChild('startSlides')
], EditmedicationPage.prototype, "startSlides", void 0);
__decorate([
    ViewChild('endSlides')
], EditmedicationPage.prototype, "endSlides", void 0);
EditmedicationPage = __decorate([
    Component({
        selector: 'app-editmedication',
        templateUrl: './editmedication.page.html',
        styleUrls: ['./editmedication.page.scss'],
    })
], EditmedicationPage);
export { EditmedicationPage };
//# sourceMappingURL=editmedication.page.js.map