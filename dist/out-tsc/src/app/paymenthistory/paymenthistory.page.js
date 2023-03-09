import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PaymenthistoryPage = class PaymenthistoryPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.navigateBack('/payment');
    }
};
PaymenthistoryPage = __decorate([
    Component({
        selector: 'app-paymenthistory',
        templateUrl: './paymenthistory.page.html',
        styleUrls: ['./paymenthistory.page.scss'],
    })
], PaymenthistoryPage);
export { PaymenthistoryPage };
//# sourceMappingURL=paymenthistory.page.js.map