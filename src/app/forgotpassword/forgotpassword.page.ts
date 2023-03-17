import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { NavController, MenuController, Platform } from "@ionic/angular";
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.page.html",
  styleUrls: ["./forgotpassword.page.scss"],
})
export class ForgotpasswordPage implements OnInit {
  userType: any;
  email: any = "";
  emailError = {
    status: false,
    message: "",
  };
  error = {
    status: false,
    message: "",
  };
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loading: LoadingService,
    private rest: RestService,
    public platform: Platform,
    public cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.platform.keyboardDidShow.subscribe((ev) => {
      var deviceHeight = window.innerHeight;
      let keyboardHeight = ev.keyboardHeight;
      var deviceHeightAdjusted = deviceHeight - keyboardHeight; //device height adjusted
      deviceHeightAdjusted =
        deviceHeightAdjusted < 0
          ? deviceHeightAdjusted * -1
          : deviceHeightAdjusted; //only positive number
      document.getElementById("mypage").style.height =
        deviceHeightAdjusted + 380 + "px"; //set page height
      document
        .getElementById("mypage")
        .setAttribute("keyBoardHeight", keyboardHeight); //save keyboard height
      console.log("keyboard show", ev);

      this.cd.detectChanges();
    });

    this.platform.keyboardDidHide.subscribe((ev) => {
      setTimeout(() => {
        document.getElementById("mypage").style.height = 100 + "%"; //device  100% height
      }, 100);

      this.cd.detectChanges();
      console.log("keyboard hide");
    });

    //keybpoardddddd --------------
    this.userType = localStorage.getItem("userType");
    console.log("userType", this.userType);
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }

  goback() {
    this.navCtrl.navigateForward("/signin");
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
        email: this.email,
      };
      this.rest.sendRequest("forgot_password", Data).subscribe(
        (data: any) => {
          console.log("forgot_password data", data);
          if (data.status == "Success") {
            this.navCtrl.navigateForward([
              "/otp",
              {
                email: this.email,
              },
            ]);
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
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
