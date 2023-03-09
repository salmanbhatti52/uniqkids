(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["childprofile-childprofile-module"], {
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
    "A4im":
    /*!***************************************************!*\
      !*** ./src/app/childprofile/childprofile.page.ts ***!
      \***************************************************/

    /*! exports provided: ChildprofilePage */

    /***/
    function A4im(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildprofilePage", function () {
        return ChildprofilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_childprofile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./childprofile.page.html */
      "FhnG");
      /* harmony import */


      var _childprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./childprofile.page.scss */
      "agoW");
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


      var _services_child_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/child.service */
      "ZEea");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ChildprofilePage = /*#__PURE__*/function () {
        function ChildprofilePage(navCtrl, loading, childService, route, rest) {
          _classCallCheck(this, ChildprofilePage);

          this.navCtrl = navCtrl;
          this.loading = loading;
          this.childService = childService;
          this.route = route;
          this.rest = rest;
          this.allergyarr = [];
          this.medicationsarr = [];
          this.foodarr = [];
          this.snackarr = [];
          this.likesarr = [];
          this.dislikesarr = [];
          this.favouritearr = [];
          this.contactsarr = [];
          this.childid = this.route.snapshot.paramMap.get('childid');
          console.log('child id', this.childid);
          this.parentid = this.route.snapshot.paramMap.get('parentid');
          console.log('parentid id', this.parentid); // this.childid=this.childService.childid
          // this.parentid=this.childService.parentid

          this.getdetails();
        }

        _createClass(ChildprofilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goback",
          value: function goback() {
            this.navCtrl.navigateBack('/child');
          }
        }, {
          key: "getdetails",
          value: function getdetails() {
            var _this2 = this;

            var senddata = {
              userId: this.parentid,
              childId: this.childid
            };
            this.loading.loadershow();
            this.rest.sendRequest("get_child_details", senddata).subscribe(function (data) {
              console.log('get_child_details data::', data);
              _this2.childdetails = data.data;

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
          key: "edit",
          value: function edit() {
            // this.loading.presentToast('In Proccess');
            this.navCtrl.navigateForward(['editchild', {
              childid: this.childid,
              parentid: this.parentid
            }]);
            this.childService.childdata = JSON.stringify(this.childdetails);
            this.childService.childid = this.childid;
            console.log('childServiceid', this.childService.childid);
            this.childService.parentid = this.parentid;
            console.log('childServiceparentid', this.childService.parentid);
          }
        }]);

        return ChildprofilePage;
      }();

      ChildprofilePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }, {
          type: _services_child_service__WEBPACK_IMPORTED_MODULE_6__["ChildService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }];
      };

      ChildprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-childprofile',
        template: _raw_loader_childprofile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_childprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChildprofilePage);
      /***/
    },

    /***/
    "BF4i":
    /*!*****************************************************!*\
      !*** ./src/app/childprofile/childprofile.module.ts ***!
      \*****************************************************/

    /*! exports provided: ChildprofilePageModule */

    /***/
    function BF4i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildprofilePageModule", function () {
        return ChildprofilePageModule;
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


      var _childprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./childprofile-routing.module */
      "Sp3E");
      /* harmony import */


      var _childprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./childprofile.page */
      "A4im");

      var ChildprofilePageModule = function ChildprofilePageModule() {
        _classCallCheck(this, ChildprofilePageModule);
      };

      ChildprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _childprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChildprofilePageRoutingModule"]],
        declarations: [_childprofile_page__WEBPACK_IMPORTED_MODULE_6__["ChildprofilePage"]]
      })], ChildprofilePageModule);
      /***/
    },

    /***/
    "FhnG":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/childprofile/childprofile.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function FhnG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t\t  <ion-toolbar class=\"headBgGlobal\">\n\t\t    <ion-buttons slot=\"start\" class=\"backbtn\">\n\t\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t\t  </ion-buttons>\n\t\t  <ion-title class=\"ctitle\">Profile</ion-title>\n\t\t  <ion-buttons slot=\"end\" class=\"plusbtn\" (click)=\"edit()\">\n\t\t\t  <img src=\"assets/imgs/icons/edit.svg\">\n\t\t\t</ion-buttons>\n\t\t</ion-toolbar>\n</ion-header> -->\n\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col class=\"backbtn\" size=\"2\">\n        <div>\n          <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n        </div>\n      </ion-col>\n\n      <ion-col class=\"titleclass\" size=\"8\">\n        <ion-text class=\"ctitle\">Profile</ion-text>\n      </ion-col>\n\n      <ion-col style=\"padding-top: 8px;padding-left: 20px;\" size=\"2\">\n        <div (click)=\"edit()\">\n          <img src=\"assets/imgs/icons/edit.svg\">\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\t\t<div class=\"main\">\n\t\t\t<div class=\"inner\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<img src=\"{{defaultProfile}}\" width=\"145px\" height=\"135px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right\">\n\t\t\t\t\t<div class=\"rtext\">{{childname}},<span style=\"font-weight:400;margin-left:3%;font-size:14px;color:#FE9805\">{{age}} years old</span></div>\n\t\t\t\t\t<div class=\"rtext1\">{{diagnosis}}</div>\n\t\t\t\t\t<div class=\"rtext2\">{{notes}}</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"main1\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Allergies</h6>\n\t\t\t<div style=\"display: flex; flex-wrap: wrap;\" >\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let all of allergyarr\">\n\t\t\t\t\t<ion-button class=\"btn\">{{all.allergy}}</ion-button>\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">{{all.allergy}}</ion-button> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\t\n\t</div>\n\n\t<div class=\"main2\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Medications Alarms</h6>\n\t\t\t<div style=\"display: flex;flex-wrap: wrap;\">\n\t\t\t\t<div class=\"medicationdiv\" *ngFor=\"let med of medicationsarr\">\n\t\t\t\t\t<div class=\"medication1\">\n\t\t\t\t\t\t<div class=\"mtext\">{{med.medicationname}}</div>\n\t\t\t\t\t\t<div class=\"mtext2\">{{med.medicationtime}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"medication2\">\n\t\t\t\t\t\t<div class=\"mtext\">Medications 2</div>\n\t\t\t\t\t\t<div class=\"mtext2\">12:30 pm</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"medication3\">\n\t\t\t\t\t\t<div class=\"mtext\">Medications 3</div>\n\t\t\t\t\t\t<div class=\"mtext2\">08:00 am</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\t\t\n\t</div>\n\n\t<div class=\"main1\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Eating Times</h6>\n\t\t\t<div style=\"display: flex;flex-wrap: wrap;\">\n\t\t\t\t<div class=\"medicationdiv\"  *ngFor=\"let eat of foodarr\">\n\t\t\t\t\t<div class=\"medication1\">\n\t\t\t\t\t\t<div class=\"mtext\">{{eat.foodname}}</div>\n\t\t\t\t\t\t<div class=\"mtext2\">{{eat.eatingtime}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"medication2\">\n\t\t\t\t\t\t<div class=\"mtext\">Eating Time 2</div>\n\t\t\t\t\t\t<div class=\"mtext2\">12:30 pm</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"medication3\">\n\t\t\t\t\t\t<div class=\"mtext\">Eating Time 3</div>\n\t\t\t\t\t\t<div class=\"mtext2\">08:00 am</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\t\n\t</div>\n\n\t<div class=\"main2\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Snack Times</h6>\n\t\t\t<div style=\"display: flex;flex-wrap: wrap;\">\n\t\t\t\t<div class=\"medicationdiv\" *ngFor=\"let snack of snackarr\">\n\t\t\t\t\t<div class=\"medication1\">\n\t\t\t\t\t\t<div class=\"mtext\">{{snack.snackname}}</div>\n\t\t\t\t\t\t<div class=\"mtext2\">{{snack.snacktime}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"medication2\">\n\t\t\t\t\t\t<div class=\"mtext\">Snack Time 2</div>\n\t\t\t\t\t\t<div class=\"mtext2\">12:30 pm</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"medication3\">\n\t\t\t\t\t\t<div class=\"mtext\">Snack Time 3</div>\n\t\t\t\t\t\t<div class=\"mtext2\">08:00 am</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\t\n\t</div>\n\n\t<div class=\"main1\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Likes</h6>\n\t\t\t<div style=\"display: flex;flex-wrap: wrap;\">\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let like of likesarr\">\n\t\t\t\t\t<ion-button class=\"btn\">{{like.likes}}</ion-button>\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">Outdoor games</ion-button> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\n\t<div class=\"main2\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Dislikes</h6>\n\t\t\t<div style=\"display: flex;flex-wrap: wrap;\">\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let dislike of dislikesarr\">\n\t\t\t\t\t<ion-button class=\"btn\">{{dislike.dislikes}}</ion-button>\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">Outdoor games</ion-button> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\n\t<div class=\"main1\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Favorite activities</h6>\n\t\t\t<div style=\"display: flex;flex-wrap: wrap;\">\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let fav of favouritearr\">\n\t\t\t\t\t<ion-button class=\"btn\">{{fav.favourite}}</ion-button>\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">Outdoor games</ion-button> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\n\t<div class=\"main2\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Emergency phone numbers</h6>\n\t\t\t<div style=\"display: flex;flex-wrap: wrap;\">\n\t\t\t\t<div class=\"calldiv\" *ngFor=\"let num of contactsarr\">\n\t\t\t\t\t<div class=\"contactdiv\">\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>{{num.contact}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"contactdiv1\">\n\t\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>+1 412 688 699</p>\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\n\t<div class=\"main1\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Pediatrician</h6>\n\t\t\t<div class=\"para\">{{pediatrician}}</div>\n\t\t</div>\t\n\t</div>\n\n\t<div class=\"main2\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Insurance information</h6>\n\t\t\t<div class=\"para\">{{insuranceinfo}}</div>\n\t\t</div>\t\n\t</div>\n\n\t<div class=\"main1\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Special instructions</h6>\n\t\t\t<div class=\"para\">{{instruction}}</div>\n\t\t</div>\t\n\t</div>\n\n\t<div class=\"main2\">\n\t\t<div class=\"inner1\">\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Additional notes</h6>\n\t\t\t<div class=\"para\">{{notes}}</div>\n\t\t</div>\t\n\t</div>\n\t\n\n</ion-content>\n";
      /***/
    },

    /***/
    "Sp3E":
    /*!*************************************************************!*\
      !*** ./src/app/childprofile/childprofile-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ChildprofilePageRoutingModule */

    /***/
    function Sp3E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildprofilePageRoutingModule", function () {
        return ChildprofilePageRoutingModule;
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


      var _childprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./childprofile.page */
      "A4im");

      var routes = [{
        path: '',
        component: _childprofile_page__WEBPACK_IMPORTED_MODULE_3__["ChildprofilePage"]
      }];

      var ChildprofilePageRoutingModule = function ChildprofilePageRoutingModule() {
        _classCallCheck(this, ChildprofilePageRoutingModule);
      };

      ChildprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChildprofilePageRoutingModule);
      /***/
    },

    /***/
    "agoW":
    /*!*****************************************************!*\
      !*** ./src/app/childprofile/childprofile.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function agoW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 12px;\n  padding-left: 18px;\n}\n\n.plusbtn {\n  margin-right: 3%;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 15px;\n  padding-left: 18px;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 8% auto;\n}\n\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.left img {\n  border-radius: 7px;\n}\n\n.inner {\n  padding: 2% 3%;\n  display: flex;\n}\n\n.right {\n  margin-left: 5%;\n  width: 50%;\n  margin-top: 1%;\n}\n\n.rtext {\n  font-size: 20px;\n  font-weight: bold;\n  color: #000000;\n}\n\n.rtext1 {\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 3%;\n  color: #FE9805;\n}\n\n.rtext2 {\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 4%;\n  overflow: hidden;\n  height: 90px;\n}\n\n.main1 {\n  background: #fff;\n}\n\n.inner1 {\n  width: 85%;\n  margin: 0% auto;\n  padding: 3% 0%;\n}\n\n.btndiv {\n  margin-top: 3%;\n  margin-right: 5%;\n}\n\n.btn {\n  --background: #000000;\n  --box-shadow: none;\n  --border-radius: 7px;\n  /*width: 20%;*/\n  --padding-start: 20px;\n  --padding-end: 20px;\n  height: 35px;\n}\n\n.btn1 {\n  --background: #000000;\n  --box-shadow: none;\n  --border-radius: 7px;\n  /*width: 20%;*/\n  --padding-start: 20px;\n  --padding-end: 20px;\n  height: 35px;\n  margin-left: 4%;\n}\n\n.medicationdiv {\n  display: flex;\n  margin-top: 3%;\n  margin-right: 15%;\n}\n\n.medication2 {\n  margin-left: 10%;\n}\n\n.medication3 {\n  margin-left: 11%;\n}\n\n.mtext {\n  color: #000000;\n  font-size: 12px;\n  margin-top: 3%;\n}\n\n.mtext2 {\n  color: #000000;\n  font-weight: bold;\n  font-size: 12px;\n  text-align: center;\n  margin-top: 3%;\n}\n\n.calldiv {\n  display: flex;\n}\n\n.icondiv {\n  padding-top: 3px;\n}\n\n.contactdiv {\n  display: flex;\n  margin-top: 5%;\n  width: 100%;\n  margin-right: 30px;\n}\n\n.contactdiv p {\n  margin: 0px;\n  margin-left: 15px;\n}\n\n.contactdiv1 {\n  display: flex;\n  margin-top: 5%;\n  margin-left: 10%;\n  width: 100%;\n}\n\n.contactdiv1 p {\n  margin: 0px;\n  padding-left: 10%;\n}\n\n.para {\n  font-size: 14px;\n  margin-top: 1%;\n  color: #000000;\n}\n\n@media only screen and (max-width: 320px) {\n  .rtext2 {\n    font-size: 12px;\n    font-weight: 400;\n    margin-top: 5%;\n  }\n\n  .right {\n    margin-left: 5%;\n    width: 55%;\n    margin-top: 1%;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  .rtext2 {\n    font-size: 13px;\n    font-weight: 400;\n    margin-top: 5%;\n  }\n\n  .right {\n    margin-left: 5%;\n    width: 55%;\n    margin-top: 1%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoaWxkcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNDLFdBQUE7QUFFRDs7QUFBQTtFQUNDLGVBQUE7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDQyxnQkFBQTtBQUlEOztBQUZBO0VBQ0UsVUFBQTtBQUtGOztBQUZBO0VBRUUsZUFBQTtFQUNFLGdCQUFBO0FBSUo7O0FBRkE7RUFDQyxrQkFBQTtFQUFvQixnQkFBQTtBQU1yQjs7QUFIQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBT3RCOztBQUxDO0VBQ0MscUJBQUE7RUFDQSxjQUFBO0FBT0Y7O0FBTEc7RUFDRCxlQUFBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtBQU9IOztBQUpBO0VBQ0UscUJBQUE7QUFPRjs7QUFMQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBUUQ7O0FBTEE7RUFDQyxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBUUQ7O0FBTkE7RUFDQyxrQkFBQTtBQVNEOztBQVBBO0VBQ0MsY0FBQTtFQUNBLGFBQUE7QUFVRDs7QUFSQTtFQUNDLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQVdEOztBQVRBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVlEOztBQVZBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFhRDs7QUFYQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFjRDs7QUFaQTtFQUNDLGdCQUFBO0FBZUQ7O0FBYkE7RUFDQyxVQUFBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7QUFnQkY7O0FBZEE7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7QUFpQkQ7O0FBZkE7RUFDQyxxQkFBQTtFQUNHLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFrQko7O0FBaEJBO0VBQ0MscUJBQUE7RUFDRyxrQkFBQTtFQUNBLG9CQUFBO0VBQ0QsY0FBQTtFQUNDLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQW1CSjs7QUFqQkE7RUFDQyxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBb0JEOztBQWxCQTtFQUNDLGdCQUFBO0FBcUJEOztBQW5CQTtFQUNDLGdCQUFBO0FBc0JEOztBQXBCQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXVCRDs7QUFyQkE7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBd0JEOztBQXRCQTtFQUNDLGFBQUE7QUF5QkQ7O0FBdkJBO0VBQ0MsZ0JBQUE7QUEwQkQ7O0FBeEJBO0VBQ0MsYUFBQTtFQUNBLGNBQUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7QUEyQkY7O0FBekJBO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0FBNEJEOztBQTFCQTtFQUNDLGFBQUE7RUFDQSxjQUFBO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0FBNkJGOztBQTNCQTtFQUNDLFdBQUE7RUFDQSxpQkFBQTtBQThCRDs7QUE1QkE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUErQkQ7O0FBNUJBO0VBQ0M7SUFDQyxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBK0JBOztFQTVCRDtJQUNDLGVBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtFQStCQTtBQUNGOztBQTdCQztFQUNBO0lBQ0MsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQStCQTs7RUE1QkQ7SUFDQyxlQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUErQkE7QUFDRiIsImZpbGUiOiJjaGlsZHByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6MSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuLmJhY2tidG57XHJcblx0bWFyZ2luLWxlZnQ6MCU7XHJcbiAgcGFkZGluZy10b3A6MTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbn1cclxuLnBsdXNidG57XHJcblx0bWFyZ2luLXJpZ2h0OjMlO1xyXG59XHJcbi5iYWNrU3ZnIHtcclxuICBmaWxsOiAjMzMzO1xyXG59XHJcblxyXG4uY3RpdGxle1xyXG5cdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50aXRsZWNsYXNze1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4uaW9ze1xyXG5cdC50aXRsZWNsYXNze1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTFweDtcclxuXHR9XHJcblx0LmhlYWRCZyB7XHJcblx0XHQtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcblx0XHRwYWRkaW5nOjMlIDAlO1xyXG5cdCAgfVxyXG5cdCAgLmJhY2tidG57XHJcblx0XHRtYXJnaW4tbGVmdDowJTtcclxuXHQgIHBhZGRpbmctdG9wOjE1cHg7XHJcblx0ICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcblx0fVxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6OTAlO1xyXG5cdG1hcmdpbjo4JSBhdXRvO1xyXG59XHJcblxyXG4ubWFpbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmxlZnQgaW1ne1xyXG5cdGJvcmRlci1yYWRpdXM6N3B4O1xyXG59XHJcbi5pbm5lcntcclxuXHRwYWRkaW5nOjIlIDMlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnJpZ2h0e1xyXG5cdG1hcmdpbi1sZWZ0OiA1JTtcclxuXHR3aWR0aDogNTAlO1xyXG5cdG1hcmdpbi10b3A6MSU7XHJcbn1cclxuLnJ0ZXh0e1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG5cdGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5ydGV4dDF7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OjUwMDtcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxuXHRjb2xvcjogI0ZFOTgwNTtcclxufVxyXG4ucnRleHQye1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRmb250LXdlaWdodDo0MDA7XHJcblx0bWFyZ2luLXRvcDogNCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRoZWlnaHQ6IDkwcHg7XHJcbn1cclxuLm1haW4xe1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmlubmVyMXtcclxuXHR3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMCUgYXV0bztcclxuICBwYWRkaW5nOiAzJSAwJTtcclxufVxyXG4uYnRuZGl2e1xyXG5cdG1hcmdpbi10b3A6IDMlO1xyXG5cdG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuLmJ0bntcclxuXHQtLWJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIC8qd2lkdGg6IDIwJTsqL1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG4uYnRuMXtcclxuXHQtLWJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgLyp3aWR0aDogMjAlOyovXHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xyXG59XHJcbi5tZWRpY2F0aW9uZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcblx0bWFyZ2luLXJpZ2h0OiAxNSU7XHJcbn1cclxuLm1lZGljYXRpb24ye1xyXG5cdG1hcmdpbi1sZWZ0OiAxMCVcclxufVxyXG4ubWVkaWNhdGlvbjN7XHJcblx0bWFyZ2luLWxlZnQ6IDExJVxyXG59XHJcbi5tdGV4dHtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxufVxyXG4ubXRleHQye1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxufVxyXG4uY2FsbGRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5pY29uZGl2e1xyXG5cdHBhZGRpbmctdG9wOiAzcHg7XHJcbn1cclxuLmNvbnRhY3RkaXZ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW4tdG9wOiA1JTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6MzBweDtcclxufVxyXG4uY29udGFjdGRpdiBwe1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jb250YWN0ZGl2MXtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhY3RkaXYxIHB7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxMCVcclxufVxyXG4ucGFyYXtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRtYXJnaW4tdG9wOiAxJTtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuXHQucnRleHQye1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdFx0bWFyZ2luLXRvcDogNSU7XHJcblx0fVxyXG5cclxuXHQucmlnaHR7XHJcblx0XHRtYXJnaW4tbGVmdDogNSU7XHJcblx0XHR3aWR0aDogNTUlO1xyXG5cdFx0bWFyZ2luLXRvcDoxJTtcclxuXHR9XHJcbn1cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIHtcclxuXHQucnRleHQye1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdFx0bWFyZ2luLXRvcDogNSU7XHJcblx0fVxyXG5cclxuXHQucmlnaHR7XHJcblx0XHRtYXJnaW4tbGVmdDogNSU7XHJcblx0XHR3aWR0aDogNTUlO1xyXG5cdFx0bWFyZ2luLXRvcDoxJTtcclxuXHR9XHJcblxyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=childprofile-childprofile-module-es5.js.map