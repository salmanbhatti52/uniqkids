(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
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
              }, _callee, this);
            }));
          }
        }, {
          key: "loadershow",
          value: function loadershow(content) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
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
              }, _callee3, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loading.dismiss();

                  case 2:
                  case "end":
                    return _context4.stop();
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
            console.log("get value from search:::", this.searchval);
            this.rest.sendRequest("get_all_filtered_caregivers", {
              dataFilter: this.searchval
            }).subscribe(function (data) {
              console.log("search data from api::", data);
              _this2.status = data.status;

              if (data.status == "success") {
                _this2.caregivers = true;
                _this2.caregiver = [];
                data.data.forEach(function (val) {
                  _this2.loading.hideLoader();

                  if (val.account_type_id == 2) {
                    _this2.type = "Professional";
                  }

                  if (val.account_type_id == 3) {
                    _this2.type = "Family";
                  }

                  if (val.account_type_id == 4) {
                    _this2.type = "Agency";
                  }

                  if (val.profile_picture == "" || val.profile_picture == null) {
                    _this2.profilepicture = "assets/imgs/profilelogo.png";
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
                    address: val.street_address,
                    availability: val.availability
                  };

                  _this2.caregiver.push(Obj);
                });
                console.log("caregiver array", _this2.caregiver);
              }

              if (data.status == "error") {
                _this2.loading.hideLoader();

                _this2.caregiver = [];
                console.log("signup request data:", data.status);
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
            this.navCtrl.navigateForward(["/profile", {
              page: "caregiver",
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
        selector: "app-caregiver",
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

      var CaregiverPageRoutingModule = /*#__PURE__*/_createClass(function CaregiverPageRoutingModule() {
        _classCallCheck(this, CaregiverPageRoutingModule);
      });

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

      var CaregiverPageModule = /*#__PURE__*/_createClass(function CaregiverPageModule() {
        _classCallCheck(this, CaregiverPageModule);
      });

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


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <!-- <ion-buttons slot=\"start\" style=\"margin-left: 2%;\">\r\n          <ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"ctitle\">Caregiver</ion-title> -->\r\n\r\n    <ion-row>\r\n      <ion-col style=\"padding-top: 6px\" size=\"2\">\r\n        <div>\r\n          <ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"8\">\r\n        <ion-text class=\"ctitle\">Caregiver</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n  <div class=\"wrapper\">\r\n    <div class=\"inputdiv\">\r\n      <div class=\"pinput\">\r\n        <ion-input\r\n          placeholder=\"Search\"\r\n          type=\"text\"\r\n          (ionChange)=\"search($event)\"\r\n        ></ion-input>\r\n        <!-- <ion-input placeholder=\"Search\" type=\"text\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-input> -->\r\n        <!-- <ion-searchbar placeholder=\"Search...\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar> -->\r\n      </div>\r\n      <img src=\"assets/imgs/icons/search.svg\" class=\"cimg\" />\r\n    </div>\r\n\r\n    <div class=\"defaulttext\">\r\n      Need to take a day off from the stressful routine? Search for a Caregiver\r\n      and find the one that best suits your needs\r\n    </div>\r\n\r\n    <div *ngFor=\"let care of caregiver\">\r\n      <div\r\n        *ngIf=\"care.availability=='Yes'\"\r\n        class=\"main\"\r\n        (click)=\"gotoprofile(care)\"\r\n      >\r\n        <div class=\"inner\">\r\n          <div class=\"left\">\r\n            <img src=\"{{care.profile}}\" width=\"145px\" height=\"135px\" />\r\n          </div>\r\n          <div class=\"right\">\r\n            <div class=\"rtext\">{{care.fname}} {{care.lname}}</div>\r\n            <div class=\"rtext2\">{{care.caregivertype}}</div>\r\n            <div class=\"rtext1\">{{care.price}}/hr</div>\r\n            <!-- <div class=\"rtext2\">{{care.address}}</div> -->\r\n            <div class=\"rtext2\">{{care.about}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <p *ngIf=\"caregivers==false\" class=\"error\">Search for caregivers</p>\r\n\r\n    <!-- <div class=\"main\" (click)=\"gotoprofile()\">\r\n\t\t\t<div class=\"inner\">\r\n\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t<img src=\"assets/imgs/caregiver.png\" width=\"145px\" height=\"135px\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t<div class=\"rtext\">Nancy Daniel</div>\r\n\t\t\t\t\t<div class=\"rtext1\">$10/hr</div>\r\n\t\t\t\t\t<div class=\"rtext2\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"main\" (click)=\"gotoprofile()\">\r\n\t\t\t<div class=\"inner\">\r\n\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t<img src=\"assets/imgs/caregiver.png\" width=\"145px\" height=\"135px\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t<div class=\"rtext\">Nancy Daniel</div>\r\n\t\t\t\t\t<div class=\"rtext1\">$10/hr</div>\r\n\t\t\t\t\t<div class=\"rtext2\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n  </div>\r\n</ion-content>\r\n";
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


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 6% auto;\n}\n\n.defaulttext {\n  font-size: 15px;\n  text-align: justify;\n  width: 90%;\n  margin: 4% auto;\n}\n\n.inputdiv {\n  /*margin: 10% auto 5%;*/\n  display: flex;\n  border-radius: 12px;\n  background: #FFFFFF;\n  width: 100%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n  padding: 1% 0% 1% 7%;\n}\n\n.cimg {\n  margin-right: 5%;\n}\n\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.left img {\n  border-radius: 7px;\n}\n\n.inner {\n  padding: 1% 1.5%;\n  display: flex;\n}\n\n.right {\n  margin-left: 5%;\n  width: 50%;\n  margin-top: 1%;\n}\n\n.rtext {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.rtext1 {\n  font-size: 14px;\n  font-weight: 400;\n  color: #FE9805;\n  margin-top: 3%;\n}\n\n.rtext2 {\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 3%;\n}\n\n.error {\n  text-align: center;\n  margin-top: 50%;\n  font-size: 25px;\n  font-weight: 500;\n}\n\n@media only screen and (max-width: 320px) {\n  .rtext2 {\n    font-size: 12px;\n    font-weight: 400;\n    margin-top: 3%;\n  }\n\n  .right {\n    margin-left: 5%;\n    width: 55%;\n    margin-top: 1%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhcmVnaXZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUNBO0VBRUUsZUFBQTtFQUNFLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDQyxrQkFBQTtFQUFvQixnQkFBQTtBQUdyQjs7QUFBQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBSXRCOztBQUZDO0VBQ0MscUJBQUE7RUFDQSxjQUFBO0FBSUY7O0FBREE7RUFDRSxxQkFBQTtBQUlGOztBQUZBO0VBQ0MsVUFBQTtFQUNBLGVBQUE7QUFLRDs7QUFIQTtFQUNDLGVBQUE7RUFDRyxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDQyx1QkFBQTtFQUNHLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQU9KOztBQUxBO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBUUo7O0FBTkE7RUFDQyxnQkFBQTtBQVNEOztBQVBBO0VBQ0MsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVVEOztBQVJBO0VBQ0Msa0JBQUE7QUFXRDs7QUFUQTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtBQVlEOztBQVZBO0VBQ0MsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBYUQ7O0FBWEE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUFjRDs7QUFaQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBZUQ7O0FBYkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBZ0JEOztBQWRBO0VBQ0Msa0JBQUE7RUFDRyxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBaUJKOztBQWRBO0VBQ0M7SUFDQyxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBaUJBOztFQWREO0lBQ0MsZUFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VBaUJBO0FBQ0YiLCJmaWxlIjoiY2FyZWdpdmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkQmcge1xyXG4gIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG4ubWVudWljb257XHJcblx0Y29sb3I6IzAwMDtcclxufVxyXG5cclxuLmN0aXRsZXtcclxuXHQvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGl0bGVjbGFzc3tcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuLmlvc3tcclxuXHQudGl0bGVjbGFzc3tcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDExcHg7XHJcblx0fVxyXG5cdC5oZWFkQmcge1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG5cdFx0cGFkZGluZzogMyUgMCU7XHJcblx0ICB9XHJcbn1cclxuLmJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG4ud3JhcHBlcntcclxuXHR3aWR0aDo5MCU7XHJcblx0bWFyZ2luOjYlIGF1dG87XHJcbn1cclxuLmRlZmF1bHR0ZXh0e1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiA0JSBhdXRvO1xyXG59XHJcbi5pbnB1dGRpdntcclxuXHQvKm1hcmdpbjogMTAlIGF1dG8gNSU7Ki9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5waW5wdXR7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG9wYWNpdHk6IDQ4JTtcclxuICAgIHBhZGRpbmc6IDElIDAlIDElIDclO1xyXG59XHJcbi5jaW1ne1xyXG5cdG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuLm1haW57XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5sZWZ0IGltZ3tcclxuXHRib3JkZXItcmFkaXVzOjdweDtcclxufVxyXG4uaW5uZXJ7XHJcblx0cGFkZGluZzogMSUgMS41JTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5yaWdodHtcclxuXHRtYXJnaW4tbGVmdDogNSU7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRtYXJnaW4tdG9wOjElO1xyXG59XHJcbi5ydGV4dHtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Zm9udC13ZWlnaHQ6NjAwO1xyXG59XHJcbi5ydGV4dDF7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRjb2xvcjojRkU5ODA1O1xyXG5cdG1hcmdpbi10b3A6IDMlO1xyXG59XHJcbi5ydGV4dDJ7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxufVxyXG4uZXJyb3J7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMHB4KSB7XHJcblx0LnJ0ZXh0MntcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRcdG1hcmdpbi10b3A6IDMlO1xyXG5cdH1cclxuXHJcblx0LnJpZ2h0e1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDUlO1xyXG5cdFx0d2lkdGg6IDU1JTtcclxuXHRcdG1hcmdpbi10b3A6MSU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=caregiver-caregiver-module-es5.js.map