(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cgsignup-cgsignup-module"], {
    /***/
    "0Ib1":
    /*!*********************************************!*\
      !*** ./src/app/cgsignup/cgsignup.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function Ib1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #ffffff;\n}\n\n.header {\n  display: flex;\n  /*margin-top: 5%;*/\n}\n\n.back-btn {\n  font-size: 20px;\n  padding: 37px 0 0 15px;\n  fill: #333;\n  cursor: pointer;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.background {\n  /*--overflow: hidden;*/\n  --background: url('backlogo.png') fixed 70% #FE9805 !important;\n}\n\n.topdiv {\n  height: 400px;\n  background: #FFFFFF;\n  border-radius: 0px 0px 50px 50px;\n}\n\n.logindiv {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  width: 85%;\n  border-radius: 30px;\n  margin: 0% auto;\n}\n\n.wrapper {\n  width: 75%;\n  margin: 5% auto 2%;\n  padding-top: 1px;\n}\n\n.headtxt {\n  font-weight: bold;\n  font-size: 30px;\n  color: #000000;\n  margin-top: 8%;\n}\n\n.fields {\n  margin-top: 5%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 8px;\n  background: #EBEBEB;\n  padding: 1% 4%;\n  margin-top: 5%;\n  align-items: center;\n  position: relative;\n}\n\n.inputdiv1 {\n  display: flex;\n  border-radius: 0px 0px 8px 8px;\n  background: #EBEBEB;\n  padding: 1% 10%;\n  margin-top: -1%;\n  align-items: center;\n  position: absolute;\n  z-index: 9999;\n  width: 64%;\n}\n\n.icondiv {\n  margin-top: 4%;\n  width: 8%;\n}\n\n.eye {\n  color: #737373;\n}\n\n.pinput {\n  width: 100%;\n  padding-left: 4%;\n  padding-top: 1%;\n  font-size: 15px;\n  opacity: 48%;\n}\n\n.check {\n  color: #737373;\n  text-align: right;\n  font-size: 13px;\n  margin-top: 3%;\n  width: 100%;\n  margin-right: 2%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #fd8f07f2;\n  outline: none;\n  width: 100%;\n  font-size: 15px;\n  margin-bottom: 10%;\n  height: 50px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 10px;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\n.btns {\n  font-size: 15px;\n  color: white;\n}\n\n.footer {\n  font-size: 17px;\n  text-align: center;\n  color: #000000;\n  padding: 10px 0px;\n}\n\n.bgtoolbar {\n  /*--background: #F7F7F7;*/\n  --background: #fd8f07f2;\n}\n\n.footer span {\n  color: #000;\n  font-weight: 400;\n  font-size: 20px;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n}\n\n@media only screen and (max-width: 360px) {\n  .pinput {\n    width: 100%;\n    padding-left: 4%;\n    padding-top: 1%;\n    font-size: 14px;\n    opacity: 48%;\n  }\n}\n\n@media only screen and (max-width: 414px) {\n  .icondiv {\n    margin-top: 4%;\n    width: 8%;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .pinput {\n    width: 100%;\n    padding-left: 4%;\n    padding-top: 1.5%;\n    font-size: 12px;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .pinput {\n    width: 100%;\n    padding-left: 4%;\n    padding-top: 5.5%;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nnc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHFCQUFBO0FBQ0Q7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBRkE7RUFFRSxzQkFBQTtFQUNBLDhEQUFBO0FBSUY7O0FBRkE7RUFDQyxhQUFBO0VBQ0MsbUJBQUE7RUFDQSxnQ0FBQTtBQUtGOztBQUhBO0VBSUUsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSUQ7O0FBRkE7RUFDQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUtEOztBQUhBO0VBQ0MsY0FBQTtBQU1EOztBQUpBO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFPRDs7QUFMQTtFQUNDLGFBQUE7RUFDQyw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFRRjs7QUFOQTtFQUNDLGNBQUE7RUFDQSxTQUFBO0FBU0Q7O0FBUEE7RUFDQyxjQUFBO0FBVUQ7O0FBUkE7RUFFQyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFVRDs7QUFQQTtFQUVDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBU0Q7O0FBTkE7RUFFQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUUQ7O0FBTkE7RUFHQyxZQUFBO0VBQ0MsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQyxtQkFBQTtFQUNELHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBUUY7O0FBSkE7RUFFQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBSUEsaUJBQUE7QUFHRDs7QUFEQTtFQUNDLHlCQUFBO0VBQ0EsdUJBQUE7QUFJRDs7QUFGQTtFQUVDLFdBQUE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBSUY7O0FBQ0E7RUFDQztJQUVDLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQUNBO0FBQ0Y7O0FBS0E7RUFDQztJQUVDLGNBQUE7SUFDQyxTQUFBO0VBSkQ7QUFDRjs7QUFTQTtFQUNDO0lBRUMsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBUkE7QUFDRjs7QUFhQTtFQUlDO0lBRUMsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBZkE7QUFDRiIsImZpbGUiOiJjZ3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZEJnIHtcclxuXHQtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKm1hcmdpbi10b3A6IDUlOyovXHJcbn1cclxuLmJhY2stYnRuIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZzogMzdweCAwIDAgMTVweDtcclxuICBmaWxsOiAjMzMzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYmFja1N2ZyB7XHJcbiAgZmlsbDogIzMzMztcclxufVxyXG4uYmFja2dyb3VuZHtcclxuXHQvLyAgLS1iYWNrZ3JvdW5kOiAjRkU5ODA1O1xyXG5cdCAvKi0tb3ZlcmZsb3c6IGhpZGRlbjsqL1xyXG5cdCAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1ncy9iYWNrbG9nby5wbmcpIGZpeGVkIDcwJSAjRkU5ODA1ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRvcGRpdntcclxuXHRoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1MHB4IDUwcHg7XHJcbn1cclxuLmxvZ2luZGl2e1xyXG4vLyBcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICBsZWZ0OiAzMHB4O1xyXG4vLyAgIHRvcDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAzNSUpIDBweCA1cHggMTVweDtcclxuICB3aWR0aDogODUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgbWFyZ2luOiAwJSBhdXRvO1xyXG59XHJcbi53cmFwcGVye1xyXG5cdHdpZHRoOjc1JTtcclxuXHRtYXJnaW46NSUgYXV0byAyJTtcclxuXHRwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcbi5oZWFkdHh0e1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRjb2xvcjogIzAwMDAwMDtcclxuXHRtYXJnaW4tdG9wOjglO1xyXG59XHJcbi5maWVsZHN7XHJcblx0bWFyZ2luLXRvcDo1JTtcclxufVxyXG4uaW5wdXRkaXZ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0YmFja2dyb3VuZDogI0VCRUJFQjtcclxuXHRwYWRkaW5nOiAxJSA0JTtcclxuXHRtYXJnaW4tdG9wOiA1JTtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW5wdXRkaXYxe1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA4cHggOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNFQkVCRUI7XHJcbiAgcGFkZGluZzogMSUgMTAlO1xyXG4gIG1hcmdpbi10b3A6IC0xJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIHdpZHRoOiA2NCU7XHJcbn1cclxuLmljb25kaXZ7XHJcbiBtYXJnaW4tdG9wOiA0JTtcclxuIHdpZHRoOiA4JTtcclxufVxyXG4uZXlle1xyXG5cdGNvbG9yOiAjNzM3MzczO1xyXG59XHJcbi5waW5wdXRcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmctbGVmdDogNCU7XHJcblx0cGFkZGluZy10b3A6IDElO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRvcGFjaXR5OiA0OCU7XHJcbn1cclxuXHJcbi5jaGVja1xyXG57XHJcblx0Y29sb3I6ICM3MzczNzM7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdG1hcmdpbi10b3A6IDMlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1yaWdodDogMiU7XHJcbn1cclxuXHJcbi5pb25idXR0b25cclxue1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmliXHJcbntcclxuXHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogI2ZkOGYwN2YyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5idG5ze1xyXG5cdCBmb250LXNpemU6IDE1cHg7XHJcblx0IGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5mb290ZXJcclxue1xyXG5cdGZvbnQtc2l6ZTogMTdweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHQvLyBib3R0b206IDE1cHg7XHJcbi8vICAgbGVmdDogODBweDtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuLmJndG9vbGJhcntcclxuXHQvKi0tYmFja2dyb3VuZDogI0Y3RjdGNzsqL1xyXG5cdC0tYmFja2dyb3VuZDogI2ZkOGYwN2YyO1xyXG59XHJcbi5mb290ZXIgc3BhblxyXG57XHJcblx0Y29sb3I6ICMwMDA7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBjb2xvcjogI2ZmMDAwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSB7XHJcblx0LnBpbnB1dFxyXG5cdHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA0JTtcclxuXHRcdHBhZGRpbmctdG9wOiAxJTtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdG9wYWNpdHk6IDQ4JTtcclxuXHR9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkge1xyXG5cdC5pY29uZGl2XHJcblx0e1xyXG5cdFx0bWFyZ2luLXRvcDogNCU7XHJcblx0ICB3aWR0aDogOCU7XHJcblx0fVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjBweCkge1xyXG5cdC5waW5wdXRcclxuXHR7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBhZGRpbmctbGVmdDogNCU7XHJcblx0XHRwYWRkaW5nLXRvcDogMS41JTtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweClcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweClcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xyXG5cdC5waW5wdXRcclxuXHR7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBhZGRpbmctbGVmdDogNCU7XHJcblx0XHRwYWRkaW5nLXRvcDogNS41JTtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHR9XHJcblxyXG59XHJcblxyXG4iXX0= */";
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
    "L7mQ":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cgsignup/cgsignup.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function L7mQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"headBg\">\n    <div class=\"header\">\n      <div class=\"back-btn\">\n        <img\n          src=\"assets/imgs/icons/backbtn.svg\"\n          class=\"backSvg\"\n          (click)=\"goback()\"\n        />\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\" fullscreen>\n  <div id=\"page\" class=\"adjust-overflow\">\n    <div style=\"text-align: center; margin-top: 4%\">\n      <img src=\"assets/imgs/ulogo.png\" />\n    </div>\n\n    <div class=\"logindiv\">\n      <div class=\"wrapper\">\n        <div class=\"headtxt\">Sign up today</div>\n        <p\n          style=\"\n            margin-bottom: 10%;\n            font-size: 14px;\n            color: #000000;\n            opacity: 0.8;\n          \"\n        >\n          UniqKidz holds all the important information that you need about your\n          child.\n        </p>\n\n        <div class=\"fields\">\n          <div class=\"inputdiv\">\n            <div class=\"icondiv\">\n              <img src=\"assets/imgs/icons/user.png\" />\n            </div>\n            <div class=\"pinput\">\n              <ion-input\n                placeholder=\"First Name\"\n                type=\"text\"\n                [(ngModel)]=\"firstname\"\n              ></ion-input>\n            </div>\n          </div>\n        </div>\n        <p *ngIf=\"firstnameError.status\" class=\"error\">\n          {{firstnameError.message}}\n        </p>\n\n        <div class=\"fields\">\n          <div class=\"inputdiv\">\n            <div class=\"icondiv\">\n              <img src=\"assets/imgs/icons/user.png\" />\n            </div>\n            <div class=\"pinput\">\n              <ion-input\n                placeholder=\"Last Name\"\n                type=\"text\"\n                [(ngModel)]=\"lastname\"\n              ></ion-input>\n            </div>\n          </div>\n        </div>\n        <p *ngIf=\"lastnameError.status\" class=\"error\">\n          {{lastnameError.message}}\n        </p>\n        <div class=\"fields\">\n          <div class=\"inputdiv\">\n            <div class=\"icondiv\">\n              <img src=\"assets/imgs/icons/caregiver.png\" />\n            </div>\n            <div class=\"pinput\">\n              <ion-input\n                placeholder=\"Caregivertype\"\n                type=\"text\"\n                [(ngModel)]=\"type\"\n                (click)=\"toggleSelect()\"\n                readonly\n              ></ion-input>\n            </div>\n            <div class=\"icondiv\" *ngIf=\"displayOption==false\">\n              <img src=\"assets/imgs/icons/Polygon.svg\" />\n            </div>\n            <div class=\"icondiv\" *ngIf=\"displayOption==true\" (click)=\"close()\">\n              <img src=\"assets/imgs/icons/Polygon2.svg\" />\n            </div>\n          </div>\n        </div>\n\n        <div *ngIf=\"displayOption==true\">\n          <div class=\"inputdiv1\">\n            <div class=\"pinput\">\n              <ion-input\n                *ngFor=\"let type of caregiverarray\"\n                (click)=\"selecttype(type)\"\n                readonly\n                value=\"{{type.name}}\"\n              ></ion-input>\n            </div>\n          </div>\n        </div>\n        <p *ngIf=\"typeError.status\" class=\"error\">{{typeError.message}}</p>\n        <div class=\"fields\">\n          <div class=\"inputdiv\">\n            <div class=\"icondiv\">\n              <img src=\"assets/imgs/icons/email.svg\" />\n            </div>\n            <div class=\"pinput\">\n              <ion-input\n                placeholder=\"Email\"\n                type=\"email\"\n                [(ngModel)]=\"email\"\n              ></ion-input>\n            </div>\n          </div>\n        </div>\n        <p *ngIf=\"emailError.status\" class=\"error\">{{emailError.message}}</p>\n\n        <div class=\"fields\">\n          <div class=\"inputdiv\">\n            <div class=\"icondiv\">\n              <img src=\"assets/imgs/icons/lock.svg\" />\n            </div>\n            <div class=\"pinput\">\n              <ion-input\n                placeholder=\"Password\"\n                type=\"{{showPass ? 'text':'password' }}\"\n                [(ngModel)]=\"password\"\n              ></ion-input>\n            </div>\n            <div class=\"icondiv\">\n              <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\n              <ion-icon\n                name=\"eye\"\n                class=\"eye\"\n                *ngIf=\"!showPass\"\n                (click)=\"togglePass()\"\n              ></ion-icon>\n              <ion-icon\n                name=\"eye-off\"\n                class=\"eye\"\n                *ngIf=\"showPass\"\n                (click)=\"togglePass()\"\n              ></ion-icon>\n            </div>\n          </div>\n        </div>\n        <p *ngIf=\"passwordError.status\" class=\"error\">\n          {{passwordError.message}}\n        </p>\n\n        <div class=\"fields\">\n          <div class=\"inputdiv\">\n            <div class=\"icondiv\">\n              <img src=\"assets/imgs/icons/lock.svg\" />\n            </div>\n            <div class=\"pinput\">\n              <ion-input\n                placeholder=\"Password\"\n                type=\"{{showcPass ? 'text':'password' }}\"\n                [(ngModel)]=\"confirmPassword\"\n              ></ion-input>\n            </div>\n            <div class=\"icondiv\">\n              <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\n              <ion-icon\n                name=\"eye\"\n                class=\"eye\"\n                *ngIf=\"!showcPass\"\n                (click)=\"togglecPass()\"\n              ></ion-icon>\n              <ion-icon\n                name=\"eye-off\"\n                class=\"eye\"\n                *ngIf=\"showcPass\"\n                (click)=\"togglecPass()\"\n              ></ion-icon>\n            </div>\n          </div>\n        </div>\n        <p *ngIf=\"confirmPasswordError.status\" class=\"error\">\n          {{confirmPasswordError.message}}\n        </p>\n        <p\n          style=\"\n            margin-bottom: 10%;\n            font-size: 11px;\n            color: #000000;\n            opacity: 0.8;\n          \"\n        >\n          By signing up, you agree to our\n          <span\n            style=\"text-decoration: underline\"\n            (click)=\"termsandcondition('terms')\"\n            >Terms and Conditions</span\n          >\n        </p>\n        <div class=\"ionbutton\" (click)=\"gotohome()\">\n          <ion-button class=\"ib\">\n            <span class=\"btns\">register</span>\n          </ion-button>\n        </div>\n\n        <!-- <div class=\"signup\">\n\t\t      <p>Don't have an account already?</p>\n\t\t      <p (click)=\"signupPage()\" class=\"signupText\">SIGN UP</p>\n\t\t    </div> -->\n      </div>\n    </div>\n  </div>\n\n  <!-- \t<div class=\"footer\">\n    Already a member? <span (click)=\"gotologin()\">Login here</span>\n\t</div> -->\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" *ngIf=\"showfooter==true\">\n  <ion-toolbar class=\"bgtoolbar\">\n    <div class=\"footer\">\n      Already a member? <span (click)=\"gotologin()\">Login here</span>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "YcQ3":
    /*!*********************************************!*\
      !*** ./src/app/cgsignup/cgsignup.module.ts ***!
      \*********************************************/

    /*! exports provided: CgsignupPageModule */

    /***/
    function YcQ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CgsignupPageModule", function () {
        return CgsignupPageModule;
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


      var _cgsignup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cgsignup-routing.module */
      "aR2l");
      /* harmony import */


      var _cgsignup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cgsignup.page */
      "qFza");

      var CgsignupPageModule = /*#__PURE__*/_createClass(function CgsignupPageModule() {
        _classCallCheck(this, CgsignupPageModule);
      });

      CgsignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cgsignup_routing_module__WEBPACK_IMPORTED_MODULE_5__["CgsignupPageRoutingModule"]],
        declarations: [_cgsignup_page__WEBPACK_IMPORTED_MODULE_6__["CgsignupPage"]]
      })], CgsignupPageModule);
      /***/
    },

    /***/
    "aR2l":
    /*!*****************************************************!*\
      !*** ./src/app/cgsignup/cgsignup-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: CgsignupPageRoutingModule */

    /***/
    function aR2l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CgsignupPageRoutingModule", function () {
        return CgsignupPageRoutingModule;
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


      var _cgsignup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cgsignup.page */
      "qFza");

      var routes = [{
        path: '',
        component: _cgsignup_page__WEBPACK_IMPORTED_MODULE_3__["CgsignupPage"]
      }];

      var CgsignupPageRoutingModule = /*#__PURE__*/_createClass(function CgsignupPageRoutingModule() {
        _classCallCheck(this, CgsignupPageRoutingModule);
      });

      CgsignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CgsignupPageRoutingModule);
      /***/
    },

    /***/
    "qFza":
    /*!*******************************************!*\
      !*** ./src/app/cgsignup/cgsignup.page.ts ***!
      \*******************************************/

    /*! exports provided: CgsignupPage */

    /***/
    function qFza(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CgsignupPage", function () {
        return CgsignupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cgsignup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cgsignup.page.html */
      "L7mQ");
      /* harmony import */


      var _cgsignup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cgsignup.page.scss */
      "0Ib1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _loginwithuser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../loginwithuser.service */
      "tqas");
      /* harmony import */


      var _services_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/rest.service */
      "tnAE");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _termsandcondition_termsandcondition_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../termsandcondition/termsandcondition.page */
      "kE+6");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");

      var CgsignupPage = /*#__PURE__*/function () {
        function CgsignupPage(navCtrl, modalController, platform, userService, loading, rest, menuCtrl, cd, oneSignal) {
          _classCallCheck(this, CgsignupPage);

          this.navCtrl = navCtrl;
          this.modalController = modalController;
          this.platform = platform;
          this.userService = userService;
          this.loading = loading;
          this.rest = rest;
          this.menuCtrl = menuCtrl;
          this.cd = cd;
          this.oneSignal = oneSignal;
          this.showPass = false;
          this.showcPass = false;
          this.showfooter = true;
          this.showhide = false;
          this.firstname = "";
          this.lastname = "";
          this.email = "";
          this.password = "";
          this.confirmPassword = "";
          this.isLoading = true;
          this.displayOption = false;
          this.emailError = {
            status: false,
            message: ""
          };
          this.firstnameError = {
            status: false,
            message: ""
          };
          this.lastnameError = {
            status: false,
            message: ""
          };
          this.typeError = {
            status: false,
            message: ""
          };
          this.passwordError = {
            status: false,
            message: ""
          };
          this.confirmPasswordError = {
            status: false,
            message: ""
          };
          this.error = {
            status: false,
            message: ""
          };
          this.caregiverarray = [{
            name: "Professional Caregiver"
          }, {
            name: "Family/Friend Caregiver"
          }, {
            name: "Agency Caregiver"
          }];
          this.sender_id = "620446083343";
          this.oneSignalAppId = "7c8eac8b-868e-461d-b8db-91604121255b";
        }

        _createClass(CgsignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.platform.keyboardDidShow.subscribe(function (ev) {
              var deviceHeight = window.innerHeight;
              var keyboardHeight = ev.keyboardHeight;
              var deviceHeightAdjusted = deviceHeight - keyboardHeight; //device height adjusted

              deviceHeightAdjusted = deviceHeightAdjusted < 0 ? deviceHeightAdjusted * -1 : deviceHeightAdjusted; //only positive number

              document.getElementById("page").style.height = deviceHeightAdjusted + "px"; //set page height

              document.getElementById("page").setAttribute("keyBoardHeight", keyboardHeight); //save keyboard height

              console.log("keyboard show", ev);

              _this2.cd.detectChanges();
            });
            this.platform.keyboardDidHide.subscribe(function (ev) {
              setTimeout(function () {
                document.getElementById("page").style.height = 100 + "%"; //device  100% height
              }, 100);

              _this2.cd.detectChanges();

              console.log("keyboard hide");
            });
            this.userType = localStorage.getItem("userType");
            console.log("userType", this.userType);
            this.player_id = localStorage.getItem("deviceID");
            console.log("player_id", this.player_id);
            this.platform.keyboardDidShow.subscribe(function (ev) {
              console.log("keyboard show", ev);
              _this2.showfooter = false;

              _this2.cd.detectChanges();

              console.log("showFooter", _this2.showfooter);
            });
            this.platform.keyboardDidHide.subscribe(function (ev) {
              if (_this2.showhide == true) {
                _this2.showfooter = true;
                _this2.showhide = false;

                _this2.cd.detectChanges();

                console.log("keyboard hide");
              } else {
                _this2.showhide = true;
              }
            });
            this.oneSignal.setLogLevel({
              logLevel: 6,
              visualLevel: 2
            });
            this.oneSignal.startInit(this.oneSignalAppId, this.sender_id);
            this.oneSignal.endInit();
            this.oneSignal.getIds().then(function (identity) {
              console.log("identity", identity.userId);
              _this2.identy = identity;
              _this2.player_id = _this2.identy.userId;
            });
          }
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
          key: "gotologin",
          value: function gotologin() {
            this.navCtrl.navigateForward("/signin");
          }
        }, {
          key: "goback",
          value: function goback() {
            this.navCtrl.navigateBack("/registeras");
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
          key: "toggleSelect",
          value: function toggleSelect() {
            console.log("hellow"); // if (!this.isLoading) {

            this.displayOption = true; // }
          }
        }, {
          key: "selecttype",
          value: function selecttype(type) {
            console.log("typesssss", type); // if (survey.type) {
            //   this.displayOption = false;
            //   return;
            // }
            // this.selectedSurvey = survey;
            // this.surveyAnswer = [];

            this.type = type.name;
            console.log("caregiver type", this.type);

            if (this.type == "Professional Caregiver") {
              // const myArray = this.type.split(' Caregiver');
              // this.caregivertype=myArray[0];
              this.accountTypeId = 2; // id 2 for Professional

              console.log("accountTypeId:", this.accountTypeId); // console.log('split text',this.caregivertype);

              this.displayOption = false;
            }

            if (this.type == "Family/Friend Caregiver") {
              // const myArray = this.type.split('/Friend Caregiver');
              // this.caregivertype=myArray[0];
              this.accountTypeId = 3; // id 3 for Family

              console.log("accountTypeId:", this.accountTypeId); // console.log('split text',this.caregivertype);

              this.displayOption = false;
            }

            if (this.type == "Agency Caregiver") {
              // const myArray = this.type.split(' Caregiver');
              // this.caregivertype=myArray[0];
              this.accountTypeId = 4; // id 4 for agency

              console.log("accountTypeId:", this.accountTypeId); // console.log('split text',this.caregivertype);

              this.displayOption = false;
            }
          }
        }, {
          key: "close",
          value: function close() {
            this.displayOption = false;
          }
        }, {
          key: "gotohome",
          value: function gotohome() {
            var _this3 = this;

            if (this.firstname && this.lastname && this.email && this.password && this.confirmPassword) {
              if (!this.validateEmail(this.email)) {
                this.emailError.status = true;
                this.emailError.message = "Invalid Email address.";
                setTimeout(function () {
                  _this3.emailError.status = false;
                  _this3.emailError.message = "";
                }, 3000);
                return;
              }

              if (this.password !== this.confirmPassword) {
                this.confirmPasswordError.status = true; // eslint-disable-next-line @typescript-eslint/quotes

                this.confirmPasswordError.message = "Password didn't match.";
                setTimeout(function () {
                  _this3.confirmPasswordError.status = false;
                  _this3.confirmPasswordError.message = "";
                }, 3000);
                return;
              }

              this.loading.loadershow();
              var signUpData = {
                firstName: this.firstname,
                lastName: this.lastname,
                userEmail: this.email,
                userPassword: this.password,
                confirmPassword: this.confirmPassword,
                accountTypeId: this.accountTypeId,
                // oneSignalId: "123",
                oneSignalId: this.player_id,
                userType: 1
              };
              this.rest.sendRequest("signup", signUpData).subscribe(function (data) {
                console.log("signup request data", data);

                if (data.status == "success") {
                  _this3.firstname = "";
                  _this3.lastname = "";
                  _this3.email = "";
                  _this3.password = "";
                  _this3.confirmPassword = "";

                  _this3.loading.hideLoader();

                  localStorage.setItem("user", JSON.stringify(data.data));
                  localStorage.setItem("uid", data.data.users_id);

                  _this3.loading.presentToast("Registered Successfully!!!");

                  if (_this3.type == "Professional Caregiver") {
                    _this3.userService.setSideMenu("Professional");

                    _this3.userService.userType = "Professional";
                    console.log("service", _this3.userService.userType);
                    localStorage.setItem("accountTypeId", _this3.accountTypeId);

                    _this3.navCtrl.navigateRoot("/cghomescreen");
                  }

                  if (_this3.type == "Family/Friend Caregiver") {
                    _this3.userService.setSideMenu("Family");

                    _this3.userService.userType = "Family";
                    console.log("service", _this3.userService.userType);
                    localStorage.setItem("accountTypeId", _this3.accountTypeId);

                    _this3.navCtrl.navigateRoot("/cghomescreen");
                  }

                  if (_this3.type == "Agency Caregiver") {
                    _this3.userService.setSideMenu("Agency");

                    _this3.userService.userType = "Agency";
                    console.log("service", _this3.userService.userType);
                    localStorage.setItem("accountTypeId", _this3.accountTypeId);

                    _this3.navCtrl.navigateRoot("/agencyhomescreen");
                  }
                }

                if (data.status == "error") {
                  _this3.loading.presentToast(data.message);

                  _this3.loading.hideLoader(); // console.log('signup request data:',data.status);


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

            if (!this.firstname) {
              this.firstnameError.status = true;
              this.firstnameError.message = "Firstname is required";
            }

            if (!this.lastname) {
              this.lastnameError.status = true;
              this.lastnameError.message = "Lastname is required";
            }

            if (!this.type) {
              this.typeError.status = true;
              this.typeError.message = "Choose one type atleast";
            }

            if (!this.email) {
              this.emailError.status = true;
              this.emailError.message = "Email address is required";
            }

            if (!this.password) {
              this.passwordError.status = true;
              this.passwordError.message = "Password is required";
            }

            if (!this.confirmPassword) {
              this.confirmPasswordError.status = true;
              this.confirmPasswordError.message = "Confirm Password is required";
            }

            setTimeout(function () {
              _this3.emailError.status = false;
              _this3.emailError.message = "";
              _this3.firstnameError.status = false;
              _this3.firstnameError.message = "";
              _this3.lastnameError.status = false;
              _this3.lastnameError.message = "";
              _this3.typeError.status = false;
              _this3.typeError.message = "";
              _this3.passwordError.status = false;
              _this3.passwordError.message = "";
              _this3.confirmPasswordError.status = false;
              _this3.confirmPasswordError.message = "";
            }, 3000);

            if (this.userType == "parent") {
              this.navCtrl.navigateRoot("/homescreen");
            }
          }
        }, {
          key: "validateEmail",
          value: function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
          }
        }, {
          key: "termsandcondition",
          value: function termsandcondition(terms) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create({
                      component: _termsandcondition_termsandcondition_page__WEBPACK_IMPORTED_MODULE_8__["TermsandconditionPage"],
                      cssClass: "termsclass",
                      componentProps: {
                        termsaandcondition: terms
                      }
                    });

                  case 2:
                    modal = _context5.sent;
                    _context5.next = 5;
                    return modal.present();

                  case 5:
                    return _context5.abrupt("return", _context5.sent);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }]);

        return CgsignupPage;
      }();

      CgsignupPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _loginwithuser_service__WEBPACK_IMPORTED_MODULE_5__["LoginwithuserService"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"]
        }];
      };

      CgsignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-cgsignup",
        template: _raw_loader_cgsignup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cgsignup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CgsignupPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=cgsignup-cgsignup-module-es5.js.map