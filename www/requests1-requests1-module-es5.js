(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["requests1-requests1-module"], {
    /***/
    "2JYJ":
    /*!*******************************************************!*\
      !*** ./src/app/requests1/requests1-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: Requests1PageRoutingModule */

    /***/
    function JYJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Requests1PageRoutingModule", function () {
        return Requests1PageRoutingModule;
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


      var _requests1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./requests1.page */
      "uLsE");

      var routes = [{
        path: '',
        component: _requests1_page__WEBPACK_IMPORTED_MODULE_3__["Requests1Page"]
      }];

      var Requests1PageRoutingModule = /*#__PURE__*/_createClass(function Requests1PageRoutingModule() {
        _classCallCheck(this, Requests1PageRoutingModule);
      });

      Requests1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Requests1PageRoutingModule);
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
    "OCuJ":
    /*!***********************************************!*\
      !*** ./src/app/requests1/requests1.module.ts ***!
      \***********************************************/

    /*! exports provided: Requests1PageModule */

    /***/
    function OCuJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Requests1PageModule", function () {
        return Requests1PageModule;
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


      var _requests1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./requests1-routing.module */
      "2JYJ");
      /* harmony import */


      var _requests1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./requests1.page */
      "uLsE");

      var Requests1PageModule = /*#__PURE__*/_createClass(function Requests1PageModule() {
        _classCallCheck(this, Requests1PageModule);
      });

      Requests1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _requests1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Requests1PageRoutingModule"]],
        declarations: [_requests1_page__WEBPACK_IMPORTED_MODULE_6__["Requests1Page"]]
      })], Requests1PageModule);
      /***/
    },

    /***/
    "jmdL":
    /*!***********************************************!*\
      !*** ./src/app/requests1/requests1.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function jmdL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 6% auto;\n}\n\nion-segment {\n  padding: 5px 5px;\n  border-radius: 10px;\n  margin-top: 10px;\n  --background: #EBEBEB;\n}\n\nion-segment ion-segment-button {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 10px;\n  --background-checked: #fe9805;\n  --indicator-color: transparent !important;\n  --color: #00000;\n  --color-checked: #fff;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.linediv {\n  display: flex;\n  margin: 10% 0%;\n}\n\n.leftline {\n  border-top: 1px solid #BFBFBF;\n  width: 42%;\n}\n\n.label {\n  color: #BFBFBF;\n  font-size: 8px;\n  text-align: center;\n  margin-top: -1.5%;\n  margin-left: 3%;\n  width: 15%;\n}\n\n.rightline {\n  border-top: 1px solid #BFBFBF;\n  width: 42%;\n  margin-left: 3%;\n}\n\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n}\n\n.left img {\n  border-radius: 7px;\n}\n\n.inner {\n  padding: 2% 2.5%;\n}\n\n.top {\n  display: flex;\n}\n\n.right {\n  margin-left: 3%;\n  width: 55%;\n  margin-top: 1%;\n}\n\n.rightinner {\n  display: flex;\n}\n\n.textdiv {\n  width: 100%;\n}\n\n.rtext {\n  font-size: 19px;\n  font-weight: 600;\n}\n\n.rtext1 {\n  font-size: 14px;\n  font-weight: 400;\n  color: #FE9805;\n  margin-top: 3%;\n  margin-left: 7%;\n}\n\n.t1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 4%;\n}\n\n.t2 {\n  color: #000000;\n  font-size: 14px;\n  margin-top: 4%;\n}\n\n.rtext2 {\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 1%;\n  height: 40px;\n  overflow: hidden;\n}\n\n.btndiv {\n  width: 90%;\n  margin: 5% auto 3%;\n  z-index: 999;\n}\n\n.btn {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 47%;\n  font-size: 18px;\n  font-weight: 600;\n  height: 46px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n\n.btn1 {\n  color: white;\n  --background: #E63F3F;\n  outline: none;\n  width: 47%;\n  font-size: 18px;\n  font-weight: 600;\n  height: 46px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n  margin-left: 3%;\n}\n\n@media only screen and (max-width: 320px) {\n  .right {\n    margin-left: 3%;\n    margin-top: 1%;\n  }\n\n  .rightinner {\n    display: flex;\n  }\n\n  .rtext {\n    font-size: 14px;\n    font-weight: 600;\n  }\n\n  .rtext1 {\n    font-size: 10px;\n    font-weight: 400;\n    color: #FE9805;\n    margin-top: 2%;\n    margin-left: 7%;\n  }\n\n  .t1 {\n    color: #000000;\n    font-size: 11px;\n    font-weight: 600;\n    margin-top: 15%;\n  }\n\n  .t2 {\n    color: #000000;\n    font-size: 11px;\n    margin-top: 15%;\n  }\n\n  .rtext2 {\n    font-size: 14px;\n    font-weight: 400;\n    margin-top: 1%;\n  }\n}\n\n@media only screen and (max-width: 414px) {\n  .rtext1 {\n    font-size: 12px;\n    font-weight: 400;\n    color: #FE9805;\n    margin-top: 2%;\n    margin-left: 15%;\n  }\n\n  .t1 {\n    color: #000000;\n    font-size: 14px;\n    font-weight: 600;\n    margin-top: 4%;\n  }\n\n  .t2 {\n    color: #000000;\n    font-size: 14px;\n    margin-top: 4%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlcXVlc3RzMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNDLFdBQUE7QUFFRDs7QUFDQTtFQUVFLGVBQUE7RUFDRSxnQkFBQTtBQUNKOztBQUNBO0VBQ0Msa0JBQUE7RUFBb0IsZ0JBQUE7QUFHckI7O0FBQUM7RUFDQyxrQkFBQTtFQUFvQixpQkFBQTtBQUl0Qjs7QUFGQztFQUNDLHFCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQURBO0VBQ0UscUJBQUE7QUFJRjs7QUFGQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBS0Q7O0FBSEE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQU1GOztBQUxFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBSkE7RUFDQyxhQUFBO0VBQ0EsY0FBQTtBQU9EOztBQUxBO0VBQ0MsNkJBQUE7RUFDQyxVQUFBO0FBUUY7O0FBTkE7RUFDQyxjQUFBO0VBQ0csY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVNKOztBQVBBO0VBQ0MsNkJBQUE7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQVVGOztBQVJBO0VBQ0MsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FBV0Q7O0FBUkE7RUFDQyxrQkFBQTtBQVdEOztBQVRBO0VBQ0MsZ0JBQUE7QUFZRDs7QUFUQTtFQUNDLGFBQUE7QUFZRDs7QUFWQTtFQUNDLGVBQUE7RUFDRyxVQUFBO0VBQ0EsY0FBQTtBQWFKOztBQVhBO0VBQ0MsYUFBQTtBQWNEOztBQVpBO0VBQ0MsV0FBQTtBQWVEOztBQWJBO0VBQ0MsZUFBQTtFQUNHLGdCQUFBO0FBZ0JKOztBQWRBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBaUJEOztBQWZBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFrQkQ7O0FBaEJBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBbUJEOztBQWhCQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0csZ0JBQUE7QUFtQko7O0FBakJBO0VBQ0MsVUFBQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtBQW9CRjs7QUFsQkE7RUFHQyxZQUFBO0VBQ0MscUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQyxtQkFBQTtFQUNELHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFtQkY7O0FBakJBO0VBR0MsWUFBQTtFQUNDLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0MsbUJBQUE7RUFDRCxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQWtCRjs7QUFmQTtFQUNDO0lBQ0MsZUFBQTtJQUNDLGNBQUE7RUFrQkQ7O0VBaEJEO0lBQ0MsYUFBQTtFQW1CQTs7RUFqQkQ7SUFDQyxlQUFBO0lBQ0csZ0JBQUE7RUFvQkg7O0VBbEJEO0lBQ0MsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VBcUJBOztFQW5CRDtJQUNDLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VBc0JBOztFQXBCRDtJQUNDLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtFQXVCQTs7RUFwQkQ7SUFDQyxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBdUJBO0FBQ0Y7O0FBcEJBO0VBRUM7SUFDQyxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VBcUJBOztFQW5CRDtJQUNDLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBc0JBOztFQXBCRDtJQUNDLGNBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFQXVCQTtBQUNGIiwiZmlsZSI6InJlcXVlc3RzMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgcGFkZGluZzogMSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuXHQuaGVhZEJnIHtcclxuXHRcdC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuXHRcdHBhZGRpbmc6IDMlIDAlO1xyXG5cdCAgfVxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6OTAlO1xyXG5cdG1hcmdpbjo2JSBhdXRvO1xyXG59XHJcbmlvbi1zZWdtZW50IHtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAtLWJhY2tncm91bmQ6ICNFQkVCRUI7XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAtLW1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZlOTgwNTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogIzAwMDAwO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuLmxpbmVkaXZ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW46MTAlIDAlO1xyXG59XHJcbi5sZWZ0bGluZXtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI0JGQkZCRjtcclxuICB3aWR0aDogNDIlO1xyXG59XHJcbi5sYWJlbHtcclxuXHRjb2xvcjogI0JGQkZCRjtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTEuNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICB3aWR0aDoxNSU7XHJcbn1cclxuLnJpZ2h0bGluZXtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI0JGQkZCRjtcclxuICB3aWR0aDogNDIlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG4ubWFpbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbn1cclxuXHJcbi5sZWZ0IGltZ3tcclxuXHRib3JkZXItcmFkaXVzOjdweDtcclxufVxyXG4uaW5uZXJ7XHJcblx0cGFkZGluZzogMiUgMi41JTtcclxuXHRcclxufVxyXG4udG9we1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnJpZ2h0e1xyXG5cdG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG4ucmlnaHRpbm5lcntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi50ZXh0ZGl2e1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi5ydGV4dHtcclxuXHRmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5ydGV4dDF7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRjb2xvcjojRkU5ODA1O1xyXG5cdG1hcmdpbi10b3A6IDMlO1xyXG5cdG1hcmdpbi1sZWZ0OiA3JVxyXG59XHJcbi50MXtcclxuXHRjb2xvcjogIzAwMDAwMDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRtYXJnaW4tdG9wOiA0JTtcclxufVxyXG4udDJ7XHJcblx0Y29sb3I6ICMwMDAwMDA7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDQlO1xyXG59XHJcblxyXG4ucnRleHQye1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDo0MDA7XHJcblx0bWFyZ2luLXRvcDogMSU7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uYnRuZGl2e1xyXG5cdHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvIDMlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG4uYnRuXHJcbntcclxuXHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogI0ZFOTgwNTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiA0NyU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gICAtLWJvcmRlci13aWR0aDogMXB4OyBcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uYnRuMVxyXG57XHJcblxyXG5cdGNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6ICNFNjNGM0Y7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogNDclO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGhlaWdodDogNDZweDtcclxuICAgLS1ib3JkZXItd2lkdGg6IDFweDsgXHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWxlZnQ6IDMlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuXHQucmlnaHR7XHJcblx0XHRtYXJnaW4tbGVmdDogMyU7XHJcblx0ICBtYXJnaW4tdG9wOiAxJTtcclxuXHR9XHJcblx0LnJpZ2h0aW5uZXJ7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHQucnRleHR7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0ICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0fVxyXG5cdC5ydGV4dDF7XHJcblx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0XHRmb250LXdlaWdodDo0MDA7XHJcblx0XHRjb2xvcjojRkU5ODA1O1xyXG5cdFx0bWFyZ2luLXRvcDogMiU7XHJcblx0XHRtYXJnaW4tbGVmdDogNyVcclxuXHR9XHJcblx0LnQxe1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRmb250LXNpemU6IDExcHg7XHJcblx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0bWFyZ2luLXRvcDogMTUlO1xyXG5cdH1cclxuXHQudDJ7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdGZvbnQtc2l6ZTogMTFweDtcclxuXHRcdG1hcmdpbi10b3A6IDE1JTtcclxuXHR9XHJcblxyXG5cdC5ydGV4dDJ7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRmb250LXdlaWdodDo0MDA7XHJcblx0XHRtYXJnaW4tdG9wOiAxJTtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkge1xyXG5cdFxyXG5cdC5ydGV4dDF7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRmb250LXdlaWdodDo0MDA7XHJcblx0XHRjb2xvcjojRkU5ODA1O1xyXG5cdFx0bWFyZ2luLXRvcDogMiU7XHJcblx0XHRtYXJnaW4tbGVmdDogMTUlXHJcblx0fVxyXG5cdC50MXtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdG1hcmdpbi10b3A6IDQlO1xyXG5cdH1cclxuXHQudDJ7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdG1hcmdpbi10b3A6IDQlO1xyXG5cdH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "tILi":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/requests1/requests1.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function tILi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col style=\"padding-top:6px;\" size=\"2\">\n        <div>\n          <ion-menu-button class=\"menuicon\"></ion-menu-button>\n        </div>\n      </ion-col>\n\n      <ion-col class=\"titleclass\" size=\"8\">\n        <ion-text class=\"ctitle\">Requests</ion-text>\n      </ion-col>\n\n      <ion-col size=\"2\">\n\n      </ion-col>\n    </ion-row>\n    <!-- <ion-buttons slot=\"start\" style=\"margin-left: 2%;\">\n\t      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n\t  </ion-buttons>\n\t   <ion-title class=\"ctitle\">Requests</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n  <div class=\"wrapper\">\n    <ion-segment id=\"segment\" mode=\"ios\" (ionChange)=\"segmentChanged($event)\" #mySegment>\n      <ion-segment-button mode=\"ios\" value=\"active\">\n        <ion-label>Active</ion-label>\n      </ion-segment-button>\n      <ion-segment-button checked mode=\"ios\" value=\"pending\">\n        <ion-label>Pending</ion-label>\n      </ion-segment-button>\n      <ion-segment-button mode=\"ios\" value=\"previous\">\n        <ion-label>Previous</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n\n    <div *ngFor=\"let req of requestsarray\">\n      <!--------------------- Active div ------------------------------>\n      <div *ngIf=\"requestsType=='active'\">\n        <div *ngIf=\"req.status=='Active'\">\n          <div class=\"linediv\">\n            <div class=\"leftline\"></div>\n            <div class=\"label\">{{req.date}}</div>\n            <div class=\"rightline\"></div>\n          </div>\n          <div class=\"main\" (click)=\"gotoprofile(req)\">\n            <div class=\"inner\">\n              <div class=\"top\">\n                <div class=\"left\">\n                  <img src=\"{{req.profile}}\" width=\"145px\" height=\"135px\">\n                </div>\n                <div class=\"right\">\n                  <div class=\"rightinner\">\n                    <div class=\"textdiv\">\n                      <div class=\"rtext\">{{req.fname}} {{req.lname}} <span\n                          class=\"rtext1\">{{req.relationwithchild}}</span></div>\n                      <div class=\"t1\">Child</div>\n                      <div class=\"t2\">{{req.childname}}</div>\n                      <div class=\"t2\">Date : {{req.date}}</div>\n                      <div class=\"t1\">Timing</div>\n                      <div class=\"t2\">{{req.starttime}} - {{req.endtime}}</div>\n                    </div>\n                    <!-- <div class=\"rtext1\"></div> -->\n                  </div>\n                </div>\n              </div>\n              <div class=\"rtext2\">{{req.about}}</div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <!--------------------- Active div End------------------------------->\n\n      <div *ngIf=\"requestsType=='pending'\" style=\"margin-top: 8%;\">\n        <div *ngIf=\"req.status=='Pending'\">\n          <div class=\"main\">\n            <div class=\"inner\">\n              <div class=\"top\" (click)=\"gotoprofile(req)\">\n                <div class=\"left\">\n                  <img src=\"{{req.profile}}\" width=\"145px\" height=\"135px\">\n                </div>\n                <div class=\"right\">\n                  <div class=\"rightinner\">\n                    <div class=\"textdiv\">\n                      <div class=\"rtext\">{{req.fname}} {{req.lname}} <span\n                          class=\"rtext1\">{{req.relationwithchild}}</span></div>\n                      <div class=\"t1\">Child</div>\n                      <div class=\"t2\">{{req.childname}}</div>\n                      <div class=\"t2\">Date : {{req.date}}</div>\n                      <div class=\"t1\">Timing</div>\n                      <div class=\"t2\">{{req.starttime}} - {{req.endtime}}</div>\n                    </div>\n                    <!-- <div class=\"rtext1\">{{req.relationwithchild}}</div> -->\n                  </div>\n                </div>\n              </div>\n              <div class=\"rtext2\">{{req.about}}</div>\n              <div class=\"btndiv\">\n\n                <ion-button class=\"btn\" (click)=\"accept(req)\">Accept</ion-button>\n                <ion-button class=\"btn1\" (click)=\"reject(req)\">Reject</ion-button>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- <-------------------previous-------------------------------? -->\n      <div *ngIf=\"requestsType=='previous'\" style=\"margin-top: 8%;\">\n        <div *ngIf=\"req.status=='Completed'\">\n          <div class=\"main\">\n            <div class=\"inner\">\n              <div class=\"top\" (click)=\"gotoprofile(req)\">\n                <div class=\"left\">\n                  <img src=\"{{req.profile}}\" width=\"145px\" height=\"135px\">\n                </div>\n                <div class=\"right\">\n                  <div class=\"rightinner\">\n                    <div class=\"textdiv\">\n                      <div class=\"rtext\">{{req.fname}} {{req.lname}} <span\n                          class=\"rtext1\">{{req.relationwithchild}}</span></div>\n                      <div class=\"t1\">Child</div>\n                      <div class=\"t2\">{{req.childname}}</div>\n                      <div class=\"t2\">Date : {{req.date}}</div>\n                      <div class=\"t1\">Timing</div>\n                      <div class=\"t2\">{{req.starttime}} - {{req.endtime}}</div>\n                    </div>\n                    <!-- <div class=\"rtext1\">{{req.relationwithchild}}</div> -->\n                  </div>\n                </div>\n              </div>\n              <div class=\"rtext2\">{{req.about}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- <-------------------previous-------------------------------? -->\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "uLsE":
    /*!*********************************************!*\
      !*** ./src/app/requests1/requests1.page.ts ***!
      \*********************************************/

    /*! exports provided: Requests1Page */

    /***/
    function uLsE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Requests1Page", function () {
        return Requests1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_requests1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./requests1.page.html */
      "tILi");
      /* harmony import */


      var _requests1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./requests1.page.scss */
      "jmdL");
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

      var Requests1Page = /*#__PURE__*/function () {
        function Requests1Page(navCtrl, loading, rest) {
          _classCallCheck(this, Requests1Page);

          this.navCtrl = navCtrl;
          this.loading = loading;
          this.rest = rest;
          this.requestsarray = [];
          this.error = {
            status: false,
            message: ""
          };
          this.caregiverid = localStorage.getItem('uid');
          console.log('caregiver id :', this.caregiverid);
        }

        _createClass(Requests1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (this.requestsType) {
              if (this.requestsType === 'active') {
                this.mySegment.nativeElement.children[0].click();
                this.showrequest();
              }

              if (this.requestsType === 'pending') {
                this.mySegment.nativeElement.children[1].click();
                this.showrequest();
              }

              if (this.requestsType === 'previous') {
                this.mySegment.nativeElement.children[2].click();
                this.showrequest();
              }
            } else {
              this.requestsType = 'active';
              this.mySegment.nativeElement.children[0].click(); // this.showrequest()
            }
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            if (ev.detail.value === 'active') {
              this.requestsType = 'active';
              this.showrequest();
              this.requestsarray = [];
            }

            if (ev.detail.value === 'pending') {
              this.requestsType = 'pending';
              this.showrequest();
              this.requestsarray = [];
            }

            if (ev.detail.value === 'previous') {
              this.requestsType = 'previous';
              this.showrequest();
              this.requestsarray = [];
            }

            localStorage.setItem('requestType', this.requestsType);
          } // gotoprofile(){
          //   this.navCtrl.navigateForward(['/childprofile1',{
          //     page:'requests'
          //   }]);
          // }

        }, {
          key: "showrequest",
          value: function showrequest() {
            var _this2 = this;

            this.requestsarray = [];
            this.loading.loadershow();
            this.rest.sendRequest("caregiver_requests", {
              caregiverId: this.caregiverid
            }).subscribe(function (data) {
              console.log('caregiver_requests', data);

              if (data.status == 'success') {
                _this2.loading.hideLoader();

                data.data.forEach(function (val) {
                  //  let date=val.date
                  //  let date1=moment(date).format('D MMM YYYY'); 
                  //  console.log('formatted date',date1)
                  if (val.child_details.profile_picture == null || val.child_details.profile_picture == '') {
                    _this2.defaultProfile = 'assets/imgs/profilelogo.png';
                  } else {
                    _this2.defaultProfile = val.child_details.profile_picture;
                  }

                  var data = {
                    parentid: val.parent_id,
                    relationwithchild: val.parent_details.relation_with_child,
                    fname: val.parent_details.first_name,
                    lname: val.parent_details.last_name,
                    profile: _this2.defaultProfile,
                    childid: val.child_id,
                    childname: val.child_details.child_name,
                    starttime: val.start_time,
                    endtime: val.end_time,
                    status: val.status,
                    hiringid: val.hiring_id,
                    caregiverid: val.caregiver_id,
                    date: val.date,
                    about: val.child_details.additional_notes
                  };

                  _this2.requestsarray.push(data);
                });
                console.log('requestsarray:', _this2.requestsarray);
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
            });
          }
        }, {
          key: "accept",
          value: function accept(req) {
            var _this3 = this;

            console.log('request data to get ids', req);
            var sendData = {
              childId: req.childid,
              hiringId: req.hiringid,
              caregiverId: req.caregiverid
            };
            this.rest.sendRequest("accept_request", sendData).subscribe(function (data) {
              console.log('accept request:', data);

              if (data.status == "success") {
                _this3.navCtrl.navigateForward(['/childprofile1', {
                  page: 'requests',
                  parentid: req.parentid,
                  childid: req.childid
                }]);
              }

              if (data.status == "error") {
                _this3.loading.presentToast(data.message);
              }
            });
          }
        }, {
          key: "reject",
          value: function reject(req) {
            var _this4 = this;

            console.log('request data to get ids', req);
            var sendData = {
              childId: req.childid,
              hiringId: req.hiringid,
              caregiverId: req.caregiverid
            };
            this.rest.sendRequest("reject_request", sendData).subscribe(function (data) {
              console.log('reject request:', data);

              _this4.navCtrl.navigateForward(['/childprofile1', {
                page: 'requests',
                parentid: req.parentid,
                childid: req.childid
              }]);
            });
          }
        }, {
          key: "gotoprofile",
          value: function gotoprofile(req) {
            console.log('profile..........":');
            this.navCtrl.navigateForward(['/childprofile1', {
              page: 'requests',
              parentid: req.parentid,
              childid: req.childid
            }]);
          }
        }]);

        return Requests1Page;
      }();

      Requests1Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }];
      };

      Requests1Page.propDecorators = {
        mySegment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['mySegment', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }]
      };
      Requests1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-requests1',
        template: _raw_loader_requests1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_requests1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Requests1Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=requests1-requests1-module-es5.js.map