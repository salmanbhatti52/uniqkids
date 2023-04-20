(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile1-profile1-module"],{

/***/ "30IB":
/*!*********************************************!*\
  !*** ./src/app/profile1/profile1.module.ts ***!
  \*********************************************/
/*! exports provided: Profile1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile1PageModule", function() { return Profile1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile1-routing.module */ "BTpz");
/* harmony import */ var _profile1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile1.page */ "as0H");







let Profile1PageModule = class Profile1PageModule {
};
Profile1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Profile1PageRoutingModule"]
        ],
        declarations: [_profile1_page__WEBPACK_IMPORTED_MODULE_6__["Profile1Page"]]
    })
], Profile1PageModule);



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

/***/ "BTpz":
/*!*****************************************************!*\
  !*** ./src/app/profile1/profile1-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: Profile1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile1PageRoutingModule", function() { return Profile1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile1.page */ "as0H");




const routes = [
    {
        path: '',
        component: _profile1_page__WEBPACK_IMPORTED_MODULE_3__["Profile1Page"]
    }
];
let Profile1PageRoutingModule = class Profile1PageRoutingModule {
};
Profile1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Profile1PageRoutingModule);



/***/ }),

/***/ "Klb0":
/*!*********************************************!*\
  !*** ./src/app/profile1/profile1.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*.cheader{\n\tposition: fixed;\n}*/\n.headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n.menuicon {\n  color: #000;\n}\n.backbtn {\n  margin-left: 0%;\n  padding-top: 10px;\n  padding-left: 18px;\n}\n.plusbtn {\n  margin-right: 3%;\n}\n.backSvg {\n  fill: #333;\n}\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 12px;\n  padding-left: 18px;\n}\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n.background {\n  --background: #F7F7F7;\n}\n.wrapper {\n  width: 90%;\n  margin: 30% auto;\n}\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n.inner {\n  text-align: center;\n  width: 80%;\n  margin: 0% auto;\n}\n.logodiv {\n  position: absolute;\n  top: 40px;\n  left: 115px;\n}\n.logodiv img {\n  border-radius: 90px;\n  width: 140px;\n  height: 140px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n.text {\n  padding-top: 30%;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n.text2 {\n  color: #FE9805;\n  font-size: 14px;\n  font-style: italic;\n}\n.para {\n  color: #000000;\n  font-size: 14px;\n  padding: 4% 0%;\n}\n.main2 {\n  width: 60%;\n  margin: 10% auto;\n}\n.contactdiv {\n  display: flex;\n  margin-top: 10%;\n}\n.contactdiv p {\n  margin: 0px;\n  padding-left: 10%;\n}\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 25%;\n}\n.ib {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 80%;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10%;\n  height: 55px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n@media only screen and (max-width: 414px) {\n  .wrapper {\n    width: 90%;\n    margin: 25% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 35px;\n    left: 135px;\n  }\n}\n@media only screen and (max-width: 360px) {\n  .wrapper {\n    width: 90%;\n    margin: 27% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 25px;\n    left: 115px;\n  }\n}\n@media only screen and (max-width: 375px) {\n  .wrapper {\n    width: 90%;\n    margin: 27% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 25px;\n    left: 115px;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .logodiv {\n    position: absolute;\n    top: 15px;\n    left: 90px;\n  }\n\n  .text {\n    padding-top: 35%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n@media only screen and (min-device-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {\n  .wrapper {\n    width: 90%;\n    margin: 18% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 70px;\n    left: 310px;\n  }\n\n  .text {\n    padding-top: 17%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n/*@media only screen  \n  and (max-device-width: 1024px)  {\n  .wrapper{\n\t\twidth: 90%;\n    margin: 18% auto;\n\t}\n  .logodiv{\n\t\tposition: absolute;\n    top: 65px;\n    left: 293px\n\t}\n\t.text{\n    padding-top: 17%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n\t}\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFBQTtBQUdBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDQTtFQUNDLFdBQUE7QUFFRDtBQUFBO0VBQ0MsZUFBQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQURBO0VBQ0MsZ0JBQUE7QUFJRDtBQUZBO0VBQ0UsVUFBQTtBQUtGO0FBRkE7RUFFRSxlQUFBO0VBQ0UsZ0JBQUE7QUFJSjtBQUZBO0VBQ0Msa0JBQUE7RUFBb0IsZ0JBQUE7QUFNckI7QUFIQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBT3RCO0FBTEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU9KO0FBTEU7RUFDRCxxQkFBQTtFQUNBLGNBQUE7QUFPRDtBQUpBO0VBQ0UscUJBQUE7QUFPRjtBQUxBO0VBQ0MsVUFBQTtFQUNDLGdCQUFBO0FBUUY7QUFOQTtFQUNDLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFTRDtBQVBBO0VBQ0Msa0JBQUE7RUFDRyxVQUFBO0VBQ0EsZUFBQTtBQVVKO0FBUkE7RUFDQyxrQkFBQTtFQUNHLFNBQUE7RUFDQSxXQUFBO0FBV0o7QUFUQTtFQUNDLG1CQUFBO0VBQ0csWUFBQTtFQUNBLGFBQUE7RUFDSCw0Q0FBQTtBQVlEO0FBVkE7RUFDQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFhRDtBQVhBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWNEO0FBWkE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFlRDtBQVpBO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FBZUQ7QUFiQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0FBZ0JEO0FBZEE7RUFDQyxXQUFBO0VBQ0csaUJBQUE7QUFpQko7QUFkQTtFQUVFLGtCQUFBO0VBQ0QsV0FBQTtFQUNBLGVBQUE7QUFnQkQ7QUFkQTtFQUdDLFlBQUE7RUFDQyxxQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0QsZUFBQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0MsbUJBQUE7RUFDRCxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBZUY7QUFWQTtFQUNDO0lBQ0MsVUFBQTtJQUNDLGdCQUFBO0VBYUQ7O0VBWEQ7SUFDQyxrQkFBQTtJQUNFLFNBQUE7SUFDQSxXQUFBO0VBY0Y7QUFDRjtBQVhBO0VBQ0M7SUFDQyxVQUFBO0lBQ0MsZ0JBQUE7RUFhRDs7RUFYRDtJQUNDLGtCQUFBO0lBQ0UsU0FBQTtJQUNBLFdBQUE7RUFjRjtBQUNGO0FBWEE7RUFDQztJQUNDLFVBQUE7SUFDQyxnQkFBQTtFQWFEOztFQVhEO0lBQ0Msa0JBQUE7SUFDRSxTQUFBO0lBQ0EsV0FBQTtFQWNGO0FBQ0Y7QUFWQTtFQUNDO0lBQ0Msa0JBQUE7SUFDRSxTQUFBO0lBQ0EsVUFBQTtFQVlGOztFQVZEO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBYUM7QUFDRjtBQVBBO0VBR0U7SUFDQSxVQUFBO0lBQ0UsZ0JBQUE7RUFPRjs7RUFMQTtJQUNBLGtCQUFBO0lBQ0UsU0FBQTtJQUNBLFdBQUE7RUFRRjs7RUFORDtJQUNHLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQVNGO0FBQ0Y7QUFOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSIsImZpbGUiOiJwcm9maWxlMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5jaGVhZGVye1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxufSovXHJcbi5oZWFkQmcge1xyXG4gIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICBwYWRkaW5nOiAxJSAwJTtcclxufVxyXG4ubWVudWljb257XHJcblx0Y29sb3I6IzAwMDtcclxufVxyXG4uYmFja2J0bntcclxuXHRtYXJnaW4tbGVmdDowJTtcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMThweDtcclxufVxyXG4ucGx1c2J0bntcclxuXHRtYXJnaW4tcmlnaHQ6MyU7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuICAuYmFja2J0bntcclxuICAgIG1hcmdpbi1sZWZ0OjAlO1xyXG4gICAgcGFkZGluZy10b3A6MTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICB9XHJcbiAgLmhlYWRCZyB7XHJcblx0LS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG5cdHBhZGRpbmc6IDElIDAlO1xyXG4gIH1cclxufVxyXG4uYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbi53cmFwcGVye1xyXG5cdHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAzMCUgYXV0bztcclxufVxyXG4ubWFpbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmlubmVye1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAlIGF1dG87XHJcbn1cclxuLmxvZ29kaXZ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgbGVmdDogMTE1cHg7XHJcbn1cclxuLmxvZ29kaXYgaW1ne1xyXG5cdGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG59XHJcbi50ZXh0e1xyXG5cdHBhZGRpbmctdG9wOiAzMCU7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6MjBweFxyXG59XHJcbi50ZXh0MntcclxuXHRjb2xvcjojRkU5ODA1O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuLnBhcmF7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogNCUgMCU7XHJcbn1cclxuXHJcbi5tYWluMntcclxuXHR3aWR0aDo2MCU7XHJcblx0bWFyZ2luOiAxMCUgYXV0bztcclxufVxyXG4uY29udGFjdGRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4uY29udGFjdGRpdiBwe1xyXG5cdG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCVcclxufVxyXG5cclxuLmlvbmJ1dHRvblxyXG57XHRcclxuIFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi10b3A6IDI1JTtcclxufVxyXG4uaWJcclxue1xyXG5cclxuXHRjb2xvcjogd2hpdGU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRkU5ODA1O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDgwJTtcclxuIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7IFxyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkge1xyXG5cdC53cmFwcGVye1xyXG5cdFx0d2lkdGg6IDkwJTtcclxuXHQgIG1hcmdpbjogMjUlIGF1dG87XHJcblx0fVxyXG5cdC5sb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNXB4O1xyXG4gICAgbGVmdDogMTM1cHg7XHJcblx0fVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIHtcclxuXHQud3JhcHBlcntcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0ICBtYXJnaW46IDI3JSBhdXRvO1xyXG5cdH1cclxuXHQubG9nb2RpdntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjVweDtcclxuICAgIGxlZnQ6IDExNXB4O1xyXG5cdH1cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KSB7XHJcblx0LndyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdCAgbWFyZ2luOiAyNyUgYXV0bztcclxuXHR9XHJcblx0LmxvZ29kaXZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1cHg7XHJcbiAgICBsZWZ0OiAxMTVweDtcclxuXHR9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuXHQubG9nb2RpdntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDkwcHg7XHJcblx0fVxyXG5cdC50ZXh0e1xyXG5cdHBhZGRpbmctdG9wOiAzNSU7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6MjBweFxyXG59XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xyXG4gIC53cmFwcGVye1xyXG5cdFx0d2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTglIGF1dG87XHJcblx0fVxyXG4gIC5sb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgbGVmdDogMzEwcHg7XHJcblx0fVxyXG5cdC50ZXh0e1xyXG4gICAgcGFkZGluZy10b3A6IDE3JTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblx0fVxyXG59XHJcblxyXG4vKkBtZWRpYSBvbmx5IHNjcmVlbiAgXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpICB7XHJcbiAgLndyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxOCUgYXV0bztcclxuXHR9XHJcbiAgLmxvZ29kaXZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDY1cHg7XHJcbiAgICBsZWZ0OiAyOTNweFxyXG5cdH1cclxuXHQudGV4dHtcclxuICAgIHBhZGRpbmctdG9wOiAxNyU7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG5cdH1cclxufSovIl19 */");

/***/ }),

/***/ "as0H":
/*!*******************************************!*\
  !*** ./src/app/profile1/profile1.page.ts ***!
  \*******************************************/
/*! exports provided: Profile1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile1Page", function() { return Profile1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile1.page.html */ "zC1j");
/* harmony import */ var _profile1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile1.page.scss */ "Klb0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");








let Profile1Page = class Profile1Page {
    constructor(navCtrl, route, modal, loading, rest) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.modal = modal;
        this.loading = loading;
        this.rest = rest;
        this.picUrl = 'assets/imgs/profilelogo.png';
        this.error = {
            status: false,
            message: "",
        };
    }
    ngOnInit() {
        this.logeduser = localStorage.getItem('uid');
        console.log('logeduser', this.logeduser);
        this.caregiverid = this.route.snapshot.paramMap.get('caregiverid');
        console.log('caregiverid:', this.caregiverid);
        this.getdetails();
    }
    goback() {
        this.navCtrl.navigateBack('/cgviewprofile1');
    }
    getdetails() {
        let senddata = {
            agencyCaregiverId: this.caregiverid,
        };
        this.rest.sendRequest("get_agency_caregiver_detail", senddata).subscribe((data) => {
            console.log('get_agency_caregiver_detail::', data);
            if (data.status == 'success') {
                console.log('suucesssss');
                this.agencycaregiverid = data.data.agency_caregiver_id;
                this.fname = data.data.name;
                this.email = data.data.email;
                if (data.data.profile_picture == '' || data.data.profile_picture == null) {
                    this.picUrl = this.picUrl;
                }
                else {
                    this.picUrl = data.data.profile_picture;
                }
                if (data.data.per_hour_rate == '' || data.data.per_hour_rate == null) {
                    this.price = 'None';
                }
                else {
                    this.price = data.data.per_hour_rate;
                }
                if (data.data.mobile_number == '' || data.data.mobile_number == null) {
                    this.mobilenumber = 'None';
                }
                else {
                    this.mobilenumber = data.data.mobile_number;
                }
                if (data.data.street_address == '' || data.data.street_address == null) {
                    this.address = 'None';
                }
                else {
                    this.address = data.data.street_address;
                }
                if (data.data.about == '' || data.data.about == null) {
                    this.about = 'None';
                }
                else {
                    this.about = data.data.about;
                }
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
    next() {
        this.navCtrl.navigateForward('/editcgprofile2');
        localStorage.setItem('agencycaregiverid', this.agencycaregiverid);
    }
};
Profile1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] }
];
Profile1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile1',
        template: _raw_loader_profile1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Profile1Page);



/***/ }),

/***/ "zC1j":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile1/profile1.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t<ion-toolbar class=\"headBgGlobal\">\r\n\t    <ion-buttons slot=\"start\" class=\"backbtn\">\r\n\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t  </ion-buttons>\r\n\t  <ion-title class=\"ctitle\">Profile</ion-title>\r\n\t  <ion-buttons slot=\"end\" class=\"plusbtn\" *ngIf=\"page!='caregiver'\" (click)=\"next()\">\r\n\t\t  <img src=\"assets/imgs/icons/edit.svg\">\r\n\t\t</ion-buttons>\r\n\t</ion-toolbar>\r\n</ion-header> -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t<ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col class=\"backbtn\" size=\"2\">\r\n        <div>\r\n          <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"8\">\r\n        <ion-text class=\"ctitle\">Profile</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\">\r\n\t\t<div *ngIf=\"page!='caregiver'\" (click)=\"next()\">\r\n\t\t\t<img src=\"assets/imgs/icons/edit.svg\">\r\n\t\t</div>\r\n      </ion-col>\r\n    </ion-row>\r\n\t    <!-- <ion-buttons slot=\"start\" class=\"backbtn\">\r\n\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t  </ion-buttons>\r\n\t  <ion-title class=\"ctitle\">Profile</ion-title> -->\r\n\t  <!-- <ion-buttons slot=\"end\" class=\"plusbtn\" *ngIf=\"page!='caregiver'\" (click)=\"next()\">\r\n\t\t  <img src=\"assets/imgs/icons/edit.svg\">\r\n\t\t</ion-buttons> -->\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\t<div class=\"wrapper\">\r\n\t\t<div class=\"main\">\r\n\t\t\t<div class=\"inner\">\r\n\t\t\t\t<div class=\"logodiv\">\r\n\t\t\t\t\t<img src=\"{{picUrl}}\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"text\">{{fname}}</div>\r\n\t\t\t\t<div class=\"para\">{{about}}</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"main2\">\r\n\t\t\t<div class=\"contactdiv\">\r\n\t\t\t\t<div class=\"icondiv\">\r\n\t\t\t\t\t<img src=\"assets/imgs/icons/sms.png\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<p>{{email}}</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"contactdiv\">\r\n\t\t\t\t<div class=\"icondiv\">\r\n\t\t\t\t\t<img src=\"assets/imgs/icons/arrow.png\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<p>{{address}}</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"contactdiv\">\r\n\t\t\t\t<div class=\"icondiv\">\r\n\t\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<p>{{mobilenumber}}</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"page=='caregiver'\">\r\n\t\t\t<div class=\"ionbutton\" (click)=\"openmodel()\">\r\n\t\t\t\t<ion-button class=\"ib\">hire</ion-button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=profile1-profile1-module-es2015.js.map