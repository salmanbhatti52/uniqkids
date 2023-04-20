(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["child-child-module"], {
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
    "R36a":
    /*!*************************************!*\
      !*** ./src/app/child/child.page.ts ***!
      \*************************************/

    /*! exports provided: ChildPage */

    /***/
    function R36a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildPage", function () {
        return ChildPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_child_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./child.page.html */
      "SlTZ");
      /* harmony import */


      var _child_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./child.page.scss */
      "rcGM");
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

      var ChildPage = /*#__PURE__*/function () {
        function ChildPage(navCtrl, loading, rest) {
          _classCallCheck(this, ChildPage);

          this.navCtrl = navCtrl;
          this.loading = loading;
          this.rest = rest;
          this.childarray = [];
          this.error = {
            status: false,
            message: ""
          };
          this.childdetil = false;
        }

        _createClass(ChildPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userid = localStorage.getItem('uid');
            console.log('userid', this.userid); // this.getchilds();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getchilds();
          }
        }, {
          key: "getchilds",
          value: function getchilds() {
            var _this2 = this;

            this.childarray = [];
            this.loading.loadershow();
            this.rest.sendRequest("display_children", {
              userId: this.userid
            }).subscribe(function (data) {
              if (data.status == 'success') {
                console.log('display_children data::', data);
                _this2.childdetil = true;
                data.data.forEach(function (val) {
                  if (val.profile_picture == null) {
                    _this2.defaultProfile = 'assets/imgs/profilelogo.png';
                  } else {
                    _this2.defaultProfile = val.profile_picture;
                  }

                  var Obj = {
                    childid: val.child_id,
                    parentid: val.parent_id,
                    name: val.child_name,
                    profile: _this2.defaultProfile,
                    age: val.age,
                    description: val.additional_notes
                  };

                  _this2.childarray.push(Obj);

                  _this2.loading.hideLoader();

                  _this2.error.status = false;
                });
                console.log('child array:', _this2.childarray);
              }

              if (data.status == 'error') {
                _this2.loading.hideLoader();

                console.log('signup request data:', data);
                _this2.error.status = true;
                _this2.error.message = data.message; // setTimeout(() => {
                //   this.error.status = false;
                //   this.error.message = "";
                // }, 3000);
              }
            });
          }
        }, {
          key: "gotoprofile",
          value: function gotoprofile(item) {
            this.navCtrl.navigateForward(['/childprofile', {
              childid: item.childid,
              parentid: item.parentid
            }]);
          }
        }, {
          key: "next",
          value: function next() {
            this.navCtrl.navigateForward('/addchild');
          }
        }]);

        return ChildPage;
      }();

      ChildPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }];
      };

      ChildPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-child',
        template: _raw_loader_child_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_child_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChildPage);
      /***/
    },

    /***/
    "SlTZ":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/child/child.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function SlTZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t  <ion-toolbar class=\"headBgGlobal\">\r\n\t\t<ion-row>\r\n\t\t\t<ion-col style=\"padding-top:6px;\" size=\"2\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n        </div>\r\n\t\t\t</ion-col>\r\n\r\n\t\t\t<ion-col class=\"titleclass\" size=\"8\">\r\n\t\t\t\t<ion-text class=\"ctitle\">Child</ion-text>\r\n\t\t\t</ion-col>\r\n\r\n\t\t\t<ion-col style=\"padding-top: 8px;padding-left: 20px;\" size=\"2\">\r\n        <div (click)=\"next()\">\r\n          <img src=\"assets/imgs/icons/plus.svg\">\r\n        </div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t    <!-- <ion-buttons slot=\"start\" class=\"menubtn\">\r\n\t\t    <ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n\t\t  </ion-buttons>\r\n\t  <ion-title class=\"ctitle\">Child</ion-title>\r\n\t  <ion-buttons slot=\"end\" class=\"plusbtn\" (click)=\"next()\">\r\n\t\t  <img src=\"assets/imgs/icons/plus.svg\">\r\n\t\t</ion-buttons> -->\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\t<div class=\"wrapper\">\r\n\t\t<p *ngIf=\"error.status\" class=\"error\">\r\n\t    {{error.message}}\r\n\t  </p>\r\n    <div *ngIf=\"childdetil==false\" style=\"margin-top: 45%;\">\r\n      <div class=\"defaulttext\">Add your child's details here to ensure the best care. </div>\r\n    </div>\r\n\t\t<div *ngFor=\"let child of childarray\">\r\n\t\t\t<div class=\"main\" (click)=\"gotoprofile(child)\">\r\n\t\t\t\t<div class=\"inner\">\r\n\t\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t\t<img src=\"{{child.profile}}\" width=\"146px\" height=\"130px\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t\t<div class=\"rtext\">{{child.name}},<span style=\"font-weight:400;margin-left: 3%;\">{{child.age}} years</span></div>\r\n\t\t\t\t\t\t<div class=\"rtext1\">{{child.description}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\r\n\t\t<!-- <div class=\"main\" (click)=\"gotoprofile()\">\r\n\t\t\t<div class=\"inner\">\r\n\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t<img src=\"assets/imgs/boy.png\" width=\"146px\" height=\"130px\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t<div class=\"rtext\">Karl,<span style=\"font-weight:400;margin-left: 3%;\">8 years</span></div>\r\n\t\t\t\t\t<div class=\"rtext1\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n\t</div>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "rcGM":
    /*!***************************************!*\
      !*** ./src/app/child/child.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function rcGM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.menubtn {\n  margin-left: 3%;\n}\n\n.plusbtn {\n  margin-right: 3%;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 8% auto;\n}\n\n.defaulttext {\n  font-size: 17px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 5%;\n}\n\n.left img {\n  border-radius: 7px;\n}\n\n.inner {\n  padding: 2% 3%;\n  display: flex;\n}\n\n.right {\n  margin-left: 5%;\n  width: 50%;\n  margin-top: 1%;\n}\n\n.rtext {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.rtext1 {\n  font-size: 14px;\n  margin-top: 3.5%;\n  overflow: hidden;\n  height: 90px;\n}\n\n.rtext2 {\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.rtext3 {\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 5%;\n}\n\n.rtext4 {\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\n.error {\n  color: #000;\n  font-size: 20px;\n  text-align: center;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  font-weight: 600;\n  padding: 15px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoaWxkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUFBO0VBQ0MsZUFBQTtBQUdEOztBQURBO0VBQ0MsZ0JBQUE7QUFJRDs7QUFGQTtFQUNFLFVBQUE7QUFLRjs7QUFGQTtFQUVFLGVBQUE7RUFDRSxnQkFBQTtBQUlKOztBQUZBO0VBQ0Msa0JBQUE7RUFBb0IsZ0JBQUE7QUFNckI7O0FBSEM7RUFDQyxrQkFBQTtFQUFvQixpQkFBQTtBQU90Qjs7QUFMQztFQUNDLHFCQUFBO0VBQ0EsY0FBQTtBQU9GOztBQUpBO0VBQ0UscUJBQUE7QUFPRjs7QUFMQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBUUQ7O0FBTkE7RUFDQyxlQUFBO0VBQ0csZ0JBQUE7RUFDQSxrQkFBQTtBQVNKOztBQU5BO0VBQ0MsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVNEOztBQVBBO0VBQ0Msa0JBQUE7QUFVRDs7QUFSQTtFQUNDLGNBQUE7RUFDQSxhQUFBO0FBV0Q7O0FBVEE7RUFDQyxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFZRDs7QUFWQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQWFEOztBQVhBO0VBQ0MsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDRyxZQUFBO0FBYUo7O0FBWEE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUFjRDs7QUFaQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFlRDs7QUFiQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFnQkQ7O0FBYkE7RUFDRyxXQUFBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBZ0JKIiwiZmlsZSI6ImNoaWxkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkQmcge1xyXG4gIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICBwYWRkaW5nOjElIDAlO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcbi5tZW51YnRue1xyXG5cdG1hcmdpbi1sZWZ0OjMlO1xyXG59XHJcbi5wbHVzYnRue1xyXG5cdG1hcmdpbi1yaWdodDozJTtcclxufVxyXG4uYmFja1N2ZyB7XHJcbiAgZmlsbDogIzMzMztcclxufVxyXG5cclxuLmN0aXRsZXtcclxuXHQvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGl0bGVjbGFzc3tcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuLmlvc3tcclxuXHQudGl0bGVjbGFzc3tcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDExcHg7XHJcblx0fVxyXG5cdC5oZWFkQmcge1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG5cdFx0cGFkZGluZzozJSAwJTtcclxuXHQgIH1cclxufVxyXG4uYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG59XHJcbi53cmFwcGVye1xyXG5cdHdpZHRoOjkwJTtcclxuXHRtYXJnaW46OCUgYXV0bztcclxufVxyXG4uZGVmYXVsdHRleHR7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW57XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5sZWZ0IGltZ3tcclxuXHRib3JkZXItcmFkaXVzOjdweDtcclxufVxyXG4uaW5uZXJ7XHJcblx0cGFkZGluZzoyJSAzJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5yaWdodHtcclxuXHRtYXJnaW4tbGVmdDogNSU7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRtYXJnaW4tdG9wOjElO1xyXG59XHJcbi5ydGV4dHtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Zm9udC13ZWlnaHQ6NjAwO1xyXG59XHJcbi5ydGV4dDF7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFxyXG5cdG1hcmdpbi10b3A6My41JTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG59XHJcbi5ydGV4dDJ7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OjQwMDtcclxufVxyXG4ucnRleHQze1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDo2MDA7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLnJ0ZXh0NHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIFx0Y29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMzUlKSAwcHggNXB4IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "utsK":
    /*!***************************************!*\
      !*** ./src/app/child/child.module.ts ***!
      \***************************************/

    /*! exports provided: ChildPageModule */

    /***/
    function utsK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildPageModule", function () {
        return ChildPageModule;
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


      var _child_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./child-routing.module */
      "zurR");
      /* harmony import */


      var _child_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./child.page */
      "R36a");

      var ChildPageModule = /*#__PURE__*/_createClass(function ChildPageModule() {
        _classCallCheck(this, ChildPageModule);
      });

      ChildPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _child_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChildPageRoutingModule"]],
        declarations: [_child_page__WEBPACK_IMPORTED_MODULE_6__["ChildPage"]]
      })], ChildPageModule);
      /***/
    },

    /***/
    "zurR":
    /*!***********************************************!*\
      !*** ./src/app/child/child-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: ChildPageRoutingModule */

    /***/
    function zurR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildPageRoutingModule", function () {
        return ChildPageRoutingModule;
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


      var _child_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./child.page */
      "R36a");

      var routes = [{
        path: '',
        component: _child_page__WEBPACK_IMPORTED_MODULE_3__["ChildPage"]
      }];

      var ChildPageRoutingModule = /*#__PURE__*/_createClass(function ChildPageRoutingModule() {
        _classCallCheck(this, ChildPageRoutingModule);
      });

      ChildPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChildPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=child-child-module-es5.js.map