import { ChangeDetectorRef } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { NavController, ModalController, Platform } from "@ionic/angular";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { RequestpopupPage } from "../requestpopup/requestpopup.page";
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  page: any;
  caregiverid: any;
  picUrl: any = "assets/imgs/profilelogo.png";
  fname: any;
  lname: any;
  email: any;
  mobilenumber: any;
  price: any;
  address: any;
  about: any;
  bankname: any;
  accountnumber: any;

  Id: any;
  error = {
    status: false,
    message: "",
  };
  logeduser: any;
  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    public modal: ModalController,
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
      document.getElementById("prpage").style.height =
        deviceHeightAdjusted - 92 + "px"; //set page height
      document
        .getElementById("prpage")
        .setAttribute("keyBoardHeight", keyboardHeight); //save keyboard height
      console.log("keyboard show", ev);

      this.cd.detectChanges();
    });

    this.platform.keyboardDidHide.subscribe((ev) => {
      setTimeout(() => {
        document.getElementById("prpage").style.height = 100 + "%"; //device  100% height
      }, 100);

      this.cd.detectChanges();
      console.log("keyboard hide");
    });

    //keybpoardddddd --------------

    this.logeduser = localStorage.getItem("uid");
    console.log("logeduser", this.logeduser);
    this.page = this.route.snapshot.paramMap.get("page");
    console.log("page coming", this.page);

    this.caregiverid = this.route.snapshot.paramMap.get("userid");
    console.log("userid:", this.caregiverid);

    this.getdetails();
  }

  goback() {
    if (this.page == "caregiver") {
      this.navCtrl.navigateBack("/caregiver");
    } else if (this.page == "requests") {
      this.navCtrl.navigateBack("/requests");
    } else if (this.page == "homescreen") {
      this.navCtrl.navigateBack("/homescreen");
    }
  }

  next() {
    this.navCtrl.navigateForward("/cgprofile");
  }

  getdetails() {
    let senddata = {
      userId: this.caregiverid,
    };
    this.rest.sendRequest("get_profile_details", senddata).subscribe(
      (data: any) => {
        console.log("get_profile_details data::", data);
        if (data.status == "success") {
          console.log("suucesssss");
          this.Id = data.data.users_id;
          this.fname = data.data.first_name;
          this.lname = data.data.last_name;
          this.email = data.data.email;
          if (
            data.data.profile_picture == "" ||
            data.data.profile_picture == null
          ) {
            this.picUrl = this.picUrl;
          } else {
            this.picUrl = data.data.profile_picture;
          }

          if (
            data.data.per_hour_rate == "" ||
            data.data.per_hour_rate == null
          ) {
            this.price = "None";
          } else {
            this.price = data.data.per_hour_rate;
          }
          if (
            data.data.mobile_number == "" ||
            data.data.mobile_number == null
          ) {
            this.mobilenumber = "None";
          } else {
            this.mobilenumber = data.data.mobile_number;
          }
          if (
            data.data.street_address == "" ||
            data.data.street_address == null
          ) {
            this.address = "None";
          } else {
            this.address = data.data.street_address;
          }
          if (data.data.about == "" || data.data.about == null) {
            this.about = "None";
          } else {
            this.about = data.data.about;
          }
          if (data.data.bank_name == "" || data.data.bank_name == null) {
            this.bankname = "None";
          } else {
            this.bankname = data.data.bank_name;
          }
          if (
            data.data.account_number == "" ||
            data.data.account_number == null
          ) {
            this.accountnumber = "None";
          } else {
            this.accountnumber = data.data.account_number;
          }
          this.loading.hideLoader();
        }
        if (data.status == "error") {
          this.loading.hideLoader();
          console.log("signup request data:", data.status);
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

  async openmodel() {
    const modal = await this.modal.create({
      component: RequestpopupPage,
      componentProps: {
        caregiverid: this.caregiverid,
        name: this.fname,
      },
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }
  sendmsg() {
    this.rest
      .sendRequest("chat", {
        requestType: "startChat",
        userId: this.logeduser,
        otherUserId: this.Id,
      })
      .subscribe(async (res: any) => {
        console.log("Start chat res", res);
        if (res.status == "success") {
          this.navCtrl.navigateForward([
            "inbox",
            {
              page: "profile",
              id: this.Id,
              name: this.fname,
            },
          ]);
        }
      });
  }
}
