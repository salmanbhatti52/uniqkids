(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parentprofileview-parentprofileview-module"],{

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

/***/ "82yy":
/*!***************************************************************!*\
  !*** ./src/app/parentprofileview/parentprofileview.module.ts ***!
  \***************************************************************/
/*! exports provided: ParentprofileviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentprofileviewPageModule", function() { return ParentprofileviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _parentprofileview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parentprofileview-routing.module */ "lEuG");
/* harmony import */ var _parentprofileview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parentprofileview.page */ "jIXu");







let ParentprofileviewPageModule = class ParentprofileviewPageModule {
};
ParentprofileviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _parentprofileview_routing_module__WEBPACK_IMPORTED_MODULE_5__["ParentprofileviewPageRoutingModule"]
        ],
        declarations: [_parentprofileview_page__WEBPACK_IMPORTED_MODULE_6__["ParentprofileviewPage"]]
    })
], ParentprofileviewPageModule);



/***/ }),

/***/ "EheT":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parentprofileview/parentprofileview.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-buttons slot=\"start\" class=\"menubtn\">\r\n      <ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ctitle\">Profile</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"plusbtn\" (click)=\"next()\">\r\n      <img src=\"assets/imgs/icons/edit.svg\" />\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n  <p style=\"font-size: 15px; text-align: center; width: 80%; margin: 5% auto\">\r\n    Need to change something in your profile? Edit your profile here\r\n  </p>\r\n\r\n  <div class=\"wrapper\">\r\n    <div class=\"main\">\r\n      <div class=\"inner\">\r\n        <div class=\"logodiv\">\r\n          <!-- <img src=\"assets/imgs/profilelogo.png\" *ngIf=\"picUrl==''\"> -->\r\n          <img src=\"{{picUrl}}\" />\r\n        </div>\r\n\r\n        <div class=\"text\">{{fname}} {{lname}}</div>\r\n        <div class=\"text2\">{{relationwithchild}}</div>\r\n        <div class=\"para\">{{about}}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"main2\">\r\n      <div class=\"contactdiv\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/imgs/icons/sms.svg\" />\r\n        </div>\r\n        <p class=\"dtext\">{{email}}</p>\r\n      </div>\r\n\r\n      <div class=\"contactdiv\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/imgs/icons/sendarrow.svg\" />\r\n        </div>\r\n        <p class=\"dtext1\">{{address}}</p>\r\n      </div>\r\n\r\n      <div class=\"contactdiv\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/imgs/icons/phone.svg\" />\r\n        </div>\r\n        <p class=\"dtext1\">{{mobilenumber}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"page=='caregiver'\">\r\n      <div class=\"ionbutton\">\r\n        <ion-button class=\"ib\">hire</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "W78F":
/*!***************************************************************!*\
  !*** ./src/app/parentprofileview/parentprofileview.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.menubtn {\n  /*margin-left:3%;*/\n}\n\n.plusbtn {\n  margin-right: 3%;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 30% auto;\n  position: relative;\n}\n\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.inner {\n  text-align: center;\n  width: 80%;\n  margin: 0% auto;\n}\n\n.logodiv {\n  position: absolute;\n  top: 40px;\n  left: 115px;\n}\n\n.logodiv img {\n  border-radius: 90px;\n  width: 140px;\n  height: 140px;\n}\n\n.text {\n  padding-top: 30%;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.text2 {\n  color: #FE9805;\n  font-size: 14px;\n  font-style: italic;\n}\n\n.para {\n  color: #000000;\n  font-size: 14px;\n  padding: 4% 0%;\n}\n\n.main2 {\n  width: 70%;\n  margin: 10% auto;\n}\n\n.contactdiv {\n  display: flex;\n  margin-top: 10%;\n  align-items: center;\n}\n\n.dtext {\n  margin: 0px;\n  margin-left: 8%;\n  font-size: 14px;\n  width: 100%;\n}\n\n.dtext1 {\n  margin: 0px;\n  margin-left: 10%;\n  font-size: 14px;\n  width: 100%;\n}\n\n/*.icondiv img{\n\twidth: 24px;\n\theight: 24px;\n}\n*/\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 25%;\n}\n\n.ib {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 80%;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10%;\n  height: 55px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n\n@media only screen and (max-width: 414px) {\n  .wrapper {\n    width: 90%;\n    margin: 25% auto;\n    position: relative;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: -60px;\n    left: 116px;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .wrapper {\n    width: 90%;\n    margin: 27% auto;\n    position: relative;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 25px;\n    left: 115px;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  .wrapper {\n    width: 90%;\n    margin: 27% auto;\n    position: relative;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: -70px;\n    left: 94px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .logodiv {\n    position: absolute;\n    top: -55px;\n    left: 82px;\n  }\n\n  .logodiv img {\n    border-radius: 90px;\n    width: 125px;\n    height: 125px;\n  }\n\n  .text {\n    padding-top: 35%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {\n  .wrapper {\n    width: 90%;\n    margin: 18% auto;\n    position: relative;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: -90px;\n    left: 260px;\n  }\n\n  .logodiv img {\n    border-radius: 90px;\n    width: 175px;\n    height: 175px;\n  }\n\n  .text {\n    padding-top: 17%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhcmVudHByb2ZpbGV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUFBO0VBQ0Msa0JBQUE7QUFHRDs7QUFEQTtFQUNDLGdCQUFBO0FBSUQ7O0FBRkE7RUFDRSxVQUFBO0FBS0Y7O0FBRkE7RUFDQyxrQkFBQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUZFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBS0o7O0FBRkE7RUFDRSxxQkFBQTtBQUtGOztBQUhBO0VBQ0MsVUFBQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFKQTtFQUNDLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFPRDs7QUFMQTtFQUNDLGtCQUFBO0VBQ0csVUFBQTtFQUNBLGVBQUE7QUFRSjs7QUFOQTtFQUNDLGtCQUFBO0VBQ0csU0FBQTtFQUNBLFdBQUE7QUFTSjs7QUFQQTtFQUNDLG1CQUFBO0VBQ0csWUFBQTtFQUNBLGFBQUE7QUFVSjs7QUFSQTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVdEOztBQVRBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVlEOztBQVZBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBYUQ7O0FBVkE7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7QUFhRDs7QUFYQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFjRDs7QUFaQTtFQUNDLFdBQUE7RUFDQyxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFlRjs7QUFiQTtFQUNDLFdBQUE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBZ0JGOztBQVhBOzs7O0NBQUE7O0FBS0E7RUFFRSxrQkFBQTtFQUNELFdBQUE7RUFDQSxlQUFBO0FBYUQ7O0FBWEE7RUFHQyxZQUFBO0VBQ0MscUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNELGVBQUE7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNDLG1CQUFBO0VBQ0QscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVlGOztBQVBBO0VBQ0M7SUFDQyxVQUFBO0lBQ0MsZ0JBQUE7SUFDQyxrQkFBQTtFQVVGOztFQVJEO0lBQ0Msa0JBQUE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtFQVdGO0FBQ0Y7O0FBUkE7RUFDQztJQUNDLFVBQUE7SUFDQyxnQkFBQTtJQUNDLGtCQUFBO0VBVUY7O0VBUkQ7SUFDQyxrQkFBQTtJQUNFLFNBQUE7SUFDQSxXQUFBO0VBV0Y7QUFDRjs7QUFSQTtFQUNDO0lBQ0MsVUFBQTtJQUNDLGdCQUFBO0lBQ0Msa0JBQUE7RUFVRjs7RUFSRDtJQUNDLGtCQUFBO0lBQ0UsVUFBQTtJQUNBLFVBQUE7RUFXRjtBQUNGOztBQVBBO0VBQ0M7SUFDQyxrQkFBQTtJQUNFLFVBQUE7SUFDQSxVQUFBO0VBU0Y7O0VBUEE7SUFDRSxtQkFBQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBVUo7O0VBUkQ7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFXQztBQUNGOztBQUxBO0VBR0U7SUFDQSxVQUFBO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtFQUtGOztFQUhBO0lBQ0Esa0JBQUE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtFQU1GOztFQUpBO0lBQ0UsbUJBQUE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQU9KOztFQUxEO0lBQ0csZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBUUY7QUFDRiIsImZpbGUiOiJwYXJlbnRwcm9maWxldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgcGFkZGluZzoxJSAwJTtcclxufVxyXG4ubWVudWljb257XHJcblx0Y29sb3I6IzAwMDtcclxufVxyXG4ubWVudWJ0bntcclxuXHQvKm1hcmdpbi1sZWZ0OjMlOyovXHJcbn1cclxuLnBsdXNidG57XHJcblx0bWFyZ2luLXJpZ2h0OjMlO1xyXG59XHJcbi5iYWNrU3ZnIHtcclxuICBmaWxsOiAjMzMzO1xyXG59XHJcblxyXG4uY3RpdGxle1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uaW9ze1xyXG4gIC5oZWFkQmcge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gICAgcGFkZGluZzogMyUgMCU7XHJcbiAgfVxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDMwJSBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubWFpbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmlubmVye1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAlIGF1dG87XHJcbn1cclxuLmxvZ29kaXZ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgbGVmdDogMTE1cHg7XHJcbn1cclxuLmxvZ29kaXYgaW1ne1xyXG5cdGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG59XHJcbi50ZXh0e1xyXG5cdHBhZGRpbmctdG9wOiAzMCU7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6MjBweFxyXG59XHJcbi50ZXh0MntcclxuXHRjb2xvcjojRkU5ODA1O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuLnBhcmF7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogNCUgMCU7XHJcbn1cclxuXHJcbi5tYWluMntcclxuXHR3aWR0aDo3MCU7XHJcblx0bWFyZ2luOiAxMCUgYXV0bztcclxufVxyXG4uY29udGFjdGRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbi10b3A6IDEwJTtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5kdGV4dHtcclxuXHRtYXJnaW46IDBweDtcclxuICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmR0ZXh0MXtcclxuXHRtYXJnaW46IDBweDtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb250YWN0ZGl2IHB7XHJcblx0XHJcbn1cclxuLyouaWNvbmRpdiBpbWd7XHJcblx0d2lkdGg6IDI0cHg7XHJcblx0aGVpZ2h0OiAyNHB4O1xyXG59XHJcbiovXHJcbi5pb25idXR0b25cclxue1x0XHJcbiBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAyNSU7XHJcbn1cclxuLmliXHJcbntcclxuXHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogI0ZFOTgwNTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gICAtLWJvcmRlci13aWR0aDogMXB4OyBcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpIHtcclxuXHQud3JhcHBlcntcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0ICBtYXJnaW46IDI1JSBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQubG9nb2RpdntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTYwcHg7XHJcbiAgICBsZWZ0OiAxMTZweFxyXG5cdH1cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSB7XHJcblx0LndyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdCAgbWFyZ2luOiAyNyUgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0LmxvZ29kaXZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1cHg7XHJcbiAgICBsZWZ0OiAxMTVweDtcclxuXHR9XHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkge1xyXG5cdC53cmFwcGVye1xyXG5cdFx0d2lkdGg6IDkwJTtcclxuXHQgIG1hcmdpbjogMjclIGF1dG87XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHR9XHJcblx0LmxvZ29kaXZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC03MHB4O1xyXG4gICAgbGVmdDogOTRweDtcclxuXHR9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuXHQubG9nb2RpdntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTU1cHg7XHJcbiAgICBsZWZ0OiA4MnB4XHJcblx0fVxyXG4gIC5sb2dvZGl2IGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICAgIHdpZHRoOiAxMjVweDtcclxuICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICB9XHJcblx0LnRleHR7XHJcblx0cGFkZGluZy10b3A6IDM1JTtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZToyMHB4XHJcbn1cclxuXHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIFxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKSB7XHJcbiAgLndyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxOCUgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcbiAgLmxvZ29kaXZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC05MHB4O1xyXG4gICAgbGVmdDogMjYwcHg7XHJcblx0fVxyXG4gIC5sb2dvZGl2IGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICAgIHdpZHRoOiAxNzVweDtcclxuICAgICAgaGVpZ2h0OiAxNzVweDtcclxuICB9XHJcblx0LnRleHR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTclO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHR9XHJcbn0iXX0= */");

/***/ }),

/***/ "jIXu":
/*!*************************************************************!*\
  !*** ./src/app/parentprofileview/parentprofileview.page.ts ***!
  \*************************************************************/
/*! exports provided: ParentprofileviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentprofileviewPage", function() { return ParentprofileviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_parentprofileview_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./parentprofileview.page.html */ "EheT");
/* harmony import */ var _parentprofileview_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parentprofileview.page.scss */ "W78F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");







let ParentprofileviewPage = class ParentprofileviewPage {
    constructor(navCtrl, menuCtrl, loading, rest) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loading = loading;
        this.rest = rest;
        this.picUrl = 'assets/imgs/profilelogo.png';
        this.error = {
            status: false,
            message: "",
        };
        this.userid = localStorage.getItem('uid');
        console.log('userid', this.userid);
        this.accountTypeId = localStorage.getItem('accountTypeId');
        console.log('accountTypeId', this.accountTypeId);
        this.getprofiledata();
    }
    ;
    getprofiledata() {
        this.loading.loadershow();
        this.rest.sendRequest("get_profile_details", { userId: this.userid }).subscribe((data) => {
            console.log('get_profile_details data::', data);
            if (data.status == 'success') {
                console.log('suucesssss');
                this.loading.hideLoader();
                this.fname = data.data.first_name;
                this.lname = data.data.last_name;
                this.email = data.data.email;
                if (data.data.profile_picture == '' || data.data.profile_picture == null) {
                    this.picUrl = 'assets/imgs/profilelogo.png';
                }
                else {
                    this.picUrl = data.data.profile_picture;
                }
                if (data.data.relation_with_child == '' || data.data.relation_with_child == null) {
                    this.relationwithchild = 'none';
                }
                else {
                    this.relationwithchild = data.data.relation_with_child;
                }
                if (data.data.mobile_number == '' || data.data.mobile_number == null) {
                    this.mobilenumber = 'none';
                }
                else {
                    this.mobilenumber = data.data.mobile_number;
                }
                if (data.data.street_address == '' || data.data.street_address == null) {
                    this.address = 'none';
                }
                else {
                    this.address = data.data.street_address;
                }
                if (data.data.about == '' || data.data.about == null) {
                    this.about = 'none';
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
    ngOnInit() {
    }
    next() {
        this.navCtrl.navigateForward('/parentprofile');
    }
};
ParentprofileviewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] }
];
ParentprofileviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-parentprofileview',
        template: _raw_loader_parentprofileview_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parentprofileview_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ParentprofileviewPage);



/***/ }),

/***/ "lEuG":
/*!***********************************************************************!*\
  !*** ./src/app/parentprofileview/parentprofileview-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ParentprofileviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentprofileviewPageRoutingModule", function() { return ParentprofileviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _parentprofileview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parentprofileview.page */ "jIXu");




const routes = [
    {
        path: '',
        component: _parentprofileview_page__WEBPACK_IMPORTED_MODULE_3__["ParentprofileviewPage"]
    }
];
let ParentprofileviewPageRoutingModule = class ParentprofileviewPageRoutingModule {
};
ParentprofileviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ParentprofileviewPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=parentprofileview-parentprofileview-module-es2015.js.map