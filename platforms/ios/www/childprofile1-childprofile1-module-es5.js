(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["childprofile1-childprofile1-module"], {
    /***/
    "7ch9":
    /*!*********************************************!*\
      !*** ./src/app/services/loading.service.ts ***!
      \*********************************************/

    /*! exports provided: LoadingService */

    /***/
    function ch9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
        return LoadingService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var LoadingService = /*#__PURE__*/function () {
        function LoadingService(toastCtrl, loadingCtrl) {
          _classCallCheck(this, LoadingService);

          this.toastCtrl = toastCtrl;
          this.loadingCtrl = loadingCtrl;
        }

        _createClass(LoadingService, [{
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.toast = true;
                      _context.next = 3;
                      return this.toastCtrl.create({
                        message: message,
                        duration: 2000,
                        position: 'bottom'
                      }).then(function (a) {
                        a.present().then(function () {
                          console.log('presented');

                          if (!_this.toast) {
                            a.dismiss().then(function () {
                              return console.log('abort presenting');
                            });
                          }
                        });
                      });

                    case 3:
                      return _context.abrupt("return", _context.sent);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "loadershow",
          value: function loadershow(content) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.loadingCtrl.create({
                        cssClass: 'loadingdiv',
                        message: ''
                      }).then(function (res) {
                        res.present();
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "hideLoader",
          value: function hideLoader() {
            this.loadingCtrl.dismiss().then(function (res) {
              console.log('Loading dismissed!', res);
            })["catch"](function (error) {
              console.log('error', error);
            });
          }
        }, {
          key: "presentLoader",
          value: function presentLoader(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: "ionloading",
                        message: message
                      });

                    case 2:
                      this.loading = _context3.sent;
                      _context3.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return LoadingService;
      }();

      LoadingService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoadingService);
      /***/
    },

    /***/
    "WtSg":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/childprofile1/childprofile1.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function WtSg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t<ion-toolbar class=\"headBgGlobal\">\n\t\t<ion-row>\n\t\t\t<ion-col class=\"backbtn\" size=\"2\">\n\t\t\t  <div>\n\t\t\t\t<img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t\t\t  </div>\n\t\t\t</ion-col>\n\t  \n\t\t\t<ion-col class=\"titleclass\" size=\"8\">\n\t\t\t  <ion-text class=\"ctitle\">Profile</ion-text>\n\t\t\t</ion-col>\n\t  \n\t\t\t<ion-col size=\"2\">\n\t  \n\t\t\t</ion-col>\n\t\t  </ion-row>\n\t  <!-- <ion-buttons slot=\"start\" class=\"backbtn\">\n\t    <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t  </ion-buttons>\n\t  <ion-title class=\"ctitle\">Profile</ion-title> -->\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t<ion-segment\n      id=\"segment\"\n      mode=\"ios\"\n      (ionChange)=\"segmentChanged($event)\"\n      #mySegment>\n    <ion-segment-button mode=\"ios\" value=\"child\">\n      <ion-label>Child</ion-label>\n    </ion-segment-button>\n    <ion-segment-button checked mode=\"ios\" value=\"parent\">\n      <ion-label>Parent</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div *ngIf=\"requestsType=='child'\">\n\t  <div class=\"wrapper\">\n\t\t\t<div class=\"main\" (click)=\"gotoprofile()\">\n\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t<img src=\"{{defaultProfile}}\" width=\"145px\" height=\"135px\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t<div class=\"rtext\">{{childname}},<span style=\"font-weight:400;margin-left:3%;font-size:14px;color:#FE9805\">{{age}} years old</span></div>\n\t\t\t\t\t\t<div class=\"rtext1\">{{diagnosis}}</div>\n\t\t\t\t\t\t<div class=\"rtext2\">{{notes}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"main1\">\n\t\t\t<div class=\"inner1\">\n\t\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Allergies</h6>\n\t\t\t\t<div style=\"display: flex\">\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let all of allergyarr\">\n\t\t\t\t\t<ion-button class=\"btn\">{{all.allergy}}</ion-button>\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">{{all.allergy}}</ion-button> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</div>\t\n\t\t</div>\n\n\t\t<div class=\"main2\">\n\t\t\t<div class=\"inner1\">\n\t\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Medications Alarms</h6>\n\t\t\t\t<div style=\"display: flex\">\n\t\t\t\t<div class=\"medicationdiv\" *ngFor=\"let med of medicationsarr\">\n\t\t\t\t\t<div class=\"medication1\">\n\t\t\t\t\t\t<div class=\"mtext\">{{med.medicationname}}</div>\n\t\t\t\t\t\t<div class=\"mtext2\">{{med.medicationtime}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"medication2\">\n\t\t\t\t\t\t<div class=\"mtext\">Medications 2</div>\n\t\t\t\t\t\t<div class=\"mtext2\">12:30 pm</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"medication3\">\n\t\t\t\t\t\t<div class=\"mtext\">Medications 3</div>\n\t\t\t\t\t\t<div class=\"mtext2\">08:00 am</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</div>\t\t\n\t\t</div>\n\n\t\t<div class=\"main1\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Eating Times</h6>\n\t\t\t<div style=\"display: flex\">\n\t\t\t\t<div class=\"medicationdiv\"  *ngFor=\"let eat of foodarr\">\n\t\t\t\t\t<div class=\"medication1\">\n\t\t\t\t\t\t<div class=\"mtext\">{{eat.foodname}}</div>\n\t\t\t\t\t\t<div class=\"mtext2\">{{eat.eatingtime}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"medication2\">\n\t\t\t\t\t\t<div class=\"mtext\">Eating Time 2</div>\n\t\t\t\t\t\t<div class=\"mtext2\">12:30 pm</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"medication3\">\n\t\t\t\t\t\t<div class=\"mtext\">Eating Time 3</div>\n\t\t\t\t\t\t<div class=\"mtext2\">08:00 am</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\t\n\t</div>\n\n\t<div class=\"main2\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Snack Times</h6>\n\t\t\t<div style=\"display: flex\">\n\t\t\t\t<div class=\"medicationdiv\" *ngFor=\"let snack of snackarr\">\n\t\t\t\t\t<div class=\"medication1\">\n\t\t\t\t\t\t<div class=\"mtext\">{{snack.snackname}}</div>\n\t\t\t\t\t\t<div class=\"mtext2\">{{snack.snacktime}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"medication2\">\n\t\t\t\t\t\t<div class=\"mtext\">Snack Time 2</div>\n\t\t\t\t\t\t<div class=\"mtext2\">12:30 pm</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"medication3\">\n\t\t\t\t\t\t<div class=\"mtext\">Snack Time 3</div>\n\t\t\t\t\t\t<div class=\"mtext2\">08:00 am</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\t\n\t</div>\n\n\t<div class=\"main1\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Likes</h6>\n\t\t\t<div style=\"display: flex\">\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let like of likesarr\">\n\t\t\t\t\t<ion-button class=\"btn\">{{like.likes}}</ion-button>\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">Outdoor games</ion-button> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\n\t<div class=\"main2\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Dislikes</h6>\n\t\t\t<div style=\"display: flex\">\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let dislike of dislikesarr\">\n\t\t\t\t\t<ion-button class=\"btn\">{{dislike.dislikes}}</ion-button>\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">Outdoor games</ion-button> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\n\t<div class=\"main1\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Favorite activities</h6>\n\t\t\t<div style=\"display: flex\">\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let fav of favouritearr\">\n\t\t\t\t\t<ion-button class=\"btn\">{{fav.favourite}}</ion-button>\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">Outdoor games</ion-button> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\n\t<div class=\"main2\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Emergency phone numbers</h6>\n\t\t\t<div style=\"display: flex\">\n\t\t\t\t<div class=\"calldiv\" *ngFor=\"let num of contactsarr\">\n\t\t\t\t\t<div class=\"contactdiv\">\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>{{num.contact}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"contactdiv1\">\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>+1 412 688 699</p>\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\n\t<div class=\"main1\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Pediatrician</h6>\n\t\t\t<div class=\"para\">{{pediatrician}}</div>\n\t\t</div>\t\n\t</div>\n\n\t<div class=\"main2\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Insurance information</h6>\n\t\t\t<div class=\"para\">{{insuranceinfo}}</div>\n\t\t</div>\t\n\t</div>\n\n\t<div class=\"main1\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Special instructions</h6>\n\t\t\t<div class=\"para\">{{instruction}}</div>\n\t\t</div>\t\n\t</div>\n\n\t<div class=\"main2\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Additional notes</h6>\n\t\t\t<div class=\"para\">{{notes}}</div>\n\t\t</div>\t\n\t</div>\n\t\n  </div>\n\t\n\t<!-- -----------parent div ------------------------->\n\t<div *ngIf=\"requestsType=='parent'\">\n\t\t<div class=\"pwrapper\">\n\t\t\t<div class=\"pmain\">\n\t\t\t\t<div class=\"pinner\">\n\t\t\t\t\t<div class=\"plogodiv\">\n\t\t\t\t\t\t<img src=\"{{picUrl}}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"text\">{{fname}} {{lname}}</div>\n\t\t\t\t\t<div class=\"text2\">{{relationwithchild}}</div>\n\t\t\t\t\t<div class=\"ppara\">{{about}}</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"pmain2\">\n\t\t\t\t<div class=\"pcontactdiv\">\n\t\t\t\t\t<div class=\"picondiv\">\n\t\t\t\t\t\t<img src=\"assets/imgs/icons/sms.png\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<p>{{email}}</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"pcontactdiv\">\n\t\t\t\t\t<div class=\"picondiv\">\n\t\t\t\t\t\t<img src=\"assets/imgs/icons/arrow.png\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<p>{{address}}</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"pcontactdiv\">\n\t\t\t\t\t<div class=\"picondiv\">\n\t\t\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<p>{{mobilenumber}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "ZiqM":
    /*!*****************************************************!*\
      !*** ./src/app/childprofile1/childprofile1.page.ts ***!
      \*****************************************************/

    /*! exports provided: Childprofile1Page */

    /***/
    function ZiqM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Childprofile1Page", function () {
        return Childprofile1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_childprofile1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./childprofile1.page.html */
      "WtSg");
      /* harmony import */


      var _childprofile1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./childprofile1.page.scss */
      "rf6e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/rest.service */
      "tnAE");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var Childprofile1Page = /*#__PURE__*/function () {
        function Childprofile1Page(navCtrl, route, loading, rest) {
          _classCallCheck(this, Childprofile1Page);

          this.navCtrl = navCtrl;
          this.route = route;
          this.loading = loading;
          this.rest = rest;
          this.allergyarr = [];
          this.medicationsarr = [];
          this.foodarr = [];
          this.snackarr = [];
          this.likesarr = [];
          this.dislikesarr = [];
          this.favouritearr = [];
          this.contactsarr = [];
          this.picUrl = 'assets/imgs/plogo.png';
          this.error = {
            status: false,
            message: ""
          };
          this.page = this.route.snapshot.paramMap.get('page');
          this.childid = this.route.snapshot.paramMap.get('childid');
          console.log('childid', this.childid);
          this.parentid = this.route.snapshot.paramMap.get('parentid');
          console.log('parentid', this.parentid);
        }

        _createClass(Childprofile1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (this.requestsType) {
              if (this.requestsType === 'child') {
                this.mySegment.nativeElement.children[0].click();
              }

              if (this.requestsType === 'parent') {
                this.mySegment.nativeElement.children[1].click();
              }
            } else {
              this.requestsType = 'child';
              this.mySegment.nativeElement.children[0].click();
            }
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            console.log('requestType value', ev.detail.value);
            var data = ev.detail.value;
            this.requestsType = data;

            if (ev.detail.value === 'child') {
              this.requestsType = 'child';
              this.getdetails();
            }

            if (ev.detail.value === 'parent') {
              this.requestsType = 'parent';
              this.getprofiledata();
            }

            localStorage.setItem('requestType', this.requestsType);
          }
        }, {
          key: "goback",
          value: function goback() {
            if (this.page == 'requests') {
              this.navCtrl.navigateBack('/requests1');
            } else {
              this.navCtrl.navigateBack('/cghomescreen');
            }
          }
        }, {
          key: "getdetails",
          value: function getdetails() {
            var _this2 = this;

            this.medicationsarr = [];
            this.foodarr = [];
            this.snackarr = [];
            this.allergyarr = [];
            this.likesarr = [];
            this.dislikesarr = [];
            this.favouritearr = [];
            this.contactsarr = [];
            var senddata = {
              userId: this.parentid,
              childId: this.childid
            };
            this.loading.loadershow();
            this.rest.sendRequest("get_child_details", senddata).subscribe(function (data) {
              console.log('get_child_details data::', data);

              _this2.loading.hideLoader();

              if (data.data.profile_picture == null) {
                _this2.defaultProfile = 'assets/imgs/profilelogo.png';
              } else {
                _this2.defaultProfile = data.data.profile_picture;
              }

              _this2.childname = data.data.child_name;
              _this2.age = data.data.age;
              _this2.diagnosis = data.data.diagnosis;
              _this2.pediatrician = data.data.pediatrician;
              _this2.instruction = data.data.special_instructions;
              _this2.insuranceinfo = data.data.insurance_info;
              _this2.notes = data.data.additional_notes;
              data.data.allergies.forEach(function (val) {
                var data = {
                  allergy: val.allergy
                };

                _this2.allergyarr.push(data);
              });
              console.log('allergyarr', _this2.allergyarr);
              data.data.medications.forEach(function (val) {
                var data = {
                  medicationname: val.medication_name,
                  medicationtime: val.medication_time
                };

                _this2.medicationsarr.push(data);
              });
              console.log('medications', _this2.medicationsarr);
              data.data.eating_schedule.forEach(function (val) {
                var data = {
                  eatingtime: val.eating_time,
                  foodname: val.food_name
                };

                _this2.foodarr.push(data);
              });
              console.log('foodarr', _this2.foodarr);
              data.data.snacks_schedule.forEach(function (val) {
                var data = {
                  snackname: val.snack_name,
                  snacktime: val.snack_time
                };

                _this2.snackarr.push(data);
              });
              console.log('snackarr', _this2.snackarr);
              data.data.likes.forEach(function (val) {
                var data = {
                  likes: val.like
                };

                _this2.likesarr.push(data);
              });
              console.log('likesarr', _this2.likesarr);
              data.data.dislikes.forEach(function (val) {
                var data = {
                  dislikes: val.dislike
                };

                _this2.dislikesarr.push(data);
              });
              console.log('dislikesarr', _this2.dislikesarr);
              data.data.favourite_activities.forEach(function (val) {
                var data = {
                  favourite: val.favourite_activity
                };

                _this2.favouritearr.push(data);
              });
              console.log('favouritearr', _this2.favouritearr);
              data.data.emergency_contacts.forEach(function (val) {
                var data = {
                  contact: val.emergency_contact
                };

                _this2.contactsarr.push(data);
              });
              console.log('contactsarr', _this2.contactsarr);
            });
          }
        }, {
          key: "getprofiledata",
          value: function getprofiledata() {
            var _this3 = this;

            this.loading.loadershow();
            this.rest.sendRequest("get_profile_details", {
              userId: this.parentid
            }).subscribe(function (data) {
              console.log('get_profile_details data::', data);

              if (data.status == 'success') {
                console.log('suucesssss');

                _this3.loading.hideLoader();

                _this3.fname = data.data.first_name;
                _this3.lname = data.data.last_name;
                _this3.email = data.data.email;

                if (data.data.profile_picture == '' || data.data.profile_picture == null) {
                  _this3.picUrl = 'assets/imgs/plogo.png';
                } else {
                  _this3.picUrl = data.data.profile_picture;
                }

                if (data.data.relation_with_child == '' || data.data.relation_with_child == null) {
                  _this3.relationwithchild = 'Father/Mother....';
                } else {
                  _this3.relationwithchild = data.data.relation_with_child;
                }

                if (data.data.mobile_number == '' || data.data.mobile_number == null) {
                  _this3.mobilenumber = 'mobile number';
                } else {
                  _this3.mobilenumber = data.data.mobile_number;
                }

                if (data.data.street_address == '' || data.data.street_address == null) {
                  _this3.address = 'Address';
                } else {
                  _this3.address = data.data.street_address;
                }

                if (data.data.about == '' || data.data.about == null) {
                  _this3.about = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr';
                } else {
                  _this3.about = data.data.about;
                }
              }

              if (data.status == 'error') {
                _this3.loading.hideLoader();

                console.log('signup request data:', data.status);
                _this3.error.status = true;
                _this3.error.message = data.message;
                setTimeout(function () {
                  _this3.error.status = false;
                  _this3.error.message = "";
                }, 3000);
                return;
              }
            }, function (err) {});
          }
        }]);

        return Childprofile1Page;
      }();

      Childprofile1Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }];
      };

      Childprofile1Page.propDecorators = {
        mySegment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['mySegment', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }]
      };
      Childprofile1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-childprofile1',
        template: _raw_loader_childprofile1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_childprofile1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Childprofile1Page);
      /***/
    },

    /***/
    "hPhd":
    /*!*******************************************************!*\
      !*** ./src/app/childprofile1/childprofile1.module.ts ***!
      \*******************************************************/

    /*! exports provided: Childprofile1PageModule */

    /***/
    function hPhd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Childprofile1PageModule", function () {
        return Childprofile1PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _childprofile1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./childprofile1-routing.module */
      "pcuG");
      /* harmony import */


      var _childprofile1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./childprofile1.page */
      "ZiqM");

      var Childprofile1PageModule = function Childprofile1PageModule() {
        _classCallCheck(this, Childprofile1PageModule);
      };

      Childprofile1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _childprofile1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Childprofile1PageRoutingModule"]],
        declarations: [_childprofile1_page__WEBPACK_IMPORTED_MODULE_6__["Childprofile1Page"]]
      })], Childprofile1PageModule);
      /***/
    },

    /***/
    "pcuG":
    /*!***************************************************************!*\
      !*** ./src/app/childprofile1/childprofile1-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: Childprofile1PageRoutingModule */

    /***/
    function pcuG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Childprofile1PageRoutingModule", function () {
        return Childprofile1PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _childprofile1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./childprofile1.page */
      "ZiqM");

      var routes = [{
        path: '',
        component: _childprofile1_page__WEBPACK_IMPORTED_MODULE_3__["Childprofile1Page"]
      }];

      var Childprofile1PageRoutingModule = function Childprofile1PageRoutingModule() {
        _classCallCheck(this, Childprofile1PageRoutingModule);
      };

      Childprofile1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Childprofile1PageRoutingModule);
      /***/
    },

    /***/
    "rf6e":
    /*!*******************************************************!*\
      !*** ./src/app/childprofile1/childprofile1.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function rf6e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 10px;\n  padding-left: 18px;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 12px;\n  padding-left: 18px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\nion-segment {\n  padding: 5px 5px;\n  border-radius: 10px;\n  margin-top: 10px;\n  --background: #EBEBEB;\n  width: 85%;\n  margin: 5% auto;\n}\n\nion-segment ion-segment-button {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 10px;\n  --background-checked: #fe9805;\n  --indicator-color: transparent !important;\n  --color: #00000;\n  --color-checked: #fff;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.left img {\n  border-radius: 7px;\n}\n\n.inner {\n  padding: 2% 3%;\n  display: flex;\n}\n\n.right {\n  margin-left: 5%;\n  width: 50%;\n  margin-top: 1%;\n}\n\n.rtext {\n  font-size: 20px;\n  font-weight: bold;\n  color: #000000;\n}\n\n.rtext1 {\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 3%;\n  color: #FE9805;\n}\n\n.rtext2 {\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 4%;\n}\n\n.main1 {\n  background: #fff;\n}\n\n.inner1 {\n  width: 85%;\n  margin: 0% auto;\n  padding: 3% 0%;\n}\n\n.btndiv {\n  margin-top: 3%;\n  margin-right: 5%;\n}\n\n.btn {\n  --background: #000000;\n  --box-shadow: none;\n  --border-radius: 7px;\n  /*width: 20%;*/\n  --padding-start: 20px;\n  --padding-end: 20px;\n  height: 35px;\n}\n\n.btn1 {\n  --background: #000000;\n  --box-shadow: none;\n  --border-radius: 7px;\n  /*width: 20%;*/\n  --padding-start: 20px;\n  --padding-end: 20px;\n  height: 35px;\n  margin-left: 4%;\n}\n\n.medicationdiv {\n  display: flex;\n  margin-top: 3%;\n  margin-right: 15%;\n}\n\n.medication2 {\n  margin-left: 10%;\n}\n\n.medication3 {\n  margin-left: 11%;\n}\n\n.mtext {\n  color: #000000;\n  font-size: 12px;\n  margin-top: 3%;\n}\n\n.mtext2 {\n  color: #000000;\n  font-weight: bold;\n  font-size: 12px;\n  text-align: center;\n  margin-top: 3%;\n}\n\n.calldiv {\n  display: flex;\n}\n\n.contactdiv {\n  display: flex;\n  margin-top: 5%;\n  width: 100%;\n  margin-right: 30px;\n}\n\n.contactdiv p {\n  margin: 0px;\n  margin-left: 15px;\n}\n\n.contactdiv1 {\n  display: flex;\n  margin-top: 5%;\n  margin-left: 10%;\n  width: 100%;\n}\n\n.contactdiv1 p {\n  margin: 0px;\n  padding-left: 10%;\n}\n\n.para {\n  font-size: 14px;\n  margin-top: 1%;\n  color: #000000;\n}\n\n@media only screen and (max-width: 320px) {\n  .rtext2 {\n    font-size: 12px;\n    font-weight: 400;\n    margin-top: 5%;\n  }\n\n  .right {\n    margin-left: 5%;\n    width: 55%;\n    margin-top: 1%;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  .rtext2 {\n    font-size: 13px;\n    font-weight: 400;\n    margin-top: 5%;\n  }\n\n  .right {\n    margin-left: 5%;\n    width: 55%;\n    margin-top: 1%;\n  }\n}\n\n/*///////////*/\n\n.pwrapper {\n  width: 90%;\n  margin: 30% auto;\n}\n\n.pmain {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.pinner {\n  text-align: center;\n  width: 80%;\n  margin: 0% auto;\n}\n\n/*.plogodiv{\n\tposition: absolute;\n    top: 92px;\n    left: 110px;\n}*/\n\n.plogodiv {\n  position: absolute;\n  top: 40px;\n  left: 115px;\n}\n\n.plogodiv img {\n  border-radius: 90px;\n  width: 140px;\n  height: 140px;\n}\n\n.text {\n  padding-top: 30%;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.text2 {\n  color: #FE9805;\n  font-size: 14px;\n  font-style: italic;\n}\n\n.ppara {\n  color: #000000;\n  font-size: 14px;\n  padding: 4% 0%;\n}\n\n.pmain2 {\n  width: 60%;\n  margin: 10% auto;\n}\n\n.pcontactdiv {\n  display: flex;\n  margin-top: 10%;\n}\n\n.pcontactdiv p {\n  margin: 0px;\n  padding-left: 10%;\n}\n\n@media only screen and (max-width: 414px) {\n  .plogodiv {\n    position: absolute;\n    top: 120px;\n    left: 135px;\n  }\n\n  .text {\n    padding-top: 27%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .pwrapper {\n    width: 90%;\n    margin: 27% auto;\n  }\n\n  .plogodiv {\n    position: absolute;\n    top: 25px;\n    left: 115px;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  .pwrapper {\n    width: 92%;\n    margin: 27% auto;\n  }\n\n  .plogodiv {\n    position: absolute;\n    top: 95px;\n    left: 120px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .plogodiv {\n    position: absolute;\n    top: 80px;\n    left: 90px;\n  }\n\n  .text {\n    padding-top: 35%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {\n  .pwrapper {\n    width: 90%;\n    margin: 18% auto;\n  }\n\n  .plogodiv {\n    position: absolute;\n    top: 70px;\n    left: 310px;\n  }\n\n  .text {\n    padding-top: 17%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoaWxkcHJvZmlsZTEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDQyxXQUFBO0FBRUQ7O0FBQUE7RUFDQyxlQUFBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQURBO0VBRUUsZUFBQTtFQUNFLGdCQUFBO0FBR0o7O0FBREE7RUFDQyxrQkFBQTtFQUFvQixnQkFBQTtBQUtyQjs7QUFGQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBTXRCOztBQUpFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFKRTtFQUNELHFCQUFBO0VBQ0EsY0FBQTtBQU1EOztBQUhBO0VBQ0UscUJBQUE7QUFNRjs7QUFKQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBT0Q7O0FBTEE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBUUY7O0FBUEU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFIQTtFQUNDLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFNRDs7QUFKQTtFQUNDLGtCQUFBO0FBT0Q7O0FBTEE7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBQVFEOztBQU5BO0VBQ0MsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBU0Q7O0FBUEE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBVUQ7O0FBUkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVdEOztBQVRBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FB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QUFDRjs7QUF4QkE7RUFHRTtJQUNBLFVBQUE7SUFDRSxnQkFBQTtFQXdCRjs7RUF0QkE7SUFDQSxrQkFBQTtJQUNFLFNBQUE7SUFDQSxXQUFBO0VBeUJGOztFQXZCRDtJQUNHLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQTBCRjtBQUNGIiwiZmlsZSI6ImNoaWxkcHJvZmlsZTEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6MSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuLmJhY2tidG57XHJcblx0bWFyZ2luLWxlZnQ6MCU7XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuICAuYmFja2J0bntcclxuICAgIG1hcmdpbi1sZWZ0OjAlO1xyXG4gICAgcGFkZGluZy10b3A6MTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICB9XHJcbiAgLmhlYWRCZyB7XHJcblx0LS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG5cdHBhZGRpbmc6MyUgMCU7XHJcbiAgfVxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6OTAlO1xyXG5cdG1hcmdpbjo1JSBhdXRvO1xyXG59XHJcbmlvbi1zZWdtZW50IHtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAtLWJhY2tncm91bmQ6ICNFQkVCRUI7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAtLW1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZlOTgwNTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogIzAwMDAwO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuLm1haW57XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5sZWZ0IGltZ3tcclxuXHRib3JkZXItcmFkaXVzOjdweDtcclxufVxyXG4uaW5uZXJ7XHJcblx0cGFkZGluZzoyJSAzJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5yaWdodHtcclxuXHRtYXJnaW4tbGVmdDogNSU7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRtYXJnaW4tdG9wOjElO1xyXG59XHJcbi5ydGV4dHtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRjb2xvcjogIzAwMDAwMDtcclxufVxyXG4ucnRleHQxe1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDo1MDA7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcblx0Y29sb3I6ICNGRTk4MDU7XHJcbn1cclxuLnJ0ZXh0MntcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdG1hcmdpbi10b3A6IDQlO1xyXG59XHJcbi5tYWluMXtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5pbm5lcjF7XHJcblx0d2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDAlIGF1dG87XHJcbiAgcGFkZGluZzogMyUgMCU7XHJcbn1cclxuLmJ0bmRpdntcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxuXHRtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbi5idG57XHJcblx0LS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAvKndpZHRoOiAyMCU7Ki9cclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuLmJ0bjF7XHJcblx0LS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgIC8qd2lkdGg6IDIwJTsqL1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxufVxyXG4ubWVkaWNhdGlvbmRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbi10b3A6IDMlO1xyXG5cdG1hcmdpbi1yaWdodDogMTUlO1xyXG59XHJcbi5tZWRpY2F0aW9uMntcclxuXHRtYXJnaW4tbGVmdDogMTAlXHJcbn1cclxuLm1lZGljYXRpb24ze1xyXG5cdG1hcmdpbi1sZWZ0OiAxMSVcclxufVxyXG4ubXRleHR7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcbn1cclxuLm10ZXh0MntcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcbn1cclxuLmNhbGxkaXZ7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG4uY29udGFjdGRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDozMHB4O1xyXG59XHJcbi5jb250YWN0ZGl2IHB7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbnRhY3RkaXYxe1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGFjdGRpdjEgcHtcclxuXHRtYXJnaW46IDBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDEwJVxyXG59XHJcbi5wYXJhe1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDElO1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjBweCkge1xyXG5cdC5ydGV4dDJ7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRmb250LXdlaWdodDo0MDA7XHJcblx0XHRtYXJnaW4tdG9wOiA1JTtcclxuXHR9XHJcblxyXG5cdC5yaWdodHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1JTtcclxuXHRcdHdpZHRoOiA1NSU7XHJcblx0XHRtYXJnaW4tdG9wOjElO1xyXG5cdH1cclxufVxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkge1xyXG5cdC5ydGV4dDJ7XHJcblx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRmb250LXdlaWdodDo0MDA7XHJcblx0XHRtYXJnaW4tdG9wOiA1JTtcclxuXHR9XHJcblxyXG5cdC5yaWdodHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1JTtcclxuXHRcdHdpZHRoOiA1NSU7XHJcblx0XHRtYXJnaW4tdG9wOjElO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbi8qLy8vLy8vLy8vLy8qL1xyXG4ucHdyYXBwZXJ7XHJcblx0d2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDMwJSBhdXRvO1xyXG59XHJcbi5wbWFpbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLnBpbm5lcntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwJSBhdXRvO1xyXG59XHJcbi8qLnBsb2dvZGl2e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOTJweDtcclxuICAgIGxlZnQ6IDExMHB4O1xyXG59Ki9cclxuLnBsb2dvZGl2e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGxlZnQ6IDExNXB4O1xyXG59XHJcbi5wbG9nb2RpdiBpbWd7XHJcblx0Ym9yZGVyLXJhZGl1czogOTBweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbn1cclxuLnRleHR7XHJcblx0cGFkZGluZy10b3A6IDMwJTtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZToyMHB4XHJcbn1cclxuLnRleHQye1xyXG5cdGNvbG9yOiNGRTk4MDU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4ucHBhcmF7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogNCUgMCU7XHJcbn1cclxuXHJcbi5wbWFpbjJ7XHJcblx0d2lkdGg6NjAlO1xyXG5cdG1hcmdpbjogMTAlIGF1dG87XHJcbn1cclxuLnBjb250YWN0ZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5wY29udGFjdGRpdiBwe1xyXG5cdG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCVcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkge1xyXG5cdC5wbG9nb2RpdntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTIwcHg7XHJcbiAgICBsZWZ0OiAxMzVweDtcclxuXHR9XHJcblx0LnRleHR7XHJcblx0cGFkZGluZy10b3A6IDI3JTtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZToyMHB4XHJcbn1cclxuXHJcblxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIHtcclxuXHQucHdyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdCAgbWFyZ2luOiAyNyUgYXV0bztcclxuXHR9XHJcblx0LnBsb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgbGVmdDogMTE1cHg7XHJcblx0fVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIHtcclxuXHQucHdyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTIlO1xyXG5cdCAgbWFyZ2luOiAyNyUgYXV0bztcclxuXHR9XHJcblx0LnBsb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA5NXB4O1xyXG4gICAgbGVmdDogMTIwcHg7XHJcblx0fVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMHB4KSB7XHJcblx0LnBsb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gICAgbGVmdDogOTBweDtcclxuXHR9XHJcblx0LnRleHR7XHJcblx0cGFkZGluZy10b3A6IDM1JTtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZToyMHB4XHJcbn1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpIHtcclxuICAucHdyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxOCUgYXV0bztcclxuXHR9XHJcbiAgLnBsb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgbGVmdDogMzEwcHg7XHJcblx0fVxyXG5cdC50ZXh0e1xyXG4gICAgcGFkZGluZy10b3A6IDE3JTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblx0fVxyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=childprofile1-childprofile1-module-es5.js.map