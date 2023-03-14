(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deleteacc-deleteacc-module"],{

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

/***/ "9mhu":
/*!*********************************************!*\
  !*** ./src/app/deleteacc/deleteacc.page.ts ***!
  \*********************************************/
/*! exports provided: DeleteaccPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteaccPage", function() { return DeleteaccPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_deleteacc_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./deleteacc.page.html */ "bC5v");
/* harmony import */ var _deleteacc_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteacc.page.scss */ "ekFm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");








let DeleteaccPage = class DeleteaccPage {
    constructor(rest, loacton, navCtrl, basicmsg) {
        this.rest = rest;
        this.loacton = loacton;
        this.navCtrl = navCtrl;
        this.basicmsg = basicmsg;
        this.Checkboxes = [
            { question: "I concerned about my personal data", isItemChecked: false },
            { question: "I have another  UniqKidz account", isItemChecked: false },
            { question: "I want to remove app from my mobile", isItemChecked: false },
            { question: "I get too many emails from UniqKidz", isItemChecked: false },
            { question: "Other", isItemChecked: false },
        ];
        this.selectquestions = [];
    }
    ngOnInit() { }
    goBack() {
        this.loacton.back();
    }
    verifyEvent(ev) {
        console.log(ev);
        if (ev.isItemChecked == true) {
            this.selectquestions.push(ev.question);
            console.log("selectquestions aray", this.selectquestions);
        }
        if (ev.isItemChecked == false) {
            const index = this.selectquestions.indexOf(ev.question);
            if (index > -1) {
                this.selectquestions.splice(index, 1); // 2nd parameter means remove one item only
                console.log("job aray", this.selectquestions);
            }
        }
    }
    delete() {
        var user = JSON.parse(localStorage.getItem("user"));
        console.log("userrrrrrrrrrrrrr", user.email);
        if (this.selectquestions.length == 0) {
            this.basicmsg.presentToast("Choose one option atleast");
        }
        else {
            const del = {
                email: user.email,
            };
            this.rest.sendRequest("delete_account", del).subscribe((res) => {
                console.log("report user result==", res);
                if (res.status == "success") {
                    this.basicmsg.presentToast(res.data);
                    localStorage.clear();
                    this.navCtrl.navigateRoot("/");
                }
                if (res.status == "error") {
                    this.basicmsg.presentToast(res.message);
                }
            });
        }
    }
};
DeleteaccPage.ctorParameters = () => [
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] }
];
DeleteaccPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-deleteacc",
        template: _raw_loader_deleteacc_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_deleteacc_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DeleteaccPage);



/***/ }),

/***/ "DFNe":
/*!***********************************************!*\
  !*** ./src/app/deleteacc/deleteacc.module.ts ***!
  \***********************************************/
/*! exports provided: DeleteaccPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteaccPageModule", function() { return DeleteaccPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _deleteacc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deleteacc-routing.module */ "O6QR");
/* harmony import */ var _deleteacc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deleteacc.page */ "9mhu");







let DeleteaccPageModule = class DeleteaccPageModule {
};
DeleteaccPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _deleteacc_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeleteaccPageRoutingModule"]
        ],
        declarations: [_deleteacc_page__WEBPACK_IMPORTED_MODULE_6__["DeleteaccPage"]]
    })
], DeleteaccPageModule);



/***/ }),

/***/ "O6QR":
/*!*******************************************************!*\
  !*** ./src/app/deleteacc/deleteacc-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DeleteaccPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteaccPageRoutingModule", function() { return DeleteaccPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _deleteacc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteacc.page */ "9mhu");




const routes = [
    {
        path: '',
        component: _deleteacc_page__WEBPACK_IMPORTED_MODULE_3__["DeleteaccPage"]
    }
];
let DeleteaccPageRoutingModule = class DeleteaccPageRoutingModule {
};
DeleteaccPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeleteaccPageRoutingModule);



/***/ }),

/***/ "bC5v":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deleteacc/deleteacc.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col style=\"padding-top: 6px\" size=\"2\">\n        <div>\n          <ion-menu-button class=\"menuicon\"></ion-menu-button>\n        </div>\n      </ion-col>\n\n      <ion-col class=\"titleclass\" size=\"8\">\n        <ion-text class=\"ctitle\">Delete Account</ion-text>\n      </ion-col>\n\n      <ion-col size=\"2\"> </ion-col>\n    </ion-row>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ctitle\">Terms & Conditions</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"background\">\n  <div class=\"wrapper\">\n    <div class=\"thead\">Why do you want to delete your UniqKidz account?</div>\n    <div class=\"flex-c\" *ngFor=\"let checkboxes of Checkboxes\">\n      <ion-checkbox\n        mode=\"md\"\n        class=\"check\"\n        [(ngModel)]=\"checkboxes.isItemChecked\"\n        (ionChange)=\"verifyEvent(checkboxes)\"\n      >\n      </ion-checkbox>\n      <span class=\"lbl\">{{checkboxes.question}}</span>\n    </div>\n\n    <div style=\"color: #000000; margin-top: 10%; font-size: 14px\">\n      Commnets(optional)\n    </div>\n\n    <ion-textarea\n      style=\"padding: 10px 20px\"\n      rows=\"10\"\n      cols=\"5\"\n      class=\"desc-area\"\n      placeholder=\"Please provide additional information here...\"\n      [(ngModel)]=\"desc\"\n    ></ion-textarea>\n\n    <!-- <ion-button class=\"btn\" (click)=\"delete()\">Delete</ion-button> -->\n\n    <div class=\"ionbutton\" (click)=\"delete()\">\n      <ion-button class=\"ib\">\n        <span class=\"btns\">Delete Account</span>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "ekFm":
/*!***********************************************!*\
  !*** ./src/app/deleteacc/deleteacc.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backicon {\n  margin-left: 10%;\n  margin-top: 6px;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .backicon {\n  margin-left: 10%;\n  margin-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 5% auto;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.thead {\n  color: #000000;\n  font-size: 17px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.flex-c {\n  display: flex;\n  align-items: center;\n  margin-top: 6%;\n}\n\n.lbl {\n  margin-left: 3%;\n  color: #000000;\n  font-size: 15.5px;\n}\n\n.check {\n  --background: #fff;\n  --background-checked: #fd8f07f2;\n  --checkmark-color: #FFFFFF;\n  --border-color-checked: #fd8f07f2;\n  --size: 17px;\n  --border-color: #fff;\n}\n\n.desc-area {\n  font-size: 13px;\n  border: 1px solid #000000;\n  border-radius: 10px;\n  margin-top: 3%;\n}\n\n.btn {\n  --background: #172A36 0% 0% no-repeat padding-box;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  color: #000000;\n  margin-top: 10%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #fd8f07f2;\n  outline: none;\n  width: 100%;\n  font-size: 15px;\n  margin-bottom: 10%;\n  height: 50px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 10px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n\n.btns {\n  font-size: 15px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RlbGV0ZWFjYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDRTtFQUNJLFdBQUE7QUFFTjs7QUFBRTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUdOOztBQUFFO0VBRUUsZUFBQTtFQUNFLGdCQUFBO0FBRU47O0FBQUU7RUFDSSxrQkFBQTtFQUFvQixnQkFBQTtBQUkxQjs7QUFETTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUlWOztBQUZNO0VBQ0ksa0JBQUE7RUFBb0IsaUJBQUE7QUFLOUI7O0FBSE07RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFLVjs7QUFGRTtFQUNJLHFCQUFBO0FBS047O0FBSEU7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQU1OOztBQURFO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QUFJSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFEQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBSUQ7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFPSjs7QUFMQTtFQUNJLGtCQUFBO0VBQ0UsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBUU47O0FBTEU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFRSjs7QUFORTtFQUNFLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBU0o7O0FBTkU7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUUY7O0FBTEE7RUFHRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQyxtQkFBQTtFQUNELHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFNRjs7QUFKQTtFQUNHLGVBQUE7RUFDQSxZQUFBO0FBT0giLCJmaWxlIjoiZGVsZXRlYWNjLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkQmcge1xuICAgIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcbiAgICBwYWRkaW5nOiAxJSAwJTtcbiAgfVxuICAubWVudWljb257XG4gICAgICBjb2xvcjojMDAwO1xuICB9XG4gIC5iYWNraWNvbntcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gIH1cbiAgXG4gIC5jdGl0bGV7XG4gICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICAudGl0bGVjbGFzc3tcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDhweDtcbiAgfVxuICAuaW9ze1xuICAgICAgLmJhY2tpY29ue1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgfVxuICAgICAgLnRpdGxlY2xhc3N7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTFweDtcbiAgICAgIH1cbiAgICAgIC5oZWFkQmcge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcbiAgICAgICAgICBwYWRkaW5nOiAzJSAwJTtcbiAgICAgICAgfVxuICB9XG4gIC5iYWNrZ3JvdW5ke1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xuICB9XG4gIC53cmFwcGVye1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIG1hcmdpbjogNSUgYXV0bztcbiAgfVxuXG4gIFxuXG4gIHAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4uc2MtaW9uLWlucHV0LWlvcy1oIHtcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4ud3JhcHBlcntcbiB3aWR0aDogOTAlO1xuIG1hcmdpbjogNSUgYXV0bztcbn1cbi50aGVhZHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmxleC1je1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDo2JTtcbn1cbi5sYmx7XG4gICAgbWFyZ2luLWxlZnQ6MyU7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1zaXplOiAxNS41cHg7XG59XG4uY2hlY2t7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZDhmMDdmMjtcbiAgICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2ZkOGYwN2YyO1xuICAgICAgLS1zaXplOiAxN3B4O1xuICAgICAgLS1ib3JkZXItY29sb3I6ICNmZmY7XG4gICAgLy8gICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDBweCAxMHB4IDBweDtcbiAgfVxuICAuZGVzYy1hcmVhe1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gIH1cbiAgLmJ0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTcyQTM2IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICB9XG5cbiAgLmlvbmJ1dHRvblxue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5pYlxue1xuXG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmQ4ZjA3ZjI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmJ0bnN7XG4gICBmb250LXNpemU6IDE1cHg7XG4gICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=deleteacc-deleteacc-module-es2015.js.map