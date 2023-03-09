import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomescreenPage = class HomescreenPage {
    constructor(navCtrl, loading, rest) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.rest = rest;
        this.childsarray = [];
        this.error = {
            status: false,
            message: "",
        };
        this.picture = false;
    }
    ngOnInit() {
        this.userType = localStorage.getItem("userType");
        console.log('userType:', this.userType);
        this.accountid = localStorage.getItem("accountTypeId");
        console.log('accountid:', this.accountid);
        this.user = JSON.parse(localStorage.getItem("user"));
        console.log('user details', this.user);
        this.name = this.user.first_name;
        console.log('first_name', this.name);
        this.parentid = this.user.users_id;
        console.log('parent id:', this.parentid);
    }
    goto() {
        this.navCtrl.navigateForward('/parentprofileview');
    }
    ionViewWillEnter() {
        this.showchild();
    }
    showchild() {
        this.childsarray = [];
        this.loading.loadershow();
        this.rest.sendRequest("parent_requests", { parentId: this.parentid }).subscribe((data) => {
            this.loading.hideLoader();
            console.log('parent_requests', data);
            if (data.status == 'success') {
                data.data.forEach(val => {
                    if (val.child_details.profile_picture == null || val.child_details.profile_picture == '') {
                        this.defaultProfile = 'assets/imgs/child.png';
                    }
                    else {
                        this.defaultProfile = val.child_details.profile_picture;
                    }
                    let data = {
                        caregiverid: val.caregiver_id,
                        fname: val.caregiver_details.first_name,
                        lname: val.caregiver_details.last_name,
                        profile: this.defaultProfile,
                        age: val.child_details.age,
                        childid: val.child_details.child_id,
                        parentid: val.child_details.parent_id,
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
    gotoprofile(id) {
        if (this.accountid == 1) {
            this.navCtrl.navigateForward(['/profile', {
                    page: 'homescreen',
                    userid: id.caregiverid,
                }]);
        }
        // else if(this.userType=='caregiver'){
        //   this.navCtrl.navigateForward('/childprofile1');
        // }
    }
};
HomescreenPage = __decorate([
    Component({
        selector: 'app-homescreen',
        templateUrl: './homescreen.page.html',
        styleUrls: ['./homescreen.page.scss'],
    })
], HomescreenPage);
export { HomescreenPage };
//# sourceMappingURL=homescreen.page.js.map