"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => HarnessLikePlugin
});
module.exports = __toCommonJS(main_exports);
var fs3 = __toESM(require("fs"));
var path7 = __toESM(require("path"));
var import_obsidian6 = require("obsidian");
var obsidianModule = __toESM(require("obsidian"));

// ../../node_modules/.pnpm/@deepseek-ai+cordis@4.0.1/node_modules/@deepseek-ai/cordis/lib/index.js
var lib_exports = {};
__export(lib_exports, {
  Context: () => Context,
  CordisError: () => CordisError,
  DisposableList: () => DisposableList,
  EventsService: () => EventsService,
  Fiber: () => Fiber,
  Inject: () => Inject,
  Logger: () => Logger,
  LoggerService: () => LoggerService,
  RegistryService: () => RegistryService,
  Service: () => Service,
  ValidationError: () => ValidationError,
  buildOuterStack: () => buildOuterStack,
  c16: () => c16,
  c256: () => c256,
  composeError: () => composeError,
  createCallable: () => createCallable,
  defaultFormatters: () => defaultFormatters,
  getPropertyDescriptor: () => getPropertyDescriptor,
  getTraceable: () => getTraceable,
  isBailed: () => isBailed,
  isConstructor: () => isConstructor,
  isObject: () => isObject,
  joinPrototype: () => joinPrototype,
  resolveConfig: () => resolveConfig,
  symbols: () => symbols,
  withProps: () => withProps
});

// ../../node_modules/.pnpm/@deepseek-ai+cosmokit@1.8.2/node_modules/@deepseek-ai/cosmokit/lib/index.js
function isNullable(value) {
  return value === null || value === void 0;
}
function isPlainObject(data) {
  return data && typeof data === "object" && !Array.isArray(data);
}
function filterKeys(object, filter) {
  return Object.fromEntries(Object.entries(object).filter(([key, value]) => filter(key, value)));
}
function mapValues(object, transform) {
  return Object.fromEntries(Object.entries(object).map(([key, value]) => [key, transform(value, key)]));
}
function pick(source, keys, forced) {
  if (!keys) return { ...source };
  const result = {};
  for (const key of keys) if (forced || source[key] !== void 0) result[key] = source[key];
  return result;
}
function defineProperty(object, key, value) {
  return Object.defineProperty(object, key, {
    writable: true,
    value,
    enumerable: false
  });
}
function is(type, value) {
  if (arguments.length === 1) return (value2) => is(type, value2);
  return type in globalThis && value instanceof globalThis[type] || Object.prototype.toString.call(value).slice(8, -1) === type;
}
function isArrayBufferLike(value) {
  return is("ArrayBuffer", value) || is("SharedArrayBuffer", value);
}
function isArrayBufferSource(value) {
  return isArrayBufferLike(value) || ArrayBuffer.isView(value);
}
var Binary;
(function(Binary2) {
  Binary2.is = isArrayBufferLike;
  Binary2.isSource = isArrayBufferSource;
  function fromSource(source) {
    if (ArrayBuffer.isView(source)) return source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength);
    else return source;
  }
  Binary2.fromSource = fromSource;
  function toBase64(source) {
    source = fromSource(source);
    if (typeof Buffer !== "undefined") return Buffer.from(source).toString("base64");
    let binary = "";
    const bytes = new Uint8Array(source);
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  }
  Binary2.toBase64 = toBase64;
  function fromBase64(source) {
    if (typeof Buffer !== "undefined") return fromSource(Buffer.from(source, "base64"));
    return Uint8Array.from(atob(source), (c) => c.charCodeAt(0));
  }
  Binary2.fromBase64 = fromBase64;
  function toHex(source) {
    source = fromSource(source);
    if (typeof Buffer !== "undefined") return Buffer.from(source).toString("hex");
    return Array.from(new Uint8Array(source), (byte) => byte.toString(16).padStart(2, "0")).join("");
  }
  Binary2.toHex = toHex;
  function fromHex(source) {
    if (typeof Buffer !== "undefined") return fromSource(Buffer.from(source, "hex"));
    const hex = source.length % 2 === 0 ? source : source.slice(0, source.length - 1);
    const buffer = [];
    for (let i = 0; i < hex.length; i += 2) buffer.push(parseInt(`${hex[i]}${hex[i + 1]}`, 16));
    return Uint8Array.from(buffer).buffer;
  }
  Binary2.fromHex = fromHex;
})(Binary || (Binary = {}));
var base64ToArrayBuffer = Binary.fromBase64;
var arrayBufferToBase64 = Binary.toBase64;
var hexToArrayBuffer = Binary.fromHex;
var arrayBufferToHex = Binary.toHex;
function clone(source, refs = /* @__PURE__ */ new Map()) {
  if (!source || typeof source !== "object") return source;
  if (is("Date", source)) return new Date(source.valueOf());
  if (is("RegExp", source)) return new RegExp(source.source, source.flags);
  if (isArrayBufferLike(source)) return source.slice(0);
  if (ArrayBuffer.isView(source)) return source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength);
  const cached = refs.get(source);
  if (cached) return cached;
  if (Array.isArray(source)) {
    const result2 = [];
    refs.set(source, result2);
    source.forEach((value, index) => {
      result2[index] = Reflect.apply(clone, null, [value, refs]);
    });
    return result2;
  }
  const result = Object.create(Object.getPrototypeOf(source));
  refs.set(source, result);
  for (const key of Reflect.ownKeys(source)) {
    const descriptor = { ...Reflect.getOwnPropertyDescriptor(source, key) };
    if ("value" in descriptor) descriptor.value = Reflect.apply(clone, null, [descriptor.value, refs]);
    Reflect.defineProperty(result, key, descriptor);
  }
  return result;
}
function deepEqual(a, b2, strict) {
  if (a === b2) return true;
  if (!strict && isNullable(a) && isNullable(b2)) return true;
  if (typeof a !== typeof b2) return false;
  if (typeof a !== "object") return false;
  if (!a || !b2) return false;
  function check(test, then) {
    return test(a) ? test(b2) ? then(a, b2) : false : test(b2) ? false : void 0;
  }
  return check(Array.isArray, (a2, b3) => a2.length === b3.length && a2.every((item, index) => deepEqual(item, b3[index]))) ?? check(is("Date"), (a2, b3) => a2.valueOf() === b3.valueOf()) ?? check(is("RegExp"), (a2, b3) => a2.source === b3.source && a2.flags === b3.flags) ?? check(isArrayBufferLike, (a2, b3) => {
    if (a2.byteLength !== b3.byteLength) return false;
    const viewA = new Uint8Array(a2);
    const viewB = new Uint8Array(b3);
    for (let i = 0; i < viewA.length; i++) if (viewA[i] !== viewB[i]) return false;
    return true;
  }) ?? Object.keys({
    ...a,
    ...b2
  }).every((key) => deepEqual(a[key], b2[key], strict));
}
function tokenize(source, delimiters, delimiter) {
  const output = [];
  let state = 0;
  for (let i = 0; i < source.length; i++) {
    const code = source.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      if (state === 1) {
        const next = source.charCodeAt(i + 1);
        if (next >= 97 && next <= 122) output.push(delimiter);
        output.push(code + 32);
      } else {
        if (state !== 0) output.push(delimiter);
        output.push(code + 32);
      }
      state = 1;
    } else if (code >= 97 && code <= 122) {
      output.push(code);
      state = 2;
    } else if (delimiters.includes(code)) {
      if (state !== 0) output.push(delimiter);
      state = 0;
    } else output.push(code);
  }
  return String.fromCharCode(...output);
}
function paramCase(source) {
  return tokenize(source, [45, 95], 45);
}
var hyphenate = paramCase;
var Time;
(function(Time2) {
  Time2.millisecond = 1;
  Time2.second = 1e3;
  Time2.minute = Time2.second * 60;
  Time2.hour = Time2.minute * 60;
  Time2.day = Time2.hour * 24;
  Time2.week = Time2.day * 7;
  let timezoneOffset = (/* @__PURE__ */ new Date()).getTimezoneOffset();
  function setTimezoneOffset(offset) {
    timezoneOffset = offset;
  }
  Time2.setTimezoneOffset = setTimezoneOffset;
  function getTimezoneOffset() {
    return timezoneOffset;
  }
  Time2.getTimezoneOffset = getTimezoneOffset;
  function getDateNumber(date2 = /* @__PURE__ */ new Date(), offset) {
    if (typeof date2 === "number") date2 = new Date(date2);
    if (offset === void 0) offset = timezoneOffset;
    return Math.floor((date2.valueOf() / Time2.minute - offset) / 1440);
  }
  Time2.getDateNumber = getDateNumber;
  function fromDateNumber(value, offset) {
    const date2 = new Date(value * Time2.day);
    if (offset === void 0) offset = timezoneOffset;
    return new Date(+date2 + offset * Time2.minute);
  }
  Time2.fromDateNumber = fromDateNumber;
  const numeric = /\d+(?:\.\d+)?/.source;
  const timeRegExp = new RegExp(`^${[
    "w(?:eek(?:s)?)?",
    "d(?:ay(?:s)?)?",
    "h(?:our(?:s)?)?",
    "m(?:in(?:ute)?(?:s)?)?",
    "s(?:ec(?:ond)?(?:s)?)?"
  ].map((unit) => `(${numeric}${unit})?`).join("")}$`);
  function parseTime(source) {
    const capture = timeRegExp.exec(source);
    if (!capture) return 0;
    return (parseFloat(capture[1]) * Time2.week || 0) + (parseFloat(capture[2]) * Time2.day || 0) + (parseFloat(capture[3]) * Time2.hour || 0) + (parseFloat(capture[4]) * Time2.minute || 0) + (parseFloat(capture[5]) * Time2.second || 0);
  }
  Time2.parseTime = parseTime;
  function parseDate(date2) {
    const parsed = parseTime(date2);
    if (parsed) date2 = Date.now() + parsed;
    else if (/^\d{1,2}(:\d{1,2}){1,2}$/.test(date2)) date2 = `${(/* @__PURE__ */ new Date()).toLocaleDateString()}-${date2}`;
    else if (/^\d{1,2}-\d{1,2}-\d{1,2}(:\d{1,2}){1,2}$/.test(date2)) date2 = `${(/* @__PURE__ */ new Date()).getFullYear()}-${date2}`;
    return date2 ? new Date(date2) : /* @__PURE__ */ new Date();
  }
  Time2.parseDate = parseDate;
  function format(ms) {
    const abs = Math.abs(ms);
    if (abs >= Time2.day - Time2.hour / 2) return Math.round(ms / Time2.day) + "d";
    else if (abs >= Time2.hour - Time2.minute / 2) return Math.round(ms / Time2.hour) + "h";
    else if (abs >= Time2.minute - Time2.second / 2) return Math.round(ms / Time2.minute) + "m";
    else if (abs >= Time2.second) return Math.round(ms / Time2.second) + "s";
    return ms + "ms";
  }
  Time2.format = format;
  function toDigits(source, length = 2) {
    return source.toString().padStart(length, "0");
  }
  Time2.toDigits = toDigits;
  function template(template2, time = /* @__PURE__ */ new Date()) {
    return template2.replace("yyyy", time.getFullYear().toString()).replace("yy", time.getFullYear().toString().slice(2)).replace("MM", toDigits(time.getMonth() + 1)).replace("dd", toDigits(time.getDate())).replace("hh", toDigits(time.getHours())).replace("mm", toDigits(time.getMinutes())).replace("ss", toDigits(time.getSeconds())).replace("SSS", toDigits(time.getMilliseconds(), 3));
  }
  Time2.template = template;
})(Time || (Time = {}));

// ../../node_modules/.pnpm/@deepseek-ai+cordis@4.0.1/node_modules/@deepseek-ai/cordis/lib/index.js
var DisposableList = class {
  sn = 0;
  map = /* @__PURE__ */ new Map();
  weak = /* @__PURE__ */ new WeakMap();
  get length() {
    return this.map.size;
  }
  push(value) {
    const sn2 = ++this.sn;
    this.map.set(sn2, value);
    this.weak.set(value, sn2);
    return () => this.map.delete(sn2);
  }
  delete(value) {
    const sn2 = this.weak.get(value);
    if (!sn2) return false;
    return this.map.delete(sn2);
  }
  clear() {
    const values = [...this.map.values()];
    this.map.clear();
    return values.reverse();
  }
  [Symbol.iterator]() {
    return this.map.values();
  }
  [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this];
  }
};
var symbols = {
  shadow: /* @__PURE__ */ Symbol.for("cordis.shadow"),
  receiver: /* @__PURE__ */ Symbol.for("cordis.receiver"),
  original: /* @__PURE__ */ Symbol.for("cordis.original"),
  metadata: /* @__PURE__ */ Symbol.for("cordis.metadata"),
  initHooks: /* @__PURE__ */ Symbol.for("cordis.initHooks"),
  checkProto: /* @__PURE__ */ Symbol.for("cordis.checkProto"),
  effect: /* @__PURE__ */ Symbol.for("cordis.effect"),
  filter: /* @__PURE__ */ Symbol.for("cordis.filter"),
  isolate: /* @__PURE__ */ Symbol.for("cordis.isolate"),
  intercept: /* @__PURE__ */ Symbol.for("cordis.intercept"),
  init: /* @__PURE__ */ Symbol.for("cordis.init"),
  check: /* @__PURE__ */ Symbol.for("cordis.check"),
  config: /* @__PURE__ */ Symbol.for("cordis.config"),
  invoke: /* @__PURE__ */ Symbol.for("cordis.invoke"),
  extend: /* @__PURE__ */ Symbol.for("cordis.extend"),
  tracker: /* @__PURE__ */ Symbol.for("cordis.tracker"),
  resolveConfig: /* @__PURE__ */ Symbol.for("cordis.resolveConfig")
};
var GeneratorFunction = function* () {
}.constructor;
var AsyncGeneratorFunction = async function* () {
}.constructor;
function isConstructor(func) {
  if (!func.prototype) return false;
  if (func instanceof GeneratorFunction) return false;
  if (AsyncGeneratorFunction !== Function && func instanceof AsyncGeneratorFunction) return false;
  return true;
}
function joinPrototype(proto1, proto2) {
  if (proto1 === Object.prototype) return proto2;
  const result = Object.create(joinPrototype(Object.getPrototypeOf(proto1), proto2));
  for (const key of Reflect.ownKeys(proto1)) Object.defineProperty(result, key, Object.getOwnPropertyDescriptor(proto1, key));
  return result;
}
function isObject(value) {
  return value && (typeof value === "object" || typeof value === "function");
}
function getPropertyDescriptor(target, prop) {
  let proto = target;
  while (proto) {
    const desc = Reflect.getOwnPropertyDescriptor(proto, prop);
    if (desc) return desc;
    proto = Object.getPrototypeOf(proto);
  }
}
function getTraceable(ctx, value) {
  if (!isObject(value)) return value;
  if (Object.hasOwn(value, symbols.shadow)) return Object.getPrototypeOf(value);
  const tracker = value[symbols.tracker];
  if (!tracker) return value;
  return createTraceable(ctx, value, tracker);
}
function withProps(target, props) {
  if (!props) return target;
  return new Proxy(target, {
    get: (target2, prop, receiver) => {
      if (prop in props && prop !== "constructor") return Reflect.get(props, prop, receiver);
      return Reflect.get(target2, prop, receiver);
    },
    set: (target2, prop, value, receiver) => {
      if (prop in props && prop !== "constructor") return Reflect.set(props, prop, value, receiver);
      return Reflect.set(target2, prop, value, receiver);
    }
  });
}
function withProp(target, prop, value) {
  return withProps(target, Object.defineProperty(/* @__PURE__ */ Object.create(null), prop, {
    value,
    writable: false
  }));
}
function createShadow(ctx, target, property2, receiver) {
  if (!property2) return receiver;
  const origin = Reflect.getOwnPropertyDescriptor(target, property2)?.value;
  if (!origin) return receiver;
  return withProp(receiver, property2, ctx.extend({ [symbols.shadow]: origin }));
}
function createShadowMethod(ctx, value, outer, shadow) {
  return new Proxy(value, { apply: (target, thisArg, args) => {
    if (thisArg === outer) thisArg = shadow;
    return getTraceable(ctx, Reflect.apply(target, thisArg, args));
  } });
}
function createTraceable(ctx, value, tracker) {
  if (ctx[symbols.shadow] && !tracker.noShadow) ctx = Object.getPrototypeOf(ctx);
  const proxy = new Proxy(value, {
    get: (target, prop, receiver) => {
      if (prop === symbols.original) return target;
      if (prop === tracker.property) return ctx;
      if (typeof prop === "symbol") return Reflect.get(target, prop, receiver);
      if (tracker.associate && ctx.reflect.props[`${tracker.associate}.${prop}`]) return Reflect.get(ctx, `${tracker.associate}.${prop}`, withProp(ctx, symbols.receiver, receiver));
      let shadow, innerValue;
      const desc = getPropertyDescriptor(target, prop);
      if (desc && "value" in desc) innerValue = desc.value;
      else {
        shadow = createShadow(ctx, target, tracker.property, receiver);
        innerValue = Reflect.get(target, prop, shadow);
      }
      const innerTracker = innerValue?.[symbols.tracker];
      if (innerTracker) return createTraceable(ctx, innerValue, innerTracker);
      else if (!tracker.noShadow && typeof innerValue === "function") {
        shadow ??= createShadow(ctx, target, tracker.property, receiver);
        return createShadowMethod(ctx, innerValue, receiver, shadow);
      } else return innerValue;
    },
    set: (target, prop, value2, receiver) => {
      if (prop === symbols.original) return false;
      if (prop === tracker.property) return false;
      if (typeof prop === "symbol") return Reflect.set(target, prop, value2, receiver);
      if (tracker.associate && ctx.reflect.props[`${tracker.associate}.${prop}`]) return Reflect.set(ctx, `${tracker.associate}.${prop}`, value2, withProp(ctx, symbols.receiver, receiver));
      const shadow = createShadow(ctx, target, tracker.property, receiver);
      return Reflect.set(target, prop, value2, shadow);
    },
    apply: (target, thisArg, args) => {
      return applyTraceable(proxy, target, thisArg, args);
    }
  });
  return proxy;
}
function applyTraceable(proxy, value, thisArg, args) {
  if (!value[symbols.invoke]) return Reflect.apply(value, thisArg, args);
  return value[symbols.invoke].apply(proxy, args);
}
function createCallable(name, proto, tracker) {
  const self = function(...args) {
    return applyTraceable(createTraceable(self["ctx"], self, tracker), self, this, args);
  };
  defineProperty(self, "name", name);
  return Object.setPrototypeOf(self, proto);
}
function handleError(info, reason, getOuterStack) {
  const innerLines = info.error.stack.split("\n");
  if (typeof reason?.stack !== "string") {
    const outerError = new Error(reason);
    const lines2 = outerError.stack.split("\n");
    lines2.splice(1, Infinity, ...getOuterStack());
    outerError.stack = lines2.join("\n");
    throw outerError;
  }
  const lines = reason.stack.split("\n");
  let index = lines.indexOf(innerLines[2]);
  if (index === -1) throw reason;
  index -= info.offset;
  while (index > 0) {
    if (!lines[index - 1].endsWith(" (<anonymous>)")) break;
    index -= 1;
  }
  lines.splice(index, Infinity, ...getOuterStack());
  reason.stack = lines.join("\n");
  throw reason;
}
function composeError(callback, getOuterStack = buildOuterStack()) {
  const info = {
    offset: 1,
    error: /* @__PURE__ */ new Error()
  };
  try {
    const result = callback(info);
    if (isObject(result) && "then" in result) return result.then(void 0, (reason) => handleError(info, reason, getOuterStack));
    else return result;
  } catch (reason) {
    handleError(info, reason, getOuterStack);
  }
}
function buildOuterStack(offset = 0) {
  const outerError = /* @__PURE__ */ new Error();
  return () => outerError.stack.split("\n").slice(3 + offset);
}
function isBailed(value) {
  return value !== null && value !== false && value !== void 0;
}
var EventsService = class {
  ctx;
  _hooks = {};
  constructor(ctx) {
    this.ctx = ctx;
    defineProperty(this, symbols.tracker, {
      property: "ctx",
      noShadow: true
    });
    this.on("internal/listener", function(name, listener, options) {
      if (name === "internal/update" && !options.global) return (this.fiber._hooks["internal/update"] ??= new DisposableList())[options.prepend ? "unshift" : "push"](listener);
    });
    this.on("internal/update", function(config, noSave, next) {
      const cbs = [...this._hooks["internal/update"] || []];
      const _next = () => {
        return (cbs.shift() ?? next).call(this, config, noSave, _next);
      };
      return _next();
    }, {
      global: true,
      prepend: true
    });
  }
  /**
  * Resolve listeners for one dispatch and apply context filtering.
  *
  * @param type — the dispatch mode, reported on `internal/dispatch`.
  * @param args — the raw dispatch arguments; consumed up to the event name.
  * @returns the matching listener callbacks, bound to the dispatch `this`.
  */
  dispatch(type, args) {
    const thisArg = typeof args[0] === "object" || typeof args[0] === "function" ? args.shift() : null;
    const name = args.shift();
    if (!name.startsWith("internal/")) this.emit("internal/dispatch", type, name, args, thisArg);
    const filter = thisArg?.[Context.filter];
    return (this._hooks[name] || []).filter((hook) => hook.global || !filter || filter.call(thisArg, hook.ctx)).map((hook) => hook.callback.bind(thisArg));
  }
  /**
  * Run listeners concurrently and wait for all of them.
  *
  * @param args — optional `this`, the event name, then listener arguments.
  * @returns a promise resolving once every listener has settled.
  */
  async parallel(...args) {
    const errors = (await Promise.allSettled(this.dispatch("emit", args).map(async (cb) => cb(...args)))).filter((result) => result.status === "rejected");
    if (errors.length) throw new AggregateError(errors.map((error) => error.reason));
  }
  /**
  * Run listeners synchronously without waiting for returned promises.
  *
  * @param args — optional `this`, the event name, then listener arguments.
  */
  emit(...args) {
    this.dispatch("emit", args).map((cb) => cb(...args));
  }
  /**
  * Run listeners in order, awaiting each, until one returns a bail value.
  *
  * @param args — optional `this`, the event name, then listener arguments.
  * @returns the first bail value (see {@link isBailed}), if any.
  */
  async serial(...args) {
    for (const cb of this.dispatch("serial", args)) {
      const result = await cb(...args);
      if (isBailed(result)) return result;
    }
  }
  /**
  * Run listeners synchronously until one returns a bail value.
  *
  * @param args — optional `this`, the event name, then listener arguments.
  * @returns the first bail value (see {@link isBailed}), if any.
  */
  bail(...args) {
    for (const cb of this.dispatch("bail", args)) {
      const result = cb(...args);
      if (isBailed(result)) return result;
    }
  }
  /**
  * Compose listeners around the final `next` callback.
  *
  * The last dispatch argument is treated as the innermost `next`. Listeners
  * run outermost-first; a listener that does not call `next()` vetoes the
  * rest of the chain, including the built-in behavior.
  *
  * @param args — optional `this`, the event name, listener arguments, then `next`.
  * @returns the outermost listener's return value.
  */
  waterfall(...args) {
    const cbs = this.dispatch("waterfall", args);
    const inner = args.pop();
    const next = () => {
      return (cbs.shift() ?? inner)(...args);
    };
    args.push(next);
    return next();
  }
  /**
  * Store a listener record as an effect on the current fiber.
  *
  * @param label — effect label shown in fiber diagnostics.
  * @param hooks — the listener list for one event.
  * @param callback — the listener to store.
  * @param options — placement and filtering options.
  * @returns a disposer that unregisters the listener.
  */
  register(label, hooks, callback, options) {
    const method = options.prepend ? "unshift" : "push";
    return this.ctx.fiber.effect(() => {
      hooks[method]({
        ctx: this.ctx,
        callback,
        ...options
      });
      return () => this.unregister(hooks, callback);
    }, label);
  }
  /**
  * Remove a stored listener record.
  *
  * @param hooks — the listener list for one event.
  * @param callback — the listener to remove.
  * @returns `true` if the listener was found and removed.
  */
  unregister(hooks, callback) {
    const index = hooks.findIndex((hook) => hook.callback === callback);
    if (index >= 0) {
      hooks.splice(index, 1);
      return true;
    }
  }
  /**
  * Register an event listener owned by the current fiber.
  *
  * The listener is removed automatically when the fiber unloads. Throws
  * `CordisError('INACTIVE_EFFECT')` if the fiber is already disposed.
  *
  * @param name — the event name to listen for.
  * @param listener — called with the dispatch arguments.
  * @param options — listener options; a boolean is shorthand for `prepend`.
  * @returns a disposer removing the listener; `true` if it was still registered.
  */
  on(name, listener, options) {
    if (typeof options !== "object") options = { prepend: options };
    this.ctx.fiber.assertActive();
    listener = this.ctx.reflect.bind(listener);
    const result = this.bail(this.ctx, "internal/listener", name, listener, options);
    if (result) return result;
    const hooks = this._hooks[name] ||= [];
    const label = `ctx.on(${typeof name === "string" ? JSON.stringify(name) : name.toString()})`;
    return this.register(label, hooks, listener, options);
  }
  /**
  * Register an event listener that disposes itself after the first call.
  *
  * @param name — the event name to listen for.
  * @param listener — called at most once with the dispatch arguments.
  * @param options — listener options; a boolean is shorthand for `prepend`.
  * @returns a disposer removing the listener; `true` if it was still registered.
  */
  once(name, listener, options) {
    const dispose = this.on(name, function(...args) {
      dispose();
      return listener.apply(this, args);
    }, options);
    return dispose;
  }
};
var defaultFormatters = {
  s: (value) => String(value),
  d: (value) => Math.trunc(Number(value)),
  i: (value) => Math.trunc(Number(value)),
  f: (value) => Number(value),
  o: (value) => JSON.stringify(value),
  O: (value) => JSON.stringify(value),
  c: () => "",
  C: (value, exporter, message) => {
    return Logger.color(exporter, Logger.code(message.name, exporter.colors), value);
  }
};
function isAggregateError(error) {
  return error instanceof Error && Array.isArray(error["errors"]);
}
var Logger = class {
  service;
  static color(exporter, code, value, decoration = "") {
    if (!exporter.colors) return "" + value;
    return `\x1B[3${code < 8 ? code : "8;5;" + code}${exporter.colors >= 2 ? decoration : ""}m${value}\x1B[0m`;
  }
  static code(name, level) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = (hash << 3) - hash + name.charCodeAt(i) + 13;
      hash |= 0;
    }
    const colors = !level ? [] : level >= 2 ? c256 : c16;
    return colors[Math.abs(hash) % colors.length];
  }
  static format(exporter, message) {
    const args = message.args.slice();
    if (args[0] instanceof Error) {
      args[0] = args[0].stack || args[0].message;
      args.unshift("%s");
    } else if (typeof args[0] !== "string") args.unshift("%o");
    let format = args.shift();
    format = format.replace(/%([a-zA-Z%])/g, (match, char) => {
      if (match === "%%") return "%";
      const formatter = exporter.formatters?.[char] ?? defaultFormatters[char];
      if (typeof formatter === "function") return formatter(args.shift(), exporter, message);
      return match;
    });
    const oFormatter = exporter.formatters?.o ?? defaultFormatters.o;
    for (let arg of args) {
      if (typeof arg === "object" && arg) arg = oFormatter(arg, exporter, message);
      format += " " + arg;
    }
    const { maxLength = 10240 } = exporter;
    return format.split(/\r?\n/g).map((line) => {
      return line.slice(0, maxLength) + (line.length > maxLength ? "..." : "");
    }).join("\n");
  }
  constructor(options, service) {
    this.service = service;
    Object.assign(this, options);
    this.error = this._method("error", 0);
    this.info = this._method("info", 1);
    this.warn = this._method("warn", 2);
    this.debug = this._method("debug", 3);
  }
  _method(type, level) {
    return (...args) => {
      if (args.length === 1 && args[0] instanceof Error) {
        if (args[0].cause) this[type](args[0].cause);
        else if (isAggregateError(args[0])) {
          args[0].errors.forEach((error) => this[type](error));
          return;
        }
      }
      const sn2 = ++this.service._snMessage;
      const ts = Date.now();
      for (const exporter of this.service.exporters.values()) {
        if ((exporter.levels?.[this.name] ?? exporter.levels?.default ?? this.level ?? 1) < level) continue;
        const message = {
          sn: sn2,
          ts,
          type,
          level,
          name: this.name,
          ...this.meta,
          args
        };
        exporter.export(message);
      }
    };
  }
};
var c16 = [
  6,
  2,
  3,
  4,
  5,
  1
];
var c256 = [
  20,
  21,
  26,
  27,
  32,
  33,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  56,
  57,
  62,
  63,
  68,
  69,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  92,
  93,
  98,
  99,
  112,
  113,
  129,
  134,
  135,
  148,
  149,
  160,
  161,
  162,
  163,
  164,
  165,
  166,
  167,
  168,
  169,
  170,
  171,
  172,
  173,
  178,
  179,
  184,
  185,
  196,
  197,
  198,
  199,
  200,
  201,
  202,
  203,
  204,
  205,
  206,
  207,
  208,
  209,
  214,
  215,
  220,
  221
];
var LoggerService = class LoggerService2 {
  bufferSize = 1e3;
  buffer = [];
  ctx;
  _snMessage = 0;
  _snExporter = 0;
  exporters = /* @__PURE__ */ new Map();
  constructor(ctx) {
    const tracker = {
      property: "ctx",
      noShadow: true
    };
    const self = createCallable("logger", joinPrototype(Object.getPrototypeOf(this), Function.prototype), tracker);
    Object.assign(self, this);
    self.ctx = ctx;
    defineProperty(self, symbols.tracker, tracker);
    self.exporter({
      colors: 3,
      export: (message) => {
        self.buffer.push(message);
        if (self.buffer.length > self.bufferSize) self.buffer = self.buffer.slice(-self.bufferSize);
      }
    });
    return self;
  }
  /**
  * Register an exporter and dispose it with the current fiber.
  *
  * @param exporter — the sink that receives structured log messages.
  * @returns a disposer that removes the exporter.
  */
  exporter(exporter) {
    return this.ctx.effect(() => {
      this.exporters.set(++this._snExporter, exporter);
      return () => this.exporters.delete(this._snExporter);
    }, "ctx.logger.exporter()");
  }
  _resolveConfig() {
    let intercept = this.ctx[symbols.intercept];
    const configs = [];
    while ("logger" in intercept) {
      if (Object.hasOwn(intercept, "logger")) configs.unshift(intercept["logger"]);
      intercept = Object.getPrototypeOf(intercept);
    }
    return Object.assign({}, ...configs);
  }
  [symbols.invoke](name) {
    const config = this._resolveConfig();
    const fiber = (this.ctx[symbols.shadow] ?? this.ctx).fiber;
    name ??= config.name;
    name ??= hyphenate(fiber.name);
    return new Logger({
      name,
      level: config.level,
      meta: { fiber: new WeakRef(fiber) }
    }, this);
  }
  static {
    for (const type of [
      "error",
      "info",
      "warn",
      "debug"
    ]) LoggerService2.prototype[type] = function(...args) {
      return this()[type](...args);
    };
  }
};
function enhanceError(error) {
  const lines = error.stack.split("\n");
  lines.splice(0, 2, `Error: ${error.message}`);
  error.stack = lines.join("\n");
  return error;
}
var RESERVED_WORDS = ["prototype", "then"];
function isSpecialProperty(prop) {
  return typeof prop === "symbol" || RESERVED_WORDS.includes(prop) || parseInt(prop).toString() === prop || prop.startsWith("_");
}
var ReflectService = class {
  ctx;
  /** Proxy traps implementing service resolution for every context object. */
  static handler = {
    get: (target, prop, ctx) => {
      if (isSpecialProperty(prop)) return Reflect.get(target, prop, ctx);
      if (Reflect.has(target, prop)) return getTraceable(ctx, Reflect.get(target, prop, ctx));
      const error = /* @__PURE__ */ new Error(`cannot get property "${prop}" without inject`);
      try {
        const def = target.reflect.props[prop];
        if (def?.type === "accessor") return def.get.call(ctx, ctx[symbols.receiver], error);
        if (!ctx.fiber.runtime) return ctx.reflect.get(prop, false);
        return ctx.events.waterfall("internal/get", ctx, prop, error, () => {
          const key = target[symbols.isolate][prop];
          let fiber = (ctx[symbols.shadow] ?? ctx).fiber;
          while (true) {
            const impl = fiber.store?.[prop];
            if (impl) return getTraceable(ctx, impl.value);
            if (prop in fiber.inject) {
              error.message = `cannot get required service "${prop}" in inactive context`;
              throw error;
            }
            if (!fiber.runtime) throw error;
            if (fiber.parent[symbols.isolate][prop] !== key) throw error;
            fiber = fiber.parent.fiber;
          }
        });
      } catch (e) {
        throw e === error ? enhanceError(e) : e;
      }
    },
    set: (target, prop, value, ctx) => {
      if (isSpecialProperty(prop)) return Reflect.set(target, prop, value, ctx);
      const error = /* @__PURE__ */ new Error(`cannot set property "${prop}" without provide`);
      const def = target.reflect.props[prop];
      if (!def) {
        if (!ctx.fiber.runtime) return Reflect.set(target, prop, value, ctx);
        throw enhanceError(error);
      }
      try {
        if (def.type === "accessor") {
          if (!def.set) return false;
          return def.set.call(ctx, value, ctx[symbols.receiver], error);
        }
        return ctx.events.waterfall("internal/set", ctx, prop, value, error, () => {
          return ctx.reflect.set(prop, value, error);
        });
      } catch (e) {
        throw e === error ? enhanceError(e) : e;
      }
    },
    has: (target, prop) => {
      if (isSpecialProperty(prop)) return Reflect.has(target, prop);
      if (Reflect.has(target, prop)) return true;
      return !!target.reflect.props[prop];
    }
  };
  /** Service implementations, keyed by isolation label. */
  store = /* @__PURE__ */ Object.create(null);
  /** Declared context properties (services and accessors), by name. */
  props = /* @__PURE__ */ Object.create(null);
  constructor(ctx) {
    this.ctx = ctx;
    defineProperty(this, symbols.tracker, {
      property: "ctx",
      noShadow: true
    });
    this.mixin("reflect", [
      "get",
      "set",
      "provide",
      "accessor",
      "mixin"
    ]);
    this.mixin("fiber", ["runtime", "effect"]);
    this.mixin("registry", ["inject", "plugin"]);
    this.mixin("events", [
      "on",
      "once",
      "parallel",
      "emit",
      "serial",
      "bail",
      "waterfall"
    ]);
  }
  /**
  * Read a service from the store without the inject requirement.
  *
  * @param name — the service name.
  * @param strict — when `true`, only return implementations whose providing
  * fiber is currently active.
  * @returns the service value, or `undefined` when not (yet) provided.
  */
  get(name, strict = true) {
    return getTraceable(this.ctx, this._getImpl(name, strict)?.value);
  }
  _getImpl(name, strict = true) {
    const key = this.ctx[symbols.isolate][name];
    const impl = key && this.store[key];
    if (!impl) return;
    if (strict && impl.fiber.state !== 2) return;
    return impl;
  }
  /**
  * Overwrite a provided service's value.
  *
  * @param name — the service name.
  * @param value — the new service value.
  * @param error — carrier for the caller stack in diagnostics.
  * @returns `true` on success.
  * @throws when `name` was never provided, or was provided by another fiber.
  */
  set(name, value, error) {
    const key = this.ctx[symbols.isolate][name];
    const impl = this.store[key];
    if (!impl) throw new Error(`cannot set property "${name}" without provide`);
    if (impl.fiber !== this.ctx.fiber) throw new Error(`cannot set property "${name}" in multiple fibers`);
    impl.value = value;
    return true;
  }
  /**
  * Register a service implementation owned by the current fiber.
  *
  * See the `ctx.provide()` overload above for the full contract.
  *
  * @param name — the service name.
  * @param value — the service value.
  * @param check — optional availability predicate for dependents.
  * @returns a disposer that unregisters the service.
  */
  provide(name, value, check) {
    return this.ctx.fiber.effect(() => {
      if (!this.props[name]) this.props[name] ??= { type: "service" };
      else if (this.props[name].type !== "service") throw new Error(`property "${name}" is already declared as ${this.props[name].type}`);
      this.props[name] = { type: "service" };
      this.ctx.root[symbols.isolate][name] ??= Symbol(name);
      const key = this.ctx[symbols.isolate][name];
      const impl = {
        name,
        value,
        fiber: this.ctx.fiber,
        check
      };
      if (this.store[key]) throw new Error(`service "${name}" has been registered at <${this.store[key].fiber.name}>`);
      this.store[key] = impl;
      this.ctx.fiber.store[name] = impl;
      if (this.ctx.fiber.state === 2) this.notify([name]);
      return async () => {
        delete this.store[key];
        const fibers = this.notify([name]);
        await Promise.allSettled(fibers.map((fiber) => fiber.await()));
        delete this.ctx.fiber.store[name];
      };
    }, `ctx.provide(${JSON.stringify(name)})`);
  }
  /**
  * Re-evaluate every fiber that requires one of the given services.
  *
  * @param names — the service names that changed.
  * @param filter — restricts notification to matching isolation scopes.
  * @returns the fibers whose dependency state was refreshed.
  */
  notify(names, filter = (ctx, name) => ctx[symbols.isolate][name] === this.ctx[symbols.isolate][name]) {
    const fibers = [];
    for (const runtime of this.ctx.registry.values()) for (const fiber of runtime.fibers) {
      let hasUpdate = false;
      for (const name of names) {
        if (!(name in fiber.inject)) continue;
        if (!filter(fiber.ctx, name)) continue;
        hasUpdate = true;
        fiber._checkImpl(name);
      }
      if (!hasUpdate) continue;
      fiber._refresh();
      fibers.push(fiber);
    }
    for (const name of names) {
      const self = Object.create(this.ctx);
      self[symbols.filter] = (target) => filter(target, name);
      this.ctx.events.emit(self, "internal/service", name, this._getImpl(name, false)?.value);
    }
    return fibers;
  }
  /**
  * Define a computed context property backed by get/set hooks.
  *
  * @param name — the context property name.
  * @param options — the `get` hook and optional `set` hook.
  * @returns a disposer that removes the accessor.
  */
  accessor(name, options) {
    return this.ctx.fiber.effect(() => {
      if (name in this.props) throw new Error(`property "${name}" is already declared as ${this.props[name].type}`);
      this.props[name] = {
        type: "accessor",
        ...options
      };
      return () => delete this.props[name];
    }, `ctx.accessor(${JSON.stringify(name)})`);
  }
  /**
  * Expose selected members of a service directly on `ctx`.
  *
  * See the `ctx.mixin()` overload above for the full contract.
  *
  * @param source — a context property name or a source object.
  * @param mixins — keys to forward, or a source-key → ctx-key map.
  * @returns a disposer that removes all created accessors.
  */
  mixin(source, mixins) {
    const self = this;
    return this.ctx.fiber.effect(function* () {
      const entries2 = Array.isArray(mixins) ? mixins.map((key) => [key, key]) : Object.entries(mixins);
      const getTarget = (ctx, error) => {
        return ctx[source];
      };
      for (const [key, value] of entries2) yield self.accessor(value, {
        get(receiver, error) {
          const service = getTarget(this, error);
          if (isNullable(service)) return service;
          const mixin = receiver ? withProps(receiver, service) : service;
          const value2 = Reflect.get(service, key, mixin);
          if (typeof value2 !== "function") return value2;
          return value2.bind(mixin ?? service);
        },
        set(value2, receiver, error) {
          const service = getTarget(this, error);
          const mixin = receiver ? withProps(receiver, service) : service;
          return Reflect.set(service, key, value2, mixin);
        }
      });
    }, `ctx.mixin(${JSON.stringify(source)})`);
  }
  /**
  * Attach this context's tracing wrapper to a value.
  *
  * @param value — the value to wrap.
  * @returns the traceable wrapper (or the value itself when not applicable).
  */
  trace(value) {
    return getTraceable(this.ctx, value);
  }
  /**
  * Wrap a callback so calls trace `this` and arguments to this context.
  *
  * @param callback — the function to wrap.
  * @returns a proxy delegating to `callback` with traced values.
  */
  bind(callback) {
    return new Proxy(callback, {
      apply: (target, thisArg, args) => {
        return Reflect.apply(target, this.trace(thisArg), args.map((arg) => this.trace(arg)));
      },
      construct: (target, args, newTarget) => {
        return Reflect.construct(target, args.map((arg) => this.trace(arg)), newTarget);
      }
    });
  }
};
var kValidationError = /* @__PURE__ */ Symbol.for("ValidationError");
var ValidationError = class extends TypeError {
  name = "ValidationError";
  /**
  * Build the aggregated message from schema issues.
  *
  * @param issues — the standard-schema issues, one message line each.
  */
  constructor(issues) {
    super(`invalid config:
` + issues.map((issue) => {
      if (issue.path) return `  - ${issue.message} (at ${issue.path.join(".")})`;
      else return `  - ${issue.message}`;
    }).join("\n"));
  }
};
Object.defineProperty(ValidationError.prototype, kValidationError, { value: true });
function resolveConfig(runtime, config) {
  if (!runtime.Config) return config;
  const result = runtime.Config["~standard"].validate(config);
  if ("then" in result) throw new TypeError("Async config validation is not supported");
  if (result.issues) throw new ValidationError(result.issues);
  else return result.value;
}
var effectInertia = /* @__PURE__ */ new WeakMap();
function runDisposable(dispose) {
  const result = dispose();
  return effectInertia.get(dispose)?.() ?? result;
}
function emitPluginDisposed(context, fiber) {
  const args = ["internal/plugin", fiber];
  let callbacks;
  try {
    callbacks = context.events.dispatch("emit", args);
  } catch (error) {
    context.logger.error(error);
    return;
  }
  for (const callback of callbacks) try {
    const returned = callback(...args);
    Promise.resolve(returned).catch((error) => context.logger.error(error));
  } catch (error) {
    context.logger.error(error);
  }
}
var CordisError = class CordisError2 extends Error {
  code;
  /**
  * @param code — the stable error code; also the default message.
  * @param message — optional human-readable override.
  */
  constructor(code, message) {
    super(message ?? CordisError2.Code[code]);
    this.code = code;
  }
};
(function(CordisError3) {
  CordisError3.Code = { INACTIVE_EFFECT: "cannot create effect on inactive context" };
})(CordisError || (CordisError = {}));
var INACTIVE = "__INACTIVE__";
var Fiber = class {
  parent;
  inject;
  runtime;
  /** Unique id within the registry; 0 for the root fiber, `null` once disposed. */
  uid;
  /** The context this fiber's plugin runs in (extends the parent context). */
  ctx;
  /** The validated plugin config (updated by `update()`). */
  config;
  /** The raw plugin config, re-resolved before each activation. */
  _config;
  /** Current lifecycle state; transitions emit `internal/status`. */
  state = 0;
  /** Dispose this fiber: unload the plugin, then settle once cleanup finished. */
  dispose;
  /** Snapshot of required service implementations while loaded; `undefined` otherwise. */
  store;
  /** The in-flight load/unload transition, if one is currently running. */
  inertia;
  _hooks = /* @__PURE__ */ Object.create(null);
  _disposables = new DisposableList();
  context;
  _error;
  _runner;
  _store = /* @__PURE__ */ Object.create(null);
  /**
  * Create a fiber. Plugin authors normally obtain fibers from `ctx.plugin()`
  * rather than constructing them directly.
  *
  * @param parent — the context the plugin was loaded from.
  * @param config — raw config, validated against the runtime's schema.
  * @param inject — resolved dependency map (service name → intercept config).
  * @param runtime — the shared plugin runtime, or `null` for the root fiber.
  * @param getOuterStack — captures the caller stack for effect diagnostics.
  */
  constructor(parent, config, inject, runtime, getOuterStack) {
    this.parent = parent;
    this.inject = inject;
    this.runtime = runtime;
    this._config = config;
    const collect = (dispose) => {
      this._disposables.push(dispose);
    };
    if (runtime) {
      this.uid = parent.registry.counter;
      this.ctx = this.context = parent.extend({ fiber: this });
      const injectEntries = Object.entries(this.inject);
      if (injectEntries.length) {
        this.ctx[Context.intercept] = Object.create(parent[Context.intercept]);
        for (const [name, config2] of injectEntries) {
          if (isNullable(config2)) continue;
          this.ctx[Context.intercept][name] = config2;
        }
      }
      this._runner = {
        epoch: INACTIVE,
        getOuterStack,
        execute: function() {
          if (isConstructor(runtime.callback)) {
            const instance = new runtime.callback(this.ctx, this.config);
            for (const hook of instance?.[symbols.initHooks] ?? []) hook();
            return instance?.[symbols.init]?.();
          } else return runtime.callback(this.ctx, this.config);
        },
        collect
      };
      this.dispose = parent.fiber.effect(() => {
        const remove = runtime.fibers.push(this);
        return async () => {
          this.uid = null;
          emitPluginDisposed(this.context, this);
          if (this.ctx.registry.has(runtime.callback)) {
            remove();
            if (!runtime.fibers.length) this.ctx.registry.delete(runtime.callback);
          }
          this._setEpoch(INACTIVE);
          if (!this.inertia) this._updateState(() => {
            this.inertia = this._unload();
            return 5;
          });
          while (this.inertia) await this.inertia;
        };
      }, "ctx.plugin()");
      try {
        this.context.emit("internal/plugin", this);
      } catch (error) {
        Promise.resolve(this.dispose()).catch((reason) => this.ctx.logger.error(reason));
        throw error;
      }
      if (this.uid !== null && parent.fiber.state !== 5) {
        for (const name of Object.keys(this.inject)) this._checkImpl(name);
        this._refresh();
      }
    } else {
      this.uid = 0;
      this.ctx = this.context = parent;
      this.state = 2;
      this.store = /* @__PURE__ */ Object.create(null);
      this._runner = {
        epoch: "",
        getOuterStack,
        execute: () => {
        },
        collect
      };
      this.dispose = () => this.restart();
    }
  }
  /** The plugin's display name, inherited from the nearest named ancestor, else `'root'`. */
  get name() {
    let fiber = this;
    do {
      if (fiber.runtime?.name) return fiber.runtime.name;
      fiber = fiber.parent.fiber;
    } while (fiber !== fiber.parent.fiber);
    return "root";
  }
  /**
  * Throw if the fiber has already been disposed.
  *
  * @returns nothing when the fiber is still active.
  * @throws {CordisError} `INACTIVE_EFFECT` when the fiber's uid has been cleared.
  */
  assertActive() {
    if (this.uid !== null) return;
    throw new CordisError("INACTIVE_EFFECT");
  }
  _execute(runner) {
    const oldEpoch = runner.epoch;
    return composeError((info) => {
      const safeCollect = (dispose) => {
        if (typeof dispose === "function") runner.collect(dispose);
        else if (!isNullable(dispose)) throw new TypeError("Invalid effect");
      };
      const effect = runner.execute.call(this);
      if (typeof effect === "function") return runner.collect(effect);
      else if (isNullable(effect)) {
      } else if (!isObject(effect)) throw new TypeError("Invalid effect");
      else if ("then" in effect) return effect.then(safeCollect);
      else if (Symbol.iterator in effect) {
        info.error = /* @__PURE__ */ new Error();
        const iter = effect[Symbol.iterator]();
        while (true) {
          const result = iter.next();
          safeCollect(result.value);
          if (result.done) return;
        }
      } else if (Symbol.asyncIterator in effect) {
        const iter = effect[Symbol.asyncIterator]();
        return (async () => {
          await Promise.resolve();
          info.error = /* @__PURE__ */ new Error();
          while (true) {
            if (runner.epoch !== oldEpoch) return;
            const result = await iter.next();
            safeCollect(result.value);
            if (result.done) return;
          }
        })();
      } else throw new TypeError("Invalid effect");
    }, runner.getOuterStack);
  }
  effect(execute, label = "anonymous") {
    this.assertActive();
    if (this.state === 5) throw new CordisError("INACTIVE_EFFECT");
    const disposables = [];
    let disposing = false;
    let disposalTask;
    const dispose = () => {
      if (disposing) return disposalTask;
      disposing = true;
      let task2;
      for (const disposable of disposables.splice(0).reverse()) if (task2) task2 = task2.then(() => runDisposable(disposable));
      else {
        const result = runDisposable(disposable);
        if (isObject(result) && "then" in result) task2 = result;
      }
      return disposalTask = task2;
    };
    const meta = {
      label,
      children: []
    };
    const runner = {
      execute,
      epoch: true,
      collect: (dispose2) => {
        disposables.push(dispose2);
        this._disposables.delete(dispose2);
        if (dispose2[symbols.effect]) meta.children.push(dispose2[symbols.effect]);
      },
      getOuterStack: buildOuterStack()
    };
    let task;
    let executing = true;
    let resolveSetup;
    let rejectSetup;
    let setupBarrier;
    let setupFailed = false;
    let inFlight;
    let removeWrapper = () => false;
    const waitForSetup = () => {
      setupBarrier ??= new Promise((resolve3, reject) => {
        resolveSetup = resolve3;
        rejectSetup = reject;
      });
      return setupBarrier;
    };
    const disposeAfter = (setup) => {
      return Promise.resolve(setup).then(() => dispose(), async (reason) => {
        await dispose();
        throw reason;
      });
    };
    const finalizeDisposal = (callback) => {
      let result;
      try {
        result = callback();
      } catch (error) {
        removeWrapper();
        throw error;
      }
      if (isObject(result) && "then" in result) {
        const pending = Promise.resolve(result).finally(() => {
          removeWrapper();
          if (inFlight === pending) inFlight = void 0;
        });
        return inFlight = pending;
      }
      removeWrapper();
      return result;
    };
    const wrapper = defineProperty(() => {
      if (!runner.epoch) return setupFailed ? inFlight : void 0;
      runner.epoch = false;
      return finalizeDisposal(() => {
        if (executing) return disposeAfter(waitForSetup());
        return task ? disposeAfter(task) : dispose();
      });
    }, symbols.effect, meta);
    effectInertia.set(wrapper, () => inFlight);
    removeWrapper = this._disposables.push(wrapper);
    try {
      task = this._execute(runner);
    } catch (reason) {
      executing = false;
      setupFailed = true;
      runner.epoch = false;
      let cleanup;
      try {
        cleanup = finalizeDisposal(dispose);
      } finally {
        rejectSetup?.(reason);
      }
      if (isObject(cleanup) && "then" in cleanup) cleanup.catch((error) => this.ctx.logger.error(error));
      throw reason;
    }
    executing = false;
    if (setupBarrier) Promise.resolve(task).then(resolveSetup, rejectSetup);
    task?.catch(() => {
      if (!runner.epoch) return dispose();
      return finalizeDisposal(dispose);
    }).catch((error) => this.ctx.logger.error(error));
    const disposeAsync = () => {
      if (!runner.epoch) return;
      runner.epoch = false;
      return finalizeDisposal(dispose);
    };
    wrapper.then = async (onFulfilled, onRejected) => {
      return Promise.resolve(task).then(() => disposeAsync).then(onFulfilled, onRejected);
    };
    return wrapper;
  }
  /**
  * Return metadata for currently registered effects.
  *
  * @returns one {@link EffectMeta} tree per labeled live effect.
  */
  getEffects() {
    return [...this._disposables].map((dispose) => dispose[symbols.effect]).filter(Boolean);
  }
  _getState() {
    if (this.uid === null) return 4;
    if (this._error) return 3;
    if (this._runner.epoch !== INACTIVE) return 2;
    return 0;
  }
  _updateState(callback) {
    const oldState = this.state;
    this.state = callback() ?? this._getState();
    if (oldState === this.state) return;
    this.context.emit("internal/status", this, oldState);
    if (oldState !== 2 && this.state !== 2) return;
    for (const key of Reflect.ownKeys(this.ctx.reflect.store)) {
      const impl = this.ctx.reflect.store[key];
      if (impl.fiber !== this) continue;
      this.ctx.reflect.notify([impl.name]);
    }
  }
  _checkImpl(name) {
    const impl = this.ctx.reflect._getImpl(name, true);
    if (!impl) return delete this._store[name];
    try {
      if (impl.check && !impl.check.call(getTraceable(this.ctx, impl.value))) return delete this._store[name];
    } catch (error) {
      impl.fiber.ctx.logger.error(error);
      return delete this._store[name];
    }
    this._store[name] = impl;
  }
  _refresh() {
    let epoch = false;
    epoch = "";
    for (const name of Object.keys(this.inject)) {
      const impl = this._store[name];
      if (!impl) {
        epoch = INACTIVE;
        break;
      }
      epoch += ":" + impl.fiber.uid;
    }
    this._setEpoch(epoch);
  }
  _setEpoch(epoch) {
    const oldEpoch = this._runner.epoch;
    if (epoch === oldEpoch) return;
    this._runner.epoch = epoch;
    if (this.inertia) return;
    this._updateState(() => {
      if (epoch !== INACTIVE && oldEpoch === INACTIVE) {
        this.inertia = this._reload();
        return 1;
      } else {
        this.inertia = this._unload();
        return 5;
      }
    });
  }
  _resolveConfig(config) {
    config = this.context.waterfall(this, "internal/config", config, () => config);
    return this.runtime ? resolveConfig(this.runtime, config) : config;
  }
  async _reload() {
    this.store = { ...this._store };
    const oldEpoch = this._runner.epoch;
    try {
      await Promise.resolve();
      if (this._runner.epoch === oldEpoch) {
        this.config = this._resolveConfig(this._config);
        await this._execute(this._runner);
        this._error = void 0;
      }
    } catch (reason) {
      this.ctx.logger.error(reason);
      this._error = reason;
      this._runner.epoch = INACTIVE;
    }
    this._updateState(() => {
      if (this._runner.epoch === oldEpoch) this.inertia = void 0;
      else {
        this.inertia = this._unload();
        return 5;
      }
    });
  }
  async _unload() {
    await Promise.all(this._disposables.clear().map(async (dispose) => {
      try {
        await composeError(async (info) => {
          await Promise.resolve();
          info.error = /* @__PURE__ */ new Error();
          await runDisposable(dispose);
        }, this._runner.getOuterStack);
      } catch (reason) {
        this.ctx.logger.error(reason);
      }
    }));
    this.store = void 0;
    this._updateState(() => {
      if (this._runner.epoch === INACTIVE) this.inertia = void 0;
      else {
        this.inertia = this._reload();
        return 1;
      }
    });
  }
  /**
  * Wait for current lifecycle work and rethrow startup errors.
  *
  * @returns this fiber, once it has settled into a stable state.
  * @throws the config-validation or plugin-startup error, if any.
  */
  async await() {
    while (this.inertia) await this.inertia;
    if (this._error) throw this._error;
    return this;
  }
  /**
  * Dispose and immediately reload this plugin with its current config.
  *
  * @returns a promise resolving once the reload settled.
  * @throws {CordisError} `INACTIVE_EFFECT` when the fiber is already disposed.
  */
  async restart() {
    this.assertActive();
    this._setEpoch(INACTIVE);
    this._refresh();
    await this.await();
  }
  /**
  * Validate and apply new config, then restart the plugin.
  *
  * Runs the `internal/update` waterfall first, so update hooks (and HMR)
  * can veto or replace the restart.
  *
  * @param config — the new raw config; validated before anything restarts.
  * @param noSave — hint for persistence hooks not to write the change back.
  * @returns the update waterfall result; the default restart returns a promise.
  * @throws when validation, an update listener, or the restarted plugin fails.
  */
  update(config, noSave = false) {
    this.assertActive();
    this._config = config;
    if (this.state !== 2) {
      this._error = void 0;
      this._setEpoch(INACTIVE);
      this._refresh();
      return;
    }
    config = this._resolveConfig(config);
    return this.context.waterfall(this, "internal/update", config, noSave, () => {
      this.config = config;
      this._error = void 0;
      return this.restart();
    });
  }
};
function isApplicable(object) {
  return object && typeof object === "object" && typeof object.apply === "function";
}
function Inject(name, config) {
  return function(value, decorator) {
    if (decorator.kind === "class") {
      if (!Object.hasOwn(value, "inject")) {
        defineProperty(value, "inject", Object.create(Object.getPrototypeOf(value).inject ?? null));
        defineProperty(value.inject, symbols.checkProto, true);
      }
      value.inject[name] = config;
    } else if (decorator.kind === "method") {
      const inject = (value[symbols.metadata] ??= {}).inject ??= /* @__PURE__ */ Object.create(null);
      inject[name] = config;
      decorator.addInitializer(function() {
        const property2 = this[symbols.tracker]?.property;
        (this[symbols.initHooks] ??= []).push(() => {
          this.ctx.inject(inject, (ctx) => {
            return value.call(property2 ? withProps(this, { [property2]: ctx }) : this);
          });
        });
      });
    } else throw new Error("@Inject() can only be used on class or class methods");
  };
}
(function(Inject2) {
  function resolve3(inject, result = /* @__PURE__ */ Object.create(null)) {
    if (!inject) return result;
    if (Array.isArray(inject)) for (const name of inject) result[name] = null;
    else if (Reflect.has(inject, symbols.checkProto)) {
      Object.assign(result, resolve3(Object.getPrototypeOf(inject)));
      for (const name of Object.keys(inject)) result[name] = inject[name] ?? null;
    } else for (const name of Object.keys(inject)) result[name] = inject[name] ?? null;
    return result;
  }
  Inject2.resolve = resolve3;
})(Inject || (Inject = {}));
var RegistryService = class {
  ctx;
  _counter = 0;
  _internal = /* @__PURE__ */ new Map();
  constructor(ctx) {
    this.ctx = ctx;
    defineProperty(this, symbols.tracker, {
      property: "ctx",
      noShadow: true
    });
  }
  /** Allocate the next fiber uid (increments on every read). */
  get counter() {
    return ++this._counter;
  }
  /** Number of registered plugin runtimes. */
  get size() {
    return this._internal.size;
  }
  /**
  * Resolve a supported plugin shape to its executable callback.
  *
  * @param plugin — a function, class, or `{ apply }` object plugin.
  * @returns the callback identifying the plugin, or `undefined` if invalid.
  */
  resolve(plugin) {
    try {
      if (typeof plugin === "function") return plugin;
      if (isApplicable(plugin)) return plugin.apply;
    } catch {
    }
  }
  /**
  * Look up the runtime record for a plugin.
  *
  * @param plugin — any supported plugin shape.
  * @returns the runtime, or `undefined` when the plugin is not registered.
  */
  get(plugin) {
    const key = this.resolve(plugin);
    return key && this._internal.get(key);
  }
  /**
  * Check whether a plugin has a registered runtime.
  *
  * @param plugin — any supported plugin shape.
  * @returns `true` when at least one fiber of the plugin exists.
  */
  has(plugin) {
    const key = this.resolve(plugin);
    return !!key && this._internal.has(key);
  }
  /**
  * Dispose every running fiber for a plugin and remove its runtime record.
  *
  * @param plugin — any supported plugin shape.
  * @returns the removed runtime, or `undefined` when none was registered.
  */
  delete(plugin) {
    const key = this.resolve(plugin);
    const runtime = key && this._internal.get(key);
    if (!runtime) return;
    this._internal.delete(key);
    for (const fiber of runtime.fibers) fiber.dispose();
    return runtime;
  }
  /** Iterate the registered plugin callbacks. */
  keys() {
    return this._internal.keys();
  }
  /** Iterate the registered plugin runtimes. */
  values() {
    return this._internal.values();
  }
  /** Iterate `[callback, runtime]` pairs. */
  entries() {
    return this._internal.entries();
  }
  /**
  * Visit every registered runtime.
  *
  * @param callback — receives each runtime and its identifying callback.
  */
  forEach(callback) {
    return this._internal.forEach(callback);
  }
  /**
  * Start a callback once the requested dependencies are available.
  *
  * @param inject — required services, as an array or a name → config map.
  * @param callback — plugin body called with `(ctx, config)`.
  * @returns the fiber; awaiting it settles once loading finished.
  */
  inject(inject, callback) {
    return this.plugin({
      inject,
      apply: callback,
      name: callback.name
    });
  }
  /**
  * Start a plugin in the current context and return its fiber.
  *
  * Creates (or reuses) the plugin's runtime record, then starts a new fiber
  * under the current context. Throws if `plugin` is not a supported shape or
  * if the current fiber is already disposed.
  *
  * @param plugin — a function, class, or `{ apply }` object plugin.
  * @param config — the plugin config, validated against its `Config` schema.
  * @param getOuterStack — captures the caller stack for effect diagnostics.
  * @returns the fiber; awaiting it settles once loading finished.
  */
  plugin(plugin, config, getOuterStack = buildOuterStack()) {
    const callback = this.resolve(plugin);
    if (!callback) throw new Error('invalid plugin, expect function or object with an "apply" method, received ' + typeof plugin);
    this.ctx.fiber.assertActive();
    let runtime = this._internal.get(callback);
    if (!runtime) {
      let name = plugin.name;
      if (name === "apply") name = void 0;
      runtime = {
        name,
        callback,
        fibers: new DisposableList(),
        Config: plugin.Config
      };
      this._internal.set(callback, runtime);
    }
    const fiber = new Fiber(this.ctx, config, Inject.resolve(plugin.inject), runtime, getOuterStack);
    const wrapped = Object.create(fiber);
    wrapped.then = (onFulfilled, onRejected) => {
      return fiber.await().then(onFulfilled, onRejected);
    };
    return wrapped;
  }
};
var Context = class Context2 {
  /** Symbol key under which a disposer exposes its {@link EffectMeta} diagnostics tree. */
  static effect = symbols.effect;
  /** Symbol key for a context's listener filter, consulted on every event dispatch. */
  static filter = symbols.filter;
  /** Symbol key of the isolation map (see the `Context[symbols.isolate]` property). */
  static isolate = symbols.isolate;
  /** Symbol key of the intercept map (see the `Context[symbols.intercept]` property). */
  static intercept = symbols.intercept;
  /**
  * Returns true for Cordis context proxies and context prototypes.
  *
  * Works across realms and across multiple copies of cordis, because the
  * brand is keyed by a global symbol rather than by `instanceof`.
  *
  * @param value — the value to test.
  * @returns `true` if `value` is a Cordis context, narrowing its type.
  */
  static is(value) {
    return !!value?.[Context2.is];
  }
  static {
    Context2.is[Symbol.toPrimitive] = () => /* @__PURE__ */ Symbol.for("cordis.is");
    Context2.prototype[Context2.is] = true;
  }
  /** Create the root context and install the built-in services. */
  constructor() {
    this[symbols.isolate] = /* @__PURE__ */ Object.create(null);
    this[symbols.intercept] = /* @__PURE__ */ Object.create(null);
    const self = new Proxy(this, ReflectService.handler);
    this.root = self;
    this.baseUrl = void 0;
    this.fiber = new Fiber(self, {}, /* @__PURE__ */ Object.create(null), null, () => []);
    this.reflect = new ReflectService(self);
    this.registry = new RegistryService(self);
    this.events = new EventsService(self);
    this.logger = new LoggerService(self);
    this.fiber._disposables.clear();
    return self;
  }
  [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
    return `Context <${this.fiber.name}>`;
  }
  /**
  * Create a child context with extra metadata on top of the current scope.
  *
  * The child prototypally inherits every property of this context; own
  * properties of `meta` shadow the inherited ones. The parent is not mutated.
  *
  * @param meta — own properties (including symbol keys) to define on the child.
  * @returns a child context inheriting from this one.
  */
  extend(meta = {}) {
    const shadow = Reflect.getOwnPropertyDescriptor(this, symbols.shadow)?.value;
    const self = Object.create(getTraceable(this, this));
    for (const prop of Reflect.ownKeys(meta)) Object.defineProperty(self, prop, Reflect.getOwnPropertyDescriptor(meta, prop));
    if (!shadow) return self;
    return Object.assign(Object.create(self), { [symbols.shadow]: shadow });
  }
  /**
  * Create a child context with an independent service scope for `name`.
  *
  * Below the returned context, reads and writes of the service `name`
  * resolve against the new label instead of the parent's, so a different
  * implementation can be provided without affecting the parent scope.
  * Passing the same `label` to two `isolate()` calls joins their scopes.
  *
  * @param name — the service name to isolate.
  * @param label — scope label to join; defaults to a fresh unique symbol.
  * @returns a child context whose `name` service resolves in the new scope.
  */
  isolate(name, label) {
    const shadow = Object.create(this[symbols.isolate]);
    shadow[name] = label ?? Symbol(name);
    return this.extend({ [symbols.isolate]: shadow });
  }
  intercept(name, config) {
    const intercept = Object.create(this[symbols.intercept]);
    intercept[name] = config;
    return this.extend({ [symbols.intercept]: intercept });
  }
};
var Service = class Service2 {
  ctx;
  /** Symbol key of an instance method run after construction (class plugins). */
  static init = symbols.init;
  /** Symbol key of the availability predicate passed to `ctx.provide()`. */
  static check = symbols.check;
  /** Symbol key of the phantom intercept-config type parameter. */
  static config = symbols.config;
  /** Symbol key of the call body making a service callable (e.g. `ctx.logger()`). */
  static invoke = symbols.invoke;
  /** Symbol key of the helper deriving an extended service instance. */
  static extend = symbols.extend;
  /** Symbol key of the tracker metadata used for context tracing. */
  static tracker = symbols.tracker;
  /** Symbol key of the intercept-config resolution helper below. */
  static resolveConfig = symbols.resolveConfig;
  /** The service name this instance is registered under. */
  name;
  /**
  * Register this instance as `name` in the current context.
  *
  * Calls `ctx.reflect.provide(name, this, this[Service.check])`, so the
  * service is unregistered automatically when the owning fiber unloads.
  * Services with a `[Service.invoke]` body return a callable instance.
  *
  * @param ctx — the context to register in (stored as `this.ctx`).
  * @param name — the service name; defaults to the static `provide` field.
  */
  constructor(ctx, name) {
    this.ctx = ctx;
    name ??= this.constructor["provide"];
    let self = this;
    const tracker = {
      associate: name,
      property: "ctx"
    };
    if (self[symbols.invoke]) self = createCallable(name, joinPrototype(Object.getPrototypeOf(this), Function.prototype), tracker);
    self.ctx = ctx;
    self.name = name;
    defineProperty(self, symbols.tracker, tracker);
    self.ctx.reflect.provide(name, self, this[symbols.check]);
    return self;
  }
  [symbols.filter](ctx) {
    return ctx[symbols.isolate][this.name] === this.ctx[symbols.isolate][this.name];
  }
  [symbols.extend](props) {
    let self;
    if (this[Service2.invoke]) self = createCallable(this.name, this, this[symbols.tracker]);
    else self = Object.create(this);
    return Object.assign(self, props);
  }
  /**
  * Merge intercept config from ancestors with optional base and head values.
  *
  * Entries added closer to the root apply first; `base` is prepended and
  * `head` appended. Uses `Config.merge` when the service declares one,
  * otherwise a shallow `Object.assign`.
  *
  * @param base — lowest-precedence config merged before all intercepts.
  * @param head — highest-precedence config merged after all intercepts.
  * @returns the merged config.
  */
  [symbols.resolveConfig](base, head) {
    let intercept = this.ctx[Context.intercept];
    const configs = [];
    while (this.name in intercept) {
      if (Object.hasOwn(intercept, this.name)) configs.unshift(intercept[this.name]);
      intercept = Object.getPrototypeOf(intercept);
    }
    if (base) configs.unshift(base);
    if (head) configs.push(head);
    if (this["Config"]?.merge) return this["Config"].merge(...configs);
    else return Object.assign({}, ...configs);
  }
  static [Symbol.hasInstance](instance) {
    if (!instance) return false;
    let constructor = instance.constructor;
    while (constructor) {
      constructor = constructor.prototype?.constructor;
      if (constructor === this) return true;
      constructor &&= Object.getPrototypeOf(constructor);
    }
    return false;
  }
};

// shims/node-module.ts
function createRequire(_filename) {
  return (id) => {
    if (id.endsWith("package.json")) return { version: "0.1.0" };
    return require(id);
  };
}

// ../../node_modules/.pnpm/@deepseek-ai+schemastery@3.18.1/node_modules/@deepseek-ai/schemastery/lib/index.mjs
var kSchema = /* @__PURE__ */ Symbol.for("schemastery");
var kValidationError2 = /* @__PURE__ */ Symbol.for("ValidationError");
globalThis.__schemastery_index__ ??= 0;
globalThis.__schemastery_refs__ = void 0;
var ValidationError2 = class extends TypeError {
  options;
  name = "ValidationError";
  constructor(message, options) {
    let prefix = "$";
    for (const segment of options.path || []) if (typeof segment === "string") prefix += "." + segment;
    else if (typeof segment === "number") prefix += "[" + segment + "]";
    else if (typeof segment === "symbol") prefix += `[Symbol(${segment.toString()})]`;
    if (prefix.startsWith(".")) prefix = prefix.slice(1);
    super((prefix === "$" ? "" : `${prefix} `) + message);
    this.options = options;
  }
  static is(error) {
    return !!error?.[kValidationError2];
  }
};
Object.defineProperty(ValidationError2.prototype, kValidationError2, { value: true });
var Schema = function(options) {
  const schema = function(data, options2 = {}) {
    return Schema.resolve(data, schema, options2)[0];
  };
  if (options.refs) {
    const refs = mapValues(options.refs, (options2) => new Schema(options2));
    const getRef = (uid) => refs[uid];
    for (const key in refs) {
      const options2 = refs[key];
      options2.sKey = getRef(options2.sKey);
      options2.inner = getRef(options2.inner);
      options2.list = options2.list && options2.list.map(getRef);
      options2.dict = options2.dict && mapValues(options2.dict, getRef);
    }
    return refs[options.uid];
  }
  Object.assign(schema, options);
  if (typeof schema.callback === "string") try {
    schema.callback = new Function("return " + schema.callback)();
  } catch {
  }
  Object.defineProperty(schema, "uid", { value: globalThis.__schemastery_index__++ });
  Object.setPrototypeOf(schema, Schema.prototype);
  schema.meta ||= {};
  schema.toString = schema.toString.bind(schema);
  return schema;
};
Schema.prototype = Object.create(Function.prototype);
Schema.prototype[kSchema] = true;
Object.defineProperty(Schema.prototype, "~standard", { get() {
  return {
    version: 1,
    vendor: "schemastery",
    validate: (value) => {
      try {
        return { value: Schema.resolve(value, this, {})[0] };
      } catch (error) {
        if (ValidationError2.is(error)) return { issues: [{
          message: error.message,
          path: error.options.path
        }] };
        throw error;
      }
    }
  };
} });
Schema.ValidationError = ValidationError2;
Schema.prototype.toJSON = function toJSON() {
  if (globalThis.__schemastery_refs__) {
    globalThis.__schemastery_refs__[this.uid] ??= JSON.parse(JSON.stringify({ ...this }));
    return this.uid;
  }
  globalThis.__schemastery_refs__ = { [this.uid]: { ...this } };
  globalThis.__schemastery_refs__[this.uid] = JSON.parse(JSON.stringify({ ...this }));
  const result = {
    uid: this.uid,
    refs: globalThis.__schemastery_refs__
  };
  globalThis.__schemastery_refs__ = void 0;
  return result;
};
Schema.prototype.set = function set(key, value) {
  this.dict[key] = value;
  return this;
};
Schema.prototype.push = function push(value) {
  this.list.push(value);
  return this;
};
function mergeDesc(original, messages) {
  const result = typeof original === "string" ? { "": original } : { ...original };
  for (const locale in messages) {
    const value = messages[locale];
    if (value?.$description || value?.$desc) result[locale] = value.$description || value.$desc;
    else if (typeof value === "string") result[locale] = value;
  }
  return result;
}
function getInner(value) {
  return value?.$value ?? value?.$inner;
}
function extractKeys(data) {
  return filterKeys(data ?? {}, (key) => !key.startsWith("$"));
}
Schema.prototype.i18n = function i18n(messages) {
  const schema = Schema(this);
  const desc = mergeDesc(schema.meta.description, messages);
  if (Object.keys(desc).length) schema.meta.description = desc;
  if (schema.dict) schema.dict = mapValues(schema.dict, (inner, key) => {
    return inner.i18n(mapValues(messages, (data) => getInner(data)?.[key] ?? data?.[key]));
  });
  if (schema.list) schema.list = schema.list.map((inner, index) => {
    return inner.i18n(mapValues(messages, (data = {}) => {
      if (Array.isArray(getInner(data))) return getInner(data)[index];
      if (Array.isArray(data)) return data[index];
      return extractKeys(data);
    }));
  });
  if (schema.inner) schema.inner = schema.inner.i18n(mapValues(messages, (data) => {
    if (getInner(data)) return getInner(data);
    return extractKeys(data);
  }));
  if (schema.sKey) schema.sKey = schema.sKey.i18n(mapValues(messages, (data) => data?.$key));
  return schema;
};
Schema.prototype.extra = function extra(key, value) {
  const schema = Schema(this);
  schema.meta = {
    ...schema.meta,
    [key]: value
  };
  return schema;
};
for (const key of [
  "required",
  "disabled",
  "collapse",
  "hidden",
  "loose"
]) Object.assign(Schema.prototype, { [key](value = true) {
  const schema = Schema(this);
  schema.meta = {
    ...schema.meta,
    [key]: value
  };
  return schema;
} });
Schema.prototype.deprecated = function deprecated() {
  const schema = Schema(this);
  schema.meta.badges ||= [];
  schema.meta.badges.push({
    text: "deprecated",
    type: "danger"
  });
  return schema;
};
Schema.prototype.experimental = function experimental() {
  const schema = Schema(this);
  schema.meta.badges ||= [];
  schema.meta.badges.push({
    text: "experimental",
    type: "warning"
  });
  return schema;
};
Schema.prototype.pattern = function pattern(regexp) {
  const schema = Schema(this);
  const pattern2 = pick(regexp, ["source", "flags"]);
  schema.meta = {
    ...schema.meta,
    pattern: pattern2
  };
  return schema;
};
Schema.prototype.simplify = function simplify(value) {
  if (deepEqual(value, this.meta.default, this.type === "dict")) return null;
  if (isNullable(value)) return value;
  if (this.type === "object" || this.type === "dict") {
    const result = {};
    for (const key in value) {
      const item = (this.type === "object" ? this.dict[key] : this.inner)?.simplify(value[key]);
      if (this.type === "dict" || !isNullable(item)) result[key] = item;
    }
    if (deepEqual(result, this.meta.default, this.type === "dict")) return null;
    return result;
  } else if (this.type === "array" || this.type === "tuple") {
    const result = [];
    value.forEach((value2, index) => {
      const schema = this.type === "array" ? this.inner : this.list[index];
      const item = schema ? schema.simplify(value2) : value2;
      result.push(item);
    });
    return result;
  } else if (this.type === "intersect") {
    const result = {};
    for (const item of this.list) Object.assign(result, item.simplify(value));
    return result;
  } else if (this.type === "union") for (const schema of this.list) try {
    Schema.resolve(value, schema, {});
    return schema.simplify(value);
  } catch {
  }
  return value;
};
Schema.prototype.toString = function toString(inline) {
  return formatters[this.type]?.(this, inline) ?? `Schema<${this.type}>`;
};
Schema.prototype.role = function role(role, extra3) {
  const schema = Schema(this);
  schema.meta = {
    ...schema.meta,
    role,
    extra: extra3
  };
  return schema;
};
for (const key of [
  "default",
  "link",
  "comment",
  "description",
  "max",
  "min",
  "step"
]) Object.assign(Schema.prototype, { [key](value) {
  const schema = Schema(this);
  schema.meta = {
    ...schema.meta,
    [key]: value
  };
  return schema;
} });
var resolvers = {};
Schema.extend = function extend(type, resolve3) {
  resolvers[type] = resolve3;
};
Schema.resolve = function resolve(data, schema, options = {}, strict = false) {
  if (!schema) return [data];
  if (options.ignore?.(data, schema)) return [data];
  if (isNullable(data) && schema.type !== "lazy") {
    if (schema.meta.required) throw new ValidationError2(`missing required value`, options);
    let current2 = schema;
    let fallback = schema.meta.default;
    while (current2?.type === "intersect" && isNullable(fallback)) {
      current2 = current2.list[0];
      fallback = current2?.meta.default;
    }
    if (isNullable(fallback)) return [data];
    data = clone(fallback);
  }
  const callback = resolvers[schema.type];
  if (!callback) throw new ValidationError2(`unsupported type "${schema.type}"`, options);
  try {
    return callback(data, schema, options, strict);
  } catch (error) {
    if (!schema.meta.loose) throw error;
    return [schema.meta.default];
  }
};
Schema.from = function from(source) {
  if (isNullable(source)) return Schema.any();
  else if ([
    "string",
    "number",
    "boolean"
  ].includes(typeof source)) return Schema.const(source).required();
  else if (source[kSchema]) return source;
  else if (typeof source === "function") switch (source) {
    case String:
      return Schema.string().required();
    case Number:
      return Schema.number().required();
    case Boolean:
      return Schema.boolean().required();
    case Function:
      return Schema.function().required();
    default:
      return Schema.is(source).required();
  }
  else throw new TypeError(`cannot infer schema from ${source}`);
};
Schema.lazy = function lazy(builder) {
  const toJSON2 = () => {
    if (!schema.inner[kSchema]) {
      schema.inner = schema.builder();
      schema.inner.meta = {
        ...schema.meta,
        ...schema.inner.meta
      };
    }
    return schema.inner.toJSON();
  };
  const schema = new Schema({
    type: "lazy",
    builder,
    inner: { toJSON: toJSON2 }
  });
  return schema;
};
Schema.natural = function natural() {
  return Schema.number().step(1).min(0);
};
Schema.percent = function percent() {
  return Schema.number().step(0.01).min(0).max(1).role("slider");
};
Schema.date = function date() {
  return Schema.union([Schema.is(Date), Schema.transform(Schema.string().role("datetime"), (value, options) => {
    const date2 = new Date(value);
    if (isNaN(+date2)) throw new ValidationError2(`invalid date "${value}"`, options);
    return date2;
  }, true)]);
};
Schema.regExp = function regExp(flag = "") {
  return Schema.union([Schema.is(RegExp), Schema.transform(Schema.string().role("regexp", { flag }), (value, options) => {
    try {
      return new RegExp(value, flag);
    } catch (e) {
      throw new ValidationError2(e.message, options);
    }
  }, true)]);
};
Schema.arrayBuffer = function arrayBuffer(encoding) {
  return Schema.union([
    Schema.is(ArrayBuffer),
    Schema.is(SharedArrayBuffer),
    Schema.transform(Schema.any(), (value, options) => {
      if (Binary.isSource(value)) return Binary.fromSource(value);
      throw new ValidationError2(`expected ArrayBufferSource but got ${value}`, options);
    }, true),
    ...encoding ? [Schema.transform(Schema.string(), (value, options) => {
      try {
        return encoding === "base64" ? Binary.fromBase64(value) : Binary.fromHex(value);
      } catch (e) {
        throw new ValidationError2(e.message, options);
      }
    }, true)] : []
  ]);
};
Schema.extend("lazy", (data, schema, options, strict) => {
  if (!schema.inner[kSchema]) {
    schema.inner = schema.builder();
    schema.inner.meta = {
      ...schema.meta,
      ...schema.inner.meta
    };
  }
  return Schema.resolve(data, schema.inner, options, strict);
});
Schema.extend("any", (data) => {
  return [data];
});
Schema.extend("never", (data, _2, options) => {
  throw new ValidationError2(`expected nullable but got ${data}`, options);
});
Schema.extend("const", (data, { value }, options) => {
  if (deepEqual(data, value)) return [value];
  throw new ValidationError2(`expected ${value} but got ${data}`, options);
});
function checkWithinRange(data, meta, description, options, skipMin = false) {
  const { max = Infinity, min = -Infinity } = meta;
  if (data > max) throw new ValidationError2(`expected ${description} <= ${max} but got ${data}`, options);
  if (data < min && !skipMin) throw new ValidationError2(`expected ${description} >= ${min} but got ${data}`, options);
}
Schema.extend("string", (data, { meta }, options) => {
  if (typeof data !== "string") throw new ValidationError2(`expected string but got ${data}`, options);
  if (meta.pattern) {
    const regexp = new RegExp(meta.pattern.source, meta.pattern.flags);
    if (!regexp.test(data)) throw new ValidationError2(`expect string to match regexp ${regexp}`, options);
  }
  checkWithinRange(data.length, meta, "string length", options);
  return [data];
});
function decimalShift(data, digits) {
  const str = data.toString();
  if (str.includes("e")) return data * Math.pow(10, digits);
  const index = str.indexOf(".");
  if (index === -1) return data * Math.pow(10, digits);
  const frac = str.slice(index + 1);
  const integer = str.slice(0, index);
  if (frac.length <= digits) return +(integer + frac.padEnd(digits, "0"));
  return +(integer + frac.slice(0, digits) + "." + frac.slice(digits));
}
function isMultipleOf(data, min, step) {
  step = Math.abs(step);
  if (!/^\d+\.\d+$/.test(step.toString())) return (data - min) % step === 0;
  const index = step.toString().indexOf(".");
  const digits = step.toString().slice(index + 1).length;
  return Math.abs(decimalShift(data, digits) - decimalShift(min, digits)) % decimalShift(step, digits) === 0;
}
Schema.extend("number", (data, { meta }, options) => {
  if (typeof data !== "number") throw new ValidationError2(`expected number but got ${data}`, options);
  checkWithinRange(data, meta, "number", options);
  const { step } = meta;
  if (step && !isMultipleOf(data, meta.min ?? 0, step)) throw new ValidationError2(`expected number multiple of ${step} but got ${data}`, options);
  return [data];
});
Schema.extend("boolean", (data, _2, options) => {
  if (typeof data === "boolean") return [data];
  throw new ValidationError2(`expected boolean but got ${data}`, options);
});
Schema.extend("bitset", (data, { bits, meta }, options) => {
  let value = 0, keys = [];
  if (typeof data === "number") {
    value = data;
    for (const key in bits) if (data & bits[key]) keys.push(key);
  } else if (Array.isArray(data)) {
    keys = data;
    for (const key of keys) {
      if (typeof key !== "string") throw new ValidationError2(`expected string but got ${key}`, options);
      if (key in bits) value |= bits[key];
    }
  } else throw new ValidationError2(`expected number or array but got ${data}`, options);
  if (value === meta.default) return [value];
  return [value, keys];
});
Schema.extend("function", (data, _2, options) => {
  if (typeof data === "function") return [data];
  throw new ValidationError2(`expected function but got ${data}`, options);
});
Schema.extend("is", (data, { constructor }, options) => {
  if (typeof constructor === "function") {
    if (data instanceof constructor) return [data];
    throw new ValidationError2(`expected ${constructor.name} but got ${data}`, options);
  } else {
    if (isNullable(data)) throw new ValidationError2(`expected ${constructor} but got ${data}`, options);
    let prototype = Object.getPrototypeOf(data);
    while (prototype) {
      if (prototype.constructor?.name === constructor) return [data];
      prototype = Object.getPrototypeOf(prototype);
    }
    throw new ValidationError2(`expected ${constructor} but got ${data}`, options);
  }
});
function property(data, key, schema, options) {
  try {
    const [value, adapted] = Schema.resolve(data[key], schema, {
      ...options,
      path: [...options.path || [], key]
    });
    if (adapted !== void 0) data[key] = adapted;
    return value;
  } catch (e) {
    if (!options?.autofix) throw e;
    delete data[key];
    return schema.meta.default;
  }
}
Schema.extend("array", (data, { inner, meta }, options) => {
  if (!Array.isArray(data)) throw new ValidationError2(`expected array but got ${data}`, options);
  checkWithinRange(data.length, meta, "array length", options, !isNullable(inner.meta.default));
  return [data.map((_2, index) => property(data, index, inner, options))];
});
Schema.extend("dict", (data, { inner, sKey }, options, strict) => {
  if (!isPlainObject(data)) throw new ValidationError2(`expected object but got ${data}`, options);
  const result = {};
  for (const key in data) {
    let rKey;
    try {
      rKey = Schema.resolve(key, sKey, options)[0];
    } catch (error) {
      if (strict) continue;
      throw error;
    }
    result[rKey] = property(data, key, inner, options);
    data[rKey] = data[key];
    if (key !== rKey) delete data[key];
  }
  return [result];
});
Schema.extend("tuple", (data, { list }, options, strict) => {
  if (!Array.isArray(data)) throw new ValidationError2(`expected array but got ${data}`, options);
  const result = list.map((inner, index) => property(data, index, inner, options));
  if (strict) return [result];
  result.push(...data.slice(list.length));
  return [result];
});
function merge(result, data) {
  for (const key in data) {
    if (key in result) continue;
    result[key] = data[key];
  }
}
Schema.extend("object", (data, { dict: dict3 }, options, strict) => {
  if (!isPlainObject(data)) throw new ValidationError2(`expected object but got ${data}`, options);
  const result = {};
  for (const key in dict3) {
    const value = property(data, key, dict3[key], options);
    if (!isNullable(value) || key in data) result[key] = value;
  }
  if (!strict) merge(result, data);
  return [result];
});
Schema.extend("union", (data, { list, toString: toString2 }, options, strict) => {
  const messages = [];
  for (const inner of list) try {
    return Schema.resolve(data, inner, options, strict);
  } catch (error) {
    messages.push(error);
  }
  throw new ValidationError2(`expected ${toString2()} but got ${JSON.stringify(data)}`, options);
});
Schema.extend("intersect", (data, { list, toString: toString2 }, options, strict) => {
  if (!list.length) return [data];
  let result;
  for (const inner of list) {
    const value = Schema.resolve(data, inner, options, true)[0];
    if (isNullable(value)) continue;
    if (isNullable(result)) result = value;
    else if (typeof result !== typeof value) throw new ValidationError2(`expected ${toString2()} but got ${JSON.stringify(data)}`, options);
    else if (typeof value === "object") merge(result ??= {}, value);
    else if (result !== value) throw new ValidationError2(`expected ${toString2()} but got ${JSON.stringify(data)}`, options);
  }
  if (!strict && isPlainObject(data)) merge(result, data);
  return [result];
});
Schema.extend("transform", (data, { inner, callback, preserve }, options) => {
  const [result, adapted = data] = Schema.resolve(data, inner, options, true);
  if (preserve) return [callback(result)];
  else return [callback(result), callback(adapted)];
});
var formatters = {};
function defineMethod(name, keys, format) {
  formatters[name] = format;
  Object.assign(Schema, { [name](...args) {
    const schema = new Schema({ type: name });
    keys.forEach((key, index) => {
      switch (key) {
        case "sKey":
          schema.sKey = args[index] ?? Schema.string();
          break;
        case "inner":
          schema.inner = Schema.from(args[index]);
          break;
        case "list":
          schema.list = args[index].map(Schema.from);
          break;
        case "dict":
          schema.dict = mapValues(args[index], Schema.from);
          break;
        case "bits":
          schema.bits = {};
          for (const key2 in args[index]) {
            if (typeof args[index][key2] !== "number") continue;
            schema.bits[key2] = args[index][key2];
          }
          break;
        case "callback": {
          const callback = schema.callback = args[index];
          callback["toJSON"] ||= () => callback.toString();
          break;
        }
        case "constructor": {
          const constructor = schema.constructor = args[index];
          if (typeof constructor === "function") constructor["toJSON"] ||= () => constructor["name"];
          break;
        }
        default:
          schema[key] = args[index];
      }
    });
    if (name === "object" || name === "dict") schema.meta.default = {};
    else if (name === "array" || name === "tuple") schema.meta.default = [];
    else if (name === "bitset") schema.meta.default = 0;
    return schema;
  } });
}
defineMethod("is", ["constructor"], ({ constructor }) => {
  if (typeof constructor === "function") return constructor.name;
  else return constructor;
});
defineMethod("any", [], () => "any");
defineMethod("never", [], () => "never");
defineMethod("const", ["value"], ({ value }) => typeof value === "string" ? JSON.stringify(value) : value);
defineMethod("string", [], () => "string");
defineMethod("number", [], () => "number");
defineMethod("boolean", [], () => "boolean");
defineMethod("bitset", ["bits"], () => "bitset");
defineMethod("function", [], () => "function");
defineMethod("array", ["inner"], ({ inner }) => `${inner.toString(true)}[]`);
defineMethod("dict", ["inner", "sKey"], ({ inner, sKey }) => `{ [key: ${sKey.toString()}]: ${inner.toString()} }`);
defineMethod("tuple", ["list"], ({ list }) => `[${list.map((inner) => inner.toString()).join(", ")}]`);
defineMethod("object", ["dict"], ({ dict: dict3 }) => {
  if (Object.keys(dict3).length === 0) return "{}";
  return `{ ${Object.entries(dict3).map(([key, inner]) => {
    return `${key}${inner.meta.required ? "" : "?"}: ${inner.toString()}`;
  }).join(", ")} }`;
});
defineMethod("union", ["list"], ({ list }, inline) => {
  const result = list.map(({ toString: format }) => format()).join(" | ");
  return inline ? `(${result})` : result;
});
defineMethod("intersect", ["list"], ({ list }) => {
  return `${list.map((inner) => inner.toString(true)).join(" & ")}`;
});
defineMethod("transform", [
  "inner",
  "callback",
  "preserve"
], ({ inner }, isInner) => inner.toString(isInner));

// ../../node_modules/.pnpm/@deepseek-ai+dsh-timeout@0.0.1-rc.1_@deepseek-ai+cordis@4.0.1_@deepseek-ai+dsh-invarian_142f987f2a971fa538df5a39cf612d45/node_modules/@deepseek-ai/dsh-timeout/lib/index.js
var MAX_TIMER_DELAY_MS = 2147483647;

// ../../node_modules/.pnpm/@deepseek-ai+dsh-llm@0.1.0-rc.6_@deepseek-ai+cordis@4.0.1_@deepseek-ai+dsh-attachment@0_ebef89cd1bc3d88950948b2803591c1c/node_modules/@deepseek-ai/dsh-llm/lib/index.js
var import_meta = {};
function MessageId(id) {
  return id;
}
function CallId(id) {
  return id;
}
function callConfigEquals(a, b2) {
  if (a.provider !== b2.provider || a.model !== b2.model || a.reasoningEffort !== b2.reasoningEffort || a.temperature !== b2.temperature || a.maxTokens !== b2.maxTokens) return false;
  if (a.stop === void 0 || b2.stop === void 0) return a.stop === b2.stop;
  return a.stop.length === b2.stop.length && a.stop.every((s, i) => s === b2.stop?.[i]);
}
function deepFreeze(value) {
  const seen = /* @__PURE__ */ new WeakSet();
  const pending = [{
    kind: "visit",
    node: value
  }];
  while (pending.length > 0) {
    const task = pending.pop();
    if (task === void 0) continue;
    if (task.kind === "property") {
      pending.push({
        kind: "visit",
        node: task.source[task.key]
      });
      continue;
    }
    const node = task.node;
    if (node === null || typeof node !== "object") continue;
    if (node instanceof AbortSignal) continue;
    if (seen.has(node)) continue;
    seen.add(node);
    Object.freeze(node);
    const keys = Object.keys(node);
    for (let index = keys.length - 1; index >= 0; index--) {
      const key = keys[index];
      if (key === void 0) continue;
      pending.push({
        kind: "property",
        source: node,
        key
      });
    }
  }
  return value;
}
function freezeMessage(message) {
  return deepFreeze(structuredClone(message));
}
function createMessage(input) {
  return freezeMessage({
    ...input,
    id: MessageId(crypto.randomUUID())
  });
}
function createUserMessage(input) {
  return createMessage({
    ...input,
    role: "user"
  });
}
var HarnessError = class extends Error {
  /** Stable machine-routable failure class (e.g. `RATE_LIMIT`); route on this, never by parsing `message`. */
  code;
  constructor(message, code, options) {
    super(message, options);
    this.code = code;
    this.name = new.target.name;
  }
};
var EMPTY_RESPONSE_CODE = "EMPTY_RESPONSE";
var INVALID_CREDENTIAL_CODE = "INVALID_CREDENTIAL";
var STRUCTURED_CONTEXT_OVERFLOW = new RegExp(String.raw`(?:^|[^a-z0-9])context[\s_-](?:length|window)[\s_-]` + String.raw`(?:exceed(?:ed|s)?|overflow(?:ed)?|limit[\s_-]exceeded)(?:$|[^a-z0-9])`, "i");
var TOO_LARGE_FOR_CONTEXT = new RegExp(String.raw`\b(?:request|prompt|input|messages?)\s+(?:is\s+|are\s+)?` + String.raw`too\s+(?:large|long)\s+for\s+(?:(?:this|the)\s+)?` + String.raw`(?:model(?:'s)?\s+)?context(?:\s+window)?\b`, "i");
var EXCEEDS_MODEL_CONTEXT = new RegExp(String.raw`\b(?:input|prompt|request|messages?)\b.{0,40}` + String.raw`\b(?:exceed(?:s|ed)?|overflows?|is\s+larger\s+than)\b.{0,40}` + String.raw`\b(?:the\s+)?(?:model(?:'s)?\s+)?context(?:\s+(?:length|window))?\b`, "i");
var DEFAULT_MAX_RETRIES = 2;
var DEFAULT_INITIAL_DELAY_MS = 500;
var DEFAULT_MAX_DELAY_MS = 1e4;
var DEFAULT_JITTER_RATIO = 0.1;
var DEFAULT_RETRYABLE_CODES = Object.freeze([
  EMPTY_RESPONSE_CODE,
  "RATE_LIMIT",
  "SERVER",
  "TIMEOUT",
  "TRANSPORT"
]);
var backoffSchema = Schema.object({
  initialDelayMs: Schema.number().max(MAX_TIMER_DELAY_MS).default(DEFAULT_INITIAL_DELAY_MS),
  maxDelayMs: Schema.number().max(MAX_TIMER_DELAY_MS).default(DEFAULT_MAX_DELAY_MS),
  jitterRatio: Schema.number().min(0).max(1).default(DEFAULT_JITTER_RATIO)
});
var normalPolicySchema = Schema.object({
  mode: Schema.const("normal").required(),
  maxRetries: Schema.number().step(1).min(0).max(Number.MAX_SAFE_INTEGER).default(DEFAULT_MAX_RETRIES),
  retryableCodes: Schema.array(Schema.string()).default([...DEFAULT_RETRYABLE_CODES]),
  backoff: backoffSchema
});
var alwaysPolicySchema = Schema.object({
  mode: Schema.const("always").required(),
  backoff: backoffSchema
});
var RetryPolicySchema = Schema.union([normalPolicySchema, alwaysPolicySchema]);
var NORMAL_POLICY_KEYS = /* @__PURE__ */ new Set([
  "mode",
  "maxRetries",
  "retryableCodes",
  "backoff"
]);
var ALWAYS_POLICY_KEYS = /* @__PURE__ */ new Set(["mode", "backoff"]);
var BACKOFF_KEYS = /* @__PURE__ */ new Set([
  "initialDelayMs",
  "maxDelayMs",
  "jitterRatio"
]);
function validateKeys(value, allowed, path8) {
  for (const key of Object.keys(value)) if (!allowed.has(key)) throw new Error(`${path8}: unknown key "${key}"`);
}
function resolveBackoff(config, path8) {
  if (config !== void 0) validateKeys(config, BACKOFF_KEYS, path8);
  const initialDelayMs = config?.initialDelayMs ?? DEFAULT_INITIAL_DELAY_MS;
  const maxDelayMs = config?.maxDelayMs ?? DEFAULT_MAX_DELAY_MS;
  const jitterRatio = config?.jitterRatio ?? DEFAULT_JITTER_RATIO;
  if (!Number.isFinite(initialDelayMs) || initialDelayMs <= 0 || initialDelayMs > MAX_TIMER_DELAY_MS) throw new Error(`${path8}.initialDelayMs must be a positive finite number no greater than ${MAX_TIMER_DELAY_MS}`);
  if (!Number.isFinite(maxDelayMs) || maxDelayMs <= 0 || maxDelayMs > MAX_TIMER_DELAY_MS) throw new Error(`${path8}.maxDelayMs must be a positive finite number no greater than ${MAX_TIMER_DELAY_MS}`);
  if (initialDelayMs > maxDelayMs) throw new Error(`${path8}.initialDelayMs must be less than or equal to maxDelayMs`);
  if (!Number.isFinite(jitterRatio) || jitterRatio < 0 || jitterRatio > 1) throw new Error(`${path8}.jitterRatio must be between 0 and 1`);
  return Object.freeze({
    initialDelayMs,
    maxDelayMs,
    jitterRatio
  });
}
function resolveRetryPolicy(config, path8) {
  if (config === void 0) return Object.freeze({
    mode: "normal",
    maxRetries: DEFAULT_MAX_RETRIES,
    retryableCodes: DEFAULT_RETRYABLE_CODES,
    ...resolveBackoff(void 0, `${path8}.backoff`)
  });
  switch (config.mode) {
    case "normal": {
      validateKeys(config, NORMAL_POLICY_KEYS, path8);
      const maxRetries = config.maxRetries ?? DEFAULT_MAX_RETRIES;
      const retryableCodes = config.retryableCodes ?? [...DEFAULT_RETRYABLE_CODES];
      if (!Number.isSafeInteger(maxRetries) || maxRetries < 0) throw new Error(`${path8}.maxRetries must be a non-negative safe integer`);
      if (retryableCodes.length === 0) throw new Error(`${path8}.retryableCodes must not be empty`);
      if (retryableCodes.some((code) => typeof code !== "string" || code.length === 0)) throw new Error(`${path8}.retryableCodes must contain only non-empty strings`);
      if (new Set(retryableCodes).size !== retryableCodes.length) throw new Error(`${path8}.retryableCodes must not contain duplicates`);
      return Object.freeze({
        mode: "normal",
        maxRetries,
        retryableCodes: Object.freeze([...retryableCodes]),
        ...resolveBackoff(config.backoff, `${path8}.backoff`)
      });
    }
    case "always":
      validateKeys(config, ALWAYS_POLICY_KEYS, path8);
      return Object.freeze({
        mode: "always",
        ...resolveBackoff(config.backoff, `${path8}.backoff`)
      });
    default:
      throw new Error(`${path8}.mode must be "normal" or "always"`);
  }
}
function normalizeLlmFailure(value) {
  const error = value instanceof Error ? value : new HarnessError(thrownMessage(value), "UNKNOWN", { cause: value });
  const carried = ownFailureSnapshot(error);
  if (carried !== void 0 && carried.code === ownErrorCode(error)) return carried;
  return Object.freeze({
    message: errorMessage(error),
    code: harnessErrorCode(error)
  });
}
function thrownMessage(value) {
  try {
    const message = String(value);
    return message.length > 0 ? message : "LLM adapter failed";
  } catch (_hostileThrownValue) {
    return "LLM adapter failed";
  }
}
function ownErrorCode(error) {
  try {
    const descriptor = Object.getOwnPropertyDescriptor(error, "code");
    return descriptor !== void 0 && "value" in descriptor ? descriptor.value : void 0;
  } catch (_sdkPropertyTrap) {
    return;
  }
}
function ownFailureSnapshot(error) {
  try {
    const descriptor = Object.getOwnPropertyDescriptor(error, "failure");
    return descriptor !== void 0 && "value" in descriptor ? failureSnapshot(descriptor.value) : void 0;
  } catch (_sdkPropertyTrap) {
    return;
  }
}
function failureSnapshot(value) {
  if (typeof value !== "object" || value === null) return void 0;
  try {
    const candidate = value;
    const message = candidate.message;
    const code = candidate.code;
    const status = candidate.status;
    const providerRetryAfterMs = candidate.providerRetryAfterMs;
    const requestId = candidate.requestId;
    if (typeof message !== "string" || message.length === 0 || typeof code !== "string" || code.length === 0 || status !== void 0 && (!Number.isInteger(status) || status < 100 || status > 599) || providerRetryAfterMs !== void 0 && (!Number.isFinite(providerRetryAfterMs) || providerRetryAfterMs <= 0) || requestId !== void 0 && (typeof requestId !== "string" || requestId.length === 0)) return void 0;
    return Object.freeze({
      message,
      code,
      ...status === void 0 ? {} : { status },
      ...providerRetryAfterMs === void 0 ? {} : { providerRetryAfterMs },
      ...requestId === void 0 ? {} : { requestId }
    });
  } catch (_sdkFailureGetter) {
    return;
  }
}
function errorMessage(error) {
  try {
    const message = error.message;
    if (typeof message === "string" && message.length > 0) return message;
  } catch (_sdkMessageGetter) {
  }
  return "LLM adapter failed";
}
function harnessErrorCode(error) {
  return error instanceof HarnessError ? error.code : "UNKNOWN";
}
var LEGAL_API_KEY = /^[\x21-\x7E]+$/;
function normalizeApiKey(raw) {
  const value = raw.trim();
  if (value.length === 0) return {
    ok: false,
    reason: "empty"
  };
  if (!LEGAL_API_KEY.test(value)) return {
    ok: false,
    reason: "illegalCharacters"
  };
  return {
    ok: true,
    value
  };
}
var { version } = createRequire(import_meta.url)("../package.json");
var APP_IDENTITY = {
  product: "deepseek-harness",
  version,
  url: "https://github.com/deepseek-ai/deepseek-harness"
};
function userAgent(identity = APP_IDENTITY) {
  return `${identity.product}/${identity.version} (+${identity.url})`;
}
function attributionHeaders(identity = APP_IDENTITY) {
  return { "user-agent": userAgent(identity) };
}
function assertNever(value, context) {
  const rendered = JSON.stringify(value) ?? String(value);
  throw new Error(`unreachable variant${context ? ` in ${context}` : ""}: ${rendered}`);
}
var LlmError = class extends HarnessError {
  /** Serializable facts retained beside this live Error. */
  failure;
  /**
  * @param message - non-empty human-readable failure summary.
  * @param code - non-empty stable provider-neutral machine code.
  * @param options - optional cause and validated serializable provider facts.
  */
  constructor(message, code, options) {
    if (typeof message !== "string" || message.length === 0) throw new Error("LlmError message must be a non-empty string");
    if (typeof code !== "string" || code.length === 0) throw new Error("LlmError code must be a non-empty string");
    if (options?.status !== void 0 && (!Number.isInteger(options.status) || options.status < 100 || options.status > 599)) throw new Error("LlmError status must be an integer from 100 through 599");
    if (options?.providerRetryAfterMs !== void 0 && (!Number.isFinite(options.providerRetryAfterMs) || options.providerRetryAfterMs <= 0)) throw new Error("LlmError providerRetryAfterMs must be a positive finite number");
    if (options?.requestId !== void 0 && (typeof options.requestId !== "string" || options.requestId.length === 0)) throw new Error("LlmError requestId must be a non-empty string");
    super(message, code, options);
    this.name = "LlmError";
    this.failure = Object.freeze({
      message,
      code,
      ...options?.status === void 0 ? {} : { status: options.status },
      ...options?.providerRetryAfterMs === void 0 ? {} : { providerRetryAfterMs: options.providerRetryAfterMs },
      ...options?.requestId === void 0 ? {} : { requestId: options.requestId }
    });
  }
};
function assertUsableApiKey(raw, pkg, ref) {
  const checked = normalizeApiKey(raw);
  if (checked.ok) return checked.value;
  throw new LlmError(checked.reason === "empty" ? `${pkg}: the API key resolved from ${ref} is blank; set ${ref} to the raw key (the web Models page writes it) or export it in the launching environment` : `${pkg}: the API key resolved from ${ref} contains characters no HTTP header can carry; set ${ref} to the raw key alone (the web Models page writes it)`, INVALID_CREDENTIAL_CODE);
}
var LlmAdapter = class {
  /**
  * Describe one provider route owned by this adapter.
  * @param provider - a route passed to `registerAdapter()` for this instance.
  * @returns detached display metadata whose id must equal `provider`.
  */
  providerInfo(provider) {
    return {
      id: provider,
      name: provider
    };
  }
  /**
  * Return the provider-owned retry policy captured with this route.
  * @param _provider - a route passed to `registerAdapter()` for this instance.
  * @returns a resolved policy, or `undefined` to use the normal defaults.
  */
  providerRetryPolicy(_provider) {
  }
  /**
  * List models this adapter can currently advertise for one owned provider.
  * The result is advisory: an adapter may accept unlisted model ids, and
  * consumers must not turn absence into request rejection.
  * @param _provider - one provider route owned by this adapter.
  * @returns discoverable models in adapter-preferred order.
  */
  listModels(_provider) {
    return Promise.resolve([]);
  }
  /**
  * Resolve all metadata available for one exact model. This query is
  * independent of the advisory catalog and does not validate request routing.
  * @param provider - one provider route owned by this adapter.
  * @param model - exact model id passed to {@link GenerateOptions.model}.
  * @param _signal - cancellation for this exact-model lookup; asynchronous
  *   implementations must settle promptly after it aborts.
  * @returns provider/model identity plus any context, call-default, and reasoning metadata.
  */
  resolveModel(provider, model, _signal) {
    return Promise.resolve({
      provider,
      id: model,
      name: model
    });
  }
};
var LlmRuntime = class extends Service {
  adapters = /* @__PURE__ */ new Map();
  directory = /* @__PURE__ */ new Map();
  discoveries = /* @__PURE__ */ new Map();
  constructor(ctx) {
    super(ctx, "llm");
  }
  /** Notify topology observers without letting one broken listener veto the commit. */
  emitAdaptersUpdated() {
    let invariantFailure;
    for (const listener of this.ctx.events.dispatch("emit", ["llm/adapters-updated"])) try {
      const returned = listener();
      if (returned != null && typeof returned.then === "function") Promise.resolve(returned).then(void 0, (error) => {
        this.warnAdaptersListenerFailure(error);
      });
    } catch (error) {
      if (error?.code === "INVARIANT") {
        invariantFailure ??= error;
        continue;
      }
      this.warnAdaptersListenerFailure(error);
    }
    if (invariantFailure !== void 0) throw invariantFailure;
  }
  /** Contained-listener diagnostic shared by the sync and async failure paths. */
  warnAdaptersListenerFailure(error) {
    this.ctx.logger.warn("llm: an llm/adapters-updated listener failed");
    this.ctx.logger.warn(error);
  }
  /**
  * Register an adapter for the given provider routes. Throws `LlmError` with code
  * `DUPLICATE_ADAPTER` if any provider already has an adapter (all-or-nothing).
  * Disposed with the fiber.
  * @param providers - every provider route this adapter should serve.
  * @param adapter - the adapter that streams calls for those providers.
  * @returns the disposer, carrying {@link AdapterRegistrationHandle.replace}.
  */
  registerAdapter(providers, adapter) {
    const owned = /* @__PURE__ */ new Set();
    let released = false;
    const dispose = this.ctx.effect(function* () {
      if (providers.length === 0) throw new LlmError("an adapter must register at least one provider", "INVALID_ADAPTER");
      this.commitRoutes(owned, this.prepareRoutes(providers, adapter, owned));
      yield () => {
        released = true;
        for (const provider of owned) this.adapters.delete(provider);
        owned.clear();
        this.emitAdaptersUpdated();
      };
    }.bind(this), "llm.registerAdapter()");
    const handle = (() => void dispose());
    handle.replace = (next) => {
      if (released) throw new LlmError("a disposed adapter registration cannot replace its routes", "REGISTRATION_DISPOSED");
      this.commitRoutes(owned, this.prepareRoutes(next, adapter, owned));
    };
    return handle;
  }
  /**
  * Validate one candidate route set for `adapter`, treating routes this
  * registration already holds as available. Nothing is mutated: a rejected
  * candidate leaves the registry exactly as it was.
  */
  prepareRoutes(providers, adapter, owned) {
    const unique = /* @__PURE__ */ new Set();
    const registrations = [];
    for (const provider of providers) {
      if (provider.length === 0) throw new LlmError("adapter provider names must be non-empty", "INVALID_ADAPTER");
      if (unique.has(provider) || this.adapters.has(provider) && !owned.has(provider)) throw new LlmError(`an adapter for provider "${provider}" is already registered`, "DUPLICATE_ADAPTER");
      const info = adapter.providerInfo(provider);
      if (typeof info.id !== "string" || info.id !== provider || typeof info.name !== "string" || info.name.length === 0) throw new LlmError(`adapter metadata for provider "${provider}" must preserve its id and have a non-empty name`, "INVALID_ADAPTER");
      unique.add(provider);
      const retryPolicy = adapter.providerRetryPolicy(provider) ?? resolveRetryPolicy(void 0, `llm: provider "${provider}" retryPolicy`);
      registrations.push({
        adapter,
        provider: {
          id: info.id,
          name: info.name
        },
        retryPolicy
      });
    }
    return registrations;
  }
  /**
  * Swap this registration's routes for the prepared ones in one synchronous
  * section, so no observer can see the registry between the release and the
  * re-registration. The route set's one mutation point is also where
  * `llm/adapters-updated` is published, so a `replace` announces itself
  * exactly like a first registration.
  */
  commitRoutes(owned, registrations) {
    for (const provider of owned) this.adapters.delete(provider);
    owned.clear();
    for (const registration of registrations) {
      this.adapters.set(registration.provider.id, registration);
      owned.add(registration.provider.id);
    }
    this.emitAdaptersUpdated();
  }
  /**
  * Describe provider routes with a registered adapter.
  * @returns detached provider metadata in registration order.
  */
  listProviders() {
    return [...this.adapters.values()].map(({ provider }) => ({ ...provider }));
  }
  /**
  * Declare provider routes an adapter plugin can activate through
  * configuration. Registration is all-or-nothing: an empty list, invalid
  * entry, or a provider already declared by any registration throws
  * `LlmError` without registering the rest. Disposed with the fiber.
  * @param entries - every configurable provider this plugin owns.
  * @returns a handle that withdraws all of them, and can atomically replace them.
  */
  registerConfigurableProviders(entries2) {
    let held = [];
    let disposed = false;
    const commit = (candidates) => {
      const detached = [];
      const own = new Set(held.map((entry) => entry.provider));
      for (const entry of candidates) {
        if (entry.provider.length === 0 || entry.displayName.length === 0 || entry.settingsNs.length === 0) throw new LlmError("configurable providers need a non-empty provider, displayName, and settingsNs", "INVALID_DIRECTORY");
        if (entry.settingsPath.some((segment) => segment.length === 0)) throw new LlmError(`configurable provider "${entry.provider}" has an empty settingsPath segment`, "INVALID_DIRECTORY");
        if (this.directory.has(entry.provider) && !own.has(entry.provider) || detached.some((seen) => seen.provider === entry.provider)) throw new LlmError(`configurable provider "${entry.provider}" is already declared`, "DUPLICATE_DIRECTORY");
        detached.push({
          ...entry,
          settingsPath: [...entry.settingsPath]
        });
      }
      for (const entry of held) this.directory.delete(entry.provider);
      for (const entry of detached) this.directory.set(entry.provider, entry);
      held = detached;
      this.emitAdaptersUpdated();
    };
    const dispose = this.ctx.effect(function* () {
      if (entries2.length === 0) throw new LlmError("a configurable-provider registration must declare at least one provider", "INVALID_DIRECTORY");
      commit(entries2);
      yield () => {
        disposed = true;
        for (const entry of held) this.directory.delete(entry.provider);
        held = [];
        this.emitAdaptersUpdated();
      };
    }.bind(this), "llm.registerConfigurableProviders()");
    const handle = (() => void dispose());
    handle.replace = (next) => {
      if (disposed) throw new LlmError("this configurable-provider registration was disposed", "REGISTRATION_DISPOSED");
      commit(next);
    };
    return handle;
  }
  /**
  * List every declared configurable provider, registered or dormant.
  * @returns detached directory entries in declaration order.
  */
  listConfigurableProviders() {
    return [...this.directory.values()].map((entry) => ({
      ...entry,
      settingsPath: [...entry.settingsPath]
    }));
  }
  /**
  * Offer to interrogate provider endpoints on behalf of the settings
  * namespace this plugin owns. The namespace is the key because that is what
  * a configuration surface already holds from the configurable-provider
  * directory, and because a provider being *added* has no route to name yet.
  * Disposed with the fiber.
  * @param settingsNs - the namespace whose profiles this discovery serves.
  * @param discover - interrogates one endpoint; must honor `request.signal`.
  * @returns the disposer that withdraws the offer.
  */
  registerModelDiscovery(settingsNs, discover) {
    const dispose = this.ctx.effect(function* () {
      if (settingsNs.length === 0) throw new LlmError("model discovery needs a non-empty settings namespace", "INVALID_DISCOVERY");
      if (this.discoveries.has(settingsNs)) throw new LlmError(`model discovery for "${settingsNs}" is already registered`, "DUPLICATE_DISCOVERY");
      this.discoveries.set(settingsNs, discover);
      yield () => {
        this.discoveries.delete(settingsNs);
      };
    }.bind(this), "llm.registerModelDiscovery()");
    return () => void dispose();
  }
  /**
  * Interrogate one provider endpoint for the models it advertises. The
  * request describes a draft, not a stored route, so nothing here reads or
  * writes settings or credentials — the caller owns both, and the reply is
  * candidate metadata a surface may offer for adoption.
  * @param settingsNs - namespace whose registered discovery serves this draft.
  * @param request - the endpoint, protocol, and one-shot credential to use.
  * @returns the advertised models, deduplicated in endpoint order.
  */
  async discoverModels(settingsNs, request) {
    const discover = this.discoveries.get(settingsNs);
    if (discover === void 0) throw new LlmError(`no model discovery is registered for "${settingsNs}"`, "NO_DISCOVERY");
    if ((request.provider ?? "").length === 0 && (request.baseURL ?? "").length === 0) throw new LlmError("model discovery needs a provider route or a baseURL", "INVALID_DISCOVERY");
    const discovered = await discover(request);
    const seen = /* @__PURE__ */ new Set();
    const models = [];
    for (const model of discovered) {
      if (typeof model.id !== "string" || model.id.length === 0 || seen.has(model.id)) continue;
      seen.add(model.id);
      models.push({
        id: model.id,
        ...model.name === void 0 ? {} : { name: model.name },
        ...model.contextWindow === void 0 ? {} : { contextWindow: model.contextWindow },
        ...model.maxTokens === void 0 ? {} : { maxTokens: model.maxTokens }
      });
    }
    return models;
  }
  /**
  * Resolve the retry policy captured when one provider route was registered.
  * @param provider - registered provider route to inspect.
  * @returns the provider-owned policy, with normal defaults already resolved.
  */
  providerRetryPolicy(provider) {
    return this.registration(provider).retryPolicy;
  }
  /** Detach typed adapter-owned modality metadata. */
  detachedModalities(modalities) {
    return modalities === void 0 ? void 0 : [...modalities];
  }
  /**
  * Discover models advertised by one registered provider. Catalog membership
  * is advisory and never changes routing or request validation.
  * @param provider - registered provider route to inspect.
  * @returns detached model metadata in adapter-preferred order.
  */
  async listModels(provider) {
    const models = await this.registration(provider).adapter.listModels(provider);
    const seen = /* @__PURE__ */ new Set();
    return models.map((model) => {
      if (typeof model.provider !== "string" || model.provider !== provider || typeof model.id !== "string" || model.id.length === 0 || typeof model.name !== "string" || model.name.length === 0 || model.description !== void 0 && typeof model.description !== "string" || seen.has(model.id)) throw new LlmError(`adapter returned invalid or duplicate model metadata for provider "${provider}"`, "INVALID_CATALOG");
      seen.add(model.id);
      const inputModalities = this.detachedModalities(model.inputModalities);
      return {
        provider: model.provider,
        id: model.id,
        name: model.name,
        ...model.description === void 0 ? {} : { description: model.description },
        ...inputModalities === void 0 ? {} : { inputModalities }
      };
    });
  }
  /**
  * Resolve and validate all metadata from the adapter that owns one exact
  * route. The result is detached from adapter-owned objects; catalog
  * membership remains advisory and does not control request routing.
  * @param provider - registered provider route to inspect.
  * @param model - exact model id passed to the adapter.
  * @param signal - optional cancellation for adapter-owned asynchronous lookup.
  * @returns exact model identity plus available context and reasoning metadata.
  */
  async resolveModelInfo(provider, model, signal) {
    return this.resolveModelInfoFor(this.registration(provider), model, signal);
  }
  async resolveModelInfoFor(registration, model, signal) {
    const provider = registration.provider.id;
    const resolved = await registration.adapter.resolveModel(provider, model, signal);
    if (typeof resolved.provider !== "string" || resolved.provider !== provider || typeof resolved.id !== "string" || resolved.id !== model || typeof resolved.name !== "string" || resolved.name.length === 0 || resolved.description !== void 0 && typeof resolved.description !== "string") throw new LlmError(`adapter returned invalid exact model metadata for provider "${provider}" model "${model}"`, "INVALID_MODEL_INFO");
    const context = resolved.context;
    if (context !== void 0 && (!Number.isInteger(context.contextWindow) || context.contextWindow <= 0)) throw new LlmError(`adapter returned invalid context metadata for provider "${provider}" model "${model}"`, "INVALID_MODEL_CONTEXT");
    const inputModalities = this.detachedModalities(resolved.inputModalities);
    const defaultMaxTokens = resolved.defaultMaxTokens;
    if (defaultMaxTokens !== void 0 && (!Number.isSafeInteger(defaultMaxTokens) || defaultMaxTokens <= 0)) throw new LlmError(`adapter returned invalid default maxTokens for provider "${provider}" model "${model}"`, "INVALID_MODEL_MAX_TOKENS");
    const info = {
      provider,
      id: model,
      name: resolved.name,
      ...resolved.description === void 0 ? {} : { description: resolved.description },
      ...inputModalities === void 0 ? {} : { inputModalities },
      ...context === void 0 ? {} : { context: { contextWindow: context.contextWindow } },
      ...defaultMaxTokens === void 0 ? {} : { defaultMaxTokens }
    };
    const reasoning = resolved.reasoning;
    if (reasoning === void 0) return info;
    if (reasoning.efforts.length === 0) throw new LlmError(`adapter returned invalid reasoning metadata for provider "${provider}" model "${model}"`, "INVALID_MODEL_REASONING");
    const seen = /* @__PURE__ */ new Set();
    const efforts = reasoning.efforts.map((effort) => {
      if (typeof effort.id !== "string" || effort.id.length === 0 || typeof effort.name !== "string" || effort.name.length === 0 || effort.description !== void 0 && typeof effort.description !== "string" || seen.has(effort.id)) throw new LlmError(`adapter returned invalid or duplicate reasoning effort metadata for provider "${provider}" model "${model}"`, "INVALID_MODEL_REASONING");
      seen.add(effort.id);
      return {
        id: effort.id,
        name: effort.name,
        ...effort.description === void 0 ? {} : { description: effort.description }
      };
    });
    if (reasoning.defaultEffort !== void 0 && !seen.has(reasoning.defaultEffort)) throw new LlmError(`adapter returned an unknown default reasoning effort for provider "${provider}" model "${model}"`, "INVALID_MODEL_REASONING");
    return {
      ...info,
      reasoning: {
        efforts,
        ...reasoning.defaultEffort === void 0 ? {} : { defaultEffort: reasoning.defaultEffort }
      }
    };
  }
  /**
  * Validate a conversation call config against its exact model capability and
  * materialize adapter-configured defaults. Unsupported explicit efforts
  * reject before provider I/O; no clamping or aliasing is performed. This
  * standalone query does not bind a later dispatch; use {@link prepareCall}
  * when logging and streaming must share one adapter registration.
  * @param config - provider/model route and optional request controls.
  * @param signal - optional cancellation for adapter-owned capability lookup.
  * @returns a detached config only when a default must be materialized.
  */
  async resolveCallConfig(config, signal) {
    return (await this.resolveCallFor(this.registration(config.provider), config, signal)).config;
  }
  async resolveCallFor(registration, config, signal) {
    const info = await this.resolveModelInfoFor(registration, config.model, signal);
    const defaulted = config.maxTokens === void 0 && info.defaultMaxTokens !== void 0 ? {
      ...config,
      maxTokens: info.defaultMaxTokens
    } : config;
    const reasoning = info.reasoning;
    const requested = defaulted.reasoningEffort;
    let resolvedConfig = defaulted;
    if (reasoning === void 0) {
      if (requested !== void 0) throw new LlmError(`provider "${config.provider}" model "${config.model}" does not support reasoning effort "${requested}"`, "UNSUPPORTED_REASONING_EFFORT");
    } else {
      const effective = requested ?? reasoning.defaultEffort;
      if (effective !== void 0) {
        if (!reasoning.efforts.some((effort) => effort.id === effective)) throw new LlmError(`provider "${config.provider}" model "${config.model}" does not support reasoning effort "${effective}"`, "UNSUPPORTED_REASONING_EFFORT");
        if (requested !== effective) resolvedConfig = {
          ...defaulted,
          reasoningEffort: effective
        };
      }
    }
    return {
      config: resolvedConfig,
      ...info.context === void 0 ? {} : { context: info.context }
    };
  }
  /**
  * Resolve one call under its current adapter registration. The returned
  * one-shot handle keeps that registration across header logging and dispatch,
  * so HMR cannot combine one adapter's capability result with another adapter.
  * @param config - provider/model route and optional request controls.
  * @param signal - optional cancellation for adapter-owned capability lookup.
  * @returns a prepared config and its registration-bound stream entry point.
  */
  async prepareCall(config, signal) {
    const registration = this.registration(config.provider);
    const resolved = await this.resolveCallFor(registration, config, signal);
    const resolvedConfig = deepFreeze(structuredClone(resolved.config));
    const context = resolved.context === void 0 ? void 0 : deepFreeze(structuredClone(resolved.context));
    const adapterDefaults = deepFreeze({
      ...config.reasoningEffort === void 0 && resolvedConfig.reasoningEffort !== void 0 ? { reasoningEffort: true } : {},
      ...config.maxTokens === void 0 && resolvedConfig.maxTokens !== void 0 ? { maxTokens: true } : {}
    });
    let dispatched = false;
    return Object.freeze({
      config: resolvedConfig,
      retryPolicy: registration.retryPolicy,
      adapterDefaults,
      ...context === void 0 ? {} : { context },
      stream: (options) => {
        if (dispatched) throw new LlmError("a prepared LLM call can only be dispatched once", "INVALID_PREPARED_CALL");
        if (!callConfigEquals(options, resolvedConfig)) throw new LlmError("prepared LLM call config changed before adapter dispatch", "INVALID_PREPARED_CALL");
        dispatched = true;
        return this.streamWithRegistration(options, {
          registration,
          config: resolvedConfig
        });
      }
    });
  }
  registration(provider) {
    const registration = this.adapters.get(provider);
    if (!registration) throw new LlmError(`no adapter registered for provider "${provider}"`, "NO_ADAPTER");
    return registration;
  }
  /** Remove replay state whose historical route is owned by another adapter. */
  forAdapter(options, adapter) {
    const messages = options.messages.map((message) => {
      const source = message.source;
      if (message.role !== "assistant" || source.kind !== "model" || source.replayState === void 0) return message;
      if (this.adapters.get(source.provider)?.adapter === adapter) return message;
      return freezeMessage({
        ...message,
        source: {
          kind: "model",
          provider: source.provider,
          model: source.model
        }
      });
    });
    if (messages.every((message, index) => message === options.messages[index])) return options;
    const filtered = {
      ...options,
      messages
    };
    return Object.isFrozen(options) ? deepFreeze(filtered) : filtered;
  }
  /**
  * Final adapter boundary. Adapter selection, dispatch, iterator construction,
  * and iteration failures become one terminal failure chunk. Middleware and
  * downstream consumer failures remain thrown plugin or consumer errors.
  */
  async *adapterStream(options, prepared) {
    let iterator;
    try {
      const registration = prepared?.registration ?? this.registration(options.provider);
      const resolvedConfig = prepared === void 0 ? (await this.resolveCallFor(registration, options, options.signal)).config : prepared.config;
      if (prepared !== void 0 && !callConfigEquals(options, resolvedConfig)) throw new LlmError("prepared LLM call config changed before adapter dispatch", "INVALID_PREPARED_CALL");
      const resolvedOptions = callConfigEquals(options, resolvedConfig) ? options : Object.isFrozen(options) ? deepFreeze({
        ...options,
        ...resolvedConfig
      }) : {
        ...options,
        ...resolvedConfig
      };
      const adapter = registration.adapter;
      iterator = adapter.stream(this.forAdapter(resolvedOptions, adapter))[Symbol.asyncIterator]();
    } catch (error) {
      yield adapterFailureChunk(error, options.signal);
      return;
    }
    let completed = false;
    try {
      while (true) {
        let item;
        try {
          const next = await iterator.next();
          item = next.done ? { done: true } : {
            done: false,
            value: next.value
          };
        } catch (error) {
          completed = true;
          yield adapterFailureChunk(error, options.signal);
          return;
        }
        if (item.done) {
          completed = true;
          return;
        }
        yield item.value;
      }
    } finally {
      if (!completed) {
        const close = iterator.return?.bind(iterator);
        if (close) await close();
      }
    }
  }
  /**
  * Stream one model call as raw chunks (token-level deltas). Replay state is
  * retained only when the same adapter instance owns its historical provider
  * and the target provider. Final adapter selection remains fixed through
  * asynchronous exact-model resolution and dispatch. Adapter selection,
  * dispatch, and iteration failures become terminal `error` or `aborted`
  * finish chunks; middleware, nested-call, cleanup, and consumer failures
  * remain thrown.
  * @param options - the full request; `options.provider` selects the adapter.
  * @returns the chunk stream, possibly wrapped by `llm/stream` listeners.
  */
  stream(options) {
    return this.streamWithRegistration(options);
  }
  streamWithRegistration(options, prepared) {
    return this.ctx.waterfall(this, "llm/stream", options, () => this.adapterStream(options, prepared));
  }
};
function adapterFailureChunk(error, signal) {
  const failure = normalizeLlmFailure(error);
  return {
    type: "finish",
    reason: signal?.aborted || failure.code === "ABORTED" ? {
      kind: "aborted",
      failure
    } : {
      kind: "error",
      failure
    }
  };
}

// ../../packages/harness-base/src/approval.ts
var ApprovalService = class {
  constructor(store) {
    this.store = store;
    this.grants = store.load();
  }
  store;
  grants;
  sessionAllow = false;
  getGrant(pluginId) {
    return this.grants[pluginId];
  }
  /** 全部授权（grant 管理界面用） */
  listGrants() {
    return Object.entries(this.grants).map(([pluginId, grant]) => ({ pluginId, grant }));
  }
  grant(pluginId, mode, version2) {
    this.grants[pluginId] = { mode, version: version2, grantedAt: Date.now() };
    this.store.save(this.grants);
  }
  revoke(pluginId) {
    delete this.grants[pluginId];
    this.store.save(this.grants);
  }
  isGranted(pluginId, version2) {
    const g = this.grants[pluginId];
    if (!g) return false;
    return g.mode === "all" || g.version === version2;
  }
  setSessionAllow(v2) {
    this.sessionAllow = v2;
  }
  isSessionAllowed() {
    return this.sessionAllow;
  }
  /** 写操作决策：会话级开关优先，否则按默认模式 */
  decideWrite(defaultMode) {
    if (this.sessionAllow) return "allow";
    return defaultMode;
  }
};

// ../../packages/harness-base/src/sandbox.ts
var path = __toESM(require("path"));
function isInside(parent, child) {
  const rel = path.relative(parent, child);
  return rel === "" || !rel.startsWith("..") && !path.isAbsolute(rel);
}
function resolveTarget(scope, target) {
  return path.isAbsolute(target) ? path.normalize(target) : path.resolve(scope.vaultRoot, target);
}
function decideSandbox(scope, target, action) {
  const abs = resolveTarget(scope, target);
  if (!isInside(scope.vaultRoot, abs)) {
    return { allowed: false, reason: `\u8D85\u51FA vault \u8303\u56F4: ${abs}` };
  }
  if (action === "read") return { allowed: true };
  if (isInside(scope.dataDir, abs)) return { allowed: true };
  if (isInside(scope.pluginsDir, abs)) return { allowed: true };
  if (isInside(scope.tempDir, abs)) return { allowed: true };
  const configDirAbs = path.join(scope.vaultRoot, scope.configDir);
  if (isInside(configDirAbs, abs)) {
    return { allowed: false, reason: `\u7981\u6B62\u4FEE\u6539 Obsidian \u914D\u7F6E\u76EE\u5F55\uFF08${scope.configDir}/\uFF09` };
  }
  return { allowed: true };
}
var SandboxPolicy = class {
  constructor(scope) {
    this.scope = scope;
  }
  scope;
  decide(target, action) {
    return decideSandbox(this.scope, target, action);
  }
  assertWrite(target) {
    const d = this.decide(target, "write");
    if (!d.allowed) throw new Error(`\u6C99\u7BB1\u62D2\u7EDD\u5199 ${target}: ${d.reason}`);
  }
};

// ../../packages/harness-base/src/session-log.ts
var fs = __toESM(require("fs"));
var path2 = __toESM(require("path"));
function sanitize(id) {
  return id.replace(/[^\w-]/g, "-");
}
function selectSessionsToPrune(list, now, retentionDays) {
  if (retentionDays <= 0) return [];
  const cutoff = now - retentionDays * 864e5;
  return list.filter((s) => s.updatedAt < cutoff).map((s) => s.id);
}
var SessionLog = class {
  constructor(dir) {
    this.dir = dir;
  }
  dir;
  chain = Promise.resolve();
  file(sessionId) {
    return path2.join(this.dir, `${sanitize(sessionId)}.jsonl`);
  }
  /** 追加一条事件；写入串行化，返回本次写入的 promise */
  append(sessionId, event) {
    const op = this.chain.then(async () => {
      await fs.promises.mkdir(this.dir, { recursive: true });
      const line = JSON.stringify({ ...event, sessionId });
      await fs.promises.appendFile(this.file(sessionId), line + "\n", "utf8");
    });
    this.chain = op.then(
      () => {
      },
      () => {
      }
    );
    return op;
  }
  async read(sessionId) {
    await this.chain;
    let text2;
    try {
      text2 = await fs.promises.readFile(this.file(sessionId), "utf8");
    } catch (err) {
      if (err.code === "ENOENT") return [];
      throw err;
    }
    const events = [];
    for (const line of text2.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      try {
        events.push(JSON.parse(trimmed));
      } catch {
      }
    }
    return events;
  }
  /** 读取会话元信息（首条 session/meta 事件）；无则 undefined */
  async readMeta(sessionId) {
    await this.chain;
    let text2;
    try {
      text2 = await fs.promises.readFile(this.file(sessionId), "utf8");
    } catch (err) {
      if (err.code === "ENOENT") return void 0;
      throw err;
    }
    const first = text2.split("\n").find((l3) => l3.trim());
    if (!first) return void 0;
    try {
      const ev = JSON.parse(first);
      if (ev.type === "session/meta") {
        return { title: ev.title, notePath: ev.notePath, modelId: ev.modelId };
      }
    } catch {
    }
    return void 0;
  }
  async list() {
    await this.chain;
    let names;
    try {
      names = await fs.promises.readdir(this.dir);
    } catch {
      return [];
    }
    const out = [];
    for (const name of names) {
      if (!name.endsWith(".jsonl")) continue;
      const id = name.slice(0, -".jsonl".length);
      try {
        const [stat, events, meta] = await Promise.all([
          fs.promises.stat(path2.join(this.dir, name)),
          this.read(id),
          this.readMeta(id)
        ]);
        out.push({
          id,
          updatedAt: stat.mtimeMs,
          count: events.length,
          title: meta?.title,
          notePath: meta?.notePath,
          modelId: meta?.modelId
        });
      } catch {
      }
    }
    out.sort((a, b2) => b2.updatedAt - a.updatedAt);
    return out;
  }
  async remove(sessionId) {
    await this.chain;
    await fs.promises.rm(this.file(sessionId), { force: true });
  }
};

// ../../packages/harness-base/src/llm.ts
function toWireMessages(messages, system) {
  const out = [];
  if (system) out.push({ role: "system", content: system });
  for (const m2 of messages) {
    if (m2.role === "system") {
      out.push({ role: "system", content: textOf(m2.content) });
    } else if (m2.role === "user" && m2.source.kind === "tool") {
      const resultBlock = m2.content.find((b2) => b2.type === "tool-result");
      const text2 = resultBlock ? textOf(resultBlock.content) : "";
      out.push({ role: "tool", tool_call_id: m2.source.callId, content: text2 });
    } else if (m2.role === "assistant") {
      const wire = { role: "assistant", content: textOf(m2.content) };
      const toolCalls = m2.content.filter((b2) => b2.type === "tool-call").map((b2) => ({
        id: b2.id,
        type: "function",
        function: { name: b2.name, arguments: b2.arguments }
      }));
      if (toolCalls.length) wire.tool_calls = toolCalls;
      out.push(wire);
    } else {
      out.push({ role: "user", content: textOf(m2.content) });
    }
  }
  return out;
}
function textOf(content) {
  return content.filter((b2) => b2.type === "text").map((b2) => b2.text).join("");
}
function toToolSchema(tool) {
  return { name: tool.name, description: tool.description, parameters: tool.input };
}
var DeepSeekAdapter = class extends LlmAdapter {
  constructor(getConfigByProvider) {
    super();
    this.getConfigByProvider = getConfigByProvider;
  }
  getConfigByProvider;
  providerInfo(provider) {
    return { id: provider, name: "DeepSeek (OpenAI \u517C\u5BB9)" };
  }
  async *stream(options) {
    const cfg = this.getConfigByProvider(options.provider);
    const apiKey = assertUsableApiKey(cfg.apiKey, "harness-like", "settings.apiKey");
    const url = cfg.baseURL.replace(/\/+$/, "") + "/chat/completions";
    const body = {
      model: options.model,
      messages: toWireMessages(options.messages, options.system),
      stream: true
    };
    if (options.tools?.length) {
      body.tools = options.tools.map((t2) => ({
        type: "function",
        function: { name: t2.name, description: t2.description, parameters: t2.parameters }
      }));
    }
    if (options.temperature !== void 0) body.temperature = options.temperature;
    if (options.maxTokens) body.max_tokens = options.maxTokens;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
        ...attributionHeaders(),
        ...cfg.extraHeaders ?? {}
      },
      body: JSON.stringify(body),
      signal: options.signal
    });
    if (!res.ok || !res.body) {
      const text2 = await res.text().catch(() => "");
      throw new LlmError(`LLM \u8BF7\u6C42\u5931\u8D25 ${res.status}: ${text2.slice(0, 200)}`, "UPSTREAM", {
        status: res.status
      });
    }
    let textAcc = "";
    let textStarted = false;
    const toolAcc = /* @__PURE__ */ new Map();
    const toolIndex = /* @__PURE__ */ new Map();
    let nextBlockIndex = 1;
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buf = "";
    for (; ; ) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });
      let idx;
      while ((idx = buf.indexOf("\n")) >= 0) {
        const line = buf.slice(0, idx).trim();
        buf = buf.slice(idx + 1);
        if (!line.startsWith("data:")) continue;
        const data = line.slice(5).trim();
        if (data === "[DONE]") continue;
        try {
          const chunk = JSON.parse(data);
          const delta = chunk.choices?.[0]?.delta;
          if (delta?.reasoning_content) {
            options.onThinking?.(delta.reasoning_content);
          }
          if (delta?.content) {
            if (!textStarted) {
              yield { type: "block-start", index: 0, blockType: "text" };
              textStarted = true;
            }
            textAcc += delta.content;
            yield { type: "text-delta", index: 0, text: delta.content };
          }
          if (delta?.tool_calls) {
            for (const tc of delta.tool_calls) {
              const oi = tc.index ?? 0;
              let bi = toolIndex.get(oi);
              if (bi === void 0) {
                bi = nextBlockIndex++;
                toolIndex.set(oi, bi);
                toolAcc.set(oi, { id: "", name: "", args: "" });
                yield { type: "block-start", index: bi, blockType: "tool-call" };
              }
              const cur = toolAcc.get(oi);
              if (tc.id) cur.id = tc.id;
              if (tc.function?.name) cur.name += tc.function.name;
              if (tc.function?.arguments) {
                cur.args += tc.function.arguments;
                yield {
                  type: "tool-call-delta",
                  index: bi,
                  id: cur.id || `call_${oi}`,
                  name: cur.name || void 0,
                  argumentsDelta: tc.function.arguments
                };
              }
            }
          }
        } catch {
        }
      }
    }
    if (textStarted) yield { type: "block-end", index: 0, block: { type: "text", text: textAcc } };
    for (const [oi, cur] of toolAcc) {
      const bi = toolIndex.get(oi);
      yield {
        type: "block-end",
        index: bi,
        block: {
          type: "tool-call",
          id: cur.id || `call_${oi}`,
          name: cur.name,
          arguments: cur.args
        }
      };
    }
    yield {
      type: "finish",
      reason: toolAcc.size ? { kind: "tool-calls" } : { kind: "stop" }
    };
  }
};
function createLlmCaller(llm, cfg) {
  return {
    async call(options) {
      let provider = cfg.defaultProvider();
      let model = cfg.defaultModel();
      if (options.model) {
        const idx = options.model.indexOf("/");
        if (idx > 0) {
          provider = options.model.slice(0, idx);
          model = options.model.slice(idx + 1);
        } else {
          model = options.model;
        }
      }
      const c = cfg.getConfig(provider);
      const system = options.messages[0]?.role === "system" ? options.messages[0].content : void 0;
      const messages = system ? options.messages.slice(1) : options.messages;
      const official = messages.map((m2) => {
        if (m2.role === "system") {
          return createMessage({
            role: "system",
            content: [{ type: "text", text: m2.content ?? "" }],
            source: { kind: "user" }
          });
        }
        if (m2.role === "tool") {
          return createMessage({
            role: "user",
            content: [
              {
                type: "tool-result",
                toolCallId: m2.tool_call_id ?? "",
                content: [{ type: "text", text: m2.content ?? "" }]
              }
            ],
            source: { kind: "tool", callId: m2.tool_call_id ?? "" }
          });
        }
        if (m2.role === "assistant") {
          const blocks = [];
          if (m2.content) blocks.push({ type: "text", text: m2.content });
          if (m2.tool_calls) {
            for (const tc of m2.tool_calls) {
              blocks.push({
                type: "tool-call",
                id: tc.id,
                name: tc.function.name,
                arguments: tc.function.arguments
              });
            }
          }
          return createMessage({
            role: "assistant",
            content: blocks,
            source: { kind: "model", provider, model }
          });
        }
        return createUserMessage({
          content: [{ type: "text", text: m2.content ?? "" }],
          source: { kind: "user" }
        });
      });
      let content = "";
      const toolCalls = /* @__PURE__ */ new Map();
      let finish;
      const chunks = llm.stream({
        provider,
        model,
        system,
        messages: official,
        tools: options.tools.map(toToolSchema),
        temperature: c.temperature,
        maxTokens: c.maxTokens,
        signal: options.signal,
        onThinking: options.onThinking
      });
      for await (const chunk of chunks) {
        if (chunk.type === "text-delta") {
          content += chunk.text;
          options.onDelta?.(chunk.text);
        } else if (chunk.type === "tool-call-delta") {
          const cur = toolCalls.get(chunk.index) ?? { id: "", name: "", arguments: "" };
          if (chunk.id && !cur.id) cur.id = chunk.id;
          if (chunk.name) cur.name += chunk.name;
          cur.arguments += chunk.argumentsDelta;
          toolCalls.set(chunk.index, cur);
        } else if (chunk.type === "block-end" && chunk.block.type === "tool-call") {
          const cur = toolCalls.get(chunk.index) ?? { id: "", name: "", arguments: "" };
          cur.id = chunk.block.id;
          cur.name = chunk.block.name;
          cur.arguments = chunk.block.arguments;
          toolCalls.set(chunk.index, cur);
        } else if (chunk.type === "finish") {
          finish = chunk.reason;
        }
      }
      if (finish?.kind === "error") throw new Error(finish.failure.message);
      if (finish?.kind === "aborted") {
        const err = new Error("\u5DF2\u505C\u6B62");
        err.name = "AbortError";
        throw err;
      }
      return {
        content,
        toolCalls: [...toolCalls.values()].filter((t2) => t2.name)
      };
    }
  };
}

// ../../node_modules/.pnpm/@deepseek-ai+dsh-scope@0.1.0-rc.6_@deepseek-ai+cordis@4.0.1_@deepseek-ai+dsh-invariants_6f3351786c779449c277f079a737f571/node_modules/@deepseek-ai/dsh-scope/lib/index.js
var NamedEntries = class {
  duplicateError;
  data = /* @__PURE__ */ new Map();
  constructor(duplicateError) {
    this.duplicateError = duplicateError;
  }
  /**
  * Insert one unique name.
  * @param name - name unique within this table.
  * @param value - borrowed value to retain.
  * @returns an idempotent undo that removes only this insertion.
  */
  insert(name, value) {
    const data = this.data;
    if (data.has(name)) throw this.duplicateError(name);
    data.set(name, value);
    let active = true;
    return () => {
      if (!active) return;
      active = false;
      data.delete(name);
      if (data.size === 0 && this.data === data) this.data = /* @__PURE__ */ new Map();
    };
  }
  /**
  * Read one named value.
  * @param name - name to resolve.
  * @returns the retained value, or `undefined` when absent.
  */
  get(name) {
    return this.data.get(name);
  }
  /**
  * Test one name for membership.
  * @param name - name to test.
  * @returns whether the table contains that name.
  */
  has(name) {
    return this.data.has(name);
  }
  /**
  * Iterate live names in insertion order.
  * @returns the native live key iterator.
  */
  keys() {
    return this.data.keys();
  }
  /**
  * Iterate live entries in insertion order.
  * @returns the native live entry iterator.
  */
  entries() {
    return this.data.entries();
  }
  /**
  * Iterate live values in insertion order.
  * @returns the native live value iterator.
  */
  values() {
    return this.data.values();
  }
  /**
  * Test whether this table has no entries.
  * @returns whether the table is empty.
  */
  isEmpty() {
    return this.data.size === 0;
  }
};
var AnonymousEntries = class {
  data = /* @__PURE__ */ new Map();
  /**
  * Append one independently owned value.
  * @param value - borrowed value to retain.
  * @returns an idempotent undo for this exact append.
  */
  append(value) {
    const data = this.data;
    const key = /* @__PURE__ */ Symbol();
    data.set(key, value);
    let active = true;
    return () => {
      if (!active) return;
      active = false;
      data.delete(key);
      if (data.size === 0 && this.data === data) this.data = /* @__PURE__ */ new Map();
    };
  }
  /**
  * Iterate live values in insertion order.
  * @returns the native live value iterator.
  */
  values() {
    return this.data.values();
  }
  /**
  * Test whether this table has no entries.
  * @returns whether the table is empty.
  */
  isEmpty() {
    return this.data.size === 0;
  }
};
var ScopedLayers = class {
  createLayer;
  onChange;
  /** The eagerly constructed context-global layer. */
  global;
  scoped = /* @__PURE__ */ new Map();
  constructor(createLayer, onChange) {
    this.createLayer = createLayer;
    this.onChange = onChange;
    this.global = createLayer(void 0);
  }
  /**
  * Read an existing exact-scope overlay. Deliberately chain-blind: callers
  * addressing one scope's OWN contributions (its restrictions, its guards)
  * must not silently pick up an ancestor's — use {@link chainLayers} where
  * inheritance is the point.
  * @param scope - exact scope key; `undefined` denotes no overlay.
  * @returns the existing scoped layer, or `undefined` without creating one.
  */
  peek(scope) {
    if (scope === void 0) return void 0;
    return this.scoped.get(scope);
  }
  /**
  * Existing overlays along the scope's parent chain ({@link scopeChainOf}),
  * farthest ancestor first and the exact scope last, so a caller layering
  * them in order gives the nearest scope the final word.
  * @param scope - viewing scope, or `undefined` for no overlays.
  * @returns the existing layers, nearest last; absent overlays are skipped.
  */
  chainLayers(scope) {
    const layers = [];
    for (const key of scopeChainOf(scope).reverse()) {
      const layer = this.scoped.get(key);
      if (layer !== void 0) layers.push(layer);
    }
    return layers;
  }
  /**
  * Materialize global named entries followed by scope-chain shadows,
  * farthest ancestor first, so the nearest scope's entry wins a name.
  * @param scope - viewing scope, or `undefined` for the global view.
  * @param pick - select the named table from a layer.
  * @returns an insertion-ordered effective map.
  */
  merge(scope, pick2) {
    const merged = new Map(pick2(this.global).entries());
    for (const layer of this.chainLayers(scope)) for (const [name, value] of pick2(layer).entries()) merged.set(name, value);
    return merged;
  }
  /**
  * Attach one synchronous layer mutation to its registration context.
  * @param ctx - context that determines both scope visibility and effect ownership.
  * @param action - atomic mutation returning its synchronous undo.
  * @param options - Cordis effect label and optional change notification.
  * @returns the exact disposer returned by `ctx.effect()`.
  */
  effect(ctx, action, options) {
    const scope = scopeOf(ctx);
    const notify = options.notify ?? true;
    return ctx.effect(function* () {
      let layer;
      let created = false;
      if (scope === void 0) layer = this.global;
      else {
        const existing = this.scoped.get(scope);
        if (existing === void 0) {
          layer = this.createLayer(scope);
          this.scoped.set(scope, layer);
          created = true;
        } else layer = existing;
      }
      let undo;
      try {
        undo = action(layer);
      } catch (error) {
        if (scope !== void 0 && created && layer.isEmpty()) this.scoped.delete(scope);
        throw error;
      }
      yield () => {
        undo();
        if (scope !== void 0 && layer.isEmpty()) this.scoped.delete(scope);
        if (notify) this.onChange();
      };
      if (notify) this.onChange();
    }.bind(this), options.label);
  }
};
var kScope = /* @__PURE__ */ Symbol("dsh.scope");
var carrierKeys = /* @__PURE__ */ new WeakMap();
var scopeParents = /* @__PURE__ */ new WeakMap();
function scopeChainOf(key) {
  const chain = [];
  for (let cursor = key; cursor !== void 0; cursor = scopeParents.get(cursor)) chain.push(cursor);
  return chain;
}
function scopeOf(ctx) {
  return ctx[kScope];
}
function scopeTarget(base, key) {
  const baseFilter = base[Context.filter];
  const carrier = { [Context.filter](ctx) {
    if (baseFilter !== void 0 && !baseFilter.call(base, ctx)) return false;
    const tag = scopeOf(ctx);
    if (tag === void 0) return true;
    for (let cursor = key; cursor !== void 0; cursor = scopeParents.get(cursor)) if (cursor === tag) return true;
    return false;
  } };
  carrierKeys.set(carrier, key);
  return carrier;
}

// ../../node_modules/.pnpm/@deepseek-ai+dsh-session@0.1.0-rc.6_758c671b73b62db0747dfee37fdd5a76/node_modules/@deepseek-ai/dsh-session/lib/index.js
var import_node_path = require("path");
function hasIntrinsicConstructor(prototype, name) {
  const constructor = Object.getOwnPropertyDescriptor(prototype, "constructor")?.value;
  if (typeof constructor !== "function") return false;
  try {
    return constructor.name === name && constructor.prototype === prototype && Function.prototype.toString.call(constructor) === `function ${name}() { [native code] }`;
  } catch {
    return false;
  }
}
function isIntrinsicObjectPrototype(value) {
  return Object.getPrototypeOf(value) === null && hasIntrinsicConstructor(value, "Object");
}
function hasPlainArrayPrototype(value) {
  const prototype = Object.getPrototypeOf(value);
  if (!Array.isArray(prototype) || !hasIntrinsicConstructor(prototype, "Array")) return false;
  const objectPrototype = Object.getPrototypeOf(prototype);
  return typeof objectPrototype === "object" && objectPrototype !== null && isIntrinsicObjectPrototype(objectPrototype);
}
function hasPlainObjectPrototype(value) {
  const prototype = Object.getPrototypeOf(value);
  return prototype === null || typeof prototype === "object" && isIntrinsicObjectPrototype(prototype);
}
function enumerableStringKeys(value) {
  const keys = Reflect.ownKeys(value);
  if (keys.some((key) => typeof key !== "string" || !Object.prototype.propertyIsEnumerable.call(value, key))) return void 0;
  return keys;
}
function walkJsonValue(value, detach) {
  const ancestors = /* @__PURE__ */ new Set();
  let root;
  const assign = (destination, item) => {
    if (destination === void 0) return;
    if (destination.kind === "root") root = item;
    else if (destination.kind === "array") destination.target[destination.index] = item;
    else Object.defineProperty(destination.target, destination.key, {
      value: item,
      enumerable: true,
      configurable: true,
      writable: true
    });
  };
  const tasks = [{
    kind: "visit",
    value,
    ...detach ? { destination: { kind: "root" } } : {}
  }];
  for (let task = tasks.pop(); task !== void 0; task = tasks.pop()) {
    if (task.kind === "leave") {
      ancestors.delete(task.source);
      continue;
    }
    if (task.kind === "array-item") {
      if (!Object.prototype.hasOwnProperty.call(task.source, task.index)) return void 0;
      tasks.push({
        kind: "visit",
        value: task.source[task.index],
        ...task.target === void 0 ? {} : { destination: {
          kind: "array",
          target: task.target,
          index: task.index
        } }
      });
      continue;
    }
    if (task.kind === "object-property") {
      tasks.push({
        kind: "visit",
        value: task.source[task.key],
        ...task.target === void 0 ? {} : { destination: {
          kind: "object",
          target: task.target,
          key: task.key
        } }
      });
      continue;
    }
    const current2 = task.value;
    if (current2 === null) {
      assign(task.destination, null);
      continue;
    }
    if (typeof current2 === "boolean" || typeof current2 === "string") {
      assign(task.destination, current2);
      continue;
    }
    if (typeof current2 === "number") {
      if (!Number.isFinite(current2) || Object.is(current2, -0)) return void 0;
      assign(task.destination, current2);
      continue;
    }
    if (typeof current2 !== "object") return void 0;
    if (ancestors.has(current2)) return void 0;
    if (Array.isArray(current2)) {
      if (!hasPlainArrayPrototype(current2)) return void 0;
      const length = current2.length;
      if (Reflect.ownKeys(current2).length !== length + 1) return void 0;
      const target2 = detach ? [] : void 0;
      if (target2 !== void 0) assign(task.destination, target2);
      ancestors.add(current2);
      tasks.push({
        kind: "leave",
        source: current2
      });
      for (let index = length - 1; index >= 0; index--) tasks.push({
        kind: "array-item",
        source: current2,
        index,
        ...target2 === void 0 ? {} : { target: target2 }
      });
      continue;
    }
    if (!hasPlainObjectPrototype(current2)) return void 0;
    const keys = enumerableStringKeys(current2);
    if (keys === void 0) return void 0;
    const target = detach ? {} : void 0;
    if (target !== void 0) assign(task.destination, target);
    ancestors.add(current2);
    tasks.push({
      kind: "leave",
      source: current2
    });
    for (let index = keys.length - 1; index >= 0; index--) {
      const key = keys[index];
      if (key === void 0) return void 0;
      tasks.push({
        kind: "object-property",
        source: current2,
        key,
        ...target === void 0 ? {} : { target }
      });
    }
  }
  return detach ? root : true;
}
function snapshotJsonValue(value) {
  return walkJsonValue(value, true);
}
function isJsonValue(value) {
  return walkJsonValue(value, false) === true;
}

// ../../node_modules/.pnpm/@deepseek-ai+dsh-tools@0.1.0-rc.6_95d4704a33330068c620f8cbbd0dad9a/node_modules/@deepseek-ai/dsh-tools/lib/index.js
var JsonSchemaError = class extends HarnessError {
  /** Individual schema violations in walk order. */
  violations;
  constructor(violations) {
    super(`unsupported JSON schema: ${violations.join("; ")}`, "UNSUPPORTED_SCHEMA");
    this.name = "JsonSchemaError";
    this.violations = violations;
  }
};
var CONSTRAINT_KEYWORDS = /* @__PURE__ */ new Set([
  "type",
  "oneOf",
  "properties",
  "required",
  "additionalProperties",
  "items",
  "enum",
  "const"
]);
var ANNOTATION_KEYWORDS = /* @__PURE__ */ new Set([
  "description",
  "title",
  "default",
  "examples"
]);
var SCHEMA_TYPES = [
  "object",
  "array",
  "string",
  "number",
  "integer",
  "boolean",
  "null"
];
function hasIntrinsicConstructor2(prototype, name) {
  const constructor = Object.getOwnPropertyDescriptor(prototype, "constructor")?.value;
  if (typeof constructor !== "function") return false;
  try {
    return constructor.name === name && constructor.prototype === prototype && Function.prototype.toString.call(constructor) === `function ${name}() { [native code] }`;
  } catch {
    return false;
  }
}
function isIntrinsicObjectPrototype2(value) {
  return Object.getPrototypeOf(value) === null && hasIntrinsicConstructor2(value, "Object");
}
function isPlainJsonRecord(value) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
  try {
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || typeof prototype === "object" && isIntrinsicObjectPrototype2(prototype);
  } catch {
    return false;
  }
}
function hasPlainArrayPrototype2(value) {
  const prototype = Object.getPrototypeOf(value);
  if (!Array.isArray(prototype) || !hasIntrinsicConstructor2(prototype, "Array")) return false;
  const objectPrototype = Object.getPrototypeOf(prototype);
  return typeof objectPrototype === "object" && objectPrototype !== null && isIntrinsicObjectPrototype2(objectPrototype);
}
function hasOnlyEnumerableStringKeys(value) {
  try {
    return Reflect.ownKeys(value).every((key) => typeof key === "string" && Object.prototype.propertyIsEnumerable.call(value, key));
  } catch {
    return false;
  }
}
function isJsonSchemaRecord(value) {
  return isPlainJsonRecord(value) && hasOnlyEnumerableStringKeys(value);
}
function isPlainJsonArray(value) {
  if (!Array.isArray(value)) return false;
  try {
    if (!hasPlainArrayPrototype2(value) || Reflect.ownKeys(value).length !== value.length + 1) return false;
    for (let index = 0; index < value.length; index++) if (!Object.hasOwn(value, index)) return false;
    return true;
  } catch {
    return false;
  }
}
function isJsonNumber(value) {
  return typeof value === "number" && Number.isFinite(value) && !Object.is(value, -0);
}
function scalarMatches(type, value) {
  switch (type) {
    case "string":
      return typeof value === "string";
    case "number":
      return isJsonNumber(value);
    case "integer":
      return isJsonNumber(value) && Number.isInteger(value);
    case "boolean":
      return typeof value === "boolean";
    case "null":
      return value === null;
    /* v8 ignore next -- JsonSchemaScalarType is closed; this retains compile-time exhaustiveness. */
    default:
      return assertNever(type, "JsonSchemaType");
  }
}
var ONE_OF_SIBLING_KEYWORDS = [
  "properties",
  "required",
  "additionalProperties",
  "items",
  "enum",
  "const"
];
function checkObjectSchemaTail(node, path8, properties, violations) {
  const hasRequired = Object.hasOwn(node, "required");
  const required = hasRequired ? node.required : void 0;
  if (hasRequired) if (!isPlainJsonArray(required) || required.some((entry) => typeof entry !== "string")) violations.push(`${path8}.required must be an array of strings`);
  else {
    const declared = isJsonSchemaRecord(properties) ? properties : {};
    for (const key of required) if (!Object.hasOwn(declared, key)) violations.push(`${path8}.required names "${key}" which is not in properties`);
  }
  if (Object.hasOwn(node, "additionalProperties") && typeof node.additionalProperties !== "boolean") violations.push(`${path8}.additionalProperties must be a boolean`);
}
function checkSchemaNode(root, rootPath, violations, seen) {
  const tasks = [{
    kind: "enter",
    node: root,
    path: rootPath
  }];
  for (let task = tasks.pop(); task !== void 0; task = tasks.pop()) {
    if (task.kind === "leave") {
      seen.delete(task.node);
      continue;
    }
    if (task.kind === "one-of-tail") {
      for (const key of ONE_OF_SIBLING_KEYWORDS) if (Object.hasOwn(task.node, key)) violations.push(`${task.path}.${key} is not supported beside oneOf`);
      continue;
    }
    if (task.kind === "object-tail") {
      checkObjectSchemaTail(task.node, task.path, task.properties, violations);
      continue;
    }
    const { node, path: path8 } = task;
    if (!isJsonSchemaRecord(node)) {
      violations.push(`${path8} must be a schema object`);
      continue;
    }
    if (seen.has(node)) {
      violations.push(`${path8} is circular`);
      continue;
    }
    seen.add(node);
    tasks.push({
      kind: "leave",
      node
    });
    for (const key of Object.keys(node)) {
      if (CONSTRAINT_KEYWORDS.has(key)) continue;
      if (ANNOTATION_KEYWORDS.has(key)) {
        try {
          if (!isJsonValue(node[key])) violations.push(`${path8}.${key} annotation must be lossless JSON data`);
        } catch {
          violations.push(`${path8}.${key} annotation must be lossless JSON data`);
        }
        continue;
      }
      violations.push(`${path8}.${key} is not a supported keyword (subset: type/oneOf/properties/required/additionalProperties/items/enum/const + annotations)`);
    }
    if (Object.hasOwn(node, "description") && typeof node.description !== "string") violations.push(`${path8}.description must be a string`);
    if (Object.hasOwn(node, "title") && typeof node.title !== "string") violations.push(`${path8}.title must be a string`);
    const hasType = Object.hasOwn(node, "type");
    const hasOneOf = Object.hasOwn(node, "oneOf");
    if (hasType && hasOneOf) {
      violations.push(`${path8} cannot declare both type and oneOf`);
      continue;
    }
    if (!hasType && !hasOneOf) {
      for (const key of ONE_OF_SIBLING_KEYWORDS) if (Object.hasOwn(node, key)) violations.push(`${path8}.${key} requires type or oneOf`);
      continue;
    }
    if (hasOneOf) {
      const oneOf = node.oneOf;
      tasks.push({
        kind: "one-of-tail",
        node,
        path: path8
      });
      if (!isPlainJsonArray(oneOf) || oneOf.length < 2) violations.push(`${path8}.oneOf must be an array of at least two schemas`);
      else for (let index = oneOf.length - 1; index >= 0; index--) tasks.push({
        kind: "enter",
        node: oneOf[index],
        path: `${path8}.oneOf[${index}]`
      });
      continue;
    }
    const type = node.type;
    if (typeof type !== "string" || !SCHEMA_TYPES.includes(type)) {
      violations.push(Array.isArray(type) ? `${path8}.type must be a single type string (type arrays are not supported)` : `${path8}.type must be one of ${SCHEMA_TYPES.join("/")}`);
      continue;
    }
    const schemaType = type;
    for (const [key, types] of Object.entries({
      properties: ["object"],
      required: ["object"],
      additionalProperties: ["object"],
      items: ["array"],
      enum: [
        "string",
        "number",
        "integer",
        "boolean",
        "null"
      ],
      const: [
        "string",
        "number",
        "integer",
        "boolean",
        "null"
      ]
    })) if (Object.hasOwn(node, key) && !types.includes(schemaType)) violations.push(`${path8}.${key} is not supported on type "${schemaType}"`);
    switch (schemaType) {
      case "object": {
        const properties = Object.hasOwn(node, "properties") ? node.properties : void 0;
        tasks.push({
          kind: "object-tail",
          node,
          path: path8,
          properties
        });
        if (Object.hasOwn(node, "properties")) if (!isJsonSchemaRecord(properties)) violations.push(`${path8}.properties must be an object of schemas`);
        else {
          const entries2 = Object.entries(properties);
          for (let index = entries2.length - 1; index >= 0; index--) {
            const entry = entries2[index];
            if (entry === void 0) continue;
            tasks.push({
              kind: "enter",
              node: entry[1],
              path: `${path8}.properties.${entry[0]}`
            });
          }
        }
        break;
      }
      case "array":
        if (Object.hasOwn(node, "items")) tasks.push({
          kind: "enter",
          node: node.items,
          path: `${path8}.items`
        });
        break;
      case "string":
      case "number":
      case "integer":
      case "boolean":
      case "null": {
        const hasEnum = Object.hasOwn(node, "enum");
        const allowed = hasEnum ? node.enum : void 0;
        const enumValid = isPlainJsonArray(allowed) && allowed.length > 0 && allowed.every((entry) => scalarMatches(schemaType, entry));
        if (hasEnum && !enumValid) violations.push(`${path8}.enum must be a non-empty array of ${schemaType} values`);
        const hasConst = Object.hasOwn(node, "const");
        const declaredConst = hasConst ? node.const : void 0;
        const constValid = scalarMatches(schemaType, declaredConst);
        if (hasConst) {
          if (!constValid) violations.push(`${path8}.const must be a ${schemaType} value`);
          else if (enumValid && !allowed.includes(declaredConst)) violations.push(`${path8}.const must be one of ${path8}.enum when both are declared`);
        }
        break;
      }
      /* v8 ignore next -- schemaType was narrowed from the closed SCHEMA_TYPES table above. */
      default:
        assertNever(schemaType, "JsonSchemaType");
    }
  }
}
function assertSupportedJsonSchema(schema) {
  const violations = [];
  checkSchemaNode(schema, "schema", violations, /* @__PURE__ */ new Set());
  if (violations.length > 0) throw new JsonSchemaError(violations);
}
function safelyIsJsonValue(value) {
  try {
    return isJsonValue(value);
  } catch {
    return false;
  }
}
function diagnosticPath(path8) {
  return path8 === "" ? "arguments" : path8;
}
function propertyPath(path8, key) {
  return path8 === "" ? key : `${path8}.${key}`;
}
function losslessValueViolation(path8) {
  return [`"${diagnosticPath(path8)}" must be a lossless JSON value`];
}
function appendViolations(target, source) {
  for (const violation of source) target.push(violation);
}
function valueFrame(node, value, path8) {
  return {
    node,
    value,
    path: path8,
    catches: false,
    phase: "start",
    children: [],
    childIndex: 0,
    violations: [],
    tailViolations: [],
    matches: 0
  };
}
function checkScalarValue(node, value, path8) {
  const allowed = Object.hasOwn(node, "enum") ? node.enum : void 0;
  if (allowed !== void 0 && !allowed.includes(value)) return [`"${diagnosticPath(path8)}" must be one of ${JSON.stringify(allowed)}`];
  if (Object.hasOwn(node, "const") && value !== node.const) return [`"${diagnosticPath(path8)}" must be ${JSON.stringify(node.const)}`];
  return [];
}
function checkValue(schema, value, path8) {
  const frames = [valueFrame(schema, value, path8)];
  let rootResult;
  const receive = (result) => {
    const parent = frames.at(-1);
    if (parent === void 0) {
      rootResult = result;
      return;
    }
    if (parent.kind === "oneOf") {
      if (result.length === 0) parent.matches++;
    } else appendViolations(parent.violations, result);
  };
  const finish = (result) => {
    frames.pop();
    receive(result);
  };
  while (frames.length > 0) {
    const frame = frames.at(-1);
    if (frame === void 0) break;
    try {
      if (frame.phase === "children") {
        if (frame.childIndex < frame.children.length) {
          const child = frame.children[frame.childIndex];
          if (child === void 0) throw new Error("missing schema-value child frame");
          frame.childIndex++;
          frames.push(valueFrame(child.node, child.value, child.path));
          continue;
        }
        if (frame.kind === "oneOf") {
          finish(frame.matches === 1 ? [] : [`"${diagnosticPath(frame.path)}" must match exactly one oneOf branch (matched ${frame.matches})`]);
          continue;
        }
        appendViolations(frame.violations, frame.tailViolations);
        if (frame.violations.length > 0) finish(frame.violations);
        else if (frame.kind === "object") finish(safelyIsJsonValue(frame.value) ? [] : [`"${diagnosticPath(frame.path)}" must be a lossless JSON object`]);
        else finish(safelyIsJsonValue(frame.value) ? [] : [`"${diagnosticPath(frame.path)}" must be a dense lossless JSON array`]);
        continue;
      }
      const nodeType = Object.hasOwn(frame.node, "type") ? frame.node.type : void 0;
      frame.catches = !(nodeType !== void 0 && !SCHEMA_TYPES.includes(nodeType));
      const oneOf = Object.hasOwn(frame.node, "oneOf") ? frame.node.oneOf : void 0;
      if (oneOf !== void 0) {
        frame.kind = "oneOf";
        frame.children = Array.from(oneOf, (branch) => ({
          node: branch,
          value: frame.value,
          path: frame.path
        }));
        frame.childIndex = 0;
        frame.matches = 0;
        frame.phase = "children";
        continue;
      }
      if (nodeType === void 0) {
        finish(safelyIsJsonValue(frame.value) ? [] : losslessValueViolation(frame.path));
        continue;
      }
      switch (nodeType) {
        case "object": {
          if (!isPlainJsonRecord(frame.value)) {
            finish([`"${diagnosticPath(frame.path)}" must be an object`]);
            break;
          }
          const properties = Object.hasOwn(frame.node, "properties") ? frame.node.properties ?? {} : {};
          const violations = [];
          const required = Object.hasOwn(frame.node, "required") ? frame.node.required ?? [] : [];
          for (const key of required) if (!Object.hasOwn(frame.value, key) || frame.value[key] === void 0) violations.push(`missing required property "${propertyPath(frame.path, key)}"`);
          const children = [];
          for (const [key, child] of Object.entries(properties)) {
            if (!Object.hasOwn(frame.value, key) || frame.value[key] === void 0) continue;
            children.push({
              node: child,
              value: frame.value[key],
              path: propertyPath(frame.path, key)
            });
          }
          const tailViolations = [];
          if (Object.hasOwn(frame.node, "additionalProperties") && frame.node.additionalProperties === false) {
            for (const key of Object.keys(frame.value)) if (!Object.hasOwn(properties, key)) tailViolations.push(`"${propertyPath(frame.path, key)}" is not a declared property (additionalProperties: false)`);
          }
          frame.kind = "object";
          frame.children = children;
          frame.childIndex = 0;
          frame.violations = violations;
          frame.tailViolations = tailViolations;
          frame.phase = "children";
          break;
        }
        case "array": {
          if (!Array.isArray(frame.value)) {
            finish([`"${diagnosticPath(frame.path)}" must be an array`]);
            break;
          }
          const items = Object.hasOwn(frame.node, "items") ? frame.node.items : void 0;
          const children = items === void 0 ? [] : frame.value.flatMap((entry, index) => [{
            node: items,
            value: entry,
            path: `${frame.path}[${index}]`
          }]);
          frame.kind = "array";
          frame.children = children;
          frame.childIndex = 0;
          frame.violations = [];
          frame.phase = "children";
          break;
        }
        case "string":
          finish(typeof frame.value === "string" ? checkScalarValue(frame.node, frame.value, frame.path) : [`"${diagnosticPath(frame.path)}" must be a string`]);
          break;
        case "number":
          finish(typeof frame.value !== "number" ? [`"${diagnosticPath(frame.path)}" must be a number`] : !isJsonNumber(frame.value) ? [`"${diagnosticPath(frame.path)}" must be a finite JSON number`] : checkScalarValue(frame.node, frame.value, frame.path));
          break;
        case "integer":
          finish(!isJsonNumber(frame.value) || !Number.isInteger(frame.value) ? [`"${diagnosticPath(frame.path)}" must be an integer`] : checkScalarValue(frame.node, frame.value, frame.path));
          break;
        case "boolean":
          finish(typeof frame.value === "boolean" ? checkScalarValue(frame.node, frame.value, frame.path) : [`"${diagnosticPath(frame.path)}" must be a boolean`]);
          break;
        case "null":
          finish(frame.value === null ? checkScalarValue(frame.node, frame.value, frame.path) : [`"${diagnosticPath(frame.path)}" must be null`]);
          break;
        default:
          finish(assertNever(nodeType, "JsonSchemaType"));
      }
    } catch (error) {
      let failed = frames.pop();
      while (failed !== void 0 && !failed.catches) failed = frames.pop();
      if (failed === void 0) throw error;
      receive(losslessValueViolation(failed.path));
    }
  }
  return rootResult ?? losslessValueViolation(path8);
}
function validateJsonSchemaValue(schema, value, path8 = "value") {
  return checkValue(schema, value, path8);
}
var ANNOTATION_KEYS = [
  "description",
  "title",
  "default",
  "examples"
];
function authorError(message) {
  throw new JsonSchemaError([message]);
}
function copyAnnotations(source, target) {
  if (Object.hasOwn(source, "description")) target.description = source.description;
  if (Object.hasOwn(source, "title")) target.title = source.title;
  if (Object.hasOwn(source, "default")) target.default = source.default;
  if (Object.hasOwn(source, "examples")) target.examples = source.examples;
}
function assertAuthorKeys(source, path8, allowed) {
  for (const key of Object.keys(source)) if (!allowed.includes(key)) authorError(`${path8}.${key} is not supported by the value schema DSL`);
}
function assignCompiledNode(destination, node) {
  switch (destination.kind) {
    case "root":
      destination.holder.value = node;
      break;
    case "property":
      Object.defineProperty(destination.target, destination.key, {
        value: node,
        enumerable: true,
        configurable: true,
        writable: true
      });
      break;
    case "item":
      destination.target.items = node;
      break;
    case "one-of":
      destination.target[destination.index] = node;
      break;
  }
}
function assignCompiledPropertyMap(destination, compiled) {
  if (destination.kind === "root") destination.holder.value = compiled;
  else destination.target.properties = compiled.properties;
}
function runSchemaCompiler(initial) {
  const seen = /* @__PURE__ */ new Set();
  const tasks = [initial];
  for (let task = tasks.pop(); task !== void 0; task = tasks.pop()) {
    if (task.kind === "leave") {
      seen.delete(task.input);
      continue;
    }
    if (task.kind === "property-map-tail") {
      if (task.required.length > 0) {
        task.compiled.required = task.required;
        if (task.destination.kind === "object") task.destination.target.required = task.required;
      }
      continue;
    }
    if (task.kind === "property") {
      if (!isJsonSchemaRecord(task.property)) authorError(`${task.path} must be a value schema object`);
      if (Object.hasOwn(task.property, "required") && task.property.required !== true) authorError(`${task.path}.required must be true when present`);
      if (Object.hasOwn(task.property, "required") && task.property.required === true) task.required.push(task.key);
      tasks.push({
        kind: "value",
        input: task.property,
        path: task.path,
        allowRequired: true,
        destination: {
          kind: "property",
          target: task.properties,
          key: task.key
        }
      });
      continue;
    }
    if (task.kind === "property-map") {
      if (!isJsonSchemaRecord(task.input)) authorError(`${task.path} must be an object of value schemas`);
      if (seen.has(task.input)) authorError(`${task.path} is circular`);
      seen.add(task.input);
      const compiled = { properties: {} };
      const required = [];
      assignCompiledPropertyMap(task.destination, compiled);
      tasks.push({
        kind: "leave",
        input: task.input
      });
      tasks.push({
        kind: "property-map-tail",
        compiled,
        required,
        destination: task.destination
      });
      const entries2 = Object.entries(task.input);
      for (let index = entries2.length - 1; index >= 0; index--) {
        const entry = entries2[index];
        if (entry === void 0) continue;
        tasks.push({
          kind: "property",
          property: entry[1],
          path: `${task.path}.${entry[0]}`,
          key: entry[0],
          properties: compiled.properties,
          required
        });
      }
      continue;
    }
    const { input, path: path8 } = task;
    if (!isJsonSchemaRecord(input)) authorError(`${path8} must be a value schema object`);
    if (seen.has(input)) authorError(`${path8} is circular`);
    seen.add(input);
    const authorKeys = [...ANNOTATION_KEYS, ...task.allowRequired ? ["required"] : []];
    const node = {};
    assignCompiledNode(task.destination, node);
    tasks.push({
      kind: "leave",
      input
    });
    if (Object.hasOwn(input, "oneOf")) {
      assertAuthorKeys(input, path8, [
        ...authorKeys,
        "oneOf",
        "type"
      ]);
      if (Object.hasOwn(input, "type")) authorError(`${path8} cannot declare both type and oneOf`);
      if (!isPlainJsonArray(input.oneOf)) authorError(`${path8}.oneOf must be an array of at least two value schemas`);
      const branches = [];
      node.oneOf = branches;
      copyAnnotations(input, node);
      for (let index = input.oneOf.length - 1; index >= 0; index--) tasks.push({
        kind: "value",
        input: input.oneOf[index],
        path: `${path8}.oneOf[${index}]`,
        allowRequired: false,
        destination: {
          kind: "one-of",
          target: branches,
          index
        }
      });
      continue;
    }
    const inputType = Object.hasOwn(input, "type") ? input.type : void 0;
    switch (inputType) {
      case "json":
        assertAuthorKeys(input, path8, [...authorKeys, "type"]);
        copyAnnotations(input, node);
        break;
      case "object":
        assertAuthorKeys(input, path8, [
          ...authorKeys,
          "type",
          "properties",
          "additionalProperties"
        ]);
        if (!Object.hasOwn(input, "additionalProperties") || typeof input.additionalProperties !== "boolean") authorError(`${path8}.additionalProperties must be explicitly true or false`);
        node.type = "object";
        copyAnnotations(input, node);
        node.additionalProperties = input.additionalProperties;
        if (Object.hasOwn(input, "properties")) tasks.push({
          kind: "property-map",
          input: input.properties,
          path: `${path8}.properties`,
          destination: {
            kind: "object",
            target: node
          }
        });
        break;
      case "array":
        assertAuthorKeys(input, path8, [
          ...authorKeys,
          "type",
          "items"
        ]);
        node.type = "array";
        copyAnnotations(input, node);
        if (Object.hasOwn(input, "items")) tasks.push({
          kind: "value",
          input: input.items,
          path: `${path8}.items`,
          allowRequired: false,
          destination: {
            kind: "item",
            target: node
          }
        });
        break;
      case "string":
      case "number":
      case "integer":
      case "boolean":
      case "null":
        assertAuthorKeys(input, path8, [
          ...authorKeys,
          "type",
          "enum",
          "const"
        ]);
        node.type = inputType;
        copyAnnotations(input, node);
        if (Object.hasOwn(input, "enum")) {
          if (!isPlainJsonArray(input.enum)) authorError(`${path8}.enum must be a non-empty array of scalar values`);
          node.enum = Array.from(input.enum, (entry) => entry);
        }
        if (Object.hasOwn(input, "const")) node.const = input.const;
        break;
      default:
        authorError(`${path8}.type must be string/number/integer/boolean/null/array/object/json, or use oneOf`);
    }
  }
}
function compilePropertyMap(input, path8) {
  const holder = {};
  runSchemaCompiler({
    kind: "property-map",
    input,
    path: path8,
    destination: {
      kind: "root",
      holder
    }
  });
  return holder.value ?? authorError(`${path8} did not compile`);
}
function compileValueSchema(input, path8) {
  const holder = {};
  runSchemaCompiler({
    kind: "value",
    input,
    path: path8,
    allowRequired: false,
    destination: {
      kind: "root",
      holder
    }
  });
  return holder.value ?? authorError(`${path8} did not compile`);
}
function valueSchemaSpecToJsonSchema(spec) {
  const schema = compileValueSchema(spec, "schema");
  assertSupportedJsonSchema(schema);
  return schema;
}
function parameterSchemaSpecToJsonSchema(spec) {
  const compiled = compilePropertyMap(spec, "parameters");
  const schema = {
    type: "object",
    properties: compiled.properties,
    ...compiled.required === void 0 ? {} : { required: compiled.required }
  };
  assertSupportedJsonSchema(schema);
  return schema;
}
var ToolArgsError = class extends HarnessError {
  /** Individual violations in schema-walk order. */
  violations;
  constructor(violations) {
    super(`invalid arguments: ${violations.join("; ")}`, "INVALID_ARGS");
    this.name = "ToolArgsError";
    this.violations = violations;
  }
};
function defineTool(options) {
  const userExecute = options.execute;
  const userFinalizeContent = options.finalizeContent;
  const userRender = options.output.render;
  const userPresentationMeta = options.output.presentationMeta;
  const userPresentCall = options.presentCall;
  const userPresentResult = options.presentResult;
  const userIsConcurrencySafe = options.isConcurrencySafe;
  if (options.timeoutMs !== void 0 && (!Number.isFinite(options.timeoutMs) || options.timeoutMs <= 0)) throw new Error(`defineTool(${options.name}): timeoutMs must be a positive finite number`);
  const parameters = parameterSchemaSpecToJsonSchema(options.parameters);
  const outputSchema = valueSchemaSpecToJsonSchema(options.output.schema);
  const validate = (args) => validateJsonSchemaValue(parameters, args, "");
  const tool = {
    name: options.name,
    description: options.description,
    parameters,
    output: {
      schema: outputSchema,
      render(args, value) {
        return userRender(args, value);
      },
      ...userPresentationMeta !== void 0 ? { presentationMeta(args, value) {
        return userPresentationMeta(args, value);
      } } : {}
    },
    ...options.timeoutMs !== void 0 ? { timeoutMs: options.timeoutMs } : {},
    async execute(args, exec) {
      const violations = validate(args);
      if (violations.length > 0) throw new ToolArgsError(violations);
      return userExecute(args, exec);
    }
  };
  if (userFinalizeContent) tool.finalizeContent = (exec, result) => userFinalizeContent(exec, result);
  if (userPresentCall) tool.presentCall = (args) => {
    if (validate(args).length > 0) return void 0;
    return userPresentCall(args);
  };
  if (userPresentResult) tool.presentResult = (args, result) => {
    if (validate(args).length > 0) return void 0;
    return userPresentResult(args, result);
  };
  if (userIsConcurrencySafe) tool.isConcurrencySafe = (args) => {
    if (validate(args).length > 0) return false;
    return userIsConcurrencySafe(args);
  };
  return tool;
}
var RUN_CODE_NAME = "run_code";
var TYPESCRIPT_FLAVOR = {
  description: "Execute a TypeScript program against the available tools. Takes two required arguments: `code`, the BODY of an async function (erasable syntax only; top-level `await` and `return` work), and `description`, a short summary of what the program does. Call tools as `await tools.name(args)` per the declarations in the system prompt. Only what you print or return comes back \u2014 curate it.",
  codeDescription: "The program: the body of an async TypeScript function."
};
var RUN_CODE_FLAVORS = {
  typescript: TYPESCRIPT_FLAVOR,
  python: {
    description: "Execute a Python program against the available tools. Takes two required arguments: `code`, the BODY of an async function (top-level `await` and `return` work), and `description`, a short summary of what the program does. Call tools as `await tools.name(args)` per the declarations in the system prompt. Answer with `print(...)` and/or `return <value>` \u2014 only that comes back, so curate it.",
    codeDescription: "The program: the body of an async Python function."
  }
};
var RUN_CODE_DESCRIPTION_PARAM_DESCRIPTION = 'Clear, concise description of what this program does in active voice, 5-10 words (shown in the UI). Examples: "Count TODO markers across packages"; "Read failing test and its fixture"; "Rename config key in every cordis.yml".';
function resolveFlavor(peekRuntime) {
  const runtime = peekRuntime();
  if (runtime === void 0) return TYPESCRIPT_FLAVOR;
  const flavor = RUN_CODE_FLAVORS[runtime.language];
  if (!Object.hasOwn(RUN_CODE_FLAVORS, runtime.language) || flavor === void 0) {
    const known = Object.keys(RUN_CODE_FLAVORS).map((name) => JSON.stringify(name)).join(", ");
    throw new Error(`dsh-tools: no run_code schema flavor registered for runtime language ${JSON.stringify(runtime.language)} (known: ${known})`);
  }
  return flavor;
}
var CodeRunFailedError = class extends HarnessError {
  constructor(message) {
    super(message, "CODE_RUN_FAILED");
    this.name = "CodeRunFailedError";
  }
};
function jsonNormalizeArgs(value) {
  let snapshot;
  try {
    snapshot = snapshotJsonValue(value);
  } catch (error) {
    throw new Error(`tool arguments must be lossless JSON: ${error instanceof Error ? error.message : String(error)}`);
  }
  if (snapshot === void 0) throw new Error("tool arguments must be lossless JSON (call the tool with an arguments object, e.g. `{}`)");
  const logged = snapshotJsonValue(snapshot);
  if (logged === void 0) throw new Error("tool arguments could not be detached for durable logging");
  return {
    dispatched: snapshot,
    logged
  };
}
var JSON_INDENT = "  ";
var MAX_JSON_INDENT_CHARS = 10;
function renderJsonValue(value) {
  const chunks = [];
  const tasks = [{
    kind: "value",
    value,
    depth: 0,
    compact: false
  }];
  for (let task = tasks.pop(); task !== void 0; task = tasks.pop()) {
    if (task.kind === "text") {
      chunks.push(task.text);
      continue;
    }
    const current2 = task.value;
    if (current2 === null || typeof current2 === "boolean" || typeof current2 === "number") {
      chunks.push(String(current2));
      continue;
    }
    if (typeof current2 === "string") {
      chunks.push(JSON.stringify(current2));
      continue;
    }
    const compact = task.compact || (task.depth + 1) * 2 > MAX_JSON_INDENT_CHARS;
    const childDepth = task.depth + 1;
    if (Array.isArray(current2)) {
      chunks.push("[");
      if (current2.length === 0) {
        chunks.push("]");
        continue;
      }
      tasks.push({
        kind: "text",
        text: compact ? "]" : `
${JSON_INDENT.repeat(task.depth)}]`
      });
      for (let index = current2.length - 1; index >= 0; index--) {
        const item = current2[index];
        if (item === void 0) throw new Error("cannot render a sparse JSON array");
        tasks.push({
          kind: "value",
          value: item,
          depth: childDepth,
          compact
        });
        tasks.push({
          kind: "text",
          text: compact ? index === 0 ? "" : "," : `${index === 0 ? "\n" : ",\n"}${JSON_INDENT.repeat(childDepth)}`
        });
      }
      continue;
    }
    const keys = Object.keys(current2);
    chunks.push("{");
    if (keys.length === 0) {
      chunks.push("}");
      continue;
    }
    tasks.push({
      kind: "text",
      text: compact ? "}" : `
${JSON_INDENT.repeat(task.depth)}}`
    });
    for (let index = keys.length - 1; index >= 0; index--) {
      const key = keys[index];
      if (key === void 0) throw new Error("cannot render a missing JSON object key");
      const item = current2[key];
      if (item === void 0) throw new Error("cannot render an undefined JSON object property");
      tasks.push({
        kind: "value",
        value: item,
        depth: childDepth,
        compact
      });
      tasks.push({
        kind: "text",
        text: compact ? `${index === 0 ? "" : ","}${JSON.stringify(key)}:` : `${index === 0 ? "\n" : ",\n"}${JSON_INDENT.repeat(childDepth)}${JSON.stringify(key)}: `
      });
    }
  }
  return chunks.join("");
}
function renderValue(value) {
  return typeof value === "string" ? value : renderJsonValue(value);
}
function createRunCodeTool(registry, options) {
  const { requireRuntime, peekRuntime, maxParallel, shapeDispatchLog } = options;
  const definition = defineTool({
    name: RUN_CODE_NAME,
    description: TYPESCRIPT_FLAVOR.description,
    parameters: {
      code: {
        type: "string",
        required: true,
        description: TYPESCRIPT_FLAVOR.codeDescription
      },
      description: {
        type: "string",
        required: true,
        description: RUN_CODE_DESCRIPTION_PARAM_DESCRIPTION
      }
    },
    output: {
      schema: {
        type: "object",
        additionalProperties: false,
        properties: {
          logs: {
            type: "array",
            required: true,
            items: { type: "string" }
          },
          result: { type: "json" }
        }
      },
      render: (_args, value) => {
        const rendered = value.result === void 0 ? "" : renderValue(value.result);
        const parts = [value.logs.join("\n"), rendered].filter((part) => part.length > 0);
        return [{
          type: "text",
          text: parts.length > 0 ? parts.join("\n") : "(run_code completed with no output)"
        }];
      }
    },
    async execute(args, exec) {
      if (args.description.trim().length === 0) throw new Error("invalid description: expected a non-empty string");
      const runtime = requireRuntime();
      const runController = new AbortController();
      const onOuterAbort = () => {
        runController.abort(exec.signal.reason);
      };
      exec.signal.addEventListener("abort", onOuterAbort, { once: true });
      let dispatches = 0;
      const pendingQueue = [];
      const inFlight = /* @__PURE__ */ new Set();
      const logWork = /* @__PURE__ */ new Set();
      const commitQueue = [];
      let exclusiveActive = false;
      let driving = false;
      let driverRun = Promise.resolve();
      let wake;
      const wakeup = () => {
        const release = wake;
        wake = void 0;
        release?.();
      };
      const drive = () => {
        if (driving) return driverRun;
        driving = true;
        driverRun = (async () => {
          try {
            for (; ; ) {
              const signal = new Promise((resolve3) => {
                wake = resolve3;
              });
              const commitHead = commitQueue[0];
              if (commitHead !== void 0 && commitHead.settled) {
                commitQueue.shift();
                await commitHead.commit();
                if (commitHead.mode === "exclusive") exclusiveActive = false;
                continue;
              }
              const head = pendingQueue[0];
              if (head !== void 0) {
                if (runController.signal.aborted) {
                  pendingQueue.shift();
                  head.abandon();
                  continue;
                }
                const mode = head.classify();
                if (!exclusiveActive && (mode === "exclusive" ? inFlight.size === 0 : inFlight.size < maxParallel)) {
                  if (mode === "exclusive") exclusiveActive = true;
                  head.mode = mode;
                  pendingQueue.shift();
                  commitQueue.push(head);
                  await head.start();
                  const flight = head.flight.finally(() => {
                    inFlight.delete(flight);
                    wakeup();
                  });
                  inFlight.add(flight);
                  continue;
                }
              }
              if (pendingQueue.length === 0 && commitQueue.length === 0 && inFlight.size === 0) return;
              await signal;
            }
          } finally {
            driving = false;
            wake = void 0;
          }
        })();
        return driverRun;
      };
      const drainDispatches = async () => {
        await drive();
        while (logWork.size > 0) await Promise.allSettled([...logWork]);
      };
      const runOver = () => runController.signal.aborted;
      const binding = (name) => async (rawArgs) => {
        if (runOver()) throw new Error(`run_code run is over (${String(runController.signal.reason)}); ${name} not dispatched`);
        const normalized = jsonNormalizeArgs(rawArgs);
        const n = ++dispatches;
        const subCallId = CallId(`${String(exec.callId)}:code:${n}`);
        const input = {
          callId: subCallId,
          rootCallId: exec.rootCallId,
          name,
          arguments: normalized.dispatched,
          ...exec.agent ? { agent: exec.agent } : {},
          parent: exec.token,
          signal: runController.signal
        };
        const scheduler = registry[TOOL_RUNTIME_SCHEDULER];
        const outcome = await new Promise((resolve3, reject) => {
          let parked;
          const settle = (result) => {
            resolve3(result.isError ? {
              isError: true,
              message: result.error.message
            } : {
              isError: false,
              value: result.value
            });
            const agent = exec.agent;
            if (agent === void 0) return;
            const task = (async () => {
              const logged = await shapeDispatchLog({
                exec,
                agent,
                subCallId,
                name,
                isError: result.isError,
                content: result.content
              });
              agent.session.append("tool/code-dispatch", {
                rootCallId: exec.rootCallId,
                parentCallId: exec.callId,
                subCallId,
                name,
                arguments: normalized.logged,
                isError: result.isError,
                content: logged
              });
            })().finally(() => {
              logWork.delete(task);
            });
            logWork.add(task);
          };
          pendingQueue.push({
            flight: Promise.resolve(),
            settled: false,
            classify: () => registry.executionMode(input).kind,
            abandon: () => {
              reject(/* @__PURE__ */ new Error(`run_code run is over (${String(runController.signal.reason)}); ${name} tool call abandoned`));
            },
            async start() {
              exec.agent?.session.append("tool/code-dispatch-start", {
                rootCallId: exec.rootCallId,
                parentCallId: exec.callId,
                subCallId,
                name,
                arguments: normalized.logged
              });
              const prepared = await scheduler.prepare(input);
              if (prepared.kind === "dispatch") {
                this.flight = scheduler.dispatch(prepared.exec).then((dispatchOutcome) => {
                  parked = {
                    kind: dispatchOutcome.kind,
                    exec: prepared.exec,
                    result: dispatchOutcome.result
                  };
                  this.settled = true;
                });
                return;
              }
              parked = {
                kind: prepared.kind,
                exec: prepared.exec,
                result: prepared.result
              };
              this.settled = true;
            },
            async commit() {
              if (parked === void 0) return;
              const result = parked.kind === "post-result" ? await scheduler.finalize(parked.exec, parked.result) : scheduler.finish(parked.exec, parked.result);
              for (const context of result.additionalContexts ?? []) exec.deferContext(context);
              if (result.concludesTurn) exec.concludeTurn();
              settle(result);
              while (logWork.size > maxParallel) await Promise.race(logWork);
            }
          });
          wakeup();
          drive();
        });
        if (runOver()) throw new Error(`run_code run is over (${String(runController.signal.reason)}); ${name} result discarded`);
        if (outcome.isError) throw new Error(outcome.message);
        return outcome.value;
      };
      const functions = /* @__PURE__ */ Object.create(null);
      for (const schema of registry.schemas(exec.agent)) {
        if (schema.name === "run_code") continue;
        Object.defineProperty(functions, schema.name, {
          enumerable: true,
          value: binding(schema.name)
        });
      }
      try {
        let result;
        try {
          result = await runtime.run({
            program: args.code,
            bindings: [{
              global: "tools",
              functions,
              errorClass: {
                name: "ToolCallError",
                memberNameProperty: "toolName"
              }
            }],
            signal: runController.signal
          });
        } finally {
          runController.abort("run_code settled");
          await drainDispatches();
        }
        if (result.error) {
          const logsText = result.logs.length > 0 ? `
Captured output:
${result.logs.join("\n")}` : "";
          throw new CodeRunFailedError(`code run failed (${result.error.kind}): ${result.error.message}${logsText}`);
        }
        return {
          logs: result.logs,
          ...result.value !== void 0 ? { result: result.value } : {}
        };
      } finally {
        exec.signal.removeEventListener("abort", onOuterAbort);
      }
    },
    presentCall: (args) => ({
      card: "generic",
      title: args.description,
      kind: "execute",
      rawInput: args.code
    })
  });
  Object.defineProperty(definition, "description", {
    enumerable: true,
    get: () => resolveFlavor(peekRuntime).description
  });
  Object.defineProperty(definition, "parameters", {
    enumerable: true,
    get: () => parameterSchemaSpecToJsonSchema({
      code: {
        type: "string",
        required: true,
        description: resolveFlavor(peekRuntime).codeDescription
      },
      description: {
        type: "string",
        required: true,
        description: RUN_CODE_DESCRIPTION_PARAM_DESCRIPTION
      }
    })
  });
  return definition;
}
var IDENTIFIER$1 = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function renderKey(name) {
  return IDENTIFIER$1.test(name) ? name : JSON.stringify(name);
}
function pad$1(indent) {
  return "  ".repeat(indent);
}
function docLines$1(description, indent) {
  if (typeof description !== "string" || description.length === 0) return [];
  const collapsed = description.replace(/\s+/g, " ").trim();
  return [`${pad$1(indent)}/** ${collapsed.replaceAll("*/", String.raw`*\/`)} */`];
}
function renderScalar(value) {
  return JSON.stringify(value);
}
function renderConstrainedScalar$1(node, type) {
  const broad = type === "integer" ? "number" : type;
  if (Object.hasOwn(node, "const")) return renderScalar(node.const);
  if (Object.hasOwn(node, "enum")) return node.enum.map(renderScalar).join(" | ");
  return broad;
}
function typeDocumentFrom(parts) {
  return {
    parts,
    containsUnionOrIntersection: parts.some((part) => typeof part === "string" ? part.includes("|") || part.includes("&") : part.containsUnionOrIntersection)
  };
}
function typeDocument(...parts) {
  return typeDocumentFrom(parts);
}
function flattenTypeDocument(document2) {
  const chunks = [];
  const tasks = [document2];
  for (let task = tasks.pop(); task !== void 0; task = tasks.pop()) {
    if (typeof task === "string") {
      chunks.push(task);
      continue;
    }
    for (let index = task.parts.length - 1; index >= 0; index--) {
      const part = task.parts[index];
      if (part !== void 0) tasks.push(part);
    }
  }
  return chunks.join("");
}
function schemaRenderFrame(node, indent) {
  return {
    node,
    indent,
    phase: "start",
    children: [],
    childIndex: 0,
    childDocuments: [],
    entries: []
  };
}
function renderSupportedSchema(schema, indent) {
  const frames = [schemaRenderFrame(schema, indent)];
  let rootDocument;
  const finish = (document2) => {
    frames.pop();
    const parent = frames.at(-1);
    if (parent === void 0) rootDocument = document2;
    else parent.childDocuments.push(document2);
  };
  while (frames.length > 0) {
    const frame = frames.at(-1);
    if (frame === void 0) break;
    if (frame.phase === "children") {
      if (frame.childIndex < frame.children.length) {
        const child = frame.children[frame.childIndex];
        if (child === void 0) throw new Error("missing schema render child");
        frame.childIndex++;
        frames.push(schemaRenderFrame(child.node, child.indent));
        continue;
      }
      if (frame.kind === "oneOf") {
        const parts2 = [];
        for (let index = 0; index < frame.childDocuments.length; index++) {
          if (index > 0) parts2.push(" | ");
          const child = frame.childDocuments[index];
          if (child !== void 0) parts2.push(child);
        }
        finish(typeDocumentFrom(parts2));
        continue;
      }
      if (frame.kind === "array") {
        const child = frame.childDocuments[0];
        if (child === void 0) throw new Error("missing array item type");
        finish(child.containsUnionOrIntersection ? typeDocument("(", child, ")[]") : typeDocument(child, "[]"));
        continue;
      }
      const required = new Set(frame.node.required);
      const parts = ["{"];
      for (let index = 0; index < frame.entries.length; index++) {
        const entry = frame.entries[index];
        const child = frame.childDocuments[index];
        if (entry === void 0 || child === void 0) throw new Error("missing object property type");
        const [name, prop] = entry;
        for (const line of docLines$1(prop.description, frame.indent + 1)) parts.push("\n", line);
        parts.push("\n", `${pad$1(frame.indent + 1)}${renderKey(name)}${required.has(name) ? "" : "?"}: `, child, ";");
      }
      parts.push("\n", `${pad$1(frame.indent)}}`);
      const declared = typeDocumentFrom(parts);
      finish(frame.node.additionalProperties === false ? declared : typeDocument(declared, " & Record<string, JsonValue>"));
      continue;
    }
    const node = frame.node;
    if (node.oneOf !== void 0) {
      frame.kind = "oneOf";
      frame.children = Array.from(node.oneOf, (child) => ({
        node: child,
        indent: frame.indent
      }));
      frame.childIndex = 0;
      frame.childDocuments = [];
      frame.phase = "children";
      continue;
    }
    if (node.type === void 0) {
      finish(typeDocument("JsonValue"));
      continue;
    }
    switch (node.type) {
      case "string":
      case "number":
      case "integer":
      case "boolean":
      case "null":
        finish(typeDocument(renderConstrainedScalar$1(node, node.type)));
        break;
      case "array":
        if (node.items === void 0) finish(typeDocument("JsonValue[]"));
        else {
          frame.kind = "array";
          frame.children = [{
            node: node.items,
            indent: frame.indent
          }];
          frame.childIndex = 0;
          frame.childDocuments = [];
          frame.phase = "children";
        }
        break;
      case "object": {
        const open = node.additionalProperties !== false;
        const entries2 = Object.entries(node.properties ?? {});
        if (entries2.length === 0) finish(typeDocument(open ? "Record<string, JsonValue>" : "Record<string, never>"));
        else {
          frame.kind = "object";
          frame.entries = entries2;
          frame.children = entries2.map(([, child]) => ({
            node: child,
            indent: frame.indent + 1
          }));
          frame.childIndex = 0;
          frame.childDocuments = [];
          frame.phase = "children";
        }
        break;
      }
      /* v8 ignore next -- assertSupportedJsonSchema narrowed this closed type union. */
      default:
        finish(typeDocument("unknown"));
    }
  }
  return rootDocument ?? typeDocument("unknown");
}
function jsonSchemaToTs(schema, indent = 0) {
  try {
    assertSupportedJsonSchema(schema);
    return flattenTypeDocument(renderSupportedSchema(schema, indent));
  } catch {
    return "unknown";
  }
}
var SDK_INSTRUCTIONS$1 = `## Writing code for run_code

\`run_code\` takes two required arguments: \`code\` \u2014 the body of an async TypeScript function (erasable syntax only \u2014 no \`enum\` or namespaces; type annotations are advisory, the code runs type-stripped) \u2014 and \`description\`, a short summary of what the program does. Inside the program:

- Call tools as \`await tools.name(args)\` \u2014 quoted access for exotic names: \`tools["my-tool"](args)\`. Every call resolves to the tool's typed canonical JSON value. Tool arguments must be lossless JSON.
- A FAILED tool call rejects with \`ToolCallError\`, whose \`toolName\` identifies the failed tool and whose \`message\` is human-readable \u2014 \`try/catch\` it to handle and continue.
- Independent read-only calls MAY overlap under \`Promise.all\` (safe calls run concurrently; mutating calls run alone, in submission order). Sequence dependent work with \`await\`.
- Emit results with \`return\` and/or \`console.log(...)\`. ONLY what you print or return comes back to you \u2014 intermediate tool results never enter the conversation, so extract just what you need.

The available tools:`;
function renderToolsSdk(schemas) {
  const sorted = [...schemas].sort((a, b2) => a.name < b2.name ? -1 : a.name > b2.name ? 1 : 0);
  const argsMembers = [];
  const outputMembers = [];
  for (const schema of sorted) {
    argsMembers.push(...docLines$1(schema.description, 1));
    argsMembers.push(`${pad$1(1)}${renderKey(schema.name)}: ${jsonSchemaToTs(schema.parameters, 1)};`);
    outputMembers.push(`${pad$1(1)}${renderKey(schema.name)}: ${jsonSchemaToTs(schema.output, 1)};`);
  }
  return `${SDK_INSTRUCTIONS$1}

\`\`\`ts
type JsonValue = null | boolean | number | string | JsonValue[] | { [key: string]: JsonValue }

${[
    `interface ToolArgsMap {${argsMembers.length > 0 ? `
${argsMembers.join("\n")}
` : ""}}`,
    `interface ToolOutputMap {${outputMembers.length > 0 ? `
${outputMembers.join("\n")}
` : ""}}`,
    "type ToolName = keyof ToolOutputMap",
    [
      "declare class ToolCallError extends Error {",
      '  readonly name: "ToolCallError";',
      "  readonly toolName: ToolName;",
      "}"
    ].join("\n"),
    [
      "declare const tools: {",
      "  [K in ToolName]: (args: ToolArgsMap[K]) => Promise<ToolOutputMap[K]>;",
      "}"
    ].join("\n")
  ].join("\n\n")}
\`\`\``;
}
var IDENTIFIER = /^[\p{XID_Start}_]\p{XID_Continue}*$/u;
function isBareIdentifier(name) {
  return IDENTIFIER.test(name) && name.normalize("NFKC") === name;
}
var RESERVED = /* @__PURE__ */ new Set([
  "False",
  "None",
  "True",
  "and",
  "as",
  "assert",
  "async",
  "await",
  "break",
  "class",
  "continue",
  "def",
  "del",
  "elif",
  "else",
  "except",
  "finally",
  "for",
  "from",
  "global",
  "if",
  "import",
  "in",
  "is",
  "lambda",
  "nonlocal",
  "not",
  "or",
  "pass",
  "raise",
  "return",
  "try",
  "while",
  "with",
  "yield",
  "__debug__"
]);
var TYPING_ORDER = [
  "Any",
  "Literal",
  "NotRequired",
  "Protocol",
  "TypedDict"
];
function pad(indent) {
  return "    ".repeat(indent);
}
var UNPRINTABLE = /[\u0000-\u0008\u000e-\u001f\u007f-\u009f]/g;
var LONE_SURROGATE = /[\ud800-\udfff]/gu;
function describe(schema) {
  const description = schema.description;
  if (typeof description !== "string") return void 0;
  const collapsed = description.replace(/\s+/g, " ").replace(UNPRINTABLE, (char) => `\\x${char.charCodeAt(0).toString(16).padStart(2, "0")}`).replace(LONE_SURROGATE, (char) => `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}`).trim();
  return collapsed.length === 0 ? void 0 : collapsed;
}
function docLines(description, indent) {
  const collapsed = describe({ description });
  if (collapsed === void 0) return [];
  const escaped = collapsed.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
  return [`${pad(indent)}"""${escaped}"""`];
}
function camelCase(raw) {
  const joined = raw.split(/[^\p{XID_Continue}]+|_+/u).filter((part) => part.length > 0).map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`).join("").normalize("NFKC");
  return (/^\p{XID_Start}/u.test(joined) ? joined : `Tool${joined}`).normalize("NFKC");
}
var MAX_CLASS_NAME_BASE = 120;
var MAX_LIST_NESTING = 180;
function capClassNameBase(base) {
  if (base.length <= MAX_CLASS_NAME_BASE) return base;
  const capped = base.slice(0, MAX_CLASS_NAME_BASE);
  return /[\uD800-\uDBFF]$/.test(capped) ? capped.slice(0, -1) : capped;
}
function allocateClassName(base, state) {
  const capped = capClassNameBase(base);
  let name = capped;
  if (state.usedClassNames.has(name)) {
    let n = state.nextClassCounter.get(capped) ?? 2;
    while (state.usedClassNames.has(`${capped}${n}`)) n++;
    name = `${capped}${n}`;
    state.nextClassCounter.set(capped, n + 1);
  }
  state.usedClassNames.add(name);
  return name;
}
function childClassName(base, segment) {
  return capClassNameBase(`${base}${segment}`.normalize("NFKC"));
}
function pyScalar(value) {
  if (value === true) return "True";
  if (value === false) return "False";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" && Number.isInteger(value) && !Number.isSafeInteger(value)) return BigInt(value).toString();
  return String(value);
}
function renderConstrainedScalar(node, broad, state) {
  if (node.const !== void 0) {
    state.typing.add("Literal");
    return `Literal[${pyScalar(node.const)}]`;
  }
  if (node.enum !== void 0) {
    state.typing.add("Literal");
    return `Literal[${node.enum.map(pyScalar).join(", ")}]`;
  }
  return broad;
}
function renderType(schema, className, state) {
  const newFrame = (schema2, className2, listDepth) => ({
    schema: schema2,
    className: className2,
    phase: "start",
    listDepth,
    children: [],
    childIndex: 0,
    childTypes: [],
    entries: []
  });
  try {
    assertSupportedJsonSchema(schema);
    const frames = [newFrame(schema, className, 0)];
    let result;
    const finish = (type) => {
      frames.pop();
      const parent = frames.at(-1);
      if (parent === void 0) result = type;
      else parent.childTypes.push(type);
    };
    while (frames.length > 0) {
      const frame = frames.at(-1);
      if (frame === void 0) break;
      if (frame.phase === "children") {
        if (frame.childIndex < frame.children.length) {
          const child = frame.children[frame.childIndex];
          if (child === void 0) throw new Error("missing python render child");
          frame.childIndex++;
          frames.push(newFrame(child.schema, child.className, child.listDepth));
          continue;
        }
        if (frame.kind === "oneOf") {
          let union = "";
          for (const [index, childType] of frame.childTypes.entries()) union = index === 0 ? childType : `${union} | ${childType}`;
          finish(union);
          continue;
        }
        if (frame.kind === "array") {
          finish(`list[${frame.childTypes[0] ?? "Any"}]`);
          continue;
        }
        const node2 = frame.node;
        const name = frame.allocated;
        if (node2 === void 0 || name === void 0) throw new Error("missing typeddict frame state");
        const required = new Set(node2.required);
        const lines = [`class ${name}(TypedDict):`];
        for (let index = 0; index < frame.entries.length; index++) {
          const entry = frame.entries[index];
          const fieldType = frame.childTypes[index];
          if (entry === void 0 || fieldType === void 0) throw new Error("missing typeddict field type");
          const [field, fieldSchema] = entry;
          const description = describe(fieldSchema);
          if (description !== void 0) lines.push(`${pad(1)}# ${description}`);
          if (required.has(field)) lines.push(`${pad(1)}${field}: ${fieldType}`);
          else {
            state.typing.add("NotRequired");
            lines.push(`${pad(1)}${field}: NotRequired[${fieldType}]`);
          }
        }
        if (node2.additionalProperties !== false) lines.push(`${pad(1)}# Additional keys beyond those declared are allowed.`);
        if (lines.length === 1) lines.push(`${pad(1)}pass`);
        state.classes.push(lines.join("\n"));
        finish(name);
        continue;
      }
      frame.phase = "children";
      const node = frame.schema;
      if (node.oneOf !== void 0) {
        frame.kind = "oneOf";
        frame.children = node.oneOf.map((branch, index) => ({
          schema: branch,
          className: childClassName(frame.className, `${index + 1}`),
          listDepth: frame.listDepth
        }));
        continue;
      }
      if (node.type === void 0) {
        state.typing.add("Any");
        finish("Any");
        continue;
      }
      switch (node.type) {
        case "string":
          finish(renderConstrainedScalar(node, "str", state));
          break;
        case "number":
          finish(renderConstrainedScalar(node, "float", state));
          break;
        case "integer":
          finish(renderConstrainedScalar(node, "int", state));
          break;
        case "boolean":
          finish(renderConstrainedScalar(node, "bool", state));
          break;
        case "null":
          finish("None");
          break;
        case "array":
          if (node.items === void 0) {
            state.typing.add("Any");
            finish("list[Any]");
            break;
          }
          if (frame.listDepth >= MAX_LIST_NESTING) {
            state.typing.add("Any");
            finish("Any");
            break;
          }
          frame.kind = "array";
          frame.children = [{
            schema: node.items,
            className: frame.className,
            listDepth: frame.listDepth + 1
          }];
          break;
        case "object": {
          const entries2 = Object.entries(node.properties ?? {});
          if (className === "" || !entries2.every(([name]) => isBareIdentifier(name) && !RESERVED.has(name) && !(name.startsWith("__") && !name.endsWith("__")))) {
            state.typing.add("Any");
            finish("dict[str, Any]");
            break;
          }
          if (entries2.length === 0 && node.additionalProperties !== false) {
            state.typing.add("Any");
            finish("dict[str, Any]");
            break;
          }
          frame.kind = "typeddict";
          frame.node = node;
          frame.allocated = allocateClassName(frame.className, state);
          state.typing.add("TypedDict");
          frame.entries = entries2;
          frame.children = entries2.map(([field, child]) => ({
            schema: child,
            className: childClassName(frame.allocated ?? "", camelCase(field)),
            listDepth: 1
          }));
          break;
        }
        /* v8 ignore next 4 -- assertSupportedJsonSchema narrowed this closed type union. */
        default:
          state.typing.add("Any");
          finish("Any");
      }
    }
    return result ?? "Any";
  } catch {
    state.typing.add("Any");
    return "Any";
  }
}
var SDK_INSTRUCTIONS = `## Writing code for run_code

\`run_code\` takes two required arguments: \`code\` \u2014 the body of an async Python function (top-level \`await\` and \`return\` both work) \u2014 and \`description\`, a short summary of what the program does. At run time exactly two of the names declared below are bound: \`tools\` and \`ToolCallError\`. Everything else is a STATIC STUB describing argument and return types \u2014 in particular the \`TypedDict\` classes do NOT exist at run time, so build arguments as plain \`dict\`/\`list\` JSON values: \`await tools.name({"field": 1})\`, never \`FooArgs(field=1)\`, which raises \`NameError\`. Inside the program:

- Call tools as \`await tools.name(args)\` \u2014 subscript access for exotic, reserved, or underscore-leading names: \`await tools["my-tool"](args)\`. Every call resolves to the tool's typed canonical JSON value (each method's return type below). Tool arguments must be lossless JSON.
- A FAILED tool call raises \`ToolCallError\`, whose \`toolName\` identifies the failed tool and whose message is human-readable \u2014 wrap in \`try/except\` to handle and continue.
- Independent read-only calls MAY overlap under \`asyncio.gather\` (safe calls run concurrently; mutating calls run alone, in submission order). Sequence dependent work with \`await\`.
- Emit the run's answer with \`print(...)\` and/or a top-level \`return <value>\`; the returned value must be lossless JSON. ONLY what you print and the returned value come back \u2014 intermediate tool results never enter the conversation, so extract just what you need.

The available tools:`;
function renderToolsSdkPy(schemas) {
  const sorted = [...schemas].sort((a, b2) => a.name < b2.name ? -1 : a.name > b2.name ? 1 : 0);
  const state = {
    classes: [],
    usedClassNames: /* @__PURE__ */ new Set(),
    nextClassCounter: /* @__PURE__ */ new Map(),
    typing: /* @__PURE__ */ new Set(["Protocol"])
  };
  const members = [];
  let statements = 0;
  for (const schema of sorted) {
    const argType = renderType(schema.parameters, `${camelCase(schema.name)}Args`, state);
    const outputType = renderType(schema.output, `${camelCase(schema.name)}Output`, state);
    if (isBareIdentifier(schema.name) && !RESERVED.has(schema.name) && !schema.name.startsWith("_")) {
      const doc = docLines(schema.description, 2);
      members.push(doc.length > 0 ? `${pad(1)}async def ${schema.name}(self, args: ${argType}) -> ${outputType}:` : `${pad(1)}async def ${schema.name}(self, args: ${argType}) -> ${outputType}: ...`);
      members.push(...doc);
      statements += 1;
    } else {
      members.push(`${pad(1)}# tools[${JSON.stringify(schema.name)}](args: ${argType}) -> ${outputType}`);
      const description = describe(schema);
      if (description !== void 0) members.push(`${pad(1)}#   ${description}`);
    }
  }
  const body = (statements > 0 ? members : [`${pad(1)}pass`, ...members]).join("\n");
  const imports = TYPING_ORDER.filter((symbol) => state.typing.has(symbol));
  const classBlock = state.classes.length > 0 ? `${state.classes.join("\n\n")}

` : "";
  return `${SDK_INSTRUCTIONS}

\`\`\`python
${`from typing import ${imports.join(", ")}

class ToolCallError(Exception):
    toolName: str

${classBlock}class Tools(Protocol):
${body}

tools: Tools`}
\`\`\``;
}
var COLLAPSE_SECTION_ORDER = 99;
var CODE_ONLY_INSTRUCTION = `\`${RUN_CODE_NAME}\` is the only tool you can call directly \u2014 a tool call naming any other tool fails. Reach every tool the SDK declares below from inside the program.`;
var SDK_RENDERERS = {
  typescript: renderToolsSdk,
  python: renderToolsSdkPy
};
var TOOL_RUNTIME_SCHEDULER = /* @__PURE__ */ Symbol("@deepseek-ai/dsh-tools.scheduler");
var TOOL_ABORTED = "ABORTED";
var TOOL_ABORTED_BEFORE_DISPATCH = "ABORTED_BEFORE_DISPATCH";
var ToolNotFoundError = class extends HarnessError {
  /**
  * @param toolName - the name the caller asked for.
  * @param reachableFrom - how the model reaches this tool instead, when the
  *   name IS visible and only the presentation denies calling it directly.
  *   Omitted for a name that is registered nowhere.
  */
  constructor(toolName, reachableFrom) {
    super(reachableFrom === void 0 ? `unknown tool "${toolName}"` : `unknown tool "${toolName}": ${reachableFrom}`, "UNKNOWN_TOOL");
    this.name = "ToolNotFoundError";
  }
};
var ToolOutputError = class extends HarnessError {
  /** Schema/value violations in validation order. */
  violations;
  constructor(toolName, violations) {
    super(`tool "${toolName}" returned invalid output: ${violations.join("; ")}`, "INVALID_TOOL_OUTPUT");
    this.name = "ToolOutputError";
    this.violations = violations;
  }
};
function projectionError(toolName, projector, error) {
  return new ToolOutputError(toolName, [`output.${projector} failed: ${errorMessage2(error)}`]);
}
function snapshotProjection(toolName, projector, candidate) {
  try {
    const detached = snapshotJsonValue(candidate);
    if (detached === void 0) throw new ToolOutputError(toolName, [`output.${projector} returned non-lossless JSON`]);
    return detached;
  } catch (error) {
    if (error instanceof ToolOutputError) throw error;
    throw projectionError(toolName, projector, error);
  }
}
function snapshotToolValue(toolName, candidate) {
  try {
    const detached = snapshotJsonValue(candidate);
    if (detached === void 0) throw new ToolOutputError(toolName, ["value is not lossless JSON"]);
    return detached;
  } catch (error) {
    if (error instanceof ToolOutputError) throw error;
    throw new ToolOutputError(toolName, [`value snapshot failed: ${errorMessage2(error)}`]);
  }
}
function errorMessage2(error) {
  try {
    if (error instanceof Error) return error.message;
    if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") return error.message;
    return String(error);
  } catch {
    return "<unprintable thrown value>";
  }
}
function failureMessageFromContent(content) {
  const text2 = content.map((block) => block.type === "text" ? block.text : `[${block.type} content]`).join("\n");
  return text2.length > 0 ? text2 : "tool result blocked by post-execute policy";
}
function materializePresentation(candidate) {
  const detached = snapshotJsonValue(candidate);
  if (detached === void 0) throw new TypeError("tool result must be losslessly JSON-serializable");
  return deepFreeze(detached);
}
function errorInfo(error) {
  try {
    return error instanceof HarnessError ? {
      name: error.name,
      code: error.code
    } : void 0;
  } catch {
    return;
  }
}
var ToolLayer = class {
  tools;
  restrictions = new AnonymousEntries();
  guards = new AnonymousEntries();
  /**
  * Presentation this scope's agent declared for itself, shadowing the
  * deployment default. One cell rather than an entry table: two answers to
  * "which form does the model see" is a contradiction, not a merge.
  */
  mode;
  constructor(scope) {
    this.tools = new NamedEntries((name) => /* @__PURE__ */ new Error(scope === void 0 ? `tool "${name}" is already registered (for a per-agent variant, register through that agent's \`agent.ctx\` instead)` : `tool "${name}" is already registered in this scope`));
  }
  /** Whether every contribution table in this aggregate layer is empty. */
  isEmpty() {
    return this.tools.isEmpty() && this.restrictions.isEmpty() && this.guards.isEmpty() && this.mode === void 0;
  }
  /** Whether every compiled restriction in this layer admits a global tool name. */
  admits(name) {
    for (const filter of this.restrictions.values()) if (filter.allow !== void 0 && !filter.allow.has(name) || filter.deny !== void 0 && filter.deny.has(name)) return false;
    return true;
  }
  /** First monotonic denial from this layer's live guard registrations. */
  guardReason(exec) {
    for (const guard of this.guards.values()) {
      const reason = guard(exec);
      if (reason !== void 0) return reason;
    }
  }
};
function resolveMaxParallelSubCalls(value) {
  const maxParallelSubCalls = value ?? 10;
  if (!Number.isInteger(maxParallelSubCalls) || maxParallelSubCalls < 1) throw new Error("maxParallelSubCalls must be a positive integer");
  return maxParallelSubCalls;
}
var ToolRuntime = class extends Service {
  static inject = ["systemPrompt"];
  static Config = Schema.object({
    mode: Schema.union([
      "native",
      "code",
      "both"
    ]).default("native"),
    maxParallelSubCalls: Schema.natural().min(1).default(10)
  });
  /** Internal staged view consumed by `dsh-agent-loop`'s parallel scheduler. */
  [TOOL_RUNTIME_SCHEDULER] = {
    prepare: (exec) => this.prepareScheduledExecution(exec),
    dispatch: (exec) => this.dispatchScheduledExecution(exec),
    finalize: (exec, result) => this.finalizeScheduledExecution(exec, result),
    finish: (exec, result) => this.finishScheduledExecution(exec, result)
  };
  /** Context deferred by a running tool body, keyed by its scheduler-owned execution. */
  deferredContexts = /* @__PURE__ */ new WeakMap();
  /** Executions whose tool body declared the current turn complete. */
  concludingExecutions = /* @__PURE__ */ new WeakSet();
  /** Original caller cancellation, kept outside the wrapper-mutable execution object. */
  cancellationStates = /* @__PURE__ */ new WeakMap();
  /** Definition-owned final content transform snapshotted before policy begins. */
  contentFinalizers = /* @__PURE__ */ new WeakMap();
  layers = new ScopedLayers((scope) => new ToolLayer(scope), () => {
    this.ctx.emit("tools/change");
  });
  /** Presentation for scopes that declare none; {@link presentAs} shadows it per scope. */
  defaultMode;
  maxParallelSubCalls;
  /**
  * Reserved presentation transport, kept outside the filterable registration
  * layers. Built on first need rather than at construction: which agents run
  * a code mode is no longer known when the service is constructed, and the
  * transport is stateless beyond its closures over `this`.
  */
  codeTransport;
  constructor(ctx, config = {}) {
    super(ctx, "tools");
    this.defaultMode = config.mode ?? "native";
    this.maxParallelSubCalls = resolveMaxParallelSubCalls(config.maxParallelSubCalls);
    ctx.systemPrompt.tools((context) => this.wireSchemas(context.scope));
    if (this.defaultMode !== "native") {
      ctx.systemPrompt.section(this.collapseSection());
      ctx.systemPrompt.section(this.sdkSection());
    }
  }
  /**
  * The prompt statement of the `code` executor collapse, registered wherever
  * {@link sdkSection} is and rendering empty outside an effective `code`.
  *
  * Every tool contributes its own guidance section naming its tool, none of
  * them qualify how that tool is reached, and they all render before the SDK
  * (orders 100-199 against {@link SDK_SECTION_ORDER}). Without this the model
  * reads a catalog of tools it is told to use and no statement that only
  * `run_code` may be called, so it emits a native call, receives
  * `UNKNOWN_TOOL` for a tool the prompt just declared, and concludes the
  * deployment is inconsistent. {@link COLLAPSE_SECTION_ORDER} places the rule
  * before that guidance rather than after it.
  *
  * `both` renders empty: native calls do execute there, so the rule is false.
  * @returns the section registration.
  */
  collapseSection() {
    return {
      name: "tools:code-only",
      order: COLLAPSE_SECTION_ORDER,
      text: (context) => this.modeFor(context.scope) === "code" ? CODE_ONLY_INSTRUCTION : ""
    };
  }
  /**
  * The generated-SDK prompt section, registered globally by a code-mode
  * deployment and per scope by {@link presentAs}.
  *
  * The body regenerates from the CALLING scope, and renders empty for an
  * agent presenting natively — an agent that opted out under a code-mode
  * deployment still sees the global registration, and an empty section is
  * dropped from the rendered prompt.
  * @returns the section registration.
  */
  sdkSection() {
    return {
      name: "tools:sdk",
      order: 150,
      text: (context) => {
        const mode = this.modeFor(context.scope);
        if (mode === "native") return "";
        const runtime = this.requireCodeRuntime(mode);
        const render = SDK_RENDERERS[runtime.language];
        if (render === void 0) throw new Error(`dsh-tools: no SDK renderer for ${runtime.language}`);
        return render(this.sdkSchemas(context.scope));
      }
    };
  }
  /**
  * The presentation one scope's agent sees: its own declaration, else the
  * deployment default.
  * @param scope - the calling agent, or undefined for the global view.
  * @returns the resolved presentation mode.
  */
  modeFor(scope) {
    const layers = this.layers.chainLayers(scope);
    for (let index = layers.length - 1; index >= 0; index -= 1) {
      const mode = layers[index]?.mode;
      if (mode !== void 0) return mode;
    }
    return this.defaultMode;
  }
  /**
  * The reserved `run_code` transport, built on first need.
  *
  * It never enters the global layer: per-agent restrictions must not remove
  * it, and a scoped registration must not shadow it. The visibility resolver
  * appends it after resolving the filterable global/scoped capability layers,
  * and only for scopes whose mode actually presents it.
  * @returns the shared transport definition.
  */
  requireCodeTransport() {
    this.codeTransport ??= createRunCodeTool(this, {
      requireRuntime: () => this.requireCodeRuntime(this.defaultMode),
      peekRuntime: () => this.ctx.get("codeRuntime"),
      maxParallel: this.maxParallelSubCalls,
      shapeDispatchLog: (dispatch) => this.shapeDispatchLog(dispatch)
    });
    return this.codeTransport;
  }
  /**
  * Present the calling scope's tools in `mode` instead of the deployment
  * default. Nearest scope on the chain wins, so a preset's standing
  * declaration covers every agent joined under it.
  *
  * Scoped only, and one declaration per scope: this is how an agent preset
  * composes Code Mode agents beside native ones in the same process, and a
  * process-global override would be the `mode` config field instead.
  * @param mode - the presentation the covered agents' models see.
  * @returns the exact disposer that restores the deployment default.
  */
  presentAs(mode) {
    const ctx = this.ctx;
    if (scopeOf(ctx) === void 0) throw new Error("tools.presentAs() requires a scoped context (agent.ctx): a context-global presentation is the `mode` config field on the tools row");
    return ctx.effect(function* () {
      yield this.layers.effect(ctx, (layer) => {
        if (layer.mode !== void 0) throw new Error(`tools.presentAs("${mode}") conflicts with "${layer.mode}" already declared for this scope; one composition selects one presentation`);
        layer.mode = mode;
        return () => {
          layer.mode = void 0;
        };
      }, { label: "tools.presentAs()" });
      if (mode !== "native") {
        yield ctx.systemPrompt.section(this.collapseSection());
        yield ctx.systemPrompt.section(this.sdkSection());
      }
    }.bind(this), "tools.presentAs()");
  }
  /**
  * Build one scope's wire schemas and names for prompt-order validation.
  * Restrictions do not make known tools invalid, but a mode collapse does.
  */
  wireSchemas(scope) {
    const view = this.view(scope);
    const mode = this.modeFor(scope);
    if (mode === "native") return {
      schemas: [...view.visible.values()].map((definition) => this.schemaOf(definition, false)),
      knownNames: [...view.knownNames]
    };
    this.requireCodeRuntime(mode);
    const schemas = [...view.visible.values()].map((definition) => this.schemaOf(definition, false));
    if (mode === "code") return {
      schemas: schemas.filter((schema) => schema.name === RUN_CODE_NAME),
      knownNames: [RUN_CODE_NAME]
    };
    return {
      schemas,
      knownNames: [...view.knownNames, RUN_CODE_NAME]
    };
  }
  /**
  * Resolve the code runtime or throw the actionable misconfiguration error.
  * Read at use time (assembly / run_code execution), NOT via static
  * `inject`: an inject entry would hold `ctx.tools` — and every tool plugin
  * behind it — hostage to a code runtime existing even under `mode:
  * 'native'` (the loop's optional-backend idiom, same as
  * `sessionPersistence`).
  *
  * Assembly and `run_code` execution read separately, so the language is not
  * bound to a request. Harmless while one published backend exists — both
  * reads return the same flavor — but a reload that swapped in a second
  * language between them would hand a program written against one SDK to the
  * other. Binding it is deferred until a second backend ships (the first
  * point it is testable); rationale in the
  * [language-dispatch note](../../../../.agents/notes/implemented/feature/2026-07-31-code-mode-language-dispatch.md).
  */
  requireCodeRuntime(mode) {
    const runtime = this.ctx.get("codeRuntime");
    if (!runtime) throw new Error(`dsh-tools: mode "${mode}" requires a code runtime \u2014 load a ctx.codeRuntime implementation (e.g. @deepseek-ai/dsh-code-runtime-worker-thread) or set tools mode to "native"`);
    if (!Object.hasOwn(SDK_RENDERERS, runtime.language)) {
      const known = Object.keys(SDK_RENDERERS).map((name) => JSON.stringify(name)).join(", ");
      throw new Error(`dsh-tools: no SDK renderer registered for runtime language ${JSON.stringify(runtime.language)} (known: ${known})`);
    }
    return runtime;
  }
  /**
  * Register globally or in the calling agent scope. Scoped tools shadow
  * globals; duplicates within one layer and the reserved `run_code` name fail.
  * @param definition - tool schema, execution, and optional finalization/presentation callbacks.
  * @returns the exact disposer that unregisters the tool.
  */
  register(definition) {
    const name = definition.name;
    const output = definition.output;
    if (output === void 0 || typeof output !== "object" || typeof output.render !== "function" || output.presentationMeta !== void 0 && typeof output.presentationMeta !== "function") throw new TypeError(`tool "${name}" must declare output { schema, render, presentationMeta? }`);
    assertSupportedJsonSchema(output.schema);
    const timeoutMs = definition.timeoutMs;
    if (timeoutMs !== void 0 && (!Number.isFinite(timeoutMs) || timeoutMs <= 0)) throw new TypeError(`tool "${name}" timeoutMs must be a positive finite number`);
    if (name === "run_code") throw new Error(`tool name "${RUN_CODE_NAME}" is reserved for the Code Mode presentation transport and cannot be registered or shadowed`);
    return this.layers.effect(this.ctx, (layer) => layer.tools.insert(name, definition), { label: "tools.register()" });
  }
  /**
  * Restrict global tools for the calling agent scope. Empty filters, unknown
  * names, scope-local names, and reserved transport names fail. Restrictions
  * intersect; scoped registrations remain visible.
  * @param filter - global-tool mask: `allow` (keep only) and/or `deny` (remove).
  * @returns the exact disposer that lifts this restriction.
  */
  restrict(filter) {
    const scope = scopeOf(this.ctx);
    if (scope === void 0) throw new Error("tools.restrict() requires a scoped context (agent.ctx): a context-global restriction would mask every agent \u2014 deny the tool for the intended agent instead");
    const allow = filter.allow;
    const deny = filter.deny;
    if (allow === void 0 && deny === void 0) throw new Error("tools.restrict({}) is a no-op: pass `allow` and/or `deny` (an empty filter is almost always a materialized-empty-config bug)");
    const compiled = {
      ...allow !== void 0 ? { allow: new Set(allow) } : {},
      ...deny !== void 0 ? { deny: new Set(deny) } : {}
    };
    if ([...allow ?? [], ...deny ?? []].includes("run_code")) throw new Error(`tools.restrict() cannot name reserved Code Mode presentation transport "${RUN_CODE_NAME}"; restrict end-capability tools instead`);
    const known = this.view(scope).restrictableNames;
    const unknown = [...allow ?? [], ...deny ?? []].filter((name) => !known.has(name));
    if (unknown.length > 0) throw new Error(`tools.restrict() names unknown global tool${unknown.length > 1 ? "s" : ""} ${unknown.map((n) => `"${n}"`).join(", ")}; known global tools: ${[...known].sort().join(", ") || "(none)"}`);
    return this.layers.effect(this.ctx, (layer) => layer.restrictions.append(compiled), { label: "tools.restrict()" });
  }
  /**
  * Register a monotonic guard after the extensible `tools/pre-execute`
  * waterfall. A plain-context guard applies globally; one registered through
  * `agent.ctx` applies only to that agent. Any matching guard may deny by
  * returning a reason, while no guard can force-allow a call another guard
  * denied. The exact effect disposer is returned for ordered ownership and
  * HMR cleanup.
  * @param guard - synchronous check; a returned string denies the execution.
  * @returns the exact disposer that unregisters the guard.
  */
  guard(guard) {
    return this.layers.effect(this.ctx, (layer) => layer.guards.append(guard), {
      label: "tools.guard()",
      notify: false
    });
  }
  /** First monotonic denial from the global then the scope chain's guard layers, farthest first. */
  guardReason(exec) {
    const globalReason = this.layers.global.guardReason(exec);
    if (globalReason !== void 0) return globalReason;
    if (exec.agent === void 0) return void 0;
    for (const layer of this.layers.chainLayers(exec.agent)) {
      const reason = layer.guardReason(exec);
      if (reason !== void 0) return reason;
    }
  }
  /**
  * Resolve every registry fact one scope needs in one layer traversal. The
  * visible map applies restrictions to the INHERITED surface, then the
  * scope's own registrations and the reserved presentation transport; the
  * other sets retain the pre-restriction facts needed by restriction and
  * prompt-order validation.
  *
  * A restriction filters what a scope inherits — the global layer and every
  * ancestor layer on its chain — and never what its OWN layer registers.
  * That exemption is what a per-child capability filter has to keep intact:
  * the delegation runtime registers a child's reporting and structured-output
  * tools into the child's own layer, and a filter naming the capabilities the
  * child may use must not strip the machinery it answers through.
  *
  * Reading the exempt set as "the global layer" instead of "not mine" held
  * only while every model-facing tool sat in the host composition. Once
  * presets moved them onto the agent plane they became an ANCESTOR
  * contribution, so a child's filter silently stopped constraining anything
  * it was given.
  * @param scope - the viewing scope (the agent), or undefined for the global view.
  * @returns the complete derived view for that scope.
  */
  view(scope) {
    const layers = this.layers.chainLayers(scope);
    const own = this.layers.peek(scope);
    const inherited = new Map(this.layers.global.tools.entries());
    for (const layer of layers) {
      if (layer === own) continue;
      for (const [name, definition] of layer.tools.entries()) inherited.set(name, definition);
    }
    const visible = /* @__PURE__ */ new Map();
    const knownNames = /* @__PURE__ */ new Set();
    const restrictableNames = /* @__PURE__ */ new Set();
    for (const [name, definition] of inherited) {
      knownNames.add(name);
      restrictableNames.add(name);
      if (layers.every((layer) => layer.admits(name))) visible.set(name, definition);
    }
    if (own !== void 0) for (const [name, definition] of own.tools.entries()) {
      knownNames.add(name);
      visible.set(name, definition);
    }
    if (this.modeFor(scope) !== "native") visible.set(RUN_CODE_NAME, this.requireCodeTransport());
    return {
      visible,
      knownNames,
      restrictableNames
    };
  }
  /**
  * Look up a tool as one scope sees it (scoped
  * shadows global; a restricted-away global reads as absent). Presenters pass
  * the calling agent so the rendered card matches the definition that
  * actually executed.
  * @param name - the tool name as registered.
  * @param scope - the viewing scope (the agent); omitted = the global view.
  * @returns the definition the scope resolves, or undefined when none is visible.
  */
  get(name, scope) {
    return this.view(scope).visible.get(name);
  }
  /**
  * Resolve the definition that MAY EXECUTE for a call, applying the mode
  * collapse at the operation boundary that owns it. The registry view
  * (`get`) is presentation-agnostic; here a MODEL-DIRECT call under `code`
  * may only name the reserved `run_code` transport, while a nested
  * sub-dispatch (a `parent` token set — the `run_code` SDK calling a tool
  * it bound) may call any visible tool. Denial surfaces as `UNKNOWN_TOOL`
  * through the executor, matching an absent definition.
  * @param name - the tool name as registered.
  * @param scope - the viewing scope (the agent); omitted = the global view.
  * @param nested - whether the call is a transport sub-dispatch, not a model-direct call.
  * @returns the definition that may run, or undefined when the call must be rejected.
  */
  resolveExecution(name, scope, nested) {
    const tool = this.get(name, scope);
    if (tool === void 0) return void 0;
    if (this.collapses(name, scope, nested)) return void 0;
    return tool;
  }
  /**
  * Project visible definitions onto the allowlisted model-facing schema fields,
  * excluding execution and presentation callbacks.
  * @param scope - the viewing scope (the agent); omitted = the global view.
  * @returns one deep-cloned schema per visible tool.
  */
  schemas(scope) {
    return [...this.view(scope).visible.values()].map((definition) => this.schemaOf(definition, true));
  }
  /** Project visible callable tools onto the generated Code Mode SDK contract. */
  sdkSchemas(scope) {
    return [...this.view(scope).visible.values()].filter((definition) => definition.name !== RUN_CODE_NAME).map((definition) => {
      const output = snapshotJsonValue(definition.output.schema);
      if (output === void 0) throw new Error(`tool "${definition.name}" output schema must be lossless JSON before SDK projection`);
      return {
        ...this.schemaOf(definition, true),
        output
      };
    });
  }
  /** Project one definition onto the model-facing schema fields. */
  schemaOf(definition, detachParameters) {
    const { name, description, parameters } = definition;
    const detached = detachParameters ? snapshotJsonValue(parameters) : parameters;
    if (detached === void 0) throw new Error(`tool "${name}" parameters must be lossless JSON before schema projection`);
    return {
      name,
      description,
      parameters: detached
    };
  }
  /**
  * Classify a pending call through the caller's visible tool definition. Only
  * an exact `true` is parallel; unknown, hidden, undeclared, invalid, or
  * throwing classifiers are exclusive.
  * @param exec - call name, parsed arguments, and optional agent scope.
  * @returns the fail-closed scheduling mode.
  */
  executionMode(exec) {
    const tool = this.resolveExecution(exec.name, exec.agent, exec.parent !== void 0);
    if (!tool?.isConcurrencySafe) return { kind: "exclusive" };
    try {
      return tool.isConcurrencySafe(exec.arguments) === true ? { kind: "parallel" } : { kind: "exclusive" };
    } catch {
      return { kind: "exclusive" };
    }
  }
  /**
  * Run the `tools/code-dispatch-log` waterfall over one settled sub-dispatch
  * and return the content the bridge should log on `tool/code-dispatch`.
  * Contained: when a listener throws, the method logs the original settled
  * content; that failure must not fail the dispatch or omit the settle event. Private:
  * the ONE consumer is the `run_code` bridge this registry constructs, which
  * receives it as a capability parameter (the `requireRuntime` idiom) — the
  * waterfall, not this invoker, is the public extension point.
  */
  async shapeDispatchLog(dispatch) {
    try {
      return await this.ctx.waterfall(scopeTarget(this, dispatch.agent), "tools/code-dispatch-log", dispatch, () => Promise.resolve(dispatch.content));
    } catch (error) {
      this.ctx.logger.warn(`tools: code-dispatch-log listener failed for ${dispatch.name}: ${errorMessage2(error)}; logging the original settled content`);
      return dispatch.content;
    }
  }
  /**
  * Whether the `code` mode collapse denies a model-direct call: only the
  * reserved `run_code` transport may be named. Nested sub-dispatches (a
  * `parent` token set) bypass the collapse. One home for the
  * security-relevant predicate, shared by {@link resolveExecution} and
  * {@link createExecution} so the two can never drift apart.
  *
  * Resolved through {@link modeFor}, NOT `defaultMode`: an agent given `code`
  * by an agent preset under a native deployment is the composition
  * `dsh-agent-tool-presentation` exists for, and reading the deployment default would
  * leave exactly that agent uncollapsed — announcing one surface while
  * executing another, which is the bypass this collapse closes.
  * @param name - the tool name as registered.
  * @param scope - the viewing scope whose effective presentation mode applies.
  * @param nested - whether the call is a transport sub-dispatch, not a model-direct call.
  */
  collapses(name, scope, nested) {
    return !nested && this.modeFor(scope) === "code" && name !== "run_code";
  }
  /**
  * Execute through pre-policy, guards, around-dispatch, post-policy,
  * definition-owned content finalization, and final notification. Tool and
  * listener failures resolve as materialized error results; an invisible tool
  * reports `UNKNOWN_TOOL`. The returned outcome is the same lossless, frozen
  * snapshot final observers receive. Cancellation
  * arriving after entry and before final result materialization skips a
  * not-yet-started body with `ABORTED_BEFORE_DISPATCH` or replaces a
  * successful started outcome with `ABORTED`; already-started work is still
  * drained and may retain a tool-owned structured error.
  * @param exec - the typed same-process call input. The registry assigns its
  *   correlation token before policy begins.
  * @returns the materialized final result.
  */
  async execute(exec) {
    return this.prepareExecution(exec, (prepared) => this.completeScheduledExecution(prepared));
  }
  async completeScheduledExecution(prepared) {
    switch (prepared.kind) {
      case "dispatch": {
        const dispatched = await this.dispatchScheduledExecution(prepared.exec);
        return dispatched.kind === "post-result" ? await this.finalizeScheduledExecution(prepared.exec, dispatched.result) : this.finishScheduledExecution(prepared.exec, dispatched.result);
      }
      case "post-result":
        return await this.finalizeScheduledExecution(prepared.exec, prepared.result);
      case "final-result":
        return this.finishScheduledExecution(prepared.exec, prepared.result);
      /* v8 ignore next -- closed-union exhaustiveness guard */
      default:
        return assertNever(prepared, "scheduled tool preparation");
    }
  }
  createExecution(exec) {
    const deferredContexts = [];
    const token = createExecutionToken();
    const callId = exec.callId;
    const rootCallId = exec.rootCallId ?? callId;
    const name = exec.name;
    const agent = exec.agent;
    const parent = exec.parent;
    const signal = exec.signal;
    const visible = this.get(name, agent);
    const collapsed = visible !== void 0 && this.collapses(name, agent, parent !== void 0);
    const concludingExecutions = this.concludingExecutions;
    const base = {
      token,
      callId,
      rootCallId,
      name,
      signal,
      ...agent !== void 0 ? { agent } : {},
      ...parent !== void 0 ? { parent } : {},
      deferContext(context) {
        deferredContexts.push(context);
      },
      concludeTurn() {
        concludingExecutions.add(this);
      }
    };
    const capturedFinalizer = visible?.finalizeContent?.bind(visible);
    const finalizerFor = () => collapsed && !signal.aborted ? void 0 : capturedFinalizer;
    try {
      const detached = snapshotJsonValue(exec.arguments);
      if (detached === void 0) throw new TypeError("tool execution arguments must be losslessly JSON-serializable");
      const execution = {
        ...base,
        arguments: deepFreeze(detached)
      };
      this.deferredContexts.set(execution, deferredContexts);
      this.contentFinalizers.set(execution, finalizerFor());
      this.cancellationStates.set(execution, {
        callerSignal: signal,
        bodyInvoked: false
      });
      if (collapsed) {
        if (signal.aborted) return {
          kind: "final-result",
          exec: execution,
          result: toolAbortedBeforeDispatchResult()
        };
        return {
          kind: "final-result",
          exec: execution,
          result: toolErrorResult(new ToolNotFoundError(name, `only \`${RUN_CODE_NAME}\` is callable directly \u2014 call \`${name}\` from inside a \`${RUN_CODE_NAME}\` program instead`))
        };
      }
      return {
        kind: "ready",
        exec: execution
      };
    } catch (error) {
      const execution = {
        ...base,
        arguments: void 0
      };
      this.contentFinalizers.set(execution, finalizerFor());
      return {
        kind: "final-result",
        exec: execution,
        result: toolErrorResult(error)
      };
    }
  }
  /**
  * Run the ordered pre-execute and monotonic guard stages for the scheduler.
  * @param input - the caller-supplied execution input.
  * @returns the prepared execution plus the next scheduler stage.
  * @internal
  */
  async prepareScheduledExecution(input) {
    return this.prepareExecution(input, (prepared) => prepared);
  }
  async prepareExecution(input, next) {
    const created = this.createExecution(input);
    if (created.kind !== "ready") return next(created);
    const exec = created.exec;
    if (this.callerCancelled(exec)) return next({
      kind: "final-result",
      exec,
      result: toolAbortedBeforeDispatchResult()
    });
    try {
      const carrier = scopeTarget(this, exec.agent);
      const gate = await this.ctx.waterfall(carrier, "tools/pre-execute", exec, () => Promise.resolve({ kind: "allow" }));
      const askResolution = gate.kind === "ask" ? await this.serviceAsk(exec, gate) : {
        decision: gate,
        approvalCancelled: false
      };
      const { decision } = askResolution;
      if (this.callerCancelled(exec) && askResolution.approvalCancelled) return await next({
        kind: "post-result",
        exec,
        result: toolAbortedBeforeDispatchResult()
      });
      const denialReason = decision.kind === "allow" ? this.guardReason(exec) : decision.reason;
      if (denialReason !== void 0) return await next({
        kind: "post-result",
        exec,
        result: this.materializeFinalResult({
          content: [{
            type: "text",
            text: `Error: ${denialReason}`
          }],
          isError: true,
          error: { message: denialReason }
        })
      });
      if (this.callerCancelled(exec)) return await next({
        kind: "post-result",
        exec,
        result: toolAbortedBeforeDispatchResult()
      });
      return await next({
        kind: "dispatch",
        exec
      });
    } catch (error) {
      return next({
        kind: "final-result",
        exec,
        result: toolErrorResult(error)
      });
    }
  }
  /** Whether the original caller signal is currently aborted. */
  callerCancelled(exec) {
    const state = this.cancellationStates.get(exec);
    if (state === void 0) throw new Error("tool registry scheduler invariant violated: missing cancellation state");
    return state.callerSignal.aborted;
  }
  /** Canonical cancellation outcome selected by whether the tool body started. */
  cancellationResult(exec, prior) {
    const state = this.cancellationStates.get(exec);
    if (state === void 0) throw new Error("tool registry scheduler invariant violated: missing cancellation state");
    return state.bodyInvoked ? toolAbortedResult(prior) : toolAbortedBeforeDispatchResult(prior);
  }
  /**
  * Dispatch the registered body with the original caller signal fused back
  * into any around-wrapper replacement. Cancellation never abandons the body:
  * a started promise reaches quiescence before its outcome becomes `ABORTED`.
  */
  async dispatchToolBody(exec) {
    const state = this.cancellationStates.get(exec);
    if (state === void 0) throw new Error("tool registry scheduler invariant violated: missing cancellation state");
    const wrapperSignal = exec.signal;
    const fused = fuseToolSignals(state.callerSignal, wrapperSignal);
    const signal = fused.signal;
    if (isAborted(signal)) {
      fused.dispose();
      return toolAbortedBeforeDispatchResult();
    }
    exec.signal = signal;
    try {
      const tool = this.resolveExecution(exec.name, exec.agent, exec.parent !== void 0);
      if (!tool) throw new ToolNotFoundError(exec.name);
      state.bodyInvoked = true;
      const returned = await tool.execute(exec.arguments, exec);
      const result = this.createSuccessResult(exec, tool, returned);
      return isAborted(signal) ? toolAbortedResult(result) : result;
    } catch (error) {
      return toolErrorResult(error);
    } finally {
      fused.dispose();
      exec.signal = wrapperSignal;
    }
  }
  /**
  * Run around-dispatch and the tool body. Tool and unknown-tool failures still
  * receive post-execute; pipeline failures are already final.
  * @param exec - the prepared execution.
  * @returns whether the result still needs post-execute.
  * @internal
  */
  async dispatchScheduledExecution(exec) {
    try {
      const mutableExec = exec;
      const carrier = scopeTarget(this, exec.agent);
      const result = await this.ctx.waterfall(carrier, "tools/execute", mutableExec, () => this.dispatchToolBody(mutableExec));
      const normalized = this.normalizeDispatchResult(exec, result);
      const deferredContexts = this.deferredContexts.get(exec);
      if (deferredContexts === void 0) throw new Error("tool registry scheduler invariant violated: unprepared execution");
      const resultWithDeferredContexts = deferredContexts.length === 0 ? normalized : this.markCanonical(exec, {
        ...normalized,
        additionalContexts: [...deferredContexts, ...normalized.additionalContexts ?? []]
      });
      return {
        kind: "post-result",
        result: this.callerCancelled(exec) && !resultWithDeferredContexts.isError ? this.cancellationResult(exec, resultWithDeferredContexts) : resultWithDeferredContexts
      };
    } catch (error) {
      return {
        kind: "final-result",
        result: toolErrorResult(error)
      };
    }
  }
  /**
  * Run ordered post-execute, then apply definition-owned content finalization,
  * materialize, and notify the final outcome.
  * @param exec - the prepared execution.
  * @param result - dispatch/pre result that still needs post-execute.
  * @returns the materialized final result.
  * @internal
  */
  async finalizeScheduledExecution(exec, result) {
    try {
      const postResult = await this.postExecute(exec, result);
      return this.finishScheduledExecution(exec, this.callerCancelled(exec) && !postResult.isError ? this.cancellationResult(exec, postResult) : postResult);
    } catch (error) {
      return this.finishScheduledExecution(exec, toolErrorResult(error));
    }
  }
  /**
  * Materialize the candidate, apply definition-owned content finalization,
  * then materialize and notify the authoritative result.
  * @param exec - the prepared execution.
  * @param result - final result.
  * @returns the materialized final result.
  * @internal
  */
  finishScheduledExecution(exec, result) {
    let materializedResult;
    try {
      materializedResult = this.materializeFinalResult(result);
    } catch (error) {
      materializedResult = this.materializeFinalResult(toolErrorResult(error));
    }
    let finalResult;
    try {
      finalResult = this.materializeFinalResult(this.applyFinalContent(exec, materializedResult));
    } catch (error) {
      finalResult = this.materializeFinalResult(toolErrorResult(error));
    }
    this.notifyResult(exec, finalResult);
    return finalResult;
  }
  /** Apply the snapshotted tool-owned content transform without exposing other result fields. */
  applyFinalContent(exec, result) {
    const finalizeContent = this.contentFinalizers.get(exec);
    if (finalizeContent === void 0) return result;
    const content = finalizeContent(exec, result);
    return content === void 0 ? result : {
      ...result,
      content
    };
  }
  /** Notify observers without exposing a mutation or error channel into the outcome. */
  notifyResult(exec, result) {
    Object.freeze(exec);
    const { name: toolName, callId } = exec;
    const reportFailure = (error) => {
      this.ctx.logger.warn(`tool "${toolName}" (${callId}): tools/result observer failed: ${errorMessage2(error)}`);
    };
    const callbacks = this.ctx.events.dispatch("emit", [
      scopeTarget(this, exec.agent),
      "tools/result",
      exec,
      result
    ]);
    for (const callback of callbacks) try {
      const returned = callback(exec, result);
      Promise.resolve(returned).catch(reportFailure);
    } catch (error) {
      reportFailure(error);
    }
  }
  /**
  * Resolve an `ask` decision to allow/deny through the approval seam. The
  * seam is consumed opportunistically with `ctx.get('approval')` — a
  * deployment that composes no ApprovalService keeps the historical degrade
  * to deny, and an unmount mid-session degrades the same way on the next ask.
  * An agent-less execution also degrades: without an agent there is no
  * session to audit to and no UI to route to. Otherwise the outcome maps
  * one-to-one — `allowed-once` proceeds; the three non-grants deny with
  * distinct reasons so the model can tell a human "no" from an absent
  * approval channel.
  */
  async serviceAsk(exec, ask) {
    const approval = this.ctx.get("approval");
    if (approval === void 0) return {
      decision: {
        kind: "deny",
        reason: ask.reason ?? `tool "${exec.name}" requires approval (not yet supported)`
      },
      approvalCancelled: false
    };
    if (exec.agent === void 0) return {
      decision: {
        kind: "deny",
        reason: `tool "${exec.name}" requires approval, but the call has no agent to route it through`
      },
      approvalCancelled: false
    };
    const outcome = await approval.request({
      agent: exec.agent,
      toolName: exec.name,
      callId: exec.callId,
      ...ask.reason !== void 0 ? { reason: ask.reason } : {},
      signal: exec.signal
    });
    switch (outcome) {
      case "allowed-once":
        return {
          decision: { kind: "allow" },
          approvalCancelled: false
        };
      case "rejected":
        return {
          decision: {
            kind: "deny",
            reason: `the user rejected tool "${exec.name}"`
          },
          approvalCancelled: false
        };
      case "cancelled":
        return {
          decision: {
            kind: "deny",
            reason: `approval for tool "${exec.name}" was cancelled`
          },
          approvalCancelled: true
        };
      case "unavailable":
        return {
          decision: {
            kind: "deny",
            reason: `tool "${exec.name}" requires approval, but no approval channel is available`
          },
          approvalCancelled: false
        };
      default:
        return assertNever(outcome, "ApprovalOutcome");
    }
  }
  /**
  * Run the `tools/post-execute` waterfall over a dispatched `result` and apply
  * its {@link PostToolDecision}: `accept` keeps the call successful (replacing
  * `content` when given), `block` turns it into an `isError` whose content is
  * the corrective `feedback`. Either decision may attach `additionalContexts`,
  * which are ferried on the returned result for the loop's active-batch FIFO.
  * Context deferred by the tool body survives an accepted result but is
  * discarded when the outer call is blocked; a block exposes only context the
  * blocking decision explicitly supplied.
  * Runs inside `execute`'s outer try/catch (a throwing listener → isError).
  */
  async postExecute(exec, result) {
    const decision = await this.ctx.waterfall(scopeTarget(this, exec.agent), "tools/post-execute", exec, result, () => Promise.resolve({ kind: "accept" }));
    const decisionContexts = decision.additionalContexts ?? [];
    if (decision.kind === "block") {
      const message = failureMessageFromContent(decision.feedback);
      return this.markCanonical(exec, {
        content: decision.feedback,
        isError: true,
        error: { message },
        ...decisionContexts.length > 0 ? { additionalContexts: decisionContexts } : {}
      });
    }
    if (Object.hasOwn(decision, "content") && Object.hasOwn(decision, "value")) throw new TypeError("tools/post-execute accept decision cannot replace both value and content");
    const additionalContexts = [...result.additionalContexts ?? [], ...decisionContexts];
    if (Object.hasOwn(decision, "value")) {
      if (result.isError) throw new TypeError("tools/post-execute cannot replace the value of a failed result");
      const tool = this.resolveExecution(exec.name, exec.agent, exec.parent !== void 0);
      if (tool === void 0) throw new ToolNotFoundError(exec.name);
      const replaced = this.createSuccessResult(exec, tool, decision.value);
      return this.markCanonical(exec, {
        ...replaced,
        ...additionalContexts.length > 0 ? { additionalContexts } : {}
      });
    }
    return this.markCanonical(exec, {
      ...result,
      ...decision.content !== void 0 ? { content: decision.content } : {},
      ...additionalContexts.length > 0 ? { additionalContexts } : {}
    });
  }
  /** Registry-normalized results and the exact dispatch that validated each value. */
  canonicalResults = /* @__PURE__ */ new WeakMap();
  /** Mark one registry-normalized result as canonical only for its owning dispatch. */
  markCanonical(exec, result) {
    this.canonicalResults.set(result, exec.token);
    return result;
  }
  /** Snapshot, validate, render, and optionally project one successful body value. */
  createSuccessResult(exec, tool, candidate) {
    const detached = snapshotToolValue(tool.name, candidate);
    const violations = validateJsonSchemaValue(tool.output.schema, detached, "value");
    if (violations.length > 0) throw new ToolOutputError(tool.name, violations);
    const value = deepFreeze(detached);
    let rendered;
    try {
      rendered = tool.output.render(exec.arguments, value);
    } catch (error) {
      throw projectionError(tool.name, "render", error);
    }
    const content = snapshotProjection(tool.name, "render", rendered);
    let meta;
    if (exec.parent === void 0 && tool.output.presentationMeta !== void 0) {
      let projected;
      try {
        projected = tool.output.presentationMeta(exec.arguments, value);
      } catch (error) {
        throw projectionError(tool.name, "presentationMeta", error);
      }
      meta = snapshotProjection(tool.name, "presentationMeta", projected);
    }
    const concludesTurn = this.concludingExecutions.has(exec);
    return this.markCanonical(exec, this.materializeFinalResult({
      isError: false,
      value,
      content,
      ...meta !== void 0 ? { meta } : {},
      ...concludesTurn ? { concludesTurn: true } : {}
    }));
  }
  /** Normalize an around-dispatch wrapper's authored result through the owning output contract. */
  normalizeDispatchResult(exec, result) {
    if (this.canonicalResults.get(result) === exec.token) return result;
    if (result.isError) return this.markCanonical(exec, {
      isError: true,
      error: result.error,
      content: result.content,
      ...result.meta !== void 0 ? { meta: result.meta } : {},
      ...result.additionalContexts !== void 0 ? { additionalContexts: result.additionalContexts } : {}
    });
    const tool = this.resolveExecution(exec.name, exec.agent, exec.parent !== void 0);
    if (tool === void 0) throw new ToolNotFoundError(exec.name);
    const normalized = this.createSuccessResult(exec, tool, result.value);
    return this.markCanonical(exec, {
      ...normalized,
      ...result.additionalContexts !== void 0 ? { additionalContexts: result.additionalContexts } : {}
    });
  }
  /** Materialize the authoritative commit outcome once, immediately before `tools/result`. */
  materializeFinalResult(result) {
    const presentation = {
      content: result.content,
      ...result.meta !== void 0 ? { meta: result.meta } : {},
      ...result.additionalContexts !== void 0 ? { additionalContexts: result.additionalContexts } : {}
    };
    if (result.isError) return materializePresentation({
      isError: true,
      error: result.error,
      ...presentation
    });
    return deepFreeze({
      ...materializePresentation({
        isError: false,
        ...presentation,
        ...result.concludesTurn === true ? { concludesTurn: true } : {}
      }),
      value: result.value
    });
  }
};
function createExecutionToken() {
  return /* @__PURE__ */ Symbol("dsh.tool.execution");
}
function toolErrorResult(error) {
  const info = errorInfo(error);
  const message = errorMessage2(error);
  return {
    content: [{
      type: "text",
      text: `Error: ${message}`
    }],
    isError: true,
    error: {
      message,
      ...info ? { info } : {}
    }
  };
}
function isAborted(signal) {
  return signal.aborted;
}
function fuseToolSignals(caller, wrapper) {
  if (caller === wrapper) return {
    signal: caller,
    dispose() {
    }
  };
  const controller = new AbortController();
  let listening = false;
  const dispose = () => {
    if (!listening) return;
    listening = false;
    caller.removeEventListener("abort", abortFromCaller);
    wrapper.removeEventListener("abort", abortFromWrapper);
  };
  const abortFrom = (source) => {
    const reason = source.reason;
    controller.abort(reason);
    dispose();
  };
  const abortFromCaller = () => {
    abortFrom(caller);
  };
  const abortFromWrapper = () => {
    abortFrom(wrapper);
  };
  if (wrapper.aborted) abortFromWrapper();
  else if (caller.aborted) abortFromCaller();
  else {
    listening = true;
    caller.addEventListener("abort", abortFromCaller, { once: true });
    wrapper.addEventListener("abort", abortFromWrapper, { once: true });
  }
  return {
    signal: controller.signal,
    dispose
  };
}
function toolAbortedResult(prior) {
  const additionalContexts = prior?.additionalContexts ?? [];
  return {
    content: [{
      type: "text",
      text: "Error: tool call aborted"
    }],
    isError: true,
    error: {
      message: "tool call aborted",
      info: {
        name: "AbortError",
        code: TOOL_ABORTED
      }
    },
    ...additionalContexts.length > 0 ? { additionalContexts } : {}
  };
}
function toolAbortedBeforeDispatchResult(prior) {
  const additionalContexts = prior?.additionalContexts ?? [];
  return {
    content: [{
      type: "text",
      text: "Error: tool call aborted before dispatch"
    }],
    isError: true,
    error: {
      message: "tool call aborted before dispatch",
      info: {
        name: "AbortError",
        code: TOOL_ABORTED_BEFORE_DISPATCH
      }
    },
    ...additionalContexts.length > 0 ? { additionalContexts } : {}
  };
}

// ../../packages/harness-base/src/dsh-tools.ts
var TOOL_OUTPUT_SCHEMA = { type: "object" };
function renderValue2(_args, value) {
  return [{ type: "text", text: typeof value === "string" ? value : JSON.stringify(value) }];
}
function toolsCompatPlugin(options = {}) {
  return {
    name: "tools-compat",
    apply(ctx) {
      if (!ctx.get("systemPrompt")) {
        ctx.reflect.provide("systemPrompt", {
          tools: () => ({ dispose: () => {
          } }),
          section: () => ({ dispose: () => {
          } })
        });
      }
      const runtime = new ToolRuntime(ctx);
      ctx.on("tools/pre-execute", async (exec, next) => {
        if (options.approve) {
          const decision = await options.approve({
            name: exec.name,
            arguments: exec.arguments,
            signal: exec.signal
          });
          if (decision === "deny") return { kind: "deny", reason: "\u7528\u6237\u62D2\u7EDD\u6267\u884C" };
        }
        return next();
      });
      const defs = /* @__PURE__ */ new Map();
      const facade = {
        register(def) {
          if (defs.has(def.name)) throw new Error(`\u5DE5\u5177\u5DF2\u6CE8\u518C: ${def.name}`);
          const definition = {
            name: def.name,
            description: def.description,
            parameters: def.input,
            output: {
              schema: TOOL_OUTPUT_SCHEMA,
              render: renderValue2
            },
            execute: async (args) => {
              const raw = await def.execute(args);
              return JSON.parse(JSON.stringify(raw));
            }
          };
          const disposer = runtime.register(definition);
          defs.set(def.name, def);
          return () => {
            try {
              disposer();
            } catch (err) {
              console.warn(`[dsh] \u5DE5\u5177\u6CE8\u9500\u5931\u8D25\uFF08\u5FFD\u7565\uFF09: ${def.name}`, err);
            } finally {
              defs.delete(def.name);
            }
          };
        },
        get(name) {
          return defs.get(name);
        },
        list() {
          return [...defs.values()];
        },
        execute(input) {
          return runtime.execute(input);
        }
      };
      ctx.reflect.provide("toolsCompat", facade);
    }
  };
}

// ../../packages/harness-base/src/log.ts
var LEVEL_ORDER = { debug: 0, info: 1, warn: 2, error: 3 };
function shouldLog(actual, minLevel) {
  return LEVEL_ORDER[actual] >= LEVEL_ORDER[minLevel];
}

// ../../packages/harness-base/src/agent-loop.ts
function safeParseArguments(raw) {
  try {
    const v2 = JSON.parse(raw);
    return v2 && typeof v2 === "object" ? v2 : {};
  } catch {
    return {};
  }
}
function toWireToolCalls(calls) {
  return calls.map((tc) => ({
    id: tc.id,
    type: "function",
    function: { name: tc.name, arguments: tc.arguments }
  }));
}
function buildMessages(history, system) {
  const out = [];
  if (system) out.push({ role: "system", content: system });
  const pending = /* @__PURE__ */ new Set();
  for (const e of history) {
    if (e.type === "user/message") {
      out.push({ role: "user", content: e.content });
    } else if (e.type === "assistant/message") {
      out.push({ role: "assistant", content: e.content });
    } else if (e.type === "system/message") {
      out.push({ role: "system", content: e.content });
    } else if (e.type === "tool/call") {
      pending.add(e.id);
      out.push({
        role: "assistant",
        content: "",
        tool_calls: [
          {
            id: e.id,
            type: "function",
            function: {
              name: e.tool,
              arguments: typeof e.input === "string" ? e.input : JSON.stringify(e.input)
            }
          }
        ]
      });
    } else if (e.type === "tool/result") {
      if (!pending.has(e.id)) continue;
      pending.delete(e.id);
      out.push({
        role: "tool",
        tool_call_id: e.id,
        content: e.ok ? typeof e.output === "string" ? e.output : JSON.stringify(e.output) : `ERROR: ${e.error ?? "unknown"}`
      });
    }
  }
  if (pending.size) {
    return out.filter((m2) => !m2.tool_calls?.some((tc) => pending.has(tc.id)));
  }
  return out;
}
async function runAgentLoop(ac) {
  const maxTurns = ac.maxTurns ?? 8;
  const messages = buildMessages(ac.history, ac.system);
  const signal = ac.signal;
  const throwIfAborted = () => {
    if (signal?.aborted) {
      const err = new Error("\u5DF2\u505C\u6B62");
      err.name = "AbortError";
      throw err;
    }
  };
  ac.onEvent({ type: "turn/start", ts: Date.now(), sessionId: ac.sessionId });
  try {
    for (let turn = 0; turn < maxTurns; turn++) {
      throwIfAborted();
      ac.onPhase?.({ kind: "thinking" });
      const res = await ac.llm.call({
        messages,
        tools: ac.tools.list(),
        signal,
        onDelta: ac.onStream,
        onThinking: ac.onThinking,
        model: ac.model
      });
      if (res.content) {
        const ev = {
          type: "assistant/message",
          ts: Date.now(),
          sessionId: ac.sessionId,
          content: res.content
        };
        ac.onEvent(ev);
        messages.push({ role: "assistant", content: res.content });
      }
      if (!res.toolCalls.length) break;
      messages.push({
        role: "assistant",
        content: res.content ?? "",
        tool_calls: toWireToolCalls(res.toolCalls)
      });
      for (const tc of res.toolCalls) {
        throwIfAborted();
        ac.onPhase?.({ kind: "tool", name: tc.name });
        const input = safeParseArguments(tc.arguments);
        ac.onEvent({
          type: "tool/call",
          ts: Date.now(),
          sessionId: ac.sessionId,
          id: tc.id,
          tool: tc.name,
          input
        });
        let result;
        try {
          result = await ac.executeTool(tc.name, input);
        } catch (err) {
          result = { ok: false, error: err instanceof Error ? err.message : String(err) };
        }
        ac.onEvent({
          type: "tool/result",
          ts: Date.now(),
          sessionId: ac.sessionId,
          id: tc.id,
          tool: tc.name,
          ok: result.ok,
          output: result.output,
          error: result.error
        });
        messages.push({
          role: "tool",
          tool_call_id: tc.id,
          content: result.ok ? typeof result.output === "string" ? result.output : JSON.stringify(result.output) : `ERROR: ${result.error ?? "unknown"}`
        });
      }
    }
    ac.onPhase?.({ kind: "done" });
  } finally {
    ac.onEvent({ type: "turn/end", ts: Date.now(), sessionId: ac.sessionId });
  }
}

// ../../packages/harness-base/src/index.ts
function harnessServicesPlugin(cfg) {
  return {
    name: "harness-base",
    apply(ctx) {
      const sandbox = new SandboxPolicy(cfg.sandbox);
      const approval = new ApprovalService(cfg.approvalStore);
      const sessions = new SessionLog(cfg.sessionDir);
      const llmRuntime = new LlmRuntime(ctx);
      llmRuntime.registerAdapter(
        cfg.providerIds,
        new DeepSeekAdapter((provider) => cfg.getLLMConfig(provider))
      );
      const llmCaller = createLlmCaller(llmRuntime, {
        getConfig: (provider) => cfg.getLLMConfig(provider),
        defaultProvider: () => cfg.defaultProvider(),
        defaultModel: () => cfg.defaultModel()
      });
      const minLevel = cfg.logLevel ?? "info";
      ctx.on(
        "llm/stream",
        async function* (options, next) {
          if (shouldLog("info", minLevel)) {
            console.info(`[dsh] llm/stream ${options.provider}/${options.model}`);
          }
          const t0 = Date.now();
          try {
            yield* next();
          } finally {
            if (shouldLog("info", minLevel)) {
              console.info(`[dsh] llm/stream \u5B8C\u6210 ${Date.now() - t0}ms`);
            }
          }
        }
      );
      ctx.plugin(toolsCompatPlugin({ approve: cfg.approveTool }));
      ctx.reflect.provide("sandbox", sandbox);
      ctx.reflect.provide("approval", approval);
      ctx.reflect.provide("sessionLog", sessions);
      ctx.reflect.provide("llmCaller", llmCaller);
    }
  };
}

// src/policy.ts
function normalizeVaultPath(p) {
  return p.replace(/\\/g, "/").replace(/^\/+/, "").replace(/\/+$/, "");
}
function isPathInDirs(vaultRel, dirs) {
  const norm = normalizeVaultPath(vaultRel);
  if (!norm) return false;
  return dirs.some((d) => {
    const dir = normalizeVaultPath(d);
    if (!dir) return false;
    return norm === dir || norm.startsWith(dir + "/");
  });
}

// ../../packages/obsidian-adapter/src/index.ts
var VaultService = class {
  constructor(api, ctx) {
    this.api = api;
    this.ctx = ctx;
    for (const ev of ["modify", "create", "delete", "rename"]) {
      const ref = api.vault.on(ev, (path8, oldPath) => {
        ctx.emit(`vault/${ev}`, path8, oldPath);
      });
      ctx.effect(() => () => ref.unref());
    }
  }
  api;
  ctx;
  read(path8) {
    return this.api.vault.read(path8);
  }
  write(path8, content) {
    return this.api.vault.write(path8, content);
  }
  create(path8, content) {
    return this.api.vault.create(path8, content);
  }
  createFolder(path8) {
    return this.api.vault.createFolder(path8);
  }
  delete(path8) {
    return this.api.vault.delete(path8);
  }
  rename(oldPath, newPath) {
    return this.api.vault.rename(oldPath, newPath);
  }
  /** 全部 markdown 笔记路径（vault 相对路径列表） */
  listMarkdown() {
    return this.api.vault.getMarkdownPaths();
  }
  /** 全部 markdown 笔记路径（直观别名，插件作者常用名） */
  getMarkdownPaths() {
    return this.listMarkdown();
  }
};
var EditorService = class {
  provider = () => null;
  /** 由 apps/plugin 桥接层注入真实编辑器访问器 */
  setProvider(provider) {
    this.provider = provider;
  }
  get activeEditor() {
    return this.provider();
  }
  getActiveFile() {
    return this.provider()?.filePath ?? null;
  }
  insertText(text2) {
    this.provider()?.insertText(text2);
  }
  replaceSelection(text2) {
    this.provider()?.replaceSelection(text2);
  }
  getSelection() {
    return this.provider()?.getSelection() ?? null;
  }
};
var WorkspaceService = class {
  constructor(api, ctx) {
    this.api = api;
    this.ctx = ctx;
    const ref = api.workspace.onFileOpen((path8) => ctx.emit("workspace/file-open", path8));
    ctx.effect(() => () => ref.unref());
  }
  api;
  ctx;
  getActiveFile() {
    return this.api.workspace.getActiveFile();
  }
};
var CommandsService = class {
  constructor(api) {
    this.api = api;
  }
  api;
  addCommand(cmd) {
    this.api.commands.addCommand(cmd);
    const id = cmd.id;
    return () => {
      try {
        this.api.commands.removeCommand(id);
      } catch (err) {
        console.warn("[dsh] \u547D\u4EE4\u5378\u8F7D\u5931\u8D25\uFF08\u5FFD\u7565\uFF09:", err);
      }
    };
  }
};
var ViewsService = class {
  constructor(api) {
    this.api = api;
  }
  api;
  registerView(type, creator) {
    this.api.viewRegistry.registerView(type, creator);
    return () => {
      try {
        for (const leaf of this.api.workspace.getLeavesOfType(type)) leaf.detach();
        this.api.viewRegistry.unregisterView(type);
      } catch (err) {
        console.warn("[dsh] \u89C6\u56FE\u5378\u8F7D\u5931\u8D25\uFF08\u5FFD\u7565\uFF09:", err);
      }
    };
  }
  /** 打开（或聚焦）已注册类型的视图面板 */
  open(type) {
    this.api.viewRegistry.openView(type);
  }
};
var SettingsService = class {
  constructor(io, api) {
    this.api = api;
    const loaded = io.load();
    this.data = loaded && typeof loaded === "object" ? loaded : {};
    this.io = io;
  }
  api;
  data;
  io;
  get(key, fallback) {
    return this.data[key] ?? fallback;
  }
  set(key, value) {
    this.data[key] = value;
    this.io.save(this.data);
  }
  /** 注册插件自己的设置页（SettingsTab）；随宿主插件卸载自动移除 */
  registerSettingTab(tab) {
    this.api.settingsUi.addSettingTab(tab);
  }
};
var RibbonService = class {
  constructor(api) {
    this.api = api;
  }
  api;
  addRibbonIcon(icon, title, callback) {
    const handle = this.api.ribbon.addRibbonIcon(icon, title, callback);
    return () => {
      try {
        handle.remove();
      } catch (err) {
        console.warn("[dsh] \u56FE\u6807\u5378\u8F7D\u5931\u8D25\uFF08\u5FFD\u7565\uFF09:", err);
      }
    };
  }
};
var StatusbarService = class {
  constructor(api) {
    this.api = api;
  }
  api;
  addStatusBarItem() {
    return this.api.statusbar.addStatusBarItem();
  }
};
var NoticeService = class {
  constructor(api) {
    this.api = api;
  }
  api;
  notice(message, timeout) {
    this.api.notice.notice(message, timeout);
  }
};
function obsidianAdapterPlugin(api, settingsIO) {
  return {
    name: "obsidian-adapter",
    apply(ctx) {
      const vault = new VaultService(api, ctx);
      const editor = new EditorService();
      const workspace = new WorkspaceService(api, ctx);
      const commands = new CommandsService(api);
      const views = new ViewsService(api);
      const settings = new SettingsService(
        settingsIO ?? { load: () => ({}), save: () => {
        } },
        api
      );
      const notice = new NoticeService(api);
      const ribbon = new RibbonService(api);
      const statusbar = new StatusbarService(api);
      ctx.reflect.provide("vault", vault);
      ctx.reflect.provide("editor", editor);
      ctx.reflect.provide("workspace", workspace);
      ctx.reflect.provide("commands", commands);
      ctx.reflect.provide("views", views);
      ctx.reflect.provide("settings", settings);
      ctx.reflect.provide("ribbon", ribbon);
      ctx.reflect.provide("statusbar", statusbar);
      ctx.reflect.provide("notice", notice);
    }
  };
}

// ../../packages/plugin-runtime/src/index.ts
var fs2 = __toESM(require("fs"));
var path3 = __toESM(require("path"));
function readPluginManifest(dir) {
  const pkg = JSON.parse(fs2.readFileSync(path3.join(dir, "package.json"), "utf8"));
  const dsh = pkg.dsh ?? {};
  const id = dsh.id ?? pkg.name;
  if (!id) throw new Error(`\u63D2\u4EF6\u7F3A\u5C11 dsh.id\uFF08${path3.join(dir, "package.json")}\uFF09`);
  const version2 = dsh.version ?? pkg.version ?? "0.0.0";
  return {
    id,
    version: version2,
    entry: dsh.entry ?? "main.js",
    name: pkg.name,
    description: pkg.description
  };
}
function detectCapabilities(code) {
  const capabilities = [];
  if (/registerView\s*\(/.test(code)) capabilities.push("panel");
  if (/addRibbonIcon\s*\(/.test(code)) capabilities.push("ribbon");
  if (/addCommand\s*\(/.test(code)) capabilities.push("commands");
  if (/toolsCompat\.register|ctx\.tools\.register/.test(code)) capabilities.push("tools");
  if (/addStatusBarItem\s*\(/.test(code)) capabilities.push("statusbar");
  if (/registerSettingTab/.test(code)) capabilities.push("settings");
  const m2 = code.match(/registerView\s*\(\s*['"]([^'"]+)['"]/);
  return { capabilities, viewType: m2?.[1] };
}
async function loadUserPlugin(ctx, dir, deps) {
  const manifest = readPluginManifest(dir);
  const entryPath = path3.join(dir, manifest.entry);
  const code = await fs2.promises.readFile(entryPath, "utf8");
  const module2 = { exports: {} };
  const localRequire = (id) => deps.require(id);
  const fn = new Function("module", "exports", "require", "__dirname", "__filename", code);
  fn(module2, module2.exports, localRequire, dir, entryPath);
  const exported = module2.exports.default ?? module2.exports;
  if (typeof exported !== "function" && typeof exported?.apply !== "function") {
    throw new Error(`\u63D2\u4EF6 ${manifest.id} \u7684\u5165\u53E3\u6CA1\u6709\u5BFC\u51FA Cordis \u63D2\u4EF6\uFF08\u9700 default \u5BFC\u51FA\u6216 { apply } \u5BF9\u8C61\uFF09`);
  }
  const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const hostId = deps.hostId;
  const hostName = deps.hostName ?? deps.hostId;
  const stripLeading = (s, prefix) => s.replace(new RegExp(`^${escapeRegExp(prefix)}:\\s*`), "");
  const bareCommandId = (id) => {
    let out = id;
    if (hostId) out = stripLeading(out, `${hostId}:${manifest.id}`);
    out = stripLeading(out, manifest.id);
    if (hostId) out = stripLeading(out, hostId);
    return out;
  };
  const bareCommandName = (name) => {
    let out = name;
    if (hostId) out = stripLeading(out, `${hostId}:${manifest.id}`);
    out = stripLeading(out, manifest.id);
    if (hostName) out = stripLeading(out, hostName);
    return out.replace(new RegExp(`\\s*\uFF08${escapeRegExp(manifest.id)}\uFF09\\s*$`), "");
  };
  const baseCommands = ctx.get("commands");
  const pluginCtx = baseCommands ? ctx.extend({
    commands: {
      addCommand: (cmd) => baseCommands.addCommand({
        ...cmd,
        id: hostId ? `${hostId}:${manifest.id}:${bareCommandId(cmd.id)}` : `${manifest.id}:${bareCommandId(cmd.id)}`,
        name: cmd.name ? hostId ? `${hostName}: ${bareCommandName(cmd.name)}\uFF08${manifest.id}\uFF09` : `${manifest.id}: ${bareCommandName(cmd.name)}` : cmd.name
      })
    }
  }) : ctx;
  const fiber = pluginCtx.plugin(exported);
  await fiber;
  return { id: manifest.id, dir, manifest, fiber };
}
var PluginRuntime = class {
  constructor(ctx, opts) {
    this.ctx = ctx;
    this.opts = opts;
  }
  ctx;
  opts;
  records = /* @__PURE__ */ new Map();
  /** 发现插件目录（跳过隐藏目录） */
  async discover() {
    let names;
    try {
      names = await fs2.promises.readdir(this.opts.pluginsDir);
    } catch {
      return [];
    }
    return names.filter((n) => !n.startsWith("."));
  }
  /** 只读检查：解析 manifest + 能力检测，不执行任何代码（用于授权前展示） */
  inspect(id) {
    const dir = path3.join(this.opts.pluginsDir, id);
    const rec = { id, dir, status: "stopped" };
    try {
      rec.manifest = readPluginManifest(dir);
      const entry = path3.join(dir, rec.manifest.entry);
      const code = fs2.readFileSync(entry, "utf8");
      const detected = detectCapabilities(code);
      rec.capabilities = detected.capabilities;
      rec.viewType = detected.viewType;
    } catch (err) {
      rec.status = "error";
      rec.error = err instanceof Error ? err.message : String(err);
    }
    return rec;
  }
  /** 加载（含 manifest 解析与入口执行）；失败返回 error 记录而非抛出 */
  async load(id) {
    const dir = path3.join(this.opts.pluginsDir, id);
    const base = { id, dir, status: "error" };
    try {
      base.manifest = readPluginManifest(dir);
    } catch (err) {
      base.error = err instanceof Error ? err.message : String(err);
      this.records.set(id, base);
      return base;
    }
    try {
      const loaded = await loadUserPlugin(this.ctx, dir, {
        require: this.opts.require,
        hostId: this.opts.hostId,
        hostName: this.opts.hostName
      });
      const rec = { id, dir, manifest: loaded.manifest, status: "running", loaded };
      this.records.set(id, rec);
      return rec;
    } catch (err) {
      base.error = err instanceof Error ? err.message : String(err);
      this.records.set(id, base);
      return base;
    }
  }
  async stop(id) {
    const rec = this.records.get(id);
    if (!rec?.loaded) return;
    try {
      await rec.loaded.fiber.dispose();
    } finally {
      rec.status = "stopped";
      rec.loaded = void 0;
    }
  }
  async unload(id) {
    await this.stop(id);
    this.records.delete(id);
  }
  /** 卸载并删除插件目录（破坏性操作，调用方需先确认） */
  async removeDir(id) {
    await this.unload(id);
    await fs2.promises.rm(path3.join(this.opts.pluginsDir, id), { recursive: true, force: true });
  }
  list() {
    return [...this.records.values()];
  }
  get(id) {
    return this.records.get(id);
  }
};
function runtimePlugin(opts) {
  return {
    name: "plugin-runtime",
    apply(ctx) {
      ctx.reflect.provide("pluginRuntime", new PluginRuntime(ctx, opts));
    }
  };
}

// src/obsidian-bridge.ts
var import_obsidian = require("obsidian");
function toApiLike(app, plugin) {
  const appLike = app;
  const cmdApi = appLike.commands;
  const viewApi = appLike.viewRegistry;
  return {
    vault: {
      async read(path8) {
        const file = app.vault.getAbstractFileByPath(path8);
        if (file instanceof import_obsidian.TFile) return app.vault.read(file);
        return app.vault.adapter.read(path8);
      },
      async write(path8, content) {
        const file = app.vault.getAbstractFileByPath(path8);
        if (file instanceof import_obsidian.TFile) {
          await app.vault.modify(file, content);
          return;
        }
        const stat = await app.vault.adapter.stat(path8).catch(() => null);
        if (stat) {
          await app.vault.adapter.write(path8, content);
          return;
        }
        await app.vault.create(path8, content);
      },
      async create(path8, content) {
        await app.vault.create(path8, content);
      },
      async createFolder(path8) {
        const parts = path8.split("/").filter(Boolean);
        let current2 = "";
        for (const part of parts) {
          current2 = current2 ? `${current2}/${part}` : part;
          if (app.vault.getAbstractFileByPath(current2)) continue;
          try {
            await app.vault.createFolder(current2);
          } catch {
          }
        }
      },
      async delete(path8) {
        const file = app.vault.getAbstractFileByPath(path8);
        if (file instanceof import_obsidian.TFile) await app.vault.delete(file);
      },
      async rename(oldPath, newPath) {
        const file = app.vault.getAbstractFileByPath(oldPath);
        if (file instanceof import_obsidian.TFile) await app.vault.rename(file, newPath);
      },
      getMarkdownPaths() {
        return app.vault.getMarkdownFiles().map((f2) => f2.path);
      },
      on(event, cb) {
        const ref = app.vault.on(event, (file, oldPath) => {
          cb(file.path, typeof oldPath === "string" ? oldPath : void 0);
        });
        return { unref: () => app.vault.offref(ref) };
      }
    },
    workspace: {
      getActiveFile() {
        return app.workspace.getActiveFile()?.path ?? null;
      },
      getLeavesOfType(type) {
        return app.workspace.getLeavesOfType(type);
      },
      onFileOpen(cb) {
        const ref = app.workspace.on("file-open", (file) => {
          if (file) cb(file.path);
        });
        return { unref: () => app.workspace.offref(ref) };
      }
    },
    commands: {
      addCommand(cmd) {
        return cmdApi.addCommand(cmd);
      },
      removeCommand(id) {
        cmdApi.removeCommand(id);
      }
    },
    viewRegistry: {
      registerView(type, creator) {
        viewApi.registerView(type, creator);
      },
      unregisterView(type) {
        viewApi.unregisterView(type);
      },
      openView(type) {
        const leaves = app.workspace.getLeavesOfType(type);
        let leaf = leaves[0];
        if (!leaf) {
          leaf = app.workspace.getRightLeaf(false);
          if (!leaf) return;
          void leaf.setViewState({ type, active: true });
        }
        app.workspace.setActiveLeaf(leaf);
      }
    },
    ribbon: {
      addRibbonIcon(icon, title, callback) {
        if (!plugin) throw new Error("ribbon \u670D\u52A1\u9700\u8981\u5BBF\u4E3B\u63D2\u4EF6\u5B9E\u4F8B");
        const el = plugin.addRibbonIcon(icon, title, callback);
        return { remove: () => el.remove() };
      }
    },
    statusbar: {
      addStatusBarItem() {
        if (!plugin) throw new Error("statusbar \u670D\u52A1\u9700\u8981\u5BBF\u4E3B\u63D2\u4EF6\u5B9E\u4F8B");
        const el = plugin.addStatusBarItem();
        return { el, remove: () => el.remove() };
      }
    },
    settingsUi: {
      addSettingTab(tab) {
        if (plugin) {
          const appLike2 = app;
          appLike2.addSettingTab(plugin, tab);
        }
      }
    },
    notice: {
      notice(message, timeout) {
        new import_obsidian.Notice(message, timeout);
      }
    },
    openTarget: async (target) => {
      const { shell } = require("electron");
      if (/^[a-z][a-z0-9+.-]*:/i.test(target)) {
        await shell.openExternal(target);
      } else {
        const error = await shell.openPath(target);
        if (error) throw new Error(`\u6253\u5F00\u5931\u8D25: ${error}`);
      }
    }
  };
}

// src/settings.ts
var BUILTIN_AGENTS = [
  { id: "chat", name: "\u5BF9\u8BDD\u6A21\u5F0F", mode: "chat", description: "\u4EC5\u5BF9\u8BDD\u4E0E\u8BFB\u53D6\u4FE1\u606F" },
  { id: "edit", name: "\u4FEE\u7F16\u6A21\u5F0F", mode: "edit", description: "\u53EF\u8BFB\u5199\u7B14\u8BB0\uFF08\u9ED8\u8BA4\uFF09" },
  { id: "create", name: "\u521B\u9020\u6A21\u5F0F", mode: "create", description: "\u5B8C\u6574\u80FD\u529B\uFF08\u53EF\u521B\u5EFA\u63D2\u4EF6\uFF09" }
];
function listVisibleAgents(agents) {
  return agents.filter((a) => a.enabled !== false);
}
function grantDisplay(grant, dirExists, currentVersion) {
  if (!grant) return { badge: "\u672A\u6388\u6743", needsRegrant: false };
  const modeLabel = grant.mode === "all" ? "\u53CC\u52FE" : "\u5355\u52FE";
  const base = `\u5DF2\u6388\u6743(${modeLabel} v${grant.version})`;
  if (!dirExists) return { badge: `${base} \xB7 \u63D2\u4EF6\u76EE\u5F55\u4E0D\u5B58\u5728\uFF08\u6B8B\u7559\u6388\u6743\uFF09`, needsRegrant: false };
  if (grant.mode === "version" && currentVersion && grant.version !== currentVersion) {
    return { badge: `${base} \xB7 \u7248\u672C\u5DF2\u66F4\u65B0\uFF0C\u9700\u91CD\u65B0\u6388\u6743`, needsRegrant: true };
  }
  return { badge: base, needsRegrant: false };
}
var DEFAULT_PROVIDER = {
  id: "deepseek",
  name: "DeepSeek",
  baseURL: "https://api.deepseek.com",
  apiKey: "",
  models: ["deepseek-chat"],
  temperature: 0.7,
  maxTokens: 0,
  extraHeaders: []
};
function defaultSettings() {
  return {
    providers: [{ ...DEFAULT_PROVIDER, models: [...DEFAULT_PROVIDER.models] }],
    defaultModelId: "deepseek/deepseek-chat",
    agents: BUILTIN_AGENTS.map((a) => ({ ...a })),
    activeAgentId: "edit",
    approvalDefault: "ask",
    writeAllowDirs: [],
    toolPolicy: [],
    sessionRetentionDays: 0,
    exportDir: "sessions",
    logLevel: "info",
    confineToCurrentNote: false,
    streamingEnabled: true,
    renderMarkdown: true,
    uiLanguage: "auto",
    grants: {}
  };
}
function parseModelId(modelId) {
  const idx = modelId.indexOf("/");
  if (idx <= 0 || idx === modelId.length - 1) return null;
  return { provider: modelId.slice(0, idx), model: modelId.slice(idx + 1) };
}
function asProvider(p) {
  const legacyModel = p.model;
  const models = Array.isArray(p.models) ? p.models.filter((m2) => typeof m2 === "string" && !!m2) : typeof legacyModel === "string" && legacyModel ? [legacyModel] : [];
  return {
    id: typeof p.id === "string" ? p.id : `provider-${Math.random().toString(36).slice(2, 8)}`,
    name: typeof p.name === "string" && p.name ? p.name : "\u63D0\u4F9B\u65B9",
    baseURL: typeof p.baseURL === "string" ? p.baseURL : "",
    apiKey: typeof p.apiKey === "string" ? p.apiKey : "",
    models: models.length ? [...new Set(models)] : [],
    temperature: typeof p.temperature === "number" ? p.temperature : DEFAULT_PROVIDER.temperature,
    maxTokens: typeof p.maxTokens === "number" ? p.maxTokens : DEFAULT_PROVIDER.maxTokens,
    extraHeaders: Array.isArray(p.extraHeaders) ? p.extraHeaders : []
  };
}
function migrateSettings(raw) {
  const base = defaultSettings();
  if (!raw || typeof raw !== "object") return base;
  const r = raw;
  const providers = Array.isArray(r.providers) ? r.providers.filter((p) => p && typeof p.id === "string") : [];
  if (providers.length) {
    base.providers = providers.map(asProvider);
  } else {
    base.providers = [
      asProvider({
        id: "deepseek",
        name: "DeepSeek",
        baseURL: typeof r.baseURL === "string" && r.baseURL ? r.baseURL : DEFAULT_PROVIDER.baseURL,
        apiKey: typeof r.apiKey === "string" ? r.apiKey : "",
        model: typeof r.model === "string" && r.model ? r.model : "deepseek-chat",
        models: Array.isArray(r.models) ? r.models : void 0,
        temperature: typeof r.temperature === "number" ? r.temperature : void 0,
        maxTokens: typeof r.maxTokens === "number" ? r.maxTokens : void 0
      })
    ];
  }
  const first = base.providers[0];
  if (typeof r.defaultModelId === "string" && parseModelId(r.defaultModelId)) {
    base.defaultModelId = r.defaultModelId;
  } else {
    const legacyProvider = typeof r.defaultProviderId === "string" && r.defaultProviderId || typeof r.activeProviderId === "string" && r.activeProviderId;
    const lp = typeof legacyProvider === "string" ? base.providers.find((p) => p.id === legacyProvider) : void 0;
    const target = lp ?? first;
    base.defaultModelId = target.models[0] ? `${target.id}/${target.models[0]}` : `${first.id}/${first.models[0] ?? "deepseek-chat"}`;
  }
  if (!base.providers.some((p) => p.id === parseModelId(base.defaultModelId)?.provider)) {
    base.defaultModelId = `${first.id}/${first.models[0] ?? "deepseek-chat"}`;
  }
  const agents = Array.isArray(r.agents) ? r.agents.filter((a) => a && typeof a.id === "string") : [];
  base.agents = (agents.length ? agents : BUILTIN_AGENTS.map((a) => ({ ...a }))).map((a) => {
    const builtin = BUILTIN_AGENTS.find((b2) => b2.id === a.id);
    return builtin ? { ...a, ...builtin, enabled: a.enabled !== false } : { ...a, enabled: a.enabled !== false };
  });
  const legacyMode = ["chat", "edit", "create"].includes(r.agentMode) ? r.agentMode : "edit";
  base.activeAgentId = typeof r.activeAgentId === "string" && base.agents.some((a) => a.id === r.activeAgentId) ? r.activeAgentId : typeof r.activeAgentId === "string" ? r.activeAgentId : legacyMode;
  base.approvalDefault = r.approvalDefault === "deny" ? "deny" : "ask";
  base.writeAllowDirs = Array.isArray(r.writeAllowDirs) ? r.writeAllowDirs.filter((x2) => typeof x2 === "string") : [];
  base.toolPolicy = Array.isArray(r.toolPolicy) ? r.toolPolicy.filter((x2) => typeof x2 === "string") : [];
  base.sessionRetentionDays = typeof r.sessionRetentionDays === "number" ? r.sessionRetentionDays : 0;
  base.exportDir = typeof r.exportDir === "string" ? r.exportDir.trim() : "sessions";
  base.logLevel = ["debug", "info", "warn", "error"].includes(r.logLevel) ? r.logLevel : "info";
  base.confineToCurrentNote = r.confineToCurrentNote === true;
  base.streamingEnabled = r.streamingEnabled !== false;
  base.renderMarkdown = r.renderMarkdown !== false;
  base.uiLanguage = r.uiLanguage === "en" ? "en" : r.uiLanguage === "zh" ? "zh" : "auto";
  base.grants = r.grants ?? {};
  return base;
}
function parseToolPolicy(lines) {
  const map = /* @__PURE__ */ new Map();
  for (const line of lines) {
    const idx = line.indexOf("=");
    if (idx <= 0) continue;
    const name = line.slice(0, idx).trim();
    const mode = line.slice(idx + 1).trim();
    if (!name || mode !== "ask" && mode !== "allow" && mode !== "deny") continue;
    map.set(name, mode);
  }
  return map;
}
function parseHeaderLines(lines) {
  const headers = {};
  for (const line of lines) {
    const idx = line.indexOf(":");
    if (idx <= 0) continue;
    const name = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (!name || !value) continue;
    headers[name] = value;
  }
  return headers;
}

// src/settings-tab.ts
var import_obsidian3 = require("obsidian");

// src/modals.ts
var import_obsidian2 = require("obsidian");

// src/i18n/zh.ts
var dict = {
  // ---------- common ----------
  "common.confirm": "\u786E\u8BA4",
  "common.cancel": "\u53D6\u6D88",
  "common.delete": "\u5220\u9664",
  "common.copied": "\u5DF2\u590D\u5236",
  "common.copy": "\u590D\u5236",
  "common.openSettings": "\u6253\u5F00\u8BBE\u7F6E",
  "common.save": "\u4FDD\u5B58",
  "common.error": "\u9519\u8BEF",
  "common.stopped": "\u5DF2\u505C\u6B62",
  "common.retry": "\u91CD\u8BD5",
  "common.singleCheck": "\u5355\u52FE",
  "common.doubleCheck": "\u53CC\u52FE",
  // ---------- 命令 / ribbon（注册时当前语言） ----------
  "cmd.openChat": "\u6253\u5F00 Harness Like \u9762\u677F",
  "cmd.openPluginManager": "\u6253\u5F00 Harness Like \u63D2\u4EF6\u7BA1\u7406\u5668",
  "cmd.reloadUserPlugins": "\u91CD\u8F7D\u5DF2\u6388\u6743\u7684\u7528\u6237\u63D2\u4EF6",
  "cmd.ribbonTitle": "\u6253\u5F00 Harness Like",
  // ---------- agent 预设（内置智能体按语言显示） ----------
  "agent.chat.name": "\u5BF9\u8BDD\u6A21\u5F0F",
  "agent.chat.desc": "\u4EC5\u5BF9\u8BDD\u4E0E\u8BFB\u53D6\u4FE1\u606F",
  "agent.edit.name": "\u4FEE\u7F16\u6A21\u5F0F",
  "agent.edit.desc": "\u53EF\u8BFB\u5199\u7B14\u8BB0\uFF08\u9ED8\u8BA4\uFF09",
  "agent.create.name": "\u521B\u9020\u6A21\u5F0F",
  "agent.create.desc": "\u5B8C\u6574\u80FD\u529B\uFF08\u53EF\u521B\u5EFA\u63D2\u4EF6\uFF09",
  "agent.mode.chat": "\u5BF9\u8BDD\u6A21\u5F0F",
  "agent.mode.edit": "\u4FEE\u7F16\u6A21\u5F0F",
  "agent.mode.create": "\u521B\u9020\u6A21\u5F0F",
  "agent.unnamed": "\u672A\u547D\u540D",
  "agent.new": "\u65B0\u667A\u80FD\u4F53",
  // ---------- Chat 面板 ----------
  "chat.header.newSession": "\uFF0B \u65B0\u4F1A\u8BDD",
  "chat.header.pluginManager": "\u63D2\u4EF6\u7BA1\u7406\u5668",
  "chat.toolbar.confine": "\u4EC5\u5F53\u524D\u7B14\u8BB0",
  "chat.input.placeholder": "\u8F93\u5165\u6D88\u606F\u2026\uFF08Enter \u53D1\u9001\uFF0CShift+Enter \u6362\u884C\uFF09",
  "chat.send": "\u53D1\u9001",
  "chat.stop": "\u505C\u6B62",
  "chat.phase.thinking": "\u601D\u8003\u4E2D\u2026",
  "chat.phase.tool": "\u8C03\u7528\u5DE5\u5177 {name}\u2026",
  "chat.phase.waiting": "\u7B49\u5F85\u4F60\u7684\u5BA1\u6279\u2026",
  "chat.phase.stopped": "\u5DF2\u505C\u6B62",
  "chat.model.default": "\u6A21\u578B",
  "chat.agent.default": "\u667A\u80FD\u4F53",
  "chat.model.manage": "\u7BA1\u7406\u6A21\u578B\u2026",
  "chat.agent.manage": "\u7BA1\u7406\u667A\u80FD\u4F53\u2026",
  "chat.agent.switched": "\u5DF2\u5207\u6362\u5230\u667A\u80FD\u4F53\u300C{name}\u300D{desc}",
  "chat.agent.toolDenied": "\u5F53\u524D\u667A\u80FD\u4F53\u300C{name}\u300D\u4E0D\u5141\u8BB8\u4F7F\u7528\u5DE5\u5177 {tool}",
  "chat.welcome.desc": "\u5728 Obsidian \u5185\u8FD0\u884C Cordis \u63D2\u4EF6\u4F53\u7CFB\u4E0E agent\u3002\u8BD5\u8BD5\u4E0B\u9762\u7684\u793A\u4F8B\uFF0C\u6216\u76F4\u63A5\u8F93\u5165\u4F60\u7684\u95EE\u9898\u3002",
  "chat.welcome.example.1": "\u7EDF\u8BA1 vault \u91CC\u6709\u591A\u5C11\u7B14\u8BB0",
  "chat.welcome.example.2": '\u641C\u7D22\u5305\u542B"\u8BFB\u4E66"\u7684\u7B14\u8BB0',
  "chat.welcome.example.3": "\u603B\u7ED3\u5F53\u524D\u7B14\u8BB0\u7684\u8981\u70B9",
  "chat.welcome.example.4": "\u5199\u4E00\u7BC7\u5468\u8BB0\u5230 Inbox",
  "chat.welcome.noKey": "\u8FD8\u6CA1\u6709\u914D\u7F6E API Key\uFF0C\u5148",
  "chat.list.empty": "\u8FD8\u6CA1\u6709\u4F1A\u8BDD",
  "chat.list.global": "\u5168\u5C40",
  "chat.list.count": "{count} \u6761",
  "chat.list.exportTitle": "\u5BFC\u51FA\u4E3A Markdown",
  "chat.list.deleteTitle": "\u5220\u9664\u4F1A\u8BDD",
  "chat.list.deleteConfirm": "\u5220\u9664\u4F1A\u8BDD {id}\uFF1F\n\u4F1A\u8BDD\u65E5\u5FD7\u6587\u4EF6\u5C06\u88AB\u5220\u9664\uFF0C\u65E0\u6CD5\u6062\u590D\u3002",
  "chat.export.done": "\u5DF2\u5BFC\u51FA: {path}",
  "chat.export.failed": "\u5BFC\u51FA\u5931\u8D25: {msg}",
  "chat.copyTurn": "\u590D\u5236\u672C\u6BB5\u5BF9\u8BDD",
  "chat.tool.call": "\u8C03\u7528\u5DE5\u5177 {tool}",
  "chat.tool.ok": "\u2713 {tool} \u5B8C\u6210",
  "chat.tool.fail": "\u2717 {tool} \u5931\u8D25: {msg}",
  "chat.run.failed": "\u9519\u8BEF: {msg}",
  "chat.msg.user": "\u7528\u6237",
  "chat.msg.assistant": "\u52A9\u624B",
  // ---------- 插件管理器 ----------
  "pm.heading": "\u7528\u6237\u63D2\u4EF6\uFF08.obsidian/harness-like-plugins/\uFF09",
  "pm.viewTitle": "Harness Like \u63D2\u4EF6\u7BA1\u7406\u5668",
  "pm.refresh": "\u5237\u65B0",
  "pm.openDir": "\u6253\u5F00\u63D2\u4EF6\u76EE\u5F55",
  "pm.empty.title": "\u8FD8\u6CA1\u6709\u7528\u6237\u63D2\u4EF6\u3002\u4E09\u6B65\u5F00\u59CB\uFF1A",
  "pm.empty.step1": "\u628A\u63D2\u4EF6\u76EE\u5F55\u590D\u5236\u5230 .obsidian/harness-like-plugins/<id>/\uFF08\u76EE\u5F55\u9700\u542B package.json \u4E0E\u7F16\u8BD1\u4EA7\u7269 main.js\uFF09",
  "pm.empty.step2": '\u70B9\u4E0A\u65B9"\u5237\u65B0"\u6216"\u6253\u5F00\u63D2\u4EF6\u76EE\u5F55"\u786E\u8BA4\u6587\u4EF6\u5C31\u4F4D',
  "pm.empty.step3": '\u70B9"\u6388\u6743\u5E76\u52A0\u8F7D"\uFF0C\u9009\u62E9\u4FE1\u4EFB\u8303\u56F4\uFF08\u5355\u52FE=\u4EC5\u6B64\u7248\u672C / \u53CC\u52FE=\u4FE1\u4EFB\u540E\u7EED\uFF09',
  "pm.empty.hint": "\u5185\u7F6E\u793A\u4F8B\uFF1Aapps/plugin/examples/my-first-plugin/\uFF08\u4ED3\u5E93\u5185\uFF0C\u542B\u9884\u7F16\u8BD1\u4EA7\u7269\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\uFF09",
  "pm.openPanel": "\u6253\u5F00\u9762\u677F",
  "pm.reload": "\u91CD\u65B0\u52A0\u8F7D",
  "pm.stop": "\u505C\u6B62",
  "pm.grantAndLoad": "\u6388\u6743\u5E76\u52A0\u8F7D",
  "pm.delete": "\u5220\u9664",
  "pm.status.running": "\u8FD0\u884C\u4E2D",
  "pm.status.stopped": "\u5DF2\u505C\u6B62",
  "pm.status.error": "\u9519\u8BEF",
  "pm.status.granted": "\u5DF2\u6388\u6743({mode} v{version})",
  "pm.status.ungranted": "\u672A\u6388\u6743",
  "pm.status.stale": "\xB7 \u63D2\u4EF6\u76EE\u5F55\u4E0D\u5B58\u5728\uFF08\u6B8B\u7559\u6388\u6743\uFF09",
  "pm.status.mismatch": "\xB7 \u7248\u672C\u5DF2\u66F4\u65B0\uFF0C\u9700\u91CD\u65B0\u6388\u6743",
  "pm.status.errText": "\u9519\u8BEF: {msg}",
  "pm.cap.panel": "\u9762\u677F",
  "pm.cap.ribbon": "\u56FE\u6807",
  "pm.cap.commands": "\u547D\u4EE4",
  "pm.cap.tools": "\u5DE5\u5177",
  "pm.cap.statusbar": "\u72B6\u6001\u680F",
  "pm.cap.settings": "\u8BBE\u7F6E\u9875",
  "pm.reload.done": "\u63D2\u4EF6\u5DF2\u91CD\u65B0\u52A0\u8F7D: {id}",
  "pm.reload.failed": "\u52A0\u8F7D\u5931\u8D25: {msg}",
  "pm.delete.done": "\u63D2\u4EF6\u5DF2\u5220\u9664: {id}",
  "pm.delete.confirm": "\u5220\u9664\u63D2\u4EF6 {id}\uFF1F\n\u5C06\u5220\u9664 .obsidian/harness-like-plugins/{id}/ \u4E0B\u7684\u5168\u90E8\u6587\u4EF6\uFF08\u542B\u6E90\u7801\uFF09\uFF0C\u65E0\u6CD5\u6062\u590D\u3002",
  "pm.manifest.failed": "\u65E0\u6CD5\u8BFB\u53D6\u63D2\u4EF6\u6E05\u5355: {msg}",
  "pm.load.done": "\u63D2\u4EF6\u5DF2\u52A0\u8F7D: {id}",
  "pm.load.failed": "\u63D2\u4EF6\u52A0\u8F7D\u5931\u8D25: {msg}",
  // ---------- 设置页 ----------
  "settings.tab.model": "\u6A21\u578B",
  "settings.tab.agent": "\u667A\u80FD\u4F53",
  "settings.tab.approval": "\u5BA1\u6279",
  "settings.tab.session": "\u4F1A\u8BDD",
  "settings.tab.data": "\u6570\u636E",
  "settings.tab.ui": "\u754C\u9762",
  "settings.tab.log": "\u65E5\u5FD7",
  "settings.tab.grants": "\u63D2\u4EF6\u6388\u6743",
  // 模型
  "settings.model.addChannel": "\uFF0B \u6DFB\u52A0\u901A\u9053",
  "settings.model.newChannel": "\u65B0\u901A\u9053",
  "settings.model.channel": "\u901A\u9053",
  "settings.model.name": "\u540D\u79F0",
  "settings.model.baseUrl": "Base URL",
  "settings.model.baseUrlDesc": "OpenAI \u517C\u5BB9\u7AEF\u70B9",
  "settings.model.apiKey": "API Key",
  "settings.model.apiKeyDesc": "\u660E\u6587\u4FDD\u5B58\u5728\u672C\u63D2\u4EF6 data.json \u4E2D\uFF0C\u6CE8\u610F\u4FDD\u7BA1",
  "settings.model.list": "\u6A21\u578B\u5217\u8868",
  "settings.model.listDesc": "\u4ECE\u7AEF\u70B9\u83B7\u53D6\u6216\u624B\u52A8\u6DFB\u52A0\uFF1B\u9ED8\u8BA4\u6A21\u578B = \u65B0\u4F1A\u8BDD\u7684\u515C\u5E95",
  "settings.model.modelsCount": "{count} \u4E2A\u6A21\u578B",
  "settings.model.noModels": "\u65E0\u6A21\u578B",
  "settings.model.fetch": "\u4ECE\u7AEF\u70B9\u83B7\u53D6",
  "settings.model.fetchEmpty": "\u7AEF\u70B9\u672A\u8FD4\u56DE\u6A21\u578B\u5217\u8868\uFF0C\u8BF7\u624B\u52A8\u6DFB\u52A0",
  "settings.model.nonePicked": "\u672A\u9009\u62E9\u6A21\u578B",
  "settings.model.added": "\u5DF2\u6DFB\u52A0 {count} \u4E2A\u6A21\u578B",
  "settings.model.fetchFailed": "\u83B7\u53D6\u6A21\u578B\u5931\u8D25: {msg}",
  "settings.model.default": "\u9ED8\u8BA4",
  "settings.model.setDefault": "\u8BBE\u4E3A\u9ED8\u8BA4",
  "settings.model.defaultMark": "\u2713 \u9ED8\u8BA4",
  "settings.model.removeTitle": "\u79FB\u9664\u6A21\u578B",
  "settings.model.inputPlaceholder": "\u624B\u52A8\u8F93\u5165\u6A21\u578B\u540D",
  "settings.model.add": "\u6DFB\u52A0",
  "settings.model.temperature": "Temperature",
  "settings.model.temperatureDesc": "\u91C7\u6837\u6E29\u5EA6\uFF1A\u8D8A\u4F4E\u8D8A\u4FDD\u5B88\uFF0C\u8D8A\u9AD8\u8D8A\u53D1\u6563\uFF080 = \u7AEF\u70B9\u9ED8\u8BA4\uFF09",
  "settings.model.maxTokens": "\u6700\u5927\u8F93\u51FA token \u6570",
  "settings.model.maxTokensDesc": "0 = \u4E0D\u9650\u5236",
  "settings.model.headers": "\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934",
  "settings.model.headersDesc": '\u6BCF\u884C "Header: value"\uFF08\u5982\u7F51\u5173\u9274\u6743\uFF09',
  "settings.model.deleteChannel": "\u5220\u9664\u6B64\u901A\u9053",
  "settings.model.deleteChannelConfirm": "\u5220\u9664\u901A\u9053 {name}\uFF1F",
  // 智能体
  "settings.agent.defaultAgent": "\u9ED8\u8BA4\u667A\u80FD\u4F53",
  "settings.agent.defaultAgentDesc": "\u5BF9\u8BDD\u9762\u677F\u65B0\u4F1A\u8BDD\u7684\u9ED8\u8BA4\u667A\u80FD\u4F53",
  "settings.agent.builtin": "\u5185\u7F6E\u667A\u80FD\u4F53",
  "settings.agent.builtinDesc": "\u542F\u7528\u5F00\u5173\u63A7\u5236\u8BE5\u6A21\u5F0F\u662F\u5426\u51FA\u73B0\u5728\u5BF9\u8BDD\u9762\u677F\u7684\u667A\u80FD\u4F53\u9009\u62E9\u4E2D",
  "settings.agent.currentMark": " \xB7 \u2713 \u5F53\u524D",
  "settings.agent.custom": "\u81EA\u5B9A\u4E49\u667A\u80FD\u4F53",
  "settings.agent.customEmpty": "\u6682\u65E0\u81EA\u5B9A\u4E49\u667A\u80FD\u4F53\u3002\u70B9\u4E0B\u65B9\u6309\u94AE\u6DFB\u52A0\uFF0C\u53EF\u5728\u5F39\u7A97\u4E2D\u52FE\u9009\u53EF\u8C03\u7528\u7684\u80FD\u529B\u3002",
  "settings.agent.capsCount": "{count} \u9879\u80FD\u529B",
  "settings.agent.byMode": "\u6309\u6A21\u5F0F\u9ED8\u8BA4",
  "settings.agent.edit": "\u7F16\u8F91",
  "settings.agent.deleteConfirm": "\u5220\u9664\u667A\u80FD\u4F53 {name}\uFF1F",
  "settings.agent.addCustom": "\uFF0B \u6DFB\u52A0\u81EA\u5B9A\u4E49\u667A\u80FD\u4F53",
  // 审批
  "settings.approval.mode": "\u5199\u64CD\u4F5C\u5BA1\u6279\u9ED8\u8BA4\u6A21\u5F0F",
  "settings.approval.modeDesc": "ask = \u6BCF\u6B21\u8BE2\u95EE\uFF1Bdeny = \u9ED8\u8BA4\u62D2\u7EDD\uFF08\u53EF\u5728 Chat \u9762\u677F\u4F1A\u8BDD\u7EA7\u653E\u5BBD\uFF09",
  "settings.approval.ask": "\u6BCF\u6B21\u8BE2\u95EE (ask)",
  "settings.approval.deny": "\u9ED8\u8BA4\u62D2\u7EDD (deny)",
  "settings.approval.allowDirs": "\u76EE\u5F55\u7EA7\u5BA1\u6279\u767D\u540D\u5355",
  "settings.approval.allowDirsDesc": "\u6BCF\u884C\u4E00\u4E2A vault \u76F8\u5BF9\u76EE\u5F55\uFF08\u5982 Inbox / Projects\uFF09\u3002agent \u5199\u5165\u8FD9\u4E9B\u76EE\u5F55\u4E0B\u7684\u7B14\u8BB0\u514D\u5BA1\u6279\u3002",
  "settings.approval.toolPolicy": "\u5DE5\u5177\u7EA7\u7B56\u7565\u8986\u76D6",
  "settings.approval.toolPolicyDesc": '\u6BCF\u884C "\u5DE5\u5177\u540D=ask|allow|deny"\uFF0C\u5982 write_note=deny\u3002\u8986\u76D6\u9ED8\u8BA4\u5BA1\u6279\u884C\u4E3A\u3002',
  // 会话
  "settings.session.retention": "\u4F1A\u8BDD\u4FDD\u7559\u5929\u6570",
  "settings.session.retentionDesc": "\u542F\u52A8\u65F6\u81EA\u52A8\u6E05\u7406\u8D85\u8FC7 N \u5929\u672A\u66F4\u65B0\u7684\u4F1A\u8BDD\u65E5\u5FD7\uFF080 = \u4E0D\u6E05\u7406\uFF09",
  "settings.session.exportDir": "\u5BFC\u51FA\u76EE\u5F55",
  "settings.session.exportDirDesc": "\u4F1A\u8BDD\u5BFC\u51FA Markdown \u7684 vault \u76F8\u5BF9\u76EE\u5F55\uFF08\u9ED8\u8BA4 sessions = \u6839\u76EE\u5F55\u4E0B\u7684 sessions \u6587\u4EF6\u5939\uFF1B\u7559\u7A7A = \u5BFC\u51FA\u5230\u6839\u76EE\u5F55\uFF09",
  // 数据
  "settings.data.paths.sessionLog": "\u4F1A\u8BDD\u65E5\u5FD7: .obsidian/harness-like/sessions/*.jsonl",
  "settings.data.paths.plugins": "\u7528\u6237\u63D2\u4EF6: .obsidian/harness-like-plugins/<id>/",
  "settings.data.clearAll": "\u6E05\u7A7A\u5168\u90E8\u4F1A\u8BDD",
  "settings.data.clearAllConfirm": "\u5220\u9664\u5168\u90E8\u4F1A\u8BDD\u65E5\u5FD7\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002",
  "settings.data.clear": "\u6E05\u7A7A",
  "settings.data.cleared": "\u5DF2\u6E05\u7A7A {count} \u4E2A\u4F1A\u8BDD",
  // 界面
  "settings.ui.streaming": "\u6D41\u5F0F\u8F93\u51FA",
  "settings.ui.streamingDesc": "\u5173\u95ED\u540E\u7B49\u5B8C\u6574\u6D88\u606F\u518D\u663E\u793A\uFF08\u7701\u6D41\u91CF/\u51CF\u5C11\u95EA\u70C1\uFF09",
  "settings.ui.markdown": "Markdown \u6E32\u67D3",
  "settings.ui.markdownDesc": "\u5173\u95ED\u540E\u6D88\u606F\u4EE5\u7EAF\u6587\u672C\u663E\u793A",
  "settings.ui.language": "\u754C\u9762\u8BED\u8A00",
  "settings.ui.languageDesc": "\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548\uFF1B\u91CD\u65B0\u6253\u5F00\u9762\u677F\u6216\u5207\u6362\u4F1A\u8BDD\u5373\u53EF\u770B\u5230\u65B0\u8BED\u8A00",
  "settings.ui.lang.auto": "\u8DDF\u968F\u7CFB\u7EDF\uFF08\u4E0E Obsidian \u8BED\u8A00\u4E00\u81F4\uFF09",
  "settings.ui.lang.zh": "\u4E2D\u6587",
  "settings.ui.lang.en": "English",
  // 日志
  "settings.log.level": "\u65E5\u5FD7\u7EA7\u522B",
  "settings.log.levelDesc": "\u63A7\u5236 [dsh] \u524D\u7F00\u7684 console \u8F93\u51FA\uFF08llm/stream \u8017\u65F6\u7B49\uFF09",
  // 插件授权
  "settings.grants.empty": '\u6682\u65E0\u6388\u6743\u3002\u5728\u63D2\u4EF6\u7BA1\u7406\u5668\u4E2D"\u6388\u6743\u5E76\u52A0\u8F7D"\u540E\uFF0C\u8FD9\u91CC\u53EF\u67E5\u770B\u4E0E\u64A4\u9500\u3002',
  "settings.grants.all": "\u4FE1\u4EFB\u6240\u6709\u7248\u672C\uFF08\u53CC\u52FE\uFF09",
  "settings.grants.version": "\u4EC5\u4FE1\u4EFB\u5F53\u524D\u7248\u672C\uFF08\u5355\u52FE\uFF09",
  "settings.grants.stale": " \xB7 \u26A0 \u63D2\u4EF6\u76EE\u5F55\u5DF2\u5220\u9664\uFF0C\u6B64\u6388\u6743\u5DF2\u5931\u6548\uFF08\u6B8B\u7559\uFF09",
  "settings.grants.revoke": "\u64A4\u9500",
  "settings.grants.cleanStale": "\u6E05\u7406 {count} \u6761\u6B8B\u7559\u6388\u6743\uFF08\u63D2\u4EF6\u76EE\u5F55\u5DF2\u5220\u9664\uFF09",
  // ---------- 弹窗 ----------
  "modal.grant.title": "\u6388\u6743\u8FD0\u884C\u63D2\u4EF6 {id} v{version}",
  "modal.grant.permissions": "\u8BE5\u63D2\u4EF6\u5C06\u83B7\u5F97\u4EE5\u4E0B\u672C\u5730\u6743\u9650",
  "modal.grant.scope.1": "\u8BFB\u5199 vault \u5185\u7B14\u8BB0\uFF08\u5199\u5165\u9700\u7ECF\u8FC7\u5BA1\u6279\uFF09",
  "modal.grant.scope.2": "\u6CE8\u518C\u547D\u4EE4\u3001\u5DE5\u5177\u4E0E\u81EA\u5B9A\u4E49\u9762\u677F",
  "modal.grant.scope.3": "\u8BFB\u53D6\u5F53\u524D\u6253\u5F00\u7684\u7B14\u8BB0\u4E0E\u7F16\u8F91\u5668\u9009\u533A",
  "modal.grant.scope.4": "\u8C03\u7528 Obsidian \u901A\u77E5",
  "modal.grant.boundary": "\u5B89\u5168\u8FB9\u754C",
  "modal.grant.boundaryDesc": "\u53EA\u6267\u884C\u672C\u673A .obsidian/harness-like-plugins/ \u4E0B\u7684\u672C\u5730\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u4E0B\u8F7D\u6216\u6267\u884C\u8FDC\u7A0B\u4EE3\u7801",
  "modal.grant.trustScope": "\u9009\u62E9\u4FE1\u4EFB\u8303\u56F4\uFF08\u5BF9\u9F50 dsh \u7684\u5355\u52FE/\u53CC\u52FE\u8BED\u4E49\uFF09",
  "modal.grant.trustVersion": "\u4FE1\u4EFB\u6B64\u7248\u672C\uFF08\u5355\u52FE\uFF09",
  "modal.grant.trustAll": "\u4FE1\u4EFB\u6240\u6709\u7248\u672C\uFF08\u53CC\u52FE\uFF09",
  "modal.confirm.title": "\u786E\u8BA4\u64CD\u4F5C",
  "modal.write.title": "\u5199\u64CD\u4F5C\u9700\u8981\u5BA1\u6279",
  "modal.write.target": "\u76EE\u6807\u6587\u4EF6",
  "modal.write.preview": "\u5185\u5BB9\u9884\u89C8\uFF08\u524D 200 \u5B57\u7B26\uFF09",
  "modal.write.scope": "\u5F71\u54CD\u8303\u56F4",
  "modal.write.scopeDesc": '\u4EC5\u5199\u5165 vault \u5185\u7684\u7B14\u8BB0/\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u4FEE\u6539 Obsidian \u81EA\u8EAB\u914D\u7F6E\uFF1B"\u672C\u4F1A\u8BDD\u5141\u8BB8\u5199"\u4E0D\u6301\u4E45\u5316\u3002',
  "modal.write.allowOnce": "\u5141\u8BB8\u4E00\u6B21",
  "modal.write.allowSession": "\u672C\u4F1A\u8BDD\u5141\u8BB8\u5199",
  "modal.write.deny": "\u62D2\u7EDD",
  "approval.toolAsk": "agent \u8BF7\u6C42\u6267\u884C\u5DE5\u5177 {name}",
  "approval.allow": "\u5141\u8BB8",
  "approval.overwriteConfirm": "agent \u8BF7\u6C42\u8986\u76D6\u63D2\u4EF6 {id} \u7684\u6587\u4EF6 {file}\n\u8986\u76D6\u540E\u539F\u5185\u5BB9\u5C06\u4E22\u5931\u3002",
  "approval.allowOverwrite": "\u5141\u8BB8\u8986\u76D6",
  "modal.modelPick.title": "\u9009\u62E9\u8981\u6DFB\u52A0\u7684\u6A21\u578B\uFF08{count} \u4E2A\u5019\u9009\uFF09",
  "modal.modelPick.search": "\u641C\u7D22\u6A21\u578B\u2026\uFF08\u8F93\u5165\u65B0\u6A21\u578B\u540D\u53EF\u76F4\u63A5\u6DFB\u52A0\u4E3A\u5019\u9009\uFF09",
  "modal.modelPick.selectAll": "\u5168\u9009",
  "modal.modelPick.confirm": "\u786E\u8BA4\u6DFB\u52A0",
  "modal.modelPick.custom": "\uFF0B \u6DFB\u52A0\u81EA\u5B9A\u4E49\uFF1A{name}",
  "modal.modelPick.addedMark": "\u2713 \u5DF2\u6DFB\u52A0",
  "modal.agentEdit.add": "\u6DFB\u52A0\u81EA\u5B9A\u4E49\u667A\u80FD\u4F53",
  "modal.agentEdit.edit": "\u7F16\u8F91\u667A\u80FD\u4F53",
  "modal.agentEdit.name": "\u540D\u79F0",
  "modal.agentEdit.desc": "\u63CF\u8FF0",
  "modal.agentEdit.mode": "\u57FA\u7840\u6A21\u5F0F",
  "modal.agentEdit.modeDesc": "\u672A\u52FE\u9009\u80FD\u529B\u65F6\u6309\u6B64\u6A21\u5F0F\u8FC7\u6EE4\u5DE5\u5177",
  "modal.agentEdit.caps": "\u53EF\u8C03\u7528\u7684\u80FD\u529B",
  "modal.agentEdit.capsDesc": "\u52FE\u9009 = \u767D\u540D\u5355\uFF08\u4EC5\u8FD9\u4E9B\u5DE5\u5177\u53EF\u7528\uFF09\uFF1B\u4E0D\u52FE\u9009\u4EFB\u4F55\u9879 = \u6309\u57FA\u7840\u6A21\u5F0F\u9ED8\u8BA4",
  "modal.agentEdit.search": "\u641C\u7D22\u80FD\u529B\u2026",
  // ---------- 导出 ----------
  "export.defaultTitle": "\u4F1A\u8BDD\u5BFC\u51FA",
  "export.exportedAt": "\u5BFC\u51FA\u65F6\u95F4",
  "export.boundNote": "\u7ED1\u5B9A\u7B14\u8BB0",
  "export.none": "\u65E0"
};
var zh_default = dict;

// src/i18n/en.ts
var dict2 = {
  "common.confirm": "Confirm",
  "common.cancel": "Cancel",
  "common.delete": "Delete",
  "common.copied": "Copied",
  "common.copy": "Copy",
  "common.openSettings": "Open Settings",
  "common.save": "Save",
  "common.error": "Error",
  "common.stopped": "Stopped",
  "common.retry": "Retry",
  "common.singleCheck": "single-check",
  "common.doubleCheck": "double-check",
  "cmd.openChat": "Open Harness Like Panel",
  "cmd.openPluginManager": "Open Harness Like Plugin Manager",
  "cmd.reloadUserPlugins": "Reload authorized user plugins",
  "cmd.ribbonTitle": "Open Harness Like",
  "agent.chat.name": "Chat Mode",
  "agent.chat.desc": "Chat and read-only tools",
  "agent.edit.name": "Edit Mode",
  "agent.edit.desc": "Can read and write notes (default)",
  "agent.create.name": "Create Mode",
  "agent.create.desc": "Full capabilities (can create plugins)",
  "agent.mode.chat": "Chat Mode",
  "agent.mode.edit": "Edit Mode",
  "agent.mode.create": "Create Mode",
  "agent.unnamed": "Unnamed",
  "agent.new": "New Agent",
  "chat.header.newSession": "\uFF0B New Chat",
  "chat.header.pluginManager": "Plugin Manager",
  "chat.toolbar.confine": "Current note only",
  "chat.input.placeholder": "Type a message\u2026 (Enter to send, Shift+Enter for newline)",
  "chat.send": "Send",
  "chat.stop": "Stop",
  "chat.phase.thinking": "Thinking\u2026",
  "chat.phase.tool": "Running tool {name}\u2026",
  "chat.phase.waiting": "Waiting for your approval\u2026",
  "chat.phase.stopped": "Stopped",
  "chat.model.default": "Model",
  "chat.agent.default": "Agent",
  "chat.model.manage": "Manage models\u2026",
  "chat.agent.manage": "Manage agents\u2026",
  "chat.agent.switched": "Switched to agent\u300C{name}\u300D{desc}",
  "chat.agent.toolDenied": "Agent\u300C{name}\u300Dis not allowed to use tool {tool}",
  "chat.welcome.desc": "Run a Cordis plugin system and agents inside Obsidian. Try an example below, or type your own question.",
  "chat.welcome.example.1": "Count the notes in this vault",
  "chat.welcome.example.2": 'Find notes containing "reading"',
  "chat.welcome.example.3": "Summarize the current note",
  "chat.welcome.example.4": "Write a weekly journal to Inbox",
  "chat.welcome.noKey": "No API Key configured yet,",
  "chat.list.empty": "No chats yet",
  "chat.list.global": "Global",
  "chat.list.count": "{count} messages",
  "chat.list.exportTitle": "Export as Markdown",
  "chat.list.deleteTitle": "Delete chat",
  "chat.list.deleteConfirm": "Delete chat {id}?\nThe session log file will be deleted and cannot be recovered.",
  "chat.export.done": "Exported: {path}",
  "chat.export.failed": "Export failed: {msg}",
  "chat.copyTurn": "Copy this exchange",
  "chat.tool.call": "Calling tool {tool}",
  "chat.tool.ok": "\u2713 {tool} done",
  "chat.tool.fail": "\u2717 {tool} failed: {msg}",
  "chat.run.failed": "Error: {msg}",
  "chat.msg.user": "User",
  "chat.msg.assistant": "Assistant",
  "pm.heading": "User plugins (.obsidian/harness-like-plugins/)",
  "pm.viewTitle": "Harness Like Plugin Manager",
  "pm.refresh": "Refresh",
  "pm.openDir": "Open plugin folder",
  "pm.empty.title": "No user plugins yet. Three steps to start:",
  "pm.empty.step1": "Copy a plugin folder to .obsidian/harness-like-plugins/<id>/ (must contain package.json and a compiled main.js)",
  "pm.empty.step2": 'Click "Refresh" or "Open plugin folder" to confirm the files are in place',
  "pm.empty.step3": 'Click "Authorize & load" and choose the trust scope (single-check = this version / double-check = trust future versions)',
  "pm.empty.hint": "Built-in example: apps/plugin/examples/my-first-plugin/ (in the repo, precompiled, copy it directly)",
  "pm.openPanel": "Open Panel",
  "pm.reload": "Reload",
  "pm.stop": "Stop",
  "pm.grantAndLoad": "Authorize & Load",
  "pm.delete": "Delete",
  "pm.status.running": "running",
  "pm.status.stopped": "stopped",
  "pm.status.error": "error",
  "pm.status.granted": "Authorized({mode} v{version})",
  "pm.status.ungranted": "Not authorized",
  "pm.status.stale": " \xB7 plugin folder missing (stale grant)",
  "pm.status.mismatch": " \xB7 version changed, re-authorize needed",
  "pm.status.errText": "Error: {msg}",
  "pm.cap.panel": "Panel",
  "pm.cap.ribbon": "Icon",
  "pm.cap.commands": "Commands",
  "pm.cap.tools": "Tools",
  "pm.cap.statusbar": "Status bar",
  "pm.cap.settings": "Settings",
  "pm.reload.done": "Plugin reloaded: {id}",
  "pm.reload.failed": "Load failed: {msg}",
  "pm.delete.done": "Plugin deleted: {id}",
  "pm.delete.confirm": "Delete plugin {id}?\nAll files under .obsidian/harness-like-plugins/{id}/ (including source) will be removed and cannot be recovered.",
  "pm.manifest.failed": "Cannot read plugin manifest: {msg}",
  "pm.load.done": "Plugin loaded: {id}",
  "pm.load.failed": "Plugin load failed: {msg}",
  "settings.tab.model": "Models",
  "settings.tab.agent": "Agents",
  "settings.tab.approval": "Approval",
  "settings.tab.session": "Sessions",
  "settings.tab.data": "Data",
  "settings.tab.ui": "Interface",
  "settings.tab.log": "Logs",
  "settings.tab.grants": "Plugin Grants",
  "settings.model.addChannel": "\uFF0B Add Channel",
  "settings.model.newChannel": "New Channel",
  "settings.model.channel": "Channel",
  "settings.model.name": "Name",
  "settings.model.baseUrl": "Base URL",
  "settings.model.baseUrlDesc": "OpenAI-compatible endpoint",
  "settings.model.apiKey": "API Key",
  "settings.model.apiKeyDesc": "Stored in plain text in this plugin's data.json; keep it safe",
  "settings.model.list": "Model list",
  "settings.model.listDesc": "Fetch from the endpoint or add manually; the default model is the fallback for new chats",
  "settings.model.modelsCount": "{count} models",
  "settings.model.noModels": "No models",
  "settings.model.fetch": "Fetch from endpoint",
  "settings.model.fetchEmpty": "The endpoint returned no models; add them manually",
  "settings.model.nonePicked": "No models selected",
  "settings.model.added": "Added {count} models",
  "settings.model.fetchFailed": "Failed to fetch models: {msg}",
  "settings.model.default": "Default",
  "settings.model.setDefault": "Set as default",
  "settings.model.defaultMark": "\u2713 Default",
  "settings.model.removeTitle": "Remove model",
  "settings.model.inputPlaceholder": "Type a model name manually",
  "settings.model.add": "Add",
  "settings.model.temperature": "Temperature",
  "settings.model.temperatureDesc": "Sampling temperature: lower = more conservative, higher = more creative (0 = endpoint default)",
  "settings.model.maxTokens": "Max output tokens",
  "settings.model.maxTokensDesc": "0 = unlimited",
  "settings.model.headers": "Custom request headers",
  "settings.model.headersDesc": 'One "Header: value" per line (e.g. gateway auth)',
  "settings.model.deleteChannel": "Delete this channel",
  "settings.model.deleteChannelConfirm": "Delete channel {name}?",
  "settings.agent.defaultAgent": "Default agent",
  "settings.agent.defaultAgentDesc": "Default agent for new chats in the chat panel",
  "settings.agent.builtin": "Built-in agents",
  "settings.agent.builtinDesc": "Toggles control whether the mode appears in the agent picker in the chat panel",
  "settings.agent.currentMark": " \xB7 \u2713 current",
  "settings.agent.custom": "Custom agents",
  "settings.agent.customEmpty": "No custom agents yet. Click the button below to add one and check its allowed capabilities.",
  "settings.agent.capsCount": "{count} capabilities",
  "settings.agent.byMode": "by mode default",
  "settings.agent.edit": "Edit",
  "settings.agent.deleteConfirm": "Delete agent {name}?",
  "settings.agent.addCustom": "\uFF0B Add Custom Agent",
  "settings.approval.mode": "Default write approval mode",
  "settings.approval.modeDesc": "ask = ask every time; deny = deny by default (can be relaxed per chat session)",
  "settings.approval.ask": "Ask every time (ask)",
  "settings.approval.deny": "Deny by default (deny)",
  "settings.approval.allowDirs": "Directory-level approval whitelist",
  "settings.approval.allowDirsDesc": "One vault-relative directory per line (e.g. Inbox / Projects). Writes under these directories are approved without prompting.",
  "settings.approval.toolPolicy": "Per-tool policy overrides",
  "settings.approval.toolPolicyDesc": 'One "tool=ask|allow|deny" per line, e.g. write_note=deny. Overrides default approval behavior.',
  "settings.session.retention": "Session retention (days)",
  "settings.session.retentionDesc": "Auto-clean session logs not updated for over N days at startup (0 = never)",
  "settings.session.exportDir": "Export directory",
  "settings.session.exportDirDesc": "Vault-relative directory for exported chat Markdown (default sessions = a sessions folder at the vault root; empty = export to the root)",
  "settings.data.paths.sessionLog": "Session logs: .obsidian/harness-like/sessions/*.jsonl",
  "settings.data.paths.plugins": "User plugins: .obsidian/harness-like-plugins/<id>/",
  "settings.data.clearAll": "Clear all chats",
  "settings.data.clearAllConfirm": "Delete all session logs? This cannot be undone.",
  "settings.data.clear": "Clear",
  "settings.data.cleared": "Cleared {count} chats",
  "settings.ui.streaming": "Streaming output",
  "settings.ui.streamingDesc": "Off = wait for the full message (saves bandwidth / fewer flickers)",
  "settings.ui.markdown": "Markdown rendering",
  "settings.ui.markdownDesc": "Off = messages shown as plain text",
  "settings.ui.language": "Interface language",
  "settings.ui.languageDesc": "Takes effect immediately after saving; reopen panels or switch chats to see the new language",
  "settings.ui.lang.zh": "\u4E2D\u6587",
  "settings.ui.lang.auto": "Follow Obsidian language",
  "settings.ui.lang.en": "English",
  "settings.log.level": "Log level",
  "settings.log.levelDesc": "Controls [dsh]-prefixed console output (e.g. llm/stream timing)",
  "settings.grants.empty": 'No grants yet. After "Authorize & Load" in the plugin manager, grants can be viewed and revoked here.',
  "settings.grants.all": "Trust all versions (double-check)",
  "settings.grants.version": "Trust current version only (single-check)",
  "settings.grants.stale": " \xB7 \u26A0 plugin folder deleted; this grant is stale",
  "settings.grants.revoke": "Revoke",
  "settings.grants.cleanStale": "Clean {count} stale grants (plugin folder deleted)",
  "modal.grant.title": "Authorize plugin {id} v{version}",
  "modal.grant.permissions": "This plugin will get the following local permissions",
  "modal.grant.scope.1": "Read/write notes in the vault (writes require approval)",
  "modal.grant.scope.2": "Register commands, tools and custom panels",
  "modal.grant.scope.3": "Read the currently open note and editor selection",
  "modal.grant.scope.4": "Show Obsidian notifications",
  "modal.grant.boundary": "Security boundary",
  "modal.grant.boundaryDesc": "Only local files under .obsidian/harness-like-plugins/ are executed; no remote code is downloaded or run",
  "modal.grant.trustScope": "Choose the trust scope (single/double check semantics)",
  "modal.grant.trustVersion": "Trust this version (single-check)",
  "modal.grant.trustAll": "Trust all versions (double-check)",
  "modal.confirm.title": "Confirm action",
  "modal.write.title": "Write approval required",
  "modal.write.target": "Target file",
  "modal.write.preview": "Content preview (first 200 chars)",
  "modal.write.scope": "Scope",
  "modal.write.scopeDesc": `Only writes notes/files inside the vault; Obsidian's own config is never modified. "Allow for this chat" is not persisted.`,
  "modal.write.allowOnce": "Allow once",
  "modal.write.allowSession": "Allow for this chat",
  "modal.write.deny": "Deny",
  "approval.toolAsk": "Agent requests to run tool {name}",
  "approval.allow": "Allow",
  "approval.overwriteConfirm": "Agent requests to overwrite file {file} of plugin {id}\nThe original content will be lost.",
  "approval.allowOverwrite": "Allow overwrite",
  "modal.modelPick.title": "Select models to add ({count} candidates)",
  "modal.modelPick.search": "Search models\u2026 (typing a new model name makes it a candidate)",
  "modal.modelPick.selectAll": "Select all",
  "modal.modelPick.confirm": "Add selected",
  "modal.modelPick.custom": "\uFF0B Add custom: {name}",
  "modal.modelPick.addedMark": "\u2713 Added",
  "modal.agentEdit.add": "Add Custom Agent",
  "modal.agentEdit.edit": "Edit Agent",
  "modal.agentEdit.name": "Name",
  "modal.agentEdit.desc": "Description",
  "modal.agentEdit.mode": "Base mode",
  "modal.agentEdit.modeDesc": "Used to filter tools when no capabilities are checked",
  "modal.agentEdit.caps": "Allowed capabilities",
  "modal.agentEdit.capsDesc": "Checked = whitelist (only these tools); none checked = base mode default",
  "modal.agentEdit.search": "Search capabilities\u2026",
  "export.defaultTitle": "Chat Export",
  "export.exportedAt": "Exported at",
  "export.boundNote": "Bound note",
  "export.none": "none"
};
var en_default = dict2;

// src/i18n/index.ts
var dictionaries = { zh: zh_default, en: en_default };
var extra2 = { zh: [], en: [] };
var current = resolveLanguage("auto");
function obsidianLanguage() {
  try {
    const stored = typeof localStorage !== "undefined" ? localStorage.getItem("language") ?? "" : "";
    if (stored) return stored;
  } catch {
  }
  try {
    return (typeof navigator !== "undefined" ? navigator.language : "") ?? "";
  } catch {
    return "";
  }
}
function resolveLanguage(pref) {
  if (pref === "zh" || pref === "en") return pref;
  const lang = obsidianLanguage().toLowerCase();
  return lang.startsWith("zh") ? "zh" : "en";
}
function setLanguage(lang) {
  current = lang;
}
function getLanguage() {
  return current;
}
function registerLocale(lang, dict3) {
  extra2[lang].push(dict3);
  return () => {
    const idx = extra2[lang].indexOf(dict3);
    if (idx !== -1) extra2[lang].splice(idx, 1);
  };
}
function t(key, vars) {
  const table = dictionaries[current] ?? zh_default;
  let text2;
  const regs = extra2[current];
  for (let i = regs.length - 1; i >= 0; i--) {
    const reg = regs[i];
    if (!reg) continue;
    const v2 = reg[key];
    if (v2 !== void 0) {
      text2 = v2;
      break;
    }
  }
  let final = text2 ?? table[key] ?? zh_default[key] ?? key;
  if (vars) {
    for (const [k2, v2] of Object.entries(vars)) {
      final = final.split(`{${k2}}`).join(String(v2));
    }
  }
  return final;
}
function agentDisplayName(a) {
  const key = `agent.${a.id}.name`;
  return key in zh_default ? t(key) : a.name;
}
function agentDisplayDesc(a) {
  const key = `agent.${a.id}.desc`;
  return key in zh_default ? t(key) : a.description;
}

// src/modals.ts
var GrantModal = class extends import_obsidian2.Modal {
  constructor(app, info) {
    super(app);
    this.info = info;
  }
  info;
  resolveFn = () => {
  };
  settled = false;
  onOpen() {
    const { contentEl, titleEl } = this;
    titleEl.setText(t("modal.grant.title", { id: this.info.id, version: this.info.version }));
    new import_obsidian2.Setting(contentEl).setName(t("modal.grant.permissions"));
    const scope = contentEl.createDiv({ cls: "dsh-modal-scope" });
    scope.createEl("ul", {}, (ul) => {
      for (const item of [
        t("modal.grant.scope.1"),
        t("modal.grant.scope.2"),
        t("modal.grant.scope.3"),
        t("modal.grant.scope.4")
      ]) {
        ul.createEl("li", { text: item });
      }
    });
    new import_obsidian2.Setting(contentEl).setName(t("modal.grant.boundary")).setDesc(
      t("modal.grant.boundaryDesc") + "\uFF1B" + (this.info.description ? `
${this.info.description}` : "")
    ).setClass("dsh-modal-warning");
    new import_obsidian2.Setting(contentEl).setName(t("modal.grant.trustScope"));
    new import_obsidian2.Setting(contentEl).addButton(
      (b2) => b2.setButtonText(t("modal.grant.trustVersion")).setCta().onClick(() => this.finish({ mode: "version" }))
    );
    new import_obsidian2.Setting(contentEl).addButton(
      (b2) => b2.setButtonText(t("modal.grant.trustAll")).onClick(() => this.finish({ mode: "all" }))
    );
    new import_obsidian2.Setting(contentEl).addButton(
      (b2) => b2.setButtonText(t("common.cancel")).setWarning().onClick(() => this.finish({ cancel: true }))
    );
  }
  onClose() {
    this.finish({ cancel: true });
  }
  /** 打开并等待用户选择 */
  ask() {
    this.open();
    return new Promise((resolve3) => {
      this.resolveFn = resolve3;
    });
  }
  finish(v2) {
    if (this.settled) return;
    this.settled = true;
    this.resolveFn(v2);
    this.close();
  }
};
var ConfirmModal = class extends import_obsidian2.Modal {
  constructor(app, message, okText = t("common.confirm")) {
    super(app);
    this.message = message;
    this.okText = okText;
  }
  message;
  okText;
  resolveFn = () => {
  };
  settled = false;
  onOpen() {
    const { contentEl, titleEl } = this;
    titleEl.setText(t("modal.confirm.title"));
    contentEl.createEl("p", { text: this.message });
    new import_obsidian2.Setting(contentEl).addButton(
      (b2) => b2.setButtonText(t("common.cancel")).onClick(() => this.finish(false))
    );
    new import_obsidian2.Setting(contentEl).addButton(
      (b2) => b2.setButtonText(this.okText).setWarning().onClick(() => this.finish(true))
    );
  }
  onClose() {
    this.finish(false);
  }
  ask() {
    this.open();
    return new Promise((resolve3) => {
      this.resolveFn = resolve3;
    });
  }
  finish(v2) {
    if (this.settled) return;
    this.settled = true;
    this.resolveFn(v2);
    this.close();
  }
};
var WriteApprovalModal = class extends import_obsidian2.Modal {
  constructor(app, target, meta) {
    super(app);
    this.target = target;
    this.meta = meta;
  }
  target;
  meta;
  resolveFn = () => {
  };
  settled = false;
  onOpen() {
    const { contentEl, titleEl } = this;
    titleEl.setText(t("modal.write.title"));
    new import_obsidian2.Setting(contentEl).setName(t("modal.write.target")).setDesc(`\`${this.target}\``);
    if (this.meta?.preview) {
      new import_obsidian2.Setting(contentEl).setName(t("modal.write.preview"));
      contentEl.createEl("pre", {
        cls: "dsh-modal-preview",
        text: this.meta.preview
      });
    }
    new import_obsidian2.Setting(contentEl).setName(t("modal.write.scope")).setDesc(t("modal.write.scopeDesc"));
    new import_obsidian2.Setting(contentEl).addButton(
      (b2) => b2.setButtonText(t("modal.write.allowOnce")).setCta().onClick(() => this.finish({ choice: "allow-once" }))
    );
    new import_obsidian2.Setting(contentEl).addButton(
      (b2) => b2.setButtonText(t("modal.write.allowSession")).onClick(() => this.finish({ choice: "allow-session" }))
    );
    new import_obsidian2.Setting(contentEl).addButton(
      (b2) => b2.setButtonText(t("modal.write.deny")).setWarning().onClick(() => this.finish({ choice: "deny" }))
    );
  }
  onClose() {
    this.finish({ choice: "deny" });
  }
  ask() {
    this.open();
    return new Promise((resolve3) => {
      this.resolveFn = resolve3;
    });
  }
  finish(v2) {
    if (this.settled) return;
    this.settled = true;
    this.resolveFn(v2);
    this.close();
  }
};
var ModelPickModal = class extends import_obsidian2.Modal {
  constructor(app, models, existing) {
    super(app);
    this.models = models;
    this.existing = existing;
  }
  models;
  existing;
  picked = /* @__PURE__ */ new Set();
  keyword = "";
  onOpen() {
    const { contentEl, titleEl } = this;
    titleEl.setText(t("modal.modelPick.title", { count: this.models.length }));
    const search = contentEl.createEl("input", {
      cls: "dsh-modal-search",
      attr: { placeholder: t("modal.modelPick.search") }
    });
    search.addEventListener("input", () => {
      this.keyword = search.value.trim().toLowerCase();
      this.renderList();
    });
    this.listEl = contentEl.createDiv({ cls: "dsh-modal-list" });
    this.renderList();
    new import_obsidian2.Setting(contentEl).addButton((b2) => b2.setButtonText(t("modal.modelPick.selectAll")).onClick(() => {
      this.models.forEach((m2) => this.picked.add(m2));
      this.renderList();
    })).addButton((b2) => b2.setButtonText(t("modal.modelPick.confirm")).setCta().onClick(() => this.finish())).addButton((b2) => b2.setButtonText(t("common.cancel")).onClick(() => this.close()));
  }
  listEl;
  renderList() {
    this.listEl.empty();
    const visible = this.keyword ? this.models.filter((m2) => m2.toLowerCase().includes(this.keyword)) : this.models;
    const kw = this.keyword;
    if (kw && !this.models.some((m2) => m2.toLowerCase() === kw) && !this.existing.includes(kw)) {
      const row = this.listEl.createDiv({ cls: "dsh-check-row dsh-check-custom" });
      const cb = row.createEl("input", { type: "checkbox" });
      cb.checked = this.picked.has(kw);
      cb.onchange = () => {
        if (cb.checked) this.picked.add(kw);
        else this.picked.delete(kw);
      };
      row.createSpan({ text: t("modal.modelPick.custom", { name: kw }) });
    }
    for (const m2 of visible) {
      const row = this.listEl.createDiv({ cls: "dsh-check-row" });
      if (this.existing.includes(m2)) {
        const cb2 = row.createEl("input", { type: "checkbox" });
        cb2.checked = true;
        cb2.disabled = true;
        row.createSpan({ text: m2 });
        row.createSpan({ cls: "dsh-check-added", text: t("modal.modelPick.addedMark") });
        continue;
      }
      const cb = row.createEl("input", { type: "checkbox" });
      cb.checked = this.picked.has(m2);
      cb.onchange = () => {
        if (cb.checked) this.picked.add(m2);
        else this.picked.delete(m2);
      };
      row.createSpan({ text: m2 });
    }
  }
  onClose() {
    this.resolve({ cancel: true });
  }
  resolveFn = () => {
  };
  settled = false;
  ask() {
    this.open();
    return new Promise((resolve3) => {
      this.resolveFn = resolve3;
    });
  }
  finish() {
    if (this.settled) return;
    this.settled = true;
    this.resolveFn({ models: [...this.picked] });
    this.close();
  }
  resolve(v2) {
    if (this.settled) return;
    this.settled = true;
    this.resolveFn(v2);
  }
};
var AgentEditModal = class extends import_obsidian2.Modal {
  constructor(app, agent, tools, onSave) {
    super(app);
    this.agent = agent;
    this.tools = tools;
    this.onSave = onSave;
    this.name = agent.name;
    this.description = agent.description ?? "";
    this.mode = agent.mode;
    this.caps = new Set(agent.capabilities ?? []);
  }
  agent;
  tools;
  onSave;
  name;
  description;
  mode;
  caps;
  keyword = "";
  onOpen() {
    const { contentEl, titleEl } = this;
    titleEl.setText(this.agent.id.startsWith("agent-") ? t("modal.agentEdit.add") : t("modal.agentEdit.edit"));
    new import_obsidian2.Setting(contentEl).setName(t("modal.agentEdit.name")).addText(
      (t2) => t2.setValue(this.name).onChange((v2) => {
        this.name = v2;
      })
    );
    new import_obsidian2.Setting(contentEl).setName(t("modal.agentEdit.desc")).addText(
      (t2) => t2.setValue(this.description).onChange((v2) => {
        this.description = v2;
      })
    );
    new import_obsidian2.Setting(contentEl).setName(t("modal.agentEdit.mode")).setDesc(t("modal.agentEdit.modeDesc")).addDropdown(
      (d) => d.addOption("chat", t("agent.mode.chat")).addOption("edit", t("agent.mode.edit")).addOption("create", t("agent.mode.create")).setValue(this.mode).onChange((v2) => {
        this.mode = v2;
      })
    );
    new import_obsidian2.Setting(contentEl).setName(t("modal.agentEdit.caps")).setDesc(t("modal.agentEdit.capsDesc"));
    const search = contentEl.createEl("input", {
      cls: "dsh-modal-search",
      attr: { placeholder: t("modal.agentEdit.search") }
    });
    search.addEventListener("input", () => {
      this.keyword = search.value.trim().toLowerCase();
      this.renderCaps();
    });
    this.capsEl = contentEl.createDiv({ cls: "dsh-modal-list dsh-modal-list-tall" });
    this.renderCaps();
    new import_obsidian2.Setting(contentEl).addButton(
      (b2) => b2.setButtonText(t("common.save")).setCta().onClick(() => {
        this.onSave({
          ...this.agent,
          name: this.name.trim() || t("agent.unnamed"),
          description: this.description.trim() || void 0,
          mode: this.mode,
          capabilities: this.caps.size ? [...this.caps] : void 0
        });
        this.finish();
      })
    ).addButton((b2) => b2.setButtonText(t("common.cancel")).onClick(() => this.close()));
  }
  capsEl;
  renderCaps() {
    this.capsEl.empty();
    const visible = this.keyword ? this.tools.filter((t2) => t2.toLowerCase().includes(this.keyword)) : this.tools;
    for (const t2 of visible) {
      const row = this.capsEl.createDiv({ cls: "dsh-check-row" });
      const cb = row.createEl("input", { type: "checkbox" });
      cb.checked = this.caps.has(t2);
      cb.onchange = () => {
        if (cb.checked) this.caps.add(t2);
        else this.caps.delete(t2);
      };
      row.createSpan({ text: t2 });
    }
  }
  onClose() {
    this.finish();
  }
  resolveFn = () => {
  };
  settled = false;
  ask() {
    this.open();
    return new Promise((resolve3) => {
      this.resolveFn = resolve3;
    });
  }
  finish() {
    if (this.settled) return;
    this.settled = true;
    this.resolveFn();
    this.close();
  }
};

// src/settings-tab.ts
var HarnessLikeSettingsTab = class extends import_obsidian3.PluginSettingTab {
  constructor(app, plugin, ctx) {
    super(app, plugin);
    this.plugin = plugin;
    this.ctx = ctx;
  }
  plugin;
  ctx;
  activeTab = "model";
  activeProviderId = "";
  /** 打开 Obsidian 设置并定位到本插件指定 tab */
  openTo(tabId) {
    this.activeTab = tabId;
    const setting = this.app.setting;
    if (!setting) return;
    setting.open?.();
    if (setting.openTabById) {
      setting.openTabById(this.plugin.manifest.id);
    }
    this.display();
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    const tabs = [
      { id: "model", label: t("settings.tab.model") },
      { id: "agent", label: t("settings.tab.agent") },
      { id: "approval", label: t("settings.tab.approval") },
      { id: "session", label: t("settings.tab.session") },
      { id: "data", label: t("settings.tab.data") },
      { id: "ui", label: t("settings.tab.ui") },
      { id: "log", label: t("settings.tab.log") },
      { id: "grants", label: t("settings.tab.grants") }
    ];
    const nav = containerEl.createDiv({ cls: "dsh-settings-nav" });
    for (const t2 of tabs) {
      const btn = nav.createEl("button", {
        cls: "dsh-settings-tab" + (t2.id === this.activeTab ? " is-active" : ""),
        text: t2.label
      });
      btn.onclick = () => {
        this.activeTab = t2.id;
        this.display();
      };
    }
    const content = containerEl.createDiv({ cls: "dsh-settings-content" });
    const renderers = {
      model: (c) => this.renderModelTab(c),
      agent: (c) => this.renderAgentTab(c),
      approval: (c) => this.renderApprovalTab(c),
      session: (c) => this.renderSessionTab(c),
      data: (c) => this.renderDataTab(c),
      ui: (c) => this.renderUiTab(c),
      log: (c) => this.renderLogTab(c),
      grants: (c) => this.renderGrantsTab(c)
    };
    void renderers[this.activeTab](content);
  }
  // ---------- 模型（提供方侧向列表 + 参数） ----------
  renderModelTab(c) {
    const { settings } = this.plugin;
    if (!this.activeProviderId || !settings.providers.some((p2) => p2.id === this.activeProviderId)) {
      this.activeProviderId = settings.providers[0]?.id ?? "";
    }
    const wrap = c.createDiv({ cls: "dsh-provider-layout" });
    const list = wrap.createDiv({ cls: "dsh-provider-list" });
    const form = wrap.createDiv({ cls: "dsh-provider-form" });
    for (const p2 of settings.providers) {
      const item = list.createEl("button", {
        cls: "dsh-provider-item" + (p2.id === this.activeProviderId ? " is-active" : "")
      });
      item.createDiv({ text: p2.name || p2.id });
      item.createDiv({
        cls: "dsh-provider-sub",
        text: p2.models.length ? t("settings.model.modelsCount", { count: p2.models.length }) : t("settings.model.noModels")
      });
      item.onclick = () => {
        this.activeProviderId = p2.id;
        this.display();
      };
    }
    const add = list.createEl("button", { cls: "dsh-btn dsh-provider-add", text: t("settings.model.addChannel") });
    add.onclick = () => {
      const id = `provider-${Date.now()}`;
      settings.providers.push({
        id,
        name: t("settings.model.newChannel"),
        baseURL: "https://",
        apiKey: "",
        models: [],
        temperature: 0.7,
        maxTokens: 0,
        extraHeaders: []
      });
      this.activeProviderId = id;
      void this.plugin.saveSettings();
      this.display();
    };
    const p = settings.providers.find((x2) => x2.id === this.activeProviderId) ?? settings.providers[0];
    if (!p) return;
    new import_obsidian3.Setting(form).setName(t("settings.model.channel")).setDesc(p.id);
    new import_obsidian3.Setting(form).setName(t("settings.model.name")).addText(
      (t2) => t2.setValue(p.name).onChange(async (v2) => {
        p.name = v2.trim() || p.id;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(form).setName(t("settings.model.baseUrl")).setDesc(t("settings.model.baseUrlDesc")).addText(
      (t2) => t2.setValue(p.baseURL).onChange(async (v2) => {
        p.baseURL = v2.trim();
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(form).setName(t("settings.model.apiKey")).setDesc(t("settings.model.apiKeyDesc")).addText(
      (t2) => t2.setPlaceholder("sk-...").setValue(p.apiKey).onChange(async (v2) => {
        p.apiKey = v2.trim();
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(form).setName(t("settings.model.list")).setDesc(t("settings.model.listDesc")).addButton(
      (b2) => b2.setButtonText(t("settings.model.fetch")).onClick(async () => {
        try {
          const fetched = await this.fetchModels(p.baseURL, p.apiKey);
          if (!fetched.length) {
            this.ctx.notice.notice(t("settings.model.fetchEmpty"));
            return;
          }
          const picked = await new ModelPickModal(this.app, fetched, p.models).ask();
          if ("cancel" in picked || !picked.models.length) {
            this.ctx.notice.notice(t("settings.model.nonePicked"));
            return;
          }
          p.models = [.../* @__PURE__ */ new Set([...p.models, ...picked.models])];
          await this.plugin.saveSettings();
          this.display();
          this.ctx.notice.notice(t("settings.model.added", { count: picked.models.length }));
        } catch (err) {
          this.ctx.notice.notice(
            t("settings.model.fetchFailed", { msg: err instanceof Error ? err.message : String(err) })
          );
        }
      })
    );
    const modelsBox = form.createDiv({ cls: "dsh-model-list" });
    for (const m2 of p.models) {
      const row = modelsBox.createDiv({ cls: "dsh-model-item" });
      const isDefault = settings.defaultModelId === `${p.id}/${m2}`;
      row.createDiv({ cls: "dsh-model-name", text: m2 });
      if (isDefault) {
        row.createSpan({ cls: "dsh-model-default", text: t("settings.model.defaultMark") });
      }
      const setDefault = row.createEl("button", {
        cls: "dsh-btn",
        text: isDefault ? t("settings.model.default") : t("settings.model.setDefault")
      });
      setDefault.onclick = async () => {
        settings.defaultModelId = `${p.id}/${m2}`;
        await this.plugin.saveSettings();
        this.display();
      };
      const del = row.createEl("button", { cls: "dsh-btn", text: "\u2715", attr: { title: t("settings.model.removeTitle") } });
      del.onclick = async () => {
        p.models = p.models.filter((x2) => x2 !== m2);
        if (settings.defaultModelId === `${p.id}/${m2}`) {
          settings.defaultModelId = `${p.id}/${p.models[0] ?? ""}`;
        }
        await this.plugin.saveSettings();
        this.display();
      };
    }
    const addRow = form.createDiv({ cls: "dsh-model-add" });
    const addInput = addRow.createEl("input", { cls: "dsh-model-input", attr: { placeholder: t("settings.model.inputPlaceholder") } });
    const addBtn = addRow.createEl("button", { cls: "dsh-btn", text: t("settings.model.add") });
    const commit = async () => {
      const name = addInput.value.trim();
      if (!name) return;
      if (!p.models.includes(name)) p.models.push(name);
      addInput.value = "";
      await this.plugin.saveSettings();
      this.display();
    };
    addBtn.onclick = commit;
    addInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") void commit();
    });
    new import_obsidian3.Setting(form).setName(t("settings.model.temperature")).setDesc(t("settings.model.temperatureDesc")).addSlider(
      (s) => s.setLimits(0, 2, 0.1).setValue(p.temperature).onChange(async (v2) => {
        p.temperature = v2;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(form).setName(t("settings.model.maxTokens")).setDesc(t("settings.model.maxTokensDesc")).addText(
      (t2) => t2.setValue(String(p.maxTokens)).onChange(async (v2) => {
        p.maxTokens = Math.max(0, Math.floor(Number(v2) || 0));
        t2.setValue(String(p.maxTokens));
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(form).setName(t("settings.model.headers")).setDesc(t("settings.model.headersDesc")).addTextArea(
      (t2) => t2.setValue(p.extraHeaders.join("\n")).onChange(async (v2) => {
        p.extraHeaders = v2.split("\n").map((s) => s.trim()).filter(Boolean);
        await this.plugin.saveSettings();
      })
    );
    if (settings.providers.length > 1) {
      new import_obsidian3.Setting(form).addButton(
        (b2) => b2.setButtonText(t("settings.model.deleteChannel")).setWarning().onClick(async () => {
          const ok = await new ConfirmModal(
            this.app,
            t("settings.model.deleteChannelConfirm", { name: p.name }),
            t("common.delete")
          ).ask();
          if (!ok) return;
          settings.providers = settings.providers.filter((x2) => x2.id !== p.id);
          if (this.activeProviderId === p.id) {
            this.activeProviderId = settings.providers[0]?.id ?? "";
          }
          await this.plugin.saveSettings();
          this.display();
        })
      );
    }
  }
  /** 从 OpenAI 兼容端点获取模型列表 */
  async fetchModels(baseURL, apiKey) {
    const url = baseURL.replace(/\/+$/, "") + "/models";
    const res = await fetch(url, {
      headers: apiKey ? { authorization: `Bearer ${apiKey}` } : {}
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return (data.data ?? []).map((m2) => m2.id ?? "").filter(Boolean);
  }
  // ---------- 智能体 ----------
  renderAgentTab(c) {
    const { settings } = this.plugin;
    const allTools = this.ctx.toolsCompat.list().map((t2) => t2.name);
    const visible = settings.agents.filter((a) => a.enabled !== false);
    new import_obsidian3.Setting(c).setName(t("settings.agent.defaultAgent")).setDesc(t("settings.agent.defaultAgentDesc")).addDropdown((d) => {
      for (const a of settings.agents) {
        if (a.enabled === false) continue;
        d.addOption(a.id, agentDisplayName(a));
      }
      d.setValue(settings.activeAgentId);
      d.onChange(async (v2) => {
        settings.activeAgentId = v2;
        await this.plugin.saveSettings();
        this.display();
      });
      return d;
    });
    new import_obsidian3.Setting(c).setName(t("settings.agent.builtin")).setHeading();
    c.createEl("p", {
      cls: "setting-item-description",
      text: t("settings.agent.builtinDesc")
    });
    for (const a of BUILTIN_AGENTS) {
      const s = new import_obsidian3.Setting(c).setName(agentDisplayName(a)).setDesc(
        `${agentDisplayDesc(a) ?? ""}${a.id === settings.activeAgentId ? t("settings.agent.currentMark") : ""}`
      );
      s.addToggle(
        (t2) => t2.setValue(a.enabled !== false).onChange(async (v2) => {
          a.enabled = v2;
          if (!v2 && settings.activeAgentId === a.id) settings.activeAgentId = "edit";
          await this.plugin.saveSettings();
          this.display();
        })
      );
      if (visible.length === 1 && a.enabled !== false) {
        s.settingEl.querySelector("input")?.setAttribute("disabled", "disabled");
      }
    }
    new import_obsidian3.Setting(c).setName(t("settings.agent.custom")).setHeading();
    const customs = settings.agents.filter((a) => !BUILTIN_AGENTS.some((b2) => b2.id === a.id));
    if (!customs.length) {
      c.createEl("p", { cls: "setting-item-description", text: t("settings.agent.customEmpty") });
    }
    for (const a of customs) {
      const row = new import_obsidian3.Setting(c).setName(a.name).setDesc(
        `${a.description ?? ""} \xB7 ${a.capabilities?.length ? t("settings.agent.capsCount", { count: a.capabilities.length }) : t("settings.agent.byMode")}${a.id === settings.activeAgentId ? t("settings.agent.currentMark") : ""}`
      );
      row.addToggle(
        (t2) => t2.setValue(a.enabled !== false).onChange(async (v2) => {
          a.enabled = v2;
          if (!v2 && settings.activeAgentId === a.id) settings.activeAgentId = "edit";
          await this.plugin.saveSettings();
        })
      );
      row.addButton(
        (b2) => b2.setButtonText(t("settings.agent.edit")).onClick(async () => {
          await new AgentEditModal(this.app, a, allTools, (draft) => {
            Object.assign(a, draft);
          }).ask();
          await this.plugin.saveSettings();
          this.display();
        })
      );
      row.addButton(
        (b2) => b2.setButtonText(t("common.delete")).setWarning().onClick(async () => {
          const ok = await new ConfirmModal(
            this.app,
            t("settings.agent.deleteConfirm", { name: a.name }),
            t("common.delete")
          ).ask();
          if (!ok) return;
          settings.agents = settings.agents.filter((x2) => x2.id !== a.id);
          if (settings.activeAgentId === a.id) settings.activeAgentId = "edit";
          await this.plugin.saveSettings();
          this.display();
        })
      );
    }
    new import_obsidian3.Setting(c).addButton(
      (b2) => b2.setButtonText(t("settings.agent.addCustom")).onClick(async () => {
        const id = `agent-${Date.now()}`;
        const draft = { id, name: t("agent.new"), mode: "edit", enabled: true };
        await new AgentEditModal(this.app, draft, allTools, (saved) => {
          settings.agents.push(saved);
        }).ask();
        await this.plugin.saveSettings();
        this.display();
      })
    );
  }
  // ---------- 审批 ----------
  renderApprovalTab(c) {
    const { settings } = this.plugin;
    new import_obsidian3.Setting(c).setName(t("settings.approval.mode")).setDesc(t("settings.approval.modeDesc")).addDropdown(
      (d) => d.addOption("ask", t("settings.approval.ask")).addOption("deny", t("settings.approval.deny")).setValue(settings.approvalDefault).onChange(async (v2) => {
        settings.approvalDefault = v2;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(c).setName(t("settings.approval.allowDirs")).setDesc(t("settings.approval.allowDirsDesc")).addTextArea(
      (t2) => t2.setValue(settings.writeAllowDirs.join("\n")).onChange(async (v2) => {
        settings.writeAllowDirs = v2.split("\n").map((s) => s.trim()).filter(Boolean);
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(c).setName(t("settings.approval.toolPolicy")).setDesc(t("settings.approval.toolPolicyDesc")).addTextArea(
      (t2) => t2.setValue(settings.toolPolicy.join("\n")).onChange(async (v2) => {
        settings.toolPolicy = v2.split("\n").map((s) => s.trim()).filter(Boolean);
        await this.plugin.saveSettings();
      })
    );
  }
  // ---------- 会话 ----------
  renderSessionTab(c) {
    const { settings } = this.plugin;
    new import_obsidian3.Setting(c).setName(t("settings.session.retention")).setDesc(t("settings.session.retentionDesc")).addText(
      (t2) => t2.setValue(String(settings.sessionRetentionDays)).onChange(async (v2) => {
        settings.sessionRetentionDays = Math.max(0, Math.floor(Number(v2) || 0));
        t2.setValue(String(settings.sessionRetentionDays));
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(c).setName(t("settings.session.exportDir")).setDesc(t("settings.session.exportDirDesc")).addText(
      (t2) => t2.setValue(settings.exportDir).onChange(async (v2) => {
        settings.exportDir = v2.trim().replace(/^\/+|\/+$/g, "");
        t2.setValue(settings.exportDir);
        await this.plugin.saveSettings();
      })
    );
  }
  // ---------- 数据 ----------
  renderDataTab(c) {
    c.createEl("p", {
      cls: "setting-item-description",
      text: [t("settings.data.paths.sessionLog"), t("settings.data.paths.plugins")].join("\n")
    });
    new import_obsidian3.Setting(c).addButton(
      (b2) => b2.setButtonText(t("settings.data.clearAll")).setWarning().onClick(async () => {
        const ok = await new ConfirmModal(
          this.app,
          t("settings.data.clearAllConfirm"),
          t("settings.data.clear")
        ).ask();
        if (!ok) return;
        const list = await this.ctx.sessionLog.list();
        for (const s of list) await this.ctx.sessionLog.remove(s.id);
        this.ctx.notice.notice(t("settings.data.cleared", { count: list.length }));
      })
    );
  }
  // ---------- 界面 ----------
  renderUiTab(c) {
    const { settings } = this.plugin;
    new import_obsidian3.Setting(c).setName(t("settings.ui.language")).setDesc(t("settings.ui.languageDesc")).addDropdown((d) => {
      d.addOption("auto", t("settings.ui.lang.auto"));
      d.addOption("zh", t("settings.ui.lang.zh"));
      d.addOption("en", t("settings.ui.lang.en"));
      d.setValue(settings.uiLanguage);
      d.onChange(async (v2) => {
        settings.uiLanguage = v2;
        setLanguage(resolveLanguage(settings.uiLanguage));
        await this.plugin.saveSettings();
        this.display();
      });
      return d;
    });
    new import_obsidian3.Setting(c).setName(t("settings.ui.streaming")).setDesc(t("settings.ui.streamingDesc")).addToggle(
      (t2) => t2.setValue(settings.streamingEnabled).onChange(async (v2) => {
        settings.streamingEnabled = v2;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(c).setName(t("settings.ui.markdown")).setDesc(t("settings.ui.markdownDesc")).addToggle(
      (t2) => t2.setValue(settings.renderMarkdown).onChange(async (v2) => {
        settings.renderMarkdown = v2;
        await this.plugin.saveSettings();
      })
    );
  }
  // ---------- 日志 ----------
  renderLogTab(c) {
    new import_obsidian3.Setting(c).setName(t("settings.log.level")).setDesc(t("settings.log.levelDesc")).addDropdown(
      (d) => d.addOption("debug", "debug").addOption("info", "info").addOption("warn", "warn").addOption("error", "error").setValue(this.plugin.settings.logLevel).onChange(async (v2) => {
        this.plugin.settings.logLevel = v2;
        await this.plugin.saveSettings();
      })
    );
  }
  // ---------- 插件授权 ----------
  async renderGrantsTab(c) {
    const grants = this.ctx.approval.listGrants();
    const dirs = new Set(await this.ctx.pluginRuntime.discover());
    const stale = [];
    if (!grants.length) {
      c.createEl("p", {
        cls: "setting-item-description",
        text: t("settings.grants.empty")
      });
    }
    for (const { pluginId, grant } of grants) {
      const exists = dirs.has(pluginId);
      if (!exists) stale.push(pluginId);
      new import_obsidian3.Setting(c).setName(pluginId).setDesc(
        [
          `${grant.mode === "all" ? t("settings.grants.all") : t("settings.grants.version")} \xB7 v${grant.version} \xB7 ${new Date(grant.grantedAt).toLocaleString()}`,
          exists ? "" : t("settings.grants.stale")
        ].filter(Boolean).join("")
      ).addButton(
        (b2) => b2.setButtonText(t("settings.grants.revoke")).setWarning().onClick(() => {
          this.ctx.approval.revoke(pluginId);
          this.display();
        })
      );
    }
    if (stale.length) {
      new import_obsidian3.Setting(c).addButton(
        (b2) => b2.setButtonText(t("settings.grants.cleanStale", { count: stale.length })).setWarning().onClick(() => {
          for (const id of stale) this.ctx.approval.revoke(id);
          this.display();
        })
      );
    }
  }
};

// src/tools/builtin.ts
var path4 = __toESM(require("path"));
function builtinToolsPlugin(opts) {
  return {
    name: "builtin-vault-tools",
    inject: ["vault", "sandbox", "toolsCompat", "editor"],
    apply(ctx) {
      ctx.effect(() => [
        ctx.toolsCompat.register({
          name: "read_note",
          description: "\u8BFB\u53D6 vault \u4E2D\u4E00\u7BC7\u7B14\u8BB0\u7684\u5B8C\u6574\u5185\u5BB9",
          input: {
            type: "object",
            properties: { path: { type: "string", description: '\u7B14\u8BB0\u8DEF\u5F84\uFF0C\u5982 "Inbox/\u60F3\u6CD5.md"' } },
            required: ["path"]
          },
          async execute(input) {
            const path8 = String(input.path ?? "");
            return { content: await ctx.vault.read(path8) };
          }
        }),
        ctx.toolsCompat.register({
          name: "write_note",
          description: "\u5199\u5165\u6216\u8986\u76D6 vault \u4E2D\u7684\u4E00\u7BC7\u7B14\u8BB0\uFF08\u9700\u5BA1\u6279\uFF09",
          input: {
            type: "object",
            properties: {
              path: { type: "string", description: "\u7B14\u8BB0\u8DEF\u5F84" },
              content: { type: "string", description: "\u5B8C\u6574\u7B14\u8BB0\u5185\u5BB9" }
            },
            required: ["path", "content"]
          },
          async execute(input) {
            const path8 = String(input.path ?? "");
            const content = String(input.content ?? "");
            ctx.sandbox.assertWrite(path8);
            await ctx.vault.write(path8, content);
            return { ok: true, path: path8 };
          }
        }),
        ctx.toolsCompat.register({
          name: "list_notes",
          description: "\u5217\u51FA vault \u4E2D\u5168\u90E8 markdown \u7B14\u8BB0\u8DEF\u5F84\uFF08\u53EF\u6309\u6587\u4EF6\u5939\u8FC7\u6EE4\u3001\u9650\u91CF\uFF09",
          input: {
            type: "object",
            properties: {
              folder: { type: "string", description: '\u53EF\u9009\uFF1A\u53EA\u5217\u51FA\u8BE5\u6587\u4EF6\u5939\u4E0B\u7684\u7B14\u8BB0\uFF0C\u5982 "Inbox"' },
              limit: { type: "number", description: "\u8FD4\u56DE\u6761\u6570\u4E0A\u9650\uFF0C\u9ED8\u8BA4 100\uFF0C\u6700\u591A 500" }
            }
          },
          execute(input) {
            const base = String(input.folder ?? "").replace(/\/+$/, "");
            const limit = Math.max(1, Math.min(500, Number(input.limit ?? 100)));
            const all = ctx.vault.listMarkdown();
            const filtered = base ? all.filter((p) => p.startsWith(base + "/")) : all;
            return { count: filtered.length, notes: filtered.slice(0, limit) };
          }
        }),
        ctx.toolsCompat.register({
          name: "open_in_browser",
          description: "\u5728\u7CFB\u7EDF\u9ED8\u8BA4\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 vault \u5185\u7684\u6587\u4EF6\uFF08\u5982 HTML \u7B14\u8BB0\uFF09",
          input: {
            type: "object",
            properties: { path: { type: "string", description: "\u7B14\u8BB0/\u6587\u4EF6\u8DEF\u5F84" } },
            required: ["path"]
          },
          async execute(input) {
            const rel = String(input.path ?? "");
            const decision = ctx.sandbox.decide(rel, "read");
            if (!decision.allowed) throw new Error(decision.reason ?? "\u6C99\u7BB1\u62D2\u7EDD\u8BBF\u95EE\u8BE5\u8DEF\u5F84");
            const abs = path4.isAbsolute(rel) ? path4.normalize(rel) : path4.join(ctx.sandbox.scope.vaultRoot, rel);
            await opts.openTarget(abs);
            return { ok: true, opened: abs };
          }
        }),
        ctx.toolsCompat.register({
          name: "insert_to_editor",
          description: "\u628A\u6587\u672C\u63D2\u5165\u5F53\u524D\u7F16\u8F91\u5668\u5149\u6807\u5904\uFF08\u7528\u6237\u53EF\u89C1\u3001\u53EF\u64A4\u9500\uFF0C\u65E0\u9700\u5BA1\u6279\uFF09",
          input: {
            type: "object",
            properties: { content: { type: "string", description: "\u8981\u63D2\u5165\u7684\u6587\u672C" } },
            required: ["content"]
          },
          execute(input) {
            const editor = ctx.editor.activeEditor;
            if (!editor) throw new Error("\u5F53\u524D\u6CA1\u6709\u6253\u5F00\u7684\u7F16\u8F91\u5668");
            const content = String(input.content ?? "");
            if (!content) throw new Error("\u5185\u5BB9\u4E3A\u7A7A");
            editor.replaceSelection(content);
            return { ok: true, inserted: content.length };
          }
        }),
        ctx.toolsCompat.register({
          name: "search_notes",
          description: "\u6309\u6587\u4EF6\u540D/\u6807\u9898\u641C\u7D22\u7B14\u8BB0\uFF08v1\uFF1A\u6587\u4EF6\u540D\u5339\u914D\uFF0C\u65E0\u5168\u6587\u7D22\u5F15\uFF09",
          input: {
            type: "object",
            properties: {
              query: { type: "string", description: "\u641C\u7D22\u8BCD" },
              limit: { type: "number", description: "\u8FD4\u56DE\u6761\u6570\uFF0C\u9ED8\u8BA4 10\uFF0C\u6700\u591A 50" }
            },
            required: ["query"]
          },
          execute(input) {
            const q2 = String(input.query ?? "").toLowerCase();
            const limit = Math.max(1, Math.min(50, Number(input.limit ?? 10)));
            const hits = ctx.vault.listMarkdown().filter((p) => p.toLowerCase().includes(q2)).slice(0, limit);
            return { hits };
          }
        })
      ]);
    }
  };
}

// src/tools/plugin-dev.ts
var path5 = __toESM(require("path"));
var PLUGIN_ID_RE = /^[a-z0-9][a-z0-9-_]{0,63}$/;
var PLUGIN_GUIDE = `# Harness Like \u7528\u6237\u63D2\u4EF6\u5F00\u53D1\u6307\u5357\uFF08\u7EAF JS \u8DEF\u5F84\uFF09

\u63D2\u4EF6\u4F4D\u4E8E vault \u7684 .obsidian/harness-like-plugins/<id>/ \u76EE\u5F55\uFF0C\u7ED3\u6784\uFF1A

- package.json\uFF1A\u58F0\u660E\u63D2\u4EF6\u5143\u6570\u636E\uFF08dsh \u5B57\u6BB5\u5FC5\u586B\uFF09
- main.js\uFF1ACJS \u4EA7\u7269\uFF0Cmodule.exports \u5BFC\u51FA\u63D2\u4EF6\u5BF9\u8C61

package.json \u6A21\u677F\uFF1A

{
  "name": "my-plugin",
  "version": "0.0.1",
  "description": "\u4E00\u53E5\u8BDD\u63CF\u8FF0",
  "dsh": { "id": "my-plugin", "version": "0.0.1", "entry": "main.js" }
}

main.js \u6700\u5C0F\u6A21\u677F\uFF08\u7EAF JS\uFF0C\u65E0\u9700\u6784\u5EFA\uFF09\uFF1A

const { Context } = require('@deepseek-ai/cordis')

module.exports = {
  name: 'my-plugin',
  inject: ['toolsCompat', 'commands', 'notice'],
  apply(ctx) {
    ctx.effect(() => [
      ctx.toolsCompat.register({
        name: 'my_tool',
        description: '\u5DE5\u5177\u505A\u4EC0\u4E48',
        input: { type: 'object', properties: { x: { type: 'string' } }, required: ['x'] },
        execute(input) {
          return { ok: true, x: input.x }
        },
      }),
      ctx.commands.addCommand({
        id: 'my-plugin:hello',
        name: '\u793A\u4F8B\u547D\u4EE4',
        callback: () => ctx.notice.notice('\u4F60\u597D'),
      }),
    ])
  },
}

\u53EF\u7528\u670D\u52A1\uFF08inject \u58F0\u660E\uFF09\uFF1AtoolsCompat\uFF08\u6CE8\u518C\u5DE5\u5177\uFF09\u3001commands\uFF08\u6CE8\u518C\u547D\u4EE4\uFF09\u3001views\uFF08\u6CE8\u518C/\u6253\u5F00\u81EA\u5B9A\u4E49\u9762\u677F\uFF09\u3001
vault\uFF08\u8BFB\u5199\u7B14\u8BB0\uFF09\u3001editor\uFF08\u5F53\u524D\u7F16\u8F91\u5668\uFF09\u3001workspace\uFF08\u6D3B\u8DC3\u6587\u4EF6\uFF09\u3001notice\uFF08\u901A\u77E5\uFF09\u3001ribbon\uFF08\u4FA7\u8FB9\u680F\u56FE\u6807\uFF09\u3001
statusbar\uFF08\u72B6\u6001\u680F\uFF09\u3001settings\uFF08\u8BBE\u7F6E/\u8BBE\u7F6E\u9875\uFF09\u3001sandbox\u3001approval\u3001sessionLog\u3001llmCaller\u3001
dshI18n\uFF08\u8986\u76D6\u4E3B\u63D2\u4EF6\u754C\u9762\u6587\u6848\uFF0C\u7FFB\u8BD1\u63D2\u4EF6\u7528\uFF09\u3002

\u670D\u52A1\u65B9\u6CD5\u901F\u67E5\uFF08\u52A1\u5FC5\u6309\u6B64\u7B7E\u540D\u8C03\u7528\uFF0C\u4E0D\u8981\u81C6\u6D4B\u65B9\u6CD5\u540D\uFF09\uFF1A
- ctx.vault\uFF1AgetMarkdownPaths() -> string[]\uFF08vault \u76F8\u5BF9\u8DEF\u5F84\u5217\u8868\uFF09\uFF1Bread(path) -> string\uFF1Bwrite(path, content)\uFF1B
  create(path, content)\uFF1BcreateFolder(path)\uFF08\u9010\u5C42\u521B\u5EFA\uFF09\uFF1Bdelete(path)\uFF1Brename(oldPath, newPath)\uFF1B
  on(ev, cb)\uFF08ev: vault/modify|create|delete|rename\uFF0Ccb(path, oldPath?)\uFF09
- ctx.views\uFF1AregisterView(type, (leaf) => view)\uFF1Bopen(type)
- ctx.commands\uFF1AaddCommand({ id, name, callback })\uFF08id/\u540D\u79F0\u81EA\u52A8\u5E26\u4E3B\u63D2\u4EF6\u524D\u7F00\uFF0C\u65E0\u9700\u624B\u5199\uFF09
- ctx.ribbon\uFF1AaddRibbonIcon(icon, title, callback) -> { remove }
- ctx.statusbar\uFF1AaddStatusBarItem() -> { el, remove }
- ctx.notice\uFF1Anotice(message, timeoutMs?)
- ctx.workspace\uFF1AgetActiveFile() -> string | null\uFF1BonFileOpen(cb)
- ctx.editor\uFF1AgetSelection()\u3001insertText(text)\u3001replaceSelection(text)\uFF1B\u65E0\u6D3B\u52A8\u7F16\u8F91\u5668\u65F6\u65B9\u6CD5\u8FD4\u56DE null
- ctx.toolsCompat\uFF1Aregister({ name, description, input, execute })\uFF08execute \u8FD4\u56DE JSON \u53EF\u5E8F\u5217\u5316\u5BF9\u8C61\uFF09

\u53EF\u7528\u4E8B\u4EF6\uFF08ctx.on\uFF09\uFF1Adsh/session/event\uFF08\u4F1A\u8BDD\u4E8B\u4EF6\uFF09\u3001vault/modify|create|delete|rename\u3001
workspace/file-open\u3001dsh/waiting-approval\uFF08\u5BA1\u6279\u5F39\u7A97\u6253\u5F00\uFF09\u3002

\u94C1\u5F8B\uFF08\u8FDD\u53CD\u4F1A\u5BFC\u81F4\u62A5\u9519\u6216\u9519\u8BEF\u5B9E\u73B0\uFF09\uFF1A
1. inject \u5FC5\u987B\u58F0\u660E apply \u91CC\u7528\u5230\u7684\u3010\u6BCF\u4E00\u4E2A\u3011\u670D\u52A1\u2014\u2014\u6F0F\u4E00\u4E2A\u8BBF\u95EE\u5C31\u62A5
   "cannot get property X without inject"\u3002
2. \u7981\u6B62\u76F4\u63A5\u64CD\u4F5C Obsidian DOM\uFF08document.querySelector('.workspace-ribbon') \u7B49\u5185\u90E8\u7C7B\u540D\uFF09\uFF0C
   \u4E00\u5F8B\u901A\u8FC7 ctx.* \u670D\u52A1\uFF1A\u4FA7\u8FB9\u680F\u56FE\u6807\u7528 ctx.ribbon.addRibbonIcon\uFF0C\u72B6\u6001\u680F\u7528 ctx.statusbar\u3002
3. \u6240\u6709\u6CE8\u518C\u5FC5\u987B\u5305\u8FDB ctx.effect(() => [disposer1, disposer2])\uFF0C\u63D2\u4EF6\u505C\u6B62\u65F6\u81EA\u52A8\u64A4\u9500\u3002

\u5E26\u754C\u9762\u7684\u63D2\u4EF6\uFF08\u81EA\u5B9A\u4E49\u9762\u677F\uFF1A\u6CE8\u518C\u89C6\u56FE + \u547D\u4EE4\u6253\u5F00\uFF0C\u6784\u5EFA\u9700 --external:obsidian\uFF09\uFF1A

const { ItemView } = require('obsidian')

class MyView extends ItemView {
  getViewType() { return 'my-view' }
  getDisplayText() { return '\u6211\u7684\u9762\u677F' }
  getIcon() { return 'pencil' }
  onOpen() {
    this.contentEl.createEl('h3', { text: '\u4F60\u597D\uFF0Cdsh\uFF01' })
  }
}

module.exports = {
  name: 'my-plugin',
  inject: ['views', 'commands', 'ribbon', 'notice'],   // \u2190 \u7528\u5230\u8C01\u5C31\u58F0\u660E\u8C01
  apply(ctx) {
    ctx.effect(() => [
      ctx.views.registerView('my-view', (leaf) => new MyView(leaf)),
      ctx.commands.addCommand({
        id: 'my-plugin:open-view',
        name: '\u6253\u5F00\u6211\u7684\u9762\u677F',
        callback: () => ctx.views.open('my-view'),
      }),
      ctx.ribbon.addRibbonIcon('pencil', '\u6253\u5F00\u6211\u7684\u9762\u677F', () => ctx.views.open('my-view')),
    ])
  },
}

\u66F4\u591A UI \u80FD\u529B\uFF08\u4E0E Obsidian \u539F\u751F\u63D2\u4EF6\u5BF9\u9F50\uFF09\uFF1A
- \u5E95\u90E8\u72B6\u6001\u680F\uFF1Aconst item = ctx.statusbar.addStatusBarItem(); item.el.setText('...')\uFF08disposer = item.remove\uFF09
- \u8BBE\u7F6E\u9875\uFF1Actx.settings.registerSettingTab(new (require('obsidian').PluginSettingTab)(...))\u2014\u2014\u9700\u5728\u8BBE\u7F6E Tab \u7684 display() \u91CC\u6E32\u67D3

\u7FFB\u8BD1\u63D2\u4EF6\uFF08\u8986\u76D6\u4E3B\u63D2\u4EF6\u754C\u9762\u6587\u6848\uFF0C\u952E\u7EA7\u8986\u76D6 zh/en\uFF0C\u63D2\u4EF6\u505C\u6B62\u81EA\u52A8\u8FD8\u539F\uFF09\uFF1A

module.exports = {
  name: 'my-translation',
  inject: ['dshI18n'],
  apply(ctx) {
    ctx.effect(() => [
      ctx.dshI18n.registerLocale('en', {
        'chat.send': 'Send it!',
        'chat.header.newSession': '\uFF0B New Conversation',
        // ...\u6309\u9700\u8986\u76D6\u4EFB\u610F\u6587\u6848 key\uFF1B\u4E0D\u5199 key \u5219\u4FDD\u6301\u4E3B\u63D2\u4EF6\u539F\u6587
      }),
    ])
  },
}

\u6CE8\u610F\uFF1A
- \u5DE5\u5177 execute \u8FD4\u56DE JSON \u53EF\u5E8F\u5217\u5316\u5BF9\u8C61\u3002
- ctx.commands.addCommand \u6CE8\u518C\u7684\u547D\u4EE4\u81EA\u52A8\u5F52\u4E00\u5316\u547D\u540D\uFF1Aid \u4E3A \`<\u4E3B\u63D2\u4EF6id>:<\u63D2\u4EF6id>:<\u547D\u4EE4>\`\uFF0C
  \u663E\u793A\u540D\u4E3A \`<\u4E3B\u63D2\u4EF6\u540D>: <\u547D\u4EE4\u540D>\uFF08<\u63D2\u4EF6id>\uFF09\`\uFF08\u5982 Harness Like: \u6253\u5F00\u9762\u677F\uFF08my-plugin\uFF09\uFF09\uFF0C
  \u547D\u4EE4\u9762\u677F\u6309\u4E3B\u63D2\u4EF6\u540D\u5373\u53EF\u627E\u5230\u5168\u90E8\u529F\u80FD\uFF1Bid \u65E0\u9700\u624B\u5199\u524D\u7F00\uFF0C\u5199\u4E86\u4E5F\u4F1A\u88AB\u5F52\u4E00\u5316\u53BB\u91CD\u3002
- \u4FEE\u6539 main.js \u540E\u8C03\u7528 reload_plugin \u751F\u6548\uFF1B\u8FD0\u884C\u4E2D\u63D2\u4EF6\u91CD\u8F7D\u9700\u7528\u6237\u786E\u8BA4\u6388\u6743\u3002
- \u63D2\u4EF6\u6784\u5EFA\u547D\u4EE4\u628A obsidian \u4E5F external\uFF1Aesbuild src/main.js --bundle --external:@deepseek-ai/cordis --external:obsidian --format=cjs --outfile=main.js`;
function pluginDevToolsPlugin(options) {
  return {
    name: "plugin-dev-tools",
    inject: ["vault", "sandbox", "toolsCompat", "pluginRuntime", "approval", "notice", "views"],
    apply(ctx) {
      const pluginsDir = ctx.sandbox.scope.pluginsDir;
      const pluginsDirRel = path5.posix.join(ctx.sandbox.scope.configDir, "harness-like-plugins");
      ctx.toolsCompat.register({
        name: "plugin_guide",
        description: "\u83B7\u53D6 Harness Like \u7528\u6237\u63D2\u4EF6\u5F00\u53D1\u6307\u5357\uFF08\u6A21\u677F\u4EE3\u7801\u3001API\u3001\u6D41\u7A0B\uFF09",
        input: { type: "object", properties: {} },
        execute() {
          return { guide: PLUGIN_GUIDE };
        }
      });
      ctx.toolsCompat.register({
        name: "create_plugin",
        description: "\u521B\u5EFA Harness Like \u7528\u6237\u63D2\u4EF6\u9AA8\u67B6\uFF1A\u5EFA\u76EE\u5F55\u5E76\u5199 package.json\uFF08\u7EAF JS \u63D2\u4EF6\u968F\u540E\u7528 write_plugin_file \u5199 main.js\uFF09",
        input: {
          type: "object",
          properties: {
            id: { type: "string", description: "\u63D2\u4EF6 id\uFF08\u5C0F\u5199\u5B57\u6BCD\u6570\u5B57\uFF0C\u53EF\u542B - _\uFF0C\u6700\u957F 64\uFF09" },
            description: { type: "string", description: "\u4E00\u53E5\u8BDD\u63CF\u8FF0" }
          },
          required: ["id"]
        },
        async execute(input) {
          const id = String(input.id ?? "").trim();
          if (!PLUGIN_ID_RE.test(id)) throw new Error(`\u63D2\u4EF6 id \u975E\u6CD5: ${id}\uFF08\u9700\u5339\u914D ${PLUGIN_ID_RE}\uFF09`);
          const relDir = path5.posix.join(pluginsDirRel, id);
          ctx.sandbox.assertWrite(relDir);
          const existing = await fileExists(ctx, path5.posix.join(relDir, "package.json"));
          if (existing) throw new Error(`\u63D2\u4EF6\u5DF2\u5B58\u5728: ${id}\uFF08\u76EE\u5F55: ${path5.join(pluginsDir, id)}\uFF09`);
          await ctx.vault.createFolder(relDir);
          const pkg = {
            name: id,
            version: "0.0.1",
            description: String(input.description ?? ""),
            dsh: { id, version: "0.0.1", entry: "main.js" }
          };
          await ctx.vault.write(path5.posix.join(relDir, "package.json"), JSON.stringify(pkg, null, 2) + "\n");
          return {
            ok: true,
            plugin_id: id,
            dir: path5.join(pluginsDir, id),
            next: "\u7528 write_plugin_file \u5199 main.js\uFF08\u7EAF JS\uFF0C\u6A21\u677F\u89C1 plugin_guide\uFF09\uFF0C\u7136\u540E\u7528 reload_plugin \u52A0\u8F7D\u751F\u6548"
          };
        }
      });
      ctx.toolsCompat.register({
        name: "write_plugin_file",
        description: "\u5199\u5165\u63D2\u4EF6\u76EE\u5F55\u5185\u7684\u6587\u4EF6\uFF08\u8986\u76D6\u5DF2\u5B58\u5728\u6587\u4EF6\u9700\u7528\u6237\u786E\u8BA4\uFF1B\u8BFB\u53D6\u6587\u4EF6\u8BF7\u7528 read_note\uFF0C\u52FF\u7528\u672C\u5DE5\u5177\uFF09",
        input: {
          type: "object",
          properties: {
            plugin_id: { type: "string", description: "\u63D2\u4EF6 id" },
            file: { type: "string", description: "\u76F8\u5BF9\u63D2\u4EF6\u76EE\u5F55\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C\u5982 main.js" },
            content: { type: "string", description: "\u6587\u4EF6\u5B8C\u6574\u5185\u5BB9" }
          },
          required: ["plugin_id", "file", "content"]
        },
        async execute(input) {
          const pluginId = String(input.plugin_id ?? "");
          const rel = normalizePluginRel(String(input.file ?? ""));
          if (!rel) throw new Error(`\u6587\u4EF6\u8DEF\u5F84\u975E\u6CD5: ${input.file}`);
          const vaultRel = path5.posix.join(pluginsDirRel, pluginId, rel);
          ctx.sandbox.assertWrite(vaultRel);
          const exists = await fileExists(ctx, vaultRel);
          if (exists) {
            const allow = await options.confirmOverwrite(pluginId, rel);
            if (!allow) return { ok: false, reason: "\u7528\u6237\u62D2\u7EDD\u8986\u76D6\uFF0C\u6587\u4EF6\u672A\u4FEE\u6539" };
          }
          const parent = path5.posix.dirname(rel);
          if (parent !== ".") {
            await ctx.vault.createFolder(path5.posix.join(pluginsDirRel, pluginId, parent));
          }
          await ctx.vault.write(vaultRel, String(input.content ?? ""));
          return { ok: true, path: vaultRel };
        }
      });
      ctx.toolsCompat.register({
        name: "plugin_status",
        description: "\u5217\u51FA\u7528\u6237\u63D2\u4EF6\u53CA\u5176\u72B6\u6001/\u7248\u672C/\u52A0\u8F7D\u9519\u8BEF\uFF08\u672A\u52A0\u8F7D\u63D2\u4EF6\u4E5F\u53EF\u67E5\u8BE2\uFF09",
        input: {
          type: "object",
          properties: { plugin_id: { type: "string", description: "\u53EF\u9009\uFF1A\u53EA\u67E5\u4E00\u4E2A\u63D2\u4EF6" } }
        },
        async execute(input) {
          const wanted = input.plugin_id ? String(input.plugin_id) : void 0;
          const ids = await ctx.pluginRuntime.discover();
          const rows = [];
          for (const id of ids) {
            if (wanted && id !== wanted) continue;
            const rec = ctx.pluginRuntime.get(id);
            const info = rec ?? ctx.pluginRuntime.inspect(id);
            rows.push(
              JSON.parse(
                JSON.stringify({
                  id,
                  version: info.manifest?.version,
                  status: info.status,
                  error: info.error
                })
              )
            );
          }
          return { count: rows.length, plugins: rows };
        }
      });
      ctx.toolsCompat.register({
        name: "open_view",
        description: "\u6253\u5F00\uFF08\u6216\u805A\u7126\uFF09\u4E00\u4E2A\u5DF2\u6CE8\u518C\u7C7B\u578B\u7684\u81EA\u5B9A\u4E49\u9762\u677F\u89C6\u56FE\uFF08\u63D2\u4EF6\u6CE8\u518C\u7684 ItemView\uFF09",
        input: {
          type: "object",
          properties: { type: { type: "string", description: "\u89C6\u56FE\u7C7B\u578B\uFF0C\u5982 note-count-view" } },
          required: ["type"]
        },
        execute(input) {
          ctx.views.open(String(input.type ?? ""));
          return { ok: true, type: String(input.type ?? "") };
        }
      });
      ctx.toolsCompat.register({
        name: "reload_plugin",
        description: "\u505C\u6B62\u5E76\u91CD\u65B0\u52A0\u8F7D\u4E00\u4E2A\u7528\u6237\u63D2\u4EF6\uFF08\u672A\u6388\u6743\u65F6\u5148\u8BF7\u6C42\u7528\u6237\u6388\u6743\uFF1B\u8FD4\u56DE\u52A0\u8F7D\u7ED3\u679C\u4E0E\u9519\u8BEF\uFF09",
        input: {
          type: "object",
          properties: { plugin_id: { type: "string", description: "\u63D2\u4EF6 id" } },
          required: ["plugin_id"]
        },
        async execute(input) {
          const id = String(input.plugin_id ?? "");
          const inspected = ctx.pluginRuntime.inspect(id);
          if (inspected.status === "error") {
            throw new Error(`\u65E0\u6CD5\u8BFB\u53D6\u63D2\u4EF6 ${id}: ${inspected.error ?? "\u672A\u77E5\u9519\u8BEF"}`);
          }
          const manifest = inspected.manifest;
          const granted = await options.ensureGranted(id, manifest.version, manifest.description);
          if (!granted) return { ok: false, reason: "\u7528\u6237\u672A\u6388\u6743\uFF0C\u63D2\u4EF6\u672A\u52A0\u8F7D" };
          await ctx.pluginRuntime.stop(id);
          const result = await ctx.pluginRuntime.load(id);
          return JSON.parse(
            JSON.stringify({
              ok: result.status === "running",
              plugin_id: id,
              status: result.status,
              error: result.error
            })
          );
        }
      });
    }
  };
}
function normalizePluginRel(raw) {
  const normalized = raw.replace(/\\/g, "/").replace(/^\/+/, "");
  const parts = normalized.split("/");
  if (parts.some((p) => p === ".." || p === "")) return "";
  return parts.join("/");
}
async function fileExists(ctx, rel) {
  try {
    await ctx.vault.read(rel);
    return true;
  } catch {
    return false;
  }
}

// src/views/ChatView.ts
var path6 = __toESM(require("path"));
var import_obsidian4 = require("obsidian");

// ../../node_modules/.pnpm/marked@18.0.9/node_modules/marked/lib/marked.esm.js
function C() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var R = C();
function j(l3) {
  R = l3;
}
var z = { exec: () => null };
function A(l3) {
  let e = [];
  return (t2) => {
    let n = Math.max(0, Math.min(3, t2 - 1)), s = e[n];
    return s || (s = l3(n), e[n] = s), s;
  };
}
function k(l3, e = "") {
  let t2 = typeof l3 == "string" ? l3 : l3.source, n = { replace: (s, r) => {
    let i = typeof r == "string" ? r : r.source;
    return i = i.replace(m.caret, "$1"), t2 = t2.replace(s, i), n;
  }, getRegex: () => new RegExp(t2, e) };
  return n;
}
var Te = ((l3 = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + l3);
  } catch {
    return false;
  }
})();
var m = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (l3) => new RegExp(`^( {0,3}${l3})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: A((l3) => new RegExp(`^ {0,${l3}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: A((l3) => new RegExp(`^ {0,${l3}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)), fencesBeginRegex: A((l3) => new RegExp(`^ {0,${l3}}(?:\`\`\`|~~~)`)), headingBeginRegex: A((l3) => new RegExp(`^ {0,${l3}}#`)), htmlBeginRegex: A((l3) => new RegExp(`^ {0,${l3}}<(?:[a-z].*>|!--)`, "i")), blockquoteBeginRegex: A((l3) => new RegExp(`^ {0,${l3}}>`)) };
var Oe = /^(?:[ \t]*(?:\n|$))+/;
var we = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var ye = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var q = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var Pe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var U = / {0,3}(?:[*+-]|\d{1,9}[.)])/;
var oe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var ae = k(oe).replace(/bull/g, U).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var Se = k(oe).replace(/bull/g, U).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var K = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/;
var _e = /^[^\n]+/;
var W = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
var $e = k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", W).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var Le = k(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, U).getRegex();
var Q = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var X = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var Me = k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", X).replace("tag", Q).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var le = (l3) => k(K).replace("hr", q).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list", l3).replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Q).getRegex();
var ze = le(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/);
var Ee = le(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/);
var Ce = k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ee).getRegex();
var J = { blockquote: Ce, code: we, def: $e, fences: ye, heading: Pe, hr: q, html: Me, lheading: ae, list: Le, newline: Oe, paragraph: ze, table: z, text: _e };
var se = k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", q).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Q).getRegex();
var Ae = { ...J, lheading: Se, table: se, paragraph: k(K).replace("hr", q).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", se).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Q).getRegex() };
var Ie = { ...J, html: k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", X).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: z, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: k(K).replace("hr", q).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ae).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() };
var Be = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var De = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var pe = /^( {2,}|\\)\n(?!\s*$)/;
var qe = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _ = /[\p{P}\p{S}]/u;
var I = /[\s\p{P}\p{S}]/u;
var v = /[^\s\p{P}\p{S}]/u;
var ve = k(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, I).getRegex();
var He = /[\p{Pi}\p{Ps}"']/u;
var ue = /(?!~)[\p{P}\p{S}]/u;
var Ze = /(?!~)[\s\p{P}\p{S}]/u;
var Ge = /(?:[^\s\p{P}\p{S}]|~)/u;
var Qe = k(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Te ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
var ce = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/;
var Ne = k(ce, "u").replace(/punct/g, _).getRegex();
var je = k(ce, "u").replace(/punct/g, ue).getRegex();
var Fe = /^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/;
var Ue = k(Fe, "u").replace(/openQuote/g, He).replace(/punct/g, _).getRegex();
var he = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var Ke = k(he, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex();
var We = k(he, "gu").replace(/notPunctSpace/g, Ge).replace(/punctSpace/g, Ze).replace(/punct/g, ue).getRegex();
var Xe = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)";
var Je = k(Xe, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex();
var Ve = k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex();
var Ye = "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)";
var et = k(Ye, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex();
var tt = k(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, _).getRegex();
var nt = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)";
var rt = k(nt, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex();
var st = k(/\\(punct)/, "gu").replace(/punct/g, _).getRegex();
var it = k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var ot = k(X).replace("(?:-->|$)", "-->").getRegex();
var at = k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", ot).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var G = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/;
var lt = k(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", G).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var de = k(/^!?\[(label)\]\[(ref)\]/).replace("label", G).replace("ref", W).getRegex();
var ke = k(/^!?\[(ref)\](?:\[\])?/).replace("ref", W).getRegex();
var pt = k("reflink|nolink(?!\\()", "g").replace("reflink", de).replace("nolink", ke).getRegex();
var ie = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
var V = { _backpedal: z, anyPunctuation: st, autolink: it, blockSkip: Qe, br: pe, code: De, del: z, delLDelim: z, delRDelim: z, emStrongLDelim: Ne, emStrongRDelimAst: Ke, emStrongRDelimUnd: Ve, escape: Be, link: lt, nolink: ke, punctuation: ve, reflink: de, reflinkSearch: pt, tag: at, text: qe, url: z };
var ut = { ...V, emStrongLDelim: Ue, emStrongRDelimAst: Je, emStrongRDelimUnd: et, link: k(/^!?\[(label)\]\((.*?)\)/).replace("label", G).getRegex(), reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", G).getRegex() };
var F = { ...V, emStrongRDelimAst: We, emStrongLDelim: je, delLDelim: tt, delRDelim: rt, url: k(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ie).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: k(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ie).getRegex() };
var ct = { ...F, br: k(pe).replace("{2,}", "*").getRegex(), text: k(F.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var H = { normal: J, gfm: Ae, pedantic: Ie };
var B = { normal: V, gfm: F, breaks: ct, pedantic: ut };
var ht = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var ge = (l3) => ht[l3];
function O(l3, e) {
  if (e) {
    if (m.escapeTest.test(l3)) return l3.replace(m.escapeReplace, ge);
  } else if (m.escapeTestNoEncode.test(l3)) return l3.replace(m.escapeReplaceNoEncode, ge);
  return l3;
}
function Y(l3) {
  try {
    l3 = encodeURI(l3).replace(m.percentDecode, "%");
  } catch {
    return null;
  }
  return l3;
}
function ee(l3, e) {
  let t2 = l3.replace(m.findPipe, (r, i, o) => {
    let p = false, a = i;
    for (; --a >= 0 && o[a] === "\\"; ) p = !p;
    return p ? "|" : " |";
  }), n = t2.split(m.splitPipe), s = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; s < n.length; s++) n[s] = n[s].trim().replace(m.slashPipe, "|");
  return n;
}
function $(l3, e, t2) {
  let n = l3.length;
  if (n === 0) return "";
  let s = 0;
  for (; s < n; ) {
    let r = l3.charAt(n - s - 1);
    if (r === e && !t2) s++;
    else if (r !== e && t2) s++;
    else break;
  }
  return l3.slice(0, n - s);
}
function te(l3) {
  let e = l3.split(`
`), t2 = e.length - 1;
  for (; t2 >= 0 && m.blankLine.test(e[t2]); ) t2--;
  return e.length - t2 <= 2 ? l3 : e.slice(0, t2 + 1).join(`
`);
}
function fe(l3, e) {
  if (l3.indexOf(e[1]) === -1) return -1;
  let t2 = 0;
  for (let n = 0; n < l3.length; n++) if (l3[n] === "\\") n++;
  else if (l3[n] === e[0]) t2++;
  else if (l3[n] === e[1] && (t2--, t2 < 0)) return n;
  return t2 > 0 ? -2 : -1;
}
function me(l3, e = 0) {
  let t2 = e, n = "";
  for (let s of l3) if (s === "	") {
    let r = 4 - t2 % 4;
    n += " ".repeat(r), t2 += r;
  } else n += s, t2++;
  return n;
}
function xe(l3, e, t2, n, s) {
  let r = e.href, i = e.title || null, o = l3[1].replace(s.other.outputLinkReplace, "$1");
  n.state.inLink = true;
  let p = { type: l3[0].charAt(0) === "!" ? "image" : "link", raw: t2, href: r, title: i, text: o, tokens: n.inlineTokens(o) };
  return n.state.inLink = false, p;
}
function dt(l3, e, t2) {
  let n = l3.match(t2.other.indentCodeCompensation);
  if (n === null) return e;
  let s = n[1];
  return e.split(`
`).map((r) => {
    let i = r.match(t2.other.beginningSpace);
    if (i === null) return r;
    let [o] = i;
    return o.length >= s.length ? r.slice(s.length) : r;
  }).join(`
`);
}
var y = class {
  options;
  rules;
  lexer;
  constructor(e) {
    this.options = e || R;
  }
  space(e) {
    let t2 = this.rules.block.newline.exec(e);
    if (t2 && t2[0].length > 0) return { type: "space", raw: t2[0] };
  }
  code(e) {
    let t2 = this.rules.block.code.exec(e);
    if (t2) {
      let n = this.options.pedantic ? t2[0] : te(t2[0]), s = n.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: n, codeBlockStyle: "indented", text: s };
    }
  }
  fences(e) {
    let t2 = this.rules.block.fences.exec(e);
    if (t2) {
      let n = t2[0], s = dt(n, t2[3] || "", this.rules);
      return { type: "code", raw: n, lang: t2[2] ? t2[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t2[2], text: s };
    }
  }
  heading(e) {
    let t2 = this.rules.block.heading.exec(e);
    if (t2) {
      let n = t2[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let s = $(n, "#");
        (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (n = s.trim());
      }
      return { type: "heading", raw: $(t2[0], `
`), depth: t2[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t2 = this.rules.block.hr.exec(e);
    if (t2) return { type: "hr", raw: $(t2[0], `
`) };
  }
  blockquote(e) {
    let t2 = this.rules.block.blockquote.exec(e);
    if (t2) {
      let n = $(t2[0], `
`).split(`
`), s = "", r = "", i = [];
      for (; n.length > 0; ) {
        let o = false, p = [], a;
        for (a = 0; a < n.length; a++) if (this.rules.other.blockquoteStart.test(n[a])) p.push(n[a]), o = true;
        else if (!o) p.push(n[a]);
        else break;
        n = n.slice(a);
        let u = p.join(`
`), c = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s = s ? `${s}
${u}` : u, r = r ? `${r}
${c}` : c;
        let h = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(c, i, true), this.lexer.state.top = h, n.length === 0) break;
        let d = i.at(-1);
        if (d?.type === "code") break;
        if (d?.type === "blockquote") {
          let T = d, g = n.join(`
`), w = T.raw + `
` + g.replace(this.rules.other.blockquoteSetextReplace2, ""), M = this.blockquote(w);
          i[i.length - 1] = M, s = `${s}
${g}`, r = r.substring(0, r.length - T.text.length) + M.text;
          break;
        } else if (d?.type === "list") {
          let T = d, g = T.raw + `
` + n.join(`
`), w = this.list(g);
          i[i.length - 1] = w, s = s.substring(0, s.length - d.raw.length) + w.raw, r = r.substring(0, r.length - T.raw.length) + w.raw, n = g.substring(i.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: s, tokens: i, text: r };
    }
  }
  list(e) {
    let t2 = this.rules.block.list.exec(e);
    if (t2) {
      let n = t2[1].trim(), s = n.length > 1, r = { type: "list", raw: "", ordered: s, start: s ? +n.slice(0, -1) : "", loose: false, items: [] };
      n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = s ? n : "[*+-]");
      let i = this.rules.other.listItemRegex(n), o = false;
      for (; e; ) {
        let a = false, u = "", c = "";
        if (!(t2 = i.exec(e)) || this.rules.block.hr.test(e)) break;
        u = t2[0], e = e.substring(u.length);
        let h = me(t2[2].split(`
`, 1)[0], t2[1].length), d = e.split(`
`, 1)[0], T = !h.trim(), g = 0;
        if (this.options.pedantic ? (g = 2, c = h.trimStart()) : T ? g = t2[1].length + 1 : (g = h.search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, c = h.slice(g), g += t2[1].length), T && this.rules.other.blankLine.test(d) && (u += d + `
`, e = e.substring(d.length + 1), a = true), !a) {
          let w = this.rules.other.nextBulletRegex(g), M = this.rules.other.hrRegex(g), ne = this.rules.other.fencesBeginRegex(g), re = this.rules.other.headingBeginRegex(g), be = this.rules.other.htmlBeginRegex(g), Re = this.rules.other.blockquoteBeginRegex(g);
          for (; e; ) {
            let N = e.split(`
`, 1)[0], D;
            if (d = N, this.options.pedantic ? (d = d.replace(this.rules.other.listReplaceNesting, "  "), D = d) : D = d.replace(this.rules.other.tabCharGlobal, "    "), ne.test(d) || re.test(d) || be.test(d) || Re.test(d) || w.test(d) || M.test(d)) break;
            if (D.search(this.rules.other.nonSpaceChar) >= g || !d.trim()) c += `
` + D.slice(g);
            else {
              if (T || h.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ne.test(h) || re.test(h) || M.test(h)) break;
              c += `
` + d;
            }
            T = !d.trim(), u += N + `
`, e = e.substring(N.length + 1), h = D.slice(g);
          }
        }
        r.loose || (o ? r.loose = true : this.rules.other.doubleBlankLine.test(u) && (o = true)), r.items.push({ type: "list_item", raw: u, task: !!this.options.gfm && this.rules.other.listIsTask.test(c), loose: false, text: c, tokens: [] }), r.raw += u;
      }
      let p = r.items.at(-1);
      if (p) p.raw = p.raw.trimEnd(), p.text = p.text.trimEnd();
      else return;
      r.raw = r.raw.trimEnd();
      for (let a of r.items) {
        this.lexer.state.top = false, a.tokens = this.lexer.blockTokens(a.text, []);
        let u = a.tokens[0];
        if (a.task && (u?.type === "text" || u?.type === "paragraph")) {
          a.text = a.text.replace(this.rules.other.listReplaceTask, ""), u.raw = u.raw.replace(this.rules.other.listReplaceTask, ""), u.text = u.text.replace(this.rules.other.listReplaceTask, "");
          for (let h = this.lexer.inlineQueue.length - 1; h >= 0; h--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)) {
            this.lexer.inlineQueue[h].src = this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask, "");
            break;
          }
          let c = this.rules.other.listTaskCheckbox.exec(a.raw);
          if (c) {
            let h = { type: "checkbox", raw: c[0] + " ", checked: c[0] !== "[ ]" };
            a.checked = h.checked, r.loose ? a.tokens[0] && ["paragraph", "text"].includes(a.tokens[0].type) && "tokens" in a.tokens[0] && a.tokens[0].tokens ? (a.tokens[0].raw = h.raw + a.tokens[0].raw, a.tokens[0].text = h.raw + a.tokens[0].text, a.tokens[0].tokens.unshift(h)) : a.tokens.unshift({ type: "paragraph", raw: h.raw, text: h.raw, tokens: [h] }) : a.tokens.unshift(h);
          }
        } else a.task && (a.task = false);
        if (!r.loose) {
          let c = a.tokens.filter((d) => d.type === "space"), h = c.length > 0 && c.some((d) => this.rules.other.anyLine.test(d.raw));
          r.loose = h;
        }
      }
      if (r.loose) for (let a of r.items) {
        a.loose = true;
        for (let u of a.tokens) u.type === "text" && (u.type = "paragraph");
      }
      return r;
    }
  }
  html(e) {
    let t2 = this.rules.block.html.exec(e);
    if (t2) {
      let n = te(t2[0]);
      return { type: "html", block: true, raw: n, pre: t2[1] === "pre" || t2[1] === "script" || t2[1] === "style", text: n };
    }
  }
  def(e) {
    let t2 = this.rules.block.def.exec(e);
    if (t2) {
      let n = t2[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = t2[2] ? t2[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t2[3] ? t2[3].substring(1, t2[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t2[3];
      return { type: "def", tag: n, raw: $(t2[0], `
`), href: s, title: r };
    }
  }
  table(e) {
    let t2 = this.rules.block.table.exec(e);
    if (!t2 || !this.rules.other.tableDelimiter.test(t2[2])) return;
    let n = ee(t2[1]), s = t2[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = t2[3]?.trim() ? t2[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], i = { type: "table", raw: $(t2[0], `
`), header: [], align: [], rows: [] };
    if (n.length === s.length) {
      for (let o of s) this.rules.other.tableAlignRight.test(o) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? i.align.push("left") : i.align.push(null);
      for (let o = 0; o < n.length; o++) i.header.push({ text: n[o], tokens: this.lexer.inline(n[o]), header: true, align: i.align[o] });
      for (let o of r) i.rows.push(ee(o, i.header.length).map((p, a) => ({ text: p, tokens: this.lexer.inline(p), header: false, align: i.align[a] })));
      return i;
    }
  }
  lheading(e) {
    let t2 = this.rules.block.lheading.exec(e);
    if (t2) {
      let n = t2[1].trim();
      return { type: "heading", raw: $(t2[0], `
`), depth: t2[2].charAt(0) === "=" ? 1 : 2, text: n, tokens: this.lexer.inline(n) };
    }
  }
  paragraph(e) {
    let t2 = this.rules.block.paragraph.exec(e);
    if (t2) {
      let n = t2[1].charAt(t2[1].length - 1) === `
` ? t2[1].slice(0, -1) : t2[1];
      return { type: "paragraph", raw: t2[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(e) {
    let t2 = this.rules.block.text.exec(e);
    if (t2) return { type: "text", raw: t2[0], text: t2[0], tokens: this.lexer.inline(t2[0]) };
  }
  escape(e) {
    let t2 = this.rules.inline.escape.exec(e);
    if (t2) return { type: "escape", raw: t2[0], text: t2[1] };
  }
  tag(e) {
    let t2 = this.rules.inline.tag.exec(e);
    if (t2) return !this.lexer.state.inLink && this.rules.other.startATag.test(t2[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t2[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t2[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t2[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t2[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t2[0] };
  }
  link(e) {
    let t2 = this.rules.inline.link.exec(e);
    if (t2) {
      let n = t2[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n)) return;
        let i = $(n.slice(0, -1), "\\");
        if ((n.length - i.length) % 2 === 0) return;
      } else {
        let i = fe(t2[2], "()");
        if (i === -2) return;
        if (i > -1) {
          let p = (t2[0].indexOf("!") === 0 ? 5 : 4) + t2[1].length + i;
          t2[2] = t2[2].substring(0, i), t2[0] = t2[0].substring(0, p).trim(), t2[3] = "";
        }
      }
      let s = t2[2], r = "";
      if (this.options.pedantic) {
        let i = this.rules.other.pedanticHrefTitle.exec(s);
        i && (s = i[1], r = i[3]);
      } else r = t2[3] ? t2[3].slice(1, -1) : "";
      return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? s = s.slice(1) : s = s.slice(1, -1)), xe(t2, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: r && r.replace(this.rules.inline.anyPunctuation, "$1") }, t2[0], this.lexer, this.rules);
    }
  }
  reflink(e, t2) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let s = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r = t2[s.toLowerCase()];
      if (!r) {
        let i = n[0].charAt(0);
        return { type: "text", raw: i, text: i };
      }
      return xe(n, r, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t2, n = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (!s || !s[1] && !s[2] && !s[3] && !s[4] || s[4] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(s[1] || s[3] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let i = [...s[0]].length - 1, o, p, a = i, u = 0, c = s[0][0], h = n === c, d = c === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, t2 = t2.slice(-1 * e.length + i); (s = d.exec(t2)) !== null; ) {
        if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o) continue;
        if (p = [...o].length, s[3] || s[4]) {
          a += p;
          continue;
        } else if (s[5] || s[6]) {
          if (i % 3 && !((i + p) % 3)) {
            u += p;
            continue;
          }
          if (h) break;
        }
        if (a -= p, a > 0) continue;
        p = Math.min(p, p + a + u);
        let T = [...s[0]][0].length, g = e.slice(0, i + s.index + T + p);
        if (Math.min(i, p) % 2) {
          let M = g.slice(1, -1);
          return { type: "em", raw: g, text: M, tokens: this.lexer.inlineTokens(M) };
        }
        let w = g.slice(2, -2);
        return { type: "strong", raw: g, text: w, tokens: this.lexer.inlineTokens(w) };
      }
    }
  }
  codespan(e) {
    let t2 = this.rules.inline.code.exec(e);
    if (t2) {
      let n = t2[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(n), r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return s && r && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: t2[0], text: n };
    }
  }
  br(e) {
    let t2 = this.rules.inline.br.exec(e);
    if (t2) return { type: "br", raw: t2[0] };
  }
  del(e, t2, n = "") {
    let s = this.rules.inline.delLDelim.exec(e);
    if (!s) return;
    if (!(s[1] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let i = [...s[0]].length - 1, o, p, a = i, u = this.rules.inline.delRDelim;
      for (u.lastIndex = 0, t2 = t2.slice(-1 * e.length + i); (s = u.exec(t2)) !== null; ) {
        if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o || (p = [...o].length, p !== i)) continue;
        if (s[3] || s[4]) {
          a += p;
          continue;
        }
        if (a -= p, a > 0) continue;
        p = Math.min(p, p + a);
        let c = [...s[0]][0].length, h = e.slice(0, i + s.index + c + p), d = h.slice(i, -i);
        return { type: "del", raw: h, text: d, tokens: this.lexer.inlineTokens(d) };
      }
    }
  }
  autolink(e) {
    let t2 = this.rules.inline.autolink.exec(e);
    if (t2) {
      let n, s;
      return t2[2] === "@" ? (n = t2[1], s = "mailto:" + n) : (n = t2[1], s = n), { type: "link", raw: t2[0], text: n, href: s, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(e) {
    let t2;
    if (t2 = this.rules.inline.url.exec(e)) {
      let n, s;
      if (t2[2] === "@") n = t2[0], s = "mailto:" + n;
      else {
        let r;
        do
          r = t2[0], t2[0] = this.rules.inline._backpedal.exec(t2[0])?.[0] ?? "";
        while (r !== t2[0]);
        n = t2[0], t2[1] === "www." ? s = "http://" + t2[0] : s = t2[0];
      }
      return { type: "link", raw: t2[0], text: n, href: s, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(e) {
    let t2 = this.rules.inline.text.exec(e);
    if (t2) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: t2[0], text: t2[0], escaped: n };
    }
  }
};
var x = class l {
  tokens;
  options;
  state;
  inlineQueue;
  tokenizer;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || R, this.options.tokenizer = this.options.tokenizer || new y(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t2 = { other: m, block: H.normal, inline: B.normal };
    this.options.pedantic ? (t2.block = H.pedantic, t2.inline = B.pedantic) : this.options.gfm && (t2.block = H.gfm, this.options.breaks ? t2.inline = B.breaks : t2.inline = B.gfm), this.tokenizer.rules = t2;
  }
  static get rules() {
    return { block: H, inline: B };
  }
  static lex(e, t2) {
    return new l(t2).lex(e);
  }
  static lexInline(e, t2) {
    return new l(t2).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(m.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t2 = 0; t2 < this.inlineQueue.length; t2++) {
      let n = this.inlineQueue[t2];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t2 = [], n = false) {
    this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, ""));
    let s = 1 / 0;
    for (; e; ) {
      if (e.length < s) s = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      let r;
      if (this.options.extensions?.block?.some((o) => (r = o.call({ lexer: this }, e, t2)) ? (e = e.substring(r.raw.length), t2.push(r), true) : false)) continue;
      if (r = this.tokenizer.space(e)) {
        e = e.substring(r.raw.length);
        let o = t2.at(-1);
        r.raw.length === 1 && o !== void 0 ? o.raw += `
` : t2.push(r);
        continue;
      }
      if (r = this.tokenizer.code(e)) {
        e = e.substring(r.raw.length);
        let o = t2.at(-1);
        o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.at(-1).src = o.text) : t2.push(r);
        continue;
      }
      if (r = this.tokenizer.fences(e)) {
        e = e.substring(r.raw.length), t2.push(r);
        continue;
      }
      if (r = this.tokenizer.heading(e)) {
        e = e.substring(r.raw.length), t2.push(r);
        continue;
      }
      if (r = this.tokenizer.hr(e)) {
        e = e.substring(r.raw.length), t2.push(r);
        continue;
      }
      if (r = this.tokenizer.blockquote(e)) {
        e = e.substring(r.raw.length), t2.push(r);
        continue;
      }
      if (r = this.tokenizer.list(e)) {
        e = e.substring(r.raw.length), t2.push(r);
        continue;
      }
      if (r = this.tokenizer.html(e)) {
        e = e.substring(r.raw.length), t2.push(r);
        continue;
      }
      if (r = this.tokenizer.def(e)) {
        e = e.substring(r.raw.length);
        let o = t2.at(-1);
        o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.raw, this.inlineQueue.at(-1).src = o.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }, t2.push(r));
        continue;
      }
      if (r = this.tokenizer.table(e)) {
        e = e.substring(r.raw.length), t2.push(r);
        continue;
      }
      if (r = this.tokenizer.lheading(e)) {
        e = e.substring(r.raw.length), t2.push(r);
        continue;
      }
      let i = e;
      if (this.options.extensions?.startBlock) {
        let o = 1 / 0, p = e.slice(1), a;
        this.options.extensions.startBlock.forEach((u) => {
          a = u.call({ lexer: this }, p), typeof a == "number" && a >= 0 && (o = Math.min(o, a));
        }), o < 1 / 0 && o >= 0 && (i = e.substring(0, o + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(i))) {
        let o = t2.at(-1);
        n && o?.type === "paragraph" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t2.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(e)) {
        e = e.substring(r.raw.length);
        let o = t2.at(-1);
        o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t2.push(r);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return this.state.top = true, t2;
  }
  inline(e, t2 = []) {
    return this.inlineQueue.push({ src: e, tokens: t2 }), t2;
  }
  inlineTokens(e, t2 = []) {
    this.tokenizer.lexer = this;
    let n = e;
    if (this.tokens.links) {
      let o = Object.keys(this.tokens.links);
      o.length > 0 && (n = n.replace(this.tokenizer.rules.inline.reflinkSearch, (p) => o.includes(p.slice(p.lastIndexOf("[") + 1, -1)) ? "[" + "a".repeat(p.length - 2) + "]" : p));
    }
    n = n.replace(this.tokenizer.rules.inline.anyPunctuation, "++"), n = n.replace(this.tokenizer.rules.inline.blockSkip, (o, p, a) => {
      let u = a ? a.length : 0;
      return o.slice(0, u) + "[" + "a".repeat(o.length - u - 2) + "]";
    }), n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
    let s = false, r = "", i = 1 / 0;
    for (; e; ) {
      if (e.length < i) i = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      s || (r = ""), s = false;
      let o;
      if (this.options.extensions?.inline?.some((a) => (o = a.call({ lexer: this }, e, t2)) ? (e = e.substring(o.raw.length), t2.push(o), true) : false)) continue;
      if (o = this.tokenizer.escape(e)) {
        e = e.substring(o.raw.length), t2.push(o);
        continue;
      }
      if (o = this.tokenizer.tag(e)) {
        e = e.substring(o.raw.length), t2.push(o);
        continue;
      }
      if (o = this.tokenizer.link(e)) {
        e = e.substring(o.raw.length), t2.push(o);
        continue;
      }
      if (o = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(o.raw.length);
        let a = t2.at(-1);
        o.type === "text" && a?.type === "text" ? (a.raw += o.raw, a.text += o.text) : t2.push(o);
        continue;
      }
      if (o = this.tokenizer.emStrong(e, n, r)) {
        e = e.substring(o.raw.length), t2.push(o);
        continue;
      }
      if (o = this.tokenizer.codespan(e)) {
        e = e.substring(o.raw.length), t2.push(o);
        continue;
      }
      if (o = this.tokenizer.br(e)) {
        e = e.substring(o.raw.length), t2.push(o);
        continue;
      }
      if (o = this.tokenizer.del(e, n, r)) {
        e = e.substring(o.raw.length), t2.push(o);
        continue;
      }
      if (o = this.tokenizer.autolink(e)) {
        e = e.substring(o.raw.length), t2.push(o);
        continue;
      }
      if (!this.state.inLink && (o = this.tokenizer.url(e))) {
        e = e.substring(o.raw.length), t2.push(o);
        continue;
      }
      let p = e;
      if (this.options.extensions?.startInline) {
        let a = 1 / 0, u = e.slice(1), c;
        this.options.extensions.startInline.forEach((h) => {
          c = h.call({ lexer: this }, u), typeof c == "number" && c >= 0 && (a = Math.min(a, c));
        }), a < 1 / 0 && a >= 0 && (p = e.substring(0, a + 1));
      }
      if (o = this.tokenizer.inlineText(p)) {
        e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (r = o.raw.slice(-1)), s = true;
        let a = t2.at(-1);
        a?.type === "text" ? (a.raw += o.raw, a.text += o.text) : t2.push(o);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return t2;
  }
  infiniteLoopError(e) {
    let t2 = "Infinite loop on byte: " + e;
    if (this.options.silent) console.error(t2);
    else throw new Error(t2);
  }
};
var P = class {
  options;
  parser;
  constructor(e) {
    this.options = e || R;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t2, escaped: n }) {
    let s = (t2 || "").match(m.notSpaceStart)?.[0], r = e.replace(m.endingNewline, "") + `
`;
    return s ? '<pre><code class="language-' + O(s) + '">' + (n ? r : O(r, true)) + `</code></pre>
` : "<pre><code>" + (n ? r : O(r, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  def(e) {
    return "";
  }
  heading({ tokens: e, depth: t2 }) {
    return `<h${t2}>${this.parser.parseInline(e)}</h${t2}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    let t2 = e.ordered, n = e.start, s = "";
    for (let o = 0; o < e.items.length; o++) {
      let p = e.items[o];
      s += this.listitem(p);
    }
    let r = t2 ? "ol" : "ul", i = t2 && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + r + i + `>
` + s + "</" + r + `>
`;
  }
  listitem(e) {
    return `<li>${this.parser.parse(e.tokens)}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t2 = "", n = "";
    for (let r = 0; r < e.header.length; r++) n += this.tablecell(e.header[r]);
    t2 += this.tablerow({ text: n });
    let s = "";
    for (let r = 0; r < e.rows.length; r++) {
      let i = e.rows[r];
      n = "";
      for (let o = 0; o < i.length; o++) n += this.tablecell(i[o]);
      s += this.tablerow({ text: n });
    }
    return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + t2 + `</thead>
` + s + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    let t2 = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t2 + `</${n}>
`;
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${O(e, true)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t2, tokens: n }) {
    let s = this.parser.parseInline(n), r = Y(e);
    if (r === null) return s;
    e = r;
    let i = '<a href="' + e + '"';
    return t2 && (i += ' title="' + O(t2) + '"'), i += ">" + s + "</a>", i;
  }
  image({ href: e, title: t2, text: n, tokens: s }) {
    s && (n = this.parser.parseInline(s, this.parser.textRenderer));
    let r = Y(e);
    if (r === null) return O(n);
    e = r;
    let i = `<img src="${e}" alt="${O(n)}"`;
    return t2 && (i += ` title="${O(t2)}"`), i += ">", i;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : O(e.text);
  }
};
var L = class {
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
  checkbox({ raw: e }) {
    return e;
  }
};
var b = class l2 {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || R, this.options.renderer = this.options.renderer || new P(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new L();
  }
  static parse(e, t2) {
    return new l2(t2).parse(e);
  }
  static parseInline(e, t2) {
    return new l2(t2).parseInline(e);
  }
  parse(e) {
    this.renderer.parser = this;
    let t2 = "";
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      if (this.options.extensions?.renderers?.[s.type]) {
        let i = s, o = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (o !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "checkbox", "html", "def", "paragraph", "text"].includes(i.type)) {
          t2 += o || "";
          continue;
        }
      }
      let r = s;
      switch (r.type) {
        case "space": {
          t2 += this.renderer.space(r);
          break;
        }
        case "hr": {
          t2 += this.renderer.hr(r);
          break;
        }
        case "heading": {
          t2 += this.renderer.heading(r);
          break;
        }
        case "code": {
          t2 += this.renderer.code(r);
          break;
        }
        case "table": {
          t2 += this.renderer.table(r);
          break;
        }
        case "blockquote": {
          t2 += this.renderer.blockquote(r);
          break;
        }
        case "list": {
          t2 += this.renderer.list(r);
          break;
        }
        case "checkbox": {
          t2 += this.renderer.checkbox(r);
          break;
        }
        case "html": {
          t2 += this.renderer.html(r);
          break;
        }
        case "def": {
          t2 += this.renderer.def(r);
          break;
        }
        case "paragraph": {
          t2 += this.renderer.paragraph(r);
          break;
        }
        case "text": {
          t2 += this.renderer.text(r);
          break;
        }
        default: {
          let i = 'Token with "' + r.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return t2;
  }
  parseInline(e, t2 = this.renderer) {
    this.renderer.parser = this;
    let n = "";
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (this.options.extensions?.renderers?.[r.type]) {
        let o = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (o !== false || !["escape", "html", "link", "image", "checkbox", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
          n += o || "";
          continue;
        }
      }
      let i = r;
      switch (i.type) {
        case "escape": {
          n += t2.text(i);
          break;
        }
        case "html": {
          n += t2.html(i);
          break;
        }
        case "link": {
          n += t2.link(i);
          break;
        }
        case "image": {
          n += t2.image(i);
          break;
        }
        case "checkbox": {
          n += t2.checkbox(i);
          break;
        }
        case "strong": {
          n += t2.strong(i);
          break;
        }
        case "em": {
          n += t2.em(i);
          break;
        }
        case "codespan": {
          n += t2.codespan(i);
          break;
        }
        case "br": {
          n += t2.br(i);
          break;
        }
        case "del": {
          n += t2.del(i);
          break;
        }
        case "text": {
          n += t2.text(i);
          break;
        }
        default: {
          let o = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return n;
  }
};
var S = class {
  options;
  block;
  constructor(e) {
    this.options = e || R;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  emStrongMask(e) {
    return e;
  }
  provideLexer(e = this.block) {
    return e ? x.lex : x.lexInline;
  }
  provideParser(e = this.block) {
    return e ? b.parse : b.parseInline;
  }
};
var Z = class {
  defaults = C();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = b;
  Renderer = P;
  TextRenderer = L;
  Lexer = x;
  Tokenizer = y;
  Hooks = S;
  constructor(...e) {
    this.use(...e);
  }
  walkTokens(e, t2) {
    let n = [];
    for (let s of e) switch (n = n.concat(t2.call(this, s)), s.type) {
      case "table": {
        let r = s;
        for (let i of r.header) n = n.concat(this.walkTokens(i.tokens, t2));
        for (let i of r.rows) for (let o of i) n = n.concat(this.walkTokens(o.tokens, t2));
        break;
      }
      case "list": {
        let r = s;
        n = n.concat(this.walkTokens(r.items, t2));
        break;
      }
      default: {
        let r = s;
        this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((i) => {
          let o = r[i].flat(1 / 0);
          n = n.concat(this.walkTokens(o, t2));
        }) : r.tokens && (n = n.concat(this.walkTokens(r.tokens, t2)));
      }
    }
    return n;
  }
  use(...e) {
    let t2 = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      let s = { ...n };
      if (s.async = this.defaults.async || s.async || false, n.extensions && (n.extensions.forEach((r) => {
        if (!r.name) throw new Error("extension name required");
        if ("renderer" in r) {
          let i = t2.renderers[r.name];
          i ? t2.renderers[r.name] = function(...o) {
            let p = r.renderer.apply(this, o);
            return p === false && (p = i.apply(this, o)), p;
          } : t2.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let i = t2[r.level];
          i ? i.unshift(r.tokenizer) : t2[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t2.startBlock ? t2.startBlock.push(r.start) : t2.startBlock = [r.start] : r.level === "inline" && (t2.startInline ? t2.startInline.push(r.start) : t2.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (t2.childTokens[r.name] = r.childTokens);
      }), s.extensions = t2), n.renderer) {
        let r = this.defaults.renderer || new P(this.defaults);
        for (let i in n.renderer) {
          if (!(i in r)) throw new Error(`renderer '${i}' does not exist`);
          if (["options", "parser"].includes(i)) continue;
          let o = i, p = n.renderer[o], a = r[o];
          r[o] = (...u) => {
            let c = p.apply(r, u);
            return c === false && (c = a.apply(r, u)), c || "";
          };
        }
        s.renderer = r;
      }
      if (n.tokenizer) {
        let r = this.defaults.tokenizer || new y(this.defaults);
        for (let i in n.tokenizer) {
          if (!(i in r)) throw new Error(`tokenizer '${i}' does not exist`);
          if (["options", "rules", "lexer"].includes(i)) continue;
          let o = i, p = n.tokenizer[o], a = r[o];
          r[o] = (...u) => {
            let c = p.apply(r, u);
            return c === false && (c = a.apply(r, u)), c;
          };
        }
        s.tokenizer = r;
      }
      if (n.hooks) {
        let r = this.defaults.hooks || new S();
        for (let i in n.hooks) {
          if (!(i in r)) throw new Error(`hook '${i}' does not exist`);
          if (["options", "block"].includes(i)) continue;
          let o = i, p = n.hooks[o], a = r[o];
          S.passThroughHooks.has(i) ? r[o] = (u) => {
            if (this.defaults.async && S.passThroughHooksRespectAsync.has(i)) return (async () => {
              let h = await p.call(r, u);
              return a.call(r, h);
            })();
            let c = p.call(r, u);
            return a.call(r, c);
          } : r[o] = (...u) => {
            if (this.defaults.async) return (async () => {
              let h = await p.apply(r, u);
              return h === false && (h = await a.apply(r, u)), h;
            })();
            let c = p.apply(r, u);
            return c === false && (c = a.apply(r, u)), c;
          };
        }
        s.hooks = r;
      }
      if (n.walkTokens) {
        let r = this.defaults.walkTokens, i = n.walkTokens;
        s.walkTokens = function(o) {
          let p = [];
          return p.push(i.call(this, o)), r && (p = p.concat(r.call(this, o))), p;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t2) {
    return x.lex(e, t2 ?? this.defaults);
  }
  parser(e, t2) {
    return b.parse(e, t2 ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, s) => {
      let r = { ...s }, i = { ...this.defaults, ...r }, o = this.onError(!!i.silent, !!i.async);
      if (this.defaults.async === true && r.async === false) return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return o(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
        let p = i.hooks ? await i.hooks.preprocess(n) : n, u = await (i.hooks ? await i.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(p, i), c = i.hooks ? await i.hooks.processAllTokens(u) : u;
        i.walkTokens && await Promise.all(this.walkTokens(c, i.walkTokens));
        let d = await (i.hooks ? await i.hooks.provideParser(e) : e ? b.parse : b.parseInline)(c, i);
        return i.hooks ? await i.hooks.postprocess(d) : d;
      })().catch(o);
      try {
        i.hooks && (n = i.hooks.preprocess(n));
        let a = (i.hooks ? i.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(n, i);
        i.hooks && (a = i.hooks.processAllTokens(a)), i.walkTokens && this.walkTokens(a, i.walkTokens);
        let c = (i.hooks ? i.hooks.provideParser(e) : e ? b.parse : b.parseInline)(a, i);
        return i.hooks && (c = i.hooks.postprocess(c)), c;
      } catch (p) {
        return o(p);
      }
    };
  }
  onError(e, t2) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        let s = "<p>An error occurred:</p><pre>" + O(n.message + "", true) + "</pre>";
        return t2 ? Promise.resolve(s) : s;
      }
      if (t2) return Promise.reject(n);
      throw n;
    };
  }
};
var E = new Z();
function f(l3, e) {
  return E.parse(l3, e);
}
f.options = f.setOptions = function(l3) {
  return E.setOptions(l3), f.defaults = E.defaults, j(f.defaults), f;
};
f.getDefaults = C;
f.defaults = R;
function kt(...l3) {
  return E.use(...l3), f.defaults = E.defaults, j(f.defaults), f;
}
f.use = kt;
f.walkTokens = function(l3, e) {
  return E.walkTokens(l3, e);
};
f.parseInline = E.parseInline;
f.Parser = b;
f.parser = b.parse;
f.Renderer = P;
f.TextRenderer = L;
f.Lexer = x;
f.lexer = x.lex;
f.Tokenizer = y;
f.Hooks = S;
f.parse = f;
var nn = f.options;
var rn = f.setOptions;
var sn = f.walkTokens;
var on = f.parseInline;
var ln = b.parse;
var pn = x.lex;

// ../../node_modules/.pnpm/dompurify@3.4.13/node_modules/dompurify/dist/purify.es.mjs
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l3) {
  var t2 = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t2) {
    var e, n, i, u, a = [], f2 = true, o = false;
    try {
      if (i = (t2 = t2.call(r)).next, 0 === l3) ;
      else for (; !(f2 = (e = i.call(t2)).done) && (a.push(e.value), a.length !== l3); f2 = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f2 && null != t2.return && (u = t2.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t2 = {}.toString.call(r).slice(8, -1);
    return "Object" === t2 && r.constructor && (t2 = r.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r, a) : void 0;
  }
}
var entries = Object.entries;
var setPrototypeOf = Object.setPrototypeOf;
var isFrozen = Object.isFrozen;
var getPrototypeOf = Object.getPrototypeOf;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var freeze = Object.freeze;
var seal = Object.seal;
var create = Object.create;
var _ref = typeof Reflect !== "undefined" && Reflect;
var apply = _ref.apply;
var construct = _ref.construct;
if (!freeze) {
  freeze = function freeze2(x2) {
    return x2;
  };
}
if (!seal) {
  seal = function seal2(x2) {
    return x2;
  };
}
if (!apply) {
  apply = function apply2(func, thisArg) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return func.apply(thisArg, args);
  };
}
if (!construct) {
  construct = function construct2(Func) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return new Func(...args);
  };
}
var arrayForEach = unapply(Array.prototype.forEach);
var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);
var arraySplice = unapply(Array.prototype.splice);
var arrayIsArray = Array.isArray;
var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringToString = unapply(String.prototype.toString);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);
var numberToString = unapply(Number.prototype.toString);
var booleanToString = unapply(Boolean.prototype.toString);
var bigintToString = typeof BigInt === "undefined" ? null : unapply(BigInt.prototype.toString);
var symbolToString = typeof Symbol === "undefined" ? null : unapply(Symbol.prototype.toString);
var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
var objectToString = unapply(Object.prototype.toString);
var regExpTest = unapply(RegExp.prototype.test);
var typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    if (thisArg instanceof RegExp) {
      thisArg.lastIndex = 0;
    }
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return apply(func, thisArg, args);
  };
}
function unconstruct(Func) {
  return function() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return construct(Func, args);
  };
}
function addToSet(set2, array) {
  let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
  if (setPrototypeOf) {
    setPrototypeOf(set2, null);
  }
  if (!arrayIsArray(array)) {
    return set2;
  }
  let l3 = array.length;
  while (l3--) {
    let element = array[l3];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) {
          array[l3] = lcElement;
        }
        element = lcElement;
      }
    }
    set2[element] = true;
  }
  return set2;
}
function cleanArray(array) {
  for (let index = 0; index < array.length; index++) {
    const isPropertyExist = objectHasOwnProperty(array, index);
    if (!isPropertyExist) {
      array[index] = null;
    }
  }
  return array;
}
function clone2(object) {
  const newObject = create(null);
  for (const _ref2 of entries(object)) {
    var _ref3 = _slicedToArray(_ref2, 2);
    const property2 = _ref3[0];
    const value = _ref3[1];
    const isPropertyExist = objectHasOwnProperty(object, property2);
    if (isPropertyExist) {
      if (arrayIsArray(value)) {
        newObject[property2] = cleanArray(value);
      } else if (value && typeof value === "object" && value.constructor === Object) {
        newObject[property2] = clone2(value);
      } else {
        newObject[property2] = value;
      }
    }
  }
  return newObject;
}
function stringifyValue(value) {
  switch (typeof value) {
    case "string": {
      return value;
    }
    case "number": {
      return numberToString(value);
    }
    case "boolean": {
      return booleanToString(value);
    }
    case "bigint": {
      return bigintToString ? bigintToString(value) : "0";
    }
    case "symbol": {
      return symbolToString ? symbolToString(value) : "Symbol()";
    }
    case "undefined": {
      return objectToString(value);
    }
    case "function":
    case "object": {
      if (value === null) {
        return objectToString(value);
      }
      const valueAsRecord = value;
      const valueToString = lookupGetter(valueAsRecord, "toString");
      if (typeof valueToString === "function") {
        const stringified = valueToString(valueAsRecord);
        return typeof stringified === "string" ? stringified : objectToString(stringified);
      }
      return objectToString(value);
    }
    default: {
      return objectToString(value);
    }
  }
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === "function") {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}
function isRegex(value) {
  try {
    regExpTest(value, "");
    return true;
  } catch (_unused) {
    return false;
  }
}
var html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var text = freeze(["#text"]);
var html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]);
var svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var MUSTACHE_EXPR = seal(/{{[\w\W]*|^[\w\W]*}}/g);
var ERB_EXPR = seal(/<%[\w\W]*|^[\w\W]*%>/g);
var TMPLIT_EXPR = seal(/\${[\w\W]*/g);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
var IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
var DOCTYPE_NAME = seal(/^html$/i);
var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ELEMENT_MARKUP_PROBE = seal(/<[/\w!]/g);
var COMMENT_MARKUP_PROBE = seal(/<[/\w]/g);
var FALLBACK_TAG_CLOSE = seal(/<\/no(script|embed|frames)/i);
var SELF_CLOSING_TAG = seal(/\/>/i);
var NODE_TYPE = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
};
var getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
    return null;
  }
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
    suffix = purifyHostElement.getAttribute(ATTR_NAME);
  }
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_2) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
var _createHooksMap = function _createHooksMap2() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
var _resolveSetOption = function _resolveSetOption2(cfg, key, fallback, options) {
  return objectHasOwnProperty(cfg, key) && arrayIsArray(cfg[key]) ? addToSet(options.base ? clone2(options.base) : {}, cfg[key], options.transform) : fallback;
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root) => createDOMPurify(root);
  DOMPurify.version = "3.4.13";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let document2 = window2.document;
  const originalDocument = document2;
  const currentScript = originalDocument.currentScript;
  window2.DocumentFragment;
  const HTMLTemplateElement = window2.HTMLTemplateElement, Node = window2.Node, Element = window2.Element, NodeFilter = window2.NodeFilter, _window$NamedNodeMap = window2.NamedNodeMap;
  _window$NamedNodeMap === void 0 ? window2.NamedNodeMap || window2.MozNamedAttrMap : _window$NamedNodeMap;
  window2.HTMLFormElement;
  const DOMParser = window2.DOMParser, trustedTypes = window2.trustedTypes;
  const ElementPrototype = Element.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const remove = lookupGetter(ElementPrototype, "remove");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  const getShadowRoot = lookupGetter(ElementPrototype, "shadowRoot");
  const getAttributes = lookupGetter(ElementPrototype, "attributes");
  const getNodeType = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeType") : null;
  const getNodeName = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeName") : null;
  const getOwnerDocument = Node && Node.prototype ? lookupGetter(Node.prototype, "ownerDocument") : null;
  if (typeof HTMLTemplateElement === "function") {
    const template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) {
      document2 = template.content.ownerDocument;
    }
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  let defaultTrustedTypesPolicy;
  let defaultTrustedTypesPolicyResolved = false;
  let IN_TRUSTED_TYPES_POLICY = 0;
  const _assertNotInTrustedTypesPolicy = function _assertNotInTrustedTypesPolicy2() {
    if (IN_TRUSTED_TYPES_POLICY > 0) {
      throw typeErrorCreate('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
    }
  };
  const _createTrustedHTML = function _createTrustedHTML2(html2) {
    _assertNotInTrustedTypesPolicy();
    IN_TRUSTED_TYPES_POLICY++;
    try {
      return trustedTypesPolicy.createHTML(html2);
    } finally {
      IN_TRUSTED_TYPES_POLICY--;
    }
  };
  const _createTrustedScriptURL = function _createTrustedScriptURL2(scriptUrl) {
    _assertNotInTrustedTypesPolicy();
    IN_TRUSTED_TYPES_POLICY++;
    try {
      return trustedTypesPolicy.createScriptURL(scriptUrl);
    } finally {
      IN_TRUSTED_TYPES_POLICY--;
    }
  };
  const _getDefaultTrustedTypesPolicy = function _getDefaultTrustedTypesPolicy2() {
    if (!defaultTrustedTypesPolicyResolved) {
      defaultTrustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      defaultTrustedTypesPolicyResolved = true;
    }
    return defaultTrustedTypesPolicy;
  };
  const _document = document2, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
  const importNode = originalDocument.importNode;
  let hooks = _createHooksMap();
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, TMPLIT_EXPR$1 = TMPLIT_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE, CUSTOM_ELEMENT$1 = CUSTOM_ELEMENT;
  let IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
    tagCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    }
  }));
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let SAFE_FOR_XML = true;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let SET_CONFIG_ALLOWED_TAGS = null;
  let SET_CONFIG_ALLOWED_ATTR = null;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    // <selectedcontent> mirrors the selected <option>'s subtree, cloned by
    // the UA (customizable <select>) — including any on* handlers — and the
    // engine re-mirrors synchronously whenever a removal changes which
    // option/selectedcontent is current, even inside DOMPurify's inert
    // DOMParser document. Hoisting its children on removal re-inserts a fresh
    // mirror target ahead of the walk, which the engine refills, looping
    // forever (DoS) and amplifying output. Dropping its content on removal
    // (rather than hoisting) breaks that cascade; the content is a duplicate
    // of the option, which is sanitized on its own. See campaign-3 F1/F6.
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
  const DEFAULT_MATHML_TEXT_INTEGRATION_POINTS = freeze(["mi", "mo", "mn", "ms", "mtext"]);
  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS);
  const DEFAULT_HTML_INTEGRATION_POINTS = freeze(["annotation-xml"]);
  let HTML_INTEGRATION_POINTS = addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
  let PARSER_MEDIA_TYPE = null;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc = null;
  let CONFIG = null;
  const formElement = document2.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    if (!cfg || typeof cfg !== "object") {
      cfg = {};
    }
    cfg = clone2(cfg);
    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = _resolveSetOption(cfg, "ALLOWED_TAGS", DEFAULT_ALLOWED_TAGS, {
      transform: transformCaseFunc
    });
    ALLOWED_ATTR = _resolveSetOption(cfg, "ALLOWED_ATTR", DEFAULT_ALLOWED_ATTR, {
      transform: transformCaseFunc
    });
    ALLOWED_NAMESPACES = _resolveSetOption(cfg, "ALLOWED_NAMESPACES", DEFAULT_ALLOWED_NAMESPACES, {
      transform: stringToString
    });
    URI_SAFE_ATTRIBUTES = _resolveSetOption(cfg, "ADD_URI_SAFE_ATTR", DEFAULT_URI_SAFE_ATTRIBUTES, {
      transform: transformCaseFunc,
      base: DEFAULT_URI_SAFE_ATTRIBUTES
    });
    DATA_URI_TAGS = _resolveSetOption(cfg, "ADD_DATA_URI_TAGS", DEFAULT_DATA_URI_TAGS, {
      transform: transformCaseFunc,
      base: DEFAULT_DATA_URI_TAGS
    });
    FORBID_CONTENTS = _resolveSetOption(cfg, "FORBID_CONTENTS", DEFAULT_FORBID_CONTENTS, {
      transform: transformCaseFunc
    });
    FORBID_TAGS = _resolveSetOption(cfg, "FORBID_TAGS", clone2({}), {
      transform: transformCaseFunc
    });
    FORBID_ATTR = _resolveSetOption(cfg, "FORBID_ATTR", clone2({}), {
      transform: transformCaseFunc
    });
    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES && typeof cfg.USE_PROFILES === "object" ? clone2(cfg.USE_PROFILES) : cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = isRegex(cfg.ALLOWED_URI_REGEXP) ? cfg.ALLOWED_URI_REGEXP : IS_ALLOWED_URI;
    NAMESPACE = typeof cfg.NAMESPACE === "string" ? cfg.NAMESPACE : HTML_NAMESPACE;
    MATHML_TEXT_INTEGRATION_POINTS = objectHasOwnProperty(cfg, "MATHML_TEXT_INTEGRATION_POINTS") && cfg.MATHML_TEXT_INTEGRATION_POINTS && typeof cfg.MATHML_TEXT_INTEGRATION_POINTS === "object" ? clone2(cfg.MATHML_TEXT_INTEGRATION_POINTS) : addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS);
    HTML_INTEGRATION_POINTS = objectHasOwnProperty(cfg, "HTML_INTEGRATION_POINTS") && cfg.HTML_INTEGRATION_POINTS && typeof cfg.HTML_INTEGRATION_POINTS === "object" ? clone2(cfg.HTML_INTEGRATION_POINTS) : addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS);
    const customElementHandling = objectHasOwnProperty(cfg, "CUSTOM_ELEMENT_HANDLING") && cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING === "object" ? clone2(cfg.CUSTOM_ELEMENT_HANDLING) : create(null);
    CUSTOM_ELEMENT_HANDLING = create(null);
    if (objectHasOwnProperty(customElementHandling, "tagNameCheck") && isRegexOrFunction(customElementHandling.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = customElementHandling.tagNameCheck;
    }
    if (objectHasOwnProperty(customElementHandling, "attributeNameCheck") && isRegexOrFunction(customElementHandling.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = customElementHandling.attributeNameCheck;
    }
    if (objectHasOwnProperty(customElementHandling, "allowCustomizedBuiltInElements") && typeof customElementHandling.allowCustomizedBuiltInElements === "boolean") {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = customElementHandling.allowCustomizedBuiltInElements;
    }
    seal(CUSTOM_ELEMENT_HANDLING);
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, text);
      ALLOWED_ATTR = create(null);
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    EXTRA_ELEMENT_HANDLING.tagCheck = null;
    EXTRA_ELEMENT_HANDLING.attributeCheck = null;
    if (objectHasOwnProperty(cfg, "ADD_TAGS")) {
      if (typeof cfg.ADD_TAGS === "function") {
        EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
      } else if (arrayIsArray(cfg.ADD_TAGS)) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone2(ALLOWED_TAGS);
        }
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
    }
    if (objectHasOwnProperty(cfg, "ADD_ATTR")) {
      if (typeof cfg.ADD_ATTR === "function") {
        EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
      } else if (arrayIsArray(cfg.ADD_ATTR)) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone2(ALLOWED_ATTR);
        }
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
    }
    if (objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") && arrayIsArray(cfg.ADD_URI_SAFE_ATTR)) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (objectHasOwnProperty(cfg, "FORBID_CONTENTS") && arrayIsArray(cfg.FORBID_CONTENTS)) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone2(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    if (objectHasOwnProperty(cfg, "ADD_FORBID_CONTENTS") && arrayIsArray(cfg.ADD_FORBID_CONTENTS)) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone2(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) {
      ALLOWED_TAGS["#text"] = true;
    }
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
    }
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      }
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      }
      const previousTrustedTypesPolicy = trustedTypesPolicy;
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      try {
        emptyHTML = _createTrustedHTML("");
      } catch (error) {
        trustedTypesPolicy = previousTrustedTypesPolicy;
        throw error;
      }
    } else if (cfg.TRUSTED_TYPES_POLICY === null) {
      trustedTypesPolicy = void 0;
      emptyHTML = "";
    } else {
      if (trustedTypesPolicy === void 0) {
        trustedTypesPolicy = _getDefaultTrustedTypesPolicy();
      }
      if (trustedTypesPolicy && typeof emptyHTML === "string") {
        emptyHTML = _createTrustedHTML("");
      }
    }
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  const _checkSvgNamespace = function _checkSvgNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === HTML_NAMESPACE) {
      return tagName === "svg";
    }
    if (parent.namespaceURI === MATHML_NAMESPACE) {
      return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
    }
    return Boolean(ALL_SVG_TAGS[tagName]);
  };
  const _checkMathMlNamespace = function _checkMathMlNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === HTML_NAMESPACE) {
      return tagName === "math";
    }
    if (parent.namespaceURI === SVG_NAMESPACE) {
      return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
    }
    return Boolean(ALL_MATHML_TAGS[tagName]);
  };
  const _checkHtmlNamespace = function _checkHtmlNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
      return false;
    }
    if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
      return false;
    }
    return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
  };
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent = getParentNode(element);
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: NAMESPACE,
        tagName: "template"
      };
    }
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }
    if (element.namespaceURI === SVG_NAMESPACE) {
      return _checkSvgNamespace(tagName, parent, parentTagName);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      return _checkMathMlNamespace(tagName, parent, parentTagName);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      return _checkHtmlNamespace(tagName, parent, parentTagName);
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
      return true;
    }
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, {
      element: node
    });
    try {
      getParentNode(node).removeChild(node);
    } catch (_2) {
      remove(node);
      if (!getParentNode(node)) {
        throw typeErrorCreate("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
      }
    }
  };
  const _neutralizeRoot = function _neutralizeRoot2(root) {
    _neutralizeSubtree(root);
    const childNodes = getChildNodes(root);
    if (childNodes) {
      const snapshot = [];
      arrayForEach(childNodes, (child) => {
        arrayPush(snapshot, child);
      });
      arrayForEach(snapshot, (child) => {
        try {
          remove(child);
        } catch (_2) {
        }
      });
    }
    const attributes = getAttributes(root);
    if (attributes) {
      for (let i = attributes.length - 1; i >= 0; --i) {
        const attribute = attributes[i];
        const name = attribute && attribute.name;
        if (typeof name === "string") {
          try {
            root.removeAttribute(name);
          } catch (_2) {
          }
        }
      }
    }
  };
  const _removeAttribute = function _removeAttribute2(name, element) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: element.getAttributeNode(name),
        from: element
      });
    } catch (_2) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: element
      });
    }
    element.removeAttribute(name);
    if (name === "is") {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(element);
        } catch (_2) {
        }
      } else {
        try {
          element.setAttribute(name, "");
        } catch (_2) {
        }
      }
    }
  };
  const _stripDisallowedAttributes = function _stripDisallowedAttributes2(element) {
    const attributes = getAttributes(element);
    if (!attributes) {
      return;
    }
    for (let i = attributes.length - 1; i >= 0; --i) {
      const attribute = attributes[i];
      const name = attribute && attribute.name;
      if (typeof name !== "string" || ALLOWED_ATTR[transformCaseFunc(name)]) {
        continue;
      }
      try {
        element.removeAttribute(name);
      } catch (_2) {
      }
    }
  };
  const _neutralizeSubtree = function _neutralizeSubtree2(root) {
    const stack = [root];
    while (stack.length > 0) {
      const node = stack.pop();
      const nodeType = getNodeType ? getNodeType(node) : node.nodeType;
      if (nodeType === NODE_TYPE.element) {
        _stripDisallowedAttributes(node);
      }
      const childNodes = getChildNodes(node);
      if (childNodes) {
        for (let i = childNodes.length - 1; i >= 0; --i) {
          stack.push(childNodes[i]);
        }
      }
    }
  };
  const _neutralizePatchLinkage = function _neutralizePatchLinkage2(root) {
    if (!SAFE_FOR_XML) {
      return;
    }
    const stack = [root];
    while (stack.length > 0) {
      const node = stack.pop();
      const nodeType = getNodeType ? getNodeType(node) : node.nodeType;
      if (nodeType === NODE_TYPE.processingInstruction || nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, node.data)) {
        try {
          remove(node);
        } catch (_2) {
        }
        continue;
      }
      if (nodeType === NODE_TYPE.element) {
        const element = node;
        const lcTag = transformCaseFunc(getNodeName ? getNodeName(node) : node.nodeName);
        try {
          if (element.hasAttribute && element.hasAttribute("patchsrc")) {
            element.removeAttribute("patchsrc");
          }
          if (element.hasAttribute && element.hasAttribute("for") && lcTag !== "label" && lcTag !== "output") {
            element.removeAttribute("for");
          }
        } catch (_2) {
        }
      }
      const childNodes = getChildNodes(node);
      if (childNodes) {
        for (let i = childNodes.length - 1; i >= 0; --i) {
          stack.push(childNodes[i]);
        }
      }
    }
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc = null;
    let leadingWhitespace = null;
    if (FORCE_BODY) {
      dirty = "<remove></remove>" + dirty;
    } else {
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    }
    const dirtyPayload = trustedTypesPolicy ? _createTrustedHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_2) {
      }
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_2) {
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    }
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createNodeIterator = function _createNodeIterator2(root) {
    const doc = getOwnerDocument ? getOwnerDocument(root) : root.ownerDocument;
    return createNodeIterator.call(
      doc || root,
      root,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
      null
    );
  };
  const _stripTemplateExpressions = function _stripTemplateExpressions2(value) {
    value = stringReplace(value, MUSTACHE_EXPR$1, " ");
    value = stringReplace(value, ERB_EXPR$1, " ");
    value = stringReplace(value, TMPLIT_EXPR$1, " ");
    return value;
  };
  const _scrubTemplateExpressions2 = function _scrubTemplateExpressions(node) {
    var _node$querySelectorAl;
    node.normalize();
    const doc = getOwnerDocument ? getOwnerDocument(node) : node.ownerDocument;
    const walker = createNodeIterator.call(
      doc || node,
      node,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_CDATA_SECTION | NodeFilter.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let currentNode = walker.nextNode();
    while (currentNode) {
      currentNode.data = _stripTemplateExpressions(currentNode.data);
      currentNode = walker.nextNode();
    }
    const templates = (_node$querySelectorAl = node.querySelectorAll) === null || _node$querySelectorAl === void 0 ? void 0 : _node$querySelectorAl.call(node, "template");
    if (templates) {
      arrayForEach(templates, (tmpl) => {
        if (_isDocumentFragment(tmpl.content)) {
          _scrubTemplateExpressions2(tmpl.content);
        }
      });
    }
  };
  const _isClobbered = function _isClobbered2(element) {
    const realTagName = getNodeName ? getNodeName(element) : null;
    if (typeof realTagName !== "string") {
      return false;
    }
    if (transformCaseFunc(realTagName) !== "form") {
      return false;
    }
    return typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    element.attributes !== getAttributes(element) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    element.nodeType !== getNodeType(element) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    element.childNodes !== getChildNodes(element);
  };
  const _isDocumentFragment = function _isDocumentFragment2(value) {
    if (!getNodeType || typeof value !== "object" || value === null) {
      return false;
    }
    try {
      return getNodeType(value) === NODE_TYPE.documentFragment;
    } catch (_2) {
      return false;
    }
  };
  const _isNode = function _isNode2(value) {
    if (!getNodeType || typeof value !== "object" || value === null) {
      return false;
    }
    try {
      return typeof getNodeType(value) === "number";
    } catch (_2) {
      return false;
    }
  };
  function _executeHooks(hooks2, currentNode, data) {
    if (hooks2.length === 0) {
      return;
    }
    arrayForEach(hooks2, (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  }
  const _isUnsafeNode = function _isUnsafeNode2(currentNode, tagName) {
    if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.textContent) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.innerHTML)) {
      return true;
    }
    if (SAFE_FOR_XML && currentNode.namespaceURI === HTML_NAMESPACE && tagName === "style" && _isNode(currentNode.firstElementChild)) {
      return true;
    }
    if (currentNode.nodeType === NODE_TYPE.processingInstruction) {
      return true;
    }
    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, currentNode.data)) {
      return true;
    }
    return false;
  };
  const _sanitizeDisallowedNode = function _sanitizeDisallowedNode2(currentNode, tagName, root) {
    if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
      if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
        return false;
      }
      if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
        return false;
      }
    }
    if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
      const parentNode = getParentNode(currentNode);
      const childNodes = getChildNodes(currentNode);
      if (childNodes && parentNode) {
        const childCount = childNodes.length;
        for (let i = childCount - 1; i >= 0; --i) {
          const hoisted = currentNode === root ? cloneNode(childNodes[i], true) : childNodes[i];
          parentNode.insertBefore(hoisted, getNextSibling(currentNode));
        }
      }
    }
    _forceRemove(currentNode);
    return true;
  };
  const _forkSharedAllowlist = function _forkSharedAllowlist2(hookList, set2, defaultSet, setConfigSet) {
    if (hookList.length === 0) {
      return set2;
    }
    return set2 === defaultSet || set2 === setConfigSet ? clone2(set2) : set2;
  };
  const _sanitizeElements = function _sanitizeElements2(currentNode, root) {
    _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
    if (currentNode !== root && getParentNode(currentNode) === null) {
      if (IN_PLACE) {
        _neutralizeSubtree(currentNode);
      }
      return true;
    }
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(getNodeName ? getNodeName(currentNode) : currentNode.nodeName);
    ALLOWED_TAGS = _forkSharedAllowlist(hooks.uponSanitizeElement, ALLOWED_TAGS, DEFAULT_ALLOWED_TAGS, SET_CONFIG_ALLOWED_TAGS);
    _executeHooks(hooks.uponSanitizeElement, currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (currentNode !== root && getParentNode(currentNode) === null) {
      if (IN_PLACE) {
        _neutralizeSubtree(currentNode);
      }
      return true;
    }
    if (_isUnsafeNode(currentNode, tagName)) {
      _forceRemove(currentNode);
      return true;
    }
    if (FORBID_TAGS[tagName] || !(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && !ALLOWED_TAGS[tagName]) {
      const removed = _sanitizeDisallowedNode(currentNode, tagName, root);
      if (removed === false) {
        _executeHooks(hooks.afterSanitizeElements, currentNode, null);
      }
      return removed;
    }
    const nt2 = getNodeType ? getNodeType(currentNode) : currentNode.nodeType;
    if (nt2 === NODE_TYPE.element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(FALLBACK_TAG_CLOSE, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      const content = _stripTemplateExpressions(currentNode.textContent);
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    _executeHooks(hooks.afterSanitizeElements, currentNode, null);
    return false;
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (FORBID_ATTR[lcName]) {
      return false;
    }
    if (SAFE_FOR_XML && lcName === "patchsrc") {
      return false;
    }
    if (SAFE_FOR_XML && lcName === "for" && lcTag !== "label" && lcTag !== "output") {
      return false;
    }
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
      return false;
    }
    const nameIsPermitted = ALLOWED_ATTR[lcName] || EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag);
    if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$1, lcName)) ;
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ;
    else if (!nameIsPermitted) {
      if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName, lcTag)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
      ) ;
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
    else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) ;
    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) ;
    else if (value) {
      return false;
    } else ;
    return true;
  };
  const RESERVED_CUSTOM_ELEMENT_NAMES = addToSet({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]);
  const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
    return !RESERVED_CUSTOM_ELEMENT_NAMES[stringToLowerCase(tagName)] && regExpTest(CUSTOM_ELEMENT$1, tagName);
  };
  const _applyTrustedTypesToAttribute = function _applyTrustedTypesToAttribute2(lcTag, lcName, namespaceURI, value) {
    if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function" && !namespaceURI) {
      switch (trustedTypes.getAttributeType(lcTag, lcName)) {
        case "TrustedHTML": {
          return _createTrustedHTML(value);
        }
        case "TrustedScriptURL": {
          return _createTrustedScriptURL(value);
        }
      }
    }
    return value;
  };
  const _setAttributeValue = function _setAttributeValue2(currentNode, name, namespaceURI, value) {
    try {
      if (namespaceURI) {
        currentNode.setAttributeNS(namespaceURI, name, value);
      } else {
        currentNode.setAttribute(name, value);
      }
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
      } else {
        arrayPop(DOMPurify.removed);
      }
    } catch (_2) {
      _removeAttribute(name, currentNode);
    }
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
    const attributes = currentNode.attributes;
    if (!attributes || _isClobbered(currentNode)) {
      return;
    }
    ALLOWED_ATTR = _forkSharedAllowlist(hooks.uponSanitizeAttribute, ALLOWED_ATTR, DEFAULT_ALLOWED_ATTR, SET_CONFIG_ALLOWED_ATTR);
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR,
      forceKeepAttr: void 0
    };
    let l3 = attributes.length;
    const lcTag = transformCaseFunc(currentNode.nodeName);
    while (l3--) {
      const attr = attributes[l3];
      const name = attr.name, namespaceURI = attr.namespaceURI, attrValue = attr.value;
      const lcName = transformCaseFunc(name);
      const initValue = attrValue;
      let value = name === "value" ? initValue : stringTrim(initValue);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name") && stringIndexOf(value, SANITIZE_NAMED_PROPS_PREFIX) !== 0) {
        _removeAttribute(name, currentNode);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (lcName === "attributename" && stringMatch(value, "href")) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      if (!hookEvent.keepAttr) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(SELF_CLOSING_TAG, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) {
        value = _stripTemplateExpressions(value);
      }
      if (!_isValidAttribute(lcTag, lcName, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      value = _applyTrustedTypesToAttribute(lcTag, lcName, namespaceURI, value);
      if (value !== initValue) {
        _setAttributeValue(currentNode, name, namespaceURI, value);
      }
    }
    _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
  };
  const _sanitizeShadowDOM2 = function _sanitizeShadowDOM(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
      _sanitizeElements(shadowNode, fragment);
      _sanitizeAttributes(shadowNode);
      if (_isDocumentFragment(shadowNode.content)) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
      const shadowNodeType = getNodeType ? getNodeType(shadowNode) : shadowNode.nodeType;
      if (shadowNodeType === NODE_TYPE.element) {
        const innerSr = getShadowRoot(shadowNode);
        if (_isDocumentFragment(innerSr)) {
          _sanitizeAttachedShadowRoots(innerSr);
          _sanitizeShadowDOM2(innerSr);
        }
      }
    }
    _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
  };
  const _sanitizeAttachedShadowRoots = function _sanitizeAttachedShadowRoots2(root) {
    const stack = [{
      node: root,
      shadow: null
    }];
    while (stack.length > 0) {
      const item = stack.pop();
      if (item.shadow) {
        _sanitizeShadowDOM2(item.shadow);
        continue;
      }
      const node = item.node;
      const nodeType = getNodeType ? getNodeType(node) : node.nodeType;
      const isElement = nodeType === NODE_TYPE.element;
      const childNodes = getChildNodes(node);
      if (childNodes) {
        for (let i = childNodes.length - 1; i >= 0; --i) {
          stack.push({
            node: childNodes[i],
            shadow: null
          });
        }
      }
      if (isElement) {
        const rootName = getNodeName ? getNodeName(node) : null;
        if (typeof rootName === "string" && transformCaseFunc(rootName) === "template") {
          const content = node.content;
          if (_isDocumentFragment(content)) {
            stack.push({
              node: content,
              shadow: null
            });
          }
        }
      }
      if (isElement) {
        const sr = getShadowRoot(node);
        if (_isDocumentFragment(sr)) {
          stack.push({
            node: null,
            shadow: sr
          }, {
            node: sr,
            shadow: null
          });
        }
      }
    }
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body = null;
    let importedNode = null;
    let currentNode = null;
    let returnNode = null;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = "<!-->";
    }
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      dirty = stringifyValue(dirty);
      if (typeof dirty !== "string") {
        throw typeErrorCreate("dirty is not a string, aborting");
      }
    }
    if (!DOMPurify.isSupported) {
      return dirty;
    }
    if (SET_CONFIG) {
      ALLOWED_TAGS = SET_CONFIG_ALLOWED_TAGS;
      ALLOWED_ATTR = SET_CONFIG_ALLOWED_ATTR;
    } else {
      _parseConfig(cfg);
    }
    if (hooks.uponSanitizeElement.length > 0 || hooks.uponSanitizeAttribute.length > 0) {
      ALLOWED_TAGS = clone2(ALLOWED_TAGS);
    }
    if (hooks.uponSanitizeAttribute.length > 0) {
      ALLOWED_ATTR = clone2(ALLOWED_ATTR);
    }
    DOMPurify.removed = [];
    const inPlace = IN_PLACE && typeof dirty !== "string" && _isNode(dirty);
    if (inPlace) {
      _neutralizePatchLinkage(dirty);
      const nn2 = getNodeName ? getNodeName(dirty) : dirty.nodeName;
      if (typeof nn2 === "string") {
        const tagName = transformCaseFunc(nn2);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          _neutralizeRoot(dirty);
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
      if (_isClobbered(dirty)) {
        _neutralizeRoot(dirty);
        throw typeErrorCreate("root node is clobbered and cannot be sanitized in-place");
      }
      try {
        _sanitizeAttachedShadowRoots(dirty);
      } catch (error) {
        _neutralizeRoot(dirty);
        throw error;
      }
    } else if (_isNode(dirty)) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") {
        body = importedNode;
      } else if (importedNode.nodeName === "HTML") {
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
      _sanitizeAttachedShadowRoots(importedNode);
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf("<") === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(dirty) : dirty;
      }
      body = _initDocument(dirty);
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
      }
    }
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    const walkRoot = inPlace ? dirty : body;
    try {
      const nodeIterator = _createNodeIterator(walkRoot);
      while (currentNode = nodeIterator.nextNode()) {
        _sanitizeElements(currentNode, walkRoot);
        _sanitizeAttributes(currentNode);
        if (_isDocumentFragment(currentNode.content)) {
          _sanitizeShadowDOM2(currentNode.content);
        }
      }
    } catch (error) {
      if (inPlace) {
        _neutralizeRoot(dirty);
        arrayForEach(DOMPurify.removed, (entry) => {
          if (entry.element) {
            _neutralizeSubtree(entry.element);
          }
        });
      }
      throw error;
    }
    if (inPlace) {
      arrayForEach(DOMPurify.removed, (entry) => {
        if (entry.element) {
          _neutralizeSubtree(entry.element);
        }
      });
      if (SAFE_FOR_TEMPLATES) {
        _scrubTemplateExpressions2(dirty);
      }
      return dirty;
    }
    if (RETURN_DOM) {
      if (SAFE_FOR_TEMPLATES) {
        _scrubTemplateExpressions2(body);
      }
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    }
    if (SAFE_FOR_TEMPLATES) {
      serializedHTML = _stripTemplateExpressions(serializedHTML);
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
    SET_CONFIG_ALLOWED_TAGS = ALLOWED_TAGS;
    SET_CONFIG_ALLOWED_ATTR = ALLOWED_ATTR;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
    SET_CONFIG_ALLOWED_TAGS = null;
    SET_CONFIG_ALLOWED_ATTR = null;
    trustedTypesPolicy = defaultTrustedTypesPolicy;
    emptyHTML = "";
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) {
      _parseConfig({});
    }
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    if (!objectHasOwnProperty(hooks, entryPoint)) {
      return;
    }
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint, hookFunction) {
    if (!objectHasOwnProperty(hooks, entryPoint)) {
      return void 0;
    }
    if (hookFunction !== void 0) {
      const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
      return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
    }
    return arrayPop(hooks[entryPoint]);
  };
  DOMPurify.removeHooks = function(entryPoint) {
    if (!objectHasOwnProperty(hooks, entryPoint)) {
      return;
    }
    hooks[entryPoint] = [];
  };
  DOMPurify.removeAllHooks = function() {
    hooks = _createHooksMap();
  };
  return DOMPurify;
}
var purify = createDOMPurify();

// src/markdown.ts
f.use({ async: false, gfm: true, breaks: true });
function attachCodeCopyButtons(container) {
  for (const pre of container.querySelectorAll("pre")) {
    if (pre.querySelector(".dsh-code-copy")) continue;
    const btn = document.createElement("span");
    btn.className = "dsh-code-copy";
    btn.textContent = "\u590D\u5236";
    btn.onclick = (ev) => {
      ev.stopPropagation();
      const code = pre.querySelector("code");
      const text2 = code?.textContent ?? pre.textContent ?? "";
      void navigator.clipboard.writeText(text2).then(() => {
        btn.textContent = "\u5DF2\u590D\u5236";
        setTimeout(() => {
          btn.textContent = "\u590D\u5236";
        }, 1200);
      });
    };
    pre.appendChild(btn);
  }
}

// src/mode.ts
var READONLY_TOOLS = /* @__PURE__ */ new Set(["read_note", "search_notes", "list_notes"]);
var PLUGIN_DEV_TOOLS = /* @__PURE__ */ new Set([
  "create_plugin",
  "write_plugin_file",
  "plugin_status",
  "reload_plugin",
  "open_view",
  "plugin_guide"
]);
function modeAllows(mode, toolName) {
  if (mode === "create") return true;
  if (mode === "edit") return !PLUGIN_DEV_TOOLS.has(toolName);
  return READONLY_TOOLS.has(toolName);
}
function agentAllows(agent, toolName) {
  if (!agent) return false;
  if (agent.capabilities?.length) return agent.capabilities.includes(toolName);
  return modeAllows(agent.mode, toolName);
}

// src/export.ts
function escapePipe(text2) {
  return text2.replace(/\|/g, "\\|");
}
function sessionToMarkdown(opts, events) {
  const lines = [];
  lines.push(`# ${opts.title || t("export.defaultTitle")}`);
  lines.push("");
  lines.push(
    `> ${t("export.exportedAt")}: ${(/* @__PURE__ */ new Date()).toLocaleString()} \uFF5C ${t("export.boundNote")}: ${opts.notePath ?? t("export.none")}`
  );
  lines.push("");
  for (const e of events) {
    if (e.type === "user/message") {
      lines.push("**\u6211**", "", e.content, "");
    } else if (e.type === "assistant/message") {
      lines.push("**dsh**", "", e.content, "");
    } else if (e.type === "system/message") {
      lines.push(`> \u26A0 ${e.content}`, "");
    } else if (e.type === "tool/call") {
      lines.push(`- \u5DE5\u5177\u8C03\u7528 \`${e.tool}\`: \`\`\`json
${JSON.stringify(e.input, null, 2)}
\`\`\``);
    } else if (e.type === "tool/result") {
      if (e.ok) {
        lines.push(`  \u2192 \u2713 \u5B8C\u6210${e.output !== void 0 ? `: \`${escapePipe(summarize(e.output))}\`` : ""}`);
      } else {
        lines.push(`  \u2192 \u2717 \u5931\u8D25: ${e.error ?? "\u672A\u77E5\u9519\u8BEF"}`);
      }
    }
  }
  return lines.join("\n").replace(/\n{3,}/g, "\n\n") + "\n";
}
function summarize(value) {
  const text2 = typeof value === "string" ? value : JSON.stringify(value);
  return text2.length > 120 ? text2.slice(0, 120) + "\u2026" : text2;
}
function safeFileName(title, fallback) {
  const cleaned = title.replace(/[\\/:*?"<>|]/g, "-").trim().slice(0, 40);
  return (cleaned || fallback) + ".md";
}

// src/views/ChatView.ts
var CHAT_VIEW_TYPE = "dsh-chat";
var RENDER_DEBUG = true;
function renderLog(...args) {
  if (RENDER_DEBUG) console.info("[dsh-render]", ...args);
}
function summarize2(value) {
  const text2 = typeof value === "string" ? value : JSON.stringify(value, null, 2);
  return text2.length > 300 ? text2.slice(0, 300) + " \u2026" : text2;
}
var ChatView = class extends import_obsidian4.ItemView {
  constructor(leaf, ctx) {
    super(leaf);
    this.ctx = ctx;
  }
  ctx;
  currentSessionId = null;
  sessions = /* @__PURE__ */ new Map();
  sessionModels = /* @__PURE__ */ new Map();
  modelBtn;
  agentBtn;
  root;
  listEl;
  messagesEl;
  inputEl;
  sendBtn;
  phaseEl;
  confineCheck;
  streamingEl = null;
  streamingText = "";
  toolCards = /* @__PURE__ */ new Map();
  running = false;
  abortController = null;
  lastFailed = null;
  listCollapsed = false;
  disposers = [];
  /** 语言切换时若正在生成，等本轮结束后重建 */
  pendingRebuild = false;
  /** 当前轮次容器（一次问答 = 一轮，底部挂"复制本段对话"按钮） */
  turnEl = null;
  /** 当前轮次累积文本（轮末复制用） */
  turnText = [];
  /** 当前轮次是否已挂复制按钮 */
  turnCopied = false;
  /** 最近一次渲染的 assistant 原始内容（防重比较用，textContent 不可靠） */
  lastAssistantRaw = null;
  /** 最近处理的事件指纹（监听器叠加兜底：同一事件只处理一次） */
  lastEventKey = "";
  /** 对话内思考折叠卡片（推理过程/阶段状态，可展开查看） */
  thinkingEl = null;
  thinkingText = "";
  getViewType() {
    return CHAT_VIEW_TYPE;
  }
  getDisplayText() {
    return "Harness Like";
  }
  getIcon() {
    return "bot";
  }
  async onOpen() {
    renderLog("onOpen \u8C03\u7528 currentSessionId=" + this.currentSessionId);
    this.buildUi();
    await this.refreshSessions();
    this.setPhase({ kind: "idle" });
    if (this.currentSessionId) {
      void this.renderSession();
    } else {
      this.renderWelcome();
    }
  }
  /** 构建界面（语言切换时重建，保留 currentSessionId 与输入草稿） */
  buildUi() {
    for (const d of this.disposers) {
      try {
        d();
      } catch {
      }
    }
    this.disposers = [];
    const draft = this.inputEl?.value ?? "";
    this.contentEl.empty();
    this.root = this.contentEl.createDiv({ cls: "dsh-chat" });
    this.root.classList.toggle("is-collapsed", this.listCollapsed);
    const header = this.root.createDiv({ cls: "dsh-chat-header" });
    const collapseBtn = header.createEl("button", { cls: "dsh-btn dsh-btn-icon", text: "\u2630" });
    collapseBtn.onclick = () => this.toggleSessionList();
    header.createSpan({ cls: "dsh-chat-title", text: "Harness Like" });
    const actions = header.createDiv({ cls: "dsh-chat-actions" });
    const newBtn = actions.createEl("button", { cls: "dsh-btn", text: t("chat.header.newSession") });
    newBtn.onclick = () => this.newSession();
    const pluginBtn = actions.createEl("button", { cls: "dsh-btn", text: t("chat.header.pluginManager") });
    pluginBtn.onclick = () => this.openPluginManager();
    const body = this.root.createDiv({ cls: "dsh-chat-body" });
    this.listEl = body.createDiv({ cls: "dsh-chat-list" });
    this.messagesEl = body.createDiv({ cls: "dsh-chat-messages" });
    this.phaseEl = this.root.createDiv({ cls: "dsh-phase", text: "" });
    const toolbar = this.root.createDiv({ cls: "dsh-chat-toolbar" });
    this.agentBtn = toolbar.createEl("button", { cls: "dsh-btn dsh-agent-btn" });
    this.refreshAgentBtn();
    this.agentBtn.onclick = (e) => this.openAgentMenu(e);
    this.modelBtn = toolbar.createEl("button", { cls: "dsh-btn dsh-agent-btn dsh-model-btn" });
    this.refreshModelBtn();
    this.modelBtn.onclick = (e) => this.openModelMenu(e);
    const confine = toolbar.createDiv({ cls: "dsh-toggle" });
    confine.createSpan({ text: t("chat.toolbar.confine") });
    this.confineCheck = confine.createEl("input", { type: "checkbox" });
    this.confineCheck.checked = this.ctx.settings.get("confineToCurrentNote", false);
    this.confineCheck.addEventListener("change", () => {
      this.ctx.settings.set("confineToCurrentNote", this.confineCheck.checked);
    });
    const footer = this.root.createDiv({ cls: "dsh-chat-footer" });
    this.inputEl = footer.createEl("textarea", {
      cls: "dsh-chat-input",
      attr: { placeholder: t("chat.input.placeholder") }
    });
    this.inputEl.value = draft;
    this.inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        void this.onSendClick();
      }
    });
    this.sendBtn = footer.createEl("button", { cls: "dsh-btn dsh-btn-primary", text: t("chat.send") });
    this.sendBtn.onclick = () => void this.onSendClick();
    this.disposers.push(this.ctx.on("dsh/session/event", (e) => this.onSessionEvent(e)));
    this.disposers.push(this.ctx.on("dsh/waiting-approval", () => this.setPhase({ kind: "waiting" })));
    this.disposers.push(
      this.ctx.on("dsh/settings-updated", () => {
        this.refreshModelBtn();
        this.refreshAgentBtn();
        if (this.messagesEl.querySelector(".dsh-welcome")) this.renderWelcome();
        const pref = this.ctx.settings.get("uiLanguage", "auto");
        const resolved = resolveLanguage(pref);
        if (resolved !== getLanguage()) {
          setLanguage(resolved);
          if (this.running) this.pendingRebuild = true;
          else void this.rebuild();
        }
      })
    );
  }
  /** 语言切换重建：保留当前会话与输入草稿，重放会话内容 */
  async rebuild() {
    const sessionId = this.currentSessionId;
    this.buildUi();
    this.turnEl = null;
    this.turnText = [];
    this.turnCopied = false;
    this.toolCards.clear();
    this.streamingEl = null;
    this.streamingText = "";
    await this.refreshSessions();
    if (sessionId) {
      this.currentSessionId = sessionId;
      void this.renderSession();
    } else {
      this.renderWelcome();
    }
  }
  onClose() {
    this.abortController?.abort();
    for (const d of this.disposers) {
      try {
        d();
      } catch {
      }
    }
    this.disposers = [];
    return Promise.resolve();
  }
  // ---------- 事件与渲染 ----------
  onSessionEvent(e) {
    if (e.sessionId !== this.currentSessionId) return;
    const frag = "content" in e && typeof e.content === "string" ? e.content.slice(0, 40) : "id" in e ? String(e.id) : "";
    const key = `${e.sessionId}:${e.type}:${e.ts}:${frag}`;
    if (key === this.lastEventKey) return;
    this.lastEventKey = key;
    if (e.type === "turn/start") {
      this.openTurnContainer();
      this.streamingEl = null;
      this.streamingText = "";
    } else if (e.type === "turn/end") {
      this.closeTurn();
      void this.refreshSessions();
    } else if (e.type === "assistant/message") {
      renderLog("assistant msg", "streamingEl=" + !!this.streamingEl, "rawDedup=" + (this.lastAssistantRaw === e.content));
      if (!this.streamingEl && this.lastAssistantRaw === e.content) {
        renderLog("  -> raw-dedup skip");
        return;
      }
      if (this.streamingEl) {
        this.streamingEl.classList.remove("dsh-msg-streaming");
        this.renderMarkdown(this.streamingEl, e.content);
        this.streamingEl = null;
      } else {
        this.appendMessage("assistant", e.content);
      }
      this.streamingText = "";
      this.lastAssistantRaw = e.content;
      this.turnText.push(`${t("chat.msg.assistant")}\uFF1A
${e.content}`);
      this.closeThinking();
    } else if (e.type === "system/message") {
      this.appendMessage("system", e.content);
    } else if (e.type === "tool/call") {
      this.renderToolCall(e.id, e.tool, e.input);
    } else if (e.type === "tool/result") {
      this.renderToolResult(e.id, e.tool, e.ok, e.error, e.output);
    }
  }
  /** 打开当前轮次容器（幂等；无内容时按需创建） */
  openTurnContainer() {
    if (this.turnEl) return;
    this.turnEl = this.messagesEl.createDiv({ cls: "dsh-turn" });
    this.turnText = [];
    this.turnCopied = false;
  }
  /** 新一轮次：容器 + 用户消息 + 累积文本 */
  startTurn(userText) {
    this.closeTurn();
    this.openTurnContainer();
    this.turnText.push(`${t("chat.msg.user")}\uFF1A
${userText}`);
    this.appendMessage("user", userText);
  }
  /** 收尾当前轮次：底部挂"复制本段对话"按钮（幂等） */
  closeTurn() {
    if (!this.turnEl || this.turnCopied) {
      this.turnEl = null;
      return;
    }
    this.turnCopied = true;
    const actions = this.turnEl.createDiv({ cls: "dsh-turn-actions" });
    const btn = actions.createEl("button", { cls: "dsh-turn-copy", text: t("chat.copyTurn") });
    btn.onclick = () => {
      void navigator.clipboard.writeText(this.turnText.join("\n\n")).then(() => {
        btn.setText(t("common.copied"));
        window.setTimeout(() => btn.setText(t("chat.copyTurn")), 1200);
      });
    };
    this.turnEl = null;
  }
  renderToolCall(id, tool, input) {
    if (this.toolCards.has(id)) return;
    const card = (this.turnEl ?? this.messagesEl).createDiv({ cls: "dsh-tool-card is-running" });
    card.createDiv({ cls: "dsh-tool-card-title", text: t("chat.tool.call", { tool }) });
    const detail = card.createEl("pre", { cls: "dsh-tool-card-detail", text: summarize2(input) });
    card.onclick = () => detail.classList.toggle("is-expanded");
    this.toolCards.set(id, card);
    this.scrollToBottom();
  }
  renderToolResult(id, tool, ok, error, output) {
    const card = this.toolCards.get(id);
    if (card) {
      card.classList.remove("is-running");
      card.classList.add(ok ? "is-success" : "is-error");
      const title = card.querySelector(".dsh-tool-card-title");
      if (title) {
        title.textContent = ok ? t("chat.tool.ok", { tool }) : t("chat.tool.fail", { tool, msg: error ?? "unknown" });
      }
      const detail = card.querySelector("pre");
      if (detail && output !== void 0) detail.textContent = summarize2(output);
      this.toolCards.delete(id);
    } else {
      this.appendToolCard(
        ok ? t("chat.tool.ok", { tool }) : t("chat.tool.fail", { tool, msg: error ?? "" }),
        output
      );
    }
    this.scrollToBottom();
  }
  appendToolCard(title, detail) {
    const card = (this.turnEl ?? this.messagesEl).createDiv({ cls: "dsh-tool-card" });
    card.createDiv({ cls: "dsh-tool-card-title", text: title });
    if (detail !== void 0) {
      card.createEl("pre", { cls: "dsh-tool-card-detail", text: summarize2(detail) });
    }
    this.scrollToBottom();
  }
  /** 消息气泡（挂到当前轮次容器内；无容器时直接挂消息区） */
  appendMessage(role2, content) {
    renderLog("appendMessage", role2, "len=" + content.length);
    const el = (this.turnEl ?? this.messagesEl).createDiv({ cls: `dsh-msg dsh-msg-${role2}` });
    if (role2 === "assistant" && this.ctx.settings.get("renderMarkdown", true)) {
      this.renderMarkdown(el, content);
    } else {
      el.textContent = content;
    }
    this.scrollToBottom();
    return el;
  }
  /** 渲染 Markdown（marked + DOMPurify；代码块保留独立复制按钮，样式由 styles.css 控制） */
  renderMarkdown(el, markdown) {
    renderLog("renderMarkdown \u5F00\u59CB", "len=" + markdown.length);
    el.textContent = "";
    void import_obsidian4.MarkdownRenderer.render(this.app, markdown, el, "", this).then(() => renderLog("renderMarkdown \u5B8C\u6210", "el.text=" + (el.textContent ?? "").length)).catch((err) => {
      renderLog("renderMarkdown \u5931\u8D25", String(err));
      el.textContent = markdown;
    });
    attachCodeCopyButtons(el);
  }
  appendStream(delta) {
    if (!this.streamingEl) {
      renderLog("appendStream CREATE", "len=" + this.streamingText.length);
      this.streamingEl = (this.turnEl ?? this.messagesEl).createDiv({
        cls: "dsh-msg dsh-msg-assistant dsh-msg-streaming"
      });
    } else {
      renderLog("appendStream APPEND", "len=" + this.streamingText.length);
    }
    this.streamingText += delta;
    this.streamingEl.textContent = this.streamingText;
    this.scrollToBottom();
  }
  // ---------- 发送 / 中止 / 重试 ----------
  onSendClick() {
    if (this.running) {
      this.abortController?.abort();
      return;
    }
    void this.send();
  }
  async send() {
    const text2 = this.inputEl.value.trim();
    if (!text2) return;
    this.inputEl.value = "";
    let sessionId = this.currentSessionId;
    if (!sessionId) {
      sessionId = `session-${Date.now()}`;
      this.currentSessionId = sessionId;
      this.sessions.set(sessionId, { notePath: null });
      this.messagesEl.empty();
      void this.ctx.sessionLog.append(sessionId, {
        type: "session/meta",
        ts: Date.now(),
        sessionId,
        title: text2.length > 24 ? text2.slice(0, 24) + "\u2026" : text2,
        notePath: null,
        modelId: this.sessionModelValue()
      });
      void this.refreshSessions();
    }
    this.startTurn(text2);
    this.lastFailed = null;
    await this.run(sessionId, text2);
  }
  async run(sessionId, text2, skipAppend = false) {
    this.running = true;
    this.setSendingState();
    this.abortController = new AbortController();
    const signal = this.abortController.signal;
    try {
      if (!skipAppend) {
        await this.ctx.sessionLog.append(sessionId, {
          type: "user/message",
          ts: Date.now(),
          sessionId,
          content: text2
        });
      }
      const history = (await this.ctx.sessionLog.read(sessionId)).filter(
        (e) => e.type !== "turn/start" && e.type !== "turn/end"
      );
      let noteCtx = "";
      const confine = this.ctx.settings.get("confineToCurrentNote", false);
      const note = confine ? this.ctx.workspace.getActiveFile() : null;
      if (note) {
        try {
          noteCtx = await this.ctx.vault.read(note);
        } catch {
          noteCtx = "(\u65E0\u6CD5\u8BFB\u53D6\u5F53\u524D\u7B14\u8BB0)";
        }
      }
      const system = [
        "\u4F60\u662F\u8FD0\u884C\u5728 Obsidian \u4E2D\u7684 DeepSeek Harness agent\u3002",
        "\u53EF\u4EE5\u8C03\u7528\u5DE5\u5177\u8BFB\u5199\u7B14\u8BB0\uFF1B\u5199\u64CD\u4F5C\u4F1A\u8BF7\u6C42\u5BA1\u6279\uFF0C\u8BF7\u7B49\u5F85\u7ED3\u679C\u3002",
        `\u4F60\u8FD8\u53EF\u4EE5\u521B\u5EFA\u548C\u7EF4\u62A4 Harness Like \u7528\u6237\u63D2\u4EF6\uFF08${this.pluginsDirRel()}\uFF09\uFF1A\u7528 create_plugin \u5EFA\u9AA8\u67B6\u3001write_plugin_file \u5199\u7EAF JS main.js\uFF08\u8986\u76D6\u5DF2\u6709\u6587\u4EF6\u9700\u7528\u6237\u786E\u8BA4\uFF1B\u8BFB\u53D6\u6587\u4EF6\u7528 read_note\uFF09\u3001reload_plugin \u52A0\u8F7D\u751F\u6548\uFF1B\u5F00\u53D1\u6307\u5357\u89C1 plugin_guide\u3002`,
        "\u63D2\u4EF6\u4EE3\u7801\u5FC5\u987B\u901A\u8FC7 ctx.* \u670D\u52A1\u8BBF\u95EE\u5BBF\u4E3B\u80FD\u529B\uFF08ribbon/statusbar/views/commands/vault/notice \u7B49\uFF09\uFF0C\u7981\u6B62\u76F4\u63A5\u64CD\u4F5C Obsidian DOM\uFF1Binject \u5FC5\u987B\u58F0\u660E apply \u91CC\u7528\u5230\u7684\u6BCF\u4E00\u4E2A\u670D\u52A1\uFF1B\u8C03\u7528 ctx.* \u65B9\u6CD5\u524D\u5148\u67E5 plugin_guide \u7684\u300C\u670D\u52A1\u65B9\u6CD5\u901F\u67E5\u300D\u83B7\u53D6\u51C6\u786E\u7B7E\u540D\uFF0C\u4E25\u7981\u81C6\u6D4B\u65B9\u6CD5\u540D\uFF08\u5982 vault \u5217\u8868\u7528 getMarkdownPaths \u800C\u975E getFiles/getMarkdownFiles\uFF09\u3002",
        "\u521B\u5EFA\u5E26\u9762\u677F\uFF08ItemView\uFF09\u7684\u63D2\u4EF6\u5E76\u52A0\u8F7D\u6210\u529F\u540E\uFF0C\u7528 open_view \u6253\u5F00\u9762\u677F\u8BA9\u7528\u6237\u770B\u5230\u754C\u9762\u3002",
        note ? `\u4EC5\u5F53\u524D\u7B14\u8BB0\u6A21\u5F0F\uFF1A\u5F53\u524D\u7B14\u8BB0 ${note}

\u7B14\u8BB0\u5185\u5BB9\uFF1A
${noteCtx.slice(0, 8e3)}` : ""
      ].filter(Boolean).join("\n\n");
      const sink = (e) => {
        void this.ctx.sessionLog.append(e.sessionId, e);
        this.ctx.emit("dsh/session/event", e);
      };
      const streaming = this.ctx.settings.get("streamingEnabled", true);
      const agent = this.activeAgent();
      await runAgentLoop({
        sessionId,
        llm: this.ctx.llmCaller,
        tools: {
          list: () => this.ctx.toolsCompat.list().filter((t2) => agentAllows(agent, t2.name))
        },
        executeTool: (name, input) => this.executeTool(name, input),
        onEvent: sink,
        onStream: streaming ? (delta) => this.appendStream(delta) : void 0,
        onThinking: (delta) => this.appendThinking(delta),
        onPhase: (phase) => this.setPhase(phase),
        history,
        system,
        model: this.sessionModelValue(),
        signal
      });
    } catch (err) {
      const failed = err instanceof Error && err.name === "AbortError";
      const content = failed ? t("common.stopped") : t("chat.run.failed", { msg: err instanceof Error ? err.message : String(err) });
      const ev = { type: "system/message", ts: Date.now(), sessionId, content };
      void this.ctx.sessionLog.append(sessionId, ev);
      this.ctx.emit("dsh/session/event", ev);
      if (!failed) {
        this.lastFailed = { sessionId, text: text2 };
        const row = (this.turnEl ?? this.messagesEl).createDiv({ cls: "dsh-retry-row" });
        const btn = row.createEl("button", { cls: "dsh-btn", text: t("common.retry") });
        btn.onclick = () => void this.run(sessionId, text2, true);
      }
      this.closeTurn();
    } finally {
      this.running = false;
      this.abortController = null;
      this.setSendingState();
      this.streamingEl = null;
      this.streamingText = "";
      this.setPhase({ kind: "idle" });
      if (this.pendingRebuild) {
        this.pendingRebuild = false;
        void this.rebuild();
      }
    }
  }
  async executeTool(name, input) {
    const agent = this.activeAgent();
    if (!agentAllows(agent, name)) {
      return { ok: false, error: t("chat.agent.toolDenied", { name: agentDisplayName(agent ?? { id: "", name: "" }), tool: name }) };
    }
    try {
      const result = await this.ctx.toolsCompat.execute({
        callId: `call_${Math.random().toString(36).slice(2, 10)}`,
        name,
        arguments: input,
        signal: this.abortController?.signal ?? new AbortController().signal
      });
      if (result.isError) return { ok: false, error: result.error.message };
      return { ok: true, output: result.value };
    } catch (err) {
      return { ok: false, error: err instanceof Error ? err.message : String(err) };
    }
  }
  /** 用户插件目录（vault 相对，跟随 configDir） */
  pluginsDirRel() {
    return path6.posix.join(this.ctx.sandbox.scope.configDir, "harness-like-plugins");
  }
  /** 对话内思考折叠卡：推理过程增量（reasoning_content）实时追加 */
  appendThinking(delta) {
    if (!this.thinkingEl) this.openThinking();
    this.thinkingText += delta;
    const body = this.thinkingEl?.querySelector(".dsh-thinking-body");
    if (body) body.textContent = this.thinkingText;
    this.scrollToBottom();
  }
  openThinking() {
    if (this.thinkingEl) return;
    const parent = this.turnEl ?? this.messagesEl;
    const details = parent.createEl("details", { cls: "dsh-thinking is-active" });
    details.createEl("summary", { text: "\u{1F9E0} \u601D\u8003\u4E2D\u2026" });
    details.createDiv({ cls: "dsh-thinking-body" });
    this.thinkingEl = details;
    this.thinkingText = "";
    this.scrollToBottom();
  }
  /** 收尾思考卡：自动折叠，保留可展开查看 */
  closeThinking() {
    if (!this.thinkingEl) return;
    const summary = this.thinkingEl.querySelector("summary");
    if (summary) summary.textContent = "\u{1F9E0} \u5DF2\u601D\u8003";
    this.thinkingEl.removeAttribute("open");
    this.thinkingEl.classList.remove("is-active");
    this.thinkingEl = null;
  }
  setPhase(phase) {
    if (phase.kind === "thinking") this.openThinking();
    else if (phase.kind === "tool") this.closeThinking();
    const text2 = phase.kind === "thinking" ? t("chat.phase.thinking") : phase.kind === "tool" ? t("chat.phase.tool", { name: phase.name }) : phase.kind === "waiting" ? t("chat.phase.waiting") : phase.kind === "stopped" ? t("chat.phase.stopped") : phase.kind === "done" || phase.kind === "idle" ? "" : "";
    this.phaseEl.setText(text2);
  }
  setSendingState() {
    this.sendBtn.setText(this.running ? t("chat.stop") : t("chat.send"));
    this.sendBtn.classList.toggle("dsh-btn-stop", this.running);
    this.inputEl.disabled = this.running;
  }
  // ---------- 会话列表 / 绑定 / 输入 ----------
  /** 模型选择器选项：所有提供方 × 模型列表 */
  buildModelItems() {
    const providers = this.ctx.settings.get("providers", []);
    const items = [];
    for (const p of providers) {
      const models = p.models?.length ? p.models : p.model ? [p.model] : [];
      for (const m2 of models) {
        items.push({ value: `${p.id}/${m2}`, label: `${p.name || p.id}: ${m2}` });
      }
    }
    return items;
  }
  /** 当前会话使用的模型（"providerId/model"） */
  sessionModelValue() {
    if (this.currentSessionId && this.sessionModels.has(this.currentSessionId)) {
      return this.sessionModels.get(this.currentSessionId);
    }
    return this.defaultModelId();
  }
  refreshModelBtn() {
    const value = this.sessionModelValue();
    const items = this.buildModelItems();
    const label = items.find((i) => i.value === value)?.label ?? value;
    this.modelBtn.setText(`${label || t("chat.model.default")} \u25BE`);
  }
  /** 上拉选择模型（与智能体菜单样式一致；管理入口在菜单内） */
  openModelMenu(ev) {
    const items = this.buildModelItems();
    const current2 = this.sessionModelValue();
    const menu = new import_obsidian4.Menu();
    for (const item of items) {
      menu.addItem(
        (mi) => mi.setTitle(item.label).setChecked(item.value === current2).onClick(() => {
          if (this.currentSessionId) this.sessionModels.set(this.currentSessionId, item.value);
          this.refreshModelBtn();
        })
      );
    }
    menu.addSeparator();
    menu.addItem(
      (mi) => mi.setTitle(t("chat.model.manage")).onClick(() => {
        ;
        this.ctx.get("dshSettingsUi")?.openTo("model");
      })
    );
    this.showMenuUpward(menu, ev);
  }
  /** 上拉展开（菜单在按钮上方） */
  showMenuUpward(menu, ev) {
    const rect = ev.currentTarget.getBoundingClientRect();
    menu.showAtPosition({ x: rect.left, y: rect.top });
    window.setTimeout(() => {
      const dom = menu.dom;
      const h = dom.offsetHeight;
      dom.style.top = `${Math.max(8, rect.top - h)}px`;
    }, 0);
  }
  /** 默认模型选择（defaultProviderId + 其默认模型） */
  defaultModelId() {
    const providers = this.ctx.settings.get("providers", []);
    const defaultId = this.ctx.settings.get("defaultProviderId", "");
    const p = providers.find((x2) => x2.id === defaultId) ?? providers[0];
    if (!p) return "";
    return `${p.id}/${p.models?.length ? p.models[0] : p.model ?? ""}`;
  }
  /** 打开插件管理器面板 */
  openPluginManager() {
    const type = "dsh-plugin-manager";
    const leaves = this.app.workspace.getLeavesOfType(type);
    let leaf = leaves[0];
    if (!leaf) {
      leaf = this.app.workspace.getRightLeaf(false);
      if (!leaf) return;
      void leaf.setViewState({ type, active: true });
    }
    this.app.workspace.setActiveLeaf(leaf);
  }
  /** 当前激活的智能体预设（跳过已禁用的） */
  activeAgent() {
    const agents = listVisibleAgents(this.ctx.settings.get("agents", []));
    const activeId = this.ctx.settings.get("activeAgentId", "edit");
    return agents.find((a) => a.id === activeId) ?? agents[0];
  }
  refreshAgentBtn() {
    const agent = this.activeAgent();
    this.agentBtn.setText(`${agent ? agentDisplayName(agent) : t("chat.agent.default")} \u25BE`);
    this.agentBtn.setAttr("title", agent ? agentDisplayDesc(agent) ?? "" : "");
  }
  /** 上拉选择智能体（Obsidian Menu） */
  openAgentMenu(ev) {
    const agents = listVisibleAgents(this.ctx.settings.get("agents", []));
    const activeId = this.ctx.settings.get("activeAgentId", "edit");
    const menu = new import_obsidian4.Menu();
    for (const a of agents) {
      const name = agentDisplayName(a);
      const desc = agentDisplayDesc(a);
      menu.addItem(
        (item) => item.setTitle(desc ? `${name} \u2014 ${desc}` : name).setChecked(a.id === activeId).onClick(() => {
          this.ctx.settings.set("activeAgentId", a.id);
          this.refreshAgentBtn();
          this.ctx.notice.notice(t("chat.agent.switched", { name, desc: desc ? `\uFF1A${desc}` : "" }));
        })
      );
    }
    menu.addSeparator();
    menu.addItem(
      (item) => item.setTitle(t("chat.agent.manage")).onClick(() => {
        ;
        this.ctx.get("dshSettingsUi")?.openTo("agent");
      })
    );
    menu.showAtMouseEvent(ev);
  }
  /** 开始新会话：回到空状态，绑定清零 */
  newSession() {
    this.currentSessionId = null;
    this.refreshModelBtn();
    void this.renderSession();
    void this.refreshSessions();
    this.inputEl.focus();
  }
  toggleSessionList() {
    this.listCollapsed = !this.listCollapsed;
    this.root.classList.toggle("is-collapsed", this.listCollapsed);
  }
  async refreshSessions() {
    this.listEl.empty();
    const list = await this.ctx.sessionLog.list();
    if (!list.length) {
      this.listEl.createDiv({ cls: "dsh-session-empty", text: t("chat.list.empty") });
      return;
    }
    for (const s of list) {
      const row = this.listEl.createDiv({
        cls: "dsh-session-row" + (s.id === this.currentSessionId ? " is-active" : "")
      });
      const btn = row.createEl("button", { cls: "dsh-session-btn" });
      btn.createDiv({ cls: "dsh-session-title", text: s.title ?? s.id });
      btn.createDiv({
        cls: "dsh-session-sub",
        text: `${s.notePath ?? t("chat.list.global")} \xB7 ${t("chat.list.count", { count: s.count })}`
      });
      btn.onclick = () => {
        this.currentSessionId = s.id;
        void this.renderSession();
        void this.refreshSessions();
      };
      const actions = row.createDiv({ cls: "dsh-session-actions" });
      const exp = actions.createEl("button", { cls: "dsh-session-action", text: "\u2913", attr: { title: t("chat.list.exportTitle") } });
      exp.onclick = (ev) => {
        ev.stopPropagation();
        void this.exportSession(s.id, s.title);
      };
      const del = actions.createEl("button", { cls: "dsh-session-action dsh-session-action-danger", text: "\u2715", attr: { title: t("chat.list.deleteTitle") } });
      del.onclick = (ev) => {
        ev.stopPropagation();
        void this.deleteSession(s.id);
      };
    }
  }
  async exportSession(id, title) {
    try {
      const [events, meta] = await Promise.all([this.ctx.sessionLog.read(id), this.ctx.sessionLog.readMeta(id)]);
      const md = sessionToMarkdown({ title: title ?? id, notePath: meta?.notePath ?? null }, events);
      const fileName = safeFileName(title ?? id, id);
      const exportDir = this.ctx.settings.get("exportDir", "sessions").trim().replace(/^\/+|\/+$/g, "");
      if (exportDir) {
        await this.ctx.vault.createFolder(exportDir);
      }
      const target = exportDir ? `${exportDir}/${fileName}` : fileName;
      await this.ctx.vault.write(target, md);
      this.ctx.notice.notice(t("chat.export.done", { path: target }));
    } catch (err) {
      this.ctx.notice.notice(t("chat.export.failed", { msg: err instanceof Error ? err.message : String(err) }));
    }
  }
  async deleteSession(id) {
    const ok = await new ConfirmModal(
      this.app,
      t("chat.list.deleteConfirm", { id }),
      t("common.delete")
    ).ask();
    if (!ok) return;
    await this.ctx.sessionLog.remove(id);
    this.sessions.delete(id);
    if (this.currentSessionId === id) {
      this.currentSessionId = null;
      await this.renderSession();
    }
    await this.refreshSessions();
  }
  async renderSession() {
    renderLog("renderSession \u5F00\u59CB currentSessionId=" + this.currentSessionId);
    this.messagesEl.empty();
    this.streamingEl = null;
    this.streamingText = "";
    this.toolCards.clear();
    this.turnEl = null;
    this.turnText = [];
    this.turnCopied = false;
    this.lastAssistantRaw = null;
    this.lastEventKey = "";
    this.thinkingEl = null;
    this.thinkingText = "";
    const id = this.currentSessionId;
    if (!id) {
      this.renderWelcome();
      return;
    }
    const events = await this.ctx.sessionLog.read(id);
    if (!events.length) {
      this.renderWelcome();
      return;
    }
    const meta = await this.ctx.sessionLog.readMeta(id);
    if (meta?.modelId) {
      this.sessionModels.set(id, meta.modelId);
    }
    this.refreshModelBtn();
    for (const e of events) {
      if (e.type === "turn/start") {
        this.openTurnContainer();
      } else if (e.type === "turn/end") {
        this.closeTurn();
      } else if (e.type === "user/message") {
        this.openTurnContainer();
        this.turnText.push(`${t("chat.msg.user")}\uFF1A
${e.content}`);
        this.appendMessage("user", e.content);
      } else if (e.type === "assistant/message") {
        this.openTurnContainer();
        this.turnText.push(`${t("chat.msg.assistant")}\uFF1A
${e.content}`);
        this.lastAssistantRaw = e.content;
        this.appendMessage("assistant", e.content);
      } else if (e.type === "system/message") {
        this.openTurnContainer();
        this.appendMessage("system", e.content);
      } else if (e.type === "tool/call") {
        this.renderToolCall(e.id, e.tool, e.input);
      } else if (e.type === "tool/result") {
        this.renderToolResult(e.id, e.tool, e.ok, e.error, e.output);
      }
    }
    this.closeTurn();
  }
  /** 空状态引导：示例问题 + 未配置 key 提示 */
  renderWelcome() {
    this.messagesEl.empty();
    const wrap = this.messagesEl.createDiv({ cls: "dsh-welcome" });
    wrap.createEl("h3", { text: "Harness Like" });
    wrap.createEl("p", {
      text: t("chat.welcome.desc")
    });
    const examples = [
      t("chat.welcome.example.1"),
      t("chat.welcome.example.2"),
      t("chat.welcome.example.3"),
      t("chat.welcome.example.4")
    ];
    for (const text2 of examples) {
      const chip = wrap.createEl("button", { cls: "dsh-welcome-chip", text: text2 });
      chip.onclick = () => {
        this.inputEl.value = text2;
        this.inputEl.focus();
      };
    }
    const providers = this.ctx.settings.get("providers", []);
    const hasKey = providers.some((p) => p.apiKey && p.apiKey.trim().length > 0);
    if (!hasKey) {
      const hint = wrap.createDiv({ cls: "dsh-welcome-hint" });
      hint.createSpan({ text: t("chat.welcome.noKey") });
      const btn = hint.createEl("button", { cls: "dsh-btn", text: t("common.openSettings") });
      btn.onclick = () => {
        ;
        this.ctx.get("dshSettingsUi")?.openTo("model");
      };
    }
  }
  scrollToBottom() {
    this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
  }
};

// src/views/PluginManagerView.ts
var import_obsidian5 = require("obsidian");
var PLUGIN_MANAGER_VIEW_TYPE = "dsh-plugin-manager";
var PluginManagerView = class extends import_obsidian5.ItemView {
  constructor(leaf, ctx, options) {
    super(leaf);
    this.ctx = ctx;
    this.options = options;
  }
  ctx;
  options;
  getViewType() {
    return PLUGIN_MANAGER_VIEW_TYPE;
  }
  getDisplayText() {
    return t("pm.viewTitle");
  }
  getIcon() {
    return "puzzle";
  }
  async onOpen() {
    this.disposers.push(
      this.ctx.on("dsh/settings-updated", () => {
        const pref = this.ctx.settings.get("uiLanguage", "auto");
        const resolved = resolveLanguage(pref);
        if (resolved !== getLanguage()) {
          setLanguage(resolved);
          void this.refresh();
        }
      })
    );
    await this.refresh();
  }
  onClose() {
    for (const d of this.disposers) {
      try {
        d();
      } catch {
      }
    }
    this.disposers = [];
    return Promise.resolve();
  }
  disposers = [];
  async refresh() {
    this.contentEl.empty();
    this.contentEl.createEl("h4", { text: t("pm.heading") });
    const bar = this.contentEl.createDiv({ cls: "dsh-pm-bar" });
    const reload = bar.createEl("button", { cls: "dsh-btn", text: t("pm.refresh") });
    reload.onclick = () => void this.refresh();
    const openDir = bar.createEl("button", { cls: "dsh-btn", text: t("pm.openDir") });
    openDir.onclick = () => this.options.openFolder(this.ctx.sandbox.scope.pluginsDir);
    const ids = await this.ctx.pluginRuntime.discover();
    if (!ids.length) {
      const empty = this.contentEl.createDiv({ cls: "dsh-pm-empty" });
      empty.createEl("p", { text: t("pm.empty.title") });
      const steps = empty.createEl("ol");
      steps.createEl("li", { text: t("pm.empty.step1") });
      steps.createEl("li", { text: t("pm.empty.step2") });
      steps.createEl("li", { text: t("pm.empty.step3") });
      empty.createEl("p", { cls: "dsh-pm-hint", text: t("pm.empty.hint") });
      return;
    }
    for (const id of ids) {
      const rec = this.ctx.pluginRuntime.get(id) ?? this.ctx.pluginRuntime.inspect(id);
      const grant = this.ctx.approval.getGrant(id);
      const row = this.contentEl.createDiv({ cls: "dsh-pm-row" });
      const info = row.createDiv({ cls: "dsh-pm-info" });
      info.createDiv({
        cls: "dsh-pm-name",
        text: `${id}${rec.manifest ? ` v${rec.manifest.version}` : ""}`
      });
      if (rec.manifest?.description) {
        info.createDiv({ cls: "dsh-pm-desc", text: rec.manifest.description });
      }
      const caps = rec.capabilities ?? [];
      if (caps.length) {
        const capRow = info.createDiv({ cls: "dsh-pm-caps" });
        const LABELS = {
          panel: t("pm.cap.panel"),
          ribbon: t("pm.cap.ribbon"),
          commands: t("pm.cap.commands"),
          tools: t("pm.cap.tools"),
          statusbar: t("pm.cap.statusbar"),
          settings: t("pm.cap.settings")
        };
        for (const c of caps) {
          capRow.createSpan({ cls: "dsh-pm-cap", text: LABELS[c] ?? c });
        }
      }
      const statusLabel = {
        running: t("pm.status.running"),
        stopped: t("pm.status.stopped"),
        error: t("pm.status.error")
      };
      info.createDiv({
        cls: `dsh-pm-status dsh-pm-status-${rec.status}`,
        text: rec.error ? t("pm.status.errText", { msg: rec.error }) : [
          statusLabel[rec.status] ?? rec.status,
          `\xB7 ${grantDisplay(grant, true, rec.manifest?.version).badge}`
        ].join(" ")
      });
      const actions = row.createDiv({ cls: "dsh-pm-actions" });
      if (rec.status === "running") {
        if (rec.viewType) {
          const open = actions.createEl("button", { cls: "dsh-btn dsh-btn-primary", text: t("pm.openPanel") });
          open.onclick = () => this.ctx.views.open(rec.viewType);
        }
        const reload2 = actions.createEl("button", { cls: "dsh-btn", text: t("pm.reload") });
        reload2.onclick = () => void this.reload(id);
        const stop = actions.createEl("button", { cls: "dsh-btn", text: t("pm.stop") });
        stop.onclick = () => {
          void this.ctx.pluginRuntime.stop(id);
          void this.refresh();
        };
      } else {
        const run = actions.createEl("button", { cls: "dsh-btn dsh-btn-primary", text: t("pm.grantAndLoad") });
        run.onclick = () => void this.ensureAndLoad(id);
      }
      const remove = actions.createEl("button", { cls: "dsh-btn", text: t("pm.delete") });
      remove.onclick = () => void this.removePlugin(id);
    }
  }
  /** 重新加载（文件型插件的"更新"：停止 → 重新加载当前目录产物） */
  async reload(id) {
    await this.ctx.pluginRuntime.stop(id);
    const result = await this.ctx.pluginRuntime.load(id);
    this.ctx.notice.notice(
      result.status === "running" ? t("pm.reload.done", { id }) : t("pm.reload.failed", { msg: result.error ?? "unknown" })
    );
    await this.refresh();
  }
  /** 删除插件目录（破坏性操作，需确认） */
  async removePlugin(id) {
    const ok = await new ConfirmModal(
      this.app,
      t("pm.delete.confirm", { id }),
      t("common.delete")
    ).ask();
    if (!ok) return;
    await this.ctx.pluginRuntime.removeDir(id);
    this.ctx.approval.revoke(id);
    this.ctx.notice.notice(t("pm.delete.done", { id }));
    await this.refresh();
  }
  async ensureAndLoad(id) {
    const rec = this.ctx.pluginRuntime.inspect(id);
    const manifest = rec.manifest;
    if (!manifest) {
      this.ctx.notice.notice(t("pm.manifest.failed", { msg: rec.error ?? id }));
      return;
    }
    if (!this.ctx.approval.isGranted(id, manifest.version)) {
      const choice = await new GrantModal(this.app, {
        id,
        version: manifest.version,
        description: manifest.description
      }).ask();
      if ("cancel" in choice) return;
      this.ctx.approval.grant(id, choice.mode, manifest.version);
    }
    const result = await this.ctx.pluginRuntime.load(id);
    this.ctx.notice.notice(
      result.status === "running" ? t("pm.load.done", { id }) : t("pm.load.failed", { msg: result.error ?? "unknown" })
    );
    await this.refresh();
  }
};

// src/main.ts
var cordisShim = (id) => {
  if (id === "@deepseek-ai/cordis") return lib_exports;
  if (id === "obsidian") return obsidianModule;
  return require(id);
};
var HarnessLikePlugin = class extends import_obsidian6.Plugin {
  settings = defaultSettings();
  ctx = null;
  settingsTab;
  fibers = [];
  /** auto 语言跟随轮询（Obsidian 切语言无事件，3s 对比 localStorage['language']） */
  langWatch = null;
  async onload() {
    await this.loadSettings();
    setLanguage(resolveLanguage(this.settings.uiLanguage));
    const vaultRoot = this.app.vault.adapter.getBasePath?.();
    if (!vaultRoot) {
      console.warn("[harness-like] \u65E0\u6CD5\u83B7\u53D6 vault \u6839\u8DEF\u5F84\uFF0C\u6C99\u7BB1\u5C06\u62D2\u7EDD\u6240\u6709\u5199\u64CD\u4F5C");
    }
    const root = vaultRoot ?? "";
    const configDir = this.app.vault.configDir;
    const dataDir = path7.join(root, configDir, "harness-like");
    const pluginsDir = path7.join(root, configDir, "harness-like-plugins");
    const tempDir = path7.join(dataDir, "tmp");
    await this.migrateLegacyDirs(root, configDir);
    const ctx = new Context();
    this.ctx = ctx;
    const apiLike = toApiLike(this.app, this);
    this.fibers.push(
      ctx.plugin(
        obsidianAdapterPlugin(apiLike, {
          load: () => this.settings,
          save: (d) => {
            this.settings = d;
            void this.saveSettings();
          }
        })
      )
    );
    const approveTool = async (request) => {
      const policy = parseToolPolicy(this.settings.toolPolicy).get(request.name);
      if (policy === "deny") return "deny";
      if (policy === "allow") return "allow";
      if (policy === "ask") {
        const ok = await new ConfirmModal(
          this.app,
          t("approval.toolAsk", { name: request.name }),
          t("approval.allow")
        ).ask();
        return ok ? "allow" : "deny";
      }
      if (request.name !== "write_note") return "allow";
      const args = request.arguments;
      const targetPath = String(args.path ?? "");
      const decision = ctx.sandbox.decide(targetPath, "write");
      if (!decision.allowed) return "deny";
      if (this.settings.confineToCurrentNote) {
        const active = ctx.workspace.getActiveFile();
        if (active && targetPath !== active) return "deny";
      }
      if (isPathInDirs(targetPath, this.settings.writeAllowDirs)) return "allow";
      const mode = ctx.approval.decideWrite(this.settings.approvalDefault);
      if (mode === "allow") return "allow";
      ctx.emit("dsh/waiting-approval", targetPath);
      const r = await new WriteApprovalModal(this.app, targetPath, {
        preview: String(args.content ?? "").slice(0, 200)
      }).ask();
      if (r.choice === "allow-session") ctx.approval.setSessionAllow(true);
      return r.choice === "deny" ? "deny" : "allow";
    };
    this.fibers.push(
      ctx.plugin(
        harnessServicesPlugin({
          sandbox: { vaultRoot: root, configDir, dataDir, pluginsDir, tempDir },
          sessionDir: path7.join(dataDir, "sessions"),
          approvalStore: {
            load: () => this.settings.grants ?? {},
            save: (g) => {
              this.settings.grants = g;
              void this.saveSettings();
            }
          },
          getLLMConfig: (provider) => {
            const p = this.providerById(provider);
            return {
              baseURL: p.baseURL,
              apiKey: p.apiKey,
              model: p.models[0] ?? "",
              temperature: p.temperature,
              maxTokens: p.maxTokens,
              extraHeaders: parseHeaderLines(p.extraHeaders)
            };
          },
          providerIds: this.settings.providers.map((p) => p.id),
          defaultProvider: () => this.defaultModel().provider,
          defaultModel: () => this.defaultModel().model,
          approveTool,
          logLevel: this.settings.logLevel
        })
      )
    );
    this.fibers.push(ctx.plugin(runtimePlugin({ pluginsDir, require: cordisShim, hostId: this.manifest.id, hostName: this.manifest.name })));
    await Promise.all(this.fibers.map((f2) => Promise.resolve(f2)));
    ctx.reflect.provide("dshI18n", {
      registerLocale
    });
    ctx.editor.setProvider(() => {
      const active = this.app.workspace.activeEditor;
      const ed = active?.editor;
      if (!ed) return null;
      return {
        filePath: active?.file?.path ?? null,
        insertText: (t2) => ed.replaceSelection(t2),
        replaceSelection: (t2) => ed.replaceSelection(t2),
        getSelection: () => ed.getSelection() || null
      };
    });
    this.fibers.push(
      ctx.plugin(builtinToolsPlugin({ openTarget: (t2) => apiLike.openTarget(t2) }))
    );
    const ensureGranted = async (pluginId, version2, description) => {
      if (ctx.approval.isGranted(pluginId, version2)) return true;
      const choice = await new GrantModal(this.app, { id: pluginId, version: version2, description }).ask();
      if ("cancel" in choice) return false;
      ctx.approval.grant(pluginId, choice.mode, version2);
      return true;
    };
    const confirmOverwrite = async (pluginId, file) => {
      return new ConfirmModal(
        this.app,
        t("approval.overwriteConfirm", { id: pluginId, file }),
        t("approval.allowOverwrite")
      ).ask();
    };
    this.fibers.push(ctx.plugin(pluginDevToolsPlugin({ ensureGranted, confirmOverwrite })));
    this.registerView(CHAT_VIEW_TYPE, (leaf) => new ChatView(leaf, ctx));
    this.registerView(
      PLUGIN_MANAGER_VIEW_TYPE,
      (leaf) => new PluginManagerView(leaf, ctx, { openFolder: (p) => void apiLike.openTarget(p) })
    );
    this.addCommand({
      id: "open-chat",
      name: t("cmd.openChat"),
      callback: () => void this.activateView(CHAT_VIEW_TYPE)
    });
    this.addCommand({
      id: "open-plugin-manager",
      name: t("cmd.openPluginManager"),
      callback: () => void this.activateView(PLUGIN_MANAGER_VIEW_TYPE)
    });
    this.addCommand({
      id: "reload-user-plugins",
      name: t("cmd.reloadUserPlugins"),
      callback: () => void this.loadUserPlugins()
    });
    this.settingsTab = new HarnessLikeSettingsTab(this.app, this, ctx);
    this.addSettingTab(this.settingsTab);
    ctx.reflect.provide("dshSettingsUi", {
      openTo: (tab) => this.settingsTab?.openTo(tab)
    });
    this.addRibbonIcon("bot", t("cmd.ribbonTitle"), () => void this.activateView(CHAT_VIEW_TYPE));
    this.langWatch = window.setInterval(() => {
      if (!this.ctx) return;
      const resolved = resolveLanguage(this.settings.uiLanguage);
      if (resolved !== getLanguage()) {
        setLanguage(resolved);
        this.ctx.emit("dsh/settings-updated", "all");
      }
    }, 3e3);
    await this.loadUserPlugins();
    await this.pruneSessions();
    console.info("[harness-like] onload \u5B8C\u6210");
  }
  async onunload() {
    if (this.langWatch) {
      window.clearInterval(this.langWatch);
      this.langWatch = null;
    }
    for (const fiber of [...this.fibers].reverse()) {
      try {
        await fiber.dispose();
      } catch (err) {
        console.warn("[harness-like] \u5378\u8F7D fiber \u5F02\u5E38", err);
      }
    }
    this.fibers = [];
    this.ctx = null;
  }
  async loadSettings() {
    const data = await this.loadData();
    this.settings = migrateSettings(data);
  }
  /**
   * 旧版数据目录迁移：.obsidian/dsh → .obsidian/harness-like、
   * .obsidian/dsh-plugins → .obsidian/harness-like-plugins。
   * 仅在新目录不存在时执行（避免覆盖）；失败仅告警不阻断启动。
   */
  async migrateLegacyDirs(root, configDir) {
    const pairs = [
      [path7.join(root, configDir, "dsh"), path7.join(root, configDir, "harness-like")],
      [path7.join(root, configDir, "dsh-plugins"), path7.join(root, configDir, "harness-like-plugins")]
    ];
    for (const [oldDir, newDir] of pairs) {
      try {
        if (fs3.existsSync(oldDir) && !fs3.existsSync(newDir)) {
          await fs3.promises.rename(oldDir, newDir);
          console.info(`[harness-like] \u6570\u636E\u76EE\u5F55\u8FC1\u79FB: ${oldDir} \u2192 ${newDir}`);
        }
      } catch (err) {
        console.warn(`[harness-like] \u6570\u636E\u76EE\u5F55\u8FC1\u79FB\u5931\u8D25\uFF08\u5FFD\u7565\uFF09: ${oldDir}`, err);
      }
    }
  }
  /** 按 id 取提供方（未知 id 回退默认） */
  providerById(id) {
    return this.settings.providers.find((p) => p.id === id) ?? this.settings.providers[0] ?? defaultSettings().providers[0];
  }
  /** 默认模型（defaultModelId 解析，回退第一个提供方的第一个模型） */
  defaultModel() {
    const mid = parseModelId(this.settings.defaultModelId);
    if (mid && this.settings.providers.some((p) => p.id === mid.provider)) return mid;
    const first = this.settings.providers[0] ?? defaultSettings().providers[0];
    return { provider: first.id, model: first.models[0] ?? "" };
  }
  async saveSettings() {
    await this.saveData(this.settings);
    this.ctx?.emit("dsh/settings-updated", "all");
  }
  async loadUserPlugins() {
    if (!this.ctx) return;
    const ids = await this.ctx.pluginRuntime.discover();
    for (const id of ids) {
      const rec = this.ctx.pluginRuntime.inspect(id);
      const manifest = rec.manifest;
      if (!manifest) continue;
      if (!this.ctx.approval.isGranted(id, manifest.version)) continue;
      const result = await this.ctx.pluginRuntime.load(id);
      if (result.status === "error") {
        console.warn(`[harness-like] \u63D2\u4EF6\u52A0\u8F7D\u5931\u8D25 ${id}: ${result.error}`);
      }
    }
  }
  /** 会话保留策略：删除超过保留天数的会话日志 */
  async pruneSessions() {
    if (this.settings.sessionRetentionDays <= 0 || !this.ctx) return;
    try {
      const list = await this.ctx.sessionLog.list();
      const stale = selectSessionsToPrune(list, Date.now(), this.settings.sessionRetentionDays);
      for (const id of stale) await this.ctx.sessionLog.remove(id);
      if (stale.length > 0 && shouldLog("info", this.settings.logLevel)) {
        console.info(`[harness-like] \u5DF2\u6E05\u7406 ${stale.length} \u4E2A\u8FC7\u671F\u4F1A\u8BDD\uFF08\u4FDD\u7559 ${this.settings.sessionRetentionDays} \u5929\uFF09`);
      }
    } catch (err) {
      console.warn("[harness-like] \u4F1A\u8BDD\u6E05\u7406\u5931\u8D25", err);
    }
  }
  activateView(type) {
    const { workspace } = this.app;
    const leaves = workspace.getLeavesOfType(type);
    let leaf = leaves[0];
    if (!leaf) {
      const right = workspace.getRightLeaf(false);
      if (!right) return;
      leaf = right;
      void leaf.setViewState({ type, active: true });
    }
    workspace.setActiveLeaf(leaf);
  }
};
/*! Bundled license information:

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.4.13 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.13/LICENSE *)
*/


/* nosourcemap */