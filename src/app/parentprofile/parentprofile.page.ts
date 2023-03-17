import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { NavController, AlertController, Platform } from "@ionic/angular";
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
import {
  ImagePicker,
  ImagePickerOptions,
} from "@ionic-native/image-picker/ngx";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-parentprofile",
  templateUrl: "./parentprofile.page.html",
  styleUrls: ["./parentprofile.page.scss"],
})
export class ParentprofilePage implements OnInit {
  defaultProfile: any = "assets/imgs/profilelogo.png";
  userid: any;
  accountTypeId: any;

  picUrl: any;
  fname: any;
  lname: any;
  email: any;
  mobilenumber = "";
  relationwithchild = "";
  address = "";
  about = "";

  mobilenumberError = {
    status: false,
    message: "",
  };
  relationError = {
    status: false,
    message: "",
  };
  addressError = {
    status: false,
    message: "",
  };
  aboutError = {
    status: false,
    message: "",
  };

  error = {
    status: false,
    message: "",
  };

  cameraOptions: CameraOptions = {
    quality: 50,
    allowEdit: false,
    correctOrientation: true,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  };
  galleryOptions: CameraOptions = {
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    quality: 50,
    allowEdit: false,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
  };

  constructor(
    private camera: Camera,
    public alertCtrl: AlertController,
    public navctrl: NavController,
    public loading: LoadingService,
    private imagePicker: ImagePicker,
    private sanitizer: DomSanitizer,
    private rest: RestService,
    public cd: ChangeDetectorRef,
    public platform: Platform
  ) {
    this.accountTypeId = localStorage.getItem("accountTypeId");
    console.log("accountTypeId", this.accountTypeId);
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
      document.getElementById("parentpage").style.height =
        deviceHeightAdjusted - 92 + "px"; //set page height
      document
        .getElementById("parentpage")
        .setAttribute("keyBoardHeight", keyboardHeight); //save keyboard height
      console.log("keyboard show", ev);

      this.cd.detectChanges();
    });

    this.platform.keyboardDidHide.subscribe((ev) => {
      setTimeout(() => {
        document.getElementById("parentpage").style.height = 100 + "%"; //device  100% height
      }, 100);

      this.cd.detectChanges();
      console.log("keyboard hide");
    });

    //keybpoardddddd --------------
    this.imagePicker.requestReadPermission();
  }

  ionViewDidEnter() {
    this.userid = localStorage.getItem("uid");
    console.log("userid", this.userid);
    this.getprofiledata(this.userid);
  }

  getprofiledata(userid) {
    this.loading.loadershow();
    this.rest.sendRequest("get_profile_details", { userId: userid }).subscribe(
      (data: any) => {
        console.log("get_profile_details data::", data);
        if (data.status == "success") {
          console.log("suucesssss");
          this.fname = data.data.first_name;
          this.lname = data.data.last_name;
          this.email = data.data.email;
          if (
            data.data.profile_picture == "" ||
            data.data.profile_picture == null
          ) {
            this.defaultProfile = "assets/imgs/profilelogo.png";
          } else {
            this.defaultProfile = data.data.profile_picture;
          }

          this.relationwithchild = data.data.relation_with_child;
          this.mobilenumber = data.data.mobile_number;
          this.address = data.data.street_address;
          this.about = data.data.about;
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

  async uploadPic() {
    let confirm = await this.alertCtrl.create({
      header: "Choose from",
      cssClass: "profileAlertBox",
      buttons: [
        {
          text: "Camera",
          handler: () => {
            this.camera.getPicture(this.cameraOptions).then(
              async (imageData) => {
                // console.log('imagedata is = ' , imageData);
                this.picUrl = imageData;
                this.defaultProfile = `data:image/png;base64,${imageData}`;
                // console.log('defaultProfile is = ' , this.defaultProfile);
              },
              (err) => {}
            );
          },
        },
        {
          text: "Gallery",
          handler: () => {
            // this.camera.getPicture(this.galleryOptions)
            // .then(async imageData => {

            //  this.picUrl=imageData;
            //   this.defaultProfile = `data:image/png;base64,${imageData}`

            // }, err => {

            // })

            let options: ImagePickerOptions = {
              maximumImagesCount: 1,
              outputType: 1,
            };

            this.imagePicker.getPictures(options).then(
              (results) => {
                console.log("all selected", results);

                if (results != null) {
                  for (var i = 0; i < results.length; i++) {
                    console.log("each one" + results[i]);

                    if (results[i] != "") {
                      // let dturl=this.sanitizer.bypassSecurityTrustResourceUrl(results[i]);
                      // console.log('image sanitizewe:?',dturl)
                      console.log("data:image/jpeg;base64,", results[i]);
                      this.picUrl = results[i];
                      this.defaultProfile = `data:image/png;base64,${results[i]}`;
                    }
                  }
                }
              },
              (err) => {
                console.log("error", err);
              }
            );
          },
        },
      ],
    });
    await confirm.present();
  }

  update() {
    if (
      this.mobilenumber &&
      this.relationwithchild &&
      this.address &&
      this.about
    ) {
      let profiledata = {
        userId: this.userid,
        accountTypeId: this.accountTypeId,
        profilePicture: this.picUrl,
        mobileNumber: this.mobilenumber,
        streetAddress: this.address,
        about: this.about,
        relationWithChild: this.relationwithchild,
      };
      // console.log('parentprofile',JSON.stringify(profiledata))
      this.loading.loadershow();
      this.rest.sendRequest("update_profile", profiledata).subscribe(
        (data: any) => {
          console.log("update_profile data::", data);
          if (data.status == "success") {
            this.loading.hideLoader();
            this.loading.presentToast("Profile Update Successfully!!");
            //  if(this.accountTypeId==1){
            this.navctrl.navigateRoot("homescreen");
            //  }
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
    if (!this.mobilenumber) {
      this.mobilenumberError.status = true;
      this.mobilenumberError.message = "mobilenumber is required";
    }

    if (!this.relationwithchild) {
      this.relationError.status = true;
      this.relationError.message = "Field is required";
    }
    if (!this.address) {
      this.addressError.status = true;
      this.addressError.message = "Address is required";
    }
    if (!this.about) {
      this.aboutError.status = true;
      this.aboutError.message = "Field is required";
    }

    setTimeout(() => {
      this.mobilenumberError.status = false;
      this.mobilenumberError.message = "";
      this.relationError.status = false;
      this.relationError.message = "";
      this.addressError.status = false;
      this.addressError.message = "";
      this.aboutError.status = false;
      this.aboutError.message = "";
    }, 3000);
  }
}
