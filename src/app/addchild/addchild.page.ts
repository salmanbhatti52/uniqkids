import { ChangeDetectorRef } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { NavController, AlertController, Platform } from "@ionic/angular";
import { ChildService } from "../services/child.service";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
import { ActivatedRoute, Router } from "@angular/router";
import {
  ImagePicker,
  ImagePickerOptions,
} from "@ionic-native/image-picker/ngx";

@Component({
  selector: "app-addchild",
  templateUrl: "./addchild.page.html",
  styleUrls: ["./addchild.page.scss"],
})
export class AddchildPage implements OnInit {
  numberarray = [];
  array = [];
  defaultProfile = "";
  userid: any;
  picUrl = "";

  childid: any;
  parentid: any;
  age = 0;
  contacts = "";
  phoneno: any;
  childname = "";
  diagnosis = "";
  allergies = "";
  pediatrician = "";
  insuranceinfo = "";
  instructions = "";
  notes = "";

  allergiesarr = [];
  medicationname = [];
  foodname = [];
  snackname = [];
  nooflikes = [];
  noofdislkikes = [];
  nooffavorite = [];

  childnameError = {
    status: false,
    message: "",
  };
  diagnosisError = {
    status: false,
    message: "",
  };
  allergiesError = {
    status: false,
    message: "",
  };
  contactsError = {
    status: false,
    message: "",
  };
  pediatricianError = {
    status: false,
    message: "",
  };
  insuranceinfoError = {
    status: false,
    message: "",
  };
  instructionsError = {
    status: false,
    message: "",
  };
  notesError = {
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

  allergyarr = [];
  childdetail: any;
  constructor(
    public navCtrl: NavController,
    public childService: ChildService,
    private camera: Camera,
    private imagePicker: ImagePicker,
    public alertCtrl: AlertController,
    public loading: LoadingService,
    private rest: RestService,
    private route: ActivatedRoute,
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
      document.getElementById("pagechild").style.height =
        deviceHeightAdjusted - 90 + "px"; //set page height
      document
        .getElementById("pagechild")
        .setAttribute("keyBoardHeight", keyboardHeight); //save keyboard height
      console.log("keyboard show", ev);

      this.cd.detectChanges();
    });

    this.platform.keyboardDidHide.subscribe((ev) => {
      setTimeout(() => {
        document.getElementById("pagechild").style.height = 100 + "%"; //device  100% height
      }, 100);

      this.cd.detectChanges();
      console.log("keyboard hide");
    });

    //keybpoardddddd --------------

    this.userid = localStorage.getItem("uid");
    console.log("userid", this.userid);

    console.log("allergies", this.allergies);
    this.imagePicker.requestReadPermission();
    // this.childid = this.childService.childid
    // console.log('child id',this.childid);
    // this.parentid = this.childService.parentid
    // console.log('parentid id',this.parentid)
  }

  ionViewDidEnter() {
    this.medicationname = this.childService.medication;
    console.log("medication", this.medicationname);
    this.foodname = this.childService.food;
    console.log("food", this.foodname);
    this.snackname = this.childService.snack;
    console.log("snack", this.snackname);
    this.nooflikes = this.childService.likes;
    console.log("likes", this.nooflikes);
    this.noofdislkikes = this.childService.dislikes;
    console.log("dislikes", this.noofdislkikes);
    this.nooffavorite = this.childService.favorite;
    console.log("favorite", this.nooffavorite);

    // this.getdetails();
  }

  goback() {
    this.navCtrl.navigateBack("/child");
  }

  medication() {
    this.navCtrl.navigateForward("/medicationtime");
    // this.childService.page='add';
  }
  eating() {
    this.navCtrl.navigateForward("/eatingtime");
    // this.childService.page='add';
  }
  snack() {
    this.navCtrl.navigateForward("/snacktime");
    // this.childService.page='add';
  }
  likes() {
    this.navCtrl.navigateForward("/likes");
    // this.childService.page='add';
  }
  dislikes() {
    this.navCtrl.navigateForward("/dislikes");
    // this.childService.page='add';
  }
  favorite() {
    this.navCtrl.navigateForward("/favoriteactivities");
    // this.childService.page='add';
  }

  setValue($event: Event): void {
    this.age = parseInt(($event.target as HTMLInputElement).value, 10);
    console.log("current value", this.age);
  }

  add() {
    if (this.contacts) {
      let data = {
        phoneno: this.contacts,
      };
      this.array.push(data);
      this.numberarray.push(this.contacts);
      console.log("t", this.numberarray);
      this.contacts = "";
    } else if (!this.contacts) {
      console.log("nullllllllll");
      this.error.status = true;
      this.error.message = "Atleast one number is required";
      setTimeout(() => {
        this.error.status = false;
        this.error.message = "";
      }, 2000);
    }
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
                console.log("imagedata is = ", imageData);
                this.picUrl = imageData;
                this.defaultProfile = `data:image/png;base64,${imageData}`;
                console.log("defaultProfile is = ", this.defaultProfile);
              },
              (err) => {}
            );
          },
        },
        {
          text: "Gallery",
          handler: () => {
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
            // this.camera.getPicture(this.galleryOptions)
            // .then(async imageData => {
            //  console.log('imagedata is = ' , imageData);
            //  this.picUrl=imageData;
            //   this.defaultProfile = `data:image/png;base64,${imageData}`
            //   console.log('defaultProfile is = ' , this.defaultProfile);
            // }, err => {

            // })
          },
        },
      ],
    });
    await confirm.present();
  }

  gotoprofile() {
    if (this.allergies == "") {
      this.allergiesarr;
    } else {
      this.allergies;
      this.allergiesarr = this.allergies.split(",");
      console.log("allergies", this.allergiesarr);
    }

    if (
      this.childname &&
      this.diagnosis &&
      this.allergies.length > 0 &&
      this.pediatrician &&
      this.insuranceinfo &&
      this.instructions &&
      this.notes
    ) {
      let fields = {
        parentId: this.userid,
        profilePicture: this.picUrl,
        childName: this.childname,
        age: this.age,
        diagnosis: this.diagnosis,
        allergies: this.allergiesarr,
        medications: this.medicationname,
        eatingSchedule: this.foodname,
        snacksSchedule: this.snackname,
        likes: this.nooflikes,
        dislikes: this.noofdislkikes,
        favouriteActivities: this.nooffavorite,
        emergencyContacts: this.numberarray,
        pediatrician: this.pediatrician,
        insuranceInfo: this.insuranceinfo,
        specialInstructions: this.instructions,
        additionalNotes: this.notes,
      };
      console.log("json stringfy", JSON.stringify(fields));
      this.loading.loadershow();
      this.rest.sendRequest("add_child", fields).subscribe(
        (data: any) => {
          console.log("add child data::", data);
          if ((data.status = "success")) {
            this.loading.hideLoader();
            this.navCtrl.navigateForward("/child");

            this.childService.medication = [];
            this.childService.food = [];
            this.childService.snack = [];
            this.childService.likes = [];
            this.childService.dislikes = [];
            this.childService.favorite = [];
          }
          if (data.status == "error") {
            this.loading.hideLoader();
            console.log("add child data:", data.status);
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
    if (!this.childname) {
      this.childnameError.status = true;
      this.childnameError.message = "Field is required";
    }
    if (!this.diagnosis) {
      this.diagnosisError.status = true;
      this.diagnosisError.message = "Field is required";
    }
    if (this.allergies.length == 0) {
      this.allergiesError.status = true;
      this.allergiesError.message = "Field is required";
    }
    // if(this.array.length==0){
    //   this.contactsError.status = true;
    //   this.contactsError.message = "Field is required";
    // }
    if (!this.pediatrician) {
      this.pediatricianError.status = true;
      this.pediatricianError.message = "Field is required";
    }
    if (!this.insuranceinfo) {
      this.insuranceinfoError.status = true;
      this.insuranceinfoError.message = "Field is required";
    }
    if (!this.instructions) {
      this.instructionsError.status = true;
      this.instructionsError.message = "Field is required";
    }
    if (!this.notes) {
      this.notesError.status = true;
      this.notesError.message = "Field is required";
    }
    setTimeout(() => {
      this.childnameError.status = false;
      this.childnameError.message = "";
      this.diagnosisError.status = false;
      this.diagnosisError.message = "";
      this.allergiesError.status = false;
      this.allergiesError.message = "";
      this.contactsError.status = false;
      this.contactsError.message = "";
      this.pediatricianError.status = false;
      this.pediatricianError.message = "";
      this.insuranceinfoError.status = false;
      this.insuranceinfoError.message = "";
      this.instructionsError.status = false;
      this.instructionsError.message = "";
      this.notesError.status = false;
      this.notesError.message = "";
    }, 3000);
  }
}
