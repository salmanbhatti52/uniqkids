import { __decorate } from "tslib";
import { Component } from '@angular/core';
let Paymenthistory1Page = class Paymenthistory1Page {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.navigateBack('/earning');
    }
};
Paymenthistory1Page = __decorate([
    Component({
        selector: 'app-paymenthistory1',
        templateUrl: './paymenthistory1.page.html',
        styleUrls: ['./paymenthistory1.page.scss'],
    })
], Paymenthistory1Page);
export { Paymenthistory1Page };
//# sourceMappingURL=paymenthistory1.page.js.map