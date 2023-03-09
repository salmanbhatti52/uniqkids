(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cgprofile-cgprofile-module"], {
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
    "EjT9":
    /*!*******************************************************!*\
      !*** ./src/app/cgprofile/cgprofile-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: CgprofilePageRoutingModule */

    /***/
    function EjT9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CgprofilePageRoutingModule", function () {
        return CgprofilePageRoutingModule;
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


      var _cgprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cgprofile.page */
      "i+hR");

      var routes = [{
        path: '',
        component: _cgprofile_page__WEBPACK_IMPORTED_MODULE_3__["CgprofilePage"]
      }];

      var CgprofilePageRoutingModule = function CgprofilePageRoutingModule() {
        _classCallCheck(this, CgprofilePageRoutingModule);
      };

      CgprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CgprofilePageRoutingModule);
      /***/
    },

    /***/
    "Fjb3":
    /*!***********************************************!*\
      !*** ./src/app/cgprofile/cgprofile.module.ts ***!
      \***********************************************/

    /*! exports provided: CgprofilePageModule */

    /***/
    function Fjb3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CgprofilePageModule", function () {
        return CgprofilePageModule;
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


      var _cgprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cgprofile-routing.module */
      "EjT9");
      /* harmony import */


      var _cgprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cgprofile.page */
      "i+hR");

      var CgprofilePageModule = function CgprofilePageModule() {
        _classCallCheck(this, CgprofilePageModule);
      };

      CgprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cgprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["CgprofilePageRoutingModule"]],
        declarations: [_cgprofile_page__WEBPACK_IMPORTED_MODULE_6__["CgprofilePage"]]
      })], CgprofilePageModule);
      /***/
    },

    /***/
    "i+hR":
    /*!*********************************************!*\
      !*** ./src/app/cgprofile/cgprofile.page.ts ***!
      \*********************************************/

    /*! exports provided: CgprofilePage */

    /***/
    function iHR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CgprofilePage", function () {
        return CgprofilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cgprofile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cgprofile.page.html */
      "jBGz");
      /* harmony import */


      var _cgprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cgprofile.page.scss */
      "teJc");
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

      var CgprofilePage = /*#__PURE__*/function () {
        function CgprofilePage(navCtrl, camera, alertCtrl, imagePicker, loading, rest) {
          _classCallCheck(this, CgprofilePage);

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
          this.mobilenumberError = {
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
          this.userid = localStorage.getItem('uid');
          console.log('userid', this.userid);
          this.accountTypeId = localStorage.getItem('accountTypeId');
          console.log('accountTypeId', this.accountTypeId);
          this.getprofiledata();
        }

        _createClass(CgprofilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.imagePicker.requestReadPermission();
          }
        }, {
          key: "getprofiledata",
          value: function getprofiledata() {
            var _this2 = this;

            this.loading.loadershow();
            this.rest.sendRequest("get_profile_details", {
              userId: this.userid
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
          value: function uploadPic() {
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
                            //  this.picUrl=imageData;
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

            if (this.mobilenumber && this.address && this.about) {
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
                console.log('update_profile data::', data);

                if (data.status == 'success') {
                  if (_this4.accountTypeId == 2) {
                    _this4.loading.presentToast('Profile Update Successfully!!');

                    _this4.loading.hideLoader();

                    _this4.navCtrl.navigateForward('/cgviewprofile');
                  }

                  if (_this4.accountTypeId == 3) {
                    _this4.loading.presentToast('Profile Update Successfully!');

                    _this4.loading.hideLoader();

                    _this4.navCtrl.navigateForward('/cgviewprofile');
                  }
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

        return CgprofilePage;
      }();

      CgprofilePage.ctorParameters = function () {
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

      CgprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cgprofile',
        template: _raw_loader_cgprofile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cgprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CgprofilePage);
      /***/
    },

    /***/
    "jBGz":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cgprofile/cgprofile.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function jBGz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>cgprofile</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n  <ion-row>\n    <ion-col style=\"padding-top:6px;\" size=\"2\">\n      <div>\n        <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      </div>\n    </ion-col>\n\n    <ion-col class=\"titleclass\" size=\"8\">\n      <ion-text class=\"ctitle\">Complete Profile</ion-text>\n    </ion-col>\n\n    <ion-col size=\"2\">\n\n    </ion-col>\n  </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\t\t\n\t\t<div class=\"logodiv\" (click)=\"uploadPic()\">\n\t\t\t<!-- <img src=\"assets/imgs/icons/msglogo.svg\"> -->\n\t\t\t<img src=\"{{defaultProfile}}\">\n\t\t</div>\n\t\t<div class=\"name\">{{fname}} {{lname}}</div>\n\n\t\t<div class=\"fields\">\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-input placeholder=\"Email\" type=\"email\" [(ngModel)]=\"email\" readonly></ion-input>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"fields\">\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-input placeholder=\"Mobile number\" type=\"tel\" [(ngModel)]=\"mobilenumber\"></ion-input>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<p *ngIf=\"mobilenumberError.status\" class=\"error\">\n\t    {{mobilenumberError.message}}\n\t  </p>\n\t\t<div class=\"fields\">\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-input placeholder=\"Street address\" type=\"text\" [(ngModel)]=\"address\"></ion-input>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<p *ngIf=\"addressError.status\" class=\"error\">\n\t    {{addressError.message}}\n\t  </p>\n\n\t\t<div class=\"fields\" *ngIf=\"accountTypeId!=3\">\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-input placeholder=\"Per hour USD rate\" type=\"tel\" [(ngModel)]=\"price\"></ion-input>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ngIf=\"accountTypeId!=3\">\n\t\t\t<p *ngIf=\"priceError.status\" class=\"error\">\n\t\t    {{priceError.message}}\n\t\t  </p>\n\t\t</div>\n\t\t\n\n\t\t<div class=\"fields\">\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-textarea placeholder=\"About\"  rows=\"6\" cols=\"20\" [(ngModel)]=\"about\"></ion-textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<p *ngIf=\"aboutError.status\" class=\"error\">\n\t    {{aboutError.message}}\n\t  </p>\n\n\t\t<div *ngIf=\"accountTypeId!=3\">\n\t\t\t<h6 style=\"font-size: 14px;font-weight: 600;\">Back Account</h6>\n\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"Bank name\" type=\"text\" [(ngModel)]=\"bankname\"></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p *ngIf=\"banknameError.status\" class=\"error\">\n\t\t    {{banknameError.message}}\n\t\t  </p>\n\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"inputdiv\">\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"Account number\" type=\"tel\" [(ngModel)]=\"accountnumber\"></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<p *ngIf=\"accountnumberError.status\" class=\"error\">\n\t\t    {{accountnumberError.message}}\n\t\t  </p>\n\t\t</div>\n\t\n\n\t\t<div class=\"ionbutton\" (click)=\"viewprofile()\">\n\t\t\t<ion-button class=\"ib\">Done</ion-button>\n\t\t</div>\n\n\t</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "teJc":
    /*!***********************************************!*\
      !*** ./src/app/cgprofile/cgprofile.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function teJc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\nion-segment {\n  padding: 5px 5px;\n  border-radius: 10px;\n  margin-top: 10px;\n  --background: #EBEBEB;\n  width: 85%;\n  margin: 15% auto 0%;\n}\n\nion-segment ion-segment-button {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 10px;\n  --background-checked: #fe9805;\n  --indicator-color: transparent !important;\n  --color: #00000;\n  --color-checked: #fff;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.wrapper {\n  width: 70%;\n  margin: 5% auto;\n}\n\n.logodiv {\n  /*background: #ffff;*/\n  width: 110px;\n  margin: 0% auto;\n  /*border-radius: 90px;*/\n  height: 110px;\n}\n\n.logodiv img {\n  border-radius: 90px;\n  width: 110px;\n  height: 110px;\n}\n\n.name {\n  text-align: center;\n  font-weight: bold;\n  margin-top: 5%;\n  font-size: 20px;\n}\n\n.fields {\n  margin-top: 5%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 8px;\n  background: #FFFFFF;\n  padding: 1% 5%;\n  margin-top: 5%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10%;\n  height: 50px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NncHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFGRjs7QUFJQTtFQUNDLFdBQUE7QUFERDs7QUFJQTtFQUVFLGVBQUE7RUFDRSxnQkFBQTtBQUZKOztBQUlBO0VBQ0Msa0JBQUE7RUFBb0IsZ0JBQUE7QUFBckI7O0FBR0M7RUFDQyxrQkFBQTtFQUFvQixpQkFBQTtBQUN0Qjs7QUFDRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdBO0VBQ0UscUJBQUE7QUFBRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQUU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBRUQ7O0FBQ0E7RUFDRSxxQkFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBR0Y7O0FBREE7RUFDQyxrQkFBQTtFQUNHLGlCQUFBO0VBQ0EsY0FBQTtFQUNJLGVBQUE7QUFJUjs7QUFEQTtFQUNDLGNBQUE7QUFJRDs7QUFGQTtFQUNDLGFBQUE7RUFDRyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNILGNBQUE7QUFLRDs7QUFEQTtFQUVDLFdBQUE7RUFDQSxlQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFHRjs7QUFBQTtFQUVFLGtCQUFBO0VBQ0QsV0FBQTtFQUNBLGVBQUE7QUFFRDs7QUFBQTtFQUdDLFlBQUE7RUFDQyxxQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0MsbUJBQUE7RUFDRCxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUVGIiwiZmlsZSI6ImNncHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY2hlYWRlcntcclxuLy8gXHRwb3NpdGlvbjogZml4ZWQ7XHJcbi8vIH1cclxuLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6IDElIDAlO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcblxyXG4uY3RpdGxle1xyXG5cdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50aXRsZWNsYXNze1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4uaW9ze1xyXG5cdC50aXRsZWNsYXNze1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTFweDtcclxuXHR9XHJcbiAgLmhlYWRCZyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgICBwYWRkaW5nOiAzJSAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuaW9uLXNlZ21lbnQge1xyXG4gIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogI0VCRUJFQjtcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMTUlIGF1dG8gMCU7XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAtLW1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZlOTgwNTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogIzAwMDAwO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6NzAlO1xyXG5cdG1hcmdpbjo1JSBhdXRvO1xyXG59XHJcblxyXG4ubG9nb2RpdntcclxuICAvKmJhY2tncm91bmQ6ICNmZmZmOyovXHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBtYXJnaW46IDAlIGF1dG87XHJcbiAgICAvKmJvcmRlci1yYWRpdXM6IDkwcHg7Ki9cclxuICAgIGhlaWdodDogMTEwcHg7XHJcbn1cclxuLmxvZ29kaXYgaW1ne1xyXG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbn1cclxuLm5hbWV7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5maWVsZHN7XHJcblx0bWFyZ2luLXRvcDo1JTtcclxufVxyXG4uaW5wdXRkaXZ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBwYWRkaW5nOiAxJSA1JTtcclxuXHRtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuXHJcbi5waW5wdXRcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBvcGFjaXR5OiA0OCU7XHJcbn1cclxuXHJcbi5pb25idXR0b25cclxue1x0XHJcbiBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmliXHJcbntcclxuXHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogI0ZFOTgwNTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7IFxyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5lcnJvciB7XHJcbiAgY29sb3I6ICNmZjAwMDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=cgprofile-cgprofile-module-es5.js.map