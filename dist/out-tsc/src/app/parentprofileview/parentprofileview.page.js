import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ParentprofileviewPage = class ParentprofileviewPage {
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
        this.userid = localStorage.getItem('uid');
        console.log('userid', this.userid);
        this.accountTypeId = localStorage.getItem('accountTypeId');
        console.log('accountTypeId', this.accountTypeId);
        this.getprofiledata();
    }
    ;
    getprofiledata() {
        this.loading.loadershow();
        this.rest.sendRequest("get_profile_details", { userId: this.userid }).subscribe((data) => {
            console.log('get_profile_details data::', data);
            if (data.status == 'success') {
                console.log('suucesssss');
                this.loading.hideLoader();
                this.fname = data.data.first_name;
                this.lname = data.data.last_name;
                this.email = data.data.email;
                if (data.data.profile_picture == '' || data.data.profile_picture == null) {
                    this.picUrl = 'assets/imgs/plogo.png';
                }
                else {
                    this.picUrl = data.data.profile_picture;
                }
                if (data.data.relation_with_child == '' || data.data.relation_with_child == null) {
                    this.relationwithchild = 'Father/Mother....';
                }
                else {
                    this.relationwithchild = data.data.relation_with_child;
                }
                if (data.data.mobile_number == '' || data.data.mobile_number == null) {
                    this.mobilenumber = 'mobile number';
                }
                else {
                    this.mobilenumber = data.data.mobile_number;
                }
                if (data.data.street_address == '' || data.data.street_address == null) {
                    this.address = 'Address';
                }
                else {
                    this.address = data.data.street_address;
                }
                if (data.data.about == '' || data.data.about == null) {
                    this.about = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr';
                }
                else {
                    this.about = data.data.about;
                }
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
    ngOnInit() {
    }
    next() {
        this.navCtrl.navigateForward('/parentprofile');
    }
};
ParentprofileviewPage = __decorate([
    Component({
        selector: 'app-parentprofileview',
        templateUrl: './parentprofileview.page.html',
        styleUrls: ['./parentprofileview.page.scss'],
    })
], ParentprofileviewPage);
export { ParentprofileviewPage };
//# sourceMappingURL=parentprofileview.page.js.map