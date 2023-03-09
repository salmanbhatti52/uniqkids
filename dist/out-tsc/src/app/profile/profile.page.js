import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { RequestpopupPage } from '../requestpopup/requestpopup.page';
let ProfilePage = class ProfilePage {
    constructor(navCtrl, route, modal, loading, rest) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.modal = modal;
        this.loading = loading;
        this.rest = rest;
        this.picUrl = 'assets/imgs/logo1.png';
        this.error = {
            status: false,
            message: "",
        };
    }
    ngOnInit() {
        this.page = this.route.snapshot.paramMap.get('page');
        console.log('page coming', this.page);
        this.caregiverid = this.route.snapshot.paramMap.get('userid');
        console.log('userid:', this.caregiverid);
        this.getdetails();
    }
    goback() {
        if (this.page == 'caregiver') {
            this.navCtrl.navigateBack('/caregiver');
        }
        else if (this.page == 'requests') {
            this.navCtrl.navigateBack('/requests');
        }
        else if (this.page == 'homescreen') {
            this.navCtrl.navigateBack('/homescreen');
        }
    }
    next() {
        this.navCtrl.navigateForward('/cgprofile');
    }
    openmodel() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: RequestpopupPage,
                componentProps: {
                    caregiverid: this.caregiverid,
                },
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    getdetails() {
        let senddata = {
            userId: this.caregiverid,
        };
        this.rest.sendRequest("get_profile_details", senddata).subscribe((data) => {
            console.log('get_profile_details data::', data);
            if (data.status == 'success') {
                console.log('suucesssss');
                this.Id = data.data.users_id;
                this.fname = data.data.first_name;
                this.lname = data.data.last_name;
                this.email = data.data.email;
                if (data.data.profile_picture == '' || data.data.profile_picture == null) {
                    this.picUrl = this.picUrl;
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
    sendmsg() {
        this.navCtrl.navigateForward(['inbox', {
                page: 'profile',
                id: this.Id
            }]);
    }
};
ProfilePage = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.page.html',
        styleUrls: ['./profile.page.scss'],
    })
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map