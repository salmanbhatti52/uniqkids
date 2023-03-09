import { __decorate } from "tslib";
import { Component } from '@angular/core';
let OnboardingPage = class OnboardingPage {
    constructor(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }
    ionViewWillLeave() {
        // enable the root left menu when leaving this page
        this.menuCtrl.enable(true);
    }
    gotonext() {
        this.navCtrl.navigateForward('/registeras');
    }
};
OnboardingPage = __decorate([
    Component({
        selector: 'app-onboarding',
        templateUrl: './onboarding.page.html',
        styleUrls: ['./onboarding.page.scss'],
    })
], OnboardingPage);
export { OnboardingPage };
//# sourceMappingURL=onboarding.page.js.map