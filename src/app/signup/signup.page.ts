import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import {
  NavController,
  MenuController,
  ModalController,
  Platform,
} from "@ionic/angular";
import { LoginwithuserService } from "../loginwithuser.service";
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
import { TermsandconditionPage } from "../termsandcondition/termsandcondition.page";
import { OneSignal } from "@ionic-native/onesignal/ngx";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
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

  player_id: any;
  isLoading = true;

  id: any;
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
  token: any;
  modal: any = "terms";
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
      document.getElementById("page").style.height =
        deviceHeightAdjusted - 90 + "px"; //set page height
      document
        .getElementById("page")
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
        document.getElementById("page").style.height = 100 + "%"; //device  100% height
      }, 100);

      this.cd.detectChanges();
      console.log("keyboard hide");
    });

    //keybpoardddddd --------------

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
      // alert(JSON.stringify(this.identy));
      // localStorage.setItem('deviceID', this.identy.userId);
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

  gotohome() {
    // this.token=localStorage.getItem('token')
    //   console.log('token get:',this.token)

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
      // this.navCtrl.navigateRoot('/homescreen');
      this.loading.loadershow();
      const signUpData = {
        firstName: this.firstname,
        lastName: this.lastname,
        userEmail: this.email,
        userPassword: this.password,
        confirmPassword: this.confirmPassword,
        oneSignalId: this.player_id,
        // oneSignalId: "123",
        accountTypeId: 1, //1 is for parent
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
            localStorage.setItem("accountTypeId", data.data.account_type_id);
            this.loading.presentToast("Registered Successfully!!!");
            this.navCtrl.navigateRoot("homescreen");
          }
          if (data.status == "error") {
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
      this.passwordError.status = false;
      this.passwordError.message = "";
      this.confirmPasswordError.status = false;
      this.confirmPasswordError.message = "";
    }, 3000);

    if (this.userType == "parent") {
      this.navCtrl.navigateRoot("/homescreen");
    }
    if (this.userType == "caregiver") {
      this.navCtrl.navigateRoot("/cghomescreen");
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
