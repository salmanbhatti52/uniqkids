(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cgviewprofile1-cgviewprofile1-module"],{

/***/ "3fgg":
/*!*********************************************************!*\
  !*** ./src/app/cgviewprofile1/cgviewprofile1.module.ts ***!
  \*********************************************************/
/*! exports provided: Cgviewprofile1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cgviewprofile1PageModule", function() { return Cgviewprofile1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cgviewprofile1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cgviewprofile1-routing.module */ "rESM");
/* harmony import */ var _cgviewprofile1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cgviewprofile1.page */ "T5iX");







let Cgviewprofile1PageModule = class Cgviewprofile1PageModule {
};
Cgviewprofile1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cgviewprofile1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Cgviewprofile1PageRoutingModule"]
        ],
        declarations: [_cgviewprofile1_page__WEBPACK_IMPORTED_MODULE_6__["Cgviewprofile1Page"]]
    })
], Cgviewprofile1PageModule);



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

/***/ "DkXQ":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cgviewprofile1/cgviewprofile1.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col style=\"padding-top: 6px\" size=\"2\">\n        <div>\n          <ion-menu-button class=\"menuicon\"></ion-menu-button>\n        </div>\n      </ion-col>\n\n      <ion-col class=\"titleclass\" size=\"8\">\n        <ion-text class=\"ctitle\">Profile</ion-text>\n      </ion-col>\n\n      <ion-col\n        style=\"padding-top: 8px; padding-left: 20px\"\n        size=\"2\"\n        *ngIf=\"profiletype=='agency'\"\n      >\n        <div (click)=\"completeprofile()\">\n          <img src=\"assets/imgs/icons/edit.svg\" />\n        </div>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-buttons slot=\"start\" class=\"menubtn\">\n\t\t    <ion-menu-button class=\"menuicon\"></ion-menu-button>\n\t\t  </ion-buttons>\n\t  <ion-title class=\"ctitle\">Profile</ion-title>\n\t  <ion-buttons slot=\"end\" class=\"plusbtn\" *ngIf=\"profiletype=='agency'\" (click)=\"completeprofile()\">\n\t\t  <img src=\"assets/imgs/icons/edit.svg\">\n\t\t</ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n  <ion-segment\n    id=\"segment\"\n    mode=\"ios\"\n    (ionChange)=\"segmentChanged($event)\"\n    #mySegment\n  >\n    <ion-segment-button mode=\"ios\" value=\"agency\">\n      <ion-label>Agency Profile</ion-label>\n    </ion-segment-button>\n    <ion-segment-button checked mode=\"ios\" value=\"caregiver\">\n      <ion-label>Caregivers Profile</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div *ngIf=\"profiletype=='agency'\">\n    <p style=\"font-size: 15px; text-align: center; width: 80%; margin: 5% auto\">\n      Need to change something in your profile? Edit your profile here\n    </p>\n\n    <div class=\"wrapper\">\n      <div class=\"main\">\n        <div class=\"inner\">\n          <div style=\"position: absolute; top: 10px; right: 10px\">\n            <div class=\"para\">Availbility</div>\n            <ion-toggle\n              (ionChange)=\"toggleChange($event)\"\n              class=\"ttgg\"\n              mode=\"ios\"\n              [checked]=\"availabilityStatus == 'Yes'\"\n            ></ion-toggle>\n          </div>\n\n          <div class=\"logodiv\">\n            <!-- <img src=\"assets/imgs/logo1.png\"> -->\n            <img src=\"{{picUrl}}\" />\n          </div>\n          <div class=\"text\">{{fname}} {{lname}}</div>\n          <div class=\"text2\">${{price}}/hr</div>\n          <div class=\"para\">{{about}}</div>\n        </div>\n      </div>\n\n      <div class=\"main2\">\n        <div class=\"contactdiv\">\n          <div class=\"icondiv\">\n            <img src=\"assets/imgs/icons/sms.svg\" />\n          </div>\n          <p>{{email}}</p>\n        </div>\n\n        <div class=\"contactdiv\">\n          <div class=\"icondiv\">\n            <img src=\"assets/imgs/icons/sendarrow.svg\" />\n          </div>\n          <p>{{address}}</p>\n        </div>\n\n        <div class=\"contactdiv\">\n          <div class=\"icondiv\">\n            <img src=\"assets/imgs/icons/phone.svg\" />\n          </div>\n          <p>{{mobilenumber}}</p>\n        </div>\n\n        <h6 style=\"font-size: 14px; font-weight: 500; margin-top: 15%\">\n          Bank Accout\n        </h6>\n        <div class=\"contactdiv\">\n          <div class=\"icondiv\">\n            <img src=\"assets/imgs/icons/bank.svg\" />\n          </div>\n          <p>{{bankname}}</p>\n        </div>\n        <div class=\"contactdiv\">\n          <div class=\"icondiv\">\n            <img src=\"assets/imgs/icons/accnum.svg\" />\n          </div>\n          <p>{{accountnumber}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"profiletype=='caregiver'\">\n    <div class=\"cwrapper\">\n      <div *ngFor=\"let care of caregiver\">\n        <div class=\"cmain\" (click)=\"gotoprofile(care)\">\n          <div class=\"cinner\">\n            <div class=\"left\">\n              <img src=\"{{care.profile}}\" width=\"145px\" height=\"135px\" />\n            </div>\n            <div class=\"right\">\n              <div class=\"rtext\">{{care.name}}</div>\n              <div class=\"rtext1\">${{care.price}}/hr</div>\n              <div class=\"rtext2\">{{care.about}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ionbutton\" (click)=\"gotocomplete()\">\n        <ion-button class=\"ib\">Add New</ion-button>\n      </div>\n      <!-- <div class=\"cmain\" (click)=\"gotoprofile()\">\n\t\t\t\t<div class=\"cinner\">\n\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t<img src=\"assets/imgs/caregiver.png\" width=\"145px\" height=\"135px\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t<div class=\"rtext\">Nancy Daniel</div>\n\t\t\t\t\t\t<div class=\"rtext1\">$10/hr</div>\n\t\t\t\t\t\t<div class=\"rtext2\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div> -->\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "T5iX":
/*!*******************************************************!*\
  !*** ./src/app/cgviewprofile1/cgviewprofile1.page.ts ***!
  \*******************************************************/
/*! exports provided: Cgviewprofile1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cgviewprofile1Page", function() { return Cgviewprofile1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cgviewprofile1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cgviewprofile1.page.html */ "DkXQ");
/* harmony import */ var _cgviewprofile1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cgviewprofile1.page.scss */ "sr4I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");







let Cgviewprofile1Page = class Cgviewprofile1Page {
    constructor(navCtrl, loading, rest) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.rest = rest;
        this.picUrl = "assets/imgs/profilelogo.png";
        this.availabilityStatus = "No";
        this.error = {
            status: false,
            message: "",
        };
        this.caregiver = [];
    }
    ionViewDidEnter() { }
    ngOnInit() {
        this.userid = localStorage.getItem("uid");
        console.log("userid", this.userid);
        this.accountTypeId = localStorage.getItem("accountTypeId");
        console.log("accountTypeId", this.accountTypeId);
    }
    ionViewWillEnter() {
        if (this.profiletype) {
            if (this.profiletype === "agency") {
                this.mySegment.nativeElement.children[0].click();
                this.getprofiledata(this.userid);
            }
            if (this.profiletype === "caregiver") {
                this.mySegment.nativeElement.children[1].click();
                this.caregiverdata(this.userid);
            }
        }
        else {
            this.profiletype = "agency";
            this.mySegment.nativeElement.children[0].click();
        }
    }
    segmentChanged(ev) {
        console.log("requestType value", ev.detail.value);
        let data = ev.detail.value;
        this.profiletype = data;
        if (ev.detail.value === "agency") {
            this.profiletype = "agency";
            this.getprofiledata(this.userid);
        }
        if (ev.detail.value === "caregiver") {
            this.profiletype = "caregiver";
            this.caregiverdata(this.userid);
        }
        localStorage.setItem("profiletype", this.profiletype);
    }
    getprofiledata(userid) {
        this.loading.loadershow();
        this.rest.sendRequest("get_profile_details", { userId: userid }).subscribe((data) => {
            console.log("get_profile_details data::", data);
            if (data.status == "success") {
                console.log("suucesssss");
                this.fname = data.data.first_name;
                this.lname = data.data.last_name;
                this.email = data.data.email;
                if (data.data.availability == "No" ||
                    data.data.availability == null) {
                    this.availabilityStatus = "No";
                }
                else {
                    this.availabilityStatus = "Yes";
                }
                if (data.data.profile_picture == "" ||
                    data.data.profile_picture == null) {
                    this.picUrl = "assets/imgs/profilelogo.png";
                }
                else {
                    this.picUrl = data.data.profile_picture;
                }
                if (data.data.per_hour_rate == "" ||
                    data.data.per_hour_rate == null) {
                    this.price = "None";
                }
                else {
                    this.price = data.data.per_hour_rate;
                }
                if (data.data.mobile_number == "" ||
                    data.data.mobile_number == null) {
                    this.mobilenumber = "None";
                }
                else {
                    this.mobilenumber = data.data.mobile_number;
                }
                if (data.data.street_address == "" ||
                    data.data.street_address == null) {
                    this.address = "None";
                }
                else {
                    this.address = data.data.street_address;
                }
                if (data.data.about == "" || data.data.about == null) {
                    this.about = "None";
                }
                else {
                    this.about = data.data.about;
                }
                if (data.data.bank_name == "" || data.data.bank_name == null) {
                    this.bankname = "None";
                }
                else {
                    this.bankname = data.data.bank_name;
                }
                if (data.data.account_number == "" ||
                    data.data.account_number == null) {
                    this.accountnumber = "None";
                }
                else {
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
        }, (err) => { });
    }
    caregiverdata(userid) {
        this.caregiver = [];
        console.log("....................");
        this.loading.loadershow();
        this.rest
            .sendRequest("get_agency_caregivers", { agencyId: userid })
            .subscribe((data) => {
            console.log("get_agency_caregivers data::", data);
            if (data.status == "success") {
                console.log("suucesssss");
                this.loading.hideLoader();
                data.data.forEach((val) => {
                    this.loading.hideLoader();
                    if (val.profile_picture == "" || val.profile_picture == null) {
                        this.profilepicture = "assets/imgs/profilelogo.png";
                    }
                    else {
                        this.profilepicture = val.profile_picture;
                    }
                    let Obj = {
                        agencyid: val.agency_id,
                        caregiverid: val.agency_caregiver_id,
                        profile: this.profilepicture,
                        name: val.name,
                        price: val.per_hour_rate,
                        about: val.about,
                    };
                    this.caregiver.push(Obj);
                });
                console.log("caregiver array", this.caregiver);
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
        }, (err) => { });
    }
    completeprofile() {
        this.navCtrl.navigateForward("/cgprofile1");
    }
    gotocomplete() {
        this.navCtrl.navigateForward("/cgprofile2");
    }
    gotoprofile(id) {
        this.navCtrl.navigateForward([
            "/profile1",
            {
                caregiverid: id.caregiverid,
            },
        ]);
    }
    toggleChange(event) {
        console.log(event.detail.checked);
        var val = "Yes";
        if (event.detail.checked) {
            val = "Yes";
        }
        else {
            val = "No";
        }
        var user = JSON.parse(localStorage.getItem("user"));
        console.log("userrrrrrrrrrrrrr", user.email);
        const del = {
            email: user.email,
            users_id: user.users_id,
            availability: val,
        };
        console.log(del);
        this.rest.sendRequest("availability_update", del).subscribe((res) => {
            console.log("report user result==", res);
            if (res.status == "success") {
                this.loading.presentToast(res.data);
            }
            if (res.status == "error") {
                this.loading.presentToast(res.message);
            }
        });
    }
};
Cgviewprofile1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] }
];
Cgviewprofile1Page.propDecorators = {
    mySegment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["mySegment", { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }]
};
Cgviewprofile1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-cgviewprofile1",
        template: _raw_loader_cgviewprofile1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cgviewprofile1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Cgviewprofile1Page);



/***/ }),

/***/ "rESM":
/*!*****************************************************************!*\
  !*** ./src/app/cgviewprofile1/cgviewprofile1-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: Cgviewprofile1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cgviewprofile1PageRoutingModule", function() { return Cgviewprofile1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cgviewprofile1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cgviewprofile1.page */ "T5iX");




const routes = [
    {
        path: '',
        component: _cgviewprofile1_page__WEBPACK_IMPORTED_MODULE_3__["Cgviewprofile1Page"]
    }
];
let Cgviewprofile1PageRoutingModule = class Cgviewprofile1PageRoutingModule {
};
Cgviewprofile1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Cgviewprofile1PageRoutingModule);



/***/ }),

/***/ "sr4I":
/*!*********************************************************!*\
  !*** ./src/app/cgviewprofile1/cgviewprofile1.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.menubtn {\n  margin-left: 3%;\n}\n\n.plusbtn {\n  margin-right: 3%;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 30% auto;\n}\n\nion-segment {\n  padding: 5px 5px;\n  border-radius: 10px;\n  margin-top: 10px;\n  --background: #EBEBEB;\n  width: 85%;\n  margin: 5% auto;\n}\n\nion-segment ion-segment-button {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 10px;\n  --background-checked: #fe9805;\n  --indicator-color: transparent !important;\n  --color: #00000;\n  --color-checked: #fff;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n  position: relative;\n}\n\n.inner {\n  text-align: center;\n  width: 80%;\n  margin: 0% auto;\n}\n\n.logodiv {\n  position: absolute;\n  top: 40px;\n  left: 115px;\n}\n\n.logodiv img {\n  border-radius: 90px;\n  width: 140px;\n  height: 140px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.text {\n  padding-top: 25%;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n  margin-left: 3%;\n}\n\n.text2 {\n  color: #FE9805;\n  font-size: 14px;\n  font-style: italic;\n}\n\n.para {\n  color: #000000;\n  font-size: 14px;\n  padding: 4% 0%;\n}\n\n.main2 {\n  width: 60%;\n  margin: 10% auto;\n}\n\n.contactdiv {\n  display: flex;\n  margin-top: 10%;\n}\n\n.contactdiv p {\n  margin: 0px;\n  padding-left: 10%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 25%;\n}\n\n.ib {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 80%;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10%;\n  height: 55px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n\n@media only screen and (max-width: 414px) {\n  .wrapper {\n    width: 90%;\n    margin: 25% auto;\n  }\n\n  .cwrapper {\n    width: 90%;\n    margin: 6% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: -75px;\n    left: 120px;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .wrapper {\n    width: 90%;\n    margin: 27% auto;\n  }\n\n  .cwrapper {\n    width: 90%;\n    margin: 6% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 25px;\n    left: 115px;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  .wrapper {\n    width: 90%;\n    margin: 27% auto;\n  }\n\n  .cwrapper {\n    width: 90%;\n    margin: 6% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: -80px;\n    left: 100px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .cwrapper {\n    width: 90%;\n    margin: 6% auto;\n  }\n\n  .rtext2 {\n    font-size: 12px;\n    font-weight: 400;\n    margin-top: 3%;\n  }\n\n  .right {\n    margin-left: 5%;\n    width: 55%;\n    margin-top: 1%;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: -70px;\n    left: 85px;\n  }\n\n  .logodiv img {\n    border-radius: 90px;\n    width: 120px;\n    height: 120px;\n  }\n\n  .text {\n    padding-top: 25%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {\n  .cwrapper {\n    width: 90%;\n    margin: 6% auto;\n  }\n\n  .wrapper {\n    width: 90%;\n    margin: 18% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 70px;\n    left: 310px;\n  }\n\n  .text {\n    padding-top: 17%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n\n/*/////////caregiver////////*/\n\n.cwrapper {\n  width: 90%;\n  margin: 6% auto;\n}\n\n.cmain {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.left img {\n  border-radius: 7px;\n}\n\n.cinner {\n  padding: 1% 1.5%;\n  display: flex;\n}\n\n.right {\n  margin-left: 5%;\n  width: 50%;\n  margin-top: 1%;\n}\n\n.rtext {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.rtext1 {\n  font-size: 14px;\n  font-weight: 400;\n  color: #FE9805;\n  margin-top: 3%;\n}\n\n.rtext2 {\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nndmlld3Byb2ZpbGUxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUFBO0VBQ0MsZUFBQTtBQUdEOztBQURBO0VBQ0MsZ0JBQUE7QUFJRDs7QUFGQTtFQUNFLFVBQUE7QUFLRjs7QUFGQTtFQUVFLGVBQUE7RUFDRSxnQkFBQTtBQUlKOztBQUZBO0VBQ0Msa0JBQUE7RUFBb0IsZ0JBQUE7QUFNckI7O0FBSEM7RUFDQyxrQkFBQTtFQUFvQixpQkFBQTtBQU90Qjs7QUFMQztFQUNDLHFCQUFBO0VBQ0EsY0FBQTtBQU9GOztBQUpBO0VBQ0MsVUFBQTtFQUNDLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBUUY7O0FBUEU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFOQTtFQUNDLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVNEOztBQVBBO0VBQ0Msa0JBQUE7RUFDRyxVQUFBO0VBQ0EsZUFBQTtBQVVKOztBQVJBO0VBQ0Msa0JBQUE7RUFDRyxTQUFBO0VBQ0EsV0FBQTtBQVdKOztBQVRBO0VBQ0MsbUJBQUE7RUFDRyxZQUFBO0VBQ0EsYUFBQTtFQUNILDRDQUFBO0FBWUQ7O0FBVkE7RUFDQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBYUQ7O0FBWEE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBY0Q7O0FBWkE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFlRDs7QUFaQTtFQUNDLFVBQUE7RUFDQSxnQkFBQTtBQWVEOztBQWJBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7QUFnQkQ7O0FBZEE7RUFDQyxXQUFBO0VBQ0csaUJBQUE7QUFpQko7O0FBZEE7RUFFRSxrQkFBQTtFQUNELFdBQUE7RUFDQSxlQUFBO0FBZ0JEOztBQWRBO0VBR0MsWUFBQTtFQUNDLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDRCxlQUFBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQyxtQkFBQTtFQUNELHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFlRjs7QUFWQTtFQUNDO0lBQ0MsVUFBQTtJQUNDLGdCQUFBO0VBYUQ7O0VBWEQ7SUFDQyxVQUFBO0lBQ0EsZUFBQTtFQWNBOztFQVpEO0lBQ0Msa0JBQUE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtFQWVGO0FBQ0Y7O0FBWkE7RUFDQztJQUNDLFVBQUE7SUFDQyxnQkFBQTtFQWNEOztFQVpEO0lBQ0MsVUFBQTtJQUNBLGVBQUE7RUFlQTs7RUFiRDtJQUNDLGtCQUFBO0lBQ0UsU0FBQTtJQUNBLFdBQUE7RUFnQkY7QUFDRjs7QUFiQTtFQUNDO0lBQ0MsVUFBQTtJQUNDLGdCQUFBO0VBZUQ7O0VBYkQ7SUFDQyxVQUFBO0lBQ0EsZUFBQTtFQWdCQTs7RUFkRDtJQUNDLGtCQUFBO0lBQ0UsVUFBQTtJQUNBLFdBQUE7RUFpQkY7QUFDRjs7QUFiQTtFQUNDO0lBQ0MsVUFBQTtJQUNBLGVBQUE7RUFlQTs7RUFiRDtJQUNDLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUFnQkE7O0VBYkQ7SUFDQyxlQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUFnQkE7O0VBZEQ7SUFDQyxrQkFBQTtJQUNFLFVBQUE7SUFDQSxVQUFBO0VBaUJGOztFQWZEO0lBQ0MsbUJBQUE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQWtCRjs7RUFoQkQ7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFtQkM7QUFDRjs7QUFiQTtFQUdHO0lBQ0EsVUFBQTtJQUNBLGVBQUE7RUFhRDs7RUFYQTtJQUNBLFVBQUE7SUFDRSxnQkFBQTtFQWNGOztFQVpBO0lBQ0Esa0JBQUE7SUFDRSxTQUFBO0lBQ0EsV0FBQTtFQWVGOztFQWJEO0lBQ0csZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBZ0JGO0FBQ0Y7O0FBYkEsNkJBQUE7O0FBQ0E7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQWVEOztBQWJBO0VBQ0MsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQWdCRDs7QUFkQTtFQUNDLGtCQUFBO0FBaUJEOztBQWZBO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0FBa0JEOztBQWhCQTtFQUNDLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQW1CRDs7QUFqQkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUFvQkQ7O0FBbEJBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFxQkQ7O0FBbkJBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXNCRCIsImZpbGUiOiJjZ3ZpZXdwcm9maWxlMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgcGFkZGluZzoxJSAwJTtcclxufVxyXG4ubWVudWljb257XHJcblx0Y29sb3I6IzAwMDtcclxufVxyXG4ubWVudWJ0bntcclxuXHRtYXJnaW4tbGVmdDozJTtcclxufVxyXG4ucGx1c2J0bntcclxuXHRtYXJnaW4tcmlnaHQ6MyU7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuXHQuaGVhZEJnIHtcclxuXHRcdC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuXHRcdHBhZGRpbmc6MyUgMCU7XHJcblx0ICB9XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDMwJSBhdXRvO1xyXG59XHJcbmlvbi1zZWdtZW50IHtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAtLWJhY2tncm91bmQ6ICNFQkVCRUI7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAtLW1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZlOTgwNTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogIzAwMDAwO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuLm1haW57XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW5uZXJ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCUgYXV0bztcclxufVxyXG4ubG9nb2RpdntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBsZWZ0OiAxMTVweDtcclxufVxyXG4ubG9nb2RpdiBpbWd7XHJcblx0Ym9yZGVyLXJhZGl1czogOTBweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcblx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbn1cclxuLnRleHR7XHJcblx0cGFkZGluZy10b3A6IDI1JTtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZToyMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG4udGV4dDJ7XHJcblx0Y29sb3I6I0ZFOTgwNTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbi5wYXJhe1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHBhZGRpbmc6IDQlIDAlO1xyXG59XHJcblxyXG4ubWFpbjJ7XHJcblx0d2lkdGg6NjAlO1xyXG5cdG1hcmdpbjogMTAlIGF1dG87XHJcbn1cclxuLmNvbnRhY3RkaXZ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmNvbnRhY3RkaXYgcHtcclxuXHRtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlXHJcbn1cclxuXHJcbi5pb25idXR0b25cclxue1x0XHJcbiBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAyNSU7XHJcbn1cclxuLmliXHJcbntcclxuXHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogI0ZFOTgwNTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gICAtLWJvcmRlci13aWR0aDogMXB4OyBcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpIHtcclxuXHQud3JhcHBlcntcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0ICBtYXJnaW46IDI1JSBhdXRvO1xyXG5cdH1cclxuXHQuY3dyYXBwZXJ7XHJcblx0XHR3aWR0aDo5MCU7XHJcblx0XHRtYXJnaW46NiUgYXV0bztcclxuXHR9XHJcblx0LmxvZ29kaXZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC03NXB4O1xyXG4gICAgbGVmdDogMTIwcHg7XHJcblx0fVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIHtcclxuXHQud3JhcHBlcntcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0ICBtYXJnaW46IDI3JSBhdXRvO1xyXG5cdH1cclxuXHQuY3dyYXBwZXJ7XHJcblx0XHR3aWR0aDo5MCU7XHJcblx0XHRtYXJnaW46NiUgYXV0bztcclxuXHR9XHJcblx0LmxvZ29kaXZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1cHg7XHJcbiAgICBsZWZ0OiAxMTVweDtcclxuXHR9XHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkge1xyXG5cdC53cmFwcGVye1xyXG5cdFx0d2lkdGg6IDkwJTtcclxuXHQgIG1hcmdpbjogMjclIGF1dG87XHJcblx0fVxyXG5cdC5jd3JhcHBlcntcclxuXHRcdHdpZHRoOjkwJTtcclxuXHRcdG1hcmdpbjo2JSBhdXRvO1xyXG5cdH1cclxuXHQubG9nb2RpdntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTgwcHg7XHJcbiAgICBsZWZ0OiAxMDBweDtcclxuXHR9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuXHQuY3dyYXBwZXJ7XHJcblx0XHR3aWR0aDo5MCU7XHJcblx0XHRtYXJnaW46NiUgYXV0bztcclxuXHR9XHJcblx0LnJ0ZXh0MntcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRcdG1hcmdpbi10b3A6IDMlO1xyXG5cdH1cclxuXHJcblx0LnJpZ2h0e1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDUlO1xyXG5cdFx0d2lkdGg6IDU1JTtcclxuXHRcdG1hcmdpbi10b3A6MSU7XHJcblx0fVxyXG5cdC5sb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNzBweDtcclxuICAgIGxlZnQ6IDg1cHg7XHJcblx0fVxyXG5cdC5sb2dvZGl2IGltZ3tcclxuXHRcdGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG5cdH1cclxuXHQudGV4dHtcclxuXHRwYWRkaW5nLXRvcDogMjUlO1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOjIwcHhcclxufVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpIHtcclxuICBcdC5jd3JhcHBlcntcclxuXHRcdFx0d2lkdGg6OTAlO1xyXG5cdFx0XHRtYXJnaW46NiUgYXV0bztcclxuXHRcdH1cclxuICAud3JhcHBlcntcclxuXHRcdHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDE4JSBhdXRvO1xyXG5cdH1cclxuICAubG9nb2RpdntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNzBweDtcclxuICAgIGxlZnQ6IDMxMHB4O1xyXG5cdH1cclxuXHQudGV4dHtcclxuICAgIHBhZGRpbmctdG9wOiAxNyU7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG5cdH1cclxufVxyXG5cclxuLyovLy8vLy8vLy9jYXJlZ2l2ZXIvLy8vLy8vLyovXHJcbi5jd3JhcHBlcntcclxuXHR3aWR0aDo5MCU7XHJcblx0bWFyZ2luOjYlIGF1dG87XHJcbn1cclxuLmNtYWlue1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweDtcclxuXHRtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4ubGVmdCBpbWd7XHJcblx0Ym9yZGVyLXJhZGl1czo3cHg7XHJcbn1cclxuLmNpbm5lcntcclxuXHRwYWRkaW5nOiAxJSAxLjUlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnJpZ2h0e1xyXG5cdG1hcmdpbi1sZWZ0OiA1JTtcclxuXHR3aWR0aDogNTAlO1xyXG5cdG1hcmdpbi10b3A6MSU7XHJcbn1cclxuLnJ0ZXh0e1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LXdlaWdodDo2MDA7XHJcbn1cclxuLnJ0ZXh0MXtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdGNvbG9yOiNGRTk4MDU7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcbn1cclxuLnJ0ZXh0MntcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdG1hcmdpbi10b3A6IDMlO1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=cgviewprofile1-cgviewprofile1-module-es2015.js.map