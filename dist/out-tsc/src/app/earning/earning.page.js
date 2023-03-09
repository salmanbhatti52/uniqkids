import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as moment from 'moment';
let EarningPage = class EarningPage {
    constructor(navCtrl, alertController, loading, rest) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.loading = loading;
        this.rest = rest;
        this.earningarray = [];
    }
    ngOnInit() {
        this.caregiverid = localStorage.getItem('uid');
    }
    ionViewWillEnter() {
        if (this.requestsType) {
            if (this.requestsType === 'pending') {
                this.mySegment.nativeElement.children[0].click();
                this.getuserdetails();
                this.earningarray = [];
            }
            if (this.requestsType === 'completed') {
                this.mySegment.nativeElement.children[1].click();
                this.getuserdetails();
                this.earningarray = [];
            }
        }
        else {
            this.requestsType = 'pending';
            this.mySegment.nativeElement.children[0].click();
            this.getuserdetails();
            this.earningarray = [];
        }
    }
    segmentChanged(ev) {
        if (ev.detail.value === 'pending') {
            this.requestsType = 'pending';
        }
        if (ev.detail.value === 'completed') {
            this.requestsType = 'completed';
        }
        localStorage.setItem('requestType', this.requestsType);
    }
    getuserdetails() {
        this.earningarray = [];
        this.loading.loadershow();
        this.rest.sendRequest("caregiver_earnings", { caregiverId: this.caregiverid }).subscribe((data) => {
            console.log('caregiver_earnings:', data);
            this.loading.hideLoader();
            data.data.forEach(val => {
                let date = moment(val.date).format('MMMM,YYYY');
                console.log('date', date);
                let obj = {
                    caregiverid: val.caregiver_details.users_id,
                    hiringid: val.hiring_id,
                    parentid: val.parent_id,
                    profile: val.parent_details.profile_picture,
                    fname: val.parent_details.first_name,
                    lname: val.parent_details.last_name,
                    childname: val.
                        totalamount, val, : .total_payment,
                    date: date,
                    status: val.status
                };
                this.earningarray.push(obj);
            });
            console.log('paymentarray', this.earningarray);
        });
    }
    next() {
        // let date=moment(val.date).format('MMMM,YYYY')
        // console.log('date',date)
        this.navCtrl.navigateForward('/paymenthistory1');
    }
};
__decorate([
    ViewChild('mySegment', { read: ElementRef })
], EarningPage.prototype, "mySegment", void 0);
EarningPage = __decorate([
    Component({
        selector: 'app-earning',
        templateUrl: './earning.page.html',
        styleUrls: ['./earning.page.scss'],
    })
], EarningPage);
export { EarningPage };
//# sourceMappingURL=earning.page.js.map