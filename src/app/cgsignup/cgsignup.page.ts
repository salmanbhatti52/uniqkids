import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import {
  NavController,
  MenuController,
  Platform,
  ModalController,
} from "@ionic/angular";
import { LoginwithuserService } from "../loginwithuser.service";
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
import { TermsandconditionPage } from "../termsandcondition/termsandcondition.page";
import { OneSignal } from "@ionic-native/onesignal/ngx";
@Component({
  selector: "app-cgsignup",
  templateUrl: "./cgsignup.page.html",
  styleUrls: ["./cgsignup.page.scss"],
})
export class CgsignupPage implements OnInit {
  showPass = false;
  showcPass = false;

  showfooter = true;
  showhide = false;
  userType: any;
  firstname: any = "";
  lastname: any = "";
  email: any = "";
  password: any = "";
  confirmPassword: any = "";
  type: any;
  accountTypeId: any;
  player_id: any;

  isLoading = true;
  displayOption = false;

  emailError = {
    status: false,
    message: "",
  };
  firstnameError = {
    status: false,
    message: "",
  };
  lastnameError = {
    status: false,
    message: "",
  };
  typeError = {
    status: false,
    message: "",
  };
  passwordError = {
    status: false,
    message: "",
  };
  confirmPasswordError = {
    status: false,
    message: "",
  };
  error = {
    status: false,
    message: "",
  };
  caregiverarray = [
    { name: "Professional Caregiver" },
    { name: "Family/Friend Caregiver" },
    { name: "Agency Caregiver" },
  ];
  caregivertype: any;

  sender_id = "620446083343";
  oneSignalAppId = "7c8eac8b-868e-461d-b8db-91604121255b";
  identy: any;
  constructor(
    public navCtrl: NavController,
    public modalController: ModalController,
    public platform: Platform,
    public userService: LoginwithuserService,
    public loading: LoadingService,
    private rest: RestService,
    public menuCtrl: MenuController,
    public cd: ChangeDetectorRef,
    private oneSignal: OneSignal
  ) {}

  ngOnInit() {
    this.platform.keyboardDidShow.subscribe((ev) => {
      console.log("keyboard show", ev);
      this.showfooter = false;
      this.cd.detectChanges();
      console.log("showFooter", this.showfooter);
      var deviceHeight = window.innerHeight;
      let keyboardHeight = ev.keyboardHeight;
      var deviceHeightAdjusted = deviceHeight - keyboardHeight; //device height adjusted
      deviceHeightAdjusted =
        deviceHeightAdjusted < 0
          ? deviceHeightAdjusted * -1
          : deviceHeightAdjusted; //only positive number
      document.getElementById("cgssspage").style.height =
        deviceHeightAdjusted - 90 + "px"; //set page height
      document
        .getElementById("cgssspage")
        .setAttribute("keyBoardHeight", keyboardHeight); //save keyboard height
      console.log("keyboard show", ev);

      this.cd.detectChanges();
    });

    this.platform.keyboardDidHide.subscribe((ev) => {
      if (this.showhide == true) {
        this.showfooter = true;
        this.showhide = false;
        this.cd.detectChanges();
        console.log("keyboard hide");
      } else {
        this.showhide = true;
      }
      setTimeout(() => {
        document.getElementById("cgssspage").style.height = 100 + "%"; //device  100% height
      }, 100);

      this.cd.detectChanges();
      console.log("keyboard hide");
    });
    this.userType = localStorage.getItem("userType");
    console.log("userType", this.userType);

    this.player_id = localStorage.getItem("deviceID");
    console.log("player_id", this.player_id);

    // this.platform.keyboardDidShow.subscribe((ev) => {
    //   console.log("keyboard show", ev);
    //   this.showfooter = false;
    //   this.cd.detectChanges();
    //   console.log("showFooter", this.showfooter);
    // });

    // this.platform.keyboardDidHide.subscribe((ev) => {
    //   if (this.showhide == true) {
    //     this.showfooter = true;
    //     this.showhide = false;
    //     this.cd.detectChanges();
    //     console.log("keyboard hide");
    //   } else {
    //     this.showhide = true;
    //   }
    // });

    this.oneSignal.setLogLevel({ logLevel: 6, visualLevel: 2 });
    this.oneSignal.startInit(this.oneSignalAppId, this.sender_id);
    this.oneSignal.endInit();
    this.oneSignal.getIds().then((identity) => {
      console.log("identity", identity.userId);
      this.identy = identity;
      this.player_id = this.identy.userId;
    });
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }

  gotologin() {
    this.navCtrl.navigateForward("/signin");
  }
  goback() {
    this.navCtrl.navigateBack("/registeras");
  }

  togglePass() {
    this.showPass = !this.showPass;
  }
  togglecPass() {
    this.showcPass = !this.showcPass;
  }
  toggleSelect() {
    console.log("hellow");
    // if (!this.isLoading) {
    this.displayOption = true;
    // }
  }
  selecttype(type) {
    console.log("typesssss", type);
    // if (survey.type) {
    //   this.displayOption = false;
    //   return;
    // }
    // this.selectedSurvey = survey;
    // this.surveyAnswer = [];
    this.type = type.name;
    console.log("caregiver type", this.type);
    if (this.type == "Professional Caregiver") {
      // const myArray = this.type.split(' Caregiver');
      // this.caregivertype=myArray[0];
      this.accountTypeId = 2; // id 2 for Professional
      console.log("accountTypeId:", this.accountTypeId);
      // console.log('split text',this.caregivertype);
      this.displayOption = false;
    }
    if (this.type == "Family/Friend Caregiver") {
      // const myArray = this.type.split('/Friend Caregiver');
      // this.caregivertype=myArray[0];
      this.accountTypeId = 3; // id 3 for Family
      console.log("accountTypeId:", this.accountTypeId);
      // console.log('split text',this.caregivertype);
      this.displayOption = false;
    }
    if (this.type == "Agency Caregiver") {
      // const myArray = this.type.split(' Caregiver');
      // this.caregivertype=myArray[0];
      this.accountTypeId = 4; // id 4 for agency
      console.log("accountTypeId:", this.accountTypeId);
      // console.log('split text',this.caregivertype);
      this.displayOption = false;
    }
  }
  close() {
    this.displayOption = false;
  }

  gotohome() {
    if (
      this.firstname &&
      this.lastname &&
      this.email &&
      this.password &&
      this.confirmPassword
    ) {
      if (!this.validateEmail(this.email)) {
        this.emailError.status = true;
        this.emailError.message = "Invalid Email address.";
        setTimeout(() => {
          this.emailError.status = false;
          this.emailError.message = "";
        }, 3000);
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.confirmPasswordError.status = true;
        // eslint-disable-next-line @typescript-eslint/quotes
        this.confirmPasswordError.message = "Password didn't match.";
        setTimeout(() => {
          this.confirmPasswordError.status = false;
          this.confirmPasswordError.message = "";
        }, 3000);
        return;
      }
      this.loading.loadershow();
      let signUpData = {
        firstName: this.firstname,
        lastName: this.lastname,
        userEmail: this.email,
        userPassword: this.password,
        confirmPassword: this.confirmPassword,
        accountTypeId: this.accountTypeId,
        // oneSignalId: "123",
        oneSignalId: this.player_id,
        userType: 1,
      };
      this.rest.sendRequest("signup", signUpData).subscribe(
        (data: any) => {
          console.log("signup request data", data);
          if (data.status == "success") {
            this.firstname = "";
            this.lastname = "";
            this.email = "";
            this.password = "";
            this.confirmPassword = "";
            this.loading.hideLoader();
            localStorage.setItem("user", JSON.stringify(data.data));
            localStorage.setItem("uid", data.data.users_id);
            this.loading.presentToast("Registered Successfully!!!");
            if (this.type == "Professional Caregiver") {
              this.userService.setSideMenu("Professional");
              this.userService.userType = "Professional";
              console.log("service", this.userService.userType);
              localStorage.setItem("accountTypeId", this.accountTypeId);
              this.navCtrl.navigateRoot("/cghomescreen");
            }
            if (this.type == "Family/Friend Caregiver") {
              this.userService.setSideMenu("Family");
              this.userService.userType = "Family";
              console.log("service", this.userService.userType);
              localStorage.setItem("accountTypeId", this.accountTypeId);
              this.navCtrl.navigateRoot("/cghomescreen");
            }
            if (this.type == "Agency Caregiver") {
              this.userService.setSideMenu("Agency");
              this.userService.userType = "Agency";
              console.log("service", this.userService.userType);
              localStorage.setItem("accountTypeId", this.accountTypeId);
              this.navCtrl.navigateRoot("/agencyhomescreen");
            }
          }
          if (data.status == "error") {
            this.loading.presentToast(data.message);
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
        },
        (err) => {}
      );
    }
    if (!this.firstname) {
      this.firstnameError.status = true;
      this.firstnameError.message = "Firstname is required";
    }
    if (!this.lastname) {
      this.lastnameError.status = true;
      this.lastnameError.message = "Lastname is required";
    }
    if (!this.type) {
      this.typeError.status = true;
      this.typeError.message = "Choose one type atleast";
    }
    if (!this.email) {
      this.emailError.status = true;
      this.emailError.message = "Email address is required";
    }

    if (!this.password) {
      this.passwordError.status = true;
      this.passwordError.message = "Password is required";
    }
    if (!this.confirmPassword) {
      this.confirmPasswordError.status = true;
      this.confirmPasswordError.message = "Confirm Password is required";
    }
    setTimeout(() => {
      this.emailError.status = false;
      this.emailError.message = "";
      this.firstnameError.status = false;
      this.firstnameError.message = "";
      this.lastnameError.status = false;
      this.lastnameError.message = "";
      this.typeError.status = false;
      this.typeError.message = "";
      this.passwordError.status = false;
      this.passwordError.message = "";
      this.confirmPasswordError.status = false;
      this.confirmPasswordError.message = "";
    }, 3000);

    if (this.userType == "parent") {
      this.navCtrl.navigateRoot("/homescreen");
    }
  }

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  async termsandcondition(terms) {
    const modal = await this.modalController.create({
      component: TermsandconditionPage,
      cssClass: "termsclass",
      componentProps: {
        termsaandcondition: terms,
      },
    });
    return await modal.present();
  }
}
