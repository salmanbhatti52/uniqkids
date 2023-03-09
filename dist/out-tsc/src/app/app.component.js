import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    constructor(navCtrl, menuCtrl, userService, oneSignal, router) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.userService = userService;
        this.oneSignal = oneSignal;
        this.router = router;
        this.sender_id = '620446083343';
        this.oneSignalAppId = '7c8eac8b-868e-461d-b8db-91604121255b';
        this.appPages = [
        // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
        // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
        // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
        // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
        // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
        // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
        // { title: 'Onboardinscreen', url: '/onboarding', icon: 'mail' },
        // { title: 'HomeScreen', url: '/homescreen', icon: 'mail' },
        // { title: 'Child', url: '/child', img: '/assets/imgs/icons/child.png' },
        // { title: 'Caregiver', url: '/caregiver',img: '/assets/imgs/icons/caregiver.png' },
        // { title: 'Chat', url: '/chat',img: '/assets/imgs/icons/chat.png'},
        // { title: 'Payment', url: '/payment', img: '/assets/imgs/icons/payment.png' },
        // { title: 'Notifications', url: '/notification', img: '/assets/imgs/icons/notification.png' },
        // { title: 'Requests', url: '/requests', img: '/assets/imgs/icons/requests.png' },
        // { title: 'Registeras', url: '/registeras', icon: 'mail' },
        // { title: 'Signin', url: '/signin', icon: 'mail' },
        // { title: 'Signup', url: '/signup', icon: 'mail' },
        // { title: 'Earnings', url: '/earning', icon: 'mail' },
        // { title: 'CGPofile', url: '/cgprofile', icon: 'mail' },
        // { title: 'ParentPofile', url: '/parentprofile', icon: 'mail' },
        // { title: 'OTP', url: '/otp', icon: 'mail' },
        // { title: 'Resetpassword', url: '/resetpassword', icon: 'mail' },
        // { title: 'TermsandCondition', url: '/termsandcondition', img: '/assets/imgs/icons/term.png' },
        // { title: 'Medication', url: '/medicationtime', icon: 'mail' },
        ];
        this.initializeApp();
    }
    ngOnInit() {
        // this.userType = this.userService.userType
        // console.log('userType in ngOnInit',this.userType);
    }
    parentprofile() {
        this.menuCtrl.toggle();
        this.navCtrl.navigateForward('homescreen');
    }
    cgprofile(type) {
        this.menuCtrl.toggle();
        if (type == 'Professional' || type == 'Family') {
            this.navCtrl.navigateForward('cghomescreen');
        }
        if (type == 'Agency') {
            this.navCtrl.navigateForward('agencyhomescreen');
        }
    }
    menu() {
        this.menuCtrl.toggle();
    }
    initializeApp() {
        // this.userType = this.userService.userType
        // console.log('userType in initializeApp',this.userService.userType);
        // if (this.userService.userType==="parent") {
        //   this.userService.appPages=[
        //     { title: 'Child', url: '/child', img: '/assets/imgs/icons/child.png' },
        //     { title: 'Caregiver', url: '/caregiver',img: '/assets/imgs/icons/caregiver.png' },
        //     { title: 'Chat', url: '/chat',img: '/assets/imgs/icons/chat.png'},
        //     { title: 'Payment', url: '/payment', img: '/assets/imgs/icons/payment.png' },
        //     { title: 'Notifications', url: '/notification', img: '/assets/imgs/icons/notification.png' },
        //     { title: 'Requests', url: '/requests', img: '/assets/imgs/icons/requests.png' },
        //     { title: 'TermsandCondition', url: '/termsandcondition', img: '/assets/imgs/icons/term.png' },
        //   ]
        // }if (this.userService.userType==="caregiver") {
        //   this.userService.appPages=[
        //     { title: 'Requests', url: '/requests1', img: '/assets/imgs/icons/requests.png' },
        //     { title: 'Chat', url: '/chat',img: '/assets/imgs/icons/chat.png'},
        //     { title: 'Earnings', url: '/earning', icon: 'mail' },
        //     { title: 'Notifications', url: '/notification', img: '/assets/imgs/icons/notification.png' },
        //     { title: 'TermsandCondition', url: '/termsandcondition', img: '/assets/imgs/icons/term.png' },
        //   ]
        // }
        this.oneSignal.setLogLevel({ logLevel: 6, visualLevel: 2 });
        this.oneSignal.startInit(this.oneSignalAppId, this.sender_id);
        this.oneSignal.endInit();
        this.oneSignal.getIds().then((identity) => {
            console.log('identity', identity.userId);
            this.identy = identity;
            // alert(JSON.stringify(this.identy));
            localStorage.setItem('deviceID', this.identy.userId);
        });
        this.pushNotification();
        this.uid = localStorage.getItem('uid');
        this.accountTypeId = localStorage.getItem('accountTypeId');
        console.log('accountTypeId:', this.accountTypeId);
        if (this.uid) {
            if (this.accountTypeId == 1) {
                this.userService.setSideMenu("Parent");
                this.userService.userType = 'Parent';
                this.navCtrl.navigateRoot('homescreen');
            }
            if (this.accountTypeId == 2) {
                this.userService.setSideMenu("Professional");
                this.userService.userType = 'Professional';
                this.navCtrl.navigateRoot('cghomescreen');
            }
            if (this.accountTypeId == 3) {
                this.userService.setSideMenu("Family");
                this.userService.userType = 'Family';
                this.navCtrl.navigateRoot('cghomescreen');
            }
            if (this.accountTypeId == 4) {
                this.userService.setSideMenu("Agency");
                this.userService.userType = 'Agency';
                this.navCtrl.navigateRoot('agencyhomescreen');
            }
        }
        else {
            this.navCtrl.navigateRoot('onboarding');
        }
    }
    pushNotification() {
        this.oneSignal.startInit(this.oneSignalAppId, this.sender_id);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe((data) => {
            console.log('data load', data.payload);
        });
        this.oneSignal.handleNotificationOpened().subscribe((data) => {
            console.log('data open notification', data);
            if (data.notification.payload.additionalData.type === 'requestrejection') {
                if (this.accountTypeId == 1) {
                    this.router.navigate(['requests']);
                }
                if (this.accountTypeId == 2 || this.accountTypeId == 3 || this.accountTypeId == 4) {
                    this.router.navigate(['requests1']);
                }
            }
            if (data.notification.payload.additionalData.type === 'requestsending') {
                if (this.accountTypeId == 1) {
                    this.router.navigate(['requests']);
                }
                if (this.accountTypeId == 2 || this.accountTypeId == 3 || this.accountTypeId == 4) {
                    this.router.navigate(['requests1']);
                }
            }
            if (data.notification.payload.additionalData.type === 'requestacceptance') {
                this.router.navigate(['requests']);
            }
        });
        this.oneSignal.endInit();
    }
    logout() {
        this.menuCtrl.toggle();
        // this.userService.userType = "";
        localStorage.removeItem('userType');
        localStorage.removeItem('uid');
        localStorage.removeItem('accountTypeId');
        this.navCtrl.navigateForward('registeras');
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss'],
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map