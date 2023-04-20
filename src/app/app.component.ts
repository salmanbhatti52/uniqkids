import { Component } from '@angular/core';
import { NavController, MenuController, Platform } from '@ionic/angular';
import { LoginwithuserService } from './loginwithuser.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Router } from '@angular/router';
import { RestService } from './services/rest.service';
import { NgZone } from '@angular/core';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // userType:any;
  uid: any;
  accountTypeId: any;
  sender_id = '620446083343';
  oneSignalAppId = '7c8eac8b-868e-461d-b8db-91604121255b';
  identy: any;
  public appPages = [
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
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public userService: LoginwithuserService,
    private oneSignal: OneSignal,
    private router: Router,
    public platform: Platform,
    private ngZone: NgZone,
    private rest: RestService,
    public statusbar: StatusBar
    // private splashScreen: SplashScreen
  ) {

  }

  ngOnInit() {

    this.platform.ready().then(() => {
      this.initializeApp();

    })



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

    // this.platform.ready().then(() => {
    //   setTimeout(() => {
    //     this.splashScreen.hide();
    //   }, 1000);

    // });

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
    // this.oneSignal.setLogLevel({ logLevel: 6, visualLevel: 2 });
    // this.oneSignal.startInit(this.oneSignalAppId, this.sender_id);
    // this.oneSignal.endInit();
    // this.oneSignal.getIds().then((identity) => {
    //   console.log('identity',identity.userId);
    //   this.identy = identity;
    //   // alert(JSON.stringify(this.identy));
    //   localStorage.setItem('deviceID', this.identy.userId);
    // });

    //  console.log('this.identy.userId',this.identy.userId);

    this.uid = localStorage.getItem('uid');
    console.log('userloggedid in app compoenent::', this.uid)
    this.accountTypeId = localStorage.getItem('accountTypeId');
    console.log('accountTypeId:', this.accountTypeId);
    if (this.uid) {
      if (this.accountTypeId == 1) {
        this.userService.setSideMenu('Parent');
        this.userService.userType = 'Parent';
        this.navCtrl.navigateRoot('homescreen');
        console.log('userlogged parent app component::')
      }
      if (this.accountTypeId == 2) {
        this.userService.setSideMenu('Professional');
        this.userService.userType = 'Professional';
        this.navCtrl.navigateRoot('cghomescreen');
      }
      if (this.accountTypeId == 3) {
        this.userService.setSideMenu('Family');
        this.userService.userType = 'Family';
        this.navCtrl.navigateRoot('cghomescreen');
      }
      if (this.accountTypeId == 4) {
        this.userService.setSideMenu('Agency');
        this.userService.userType = 'Agency';
        this.navCtrl.navigateRoot('agencyhomescreen');
      }

    } else {
      this.navCtrl.navigateRoot('onboarding');
    }

    this.pushNotification();

  }

  pushNotification() {
    console.log('push notification in function.....');
    this.oneSignal.startInit(this.oneSignalAppId, this.sender_id);

    this.oneSignal.inFocusDisplaying(
      this.oneSignal.OSInFocusDisplayOption.Notification
    );

    this.oneSignal.handleNotificationReceived().subscribe((data) => {
      console.log('data load', data.payload);
    });

    this.oneSignal.handleNotificationOpened().subscribe((data) => {
      console.log('data open notification', data);

      if (data.notification.payload.additionalData.type === 'requestsending') {

        this.ngZone.run(() => this.router.navigate(['requests1']));


      }

      if (data.notification.payload.additionalData.type === 'requestrejection') {
        // this.router.navigate(['requests']);
        this.ngZone.run(() => this.router.navigate(['requests']));
      }



      if (data.notification.payload.additionalData.type === 'requestacceptance') {

        // this.router.navigate(['requests']);
        this.ngZone.run(() => this.router.navigate(['requests']));


      }

      if (data.notification.payload.additionalData.type === 'paymentConfirmation') {

        // this.router.navigate(['earning']);
        this.ngZone.run(() => this.router.navigate(['earning']));

      }
      if (data.notification.payload.additionalData.type === 'messageNotification') {

        // this.router.navigate(['inbox']);
        this.ngZone.run(() => this.router.navigate(['chat']));


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
}
