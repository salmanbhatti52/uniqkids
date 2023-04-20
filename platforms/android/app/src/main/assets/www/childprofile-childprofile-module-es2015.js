(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["childprofile-childprofile-module"],{

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

/***/ "A4im":
/*!***************************************************!*\
  !*** ./src/app/childprofile/childprofile.page.ts ***!
  \***************************************************/
/*! exports provided: ChildprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildprofilePage", function() { return ChildprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_childprofile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./childprofile.page.html */ "FhnG");
/* harmony import */ var _childprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./childprofile.page.scss */ "agoW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _services_child_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/child.service */ "ZEea");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let ChildprofilePage = class ChildprofilePage {
    constructor(navCtrl, loading, childService, route, rest) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.childService = childService;
        this.route = route;
        this.rest = rest;
        this.allergyarr = [];
        this.medicationsarr = [];
        this.foodarr = [];
        this.snackarr = [];
        this.likesarr = [];
        this.dislikesarr = [];
        this.favouritearr = [];
        this.contactsarr = [];
        this.childid = this.route.snapshot.paramMap.get('childid');
        console.log('child id', this.childid);
        this.parentid = this.route.snapshot.paramMap.get('parentid');
        console.log('parentid id', this.parentid);
        // this.childid=this.childService.childid
        // this.parentid=this.childService.parentid
        this.getdetails();
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.navigateBack('/child');
    }
    getdetails() {
        let senddata = {
            userId: this.parentid,
            childId: this.childid
        };
        this.loading.loadershow();
        this.rest.sendRequest("get_child_details", senddata).subscribe((data) => {
            console.log('get_child_details data::', data);
            this.childdetails = data.data;
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
    edit() {
        // this.loading.presentToast('In Proccess');
        this.navCtrl.navigateForward(['editchild', {
                childid: this.childid,
                parentid: this.parentid
            }]);
        this.childService.childdata = JSON.stringify(this.childdetails);
        this.childService.childid = this.childid;
        console.log('childServiceid', this.childService.childid);
        this.childService.parentid = this.parentid;
        console.log('childServiceparentid', this.childService.parentid);
    }
};
ChildprofilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _services_child_service__WEBPACK_IMPORTED_MODULE_6__["ChildService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] }
];
ChildprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-childprofile',
        template: _raw_loader_childprofile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_childprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChildprofilePage);



/***/ }),

/***/ "BF4i":
/*!*****************************************************!*\
  !*** ./src/app/childprofile/childprofile.module.ts ***!
  \*****************************************************/
/*! exports provided: ChildprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildprofilePageModule", function() { return ChildprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _childprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./childprofile-routing.module */ "Sp3E");
/* harmony import */ var _childprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./childprofile.page */ "A4im");







let ChildprofilePageModule = class ChildprofilePageModule {
};
ChildprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _childprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChildprofilePageRoutingModule"]
        ],
        declarations: [_childprofile_page__WEBPACK_IMPORTED_MODULE_6__["ChildprofilePage"]]
    })
], ChildprofilePageModule);



/***/ }),

/***/ "FhnG":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/childprofile/childprofile.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t\t  <ion-toolbar class=\"headBgGlobal\">\r\n\t\t    <ion-buttons slot=\"start\" class=\"backbtn\">\r\n\t\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t\t  </ion-buttons>\r\n\t\t  <ion-title class=\"ctitle\">Profile</ion-title>\r\n\t\t  <ion-buttons slot=\"end\" class=\"plusbtn\" (click)=\"edit()\">\r\n\t\t\t  <img src=\"assets/imgs/icons/edit.svg\">\r\n\t\t\t</ion-buttons>\r\n\t\t</ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col class=\"backbtn\" size=\"2\">\r\n        <div>\r\n          <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"8\">\r\n        <ion-text class=\"ctitle\">Profile</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col style=\"padding-top: 8px;padding-left: 20px;\" size=\"2\">\r\n        <div (click)=\"edit()\">\r\n          <img src=\"assets/imgs/icons/edit.svg\">\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\t<div class=\"wrapper\">\r\n\t\t<div class=\"main\">\r\n\t\t\t<div class=\"inner\">\r\n\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t<img src=\"{{defaultProfile}}\" width=\"145px\" height=\"135px\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t<div class=\"rtext\">{{childname}},<span style=\"font-weight:400;margin-left:3%;font-size:14px;color:#FE9805\">{{age}} years old</span></div>\r\n\t\t\t\t\t<div class=\"rtext1\">{{diagnosis}}</div>\r\n\t\t\t\t\t<div class=\"rtext2\">{{notes}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"main1\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Allergies</h6>\r\n\t\t\t<div style=\"display: flex; flex-wrap: wrap;\" >\r\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let all of allergyarr\">\r\n\t\t\t\t\t<ion-button class=\"btn\">{{all.allergy}}</ion-button>\r\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">{{all.allergy}}</ion-button> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main2\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Medications Alarms</h6>\r\n\t\t\t<div style=\"display: flex;flex-wrap: wrap;\">\r\n\t\t\t\t<div class=\"medicationdiv\" *ngFor=\"let med of medicationsarr\">\r\n\t\t\t\t\t<div class=\"medication1\">\r\n\t\t\t\t\t\t<div class=\"mtext\">{{med.medicationname}}</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">{{med.medicationtime}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class=\"medication2\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Medications 2</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">12:30 pm</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"medication3\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Medications 3</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">08:00 am</div>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\t\t\r\n\t</div>\r\n\r\n\t<div class=\"main1\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Eating Times</h6>\r\n\t\t\t<div style=\"display: flex;flex-wrap: wrap;\">\r\n\t\t\t\t<div class=\"medicationdiv\"  *ngFor=\"let eat of foodarr\">\r\n\t\t\t\t\t<div class=\"medication1\">\r\n\t\t\t\t\t\t<div class=\"mtext\">{{eat.foodname}}</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">{{eat.eatingtime}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class=\"medication2\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Eating Time 2</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">12:30 pm</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"medication3\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Eating Time 3</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">08:00 am</div>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\t\r\n\t</div>\r\n\r\n\t<div class=\"main2\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Snack Times</h6>\r\n\t\t\t<div style=\"display: flex;flex-wrap: wrap;\">\r\n\t\t\t\t<div class=\"medicationdiv\" *ngFor=\"let snack of snackarr\">\r\n\t\t\t\t\t<div class=\"medication1\">\r\n\t\t\t\t\t\t<div class=\"mtext\">{{snack.snackname}}</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">{{snack.snacktime}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class=\"medication2\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Snack Time 2</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">12:30 pm</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"medication3\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Snack Time 3</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">08:00 am</div>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\t\r\n\t</div>\r\n\r\n\t<div class=\"main1\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Likes</h6>\r\n\t\t\t<div style=\"display: flex;flex-wrap: wrap;\">\r\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let like of likesarr\">\r\n\t\t\t\t\t<ion-button class=\"btn\">{{like.likes}}</ion-button>\r\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">Outdoor games</ion-button> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main2\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Dislikes</h6>\r\n\t\t\t<div style=\"display: flex;flex-wrap: wrap;\">\r\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let dislike of dislikesarr\">\r\n\t\t\t\t\t<ion-button class=\"btn\">{{dislike.dislikes}}</ion-button>\r\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">Outdoor games</ion-button> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main1\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Favorite activities</h6>\r\n\t\t\t<div style=\"display: flex;flex-wrap: wrap;\">\r\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let fav of favouritearr\">\r\n\t\t\t\t\t<ion-button class=\"btn\">{{fav.favourite}}</ion-button>\r\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">Outdoor games</ion-button> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main2\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Emergency phone numbers</h6>\r\n\t\t\t<div style=\"display: flex;flex-wrap: wrap;\">\r\n\t\t\t\t<div class=\"calldiv\" *ngFor=\"let num of contactsarr\">\r\n\t\t\t\t\t<div class=\"contactdiv\">\r\n\t\t\t\t\t\t<div class=\"icondiv\">\r\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p>{{num.contact}}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class=\"contactdiv1\">\r\n\t\t\t\t\t\t<div class=\"icondiv\">\r\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p>+1 412 688 699</p>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main1\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Pediatrician</h6>\r\n\t\t\t<div class=\"para\">{{pediatrician}}</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main2\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Insurance information</h6>\r\n\t\t\t<div class=\"para\">{{insuranceinfo}}</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main1\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Special instructions</h6>\r\n\t\t\t<div class=\"para\">{{instruction}}</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main2\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Additional notes</h6>\r\n\t\t\t<div class=\"para\">{{notes}}</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\t\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "Sp3E":
/*!*************************************************************!*\
  !*** ./src/app/childprofile/childprofile-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ChildprofilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildprofilePageRoutingModule", function() { return ChildprofilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _childprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./childprofile.page */ "A4im");




const routes = [
    {
        path: '',
        component: _childprofile_page__WEBPACK_IMPORTED_MODULE_3__["ChildprofilePage"]
    }
];
let ChildprofilePageRoutingModule = class ChildprofilePageRoutingModule {
};
ChildprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChildprofilePageRoutingModule);



/***/ }),

/***/ "agoW":
/*!*****************************************************!*\
  !*** ./src/app/childprofile/childprofile.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 12px;\n  padding-left: 18px;\n}\n\n.plusbtn {\n  margin-right: 3%;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 15px;\n  padding-left: 18px;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 8% auto;\n}\n\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.left img {\n  border-radius: 7px;\n}\n\n.inner {\n  padding: 2% 3%;\n  display: flex;\n}\n\n.right {\n  margin-left: 5%;\n  width: 50%;\n  margin-top: 1%;\n}\n\n.rtext {\n  font-size: 20px;\n  font-weight: bold;\n  color: #000000;\n}\n\n.rtext1 {\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 3%;\n  color: #FE9805;\n}\n\n.rtext2 {\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 4%;\n  overflow: hidden;\n  height: 90px;\n}\n\n.main1 {\n  background: #fff;\n}\n\n.inner1 {\n  width: 85%;\n  margin: 0% auto;\n  padding: 3% 0%;\n}\n\n.btndiv {\n  margin-top: 3%;\n  margin-right: 5%;\n}\n\n.btn {\n  --background: #000000;\n  --box-shadow: none;\n  --border-radius: 7px;\n  /*width: 20%;*/\n  --padding-start: 20px;\n  --padding-end: 20px;\n  height: 35px;\n}\n\n.btn1 {\n  --background: #000000;\n  --box-shadow: none;\n  --border-radius: 7px;\n  /*width: 20%;*/\n  --padding-start: 20px;\n  --padding-end: 20px;\n  height: 35px;\n  margin-left: 4%;\n}\n\n.medicationdiv {\n  display: flex;\n  margin-top: 3%;\n  margin-right: 15%;\n}\n\n.medication2 {\n  margin-left: 10%;\n}\n\n.medication3 {\n  margin-left: 11%;\n}\n\n.mtext {\n  color: #000000;\n  font-size: 12px;\n  margin-top: 3%;\n}\n\n.mtext2 {\n  color: #000000;\n  font-weight: bold;\n  font-size: 12px;\n  text-align: center;\n  margin-top: 3%;\n}\n\n.calldiv {\n  display: flex;\n}\n\n.icondiv {\n  padding-top: 3px;\n}\n\n.contactdiv {\n  display: flex;\n  margin-top: 5%;\n  width: 100%;\n  margin-right: 30px;\n}\n\n.contactdiv p {\n  margin: 0px;\n  margin-left: 15px;\n}\n\n.contactdiv1 {\n  display: flex;\n  margin-top: 5%;\n  margin-left: 10%;\n  width: 100%;\n}\n\n.contactdiv1 p {\n  margin: 0px;\n  padding-left: 10%;\n}\n\n.para {\n  font-size: 14px;\n  margin-top: 1%;\n  color: #000000;\n}\n\n@media only screen and (max-width: 320px) {\n  .rtext2 {\n    font-size: 12px;\n    font-weight: 400;\n    margin-top: 5%;\n  }\n\n  .right {\n    margin-left: 5%;\n    width: 55%;\n    margin-top: 1%;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  .rtext2 {\n    font-size: 13px;\n    font-weight: 400;\n    margin-top: 5%;\n  }\n\n  .right {\n    margin-left: 5%;\n    width: 55%;\n    margin-top: 1%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoaWxkcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNDLFdBQUE7QUFFRDs7QUFBQTtFQUNDLGVBQUE7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDQyxnQkFBQTtBQUlEOztBQUZBO0VBQ0UsVUFBQTtBQUtGOztBQUZBO0VBRUUsZUFBQTtFQUNFLGdCQUFBO0FBSUo7O0FBRkE7RUFDQyxrQkFBQTtFQUFvQixnQkFBQTtBQU1yQjs7QUFIQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBT3RCOztBQUxDO0VBQ0MscUJBQUE7RUFDQSxjQUFBO0FBT0Y7O0FBTEc7RUFDRCxlQUFBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtBQU9IOztBQUpBO0VBQ0UscUJBQUE7QUFPRjs7QUFMQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBUUQ7O0FBTEE7RUFDQyxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBUUQ7O0FBTkE7RUFDQyxrQkFBQTtBQVNEOztBQVBBO0VBQ0MsY0FBQTtFQUNBLGFBQUE7QUFVRDs7QUFSQTtFQUNDLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQVdEOztBQVRBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVlEOztBQVZBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFhRDs7QUFYQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFjRDs7QUFaQTtFQUNDLGdCQUFBO0FBZUQ7O0FBYkE7RUFDQyxVQUFBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7QUFnQkY7O0FBZEE7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7QUFpQkQ7O0FBZkE7RUFDQyxxQkFBQTtFQUNHLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFrQko7O0FBaEJBO0VBQ0MscUJBQUE7RUFDRyxrQkFBQTtFQUNBLG9CQUFBO0VBQ0QsY0FBQTtFQUNDLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQW1CSjs7QUFqQkE7RUFDQyxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBb0JEOztBQWxCQTtFQUNDLGdCQUFBO0FBcUJEOztBQW5CQTtFQUNDLGdCQUFBO0FBc0JEOztBQXBCQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXVCRDs7QUFyQkE7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBd0JEOztBQXRCQTtFQUNDLGFBQUE7QUF5QkQ7O0FBdkJBO0VBQ0MsZ0JBQUE7QUEwQkQ7O0FBeEJBO0VBQ0MsYUFBQTtFQUNBLGNBQUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7QUEyQkY7O0FBekJBO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0FBNEJEOztBQTFCQTtFQUNDLGFBQUE7RUFDQSxjQUFBO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0FBNkJGOztBQTNCQTtFQUNDLFdBQUE7RUFDQSxpQkFBQTtBQThCRDs7QUE1QkE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUErQkQ7O0FBNUJBO0VBQ0M7SUFDQyxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBK0JBOztFQTVCRDtJQUNDLGVBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtFQStCQTtBQUNGOztBQTdCQztFQUNBO0lBQ0MsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQStCQTs7RUE1QkQ7SUFDQyxlQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUErQkE7QUFDRiIsImZpbGUiOiJjaGlsZHByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6MSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuLmJhY2tidG57XHJcblx0bWFyZ2luLWxlZnQ6MCU7XHJcbiAgcGFkZGluZy10b3A6MTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbn1cclxuLnBsdXNidG57XHJcblx0bWFyZ2luLXJpZ2h0OjMlO1xyXG59XHJcbi5iYWNrU3ZnIHtcclxuICBmaWxsOiAjMzMzO1xyXG59XHJcblxyXG4uY3RpdGxle1xyXG5cdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50aXRsZWNsYXNze1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4uaW9ze1xyXG5cdC50aXRsZWNsYXNze1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTFweDtcclxuXHR9XHJcblx0LmhlYWRCZyB7XHJcblx0XHQtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcblx0XHRwYWRkaW5nOjMlIDAlO1xyXG5cdCAgfVxyXG5cdCAgLmJhY2tidG57XHJcblx0XHRtYXJnaW4tbGVmdDowJTtcclxuXHQgIHBhZGRpbmctdG9wOjE1cHg7XHJcblx0ICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcblx0fVxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6OTAlO1xyXG5cdG1hcmdpbjo4JSBhdXRvO1xyXG59XHJcblxyXG4ubWFpbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmxlZnQgaW1ne1xyXG5cdGJvcmRlci1yYWRpdXM6N3B4O1xyXG59XHJcbi5pbm5lcntcclxuXHRwYWRkaW5nOjIlIDMlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnJpZ2h0e1xyXG5cdG1hcmdpbi1sZWZ0OiA1JTtcclxuXHR3aWR0aDogNTAlO1xyXG5cdG1hcmdpbi10b3A6MSU7XHJcbn1cclxuLnJ0ZXh0e1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG5cdGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5ydGV4dDF7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OjUwMDtcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxuXHRjb2xvcjogI0ZFOTgwNTtcclxufVxyXG4ucnRleHQye1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRmb250LXdlaWdodDo0MDA7XHJcblx0bWFyZ2luLXRvcDogNCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRoZWlnaHQ6IDkwcHg7XHJcbn1cclxuLm1haW4xe1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmlubmVyMXtcclxuXHR3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMCUgYXV0bztcclxuICBwYWRkaW5nOiAzJSAwJTtcclxufVxyXG4uYnRuZGl2e1xyXG5cdG1hcmdpbi10b3A6IDMlO1xyXG5cdG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuLmJ0bntcclxuXHQtLWJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIC8qd2lkdGg6IDIwJTsqL1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG4uYnRuMXtcclxuXHQtLWJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgLyp3aWR0aDogMjAlOyovXHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xyXG59XHJcbi5tZWRpY2F0aW9uZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcblx0bWFyZ2luLXJpZ2h0OiAxNSU7XHJcbn1cclxuLm1lZGljYXRpb24ye1xyXG5cdG1hcmdpbi1sZWZ0OiAxMCVcclxufVxyXG4ubWVkaWNhdGlvbjN7XHJcblx0bWFyZ2luLWxlZnQ6IDExJVxyXG59XHJcbi5tdGV4dHtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxufVxyXG4ubXRleHQye1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxufVxyXG4uY2FsbGRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5pY29uZGl2e1xyXG5cdHBhZGRpbmctdG9wOiAzcHg7XHJcbn1cclxuLmNvbnRhY3RkaXZ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW4tdG9wOiA1JTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6MzBweDtcclxufVxyXG4uY29udGFjdGRpdiBwe1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jb250YWN0ZGl2MXtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhY3RkaXYxIHB7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxMCVcclxufVxyXG4ucGFyYXtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRtYXJnaW4tdG9wOiAxJTtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuXHQucnRleHQye1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdFx0bWFyZ2luLXRvcDogNSU7XHJcblx0fVxyXG5cclxuXHQucmlnaHR7XHJcblx0XHRtYXJnaW4tbGVmdDogNSU7XHJcblx0XHR3aWR0aDogNTUlO1xyXG5cdFx0bWFyZ2luLXRvcDoxJTtcclxuXHR9XHJcbn1cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIHtcclxuXHQucnRleHQye1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdFx0bWFyZ2luLXRvcDogNSU7XHJcblx0fVxyXG5cclxuXHQucmlnaHR7XHJcblx0XHRtYXJnaW4tbGVmdDogNSU7XHJcblx0XHR3aWR0aDogNTUlO1xyXG5cdFx0bWFyZ2luLXRvcDoxJTtcclxuXHR9XHJcblxyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=childprofile-childprofile-module-es2015.js.map