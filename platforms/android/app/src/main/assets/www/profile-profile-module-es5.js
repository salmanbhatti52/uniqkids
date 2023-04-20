(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "cRhG":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function cRhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "v+7O");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "ncJE");

      var ProfilePageModule = /*#__PURE__*/_createClass(function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      });

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "ncJE":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function ncJE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "tXh8");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "zxxS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _requestpopup_requestpopup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../requestpopup/requestpopup.page */
      "Moub");
      /* harmony import */


      var _services_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/rest.service */
      "tnAE");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(navCtrl, route, modal, loading, rest, platform, cd) {
          _classCallCheck(this, ProfilePage);

          this.navCtrl = navCtrl;
          this.route = route;
          this.modal = modal;
          this.loading = loading;
          this.rest = rest;
          this.platform = platform;
          this.cd = cd;
          this.picUrl = "assets/imgs/profilelogo.png";
          this.error = {
            status: false,
            message: ""
          };
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.platform.keyboardDidShow.subscribe(function (ev) {
              var deviceHeight = window.innerHeight;
              var keyboardHeight = ev.keyboardHeight;
              var deviceHeightAdjusted = deviceHeight - keyboardHeight; //device height adjusted

              deviceHeightAdjusted = deviceHeightAdjusted < 0 ? deviceHeightAdjusted * -1 : deviceHeightAdjusted; //only positive number

              document.getElementById("prpage").style.height = deviceHeightAdjusted - 92 + "px"; //set page height

              document.getElementById("prpage").setAttribute("keyBoardHeight", keyboardHeight); //save keyboard height

              console.log("keyboard show", ev);

              _this.cd.detectChanges();
            });
            this.platform.keyboardDidHide.subscribe(function (ev) {
              setTimeout(function () {
                document.getElementById("prpage").style.height = 100 + "%"; //device  100% height
              }, 100);

              _this.cd.detectChanges();

              console.log("keyboard hide");
            }); //keybpoardddddd --------------

            this.logeduser = localStorage.getItem("uid");
            console.log("logeduser", this.logeduser);
            this.page = this.route.snapshot.paramMap.get("page");
            console.log("page coming", this.page);
            this.caregiverid = this.route.snapshot.paramMap.get("userid");
            console.log("userid:", this.caregiverid);
            this.getdetails();
          }
        }, {
          key: "goback",
          value: function goback() {
            if (this.page == "caregiver") {
              this.navCtrl.navigateBack("/caregiver");
            } else if (this.page == "requests") {
              this.navCtrl.navigateBack("/requests");
            } else if (this.page == "homescreen") {
              this.navCtrl.navigateBack("/homescreen");
            }
          }
        }, {
          key: "next",
          value: function next() {
            this.navCtrl.navigateForward("/cgprofile");
          }
        }, {
          key: "getdetails",
          value: function getdetails() {
            var _this2 = this;

            var senddata = {
              userId: this.caregiverid
            };
            this.rest.sendRequest("get_profile_details", senddata).subscribe(function (data) {
              console.log("get_profile_details data::", data);

              if (data.status == "success") {
                console.log("suucesssss");
                _this2.Id = data.data.users_id;
                _this2.fname = data.data.first_name;
                _this2.lname = data.data.last_name;
                _this2.email = data.data.email;

                if (data.data.profile_picture == "" || data.data.profile_picture == null) {
                  _this2.picUrl = _this2.picUrl;
                } else {
                  _this2.picUrl = data.data.profile_picture;
                }

                if (data.data.per_hour_rate == "" || data.data.per_hour_rate == null) {
                  _this2.price = "None";
                } else {
                  _this2.price = data.data.per_hour_rate;
                }

                if (data.data.mobile_number == "" || data.data.mobile_number == null) {
                  _this2.mobilenumber = "None";
                } else {
                  _this2.mobilenumber = data.data.mobile_number;
                }

                if (data.data.street_address == "" || data.data.street_address == null) {
                  _this2.address = "None";
                } else {
                  _this2.address = data.data.street_address;
                }

                if (data.data.about == "" || data.data.about == null) {
                  _this2.about = "None";
                } else {
                  _this2.about = data.data.about;
                }

                if (data.data.bank_name == "" || data.data.bank_name == null) {
                  _this2.bankname = "None";
                } else {
                  _this2.bankname = data.data.bank_name;
                }

                if (data.data.account_number == "" || data.data.account_number == null) {
                  _this2.accountnumber = "None";
                } else {
                  _this2.accountnumber = data.data.account_number;
                }

                _this2.loading.hideLoader();
              }

              if (data.status == "error") {
                _this2.loading.hideLoader();

                console.log("signup request data:", data.status);
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
          key: "openmodel",
          value: function openmodel() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modal.create({
                      component: _requestpopup_requestpopup_page__WEBPACK_IMPORTED_MODULE_6__["RequestpopupPage"],
                      componentProps: {
                        caregiverid: this.caregiverid,
                        name: this.fname
                      },
                      cssClass: "my-custom-class"
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "sendmsg",
          value: function sendmsg() {
            var _this3 = this;

            this.rest.sendRequest("chat", {
              requestType: "startChat",
              userId: this.logeduser,
              otherUserId: this.Id
            }).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log("Start chat res", res);

                      if (res.status == "success") {
                        this.navCtrl.navigateForward(["inbox", {
                          page: "profile",
                          id: this.Id,
                          name: this.fname
                        }]);
                      }

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, this);
              }));
            });
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-profile",
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "tXh8":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function tXh8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col class=\"backbtn\" size=\"2\">\r\n        <div>\r\n          <img\r\n            src=\"assets/imgs/icons/backbtn.svg\"\r\n            class=\"backSvg\"\r\n            (click)=\"goback()\"\r\n          />\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"8\">\r\n        <ion-text class=\"ctitle\">Profile</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\"> </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-buttons slot=\"start\" class=\"backbtn\">\r\n\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t  </ion-buttons>\r\n\t  <ion-title class=\"ctitle\">Profile</ion-title> -->\r\n    <!-- <ion-buttons slot=\"end\" class=\"plusbtn\" *ngIf=\"page!='caregiver'\" (click)=\"next()\">\r\n\t\t  <img src=\"assets/imgs/icons/edit.svg\">\r\n\t\t</ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n  <div id=\"prpage\" class=\"adjust-overflow\">\r\n    <div class=\"wrapper\">\r\n      <div class=\"main\">\r\n        <div class=\"inner\">\r\n          <div class=\"logodiv\">\r\n            <img src=\"{{picUrl}}\" />\r\n          </div>\r\n          <div class=\"text\">{{fname}} {{lname}}</div>\r\n          <div class=\"text2\">${{price}}/hr</div>\r\n          <div class=\"para\">{{about}}</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"main2\">\r\n        <div class=\"contactdiv\">\r\n          <div class=\"icondiv\">\r\n            <img src=\"assets/imgs/icons/sms.png\" />\r\n          </div>\r\n          <p class=\"ctext\">{{email}}</p>\r\n        </div>\r\n\r\n        <div class=\"contactdiv\">\r\n          <div class=\"icondiv\">\r\n            <img src=\"assets/imgs/icons/arrow.png\" />\r\n          </div>\r\n          <p class=\"ctext1\">{{address}}</p>\r\n        </div>\r\n\r\n        <div class=\"contactdiv\">\r\n          <div class=\"icondiv\">\r\n            <img src=\"assets/imgs/icons/call.png\" />\r\n          </div>\r\n          <p class=\"ctext1\">{{mobilenumber}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"page=='requests'\">\r\n          <h6 style=\"font-size: 14px; font-weight: 500; margin-top: 15%\">\r\n            Bank Accout\r\n          </h6>\r\n          <div class=\"contactdiv\">\r\n            <div class=\"icondiv\">\r\n              <img src=\"assets/imgs/icons/bank.png\" />\r\n            </div>\r\n            <p class=\"ctext1\">{{bankname}}</p>\r\n          </div>\r\n          <div class=\"contactdiv\">\r\n            <div class=\"icondiv\">\r\n              <img src=\"assets/imgs/icons/accnum.png\" />\r\n            </div>\r\n            <p class=\"ctext1\">{{accountnumber}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"page=='caregiver'\">\r\n        <div class=\"ionbutton\" (click)=\"openmodel()\">\r\n          <ion-button class=\"ib\">hire</ion-button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"page=='requests'\">\r\n        <div class=\"ionbutton\" (click)=\"sendmsg()\">\r\n          <ion-button class=\"ib\">SEND MESSAGE</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "v+7O":
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function v7O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "ncJE");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = /*#__PURE__*/_createClass(function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      });

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "zxxS":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function zxxS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*.cheader{\n\tposition: fixed;\n}*/\n.headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n.menuicon {\n  color: #000;\n}\n.backbtn {\n  margin-left: 0%;\n  padding-top: 10px;\n  padding-left: 18px;\n}\n.backSvg {\n  fill: #333;\n}\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 12px;\n  padding-left: 18px;\n}\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n.background {\n  --background: #F7F7F7;\n}\n.wrapper {\n  width: 90%;\n  margin: 30% auto;\n}\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n.inner {\n  text-align: center;\n  width: 80%;\n  margin: 0% auto;\n}\n.logodiv {\n  position: absolute;\n  top: 40px;\n  left: 115px;\n}\n.logodiv img {\n  width: 145px;\n  height: 145px;\n  border-radius: 90px;\n}\n.text {\n  padding-top: 30%;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n.text2 {\n  color: #FE9805;\n  font-size: 14px;\n  font-style: italic;\n}\n.para {\n  color: #000000;\n  font-size: 14px;\n  padding: 4% 0%;\n}\n.main2 {\n  width: 75%;\n  margin: 10% auto;\n}\n.contactdiv {\n  display: flex;\n  margin-top: 10%;\n}\n.ctext {\n  margin: 0px;\n  margin-left: 10px;\n}\n.ctext1 {\n  margin: 0px;\n  margin-left: 15px;\n}\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 18%;\n}\n.ib {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 80%;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10%;\n  height: 54px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n  --padding-top: 3px;\n}\n@media only screen and (max-width: 414px) {\n  .wrapper {\n    width: 90%;\n    margin: 25% auto 15%;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 35px;\n    left: 135px;\n  }\n}\n@media only screen and (max-width: 360px) {\n  .wrapper {\n    width: 90%;\n    margin: 27% auto 15%;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 25px;\n    left: 115px;\n  }\n}\n@media only screen and (max-width: 375px) {\n  .wrapper {\n    width: 90%;\n    margin: 27% auto 15%;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 25px;\n    left: 115px;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .logodiv {\n    position: absolute;\n    top: 15px;\n    left: 90px;\n  }\n\n  .text {\n    padding-top: 35%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n@media only screen and (min-device-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {\n  .wrapper {\n    width: 90%;\n    margin: 18% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 70px;\n    left: 310px;\n  }\n\n  .text {\n    padding-top: 17%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n/*@media only screen  \n  and (max-device-width: 1024px)  {\n  .wrapper{\n\t\twidth: 90%;\n    margin: 18% auto;\n\t}\n  .logodiv{\n\t\tposition: absolute;\n    top: 65px;\n    left: 293px\n\t}\n\t.text{\n    padding-top: 17%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n\t}\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FBR0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNBO0VBQ0MsV0FBQTtBQUVEO0FBQUE7RUFDQyxlQUFBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtBQUdGO0FBREE7RUFDRSxVQUFBO0FBSUY7QUFEQTtFQUVFLGVBQUE7RUFDRSxnQkFBQTtBQUdKO0FBREE7RUFDQyxrQkFBQTtFQUFvQixnQkFBQTtBQUtyQjtBQUZDO0VBQ0Msa0JBQUE7RUFBb0IsaUJBQUE7QUFNdEI7QUFKRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTUo7QUFKRTtFQUNELHFCQUFBO0VBQ0EsY0FBQTtBQU1EO0FBSEE7RUFDRSxxQkFBQTtBQU1GO0FBSkE7RUFDQyxVQUFBO0VBQ0MsZ0JBQUE7QUFPRjtBQUxBO0VBQ0MsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVFEO0FBTkE7RUFDQyxrQkFBQTtFQUNHLFVBQUE7RUFDQSxlQUFBO0FBU0o7QUFQQTtFQUNDLGtCQUFBO0VBQ0csU0FBQTtFQUNBLFdBQUE7QUFVSjtBQVJBO0VBQ0MsWUFBQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtBQVdGO0FBVEE7RUFDQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFZRDtBQVZBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWFEO0FBWEE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFjRDtBQVhBO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FBY0Q7QUFaQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0FBZUQ7QUFiQTtFQUNDLFdBQUE7RUFDQyxpQkFBQTtBQWdCRjtBQWRBO0VBQ0MsV0FBQTtFQUNDLGlCQUFBO0FBaUJGO0FBVEE7RUFFRSxrQkFBQTtFQUNELFdBQUE7RUFDQSxlQUFBO0FBV0Q7QUFUQTtFQUdDLFlBQUE7RUFDQyxxQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0QsZUFBQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0MsbUJBQUE7RUFDRCxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFVRjtBQUxBO0VBQ0M7SUFDQyxVQUFBO0lBQ0Msb0JBQUE7RUFRRDs7RUFORDtJQUNDLGtCQUFBO0lBQ0UsU0FBQTtJQUNBLFdBQUE7RUFTRjtBQUNGO0FBTkE7RUFDQztJQUNDLFVBQUE7SUFDQyxvQkFBQTtFQVFEOztFQU5EO0lBQ0Msa0JBQUE7SUFDRSxTQUFBO0lBQ0EsV0FBQTtFQVNGO0FBQ0Y7QUFOQTtFQUNDO0lBQ0MsVUFBQTtJQUNDLG9CQUFBO0VBUUQ7O0VBTkQ7SUFDQyxrQkFBQTtJQUNFLFNBQUE7SUFDQSxXQUFBO0VBU0Y7QUFDRjtBQUxBO0VBQ0M7SUFDQyxrQkFBQTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VBT0Y7O0VBTEQ7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFRQztBQUNGO0FBRkE7RUFHRTtJQUNBLFVBQUE7SUFDRSxnQkFBQTtFQUVGOztFQUFBO0lBQ0Esa0JBQUE7SUFDRSxTQUFBO0lBQ0EsV0FBQTtFQUdGOztFQUREO0lBQ0csZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBSUY7QUFDRjtBQURBOzs7Ozs7Ozs7Ozs7Ozs7OztFQUFBIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouY2hlYWRlcntcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcbn0qL1xyXG4uaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgcGFkZGluZzogMSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuLmJhY2tidG57XHJcblx0bWFyZ2luLWxlZnQ6MCU7XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuICAuYmFja2J0bntcclxuICAgIG1hcmdpbi1sZWZ0OjAlO1xyXG4gICAgcGFkZGluZy10b3A6MTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICB9XHJcbiAgLmhlYWRCZyB7XHJcblx0LS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG5cdHBhZGRpbmc6IDMlIDAlO1xyXG4gIH1cclxufVxyXG4uYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbi53cmFwcGVye1xyXG5cdHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAzMCUgYXV0bztcclxufVxyXG4ubWFpbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmlubmVye1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAlIGF1dG87XHJcbn1cclxuLmxvZ29kaXZ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgbGVmdDogMTE1cHg7XHJcbn1cclxuLmxvZ29kaXYgaW1ne1xyXG5cdHdpZHRoOiAxNDVweDtcclxuICBoZWlnaHQ6IDE0NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbn1cclxuLnRleHR7XHJcblx0cGFkZGluZy10b3A6IDMwJTtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZToyMHB4XHJcbn1cclxuLnRleHQye1xyXG5cdGNvbG9yOiNGRTk4MDU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4ucGFyYXtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRwYWRkaW5nOiA0JSAwJTtcclxufVxyXG5cclxuLm1haW4ye1xyXG5cdHdpZHRoOjc1JTtcclxuXHRtYXJnaW46IDEwJSBhdXRvO1xyXG59XHJcbi5jb250YWN0ZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5jdGV4dHtcclxuXHRtYXJnaW46IDBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweFxyXG59XHJcbi5jdGV4dDF7XHJcblx0bWFyZ2luOiAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHhcclxufVxyXG4vLyAuY29udGFjdGRpdiBwe1xyXG5cdFxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi5pb25idXR0b25cclxue1x0XHJcbiBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAxOCU7XHJcbn1cclxuLmliXHJcbntcclxuXHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogI0ZFOTgwNTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgaGVpZ2h0OiA1NHB4O1xyXG4gICAtLWJvcmRlci13aWR0aDogMXB4OyBcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAtLXBhZGRpbmctdG9wOiAzcHg7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNHB4KSB7XHJcblx0LndyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdCAgbWFyZ2luOiAyNSUgYXV0byAxNSU7XHJcblx0fVxyXG5cdC5sb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNXB4O1xyXG4gICAgbGVmdDogMTM1cHg7XHJcblx0fVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIHtcclxuXHQud3JhcHBlcntcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0ICBtYXJnaW46IDI3JSBhdXRvIDE1JTtcclxuXHR9XHJcblx0LmxvZ29kaXZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1cHg7XHJcbiAgICBsZWZ0OiAxMTVweDtcclxuXHR9XHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkge1xyXG5cdC53cmFwcGVye1xyXG5cdFx0d2lkdGg6IDkwJTtcclxuXHQgIG1hcmdpbjogMjclIGF1dG8gMTUlO1xyXG5cdH1cclxuXHQubG9nb2RpdntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjVweDtcclxuICAgIGxlZnQ6IDExNXB4O1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjBweCkge1xyXG5cdC5sb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbGVmdDogOTBweDtcclxuXHR9XHJcblx0LnRleHR7XHJcblx0cGFkZGluZy10b3A6IDM1JTtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZToyMHB4XHJcbn1cclxuXHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIFxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKSB7XHJcbiAgLndyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxOCUgYXV0bztcclxuXHR9XHJcbiAgLmxvZ29kaXZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDcwcHg7XHJcbiAgICBsZWZ0OiAzMTBweDtcclxuXHR9XHJcblx0LnRleHR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTclO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHR9XHJcbn1cclxuXHJcbi8qQG1lZGlhIG9ubHkgc2NyZWVuICBcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgIHtcclxuICAud3JhcHBlcntcclxuXHRcdHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDE4JSBhdXRvO1xyXG5cdH1cclxuICAubG9nb2RpdntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjVweDtcclxuICAgIGxlZnQ6IDI5M3B4XHJcblx0fVxyXG5cdC50ZXh0e1xyXG4gICAgcGFkZGluZy10b3A6IDE3JTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblx0fVxyXG59Ki8iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map