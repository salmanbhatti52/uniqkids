(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addchild-addchild-module"], {
    /***/
    "3ezQ":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addchild/addchild.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function ezQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\t\t  <ion-toolbar class=\"headBgGlobal\">\n        <ion-row>\n\t\t\t<ion-col class=\"backbtn\" size=\"2\">\n\t\t\t\t<div>\n\t\t\t\t  <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t\t\t\t</div>\n\t\t\t  </ion-col>\n    \n          <ion-col class=\"titleclass\" size=\"8\">\n            <ion-text class=\"ctitle\">Add Child</ion-text>\n          </ion-col>\n    \n          <ion-col size=\"2\">\n    \n          </ion-col>\n        </ion-row>\n\t\t    <!-- <ion-buttons slot=\"start\" class=\"backbtn\">\n\t\t      <img src=\"assets/imgs/icons/backbtn.svg\" class=\"backSvg\" (click)=\"goback()\">\n\t\t  </ion-buttons>\n\t\t  <ion-title class=\"ctitle\">Add Child</ion-title> -->\n\t\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t<div class=\"wrapper\">\n\t\t<div class=\"topdiv\">\n\t\t\t<div class=\"logodiv\" (click)=\"uploadPic()\">\n\t\t\t\t<img src=\"{{defaultProfile}}\" *ngIf=\"defaultProfile!=''\">\n\t\t\t\t<img src=\"assets/imgs/profilelogo.png\" *ngIf=\"defaultProfile==''\">\n\t\t\t</div>\n\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-input placeholder=\"Childname\" type=\"text\" [(ngModel)]=\"childname\"></ion-input>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p *ngIf=\"childnameError.status\" class=\"error\">\n    \t\t{{childnameError.message}}\n\t    </p>\n\t\t\t<div class=\"progressdiv\">\n\t\t\t\t<div class=\"htext\">Age</div>\n\t\t\t\t<!-- <img src=\"assets/imgs/progress.png\"> -->\n\t\t\t\t<ion-range min=\"0\" max=\"30\"\n\t\t\t\t [value]=\"age\" \n\t\t\t\t\t(ionChange)=\"setValue($event)\">\n\t\t\t \t></ion-range>\n\t\t\t\t<p style=\"margin: 0px;margin-left: 25%;font-size: 10px;font-weight: 500;\">{{age}} years</p>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-input placeholder=\"Diagnosis\" type=\"text\" [(ngModel)]=\"diagnosis\"></ion-input>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p *ngIf=\"diagnosisError.status\" class=\"error\">\n    \t\t{{diagnosisError.message}}\n\t    </p>\n\t\t\t<div class=\"inputdiv\">\n\t\t\t\t<div class=\"pinput\">\n\t\t\t\t\t<ion-input placeholder=\"Allergies\" type=\"text\" [(ngModel)]=\"allergies\"></ion-input>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"para\">Write allergies separated by ,</div>\n\t\t</div>\n\t\t<p *ngIf=\"allergiesError.status\" class=\"error\">\n    \t\t{{allergiesError.message}}\n\t  </p>\n\t\t<!-- <div class=\"boxdiv\">\n\t\t\t<div class=\"one\">\n\t\t\t\t<div class=\"box1\">\n\t\t\t\t\t<div class=\"innerbox\">\n\t\t\t\t\t\t<div class=\"imgdiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/pharma.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"text1\">Medications</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"box2\">\n\t\t\t\t\t<div class=\"imgdiv\">\n\t\t\t\t\t\t<img src=\"assets/imgs/nutrition.svg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"text1\">Eating Time</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"one\">\n\t\t\t\t<div class=\"box1\">\n\t\t\t\t\t<div class=\"innerbox\">\n\t\t\t\t\t\t<div class=\"imgdiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/pharma.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"text1\">Medications</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"box2\">\n\t\t\t\t\t<div class=\"imgdiv\">\n\t\t\t\t\t\t<img src=\"assets/imgs/nutrition.svg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"text1\">Eating Time</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"one\">\n\t\t\t\t<div class=\"box1\">\n\t\t\t\t\t<div class=\"innerbox\">\n\t\t\t\t\t\t<div class=\"imgdiv\">\n\t\t\t\t\t\t\t<img src=\"assets/imgs/pharma.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"text1\">Medications</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"box2\">\n\t\t\t\t\t<div class=\"imgdiv\">\n\t\t\t\t\t\t<img src=\"assets/imgs/nutrition.svg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"text1\">Eating Time</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div> -->\n\n\t\t<div class=\"boxdiv\">\n\t\t\t<div class=\"left\" (click)=\"medication()\">\n\t\t\t\t<div class=\"box1\">\n\t\t\t\t\t<div class=\"innerbox\">\n\t\t\t\t\t\t<img src=\"assets/imgs/pharma.svg\">\n\t\t\t\t\t\t<div class=\"text1\">Medications</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"right\" (click)=\"eating()\">\n\t\t\t\t<div class=\"box1\">\n\t\t\t\t\t<div class=\"innerbox\">\n\t\t\t\t\t\t<img src=\"assets/imgs/nutrition-protein.svg\">\n\t\t\t\t\t\t<div class=\"text1\">Eating Time</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\n\t\t<div class=\"boxdiv\">\n\t\t\t<div class=\"left\" (click)=\"snack()\">\n\t\t\t\t<div class=\"box1\">\n\t\t\t\t\t<div class=\"innerbox\">\n\t\t\t\t\t\t<img src=\"assets/imgs/snack.svg\">\n\t\t\t\t\t\t<div class=\"text1\">Snack Time</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"right\" (click)=\"likes()\">\n\t\t\t\t<div class=\"box1\">\n\t\t\t\t\t<div class=\"innerbox\">\n\t\t\t\t\t\t<img src=\"assets/imgs/likes.svg\">\n\t\t\t\t\t\t<div class=\"text1\">Likes</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\n\t\t<div class=\"boxdiv\">\n\t\t\t<div class=\"left\"  (click)=\"dislikes()\">\n\t\t\t\t<div class=\"box1\">\n\t\t\t\t\t<div class=\"innerbox\">\n\t\t\t\t\t\t<img src=\"assets/imgs/dislikes.svg\">\n\t\t\t\t\t\t<div class=\"text1\">DisLikes</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"right\" (click)=\"favorite()\">\n\t\t\t\t<div class=\"box1\">\n\t\t\t\t\t<div class=\"innerbox\">\n\t\t\t\t\t\t<img src=\"assets/imgs/star.svg\">\n\t\t\t\t\t\t<div class=\"text1\">Favorite Activities</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\n\t\t<div class=\"inputdiv1\">\n\t\t\t<div class=\"pinput1\">\n\t\t\t\t<ion-input placeholder=\"Emergency Contacts\" type=\"tel\" [(ngModel)]=\"contacts\"></ion-input>\n\t\t\t</div>\n\t\t\t<img src=\"assets/imgs/icons/plus.svg\" class=\"cimg\" (click)=\"add()\">\n\t\t</div>\n\n\t\t<!-- <p *ngIf=\"contactsError.status\" class=\"error\">\n    \t\t{{contactsError.message}}\n\t  </p> -->\n\t  <!-- <p *ngIf=\"error.status\" class=\"error\">\n      {{error.message}}\n    </p> -->\n\n\t\t<div class=\"contactdiv\" *ngFor=\"let arr of array\">\n\t\t\t<div class=\"icondiv\">\n\t\t\t\t<img src=\"assets/imgs/icons/call.png\">\n\t\t\t</div>\n\t\t\t<p>{{arr.phoneno}}</p>\n\t\t</div>\n\n\t\t<div class=\"fields\">\n\t\t\t<div class=\"inputdiv1\">\n\t\t\t\t<div class=\"pinput1\">\n\t\t\t\t\t<ion-textarea placeholder=\"Pediatrician\"  rows=\"3\" cols=\"20\" [(ngModel)]=\"pediatrician\"></ion-textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<p *ngIf=\"pediatricianError.status\" class=\"error\">\n    \t\t{{pediatricianError.message}}\n\t  </p>\n\t\t<div class=\"fields\">\n\t\t\t<div class=\"inputdiv1\">\n\t\t\t\t<div class=\"pinput1\">\n\t\t\t\t\t<ion-textarea placeholder=\"Insurance information\"  rows=\"3\" cols=\"20\" [(ngModel)]=\"insuranceinfo\"></ion-textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<p *ngIf=\"insuranceinfoError.status\" class=\"error\">\n    \t\t{{insuranceinfoError.message}}\n\t  </p>\n\n\t\t<div class=\"fields\">\n\t\t\t<div class=\"inputdiv1\">\n\t\t\t\t<div class=\"pinput1\">\n\t\t\t\t\t<ion-textarea placeholder=\"Special instructions\"  rows=\"3\" cols=\"20\" [(ngModel)]=\"instructions\"></ion-textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<p *ngIf=\"instructionsError.status\" class=\"error\">\n    \t\t{{instructionsError.message}}\n\t  </p>\n\n\t\t<div class=\"fields\">\n\t\t\t<div class=\"inputdiv1\">\n\t\t\t\t<div class=\"pinput1\">\n\t\t\t\t\t<ion-textarea placeholder=\"Additional Notes\"  rows=\"3\" cols=\"20\" [(ngModel)]=\"notes\"></ion-textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<p *ngIf=\"notesError.status\" class=\"error\">\n    \t\t{{notesError.message}}\n\t  </p>\n\n\t\t<div class=\"ionbutton\" (click)=\"gotoprofile()\">\n\t\t\t<ion-button class=\"ib\">Save</ion-button>\n\t\t</div>\n\n\t</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "4DVc":
    /*!*********************************************!*\
      !*** ./src/app/addchild/addchild.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function DVc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backbtn {\n  margin-left: 0%;\n  padding-top: 10px;\n  padding-left: 18px;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .backbtn {\n  padding-top: 12px;\n  padding-left: 18px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 10% auto;\n}\n\n.topdiv {\n  width: 80%;\n  margin: 0% auto;\n}\n\n.logodiv {\n  /*background: #ffff;*/\n  width: 110px;\n  margin: 0% auto;\n  /*border-radius: 90px;*/\n  height: 110px;\n}\n\n.logodiv img {\n  border-radius: 90px;\n  width: 110px;\n  height: 110px;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  background: #FFFFFF;\n  width: 100%;\n  margin-top: 5%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n  padding: 0% 0% 1% 7%;\n}\n\n.progressdiv {\n  margin-top: 3%;\n  margin-left: 3%;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\nion-range {\n  --bar-background: #fff;\n  --bar-height: 5px;\n  --bar-border-radius: 6px;\n  --knob-background: #FE9805;\n  --knob-size: 15px;\n  /* --pin-background: #FE9805; */\n  --pin-color: #FE9805;\n  --height: 15px;\n  --bar-background-active: #FE8805;\n}\n\n.htext {\n  color: #FE9805;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.para {\n  font-size: 10px;\n  font-weight: 500;\n  color: #000000;\n  margin: 4% 4%;\n}\n\n.boxdiv {\n  margin-top: 5%;\n}\n\n.one {\n  display: flex;\n  margin-left: 4%;\n  margin-bottom: 5%;\n}\n\n.imgdiv {\n  text-align: center;\n}\n\n.box1 {\n  background: #fff;\n  /*box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;*/\n  box-shadow: #0000001a 2px 5px 5px;\n  border-radius: 14px;\n}\n\n.text1 {\n  font-weight: 500;\n  font-size: 14px;\n  color: #000000;\n  margin-top: 5%;\n}\n\n.innerbox {\n  text-align: center;\n  padding: 10% 0%;\n}\n\n.left {\n  width: 45%;\n  float: left;\n}\n\n.right {\n  width: 45%;\n  float: left;\n  margin-left: 5%;\n}\n\n.clear {\n  clear: both;\n}\n\n.inputdiv1 {\n  margin: 10% auto 5%;\n  display: flex;\n  border-radius: 12px;\n  background: #FFFFFF;\n  width: 80%;\n}\n\n.pinput1 {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n  padding: 1% 0% 1% 7%;\n}\n\n.cimg {\n  margin-right: 5%;\n}\n\n.contactdiv {\n  display: flex;\n  margin-left: 30%;\n}\n\n.contactdiv p {\n  margin: 0px;\n  padding-left: 5%;\n}\n\n.ionbutton {\n  text-align: center;\n  width: 100%;\n  margin-top: 10%;\n}\n\n.ib {\n  color: white;\n  --background: #FE9805;\n  outline: none;\n  width: 80%;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10%;\n  height: 58px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: white;\n  --border-radius: 12px;\n  --box-shadow: none;\n  text-transform: uppercase;\n}\n\n.error {\n  color: #ff0000;\n  font-size: 12px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZGNoaWxkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDQyxXQUFBO0FBRUQ7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQURBO0VBRUUsZUFBQTtFQUNFLGdCQUFBO0FBR0o7O0FBREE7RUFDQyxrQkFBQTtFQUFvQixnQkFBQTtBQUtyQjs7QUFGQztFQUNDLGtCQUFBO0VBQW9CLGlCQUFBO0FBTXRCOztBQUpFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBTUo7O0FBRkE7RUFDRSxxQkFBQTtBQUtGOztBQUhBO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FBTUQ7O0FBSkE7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQU9EOztBQUxBO0VBQ0MscUJBQUE7RUFDRyxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQVFKOztBQU5BO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVNGOztBQVBBO0VBQ0MsYUFBQTtFQUNHLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQVVKOztBQVJBO0VBRUMsV0FBQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBVUY7O0FBUkE7RUFDQyxjQUFBO0VBQ0MsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFXRjs7QUFUQTtFQUNDLHNCQUFBO0VBQ0MsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBWUY7O0FBVkE7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBYUQ7O0FBWEE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQWNEOztBQVpBO0VBQ0MsY0FBQTtBQWVEOztBQWJBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWdCRDs7QUFkQTtFQUNDLGtCQUFBO0FBaUJEOztBQWZBO0VBQ0MsZ0JBQUE7RUFDRyw2Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7QUFrQko7O0FBaEJBO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFtQkQ7O0FBakJBO0VBQ0Msa0JBQUE7RUFDQyxlQUFBO0FBb0JGOztBQWxCQTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FBcUJEOztBQW5CQTtFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXNCRDs7QUFwQkE7RUFDQyxXQUFBO0FBdUJEOztBQXJCQTtFQUNDLG1CQUFBO0VBQ0csYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBd0JKOztBQXRCQTtFQUNDLFdBQUE7RUFDRyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQXlCSjs7QUF2QkE7RUFDQyxnQkFBQTtBQTBCRDs7QUF2QkE7RUFDQyxhQUFBO0VBQ0MsZ0JBQUE7QUEwQkY7O0FBeEJBO0VBQ0MsV0FBQTtFQUNDLGdCQUFBO0FBMkJGOztBQXhCQTtFQUVFLGtCQUFBO0VBQ0QsV0FBQTtFQUNBLGVBQUE7QUEwQkQ7O0FBeEJBO0VBR0MsWUFBQTtFQUNDLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQyxtQkFBQTtFQUNELHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUF5QkY7O0FBdkJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTBCRiIsImZpbGUiOiJhZGRjaGlsZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLm1lbnVpY29ue1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuLmJhY2tidG57XHJcbiAgbWFyZ2luLWxlZnQ6MCU7XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcbi5jdGl0bGV7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRpdGxlY2xhc3N7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5pb3N7XHJcblx0LnRpdGxlY2xhc3N7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cdH1cclxuICAuYmFja2J0bntcclxuICAgIHBhZGRpbmctdG9wOjEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbiAgfVxyXG4gIC5oZWFkQmcge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gICAgcGFkZGluZzogMyUgMCU7XHJcbiAgfVxyXG4gIFxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6ODAlO1xyXG5cdG1hcmdpbjoxMCUgYXV0bztcclxufVxyXG4udG9wZGl2e1xyXG5cdHdpZHRoOjgwJTtcclxuXHRtYXJnaW46MCUgYXV0bztcclxufVxyXG4ubG9nb2RpdntcclxuXHQvKmJhY2tncm91bmQ6ICNmZmZmOyovXHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBtYXJnaW46IDAlIGF1dG87XHJcbiAgICAvKmJvcmRlci1yYWRpdXM6IDkwcHg7Ki9cclxuICAgIGhlaWdodDogMTEwcHg7XHJcbn1cclxuLmxvZ29kaXYgaW1ne1xyXG5cdCBib3JkZXItcmFkaXVzOiA5MHB4O1xyXG4gIHdpZHRoOiAxMTBweDtcclxuICBoZWlnaHQ6IDExMHB4O1xyXG59XHJcbi5pbnB1dGRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5waW5wdXRcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBvcGFjaXR5OiA0OCU7XHJcbiAgcGFkZGluZzogMCUgMCUgMSUgNyVcclxufVxyXG4ucHJvZ3Jlc3NkaXZ7XHJcblx0bWFyZ2luLXRvcDogMyU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5pb24tcmFuZ2V7XHJcblx0LS1iYXItYmFja2dyb3VuZDogI2ZmZjtcclxuICAtLWJhci1oZWlnaHQ6IDVweDtcclxuICAtLWJhci1ib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgLS1rbm9iLWJhY2tncm91bmQ6ICNGRTk4MDU7XHJcbiAgLS1rbm9iLXNpemU6IDE1cHg7XHJcbiAgLyogLS1waW4tYmFja2dyb3VuZDogI0ZFOTgwNTsgKi9cclxuICAtLXBpbi1jb2xvcjogI0ZFOTgwNTtcclxuICAtLWhlaWdodDogMTVweDtcclxuICAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogI0ZFODgwNTtcclxufVxyXG4uaHRleHR7XHJcblx0Y29sb3I6ICNGRTk4MDU7XHJcblx0Zm9udC13ZWlnaHQ6NTAwO1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcbi5wYXJhe1xyXG5cdGZvbnQtc2l6ZTogMTBweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcblx0bWFyZ2luOiA0JSA0JTtcclxufVxyXG4uYm94ZGl2e1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5vbmV7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW4tbGVmdDogNCU7XHJcblx0bWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuLmltZ2RpdntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJveDF7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC8qYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMzUlKSAwcHggNXB4IDE1cHg7Ki9cclxuICAgIGJveC1zaGFkb3c6ICMwMDAwMDAxYSAycHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbn1cclxuLnRleHQxe1xyXG5cdGZvbnQtd2VpZ2h0OjUwMDtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5pbm5lcmJveHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTAlIDAlO1xyXG59XHJcbi5sZWZ0e1xyXG5cdHdpZHRoOiA0NSU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnJpZ2h0e1xyXG5cdHdpZHRoOiA0NSU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0bWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbi5jbGVhcntcclxuXHRjbGVhcjogYm90aDtcclxufVxyXG4uaW5wdXRkaXYxe1xyXG5cdG1hcmdpbjogMTAlIGF1dG8gNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbi5waW5wdXQxe1xyXG5cdHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBvcGFjaXR5OiA0OCU7XHJcbiAgICBwYWRkaW5nOiAxJSAwJSAxJSA3JTtcclxufVxyXG4uY2ltZ3tcclxuXHRtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4uY29udGFjdGRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCVcclxufVxyXG4uY29udGFjdGRpdiBwe1xyXG5cdG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbi5pb25idXR0b25cclxue1x0XHJcbiBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmliXHJcbntcclxuXHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogI0ZFOTgwNTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gIGhlaWdodDogNThweDtcclxuICAgLS1ib3JkZXItd2lkdGg6IDFweDsgXHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmVycm9yIHtcclxuICBjb2xvcjogI2ZmMDAwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
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
    "JAwb":
    /*!*****************************************************!*\
      !*** ./src/app/addchild/addchild-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AddchildPageRoutingModule */

    /***/
    function JAwb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddchildPageRoutingModule", function () {
        return AddchildPageRoutingModule;
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


      var _addchild_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./addchild.page */
      "cZpI");

      var routes = [{
        path: '',
        component: _addchild_page__WEBPACK_IMPORTED_MODULE_3__["AddchildPage"]
      }];

      var AddchildPageRoutingModule = /*#__PURE__*/_createClass(function AddchildPageRoutingModule() {
        _classCallCheck(this, AddchildPageRoutingModule);
      });

      AddchildPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddchildPageRoutingModule);
      /***/
    },

    /***/
    "LGv1":
    /*!*********************************************!*\
      !*** ./src/app/addchild/addchild.module.ts ***!
      \*********************************************/

    /*! exports provided: AddchildPageModule */

    /***/
    function LGv1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddchildPageModule", function () {
        return AddchildPageModule;
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


      var _addchild_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./addchild-routing.module */
      "JAwb");
      /* harmony import */


      var _addchild_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./addchild.page */
      "cZpI");

      var AddchildPageModule = /*#__PURE__*/_createClass(function AddchildPageModule() {
        _classCallCheck(this, AddchildPageModule);
      });

      AddchildPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addchild_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddchildPageRoutingModule"]],
        declarations: [_addchild_page__WEBPACK_IMPORTED_MODULE_6__["AddchildPage"]]
      })], AddchildPageModule);
      /***/
    },

    /***/
    "cZpI":
    /*!*******************************************!*\
      !*** ./src/app/addchild/addchild.page.ts ***!
      \*******************************************/

    /*! exports provided: AddchildPage */

    /***/
    function cZpI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddchildPage", function () {
        return AddchildPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_addchild_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./addchild.page.html */
      "3ezQ");
      /* harmony import */


      var _addchild_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./addchild.page.scss */
      "4DVc");
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


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "tAfe");

      var AddchildPage = /*#__PURE__*/function () {
        function AddchildPage(navCtrl, childService, camera, imagePicker, alertCtrl, loading, rest, route) {
          _classCallCheck(this, AddchildPage);

          this.navCtrl = navCtrl;
          this.childService = childService;
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
          this.allergyarr = [];
        }

        _createClass(AddchildPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userid = localStorage.getItem('uid');
            console.log('userid', this.userid);
            console.log('allergies', this.allergies);
            this.imagePicker.requestReadPermission(); // this.childid = this.childService.childid
            // console.log('child id',this.childid);
            // this.parentid = this.childService.parentid
            // console.log('parentid id',this.parentid)
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.medicationname = this.childService.medication;
            console.log('medication', this.medicationname);
            this.foodname = this.childService.food;
            console.log('food', this.foodname);
            this.snackname = this.childService.snack;
            console.log('snack', this.snackname);
            this.nooflikes = this.childService.likes;
            console.log('likes', this.nooflikes);
            this.noofdislkikes = this.childService.dislikes;
            console.log('dislikes', this.noofdislkikes);
            this.nooffavorite = this.childService.favorite;
            console.log('favorite', this.nooffavorite); // this.getdetails();
          }
        }, {
          key: "goback",
          value: function goback() {
            this.navCtrl.navigateBack('/child');
          }
        }, {
          key: "medication",
          value: function medication() {
            this.navCtrl.navigateForward('/medicationtime'); // this.childService.page='add';
          }
        }, {
          key: "eating",
          value: function eating() {
            this.navCtrl.navigateForward('/eatingtime'); // this.childService.page='add';
          }
        }, {
          key: "snack",
          value: function snack() {
            this.navCtrl.navigateForward('/snacktime'); // this.childService.page='add';
          }
        }, {
          key: "likes",
          value: function likes() {
            this.navCtrl.navigateForward('/likes'); // this.childService.page='add';
          }
        }, {
          key: "dislikes",
          value: function dislikes() {
            this.navCtrl.navigateForward('/dislikes'); // this.childService.page='add';
          }
        }, {
          key: "favorite",
          value: function favorite() {
            this.navCtrl.navigateForward('/favoriteactivities'); // this.childService.page='add';
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
            var _this2 = this;

            if (this.contacts) {
              var data = {
                phoneno: this.contacts
              };
              this.array.push(data);
              this.numberarray.push(this.contacts);
              console.log('t', this.numberarray);
              this.contacts = '';
            } else if (!this.contacts) {
              console.log('nullllllllll');
              this.error.status = true;
              this.error.message = "Atleast one number is required";
              setTimeout(function () {
                _this2.error.status = false;
                _this2.error.message = "";
              }, 2000);
            }
          }
        }, {
          key: "uploadPic",
          value: function uploadPic() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this3 = this;

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
                          _this3.camera.getPicture(_this3.cameraOptions).then(function (imageData) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
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

                          _this3.imagePicker.getPictures(options).then(function (results) {
                            console.log('all selected', results);

                            if (results != null) {
                              for (var i = 0; i < results.length; i++) {
                                console.log('each one' + results[i]);

                                if (results[i] != "") {
                                  console.log('data:image/jpeg;base64,', results[i]);
                                  _this3.picUrl = results[i];
                                  _this3.defaultProfile = "data:image/png;base64,".concat(results[i]);
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

            if (this.childname && this.diagnosis && this.allergies.length > 0 && this.pediatrician && this.insuranceinfo && this.instructions && this.notes) {
              var fields = {
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
                emergencyContacts: this.numberarray,
                pediatrician: this.pediatrician,
                insuranceInfo: this.insuranceinfo,
                specialInstructions: this.instructions,
                additionalNotes: this.notes
              };
              console.log('json stringfy', JSON.stringify(fields));
              this.loading.loadershow();
              this.rest.sendRequest("add_child", fields).subscribe(function (data) {
                console.log('add child data::', data);

                if (data.status = 'success') {
                  _this4.loading.hideLoader();

                  _this4.navCtrl.navigateForward('/child');

                  _this4.childService.medication = [];
                  _this4.childService.food = [];
                  _this4.childService.snack = [];
                  _this4.childService.likes = [];
                  _this4.childService.dislikes = [];
                  _this4.childService.favorite = [];
                }

                if (data.status == 'error') {
                  _this4.loading.hideLoader();

                  console.log('add child data:', data.status);
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
            } // if(this.array.length==0){
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
              _this4.allergiesError.message = "";
              _this4.contactsError.status = false;
              _this4.contactsError.message = "";
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

        return AddchildPage;
      }();

      AddchildPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_child_service__WEBPACK_IMPORTED_MODULE_5__["ChildService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_10__["ImagePicker"]
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

      AddchildPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addchild',
        template: _raw_loader_addchild_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addchild_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddchildPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=addchild-addchild-module-es5.js.map