(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editchild-editchild-module"], {
    /***/
    "+I5a":
    /*!***********************************************!*\
      !*** ./src/app/editchild/editchild.module.ts ***!
      \***********************************************/

    /*! exports provided: EditchildPageModule */

    /***/
    function I5a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditchildPageModule", function () {
        return EditchildPageModule;
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


      var _editchild_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./editchild-routing.module */
      "2CU6");
      /* harmony import */


      var _editchild_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./editchild.page */
      "gP74");

      var EditchildPageModule = /*#__PURE__*/_createClass(function EditchildPageModule() {
        _classCallCheck(this, EditchildPageModule);
      });

      EditchildPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editchild_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditchildPageRoutingModule"]],
        declarations: [_editchild_page__WEBPACK_IMPORTED_MODULE_6__["EditchildPage"]]
      })], EditchildPageModule);
      /***/
    },

    /***/
    "2CU6":
    /*!*******************************************************!*\
      !*** ./src/app/editchild/editchild-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: EditchildPageRoutingModule */

    /***/
    function CU6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditchildPageRoutingModule", function () {
        return EditchildPageRoutingModule;
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


      var _editchild_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editchild.page */
      "gP74");

      var routes = [{
        path: '',
        component: _editchild_page__WEBPACK_IMPORTED_MODULE_3__["EditchildPage"]
      }];

      var EditchildPageRoutingModule = /*#__PURE__*/_createClass(function EditchildPageRoutingModule() {
        _classCallCheck(this, EditchildPageRoutingModule);
      });

      EditchildPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditchildPageRoutingModule);
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
    "AxZQ":
    /*!***********************************************!*\
      !*** ./src/app/editchild/editchild.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function AxZQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 10px;\n  padding-left: 18px;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 12px;\n  padding-left: 18px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 10% auto;\n}\n\n.topdiv {\n  width: 80%;\n  margin: 0% auto;\n}\n\n.logodiv {\n  /*background: #ffff;*/\n  width: 110px;\n  margin: 0% auto;\n  /*border-radius: 90px;*/\n  height: 110px;\n}\n\n.logodiv img {\n  border-radius: 90px;\n  width: 110px;\n  height: 110px;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  background: #FFFFFF;\n  width: 100%;\n  margin-top: 5%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n  padding: 0% 0% 1% 7%;\n}\n\n.progressdiv {\n  margin-top: 3%;\n  margin-left: 3%;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\nion-range {\n  --bar-background: #fff;\n  --bar-height: 5px;\n  --bar-border-radius: 6px;\n  --knob-background: #FE9805;\n  --knob-size: 15px;\n  /* --pin-background: #FE9805; */\n  --pin-color: #FE9805;\n  --height: 15px;\n  --bar-background-active: #FE8805;\n}\n\n.htext {\n  color: #FE9805;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.para {\n  font-size: 10px;\n  font-weight: 500;\n  color: #000000;\n  margin: 4% 4%;\n}\n\n.boxdiv {\n  margin-top: 5%;\n}\n\n.one {\n  display: flex;\n  margin-left: 4%;\n  margin-bottom: 5%;\n}\n\n.imgdiv {\n  text-align: center;\n}\n\n.box1 {\n  background: #fff;\n  /*box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;*/\n  box-shadow: #0000001a 2px 5px 5px;\n  border-radius: 14px;\n}\n\n.text1 {\n  font-weight: 500;\n  font-size: 14px;\n  color: #000000;\n  margin-top: 5%;\n}\n\n.innerbox {\n  text-align: center;\n  padding: 10% 0%;\n}\n\n.left {\n  width: 45%;\n  float: left;\n}\n\n.right {\n  width: 45%;\n  float: left;\n  margin-left: 5%;\n}\n\n.clear {\n  clear: both;\n}\n\n.inputdiv1 {\n  margin: 10% auto 5%;\n  display: flex;\n  border-radius: 12px;\n  background: #FFFFFF;\n  width: 80%;\n}\n\n.pinput1 {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n  padding: 1% 0% 1% 7%;\n}\n\n.cimg {\n  margin-right: 5%;\n}\n\n.contactdiv {\n  display: flex;\n  margin-left: 30%;\n}\n\n.contactdiv p {\n  margin: 0px;\n  padding-left: 5%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 80%;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10%;\n  height: 58px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVkaXRjaGlsZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNDLFdBQUE7QUFFRDs7QUFBQTtFQUNDLGVBQUE7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBREE7RUFFRSxlQUFBO0VBQ0UsZ0JBQUE7QUFHSjs7QUFEQTtFQUNDLGtCQUFBO0VBQW9CLGdCQUFBO0FBS3JCOztBQUZDO0VBQ0Msa0JBQUE7RUFBb0IsaUJBQUE7QUFNdEI7O0FBSkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSEE7RUFDRSxxQkFBQTtBQU1GOztBQUpBO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FBT0Q7O0FBTEE7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQVFEOztBQU5BO0VBQ0MscUJBQUE7RUFDRyxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQVNKOztBQVBBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVVGOztBQVJBO0VBQ0MsYUFBQTtFQUNHLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQVdKOztBQVRBO0VBRUMsV0FBQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBV0Y7O0FBVEE7RUFDQyxjQUFBO0VBQ0MsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFZRjs7QUFWQTtFQUNDLHNCQUFBO0VBQ0MsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBYUY7O0FBWEE7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBY0Q7O0FBWkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQWVEOztBQWJBO0VBQ0MsY0FBQTtBQWdCRDs7QUFkQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFpQkQ7O0FBZkE7RUFDQyxrQkFBQTtBQWtCRDs7QUFoQkE7RUFDQyxnQkFBQTtFQUNHLDZDQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBQW1CSjs7QUFqQkE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQW9CRDs7QUFsQkE7RUFDQyxrQkFBQTtFQUNDLGVBQUE7QUFxQkY7O0FBbkJBO0VBQ0MsVUFBQTtFQUNBLFdBQUE7QUFzQkQ7O0FBcEJBO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBdUJEOztBQXJCQTtFQUNDLFdBQUE7QUF3QkQ7O0FBdEJBO0VBQ0MsbUJBQUE7RUFDRyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUF5Qko7O0FBdkJBO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBMEJKOztBQXhCQTtFQUNDLGdCQUFBO0FBMkJEOztBQXhCQTtFQUNDLGFBQUE7RUFDQyxnQkFBQTtBQTJCRjs7QUF6QkE7RUFDQyxXQUFBO0VBQ0MsZ0JBQUE7QUE0QkY7O0FBekJBO0VBRUUsa0JBQUE7RUFDRCxXQUFBO0VBQ0EsZUFBQTtBQTJCRDs7QUF6QkE7RUFHQyxZQUFBO0VBQ0MscUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNDLG1CQUFBO0VBQ0QscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQTBCRjs7QUF4QkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBMkJGIiwiZmlsZSI6ImVkaXRjaGlsZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgcGFkZGluZzogMSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuLmJhY2tidG57XHJcblx0bWFyZ2luLWxlZnQ6MCU7XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuICAuYmFja2J0bntcclxuICAgIG1hcmdpbi1sZWZ0OjAlO1xyXG4gICAgcGFkZGluZy10b3A6MTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICB9XHJcbiAgLmhlYWRCZyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgICBwYWRkaW5nOiAzJSAwJTtcclxuICB9XHJcbn1cclxuLmJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG4ud3JhcHBlcntcclxuXHR3aWR0aDo4MCU7XHJcblx0bWFyZ2luOjEwJSBhdXRvO1xyXG59XHJcbi50b3BkaXZ7XHJcblx0d2lkdGg6ODAlO1xyXG5cdG1hcmdpbjowJSBhdXRvO1xyXG59XHJcbi5sb2dvZGl2e1xyXG5cdC8qYmFja2dyb3VuZDogI2ZmZmY7Ki9cclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIG1hcmdpbjogMCUgYXV0bztcclxuICAgIC8qYm9yZGVyLXJhZGl1czogOTBweDsqL1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxufVxyXG4ubG9nb2RpdiBpbWd7XHJcblx0IGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbn1cclxuLmlucHV0ZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLnBpbnB1dFxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG9wYWNpdHk6IDQ4JTtcclxuICBwYWRkaW5nOiAwJSAwJSAxJSA3JVxyXG59XHJcbi5wcm9ncmVzc2RpdntcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxuICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmlvbi1yYW5nZXtcclxuXHQtLWJhci1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIC0tYmFyLWhlaWdodDogNXB4O1xyXG4gIC0tYmFyLWJvcmRlci1yYWRpdXM6IDZweDtcclxuICAtLWtub2ItYmFja2dyb3VuZDogI0ZFOTgwNTtcclxuICAtLWtub2Itc2l6ZTogMTVweDtcclxuICAvKiAtLXBpbi1iYWNrZ3JvdW5kOiAjRkU5ODA1OyAqL1xyXG4gIC0tcGluLWNvbG9yOiAjRkU5ODA1O1xyXG4gIC0taGVpZ2h0OiAxNXB4O1xyXG4gIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjRkU4ODA1O1xyXG59XHJcbi5odGV4dHtcclxuXHRjb2xvcjogI0ZFOTgwNTtcclxuXHRmb250LXdlaWdodDo1MDA7XHJcblx0Zm9udC1zaXplOjE0cHg7XHJcbn1cclxuLnBhcmF7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRtYXJnaW46IDQlIDQlO1xyXG59XHJcbi5ib3hkaXZ7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLm9uZXtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbi1sZWZ0OiA0JTtcclxuXHRtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG4uaW1nZGl2e1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYm94MXtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLypib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAzNSUpIDBweCA1cHggMTVweDsqL1xyXG4gICAgYm94LXNoYWRvdzogIzAwMDAwMDFhIDJweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG4udGV4dDF7XHJcblx0Zm9udC13ZWlnaHQ6NTAwO1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmlubmVyYm94e1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMCUgMCU7XHJcbn1cclxuLmxlZnR7XHJcblx0d2lkdGg6IDQ1JTtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG4ucmlnaHR7XHJcblx0d2lkdGg6IDQ1JTtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuLmNsZWFye1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcbi5pbnB1dGRpdjF7XHJcblx0bWFyZ2luOiAxMCUgYXV0byA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuLnBpbnB1dDF7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG9wYWNpdHk6IDQ4JTtcclxuICAgIHBhZGRpbmc6IDElIDAlIDElIDclO1xyXG59XHJcbi5jaW1ne1xyXG5cdG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi5jb250YWN0ZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJVxyXG59XHJcbi5jb250YWN0ZGl2IHB7XHJcblx0bWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmlvbmJ1dHRvblxyXG57XHRcclxuIFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4uaWJcclxue1xyXG5cclxuXHRjb2xvcjogd2hpdGU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRkU5ODA1O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgaGVpZ2h0OiA1OHB4O1xyXG4gICAtLWJvcmRlci13aWR0aDogMXB4OyBcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiAjZmYwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "gP74":
    /*!*********************************************!*\
      !*** ./src/app/editchild/editchild.page.ts ***!
      \*********************************************/

    /*! exports provided: EditchildPage */

    /***/
    function gP74(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditchildPage", function () {
        return EditchildPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_editchild_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./editchild.page.html */
      "tDwt");
      /* harmony import */


      var _editchild_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editchild.page.scss */
      "AxZQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_child_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/child.service */
      "ZEea");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _services_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/rest.service */
      "tnAE");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_editchild_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/editchild.service */
      "l2wf");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "tAfe");

      var EditchildPage = /*#__PURE__*/function () {
        function EditchildPage(navCtrl, childService, editchildService, camera, imagePicker, alertCtrl, loading, rest, route) {
          _classCallCheck(this, EditchildPage);

          this.navCtrl = navCtrl;
          this.childService = childService;
          this.editchildService = editchildService;
          this.camera = camera;
          this.imagePicker = imagePicker;
          this.alertCtrl = alertCtrl;
          this.loading = loading;
          this.rest = rest;
          this.route = route;
          this.numberarray = [];
          this.array = [];
          this.defaultProfile = '';
          this.picUrl = '';
          this.age = 0;
          this.contacts = '';
          this.childname = '';
          this.diagnosis = '';
          this.allergies = '';
          this.pediatrician = '';
          this.insuranceinfo = '';
          this.instructions = '';
          this.notes = '';
          this.allergiesarr = [];
          this.medicationname = [];
          this.foodname = [];
          this.snackname = [];
          this.nooflikes = [];
          this.noofdislkikes = [];
          this.nooffavorite = [];
          this.medicationsarr = [];
          this.foodarr = [];
          this.snackarr = [];
          this.likesarr = [];
          this.dislikesarr = [];
          this.favouritearr = [];
          this.contactsarr = [];
          this.childnameError = {
            status: false,
            message: ""
          };
          this.diagnosisError = {
            status: false,
            message: ""
          };
          this.allergiesError = {
            status: false,
            message: ""
          };
          this.contactsError = {
            status: false,
            message: ""
          };
          this.pediatricianError = {
            status: false,
            message: ""
          };
          this.insuranceinfoError = {
            status: false,
            message: ""
          };
          this.instructionsError = {
            status: false,
            message: ""
          };
          this.notesError = {
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
          this.allergyarr = [];
          this.array1 = [];
          this.emergencycontacts = [];
          this.error = {
            status: false,
            message: ""
          };
          this.userid = localStorage.getItem('uid');
          console.log('userid', this.userid);
          console.log('allergies', this.allergies);
          this.childid = this.childService.childid;
          console.log('child id', this.childid);
          this.parentid = this.childService.parentid;
          console.log('parentid id', this.parentid);
          this.childdata = JSON.parse(this.childService.childdata);
          this.getdetails(this.childdata);
        }

        _createClass(EditchildPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.imagePicker.requestReadPermission();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.medicationname = this.editchildService.medication;
            console.log('medication', this.medicationname);
            this.foodname = this.editchildService.food;
            console.log('food', this.foodname);
            this.snackname = this.editchildService.snack;
            console.log('snack', this.snackname);
            this.nooflikes = this.editchildService.likes;
            console.log('likes', this.nooflikes);
            this.noofdislkikes = this.editchildService.dislikes;
            console.log('dislikes', this.noofdislkikes);
            this.nooffavorite = this.editchildService.favorite;
            console.log('favorite', this.nooffavorite);
          }
        }, {
          key: "goback",
          value: function goback() {
            this.navCtrl.navigateBack('/child');
          }
        }, {
          key: "setValue",
          value: function setValue($event) {
            this.age = parseInt($event.target.value, 10);
            console.log('current value', this.age);
          }
        }, {
          key: "add",
          value: function add() {
            if (this.contacts) {
              // let data={
              //   phoneno:this.contacts
              // }
              // this.array.push(data);
              this.emergencycontacts.push(this.contacts);
              console.log('t', this.emergencycontacts);
              this.contacts = '';
            }

            if (!this.contacts) {
              console.log('nullllllllll');
            }
          }
        }, {
          key: "uploadPic",
          value: function uploadPic() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this2 = this;

              var confirm;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertCtrl.create({
                      header: 'Choose from',
                      cssClass: 'profileAlertBox',
                      buttons: [{
                        text: 'Camera',
                        handler: function handler() {
                          _this2.camera.getPicture(_this2.cameraOptions).then(function (imageData) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                                while (1) switch (_context5.prev = _context5.next) {
                                  case 0:
                                    console.log('imagedata is = ', imageData);
                                    this.picUrl = imageData;
                                    this.defaultProfile = "data:image/png;base64,".concat(imageData);
                                    console.log('defaultProfile is = ', this.defaultProfile);

                                  case 4:
                                  case "end":
                                    return _context5.stop();
                                }
                              }, _callee5, this);
                            }));
                          }, function (err) {});
                        }
                      }, {
                        text: 'Gallery',
                        handler: function handler() {
                          var options = {
                            maximumImagesCount: 1,
                            outputType: 1
                          };

                          _this2.imagePicker.getPictures(options).then(function (results) {
                            console.log('all selected', results);

                            if (results != null) {
                              for (var i = 0; i < results.length; i++) {
                                console.log('each one' + results[i]);

                                if (results[i] != "") {
                                  console.log('data:image/jpeg;base64,', results[i]);
                                  _this2.picUrl = results[i];
                                  _this2.defaultProfile = "data:image/png;base64,".concat(results[i]);
                                }
                              }
                            }
                          }, function (err) {
                            console.log('error', err);
                          }); // this.camera.getPicture(this.galleryOptions)
                          // .then(async imageData => {
                          //  console.log('imagedata is = ' , imageData);
                          //  this.picUrl=imageData;
                          //   this.defaultProfile = `data:image/png;base64,${imageData}`
                          //   console.log('defaultProfile is = ' , this.defaultProfile); 
                          // }, err => {
                          // })

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
          key: "getdetails",
          value: function getdetails(data) {
            var _this3 = this;

            console.log('childetails:', data); // this.loading.loadershow();

            this.array = [];
            this.array1 = [];
            this.med = [];
            this.food = [];
            this.snackvalue = [];
            this.likeval = [];
            this.dislikeval = [];
            this.fav = [];
            var senddata = {
              userId: this.parentid,
              childId: this.childid
            }; // this.rest.sendRequest("get_child_details",senddata).subscribe(
            //  (data:any)=>{
            //   console.log('get_child_details data::',data);
            // this.loading.hideLoader();

            if (data.profile_picture == null) {
              this.defaultProfile = 'assets/imgs/profilelogo.png';
            } else {
              this.defaultProfile = data.profile_picture;
            }

            this.childname = data.child_name;
            this.age = data.age;
            this.diagnosis = data.diagnosis;
            this.pediatrician = data.pediatrician;
            this.instructions = data.special_instructions;
            this.insuranceinfo = data.insurance_info;
            this.notes = data.additional_notes;
            console.log('childname', this.childname);
            console.log('diagnosis', this.diagnosis);
            console.log('age', this.age);
            console.log('pediatrician', this.pediatrician);
            console.log('instructions', this.instructions);
            console.log('insuranceinfo', this.insuranceinfo);
            console.log('notes', this.notes);
            data.allergies.forEach(function (val) {
              console.log('allergies array', val);
              var data = {
                allergy: val.allergy
              };

              _this3.array1.push(val.allergy);

              _this3.allergies = _this3.array1.toString();
              console.log('allergies:', _this3.array1);
            });
            console.log('data.medications===== from previous page', data.medications); ///////////medication/////////////

            data.medications.forEach(function (val) {
              var data = {
                medication_name: val.medication_name,
                medication_time: val.medication_time
              };

              _this3.medicationsarr.push(data);

              _this3.med = _this3.medicationsarr;
            });
            this.editchildService.medication = this.med;
            console.log('medications---first time applying to serviceee', this.editchildService.medication); //////////////medication end///////////////
            ////////// eating ///////////////////////

            data.eating_schedule.forEach(function (val) {
              var data = {
                food_name: val.food_name,
                eating_time: val.eating_time
              };

              _this3.foodarr.push(data);

              _this3.food = _this3.foodarr;
            });
            this.editchildService.food = this.food;
            console.log('Food---first time applying to serviceee', this.editchildService.food); ///////////eating end /////////////////////////
            /////////////snack ///////////////////////

            data.snacks_schedule.forEach(function (val) {
              var data = {
                snack_name: val.snack_name,
                snack_time: val.snack_time
              };

              _this3.snackarr.push(data);

              _this3.snackvalue = _this3.snackarr;
            });
            this.editchildService.snack = this.snackvalue;
            console.log('snack---first time applying to serviceee', this.editchildService.snack); /////////////snack end///////////////////////////
            /////////////likes/////////////////////

            data.likes.forEach(function (val) {
              _this3.likesarr.push(val.like);

              _this3.likeval = _this3.likesarr;
            });
            this.editchildService.likes = this.likeval;
            console.log('likes---first time applying to serviceee', this.editchildService.likes); /////////////likes end /////////////////////
            /////////dislike/////////////////////

            data.dislikes.forEach(function (val) {
              _this3.dislikesarr.push(val.dislike);

              _this3.dislikeval = _this3.dislikesarr;
            });
            this.editchildService.dislikes = this.dislikeval;
            console.log('dislikes---first time applying to serviceee', this.editchildService.dislikes); /////////dislike end /////////////////////
            ///////// favourite/////////////////////

            data.favourite_activities.forEach(function (val) {
              _this3.favouritearr.push(val.favourite_activity);

              _this3.fav = _this3.favouritearr;
            });
            this.editchildService.favorite = this.fav;
            console.log('favorite---first time applying to serviceee', this.editchildService.favorite); ///////// favourite end/////////////////////

            data.emergency_contacts.forEach(function (val) {
              //  let data={
              //    phoneno:val.emergency_contact
              //  }
              //  this.numberarray.push(data)
              _this3.emergencycontacts.push(val.emergency_contact);
            });
            console.log('contactsarr', this.emergencycontacts); //   }
            // );
          }
        }, {
          key: "medication",
          value: function medication() {
            this.navCtrl.navigateForward('/editmedication');
          }
        }, {
          key: "eating",
          value: function eating() {
            this.navCtrl.navigateForward('/editeating'); // this.editchildService.editpage='edit';
          }
        }, {
          key: "snack",
          value: function snack() {
            this.navCtrl.navigateForward('/editsnack'); // this.editchildService.editpage='edit';
          }
        }, {
          key: "likes",
          value: function likes() {
            this.navCtrl.navigateForward('/editlikes'); // this.editchildService.editpage='edit';
          }
        }, {
          key: "dislikes",
          value: function dislikes() {
            this.navCtrl.navigateForward('/editdislikes'); // this.editchildService.editpage='edit';
          }
        }, {
          key: "favorite",
          value: function favorite() {
            this.navCtrl.navigateForward('/editfavorite'); // this.editchildService.editpage='edit';
          }
        }, {
          key: "gotoprofile",
          value: function gotoprofile() {
            var _this4 = this;

            if (this.allergies == '') {
              this.allergiesarr;
            } else {
              this.allergies;
              this.allergiesarr = this.allergies.split(",");
              console.log('allergies', this.allergiesarr);
            }

            console.log('childname', this.childname);

            if (this.childname && this.diagnosis && this.allergies.length > 0 && this.pediatrician && this.insuranceinfo && this.instructions && this.notes) {
              var fields = {
                childId: this.childid,
                parentId: this.userid,
                profilePicture: this.picUrl,
                childName: this.childname,
                age: this.age,
                diagnosis: this.diagnosis,
                allergies: this.allergiesarr,
                medications: this.medicationname,
                eatingSchedule: this.foodname,
                snacksSchedule: this.snackname,
                likes: this.nooflikes,
                dislikes: this.noofdislkikes,
                favouriteActivities: this.nooffavorite,
                emergencyContacts: this.emergencycontacts,
                pediatrician: this.pediatrician,
                insuranceInfo: this.insuranceinfo,
                specialInstructions: this.instructions,
                additionalNotes: this.notes
              };
              console.log('json stringfy', JSON.stringify(fields));
              this.loading.loadershow();
              this.rest.sendRequest("edit_child", fields).subscribe(function (data) {
                console.log('edit child data::', data);

                if (data.status == 'success') {
                  console.log('edit child data::', data);

                  _this4.loading.hideLoader();

                  _this4.navCtrl.navigateForward('/child');

                  _this4.editchildService.medication = [];
                  _this4.editchildService.food = [];
                  _this4.editchildService.snack = [];
                  _this4.editchildService.likes = [];
                  _this4.editchildService.dislikes = [];
                  _this4.editchildService.favorite = [];
                }

                if (data.status == 'error') {
                  _this4.loading.hideLoader();

                  console.log('signup request data:', data.status);
                  _this4.error.status = true;
                  _this4.error.message = data.message;
                  setTimeout(function () {
                    _this4.error.status = false;
                    _this4.error.message = "";
                  }, 3000);
                  return;
                }
              }, function (err) {});
            }

            if (!this.childname) {
              this.childnameError.status = true;
              this.childnameError.message = "Field is required";
            }

            if (!this.diagnosis) {
              this.diagnosisError.status = true;
              this.diagnosisError.message = "Field is required";
            }

            if (this.allergies.length == 0) {
              this.allergiesError.status = true;
              this.allergiesError.message = "Field is required";
            } // if(this.emergencycontacts.length==0){
            //   this.contactsError.status = true;
            //   this.contactsError.message = "Field is required";
            // }


            if (!this.pediatrician) {
              this.pediatricianError.status = true;
              this.pediatricianError.message = "Field is required";
            }

            if (!this.insuranceinfo) {
              this.insuranceinfoError.status = true;
              this.insuranceinfoError.message = "Field is required";
            }

            if (!this.instructions) {
              this.instructionsError.status = true;
              this.instructionsError.message = "Field is required";
            }

            if (!this.notes) {
              this.notesError.status = true;
              this.notesError.message = "Field is required";
            }

            setTimeout(function () {
              _this4.childnameError.status = false;
              _this4.childnameError.message = "";
              _this4.diagnosisError.status = false;
              _this4.diagnosisError.message = "";
              _this4.allergiesError.status = false;
              _this4.allergiesError.message = ""; // this.contactsError.status = false;
              // this.contactsError.message = "";

              _this4.pediatricianError.status = false;
              _this4.pediatricianError.message = "";
              _this4.insuranceinfoError.status = false;
              _this4.insuranceinfoError.message = "";
              _this4.instructionsError.status = false;
              _this4.instructionsError.message = "";
              _this4.notesError.status = false;
              _this4.notesError.message = "";
            }, 3000);
          }
        }]);

        return EditchildPage;
      }();

      EditchildPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_child_service__WEBPACK_IMPORTED_MODULE_5__["ChildService"]
        }, {
          type: _services_editchild_service__WEBPACK_IMPORTED_MODULE_10__["EditchildService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__["ImagePicker"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }];
      };

      EditchildPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editchild',
        template: _raw_loader_editchild_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editchild_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditchildPage);
      /***/
    },

    /***/
    "tDwt":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editchild/editchild.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function tDwt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t\t  <ion-toolbar class=\"headBgGlobal\">\r\n        <ion-row>\r\n          <ion-col class=\"backbtn\" size=\"2\">\r\n            <div>\r\n              <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n            </div>\r\n          </ion-col>\r\n    \r\n          <ion-col class=\"titleclass\" size=\"8\">\r\n            <ion-text class=\"ctitle\">Edit Child</ion-text>\r\n          </ion-col>\r\n    \r\n          <ion-col size=\"2\">\r\n    \r\n          </ion-col>\r\n        </ion-row>\r\n\t\t    <!-- <ion-buttons slot=\"start\" class=\"backbtn\">\r\n\t\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t\t  </ion-buttons>\r\n\t\t  <ion-title class=\"ctitle\">Edit Child</ion-title> -->\r\n\t\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\t<div class=\"wrapper\">\r\n\t\t<div class=\"topdiv\">\r\n\t\t\t<div class=\"logodiv\" (click)=\"uploadPic()\">\r\n\t\t\t\t<!-- <img src=\"{{defaultProfile}}\"> -->\r\n\t\t\t\t<img src=\"{{defaultProfile}}\" *ngIf=\"defaultProfile!=''\">\r\n\t\t\t\t<img src=\"assets/imgs/profilelogo.png\" *ngIf=\"defaultProfile==''\">\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"inputdiv\">\r\n\t\t\t\t<div class=\"pinput\">\r\n\t\t\t\t\t<ion-input placeholder=\"Childname\" type=\"text\" [(ngModel)]=\"childname\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<p *ngIf=\"childnameError.status\" class=\"error\">\r\n    \t\t{{childnameError.message}}\r\n\t    </p>\r\n\t\t\t<div class=\"progressdiv\">\r\n\t\t\t\t<div class=\"htext\">Age</div>\r\n\t\t\t\t<!-- <img src=\"assets/imgs/progress.png\"> -->\r\n\t\t\t\t<ion-range min=\"0\" max=\"30\"\r\n\t\t\t\t [value]=\"age\" \r\n\t\t\t\t\t(ionChange)=\"setValue($event)\">\r\n\t\t\t \t></ion-range>\r\n\t\t\t\t<p style=\"margin: 0px;margin-left: 25%;font-size: 10px;font-weight: 500;\">{{age}} years</p>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<div class=\"inputdiv\">\r\n\t\t\t\t<div class=\"pinput\">\r\n\t\t\t\t\t<ion-input placeholder=\"Diagnosis\" type=\"text\" [(ngModel)]=\"diagnosis\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<p *ngIf=\"diagnosisError.status\" class=\"error\">\r\n    \t\t{{diagnosisError.message}}\r\n\t    </p>\r\n\t\t\t<div class=\"inputdiv\">\r\n\t\t\t\t<div class=\"pinput\">\r\n\t\t\t\t\t<ion-input placeholder=\"Allergies\" type=\"text\" [(ngModel)]=\"allergies\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"para\">Write allergies separated by ,</div>\r\n\t\t</div>\r\n\t\t<p *ngIf=\"allergiesError.status\" class=\"error\">\r\n    \t\t{{allergiesError.message}}\r\n\t  </p>\r\n\t\t<!-- <div class=\"boxdiv\">\r\n\t\t\t<div class=\"one\">\r\n\t\t\t\t<div class=\"box1\">\r\n\t\t\t\t\t<div class=\"innerbox\">\r\n\t\t\t\t\t\t<div class=\"imgdiv\">\r\n\t\t\t\t\t\t\t<img src=\"assets/imgs/pharma.svg\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"text1\">Medications</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"box2\">\r\n\t\t\t\t\t<div class=\"imgdiv\">\r\n\t\t\t\t\t\t<img src=\"assets/imgs/nutrition.svg\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text1\">Eating Time</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"one\">\r\n\t\t\t\t<div class=\"box1\">\r\n\t\t\t\t\t<div class=\"innerbox\">\r\n\t\t\t\t\t\t<div class=\"imgdiv\">\r\n\t\t\t\t\t\t\t<img src=\"assets/imgs/pharma.svg\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"text1\">Medications</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"box2\">\r\n\t\t\t\t\t<div class=\"imgdiv\">\r\n\t\t\t\t\t\t<img src=\"assets/imgs/nutrition.svg\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text1\">Eating Time</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"one\">\r\n\t\t\t\t<div class=\"box1\">\r\n\t\t\t\t\t<div class=\"innerbox\">\r\n\t\t\t\t\t\t<div class=\"imgdiv\">\r\n\t\t\t\t\t\t\t<img src=\"assets/imgs/pharma.svg\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"text1\">Medications</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"box2\">\r\n\t\t\t\t\t<div class=\"imgdiv\">\r\n\t\t\t\t\t\t<img src=\"assets/imgs/nutrition.svg\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text1\">Eating Time</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n\r\n\t\t<div class=\"boxdiv\">\r\n\t\t\t<div class=\"left\" (click)=\"medication()\">\r\n\t\t\t\t<div class=\"box1\">\r\n\t\t\t\t\t<div class=\"innerbox\">\r\n\t\t\t\t\t\t<img src=\"assets/imgs/pharma.svg\">\r\n\t\t\t\t\t\t<div class=\"text1\">Medications</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"right\" (click)=\"eating()\">\r\n\t\t\t\t<div class=\"box1\">\r\n\t\t\t\t\t<div class=\"innerbox\">\r\n\t\t\t\t\t\t<img src=\"assets/imgs/nutrition-protein.svg\">\r\n\t\t\t\t\t\t<div class=\"text1\">Eating Time</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"clear\"></div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"boxdiv\">\r\n\t\t\t<div class=\"left\" (click)=\"snack()\">\r\n\t\t\t\t<div class=\"box1\">\r\n\t\t\t\t\t<div class=\"innerbox\">\r\n\t\t\t\t\t\t<img src=\"assets/imgs/snack.svg\">\r\n\t\t\t\t\t\t<div class=\"text1\">Snack Time</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"right\" (click)=\"likes()\">\r\n\t\t\t\t<div class=\"box1\">\r\n\t\t\t\t\t<div class=\"innerbox\">\r\n\t\t\t\t\t\t<img src=\"assets/imgs/likes.svg\">\r\n\t\t\t\t\t\t<div class=\"text1\">Likes</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"clear\"></div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"boxdiv\">\r\n\t\t\t<div class=\"left\"  (click)=\"dislikes()\">\r\n\t\t\t\t<div class=\"box1\">\r\n\t\t\t\t\t<div class=\"innerbox\">\r\n\t\t\t\t\t\t<img src=\"assets/imgs/dislikes.svg\">\r\n\t\t\t\t\t\t<div class=\"text1\">DisLikes</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"right\" (click)=\"favorite()\">\r\n\t\t\t\t<div class=\"box1\">\r\n\t\t\t\t\t<div class=\"innerbox\">\r\n\t\t\t\t\t\t<img src=\"assets/imgs/star.svg\">\r\n\t\t\t\t\t\t<div class=\"text1\">Favorite Activities</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"clear\"></div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"inputdiv1\">\r\n\t\t\t<div class=\"pinput1\">\r\n\t\t\t\t<ion-input placeholder=\"Emergency Contacts\" type=\"tel\" [(ngModel)]=\"contacts\"></ion-input>\r\n\t\t\t</div>\r\n\t\t\t<img src=\"assets/imgs/icons/plus.svg\" class=\"cimg\" (click)=\"add()\">\r\n\t\t</div>\r\n\r\n\t\t<!-- <p *ngIf=\"contactsError.status\" class=\"error\">\r\n    \t\t{{contactsError.message}}\r\n\t  </p> -->\r\n\r\n\t\t<div class=\"contactdiv\" *ngFor=\"let arr of emergencycontacts\">\r\n\t\t\t<div class=\"icondiv\">\r\n\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\r\n\t\t\t</div>\r\n\t\t\t<p>{{arr}}</p>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"fields\">\r\n\t\t\t<div class=\"inputdiv1\">\r\n\t\t\t\t<div class=\"pinput1\">\r\n\t\t\t\t\t<ion-textarea placeholder=\"Pediatrician\"  rows=\"3\" cols=\"20\" [(ngModel)]=\"pediatrician\"></ion-textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<p *ngIf=\"pediatricianError.status\" class=\"error\">\r\n    \t\t{{pediatricianError.message}}\r\n\t  </p>\r\n\t\t<div class=\"fields\">\r\n\t\t\t<div class=\"inputdiv1\">\r\n\t\t\t\t<div class=\"pinput1\">\r\n\t\t\t\t\t<ion-textarea placeholder=\"Insurance information\"  rows=\"3\" cols=\"20\" [(ngModel)]=\"insuranceinfo\"></ion-textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<p *ngIf=\"insuranceinfoError.status\" class=\"error\">\r\n    \t\t{{insuranceinfoError.message}}\r\n\t  </p>\r\n\r\n\t\t<div class=\"fields\">\r\n\t\t\t<div class=\"inputdiv1\">\r\n\t\t\t\t<div class=\"pinput1\">\r\n\t\t\t\t\t<ion-textarea placeholder=\"Special instructions\"  rows=\"3\" cols=\"20\" [(ngModel)]=\"instructions\"></ion-textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<p *ngIf=\"instructionsError.status\" class=\"error\">\r\n    \t\t{{instructionsError.message}}\r\n\t  </p>\r\n\r\n\t\t<div class=\"fields\">\r\n\t\t\t<div class=\"inputdiv1\">\r\n\t\t\t\t<div class=\"pinput1\">\r\n\t\t\t\t\t<ion-textarea placeholder=\"Additional Notes\"  rows=\"3\" cols=\"20\" [(ngModel)]=\"notes\"></ion-textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<p *ngIf=\"notesError.status\" class=\"error\">\r\n    \t\t{{notesError.message}}\r\n\t  </p>\r\n\r\n\t\t<div class=\"ionbutton\" (click)=\"gotoprofile()\">\r\n\t\t\t<ion-button class=\"ib\">Save</ion-button>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=editchild-editchild-module-es5.js.map