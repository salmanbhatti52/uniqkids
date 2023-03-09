import { __decorate } from "tslib";
import { Component } from '@angular/core';
let OtpPage = class OtpPage {
    constructor(navCtrl, menuCtrl, activatedRoute, rest) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.activatedRoute = activatedRoute;
        this.rest = rest;
        this.pinError = {
            status: false,
            message: '',
        };
        this.Error = {
            status: false,
            message: '',
        };
        this.recoveryEmail = this.activatedRoute.snapshot.params['email'];
        console.log('recoveryEmail::', this.recoveryEmail);
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
    next(e, elNext, elBack) {
        console.log(e);
        console.log(e.keyCode);
        if (e.keyCode === 8 || e.keyCode === 229) {
            elBack.setFocus();
        }
        else {
            elNext.setFocus();
        }
    }
    goback() {
        this.navCtrl.navigateBack('/forgotpassword');
    }
    resetpass() {
        if (this.pin1 && this.pin2 && this.pin3 && this.pin4) {
            console.log(this.pin1 + this.pin2 + this.pin3 + this.pin4);
            if (!this.isANumber(this.pin1) ||
                !this.isANumber(this.pin2) ||
                !this.isANumber(this.pin3) ||
                !this.isANumber(this.pin4)) {
                this.pinError.status = true;
                this.pinError.message = 'Pin should contain only numbers!';
                setTimeout(() => {
                    this.pinError.status = false;
                    this.pinError.message = '';
                }, 3000);
            }
            else {
                this.rest
                    .sendRequest('forgot_password', {
                    requestType: 'match_code',
                    email: this.recoveryEmail,
                    code: this.pin1 + this.pin2 + this.pin3 + this.pin4,
                })
                    .subscribe((data) => {
                    this.pin1 = '';
                    this.pin2 = '';
                    this.pin3 = '';
                    this.pin4 = '';
                    this.navCtrl.navigateForward(['/resetpassword', {
                            email: this.recoveryEmail
                        }]);
                }, (err) => {
                    this.pinError.status = true;
                    this.pinError.message = err.error.message;
                    setTimeout(() => {
                        this.pinError.status = false;
                        this.pinError.message = '';
                    }, 3000);
                });
            }
        }
        if (!this.pin1 && !this.pin2 && !this.pin3 && !this.pin4) {
            this.Error.status = true;
            this.Error.message = 'Pin is required';
        }
        setTimeout(() => {
            this.Error.status = false;
            this.Error.message = '';
        }, 3000);
    }
    isANumber(n) {
        const numStr = /^[0-9]+$/;
        return numStr.test(n.toString());
    }
};
OtpPage = __decorate([
    Component({
        selector: 'app-otp',
        templateUrl: './otp.page.html',
        styleUrls: ['./otp.page.scss'],
    })
], OtpPage);
export { OtpPage };
//# sourceMappingURL=otp.page.js.map