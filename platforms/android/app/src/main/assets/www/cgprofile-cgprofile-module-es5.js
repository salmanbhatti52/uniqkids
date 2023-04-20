(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cgprofile-cgprofile-module"], {
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
    "EjT9":
    /*!*******************************************************!*\
      !*** ./src/app/cgprofile/cgprofile-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: CgprofilePageRoutingModule */

    /***/
    function EjT9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CgprofilePageRoutingModule", function () {
        return CgprofilePageRoutingModule;
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


      var _cgprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cgprofile.page */
      "i+hR");

      var routes = [{
        path: '',
        component: _cgprofile_page__WEBPACK_IMPORTED_MODULE_3__["CgprofilePage"]
      }];

      var CgprofilePageRoutingModule = /*#__PURE__*/_createClass(function CgprofilePageRoutingModule() {
        _classCallCheck(this, CgprofilePageRoutingModule);
      });

      CgprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CgprofilePageRoutingModule);
      /***/
    },

    /***/
    "Fjb3":
    /*!***********************************************!*\
      !*** ./src/app/cgprofile/cgprofile.module.ts ***!
      \***********************************************/

    /*! exports provided: CgprofilePageModule */

    /***/
    function Fjb3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CgprofilePageModule", function () {
        return CgprofilePageModule;
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


      var _cgprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cgprofile-routing.module */
      "EjT9");
      /* harmony import */


      var _cgprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cgprofile.page */
      "i+hR");

      var CgprofilePageModule = /*#__PURE__*/_createClass(function CgprofilePageModule() {
        _classCallCheck(this, CgprofilePageModule);
      });

      CgprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cgprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["CgprofilePageRoutingModule"]],
        declarations: [_cgprofile_page__WEBPACK_IMPORTED_MODULE_6__["CgprofilePage"]]
      })], CgprofilePageModule);
      /***/
    },

    /***/
    "i+hR":
    /*!*********************************************!*\
      !*** ./src/app/cgprofile/cgprofile.page.ts ***!
      \*********************************************/

    /*! exports provided: CgprofilePage */

    /***/
    function iHR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CgprofilePage", function () {
        return CgprofilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cgprofile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cgprofile.page.html */
      "jBGz");
      /* harmony import */


      var _cgprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cgprofile.page.scss */
      "teJc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
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

      var CgprofilePage = /*#__PURE__*/function () {
        function CgprofilePage(navCtrl, camera, alertCtrl, imagePicker, loading, rest, platform, cd) {
          _classCallCheck(this, CgprofilePage);

          this.navCtrl = navCtrl;
          this.camera = camera;
          this.alertCtrl = alertCtrl;
          this.imagePicker = imagePicker;
          this.loading = loading;
          this.rest = rest;
          this.platform = platform;
          this.cd = cd;
          this.defaultProfile = "assets/imgs/profilelogo.png";
          this.mobilenumber = "";
          this.price = "";
          this.address = "";
          this.about = "";
          this.bankname = "";
          this.accountnumber = "";
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
          this.priceError = {
            status: false,
            message: ""
          };
          this.banknameError = {
            status: false,
            message: ""
          };
          this.accountnumberError = {
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
          this.userid = localStorage.getItem("uid");
          console.log("userid", this.userid);
          this.accountTypeId = localStorage.getItem("accountTypeId");
          console.log("accountTypeId", this.accountTypeId);
          this.getprofiledata();
        }

        _createClass(CgprofilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.platform.keyboardDidShow.subscribe(function (ev) {
              var deviceHeight = window.innerHeight;
              var keyboardHeight = ev.keyboardHeight;
              var deviceHeightAdjusted = deviceHeight - keyboardHeight; //device height adjusted

              deviceHeightAdjusted = deviceHeightAdjusted < 0 ? deviceHeightAdjusted * -1 : deviceHeightAdjusted; //only positive number

              document.getElementById("cgpage").style.height = deviceHeightAdjusted - 92 + "px"; //set page height

              document.getElementById("cgpage").setAttribute("keyBoardHeight", keyboardHeight); //save keyboard height

              console.log("keyboard show", ev);

              _this2.cd.detectChanges();
            });
            this.platform.keyboardDidHide.subscribe(function (ev) {
              setTimeout(function () {
                document.getElementById("cgpage").style.height = 100 + "%"; //device  100% height
              }, 100);

              _this2.cd.detectChanges();

              console.log("keyboard hide");
            }); //keybpoardddddd --------------

            this.imagePicker.requestReadPermission();
          }
        }, {
          key: "getprofiledata",
          value: function getprofiledata() {
            var _this3 = this;

            this.loading.loadershow();
            this.rest.sendRequest("get_profile_details", {
              userId: this.userid
            }).subscribe(function (data) {
              console.log("get_profile_details data::", data);

              if (data.status == "success") {
                console.log("suucesssss");

                _this3.loading.hideLoader();

                _this3.fname = data.data.first_name;
                _this3.lname = data.data.last_name;
                _this3.email = data.data.email;

                if (data.data.profile_picture == "" || data.data.profile_picture == null) {
                  _this3.defaultProfile = _this3.defaultProfile;
                } else {
                  _this3.defaultProfile = data.data.profile_picture;
                }

                _this3.price = data.data.per_hour_rate;
                _this3.mobilenumber = data.data.mobile_number;
                _this3.address = data.data.street_address;
                _this3.about = data.data.about;
                _this3.bankname = data.data.bank_name;
                _this3.accountnumber = data.data.account_number;
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
                                  console.log("data:image/jpeg;base64,", results[i]);
                                  _this4.picUrl = results[i];
                                  _this4.defaultProfile = "data:image/png;base64,".concat(results[i]);
                                }
                              }
                            }
                          }, function (err) {
                            console.log("error", err);
                          }); // this.camera.getPicture(this.galleryOptions)
                          // .then(async imageData => {
                          //  this.picUrl=imageData;
                          //   this.defaultProfile = `data:image/png;base64,${imageData}`
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
          key: "viewprofile",
          value: function viewprofile() {
            var _this5 = this;

            if (this.mobilenumber && this.address && this.about) {
              var profiledata = {
                userId: this.userid,
                accountTypeId: this.accountTypeId,
                profilePicture: this.picUrl,
                mobileNumber: this.mobilenumber,
                streetAddress: this.address,
                about: this.about,
                bankName: this.bankname,
                accountNumber: this.accountnumber,
                perHourRate: this.price
              };
              this.loading.loadershow();
              this.rest.sendRequest("update_profile", profiledata).subscribe(function (data) {
                console.log("update_profile data::", data);

                if (data.status == "success") {
                  if (_this5.accountTypeId == 2) {
                    _this5.loading.presentToast("Profile Update Successfully!!");

                    _this5.loading.hideLoader();

                    _this5.navCtrl.navigateForward("/cgviewprofile");
                  }

                  if (_this5.accountTypeId == 3) {
                    _this5.loading.presentToast("Profile Update Successfully!");

                    _this5.loading.hideLoader();

                    _this5.navCtrl.navigateForward("/cgviewprofile");
                  }
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
              this.mobilenumberError.message = "Field is required";
            }

            if (!this.address) {
              this.addressError.status = true;
              this.addressError.message = "Field is required";
            }

            if (!this.price) {
              this.priceError.status = true;
              this.priceError.message = "Field is required";
            }

            if (!this.about) {
              this.aboutError.status = true;
              this.aboutError.message = "Field is required";
            }

            if (!this.bankname) {
              this.banknameError.status = true;
              this.banknameError.message = "Field is required";
            }

            if (!this.accountnumber) {
              this.accountnumberError.status = true;
              this.accountnumberError.message = "Field is required";
            }

            setTimeout(function () {
              _this5.mobilenumberError.status = false;
              _this5.mobilenumberError.message = "";
              _this5.addressError.status = false;
              _this5.addressError.message = "";
              _this5.priceError.status = false;
              _this5.priceError.message = "";
              _this5.aboutError.status = false;
              _this5.aboutError.message = "";
              _this5.banknameError.status = false;
              _this5.banknameError.message = "";
              _this5.accountnumberError.status = false;
              _this5.accountnumberError.message = "";
            }, 3000);
          }
        }]);

        return CgprofilePage;
      }();

      CgprofilePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      CgprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-cgprofile",
        template: _raw_loader_cgprofile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cgprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CgprofilePage);
      /***/
    },

    /***/
    "jBGz":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cgprofile/cgprofile.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function jBGz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>cgprofile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col style=\"padding-top: 6px\" size=\"2\">\r\n        <div>\r\n          <ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"8\">\r\n        <ion-text class=\"ctitle\">Complete Profile</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n  <div id=\"cgpage\" class=\"adjust-overflow\">\r\n    <div class=\"wrapper\">\r\n      <div class=\"logodiv\" (click)=\"uploadPic()\">\r\n        <!-- <img src=\"assets/imgs/icons/msglogo.svg\"> -->\r\n        <img src=\"{{defaultProfile}}\" />\r\n      </div>\r\n      <div class=\"name\">{{fname}} {{lname}}</div>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"inputdiv\">\r\n          <div class=\"pinput\">\r\n            <ion-input\r\n              placeholder=\"Email\"\r\n              type=\"email\"\r\n              [(ngModel)]=\"email\"\r\n              readonly\r\n            ></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"inputdiv\">\r\n          <div class=\"pinput\">\r\n            <ion-input\r\n              placeholder=\"Mobile number\"\r\n              type=\"tel\"\r\n              [(ngModel)]=\"mobilenumber\"\r\n            ></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <p *ngIf=\"mobilenumberError.status\" class=\"error\">\r\n        {{mobilenumberError.message}}\r\n      </p>\r\n      <div class=\"fields\">\r\n        <div class=\"inputdiv\">\r\n          <div class=\"pinput\">\r\n            <ion-input\r\n              placeholder=\"Street address\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"address\"\r\n            ></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <p *ngIf=\"addressError.status\" class=\"error\">{{addressError.message}}</p>\r\n\r\n      <div class=\"fields\" *ngIf=\"accountTypeId!=3\">\r\n        <div class=\"inputdiv\">\r\n          <div class=\"pinput\">\r\n            <ion-input\r\n              placeholder=\"Per hour USD rate\"\r\n              type=\"tel\"\r\n              [(ngModel)]=\"price\"\r\n            ></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"accountTypeId!=3\">\r\n        <p *ngIf=\"priceError.status\" class=\"error\">{{priceError.message}}</p>\r\n      </div>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"inputdiv\">\r\n          <div class=\"pinput\">\r\n            <ion-textarea\r\n              placeholder=\"About\"\r\n              rows=\"6\"\r\n              cols=\"20\"\r\n              [(ngModel)]=\"about\"\r\n            ></ion-textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <p *ngIf=\"aboutError.status\" class=\"error\">{{aboutError.message}}</p>\r\n\r\n      <div *ngIf=\"accountTypeId!=3\">\r\n        <h6 style=\"font-size: 14px; font-weight: 600\">Back Account</h6>\r\n\r\n        <div class=\"fields\">\r\n          <div class=\"inputdiv\">\r\n            <div class=\"pinput\">\r\n              <ion-input\r\n                placeholder=\"Bank name\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"bankname\"\r\n              ></ion-input>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <p *ngIf=\"banknameError.status\" class=\"error\">\r\n          {{banknameError.message}}\r\n        </p>\r\n\r\n        <div class=\"fields\">\r\n          <div class=\"inputdiv\">\r\n            <div class=\"pinput\">\r\n              <ion-input\r\n                placeholder=\"Account number\"\r\n                type=\"tel\"\r\n                [(ngModel)]=\"accountnumber\"\r\n              ></ion-input>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <p *ngIf=\"accountnumberError.status\" class=\"error\">\r\n          {{accountnumberError.message}}\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"ionbutton\" (click)=\"viewprofile()\">\r\n        <ion-button class=\"ib\">Done</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "teJc":
    /*!***********************************************!*\
      !*** ./src/app/cgprofile/cgprofile.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function teJc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\nion-segment {\n  padding: 5px 5px;\n  border-radius: 10px;\n  margin-top: 10px;\n  --background: #EBEBEB;\n  width: 85%;\n  margin: 15% auto 0%;\n}\n\nion-segment ion-segment-button {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 10px;\n  --background-checked: #fe9805;\n  --indicator-color: transparent !important;\n  --color: #00000;\n  --color-checked: #fff;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.wrapper {\n  width: 70%;\n  margin: 5% auto;\n}\n\n.logodiv {\n  /*background: #ffff;*/\n  width: 110px;\n  margin: 0% auto;\n  /*border-radius: 90px;*/\n  height: 110px;\n}\n\n.logodiv img {\n  border-radius: 90px;\n  width: 110px;\n  height: 110px;\n}\n\n.name {\n  text-align: center;\n  font-weight: bold;\n  margin-top: 5%;\n  font-size: 20px;\n}\n\n.fields {\n  margin-top: 5%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 8px;\n  background: #FFFFFF;\n  padding: 1% 5%;\n  margin-top: 5%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10%;\n  height: 50px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNncHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFGRjs7QUFJQTtFQUNDLFdBQUE7QUFERDs7QUFJQTtFQUVFLGVBQUE7RUFDRSxnQkFBQTtBQUZKOztBQUlBO0VBQ0Msa0JBQUE7RUFBb0IsZ0JBQUE7QUFBckI7O0FBR0M7RUFDQyxrQkFBQTtFQUFvQixpQkFBQTtBQUN0Qjs7QUFDRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdBO0VBQ0UscUJBQUE7QUFBRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQUU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBRUQ7O0FBQ0E7RUFDRSxxQkFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBR0Y7O0FBREE7RUFDQyxrQkFBQTtFQUNHLGlCQUFBO0VBQ0EsY0FBQTtFQUNJLGVBQUE7QUFJUjs7QUFEQTtFQUNDLGNBQUE7QUFJRDs7QUFGQTtFQUNDLGFBQUE7RUFDRyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNILGNBQUE7QUFLRDs7QUFEQTtFQUVDLFdBQUE7RUFDQSxlQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFHRjs7QUFBQTtFQUVFLGtCQUFBO0VBQ0QsV0FBQTtFQUNBLGVBQUE7QUFFRDs7QUFBQTtFQUdDLFlBQUE7RUFDQyxxQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0MsbUJBQUE7RUFDRCxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUVGIiwiZmlsZSI6ImNncHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY2hlYWRlcntcclxuLy8gXHRwb3NpdGlvbjogZml4ZWQ7XHJcbi8vIH1cclxuLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6IDElIDAlO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcblxyXG4uY3RpdGxle1xyXG5cdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50aXRsZWNsYXNze1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4uaW9ze1xyXG5cdC50aXRsZWNsYXNze1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTFweDtcclxuXHR9XHJcbiAgLmhlYWRCZyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgICBwYWRkaW5nOiAzJSAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuaW9uLXNlZ21lbnQge1xyXG4gIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogI0VCRUJFQjtcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMTUlIGF1dG8gMCU7XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAtLW1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZlOTgwNTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogIzAwMDAwO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6NzAlO1xyXG5cdG1hcmdpbjo1JSBhdXRvO1xyXG59XHJcblxyXG4ubG9nb2RpdntcclxuICAvKmJhY2tncm91bmQ6ICNmZmZmOyovXHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBtYXJnaW46IDAlIGF1dG87XHJcbiAgICAvKmJvcmRlci1yYWRpdXM6IDkwcHg7Ki9cclxuICAgIGhlaWdodDogMTEwcHg7XHJcbn1cclxuLmxvZ29kaXYgaW1ne1xyXG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbn1cclxuLm5hbWV7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5maWVsZHN7XHJcblx0bWFyZ2luLXRvcDo1JTtcclxufVxyXG4uaW5wdXRkaXZ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBwYWRkaW5nOiAxJSA1JTtcclxuXHRtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuXHJcbi5waW5wdXRcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBvcGFjaXR5OiA0OCU7XHJcbn1cclxuXHJcbi5pb25idXR0b25cclxue1x0XHJcbiBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmliXHJcbntcclxuXHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogI0ZFOTgwNTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7IFxyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5lcnJvciB7XHJcbiAgY29sb3I6ICNmZjAwMDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=cgprofile-cgprofile-module-es5.js.map