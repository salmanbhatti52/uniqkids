import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let AddchildPage = class AddchildPage {
    constructor(navCtrl, childService, camera, alertCtrl, loading, rest, route) {
        this.navCtrl = navCtrl;
        this.childService = childService;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.rest = rest;
        this.route = route;
        this.numberarray = [];
        this.array = [];
        this.defaultProfile = 'assets/imgs/profilelogo.png';
        this.age = 0;
        this.contacts = '';
        this.childname = '';
        this.diagnosis = '';
        this.allergies = '';
        this.pediatrician = '';
        this.insuranceinfo = '';
        this.instructions = '';
        this.notes = '';
        this.allergiesarr = [];
        this.medicationname = [];
        this.foodname = [];
        this.snackname = [];
        this.nooflikes = [];
        this.noofdislkikes = [];
        this.nooffavorite = [];
        this.childnameError = {
            status: false,
            message: "",
        };
        this.diagnosisError = {
            status: false,
            message: "",
        };
        this.allergiesError = {
            status: false,
            message: "",
        };
        this.contactsError = {
            status: false,
            message: "",
        };
        this.pediatricianError = {
            status: false,
            message: "",
        };
        this.insuranceinfoError = {
            status: false,
            message: "",
        };
        this.instructionsError = {
            status: false,
            message: "",
        };
        this.notesError = {
            status: false,
            message: "",
        };
        this.error = {
            status: false,
            message: "",
        };
        this.cameraOptions = {
            quality: 50,
            allowEdit: false,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.galleryOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 50,
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.allergyarr = [];
    }
    ngOnInit() {
        this.userid = localStorage.getItem('uid');
        console.log('userid', this.userid);
        console.log('allergies', this.allergies);
        // this.childid = this.childService.childid
        // console.log('child id',this.childid);
        // this.parentid = this.childService.parentid
        // console.log('parentid id',this.parentid)
    }
    ionViewDidEnter() {
        this.medicationname = this.childService.medication;
        console.log('medication', this.medicationname);
        this.foodname = this.childService.food;
        console.log('food', this.foodname);
        this.snackname = this.childService.snack;
        console.log('snack', this.snackname);
        this.nooflikes = this.childService.likes;
        console.log('likes', this.nooflikes);
        this.noofdislkikes = this.childService.dislikes;
        console.log('dislikes', this.noofdislkikes);
        this.nooffavorite = this.childService.favorite;
        console.log('favorite', this.nooffavorite);
        // this.getdetails();
    }
    goback() {
        this.navCtrl.navigateBack('/child');
    }
    medication() {
        this.navCtrl.navigateForward('/medicationtime');
        // this.childService.page='add';
    }
    eating() {
        this.navCtrl.navigateForward('/eatingtime');
        // this.childService.page='add';
    }
    snack() {
        this.navCtrl.navigateForward('/snacktime');
        // this.childService.page='add';
    }
    likes() {
        this.navCtrl.navigateForward('/likes');
        // this.childService.page='add';
    }
    dislikes() {
        this.navCtrl.navigateForward('/dislikes');
        // this.childService.page='add';
    }
    favorite() {
        this.navCtrl.navigateForward('/favoriteactivities');
        // this.childService.page='add';
    }
    setValue($event) {
        this.age = parseInt($event.target.value, 10);
        console.log('current value', this.age);
    }
    add() {
        if (this.contacts) {
            let data = {
                phoneno: this.contacts
            };
            this.array.push(data);
            this.numberarray.push(this.contacts);
            console.log('t', this.numberarray);
            this.contacts = '';
        }
        else if (!this.contacts) {
            console.log('nullllllllll');
            this.error.status = true;
            this.error.message = "Atleast one number is required";
            setTimeout(() => {
                this.error.status = false;
                this.error.message = "";
            }, 2000);
        }
    }
    uploadPic() {
        return __awaiter(this, void 0, void 0, function* () {
            let confirm = yield this.alertCtrl.create({
                header: 'Choose from',
                cssClass: 'profileAlertBox',
                buttons: [
                    {
                        text: 'Camera',
                        handler: () => {
                            this.camera.getPicture(this.cameraOptions)
                                .then((imageData) => __awaiter(this, void 0, void 0, function* () {
                                console.log('imagedata is = ', imageData);
                                this.picUrl = imageData;
                                this.defaultProfile = `data:image/png;base64,${imageData}`;
                                console.log('defaultProfile is = ', this.defaultProfile);
                            }), err => {
                            });
                        }
                    },
                    {
                        text: 'Gallery',
                        handler: () => {
                            this.camera.getPicture(this.galleryOptions)
                                .then((imageData) => __awaiter(this, void 0, void 0, function* () {
                                console.log('imagedata is = ', imageData);
                                this.picUrl = imageData;
                                this.defaultProfile = `data:image/png;base64,${imageData}`;
                                console.log('defaultProfile is = ', this.defaultProfile);
                            }), err => {
                            });
                        }
                    },
                ]
            });
            yield confirm.present();
        });
    }
    gotoprofile() {
        this.allergies;
        this.allergiesarr = this.allergies.split(",");
        console.log('allergies', this.allergiesarr);
        if (this.childname && this.diagnosis && this.allergies.length > 0 && this.array.length > 0 && this.pediatrician &&
            this.insuranceinfo && this.instructions && this.notes) {
            let fields = {
                userId: this.userid,
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
                additionalNotes: this.notes
            };
            this.loading.loadershow();
            this.rest.sendRequest("add_child", fields).subscribe((data) => {
                console.log('add child data::', data);
                this.loading.hideLoader();
                this.navCtrl.navigateForward('/child');
                this.childService.medication = [];
                this.childService.food = [];
                this.childService.snack = [];
                this.childService.likes = [];
                this.childService.dislikes = [];
                this.childService.favorite = [];
            }, (err) => {
            });
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
        if (this.array.length == 0) {
            this.contactsError.status = true;
            this.contactsError.message = "Field is required";
        }
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
};
AddchildPage = __decorate([
    Component({
        selector: 'app-addchild',
        templateUrl: './addchild.page.html',
        styleUrls: ['./addchild.page.scss'],
    })
], AddchildPage);
export { AddchildPage };
//# sourceMappingURL=addchild.page.js.map