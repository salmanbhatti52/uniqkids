import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let ResetpasswordPage = class ResetpasswordPage {
    constructor(navCtrl, menuCtrl, activatedRoute, rest) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.activatedRoute = activatedRoute;
        this.rest = rest;
        this.showPass = false;
        this.showcPass = false;
        this.newPassError = {
            status: false,
            message: '',
        };
        this.confPassError = {
            status: false,
            message: '',
        };
        this.error = {
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
    goback() {
        this.navCtrl.navigateBack('/otp');
    }
    togglePass() {
        this.showPass = !this.showPass;
    }
    togglecPass() {
        this.showcPass = !this.showcPass;
    }
    gotologin() {
        if (this.newPassword && this.confirmPassword) {
            if (this.newPassword === this.confirmPassword) {
                this.rest
                    .sendRequest('forgot_password', {
                    requestType: 'reset_password',
                    email: this.recoveryEmail,
                    userPassword: this.newPassword,
                    confirmPassword: this.confirmPassword
                })
                    .subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    this.newPassword = '';
                    this.confirmPassword = '';
                    this.navCtrl.navigateForward('/signin');
                }), (err) => {
                    this.error.status = true;
                    this.error.message = err.error.message;
                    setTimeout(() => {
                        this.error.status = false;
                        this.error.message = '';
                    }, 3000);
                });
            }
            else {
                this.confPassError.status = true;
                this.confPassError.message = 'Password not match!';
                setTimeout(() => {
                    this.confPassError.status = false;
                    this.confPassError.message = '';
                }, 3000);
            }
        }
        if (!this.newPassword) {
            this.newPassError.status = true;
            this.newPassError.message = 'Password is required';
        }
        if (!this.confirmPassword) {
            this.confPassError.status = true;
            this.confPassError.message = 'Confirm Password is required';
        }
        setTimeout(() => {
            this.newPassError.status = false;
            this.newPassError.message = '';
            this.confPassError.status = false;
            this.confPassError.message = '';
        }, 3000);
    }
};
ResetpasswordPage = __decorate([
    Component({
        selector: 'app-resetpassword',
        templateUrl: './resetpassword.page.html',
        styleUrls: ['./resetpassword.page.scss'],
    })
], ResetpasswordPage);
export { ResetpasswordPage };
//# sourceMappingURL=resetpassword.page.js.map