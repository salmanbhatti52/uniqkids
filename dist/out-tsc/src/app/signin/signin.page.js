import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SigninPage = class SigninPage {
    constructor(navCtrl, menuCtrl, userService, loading, rest, oneSignal) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.userService = userService;
        this.loading = loading;
        this.rest = rest;
        this.oneSignal = oneSignal;
        this.email = '';
        this.password = '';
        this.showPass = false;
        this.isLoading = false;
        this.emailError = {
            status: false,
            message: "",
        };
        this.passwordError = {
            status: false,
            message: "",
        };
        this.error = {
            status: false,
            message: "",
        };
    }
    ngOnInit() {
        this.player_id = localStorage.getItem('deviceID');
        console.log('player_id', this.player_id);
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }
    ionViewWillLeave() {
        // enable the root left menu when leaving this page
        this.menuCtrl.enable(true);
    }
    goto() {
        this.navCtrl.navigateForward('/forgotpassword');
    }
    goback() {
        this.navCtrl.navigateBack('/registeras');
    }
    togglePass() {
        this.showPass = !this.showPass;
    }
    gotohome() {
        if (this.email && this.password) {
            if (!this.validateEmail(this.email)) {
                this.emailError.status = true;
                this.emailError.message = "Invalid Email address.";
                setTimeout(() => {
                    this.emailError.status = false;
                    this.emailError.message = "";
                }, 3000);
                return;
            }
            this.loading.loadershow();
            // const sender_id = '620446083343';
            // const oneSignalAppId = '7c8eac8b-868e-461d-b8db-91604121255b';
            // this.oneSignal.startInit(oneSignalAppId, sender_id);
            // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            // this.oneSignal.endInit();
            // this.oneSignal.getIds().then((id) => {
            // console.log('player_id',id.userId);
            // this.player_id=id.userId;
            let signInData = {
                userEmail: this.email,
                userPassword: this.password,
                oneSignalId: '123'
            };
            this.rest.sendRequest("login", signInData).subscribe((data) => {
                console.log('login request data::', data);
                // console.log('account_type',data.data.account_type_id);
                if (data.status == 'success') {
                    this.email = "";
                    this.password = "";
                    this.loading.hideLoader();
                    localStorage.setItem("user", JSON.stringify(data.data));
                    localStorage.setItem("uid", data.data.users_id);
                    // id 1 is for parent
                    if (data.data.account_type_id == 1) {
                        this.loading.presentToast('Login Successfully!!!');
                        localStorage.setItem("accountTypeId", data.data.account_type_id);
                        this.userService.setSideMenu("Parent");
                        this.userService.userType = 'Parent';
                        this.navCtrl.navigateRoot('homescreen');
                    }
                    // id 2 is for Professional
                    if (data.data.account_type_id == 2) {
                        this.loading.presentToast('Login Successfully!!!');
                        localStorage.setItem("accountTypeId", data.data.account_type_id);
                        this.userService.setSideMenu("Professional");
                        this.userService.userType = 'Professional';
                        console.log('service', this.userService.userType);
                        this.navCtrl.navigateRoot('cghomescreen');
                    }
                    // id 3 is for Family
                    if (data.data.account_type_id == 3) {
                        this.loading.presentToast('Login Successfully!!!');
                        localStorage.setItem("accountTypeId", data.data.account_type_id);
                        this.userService.setSideMenu("Family");
                        this.userService.userType = 'Family';
                        console.log('service', this.userService.userType);
                        this.navCtrl.navigateRoot('cghomescreen');
                    }
                    // id 4 is for Agency
                    if (data.data.account_type_id == 4) {
                        this.loading.presentToast('Login Successfully!!!');
                        localStorage.setItem("accountTypeId", data.data.account_type_id);
                        this.userService.setSideMenu("Agency");
                        this.userService.userType = 'Agency';
                        console.log('service', this.userService.userType);
                        this.navCtrl.navigateRoot('agencyhomescreen');
                    }
                }
                if (data.status == 'error') {
                    this.loading.hideLoader();
                    console.log('signup request data:', data.status);
                    this.error.status = true;
                    this.error.message = data.status;
                    setTimeout(() => {
                        this.error.status = false;
                        this.error.message = "";
                    }, 3000);
                }
            }, (err) => {
            });
            // })
            // this.navCtrl.navigateRoot('/homescreen');
        }
        if (!this.email) {
            this.emailError.status = true;
            this.emailError.message = "Email address is required";
        }
        if (!this.password) {
            this.passwordError.status = true;
            this.passwordError.message = "Password is required";
        }
        setTimeout(() => {
            this.emailError.status = false;
            this.emailError.message = "";
            this.passwordError.status = false;
            this.passwordError.message = "";
        }, 3000);
    }
    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    gotologin() {
        this.navCtrl.navigateBack('/registeras');
    }
};
SigninPage = __decorate([
    Component({
        selector: 'app-signin',
        templateUrl: './signin.page.html',
        styleUrls: ['./signin.page.scss'],
    })
], SigninPage);
export { SigninPage };
//# sourceMappingURL=signin.page.js.map