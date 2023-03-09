(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "2yxt":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-routing.module */ "cC0O");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "laW7");







let ChatPageModule = class ChatPageModule {
};
ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"]
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
    })
], ChatPageModule);



/***/ }),

/***/ "SyIY":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 10% auto;\n}\n\n.defaulttext {\n  font-size: 17px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.main {\n  background: #fff;\n  /*box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;*/\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 10px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.inner {\n  padding: 3%;\n  display: flex;\n}\n\n.imgdiv img {\n  border-radius: 50%;\n  width: 44px;\n  height: 44px;\n}\n\n.textdiv {\n  margin-left: 4%;\n  margin-top: 1%;\n}\n\n.text {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000000;\n}\n\n.para {\n  font-size: 10px;\n  font-weight: 400;\n  color: #000000;\n  margin-top: 4%;\n}\n\n.time {\n  color: #7F889F;\n  font-size: 10px;\n  font-weight: 400;\n  margin-top: 10%;\n  margin-left: 12%;\n}\n\n@media only screen and (max-width: 320px) {\n  .inner {\n    padding: 2% 3%;\n    display: flex;\n  }\n\n  .textdiv {\n    margin-left: 4%;\n    width: 60%;\n  }\n\n  .text {\n    font-size: 15px;\n    font-weight: 500;\n    color: #000000;\n  }\n\n  .para {\n    font-size: 9px;\n    font-weight: 400;\n    color: #000000;\n    margin-top: 4%;\n  }\n\n  .time {\n    color: #7F889F;\n    font-size: 10px;\n    font-weight: 400;\n    margin-top: 10%;\n    margin-left: 5%;\n  }\n}\n\n@media only screen and (max-width: 414px) {\n  .textdiv {\n    margin-left: 4%;\n    margin-top: 0.5%;\n    width: 60%;\n  }\n\n  .time {\n    color: #7F889F;\n    font-size: 10px;\n    font-weight: 400;\n    margin-top: 8.5%;\n    margin-left: 5%;\n  }\n}\n\n@media only screen and (max-width: 414px) {\n  .time {\n    color: #7F889F;\n    font-size: 10px;\n    font-weight: 400;\n    margin-top: 9.5%;\n    margin-left: 5%;\n  }\n}\n\n/*@media only screen and (max-width:768px) {\n.textdiv{\n\t\tmargin-left: 3%;\n    margin-top: 0.5%;\n\t\twidth: 60%\n\t}\n\t.para{\n\t\tfont-size: 10px;\n\t\tfont-weight: 400;\n\t\tcolor:#000000;\n\t\tmargin-top: 2%;\n\t}\n\t.time{\n\t\tcolor: #7F889F;\n    font-size: 10px;\n    font-weight: 400;\n    margin-top: 5%;\n    margin-left: 12%;\n\t}\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDQyxXQUFBO0FBRUQ7O0FBQ0E7RUFFRSxlQUFBO0VBQ0UsZ0JBQUE7QUFDSjs7QUFDQTtFQUNDLGtCQUFBO0VBQW9CLGdCQUFBO0FBR3JCOztBQUFDO0VBQ0Msa0JBQUE7RUFBb0IsaUJBQUE7QUFJdEI7O0FBRkM7RUFDQyxxQkFBQTtFQUNBLGNBQUE7QUFJRjs7QUFEQTtFQUNFLHFCQUFBO0FBSUY7O0FBRkE7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7QUFLRDs7QUFIQTtFQUNDLGVBQUE7RUFDRyxnQkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkE7RUFDQyxnQkFBQTtFQUNBLGdEQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFPRDs7QUFMQTtFQUNDLFdBQUE7RUFDQSxhQUFBO0FBUUQ7O0FBTkE7RUFDQyxrQkFBQTtFQUNHLFdBQUE7RUFDQSxZQUFBO0FBU0o7O0FBUEE7RUFDQyxlQUFBO0VBQ0csY0FBQTtBQVVKOztBQVJBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVdEOztBQVRBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFZRDs7QUFWQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0csZ0JBQUE7QUFhSjs7QUFWQTtFQUNFO0lBQ0EsY0FBQTtJQUNBLGFBQUE7RUFhQTs7RUFWRDtJQUNDLGVBQUE7SUFDQSxVQUFBO0VBYUE7O0VBWEQ7SUFDQyxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBY0E7O0VBWkQ7SUFDQyxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQWVBOztFQWJEO0lBQ0MsY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDRyxlQUFBO0VBZ0JIO0FBQ0Y7O0FBWkE7RUFDQTtJQUNFLGVBQUE7SUFDRSxnQkFBQTtJQUNGLFVBQUE7RUFjQTs7RUFaRDtJQUNDLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNHLGVBQUE7RUFlSDtBQUNGOztBQVpBO0VBRUM7SUFDQyxjQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDRyxlQUFBO0VBYUg7QUFDRjs7QUFWQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJjaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkQmcge1xyXG4gIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICBwYWRkaW5nOjElIDAlO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcblxyXG4uY3RpdGxle1xyXG5cdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50aXRsZWNsYXNze1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4uaW9ze1xyXG5cdC50aXRsZWNsYXNze1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTFweDtcclxuXHR9XHJcblx0LmhlYWRCZyB7XHJcblx0XHQtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcblx0XHRwYWRkaW5nOjMlIDAlO1xyXG5cdCAgfVxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6OTAlO1xyXG5cdG1hcmdpbjoxMCUgYXV0bztcclxufVxyXG4uZGVmYXVsdHRleHR7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWFpbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdC8qYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7Ki9cclxuXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCAycHggMTBweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5pbm5lcntcclxuXHRwYWRkaW5nOiAzJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5pbWdkaXYgaW1ne1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG59XHJcbi50ZXh0ZGl2e1xyXG5cdG1hcmdpbi1sZWZ0OiA0JTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG59XHJcbi50ZXh0e1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuLnBhcmF7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRtYXJnaW4tdG9wOiA0JTtcclxufVxyXG4udGltZXtcclxuXHRjb2xvcjogIzdGODg5RjtcclxuXHRmb250LXNpemU6IDEwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTIlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuXHRcdC5pbm5lcntcclxuXHRcdHBhZGRpbmc6IDIlIDMlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdC50ZXh0ZGl2e1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDQlO1xyXG5cdFx0d2lkdGg6IDYwJVxyXG5cdH1cclxuXHQudGV4dHtcclxuXHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRjb2xvcjojMDAwMDAwO1xyXG5cdH1cclxuXHQucGFyYXtcclxuXHRcdGZvbnQtc2l6ZTogOXB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdGNvbG9yOiMwMDAwMDA7XHJcblx0XHRtYXJnaW4tdG9wOiA0JTtcclxuXHR9XHJcblx0LnRpbWV7XHJcblx0XHRjb2xvcjogIzdGODg5RjtcclxuXHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRtYXJnaW4tdG9wOiAxMCU7XHJcblx0ICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHR9XHJcblx0XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkge1xyXG4udGV4dGRpdntcclxuXHRcdG1hcmdpbi1sZWZ0OiA0JTtcclxuICAgIG1hcmdpbi10b3A6IDAuNSU7XHJcblx0XHR3aWR0aDogNjAlXHJcblx0fVxyXG5cdC50aW1le1xyXG5cdFx0Y29sb3I6ICM3Rjg4OUY7XHJcblx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0bWFyZ2luLXRvcDogOC41JTtcclxuXHQgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG5cdH1cclxuXHRcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpIHtcclxuXHJcblx0LnRpbWV7XHJcblx0XHRjb2xvcjogIzdGODg5RjtcclxuXHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRtYXJnaW4tdG9wOiA5LjUlO1xyXG5cdCAgICBtYXJnaW4tbGVmdDogNSU7XHJcblx0fVxyXG59XHJcblxyXG4vKkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4udGV4dGRpdntcclxuXHRcdG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIG1hcmdpbi10b3A6IDAuNSU7XHJcblx0XHR3aWR0aDogNjAlXHJcblx0fVxyXG5cdC5wYXJhe1xyXG5cdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdGNvbG9yOiMwMDAwMDA7XHJcblx0XHRtYXJnaW4tdG9wOiAyJTtcclxuXHR9XHJcblx0LnRpbWV7XHJcblx0XHRjb2xvcjogIzdGODg5RjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMiU7XHJcblx0fVxyXG59XHJcbiovIl19 */");

/***/ }),

/***/ "cC0O":
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function() { return ChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.page */ "laW7");




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ "laW7":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat.page.html */ "n54z");
/* harmony import */ var _chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.page.scss */ "SyIY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");






let ChatPage = class ChatPage {
    constructor(navCtrl, rest) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.error = {
            status: false,
            message: "",
        };
        this.allChats = [];
        this.chatdetail = false;
    }
    ngOnInit() {
        this.loggedid = localStorage.getItem('uid');
        console.log('loagged details', this.loggedid);
        this.getchatlist();
    }
    getchatlist() {
        this.rest
            .sendRequest("chat", {
            requestType: "getChatList",
            userId: this.loggedid,
        })
            .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("getChatList response", res);
            if (res.status == "success") {
                this.chatdetail = true;
                res.data.chat_list_details.forEach(val => {
                    if (val.profile_pic == '' || val.profile_pic == null) {
                        this.image = 'assets/imgs/userprofile.png';
                    }
                    else {
                        this.image = val.profile_pic;
                    }
                    let obj = {
                        id: val.user_id,
                        name: val.name,
                        profilepic: this.image,
                        message: val.message,
                        time: val.msg_time
                    };
                    this.allChats.push(obj);
                });
                // this.allChats = res.data.chat_list_details;
                console.log("receving All chats", this.allChats);
            }
            if (res.status == "error") {
                this.error.status = true;
                this.error.message = res.message;
                return;
            }
        }));
    }
    open(chat) {
        this.navCtrl.navigateForward(['/inbox', {
                id: chat.id,
                name: chat.name
            }]);
    }
};
ChatPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] }
];
ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat',
        template: _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatPage);



/***/ }),

/***/ "n54z":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t <ion-toolbar class=\"headBgGlobal\">\n\n\t\t<ion-row>\n\t\t\t<ion-col style=\"padding-top:6px;\" size=\"2\">\n\t\t\t\t<div>\n\t\t\t\t\t<ion-menu-button class=\"menuicon\"></ion-menu-button>\n        </div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col class=\"titleclass\" size=\"8\">\n\t\t\t\t<ion-text class=\"ctitle\">Conversations</ion-text>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"2\">\n\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t   \n\t \n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n    <div *ngIf=\"chatdetail==false\" style=\"margin-top: 45%;\">\n      <div class=\"defaulttext\">In a mood to chat? Converse with a like-minded parent or caregiver today! </div>\n    </div>\n\t\t<div *ngFor=\"let chats of allChats; let i = index\">\n\t\t\t<div class=\"main\" (click)=\"open(chats)\">\n\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t<div class=\"imgdiv\">\n\t\t\t\t\t\t<img src=\"{{chats.profilepic}}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"textdiv\">\n\t\t\t\t\t\t<div class=\"text\">{{chats.name}}</div>\n\t\t\t\t\t\t<div class=\"para\">{{chats.message}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"time\">{{chats.time}}</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\n\t\t<!-- <div class=\"main\">\n\t\t\t<div class=\"inner\">\n\t\t\t\t<div class=\"imgdiv\">\n\t\t\t\t\t<img src=\"assets/imgs/chat.png\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"textdiv\">\n\t\t\t\t\t<div class=\"text\">Justin Ortiz</div>\n\t\t\t\t\t<div class=\"para\">Duis pretium gravida enim, vel maximus...</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"time\">05:40pm</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"main\">\n\t\t\t<div class=\"inner\">\n\t\t\t\t<div class=\"imgdiv\">\n\t\t\t\t\t<img src=\"assets/imgs/chat.png\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"textdiv\">\n\t\t\t\t\t<div class=\"text\">Justin Ortiz</div>\n\t\t\t\t\t<div class=\"para\">Duis pretium gravida enim, vel maximus...</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"time\">05:40pm</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"main\">\n\t\t\t<div class=\"inner\">\n\t\t\t\t<div class=\"imgdiv\">\n\t\t\t\t\t<img src=\"assets/imgs/chat.png\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"textdiv\">\n\t\t\t\t\t<div class=\"text\">Justin Ortiz</div>\n\t\t\t\t\t<div class=\"para\">Duis pretium gravida enim, vel maximus...</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"time\">05:40pm</div>\n\t\t\t</div>\n\t\t</div> -->\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=chat-chat-module-es2015.js.map