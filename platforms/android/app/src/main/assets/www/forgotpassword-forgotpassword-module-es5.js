(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassword-forgotpassword-module"], {
    /***/
    "/oEb":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function oEb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content class=\"background\">\n\n  <div class=\"topdiv\">\n    <div class=\"header\">\n      <div class=\"back-btn\">\n        <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n        </div>\n    </div>\n    <div style=\"text-align: center;margin-top: 4%;\">\n      <img src=\"assets/imgs/ulogo.png\">\n    </div>  \n  </div>\n  <div class=\"logindiv\">\n    <div class=\"wrapper\">\n      \n      <div class=\"headtxt\">Forgot,<br>Password?</div>\n      <p style=\"margin-bottom: 10%;font-size:14px;color: #000000;opacity:0.8;\">Enter your email to get the recovery <br>OTP</p>\n\n      <div class=\"fields\">\n        <div class=\"inputdiv\">\n          <div class=\"icondiv\">\n            <img src=\"assets/imgs/icons/email.svg\">\n          </div>\n          <div class=\"pinput\">\n            <ion-input placeholder=\"Email\" type=\"email\" [(ngModel)]=\"email\"></ion-input>\n          </div>\n        </div>\n      </div>\n      <p *ngIf=\"emailError.status\" class=\"error\">\n        {{emailError.message}}\n      </p>\n       <p *ngIf=\"error.status\" class=\"error\">\n        {{error.message}}\n      </p>\n\n      <div class=\"ionbutton\" (click)=\"gotootp()\">\n        <ion-button class=\"ib\">\n         <span class=\"btns\">log in</span> \n        </ion-button>\n      </div>\n\n      \n    </div>\n\n  </div>\n \n \n</ion-content>\n";
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
    "IoKB":
    /*!*********************************************************!*\
      !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
      \*********************************************************/

    /*! exports provided: ForgotpasswordPageModule */

    /***/
    function IoKB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function () {
        return ForgotpasswordPageModule;
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


      var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgotpassword-routing.module */
      "yrZY");
      /* harmony import */


      var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgotpassword.page */
      "Nmh1");

      var ForgotpasswordPageModule = /*#__PURE__*/_createClass(function ForgotpasswordPageModule() {
        _classCallCheck(this, ForgotpasswordPageModule);
      });

      ForgotpasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPageRoutingModule"]],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordPage"]]
      })], ForgotpasswordPageModule);
      /***/
    },

    /***/
    "M/+l":
    /*!*********************************************************!*\
      !*** ./src/app/forgotpassword/forgotpassword.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function ML(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n}\n\n.header {\n  display: flex;\n  /*margin-top: 5%;*/\n}\n\n.back-btn {\n  font-size: 20px;\n  padding: 37px 0 0 15px;\n  fill: #333;\n  cursor: pointer;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.background {\n  /*--background: #FE9805;*/\n  /*--overflow: hidden;*/\n  --background: url('UniqKidz-Logo.png') 40% 0/90% #FE9805 !important;\n}\n\n.topdiv {\n  height: 400px;\n  background: #FFFFFF;\n  border-radius: 0px 0px 50px 50px;\n}\n\n.logindiv {\n  position: absolute;\n  left: 30px;\n  top: 240px;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  width: 85%;\n  border-radius: 30px;\n}\n\n.wrapper {\n  width: 75%;\n  margin: 2% auto;\n}\n\n.headtxt {\n  font-weight: bold;\n  font-size: 30px;\n  color: #000000;\n  margin-top: 8%;\n}\n\n.fields {\n  margin-top: 5%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 8px;\n  background: #EBEBEB;\n  padding: 1% 4%;\n  margin-top: 5%;\n  align-items: center;\n}\n\n.icondiv {\n  margin-top: 4%;\n  width: 8%;\n}\n\n.pinput {\n  width: 100%;\n  padding-left: 4%;\n  padding-top: 1%;\n  font-size: 15px;\n  opacity: 48%;\n}\n\n.check {\n  color: #737373;\n  text-align: right;\n  font-size: 13px;\n  margin-top: 3%;\n  width: 100%;\n  margin-right: 2%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #fd8f07f2;\n  outline: none;\n  width: 100%;\n  font-size: 15px;\n  margin-bottom: 10%;\n  height: 50px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 10px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n\n.btns {\n  font-size: 15px;\n  color: white;\n}\n\n.check {\n  color: #000000;\n  text-align: right;\n  font-size: 12px;\n  margin-top: 3%;\n  width: 100%;\n  margin-right: 2%;\n}\n\n.footer {\n  font-size: 17px;\n  text-align: center;\n  color: #000000;\n  /*bottom: 15px;\n  left: 80px;\n  position: absolute;*/\n}\n\n.bgtoolbar {\n  /*--background: #F7F7F7;*/\n  --background: #fd8f07f2;\n}\n\n.footer span {\n  color: #000;\n  font-weight: 400;\n  font-size: 20px;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n\n/*@media only screen and (max-width:320px) {\n  .pinput\n  {\n    width: 85%;\n      padding-left: 4%;\n      padding-top: 1.5%;\n      font-size: 12px;\n  }\n\n\n}*/\n\n@media only screen and (max-width: 414px) {\n  .icondiv {\n    margin-top: 4%;\n    width: 8%;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .pinput {\n    width: 85%;\n    padding-left: 4%;\n    padding-top: 1.5%;\n    font-size: 12px;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .pinput {\n    width: 85%;\n    padding-left: 4%;\n    padding-top: 5.5%;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBRkE7RUFDRyx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUVBQUE7QUFLSDs7QUFIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBTUY7O0FBSkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUxBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFRRjs7QUFOQTtFQUNFLGlCQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBU0o7O0FBUEE7RUFDRSxjQUFBO0FBVUY7O0FBUkE7RUFDRSxhQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFXSjs7QUFUQTtFQUNDLGNBQUE7RUFDQSxTQUFBO0FBWUQ7O0FBVEE7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNFLFlBQUE7QUFXSjs7QUFSQTtFQUVFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBVUY7O0FBUEE7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBUEE7RUFHRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQyxtQkFBQTtFQUNELHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFRRjs7QUFOQTtFQUNHLGVBQUE7RUFDQSxZQUFBO0FBU0g7O0FBUEE7RUFFRSxjQUFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVNKOztBQU5BO0VBRUUsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBOztzQkFBQTtBQVVGOztBQU5BO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtBQVNGOztBQVBBO0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVNGOztBQU5BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFTRjs7QUFKQTs7Ozs7Ozs7OztFQUFBOztBQVlBO0VBQ0U7SUFFRSxjQUFBO0lBQ0EsU0FBQTtFQUtGO0FBQ0Y7O0FBQUE7RUFDRTtJQUVFLFVBQUE7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQUNKO0FBQ0Y7O0FBSUE7RUFJSTtJQUVBLFVBQUE7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQU5KO0FBQ0YiLCJmaWxlIjoiZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyptYXJnaW4tdG9wOiA1JTsqL1xyXG59XHJcbi5iYWNrLWJ0biB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDM3cHggMCAwIDE1cHg7XHJcbiAgZmlsbDogIzMzMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuLmJhY2tncm91bmR7XHJcbiAgIC8qLS1iYWNrZ3JvdW5kOiAjRkU5ODA1OyovXHJcbiAgIC8qLS1vdmVyZmxvdzogaGlkZGVuOyovXHJcbiAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWdzL1VuaXFLaWR6LUxvZ28ucG5nKSA0MCUgMC85MCUgI0ZFOTgwNSAhaW1wb3J0YW50O1xyXG59XHJcbi50b3BkaXZ7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNTBweCA1MHB4O1xyXG59XHJcbi5sb2dpbmRpdntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMzBweDtcclxuICB0b3A6IDI0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMzUlKSAwcHggNXB4IDE1cHg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcbi53cmFwcGVye1xyXG4gIHdpZHRoOjc1JTtcclxuICBtYXJnaW46MiUgYXV0bztcclxufVxyXG4uaGVhZHR4dHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luLXRvcDo4JTtcclxufVxyXG4uZmllbGRze1xyXG4gIG1hcmdpbi10b3A6NSU7XHJcbn1cclxuLmlucHV0ZGl2e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUJFQkVCO1xyXG4gICAgcGFkZGluZzogMSUgNCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmljb25kaXZ7XHJcbiBtYXJnaW4tdG9wOiA0JTtcclxuIHdpZHRoOiA4JTtcclxufVxyXG5cclxuLnBpbnB1dFxyXG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0JTtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgb3BhY2l0eTogNDglO1xyXG59XHJcblxyXG4uY2hlY2tcclxue1xyXG4gIGNvbG9yOiAjNzM3MzczO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG59XHJcblxyXG4uaW9uYnV0dG9uXHJcbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5pYlxyXG57XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6ICNmZDhmMDdmMjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5idG5ze1xyXG4gICBmb250LXNpemU6IDE1cHg7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2hlY2tcclxue1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxufVxyXG5cclxuLmZvb3RlclxyXG57XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjojMDAwMDAwO1xyXG4gIC8qYm90dG9tOiAxNXB4O1xyXG4gIGxlZnQ6IDgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyovXHJcbn1cclxuLmJndG9vbGJhcntcclxuICAvKi0tYmFja2dyb3VuZDogI0Y3RjdGNzsqL1xyXG4gIC0tYmFja2dyb3VuZDogI2ZkOGYwN2YyO1xyXG59XHJcbi5mb290ZXIgc3BhblxyXG57XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBjb2xvcjogI2ZmMDAwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcblxyXG5cclxuLypAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuICAucGlucHV0XHJcbiAge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA0JTtcclxuICAgICAgcGFkZGluZy10b3A6IDEuNSU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG5cclxufSovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpIHtcclxuICAuaWNvbmRpdlxyXG4gIHtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgd2lkdGg6IDglO1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuICAucGlucHV0XHJcbiAge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA0JTtcclxuICAgICAgcGFkZGluZy10b3A6IDEuNSU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweClcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweClcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xyXG4gICAgLnBpbnB1dFxyXG4gIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1LjUlO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "Nmh1":
    /*!*******************************************************!*\
      !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
      \*******************************************************/

    /*! exports provided: ForgotpasswordPage */

    /***/
    function Nmh1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function () {
        return ForgotpasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgotpassword.page.html */
      "/oEb");
      /* harmony import */


      var _forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgotpassword.page.scss */
      "M/+l");
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

      var ForgotpasswordPage = /*#__PURE__*/function () {
        function ForgotpasswordPage(navCtrl, menuCtrl, loading, rest) {
          _classCallCheck(this, ForgotpasswordPage);

          this.navCtrl = navCtrl;
          this.menuCtrl = menuCtrl;
          this.loading = loading;
          this.rest = rest;
          this.email = '';
          this.emailError = {
            status: false,
            message: ""
          };
          this.error = {
            status: false,
            message: ""
          };
        }

        _createClass(ForgotpasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userType = localStorage.getItem("userType");
            console.log('userType', this.userType);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.menuCtrl.enable(false);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            // enable the root left menu when leaving this page
            this.menuCtrl.enable(true);
          }
        }, {
          key: "goback",
          value: function goback() {
            this.navCtrl.navigateForward('/signin');
          }
        }, {
          key: "gotootp",
          value: function gotootp() {
            var _this2 = this;

            if (this.email) {
              if (!this.validateEmail(this.email)) {
                this.emailError.status = true;
                this.emailError.message = "Invalid Email address.";
                setTimeout(function () {
                  _this2.emailError.status = false;
                  _this2.emailError.message = "";
                }, 3000);
                return;
              }

              var Data = {
                requestType: "forgot_password",
                email: this.email
              };
              this.rest.sendRequest("forgot_password", Data).subscribe(function (data) {
                console.log('forgot_password data', data);

                if (data.status == 'Success') {
                  _this2.navCtrl.navigateForward(['/otp', {
                    email: _this2.email
                  }]);
                }

                if (data.status == 'error') {
                  _this2.loading.hideLoader(); // console.log('signup request data:',data.status);


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

            if (!this.email) {
              this.emailError.status = true;
              this.emailError.message = "Email address is required";
            }

            setTimeout(function () {
              _this2.emailError.status = false;
              _this2.emailError.message = "";
            }, 3000);
          }
        }, {
          key: "validateEmail",
          value: function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
          }
        }]);

        return ForgotpasswordPage;
      }();

      ForgotpasswordPage.ctorParameters = function () {
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

      ForgotpasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgotpassword',
        template: _raw_loader_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ForgotpasswordPage);
      /***/
    },

    /***/
    "yrZY":
    /*!*****************************************************************!*\
      !*** ./src/app/forgotpassword/forgotpassword-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ForgotpasswordPageRoutingModule */

    /***/
    function yrZY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageRoutingModule", function () {
        return ForgotpasswordPageRoutingModule;
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


      var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgotpassword.page */
      "Nmh1");

      var routes = [{
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpasswordPage"]
      }];

      var ForgotpasswordPageRoutingModule = /*#__PURE__*/_createClass(function ForgotpasswordPageRoutingModule() {
        _classCallCheck(this, ForgotpasswordPageRoutingModule);
      });

      ForgotpasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotpasswordPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=forgotpassword-forgotpassword-module-es5.js.map