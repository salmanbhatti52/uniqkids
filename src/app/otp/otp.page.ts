import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { NavController, MenuController, Platform } from "@ionic/angular";
import { RestService } from "../services/rest.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-otp",
  templateUrl: "./otp.page.html",
  styleUrls: ["./otp.page.scss"],
})
export class OtpPage implements OnInit {
  pin1: any;
  pin2: any;
  pin3: any;
  pin4: any;
  pinError = {
    status: false,
    message: "",
  };
  Error = {
    status: false,
    message: "",
  };
  recoveryEmail: any;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private activatedRoute: ActivatedRoute,
    private rest: RestService,
    public platform: Platform,
    public cd: ChangeDetectorRef
  ) {
    this.recoveryEmail = this.activatedRoute.snapshot.params["email"];
    console.log("recoveryEmail::", this.recoveryEmail);
  }

  ngOnInit() {
    this.platform.keyboardDidShow.subscribe((ev) => {
      var deviceHeight = window.innerHeight;
      let keyboardHeight = ev.keyboardHeight;
      var deviceHeightAdjusted = deviceHeight - keyboardHeight; //device height adjusted
      deviceHeightAdjusted =
        deviceHeightAdjusted < 0
          ? deviceHeightAdjusted * -1
          : deviceHeightAdjusted; //only positive number
      document.getElementById("pageotp").style.height =
        deviceHeightAdjusted + 380 + "px"; //set page height
      document
        .getElementById("pageotp")
        .setAttribute("keyBoardHeight", keyboardHeight); //save keyboard height
      console.log("keyboard show", ev);

      this.cd.detectChanges();
    });

    this.platform.keyboardDidHide.subscribe((ev) => {
      setTimeout(() => {
        document.getElementById("pageotp").style.height = 100 + "%"; //device  100% height
      }, 100);

      this.cd.detectChanges();
      console.log("keyboard hide");
    });

    //keybpoardddddd --------------
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
    } else {
      elNext.setFocus();
    }
  }

  goback() {
    this.navCtrl.navigateBack("/forgotpassword");
  }
  resetpass() {
    if (this.pin1 && this.pin2 && this.pin3 && this.pin4) {
      console.log(this.pin1 + this.pin2 + this.pin3 + this.pin4);
      if (
        !this.isANumber(this.pin1) ||
        !this.isANumber(this.pin2) ||
        !this.isANumber(this.pin3) ||
        !this.isANumber(this.pin4)
      ) {
        this.pinError.status = true;
        this.pinError.message = "Pin should contain only numbers!";
        setTimeout(() => {
          this.pinError.status = false;
          this.pinError.message = "";
        }, 3000);
      } else {
        this.rest
          .sendRequest("forgot_password", {
            requestType: "match_code",
            email: this.recoveryEmail,
            code: this.pin1 + this.pin2 + this.pin3 + this.pin4,
          })
          .subscribe(
            (data: any) => {
              this.pin1 = "";
              this.pin2 = "";
              this.pin3 = "";
              this.pin4 = "";
              this.navCtrl.navigateForward([
                "/resetpassword",
                {
                  email: this.recoveryEmail,
                },
              ]);
            },
            (err) => {
              this.pinError.status = true;
              this.pinError.message = err.error.message;
              setTimeout(() => {
                this.pinError.status = false;
                this.pinError.message = "";
              }, 3000);
            }
          );
      }
    }
    if (!this.pin1 && !this.pin2 && !this.pin3 && !this.pin4) {
      this.Error.status = true;
      this.Error.message = "Pin is required";
    }
    setTimeout(() => {
      this.Error.status = false;
      this.Error.message = "";
    }, 3000);
  }

  isANumber(n) {
    const numStr = /^[0-9]+$/;
    return numStr.test(n.toString());
  }
}
