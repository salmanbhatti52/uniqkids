(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parentprofile-parentprofile-module"], {
    /***/
    "+wJU":
    /*!*******************************************************!*\
      !*** ./src/app/parentprofile/parentprofile.module.ts ***!
      \*******************************************************/

    /*! exports provided: ParentprofilePageModule */

    /***/
    function wJU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParentprofilePageModule", function () {
        return ParentprofilePageModule;
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


      var _parentprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./parentprofile-routing.module */
      "GunC");
      /* harmony import */


      var _parentprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./parentprofile.page */
      "navK");

      var ParentprofilePageModule = /*#__PURE__*/_createClass(function ParentprofilePageModule() {
        _classCallCheck(this, ParentprofilePageModule);
      });

      ParentprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _parentprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ParentprofilePageRoutingModule"]],
        declarations: [_parentprofile_page__WEBPACK_IMPORTED_MODULE_6__["ParentprofilePage"]]
      })], ParentprofilePageModule);
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
    "7zUo":
    /*!*******************************************************!*\
      !*** ./src/app/parentprofile/parentprofile.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function zUo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 70%;\n  margin: 5% auto;\n}\n\n.logodiv {\n  /*background: #ffff;*/\n  width: 110px;\n  margin: 0% auto;\n  /*border-radius: 90px;*/\n  height: 110px;\n}\n\n.logodiv img {\n  border-radius: 90px;\n  width: 110px;\n  height: 110px;\n}\n\n.name {\n  text-align: center;\n  font-weight: bold;\n  margin-top: 5%;\n  font-size: 20px;\n}\n\n.fields {\n  margin-top: 5%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 8px;\n  background: #FFFFFF;\n  padding: 1% 5%;\n  margin-top: 5%;\n}\n\n.pinput {\n  width: 100%;\n  color: #000;\n  opacity: 48%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #fd8f07f2;\n  outline: none;\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10%;\n  height: 50px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhcmVudHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBRkY7O0FBSUE7RUFDQyxXQUFBO0FBREQ7O0FBR0E7RUFFRSxlQUFBO0VBQ0UsZ0JBQUE7QUFESjs7QUFHQTtFQUNDLGtCQUFBO0VBQW9CLGdCQUFBO0FBQ3JCOztBQUVDO0VBQ0Msa0JBQUE7RUFBb0IsaUJBQUE7QUFFdEI7O0FBQUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQUVEOztBQUFBO0VBQ0MscUJBQUE7RUFDRyxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUdKOztBQURBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUlGOztBQUZBO0VBQ0Msa0JBQUE7RUFDQyxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBRkE7RUFDQyxjQUFBO0FBS0Q7O0FBSEE7RUFDQyxhQUFBO0VBQ0csa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDSCxjQUFBO0FBTUQ7O0FBRkE7RUFFQyxXQUFBO0VBQ0EsV0FBQTtFQUNDLFlBQUE7QUFJRjs7QUFEQTtFQUVFLGtCQUFBO0VBQ0QsV0FBQTtFQUNBLGVBQUE7QUFHRDs7QUFEQTtFQUdDLFlBQUE7RUFDQyx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0QsZUFBQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0MsbUJBQUE7RUFDRCxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRUYiLCJmaWxlIjoicGFyZW50cHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY2hlYWRlcntcclxuLy8gXHRwb3NpdGlvbjogZml4ZWQ7XHJcbi8vIH1cclxuLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6IDElIDAlO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuICAuaGVhZEJnIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICAgIHBhZGRpbmc6IDMlIDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG4ud3JhcHBlcntcclxuXHR3aWR0aDo3MCU7XHJcblx0bWFyZ2luOjUlIGF1dG87XHJcbn1cclxuLmxvZ29kaXZ7XHJcblx0LypiYWNrZ3JvdW5kOiAjZmZmZjsqL1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgbWFyZ2luOiAwJSBhdXRvO1xyXG4gICAgLypib3JkZXItcmFkaXVzOiA5MHB4OyovXHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG59XHJcbi5sb2dvZGl2IGltZ3tcclxuXHQgYm9yZGVyLXJhZGl1czogOTBweDtcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxufVxyXG4ubmFtZXtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uZmllbGRze1xyXG5cdG1hcmdpbi10b3A6NSU7XHJcbn1cclxuLmlucHV0ZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgcGFkZGluZzogMSUgNSU7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcblxyXG4ucGlucHV0XHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRjb2xvcjogIzAwMDtcclxuICBvcGFjaXR5OiA0OCU7XHJcbn1cclxuXHJcbi5pb25idXR0b25cclxue1x0XHJcbiBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmliXHJcbntcclxuXHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogI2ZkOGYwN2YyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gICAtLWJvcmRlci13aWR0aDogMXB4OyBcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "C+Rs":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parentprofile/parentprofile.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function CRs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>cgprofile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <!-- <ion-buttons slot=\"start\">\r\n\t\t<ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n\t  </ion-buttons>\r\n\t  <ion-title class=\"ctitle\">Complete Profile</ion-title> -->\r\n\r\n    <ion-row>\r\n      <ion-col style=\"padding-top: 6px\" size=\"2\">\r\n        <div>\r\n          <ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"8\">\r\n        <ion-text class=\"ctitle\">Complete Profile</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"background\">\r\n  <div id=\"parentpage\" class=\"adjust-overflow\">\r\n    <div class=\"wrapper\">\r\n      <div class=\"logodiv\" (click)=\"uploadPic()\">\r\n        <!-- <img src=\"assets/imgs/icons/msglogo.svg\"> -->\r\n        <img src=\"{{defaultProfile}}\" />\r\n      </div>\r\n      <div class=\"name\">{{fname}} {{lname}}</div>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"inputdiv\">\r\n          <div class=\"pinput\">\r\n            <ion-input\r\n              placeholder=\"Email\"\r\n              type=\"email\"\r\n              [(ngModel)]=\"email\"\r\n              readonly\r\n            ></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"inputdiv\">\r\n          <div class=\"pinput\">\r\n            <ion-input\r\n              placeholder=\"Mobile number\"\r\n              type=\"tel\"\r\n              [(ngModel)]=\"mobilenumber\"\r\n            ></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <p *ngIf=\"mobilenumberError.status\" class=\"error\">\r\n        {{mobilenumberError.message}}\r\n      </p>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"inputdiv\">\r\n          <div class=\"pinput\">\r\n            <ion-input\r\n              placeholder=\"Relation with child\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"relationwithchild\"\r\n            ></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <p *ngIf=\"relationError.status\" class=\"error\">\r\n        {{relationError.message}}\r\n      </p>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"inputdiv\">\r\n          <div class=\"pinput\">\r\n            <ion-input\r\n              placeholder=\"Street address\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"address\"\r\n            ></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <p *ngIf=\"addressError.status\" class=\"error\">{{addressError.message}}</p>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"inputdiv\">\r\n          <div class=\"pinput\">\r\n            <ion-textarea\r\n              placeholder=\"About\"\r\n              rows=\"6\"\r\n              cols=\"20\"\r\n              [(ngModel)]=\"about\"\r\n            ></ion-textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <p *ngIf=\"aboutError.status\" class=\"error\">{{aboutError.message}}</p>\r\n\r\n      <div class=\"ionbutton\" (click)=\"update()\">\r\n        <ion-button class=\"ib\">Done</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "GunC":
    /*!***************************************************************!*\
      !*** ./src/app/parentprofile/parentprofile-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ParentprofilePageRoutingModule */

    /***/
    function GunC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParentprofilePageRoutingModule", function () {
        return ParentprofilePageRoutingModule;
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


      var _parentprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./parentprofile.page */
      "navK");

      var routes = [{
        path: '',
        component: _parentprofile_page__WEBPACK_IMPORTED_MODULE_3__["ParentprofilePage"]
      }];

      var ParentprofilePageRoutingModule = /*#__PURE__*/_createClass(function ParentprofilePageRoutingModule() {
        _classCallCheck(this, ParentprofilePageRoutingModule);
      });

      ParentprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ParentprofilePageRoutingModule);
      /***/
    },

    /***/
    "navK":
    /*!*****************************************************!*\
      !*** ./src/app/parentprofile/parentprofile.page.ts ***!
      \*****************************************************/

    /*! exports provided: ParentprofilePage */

    /***/
    function navK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParentprofilePage", function () {
        return ParentprofilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_parentprofile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./parentprofile.page.html */
      "C+Rs");
      /* harmony import */


      var _parentprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./parentprofile.page.scss */
      "7zUo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
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
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var ParentprofilePage = /*#__PURE__*/function () {
        function ParentprofilePage(camera, alertCtrl, navctrl, loading, imagePicker, sanitizer, rest, cd, platform) {
          _classCallCheck(this, ParentprofilePage);

          this.camera = camera;
          this.alertCtrl = alertCtrl;
          this.navctrl = navctrl;
          this.loading = loading;
          this.imagePicker = imagePicker;
          this.sanitizer = sanitizer;
          this.rest = rest;
          this.cd = cd;
          this.platform = platform;
          this.defaultProfile = "assets/imgs/profilelogo.png";
          this.mobilenumber = "";
          this.relationwithchild = "";
          this.address = "";
          this.about = "";
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
          this.accountTypeId = localStorage.getItem("accountTypeId");
          console.log("accountTypeId", this.accountTypeId);
        }

        _createClass(ParentprofilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.platform.keyboardDidShow.subscribe(function (ev) {
              var deviceHeight = window.innerHeight;
              var keyboardHeight = ev.keyboardHeight;
              var deviceHeightAdjusted = deviceHeight - keyboardHeight; //device height adjusted

              deviceHeightAdjusted = deviceHeightAdjusted < 0 ? deviceHeightAdjusted * -1 : deviceHeightAdjusted; //only positive number

              document.getElementById("parentpage").style.height = deviceHeightAdjusted - 92 + "px"; //set page height

              document.getElementById("parentpage").setAttribute("keyBoardHeight", keyboardHeight); //save keyboard height

              console.log("keyboard show", ev);

              _this2.cd.detectChanges();
            });
            this.platform.keyboardDidHide.subscribe(function (ev) {
              setTimeout(function () {
                document.getElementById("parentpage").style.height = 100 + "%"; //device  100% height
              }, 100);

              _this2.cd.detectChanges();

              console.log("keyboard hide");
            }); //keybpoardddddd --------------

            this.imagePicker.requestReadPermission();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.userid = localStorage.getItem("uid");
            console.log("userid", this.userid);
            this.getprofiledata(this.userid);
          }
        }, {
          key: "getprofiledata",
          value: function getprofiledata(userid) {
            var _this3 = this;

            this.loading.loadershow();
            this.rest.sendRequest("get_profile_details", {
              userId: userid
            }).subscribe(function (data) {
              console.log("get_profile_details data::", data);

              if (data.status == "success") {
                console.log("suucesssss");
                _this3.fname = data.data.first_name;
                _this3.lname = data.data.last_name;
                _this3.email = data.data.email;

                if (data.data.profile_picture == "" || data.data.profile_picture == null) {
                  _this3.defaultProfile = "assets/imgs/profilelogo.png";
                } else {
                  _this3.defaultProfile = data.data.profile_picture;
                }

                _this3.relationwithchild = data.data.relation_with_child;
                _this3.mobilenumber = data.data.mobile_number;
                _this3.address = data.data.street_address;
                _this3.about = data.data.about;

                _this3.loading.hideLoader();
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
          key: "uploadPic",
          value: function uploadPic() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this4 = this;

              var confirm;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertCtrl.create({
                      header: "Choose from",
                      cssClass: "profileAlertBox",
                      buttons: [{
                        text: "Camera",
                        handler: function handler() {
                          _this4.camera.getPicture(_this4.cameraOptions).then(function (imageData) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                                while (1) switch (_context5.prev = _context5.next) {
                                  case 0:
                                    // console.log('imagedata is = ' , imageData);
                                    this.picUrl = imageData;
                                    this.defaultProfile = "data:image/png;base64,".concat(imageData); // console.log('defaultProfile is = ' , this.defaultProfile);

                                  case 2:
                                  case "end":
                                    return _context5.stop();
                                }
                              }, _callee5, this);
                            }));
                          }, function (err) {});
                        }
                      }, {
                        text: "Gallery",
                        handler: function handler() {
                          // this.camera.getPicture(this.galleryOptions)
                          // .then(async imageData => {
                          //  this.picUrl=imageData;
                          //   this.defaultProfile = `data:image/png;base64,${imageData}`
                          // }, err => {
                          // })
                          var options = {
                            maximumImagesCount: 1,
                            outputType: 1
                          };

                          _this4.imagePicker.getPictures(options).then(function (results) {
                            console.log("all selected", results);

                            if (results != null) {
                              for (var i = 0; i < results.length; i++) {
                                console.log("each one" + results[i]);

                                if (results[i] != "") {
                                  // let dturl=this.sanitizer.bypassSecurityTrustResourceUrl(results[i]);
                                  // console.log('image sanitizewe:?',dturl)
                                  console.log("data:image/jpeg;base64,", results[i]);
                                  _this4.picUrl = results[i];
                                  _this4.defaultProfile = "data:image/png;base64,".concat(results[i]);
                                }
                              }
                            }
                          }, function (err) {
                            console.log("error", err);
                          });
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
              }, _callee6, this);
            }));
          }
        }, {
          key: "update",
          value: function update() {
            var _this5 = this;

            if (this.mobilenumber && this.relationwithchild && this.address && this.about) {
              var profiledata = {
                userId: this.userid,
                accountTypeId: this.accountTypeId,
                profilePicture: this.picUrl,
                mobileNumber: this.mobilenumber,
                streetAddress: this.address,
                about: this.about,
                relationWithChild: this.relationwithchild
              }; // console.log('parentprofile',JSON.stringify(profiledata))

              this.loading.loadershow();
              this.rest.sendRequest("update_profile", profiledata).subscribe(function (data) {
                console.log("update_profile data::", data);

                if (data.status == "success") {
                  _this5.loading.hideLoader();

                  _this5.loading.presentToast("Profile Update Successfully!!"); //  if(this.accountTypeId==1){


                  _this5.navctrl.navigateRoot("homescreen"); //  }

                }

                if (data.status == "error") {
                  _this5.loading.hideLoader();

                  console.log("signup request data:", data.status);
                  _this5.error.status = true;
                  _this5.error.message = data.message;
                  setTimeout(function () {
                    _this5.error.status = false;
                    _this5.error.message = "";
                  }, 3000);
                  return;
                }
              }, function (err) {});
            }

            if (!this.mobilenumber) {
              this.mobilenumberError.status = true;
              this.mobilenumberError.message = "mobilenumber is required";
            }

            if (!this.relationwithchild) {
              this.relationError.status = true;
              this.relationError.message = "Field is required";
            }

            if (!this.address) {
              this.addressError.status = true;
              this.addressError.message = "Address is required";
            }

            if (!this.about) {
              this.aboutError.status = true;
              this.aboutError.message = "Field is required";
            }

            setTimeout(function () {
              _this5.mobilenumberError.status = false;
              _this5.mobilenumberError.message = "";
              _this5.relationError.status = false;
              _this5.relationError.message = "";
              _this5.addressError.status = false;
              _this5.addressError.message = "";
              _this5.aboutError.status = false;
              _this5.aboutError.message = "";
            }, 3000);
          }
        }]);

        return ParentprofilePage;
      }();

      ParentprofilePage.ctorParameters = function () {
        return [{
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      ParentprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-parentprofile",
        template: _raw_loader_parentprofile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parentprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ParentprofilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=parentprofile-parentprofile-module-es5.js.map