import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RegisterasPage = class RegisterasPage {
    constructor(navCtrl, menuCtrl, userService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.userService = userService;
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
    gotologin() {
        this.navCtrl.navigateRoot('/signin');
    }
    parent() {
        this.userService.setSideMenu("Parent");
        this.userService.userType = 'Parent';
        console.log('service', this.userService.userType);
        localStorage.setItem('userType', 'Parent');
        this.navCtrl.navigateRoot('/signup');
    }
    caregiver() {
        this.userService.setSideMenu("caregiver");
        this.userService.userType = 'caregiver';
        console.log('service', this.userService.userType);
        localStorage.setItem('userType', 'caregiver');
        this.navCtrl.navigateRoot('/cgsignup');
    }
};
RegisterasPage = __decorate([
    Component({
        selector: 'app-registeras',
        templateUrl: './registeras.page.html',
        styleUrls: ['./registeras.page.scss'],
    })
], RegisterasPage);
export { RegisterasPage };
//# sourceMappingURL=registeras.page.js.map