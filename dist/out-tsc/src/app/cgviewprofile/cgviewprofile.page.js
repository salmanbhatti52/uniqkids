import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CgviewprofilePage = class CgviewprofilePage {
    constructor(navCtrl, menuCtrl, loading, rest) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loading = loading;
        this.rest = rest;
        this.picUrl = 'assets/imgs/plogo.png';
        this.error = {
            status: false,
            message: "",
        };
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.userid = localStorage.getItem('uid');
        console.log('userid', this.userid);
        this.accountTypeId = localStorage.getItem('accountTypeId');
        console.log('accountTypeId', this.accountTypeId);
        this.getprofiledata(this.userid);
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
        this.navCtrl.navigateForward('/cgprofile');
    }
    gotoprofile() {
        this.navCtrl.navigateForward('/profile');
    }
};
CgviewprofilePage = __decorate([
    Component({
        selector: 'app-cgviewprofile',
        templateUrl: './cgviewprofile.page.html',
        styleUrls: ['./cgviewprofile.page.scss'],
    })
], CgviewprofilePage);
export { CgviewprofilePage };
//# sourceMappingURL=cgviewprofile.page.js.map