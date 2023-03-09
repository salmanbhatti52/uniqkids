import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { PaymentmessagePage } from '../paymentmessage/paymentmessage.page';
import * as moment from 'moment';
let PaymenttoPage = class PaymenttoPage {
    constructor(navCtrl, modalController, alertController, loading, rest) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.alertController = alertController;
        this.loading = loading;
        this.rest = rest;
        this.paymentarray = [];
    }
    ngOnInit() {
        this.uid = localStorage.getItem('uid');
        console.log('userid', this.uid);
    }
    ionViewWillEnter() {
        if (this.paymentType) {
            if (this.paymentType === 'pending') {
                this.mySegment.nativeElement.children[0].click();
                this.getuserdetails();
                this.paymentarray = [];
            }
            if (this.paymentType === 'completed') {
                this.mySegment.nativeElement.children[1].click();
                this.getuserdetails();
                this.paymentarray = [];
            }
        }
        else {
            this.paymentType = 'pending';
            this.mySegment.nativeElement.children[0].click();
            this.paymentarray = [];
        }
    }
    getuserdetails() {
        this.paymentarray = [];
        this.loading.loadershow();
        this.rest.sendRequest("parent_hirings_payment", { parentId: this.uid }).subscribe((data) => {
            console.log('get data:', data);
            this.loading.hideLoader();
            data.data.forEach(val => {
                let date = moment(val.date).format('MMMM,YYYY');
                console.log('date', date);
                let obj = {
                    caregiverid: val.caregiver_details.users_id,
                    hiringid: val.hiring_id,
                    parentid: val.parent_id,
                    profile: val.caregiver_details.profile_picture,
                    fname: val.caregiver_details.first_name,
                    lname: val.caregiver_details.last_name,
                    hourrate: val.caregiver_details.per_hour_rate,
                    totalamount: val.total_payment,
                    date: date,
                    status: val.status
                };
                this.paymentarray.push(obj);
            });
            console.log('paymentarray', this.paymentarray);
        });
    }
    segmentChanged(ev) {
        if (ev.detail.value === 'pending') {
            this.paymentType = 'pending';
            this.getuserdetails();
        }
        if (ev.detail.value === 'completed') {
            this.paymentType = 'completed';
            this.getuserdetails();
        }
        localStorage.setItem('paymentType', this.paymentType);
    }
    next() {
        this.navCtrl.navigateForward('/paymenthistory');
    }
    send() {
        this.navCtrl.navigateForward('/paymenthistory');
    }
    presentModal(pay) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('caregiverid', pay.caregiverid);
            console.log('parentid', pay.parentid);
            console.log('hiringid', pay.hiringid);
            const modal = yield this.modalController.create({
                component: PaymentmessagePage,
                cssClass: 'paymentclass',
                componentProps: {
                    parentid: pay.parentid,
                    caregiverid: pay.caregiverid,
                    hiringid: pay.hiringid,
                    amount: pay.totalamount
                }
            });
            return yield modal.present();
        });
    }
    viewdetail(pay) {
        console.log('innnnnnnnn');
        console.log('caregiverid', pay.caregiverid);
        console.log('parentid', pay.parentid);
        console.log('hiringid', pay.hiringid);
        let sendData = {
            hiringId: pay.hiringid,
            parentId: pay.parentid,
            caregiverId: pay.caregiverid
        };
        this.rest.sendRequest("job_details", sendData).subscribe((data) => {
            console.log('job_details::', data);
            this.desc = data.data.comments;
            this.popup(this.desc);
        });
    }
    popup(desc) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'transactionclass',
                message: desc,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                        },
                        cssClass: 'btn_ok',
                    },
                ],
            });
            yield alert.present();
        });
    }
};
__decorate([
    ViewChild('mySegment', { read: ElementRef })
], PaymenttoPage.prototype, "mySegment", void 0);
PaymenttoPage = __decorate([
    Component({
        selector: 'app-paymentto',
        templateUrl: './paymentto.page.html',
        styleUrls: ['./paymentto.page.scss'],
    })
], PaymenttoPage);
export { PaymenttoPage };
//# sourceMappingURL=paymentto.page.js.map