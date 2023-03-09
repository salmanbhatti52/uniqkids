import { __decorate } from "tslib";
import { Component } from '@angular/core';
let Profile1Page = class Profile1Page {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.navigateBack('/cgviewprofile1');
    }
    next() {
        this.navCtrl.navigateForward('/cgprofile1');
    }
};
Profile1Page = __decorate([
    Component({
        selector: 'app-profile1',
        templateUrl: './profile1.page.html',
        styleUrls: ['./profile1.page.scss'],
    })
], Profile1Page);
export { Profile1Page };
//# sourceMappingURL=profile1.page.js.map