(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["caregiver-caregiver-module"], {
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
    "PTMB":
    /*!*********************************************!*\
      !*** ./src/app/caregiver/caregiver.page.ts ***!
      \*********************************************/

    /*! exports provided: CaregiverPage */

    /***/
    function PTMB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CaregiverPage", function () {
        return CaregiverPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_caregiver_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./caregiver.page.html */
      "lDx1");
      /* harmony import */


      var _caregiver_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./caregiver.page.scss */
      "qAwp");
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

      var CaregiverPage = /*#__PURE__*/function () {
        function CaregiverPage(navCtrl, loading, rest) {
          _classCallCheck(this, CaregiverPage);

          this.navCtrl = navCtrl;
          this.loading = loading;
          this.rest = rest;
          this.caregiver = [];
          this.error = {
            status: false,
            message: ""
          };
          this.caregivers = false;
        }

        _createClass(CaregiverPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.caregivers();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "search",
          value: function search(ev) {
            var _this2 = this;

            this.searchval = ev.detail.value;
            console.log('get value from search:::', this.searchval);
            this.rest.sendRequest('get_all_filtered_caregivers', {
              dataFilter: this.searchval
            }).subscribe(function (data) {
              console.log('search data from api::', data);
              _this2.status = data.status;

              if (data.status == 'success') {
                _this2.caregivers = true;
                _this2.caregiver = [];
                data.data.forEach(function (val) {
                  _this2.loading.hideLoader();

                  if (val.account_type_id == 2) {
                    _this2.type = 'Professional';
                  }

                  if (val.account_type_id == 3) {
                    _this2.type = 'Family';
                  }

                  if (val.account_type_id == 4) {
                    _this2.type = 'Agency';
                  }

                  if (val.profile_picture == '' || val.profile_picture == null) {
                    _this2.profilepicture = 'assets/imgs/profilelogo.png';
                  } else {
                    _this2.profilepicture = val.profile_picture;
                  }

                  var Obj = {
                    userid: val.users_id,
                    typeid: val.account_type_id,
                    profile: _this2.profilepicture,
                    fname: val.first_name,
                    lname: val.last_name,
                    price: val.per_hour_rate,
                    about: val.about,
                    caregivertype: _this2.type,
                    address: val.street_address
                  };

                  _this2.caregiver.push(Obj);
                });
                console.log('caregiver array', _this2.caregiver);
              }

              if (data.status == 'error') {
                _this2.loading.hideLoader();

                _this2.caregiver = [];
                console.log('signup request data:', data.status);
                _this2.error.status = true;
                _this2.error.message = data.message; // setTimeout(() => {
                //   this.error.status = false;
                //   this.error.message = "";
                // }, 3000);

                return;
              }
            });
          } // caregivers(){
          //   // this.caregiver=[];
          //   this.loading.loadershow();
          //   this.rest.getRequest("get_all_caregivers",{}).subscribe(
          //     (data:any)=>{
          //       console.log('get_all_caregivers data::',data);
          //       if(data.status=='success'){
          //         data.data.forEach(val=>{
          //           this.loading.hideLoader();
          //           if(val.account_type_id==2){
          //             this.type='Professional'
          //           }
          //           if(val.account_type_id==3){
          //             this.type='Family'
          //           }
          //           if(val.account_type_id==4){
          //             this.type='Agency'
          //           }
          //           if(val.profile_picture==''|| val.profile_picture==null){
          //             this.profilepicture='assets/imgs/profilelogo.png';
          //           }else{
          //             this.profilepicture=val.profile_picture
          //           }
          //           let Obj={
          //             userid:val.users_id,
          //             typeid:val.account_type_id,
          //             profile:this.profilepicture,
          //             fname:val.first_name,
          //             lname:val.last_name,
          //             price:val.per_hour_rate,
          //             about:val.about,
          //             caregivertype:this.type,
          //             address:val.street_address
          //           }
          //           this.caregiver.push(Obj)
          //         })
          //         console.log('caregiver array',this.caregiver)
          //       }
          //       if(data.status=='error'){
          //         this.loading.hideLoader();
          //         console.log('signup request data:',data.status);
          //           this.error.status = true;
          //         this.error.message = data.message;
          //         setTimeout(() => {
          //           this.error.status = false;
          //           this.error.message = "";
          //         }, 3000);
          //         return;  
          //       }
          //     }
          //   );
          // }

        }, {
          key: "gotoprofile",
          value: function gotoprofile(care) {
            this.navCtrl.navigateForward(['/profile', {
              page: 'caregiver',
              userid: care.userid
            }]);
          }
        }]);

        return CaregiverPage;
      }();

      CaregiverPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }];
      };

      CaregiverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-caregiver',
        template: _raw_loader_caregiver_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_caregiver_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CaregiverPage);
      /***/
    },

    /***/
    "YiyE":
    /*!*******************************************************!*\
      !*** ./src/app/caregiver/caregiver-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: CaregiverPageRoutingModule */

    /***/
    function YiyE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CaregiverPageRoutingModule", function () {
        return CaregiverPageRoutingModule;
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


      var _caregiver_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./caregiver.page */
      "PTMB");

      var routes = [{
        path: '',
        component: _caregiver_page__WEBPACK_IMPORTED_MODULE_3__["CaregiverPage"]
      }];

      var CaregiverPageRoutingModule = function CaregiverPageRoutingModule() {
        _classCallCheck(this, CaregiverPageRoutingModule);
      };

      CaregiverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CaregiverPageRoutingModule);
      /***/
    },

    /***/
    "khTF":
    /*!***********************************************!*\
      !*** ./src/app/caregiver/caregiver.module.ts ***!
      \***********************************************/

    /*! exports provided: CaregiverPageModule */

    /***/
    function khTF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CaregiverPageModule", function () {
        return CaregiverPageModule;
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


      var _caregiver_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./caregiver-routing.module */
      "YiyE");
      /* harmony import */


      var _caregiver_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./caregiver.page */
      "PTMB");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-search-filter */
      "cZdB");

      var CaregiverPageModule = function CaregiverPageModule() {
        _classCallCheck(this, CaregiverPageModule);
      };

      CaregiverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _caregiver_routing_module__WEBPACK_IMPORTED_MODULE_5__["CaregiverPageRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]],
        declarations: [_caregiver_page__WEBPACK_IMPORTED_MODULE_6__["CaregiverPage"]]
      })], CaregiverPageModule);
      /***/
    },

    /***/
    "lDx1":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/caregiver/caregiver.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function lDx1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t <ion-toolbar class=\"headBgGlobal\">\n      <!-- <ion-buttons slot=\"start\" style=\"margin-left: 2%;\">\n          <ion-menu-button class=\"menuicon\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title class=\"ctitle\">Caregiver</ion-title> -->\n\n     <ion-row>\n\t\t\t<ion-col style=\"padding-top:6px;\" size=\"2\">\n\t\t\t\t<div>\n\t\t\t\t\t<ion-menu-button class=\"menuicon\"></ion-menu-button>\n        </div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col class=\"titleclass\" size=\"8\">\n\t\t\t\t<ion-text class=\"ctitle\">Caregiver</ion-text>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"2\">\n\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\t\t<div class=\"inputdiv\">\n\t\t\t<div class=\"pinput\">\n\t\t\t\t<ion-input placeholder=\"Search\" type=\"text\"  (ionChange)=search($event)></ion-input>\n\t\t\t\t<!-- <ion-input placeholder=\"Search\" type=\"text\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-input> -->\n\t\t\t\t <!-- <ion-searchbar placeholder=\"Search...\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar> -->\n\t\t\t</div>\n\t\t\t<img src=\"assets/imgs/icons/search.svg\" class=\"cimg\">\n\t\t</div>\n\n   \n    <div class=\"defaulttext\">Need to take a day off from the stressful routine? Search for a Caregiver and find \n\t\tthe one that best suits your needs\n\n\t</div>\n    \n\t\t<div *ngFor=\"let care of caregiver\">\n\t\t\t<div class=\"main\" (click)=\"gotoprofile(care)\">\n\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t<img src=\"{{care.profile}}\" width=\"145px\" height=\"135px\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t<div class=\"rtext\">{{care.fname}} {{care.lname}}</div>\n\t\t\t\t\t\t<div class=\"rtext2\">{{care.caregivertype}}</div>\n\t\t\t\t\t\t<div class=\"rtext1\">{{care.price}}/hr</div>\n\t\t\t\t\t\t<!-- <div class=\"rtext2\">{{care.address}}</div> -->\n\t\t\t\t\t\t<div class=\"rtext2\">{{care.about}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n    <p *ngIf=\"caregivers==false\" class=\"error\">\n      Search for caregivers\n    </p>\n   \n\n\t\t<!-- <div class=\"main\" (click)=\"gotoprofile()\">\n\t\t\t<div class=\"inner\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<img src=\"assets/imgs/caregiver.png\" width=\"145px\" height=\"135px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right\">\n\t\t\t\t\t<div class=\"rtext\">Nancy Daniel</div>\n\t\t\t\t\t<div class=\"rtext1\">$10/hr</div>\n\t\t\t\t\t<div class=\"rtext2\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"main\" (click)=\"gotoprofile()\">\n\t\t\t<div class=\"inner\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<img src=\"assets/imgs/caregiver.png\" width=\"145px\" height=\"135px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right\">\n\t\t\t\t\t<div class=\"rtext\">Nancy Daniel</div>\n\t\t\t\t\t<div class=\"rtext1\">$10/hr</div>\n\t\t\t\t\t<div class=\"rtext2\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div> -->\n\n\t</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "qAwp":
    /*!***********************************************!*\
      !*** ./src/app/caregiver/caregiver.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function qAwp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 6% auto;\n}\n\n.defaulttext {\n  font-size: 15px;\n  text-align: justify;\n  width: 90%;\n  margin: 4% auto;\n}\n\n.inputdiv {\n  /*margin: 10% auto 5%;*/\n  display: flex;\n  border-radius: 12px;\n  background: #FFFFFF;\n  width: 100%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n  padding: 1% 0% 1% 7%;\n}\n\n.cimg {\n  margin-right: 5%;\n}\n\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.left img {\n  border-radius: 7px;\n}\n\n.inner {\n  padding: 1% 1.5%;\n  display: flex;\n}\n\n.right {\n  margin-left: 5%;\n  width: 50%;\n  margin-top: 1%;\n}\n\n.rtext {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.rtext1 {\n  font-size: 14px;\n  font-weight: 400;\n  color: #FE9805;\n  margin-top: 3%;\n}\n\n.rtext2 {\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 3%;\n}\n\n.error {\n  text-align: center;\n  margin-top: 50%;\n  font-size: 25px;\n  font-weight: 500;\n}\n\n@media only screen and (max-width: 320px) {\n  .rtext2 {\n    font-size: 12px;\n    font-weight: 400;\n    margin-top: 3%;\n  }\n\n  .right {\n    margin-left: 5%;\n    width: 55%;\n    margin-top: 1%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhcmVnaXZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUNBO0VBRUUsZUFBQTtFQUNFLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDQyxrQkFBQTtFQUFvQixnQkFBQTtBQUdyQjs7QUFBQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBSXRCOztBQUZDO0VBQ0MscUJBQUE7RUFDQSxjQUFBO0FBSUY7O0FBREE7RUFDRSxxQkFBQTtBQUlGOztBQUZBO0VBQ0MsVUFBQTtFQUNBLGVBQUE7QUFLRDs7QUFIQTtFQUNDLGVBQUE7RUFDRyxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDQyx1QkFBQTtFQUNHLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQU9KOztBQUxBO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBUUo7O0FBTkE7RUFDQyxnQkFBQTtBQVNEOztBQVBBO0VBQ0MsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVVEOztBQVJBO0VBQ0Msa0JBQUE7QUFXRDs7QUFUQTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtBQVlEOztBQVZBO0VBQ0MsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBYUQ7O0FBWEE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUFjRDs7QUFaQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBZUQ7O0FBYkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBZ0JEOztBQWRBO0VBQ0Msa0JBQUE7RUFDRyxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBaUJKOztBQWRBO0VBQ0M7SUFDQyxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBaUJBOztFQWREO0lBQ0MsZUFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VBaUJBO0FBQ0YiLCJmaWxlIjoiY2FyZWdpdmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkQmcge1xyXG4gIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG4ubWVudWljb257XHJcblx0Y29sb3I6IzAwMDtcclxufVxyXG5cclxuLmN0aXRsZXtcclxuXHQvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGl0bGVjbGFzc3tcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuLmlvc3tcclxuXHQudGl0bGVjbGFzc3tcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDExcHg7XHJcblx0fVxyXG5cdC5oZWFkQmcge1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG5cdFx0cGFkZGluZzogMyUgMCU7XHJcblx0ICB9XHJcbn1cclxuLmJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG4ud3JhcHBlcntcclxuXHR3aWR0aDo5MCU7XHJcblx0bWFyZ2luOjYlIGF1dG87XHJcbn1cclxuLmRlZmF1bHR0ZXh0e1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiA0JSBhdXRvO1xyXG59XHJcbi5pbnB1dGRpdntcclxuXHQvKm1hcmdpbjogMTAlIGF1dG8gNSU7Ki9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5waW5wdXR7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG9wYWNpdHk6IDQ4JTtcclxuICAgIHBhZGRpbmc6IDElIDAlIDElIDclO1xyXG59XHJcbi5jaW1ne1xyXG5cdG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuLm1haW57XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5sZWZ0IGltZ3tcclxuXHRib3JkZXItcmFkaXVzOjdweDtcclxufVxyXG4uaW5uZXJ7XHJcblx0cGFkZGluZzogMSUgMS41JTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5yaWdodHtcclxuXHRtYXJnaW4tbGVmdDogNSU7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRtYXJnaW4tdG9wOjElO1xyXG59XHJcbi5ydGV4dHtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Zm9udC13ZWlnaHQ6NjAwO1xyXG59XHJcbi5ydGV4dDF7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRjb2xvcjojRkU5ODA1O1xyXG5cdG1hcmdpbi10b3A6IDMlO1xyXG59XHJcbi5ydGV4dDJ7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxufVxyXG4uZXJyb3J7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMHB4KSB7XHJcblx0LnJ0ZXh0MntcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRcdG1hcmdpbi10b3A6IDMlO1xyXG5cdH1cclxuXHJcblx0LnJpZ2h0e1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDUlO1xyXG5cdFx0d2lkdGg6IDU1JTtcclxuXHRcdG1hcmdpbi10b3A6MSU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=caregiver-caregiver-module-es5.js.map