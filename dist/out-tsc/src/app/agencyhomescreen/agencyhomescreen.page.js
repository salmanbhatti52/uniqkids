import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AgencyhomescreenPage = class AgencyhomescreenPage {
    constructor(navCtrl, loading, rest) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.rest = rest;
        this.childsarray = [];
        this.picture = false;
        this.error = {
            status: false,
            message: "",
        };
        this.accountid = localStorage.getItem("accountTypeId");
        console.log('accountid:', this.accountid);
        this.user = JSON.parse(localStorage.getItem("user"));
        console.log('user details', this.user);
        this.name = this.user.first_name;
        console.log('first_name', this.name);
        this.userid = this.user.users_id;
        console.log('caaregiver id:', this.userid);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.showchild();
    }
    showchild() {
        this.childsarray = [];
        this.loading.loadershow();
        this.rest.sendRequest("caregiver_requests", { caregiverId: this.userid }).subscribe((data) => {
            console.log('caregiver_requests', data);
            this.loading.hideLoader();
            if (data.status == 'success') {
                data.data.forEach(val => {
                    if (val.child_details.profile_picture == null || val.child_details.profile_picture == '') {
                        this.defaultProfile = 'assets/imgs/child.png';
                    }
                    else {
                        this.defaultProfile = val.child_details.profile_picture;
                    }
                    let data = {
                        parentid: val.parent_id,
                        fname: val.parent_details.first_name,
                        lname: val.parent_details.last_name,
                        age: val.child_details.age,
                        profile: this.defaultProfile,
                        childid: val.child_id,
                        childname: val.child_details.child_name,
                        starttime: val.start_time,
                        endtime: val.end_time,
                        status: val.status,
                    };
                    if (val.status == 'Active') {
                        this.childsarray.push(data);
                        this.picture = true;
                    }
                });
                console.log('requestsarray:', this.childsarray);
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
        });
    }
    goto() {
        this.navCtrl.navigateForward('/cgviewprofile1');
    }
};
AgencyhomescreenPage = __decorate([
    Component({
        selector: 'app-agencyhomescreen',
        templateUrl: './agencyhomescreen.page.html',
        styleUrls: ['./agencyhomescreen.page.scss'],
    })
], AgencyhomescreenPage);
export { AgencyhomescreenPage };
//# sourceMappingURL=agencyhomescreen.page.js.map