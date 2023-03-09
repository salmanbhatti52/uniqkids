import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let ParentprofilePage = class ParentprofilePage {
    constructor(camera, alertCtrl, navctrl, loading, rest) {
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.navctrl = navctrl;
        this.loading = loading;
        this.rest = rest;
        this.defaultProfile = 'assets/imgs/profilelogo.png';
        this.mobilenumber = '';
        this.relationwithchild = '';
        this.address = '';
        this.about = '';
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
        this.userid = localStorage.getItem('uid');
        console.log('userid', this.userid);
        this.accountTypeId = localStorage.getItem('accountTypeId');
        console.log('accountTypeId', this.accountTypeId);
        this.getprofiledata();
    }
    ngOnInit() {
    }
    getprofiledata() {
        this.loading.loadershow();
        this.rest.sendRequest("get_profile_details", { userId: this.userid }).subscribe((data) => {
            console.log('get_profile_details data::', data);
            if (data.status == 'success') {
                console.log('suucesssss');
                this.fname = data.data.first_name;
                this.lname = data.data.last_name;
                this.email = data.data.email;
                if (data.data.profile_picture == '' || data.data.profile_picture == null) {
                    this.defaultProfile = this.defaultProfile;
                }
                else {
                    this.defaultProfile = data.data.profile_picture;
                }
                this.relationwithchild = data.data.relation_with_child;
                this.mobilenumber = data.data.mobile_number;
                this.address = data.data.street_address;
                this.about = data.data.about;
                this.loading.hideLoader();
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
    update() {
        if (this.mobilenumber && this.relationwithchild && this.address && this.about) {
            let profiledata = {
                userId: this.userid,
                accountTypeId: this.accountTypeId,
                profilePicture: this.picUrl,
                mobileNumber: this.mobilenumber,
                streetAddress: this.address,
                about: this.about,
                relationWithChild: this.relationwithchild
            };
            this.rest.sendRequest("update_profile", profiledata).subscribe((data) => {
                console.log('update_profile data::', data);
                if (data.status == 'success') {
                    this.loading.presentToast('Profile Update Successfully!!');
                    if (this.accountTypeId == 1) {
                        this.navctrl.navigateRoot('homescreen');
                    }
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
};
ParentprofilePage = __decorate([
    Component({
        selector: 'app-parentprofile',
        templateUrl: './parentprofile.page.html',
        styleUrls: ['./parentprofile.page.scss'],
    })
], ParentprofilePage);
export { ParentprofilePage };
//# sourceMappingURL=parentprofile.page.js.map