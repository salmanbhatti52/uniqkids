(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cgprofile2-cgprofile2-module"],{

/***/ "1gj3":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cgprofile2/cgprofile2.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>cgprofile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t<ion-toolbar class=\"headBgGlobal\">\r\n\t  <ion-row>\r\n\t\t  <ion-col style=\"padding-top:6px;\" size=\"2\">\r\n\t\t\t  <div>\r\n\t\t\t\t  <ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n\t  </div>\r\n\t\t  </ion-col>\r\n\r\n\t\t  <ion-col class=\"titleclass\" size=\"8\">\r\n\t\t\t  <ion-text class=\"ctitle\">Complete Profile</ion-text>\r\n\t\t  </ion-col>\r\n\r\n\t\t  <ion-col size=\"2\">\r\n\r\n\t\t  </ion-col>\r\n\t  </ion-row>\r\n\t  <!-- <ion-buttons slot=\"start\">\r\n\t\t<ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n\t  </ion-buttons>\r\n\t  <ion-title class=\"ctitle\">Complete Profile</ion-title> -->\r\n\t</ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\t\r\n\r\n\t<!-- <ion-segment\r\n    id=\"segment\"\r\n    mode=\"ios\"\r\n    (ionChange)=\"segmentChanged($event)\"\r\n      #mySegment>\r\n    <ion-segment-button mode=\"ios\" value=\"agency\">\r\n      <ion-label>Agency Profile</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button checked mode=\"ios\" value=\"caregiver\">\r\n      <ion-label>Caregivers Profile</ion-label>\r\n    </ion-segment-button>\r\n\t</ion-segment> -->\r\n\r\n\t<div class=\"wrapper\">\r\n\t\t\r\n\t\t\r\n\r\n\t\t\r\n\t\t\r\n\t\t\t<div class=\"logodiv\" (click)=\"uploadPic()\">\r\n\t\t\t\t<img src=\"{{defaultProfile}}\">\r\n\t\t\t\r\n\t\t\t</div>\r\n\t\t\r\n\t\t\t<div class=\"fields\">\r\n\t\t\t\t<div class=\"inputdiv\">\r\n\t\t\t\t\t<div class=\"pinput\">\r\n\t\t\t\t\t\t<ion-input placeholder=\"name\" type=\"text\" [(ngModel)]=\"cname\"></ion-input>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n      <p *ngIf=\"nameError.status\" class=\"error\">\r\n\t\t    {{nameError.message}}\r\n\t\t  </p>\r\n\r\n\t\t\t<div class=\"fields\">\r\n\t\t\t\t<div class=\"inputdiv\">\r\n\t\t\t\t\t<div class=\"pinput\">\r\n\t\t\t\t\t\t<ion-input placeholder=\"Email\" type=\"email\" [(ngModel)]=\"cemail\"></ion-input>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n      \t<p *ngIf=\"emailError.status\" class=\"error\">\r\n\t\t\t    {{emailError.message}}\r\n\t\t\t  </p>\r\n      \r\n\t\t\t<div class=\"fields\">\r\n\t\t\t\t<div class=\"inputdiv\">\r\n\t\t\t\t\t<div class=\"pinput\">\r\n\t\t\t\t\t\t<ion-input placeholder=\"Mobile number\" type=\"tel\" [(ngModel)]=\"cmobilenumber\"></ion-input>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<p *ngIf=\"mobilenumberError.status\" class=\"error\">\r\n\t\t    {{mobilenumberError.message}}\r\n\t\t  </p>\r\n\r\n\t\t\t<div class=\"fields\">\r\n\t\t\t\t<div class=\"inputdiv\">\r\n\t\t\t\t\t<div class=\"pinput\">\r\n\t\t\t\t\t\t<ion-input placeholder=\"Street address\" type=\"text\" [(ngModel)]=\"caddress\"></ion-input>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<p *ngIf=\"addressError.status\" class=\"error\">\r\n\t\t    {{addressError.message}}\r\n\t\t  </p>\r\n\r\n\t\t\t<!-- <div class=\"fields\">\r\n\t\t\t\t<div class=\"inputdiv\">\r\n\t\t\t\t\t<div class=\"pinput\">\r\n\t\t\t\t\t\t<ion-input placeholder=\"Per hour USD rate\" type=\"tel\" [(ngModel)]=\"cprice\"></ion-input>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div> -->\r\n\r\n\t\t\t<!-- <p *ngIf=\"priceError.status\" class=\"error\">\r\n\t\t    {{priceError.message}}\r\n\t\t  </p> -->\r\n\r\n\t\t\t<div class=\"fields\">\r\n\t\t\t\t<div class=\"inputdiv\">\r\n\t\t\t\t\t<div class=\"pinput\">\r\n\t\t\t\t\t\t<ion-textarea placeholder=\"About\"  rows=\"6\" cols=\"20\" [(ngModel)]=\"cabout\"></ion-textarea>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<p *ngIf=\"aboutError.status\" class=\"error\">\r\n\t\t    {{aboutError.message}}\r\n\t\t  </p>\r\n\t\t\t\r\n\t\t\r\n\r\n\t\t<div class=\"ionbutton\" (click)=\"viewcaregiverprofile()\">\r\n\t\t\t<ion-button class=\"ib\">Done</ion-button>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "7ch9":
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let LoadingService = class LoadingService {
    constructor(toastCtrl, loadingCtrl) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.toast = true;
            return yield this.toastCtrl.create({
                message: message,
                duration: 2000,
                position: 'bottom'
            }).then(a => {
                a.present().then(() => {
                    console.log('presented');
                    if (!this.toast) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    loadershow(content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingCtrl.create({
                cssClass: 'loadingdiv',
                message: '',
            }).then((res) => {
                res.present();
            });
        });
    }
    hideLoader() {
        this.loadingCtrl.dismiss().then((res) => {
            console.log('Loading dismissed!', res);
        }).catch((error) => {
            console.log('error', error);
        });
    }
    presentLoader(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                cssClass: "ionloading",
                message,
            });
            yield this.loading.present();
        });
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ "Dv8u":
/*!*********************************************************!*\
  !*** ./src/app/cgprofile2/cgprofile2-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: Cgprofile2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cgprofile2PageRoutingModule", function() { return Cgprofile2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cgprofile2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cgprofile2.page */ "ktsA");




const routes = [
    {
        path: '',
        component: _cgprofile2_page__WEBPACK_IMPORTED_MODULE_3__["Cgprofile2Page"]
    }
];
let Cgprofile2PageRoutingModule = class Cgprofile2PageRoutingModule {
};
Cgprofile2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Cgprofile2PageRoutingModule);



/***/ }),

/***/ "bNhQ":
/*!*************************************************!*\
  !*** ./src/app/cgprofile2/cgprofile2.module.ts ***!
  \*************************************************/
/*! exports provided: Cgprofile2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cgprofile2PageModule", function() { return Cgprofile2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cgprofile2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cgprofile2-routing.module */ "Dv8u");
/* harmony import */ var _cgprofile2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cgprofile2.page */ "ktsA");







let Cgprofile2PageModule = class Cgprofile2PageModule {
};
Cgprofile2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cgprofile2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Cgprofile2PageRoutingModule"]
        ],
        declarations: [_cgprofile2_page__WEBPACK_IMPORTED_MODULE_6__["Cgprofile2Page"]]
    })
], Cgprofile2PageModule);



/***/ }),

/***/ "ktsA":
/*!***********************************************!*\
  !*** ./src/app/cgprofile2/cgprofile2.page.ts ***!
  \***********************************************/
/*! exports provided: Cgprofile2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cgprofile2Page", function() { return Cgprofile2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cgprofile2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cgprofile2.page.html */ "1gj3");
/* harmony import */ var _cgprofile2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cgprofile2.page.scss */ "sxd2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "tAfe");









let Cgprofile2Page = class Cgprofile2Page {
    constructor(navCtrl, camera, alertCtrl, imagePicker, loading, rest) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.loading = loading;
        this.rest = rest;
        this.defaultProfile = 'assets/imgs/profilelogo.png';
        this.cpicUrl = '';
        this.cname = '';
        this.cemail = '';
        this.cmobilenumber = '';
        this.cprice = '';
        this.caddress = '';
        this.cabout = '';
        this.nameError = {
            status: false,
            message: "",
        };
        this.mobilenumberError = {
            status: false,
            message: "",
        };
        this.emailError = {
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
        this.userid = localStorage.getItem('uid');
        console.log('userid', this.userid);
        this.agencycaregiverid = localStorage.getItem('agencycaregiverid');
        console.log('agencycaregiverid', this.agencycaregiverid);
        this.accountTypeId = localStorage.getItem('accountTypeId');
        console.log('accountTypeId', this.accountTypeId);
        this.imagePicker.requestReadPermission();
        this.caregiverdata();
    }
    uploadPic() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let confirm = yield this.alertCtrl.create({
                header: 'Choose from',
                cssClass: 'profileAlertBox',
                buttons: [
                    {
                        text: 'Camera',
                        handler: () => {
                            this.camera.getPicture(this.cameraOptions)
                                .then((imageData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                console.log('imagedata is = ', imageData);
                                this.cpicUrl = imageData;
                                this.defaultProfile = `data:image/png;base64,${imageData}`;
                                console.log('defaultProfile is = ', this.defaultProfile);
                            }), err => {
                            });
                        }
                    },
                    {
                        text: 'Gallery',
                        handler: () => {
                            let options = {
                                maximumImagesCount: 1,
                                outputType: 1
                            };
                            this.imagePicker.getPictures(options).then((results) => {
                                console.log('all selected', results);
                                if (results != null) {
                                    for (var i = 0; i < results.length; i++) {
                                        console.log('each one' + results[i]);
                                        if (results[i] != "") {
                                            console.log('data:image/jpeg;base64,', results[i]);
                                            this.cpicUrl = results[i];
                                            this.defaultProfile = `data:image/png;base64,${results[i]}`;
                                        }
                                    }
                                }
                            }, (err) => {
                                console.log('error', err);
                            });
                            // this.camera.getPicture(this.galleryOptions)
                            // .then(async imageData => {
                            //  console.log('imagedata is = ' , imageData);
                            //   this.cpicUrl=imageData;
                            //   this.defaultProfile = `data:image/png;base64,${imageData}`  
                            //   console.log('defaultProfile is = ' , this.defaultProfile); 
                            // }, err => {
                            // })
                        }
                    },
                ]
            });
            yield confirm.present();
        });
    }
    caregiverdata() {
        console.log('....................');
        this.loading.loadershow();
        this.rest.sendRequest("get_agency_caregivers", { agencyCaregiverId: this.agencycaregiverid }).subscribe((data) => {
            console.log('get_agency_caregivers data::', data);
            if (data.status == 'success') {
                console.log('suucesssss');
                this.loading.hideLoader();
                this.cname = data.data.name;
                this.cemail = data.data.email;
                if (data.data.profile_picture == '' || data.data.profile_picture == null) {
                    this.defaultProfile = this.defaultProfile;
                }
                else {
                    this.defaultProfile = data.data.profile_picture;
                }
                this.cprice = data.data.per_hour_rate;
                this.cmobilenumber = data.data.mobile_number;
                this.caddress = data.data.street_address;
                this.cabout = data.data.about;
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
    viewcaregiverprofile() {
        if (this.cname && this.cemail && this.cmobilenumber && this.caddress && this.cabout) {
            if (!this.validateEmail(this.cemail)) {
                this.emailError.status = true;
                this.emailError.message = "Invalid Email address.";
                setTimeout(() => {
                    this.emailError.status = false;
                    this.emailError.message = "";
                }, 3000);
                return;
            }
            let profiledata = {
                agencyId: this.userid,
                accountTypeId: 5,
                email: this.cemail,
                name: this.cname,
                profilePicture: this.cpicUrl,
                mobileNumber: this.cmobilenumber,
                streetAddress: this.caddress,
                about: this.cabout,
            };
            this.loading.loadershow();
            this.rest.sendRequest("assign_agency_caregiver", profiledata).subscribe((data) => {
                console.log('assign_agency_caregiver data::', data);
                if (data.status == 'success') {
                    this.loading.presentToast('Profile Update Successfully!!');
                    this.loading.hideLoader();
                    this.navCtrl.navigateForward('/cgviewprofile1');
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
        if (!this.cname) {
            this.nameError.status = true;
            this.nameError.message = "Field is required";
        }
        if (!this.cemail) {
            this.emailError.status = true;
            this.emailError.message = "Field is required";
        }
        if (!this.cmobilenumber) {
            this.mobilenumberError.status = true;
            this.mobilenumberError.message = "Field is required";
        }
        if (!this.caddress) {
            this.addressError.status = true;
            this.addressError.message = "Field is required";
        }
        // if (!this.cprice) {
        //   this.priceError.status = true;
        //   this.priceError.message = "Field is required";
        // }
        if (!this.cabout) {
            this.aboutError.status = true;
            this.aboutError.message = "Field is required";
        }
        setTimeout(() => {
            this.nameError.status = false;
            this.nameError.message = "";
            this.emailError.status = false;
            this.emailError.message = "";
            this.mobilenumberError.status = false;
            this.mobilenumberError.message = "";
            this.addressError.status = false;
            this.addressError.message = "";
            this.priceError.status = false;
            this.priceError.message = "";
            this.aboutError.status = false;
            this.aboutError.message = "";
        }, 3000);
    }
    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
};
Cgprofile2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] }
];
Cgprofile2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cgprofile2',
        template: _raw_loader_cgprofile2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cgprofile2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Cgprofile2Page);



/***/ }),

/***/ "sxd2":
/*!*************************************************!*\
  !*** ./src/app/cgprofile2/cgprofile2.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\nion-segment {\n  padding: 5px 5px;\n  border-radius: 10px;\n  margin-top: 10px;\n  --background: #EBEBEB;\n  width: 85%;\n  margin: 20% auto 0%;\n}\n\nion-segment ion-segment-button {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 10px;\n  --background-checked: #fe9805;\n  --indicator-color: transparent !important;\n  --color: #00000;\n  --color-checked: #fff;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.wrapper {\n  width: 70%;\n  margin: 20% auto;\n}\n\n.logodiv {\n  /*background: #ffff;*/\n  width: 110px;\n  margin: 0% auto;\n  /*border-radius: 90px;*/\n  height: 110px;\n}\n\n.logodiv img {\n  border-radius: 90px;\n  width: 110px;\n  height: 110px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.name {\n  text-align: center;\n  font-weight: bold;\n  margin-top: 5%;\n  font-size: 20px;\n}\n\n.fields {\n  margin-top: 5%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 8px;\n  background: #FFFFFF;\n  padding: 1% 5%;\n  margin-top: 5%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10%;\n  height: 50px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNncHJvZmlsZTIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBRkY7O0FBSUE7RUFDQyxXQUFBO0FBREQ7O0FBSUE7RUFFRSxlQUFBO0VBQ0UsZ0JBQUE7QUFGSjs7QUFJQTtFQUNDLGtCQUFBO0VBQW9CLGdCQUFBO0FBQXJCOztBQUdDO0VBQ0Msa0JBQUE7RUFBb0IsaUJBQUE7QUFDdEI7O0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUVGOztBQURFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQUE7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7QUFHRDs7QUFBQTtFQUNFLHFCQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFHSjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtBQUlGOztBQUZBO0VBQ0Msa0JBQUE7RUFDRyxpQkFBQTtFQUNBLGNBQUE7RUFDSSxlQUFBO0FBS1I7O0FBRkE7RUFDQyxjQUFBO0FBS0Q7O0FBSEE7RUFDQyxhQUFBO0VBQ0csa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDSCxjQUFBO0FBTUQ7O0FBRkE7RUFFQyxXQUFBO0VBQ0EsZUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FBSUY7O0FBREE7RUFFRSxrQkFBQTtFQUNELFdBQUE7RUFDQSxlQUFBO0FBR0Q7O0FBREE7RUFHQyxZQUFBO0VBQ0MscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNDLG1CQUFBO0VBQ0QscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFHRiIsImZpbGUiOiJjZ3Byb2ZpbGUyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jaGVhZGVye1xyXG4vLyBcdHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gfVxyXG4uaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgcGFkZGluZzogMSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuICAuaGVhZEJnIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICAgIHBhZGRpbmc6IDMlIDAlO1xyXG4gIH1cclxufVxyXG4uYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbmlvbi1zZWdtZW50IHtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAtLWJhY2tncm91bmQ6ICNFQkVCRUI7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDIwJSBhdXRvIDAlO1xyXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMDtcclxuICAgIC0tbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgLS1tYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZTk4MDU7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3I6ICMwMDAwMDtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcbi53cmFwcGVye1xyXG5cdHdpZHRoOjcwJTtcclxuXHRtYXJnaW46MjAlIGF1dG87XHJcbn1cclxuXHJcbi5sb2dvZGl2e1xyXG4gIC8qYmFja2dyb3VuZDogI2ZmZmY7Ki9cclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIG1hcmdpbjogMCUgYXV0bztcclxuICAgIC8qYm9yZGVyLXJhZGl1czogOTBweDsqL1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxufVxyXG4ubG9nb2RpdiBpbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxufVxyXG4ubmFtZXtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmZpZWxkc3tcclxuXHRtYXJnaW4tdG9wOjUlO1xyXG59XHJcbi5pbnB1dGRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIHBhZGRpbmc6IDElIDUlO1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG5cclxuLnBpbnB1dFxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG9wYWNpdHk6IDQ4JTtcclxufVxyXG5cclxuLmlvbmJ1dHRvblxyXG57XHRcclxuIFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4uaWJcclxue1xyXG5cclxuXHRjb2xvcjogd2hpdGU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRkU5ODA1O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICAgLS1ib3JkZXItd2lkdGg6IDFweDsgXHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmVycm9yIHtcclxuICBjb2xvcjogI2ZmMDAwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=cgprofile2-cgprofile2-module-es2015.js.map