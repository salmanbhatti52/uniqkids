(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["childprofile1-childprofile1-module"],{

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

/***/ "WtSg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/childprofile1/childprofile1.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t<ion-toolbar class=\"headBgGlobal\">\r\n\t\t<ion-row>\r\n\t\t\t<ion-col class=\"backbtn\" size=\"2\">\r\n\t\t\t  <div>\r\n\t\t\t\t<img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t\t\t  </div>\r\n\t\t\t</ion-col>\r\n\t  \r\n\t\t\t<ion-col class=\"titleclass\" size=\"8\">\r\n\t\t\t  <ion-text class=\"ctitle\">Profile</ion-text>\r\n\t\t\t</ion-col>\r\n\t  \r\n\t\t\t<ion-col size=\"2\">\r\n\t  \r\n\t\t\t</ion-col>\r\n\t\t  </ion-row>\r\n\t  <!-- <ion-buttons slot=\"start\" class=\"backbtn\">\r\n\t    <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t  </ion-buttons>\r\n\t  <ion-title class=\"ctitle\">Profile</ion-title> -->\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\t<ion-segment\r\n      id=\"segment\"\r\n      mode=\"ios\"\r\n      (ionChange)=\"segmentChanged($event)\"\r\n      #mySegment>\r\n    <ion-segment-button mode=\"ios\" value=\"child\">\r\n      <ion-label>Child</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button checked mode=\"ios\" value=\"parent\">\r\n      <ion-label>Parent</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <div *ngIf=\"requestsType=='child'\">\r\n\t  <div class=\"wrapper\">\r\n\t\t\t<div class=\"main\" (click)=\"gotoprofile()\">\r\n\t\t\t\t<div class=\"inner\">\r\n\t\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t\t<img src=\"{{defaultProfile}}\" width=\"145px\" height=\"135px\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t\t<div class=\"rtext\">{{childname}},<span style=\"font-weight:400;margin-left:3%;font-size:14px;color:#FE9805\">{{age}} years old</span></div>\r\n\t\t\t\t\t\t<div class=\"rtext1\">{{diagnosis}}</div>\r\n\t\t\t\t\t\t<div class=\"rtext2\">{{notes}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"main1\">\r\n\t\t\t<div class=\"inner1\">\r\n\t\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Allergies</h6>\r\n\t\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let all of allergyarr\">\r\n\t\t\t\t\t<ion-button class=\"btn\">{{all.allergy}}</ion-button>\r\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">{{all.allergy}}</ion-button> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\t\r\n\t\t</div>\r\n\r\n\t\t<div class=\"main2\">\r\n\t\t\t<div class=\"inner1\">\r\n\t\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Medications Alarms</h6>\r\n\t\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t<div class=\"medicationdiv\" *ngFor=\"let med of medicationsarr\">\r\n\t\t\t\t\t<div class=\"medication1\">\r\n\t\t\t\t\t\t<div class=\"mtext\">{{med.medicationname}}</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">{{med.medicationtime}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class=\"medication2\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Medications 2</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">12:30 pm</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"medication3\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Medications 3</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">08:00 am</div>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\t\t\r\n\t\t</div>\r\n\r\n\t\t<div class=\"main1\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Eating Times</h6>\r\n\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t<div class=\"medicationdiv\"  *ngFor=\"let eat of foodarr\">\r\n\t\t\t\t\t<div class=\"medication1\">\r\n\t\t\t\t\t\t<div class=\"mtext\">{{eat.foodname}}</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">{{eat.eatingtime}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class=\"medication2\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Eating Time 2</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">12:30 pm</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"medication3\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Eating Time 3</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">08:00 am</div>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\t\r\n\t</div>\r\n\r\n\t<div class=\"main2\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Snack Times</h6>\r\n\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t<div class=\"medicationdiv\" *ngFor=\"let snack of snackarr\">\r\n\t\t\t\t\t<div class=\"medication1\">\r\n\t\t\t\t\t\t<div class=\"mtext\">{{snack.snackname}}</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">{{snack.snacktime}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class=\"medication2\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Snack Time 2</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">12:30 pm</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"medication3\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Snack Time 3</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">08:00 am</div>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\t\r\n\t</div>\r\n\r\n\t<div class=\"main1\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Likes</h6>\r\n\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let like of likesarr\">\r\n\t\t\t\t\t<ion-button class=\"btn\">{{like.likes}}</ion-button>\r\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">Outdoor games</ion-button> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main2\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Dislikes</h6>\r\n\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let dislike of dislikesarr\">\r\n\t\t\t\t\t<ion-button class=\"btn\">{{dislike.dislikes}}</ion-button>\r\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">Outdoor games</ion-button> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main1\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Favorite activities</h6>\r\n\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let fav of favouritearr\">\r\n\t\t\t\t\t<ion-button class=\"btn\">{{fav.favourite}}</ion-button>\r\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">Outdoor games</ion-button> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main2\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Emergency phone numbers</h6>\r\n\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t<div class=\"calldiv\" *ngFor=\"let num of contactsarr\">\r\n\t\t\t\t\t<div class=\"contactdiv\">\r\n\t\t\t\t\t\t<div class=\"icondiv\">\r\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p>{{num.contact}}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class=\"contactdiv1\">\r\n\t\t\t\t\t\t<div class=\"icondiv\">\r\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p>+1 412 688 699</p>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main1\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Pediatrician</h6>\r\n\t\t\t<div class=\"para\">{{pediatrician}}</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main2\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Insurance information</h6>\r\n\t\t\t<div class=\"para\">{{insuranceinfo}}</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main1\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Special instructions</h6>\r\n\t\t\t<div class=\"para\">{{instruction}}</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main2\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Additional notes</h6>\r\n\t\t\t<div class=\"para\">{{notes}}</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\t\r\n  </div>\r\n\t\r\n\t<!-- -----------parent div ------------------------->\r\n\t<div *ngIf=\"requestsType=='parent'\">\r\n\t\t<div class=\"pwrapper\">\r\n\t\t\t<div class=\"pmain\">\r\n\t\t\t\t<div class=\"pinner\">\r\n\t\t\t\t\t<div class=\"plogodiv\">\r\n\t\t\t\t\t\t<img src=\"{{picUrl}}\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text\">{{fname}} {{lname}}</div>\r\n\t\t\t\t\t<div class=\"text2\">{{relationwithchild}}</div>\r\n\t\t\t\t\t<div class=\"ppara\">{{about}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"pmain2\">\r\n\t\t\t\t<div class=\"pcontactdiv\">\r\n\t\t\t\t\t<div class=\"picondiv\">\r\n\t\t\t\t\t\t<img src=\"assets/imgs/icons/sms.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p>{{email}}</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"pcontactdiv\">\r\n\t\t\t\t\t<div class=\"picondiv\">\r\n\t\t\t\t\t\t<img src=\"assets/imgs/icons/arrow.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p>{{address}}</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"pcontactdiv\">\r\n\t\t\t\t\t<div class=\"picondiv\">\r\n\t\t\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p>{{mobilenumber}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "ZiqM":
/*!*****************************************************!*\
  !*** ./src/app/childprofile1/childprofile1.page.ts ***!
  \*****************************************************/
/*! exports provided: Childprofile1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Childprofile1Page", function() { return Childprofile1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_childprofile1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./childprofile1.page.html */ "WtSg");
/* harmony import */ var _childprofile1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./childprofile1.page.scss */ "rf6e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let Childprofile1Page = class Childprofile1Page {
    constructor(navCtrl, route, loading, rest) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.loading = loading;
        this.rest = rest;
        this.allergyarr = [];
        this.medicationsarr = [];
        this.foodarr = [];
        this.snackarr = [];
        this.likesarr = [];
        this.dislikesarr = [];
        this.favouritearr = [];
        this.contactsarr = [];
        this.picUrl = 'assets/imgs/plogo.png';
        this.error = {
            status: false,
            message: "",
        };
        this.page = this.route.snapshot.paramMap.get('page');
        this.childid = this.route.snapshot.paramMap.get('childid');
        console.log('childid', this.childid);
        this.parentid = this.route.snapshot.paramMap.get('parentid');
        console.log('parentid', this.parentid);
    }
    ;
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.requestsType) {
            if (this.requestsType === 'child') {
                this.mySegment.nativeElement.children[0].click();
            }
            if (this.requestsType === 'parent') {
                this.mySegment.nativeElement.children[1].click();
            }
        }
        else {
            this.requestsType = 'child';
            this.mySegment.nativeElement.children[0].click();
        }
    }
    segmentChanged(ev) {
        console.log('requestType value', ev.detail.value);
        let data = ev.detail.value;
        this.requestsType = data;
        if (ev.detail.value === 'child') {
            this.requestsType = 'child';
            this.getdetails();
        }
        if (ev.detail.value === 'parent') {
            this.requestsType = 'parent';
            this.getprofiledata();
        }
        localStorage.setItem('requestType', this.requestsType);
    }
    goback() {
        if (this.page == 'requests') {
            this.navCtrl.navigateBack('/requests1');
        }
        else {
            this.navCtrl.navigateBack('/cghomescreen');
        }
    }
    getdetails() {
        this.medicationsarr = [];
        this.foodarr = [];
        this.snackarr = [];
        this.allergyarr = [];
        this.likesarr = [];
        this.dislikesarr = [];
        this.favouritearr = [];
        this.contactsarr = [];
        let senddata = {
            userId: this.parentid,
            childId: this.childid
        };
        this.loading.loadershow();
        this.rest.sendRequest("get_child_details", senddata).subscribe((data) => {
            console.log('get_child_details data::', data);
            this.loading.hideLoader();
            if (data.data.profile_picture == null) {
                this.defaultProfile = 'assets/imgs/profilelogo.png';
            }
            else {
                this.defaultProfile = data.data.profile_picture;
            }
            this.childname = data.data.child_name;
            this.age = data.data.age;
            this.diagnosis = data.data.diagnosis;
            this.pediatrician = data.data.pediatrician;
            this.instruction = data.data.special_instructions;
            this.insuranceinfo = data.data.insurance_info;
            this.notes = data.data.additional_notes;
            data.data.allergies.forEach(val => {
                let data = {
                    allergy: val.allergy
                };
                this.allergyarr.push(data);
            });
            console.log('allergyarr', this.allergyarr);
            data.data.medications.forEach(val => {
                let data = {
                    medicationname: val.medication_name,
                    medicationtime: val.medication_time
                };
                this.medicationsarr.push(data);
            });
            console.log('medications', this.medicationsarr);
            data.data.eating_schedule.forEach(val => {
                let data = {
                    eatingtime: val.eating_time,
                    foodname: val.food_name
                };
                this.foodarr.push(data);
            });
            console.log('foodarr', this.foodarr);
            data.data.snacks_schedule.forEach(val => {
                let data = {
                    snackname: val.snack_name,
                    snacktime: val.snack_time
                };
                this.snackarr.push(data);
            });
            console.log('snackarr', this.snackarr);
            data.data.likes.forEach(val => {
                let data = {
                    likes: val.like
                };
                this.likesarr.push(data);
            });
            console.log('likesarr', this.likesarr);
            data.data.dislikes.forEach(val => {
                let data = {
                    dislikes: val.dislike
                };
                this.dislikesarr.push(data);
            });
            console.log('dislikesarr', this.dislikesarr);
            data.data.favourite_activities.forEach(val => {
                let data = {
                    favourite: val.favourite_activity
                };
                this.favouritearr.push(data);
            });
            console.log('favouritearr', this.favouritearr);
            data.data.emergency_contacts.forEach(val => {
                let data = {
                    contact: val.emergency_contact
                };
                this.contactsarr.push(data);
            });
            console.log('contactsarr', this.contactsarr);
        });
    }
    getprofiledata() {
        this.loading.loadershow();
        this.rest.sendRequest("get_profile_details", { userId: this.parentid }).subscribe((data) => {
            console.log('get_profile_details data::', data);
            if (data.status == 'success') {
                console.log('suucesssss');
                this.loading.hideLoader();
                this.fname = data.data.first_name;
                this.lname = data.data.last_name;
                this.email = data.data.email;
                if (data.data.profile_picture == '' || data.data.profile_picture == null) {
                    this.picUrl = 'assets/imgs/plogo.png';
                }
                else {
                    this.picUrl = data.data.profile_picture;
                }
                if (data.data.relation_with_child == '' || data.data.relation_with_child == null) {
                    this.relationwithchild = 'Father/Mother....';
                }
                else {
                    this.relationwithchild = data.data.relation_with_child;
                }
                if (data.data.mobile_number == '' || data.data.mobile_number == null) {
                    this.mobilenumber = 'mobile number';
                }
                else {
                    this.mobilenumber = data.data.mobile_number;
                }
                if (data.data.street_address == '' || data.data.street_address == null) {
                    this.address = 'Address';
                }
                else {
                    this.address = data.data.street_address;
                }
                if (data.data.about == '' || data.data.about == null) {
                    this.about = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr';
                }
                else {
                    this.about = data.data.about;
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
};
Childprofile1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] }
];
Childprofile1Page.propDecorators = {
    mySegment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mySegment', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }]
};
Childprofile1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-childprofile1',
        template: _raw_loader_childprofile1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_childprofile1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Childprofile1Page);



/***/ }),

/***/ "hPhd":
/*!*******************************************************!*\
  !*** ./src/app/childprofile1/childprofile1.module.ts ***!
  \*******************************************************/
/*! exports provided: Childprofile1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Childprofile1PageModule", function() { return Childprofile1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _childprofile1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./childprofile1-routing.module */ "pcuG");
/* harmony import */ var _childprofile1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./childprofile1.page */ "ZiqM");







let Childprofile1PageModule = class Childprofile1PageModule {
};
Childprofile1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _childprofile1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Childprofile1PageRoutingModule"]
        ],
        declarations: [_childprofile1_page__WEBPACK_IMPORTED_MODULE_6__["Childprofile1Page"]]
    })
], Childprofile1PageModule);



/***/ }),

/***/ "pcuG":
/*!***************************************************************!*\
  !*** ./src/app/childprofile1/childprofile1-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: Childprofile1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Childprofile1PageRoutingModule", function() { return Childprofile1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _childprofile1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./childprofile1.page */ "ZiqM");




const routes = [
    {
        path: '',
        component: _childprofile1_page__WEBPACK_IMPORTED_MODULE_3__["Childprofile1Page"]
    }
];
let Childprofile1PageRoutingModule = class Childprofile1PageRoutingModule {
};
Childprofile1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Childprofile1PageRoutingModule);



/***/ }),

/***/ "rf6e":
/*!*******************************************************!*\
  !*** ./src/app/childprofile1/childprofile1.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 10px;\n  padding-left: 18px;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 12px;\n  padding-left: 18px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\nion-segment {\n  padding: 5px 5px;\n  border-radius: 10px;\n  margin-top: 10px;\n  --background: #EBEBEB;\n  width: 85%;\n  margin: 5% auto;\n}\n\nion-segment ion-segment-button {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 10px;\n  --background-checked: #fe9805;\n  --indicator-color: transparent !important;\n  --color: #00000;\n  --color-checked: #fff;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.left img {\n  border-radius: 7px;\n}\n\n.inner {\n  padding: 2% 3%;\n  display: flex;\n}\n\n.right {\n  margin-left: 5%;\n  width: 50%;\n  margin-top: 1%;\n}\n\n.rtext {\n  font-size: 20px;\n  font-weight: bold;\n  color: #000000;\n}\n\n.rtext1 {\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 3%;\n  color: #FE9805;\n}\n\n.rtext2 {\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 4%;\n}\n\n.main1 {\n  background: #fff;\n}\n\n.inner1 {\n  width: 85%;\n  margin: 0% auto;\n  padding: 3% 0%;\n}\n\n.btndiv {\n  margin-top: 3%;\n  margin-right: 5%;\n}\n\n.btn {\n  --background: #000000;\n  --box-shadow: none;\n  --border-radius: 7px;\n  /*width: 20%;*/\n  --padding-start: 20px;\n  --padding-end: 20px;\n  height: 35px;\n}\n\n.btn1 {\n  --background: #000000;\n  --box-shadow: none;\n  --border-radius: 7px;\n  /*width: 20%;*/\n  --padding-start: 20px;\n  --padding-end: 20px;\n  height: 35px;\n  margin-left: 4%;\n}\n\n.medicationdiv {\n  display: flex;\n  margin-top: 3%;\n  margin-right: 15%;\n}\n\n.medication2 {\n  margin-left: 10%;\n}\n\n.medication3 {\n  margin-left: 11%;\n}\n\n.mtext {\n  color: #000000;\n  font-size: 12px;\n  margin-top: 3%;\n}\n\n.mtext2 {\n  color: #000000;\n  font-weight: bold;\n  font-size: 12px;\n  text-align: center;\n  margin-top: 3%;\n}\n\n.calldiv {\n  display: flex;\n}\n\n.contactdiv {\n  display: flex;\n  margin-top: 5%;\n  width: 100%;\n  margin-right: 30px;\n}\n\n.contactdiv p {\n  margin: 0px;\n  margin-left: 15px;\n}\n\n.contactdiv1 {\n  display: flex;\n  margin-top: 5%;\n  margin-left: 10%;\n  width: 100%;\n}\n\n.contactdiv1 p {\n  margin: 0px;\n  padding-left: 10%;\n}\n\n.para {\n  font-size: 14px;\n  margin-top: 1%;\n  color: #000000;\n}\n\n@media only screen and (max-width: 320px) {\n  .rtext2 {\n    font-size: 12px;\n    font-weight: 400;\n    margin-top: 5%;\n  }\n\n  .right {\n    margin-left: 5%;\n    width: 55%;\n    margin-top: 1%;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  .rtext2 {\n    font-size: 13px;\n    font-weight: 400;\n    margin-top: 5%;\n  }\n\n  .right {\n    margin-left: 5%;\n    width: 55%;\n    margin-top: 1%;\n  }\n}\n\n/*///////////*/\n\n.pwrapper {\n  width: 90%;\n  margin: 30% auto;\n}\n\n.pmain {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.pinner {\n  text-align: center;\n  width: 80%;\n  margin: 0% auto;\n}\n\n/*.plogodiv{\n\tposition: absolute;\n    top: 92px;\n    left: 110px;\n}*/\n\n.plogodiv {\n  position: absolute;\n  top: 40px;\n  left: 115px;\n}\n\n.plogodiv img {\n  border-radius: 90px;\n  width: 140px;\n  height: 140px;\n}\n\n.text {\n  padding-top: 30%;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.text2 {\n  color: #FE9805;\n  font-size: 14px;\n  font-style: italic;\n}\n\n.ppara {\n  color: #000000;\n  font-size: 14px;\n  padding: 4% 0%;\n}\n\n.pmain2 {\n  width: 60%;\n  margin: 10% auto;\n}\n\n.pcontactdiv {\n  display: flex;\n  margin-top: 10%;\n}\n\n.pcontactdiv p {\n  margin: 0px;\n  padding-left: 10%;\n}\n\n@media only screen and (max-width: 414px) {\n  .plogodiv {\n    position: absolute;\n    top: 120px;\n    left: 135px;\n  }\n\n  .text {\n    padding-top: 27%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .pwrapper {\n    width: 90%;\n    margin: 27% auto;\n  }\n\n  .plogodiv {\n    position: absolute;\n    top: 25px;\n    left: 115px;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  .pwrapper {\n    width: 92%;\n    margin: 27% auto;\n  }\n\n  .plogodiv {\n    position: absolute;\n    top: 95px;\n    left: 120px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .plogodiv {\n    position: absolute;\n    top: 80px;\n    left: 90px;\n  }\n\n  .text {\n    padding-top: 35%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {\n  .pwrapper {\n    width: 90%;\n    margin: 18% auto;\n  }\n\n  .plogodiv {\n    position: absolute;\n    top: 70px;\n    left: 310px;\n  }\n\n  .text {\n    padding-top: 17%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoaWxkcHJvZmlsZTEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDQyxXQUFBO0FBRUQ7O0FBQUE7RUFDQyxlQUFBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQURBO0VBRUUsZUFBQTtFQUNFLGdCQUFBO0FBR0o7O0FBREE7RUFDQyxrQkFBQTtFQUFvQixnQkFBQTtBQUtyQjs7QUFGQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBTXRCOztBQUpFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFKRTtFQUNELHFCQUFBO0VBQ0EsY0FBQTtBQU1EOztBQUhBO0VBQ0UscUJBQUE7QUFNRjs7QUFKQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBT0Q7O0FBTEE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBUUY7O0FBUEU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFIQTtFQUNDLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFNRDs7QUFKQTtFQUNDLGtCQUFBO0FBT0Q7O0FBTEE7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBQVFEOztBQU5BO0VBQ0MsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBU0Q7O0FBUEE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBVUQ7O0FBUkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVdEOztBQVRBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0Es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Q0M7QUFDRjs7QUF4QkE7RUFHRTtJQUNBLFVBQUE7SUFDRSxnQkFBQTtFQXdCRjs7RUF0QkE7SUFDQSxrQkFBQTtJQUNFLFNBQUE7SUFDQSxXQUFBO0VBeUJGOztFQXZCRDtJQUNHLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQTBCRjtBQUNGIiwiZmlsZSI6ImNoaWxkcHJvZmlsZTEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6MSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuLmJhY2tidG57XHJcblx0bWFyZ2luLWxlZnQ6MCU7XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuICAuYmFja2J0bntcclxuICAgIG1hcmdpbi1sZWZ0OjAlO1xyXG4gICAgcGFkZGluZy10b3A6MTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICB9XHJcbiAgLmhlYWRCZyB7XHJcblx0LS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG5cdHBhZGRpbmc6MyUgMCU7XHJcbiAgfVxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6OTAlO1xyXG5cdG1hcmdpbjo1JSBhdXRvO1xyXG59XHJcbmlvbi1zZWdtZW50IHtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAtLWJhY2tncm91bmQ6ICNFQkVCRUI7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAtLW1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZlOTgwNTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogIzAwMDAwO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuLm1haW57XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5sZWZ0IGltZ3tcclxuXHRib3JkZXItcmFkaXVzOjdweDtcclxufVxyXG4uaW5uZXJ7XHJcblx0cGFkZGluZzoyJSAzJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5yaWdodHtcclxuXHRtYXJnaW4tbGVmdDogNSU7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRtYXJnaW4tdG9wOjElO1xyXG59XHJcbi5ydGV4dHtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRjb2xvcjogIzAwMDAwMDtcclxufVxyXG4ucnRleHQxe1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDo1MDA7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcblx0Y29sb3I6ICNGRTk4MDU7XHJcbn1cclxuLnJ0ZXh0MntcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdG1hcmdpbi10b3A6IDQlO1xyXG59XHJcbi5tYWluMXtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5pbm5lcjF7XHJcblx0d2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDAlIGF1dG87XHJcbiAgcGFkZGluZzogMyUgMCU7XHJcbn1cclxuLmJ0bmRpdntcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxuXHRtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbi5idG57XHJcblx0LS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAvKndpZHRoOiAyMCU7Ki9cclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuLmJ0bjF7XHJcblx0LS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgIC8qd2lkdGg6IDIwJTsqL1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxufVxyXG4ubWVkaWNhdGlvbmRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbi10b3A6IDMlO1xyXG5cdG1hcmdpbi1yaWdodDogMTUlO1xyXG59XHJcbi5tZWRpY2F0aW9uMntcclxuXHRtYXJnaW4tbGVmdDogMTAlXHJcbn1cclxuLm1lZGljYXRpb24ze1xyXG5cdG1hcmdpbi1sZWZ0OiAxMSVcclxufVxyXG4ubXRleHR7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcbn1cclxuLm10ZXh0MntcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcbn1cclxuLmNhbGxkaXZ7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG4uY29udGFjdGRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDozMHB4O1xyXG59XHJcbi5jb250YWN0ZGl2IHB7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbnRhY3RkaXYxe1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGFjdGRpdjEgcHtcclxuXHRtYXJnaW46IDBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDEwJVxyXG59XHJcbi5wYXJhe1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDElO1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjBweCkge1xyXG5cdC5ydGV4dDJ7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRmb250LXdlaWdodDo0MDA7XHJcblx0XHRtYXJnaW4tdG9wOiA1JTtcclxuXHR9XHJcblxyXG5cdC5yaWdodHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1JTtcclxuXHRcdHdpZHRoOiA1NSU7XHJcblx0XHRtYXJnaW4tdG9wOjElO1xyXG5cdH1cclxufVxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkge1xyXG5cdC5ydGV4dDJ7XHJcblx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRmb250LXdlaWdodDo0MDA7XHJcblx0XHRtYXJnaW4tdG9wOiA1JTtcclxuXHR9XHJcblxyXG5cdC5yaWdodHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1JTtcclxuXHRcdHdpZHRoOiA1NSU7XHJcblx0XHRtYXJnaW4tdG9wOjElO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbi8qLy8vLy8vLy8vLy8qL1xyXG4ucHdyYXBwZXJ7XHJcblx0d2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDMwJSBhdXRvO1xyXG59XHJcbi5wbWFpbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLnBpbm5lcntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwJSBhdXRvO1xyXG59XHJcbi8qLnBsb2dvZGl2e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOTJweDtcclxuICAgIGxlZnQ6IDExMHB4O1xyXG59Ki9cclxuLnBsb2dvZGl2e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGxlZnQ6IDExNXB4O1xyXG59XHJcbi5wbG9nb2RpdiBpbWd7XHJcblx0Ym9yZGVyLXJhZGl1czogOTBweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbn1cclxuLnRleHR7XHJcblx0cGFkZGluZy10b3A6IDMwJTtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZToyMHB4XHJcbn1cclxuLnRleHQye1xyXG5cdGNvbG9yOiNGRTk4MDU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4ucHBhcmF7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogNCUgMCU7XHJcbn1cclxuXHJcbi5wbWFpbjJ7XHJcblx0d2lkdGg6NjAlO1xyXG5cdG1hcmdpbjogMTAlIGF1dG87XHJcbn1cclxuLnBjb250YWN0ZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5wY29udGFjdGRpdiBwe1xyXG5cdG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCVcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkge1xyXG5cdC5wbG9nb2RpdntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTIwcHg7XHJcbiAgICBsZWZ0OiAxMzVweDtcclxuXHR9XHJcblx0LnRleHR7XHJcblx0cGFkZGluZy10b3A6IDI3JTtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZToyMHB4XHJcbn1cclxuXHJcblxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIHtcclxuXHQucHdyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdCAgbWFyZ2luOiAyNyUgYXV0bztcclxuXHR9XHJcblx0LnBsb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgbGVmdDogMTE1cHg7XHJcblx0fVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIHtcclxuXHQucHdyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTIlO1xyXG5cdCAgbWFyZ2luOiAyNyUgYXV0bztcclxuXHR9XHJcblx0LnBsb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA5NXB4O1xyXG4gICAgbGVmdDogMTIwcHg7XHJcblx0fVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMHB4KSB7XHJcblx0LnBsb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gICAgbGVmdDogOTBweDtcclxuXHR9XHJcblx0LnRleHR7XHJcblx0cGFkZGluZy10b3A6IDM1JTtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZToyMHB4XHJcbn1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpIHtcclxuICAucHdyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxOCUgYXV0bztcclxuXHR9XHJcbiAgLnBsb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgbGVmdDogMzEwcHg7XHJcblx0fVxyXG5cdC50ZXh0e1xyXG4gICAgcGFkZGluZy10b3A6IDE3JTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblx0fVxyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=childprofile1-childprofile1-module-es2015.js.map