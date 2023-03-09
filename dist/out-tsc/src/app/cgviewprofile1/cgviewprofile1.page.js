import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let Cgviewprofile1Page = class Cgviewprofile1Page {
    constructor(navCtrl, loading, rest) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.rest = rest;
        this.picUrl = 'assets/imgs/plogo.png';
        this.error = {
            status: false,
            message: "",
        };
    }
    ionViewDidEnter() {
        this.userid = localStorage.getItem('uid');
        console.log('userid', this.userid);
        this.accountTypeId = localStorage.getItem('accountTypeId');
        console.log('accountTypeId', this.accountTypeId);
        this.getprofiledata(this.userid);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.profiletype) {
            if (this.profiletype === 'agency') {
                this.mySegment.nativeElement.children[0].click();
            }
            if (this.profiletype === 'caregiver') {
                this.mySegment.nativeElement.children[1].click();
            }
        }
        else {
            this.profiletype = 'agency';
            this.mySegment.nativeElement.children[0].click();
        }
    }
    segmentChanged(ev) {
        console.log('requestType value', ev.detail.value);
        let data = ev.detail.value;
        this.profiletype = data;
        if (ev.detail.value === 'agency') {
            this.profiletype = 'agency';
            // this.getprofiledata(this.userid);
        }
        if (ev.detail.value === 'caregiver') {
            this.profiletype = 'caregiver';
        }
        localStorage.setItem('profiletype', this.profiletype);
    }
    getprofiledata(userid) {
        this.loading.loadershow();
        this.rest.sendRequest("get_profile_details", { userId: userid }).subscribe((data) => {
            console.log('get_profile_details data::', data);
            if (data.status == 'success') {
                console.log('suucesssss');
                this.fname = data.data.first_name;
                this.lname = data.data.last_name;
                this.email = data.data.email;
                if (data.data.profile_picture == '' || data.data.profile_picture == null) {
                    this.picUrl = 'assets/imgs/plogo.png';
                }
                else {
                    this.picUrl = data.data.profile_picture;
                }
                if (data.data.per_hour_rate == '' || data.data.per_hour_rate == null) {
                    this.price = 'None';
                }
                else {
                    this.price = data.data.per_hour_rate;
                }
                if (data.data.mobile_number == '' || data.data.mobile_number == null) {
                    this.mobilenumber = 'None';
                }
                else {
                    this.mobilenumber = data.data.mobile_number;
                }
                if (data.data.street_address == '' || data.data.street_address == null) {
                    this.address = 'None';
                }
                else {
                    this.address = data.data.street_address;
                }
                if (data.data.about == '' || data.data.about == null) {
                    this.about = 'None';
                }
                else {
                    this.about = data.data.about;
                }
                if (data.data.bank_name == '' || data.data.bank_name == null) {
                    this.bankname = 'None';
                }
                else {
                    this.bankname = data.data.bank_name;
                }
                if (data.data.account_number == '' || data.data.account_number == null) {
                    this.accountnumber = 'None';
                }
                else {
                    this.accountnumber = data.data.account_number;
                }
                this.loading.hideLoader();
            }
            if (data.status == 'error') {
                this.loading.hideLoader();
                console.log('signup request data:', data.status);
                this.error.status = true;
                this.error.message = data.message;
                setTimeout(() => {
                    this.error.status = false;
                    this.error.message = "";
                }, 3000);
                return;
            }
        }, (err) => {
        });
    }
    completeprofile() {
        this.navCtrl.navigateForward('/cgprofile1');
    }
    gotoprofile() {
        this.navCtrl.navigateForward('/profile1');
    }
};
__decorate([
    ViewChild('mySegment', { read: ElementRef })
], Cgviewprofile1Page.prototype, "mySegment", void 0);
Cgviewprofile1Page = __decorate([
    Component({
        selector: 'app-cgviewprofile1',
        templateUrl: './cgviewprofile1.page.html',
        styleUrls: ['./cgviewprofile1.page.scss'],
    })
], Cgviewprofile1Page);
export { Cgviewprofile1Page };
//# sourceMappingURL=cgviewprofile1.page.js.map