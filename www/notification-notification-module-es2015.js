(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "LcRc":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n\t\t\t<ion-col style=\"padding-top:6px;\" size=\"2\">\n\t\t\t\t<div>\n\t\t\t\t\t<ion-menu-button class=\"menuicon\"></ion-menu-button>\n        </div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col class=\"titleclass\" size=\"8\">\n\t\t\t\t<ion-text class=\"ctitle\">Notifications</ion-text>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"2\">\n\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t    <!-- <ion-buttons slot=\"start\" style=\"margin-left: 2%;\">\n\t      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n\t    </ion-buttons>\n\t   <ion-title class=\"ctitle\">Notifications</ion-title> -->\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n    <div *ngIf=\"chatdetail==false\" style=\"margin-top: 45%;\">\n      <div class=\"defaulttext\">Any notification you get to help you care for your child will appear here.</div>\n    </div>\n\t\t<div *ngFor=\"let noti of notiarray\">\n\t\t\t<div class=\"main\" (click)=\"notitype(noti.notitype)\">\n\t\t\t\t<div class=\"inner1\">\n\t\t\t\t\t<div class=\"imgdiv\">\n\t\t\t\t\t\t<img src=\"assets/imgs/icons/noti.png\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"textdiv\">\n\t\t\t\t\t\t<div class=\"text\">{{noti.sender_name}}</div>\n\t\t\t\t\t\t<div class=\"para\">{{noti.message}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t<div class=\"date\">{{noti.date}}</div>\n\t\t\t\t\t\t<div class=\"time\">{{noti.time}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- <div class=\"main\">\n\t\t\t<div class=\"inner1\">\n\t\t\t\t<div class=\"imgdiv\">\n\t\t\t\t\t<img src=\"assets/imgs/icons/noti.png\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"textdiv\">\n\t\t\t\t\t<div class=\"text\">Lorium Ipsum</div>\n\t\t\t\t\t<div class=\"para\">didi ile ilgilenir misiniz</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"right\">\n\t\t\t\t\t<div class=\"date\">2020-07-08</div>\n\t\t\t\t\t<div class=\"time\">05:40pm</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"main\">\n\t\t\t<div class=\"inner1\">\n\t\t\t\t<div class=\"imgdiv\">\n\t\t\t\t\t<img src=\"assets/imgs/icons/noti.png\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"textdiv\">\n\t\t\t\t\t<div class=\"text\">Lorium Ipsum</div>\n\t\t\t\t\t<div class=\"para\">didi ile ilgilenir misiniz</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"right\">\n\t\t\t\t\t<div class=\"date\">2020-07-08</div>\n\t\t\t\t\t<div class=\"time\">05:40pm</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"main\">\n\t\t\t<div class=\"inner1\">\n\t\t\t\t<div class=\"imgdiv\">\n\t\t\t\t\t<img src=\"assets/imgs/icons/noti.png\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"textdiv\">\n\t\t\t\t\t<div class=\"text\">Lorium Ipsum</div>\n\t\t\t\t\t<div class=\"para\">didi ile ilgilenir misiniz</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"right\">\n\t\t\t\t\t<div class=\"date\">2020-07-08</div>\n\t\t\t\t\t<div class=\"time\">05:40pm</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"main\">\n\t\t\t<div class=\"inner1\">\n\t\t\t\t<div class=\"imgdiv\">\n\t\t\t\t\t<img src=\"assets/imgs/icons/noti.png\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"textdiv\">\n\t\t\t\t\t<div class=\"text\">Lorium Ipsum</div>\n\t\t\t\t\t<div class=\"para\">didi ile ilgilenir misiniz</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"right\">\n\t\t\t\t\t<div class=\"date\">2020-07-08</div>\n\t\t\t\t\t<div class=\"time\">05:40pm</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div> -->\n\t</div>\n\n</ion-content>\n");

/***/ }),

/***/ "TLzw":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-routing.module */ "mhdW");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "dOoZ");







let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"]
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
    })
], NotificationPageModule);



/***/ }),

/***/ "Z9r7":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 6% auto;\n}\n\n.defaulttext {\n  font-size: 17px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.main {\n  margin-top: 5%;\n  border-bottom: 1px solid #D6D6D6;\n}\n\n.inner1 {\n  padding: 2% 3%;\n  display: flex;\n}\n\n.imgdiv img {\n  border-radius: 50%;\n  width: 44px;\n  height: 44px;\n}\n\n.textdiv {\n  margin-left: 4%;\n  margin-top: 1%;\n  width: 65%;\n}\n\n.text {\n  font-size: 14px;\n  font-weight: 500;\n  color: #000000;\n}\n\n.para {\n  font-size: 10px;\n  font-weight: 400;\n  color: #000000;\n  margin-top: 1%;\n}\n\n.right {\n  /*margin-left: 30%;*/\n  margin-top: 2%;\n}\n\n.date {\n  font-size: 10px;\n  color: #7F889F;\n}\n\n.time {\n  font-size: 10px;\n  font-weight: 400;\n  margin-top: 4%;\n  margin-left: 5%;\n  color: #7F889F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNDLFdBQUE7QUFFRDs7QUFDQTtFQUVFLGVBQUE7RUFDRSxnQkFBQTtBQUNKOztBQUNBO0VBQ0Msa0JBQUE7RUFBb0IsZ0JBQUE7QUFHckI7O0FBQUM7RUFDQyxrQkFBQTtFQUFvQixpQkFBQTtBQUl0Qjs7QUFGQztFQUNDLHFCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQURBO0VBQ0UscUJBQUE7QUFJRjs7QUFGQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBS0Q7O0FBSEE7RUFDQyxlQUFBO0VBQ0csZ0JBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpBO0VBQ0MsY0FBQTtFQUNBLGdDQUFBO0FBT0Q7O0FBTEE7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBQVFEOztBQU5BO0VBQ0Msa0JBQUE7RUFDRyxXQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0MsZUFBQTtFQUNHLGNBQUE7RUFDQSxVQUFBO0FBVUo7O0FBUkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBV0Q7O0FBVEE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVlEOztBQVJBO0VBQ0Msb0JBQUE7RUFDQyxjQUFBO0FBV0Y7O0FBVEE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtBQVlEOztBQVZBO0VBQ0MsZUFBQTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBYUYiLCJmaWxlIjoibm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkQmcge1xyXG4gIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICBwYWRkaW5nOiAxJSAwJTtcclxufVxyXG4ubWVudWljb257XHJcblx0Y29sb3I6IzAwMDtcclxufVxyXG5cclxuLmN0aXRsZXtcclxuXHQvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGl0bGVjbGFzc3tcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuLmlvc3tcclxuXHQudGl0bGVjbGFzc3tcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDExcHg7XHJcblx0fVxyXG5cdC5oZWFkQmcge1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG5cdFx0cGFkZGluZzogMyUgMCU7XHJcblx0ICB9XHJcbn1cclxuLmJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG4ud3JhcHBlcntcclxuXHR3aWR0aDo5MCU7XHJcblx0bWFyZ2luOjYlIGF1dG87XHJcbn1cclxuLmRlZmF1bHR0ZXh0e1xyXG5cdGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1haW57XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNENkQ2RDY7XHJcbn1cclxuLmlubmVyMXtcclxuXHRwYWRkaW5nOiAyJSAzJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5pbWdkaXYgaW1ne1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG59XHJcbi50ZXh0ZGl2e1xyXG5cdG1hcmdpbi1sZWZ0OiA0JTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgd2lkdGg6IDY1JTtcclxufVxyXG4udGV4dHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG59XHJcbi5wYXJhe1xyXG5cdGZvbnQtc2l6ZTogMTBweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcblx0bWFyZ2luLXRvcDogMSU7XHJcblxyXG59XHJcblxyXG4ucmlnaHR7XHJcblx0LyptYXJnaW4tbGVmdDogMzAlOyovXHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuLmRhdGV7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdGNvbG9yOiM3Rjg4OUY7XHJcbn1cclxuLnRpbWV7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIGNvbG9yOiAjN0Y4ODlGO1xyXG59Il19 */");

/***/ }),

/***/ "dOoZ":
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notification.page.html */ "LcRc");
/* harmony import */ var _notification_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.page.scss */ "Z9r7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let NotificationPage = class NotificationPage {
    constructor(loading, navctrl, rest) {
        this.loading = loading;
        this.navctrl = navctrl;
        this.rest = rest;
        this.notiarray = [];
        this.chatdetail = false;
        this.userid = localStorage.getItem('uid');
        console.log('userid', this.userid);
        this.accounttype = localStorage.getItem('accountTypeId');
        console.log('accounttype', this.accounttype);
        this.notification();
    }
    ngOnInit() {
    }
    notification() {
        this.rest.sendRequest("get_notifications", { userId: this.userid }).subscribe((data) => {
            console.log('get_notifications', data);
            if (data.status == "success") {
                this.chatdetail = true;
                data.data.forEach(val => {
                    let date = moment__WEBPACK_IMPORTED_MODULE_7__(val.created_at).format('YYYY-MM-DD');
                    console.log('date', date);
                    let time = moment__WEBPACK_IMPORTED_MODULE_7__(val.created_at).format('LT');
                    console.log('time', time);
                    let fields = {
                        id: val.notification_id,
                        notitype: val.notification_type,
                        receiver_id: val.receiver_id,
                        sender_id: val.sender_id,
                        sender_name: val.sender_name,
                        message: val.message,
                        status: val.status,
                        date: date,
                        time: time
                    };
                    this.notiarray.push(fields);
                });
                console.log('notiarray0', this.notiarray);
            }
        });
    }
    notitype(notificationtype) {
        console.log('notificationtype', notificationtype);
        if (notificationtype == 'Acceptance') {
            this.navctrl.navigateRoot('requests');
        }
        if (notificationtype == 'Rejection') {
            this.navctrl.navigateRoot('requests');
        }
        if (notificationtype == 'Hiring') {
            this.navctrl.navigateRoot('requests1');
        }
        if (notificationtype == 'Payment') {
            this.navctrl.navigateRoot('paymentto');
        }
    }
};
NotificationPage.ctorParameters = () => [
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] }
];
NotificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notification',
        template: _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notification_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotificationPage);



/***/ }),

/***/ "mhdW":
/*!*************************************************************!*\
  !*** ./src/app/notification/notification-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function() { return NotificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.page */ "dOoZ");




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=notification-notification-module-es2015.js.map