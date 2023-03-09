(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["child-child-module"],{

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

/***/ "R36a":
/*!*************************************!*\
  !*** ./src/app/child/child.page.ts ***!
  \*************************************/
/*! exports provided: ChildPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildPage", function() { return ChildPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_child_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./child.page.html */ "SlTZ");
/* harmony import */ var _child_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child.page.scss */ "rcGM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");







let ChildPage = class ChildPage {
    constructor(navCtrl, loading, rest) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.rest = rest;
        this.childarray = [];
        this.error = {
            status: false,
            message: "",
        };
        this.childdetil = false;
    }
    ngOnInit() {
        this.userid = localStorage.getItem('uid');
        console.log('userid', this.userid);
        // this.getchilds();
    }
    ionViewDidEnter() {
        this.getchilds();
    }
    getchilds() {
        this.childarray = [];
        this.loading.loadershow();
        this.rest.sendRequest("display_children", { userId: this.userid }).subscribe((data) => {
            if (data.status == 'success') {
                console.log('display_children data::', data);
                this.childdetil = true;
                data.data.forEach(val => {
                    if (val.profile_picture == null) {
                        this.defaultProfile = 'assets/imgs/profilelogo.png';
                    }
                    else {
                        this.defaultProfile = val.profile_picture;
                    }
                    let Obj = {
                        childid: val.child_id,
                        parentid: val.parent_id,
                        name: val.child_name,
                        profile: this.defaultProfile,
                        age: val.age,
                        description: val.additional_notes,
                    };
                    this.childarray.push(Obj);
                    this.loading.hideLoader();
                    this.error.status = false;
                });
                console.log('child array:', this.childarray);
            }
            if (data.status == 'error') {
                this.loading.hideLoader();
                console.log('signup request data:', data);
                this.error.status = true;
                this.error.message = data.message;
                // setTimeout(() => {
                //   this.error.status = false;
                //   this.error.message = "";
                // }, 3000);
            }
        });
    }
    gotoprofile(item) {
        this.navCtrl.navigateForward(['/childprofile', {
                childid: item.childid,
                parentid: item.parentid
            }]);
    }
    next() {
        this.navCtrl.navigateForward('/addchild');
    }
};
ChildPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] }
];
ChildPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-child',
        template: _raw_loader_child_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_child_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChildPage);



/***/ }),

/***/ "SlTZ":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/child/child.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t  <ion-toolbar class=\"headBgGlobal\">\n\t\t<ion-row>\n\t\t\t<ion-col style=\"padding-top:6px;\" size=\"2\">\n\t\t\t\t<div>\n\t\t\t\t\t<ion-menu-button class=\"menuicon\"></ion-menu-button>\n        </div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col class=\"titleclass\" size=\"8\">\n\t\t\t\t<ion-text class=\"ctitle\">Child</ion-text>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col style=\"padding-top: 8px;padding-left: 20px;\" size=\"2\">\n        <div (click)=\"next()\">\n          <img src=\"assets/imgs/icons/plus.svg\">\n        </div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t    <!-- <ion-buttons slot=\"start\" class=\"menubtn\">\n\t\t    <ion-menu-button class=\"menuicon\"></ion-menu-button>\n\t\t  </ion-buttons>\n\t  <ion-title class=\"ctitle\">Child</ion-title>\n\t  <ion-buttons slot=\"end\" class=\"plusbtn\" (click)=\"next()\">\n\t\t  <img src=\"assets/imgs/icons/plus.svg\">\n\t\t</ion-buttons> -->\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\t\t<p *ngIf=\"error.status\" class=\"error\">\n\t    {{error.message}}\n\t  </p>\n    <div *ngIf=\"childdetil==false\" style=\"margin-top: 45%;\">\n      <div class=\"defaulttext\">Add your child's details here to ensure the best care. </div>\n    </div>\n\t\t<div *ngFor=\"let child of childarray\">\n\t\t\t<div class=\"main\" (click)=\"gotoprofile(child)\">\n\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t<img src=\"{{child.profile}}\" width=\"146px\" height=\"130px\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t<div class=\"rtext\">{{child.name}},<span style=\"font-weight:400;margin-left: 3%;\">{{child.age}} years</span></div>\n\t\t\t\t\t\t<div class=\"rtext1\">{{child.description}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\n\t\t<!-- <div class=\"main\" (click)=\"gotoprofile()\">\n\t\t\t<div class=\"inner\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<img src=\"assets/imgs/boy.png\" width=\"146px\" height=\"130px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right\">\n\t\t\t\t\t<div class=\"rtext\">Karl,<span style=\"font-weight:400;margin-left: 3%;\">8 years</span></div>\n\t\t\t\t\t<div class=\"rtext1\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div> -->\n\t</div>\n\n</ion-content>\n");

/***/ }),

/***/ "rcGM":
/*!***************************************!*\
  !*** ./src/app/child/child.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.menubtn {\n  margin-left: 3%;\n}\n\n.plusbtn {\n  margin-right: 3%;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 8% auto;\n}\n\n.defaulttext {\n  font-size: 17px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.left img {\n  border-radius: 7px;\n}\n\n.inner {\n  padding: 2% 3%;\n  display: flex;\n}\n\n.right {\n  margin-left: 5%;\n  width: 50%;\n  margin-top: 1%;\n}\n\n.rtext {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.rtext1 {\n  font-size: 14px;\n  margin-top: 3.5%;\n  overflow: hidden;\n  height: 90px;\n}\n\n.rtext2 {\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.rtext3 {\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 5%;\n}\n\n.rtext4 {\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\n.error {\n  color: #000;\n  font-size: 20px;\n  text-align: center;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  font-weight: 600;\n  padding: 15px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoaWxkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUFBO0VBQ0MsZUFBQTtBQUdEOztBQURBO0VBQ0MsZ0JBQUE7QUFJRDs7QUFGQTtFQUNFLFVBQUE7QUFLRjs7QUFGQTtFQUVFLGVBQUE7RUFDRSxnQkFBQTtBQUlKOztBQUZBO0VBQ0Msa0JBQUE7RUFBb0IsZ0JBQUE7QUFNckI7O0FBSEM7RUFDQyxrQkFBQTtFQUFvQixpQkFBQTtBQU90Qjs7QUFMQztFQUNDLHFCQUFBO0VBQ0EsY0FBQTtBQU9GOztBQUpBO0VBQ0UscUJBQUE7QUFPRjs7QUFMQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBUUQ7O0FBTkE7RUFDQyxlQUFBO0VBQ0csZ0JBQUE7RUFDQSxrQkFBQTtBQVNKOztBQU5BO0VBQ0MsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVNEOztBQVBBO0VBQ0Msa0JBQUE7QUFVRDs7QUFSQTtFQUNDLGNBQUE7RUFDQSxhQUFBO0FBV0Q7O0FBVEE7RUFDQyxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFZRDs7QUFWQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQWFEOztBQVhBO0VBQ0MsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDRyxZQUFBO0FBYUo7O0FBWEE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUFjRDs7QUFaQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFlRDs7QUFiQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFnQkQ7O0FBYkE7RUFDRyxXQUFBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBZ0JKIiwiZmlsZSI6ImNoaWxkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkQmcge1xyXG4gIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICBwYWRkaW5nOjElIDAlO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcbi5tZW51YnRue1xyXG5cdG1hcmdpbi1sZWZ0OjMlO1xyXG59XHJcbi5wbHVzYnRue1xyXG5cdG1hcmdpbi1yaWdodDozJTtcclxufVxyXG4uYmFja1N2ZyB7XHJcbiAgZmlsbDogIzMzMztcclxufVxyXG5cclxuLmN0aXRsZXtcclxuXHQvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGl0bGVjbGFzc3tcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuLmlvc3tcclxuXHQudGl0bGVjbGFzc3tcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDExcHg7XHJcblx0fVxyXG5cdC5oZWFkQmcge1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG5cdFx0cGFkZGluZzozJSAwJTtcclxuXHQgIH1cclxufVxyXG4uYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbi53cmFwcGVye1xyXG5cdHdpZHRoOjkwJTtcclxuXHRtYXJnaW46OCUgYXV0bztcclxufVxyXG4uZGVmYXVsdHRleHR7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW57XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5sZWZ0IGltZ3tcclxuXHRib3JkZXItcmFkaXVzOjdweDtcclxufVxyXG4uaW5uZXJ7XHJcblx0cGFkZGluZzoyJSAzJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5yaWdodHtcclxuXHRtYXJnaW4tbGVmdDogNSU7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRtYXJnaW4tdG9wOjElO1xyXG59XHJcbi5ydGV4dHtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Zm9udC13ZWlnaHQ6NjAwO1xyXG59XHJcbi5ydGV4dDF7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFxyXG5cdG1hcmdpbi10b3A6My41JTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG59XHJcbi5ydGV4dDJ7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OjQwMDtcclxufVxyXG4ucnRleHQze1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDo2MDA7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLnJ0ZXh0NHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIFx0Y29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMzUlKSAwcHggNXB4IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "utsK":
/*!***************************************!*\
  !*** ./src/app/child/child.module.ts ***!
  \***************************************/
/*! exports provided: ChildPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildPageModule", function() { return ChildPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _child_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./child-routing.module */ "zurR");
/* harmony import */ var _child_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./child.page */ "R36a");







let ChildPageModule = class ChildPageModule {
};
ChildPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _child_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChildPageRoutingModule"]
        ],
        declarations: [_child_page__WEBPACK_IMPORTED_MODULE_6__["ChildPage"]]
    })
], ChildPageModule);



/***/ }),

/***/ "zurR":
/*!***********************************************!*\
  !*** ./src/app/child/child-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ChildPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildPageRoutingModule", function() { return ChildPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _child_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./child.page */ "R36a");




const routes = [
    {
        path: '',
        component: _child_page__WEBPACK_IMPORTED_MODULE_3__["ChildPage"]
    }
];
let ChildPageRoutingModule = class ChildPageRoutingModule {
};
ChildPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChildPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=child-child-module-es2015.js.map