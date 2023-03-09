(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cgsignup-cgsignup-module"],{

/***/ "0Ib1":
/*!*********************************************!*\
  !*** ./src/app/cgsignup/cgsignup.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #ffffff;\n}\n\n.header {\n  display: flex;\n  /*margin-top: 5%;*/\n}\n\n.back-btn {\n  font-size: 20px;\n  padding: 37px 0 0 15px;\n  fill: #333;\n  cursor: pointer;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.background {\n  /*--overflow: hidden;*/\n  --background: url('backlogo.png') fixed 70% #FE9805 !important;\n}\n\n.topdiv {\n  height: 400px;\n  background: #FFFFFF;\n  border-radius: 0px 0px 50px 50px;\n}\n\n.logindiv {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  width: 85%;\n  border-radius: 30px;\n  margin: 0% auto;\n}\n\n.wrapper {\n  width: 75%;\n  margin: 5% auto 2%;\n  padding-top: 1px;\n}\n\n.headtxt {\n  font-weight: bold;\n  font-size: 30px;\n  color: #000000;\n  margin-top: 8%;\n}\n\n.fields {\n  margin-top: 5%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 8px;\n  background: #EBEBEB;\n  padding: 1% 4%;\n  margin-top: 5%;\n  align-items: center;\n  position: relative;\n}\n\n.inputdiv1 {\n  display: flex;\n  border-radius: 0px 0px 8px 8px;\n  background: #EBEBEB;\n  padding: 1% 10%;\n  margin-top: -1%;\n  align-items: center;\n  position: absolute;\n  z-index: 9999;\n  width: 64%;\n}\n\n.icondiv {\n  margin-top: 4%;\n  width: 8%;\n}\n\n.eye {\n  color: #737373;\n}\n\n.pinput {\n  width: 100%;\n  padding-left: 4%;\n  padding-top: 1%;\n  font-size: 15px;\n  opacity: 48%;\n}\n\n.check {\n  color: #737373;\n  text-align: right;\n  font-size: 13px;\n  margin-top: 3%;\n  width: 100%;\n  margin-right: 2%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #fd8f07f2;\n  outline: none;\n  width: 100%;\n  font-size: 15px;\n  margin-bottom: 10%;\n  height: 50px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 10px;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\n.btns {\n  font-size: 15px;\n  color: white;\n}\n\n.footer {\n  font-size: 17px;\n  text-align: center;\n  color: #000000;\n  padding: 10px 0px;\n}\n\n.bgtoolbar {\n  /*--background: #F7F7F7;*/\n  --background: #fd8f07f2;\n}\n\n.footer span {\n  color: #000;\n  font-weight: 400;\n  font-size: 20px;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n\n@media only screen and (max-width: 360px) {\n  .pinput {\n    width: 100%;\n    padding-left: 4%;\n    padding-top: 1%;\n    font-size: 14px;\n    opacity: 48%;\n  }\n}\n\n@media only screen and (max-width: 414px) {\n  .icondiv {\n    margin-top: 4%;\n    width: 8%;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .pinput {\n    width: 100%;\n    padding-left: 4%;\n    padding-top: 1.5%;\n    font-size: 12px;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .pinput {\n    width: 100%;\n    padding-left: 4%;\n    padding-top: 5.5%;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nnc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHFCQUFBO0FBQ0Q7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBRkE7RUFFRSxzQkFBQTtFQUNBLDhEQUFBO0FBSUY7O0FBRkE7RUFDQyxhQUFBO0VBQ0MsbUJBQUE7RUFDQSxnQ0FBQTtBQUtGOztBQUhBO0VBSUUsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSUQ7O0FBRkE7RUFDQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUtEOztBQUhBO0VBQ0MsY0FBQTtBQU1EOztBQUpBO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFPRDs7QUFMQTtFQUNDLGFBQUE7RUFDQyw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFRRjs7QUFOQTtFQUNDLGNBQUE7RUFDQSxTQUFBO0FBU0Q7O0FBUEE7RUFDQyxjQUFBO0FBVUQ7O0FBUkE7RUFFQyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFVRDs7QUFQQTtFQUVDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBU0Q7O0FBTkE7RUFFQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUUQ7O0FBTkE7RUFHQyxZQUFBO0VBQ0MsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQyxtQkFBQTtFQUNELHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBUUY7O0FBSkE7RUFFQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBSUEsaUJBQUE7QUFHRDs7QUFEQTtFQUNDLHlCQUFBO0VBQ0EsdUJBQUE7QUFJRDs7QUFGQTtFQUVDLFdBQUE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBSUY7O0FBQ0E7RUFDQztJQUVDLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQUNBO0FBQ0Y7O0FBS0E7RUFDQztJQUVDLGNBQUE7SUFDQyxTQUFBO0VBSkQ7QUFDRjs7QUFTQTtFQUNDO0lBRUMsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBUkE7QUFDRjs7QUFhQTtFQUlDO0lBRUMsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBZkE7QUFDRiIsImZpbGUiOiJjZ3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZEJnIHtcclxuXHQtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKm1hcmdpbi10b3A6IDUlOyovXHJcbn1cclxuLmJhY2stYnRuIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZzogMzdweCAwIDAgMTVweDtcclxuICBmaWxsOiAjMzMzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYmFja1N2ZyB7XHJcbiAgZmlsbDogIzMzMztcclxufVxyXG4uYmFja2dyb3VuZHtcclxuXHQvLyAgLS1iYWNrZ3JvdW5kOiAjRkU5ODA1O1xyXG5cdCAvKi0tb3ZlcmZsb3c6IGhpZGRlbjsqL1xyXG5cdCAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1ncy9iYWNrbG9nby5wbmcpIGZpeGVkIDcwJSAjRkU5ODA1ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRvcGRpdntcclxuXHRoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1MHB4IDUwcHg7XHJcbn1cclxuLmxvZ2luZGl2e1xyXG4vLyBcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICBsZWZ0OiAzMHB4O1xyXG4vLyAgIHRvcDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAzNSUpIDBweCA1cHggMTVweDtcclxuICB3aWR0aDogODUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgbWFyZ2luOiAwJSBhdXRvO1xyXG59XHJcbi53cmFwcGVye1xyXG5cdHdpZHRoOjc1JTtcclxuXHRtYXJnaW46NSUgYXV0byAyJTtcclxuXHRwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcbi5oZWFkdHh0e1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRjb2xvcjogIzAwMDAwMDtcclxuXHRtYXJnaW4tdG9wOjglO1xyXG59XHJcbi5maWVsZHN7XHJcblx0bWFyZ2luLXRvcDo1JTtcclxufVxyXG4uaW5wdXRkaXZ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0YmFja2dyb3VuZDogI0VCRUJFQjtcclxuXHRwYWRkaW5nOiAxJSA0JTtcclxuXHRtYXJnaW4tdG9wOiA1JTtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW5wdXRkaXYxe1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA4cHggOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNFQkVCRUI7XHJcbiAgcGFkZGluZzogMSUgMTAlO1xyXG4gIG1hcmdpbi10b3A6IC0xJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIHdpZHRoOiA2NCU7XHJcbn1cclxuLmljb25kaXZ7XHJcbiBtYXJnaW4tdG9wOiA0JTtcclxuIHdpZHRoOiA4JTtcclxufVxyXG4uZXlle1xyXG5cdGNvbG9yOiAjNzM3MzczO1xyXG59XHJcbi5waW5wdXRcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmctbGVmdDogNCU7XHJcblx0cGFkZGluZy10b3A6IDElO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRvcGFjaXR5OiA0OCU7XHJcbn1cclxuXHJcbi5jaGVja1xyXG57XHJcblx0Y29sb3I6ICM3MzczNzM7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdG1hcmdpbi10b3A6IDMlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1yaWdodDogMiU7XHJcbn1cclxuXHJcbi5pb25idXR0b25cclxue1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmliXHJcbntcclxuXHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogI2ZkOGYwN2YyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5idG5ze1xyXG5cdCBmb250LXNpemU6IDE1cHg7XHJcblx0IGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5mb290ZXJcclxue1xyXG5cdGZvbnQtc2l6ZTogMTdweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHQvLyBib3R0b206IDE1cHg7XHJcbi8vICAgbGVmdDogODBweDtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuLmJndG9vbGJhcntcclxuXHQvKi0tYmFja2dyb3VuZDogI0Y3RjdGNzsqL1xyXG5cdC0tYmFja2dyb3VuZDogI2ZkOGYwN2YyO1xyXG59XHJcbi5mb290ZXIgc3BhblxyXG57XHJcblx0Y29sb3I6ICMwMDA7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBjb2xvcjogI2ZmMDAwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSB7XHJcblx0LnBpbnB1dFxyXG5cdHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA0JTtcclxuXHRcdHBhZGRpbmctdG9wOiAxJTtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdG9wYWNpdHk6IDQ4JTtcclxuXHR9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkge1xyXG5cdC5pY29uZGl2XHJcblx0e1xyXG5cdFx0bWFyZ2luLXRvcDogNCU7XHJcblx0ICB3aWR0aDogOCU7XHJcblx0fVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjBweCkge1xyXG5cdC5waW5wdXRcclxuXHR7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBhZGRpbmctbGVmdDogNCU7XHJcblx0XHRwYWRkaW5nLXRvcDogMS41JTtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweClcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweClcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xyXG5cdC5waW5wdXRcclxuXHR7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBhZGRpbmctbGVmdDogNCU7XHJcblx0XHRwYWRkaW5nLXRvcDogNS41JTtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHR9XHJcblxyXG59XHJcblxyXG4iXX0= */");

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

/***/ "L7mQ":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cgsignup/cgsignup.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar class=\"headBg\">\n      <div class=\"header\">\n        <div class=\"back-btn\">\n         \t<img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content class=\"background\" fullscreen>\n\n  <div style=\"text-align: center;margin-top: 4%;\">\n    <img src=\"assets/imgs/ulogo.png\">\n  </div>\t\n \n  <div class=\"logindiv\">\n\t\t  <div class=\"wrapper\">\n\t\t  \t\n\t\t  \t<div class=\"headtxt\">Sign up today</div>\n\t\t  \t<p style=\"margin-bottom: 10%;font-size:14px;color: #000000;opacity:0.8;\">UniqKidz holds all the important information that you need about your child.</p>\n\n\t\t  \t<div class=\"fields\">\n\t\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/user.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"First Name\" type=\"text\"  [(ngModel)]=\"firstname\"></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<p *ngIf=\"firstnameError.status\" class=\"error\">\n\t\t      {{firstnameError.message}}\n\t\t    </p>\n\n\t\t\t\t<div class=\"fields\">\n\t\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/user.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Last Name\" type=\"text\"  [(ngModel)]=\"lastname\"></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<p *ngIf=\"lastnameError.status\" class=\"error\">\n\t\t      {{lastnameError.message}}\n\t\t    </p>\n\t\t\t\t<div class=\"fields\">\n\t\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/caregiver.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Caregivertype\" type=\"text\"  [(ngModel)]=\"type\"\n\t\t\t\t\t\t\t\t(click)=\"toggleSelect()\"\n\t\t\t\t\t\t\t\treadonly\n\t\t\t\t\t\t\t></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"icondiv\" *ngIf=\"displayOption==false\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/Polygon.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"icondiv\" *ngIf=\"displayOption==true\" (click)=\"close()\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/Polygon2.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t    <div *ngIf=\"displayOption==true\">\n\t\t    \t<div class=\"inputdiv1\">\n\t\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t\t<ion-input \n\t\t\t\t\t\t\t\t*ngFor=\"let type of caregiverarray\"\n              \t(click)=\"selecttype(type)\" \n\t\t\t\t\t\t\t\treadonly\n\t\t\t\t\t\t\t\tvalue=\"{{type.name}}\"\n\t\t\t\t\t\t\t></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t    </div>\n\t\t    <p *ngIf=\"typeError.status\" class=\"error\">\n\t\t      {{typeError.message}}\n\t\t    </p>\n\t\t  \t<div class=\"fields\">\n\t\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/email.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Email\" type=\"email\"  [(ngModel)]=\"email\"></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<p *ngIf=\"emailError.status\" class=\"error\">\n\t\t\t    {{emailError.message}}\n\t\t\t  </p>\n\n\t\t\t\t<div class=\"fields\">\n\t\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/lock.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Password\" \n\t\t\t\t\t\t\t\ttype=\"{{showPass ? 'text':'password' }}\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"password\"\n\t\t\t\t\t\t\t></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\n\t\t\t\t\t\t\t<ion-icon name=\"eye\" class=\"eye\"  *ngIf=\"!showPass\" (click)=\"togglePass()\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"eye-off\" class=\"eye\"  *ngIf=\"showPass\" (click)=\"togglePass()\"></ion-icon>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t <p *ngIf=\"passwordError.status\" class=\"error\">\n\t\t\t\t    {{passwordError.message}}\n\t\t\t\t  </p>\n\n\t\t\t\t<div class=\"fields\">\n\t\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/lock.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Password\" \n\t\t\t\t\t\t\t\ttype=\"{{showcPass ? 'text':'password' }}\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"confirmPassword\"\n\t\t\t\t\t\t\t></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\n\t\t\t\t\t\t\t<ion-icon name=\"eye\" class=\"eye\"  *ngIf=\"!showcPass\" (click)=\"togglecPass()\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"eye-off\" class=\"eye\"  *ngIf=\"showcPass\" (click)=\"togglecPass()\"></ion-icon>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<p *ngIf=\"confirmPasswordError.status\" class=\"error\">\n\t\t\t    {{confirmPasswordError.message}}\n\t\t\t  </p>\n        <p style=\"margin-bottom: 10%;font-size: 11px;color: #000000;opacity: 0.8;\">By signing up, you agree to our <span style=\"text-decoration: underline;\" (click)=\"termsandcondition('terms')\">Terms and Conditions</span> </p>\n\t\t\t\t<div class=\"ionbutton\" (click)=\"gotohome()\">\n\t\t\t\t\t<ion-button class=\"ib\">\n\t\t\t\t\t <span class=\"btns\">register</span> \n\t\t\t\t\t</ion-button>\n\t\t\t\t</div>\n\n\t\t\t\t <!-- <div class=\"signup\">\n\t\t      <p>Don't have an account already?</p>\n\t\t      <p (click)=\"signupPage()\" class=\"signupText\">SIGN UP</p>\n\t\t    </div> -->\n\n\t\t  </div>\n\n\t  </div>\n \n \n<!-- \t<div class=\"footer\">\n    Already a member? <span (click)=\"gotologin()\">Login here</span>\n\t</div> -->\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" *ngIf=\"showfooter==true\">\n\t<ion-toolbar class=\"bgtoolbar\">\n\t\t<div class=\"footer\">\n\t\t  Already a member? <span (click)=\"gotologin()\">Login here</span>\n\t\t</div>\n\t</ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "YcQ3":
/*!*********************************************!*\
  !*** ./src/app/cgsignup/cgsignup.module.ts ***!
  \*********************************************/
/*! exports provided: CgsignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgsignupPageModule", function() { return CgsignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cgsignup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cgsignup-routing.module */ "aR2l");
/* harmony import */ var _cgsignup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cgsignup.page */ "qFza");







let CgsignupPageModule = class CgsignupPageModule {
};
CgsignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cgsignup_routing_module__WEBPACK_IMPORTED_MODULE_5__["CgsignupPageRoutingModule"]
        ],
        declarations: [_cgsignup_page__WEBPACK_IMPORTED_MODULE_6__["CgsignupPage"]]
    })
], CgsignupPageModule);



/***/ }),

/***/ "aR2l":
/*!*****************************************************!*\
  !*** ./src/app/cgsignup/cgsignup-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CgsignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgsignupPageRoutingModule", function() { return CgsignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cgsignup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cgsignup.page */ "qFza");




const routes = [
    {
        path: '',
        component: _cgsignup_page__WEBPACK_IMPORTED_MODULE_3__["CgsignupPage"]
    }
];
let CgsignupPageRoutingModule = class CgsignupPageRoutingModule {
};
CgsignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CgsignupPageRoutingModule);



/***/ }),

/***/ "qFza":
/*!*******************************************!*\
  !*** ./src/app/cgsignup/cgsignup.page.ts ***!
  \*******************************************/
/*! exports provided: CgsignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgsignupPage", function() { return CgsignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cgsignup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cgsignup.page.html */ "L7mQ");
/* harmony import */ var _cgsignup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cgsignup.page.scss */ "0Ib1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _loginwithuser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loginwithuser.service */ "tqas");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var _termsandcondition_termsandcondition_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../termsandcondition/termsandcondition.page */ "kE+6");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");










let CgsignupPage = class CgsignupPage {
    constructor(navCtrl, modalController, platform, userService, loading, rest, menuCtrl, cd, oneSignal) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.platform = platform;
        this.userService = userService;
        this.loading = loading;
        this.rest = rest;
        this.menuCtrl = menuCtrl;
        this.cd = cd;
        this.oneSignal = oneSignal;
        this.showPass = false;
        this.showcPass = false;
        this.showfooter = true;
        this.showhide = false;
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.isLoading = true;
        this.displayOption = false;
        this.emailError = {
            status: false,
            message: "",
        };
        this.firstnameError = {
            status: false,
            message: "",
        };
        this.lastnameError = {
            status: false,
            message: "",
        };
        this.typeError = {
            status: false,
            message: "",
        };
        this.passwordError = {
            status: false,
            message: "",
        };
        this.confirmPasswordError = {
            status: false,
            message: "",
        };
        this.error = {
            status: false,
            message: "",
        };
        this.caregiverarray = [
            { name: 'Professional Caregiver' },
            { name: 'Family/Friend Caregiver' },
            { name: 'Agency Caregiver' }
        ];
        this.sender_id = '620446083343';
        this.oneSignalAppId = '7c8eac8b-868e-461d-b8db-91604121255b';
    }
    ngOnInit() {
        this.userType = localStorage.getItem("userType");
        console.log('userType', this.userType);
        this.player_id = localStorage.getItem('deviceID');
        console.log('player_id', this.player_id);
        this.platform.keyboardDidShow.subscribe(ev => {
            console.log('keyboard show', ev);
            this.showfooter = false;
            this.cd.detectChanges();
            console.log('showFooter', this.showfooter);
        });
        this.platform.keyboardDidHide.subscribe(ev => {
            if (this.showhide == true) {
                this.showfooter = true;
                this.showhide = false;
                this.cd.detectChanges();
                console.log('keyboard hide');
            }
            else {
                this.showhide = true;
            }
        });
        this.oneSignal.setLogLevel({ logLevel: 6, visualLevel: 2 });
        this.oneSignal.startInit(this.oneSignalAppId, this.sender_id);
        this.oneSignal.endInit();
        this.oneSignal.getIds().then((identity) => {
            console.log('identity', identity.userId);
            this.identy = identity;
            this.player_id = this.identy.userId;
        });
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }
    ionViewWillLeave() {
        // enable the root left menu when leaving this page
        this.menuCtrl.enable(true);
    }
    gotologin() {
        this.navCtrl.navigateForward('/signin');
    }
    goback() {
        this.navCtrl.navigateBack('/registeras');
    }
    togglePass() {
        this.showPass = !this.showPass;
    }
    togglecPass() {
        this.showcPass = !this.showcPass;
    }
    toggleSelect() {
        console.log('hellow');
        // if (!this.isLoading) {
        this.displayOption = true;
        // }
    }
    selecttype(type) {
        console.log('typesssss', type);
        // if (survey.type) {
        //   this.displayOption = false;
        //   return;
        // }
        // this.selectedSurvey = survey;
        // this.surveyAnswer = [];
        this.type = type.name;
        console.log('caregiver type', this.type);
        if (this.type == 'Professional Caregiver') {
            // const myArray = this.type.split(' Caregiver');
            // this.caregivertype=myArray[0];
            this.accountTypeId = 2; // id 2 for Professional
            console.log('accountTypeId:', this.accountTypeId);
            // console.log('split text',this.caregivertype);
            this.displayOption = false;
        }
        if (this.type == 'Family/Friend Caregiver') {
            // const myArray = this.type.split('/Friend Caregiver');
            // this.caregivertype=myArray[0];
            this.accountTypeId = 3; // id 3 for Family
            console.log('accountTypeId:', this.accountTypeId);
            // console.log('split text',this.caregivertype);
            this.displayOption = false;
        }
        if (this.type == 'Agency Caregiver') {
            // const myArray = this.type.split(' Caregiver');
            // this.caregivertype=myArray[0];
            this.accountTypeId = 4; // id 4 for agency
            console.log('accountTypeId:', this.accountTypeId);
            // console.log('split text',this.caregivertype);
            this.displayOption = false;
        }
    }
    close() {
        this.displayOption = false;
    }
    gotohome() {
        if (this.firstname && this.lastname && this.email && this.password && this.confirmPassword) {
            if (!this.validateEmail(this.email)) {
                this.emailError.status = true;
                this.emailError.message = "Invalid Email address.";
                setTimeout(() => {
                    this.emailError.status = false;
                    this.emailError.message = "";
                }, 3000);
                return;
            }
            if (this.password !== this.confirmPassword) {
                this.confirmPasswordError.status = true;
                // eslint-disable-next-line @typescript-eslint/quotes
                this.confirmPasswordError.message = "Password didn't match.";
                setTimeout(() => {
                    this.confirmPasswordError.status = false;
                    this.confirmPasswordError.message = "";
                }, 3000);
                return;
            }
            this.loading.loadershow();
            let signUpData = {
                firstName: this.firstname,
                lastName: this.lastname,
                userEmail: this.email,
                userPassword: this.password,
                confirmPassword: this.confirmPassword,
                accountTypeId: this.accountTypeId,
                oneSignalId: this.player_id,
                userType: 1
            };
            this.rest.sendRequest("signup", signUpData).subscribe((data) => {
                console.log('signup request data', data);
                if (data.status == 'success') {
                    this.firstname = "";
                    this.lastname = "";
                    this.email = "";
                    this.password = "";
                    this.confirmPassword = "";
                    this.loading.hideLoader();
                    localStorage.setItem("user", JSON.stringify(data.data));
                    localStorage.setItem("uid", data.data.users_id);
                    this.loading.presentToast('Registered Successfully!!!');
                    if (this.type == 'Professional Caregiver') {
                        this.userService.setSideMenu("Professional");
                        this.userService.userType = 'Professional';
                        console.log('service', this.userService.userType);
                        localStorage.setItem('accountTypeId', this.accountTypeId);
                        this.navCtrl.navigateRoot('/cghomescreen');
                    }
                    if (this.type == 'Family/Friend Caregiver') {
                        this.userService.setSideMenu("Family");
                        this.userService.userType = 'Family';
                        console.log('service', this.userService.userType);
                        localStorage.setItem('accountTypeId', this.accountTypeId);
                        this.navCtrl.navigateRoot('/cghomescreen');
                    }
                    if (this.type == 'Agency Caregiver') {
                        this.userService.setSideMenu("Agency");
                        this.userService.userType = 'Agency';
                        console.log('service', this.userService.userType);
                        localStorage.setItem('accountTypeId', this.accountTypeId);
                        this.navCtrl.navigateRoot('/agencyhomescreen');
                    }
                }
                if (data.status == 'error') {
                    this.loading.hideLoader();
                    // console.log('signup request data:',data.status);
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
        if (!this.firstname) {
            this.firstnameError.status = true;
            this.firstnameError.message = "Firstname is required";
        }
        if (!this.lastname) {
            this.lastnameError.status = true;
            this.lastnameError.message = "Lastname is required";
        }
        if (!this.type) {
            this.typeError.status = true;
            this.typeError.message = "Choose one type atleast";
        }
        if (!this.email) {
            this.emailError.status = true;
            this.emailError.message = "Email address is required";
        }
        if (!this.password) {
            this.passwordError.status = true;
            this.passwordError.message = "Password is required";
        }
        if (!this.confirmPassword) {
            this.confirmPasswordError.status = true;
            this.confirmPasswordError.message = "Confirm Password is required";
        }
        setTimeout(() => {
            this.emailError.status = false;
            this.emailError.message = "";
            this.firstnameError.status = false;
            this.firstnameError.message = "";
            this.lastnameError.status = false;
            this.lastnameError.message = "";
            this.typeError.status = false;
            this.typeError.message = "";
            this.passwordError.status = false;
            this.passwordError.message = "";
            this.confirmPasswordError.status = false;
            this.confirmPasswordError.message = "";
        }, 3000);
        if (this.userType == 'parent') {
            this.navCtrl.navigateRoot('/homescreen');
        }
    }
    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    termsandcondition(terms) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _termsandcondition_termsandcondition_page__WEBPACK_IMPORTED_MODULE_8__["TermsandconditionPage"],
                cssClass: 'termsclass',
                componentProps: {
                    termsaandcondition: terms
                }
            });
            return yield modal.present();
        });
    }
};
CgsignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _loginwithuser_service__WEBPACK_IMPORTED_MODULE_5__["LoginwithuserService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"] }
];
CgsignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cgsignup',
        template: _raw_loader_cgsignup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cgsignup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CgsignupPage);



/***/ })

}]);
//# sourceMappingURL=cgsignup-cgsignup-module-es2015.js.map