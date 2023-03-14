(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cgviewprofile1-cgviewprofile1-module"], {
    /***/
    "3fgg":
    /*!*********************************************************!*\
      !*** ./src/app/cgviewprofile1/cgviewprofile1.module.ts ***!
      \*********************************************************/

    /*! exports provided: Cgviewprofile1PageModule */

    /***/
    function fgg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cgviewprofile1PageModule", function () {
        return Cgviewprofile1PageModule;
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


      var _cgviewprofile1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cgviewprofile1-routing.module */
      "rESM");
      /* harmony import */


      var _cgviewprofile1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cgviewprofile1.page */
      "T5iX");

      var Cgviewprofile1PageModule = /*#__PURE__*/_createClass(function Cgviewprofile1PageModule() {
        _classCallCheck(this, Cgviewprofile1PageModule);
      });

      Cgviewprofile1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cgviewprofile1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Cgviewprofile1PageRoutingModule"]],
        declarations: [_cgviewprofile1_page__WEBPACK_IMPORTED_MODULE_6__["Cgviewprofile1Page"]]
      })], Cgviewprofile1PageModule);
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
    "DkXQ":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cgviewprofile1/cgviewprofile1.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function DkXQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col style=\"padding-top: 6px\" size=\"2\">\n        <div>\n          <ion-menu-button class=\"menuicon\"></ion-menu-button>\n        </div>\n      </ion-col>\n\n      <ion-col class=\"titleclass\" size=\"8\">\n        <ion-text class=\"ctitle\">Profile</ion-text>\n      </ion-col>\n\n      <ion-col\n        style=\"padding-top: 8px; padding-left: 20px\"\n        size=\"2\"\n        *ngIf=\"profiletype=='agency'\"\n      >\n        <div (click)=\"completeprofile()\">\n          <img src=\"assets/imgs/icons/edit.svg\" />\n        </div>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-buttons slot=\"start\" class=\"menubtn\">\n\t\t    <ion-menu-button class=\"menuicon\"></ion-menu-button>\n\t\t  </ion-buttons>\n\t  <ion-title class=\"ctitle\">Profile</ion-title>\n\t  <ion-buttons slot=\"end\" class=\"plusbtn\" *ngIf=\"profiletype=='agency'\" (click)=\"completeprofile()\">\n\t\t  <img src=\"assets/imgs/icons/edit.svg\">\n\t\t</ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n  <ion-segment\n    id=\"segment\"\n    mode=\"ios\"\n    (ionChange)=\"segmentChanged($event)\"\n    #mySegment\n  >\n    <ion-segment-button mode=\"ios\" value=\"agency\">\n      <ion-label>Agency Profile</ion-label>\n    </ion-segment-button>\n    <ion-segment-button checked mode=\"ios\" value=\"caregiver\">\n      <ion-label>Caregivers Profile</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div *ngIf=\"profiletype=='agency'\">\n    <p style=\"font-size: 15px; text-align: center; width: 80%; margin: 5% auto\">\n      Need to change something in your profile? Edit your profile here\n    </p>\n\n    <div class=\"wrapper\">\n      <div class=\"main\">\n        <div class=\"inner\">\n          <div style=\"position: absolute; top: 10px; right: 10px\">\n            <div class=\"para\">Availbility</div>\n            <ion-toggle\n              (ionChange)=\"toggleChange($event)\"\n              class=\"ttgg\"\n              mode=\"ios\"\n              [checked]=\"availabilityStatus == 'Yes'\"\n            ></ion-toggle>\n          </div>\n\n          <div class=\"logodiv\">\n            <!-- <img src=\"assets/imgs/logo1.png\"> -->\n            <img src=\"{{picUrl}}\" />\n          </div>\n          <div class=\"text\">{{fname}} {{lname}}</div>\n          <div class=\"text2\">${{price}}/hr</div>\n          <div class=\"para\">{{about}}</div>\n        </div>\n      </div>\n\n      <div class=\"main2\">\n        <div class=\"contactdiv\">\n          <div class=\"icondiv\">\n            <img src=\"assets/imgs/icons/sms.svg\" />\n          </div>\n          <p>{{email}}</p>\n        </div>\n\n        <div class=\"contactdiv\">\n          <div class=\"icondiv\">\n            <img src=\"assets/imgs/icons/sendarrow.svg\" />\n          </div>\n          <p>{{address}}</p>\n        </div>\n\n        <div class=\"contactdiv\">\n          <div class=\"icondiv\">\n            <img src=\"assets/imgs/icons/phone.svg\" />\n          </div>\n          <p>{{mobilenumber}}</p>\n        </div>\n\n        <h6 style=\"font-size: 14px; font-weight: 500; margin-top: 15%\">\n          Bank Accout\n        </h6>\n        <div class=\"contactdiv\">\n          <div class=\"icondiv\">\n            <img src=\"assets/imgs/icons/bank.svg\" />\n          </div>\n          <p>{{bankname}}</p>\n        </div>\n        <div class=\"contactdiv\">\n          <div class=\"icondiv\">\n            <img src=\"assets/imgs/icons/accnum.svg\" />\n          </div>\n          <p>{{accountnumber}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"profiletype=='caregiver'\">\n    <div class=\"cwrapper\">\n      <div *ngFor=\"let care of caregiver\">\n        <div class=\"cmain\" (click)=\"gotoprofile(care)\">\n          <div class=\"cinner\">\n            <div class=\"left\">\n              <img src=\"{{care.profile}}\" width=\"145px\" height=\"135px\" />\n            </div>\n            <div class=\"right\">\n              <div class=\"rtext\">{{care.name}}</div>\n              <div class=\"rtext1\">${{care.price}}/hr</div>\n              <div class=\"rtext2\">{{care.about}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ionbutton\" (click)=\"gotocomplete()\">\n        <ion-button class=\"ib\">Add New</ion-button>\n      </div>\n      <!-- <div class=\"cmain\" (click)=\"gotoprofile()\">\n\t\t\t\t<div class=\"cinner\">\n\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t<img src=\"assets/imgs/caregiver.png\" width=\"145px\" height=\"135px\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t<div class=\"rtext\">Nancy Daniel</div>\n\t\t\t\t\t\t<div class=\"rtext1\">$10/hr</div>\n\t\t\t\t\t\t<div class=\"rtext2\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div> -->\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "T5iX":
    /*!*******************************************************!*\
      !*** ./src/app/cgviewprofile1/cgviewprofile1.page.ts ***!
      \*******************************************************/

    /*! exports provided: Cgviewprofile1Page */

    /***/
    function T5iX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cgviewprofile1Page", function () {
        return Cgviewprofile1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cgviewprofile1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cgviewprofile1.page.html */
      "DkXQ");
      /* harmony import */


      var _cgviewprofile1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cgviewprofile1.page.scss */
      "sr4I");
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

      var Cgviewprofile1Page = /*#__PURE__*/function () {
        function Cgviewprofile1Page(navCtrl, loading, rest) {
          _classCallCheck(this, Cgviewprofile1Page);

          this.navCtrl = navCtrl;
          this.loading = loading;
          this.rest = rest;
          this.picUrl = "assets/imgs/profilelogo.png";
          this.availabilityStatus = "No";
          this.error = {
            status: false,
            message: ""
          };
          this.caregiver = [];
        }

        _createClass(Cgviewprofile1Page, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userid = localStorage.getItem("uid");
            console.log("userid", this.userid);
            this.accountTypeId = localStorage.getItem("accountTypeId");
            console.log("accountTypeId", this.accountTypeId);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (this.profiletype) {
              if (this.profiletype === "agency") {
                this.mySegment.nativeElement.children[0].click();
                this.getprofiledata(this.userid);
              }

              if (this.profiletype === "caregiver") {
                this.mySegment.nativeElement.children[1].click();
                this.caregiverdata(this.userid);
              }
            } else {
              this.profiletype = "agency";
              this.mySegment.nativeElement.children[0].click();
            }
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            console.log("requestType value", ev.detail.value);
            var data = ev.detail.value;
            this.profiletype = data;

            if (ev.detail.value === "agency") {
              this.profiletype = "agency";
              this.getprofiledata(this.userid);
            }

            if (ev.detail.value === "caregiver") {
              this.profiletype = "caregiver";
              this.caregiverdata(this.userid);
            }

            localStorage.setItem("profiletype", this.profiletype);
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
          key: "caregiverdata",
          value: function caregiverdata(userid) {
            var _this3 = this;

            this.caregiver = [];
            console.log("....................");
            this.loading.loadershow();
            this.rest.sendRequest("get_agency_caregivers", {
              agencyId: userid
            }).subscribe(function (data) {
              console.log("get_agency_caregivers data::", data);

              if (data.status == "success") {
                console.log("suucesssss");

                _this3.loading.hideLoader();

                data.data.forEach(function (val) {
                  _this3.loading.hideLoader();

                  if (val.profile_picture == "" || val.profile_picture == null) {
                    _this3.profilepicture = "assets/imgs/profilelogo.png";
                  } else {
                    _this3.profilepicture = val.profile_picture;
                  }

                  var Obj = {
                    agencyid: val.agency_id,
                    caregiverid: val.agency_caregiver_id,
                    profile: _this3.profilepicture,
                    name: val.name,
                    price: val.per_hour_rate,
                    about: val.about
                  };

                  _this3.caregiver.push(Obj);
                });
                console.log("caregiver array", _this3.caregiver);
              }

              if (data.status == "error") {
                _this3.loading.hideLoader();

                console.log("signup request data:", data.status);
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
        }, {
          key: "completeprofile",
          value: function completeprofile() {
            this.navCtrl.navigateForward("/cgprofile1");
          }
        }, {
          key: "gotocomplete",
          value: function gotocomplete() {
            this.navCtrl.navigateForward("/cgprofile2");
          }
        }, {
          key: "gotoprofile",
          value: function gotoprofile(id) {
            this.navCtrl.navigateForward(["/profile1", {
              caregiverid: id.caregiverid
            }]);
          }
        }, {
          key: "toggleChange",
          value: function toggleChange(event) {
            var _this4 = this;

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

              if (res.status == "success") {
                _this4.loading.presentToast(res.data);
              }

              if (res.status == "error") {
                _this4.loading.presentToast(res.message);
              }
            });
          }
        }]);

        return Cgviewprofile1Page;
      }();

      Cgviewprofile1Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }];
      };

      Cgviewprofile1Page.propDecorators = {
        mySegment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["mySegment", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }]
      };
      Cgviewprofile1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-cgviewprofile1",
        template: _raw_loader_cgviewprofile1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cgviewprofile1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Cgviewprofile1Page);
      /***/
    },

    /***/
    "rESM":
    /*!*****************************************************************!*\
      !*** ./src/app/cgviewprofile1/cgviewprofile1-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: Cgviewprofile1PageRoutingModule */

    /***/
    function rESM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cgviewprofile1PageRoutingModule", function () {
        return Cgviewprofile1PageRoutingModule;
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


      var _cgviewprofile1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cgviewprofile1.page */
      "T5iX");

      var routes = [{
        path: '',
        component: _cgviewprofile1_page__WEBPACK_IMPORTED_MODULE_3__["Cgviewprofile1Page"]
      }];

      var Cgviewprofile1PageRoutingModule = /*#__PURE__*/_createClass(function Cgviewprofile1PageRoutingModule() {
        _classCallCheck(this, Cgviewprofile1PageRoutingModule);
      });

      Cgviewprofile1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Cgviewprofile1PageRoutingModule);
      /***/
    },

    /***/
    "sr4I":
    /*!*********************************************************!*\
      !*** ./src/app/cgviewprofile1/cgviewprofile1.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function sr4I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.menubtn {\n  margin-left: 3%;\n}\n\n.plusbtn {\n  margin-right: 3%;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 30% auto;\n}\n\nion-segment {\n  padding: 5px 5px;\n  border-radius: 10px;\n  margin-top: 10px;\n  --background: #EBEBEB;\n  width: 85%;\n  margin: 5% auto;\n}\n\nion-segment ion-segment-button {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 10px;\n  --background-checked: #fe9805;\n  --indicator-color: transparent !important;\n  --color: #00000;\n  --color-checked: #fff;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n  position: relative;\n}\n\n.inner {\n  text-align: center;\n  width: 80%;\n  margin: 0% auto;\n}\n\n.logodiv {\n  position: absolute;\n  top: 40px;\n  left: 115px;\n}\n\n.logodiv img {\n  border-radius: 90px;\n  width: 140px;\n  height: 140px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.text {\n  padding-top: 25%;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n  margin-left: 3%;\n}\n\n.text2 {\n  color: #FE9805;\n  font-size: 14px;\n  font-style: italic;\n}\n\n.para {\n  color: #000000;\n  font-size: 14px;\n  padding: 4% 0%;\n}\n\n.main2 {\n  width: 60%;\n  margin: 10% auto;\n}\n\n.contactdiv {\n  display: flex;\n  margin-top: 10%;\n}\n\n.contactdiv p {\n  margin: 0px;\n  padding-left: 10%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 25%;\n}\n\n.ib {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 80%;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10%;\n  height: 55px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n\n@media only screen and (max-width: 414px) {\n  .wrapper {\n    width: 90%;\n    margin: 25% auto;\n  }\n\n  .cwrapper {\n    width: 90%;\n    margin: 6% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: -75px;\n    left: 120px;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .wrapper {\n    width: 90%;\n    margin: 27% auto;\n  }\n\n  .cwrapper {\n    width: 90%;\n    margin: 6% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 25px;\n    left: 115px;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  .wrapper {\n    width: 90%;\n    margin: 27% auto;\n  }\n\n  .cwrapper {\n    width: 90%;\n    margin: 6% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: -80px;\n    left: 100px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .cwrapper {\n    width: 90%;\n    margin: 6% auto;\n  }\n\n  .rtext2 {\n    font-size: 12px;\n    font-weight: 400;\n    margin-top: 3%;\n  }\n\n  .right {\n    margin-left: 5%;\n    width: 55%;\n    margin-top: 1%;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: -70px;\n    left: 85px;\n  }\n\n  .logodiv img {\n    border-radius: 90px;\n    width: 120px;\n    height: 120px;\n  }\n\n  .text {\n    padding-top: 25%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {\n  .cwrapper {\n    width: 90%;\n    margin: 6% auto;\n  }\n\n  .wrapper {\n    width: 90%;\n    margin: 18% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 70px;\n    left: 310px;\n  }\n\n  .text {\n    padding-top: 17%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n\n/*/////////caregiver////////*/\n\n.cwrapper {\n  width: 90%;\n  margin: 6% auto;\n}\n\n.cmain {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.left img {\n  border-radius: 7px;\n}\n\n.cinner {\n  padding: 1% 1.5%;\n  display: flex;\n}\n\n.right {\n  margin-left: 5%;\n  width: 50%;\n  margin-top: 1%;\n}\n\n.rtext {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.rtext1 {\n  font-size: 14px;\n  font-weight: 400;\n  color: #FE9805;\n  margin-top: 3%;\n}\n\n.rtext2 {\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nndmlld3Byb2ZpbGUxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUFBO0VBQ0MsZUFBQTtBQUdEOztBQURBO0VBQ0MsZ0JBQUE7QUFJRDs7QUFGQTtFQUNFLFVBQUE7QUFLRjs7QUFGQTtFQUVFLGVBQUE7RUFDRSxnQkFBQTtBQUlKOztBQUZBO0VBQ0Msa0JBQUE7RUFBb0IsZ0JBQUE7QUFNckI7O0FBSEM7RUFDQyxrQkFBQTtFQUFvQixpQkFBQTtBQU90Qjs7QUFMQztFQUNDLHFCQUFBO0VBQ0EsY0FBQTtBQU9GOztBQUpBO0VBQ0MsVUFBQTtFQUNDLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBUUY7O0FBUEU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFOQTtFQUNDLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVNEOztBQVBBO0VBQ0Msa0JBQUE7RUFDRyxVQUFBO0VBQ0EsZUFBQTtBQVVKOztBQVJBO0VBQ0Msa0JBQUE7RUFDRyxTQUFBO0VBQ0EsV0FBQTtBQVdKOztBQVRBO0VBQ0MsbUJBQUE7RUFDRyxZQUFBO0VBQ0EsYUFBQTtFQUNILDRDQUFBO0FBWUQ7O0FBVkE7RUFDQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBYUQ7O0FBWEE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBY0Q7O0FBWkE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFlRDs7QUFaQTtFQUNDLFVBQUE7RUFDQSxnQkFBQTtBQWVEOztBQWJBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7QUFnQkQ7O0FBZEE7RUFDQyxXQUFBO0VBQ0csaUJBQUE7QUFpQko7O0FBZEE7RUFFRSxrQkFBQTtFQUNELFdBQUE7RUFDQSxlQUFBO0FBZ0JEOztBQWRBO0VBR0MsWUFBQTtFQUNDLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDRCxlQUFBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQyxtQkFBQTtFQUNELHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFlRjs7QUFWQTtFQUNDO0lBQ0MsVUFBQTtJQUNDLGdCQUFBO0VBYUQ7O0VBWEQ7SUFDQyxVQUFBO0lBQ0EsZUFBQTtFQWNBOztFQVpEO0lBQ0Msa0JBQUE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtFQWVGO0FBQ0Y7O0FBWkE7RUFDQztJQUNDLFVBQUE7SUFDQyxnQkFBQTtFQWNEOztFQVpEO0lBQ0MsVUFBQTtJQUNBLGVBQUE7RUFlQTs7RUFiRDtJQUNDLGtCQUFBO0lBQ0UsU0FBQTtJQUNBLFdBQUE7RUFnQkY7QUFDRjs7QUFiQTtFQUNDO0lBQ0MsVUFBQTtJQUNDLGdCQUFBO0VBZUQ7O0VBYkQ7SUFDQyxVQUFBO0lBQ0EsZUFBQTtFQWdCQTs7RUFkRDtJQUNDLGtCQUFBO0lBQ0UsVUFBQTtJQUNBLFdBQUE7RUFpQkY7QUFDRjs7QUFiQTtFQUNDO0lBQ0MsVUFBQTtJQUNBLGVBQUE7RUFlQTs7RUFiRDtJQUNDLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUFnQkE7O0VBYkQ7SUFDQyxlQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUFnQkE7O0VBZEQ7SUFDQyxrQkFBQTtJQUNFLFVBQUE7SUFDQSxVQUFBO0VBaUJGOztFQWZEO0lBQ0MsbUJBQUE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQWtCRjs7RUFoQkQ7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFtQkM7QUFDRjs7QUFiQTtFQUdHO0lBQ0EsVUFBQTtJQUNBLGVBQUE7RUFhRDs7RUFYQTtJQUNBLFVBQUE7SUFDRSxnQkFBQTtFQWNGOztFQVpBO0lBQ0Esa0JBQUE7SUFDRSxTQUFBO0lBQ0EsV0FBQTtFQWVGOztFQWJEO0lBQ0csZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBZ0JGO0FBQ0Y7O0FBYkEsNkJBQUE7O0FBQ0E7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQWVEOztBQWJBO0VBQ0MsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQWdCRDs7QUFkQTtFQUNDLGtCQUFBO0FBaUJEOztBQWZBO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0FBa0JEOztBQWhCQTtFQUNDLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQW1CRDs7QUFqQkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUFvQkQ7O0FBbEJBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFxQkQ7O0FBbkJBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXNCRCIsImZpbGUiOiJjZ3ZpZXdwcm9maWxlMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgcGFkZGluZzoxJSAwJTtcclxufVxyXG4ubWVudWljb257XHJcblx0Y29sb3I6IzAwMDtcclxufVxyXG4ubWVudWJ0bntcclxuXHRtYXJnaW4tbGVmdDozJTtcclxufVxyXG4ucGx1c2J0bntcclxuXHRtYXJnaW4tcmlnaHQ6MyU7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuXHQuaGVhZEJnIHtcclxuXHRcdC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuXHRcdHBhZGRpbmc6MyUgMCU7XHJcblx0ICB9XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDMwJSBhdXRvO1xyXG59XHJcbmlvbi1zZWdtZW50IHtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAtLWJhY2tncm91bmQ6ICNFQkVCRUI7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAtLW1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZlOTgwNTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogIzAwMDAwO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuLm1haW57XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW5uZXJ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCUgYXV0bztcclxufVxyXG4ubG9nb2RpdntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBsZWZ0OiAxMTVweDtcclxufVxyXG4ubG9nb2RpdiBpbWd7XHJcblx0Ym9yZGVyLXJhZGl1czogOTBweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcblx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbn1cclxuLnRleHR7XHJcblx0cGFkZGluZy10b3A6IDI1JTtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZToyMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG4udGV4dDJ7XHJcblx0Y29sb3I6I0ZFOTgwNTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbi5wYXJhe1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHBhZGRpbmc6IDQlIDAlO1xyXG59XHJcblxyXG4ubWFpbjJ7XHJcblx0d2lkdGg6NjAlO1xyXG5cdG1hcmdpbjogMTAlIGF1dG87XHJcbn1cclxuLmNvbnRhY3RkaXZ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmNvbnRhY3RkaXYgcHtcclxuXHRtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlXHJcbn1cclxuXHJcbi5pb25idXR0b25cclxue1x0XHJcbiBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAyNSU7XHJcbn1cclxuLmliXHJcbntcclxuXHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogI0ZFOTgwNTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gICAtLWJvcmRlci13aWR0aDogMXB4OyBcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpIHtcclxuXHQud3JhcHBlcntcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0ICBtYXJnaW46IDI1JSBhdXRvO1xyXG5cdH1cclxuXHQuY3dyYXBwZXJ7XHJcblx0XHR3aWR0aDo5MCU7XHJcblx0XHRtYXJnaW46NiUgYXV0bztcclxuXHR9XHJcblx0LmxvZ29kaXZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC03NXB4O1xyXG4gICAgbGVmdDogMTIwcHg7XHJcblx0fVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIHtcclxuXHQud3JhcHBlcntcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0ICBtYXJnaW46IDI3JSBhdXRvO1xyXG5cdH1cclxuXHQuY3dyYXBwZXJ7XHJcblx0XHR3aWR0aDo5MCU7XHJcblx0XHRtYXJnaW46NiUgYXV0bztcclxuXHR9XHJcblx0LmxvZ29kaXZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1cHg7XHJcbiAgICBsZWZ0OiAxMTVweDtcclxuXHR9XHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkge1xyXG5cdC53cmFwcGVye1xyXG5cdFx0d2lkdGg6IDkwJTtcclxuXHQgIG1hcmdpbjogMjclIGF1dG87XHJcblx0fVxyXG5cdC5jd3JhcHBlcntcclxuXHRcdHdpZHRoOjkwJTtcclxuXHRcdG1hcmdpbjo2JSBhdXRvO1xyXG5cdH1cclxuXHQubG9nb2RpdntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTgwcHg7XHJcbiAgICBsZWZ0OiAxMDBweDtcclxuXHR9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuXHQuY3dyYXBwZXJ7XHJcblx0XHR3aWR0aDo5MCU7XHJcblx0XHRtYXJnaW46NiUgYXV0bztcclxuXHR9XHJcblx0LnJ0ZXh0MntcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRcdG1hcmdpbi10b3A6IDMlO1xyXG5cdH1cclxuXHJcblx0LnJpZ2h0e1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDUlO1xyXG5cdFx0d2lkdGg6IDU1JTtcclxuXHRcdG1hcmdpbi10b3A6MSU7XHJcblx0fVxyXG5cdC5sb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNzBweDtcclxuICAgIGxlZnQ6IDg1cHg7XHJcblx0fVxyXG5cdC5sb2dvZGl2IGltZ3tcclxuXHRcdGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG5cdH1cclxuXHQudGV4dHtcclxuXHRwYWRkaW5nLXRvcDogMjUlO1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOjIwcHhcclxufVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpIHtcclxuICBcdC5jd3JhcHBlcntcclxuXHRcdFx0d2lkdGg6OTAlO1xyXG5cdFx0XHRtYXJnaW46NiUgYXV0bztcclxuXHRcdH1cclxuICAud3JhcHBlcntcclxuXHRcdHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDE4JSBhdXRvO1xyXG5cdH1cclxuICAubG9nb2RpdntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNzBweDtcclxuICAgIGxlZnQ6IDMxMHB4O1xyXG5cdH1cclxuXHQudGV4dHtcclxuICAgIHBhZGRpbmctdG9wOiAxNyU7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG5cdH1cclxufVxyXG5cclxuLyovLy8vLy8vLy9jYXJlZ2l2ZXIvLy8vLy8vLyovXHJcbi5jd3JhcHBlcntcclxuXHR3aWR0aDo5MCU7XHJcblx0bWFyZ2luOjYlIGF1dG87XHJcbn1cclxuLmNtYWlue1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweDtcclxuXHRtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4ubGVmdCBpbWd7XHJcblx0Ym9yZGVyLXJhZGl1czo3cHg7XHJcbn1cclxuLmNpbm5lcntcclxuXHRwYWRkaW5nOiAxJSAxLjUlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnJpZ2h0e1xyXG5cdG1hcmdpbi1sZWZ0OiA1JTtcclxuXHR3aWR0aDogNTAlO1xyXG5cdG1hcmdpbi10b3A6MSU7XHJcbn1cclxuLnJ0ZXh0e1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LXdlaWdodDo2MDA7XHJcbn1cclxuLnJ0ZXh0MXtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdGNvbG9yOiNGRTk4MDU7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcbn1cclxuLnJ0ZXh0MntcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdG1hcmdpbi10b3A6IDMlO1xyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=cgviewprofile1-cgviewprofile1-module-es5.js.map