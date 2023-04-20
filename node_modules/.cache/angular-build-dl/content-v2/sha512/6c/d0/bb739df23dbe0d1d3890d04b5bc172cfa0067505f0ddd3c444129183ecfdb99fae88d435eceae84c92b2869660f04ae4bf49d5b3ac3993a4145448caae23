(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cgviewprofile-cgviewprofile-module"], {
    /***/
    "1bxe":
    /*!*******************************************************!*\
      !*** ./src/app/cgviewprofile/cgviewprofile.module.ts ***!
      \*******************************************************/

    /*! exports provided: CgviewprofilePageModule */

    /***/
    function bxe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CgviewprofilePageModule", function () {
        return CgviewprofilePageModule;
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


      var _cgviewprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cgviewprofile-routing.module */
      "sfkz");
      /* harmony import */


      var _cgviewprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cgviewprofile.page */
      "OYGV");

      var CgviewprofilePageModule = /*#__PURE__*/_createClass(function CgviewprofilePageModule() {
        _classCallCheck(this, CgviewprofilePageModule);
      });

      CgviewprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cgviewprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["CgviewprofilePageRoutingModule"]],
        declarations: [_cgviewprofile_page__WEBPACK_IMPORTED_MODULE_6__["CgviewprofilePage"]]
      })], CgviewprofilePageModule);
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
    "A6nx":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cgviewprofile/cgviewprofile.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function A6nx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col style=\"padding-top: 6px\" size=\"2\">\r\n        <div>\r\n          <ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"8\">\r\n        <ion-text class=\"ctitle\">Profile</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col style=\"padding-top: 8px; padding-left: 20px\" size=\"2\">\r\n        <div (click)=\"completeprofile()\">\r\n          <img src=\"assets/imgs/icons/edit.svg\" />\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-buttons slot=\"start\" class=\"menubtn\">\r\n\t\t    <ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n\t\t  </ion-buttons>\r\n\t  <ion-title class=\"ctitle\">Profile</ion-title>\r\n\t  <ion-buttons slot=\"end\" class=\"plusbtn\" (click)=\"completeprofile()\">\r\n\t\t  <img src=\"assets/imgs/icons/edit.svg\">\r\n\t\t</ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n  <p style=\"font-size: 15px; text-align: center; width: 80%; margin: 5% auto\">\r\n    Need to change something in your profile? Edit your profile here\r\n  </p>\r\n\r\n  <div class=\"wrapper\">\r\n    <div class=\"main\">\r\n      <div class=\"inner\">\r\n        <div style=\"position: absolute; top: 10px; right: 10px\">\r\n          <div class=\"para\">Availbility</div>\r\n          <ion-toggle\r\n            (ionChange)=\"toggleChange($event)\"\r\n            class=\"ttgg\"\r\n            mode=\"ios\"\r\n            [checked]=\"availabilityStatus == 'Yes'\"\r\n          ></ion-toggle>\r\n        </div>\r\n        <div class=\"logodiv\">\r\n          <!-- <img src=\"assets/imgs/logo1.png\"> -->\r\n          <img src=\"{{picUrl}}\" />\r\n        </div>\r\n        <div class=\"text\">{{fname}} {{lname}}</div>\r\n        <div class=\"text2\" *ngIf=\"accountTypeId!=3\">${{price}}/hr</div>\r\n        <div class=\"para\">{{about}}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"main2\">\r\n      <div class=\"contactdiv\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/imgs/icons/sms.svg\" />\r\n        </div>\r\n        <p>{{email}}</p>\r\n      </div>\r\n\r\n      <div class=\"contactdiv\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/imgs/icons/sendarrow.svg\" />\r\n        </div>\r\n        <p>{{address}}</p>\r\n      </div>\r\n\r\n      <div class=\"contactdiv\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/imgs/icons/phone.svg\" />\r\n        </div>\r\n        <p>{{mobilenumber}}</p>\r\n      </div>\r\n\r\n      <div *ngIf=\"accountTypeId!=3\">\r\n        <h6 style=\"font-size: 14px; font-weight: 500; margin-top: 15%\">\r\n          Bank Accout\r\n        </h6>\r\n        <div class=\"contactdiv\">\r\n          <div class=\"icondiv\">\r\n            <img src=\"assets/imgs/icons/bank.svg\" />\r\n          </div>\r\n          <p>{{bankname}}</p>\r\n        </div>\r\n        <div class=\"contactdiv\">\r\n          <div class=\"icondiv\">\r\n            <img src=\"assets/imgs/icons/accnum.svg\" />\r\n          </div>\r\n          <p>{{accountnumber}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "OYGV":
    /*!*****************************************************!*\
      !*** ./src/app/cgviewprofile/cgviewprofile.page.ts ***!
      \*****************************************************/

    /*! exports provided: CgviewprofilePage */

    /***/
    function OYGV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CgviewprofilePage", function () {
        return CgviewprofilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cgviewprofile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cgviewprofile.page.html */
      "A6nx");
      /* harmony import */


      var _cgviewprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cgviewprofile.page.scss */
      "iGTE");
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

      var CgviewprofilePage = /*#__PURE__*/function () {
        function CgviewprofilePage(navCtrl, menuCtrl, loading, rest) {
          _classCallCheck(this, CgviewprofilePage);

          this.navCtrl = navCtrl;
          this.menuCtrl = menuCtrl;
          this.loading = loading;
          this.rest = rest;
          this.picUrl = "assets/imgs/profilelogo.png";
          this.error = {
            status: false,
            message: ""
          };
          this.availabilityStatus = "No";
        }

        _createClass(CgviewprofilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.userid = localStorage.getItem("uid");
            console.log("userid", this.userid);
            this.accountTypeId = localStorage.getItem("accountTypeId");
            console.log("accountTypeId", this.accountTypeId);
            this.getprofiledata(this.userid);
          }
        }, {
          key: "getprofiledata",
          value: function getprofiledata(userid) {
            var _this2 = this;

            this.loading.loadershow();
            this.rest.sendRequest("get_profile_details", {
              userId: userid
            }).subscribe(function (data) {
              console.log("get_profile_details data::", data);

              if (data.status == "success") {
                console.log("suucesssss");
                _this2.fname = data.data.first_name;
                _this2.lname = data.data.last_name;
                _this2.email = data.data.email;

                if (data.data.availability == "No" || data.data.availability == null) {
                  _this2.availabilityStatus = "No";
                } else {
                  _this2.availabilityStatus = "Yes";
                }

                if (data.data.profile_picture == "" || data.data.profile_picture == null) {
                  _this2.picUrl = "assets/imgs/profilelogo.png";
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
          key: "completeprofile",
          value: function completeprofile() {
            this.navCtrl.navigateForward("/cgprofile");
          }
        }, {
          key: "gotoprofile",
          value: function gotoprofile() {
            this.navCtrl.navigateForward("/profile");
          }
        }, {
          key: "toggleChange",
          value: function toggleChange(event) {
            console.log(event.detail.checked);
            var val = "Yes";

            if (event.detail.checked) {
              val = "Yes";
            } else {
              val = "No";
            }

            var user = JSON.parse(localStorage.getItem("user"));
            console.log("userrrrrrrrrrrrrr", user.email);
            var del = {
              email: user.email,
              users_id: user.users_id,
              availability: val
            };
            console.log(del);
            this.rest.sendRequest("availability_update", del).subscribe(function (res) {
              console.log("report user result==", res);

              if (res.status == "success") {// this.loading.presentToast(res.data);
              }

              if (res.status == "error") {// this.loading.presentToast(res.message);
              }
            });
          }
        }]);

        return CgviewprofilePage;
      }();

      CgviewprofilePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }];
      };

      CgviewprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-cgviewprofile",
        template: _raw_loader_cgviewprofile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cgviewprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CgviewprofilePage);
      /***/
    },

    /***/
    "iGTE":
    /*!*******************************************************!*\
      !*** ./src/app/cgviewprofile/cgviewprofile.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function iGTE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.menubtn {\n  margin-left: 3%;\n}\n\n.plusbtn {\n  margin-right: 3%;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 30% auto;\n}\n\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n  position: relative;\n}\n\n.inner {\n  text-align: center;\n  width: 80%;\n  margin: 0% auto;\n}\n\n.logodiv {\n  position: absolute;\n  top: 40px;\n  left: 115px;\n}\n\n.logodiv img {\n  border-radius: 90px;\n  width: 140px;\n  height: 140px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.text {\n  padding-top: 25%;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.text2 {\n  color: #FE9805;\n  font-size: 14px;\n  font-style: italic;\n}\n\n.para {\n  color: #000000;\n  font-size: 14px;\n  padding: 4% 0%;\n}\n\n.main2 {\n  width: 60%;\n  margin: 10% auto;\n}\n\n.contactdiv {\n  display: flex;\n  margin-top: 10%;\n}\n\n.contactdiv p {\n  margin: 0px;\n  padding-left: 10%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 25%;\n}\n\n.ib {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 80%;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10%;\n  height: 55px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n\n@media only screen and (max-width: 414px) {\n  .wrapper {\n    width: 90%;\n    margin: 25% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: -75px;\n    left: 110px;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .wrapper {\n    width: 90%;\n    margin: 27% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 25px;\n    left: 115px;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  .wrapper {\n    width: 90%;\n    margin: 27% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: -80px;\n    left: 100px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .rtext2 {\n    font-size: 12px;\n    font-weight: 400;\n    margin-top: 3%;\n  }\n\n  .right {\n    margin-left: 5%;\n    width: 55%;\n    margin-top: 1%;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: -75px;\n    left: 75px;\n  }\n\n  .text {\n    padding-top: 30%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {\n  .wrapper {\n    width: 90%;\n    margin: 18% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 70px;\n    left: 310px;\n  }\n\n  .text {\n    padding-top: 17%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n\n/*/////////caregiver////////*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNndmlld3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDQyxXQUFBO0FBRUQ7O0FBQUE7RUFDQyxlQUFBO0FBR0Q7O0FBREE7RUFDQyxnQkFBQTtBQUlEOztBQUZBO0VBQ0UsVUFBQTtBQUtGOztBQUZBO0VBRUUsZUFBQTtFQUNFLGdCQUFBO0FBSUo7O0FBRkE7RUFDQyxrQkFBQTtFQUFvQixnQkFBQTtBQU1yQjs7QUFIQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBT3RCOztBQUxDO0VBQ0MscUJBQUE7RUFDQSxjQUFBO0FBT0Y7O0FBSkE7RUFDRSxxQkFBQTtBQU9GOztBQUxBO0VBQ0MsVUFBQTtFQUNDLGdCQUFBO0FBUUY7O0FBTEE7RUFDQyxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFRRDs7QUFOQTtFQUNDLGtCQUFBO0VBQ0csVUFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUNDLGtCQUFBO0VBQ0csU0FBQTtFQUNBLFdBQUE7QUFVSjs7QUFSQTtFQUNDLG1CQUFBO0VBQ0csWUFBQTtFQUNBLGFBQUE7RUFDSCw0Q0FBQTtBQVdEOztBQVRBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBWUQ7O0FBVkE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBYUQ7O0FBWEE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFjRDs7QUFYQTtFQUNDLFVBQUE7RUFDQSxnQkFBQTtBQWNEOztBQVpBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7QUFlRDs7QUFiQTtFQUNDLFdBQUE7RUFDRyxpQkFBQTtBQWdCSjs7QUFiQTtFQUVFLGtCQUFBO0VBQ0QsV0FBQTtFQUNBLGVBQUE7QUFlRDs7QUFiQTtFQUdDLFlBQUE7RUFDQyxxQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0QsZUFBQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0MsbUJBQUE7RUFDRCxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBY0Y7O0FBVEE7RUFDQztJQUNDLFVBQUE7SUFDQyxnQkFBQTtFQVlEOztFQVREO0lBQ0Msa0JBQUE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtFQVlGO0FBQ0Y7O0FBVEE7RUFDQztJQUNDLFVBQUE7SUFDQyxnQkFBQTtFQVdEOztFQVJEO0lBQ0Msa0JBQUE7SUFDRSxTQUFBO0lBQ0EsV0FBQTtFQVdGO0FBQ0Y7O0FBUkE7RUFDQztJQUNDLFVBQUE7SUFDQyxnQkFBQTtFQVVEOztFQVBEO0lBQ0Msa0JBQUE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtFQVVGO0FBQ0Y7O0FBTkE7RUFFQztJQUNDLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUFPQTs7RUFKRDtJQUNDLGVBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtFQU9BOztFQUxEO0lBQ0Msa0JBQUE7SUFDRSxVQUFBO0lBQ0EsVUFBQTtFQVFGOztFQU5EO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBU0M7QUFDRjs7QUFIQTtFQUlFO0lBQ0EsVUFBQTtJQUNFLGdCQUFBO0VBRUY7O0VBQUE7SUFDQSxrQkFBQTtJQUNFLFNBQUE7SUFDQSxXQUFBO0VBR0Y7O0VBREQ7SUFDRyxnQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFJRjtBQUNGOztBQURBLDZCQUFBIiwiZmlsZSI6ImNndmlld3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6MSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuLm1lbnVidG57XHJcblx0bWFyZ2luLWxlZnQ6MyU7XHJcbn1cclxuLnBsdXNidG57XHJcblx0bWFyZ2luLXJpZ2h0OjMlO1xyXG59XHJcbi5iYWNrU3ZnIHtcclxuICBmaWxsOiAjMzMzO1xyXG59XHJcblxyXG4uY3RpdGxle1xyXG5cdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50aXRsZWNsYXNze1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4uaW9ze1xyXG5cdC50aXRsZWNsYXNze1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTFweDtcclxuXHR9XHJcblx0LmhlYWRCZyB7XHJcblx0XHQtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcblx0XHRwYWRkaW5nOjMlIDAlO1xyXG5cdCAgfVxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDMwJSBhdXRvO1xyXG59XHJcblxyXG4ubWFpbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5pbm5lcntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwJSBhdXRvO1xyXG59XHJcbi5sb2dvZGl2e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGxlZnQ6IDExNXB4O1xyXG59XHJcbi5sb2dvZGl2IGltZ3tcclxuXHRib3JkZXItcmFkaXVzOiA5MHB4O1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxufVxyXG4udGV4dHtcclxuXHRwYWRkaW5nLXRvcDogMjUlO1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOjIwcHhcclxufVxyXG4udGV4dDJ7XHJcblx0Y29sb3I6I0ZFOTgwNTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbi5wYXJhe1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHBhZGRpbmc6IDQlIDAlO1xyXG59XHJcblxyXG4ubWFpbjJ7XHJcblx0d2lkdGg6NjAlO1xyXG5cdG1hcmdpbjogMTAlIGF1dG87XHJcbn1cclxuLmNvbnRhY3RkaXZ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmNvbnRhY3RkaXYgcHtcclxuXHRtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG59XHJcblxyXG4uaW9uYnV0dG9uXHJcbntcdFxyXG4gXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLXRvcDogMjUlO1xyXG59XHJcbi5pYlxyXG57XHJcblxyXG5cdGNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6ICNGRTk4MDU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogODAlO1xyXG4gZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gIGhlaWdodDogNTVweDtcclxuICAgLS1ib3JkZXItd2lkdGg6IDFweDsgXHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNHB4KSB7XHJcblx0LndyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdCAgbWFyZ2luOiAyNSUgYXV0bztcclxuXHR9XHJcblx0XHJcblx0LmxvZ29kaXZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC03NXB4O1xyXG4gICAgbGVmdDogMTEwcHg7XHJcblx0fVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIHtcclxuXHQud3JhcHBlcntcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0ICBtYXJnaW46IDI3JSBhdXRvO1xyXG5cdH1cclxuXHRcclxuXHQubG9nb2RpdntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjVweDtcclxuICAgIGxlZnQ6IDExNXB4O1xyXG5cdH1cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KSB7XHJcblx0LndyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdCAgbWFyZ2luOiAyNyUgYXV0bztcclxuXHR9XHJcblx0XHJcblx0LmxvZ29kaXZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC04MHB4O1xyXG4gICAgbGVmdDogMTAwcHg7XHJcblx0fVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMHB4KSB7XHJcblx0XHJcblx0LnJ0ZXh0MntcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRcdG1hcmdpbi10b3A6IDMlO1xyXG5cdH1cclxuXHJcblx0LnJpZ2h0e1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDUlO1xyXG5cdFx0d2lkdGg6IDU1JTtcclxuXHRcdG1hcmdpbi10b3A6MSU7XHJcblx0fVxyXG5cdC5sb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNzVweDtcclxuICAgIGxlZnQ6IDc1cHg7XHJcblx0fVxyXG5cdC50ZXh0e1xyXG5cdHBhZGRpbmctdG9wOiAzMCU7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6MjBweFxyXG59XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xyXG4gIFx0XHJcbiAgLndyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxOCUgYXV0bztcclxuXHR9XHJcbiAgLmxvZ29kaXZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDcwcHg7XHJcbiAgICBsZWZ0OiAzMTBweDtcclxuXHR9XHJcblx0LnRleHR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTclO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHR9XHJcbn1cclxuXHJcbi8qLy8vLy8vLy8vY2FyZWdpdmVyLy8vLy8vLy8qL1xyXG4iXX0= */";
      /***/
    },

    /***/
    "sfkz":
    /*!***************************************************************!*\
      !*** ./src/app/cgviewprofile/cgviewprofile-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: CgviewprofilePageRoutingModule */

    /***/
    function sfkz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CgviewprofilePageRoutingModule", function () {
        return CgviewprofilePageRoutingModule;
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


      var _cgviewprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cgviewprofile.page */
      "OYGV");

      var routes = [{
        path: '',
        component: _cgviewprofile_page__WEBPACK_IMPORTED_MODULE_3__["CgviewprofilePage"]
      }];

      var CgviewprofilePageRoutingModule = /*#__PURE__*/_createClass(function CgviewprofilePageRoutingModule() {
        _classCallCheck(this, CgviewprofilePageRoutingModule);
      });

      CgviewprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CgviewprofilePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=cgviewprofile-cgviewprofile-module-es5.js.map