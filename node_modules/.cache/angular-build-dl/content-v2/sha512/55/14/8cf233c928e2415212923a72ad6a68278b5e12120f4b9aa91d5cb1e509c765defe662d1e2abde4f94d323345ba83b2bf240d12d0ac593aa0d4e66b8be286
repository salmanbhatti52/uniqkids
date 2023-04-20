(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inbox-inbox-module"], {
    /***/
    "2jHE":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function jHE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t <ion-toolbar class=\"headBgGlobal\">\r\n\t<ion-row>\r\n\t  <ion-col class=\"backbtn\" size=\"2\">\r\n\t\t<div>\r\n\t\t  <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t\t</div>\r\n\t  </ion-col>\r\n\r\n\t  <ion-col class=\"titleclass\" size=\"8\">\r\n\t\t<ion-text class=\"ctitle\">{{name}}</ion-text>\r\n\t  </ion-col>\r\n\r\n\t  <ion-col size=\"2\">\r\n\r\n\t  </ion-col>\r\n\t</ion-row>\r\n\t\t<!-- <ion-buttons slot=\"start\" class=\"backbtn\">\r\n\t\t\t  <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\r\n\t\t  </ion-buttons>\r\n\t   <ion-title class=\"ctitle\">{{name}}</ion-title> -->\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\t<div class=\"wrapper\">\r\n\t\t<div  no-lines *ngFor=\"let chat of messages\">\t\r\n\t\t\t<div class=\"linediv\" *ngIf=\"chat.date\">\r\n\t\t\t\t<div class=\"leftline\"></div>\r\n\t\t\t\t<div class=\"label\">{{chat.date}}</div>\r\n\t\t\t\t<div class=\"rightline\"></div>\r\n\t\t\t</div>\t\r\n\t\t\t<div *ngIf=\"chat.userId!=loggedid\">\r\n\t\t\t\t<div class=\"main\">\r\n\t\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t\t<img src=\"{{chat.profilepic}}\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"chat.messageType=='text'\">\r\n\t\t\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t\t\t<div class=\"text\">\r\n\t\t\t\t\t\t\t\t<p>{{chat.message}}</p>\r\n\t\t\t\t\t\t\t\t<div class=\"time\">{{chat.time}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"chat.messageType=='attachment'\">\r\n\t\t\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t\t\t<div class=\"text\">\r\n\t\t\t\t\t\t\t\t<img class=\"attachment_sender\" src=\"{{chat.message}}\" />\r\n\t\t\t\t\t\t\t\t<div class=\"time\">{{chat.time}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\r\n\t\t\t<div class=\"main2\" *ngIf=\"chat.userId==loggedid\">\r\n\t\t\t\t<div class=\"right1\">\r\n\t\t\t\t\t<div *ngIf=\"chat.messageType=='text'\">\r\n\t\t\t\t\t\t<div class=\"text1\" >\r\n\t\t\t\t\t\t\t{{chat.message}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"chat.messageType=='attachment'\">\r\n\t\t\t\t\t\t<div class=\"text1\">\r\n\t\t\t\t<img class=\"attachment_sender\" src=\"{{chat.message}}\" />\r\n\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\r\n\t\t\r\n\r\n\t\t<!-- <div class=\"main2\">\r\n\t\t\t<div class=\"right\">\r\n\t\t\t\t<img src=\"assets/imgs/msgimg.png\">\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n\t</div>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n\t<div class=\"bottomdiv\">\r\n\t\t<div class=\"imgdiv\" (click)=\"selectImages('profile')\">\r\n\t\t\t<img src=\"assets/imgs/icons/attachment.png\">\r\n\t\t</div>\r\n\t\t<div class=\"inputdiv\">\r\n\t\t\t\t<div class=\"pinput\">\r\n\t\t\t\t\t<!-- <ion-input placeholder=\"Type Your message here...\" type=\"text\" [(ngModel)]=\"data.message\"></ion-input> -->\r\n\t\t\t\t\t<ion-textarea\r\n\t\t\tclass=\"input\"\r\n\t\t\trows=\"1\"\r\n\t\t\tcols=\"20\"\r\n\t\t\t[(ngModel)]=\"data.message\"\r\n\t\t\tplaceholder=\"Type Your message here...\"\r\n\t\t\t(keypress)=\"userTyping($event)\"\r\n\t\t  ></ion-textarea>\r\n\t\t\t\t</div>\r\n\t\t\t\t<img src=\"assets/imgs/icons/send.png\" class=\"cimg\" (click)=\"sendMsg()\">\r\n\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"clear\"></div>\r\n\t</div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "5gel":
    /*!***************************************!*\
      !*** ./src/app/inbox/inbox.module.ts ***!
      \***************************************/

    /*! exports provided: InboxPageModule */

    /***/
    function gel(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InboxPageModule", function () {
        return InboxPageModule;
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


      var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inbox-routing.module */
      "zxsJ");
      /* harmony import */


      var _inbox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inbox.page */
      "cinZ");

      var InboxPageModule = /*#__PURE__*/_createClass(function InboxPageModule() {
        _classCallCheck(this, InboxPageModule);
      });

      InboxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__["InboxPageRoutingModule"]],
        declarations: [_inbox_page__WEBPACK_IMPORTED_MODULE_6__["InboxPage"]]
      })], InboxPageModule);
      /***/
    },

    /***/
    "cNf8":
    /*!***************************************!*\
      !*** ./src/app/inbox/inbox.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function cNf8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 10px;\n  padding-left: 18px;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .backbtn {\n  margin-left: 0%;\n  padding-top: 12px;\n  padding-left: 18px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 10% auto;\n}\n\n.linediv {\n  display: flex;\n}\n\n.leftline {\n  border-top: 1px solid #BFBFBF;\n  width: 40%;\n}\n\n.label {\n  color: #BFBFBF;\n  font-size: 8px;\n  text-align: center;\n  margin-top: -1.5%;\n  margin-left: 3%;\n  width: 13%;\n}\n\n.rightline {\n  border-top: 1px solid #BFBFBF;\n  width: 40%;\n  margin-left: 3%;\n}\n\n.main {\n  width: 90%;\n  /* display: flex;*/\n  margin: 5% auto;\n}\n\n.left {\n  width: 18%;\n  float: left;\n  margin-top: 3%;\n}\n\n.left img {\n  width: 44px;\n  height: 44px;\n  border-radius: 50px;\n}\n\n.right {\n  display: flex;\n  /*justify-content: flex-end;*/\n}\n\n.text {\n  padding-top: 2%;\n}\n\n.text p {\n  margin: 0px;\n  /*padding: 5%;*/\n  background: #EBEBEB;\n  padding: 8px 12px;\n  width: auto;\n  border-radius: 10px;\n  /*float: left;*/\n  max-width: 250px;\n}\n\n.clear {\n  clear: both;\n}\n\n.time {\n  color: #BFBFBF;\n  font-size: 8px;\n  margin-top: 2%;\n}\n\n.main2 {\n  width: 90%;\n  display: flex;\n  margin: 5% auto;\n  justify-content: flex-end;\n}\n\n.right1 {\n  width: 90%;\n  float: left;\n}\n\n.text1 {\n  background: #FE9805;\n  padding: 8px 12px;\n  width: auto;\n  border-radius: 10px;\n  float: right;\n  color: #fff;\n  max-width: -webkit-fill-available;\n}\n\n.text1 p {\n  margin: 0px;\n  padding: 5%;\n  color: #fff;\n}\n\n.bottomdiv {\n  display: flex;\n  padding: 3% 2%;\n}\n\n.imgdiv {\n  width: 15%;\n  float: left;\n  margin-top: 2%;\n}\n\n.inputdiv {\n  border-radius: 8px;\n  background: #F6F6F6;\n  width: 80%;\n  float: left;\n}\n\n.pinput {\n  font-size: 15px;\n  color: #000;\n  padding: 0% 3%;\n  width: 85%;\n  float: left;\n}\n\n.cimg {\n  width: 8%;\n  float: left;\n  margin-top: 6%;\n}\n\n.userimage {\n  width: 10%;\n  float: right;\n}\n\n.userimage img {\n  border-radius: 50px;\n  width: 28px;\n  height: 28px;\n}\n\n.right-bubble {\n  width: 90%;\n  float: left;\n  margin-bottom: 2%;\n}\n\n.user-message {\n  width: auto;\n  background-color: #FF3B5B;\n  padding: 3px;\n  border-radius: 5px;\n  float: right;\n  padding: 5px;\n  color: #fff;\n  max-width: 50%;\n  min-width: 20%;\n}\n\n.user-message p {\n  color: #fff;\n  margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGluYm94LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUFBO0VBQ0MsZUFBQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFEQTtFQUVFLGVBQUE7RUFDRSxnQkFBQTtBQUdKOztBQURBO0VBQ0Msa0JBQUE7RUFBb0IsZ0JBQUE7QUFLckI7O0FBRkM7RUFDQyxrQkFBQTtFQUFvQixpQkFBQTtBQU10Qjs7QUFKRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFIQTtFQUNFLHFCQUFBO0FBTUY7O0FBSkE7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7QUFPRDs7QUFMQTtFQUNDLGFBQUE7QUFRRDs7QUFOQTtFQUNDLDZCQUFBO0VBQ0MsVUFBQTtBQVNGOztBQVBBO0VBQ0MsY0FBQTtFQUNHLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFVSjs7QUFSQTtFQUNDLDZCQUFBO0VBQ0MsVUFBQTtFQUNFLGVBQUE7QUFXSjs7QUFUQTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNDLGVBQUE7QUFZRjs7QUFWQTtFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQWFEOztBQVhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWNGOztBQVpBO0VBQ0MsYUFBQTtFQUNDLDZCQUFBO0FBZUY7O0FBYkE7RUFDRSxlQUFBO0FBZ0JGOztBQWJBO0VBQ0MsV0FBQTtFQUNDLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBZ0JGOztBQWRBO0VBQ0MsV0FBQTtBQWlCRDs7QUFmQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQWtCRjs7QUFmQTtFQUNDLFVBQUE7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBa0JGOztBQWhCQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBbUJGOztBQWpCQTtFQUNDLG1CQUFBO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FBb0JGOztBQWxCQTtFQUNDLFdBQUE7RUFDRyxXQUFBO0VBQ0EsV0FBQTtBQXFCSjs7QUFuQkE7RUFDQyxhQUFBO0VBQ0csY0FBQTtBQXNCSjs7QUFwQkE7RUFDQyxVQUFBO0VBQ0csV0FBQTtFQUNBLGNBQUE7QUF1Qko7O0FBckJBO0VBQ0Msa0JBQUE7RUFDRyxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBd0JKOztBQXRCQTtFQUNDLGVBQUE7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBeUJGOztBQXZCQTtFQUNDLFNBQUE7RUFDQyxXQUFBO0VBQ0EsY0FBQTtBQTBCRjs7QUFwQkE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQXVCSjs7QUFyQkU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBd0JKOztBQXRCRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUF5Qko7O0FBdkJFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUEwQko7O0FBeEJFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUEyQkoiLCJmaWxlIjoiaW5ib3gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6IDElIDAlO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcbi5iYWNrYnRue1xyXG5cdG1hcmdpbi1sZWZ0OjAlO1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG59XHJcbi5iYWNrU3ZnIHtcclxuICBmaWxsOiAjMzMzO1xyXG59XHJcblxyXG4uY3RpdGxle1xyXG5cdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50aXRsZWNsYXNze1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4uaW9ze1xyXG5cdC50aXRsZWNsYXNze1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTFweDtcclxuXHR9XHJcbiAgLmJhY2tidG57XHJcbiAgICBtYXJnaW4tbGVmdDowJTtcclxuICAgIHBhZGRpbmctdG9wOjEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbiAgfVxyXG4gIC5oZWFkQmcge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gICAgcGFkZGluZzogMyUgMCU7XHJcbiAgfVxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6OTAlO1xyXG5cdG1hcmdpbjoxMCUgYXV0bztcclxufVxyXG4ubGluZWRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5sZWZ0bGluZXtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI0JGQkZCRjtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcbi5sYWJlbHtcclxuXHRjb2xvcjogI0JGQkZCRjtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTEuNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICB3aWR0aDogMTMlO1xyXG59XHJcbi5yaWdodGxpbmV7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNCRkJGQkY7XHJcbiAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG4ubWFpbntcclxuXHR3aWR0aDogOTAlO1xyXG4gLyogZGlzcGxheTogZmxleDsqL1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG4ubGVmdHtcclxuXHR3aWR0aDogMTglO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbi10b3A6IDMlXHJcbn1cclxuLmxlZnQgaW1ne1xyXG4gIHdpZHRoOiA0NHB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcbi5yaWdodHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gIC8qanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsqL1xyXG59XHJcbi50ZXh0e1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuXHJcbn1cclxuLnRleHQgcHtcclxuXHRtYXJnaW46IDBweDtcclxuICAvKnBhZGRpbmc6IDUlOyovXHJcbiAgYmFja2dyb3VuZDogI0VCRUJFQjtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICB3aWR0aDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC8qZmxvYXQ6IGxlZnQ7Ki9cclxuICBtYXgtd2lkdGg6IDI1MHB4O1xyXG59XHJcbi5jbGVhcntcclxuXHRjbGVhcjogYm90aDtcclxufVxyXG4udGltZXtcclxuICBjb2xvcjojQkZCRkJGO1xyXG4gIGZvbnQtc2l6ZTo4cHg7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi5tYWluMntcclxuXHR3aWR0aDogOTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLnJpZ2h0MXtcclxuICB3aWR0aDogOTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi50ZXh0MXtcclxuXHRiYWNrZ3JvdW5kOiAjRkU5ODA1O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1heC13aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG4udGV4dDEgcHtcclxuXHRtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmJvdHRvbWRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMyUgMiU7XHJcbn1cclxuLmltZ2RpdntcclxuXHR3aWR0aDogMTUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4uaW5wdXRkaXZ7XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0Y2RjZGNjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4ucGlucHV0e1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBwYWRkaW5nOiAwJSAzJTtcclxuICB3aWR0aDogODUlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5jaW1ne1xyXG5cdHdpZHRoOiA4JTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tdG9wOiA2JTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLnVzZXJpbWFnZXtcclxuICAgIHdpZHRoOjEwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgLnVzZXJpbWFnZSBpbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgfVxyXG4gIC5yaWdodC1idWJibGV7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIH1cclxuICAudXNlci1tZXNzYWdle1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzQjVCO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIG1pbi13aWR0aDogMjAlO1xyXG4gIH1cclxuICAudXNlci1tZXNzYWdlIHB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "cinZ":
    /*!*************************************!*\
      !*** ./src/app/inbox/inbox.page.ts ***!
      \*************************************/

    /*! exports provided: InboxPage */

    /***/
    function cinZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InboxPage", function () {
        return InboxPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inbox_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inbox.page.html */
      "2jHE");
      /* harmony import */


      var _inbox_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inbox.page.scss */
      "cNf8");
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


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

      var InboxPage = /*#__PURE__*/function () {
        function InboxPage(navCtrl, activatedRoute, alertController, rest, transfer, camera, loading) {
          _classCallCheck(this, InboxPage);

          this.navCtrl = navCtrl;
          this.activatedRoute = activatedRoute;
          this.alertController = alertController;
          this.rest = rest;
          this.transfer = transfer;
          this.camera = camera;
          this.loading = loading; // @ViewChild(IonContent, {read: IonContent, static: false}) myContent: IonContent;
          // @ViewChild('allnewmessages') allnewmessages:ElementRef;

          this.messages = [];
          this.data = {
            type: '',
            name: '',
            message: ''
          };
          this.error = {
            status: false,
            message: ""
          };
          this.chatImagesArray = [];
        }

        _createClass(InboxPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.logeduser = JSON.parse(localStorage.getItem('user'));
            console.log('loagged details', this.logeduser);
            this.loggedid = this.logeduser.users_id;
            console.log('loagged details', this.loggedid);
            this.recieverid = this.activatedRoute.snapshot.params["id"];
            console.log('recieverid', this.recieverid);
            this.name = this.activatedRoute.snapshot.params["name"];
            console.log('name:', this.name);
          }
        }, {
          key: "goback",
          value: function goback() {
            this.navCtrl.navigateBack('/chat');
            clearInterval(this.autoSaveInterval);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.scrollDown(); // Get all  messages....

            this.getMessages();
            this.autoSaveInterval = setInterval(function () {
              _this.updateMessages();
            }, 2000);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            clearInterval(this.autoSaveInterval);
            console.log("clear");
          }
        }, {
          key: "userTyping",
          value: function userTyping(event) {
            this.scrollDown();
          }
        }, {
          key: "updateMessages",
          value: function updateMessages() {
            var _this2 = this;

            // geting all chats Messages
            this.rest.sendRequest("chat", {
              requestType: "updateMessages",
              userId: this.loggedid,
              otherUserId: this.recieverid
            }).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var unread_messages, chatLength, i;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      console.log('update response', res);

                      if (res.status == "success") {
                        unread_messages = res.data.unread_messages;
                        chatLength = res.data.chat_length;
                        console.log("receving All chats unread messages", unread_messages);

                        if (unread_messages.length > 0) {
                          if (chatLength != unread_messages.length) {
                            for (i = 0; i < unread_messages.length; i++) {
                              this.messages.push({
                                userId: unread_messages[i].userId,
                                time: unread_messages[i].time,
                                message: unread_messages[i].message,
                                messageType: unread_messages[i].msgType,
                                profilepic: unread_messages[i].profile_pic
                              });
                            }

                            this.scrollDown();
                          }
                        }
                      }

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "getMessages",
          value: function getMessages() {
            var _this3 = this;

            console.log("logged in user", this.loggedid);
            console.log("recieverid in user", this.recieverid); // geting all chats Messages

            this.rest.sendRequest("chat", {
              requestType: "getMessages",
              userId: this.loggedid,
              otherUserId: this.recieverid
            }).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                var _this4 = this;

                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      this.scrollDown();
                      console.log("get messages response", res);

                      if (res.status == "success") {
                        this.error.status = false;
                        res.data.chat_messages.forEach(function (val) {
                          if (val.profile_pic == '' || val.profile_pic == null) {
                            _this4.image = 'assets/imgs/userprofile.png';
                          } else {
                            _this4.image = val.profile_pic;
                          }

                          var obj = {
                            userId: val.userId,
                            name: val.name,
                            profilepic: _this4.image,
                            message: val.message,
                            time: val.time,
                            messageType: val.msgType,
                            date: val.date
                          };

                          _this4.messages.push(obj);
                        }); // this.messages = res.data.chat_messages;

                        console.log("receving All chats messages", this.messages);
                        this.messages.map(function (messages, index) {
                          if (messages.messageType == "attachment") {
                            _this4.chatImagesArray.push({
                              image: messages.message
                            });
                          }
                        });
                        console.log("allMsg array ", this.chatImagesArray);
                      }

                      if (!(res.status == "error")) {
                        _context2.next = 7;
                        break;
                      }

                      this.error.status = true;
                      this.error.message = res.message;
                      return _context2.abrupt("return");

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "sendMsg",
          value: function sendMsg() {
            console.log('inmessages');
            var time = new Date();
            this.currentTime = time.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: false
            });
            console.log('currentTime', this.currentTime);

            if (this.data.message != '') {
              var d = moment__WEBPACK_IMPORTED_MODULE_10__().format('LLLL');
              var splitdate = d.split(',');
              var date = splitdate[1];

              var _time = moment__WEBPACK_IMPORTED_MODULE_10__().format('LT');

              console.log('date', splitdate);
              var dateformatted = _time;
              console.log('formatted date', dateformatted);
              console.log('user ids are = ', this.loggedid, this.recieverid);
              var messsage = {
                userId: this.loggedid,
                message: this.data.message,
                time: this.currentTime,
                messageType: "text"
              };
              this.messages.push(messsage);
              console.log('push messages', this.messages);
              var msgToSend = this.data.message;
              this.data.message = '';
              this.scrollDown();
              this.sendMessage(this.recieverid, msgToSend, "text");
            }
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(senderUserID, msg, type) {
            var fiedlstosend = {
              requestType: "sendMessage",
              userId: this.loggedid,
              otherUserId: senderUserID,
              content: msg,
              sendingTime: this.currentTime,
              messageType: type
            };
            this.rest.sendRequest('chat', fiedlstosend).subscribe(function (res) {
              console.log("send msg response", res);
            });
          }
        }, {
          key: "selectImages",
          value: function selectImages(imageType) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this5 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      cssClass: "alertclassimg",
                      header: "Select Attachment",
                      buttons: [{
                        text: "Choose from Gallery",
                        handler: function handler(res) {
                          return _this5.takePhotoFromGallery(imageType);
                        }
                      }, {
                        text: "Camera",
                        handler: function handler(res) {
                          return _this5.takePhotoFromCamera(imageType);
                        }
                      }, {
                        text: "Cancel"
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                    _context3.next = 7;
                    return alert.onDidDismiss();

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "takePhotoFromGallery",
          value: function takePhotoFromGallery(imageType) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this6 = this;

              var options;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    options = {
                      quality: 100,
                      // allowEdit: true,
                      destinationType: this.camera.DestinationType.DATA_URL,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      correctOrientation: true,
                      sourceType: 0
                    };
                    _context4.next = 3;
                    return this.camera.getPicture(options).then(function (imageData) {
                      var time = new Date();
                      _this6.currentTime = time.toLocaleString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: false
                      });
                      var imagedata = "data:image/png;base64,".concat(imageData);
                      console.log("select from gallary", imagedata);

                      _this6.messages.push({
                        requestType: "sendMessage",
                        userId: _this6.loggedid,
                        otherUserId: _this6.recieverid,
                        message: imagedata,
                        sendingTime: _this6.currentTime,
                        messageType: "attachment"
                      });

                      console.log("image added from gallary", _this6.messages);

                      _this6.loading.presentLoader("Uploading image");

                      _this6.uploadChatImage(imagedata);
                    });

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "takePhotoFromCamera",
          value: function takePhotoFromCamera(imageType) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this7 = this;

              var options;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    options = {
                      quality: 100,
                      // allowEdit: true,
                      destinationType: this.camera.DestinationType.DATA_URL,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      saveToPhotoAlbum: false,
                      correctOrientation: true
                    };
                    _context5.next = 3;
                    return this.camera.getPicture(options).then(function (imageData) {
                      var time = new Date();
                      _this7.currentTime = time.toLocaleString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: false
                      });
                      var imagedata = "data:image/png;base64,".concat(imageData);
                      console.log("select from Camera", imagedata);

                      _this7.messages.push({
                        requestType: "sendMessage",
                        userId: _this7.loggedid,
                        otherUserId: _this7.recieverid,
                        message: imagedata,
                        sendingTime: _this7.currentTime,
                        messageType: "attachment"
                      });

                      console.log("image added from gallary", _this7.messages);

                      _this7.loading.presentLoader("Uploading image");

                      _this7.uploadChatImage(imagedata); // setTimeout(() => {
                      //   this.extras.dismiss();
                      //   this.scrollDown();
                      // }, 5000);

                    }, function (err) {
                      console.log(err);
                    });

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "uploadChatImage",
          value: function uploadChatImage(imageData) {
            var _this8 = this;

            console.log(this.recieverid, 'id recieverid');
            var fileTransfer = this.transfer.create();
            var random = Math.floor(Math.random() * 100);
            var options = {
              fileKey: "attachment",
              fileName: "myChat_" + random + ".jpg",
              chunkedMode: false,
              httpMethod: "post",
              mimeType: "image/jpeg",
              headers: {},
              params: {
                image: "YPOP"
              }
            };
            fileTransfer.upload(imageData, "https://admin.uniqkidzapp.com/api/upload_attachment", options).then(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                var newProfImage, getimage;
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      newProfImage = JSON.parse(data.response);
                      console.log('newProfImage', newProfImage);
                      getimage = newProfImage.data;
                      console.log('get image only', getimage);
                      console.log("Image name after uploading", getimage);
                      this.sendMessage(this.recieverid, getimage, "attachment");
                      this.loading.dismiss();
                      this.scrollDown();

                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6, this);
              }));
            }, function (err) {
              _this8.loading.dismiss();

              console.log("Error");
              console.log(err);
              return;
            });
          }
        }, {
          key: "scrollDown",
          value: function scrollDown() {
            this.content.scrollToBottom(50);
          }
        }]);

        return InboxPage;
      }();

      InboxPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]
        }];
      };

      InboxPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"]]
        }]
      };
      InboxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inbox',
        template: _raw_loader_inbox_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inbox_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InboxPage);
      /***/
    },

    /***/
    "zxsJ":
    /*!***********************************************!*\
      !*** ./src/app/inbox/inbox-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: InboxPageRoutingModule */

    /***/
    function zxsJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InboxPageRoutingModule", function () {
        return InboxPageRoutingModule;
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


      var _inbox_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inbox.page */
      "cinZ");

      var routes = [{
        path: '',
        component: _inbox_page__WEBPACK_IMPORTED_MODULE_3__["InboxPage"]
      }];

      var InboxPageRoutingModule = /*#__PURE__*/_createClass(function InboxPageRoutingModule() {
        _classCallCheck(this, InboxPageRoutingModule);
      });

      InboxPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InboxPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=inbox-inbox-module-es5.js.map