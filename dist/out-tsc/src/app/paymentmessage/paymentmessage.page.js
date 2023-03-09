import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PaymentmessagePage = class PaymentmessagePage {
    constructor(modal, navParams, navCtrl, loading, rest) {
        this.modal = modal;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.rest = rest;
        this.parentid = this.navParams.get('parentid');
        console.log('parentid', this.parentid);
        this.caregiverid = this.navParams.get('caregiverid');
        console.log('caregiverid', this.caregiverid);
        this.hiringid = this.navParams.get('hiringid');
        console.log('hiringid', this.hiringid);
        this.totalamount = this.navParams.get('amount');
        console.log('totalamount', this.totalamount);
    }
    ngOnInit() {
    }
    Completed() {
        this.modal.dismiss().then(res => {
            console.log('modal res', res);
            let sendata = {
                parentId: this.parentid,
                hiringId: this.hiringid,
                caregiverId: this.caregiverid,
                comments: this.comments,
                amount: this.totalamount
            };
            this.rest.sendRequest("complete_job", sendata).subscribe((data) => {
                console.log('complete_job::', sendata);
                this.loading.presentToast('Request Completed');
                this.navCtrl.navigateForward('paymentto');
            });
        });
    }
    Cancel() {
        this.modal.dismiss().then(res => {
            console.log('modal res', res);
        });
    }
};
PaymentmessagePage = __decorate([
    Component({
        selector: 'app-paymentmessage',
        templateUrl: './paymentmessage.page.html',
        styleUrls: ['./paymentmessage.page.scss'],
    })
], PaymentmessagePage);
export { PaymentmessagePage };
//# sourceMappingURL=paymentmessage.page.js.map