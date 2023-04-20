(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, ev, direction, animation) {
          var router;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context.abrupt("return", false);

              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "Cuvt":
    /*!*********************************************************!*\
      !*** ./src/app/paymentmessage/paymentmessage.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function Cuvt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 14px;\n  background: #00000029;\n  padding: 1% 5%;\n  margin-top: 5%;\n}\n\n.pinput {\n  width: 100%;\n  font-size: 15px;\n  color: #000;\n  opacity: 48%;\n}\n\n.btndiv {\n  margin-top: 5%;\n  display: flex;\n}\n\n.btn1 {\n  --background: #FE9805;\n  --box-shadow: none;\n  --border-radius: 12px;\n  width: 47%;\n  height: 46px;\n}\n\n.btn2 {\n  --background:#E63F3F;\n  --box-shadow: none;\n  --border-radius: 12px;\n  width: 47%;\n  height: 46px;\n  margin-left: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBheW1lbnRtZXNzYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBQUQ7O0FBRUE7RUFDQyxhQUFBO0VBQ0MsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDRCxjQUFBO0FBQ0Q7O0FBR0E7RUFFQyxXQUFBO0VBQ0EsZUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBR0E7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBQUFEOztBQUVBO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDRDs7QUFDQTtFQUNDLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVEIiwiZmlsZSI6InBheW1lbnRtZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ud3JhcHBlcntcclxuXHR3aWR0aDogOTAlO1xyXG5cdG1hcmdpbjo1JSBhdXRvO1xyXG59XHJcbi5pbnB1dGRpdntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDI5O1xyXG4gIHBhZGRpbmc6IDElIDUlO1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG5cclxuLnBpbnB1dFxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG9wYWNpdHk6IDQ4JTtcclxufVxyXG4uYnRuZGl2e1xyXG5cdG1hcmdpbi10b3A6NSU7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG4uYnRuMXtcclxuXHQtLWJhY2tncm91bmQ6ICNGRTk4MDU7XHJcblx0LS1ib3gtc2hhZG93OiBub25lO1xyXG5cdC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHR3aWR0aDogNDclO1xyXG5cdGhlaWdodDogNDZweDtcclxufVxyXG4uYnRuMntcclxuXHQtLWJhY2tncm91bmQ6I0U2M0YzRjtcclxuXHQtLWJveC1zaGFkb3c6IG5vbmU7XHJcblx0LS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cdHdpZHRoOiA0NyU7XHJcblx0aGVpZ2h0OiA0NnB4O1xyXG5cdG1hcmdpbi1sZWZ0OiA0JTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "G6L6":
    /*!***************************************************************!*\
      !*** ./src/app/termsandcondition/termsandcondition.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function G6L6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #F7F7F7;\n  padding: 1% 0%;\n}\n\n.menuicon {\n  color: #000;\n}\n\n.backicon {\n  margin-left: 10%;\n  margin-top: 6px;\n}\n\n.ctitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.titleclass {\n  text-align: center;\n  padding-top: 8px;\n}\n\n.ios .backicon {\n  margin-left: 10%;\n  margin-top: 8px;\n}\n\n.ios .titleclass {\n  text-align: center;\n  padding-top: 11px;\n}\n\n.ios .headBg {\n  --background: #F7F7F7;\n  padding: 3% 0%;\n}\n\n.background {\n  --background: #F7F7F7;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 5% auto;\n}\n\np {\n  text-align: left;\n  font-size: 16px;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRlcm1zYW5kY29uZGl0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUFBO0VBQ0MsZ0JBQUE7RUFDRyxlQUFBO0FBR0o7O0FBQUE7RUFFRSxlQUFBO0VBQ0UsZ0JBQUE7QUFFSjs7QUFBQTtFQUNDLGtCQUFBO0VBQW9CLGdCQUFBO0FBSXJCOztBQURDO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkM7RUFDQyxrQkFBQTtFQUFvQixpQkFBQTtBQUt0Qjs7QUFIQztFQUNDLHFCQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUZBO0VBQ0MscUJBQUE7QUFLRDs7QUFIQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBTUQ7O0FBSkE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBT0QiLCJmaWxlIjoidGVybXNhbmRjb25kaXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIHBhZGRpbmc6IDElIDAlO1xyXG59XHJcbi5tZW51aWNvbntcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcbi5iYWNraWNvbntcclxuXHRtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4uY3RpdGxle1xyXG5cdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50aXRsZWNsYXNze1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4uaW9ze1xyXG5cdC5iYWNraWNvbntcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMCU7XHJcblx0XHRtYXJnaW4tdG9wOiA4cHg7XHJcblx0fVxyXG5cdC50aXRsZWNsYXNze1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTFweDtcclxuXHR9XHJcblx0LmhlYWRCZyB7XHJcblx0XHQtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcblx0XHRwYWRkaW5nOiAzJSAwJTtcclxuXHQgIH1cclxufVxyXG4uYmFja2dyb3VuZHtcclxuXHQtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuLndyYXBwZXJ7XHJcblx0d2lkdGg6IDgwJTtcclxuXHRtYXJnaW46IDUlIGF1dG87XHJcbn1cclxucHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRjb2xvcjogIzAwMDAwMDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "OoBq":
    /*!*******************************************************!*\
      !*** ./src/app/paymentmessage/paymentmessage.page.ts ***!
      \*******************************************************/

    /*! exports provided: PaymentmessagePage */

    /***/
    function OoBq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentmessagePage", function () {
        return PaymentmessagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_paymentmessage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./paymentmessage.page.html */
      "srlL");
      /* harmony import */


      var _paymentmessage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./paymentmessage.page.scss */
      "Cuvt");
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

      var PaymentmessagePage = /*#__PURE__*/function () {
        function PaymentmessagePage(modal, navParams, navCtrl, loading, rest) {
          _classCallCheck(this, PaymentmessagePage);

          this.modal = modal;
          this.navParams = navParams;
          this.navCtrl = navCtrl;
          this.loading = loading;
          this.rest = rest;
          this.parentid = this.navParams.get('parentid');
          console.log('parentid', this.parentid);
          this.caregiverid = this.navParams.get('caregiverid');
          console.log('caregiverid', this.caregiverid);
          this.hiringid = this.navParams.get('hiringid');
          console.log('hiringid', this.hiringid);
          this.totalamount = this.navParams.get('amount');
          console.log('totalamount', this.totalamount);
        }

        _createClass(PaymentmessagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "Completed",
          value: function Completed() {
            var _this = this;

            var sendata = {
              parentId: this.parentid,
              hiringId: this.hiringid,
              caregiverId: this.caregiverid,
              comments: this.comments,
              amount: this.totalamount
            };
            this.rest.sendRequest("complete_job", sendata).subscribe(function (data) {
              if (data.status == 'success') {
                _this.modal.dismiss(data).then(function (res) {
                  console.log('modal res', res);
                  console.log('complete_job::', sendata);

                  _this.loading.presentToast('Request Completed');
                });
              }

              if (data.status == 'error') {
                _this.loading.presentToast(data.message);
              }
            });
          }
        }, {
          key: "Cancel",
          value: function Cancel() {
            this.modal.dismiss().then(function (res) {
              console.log('modal res', res);
            });
          }
        }]);

        return PaymentmessagePage;
      }();

      PaymentmessagePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }];
      };

      PaymentmessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-paymentmessage',
        template: _raw_loader_paymentmessage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_paymentmessage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PaymentmessagePage);
      /***/
    },

    /***/
    "RDnp":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/termsandcondition/termsandcondition.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RDnp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n\t  <ion-toolbar class=\"headBgGlobal\">\r\n\t\t<ion-row>\r\n\t\t\t<ion-col style=\"padding-top:6px;\" size=\"2\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n          <div class=\"backicon\" (click)=\"closemodal()\">\r\n            <img src=\"assets/imgs/icons/backbtn.svg\" *ngIf=\"page=='terms'\">\r\n          </div>\r\n        </div>\r\n\t\t\t</ion-col>\r\n\r\n\t\t\t<ion-col class=\"titleclass\" size=\"8\">\r\n\t\t\t\t<ion-text class=\"ctitle\">Terms & Conditions</ion-text>\r\n\t\t\t</ion-col>\r\n\r\n\t\t\t<ion-col size=\"2\">\r\n\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t    <!-- <ion-buttons slot=\"start\">\r\n\t      <ion-menu-button class=\"menuicon\"></ion-menu-button>\r\n\t    </ion-buttons>\r\n\t    <ion-title class=\"ctitle\">Terms & Conditions</ion-title> -->\r\n\t  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"background\">\r\n\t<div class=\"wrapper\">\r\n\t\t<p>The UniqKidz logo and all the intellectual content displayed on this application are the sole property of UniqKidz, LLC unless otherwise specified or recognizable. Users may not copy, share, replicate, sell, or modify the intellectual property of Uniqkidz in any way without receiving express consent from the owners. To use the UniqKidz service, users are responsible for providing the right information. Failure to do so will result in the termination of a user account or the unavailability of service.Racism, obscenity, and other ethical issues may also result in the termination of your account. \r\n\t\tThis software is recommended for use by individuals over 13. Individuals accessing the software do so at \r\n\t\ttheir own responsibility. Uniqkidz reserves the right to terminate a user account with or without prior \r\n\t\twarning or notice and for any reason including any threats that it may pose to the community. \r\n\t\tThe suspension of any account due to reasons that the user is responsible for, will not exempt them from \r\n\t\tany pending payments. </p>\r\n\t</div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "ZEea":
    /*!*******************************************!*\
      !*** ./src/app/services/child.service.ts ***!
      \*******************************************/

    /*! exports provided: ChildService */

    /***/
    function ZEea(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildService", function () {
        return ChildService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChildService = /*#__PURE__*/_createClass(function ChildService() {
        _classCallCheck(this, ChildService);

        this.medication = [];
        this.food = [];
        this.snack = [];
        this.likes = [];
        this.dislikes = [];
        this.favorite = [];
        this.childarray = [];
      });

      ChildService.ctorParameters = function () {
        return [];
      };

      ChildService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ChildService);
      /***/
    },

    /***/
    "Zcj0":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function Zcj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");
      /* harmony import */


      var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-34cb2743.js */
      "KF81");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "kE+6":
    /*!*************************************************************!*\
      !*** ./src/app/termsandcondition/termsandcondition.page.ts ***!
      \*************************************************************/

    /*! exports provided: TermsandconditionPage */

    /***/
    function kE6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsandconditionPage", function () {
        return TermsandconditionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_termsandcondition_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./termsandcondition.page.html */
      "RDnp");
      /* harmony import */


      var _termsandcondition_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./termsandcondition.page.scss */
      "G6L6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var TermsandconditionPage = /*#__PURE__*/function () {
        function TermsandconditionPage(modal, navParams) {
          _classCallCheck(this, TermsandconditionPage);

          this.modal = modal;
          this.navParams = navParams;
        }

        _createClass(TermsandconditionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.page = this.navParams.get('termsaandcondition');
            console.log('page', this.page);
          }
        }, {
          key: "closemodal",
          value: function closemodal() {
            this.modal.dismiss();
          }
        }]);

        return TermsandconditionPage;
      }();

      TermsandconditionPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }];
      };

      TermsandconditionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-termsandcondition',
        template: _raw_loader_termsandcondition_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_termsandcondition_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TermsandconditionPage);
      /***/
    },

    /***/
    "l2wf":
    /*!***********************************************!*\
      !*** ./src/app/services/editchild.service.ts ***!
      \***********************************************/

    /*! exports provided: EditchildService */

    /***/
    function l2wf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditchildService", function () {
        return EditchildService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var EditchildService = /*#__PURE__*/_createClass(function EditchildService() {
        _classCallCheck(this, EditchildService);

        // console.log(this.childstime,'time array in service')
        // console.log(this.childetime,'time array in service')
        this.medication = [];
        this.food = [];
        this.snack = [];
        this.likes = [];
        this.dislikes = [];
        this.favorite = [];
        this.likes1 = [];
        this.dislikes1 = [];
        this.favorite1 = [];
        this.childstime = [];
        this.childetime = [];
        this.timearray = [];
        this.time = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('00:00');
        this.percent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](100);
        this.timer = 0; // this.starttime=this.childstime
        // console.log('starttime',this.starttime)
        // this.endtime=this.childetime
        // console.log('endtime',this.endtime)
      });

      EditchildService.ctorParameters = function () {
        return [];
      };

      EditchildService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EditchildService);
      /***/
    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "spDm":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function spDm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });
      /* harmony import */


      var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-1457892a.js */
      "W6o/");

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(delegate, container, component, cssClasses, componentProps) {
          var el;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!delegate) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context2.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);
                _context2.next = 10;
                return new Promise(function (resolve) {
                  return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                });

              case 10:
                return _context2.abrupt("return", el);

              case 11:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "srlL":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paymentmessage/paymentmessage.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srlL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>paymentmessage</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n\t<div class=\"wrapper\">\r\n\t\t<div class=\"inputdiv\">\r\n\t\t\t<div class=\"pinput\">\r\n\t\t\t\t<ion-textarea placeholder=\"About\"  rows=\"6\" cols=\"20\" [(ngModel)]=\"comments\"></ion-textarea>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"btndiv\">\r\n\t\t\t<ion-button class=\"btn1\" (click)=\"Completed()\">Complete Job</ion-button>\r\n\t\t\t<ion-button class=\"btn2\" (click)=\"Cancel()\">Cancel</ion-button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map