(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deleteacc-deleteacc-module"], {
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
    "9mhu":
    /*!*********************************************!*\
      !*** ./src/app/deleteacc/deleteacc.page.ts ***!
      \*********************************************/

    /*! exports provided: DeleteaccPage */

    /***/
    function mhu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteaccPage", function () {
        return DeleteaccPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_deleteacc_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./deleteacc.page.html */
      "bC5v");
      /* harmony import */


      var _deleteacc_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./deleteacc.page.scss */
      "ekFm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
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

      var DeleteaccPage = /*#__PURE__*/function () {
        function DeleteaccPage(rest, loacton, navCtrl, basicmsg) {
          _classCallCheck(this, DeleteaccPage);

          this.rest = rest;
          this.loacton = loacton;
          this.navCtrl = navCtrl;
          this.basicmsg = basicmsg;
          this.Checkboxes = [{
            question: "I concerned about my personal data",
            isItemChecked: false
          }, {
            question: "I have another  UniqKidz account",
            isItemChecked: false
          }, {
            question: "I want to remove app from my mobile",
            isItemChecked: false
          }, {
            question: "I get too many emails from UniqKidz",
            isItemChecked: false
          }, {
            question: "Other",
            isItemChecked: false
          }];
          this.selectquestions = [];
        }

        _createClass(DeleteaccPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.loacton.back();
          }
        }, {
          key: "verifyEvent",
          value: function verifyEvent(ev) {
            console.log(ev);

            if (ev.isItemChecked == true) {
              this.selectquestions.push(ev.question);
              console.log("selectquestions aray", this.selectquestions);
            }

            if (ev.isItemChecked == false) {
              var index = this.selectquestions.indexOf(ev.question);

              if (index > -1) {
                this.selectquestions.splice(index, 1); // 2nd parameter means remove one item only

                console.log("job aray", this.selectquestions);
              }
            }
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this2 = this;

            var user = JSON.parse(localStorage.getItem("user"));
            console.log("userrrrrrrrrrrrrr", user.email);

            if (this.selectquestions.length == 0) {
              this.basicmsg.presentToast("Choose one option atleast");
            } else {
              var del = {
                email: user.email
              };
              this.rest.sendRequest("delete_account", del).subscribe(function (res) {
                console.log("report user result==", res);

                if (res.status == "success") {
                  _this2.basicmsg.presentToast(res.data);

                  localStorage.clear();

                  _this2.navCtrl.navigateRoot("/");
                }

                if (res.status == "error") {
                  _this2.basicmsg.presentToast(res.message);
                }
              });
            }
          }
        }]);

        return DeleteaccPage;
      }();

      DeleteaccPage.ctorParameters = function () {
        return [{
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }];
      };

      DeleteaccPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-deleteacc",
        template: _raw_loader_deleteacc_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_deleteacc_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DeleteaccPage);
      /***/
    },

    /***/
    "DFNe":
    /*!***********************************************!*\
      !*** ./src/app/deleteacc/deleteacc.module.ts ***!
      \***********************************************/

    /*! exports provided: DeleteaccPageModule */

    /***/
    function DFNe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteaccPageModule", function () {
        return DeleteaccPageModule;
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


      var _deleteacc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./deleteacc-routing.module */
      "O6QR");
      /* harmony import */


      var _deleteacc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./deleteacc.page */
      "9mhu");

      var DeleteaccPageModule = /*#__PURE__*/_createClass(function DeleteaccPageModule() {
        _classCallCheck(this, DeleteaccPageModule);
      });

      DeleteaccPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _deleteacc_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeleteaccPageRoutingModule"]],
        declarations: [_deleteacc_page__WEBPACK_IMPORTED_MODULE_6__["DeleteaccPage"]]
      })], DeleteaccPageModule);
      /***/
    },

    /***/
    "O6QR":
    /*!*******************************************************!*\
      !*** ./src/app/deleteacc/deleteacc-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: DeleteaccPageRoutingModule */

    /***/
    function O6QR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteaccPageRoutingModule", function () {
        return DeleteaccPageRoutingModule;
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


      var _deleteacc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./deleteacc.page */
      "9mhu");

      var routes = [{
        path: '',
        component: _deleteacc_page__WEBPACK_IMPORTED_MODULE_3__["DeleteaccPage"]
      }];

      var DeleteaccPageRoutingModule = /*#__PURE__*/_createClass(function DeleteaccPageRoutingModule() {
        _classCallCheck(this, DeleteaccPageRoutingModule);
      });

      DeleteaccPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DeleteaccPageRoutingModule);
      /***/
    },

    /***/
    "bC5v":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deleteacc/deleteacc.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function bC5v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col style=\"padding-top: 6px\" size=\"2\">\n        <div>\n          <ion-menu-button class=\"menuicon\"></ion-menu-button>\n        </div>\n      </ion-col>\n\n      <ion-col class=\"titleclass\" size=\"8\">\n        <ion-text class=\"ctitle\">Delete Account</ion-text>\n      </ion-col>\n\n      <ion-col size=\"2\"> </ion-col>\n    </ion-row>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menuicon\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ctitle\">Terms & Conditions</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"background\">\n  <div class=\"wrapper\">\n    <div class=\"thead\">Why do you want to delete your UniqKidz account?</div>\n    <div class=\"flex-c\" *ngFor=\"let checkboxes of Checkboxes\">\n      <ion-checkbox\n        mode=\"md\"\n        class=\"check\"\n        [(ngModel)]=\"checkboxes.isItemChecked\"\n        (ionChange)=\"verifyEvent(checkboxes)\"\n      >\n      </ion-checkbox>\n      <span class=\"lbl\">{{checkboxes.question}}</span>\n    </div>\n\n    <div style=\"color: #000000; margin-top: 10%; font-size: 14px\">\n      Commnets(optional)\n    </div>\n\n    <ion-textarea\n      style=\"padding: 10px 20px\"\n      rows=\"10\"\n      cols=\"5\"\n      class=\"desc-area\"\n      placeholder=\"Please provide additional information here...\"\n      [(ngModel)]=\"desc\"\n    ></ion-textarea>\n\n    <!-- <ion-button class=\"btn\" (click)=\"delete()\">Delete</ion-button> -->\n\n    <div class=\"ionbutton\" (click)=\"delete()\">\n      <ion-button class=\"ib\">\n        <span class=\"btns\">Delete Account</span>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "ekFm":
    /*!***********************************************!*\
      !*** ./src/app/deleteacc/deleteacc.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function ekFm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backicon {\n  margin-left: 10%;\n  margin-top: 6px;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .backicon {\n  margin-left: 10%;\n  margin-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 5% auto;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.thead {\n  color: #000000;\n  font-size: 17px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.flex-c {\n  display: flex;\n  align-items: center;\n  margin-top: 6%;\n}\n\n.lbl {\n  margin-left: 3%;\n  color: #000000;\n  font-size: 15.5px;\n}\n\n.check {\n  --background: #fff;\n  --background-checked: #fd8f07f2;\n  --checkmark-color: #FFFFFF;\n  --border-color-checked: #fd8f07f2;\n  --size: 17px;\n  --border-color: #fff;\n}\n\n.desc-area {\n  font-size: 13px;\n  border: 1px solid #000000;\n  border-radius: 10px;\n  margin-top: 3%;\n}\n\n.btn {\n  --background: #172A36 0% 0% no-repeat padding-box;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  color: #000000;\n  margin-top: 10%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #fd8f07f2;\n  outline: none;\n  width: 100%;\n  font-size: 15px;\n  margin-bottom: 10%;\n  height: 50px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 10px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n\n.btns {\n  font-size: 15px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RlbGV0ZWFjYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDRTtFQUNJLFdBQUE7QUFFTjs7QUFBRTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUdOOztBQUFFO0VBRUUsZUFBQTtFQUNFLGdCQUFBO0FBRU47O0FBQUU7RUFDSSxrQkFBQTtFQUFvQixnQkFBQTtBQUkxQjs7QUFETTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUlWOztBQUZNO0VBQ0ksa0JBQUE7RUFBb0IsaUJBQUE7QUFLOUI7O0FBSE07RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFLVjs7QUFGRTtFQUNJLHFCQUFBO0FBS047O0FBSEU7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQU1OOztBQURFO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QUFJSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFEQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBSUQ7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFPSjs7QUFMQTtFQUNJLGtCQUFBO0VBQ0UsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBUU47O0FBTEU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFRSjs7QUFORTtFQUNFLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBU0o7O0FBTkU7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUUY7O0FBTEE7RUFHRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQyxtQkFBQTtFQUNELHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFNRjs7QUFKQTtFQUNHLGVBQUE7RUFDQSxZQUFBO0FBT0giLCJmaWxlIjoiZGVsZXRlYWNjLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkQmcge1xuICAgIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcbiAgICBwYWRkaW5nOiAxJSAwJTtcbiAgfVxuICAubWVudWljb257XG4gICAgICBjb2xvcjojMDAwO1xuICB9XG4gIC5iYWNraWNvbntcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gIH1cbiAgXG4gIC5jdGl0bGV7XG4gICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICAudGl0bGVjbGFzc3tcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDhweDtcbiAgfVxuICAuaW9ze1xuICAgICAgLmJhY2tpY29ue1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgfVxuICAgICAgLnRpdGxlY2xhc3N7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTFweDtcbiAgICAgIH1cbiAgICAgIC5oZWFkQmcge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcbiAgICAgICAgICBwYWRkaW5nOiAzJSAwJTtcbiAgICAgICAgfVxuICB9XG4gIC5iYWNrZ3JvdW5ke1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xuICB9XG4gIC53cmFwcGVye1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIG1hcmdpbjogNSUgYXV0bztcbiAgfVxuXG4gIFxuXG4gIHAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4uc2MtaW9uLWlucHV0LWlvcy1oIHtcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4ud3JhcHBlcntcbiB3aWR0aDogOTAlO1xuIG1hcmdpbjogNSUgYXV0bztcbn1cbi50aGVhZHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmxleC1je1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDo2JTtcbn1cbi5sYmx7XG4gICAgbWFyZ2luLWxlZnQ6MyU7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1zaXplOiAxNS41cHg7XG59XG4uY2hlY2t7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZDhmMDdmMjtcbiAgICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2ZkOGYwN2YyO1xuICAgICAgLS1zaXplOiAxN3B4O1xuICAgICAgLS1ib3JkZXItY29sb3I6ICNmZmY7XG4gICAgLy8gICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDBweCAxMHB4IDBweDtcbiAgfVxuICAuZGVzYy1hcmVhe1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gIH1cbiAgLmJ0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTcyQTM2IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICB9XG5cbiAgLmlvbmJ1dHRvblxue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5pYlxue1xuXG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmQ4ZjA3ZjI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmJ0bnN7XG4gICBmb250LXNpemU6IDE1cHg7XG4gICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=deleteacc-deleteacc-module-es5.js.map