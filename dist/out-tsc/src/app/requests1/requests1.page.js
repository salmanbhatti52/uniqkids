import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as moment from 'moment';
let Requests1Page = class Requests1Page {
    constructor(navCtrl, loading, rest) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.rest = rest;
        this.requestsarray = [];
        this.error = {
            status: false,
            message: "",
        };
        this.caregiverid = localStorage.getItem('uid');
        console.log('caregiver id :', this.caregiverid);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.requestsType) {
            if (this.requestsType === 'active') {
                this.mySegment.nativeElement.children[0].click();
                this.showrequest();
            }
            if (this.requestsType === 'pending') {
                this.mySegment.nativeElement.children[1].click();
                this.showrequest();
            }
            if (this.requestsType === 'previous') {
                this.mySegment.nativeElement.children[2].click();
                this.showrequest();
            }
        }
        else {
            this.requestsType = 'active';
            this.mySegment.nativeElement.children[0].click();
            this.showrequest();
        }
    }
    segmentChanged(ev) {
        if (ev.detail.value === 'active') {
            this.requestsType = 'active';
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
    // gotoprofile(){
    //   this.navCtrl.navigateForward(['/childprofile1',{
    //     page:'requests'
    //   }]);
    // }
    showrequest() {
        this.requestsarray = [];
        this.loading.loadershow();
        this.rest.sendRequest("caregiver_requests", { caregiverId: this.caregiverid }).subscribe((data) => {
            console.log('caregiver_requests', data);
            if (data.status == 'success') {
                this.loading.hideLoader();
                data.data.forEach(val => {
                    let date = val.date;
                    let date1 = moment(date).format('D MMM YYYY');
                    console.log('formatted date', date1);
                    if (val.parent_details.profile_picture == null || val.parent_details.profile_picture == '') {
                        this.defaultProfile = 'assets/imgs/plogo1.png';
                    }
                    else {
                        this.defaultProfile = 'https://dev.eigix.com/uniqkidzs/public/uploads/profile_images/' + val.parent_details.profile_picture;
                    }
                    let data = {
                        parentid: val.parent_id,
                        relationwithchild: val.parent_details.relation_with_child,
                        fname: val.parent_details.first_name,
                        lname: val.parent_details.last_name,
                        profile: this.defaultProfile,
                        childid: val.child_id,
                        childname: val.child_details.child_name,
                        starttime: val.start_time,
                        endtime: val.end_time,
                        status: val.status,
                        hiringid: val.hiring_id,
                        caregiverid: val.caregiver_id,
                        date: date1
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
    accept(req) {
        console.log('request data to get ids', req);
        let sendData = {
            childId: req.childid,
            hiringId: req.hiringid,
            caregiverId: req.caregiverid,
        };
        this.rest.sendRequest("accept_request", sendData).subscribe((data) => {
            console.log('accept request:', data);
            this.navCtrl.navigateForward(['/childprofile1', {
                    page: 'requests',
                    parentid: req.parentid,
                    childid: req.childid
                }]);
        });
    }
    reject(req) {
        console.log('request data to get ids', req);
        let sendData = {
            childId: req.childid,
            hiringId: req.hiringid,
            caregiverId: req.caregiverid,
        };
        this.rest.sendRequest("reject_request", sendData).subscribe((data) => {
            console.log('reject request:', data);
            this.navCtrl.navigateForward(['/childprofile1', {
                    page: 'requests',
                    parentid: req.parentid,
                    childid: req.childid
                }]);
        });
    }
    gotoprofile(req) {
        console.log('profile..........":');
        this.navCtrl.navigateForward(['/childprofile1', {
                page: 'requests',
                parentid: req.parentid,
                childid: req.childid
            }]);
    }
};
__decorate([
    ViewChild('mySegment', { read: ElementRef })
], Requests1Page.prototype, "mySegment", void 0);
Requests1Page = __decorate([
    Component({
        selector: 'app-requests1',
        templateUrl: './requests1.page.html',
        styleUrls: ['./requests1.page.scss'],
    })
], Requests1Page);
export { Requests1Page };
//# sourceMappingURL=requests1.page.js.map