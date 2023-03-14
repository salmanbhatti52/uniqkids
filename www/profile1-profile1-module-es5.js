(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile1-profile1-module"], {
    /***/
    "30IB":
    /*!*********************************************!*\
      !*** ./src/app/profile1/profile1.module.ts ***!
      \*********************************************/

    /*! exports provided: Profile1PageModule */

    /***/
    function IB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Profile1PageModule", function () {
        return Profile1PageModule;
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


      var _profile1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile1-routing.module */
      "BTpz");
      /* harmony import */


      var _profile1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile1.page */
      "as0H");

      var Profile1PageModule = /*#__PURE__*/_createClass(function Profile1PageModule() {
        _classCallCheck(this, Profile1PageModule);
      });

      Profile1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Profile1PageRoutingModule"]],
        declarations: [_profile1_page__WEBPACK_IMPORTED_MODULE_6__["Profile1Page"]]
      })], Profile1PageModule);
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
    "BTpz":
    /*!*****************************************************!*\
      !*** ./src/app/profile1/profile1-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: Profile1PageRoutingModule */

    /***/
    function BTpz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Profile1PageRoutingModule", function () {
        return Profile1PageRoutingModule;
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


      var _profile1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile1.page */
      "as0H");

      var routes = [{
        path: '',
        component: _profile1_page__WEBPACK_IMPORTED_MODULE_3__["Profile1Page"]
      }];

      var Profile1PageRoutingModule = /*#__PURE__*/_createClass(function Profile1PageRoutingModule() {
        _classCallCheck(this, Profile1PageRoutingModule);
      });

      Profile1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Profile1PageRoutingModule);
      /***/
    },

    /***/
    "Klb0":
    /*!*********************************************!*\
      !*** ./src/app/profile1/profile1.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function Klb0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*.cheader{\n\tposition: fixed;\n}*/\n.headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n.menuicon {\n  color: #000;\n}\n.backbtn {\n  margin-left: 0%;\n  padding-top: 10px;\n  padding-left: 18px;\n}\n.plusbtn {\n  margin-right: 3%;\n}\n.backSvg {\n  fill: #333;\n}\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 12px;\n  padding-left: 18px;\n}\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n.background {\n  --background: #F7F7F7;\n}\n.wrapper {\n  width: 90%;\n  margin: 30% auto;\n}\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n.inner {\n  text-align: center;\n  width: 80%;\n  margin: 0% auto;\n}\n.logodiv {\n  position: absolute;\n  top: 40px;\n  left: 115px;\n}\n.logodiv img {\n  border-radius: 90px;\n  width: 140px;\n  height: 140px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n.text {\n  padding-top: 30%;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n.text2 {\n  color: #FE9805;\n  font-size: 14px;\n  font-style: italic;\n}\n.para {\n  color: #000000;\n  font-size: 14px;\n  padding: 4% 0%;\n}\n.main2 {\n  width: 60%;\n  margin: 10% auto;\n}\n.contactdiv {\n  display: flex;\n  margin-top: 10%;\n}\n.contactdiv p {\n  margin: 0px;\n  padding-left: 10%;\n}\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 25%;\n}\n.ib {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 80%;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10%;\n  height: 55px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n@media only screen and (max-width: 414px) {\n  .wrapper {\n    width: 90%;\n    margin: 25% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 35px;\n    left: 135px;\n  }\n}\n@media only screen and (max-width: 360px) {\n  .wrapper {\n    width: 90%;\n    margin: 27% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 25px;\n    left: 115px;\n  }\n}\n@media only screen and (max-width: 375px) {\n  .wrapper {\n    width: 90%;\n    margin: 27% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 25px;\n    left: 115px;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .logodiv {\n    position: absolute;\n    top: 15px;\n    left: 90px;\n  }\n\n  .text {\n    padding-top: 35%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n@media only screen and (min-device-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {\n  .wrapper {\n    width: 90%;\n    margin: 18% auto;\n  }\n\n  .logodiv {\n    position: absolute;\n    top: 70px;\n    left: 310px;\n  }\n\n  .text {\n    padding-top: 17%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n  }\n}\n/*@media only screen  \n  and (max-device-width: 1024px)  {\n  .wrapper{\n\t\twidth: 90%;\n    margin: 18% auto;\n\t}\n  .logodiv{\n\t\tposition: absolute;\n    top: 65px;\n    left: 293px\n\t}\n\t.text{\n    padding-top: 17%;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n\t}\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2ZpbGUxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFBQTtBQUdBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDQTtFQUNDLFdBQUE7QUFFRDtBQUFBO0VBQ0MsZUFBQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQURBO0VBQ0MsZ0JBQUE7QUFJRDtBQUZBO0VBQ0UsVUFBQTtBQUtGO0FBRkE7RUFFRSxlQUFBO0VBQ0UsZ0JBQUE7QUFJSjtBQUZBO0VBQ0Msa0JBQUE7RUFBb0IsZ0JBQUE7QUFNckI7QUFIQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBT3RCO0FBTEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU9KO0FBTEU7RUFDRCxxQkFBQTtFQUNBLGNBQUE7QUFPRDtBQUpBO0VBQ0UscUJBQUE7QUFPRjtBQUxBO0VBQ0MsVUFBQTtFQUNDLGdCQUFBO0FBUUY7QUFOQTtFQUNDLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFTRDtBQVBBO0VBQ0Msa0JBQUE7RUFDRyxVQUFBO0VBQ0EsZUFBQTtBQVVKO0FBUkE7RUFDQyxrQkFBQTtFQUNHLFNBQUE7RUFDQSxXQUFBO0FBV0o7QUFUQTtFQUNDLG1CQUFBO0VBQ0csWUFBQTtFQUNBLGFBQUE7RUFDSCw0Q0FBQTtBQVlEO0FBVkE7RUFDQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFhRDtBQVhBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWNEO0FBWkE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFlRDtBQVpBO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FBZUQ7QUFiQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0FBZ0JEO0FBZEE7RUFDQyxXQUFBO0VBQ0csaUJBQUE7QUFpQko7QUFkQTtFQUVFLGtCQUFBO0VBQ0QsV0FBQTtFQUNBLGVBQUE7QUFnQkQ7QUFkQTtFQUdDLFlBQUE7RUFDQyxxQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0QsZUFBQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0MsbUJBQUE7RUFDRCxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBZUY7QUFWQTtFQUNDO0lBQ0MsVUFBQTtJQUNDLGdCQUFBO0VBYUQ7O0VBWEQ7SUFDQyxrQkFBQTtJQUNFLFNBQUE7SUFDQSxXQUFBO0VBY0Y7QUFDRjtBQVhBO0VBQ0M7SUFDQyxVQUFBO0lBQ0MsZ0JBQUE7RUFhRDs7RUFYRDtJQUNDLGtCQUFBO0lBQ0UsU0FBQTtJQUNBLFdBQUE7RUFjRjtBQUNGO0FBWEE7RUFDQztJQUNDLFVBQUE7SUFDQyxnQkFBQTtFQWFEOztFQVhEO0lBQ0Msa0JBQUE7SUFDRSxTQUFBO0lBQ0EsV0FBQTtFQWNGO0FBQ0Y7QUFWQTtFQUNDO0lBQ0Msa0JBQUE7SUFDRSxTQUFBO0lBQ0EsVUFBQTtFQVlGOztFQVZEO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBYUM7QUFDRjtBQVBBO0VBR0U7SUFDQSxVQUFBO0lBQ0UsZ0JBQUE7RUFPRjs7RUFMQTtJQUNBLGtCQUFBO0lBQ0UsU0FBQTtJQUNBLFdBQUE7RUFRRjs7RUFORDtJQUNHLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQVNGO0FBQ0Y7QUFOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSIsImZpbGUiOiJwcm9maWxlMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5jaGVhZGVye1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxufSovXHJcbi5oZWFkQmcge1xyXG4gIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICBwYWRkaW5nOiAxJSAwJTtcclxufVxyXG4ubWVudWljb257XHJcblx0Y29sb3I6IzAwMDtcclxufVxyXG4uYmFja2J0bntcclxuXHRtYXJnaW4tbGVmdDowJTtcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMThweDtcclxufVxyXG4ucGx1c2J0bntcclxuXHRtYXJnaW4tcmlnaHQ6MyU7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuICAuYmFja2J0bntcclxuICAgIG1hcmdpbi1sZWZ0OjAlO1xyXG4gICAgcGFkZGluZy10b3A6MTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICB9XHJcbiAgLmhlYWRCZyB7XHJcblx0LS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG5cdHBhZGRpbmc6IDElIDAlO1xyXG4gIH1cclxufVxyXG4uYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbi53cmFwcGVye1xyXG5cdHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAzMCUgYXV0bztcclxufVxyXG4ubWFpbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmlubmVye1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAlIGF1dG87XHJcbn1cclxuLmxvZ29kaXZ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgbGVmdDogMTE1cHg7XHJcbn1cclxuLmxvZ29kaXYgaW1ne1xyXG5cdGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG59XHJcbi50ZXh0e1xyXG5cdHBhZGRpbmctdG9wOiAzMCU7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6MjBweFxyXG59XHJcbi50ZXh0MntcclxuXHRjb2xvcjojRkU5ODA1O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuLnBhcmF7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogNCUgMCU7XHJcbn1cclxuXHJcbi5tYWluMntcclxuXHR3aWR0aDo2MCU7XHJcblx0bWFyZ2luOiAxMCUgYXV0bztcclxufVxyXG4uY29udGFjdGRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4uY29udGFjdGRpdiBwe1xyXG5cdG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCVcclxufVxyXG5cclxuLmlvbmJ1dHRvblxyXG57XHRcclxuIFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi10b3A6IDI1JTtcclxufVxyXG4uaWJcclxue1xyXG5cclxuXHRjb2xvcjogd2hpdGU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRkU5ODA1O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDgwJTtcclxuIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7IFxyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkge1xyXG5cdC53cmFwcGVye1xyXG5cdFx0d2lkdGg6IDkwJTtcclxuXHQgIG1hcmdpbjogMjUlIGF1dG87XHJcblx0fVxyXG5cdC5sb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNXB4O1xyXG4gICAgbGVmdDogMTM1cHg7XHJcblx0fVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIHtcclxuXHQud3JhcHBlcntcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0ICBtYXJnaW46IDI3JSBhdXRvO1xyXG5cdH1cclxuXHQubG9nb2RpdntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjVweDtcclxuICAgIGxlZnQ6IDExNXB4O1xyXG5cdH1cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KSB7XHJcblx0LndyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdCAgbWFyZ2luOiAyNyUgYXV0bztcclxuXHR9XHJcblx0LmxvZ29kaXZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1cHg7XHJcbiAgICBsZWZ0OiAxMTVweDtcclxuXHR9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuXHQubG9nb2RpdntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDkwcHg7XHJcblx0fVxyXG5cdC50ZXh0e1xyXG5cdHBhZGRpbmctdG9wOiAzNSU7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6MjBweFxyXG59XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xyXG4gIC53cmFwcGVye1xyXG5cdFx0d2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTglIGF1dG87XHJcblx0fVxyXG4gIC5sb2dvZGl2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgbGVmdDogMzEwcHg7XHJcblx0fVxyXG5cdC50ZXh0e1xyXG4gICAgcGFkZGluZy10b3A6IDE3JTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblx0fVxyXG59XHJcblxyXG4vKkBtZWRpYSBvbmx5IHNjcmVlbiAgXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpICB7XHJcbiAgLndyYXBwZXJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxOCUgYXV0bztcclxuXHR9XHJcbiAgLmxvZ29kaXZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDY1cHg7XHJcbiAgICBsZWZ0OiAyOTNweFxyXG5cdH1cclxuXHQudGV4dHtcclxuICAgIHBhZGRpbmctdG9wOiAxNyU7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG5cdH1cclxufSovIl19 */";
      /***/
    },

    /***/
    "as0H":
    /*!*******************************************!*\
      !*** ./src/app/profile1/profile1.page.ts ***!
      \*******************************************/

    /*! exports provided: Profile1Page */

    /***/
    function as0H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Profile1Page", function () {
        return Profile1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile1.page.html */
      "zC1j");
      /* harmony import */


      var _profile1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile1.page.scss */
      "Klb0");
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


      var _services_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/rest.service */
      "tnAE");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");

      var Profile1Page = /*#__PURE__*/function () {
        function Profile1Page(navCtrl, route, modal, loading, rest) {
          _classCallCheck(this, Profile1Page);

          this.navCtrl = navCtrl;
          this.route = route;
          this.modal = modal;
          this.loading = loading;
          this.rest = rest;
          this.picUrl = 'assets/imgs/profilelogo.png';
          this.error = {
            status: false,
            message: ""
          };
        }

        _createClass(Profile1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.logeduser = localStorage.getItem('uid');
            console.log('logeduser', this.logeduser);
            this.caregiverid = this.route.snapshot.paramMap.get('caregiverid');
            console.log('caregiverid:', this.caregiverid);
            this.getdetails();
          }
        }, {
          key: "goback",
          value: function goback() {
            this.navCtrl.navigateBack('/cgviewprofile1');
          }
        }, {
          key: "getdetails",
          value: function getdetails() {
            var _this2 = this;

            var senddata = {
              agencyCaregiverId: this.caregiverid
            };
            this.rest.sendRequest("get_agency_caregiver_detail", senddata).subscribe(function (data) {
              console.log('get_agency_caregiver_detail::', data);

              if (data.status == 'success') {
                console.log('suucesssss');
                _this2.agencycaregiverid = data.data.agency_caregiver_id;
                _this2.fname = data.data.name;
                _this2.email = data.data.email;

                if (data.data.profile_picture == '' || data.data.profile_picture == null) {
                  _this2.picUrl = _this2.picUrl;
                } else {
                  _this2.picUrl = data.data.profile_picture;
                }

                if (data.data.per_hour_rate == '' || data.data.per_hour_rate == null) {
                  _this2.price = 'None';
                } else {
                  _this2.price = data.data.per_hour_rate;
                }

                if (data.data.mobile_number == '' || data.data.mobile_number == null) {
                  _this2.mobilenumber = 'None';
                } else {
                  _this2.mobilenumber = data.data.mobile_number;
                }

                if (data.data.street_address == '' || data.data.street_address == null) {
                  _this2.address = 'None';
                } else {
                  _this2.address = data.data.street_address;
                }

                if (data.data.about == '' || data.data.about == null) {
                  _this2.about = 'None';
                } else {
                  _this2.about = data.data.about;
                }

                _this2.loading.hideLoader();
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
          key: "next",
          value: function next() {
            this.navCtrl.navigateForward('/editcgprofile2');
            localStorage.setItem('agencycaregiverid', this.agencycaregiverid);
          }
        }]);

        return Profile1Page;
      }();

      Profile1Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
        }];
      };

      Profile1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile1',
        template: _raw_loader_profile1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Profile1Page);
      /***/
    },

    /***/
    "zC1j":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile1/profile1.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function zC1j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t<ion-toolbar class=\"headBgGlobal\">\n\t    <ion-buttons slot=\"start\" class=\"backbtn\">\n\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t  </ion-buttons>\n\t  <ion-title class=\"ctitle\">Profile</ion-title>\n\t  <ion-buttons slot=\"end\" class=\"plusbtn\" *ngIf=\"page!='caregiver'\" (click)=\"next()\">\n\t\t  <img src=\"assets/imgs/icons/edit.svg\">\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header> -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t<ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col class=\"backbtn\" size=\"2\">\n        <div>\n          <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n        </div>\n      </ion-col>\n\n      <ion-col class=\"titleclass\" size=\"8\">\n        <ion-text class=\"ctitle\">Profile</ion-text>\n      </ion-col>\n\n      <ion-col size=\"2\">\n\t\t<div *ngIf=\"page!='caregiver'\" (click)=\"next()\">\n\t\t\t<img src=\"assets/imgs/icons/edit.svg\">\n\t\t</div>\n      </ion-col>\n    </ion-row>\n\t    <!-- <ion-buttons slot=\"start\" class=\"backbtn\">\n\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t  </ion-buttons>\n\t  <ion-title class=\"ctitle\">Profile</ion-title> -->\n\t  <!-- <ion-buttons slot=\"end\" class=\"plusbtn\" *ngIf=\"page!='caregiver'\" (click)=\"next()\">\n\t\t  <img src=\"assets/imgs/icons/edit.svg\">\n\t\t</ion-buttons> -->\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\t\t<div class=\"main\">\n\t\t\t<div class=\"inner\">\n\t\t\t\t<div class=\"logodiv\">\n\t\t\t\t\t<img src=\"{{picUrl}}\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text\">{{fname}}</div>\n\t\t\t\t<div class=\"para\">{{about}}</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"main2\">\n\t\t\t<div class=\"contactdiv\">\n\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t<img src=\"assets/imgs/icons/sms.png\">\n\t\t\t\t</div>\n\t\t\t\t<p>{{email}}</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"contactdiv\">\n\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t<img src=\"assets/imgs/icons/arrow.png\">\n\t\t\t\t</div>\n\t\t\t\t<p>{{address}}</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"contactdiv\">\n\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\n\t\t\t\t</div>\n\t\t\t\t<p>{{mobilenumber}}</p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ngIf=\"page=='caregiver'\">\n\t\t\t<div class=\"ionbutton\" (click)=\"openmodel()\">\n\t\t\t\t<ion-button class=\"ib\">hire</ion-button>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile1-profile1-module-es5.js.map