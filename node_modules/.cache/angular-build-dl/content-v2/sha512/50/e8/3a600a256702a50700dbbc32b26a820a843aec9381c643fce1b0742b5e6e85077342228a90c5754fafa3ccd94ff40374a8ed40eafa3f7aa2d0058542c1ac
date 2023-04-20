(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cghomescreen-cghomescreen-module"], {
    /***/
    "1PF4":
    /*!***************************************************!*\
      !*** ./src/app/cghomescreen/cghomescreen.page.ts ***!
      \***************************************************/

    /*! exports provided: CghomescreenPage */

    /***/
    function PF4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CghomescreenPage", function () {
        return CghomescreenPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cghomescreen_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cghomescreen.page.html */
      "5sxX");
      /* harmony import */


      var _cghomescreen_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cghomescreen.page.scss */
      "XjAF");
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


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");

      var CghomescreenPage = /*#__PURE__*/function () {
        function CghomescreenPage(navCtrl, loading, rest, platform, statusbar) {
          _classCallCheck(this, CghomescreenPage);

          this.navCtrl = navCtrl;
          this.loading = loading;
          this.rest = rest;
          this.platform = platform;
          this.statusbar = statusbar;
          this.childsarray = [];
          this.picture = false;
          this.error = {
            status: false,
            message: ''
          };
          this.caregiverProfile = 'assets/imgs/profilelogo.png';
          this.accountid = localStorage.getItem('accountTypeId');
          console.log('accountid:', this.accountid);
          this.user = JSON.parse(localStorage.getItem('user'));
          console.log('user details', this.user);
          this.name = this.user.first_name;
          console.log('first_name', this.name);
          this.userid = this.user.users_id;
          console.log('caaregiver id:', this.userid);
        }

        _createClass(CghomescreenPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.platform.ready().then(function () {
              // let status bar overlay webview
              _this.statusbar.overlaysWebView(true); // set status bar to white
              // this.statusbar.backgroundColorByHexString('#FFFFFF');


              _this.statusbar.styleDefault();
            });
          }
        }, {
          key: "goto",
          value: function goto() {
            this.navCtrl.navigateForward('/cgprofile');
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getprofile(); // if(details==null){
            //   this.caregiverProfile=this.caregiverProfile;
            // }else{
            //   this.caregiverProfile=details.profile_picture;
            // }

            this.showchild();
          }
        }, {
          key: "getprofile",
          value: function getprofile() {
            var _this2 = this;

            this.rest.sendRequest('get_profile_picture', {
              userId: this.userid
            }).subscribe(function (data) {
              console.log('profile get data:', data);

              if (data.data.profile_picture == null || data.data.profile_picture == '') {
                _this2.caregiverProfile = _this2.caregiverProfile;
              } else {
                _this2.caregiverProfile = data.data.profile_picture;
              }
            });
          }
        }, {
          key: "showchild",
          value: function showchild() {
            var _this3 = this;

            this.childsarray = [];
            this.loading.loadershow();
            this.rest.sendRequest('caregiver_requests', {
              caregiverId: this.userid
            }).subscribe(function (data) {
              console.log('caregiver_requests', data);

              _this3.loading.hideLoader();

              if (data.status == 'success') {
                data.data.forEach(function (val) {
                  if (val.child_details.profile_picture == null || val.child_details.profile_picture == '') {
                    _this3.defaultProfile = 'assets/imgs/profilelogo.png';
                  } else {
                    _this3.defaultProfile = val.child_details.profile_picture;
                  }

                  var data = {
                    parentid: val.parent_id,
                    fname: val.parent_details.first_name,
                    lname: val.parent_details.last_name,
                    age: val.child_details.age,
                    profile: _this3.defaultProfile,
                    childid: val.child_id,
                    childname: val.child_details.child_name,
                    starttime: val.start_time,
                    endtime: val.end_time,
                    status: val.status,
                    date: val.date,
                    about: val.child_details.additional_notes
                  };

                  if (val.status == 'Active') {
                    _this3.childsarray.push(data);

                    _this3.picture = true;
                  }
                });
                console.log('requestsarray:', _this3.childsarray);
              }

              if (data.status == 'error') {
                _this3.loading.hideLoader();

                console.log('signup request data:', data.status);
                _this3.error.status = true;
                _this3.error.message = data.message;
                setTimeout(function () {
                  _this3.error.status = false;
                  _this3.error.message = '';
                }, 3000);
                return;
              }
            });
          }
        }, {
          key: "gotoprofile",
          value: function gotoprofile(child) {
            console.log('profile..........":');
            this.navCtrl.navigateForward(['/childprofile1', {
              parentid: child.parentid,
              childid: child.childid
            }]);
          }
        }]);

        return CghomescreenPage;
      }();

      CghomescreenPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]
        }];
      };

      CghomescreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cghomescreen',
        template: _raw_loader_cghomescreen_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cghomescreen_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CghomescreenPage);
      /***/
    },

    /***/
    "5J5L":
    /*!*************************************************************!*\
      !*** ./src/app/cghomescreen/cghomescreen-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: CghomescreenPageRoutingModule */

    /***/
    function J5L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CghomescreenPageRoutingModule", function () {
        return CghomescreenPageRoutingModule;
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


      var _cghomescreen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cghomescreen.page */
      "1PF4");

      var routes = [{
        path: '',
        component: _cghomescreen_page__WEBPACK_IMPORTED_MODULE_3__["CghomescreenPage"]
      }];

      var CghomescreenPageRoutingModule = /*#__PURE__*/_createClass(function CghomescreenPageRoutingModule() {
        _classCallCheck(this, CghomescreenPageRoutingModule);
      });

      CghomescreenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CghomescreenPageRoutingModule);
      /***/
    },

    /***/
    "5jCD":
    /*!*****************************************************!*\
      !*** ./src/app/cghomescreen/cghomescreen.module.ts ***!
      \*****************************************************/

    /*! exports provided: CghomescreenPageModule */

    /***/
    function jCD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CghomescreenPageModule", function () {
        return CghomescreenPageModule;
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


      var _cghomescreen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cghomescreen-routing.module */
      "5J5L");
      /* harmony import */


      var _cghomescreen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cghomescreen.page */
      "1PF4");

      var CghomescreenPageModule = /*#__PURE__*/_createClass(function CghomescreenPageModule() {
        _classCallCheck(this, CghomescreenPageModule);
      });

      CghomescreenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cghomescreen_routing_module__WEBPACK_IMPORTED_MODULE_5__["CghomescreenPageRoutingModule"]],
        declarations: [_cghomescreen_page__WEBPACK_IMPORTED_MODULE_6__["CghomescreenPage"]]
      })], CghomescreenPageModule);
      /***/
    },

    /***/
    "5sxX":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cghomescreen/cghomescreen.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function sxX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t\t  <ion-toolbar class=\"headBgGlobal\">\r\n\t\t    <ion-buttons slot=\"start\" style=\"margin-left: 2%;\">\r\n\t\t      <ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n\t\t  </ion-buttons>\r\n\t\t  <ion-buttons slot=\"end\" style=\"margin-right: 2%;\" (click)=\"goto()\">\r\n\r\n\t\t    <img src=\"{{caregiverProfile}}\" class=\"pimg\">\r\n\t\t  </ion-buttons>\r\n\t\t</ion-toolbar>\r\n</ion-header> -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n   <ion-row>\r\n     <ion-col class=\"backbtn\" size=\"2\">\r\n       <div>\r\n         <ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n       </div>\r\n     </ion-col>\r\n\r\n     <ion-col size=\"8\">\r\n     </ion-col>\r\n\r\n     <ion-col size=\"2\">\r\n       <div (click)=\"goto()\">\r\n         <img src=\"{{caregiverProfile}}\" class=\"pimg\">\r\n         <!-- <img src=\"assets/imgs/clogo.png\" *ngIf=\"userType=='caregiver'\"> -->\r\n       </div>\r\n     </ion-col>\r\n   </ion-row>\r\n </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"background\">\r\n\r\n\t<div class=\"wrapper\">\r\n\t\t<div class=\"text\">Welcome</div>\r\n\t\t<div class=\"text1\">{{name}}</div>\r\n\t\t\t<div class=\"timer\" *ngIf=\"picture==false\">\r\n\t\t\t\t<!-- <img src=\"assets/imgs/timer.png\"> -->\r\n\t\t\t\t<img src=\"assets/imgs/logo.svg\">\r\n\t\t\t</div>\r\n\t\t<div *ngFor=\"let child of childsarray\">\r\n\t\t\t<p *ngIf=\"error.status\" class=\"error\">\r\n\t\t    {{error.message}}\r\n\t\t  </p>\r\n\t\t\t<!-- <div  *ngIf=\"child.status=='Pending'\" class=\"nothing\">No Child Exist</div> -->\r\n\t\t\t<div  *ngIf=\"child.status=='Active'\">\r\n\t\t\t\t<div class=\"main\" (click)=\"gotoprofile(child)\">\r\n\t\t\t\t\t<div class=\"inner\">\r\n\t\t\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t\t\t<img src=\"{{child.profile}}\" width=\"140px\" height=\"125px\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t\t\t<div class=\"rtext\">{{child.childname}},<span style=\"font-weight:400;margin-left: 3%;\">{{child.age}} years</span></div>\r\n\t\t\t\t\t\t\t<div class=\"rtext2\">Date : {{child.date}}</div>\r\n\t\t\t\t\t\t\t<div class=\"rtext1\">Timing</div>\r\n\t\t\t\t\t\t\t<div class=\"rtext2\">{{child.starttime}} - {{child.endtime}}</div>\r\n\t\t\t\t\t\t\t<div class=\"rtext3\">{{child.about}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\t\t<!-- <div class=\"main\" (click)=\"gotoprofile()\">\r\n\t\t\t<div class=\"inner\">\r\n\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t<img src=\"assets/imgs/boy.png\" width=\"140px\" height=\"125px\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t<div class=\"rtext\">Emily,<span style=\"font-weight:400;margin-left: 3%;\">3 years</span></div>\r\n\t\t\t\t\t<div class=\"rtext1\">Timing</div>\r\n\t\t\t\t\t<div class=\"rtext2\">8:40 pm - 6:00 am</div>\r\n\t\t\t\t\t<div class=\"rtext3\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n\t</div>\r\n</ion-content>\r\n";
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
              var _this4 = this;

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

                        if (!_this4.toast) {
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
    "XjAF":
    /*!*****************************************************!*\
      !*** ./src/app/cghomescreen/cghomescreen.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function XjAF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*.cheader{\n\tposition: fixed;\n}*/\n.headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n.menuicon {\n  color: #000;\n}\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n.pimg {\n  width: 41px;\n  height: 41px;\n  border-radius: 50px;\n}\n.logo {\n  text-align: right;\n  margin-right: 5%;\n}\n.logo img {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\n.background {\n  --background: #F7F7F7;\n}\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n.timer {\n  text-align: center;\n}\n.text {\n  font-size: 18px;\n  color: #000;\n  font-weight: 600;\n}\n.text1 {\n  color: #FE9805;\n  font-size: 29px;\n  font-weight: 600;\n}\n.main {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 14px;\n  margin-top: 7%;\n}\n.left img {\n  border-radius: 7px;\n}\n.inner {\n  padding: 2% 3%;\n  display: flex;\n}\n.right {\n  margin-left: 5%;\n  width: 50%;\n  margin-top: 2%;\n}\n.rtext {\n  font-size: 20px;\n  font-weight: 600;\n}\n.rtext1 {\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 2%;\n  color: #000000;\n}\n.rtext2 {\n  font-size: 14px;\n  margin-top: 1%;\n}\n.rtext3 {\n  font-size: 13px;\n  font-weight: 600;\n  margin-top: 1%;\n  color: #000000;\n  overflow: hidden;\n  height: 50px;\n}\n.rtext4 {\n  margin-top: 3%;\n}\n.nothing {\n  color: #000;\n  font-size: 20px;\n  text-align: center;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  font-weight: 600;\n  padding: 15px;\n  border-radius: 10px;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNnaG9tZXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBQUE7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0E7RUFDQyxXQUFBO0FBRUQ7QUFDQztFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUVIO0FBRUE7RUFDQyxXQUFBO0VBQ0csWUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDQTtFQUNDLGlCQUFBO0VBQ0MsZ0JBQUE7QUFFRjtBQUFBO0VBQ0MsV0FBQTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtBQUdGO0FBREE7RUFDRSxxQkFBQTtBQUlGO0FBRkE7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQUtEO0FBSEE7RUFDQyxrQkFBQTtBQU1EO0FBSkE7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBT0Q7QUFMQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFRRDtBQU5BO0VBQ0MsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVNEO0FBUEE7RUFDQyxrQkFBQTtBQVVEO0FBUkE7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBQVdEO0FBVEE7RUFDQyxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFZRDtBQVZBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBYUQ7QUFYQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBY0Q7QUFaQTtFQUNDLGVBQUE7RUFDQyxjQUFBO0FBZUY7QUFiQTtFQUNDLGVBQUE7RUFDRyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBZ0JKO0FBZEE7RUFDQyxjQUFBO0FBaUJEO0FBZEE7RUFDQyxXQUFBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWlCRiIsImZpbGUiOiJjZ2hvbWVzY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouY2hlYWRlcntcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcbn0qL1xyXG4uaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbiAgcGFkZGluZzogMSUgMCU7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuLmlvc3tcclxuXHQuaGVhZEJnIHtcclxuXHQgIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuXHQgIHBhZGRpbmc6IDMlIDAlO1xyXG5cdH1cclxuXHRcclxuICB9XHJcbi5waW1ne1xyXG5cdHdpZHRoOiA0MXB4O1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4ubG9nb3tcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbi5sb2dvIGltZ3tcclxuXHR3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6OTAlO1xyXG5cdG1hcmdpbjo1JSBhdXRvO1xyXG59XHJcbi50aW1lcntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHR7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGNvbG9yOiMwMDA7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGV4dDF7XHJcblx0Y29sb3I6I0ZFOTgwNTtcclxuXHRmb250LXNpemU6IDI5cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ubWFpbntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogNyU7XHJcbn1cclxuLmxlZnQgaW1ne1xyXG5cdGJvcmRlci1yYWRpdXM6N3B4O1xyXG59XHJcbi5pbm5lcntcclxuXHRwYWRkaW5nOjIlIDMlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnJpZ2h0e1xyXG5cdG1hcmdpbi1sZWZ0OiA1JTtcclxuXHR3aWR0aDogNTAlO1xyXG5cdG1hcmdpbi10b3A6MiU7XHJcbn1cclxuLnJ0ZXh0e1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LXdlaWdodDo2MDA7XHJcbn1cclxuLnJ0ZXh0MXtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6NjAwO1xyXG5cdG1hcmdpbi10b3A6IDIlO1xyXG5cdGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5ydGV4dDJ7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG59XHJcbi5ydGV4dDN7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5ydGV4dDR7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcbn1cclxuXHJcbi5ub3RoaW5ne1xyXG5cdGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAzNSUpIDBweCA1cHggMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMCVcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=cghomescreen-cghomescreen-module-es5.js.map