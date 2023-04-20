(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

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


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t<ion-toolbar class=\"headBgGlobal\">\r\n\t\t<ion-row>\r\n\t\t\t<ion-col class=\"backbtn\" size=\"2\">\r\n\t\t\t  <div>\r\n\t\t\t\t<img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t\t\t  </div>\r\n\t\t\t</ion-col>\r\n\t  \r\n\t\t\t<ion-col class=\"titleclass\" size=\"8\">\r\n\t\t\t  <ion-text class=\"ctitle\">Profile</ion-text>\r\n\t\t\t</ion-col>\r\n\t  \r\n\t\t\t<ion-col size=\"2\">\r\n\t  \r\n\t\t\t</ion-col>\r\n\t\t  </ion-row>\r\n\t  <!-- <ion-buttons slot=\"start\" class=\"backbtn\">\r\n\t    <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t  </ion-buttons>\r\n\t  <ion-title class=\"ctitle\">Profile</ion-title> -->\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\t<ion-segment\r\n      id=\"segment\"\r\n      mode=\"ios\"\r\n      (ionChange)=\"segmentChanged($event)\"\r\n      #mySegment>\r\n    <ion-segment-button mode=\"ios\" value=\"child\">\r\n      <ion-label>Child</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button checked mode=\"ios\" value=\"parent\">\r\n      <ion-label>Parent</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <div *ngIf=\"requestsType=='child'\">\r\n\t  <div class=\"wrapper\">\r\n\t\t\t<div class=\"main\" (click)=\"gotoprofile()\">\r\n\t\t\t\t<div class=\"inner\">\r\n\t\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t\t<img src=\"{{defaultProfile}}\" width=\"145px\" height=\"135px\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t\t<div class=\"rtext\">{{childname}},<span style=\"font-weight:400;margin-left:3%;font-size:14px;color:#FE9805\">{{age}} years old</span></div>\r\n\t\t\t\t\t\t<div class=\"rtext1\">{{diagnosis}}</div>\r\n\t\t\t\t\t\t<div class=\"rtext2\">{{notes}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"main1\">\r\n\t\t\t<div class=\"inner1\">\r\n\t\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Allergies</h6>\r\n\t\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let all of allergyarr\">\r\n\t\t\t\t\t<ion-button class=\"btn\">{{all.allergy}}</ion-button>\r\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">{{all.allergy}}</ion-button> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\t\r\n\t\t</div>\r\n\r\n\t\t<div class=\"main2\">\r\n\t\t\t<div class=\"inner1\">\r\n\t\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Medications Alarms</h6>\r\n\t\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t<div class=\"medicationdiv\" *ngFor=\"let med of medicationsarr\">\r\n\t\t\t\t\t<div class=\"medication1\">\r\n\t\t\t\t\t\t<div class=\"mtext\">{{med.medicationname}}</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">{{med.medicationtime}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class=\"medication2\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Medications 2</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">12:30 pm</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"medication3\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Medications 3</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">08:00 am</div>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\t\t\r\n\t\t</div>\r\n\r\n\t\t<div class=\"main1\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Eating Times</h6>\r\n\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t<div class=\"medicationdiv\"  *ngFor=\"let eat of foodarr\">\r\n\t\t\t\t\t<div class=\"medication1\">\r\n\t\t\t\t\t\t<div class=\"mtext\">{{eat.foodname}}</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">{{eat.eatingtime}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class=\"medication2\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Eating Time 2</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">12:30 pm</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"medication3\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Eating Time 3</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">08:00 am</div>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\t\r\n\t</div>\r\n\r\n\t<div class=\"main2\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Snack Times</h6>\r\n\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t<div class=\"medicationdiv\" *ngFor=\"let snack of snackarr\">\r\n\t\t\t\t\t<div class=\"medication1\">\r\n\t\t\t\t\t\t<div class=\"mtext\">{{snack.snackname}}</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">{{snack.snacktime}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class=\"medication2\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Snack Time 2</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">12:30 pm</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"medication3\">\r\n\t\t\t\t\t\t<div class=\"mtext\">Snack Time 3</div>\r\n\t\t\t\t\t\t<div class=\"mtext2\">08:00 am</div>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\t\r\n\t</div>\r\n\r\n\t<div class=\"main1\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Likes</h6>\r\n\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let like of likesarr\">\r\n\t\t\t\t\t<ion-button class=\"btn\">{{like.likes}}</ion-button>\r\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">Outdoor games</ion-button> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main2\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Dislikes</h6>\r\n\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let dislike of dislikesarr\">\r\n\t\t\t\t\t<ion-button class=\"btn\">{{dislike.dislikes}}</ion-button>\r\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">Outdoor games</ion-button> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main1\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Favorite activities</h6>\r\n\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t<div class=\"btndiv\" *ngFor=\"let fav of favouritearr\">\r\n\t\t\t\t\t<ion-button class=\"btn\">{{fav.favourite}}</ion-button>\r\n\t\t\t\t\t<!-- <ion-button class=\"btn1\">Outdoor games</ion-button> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main2\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Emergency phone numbers</h6>\r\n\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t<div class=\"calldiv\" *ngFor=\"let num of contactsarr\">\r\n\t\t\t\t\t<div class=\"contactdiv\">\r\n\t\t\t\t\t\t<div class=\"icondiv\">\r\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p>{{num.contact}}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class=\"contactdiv1\">\r\n\t\t\t\t\t\t<div class=\"icondiv\">\r\n\t\t\t\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p>+1 412 688 699</p>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main1\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Pediatrician</h6>\r\n\t\t\t<div class=\"para\">{{pediatrician}}</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main2\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Insurance information</h6>\r\n\t\t\t<div class=\"para\">{{insuranceinfo}}</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main1\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Special instructions</h6>\r\n\t\t\t<div class=\"para\">{{instruction}}</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class=\"main2\">\r\n\t\t<div class=\"inner1\">\r\n\t\t\t<h6 style=\"color:#FE9805;font-weight:500;font-size:14px;margin:0px\">Additional notes</h6>\r\n\t\t\t<div class=\"para\">{{notes}}</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\t\r\n  </div>\r\n\t\r\n\t<!-- -----------parent div ------------------------->\r\n\t<div *ngIf=\"requestsType=='parent'\">\r\n\t\t<div class=\"pwrapper\">\r\n\t\t\t<div class=\"pmain\">\r\n\t\t\t\t<div class=\"pinner\">\r\n\t\t\t\t\t<div class=\"plogodiv\">\r\n\t\t\t\t\t\t<img src=\"{{picUrl}}\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text\">{{fname}} {{lname}}</div>\r\n\t\t\t\t\t<div class=\"text2\">{{relationwithchild}}</div>\r\n\t\t\t\t\t<div class=\"ppara\">{{about}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"pmain2\">\r\n\t\t\t\t<div class=\"pcontactdiv\">\r\n\t\t\t\t\t<div class=\"picondiv\">\r\n\t\t\t\t\t\t<img src=\"assets/imgs/icons/sms.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p>{{email}}</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"pcontactdiv\">\r\n\t\t\t\t\t<div class=\"picondiv\">\r\n\t\t\t\t\t\t<img src=\"assets/imgs/icons/arrow.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p>{{address}}</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"pcontactdiv\">\r\n\t\t\t\t\t<div class=\"picondiv\">\r\n\t\t\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p>{{mobilenumber}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n\r\n</ion-content>\r\n";
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

      var Childprofile1PageModule = /*#__PURE__*/_createClass(function Childprofile1PageModule() {
        _classCallCheck(this, Childprofile1PageModule);
      });

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

      var Childprofile1PageRoutingModule = /*#__PURE__*/_createClass(function Childprofile1PageRoutingModule() {
        _classCallCheck(this, Childprofile1PageRoutingModule);
      });

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


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 10px;\n  padding-left: 18px;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 12px;\n  padding-left: 18px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\nion-segment {\n  padding: 5px 5px;\n  border-radius: 10px;\n  margin-top: 10px;\n  --background: #EBEBEB;\n  width: 85%;\n  margin: 5% auto;\n}\n\nion-segment ion-segment-button {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 10px;\n  --background-checked: #fe9805;\n  --indicator-color: transparent !important;\n  --color: #00000;\n  --color-checked: #fff;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.left img {\n  border-radius: 7px;\n}\n\n.inner {\n  padding: 2% 3%;\n  display: flex;\n}\n\n.right {\n  margin-left: 5%;\n  width: 50%;\n  margin-top: 1%;\n}\n\n.rtext {\n  font-size: 20px;\n  font-weight: bold;\n  color: #000000;\n}\n\n.rtext1 {\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 3%;\n  color: #FE9805;\n}\n\n.rtext2 {\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 4%;\n}\n\n.main1 {\n  background: #fff;\n}\n\n.inner1 {\n  width: 85%;\n  margin: 0% auto;\n  padding: 3% 0%;\n}\n\n.btndiv {\n  margin-top: 3%;\n  margin-right: 5%;\n}\n\n.btn {\n  --background: #000000;\n  --box-shadow: none;\n  --border-radius: 7px;\n  /*width: 20%;*/\n  --padding-start: 20px;\n  --padding-end: 20px;\n  height: 35px;\n}\n\n.btn1 {\n  --background: #000000;\n  --box-shadow: none;\n  --border-radius: 7px;\n  /*width: 20%;*/\n  --padding-start: 20px;\n  --padding-end: 20px;\n  height: 35px;\n  margin-left: 4%;\n}\n\n.medicationdiv {\n  display: flex;\n  margin-top: 3%;\n  margin-right: 15%;\n}\n\n.medication2 {\n  margin-left: 10%;\n}\n\n.medication3 {\n  margin-left: 11%;\n}\n\n.mtext {\n  color: #000000;\n  font-size: 12px;\n  margin-top: 3%;\n}\n\n.mtext2 {\n  color: #000000;\n  font-weight: bold;\n  font-size: 12px;\n  text-align: center;\n  margin-top: 3%;\n}\n\n.calldiv {\n  display: flex;\n}\n\n.contactdiv {\n  display: flex;\n  margin-top: 5%;\n  width: 100%;\n  margin-right: 30px;\n}\n\n.contactdiv p {\n  margin: 0px;\n  margin-left: 15px;\n}\n\n.contactdiv1 {\n  display: flex;\n  margin-top: 5%;\n  margin-left: 10%;\n  width: 100%;\n}\n\n.contactdiv1 p {\n  margin: 0px;\n  padding-left: 10%;\n}\n\n.para {\n  font-size: 14px;\n  margin-top: 1%;\n  color: #000000;\n}\n\n@media only screen and (max-width: 320px) {\n  .rtext2 {\n    font-size: 12px;\n    font-weight: 400;\n    margin-top: 5%;\n  }\n\n  .right {\n    margin-left: 5%;\n    width: 55%;\n    margin-top: 1%;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  .rtext2 {\n    font-size: 13px;\n    font-weight: 400;\n    margin-top: 5%;\n  }\n\n  .right {\n    margin-left: 5%;\n    width: 55%;\n    margin-top: 1%;\n  }\n}\n\n/*///////////*/\n\n.pwrapper {\n  width: 90%;\n  margin: 30% auto;\n}\n\n.pmain {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.pinner {\n  text-align: center;\n  width: 80%;\n  margin: 0% auto;\n}\n\n/*.plogodiv{\n\tposition: absolute;\n    top: 92px;\n    left: 110px;\n}*/\n\n.plogodiv {\n  position: absolute;\n  top: 40px;\n  left: 115px;\n}\n\n.plogodiv img {\n  border-radius: 90px;\n  width: 140px;\n  height: 140px;\n}\n\n.text {\n  padding-top: 30%;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.text2 {\n  color: #FE9805;\n  font-size: 14px;\n  font-style: italic;\n}\n\n.ppara {\n  color: #000000;\n  font-size: 14px;\n  padding: 4% 0%;\n}\n\n.pmain2 {\n  width: 60%;\n  margin: 10% auto;\n}\n\n.pcontactdiv {\n  display: flex;\n  margin-top: 10%;\n}\n\n.pcontactdiv p {\n  margin: 0px;\n  padding-left: 10%;\n}\n\n@media only screen and (max-width: 414px) {\n  .plogodiv {\n    position: absolute;\n    top: 120px;\n    left: 135px;\n  }\n\n  .text {\n    padding-top: 27%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .pwrapper {\n    width: 90%;\n    margin: 27% auto;\n  }\n\n  .plogodiv {\n    position: absolute;\n    top: 25px;\n    left: 115px;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  .pwrapper {\n    width: 92%;\n    margin: 27% auto;\n  }\n\n  .plogodiv {\n    position: absolute;\n    top: 95px;\n    left: 120px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .plogodiv {\n    position: absolute;\n    top: 80px;\n    left: 90px;\n  }\n\n  .text {\n    padding-top: 35%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {\n  .pwrapper {\n    width: 90%;\n    margin: 18% auto;\n  }\n\n  .plogodiv {\n    position: absolute;\n    top: 70px;\n    left: 310px;\n  }\n\n  .text {\n    padding-top: 17%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoaWxkcHJvZmlsZTEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDQyxXQUFBO0FBRUQ7O0FBQUE7RUFDQyxlQUFBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQURBO0VBRUUsZUFBQTtFQUNFLGdCQUFBO0FBR0o7O0FBREE7RUFDQyxrQkFBQTtFQUFvQixnQkFBQTtBQUtyQjs7QUFGQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBTXRCOztBQUpFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFKRTtFQUNELHFCQUFBO0VBQ0EsY0FBQTtBQU1EOztBQUhBO0VBQ0UscUJBQUE7QUFNRjs7QUFKQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBT0Q7O0FBTEE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBUUY7O0FBUEU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFIQTtFQUNDLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFNRDs7QUFKQTtFQUNDLGtCQUFBO0FBT0Q7O0FBTEE7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBQVFEOztBQU5BO0VBQ0MsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBU0Q7O0FBUEE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBVUQ7O0FBUkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVdEOztBQVRBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVlEOztBQVZBO0VBQ0MsZ0JBQUE7QUFhRDs7QUFYQTtFQUNDLFVBQUE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtBQWNGOztBQVpBO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0FBZUQ7O0FBYkE7RUFDQyxxQkFBQTtFQUNHLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFnQko7O0FBZEE7RUFDQyxxQkFBQTtFQUNHLGtCQUFBO0VBQ0Esb0JBQUE7RUFDRCxjQUFBO0VBQ0MscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBaUJKOztBQWZBO0VBQ0MsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQWtCRDs7QUFoQkE7RUFDQyxnQkFBQTtBQW1CRDs7QUFqQkE7RUFDQyxnQkFBQTtBQW9CRDs7QUFsQkE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFxQkQ7O0FBbkJBO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXNCRDs7QUFwQkE7RUFDQyxhQUFBO0FBdUJEOztBQXJCQTtFQUNDLGFBQUE7RUFDQSxjQUFBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0FBd0JGOztBQXRCQTtFQUNDLFdBQUE7RUFDQSxpQkFBQTtBQXlCRDs7QUF2QkE7RUFDQyxhQUFBO0VBQ0EsY0FBQTtFQUNDLGdCQUFBO0VBQ0EsV0FBQTtBQTBCRjs7QUF4QkE7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7QUEyQkQ7O0FBekJBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBNEJEOztBQXpCQTtFQUNDO0lBQ0MsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQTRCQTs7RUF6QkQ7SUFDQyxlQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUE0QkE7QUFDRjs7QUExQkM7RUFDQTtJQUNDLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUE0QkE7O0VBekJEO0lBQ0MsZUFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VBNEJBO0FBQ0Y7O0FBeEJBLGNBQUE7O0FBQ0E7RUFDQyxVQUFBO0VBQ0MsZ0JBQUE7QUEwQkY7O0FBeEJBO0VBQ0MsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQTJCRDs7QUF6QkE7RUFDQyxrQkFBQTtFQUNHLFVBQUE7RUFDQSxlQUFBO0FBNEJKOztBQTFCQTs7OztFQUFBOztBQUtBO0VBQ0Msa0JBQUE7RUFDRyxTQUFBO0VBQ0EsV0FBQTtBQTZCSjs7QUEzQkE7RUFDQyxtQkFBQTtFQUNHLFlBQUE7RUFDQSxhQUFBO0FBOEJKOztBQTVCQTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQStCRDs7QUE3QkE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBZ0NEOztBQTlCQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWlDRDs7QUE5QkE7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7QUFpQ0Q7O0FBL0JBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7QUFrQ0Q7O0FBaENBO0VBQ0MsV0FBQTtFQUNHLGlCQUFBO0FBbUNKOztBQS9CQTtFQUNDO0lBQ0Msa0JBQUE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtFQWtDRjs7RUFoQ0Q7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFtQ0M7QUFDRjs7QUE5QkE7RUFDQztJQUNDLFVBQUE7SUFDQyxnQkFBQTtFQWdDRDs7RUE5QkQ7SUFDQyxrQkFBQTtJQUNFLFNBQUE7SUFDQSxXQUFBO0VBaUNGO0FBQ0Y7O0FBOUJBO0VBQ0M7SUFDQyxVQUFBO0lBQ0MsZ0JBQUE7RUFnQ0Q7O0VBOUJEO0lBQ0Msa0JBQUE7SUFDRSxTQUFBO0lBQ0EsV0FBQTtFQWlDRjtBQUNGOztBQTdCQTtFQUNDO0lBQ0Msa0JBQUE7SUFDRSxTQUFBO0lBQ0EsVUFBQTtFQStCRjs7RUE3QkQ7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFnQ0M7QUFDRjs7QUF4QkE7RUFHRTtJQUNBLFVBQUE7SUFDRSxnQkFBQTtFQXdCRjs7RUF0QkE7SUFDQSxrQkFBQTtJQUNFLFNBQUE7SUFDQSxXQUFBO0VBeUJGOztFQXZCRDtJQUNHLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQTBCRjtBQUNGIiwiZmlsZSI6ImNoaWxkcHJvZmlsZTEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6MSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuLmJhY2tidG57XHJcblx0bWFyZ2luLWxlZnQ6MCU7XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuICAuYmFja2J0bntcclxuICAgIG1hcmdpbi1sZWZ0OjAlO1xyXG4gICAgcGFkZGluZy10b3A6MTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICB9XHJcbiAgLmhlYWRCZyB7XHJcblx0LS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG5cdHBhZGRpbmc6MyUgMCU7XHJcbiAgfVxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6OTAlO1xyXG5cdG1hcmdpbjo1JSBhdXRvO1xyXG59XHJcbmlvbi1zZWdtZW50IHtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAtLWJhY2tncm91bmQ6ICNFQkVCRUI7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAtLW1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZlOTgwNTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogIzAwMDAwO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuLm1haW57XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5sZWZ0IGltZ3tcclxuXHRib3JkZXItcmFkaXVzOjdweDtcclxufVxyXG4uaW5uZXJ7XHJcblx0cGFkZGluZzoyJSAzJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5yaWdodHtcclxuXHRtYXJnaW4tbGVmdDogNSU7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRtYXJnaW4tdG9wOjElO1xyXG59XHJcbi5ydGV4dHtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRjb2xvcjogIzAwMDAwMDtcclxufVxyXG4ucnRleHQxe1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDo1MDA7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcblx0Y29sb3I6ICNGRTk4MDU7XHJcbn1cclxuLnJ0ZXh0MntcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdG1hcmdpbi10b3A6IDQlO1xyXG59XHJcbi5tYWluMXtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5pbm5lcjF7XHJcblx0d2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDAlIGF1dG87XHJcbiAgcGFkZGluZzogMyUgMCU7XHJcbn1cclxuLmJ0bmRpdntcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxuXHRtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbi5idG57XHJcblx0LS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAvKndpZHRoOiAyMCU7Ki9cclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuLmJ0bjF7XHJcblx0LS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgIC8qd2lkdGg6IDIwJTsqL1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxufVxyXG4ubWVkaWNhdGlvbmRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbi10b3A6IDMlO1xyXG5cdG1hcmdpbi1yaWdodDogMTUlO1xyXG59XHJcbi5tZWRpY2F0aW9uMntcclxuXHRtYXJnaW4tbGVmdDogMTAlXHJcbn1cclxuLm1lZGljYXRpb24ze1xyXG5cdG1hcmdpbi1sZWZ0OiAxMSVcclxufVxyXG4ubXRleHR7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcbn1cclxuLm10ZXh0MntcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcbn1cclxuLmNhbGxkaXZ7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG4uY29udGFjdGRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDozMHB4O1xyXG59XHJcbi5jb250YWN0ZGl2IHB7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbnRhY3RkaXYxe1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGFjdGRpdjEgcHtcclxuXHRtYXJnaW46IDBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDEwJVxyXG59XHJcbi5wYXJhe1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDElO1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjBweCkge1xyXG5cdC5ydGV4dDJ7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRmb250LXdlaWdodDo0MDA7XHJcblx0XHRtYXJnaW4tdG9wOiA1JTtcclxuXHR9XHJcblxyXG5cdC5yaWdodHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1JTtcclxuXHRcdHdpZHRoOiA1NSU7XHJcblx0XHRtYXJnaW4tdG9wOjElO1xyXG5cdH1cclxufVxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkge1xyXG5cdC5ydGV4dDJ7XHJcblx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRmb250LXdlaWdodDo0MDA7XHJcblx0XHRtYXJnaW4tdG9wOiA1JTtcclxuXHR9XHJcblxyXG5cdC5yaWdodHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1JTtcclxuXHRcdHdpZHRoOiA1NSU7XHJcblx0XHRtYXJnaW4tdG9wOjElO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbi8qLy8vLy8vLy8vLy8qL1xyXG4ucHdyYXBwZXJ7XHJcblx0d2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDMwJSBhdXRvO1xyXG59XHJcbi5wbWFpbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLnBpbm5lcntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwJSBhdXRvO1xyXG59XHJcbi8qLnBsb2dvZGl2e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOTJweDtcclxuICAgIGxlZnQ6IDExMHB4O1xyXG59Ki9cclxuLnBsb2dvZGl2e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGxlZnQ6IDExNXB4O1xyXG59XHJcbi5wbG9nb2RpdiBpbWd7XHJcblx0Ym9yZGVyLXJhZGl1czogOTBweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbn1cclxuLnRleHR7XHJcblx0cGFkZGluZy10b3A6IDMwJTtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZToyMHB4XHJcbn1cclxuLnRleHQye1xyXG5cdGNvbG9yOiNGRTk4MDU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4ucHBhcmF7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogNCUgMCU7XHJcbn1cclxuXHJcbi5wbWFpbjJ7XHJcblx0d2lkdGg6NjAlO1xyXG5cdG1hcmdpbjogMTAlIGF1dG87XHJcbn1cclxuLnBjb250YWN0ZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5wY29udGFjdGRpdiBwe1xyXG5cdG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCVcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkge1xyXG5cdC5wbG9nb2RpdntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTIwcHg7XHJcbiAgICBsZWZ0OiAxMzVweDtcclxuXHR9XHJcblx0LnRleHR7XHJcblx0cGFkZGluZy10b3A6IDI3JTtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZToyMHB4XHJcbn1cclxuXHJcblxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIHtcclxuXHQucHdyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdCAgbWFyZ2luOiAyNyUgYXV0bztcclxuXHR9XHJcblx0LnBsb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgbGVmdDogMTE1cHg7XHJcblx0fVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIHtcclxuXHQucHdyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTIlO1xyXG5cdCAgbWFyZ2luOiAyNyUgYXV0bztcclxuXHR9XHJcblx0LnBsb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA5NXB4O1xyXG4gICAgbGVmdDogMTIwcHg7XHJcblx0fVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMHB4KSB7XHJcblx0LnBsb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gICAgbGVmdDogOTBweDtcclxuXHR9XHJcblx0LnRleHR7XHJcblx0cGFkZGluZy10b3A6IDM1JTtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZToyMHB4XHJcbn1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpIHtcclxuICAucHdyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxOCUgYXV0bztcclxuXHR9XHJcbiAgLnBsb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgbGVmdDogMzEwcHg7XHJcblx0fVxyXG5cdC50ZXh0e1xyXG4gICAgcGFkZGluZy10b3A6IDE3JTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblx0fVxyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=childprofile1-childprofile1-module-es5.js.map