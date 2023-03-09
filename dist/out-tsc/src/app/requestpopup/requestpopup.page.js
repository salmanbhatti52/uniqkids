import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as moment from 'moment';
let RequestpopupPage = class RequestpopupPage {
    constructor(modal, navCtrl, navParams, loading, rest) {
        this.modal = modal;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.rest = rest;
        this.myDate = moment(new Date().toISOString()).format('YYYY-MM-DD');
        this.date = '';
        this.stime = '';
        this.etime = '';
        this.childarray = [];
        this.error = {
            status: false,
            message: "",
        };
        this.selectError = {
            status: false,
            message: "",
        };
        this.dateError = {
            status: false,
            message: "",
        };
        this.strtTimeError = {
            status: false,
            message: "",
        };
        this.endTimeError = {
            status: false,
            message: "",
        };
        this.selectedchild = [];
        this.userid = localStorage.getItem('uid');
        console.log('userid', this.userid);
        this.caregiverid = this.navParams.get('caregiverid');
        console.log('caregiverid', this.caregiverid);
    }
    ngOnInit() {
        this.getchilds();
    }
    close() {
        console.log('close');
        this.modal.dismiss();
    }
    selectdata() {
        this.selectdate = moment(this.date).format('YYYY-MM-DD');
        console.log('date', this.selectdate);
    }
    starttime() {
        this.strtTime = moment(this.stime).format('LT');
        console.log('date', this.strtTime);
    }
    endtime() {
        this.endTime = moment(this.etime).format('LT');
        console.log('date', this.endTime);
    }
    getchilds() {
        this.loading.loadershow();
        this.rest.sendRequest("get_parent_children", { parentId: this.userid }).subscribe((data) => {
            console.log('get_profile_details data::', data);
            if (data.status == 'success') {
                console.log('suucesssss');
                this.loading.hideLoader();
                data.data.forEach(val => {
                    if (val.profile_picture == null || val.profile_picture == '') {
                        this.image = "assets/imgs/child.png";
                    }
                    else {
                        this.image = val.profile_picture;
                    }
                    let data = {
                        childid: val.child_id,
                        profile: this.image,
                        name: val.child_name,
                        age: val.age
                    };
                    this.childarray.push(data);
                });
                console.log('childarray', this.childarray);
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
    selectchild(data, checkbox, index) {
        console.log('index number', index);
        console.log('checked', checkbox.detail.checked);
        console.log('child details', data);
        if (checkbox.detail.checked == false) {
            this.childarray.map((el, i) => {
                console.log('index', i);
                console.log('el', el);
                if (el.childid === data.childid) {
                    console.log('deleted id');
                    this.selectedchild.splice(i, 1);
                }
            });
            console.log("deleted", this.selectedchild);
            // this.checked=checkbox.detail.checked
        }
        if (checkbox.detail.checked) {
            console.log('checkbox', checkbox.detail.checked);
            this.checked = checkbox.detail.checked;
            console.log('data click on checkbox', data);
            // let obj={
            //   childid:data.childid,
            // }
            this.selectedchild.push(data.childid);
            // this.savedQustion=data.questionslist
            // this.surveyName=data.surveyname
            // this.maxTime=data.time
            console.log('selectedchild', this.selectedchild);
        }
    }
    closeModal() {
        if (this.selectedchild.length > 0 && this.selectdate && this.strtTime && this.endTime) {
            this.modal.dismiss().then(res => {
                let sendata = {
                    parentId: this.userid,
                    childId: this.selectedchild,
                    caregiverId: this.caregiverid,
                    date: this.selectdate,
                    startTime: this.strtTime,
                    endTime: this.endTime
                };
                this.rest.sendRequest("hire_caregiver", sendata).subscribe((data) => {
                    console.log('hire_caregiver::', sendata);
                    this.loading.presentToast('Request send to caregiver');
                    this.navCtrl.navigateForward('/homescreen');
                    console.log('selcted child after dismiss', this.selectedchild);
                });
            });
        }
        if (this.selectedchild.length === 0) {
            this.selectError.status = true;
            this.selectError.message = 'Please select Child!';
        }
        if (!this.selectdate) {
            this.dateError.status = true;
            this.dateError.message = "Select date";
        }
        if (!this.strtTime) {
            this.strtTimeError.status = true;
            this.strtTimeError.message = "Select start time";
        }
        if (!this.endTime) {
            this.endTimeError.status = true;
            this.endTimeError.message = "Select end time";
        }
        setTimeout(() => {
            this.selectError.status = false;
            this.selectError.message = "";
            this.dateError.status = false;
            this.dateError.message = "";
            this.strtTimeError.status = false;
            this.strtTimeError.message = "";
            this.endTimeError.status = false;
            this.endTimeError.message = "";
        }, 2000);
    }
};
RequestpopupPage = __decorate([
    Component({
        selector: 'app-requestpopup',
        templateUrl: './requestpopup.page.html',
        styleUrls: ['./requestpopup.page.scss'],
    })
], RequestpopupPage);
export { RequestpopupPage };
//# sourceMappingURL=requestpopup.page.js.map