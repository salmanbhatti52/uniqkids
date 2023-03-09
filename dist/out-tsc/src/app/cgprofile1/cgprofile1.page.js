import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let Cgprofile1Page = class Cgprofile1Page {
    constructor(navCtrl, camera, alertCtrl, loading, rest) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.rest = rest;
        this.defaultProfile = 'assets/imgs/profilelogo.png';
        this.mobilenumber = '';
        this.price = '';
        this.address = '';
        this.about = '';
        this.bankname = '';
        this.accountnumber = '';
        this.mobilenumberError = {
            status: false,
            message: "",
        };
        this.relationError = {
            status: false,
            message: "",
        };
        this.addressError = {
            status: false,
            message: "",
        };
        this.aboutError = {
            status: false,
            message: "",
        };
        this.priceError = {
            status: false,
            message: "",
        };
        this.banknameError = {
            status: false,
            message: "",
        };
        this.accountnumberError = {
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
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.userid = localStorage.getItem('uid');
        console.log('userid', this.userid);
        this.accountTypeId = localStorage.getItem('accountTypeId');
        console.log('accountTypeId', this.accountTypeId);
        this.getprofiledata(this.userid);
        this.getchild(this.userid);
    }
    ionViewWillEnter() {
        if (this.profiletype) {
            if (this.profiletype === 'agency') {
                this.mySegment.nativeElement.children[0].click();
                console.log('click event', this.mySegment.nativeElement.children[0].click());
            }
            if (this.profiletype === 'caregiver') {
                this.mySegment.nativeElement.children[1].click();
            }
        }
        else {
            this.profiletype = 'agency';
            this.mySegment.nativeElement.children[0].click();
        }
    }
    getchild(userid) {
        this.rest.sendRequest("add_child", { userId: userid }).subscribe((data) => {
            console.log('add_child data::', data);
        });
    }
    segmentChanged(ev) {
        console.log('profiletype value', ev.detail.value);
        let data = ev.detail.value;
        this.profiletype = data;
        if (ev.detail.value === 'agency') {
            this.profiletype = 'agency';
            this.getprofiledata(this.userid);
        }
        if (ev.detail.value === 'caregiver') {
            this.profiletype = 'caregiver';
            this.caregiverdata();
        }
        localStorage.setItem('profiletype', this.profiletype);
    }
    getprofiledata(userid) {
        this.loading.loadershow();
        this.rest.sendRequest("get_profile_details", { userId: userid }).subscribe((data) => {
            console.log('get_profile_details data::', data);
            if (data.status == 'success') {
                console.log('suucesssss');
                this.loading.hideLoader();
                this.fname = data.data.first_name;
                this.lname = data.data.last_name;
                this.email = data.data.email;
                if (data.data.profile_picture == '' || data.data.profile_picture == null) {
                    this.defaultProfile = this.defaultProfile;
                }
                else {
                    this.defaultProfile = data.data.profile_picture;
                }
                this.price = data.data.per_hour_rate;
                this.mobilenumber = data.data.mobile_number;
                this.address = data.data.street_address;
                this.about = data.data.about;
                this.bankname = data.data.bank_name;
                this.accountnumber = data.data.account_number;
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
    viewprofile() {
        if (this.mobilenumber && this.bankname && this.address && this.about) {
            let profiledata = {
                userId: this.userid,
                accountTypeId: this.accountTypeId,
                profilePicture: this.picUrl,
                mobileNumber: this.mobilenumber,
                streetAddress: this.address,
                about: this.about,
                bankName: this.bankname,
                accountNumber: this.accountnumber,
                perHourRate: this.price
            };
            this.loading.loadershow();
            this.rest.sendRequest("update_profile", profiledata).subscribe((data) => {
                console.log('update_profile data::', data);
                if (data.status == 'success') {
                    // if(this.accountTypeId==2){
                    //   this.loading.presentToast('Profile Update Successfully!!');
                    //   this.loading.hideLoader();
                    //    this.navCtrl.navigateForward('/cgviewprofile');
                    // }
                    // if(this.accountTypeId==3){
                    this.loading.presentToast('Profile Update Successfully!!');
                    this.loading.hideLoader();
                    this.navCtrl.navigateForward('/cgviewprofile1');
                    // }
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
        if (!this.mobilenumber) {
            this.mobilenumberError.status = true;
            this.mobilenumberError.message = "Field is required";
        }
        if (!this.address) {
            this.addressError.status = true;
            this.addressError.message = "Field is required";
        }
        if (!this.price) {
            this.priceError.status = true;
            this.priceError.message = "Field is required";
        }
        if (!this.about) {
            this.aboutError.status = true;
            this.aboutError.message = "Field is required";
        }
        if (!this.bankname) {
            this.banknameError.status = true;
            this.banknameError.message = "Field is required";
        }
        if (!this.accountnumber) {
            this.accountnumberError.status = true;
            this.accountnumberError.message = "Field is required";
        }
        setTimeout(() => {
            this.mobilenumberError.status = false;
            this.mobilenumberError.message = "";
            this.addressError.status = false;
            this.addressError.message = "";
            this.priceError.status = false;
            this.priceError.message = "";
            this.aboutError.status = false;
            this.aboutError.message = "";
            this.banknameError.status = false;
            this.banknameError.message = "";
            this.accountnumberError.status = false;
            this.accountnumberError.message = "";
        }, 3000);
    }
    caregiverdata() {
        console.log('....................');
    }
};
__decorate([
    ViewChild('mySegment', { read: ElementRef })
], Cgprofile1Page.prototype, "mySegment", void 0);
Cgprofile1Page = __decorate([
    Component({
        selector: 'app-cgprofile1',
        templateUrl: './cgprofile1.page.html',
        styleUrls: ['./cgprofile1.page.scss'],
    })
], Cgprofile1Page);
export { Cgprofile1Page };
//# sourceMappingURL=cgprofile1.page.js.map