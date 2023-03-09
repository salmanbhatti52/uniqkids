import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CaregiverPage = class CaregiverPage {
    constructor(navCtrl, loading, rest) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.rest = rest;
        this.caregiver = [];
        this.error = {
            status: false,
            message: "",
        };
    }
    ngOnInit() {
        this.caregivers();
    }
    ionViewDidEnter() {
    }
    caregivers() {
        // this.caregiver=[];
        this.loading.loadershow();
        this.rest.getRequest("get_all_caregivers", {}).subscribe((data) => {
            console.log('get_all_caregivers data::', data);
            if (data.status == 'success') {
                data.data.forEach(val => {
                    this.loading.hideLoader();
                    if (val.account_type_id == 2) {
                        this.type = 'Professional';
                    }
                    if (val.account_type_id == 3) {
                        this.type = 'Family';
                    }
                    if (val.account_type_id == 4) {
                        this.type = 'Agency';
                    }
                    if (val.profile_picture == '' || val.profile_picture == null) {
                        this.profilepicture = 'assets/imgs/caregiver.png';
                    }
                    else {
                        this.profilepicture = val.profile_picture;
                    }
                    let Obj = {
                        userid: val.users_id,
                        typeid: val.account_type_id,
                        profile: this.profilepicture,
                        fname: val.first_name,
                        lname: val.last_name,
                        price: val.per_hour_rate,
                        caregivertype: this.type
                    };
                    this.caregiver.push(Obj);
                });
                console.log('caregiver array', this.caregiver);
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
    gotoprofile(care) {
        this.navCtrl.navigateForward(['/profile', {
                page: 'caregiver',
                userid: care.userid
            }]);
    }
};
CaregiverPage = __decorate([
    Component({
        selector: 'app-caregiver',
        templateUrl: './caregiver.page.html',
        styleUrls: ['./caregiver.page.scss'],
    })
], CaregiverPage);
export { CaregiverPage };
//# sourceMappingURL=caregiver.page.js.map