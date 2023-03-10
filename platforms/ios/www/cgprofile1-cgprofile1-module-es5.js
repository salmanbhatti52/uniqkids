(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cgprofile1-cgprofile1-module"], {
    /***/
    "6LeY":
    /*!*********************************************************!*\
      !*** ./src/app/cgprofile1/cgprofile1-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: Cgprofile1PageRoutingModule */

    /***/
    function LeY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cgprofile1PageRoutingModule", function () {
        return Cgprofile1PageRoutingModule;
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


      var _cgprofile1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cgprofile1.page */
      "A9pb");

      var routes = [{
        path: '',
        component: _cgprofile1_page__WEBPACK_IMPORTED_MODULE_3__["Cgprofile1Page"]
      }];

      var Cgprofile1PageRoutingModule = function Cgprofile1PageRoutingModule() {
        _classCallCheck(this, Cgprofile1PageRoutingModule);
      };

      Cgprofile1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Cgprofile1PageRoutingModule);
      /***/
    },

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
    "A9pb":
    /*!***********************************************!*\
      !*** ./src/app/cgprofile1/cgprofile1.page.ts ***!
      \***********************************************/

    /*! exports provided: Cgprofile1Page */

    /***/
    function A9pb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cgprofile1Page", function () {
        return Cgprofile1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cgprofile1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cgprofile1.page.html */
      "lXWJ");
      /* harmony import */


      var _cgprofile1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cgprofile1.page.scss */
      "wapB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _services_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/rest.service */
      "tnAE");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "tAfe");

      var Cgprofile1Page = /*#__PURE__*/function () {
        function Cgprofile1Page(navCtrl, camera, alertCtrl, imagePicker, loading, rest) {
          _classCallCheck(this, Cgprofile1Page);

          this.navCtrl = navCtrl;
          this.camera = camera;
          this.alertCtrl = alertCtrl;
          this.imagePicker = imagePicker;
          this.loading = loading;
          this.rest = rest;
          this.defaultProfile = 'assets/imgs/profilelogo.png';
          this.mobilenumber = '';
          this.price = '';
          this.address = '';
          this.about = '';
          this.bankname = '';
          this.accountnumber = '';
          this.nameError = {
            status: false,
            message: ""
          };
          this.mobilenumberError = {
            status: false,
            message: ""
          };
          this.emailError = {
            status: false,
            message: ""
          };
          this.relationError = {
            status: false,
            message: ""
          };
          this.addressError = {
            status: false,
            message: ""
          };
          this.aboutError = {
            status: false,
            message: ""
          };
          this.priceError = {
            status: false,
            message: ""
          };
          this.banknameError = {
            status: false,
            message: ""
          };
          this.accountnumberError = {
            status: false,
            message: ""
          };
          this.error = {
            status: false,
            message: ""
          };
          this.cameraOptions = {
            quality: 50,
            allowEdit: false,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.galleryOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 50,
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
          };
        }

        _createClass(Cgprofile1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.imagePicker.requestReadPermission();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.userid = localStorage.getItem('uid');
            console.log('userid', this.userid);
            this.accountTypeId = localStorage.getItem('accountTypeId');
            console.log('accountTypeId', this.accountTypeId);
            this.getprofiledata(this.userid); //   if (this.profiletype) {
            //     if (this.profiletype === 'agency') {
            //       this.mySegment.nativeElement.children[0].click();
            //       console.log('click event',this.mySegment.nativeElement.children[0].click())
            //     }
            //     if (this.profiletype === 'caregiver') {
            //       this.mySegment.nativeElement.children[1].click();
            //     }
            //   } else {
            //     this.profiletype = 'agency';
            //     this.mySegment.nativeElement.children[0].click();
            //     console.log('user id in ion view will:',this.userid)
            //   }
          } // segmentChanged(ev) {
          // 	console.log('profiletype value',ev.detail.value);
          // 	let data=ev.detail.value;
          // 	this.profiletype=data
          //   if (ev.detail.value === 'agency') {
          //     this.profiletype = 'agency';
          //     this.getprofiledata(this.userid)
          //   }
          //   if (ev.detail.value === 'caregiver') {
          //     this.profiletype = 'caregiver';
          //     this.caregiverdata(this.userid);
          //   }
          //   localStorage.setItem('profiletype', this.profiletype);
          // }

        }, {
          key: "getprofiledata",
          value: function getprofiledata(userid) {
            var _this2 = this;

            this.loading.loadershow();
            this.rest.sendRequest("get_profile_details", {
              userId: userid
            }).subscribe(function (data) {
              console.log('get_profile_details data::', data);

              if (data.status == 'success') {
                console.log('suucesssss');

                _this2.loading.hideLoader();

                _this2.fname = data.data.first_name;
                _this2.lname = data.data.last_name;
                _this2.email = data.data.email;

                if (data.data.profile_picture == '' || data.data.profile_picture == null) {
                  _this2.defaultProfile = _this2.defaultProfile;
                } else {
                  _this2.defaultProfile = data.data.profile_picture;
                }

                _this2.price = data.data.per_hour_rate;
                _this2.mobilenumber = data.data.mobile_number;
                _this2.address = data.data.street_address;
                _this2.about = data.data.about;
                _this2.bankname = data.data.bank_name;
                _this2.accountnumber = data.data.account_number;
              }

              if (data.status == 'error') {
                _this2.loading.hideLoader();

                console.log('signup request data:', data.status);
                _this2.error.status = true;
                _this2.error.message = data.message;
                setTimeout(function () {
                  _this2.error.status = false;
                  _this2.error.message = "";
                }, 3000);
                return;
              }
            }, function (err) {});
          }
        }, {
          key: "uploadPic",
          value: function uploadPic(type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this3 = this;

              var confirm;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertCtrl.create({
                        header: 'Choose from',
                        cssClass: 'profileAlertBox',
                        buttons: [{
                          text: 'Camera',
                          handler: function handler() {
                            _this3.camera.getPicture(_this3.cameraOptions).then(function (imageData) {
                              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                  while (1) {
                                    switch (_context5.prev = _context5.next) {
                                      case 0:
                                        // console.log('imagedata is = ' , imageData); 
                                        this.picUrl = imageData;
                                        this.defaultProfile = "data:image/png;base64,".concat(imageData); // console.log('defaultProfile is = ' , this.defaultProfile); 

                                      case 2:
                                      case "end":
                                        return _context5.stop();
                                    }
                                  }
                                }, _callee5, this);
                              }));
                            }, function (err) {});
                          }
                        }, {
                          text: 'Gallery',
                          handler: function handler() {
                            var options = {
                              maximumImagesCount: 1,
                              outputType: 1
                            };

                            _this3.imagePicker.getPictures(options).then(function (results) {
                              console.log('all selected', results);

                              if (results != null) {
                                for (var i = 0; i < results.length; i++) {
                                  console.log('each one' + results[i]);

                                  if (results[i] != "") {
                                    console.log('data:image/jpeg;base64,', results[i]);
                                    _this3.picUrl = results[i];
                                    _this3.defaultProfile = "data:image/png;base64,".concat(results[i]);
                                  }
                                }
                              }
                            }, function (err) {
                              console.log('error', err);
                            }); // this.camera.getPicture(this.galleryOptions)
                            // .then(async imageData => {
                            //   this.picUrl=imageData;
                            //   this.defaultProfile = `data:image/png;base64,${imageData}`   
                            // }, err => {
                            // })

                          }
                        }]
                      });

                    case 2:
                      confirm = _context6.sent;
                      _context6.next = 5;
                      return confirm.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "viewprofile",
          value: function viewprofile() {
            var _this4 = this;

            if (this.mobilenumber && this.bankname && this.address && this.about) {
              var profiledata = {
                userId: this.userid,
                accountTypeId: this.accountTypeId,
                profilePicture: this.picUrl,
                mobileNumber: this.mobilenumber,
                streetAddress: this.address,
                about: this.about,
                bankName: this.bankname,
                accountNumber: this.accountnumber,
                perHourRate: this.price
              };
              this.loading.loadershow();
              this.rest.sendRequest("update_profile", profiledata).subscribe(function (data) {
                console.log('profiledatae data::', profiledata);
                console.log('update_profile data::', data);

                if (data.status == 'success') {
                  // if(this.accountTypeId==2){
                  //   this.loading.presentToast('Profile Update Successfully!!');
                  //   this.loading.hideLoader();
                  //    this.navCtrl.navigateForward('/cgviewprofile');
                  // }
                  // if(this.accountTypeId==3){
                  _this4.loading.presentToast('Profile Update Successfully!!');

                  _this4.loading.hideLoader();

                  _this4.navCtrl.navigateForward('/cgviewprofile1'); // }

                }

                if (data.status == 'error') {
                  _this4.loading.hideLoader();

                  console.log('signup request data:', data.status);
                  _this4.error.status = true;
                  _this4.error.message = data.message;
                  setTimeout(function () {
                    _this4.error.status = false;
                    _this4.error.message = "";
                  }, 3000);
                  return;
                }
              }, function (err) {});
            }

            if (!this.mobilenumber) {
              this.mobilenumberError.status = true;
              this.mobilenumberError.message = "Field is required";
            }

            if (!this.address) {
              this.addressError.status = true;
              this.addressError.message = "Field is required";
            }

            if (!this.price) {
              this.priceError.status = true;
              this.priceError.message = "Field is required";
            }

            if (!this.about) {
              this.aboutError.status = true;
              this.aboutError.message = "Field is required";
            }

            if (!this.bankname) {
              this.banknameError.status = true;
              this.banknameError.message = "Field is required";
            }

            if (!this.accountnumber) {
              this.accountnumberError.status = true;
              this.accountnumberError.message = "Field is required";
            }

            setTimeout(function () {
              _this4.mobilenumberError.status = false;
              _this4.mobilenumberError.message = "";
              _this4.addressError.status = false;
              _this4.addressError.message = "";
              _this4.priceError.status = false;
              _this4.priceError.message = "";
              _this4.aboutError.status = false;
              _this4.aboutError.message = "";
              _this4.banknameError.status = false;
              _this4.banknameError.message = "";
              _this4.accountnumberError.status = false;
              _this4.accountnumberError.message = "";
            }, 3000);
          }
        }]);

        return Cgprofile1Page;
      }();

      Cgprofile1Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
        }];
      };

      Cgprofile1Page.propDecorators = {
        mySegment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['mySegment', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }]
      };
      Cgprofile1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cgprofile1',
        template: _raw_loader_cgprofile1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cgprofile1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Cgprofile1Page);
      /***/
    },

    /***/
    "FhKm":
    /*!*************************************************!*\
      !*** ./src/app/cgprofile1/cgprofile1.module.ts ***!
      \*************************************************/

    /*! exports provided: Cgprofile1PageModule */

    /***/
    function FhKm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cgprofile1PageModule", function () {
        return Cgprofile1PageModule;
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


      var _cgprofile1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cgprofile1-routing.module */
      "6LeY");
      /* harmony import */


      var _cgprofile1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cgprofile1.page */
      "A9pb");

      var Cgprofile1PageModule = function Cgprofile1PageModule() {
        _classCallCheck(this, Cgprofile1PageModule);
      };

      Cgprofile1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cgprofile1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Cgprofile1PageRoutingModule"]],
        declarations: [_cgprofile1_page__WEBPACK_IMPORTED_MODULE_6__["Cgprofile1Page"]]
      })], Cgprofile1PageModule);
      /***/
    },

    /***/
    "lXWJ":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cgprofile1/cgprofile1.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function lXWJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>cgprofile</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n  <ion-row>\n    <ion-col style=\"padding-top:6px;\" size=\"2\">\n      <div>\n        <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      </div>\n    </ion-col>\n\n    <ion-col class=\"titleclass\" size=\"8\">\n      <ion-text class=\"ctitle\">Complete Profile</ion-text>\n    </ion-col>\n\n    <ion-col size=\"2\">\n\n    </ion-col>\n  </ion-row>\n  \n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"background\">\n\t\n\t<!-- <ion-segment\n    id=\"segment\"\n    mode=\"ios\"\n    (ionChange)=\"segmentChanged($event)\"\n      #mySegment>\n    <ion-segment-button mode=\"ios\" value=\"agency\">\n      <ion-label>Agency Profile</ion-label>\n    </ion-segment-button>\n    <ion-segment-button checked mode=\"ios\" value=\"caregiver\">\n      <ion-label>Caregivers Profile</ion-label>\n    </ion-segment-button>\n\t</ion-segment> -->\n\n\t<div class=\"wrapper\">\n\t\t\n\t\t<!-- <div *ngIf=\"profiletype=='agency'\"> -->\n\t\t\t<div class=\"logodiv\" (click)=\"uploadPic()\">\n\t\t\t\t<!-- <img src=\"assets/imgs/icons/msglogo.svg\"> -->\n\t\t\t\t<img src=\"{{defaultProfile}}\">\n\t\t\t</div>\n\t\t\t<div class=\"name\">{{fname}} {{lname}}</div>\n\t\t\t<!-- <div class=\"name\" *ngIf=\"profiletype=='caregiver'\">Name</div> -->\n\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"Email\" type=\"email\" [(ngModel)]=\"email\" readonly></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"Mobile number\" type=\"tel\" [(ngModel)]=\"mobilenumber\"></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<p *ngIf=\"mobilenumberError.status\" class=\"error\">\n\t\t    {{mobilenumberError.message}}\n\t\t  </p>\n\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"Street address\" type=\"text\" [(ngModel)]=\"address\"></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<p *ngIf=\"addressError.status\" class=\"error\">\n\t\t    {{addressError.message}}\n\t\t  </p>\n\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"Per hour USD rate\" type=\"tel\" [(ngModel)]=\"price\"></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<p *ngIf=\"priceError.status\" class=\"error\">\n\t\t    {{priceError.message}}\n\t\t  </p>\n\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-textarea placeholder=\"About\"  rows=\"6\" cols=\"20\" [(ngModel)]=\"about\"></ion-textarea>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<p *ngIf=\"aboutError.status\" class=\"error\">\n\t\t    {{aboutError.message}}\n\t\t  </p>\n\n\t\t\n\t\t\t<h6 style=\"font-size: 14px;font-weight: 600;\">Back Account</h6>\n\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"Bank name\" type=\"text\" [(ngModel)]=\"bankname\"></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<p *ngIf=\"banknameError.status\" class=\"error\">\n\t\t    {{banknameError.message}}\n\t\t  </p>\n\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"Account number\" type=\"tel\" [(ngModel)]=\"accountnumber\"></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p *ngIf=\"accountnumberError.status\" class=\"error\">\n\t\t    {{accountnumberError.message}}\n\t\t  </p>\n\t\t\t\n\t\t<!-- </div> -->\n\n\t\t<!-----------------------------caregiver fileds ------------------------------------>\n\t\t<!-- <div *ngIf=\"profiletype=='caregiver'\">\n\t\t\t<div class=\"logodiv\" (click)=\"uploadPic(2)\">\n\t\t\t\t<img src=\"assets/imgs/icons/msglogo.svg\">\n\t\t\t\n\t\t\t</div>\n\t\t\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"name\" type=\"text\" [(ngModel)]=\"cname\"></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n      <p *ngIf=\"nameError.status\" class=\"error\">\n\t\t    {{nameError.message}}\n\t\t  </p>\n\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"Email\" type=\"email\" [(ngModel)]=\"cemail\"></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n      \t<p *ngIf=\"emailError.status\" class=\"error\">\n\t\t\t    {{emailError.message}}\n\t\t\t  </p>\n      \n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"Mobile number\" type=\"tel\" [(ngModel)]=\"cmobilenumber\"></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<p *ngIf=\"mobilenumberError.status\" class=\"error\">\n\t\t    {{mobilenumberError.message}}\n\t\t  </p>\n\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"Street address\" type=\"text\" [(ngModel)]=\"caddress\"></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<p *ngIf=\"addressError.status\" class=\"error\">\n\t\t    {{addressError.message}}\n\t\t  </p>\n\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"Per hour USD rate\" type=\"tel\" [(ngModel)]=\"cprice\"></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<p *ngIf=\"priceError.status\" class=\"error\">\n\t\t    {{priceError.message}}\n\t\t  </p>\n\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-textarea placeholder=\"About\"  rows=\"6\" cols=\"20\" [(ngModel)]=\"cabout\"></ion-textarea>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<p *ngIf=\"aboutError.status\" class=\"error\">\n\t\t    {{aboutError.message}}\n\t\t  </p>\n\t\t\t\n\t\t</div> -->\n\n\t\t<div class=\"ionbutton\" (click)=\"viewprofile()\">\n\t\t\t<ion-button class=\"ib\">Done</ion-button>\n\t\t</div>\n\n\t</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "wapB":
    /*!*************************************************!*\
      !*** ./src/app/cgprofile1/cgprofile1.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function wapB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\nion-segment {\n  padding: 5px 5px;\n  border-radius: 10px;\n  margin-top: 10px;\n  --background: #EBEBEB;\n  width: 85%;\n  margin: 20% auto 0%;\n}\n\nion-segment ion-segment-button {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 10px;\n  --background-checked: #fe9805;\n  --indicator-color: transparent !important;\n  --color: #00000;\n  --color-checked: #fff;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.wrapper {\n  width: 70%;\n  margin: 5% auto;\n}\n\n.logodiv {\n  /*background: #ffff;*/\n  width: 110px;\n  margin: 0% auto;\n  /*border-radius: 90px;*/\n  height: 110px;\n}\n\n.logodiv img {\n  border-radius: 90px;\n  width: 110px;\n  height: 110px;\n}\n\n.name {\n  text-align: center;\n  font-weight: bold;\n  margin-top: 5%;\n  font-size: 20px;\n}\n\n.fields {\n  margin-top: 5%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 8px;\n  background: #FFFFFF;\n  padding: 1% 5%;\n  margin-top: 5%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10%;\n  height: 50px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NncHJvZmlsZTEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBRkY7O0FBSUE7RUFDQyxXQUFBO0FBREQ7O0FBSUE7RUFFRSxlQUFBO0VBQ0UsZ0JBQUE7QUFGSjs7QUFJQTtFQUNDLGtCQUFBO0VBQW9CLGdCQUFBO0FBQXJCOztBQUdDO0VBQ0Msa0JBQUE7RUFBb0IsaUJBQUE7QUFDdEI7O0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUVGOztBQURFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQUE7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQUdEOztBQUFBO0VBQ0UscUJBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUdKOztBQURBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUlGOztBQUZBO0VBQ0Msa0JBQUE7RUFDRyxpQkFBQTtFQUNBLGNBQUE7RUFDSSxlQUFBO0FBS1I7O0FBRkE7RUFDQyxjQUFBO0FBS0Q7O0FBSEE7RUFDQyxhQUFBO0VBQ0csa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDSCxjQUFBO0FBTUQ7O0FBRkE7RUFFQyxXQUFBO0VBQ0EsZUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FBSUY7O0FBREE7RUFFRSxrQkFBQTtFQUNELFdBQUE7RUFDQSxlQUFBO0FBR0Q7O0FBREE7RUFHQyxZQUFBO0VBQ0MscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNDLG1CQUFBO0VBQ0QscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFHRiIsImZpbGUiOiJjZ3Byb2ZpbGUxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jaGVhZGVye1xyXG4vLyBcdHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gfVxyXG4uaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgcGFkZGluZzogMSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuICAuaGVhZEJnIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICAgIHBhZGRpbmc6IDMlIDAlO1xyXG4gIH1cclxufVxyXG4uYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbmlvbi1zZWdtZW50IHtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAtLWJhY2tncm91bmQ6ICNFQkVCRUI7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDIwJSBhdXRvIDAlO1xyXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMDtcclxuICAgIC0tbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgLS1tYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZTk4MDU7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3I6ICMwMDAwMDtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcbi53cmFwcGVye1xyXG5cdHdpZHRoOjcwJTtcclxuXHRtYXJnaW46NSUgYXV0bztcclxufVxyXG5cclxuLmxvZ29kaXZ7XHJcbiAgLypiYWNrZ3JvdW5kOiAjZmZmZjsqL1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgbWFyZ2luOiAwJSBhdXRvO1xyXG4gICAgLypib3JkZXItcmFkaXVzOiA5MHB4OyovXHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG59XHJcbi5sb2dvZGl2IGltZ3tcclxuICBib3JkZXItcmFkaXVzOiA5MHB4O1xyXG4gIHdpZHRoOiAxMTBweDtcclxuICBoZWlnaHQ6IDExMHB4O1xyXG59XHJcbi5uYW1le1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uZmllbGRze1xyXG5cdG1hcmdpbi10b3A6NSU7XHJcbn1cclxuLmlucHV0ZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgcGFkZGluZzogMSUgNSU7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcblxyXG4ucGlucHV0XHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgb3BhY2l0eTogNDglO1xyXG59XHJcblxyXG4uaW9uYnV0dG9uXHJcbntcdFxyXG4gXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5pYlxyXG57XHJcblxyXG5cdGNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6ICNGRTk4MDU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gICAtLWJvcmRlci13aWR0aDogMXB4OyBcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiAjZmYwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=cgprofile1-cgprofile1-module-es5.js.map