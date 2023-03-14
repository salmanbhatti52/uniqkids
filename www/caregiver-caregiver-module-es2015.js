(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["caregiver-caregiver-module"],{

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

/***/ "PTMB":
/*!*********************************************!*\
  !*** ./src/app/caregiver/caregiver.page.ts ***!
  \*********************************************/
/*! exports provided: CaregiverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaregiverPage", function() { return CaregiverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_caregiver_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./caregiver.page.html */ "lDx1");
/* harmony import */ var _caregiver_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caregiver.page.scss */ "qAwp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");







let CaregiverPage = class CaregiverPage {
    constructor(navCtrl, loading, rest) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.rest = rest;
        this.caregiver = [];
        this.error = {
            status: false,
            message: "",
        };
        this.caregivers = false;
    }
    ngOnInit() {
        // this.caregivers();
    }
    ionViewDidEnter() { }
    search(ev) {
        this.searchval = ev.detail.value;
        console.log("get value from search:::", this.searchval);
        this.rest
            .sendRequest("get_all_filtered_caregivers", {
            dataFilter: this.searchval,
        })
            .subscribe((data) => {
            console.log("search data from api::", data);
            this.status = data.status;
            if (data.status == "success") {
                this.caregivers = true;
                this.caregiver = [];
                data.data.forEach((val) => {
                    this.loading.hideLoader();
                    if (val.account_type_id == 2) {
                        this.type = "Professional";
                    }
                    if (val.account_type_id == 3) {
                        this.type = "Family";
                    }
                    if (val.account_type_id == 4) {
                        this.type = "Agency";
                    }
                    if (val.profile_picture == "" || val.profile_picture == null) {
                        this.profilepicture = "assets/imgs/profilelogo.png";
                    }
                    else {
                        this.profilepicture = val.profile_picture;
                    }
                    let Obj = {
                        userid: val.users_id,
                        typeid: val.account_type_id,
                        profile: this.profilepicture,
                        fname: val.first_name,
                        lname: val.last_name,
                        price: val.per_hour_rate,
                        about: val.about,
                        caregivertype: this.type,
                        address: val.street_address,
                        availability: val.availability,
                    };
                    this.caregiver.push(Obj);
                });
                console.log("caregiver array", this.caregiver);
            }
            if (data.status == "error") {
                this.loading.hideLoader();
                this.caregiver = [];
                console.log("signup request data:", data.status);
                this.error.status = true;
                this.error.message = data.message;
                // setTimeout(() => {
                //   this.error.status = false;
                //   this.error.message = "";
                // }, 3000);
                return;
            }
        });
    }
    // caregivers(){
    //   // this.caregiver=[];
    //   this.loading.loadershow();
    //   this.rest.getRequest("get_all_caregivers",{}).subscribe(
    //     (data:any)=>{
    //       console.log('get_all_caregivers data::',data);
    //       if(data.status=='success'){
    //         data.data.forEach(val=>{
    //           this.loading.hideLoader();
    //           if(val.account_type_id==2){
    //             this.type='Professional'
    //           }
    //           if(val.account_type_id==3){
    //             this.type='Family'
    //           }
    //           if(val.account_type_id==4){
    //             this.type='Agency'
    //           }
    //           if(val.profile_picture==''|| val.profile_picture==null){
    //             this.profilepicture='assets/imgs/profilelogo.png';
    //           }else{
    //             this.profilepicture=val.profile_picture
    //           }
    //           let Obj={
    //             userid:val.users_id,
    //             typeid:val.account_type_id,
    //             profile:this.profilepicture,
    //             fname:val.first_name,
    //             lname:val.last_name,
    //             price:val.per_hour_rate,
    //             about:val.about,
    //             caregivertype:this.type,
    //             address:val.street_address
    //           }
    //           this.caregiver.push(Obj)
    //         })
    //         console.log('caregiver array',this.caregiver)
    //       }
    //       if(data.status=='error'){
    //         this.loading.hideLoader();
    //         console.log('signup request data:',data.status);
    //           this.error.status = true;
    //         this.error.message = data.message;
    //         setTimeout(() => {
    //           this.error.status = false;
    //           this.error.message = "";
    //         }, 3000);
    //         return;
    //       }
    //     }
    //   );
    // }
    gotoprofile(care) {
        this.navCtrl.navigateForward([
            "/profile",
            {
                page: "caregiver",
                userid: care.userid,
            },
        ]);
    }
};
CaregiverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] }
];
CaregiverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-caregiver",
        template: _raw_loader_caregiver_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_caregiver_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CaregiverPage);



/***/ }),

/***/ "YiyE":
/*!*******************************************************!*\
  !*** ./src/app/caregiver/caregiver-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CaregiverPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaregiverPageRoutingModule", function() { return CaregiverPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _caregiver_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caregiver.page */ "PTMB");




const routes = [
    {
        path: '',
        component: _caregiver_page__WEBPACK_IMPORTED_MODULE_3__["CaregiverPage"]
    }
];
let CaregiverPageRoutingModule = class CaregiverPageRoutingModule {
};
CaregiverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CaregiverPageRoutingModule);



/***/ }),

/***/ "khTF":
/*!***********************************************!*\
  !*** ./src/app/caregiver/caregiver.module.ts ***!
  \***********************************************/
/*! exports provided: CaregiverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaregiverPageModule", function() { return CaregiverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _caregiver_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./caregiver-routing.module */ "YiyE");
/* harmony import */ var _caregiver_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./caregiver.page */ "PTMB");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");








let CaregiverPageModule = class CaregiverPageModule {
};
CaregiverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _caregiver_routing_module__WEBPACK_IMPORTED_MODULE_5__["CaregiverPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
        ],
        declarations: [_caregiver_page__WEBPACK_IMPORTED_MODULE_6__["CaregiverPage"]]
    })
], CaregiverPageModule);



/***/ }),

/***/ "lDx1":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/caregiver/caregiver.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <!-- <ion-buttons slot=\"start\" style=\"margin-left: 2%;\">\n          <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title class=\"ctitle\">Caregiver</ion-title> -->\n\n    <ion-row>\n      <ion-col style=\"padding-top: 6px\" size=\"2\">\n        <div>\n          <ion-menu-button class=\"menuicon\"></ion-menu-button>\n        </div>\n      </ion-col>\n\n      <ion-col class=\"titleclass\" size=\"8\">\n        <ion-text class=\"ctitle\">Caregiver</ion-text>\n      </ion-col>\n\n      <ion-col size=\"2\"> </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n  <div class=\"wrapper\">\n    <div class=\"inputdiv\">\n      <div class=\"pinput\">\n        <ion-input\n          placeholder=\"Search\"\n          type=\"text\"\n          (ionChange)=\"search($event)\"\n        ></ion-input>\n        <!-- <ion-input placeholder=\"Search\" type=\"text\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-input> -->\n        <!-- <ion-searchbar placeholder=\"Search...\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar> -->\n      </div>\n      <img src=\"assets/imgs/icons/search.svg\" class=\"cimg\" />\n    </div>\n\n    <div class=\"defaulttext\">\n      Need to take a day off from the stressful routine? Search for a Caregiver\n      and find the one that best suits your needs\n    </div>\n\n    <div *ngFor=\"let care of caregiver\">\n      <div\n        *ngIf=\"care.availability=='Yes'\"\n        class=\"main\"\n        (click)=\"gotoprofile(care)\"\n      >\n        <div class=\"inner\">\n          <div class=\"left\">\n            <img src=\"{{care.profile}}\" width=\"145px\" height=\"135px\" />\n          </div>\n          <div class=\"right\">\n            <div class=\"rtext\">{{care.fname}} {{care.lname}}</div>\n            <div class=\"rtext2\">{{care.caregivertype}}</div>\n            <div class=\"rtext1\">{{care.price}}/hr</div>\n            <!-- <div class=\"rtext2\">{{care.address}}</div> -->\n            <div class=\"rtext2\">{{care.about}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <p *ngIf=\"caregivers==false\" class=\"error\">Search for caregivers</p>\n\n    <!-- <div class=\"main\" (click)=\"gotoprofile()\">\n\t\t\t<div class=\"inner\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<img src=\"assets/imgs/caregiver.png\" width=\"145px\" height=\"135px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right\">\n\t\t\t\t\t<div class=\"rtext\">Nancy Daniel</div>\n\t\t\t\t\t<div class=\"rtext1\">$10/hr</div>\n\t\t\t\t\t<div class=\"rtext2\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"main\" (click)=\"gotoprofile()\">\n\t\t\t<div class=\"inner\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<img src=\"assets/imgs/caregiver.png\" width=\"145px\" height=\"135px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right\">\n\t\t\t\t\t<div class=\"rtext\">Nancy Daniel</div>\n\t\t\t\t\t<div class=\"rtext1\">$10/hr</div>\n\t\t\t\t\t<div class=\"rtext2\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div> -->\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "qAwp":
/*!***********************************************!*\
  !*** ./src/app/caregiver/caregiver.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 6% auto;\n}\n\n.defaulttext {\n  font-size: 15px;\n  text-align: justify;\n  width: 90%;\n  margin: 4% auto;\n}\n\n.inputdiv {\n  /*margin: 10% auto 5%;*/\n  display: flex;\n  border-radius: 12px;\n  background: #FFFFFF;\n  width: 100%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n  padding: 1% 0% 1% 7%;\n}\n\n.cimg {\n  margin-right: 5%;\n}\n\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.left img {\n  border-radius: 7px;\n}\n\n.inner {\n  padding: 1% 1.5%;\n  display: flex;\n}\n\n.right {\n  margin-left: 5%;\n  width: 50%;\n  margin-top: 1%;\n}\n\n.rtext {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.rtext1 {\n  font-size: 14px;\n  font-weight: 400;\n  color: #FE9805;\n  margin-top: 3%;\n}\n\n.rtext2 {\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 3%;\n}\n\n.error {\n  text-align: center;\n  margin-top: 50%;\n  font-size: 25px;\n  font-weight: 500;\n}\n\n@media only screen and (max-width: 320px) {\n  .rtext2 {\n    font-size: 12px;\n    font-weight: 400;\n    margin-top: 3%;\n  }\n\n  .right {\n    margin-left: 5%;\n    width: 55%;\n    margin-top: 1%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhcmVnaXZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUNBO0VBRUUsZUFBQTtFQUNFLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDQyxrQkFBQTtFQUFvQixnQkFBQTtBQUdyQjs7QUFBQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBSXRCOztBQUZDO0VBQ0MscUJBQUE7RUFDQSxjQUFBO0FBSUY7O0FBREE7RUFDRSxxQkFBQTtBQUlGOztBQUZBO0VBQ0MsVUFBQTtFQUNBLGVBQUE7QUFLRDs7QUFIQTtFQUNDLGVBQUE7RUFDRyxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDQyx1QkFBQTtFQUNHLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQU9KOztBQUxBO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBUUo7O0FBTkE7RUFDQyxnQkFBQTtBQVNEOztBQVBBO0VBQ0MsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVVEOztBQVJBO0VBQ0Msa0JBQUE7QUFXRDs7QUFUQTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtBQVlEOztBQVZBO0VBQ0MsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBYUQ7O0FBWEE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUFjRDs7QUFaQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBZUQ7O0FBYkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBZ0JEOztBQWRBO0VBQ0Msa0JBQUE7RUFDRyxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBaUJKOztBQWRBO0VBQ0M7SUFDQyxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBaUJBOztFQWREO0lBQ0MsZUFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VBaUJBO0FBQ0YiLCJmaWxlIjoiY2FyZWdpdmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkQmcge1xyXG4gIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG4ubWVudWljb257XHJcblx0Y29sb3I6IzAwMDtcclxufVxyXG5cclxuLmN0aXRsZXtcclxuXHQvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGl0bGVjbGFzc3tcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuLmlvc3tcclxuXHQudGl0bGVjbGFzc3tcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDExcHg7XHJcblx0fVxyXG5cdC5oZWFkQmcge1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG5cdFx0cGFkZGluZzogMyUgMCU7XHJcblx0ICB9XHJcbn1cclxuLmJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG4ud3JhcHBlcntcclxuXHR3aWR0aDo5MCU7XHJcblx0bWFyZ2luOjYlIGF1dG87XHJcbn1cclxuLmRlZmF1bHR0ZXh0e1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiA0JSBhdXRvO1xyXG59XHJcbi5pbnB1dGRpdntcclxuXHQvKm1hcmdpbjogMTAlIGF1dG8gNSU7Ki9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5waW5wdXR7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG9wYWNpdHk6IDQ4JTtcclxuICAgIHBhZGRpbmc6IDElIDAlIDElIDclO1xyXG59XHJcbi5jaW1ne1xyXG5cdG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuLm1haW57XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5sZWZ0IGltZ3tcclxuXHRib3JkZXItcmFkaXVzOjdweDtcclxufVxyXG4uaW5uZXJ7XHJcblx0cGFkZGluZzogMSUgMS41JTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5yaWdodHtcclxuXHRtYXJnaW4tbGVmdDogNSU7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRtYXJnaW4tdG9wOjElO1xyXG59XHJcbi5ydGV4dHtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Zm9udC13ZWlnaHQ6NjAwO1xyXG59XHJcbi5ydGV4dDF7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRjb2xvcjojRkU5ODA1O1xyXG5cdG1hcmdpbi10b3A6IDMlO1xyXG59XHJcbi5ydGV4dDJ7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxufVxyXG4uZXJyb3J7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMHB4KSB7XHJcblx0LnJ0ZXh0MntcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRcdG1hcmdpbi10b3A6IDMlO1xyXG5cdH1cclxuXHJcblx0LnJpZ2h0e1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDUlO1xyXG5cdFx0d2lkdGg6IDU1JTtcclxuXHRcdG1hcmdpbi10b3A6MSU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=caregiver-caregiver-module-es2015.js.map