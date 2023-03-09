import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ForgotpasswordPage = class ForgotpasswordPage {
    constructor(navCtrl, menuCtrl, loading, rest) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loading = loading;
        this.rest = rest;
        this.email = '';
        this.emailError = {
            status: false,
            message: "",
        };
        this.error = {
            status: false,
            message: "",
        };
    }
    ngOnInit() {
        this.userType = localStorage.getItem("userType");
        console.log('userType', this.userType);
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }
    ionViewWillLeave() {
        // enable the root left menu when leaving this page
        this.menuCtrl.enable(true);
    }
    goback() {
        this.navCtrl.navigateForward('/signin');
    }
    gotootp() {
        if (this.email) {
            if (!this.validateEmail(this.email)) {
                this.emailError.status = true;
                this.emailError.message = "Invalid Email address.";
                setTimeout(() => {
                    this.emailError.status = false;
                    this.emailError.message = "";
                }, 3000);
                return;
            }
            let Data = {
                requestType: "forgot_password",
                email: this.email
            };
            this.rest.sendRequest("forgot_password", Data).subscribe((data) => {
                console.log('forgot_password data', data);
                if (data.status == 'Success') {
                    this.navCtrl.navigateForward(['/otp', {
                            email: this.email
                        }]);
                }
                if (data.status == 'error') {
                    this.loading.hideLoader();
                    // console.log('signup request data:',data.status);
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
        if (!this.email) {
            this.emailError.status = true;
            this.emailError.message = "Email address is required";
        }
        setTimeout(() => {
            this.emailError.status = false;
            this.emailError.message = "";
        }, 3000);
    }
    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
};
ForgotpasswordPage = __decorate([
    Component({
        selector: 'app-forgotpassword',
        templateUrl: './forgotpassword.page.html',
        styleUrls: ['./forgotpassword.page.scss'],
    })
], ForgotpasswordPage);
export { ForgotpasswordPage };
//# sourceMappingURL=forgotpassword.page.js.map