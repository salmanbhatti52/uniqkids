import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
let RequestsPage = class RequestsPage {
    constructor(navCtrl, loading, rest) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.rest = rest;
        this.requestsarray = [];
        this.error = {
            status: false,
            message: "",
        };
        this.parentid = localStorage.getItem('uid');
        console.log('parent id :', this.parentid);
        // this.showrequest();
    }
    ionViewWillEnter() {
        if (this.requestsType) {
            if (this.requestsType === 'current') {
                this.mySegment.nativeElement.children[0].click();
                console.log('click event', this.mySegment.nativeElement.children[0].click());
            }
            if (this.requestsType === 'pending') {
                this.mySegment.nativeElement.children[1].click();
            }
            if (this.requestsType === 'previous') {
                this.mySegment.nativeElement.children[2].click();
            }
        }
        else {
            this.requestsType = 'current';
            this.mySegment.nativeElement.children[0].click();
        }
    }
    ngOnInit() {
    }
    segmentChanged(ev) {
        if (ev.detail.value === 'current') {
            this.requestsType = 'current';
            this.showrequest();
            this.requestsarray = [];
        }
        if (ev.detail.value === 'pending') {
            this.requestsType = 'pending';
            this.showrequest();
            this.requestsarray = [];
        }
        if (ev.detail.value === 'previous') {
            this.requestsType = 'previous';
            this.showrequest();
            this.requestsarray = [];
        }
        localStorage.setItem('requestType', this.requestsType);
    }
    showrequest() {
        this.requestsarray = [];
        this.loading.loadershow();
        this.rest.sendRequest("parent_requests", { parentId: this.parentid }).subscribe((data) => {
            console.log('parent_requests', data);
            if (data.status == 'success') {
                this.loading.hideLoader();
                data.data.forEach(val => {
                    if (val.caregiver_details.profile_picture == null || val.caregiver_details.profile_picture == '') {
                        this.defaultProfile = 'assets/imgs/caregiver.png';
                    }
                    else {
                        this.defaultProfile = val.caregiver_details.profile_picture;
                    }
                    let data = {
                        caregiverid: val.caregiver_id,
                        fname: val.caregiver_details.first_name,
                        lname: val.caregiver_details.last_name,
                        price: val.caregiver_details.per_hour_rate,
                        profile: this.defaultProfile,
                        childid: val.child_details.child_id,
                        parentid: val.child_details.parent_id,
                        childname: val.child_details.child_name,
                        starttime: val.start_time,
                        endtime: val.end_time,
                        status: val.status,
                        hiringid: val.hiring_id
                    };
                    this.requestsarray.push(data);
                });
                console.log('requestsarray:', this.requestsarray);
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
    gotoprofile(req) {
        this.navCtrl.navigateForward(['/profile', {
                page: 'requests',
                userid: req.caregiverid
            }]);
    }
};
__decorate([
    ViewChild('mySegment', { read: ElementRef })
], RequestsPage.prototype, "mySegment", void 0);
RequestsPage = __decorate([
    Component({
        selector: 'app-requests',
        templateUrl: './requests.page.html',
        styleUrls: ['./requests.page.scss'],
    })
], RequestsPage);
export { RequestsPage };
//# sourceMappingURL=requests.page.js.map