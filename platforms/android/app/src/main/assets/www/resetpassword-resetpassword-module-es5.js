(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resetpassword-resetpassword-module"], {
    /***/
    "IKP2":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/resetpassword.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function IKP2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-content class=\"background\">\n\n  <div class=\"topdiv\">\n    <div class=\"header\">\n      <div class=\"back-btn\">\n        <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n        </div>\n    </div>\n    <div style=\"text-align: center;margin-top: 4%;\">\n      <img src=\"assets/imgs/ulogo.png\">\n    </div>  \n  </div>\n  <div class=\"logindiv\">\n    <div class=\"wrapper\">\n      \n      <div class=\"headtxt\">Forgot,<br>Password?</div>\n      <p style=\"margin-bottom: 10%;font-size:14px;color: #000000;opacity:0.8;\">Enter your email to get the recovery <br>OTP</p>\n\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"emaildiv\">\n\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t<img src=\"assets/imgs/icons/lock.svg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"New Password\"\n\t\t\t\t\t\t type=\"{{showPass ? 'text':'password' }}\"\n\t\t\t\t\t\t  [(ngModel)]=\"newPassword\"\n\t\t\t\t\t\t></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t<!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\n\t\t\t\t\t\t<ion-icon name=\"eye\" class=\"eye\"  *ngIf=\"!showPass\" (click)=\"togglePass()\"></ion-icon>\n\t\t\t\t\t\t<ion-icon name=\"eye-off\" class=\"eye\"  *ngIf=\"showPass\" (click)=\"togglePass()\"></ion-icon>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p *ngIf=\"newPassError.status\" class=\"error\">{{newPassError.message}}</p>\n\t\t\t\n\t\t\t<div class=\"fields\">\n\t\t\t\t<div class=\"emaildiv\">\n\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t<img src=\"assets/imgs/icons/lock.svg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t\t<ion-input placeholder=\"Confirm Password\"\n\t\t\t\t\t\t type=\"{{showcPass ? 'text':'password' }}\"\n\t\t\t\t\t\t  [(ngModel)]=\"confirmPassword\"></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"icondiv\">\n\t\t\t\t\t\t<!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\n\t\t\t\t\t\t<ion-icon name=\"eye\" class=\"eye\"  *ngIf=\"!showcPass\" (click)=\"togglecPass()\"></ion-icon>\n\t\t\t\t\t\t<ion-icon name=\"eye-off\" class=\"eye\"  *ngIf=\"showcPass\" (click)=\"togglecPass()\"></ion-icon>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p *ngIf=\"confPassError.status\" class=\"error\">{{confPassError.message}}</p>\n\n\t\t\t<p *ngIf=\"error.status\" class=\"error\">{{error.message}}</p>\n\n      <div class=\"ionbutton\" (click)=\"gotologin()\">\n\t\t\t\t<ion-button class=\"ib\">Reset</ion-button>\n\t\t\t</div>\n\n      \n    </div>\n\n  </div>\n \n \n</ion-content>\n";
      /***/
    },

    /***/
    "PFJr":
    /*!*******************************************************!*\
      !*** ./src/app/resetpassword/resetpassword.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function PFJr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n}\n\n.header {\n  display: flex;\n  /*margin-top: 5%;*/\n}\n\n.back-btn {\n  font-size: 20px;\n  padding: 37px 0 0 15px;\n  fill: #333;\n  cursor: pointer;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.background {\n  /*--background: #FE9805;*/\n  /*--overflow: hidden;*/\n  --background: url('UniqKidz-Logo.png') 40% 0/90% #FE9805 !important;\n}\n\n.topdiv {\n  height: 400px;\n  background: #FFFFFF;\n  border-radius: 0px 0px 50px 50px;\n}\n\n.logindiv {\n  position: absolute;\n  left: 30px;\n  top: 240px;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  width: 85%;\n  border-radius: 30px;\n}\n\n.wrapper {\n  width: 75%;\n  margin: 2% auto;\n}\n\n.headtxt {\n  font-weight: bold;\n  font-size: 30px;\n  color: #000000;\n  margin-top: 8%;\n}\n\n.fields {\n  margin-top: 5%;\n}\n\n.emaildiv {\n  display: flex;\n  border-radius: 8px;\n  background: #EBEBEB;\n  padding: 1% 4%;\n  margin-top: 5%;\n}\n\n.icondiv {\n  margin-top: 6%;\n  width: 8%;\n}\n\n.eye {\n  color: #737373;\n}\n\n.pinput {\n  width: 85%;\n  padding-left: 4%;\n  padding-top: 1%;\n  font-size: 15px;\n  opacity: 48%;\n}\n\n.check {\n  color: #000000;\n  text-align: right;\n  font-size: 12px;\n  margin-top: 3%;\n  width: 100%;\n  margin-right: 2%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 100%;\n  font-size: 18px;\n  margin-bottom: 10%;\n  height: 50px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 10px;\n  --box-shadow: none;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n/*.signup {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 47px;\n  margin-bottom: 10px;\n}\n.signup p {\n  font-size: 14px;\n}\n\n.signupText {\n  cursor: pointer;\n  font-weight: 600;\n  letter-spacing: 0;\n}*/\n\n.footer {\n  font-size: 17px;\n  text-align: center;\n  color: #000000;\n}\n\n.bgtoolbar {\n  --background: #F7F7F7;\n}\n\nspan {\n  color: #000;\n  font-weight: 400;\n  font-size: 20px;\n}\n\n@media only screen and (max-width: 414px) {\n  .icondiv {\n    margin-top: 6%;\n    width: 8%;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .pinput {\n    width: 85%;\n    padding-left: 4%;\n    font-size: 12px;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .pinput {\n    width: 85%;\n    padding-left: 4%;\n    padding-top: 5.5%;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc2V0cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFGQTtFQUNHLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtRUFBQTtBQUtIOztBQUhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFNRjs7QUFKQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQVFGOztBQU5BO0VBQ0MsaUJBQUE7RUFDRyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFTSjs7QUFQQTtFQUNDLGNBQUE7QUFVRDs7QUFSQTtFQUNDLGFBQUE7RUFDRyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNILGNBQUE7QUFXRDs7QUFSQTtFQUNDLGNBQUE7RUFDQSxTQUFBO0FBV0Q7O0FBVEE7RUFDRSxjQUFBO0FBWUY7O0FBVEE7RUFFQyxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNHLFlBQUE7QUFXSjs7QUFSQTtFQUVDLGNBQUE7RUFDRyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBVUo7O0FBUEE7RUFFRSxrQkFBQTtFQUNELFdBQUE7RUFDQSxlQUFBO0FBU0Q7O0FBUEE7RUFHQyxZQUFBO0VBQ0MscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQyxtQkFBQTtFQUNELHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQVFGOztBQUxBOzs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7O0FBa0JBO0VBRUMsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQU1EOztBQUpBO0VBQ0MscUJBQUE7QUFPRDs7QUFMQTtFQUVDLFdBQUE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7QUFPRjs7QUFIQTtFQUNDO0lBRUMsY0FBQTtJQUNDLFNBQUE7RUFLRDtBQUNGOztBQUFBO0VBQ0M7SUFFQyxVQUFBO0lBQ0csZ0JBQUE7SUFDQSxlQUFBO0VBQ0g7QUFDRjs7QUFJQTtFQUlHO0lBRUQsVUFBQTtJQUNHLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBTkg7QUFDRiIsImZpbGUiOiJyZXNldHBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkQmcge1xyXG4gIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qbWFyZ2luLXRvcDogNSU7Ki9cclxufVxyXG4uYmFjay1idG4ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiAzN3B4IDAgMCAxNXB4O1xyXG4gIGZpbGw6ICMzMzM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5iYWNrU3ZnIHtcclxuICBmaWxsOiAjMzMzO1xyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAvKi0tYmFja2dyb3VuZDogI0ZFOTgwNTsqL1xyXG4gICAvKi0tb3ZlcmZsb3c6IGhpZGRlbjsqL1xyXG4gICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1ncy9VbmlxS2lkei1Mb2dvLnBuZykgNDAlIDAvOTAlICNGRTk4MDUgIWltcG9ydGFudDtcclxufVxyXG4udG9wZGl2e1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDUwcHggNTBweDtcclxufVxyXG4ubG9naW5kaXZ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgdG9wOiAyNDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDM1JSkgMHB4IDVweCAxNXB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG4ud3JhcHBlcntcclxuICB3aWR0aDo3NSU7XHJcbiAgbWFyZ2luOjIlIGF1dG87XHJcbn1cclxuLmhlYWR0eHR7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbi10b3A6OCU7XHJcbn1cclxuLmZpZWxkc3tcclxuXHRtYXJnaW4tdG9wOjUlO1xyXG59XHJcbi5lbWFpbGRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0VCRUJFQjtcclxuICAgIHBhZGRpbmc6IDElIDQlO1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG5cclxufVxyXG4uaWNvbmRpdntcclxuIG1hcmdpbi10b3A6IDYlO1xyXG4gd2lkdGg6IDglO1xyXG59XHJcbi5leWV7XHJcbiAgY29sb3I6ICM3MzczNzM7XHJcbn1cclxuXHJcbi5waW5wdXRcclxue1xyXG5cdHdpZHRoOiA4NSU7XHJcblx0cGFkZGluZy1sZWZ0OiA0JTtcclxuXHRwYWRkaW5nLXRvcDogMSU7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG4gICAgb3BhY2l0eTogNDglO1xyXG59XHJcblxyXG4uY2hlY2tcclxue1xyXG5cdGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxufVxyXG5cclxuLmlvbmJ1dHRvblxyXG57XHJcbiBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmliXHJcbntcclxuXHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogI0ZFOTgwNTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKi5zaWdudXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDQ3cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uc2lnbnVwIHAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNpZ251cFRleHQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG59Ki9cclxuXHJcbi5mb290ZXJcclxue1xyXG5cdGZvbnQtc2l6ZTogMTdweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxufVxyXG4uYmd0b29sYmFye1xyXG5cdC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxufVxyXG5zcGFuXHJcbntcclxuXHRjb2xvcjogIzAwMDtcclxuICBmb250LXdlaWdodDo0MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNHB4KSB7XHJcblx0Lmljb25kaXZcclxuXHR7XHJcblx0XHRtYXJnaW4tdG9wOiA2JTtcclxuXHQgIHdpZHRoOiA4JTtcclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMHB4KSB7XHJcblx0LnBpbnB1dFxyXG5cdHtcclxuXHRcdHdpZHRoOiA4NSU7XHJcblx0ICAgIHBhZGRpbmctbGVmdDogNCU7XHJcblx0ICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweClcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweClcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xyXG4gIFx0LnBpbnB1dFxyXG5cdHtcclxuXHRcdHdpZHRoOiA4NSU7XHJcblx0ICAgIHBhZGRpbmctbGVmdDogNCU7XHJcblx0ICAgIHBhZGRpbmctdG9wOiA1LjUlO1xyXG5cdCAgICBmb250LXNpemU6IDE0cHg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "YI85":
    /*!*****************************************************!*\
      !*** ./src/app/resetpassword/resetpassword.page.ts ***!
      \*****************************************************/

    /*! exports provided: ResetpasswordPage */

    /***/
    function YI85(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetpasswordPage", function () {
        return ResetpasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_resetpassword_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./resetpassword.page.html */
      "IKP2");
      /* harmony import */


      var _resetpassword_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./resetpassword.page.scss */
      "PFJr");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ResetpasswordPage = /*#__PURE__*/function () {
        function ResetpasswordPage(navCtrl, menuCtrl, activatedRoute, rest) {
          _classCallCheck(this, ResetpasswordPage);

          this.navCtrl = navCtrl;
          this.menuCtrl = menuCtrl;
          this.activatedRoute = activatedRoute;
          this.rest = rest;
          this.showPass = false;
          this.showcPass = false;
          this.newPassError = {
            status: false,
            message: ''
          };
          this.confPassError = {
            status: false,
            message: ''
          };
          this.error = {
            status: false,
            message: ''
          };
          this.recoveryEmail = this.activatedRoute.snapshot.params['email'];
          console.log('recoveryEmail::', this.recoveryEmail);
        }

        _createClass(ResetpasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
            this.navCtrl.navigateBack('/otp');
          }
        }, {
          key: "togglePass",
          value: function togglePass() {
            this.showPass = !this.showPass;
          }
        }, {
          key: "togglecPass",
          value: function togglecPass() {
            this.showcPass = !this.showcPass;
          }
        }, {
          key: "gotologin",
          value: function gotologin() {
            var _this = this;

            if (this.newPassword && this.confirmPassword) {
              if (this.newPassword === this.confirmPassword) {
                this.rest.sendRequest('forgot_password', {
                  requestType: 'reset_password',
                  email: this.recoveryEmail,
                  userPassword: this.newPassword,
                  confirmPassword: this.confirmPassword
                }).subscribe(function (data) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          this.newPassword = '';
                          this.confirmPassword = '';
                          this.navCtrl.navigateForward('/signin');

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee, this);
                  }));
                }, function (err) {
                  _this.error.status = true;
                  _this.error.message = err.error.message;
                  setTimeout(function () {
                    _this.error.status = false;
                    _this.error.message = '';
                  }, 3000);
                });
              } else {
                this.confPassError.status = true;
                this.confPassError.message = 'Password not match!';
                setTimeout(function () {
                  _this.confPassError.status = false;
                  _this.confPassError.message = '';
                }, 3000);
              }
            }

            if (!this.newPassword) {
              this.newPassError.status = true;
              this.newPassError.message = 'Password is required';
            }

            if (!this.confirmPassword) {
              this.confPassError.status = true;
              this.confPassError.message = 'Confirm Password is required';
            }

            setTimeout(function () {
              _this.newPassError.status = false;
              _this.newPassError.message = '';
              _this.confPassError.status = false;
              _this.confPassError.message = '';
            }, 3000);
          }
        }]);

        return ResetpasswordPage;
      }();

      ResetpasswordPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }];
      };

      ResetpasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resetpassword',
        template: _raw_loader_resetpassword_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resetpassword_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ResetpasswordPage);
      /***/
    },

    /***/
    "yIft":
    /*!*******************************************************!*\
      !*** ./src/app/resetpassword/resetpassword.module.ts ***!
      \*******************************************************/

    /*! exports provided: ResetpasswordPageModule */

    /***/
    function yIft(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetpasswordPageModule", function () {
        return ResetpasswordPageModule;
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


      var _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./resetpassword-routing.module */
      "zrPg");
      /* harmony import */


      var _resetpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./resetpassword.page */
      "YI85");

      var ResetpasswordPageModule = /*#__PURE__*/_createClass(function ResetpasswordPageModule() {
        _classCallCheck(this, ResetpasswordPageModule);
      });

      ResetpasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetpasswordPageRoutingModule"]],
        declarations: [_resetpassword_page__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordPage"]]
      })], ResetpasswordPageModule);
      /***/
    },

    /***/
    "zrPg":
    /*!***************************************************************!*\
      !*** ./src/app/resetpassword/resetpassword-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ResetpasswordPageRoutingModule */

    /***/
    function zrPg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetpasswordPageRoutingModule", function () {
        return ResetpasswordPageRoutingModule;
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


      var _resetpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./resetpassword.page */
      "YI85");

      var routes = [{
        path: '',
        component: _resetpassword_page__WEBPACK_IMPORTED_MODULE_3__["ResetpasswordPage"]
      }];

      var ResetpasswordPageRoutingModule = /*#__PURE__*/_createClass(function ResetpasswordPageRoutingModule() {
        _classCallCheck(this, ResetpasswordPageRoutingModule);
      });

      ResetpasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResetpasswordPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=resetpassword-resetpassword-module-es5.js.map