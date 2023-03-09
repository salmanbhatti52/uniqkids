import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let EditchildPage = class EditchildPage {
    constructor(navCtrl, childService, editchildService, camera, alertCtrl, loading, rest, route) {
        this.navCtrl = navCtrl;
        this.childService = childService;
        this.editchildService = editchildService;
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
        this.medicationsarr = [];
        this.foodarr = [];
        this.snackarr = [];
        this.likesarr = [];
        this.dislikesarr = [];
        this.favouritearr = [];
        this.contactsarr = [];
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
        this.array1 = [];
        this.emergencycontacts = [];
        this.error = {
            status: false,
            message: "",
        };
        this.userid = localStorage.getItem('uid');
        console.log('userid', this.userid);
        console.log('allergies', this.allergies);
        this.childid = this.childService.childid;
        console.log('child id', this.childid);
        this.parentid = this.childService.parentid;
        console.log('parentid id', this.parentid);
        this.getdetails();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.medicationname = this.editchildService.medication;
        console.log('medication', this.medicationname);
        this.foodname = this.editchildService.food;
        console.log('food', this.foodname);
        this.snackname = this.editchildService.snack;
        console.log('snack', this.snackname);
        this.nooflikes = this.editchildService.likes;
        console.log('likes', this.nooflikes);
        this.noofdislkikes = this.editchildService.dislikes;
        console.log('dislikes', this.noofdislkikes);
        this.nooffavorite = this.editchildService.favorite;
        console.log('favorite', this.nooffavorite);
    }
    goback() {
        this.navCtrl.navigateBack('/child');
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
            // this.array.push(data);
            this.numberarray.push(this.contacts);
            console.log('t', this.numberarray);
            this.contacts = '';
        }
        if (!this.contacts) {
            console.log('nullllllllll');
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
    getdetails() {
        this.loading.loadershow();
        this.array = [];
        this.array1 = [];
        this.med = [];
        let senddata = {
            userId: this.parentid,
            childId: this.childid
        };
        this.rest.sendRequest("get_child_details", senddata).subscribe((data) => {
            console.log('get_child_details data::', data);
            this.loading.hideLoader();
            if (data.data.profile_picture == null) {
                this.defaultProfile = 'assets/imgs/child.png';
            }
            else {
                this.defaultProfile = data.data.profile_picture;
            }
            this.childname = data.data.child_name;
            this.age = data.data.age;
            this.diagnosis = data.data.diagnosis;
            this.pediatrician = data.data.pediatrician;
            this.instructions = data.data.special_instructions;
            this.insuranceinfo = data.data.insurance_info;
            this.notes = data.data.additional_notes;
            data.data.allergies.forEach(val => {
                console.log('allergies array', val);
                let data = {
                    allergy: val.allergy
                };
                this.array1.push(val.allergy);
                this.allergies = this.array1.toString();
                console.log('allergies:', this.array1);
            });
            // console.log('allergyarr',this.allergyarr);
            data.data.medications.forEach(val => {
                let data = {
                    medicationname: val.medication_name,
                    medicationtime: val.medication_time
                };
                this.medicationsarr.push(data);
                this.med = this.medicationsarr;
            });
            console.log('medications', this.med);
            data.data.emergency_contacts.forEach(val => {
                let data = {
                    phoneno: val.emergency_contact
                };
                this.numberarray.push(data);
                this.emergencycontacts.push(val.emergency_contact);
            });
            console.log('contactsarr', this.numberarray);
        });
    }
    medication() {
        console.log('medication', this.med);
        this.navCtrl.navigateForward(['/editmedication', {
                medication: JSON.stringify(this.med)
            }]);
        // this.editchildService.editpage='edit';
    }
    eating() {
        this.navCtrl.navigateForward('/editeating');
        // this.editchildService.editpage='edit';
    }
    snack() {
        this.navCtrl.navigateForward('/editsnack');
        // this.editchildService.editpage='edit';
    }
    likes() {
        this.navCtrl.navigateForward('/editlikes');
        // this.editchildService.editpage='edit';
    }
    dislikes() {
        this.navCtrl.navigateForward('/editdislikes');
        // this.editchildService.editpage='edit';
    }
    favorite() {
        this.navCtrl.navigateForward('/editfavorite');
        // this.editchildService.editpage='edit';
    }
    gotoprofile() {
        this.allergies;
        this.allergiesarr = this.allergies.split(",");
        console.log('allergies', this.allergiesarr);
        if (this.childname && this.diagnosis && this.allergies.length > 0 && this.numberarray.length > 0 && this.pediatrician &&
            this.insuranceinfo && this.instructions && this.notes) {
            let fields = {
                childId: this.childid,
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
                emergencyContacts: this.emergencycontacts,
                pediatrician: this.pediatrician,
                insuranceInfo: this.insuranceinfo,
                specialInstructions: this.instructions,
                additionalNotes: this.notes
            };
            this.loading.loadershow();
            this.rest.sendRequest("edit_child", fields).subscribe((data) => {
                console.log('add child data::', data);
                if (data.status == 'success') {
                    this.loading.hideLoader();
                    this.navCtrl.navigateForward('/child');
                }
                if (data.status == 'error') {
                    this.loading.hideLoader();
                    console.log('signup request data:', data.status);
                    this.error.status = true;
                    this.error.message = data.message;
                    setTimeout(() => {
                        this.error.status = false;
                        this.error.message = "";
                    }, 3000);
                    return;
                }
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
        if (this.numberarray.length == 0) {
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
EditchildPage = __decorate([
    Component({
        selector: 'app-editchild',
        templateUrl: './editchild.page.html',
        styleUrls: ['./editchild.page.scss'],
    })
], EditchildPage);
export { EditchildPage };
//# sourceMappingURL=editchild.page.js.map