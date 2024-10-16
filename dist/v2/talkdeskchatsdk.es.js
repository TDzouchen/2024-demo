/*!
* Talkdesk Confidential
*
* Copyright (C) Talkdesk Inc. 2024
*
* The source code for this program is not published or otherwise divested
* of its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office. Unauthorized copying of this file, via any medium
* is strictly prohibited.
*/
function Ra(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Ov(e) {
  if (Array.isArray(e)) return e;
}
function Iv(e) {
  if (Array.isArray(e)) return Ra(e);
}
function Pv(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vo(e, r, t, n, a, i, o) {
  try {
    var s = e[i](o), c = s.value;
  } catch (u) {
    return void t(u);
  }
  s.done ? r(c) : Promise.resolve(c).then(n, a);
}
function V(e) {
  return function() {
    var r = this, t = arguments;
    return new Promise(function(n, a) {
      var i = e.apply(r, t);
      function o(c) {
        vo(i, n, a, o, s, "next", c);
      }
      function s(c) {
        vo(i, n, a, o, s, "throw", c);
      }
      o(void 0);
    });
  };
}
function Tv(e, r, t) {
  return r = kr(r), Mv(e, pi() ? Reflect.construct(r, t || [], kr(e).constructor) : r.apply(e, t));
}
function Dr(e, r) {
  if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function Rv(e, r, t) {
  if (pi()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, r);
  var a = new (e.bind.apply(e, n))();
  return t && Mr(a, t.prototype), a;
}
function fo(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sc(n.key), n);
  }
}
function Fr(e, r, t) {
  return r && fo(e.prototype, r), t && fo(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function L(e, r, t) {
  return (r = sc(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function kr(e) {
  return kr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, kr(e);
}
function Cv(e, r) {
  if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(r && r.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), r && Mr(e, r);
}
function _v(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function pi() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pi = function() {
    return !!e;
  })();
}
function xv(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Lv(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, a, i, o, s = [], c = !0, u = !1;
    try {
      if (i = (t = t.call(e)).next, r === 0) {
        if (Object(t) !== t) return;
        c = !1;
      } else for (; !(c = (n = i.call(t)).done) && (s.push(n.value), s.length !== r); c = !0) ;
    } catch (v) {
      u = !0, a = v;
    } finally {
      try {
        if (!c && t.return != null && (o = t.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function Av() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ho(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function k(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ho(Object(t), !0).forEach(function(n) {
      L(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ho(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Nv(e, r) {
  if (e == null) return {};
  var t, n, a = kv(e, r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) t = i[n], r.includes(t) || {}.propertyIsEnumerable.call(e, t) && (a[t] = e[t]);
  }
  return a;
}
function kv(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.includes(n)) continue;
    t[n] = e[n];
  }
  return t;
}
function Mv(e, r) {
  if (r && (typeof r == "object" || typeof r == "function")) return r;
  if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Pv(e);
}
function R() {
  R = function() {
    return r;
  };
  var e, r = {}, t = Object.prototype, n = t.hasOwnProperty, a = Object.defineProperty || function(p, h, y) {
    p[h] = y.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, o = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function u(p, h, y) {
    return Object.defineProperty(p, h, {
      value: y,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), p[h];
  }
  try {
    u({}, "");
  } catch {
    u = function(h, y, E) {
      return h[y] = E;
    };
  }
  function v(p, h, y, E) {
    var b = h && h.prototype instanceof S ? h : S, I = Object.create(b.prototype), B = new Ae(E || []);
    return a(I, "_invoke", {
      value: We(p, y, B)
    }), I;
  }
  function l(p, h, y) {
    try {
      return {
        type: "normal",
        arg: p.call(h, y)
      };
    } catch (E) {
      return {
        type: "throw",
        arg: E
      };
    }
  }
  r.wrap = v;
  var f = "suspendedStart", d = "suspendedYield", g = "executing", $ = "completed", m = {};
  function S() {
  }
  function w() {
  }
  function P() {
  }
  var _ = {};
  u(_, o, function() {
    return this;
  });
  var ue = Object.getPrototypeOf, M = ue && ue(ue(ge([])));
  M && M !== t && n.call(M, o) && (_ = M);
  var O = P.prototype = S.prototype = Object.create(_);
  function j(p) {
    ["next", "throw", "return"].forEach(function(h) {
      u(p, h, function(y) {
        return this._invoke(h, y);
      });
    });
  }
  function Z(p, h) {
    function y(b, I, B, X) {
      var J = l(p[b], p, I);
      if (J.type !== "throw") {
        var Ke = J.arg, yr = Ke.value;
        return yr && typeof yr == "object" && n.call(yr, "__await") ? h.resolve(yr.__await).then(function(je) {
          y("next", je, B, X);
        }, function(je) {
          y("throw", je, B, X);
        }) : h.resolve(yr).then(function(je) {
          Ke.value = je, B(Ke);
        }, function(je) {
          return y("throw", je, B, X);
        });
      }
      X(J.arg);
    }
    var E;
    a(this, "_invoke", {
      value: function(b, I) {
        function B() {
          return new h(function(X, J) {
            y(b, I, X, J);
          });
        }
        return E = E ? E.then(B, B) : B();
      }
    });
  }
  function We(p, h, y) {
    var E = f;
    return function(b, I) {
      if (E === g) throw Error("Generator is already running");
      if (E === $) {
        if (b === "throw") throw I;
        return {
          value: e,
          done: !0
        };
      }
      for (y.method = b, y.arg = I; ; ) {
        var B = y.delegate;
        if (B) {
          var X = ee(B, y);
          if (X) {
            if (X === m) continue;
            return X;
          }
        }
        if (y.method === "next") y.sent = y._sent = y.arg;
        else if (y.method === "throw") {
          if (E === f) throw E = $, y.arg;
          y.dispatchException(y.arg);
        } else y.method === "return" && y.abrupt("return", y.arg);
        E = g;
        var J = l(p, h, y);
        if (J.type === "normal") {
          if (E = y.done ? $ : d, J.arg === m) continue;
          return {
            value: J.arg,
            done: y.done
          };
        }
        J.type === "throw" && (E = $, y.method = "throw", y.arg = J.arg);
      }
    };
  }
  function ee(p, h) {
    var y = h.method, E = p.iterator[y];
    if (E === e) return h.delegate = null, y === "throw" && p.iterator.return && (h.method = "return", h.arg = e, ee(p, h), h.method === "throw") || y !== "return" && (h.method = "throw", h.arg = new TypeError("The iterator does not provide a '" + y + "' method")), m;
    var b = l(E, p.iterator, h.arg);
    if (b.type === "throw") return h.method = "throw", h.arg = b.arg, h.delegate = null, m;
    var I = b.arg;
    return I ? I.done ? (h[p.resultName] = I.value, h.next = p.nextLoc, h.method !== "return" && (h.method = "next", h.arg = e), h.delegate = null, m) : I : (h.method = "throw", h.arg = new TypeError("iterator result is not an object"), h.delegate = null, m);
  }
  function Jr(p) {
    var h = {
      tryLoc: p[0]
    };
    1 in p && (h.catchLoc = p[1]), 2 in p && (h.finallyLoc = p[2], h.afterLoc = p[3]), this.tryEntries.push(h);
  }
  function Le(p) {
    var h = p.completion || {};
    h.type = "normal", delete h.arg, p.completion = h;
  }
  function Ae(p) {
    this.tryEntries = [{
      tryLoc: "root"
    }], p.forEach(Jr, this), this.reset(!0);
  }
  function ge(p) {
    if (p || p === "") {
      var h = p[o];
      if (h) return h.call(p);
      if (typeof p.next == "function") return p;
      if (!isNaN(p.length)) {
        var y = -1, E = function b() {
          for (; ++y < p.length; ) if (n.call(p, y)) return b.value = p[y], b.done = !1, b;
          return b.value = e, b.done = !0, b;
        };
        return E.next = E;
      }
    }
    throw new TypeError(typeof p + " is not iterable");
  }
  return w.prototype = P, a(O, "constructor", {
    value: P,
    configurable: !0
  }), a(P, "constructor", {
    value: w,
    configurable: !0
  }), w.displayName = u(P, c, "GeneratorFunction"), r.isGeneratorFunction = function(p) {
    var h = typeof p == "function" && p.constructor;
    return !!h && (h === w || (h.displayName || h.name) === "GeneratorFunction");
  }, r.mark = function(p) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(p, P) : (p.__proto__ = P, u(p, c, "GeneratorFunction")), p.prototype = Object.create(O), p;
  }, r.awrap = function(p) {
    return {
      __await: p
    };
  }, j(Z.prototype), u(Z.prototype, s, function() {
    return this;
  }), r.AsyncIterator = Z, r.async = function(p, h, y, E, b) {
    b === void 0 && (b = Promise);
    var I = new Z(v(p, h, y, E), b);
    return r.isGeneratorFunction(h) ? I : I.next().then(function(B) {
      return B.done ? B.value : I.next();
    });
  }, j(O), u(O, c, "Generator"), u(O, o, function() {
    return this;
  }), u(O, "toString", function() {
    return "[object Generator]";
  }), r.keys = function(p) {
    var h = Object(p), y = [];
    for (var E in h) y.push(E);
    return y.reverse(), function b() {
      for (; y.length; ) {
        var I = y.pop();
        if (I in h) return b.value = I, b.done = !1, b;
      }
      return b.done = !0, b;
    };
  }, r.values = ge, Ae.prototype = {
    constructor: Ae,
    reset: function(p) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(Le), !p) for (var h in this) h.charAt(0) === "t" && n.call(this, h) && !isNaN(+h.slice(1)) && (this[h] = e);
    },
    stop: function() {
      this.done = !0;
      var p = this.tryEntries[0].completion;
      if (p.type === "throw") throw p.arg;
      return this.rval;
    },
    dispatchException: function(p) {
      if (this.done) throw p;
      var h = this;
      function y(J, Ke) {
        return I.type = "throw", I.arg = p, h.next = J, Ke && (h.method = "next", h.arg = e), !!Ke;
      }
      for (var E = this.tryEntries.length - 1; E >= 0; --E) {
        var b = this.tryEntries[E], I = b.completion;
        if (b.tryLoc === "root") return y("end");
        if (b.tryLoc <= this.prev) {
          var B = n.call(b, "catchLoc"), X = n.call(b, "finallyLoc");
          if (B && X) {
            if (this.prev < b.catchLoc) return y(b.catchLoc, !0);
            if (this.prev < b.finallyLoc) return y(b.finallyLoc);
          } else if (B) {
            if (this.prev < b.catchLoc) return y(b.catchLoc, !0);
          } else {
            if (!X) throw Error("try statement without catch or finally");
            if (this.prev < b.finallyLoc) return y(b.finallyLoc);
          }
        }
      }
    },
    abrupt: function(p, h) {
      for (var y = this.tryEntries.length - 1; y >= 0; --y) {
        var E = this.tryEntries[y];
        if (E.tryLoc <= this.prev && n.call(E, "finallyLoc") && this.prev < E.finallyLoc) {
          var b = E;
          break;
        }
      }
      b && (p === "break" || p === "continue") && b.tryLoc <= h && h <= b.finallyLoc && (b = null);
      var I = b ? b.completion : {};
      return I.type = p, I.arg = h, b ? (this.method = "next", this.next = b.finallyLoc, m) : this.complete(I);
    },
    complete: function(p, h) {
      if (p.type === "throw") throw p.arg;
      return p.type === "break" || p.type === "continue" ? this.next = p.arg : p.type === "return" ? (this.rval = this.arg = p.arg, this.method = "return", this.next = "end") : p.type === "normal" && h && (this.next = h), m;
    },
    finish: function(p) {
      for (var h = this.tryEntries.length - 1; h >= 0; --h) {
        var y = this.tryEntries[h];
        if (y.finallyLoc === p) return this.complete(y.completion, y.afterLoc), Le(y), m;
      }
    },
    catch: function(p) {
      for (var h = this.tryEntries.length - 1; h >= 0; --h) {
        var y = this.tryEntries[h];
        if (y.tryLoc === p) {
          var E = y.completion;
          if (E.type === "throw") {
            var b = E.arg;
            Le(y);
          }
          return b;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(p, h, y) {
      return this.delegate = {
        iterator: ge(p),
        resultName: h,
        nextLoc: y
      }, this.method === "next" && (this.arg = e), m;
    }
  }, r;
}
function Mr(e, r) {
  return Mr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, Mr(e, r);
}
function gi(e, r) {
  return Ov(e) || Lv(e, r) || uc(e, r) || Av();
}
function Uv(e) {
  return Iv(e) || xv(e) || uc(e) || jv();
}
function Bv(e, r) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function sc(e) {
  var r = Bv(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function uc(e, r) {
  if (e) {
    if (typeof e == "string") return Ra(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ra(e, r) : void 0;
  }
}
function Ca(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ca = function(t) {
    if (t === null || !_v(t)) return t;
    if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(t)) return r.get(t);
      r.set(t, n);
    }
    function n() {
      return Rv(t, arguments, kr(this).constructor);
    }
    return n.prototype = Object.create(t.prototype, {
      constructor: {
        value: n,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Mr(n, t);
  }, Ca(e);
}
var Qr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mr = function(e) {
  return e && e.Math === Math && e;
}, A = (
  // eslint-disable-next-line es/no-global-this -- safe
  mr(typeof globalThis == "object" && globalThis) || mr(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  mr(typeof self == "object" && self) || mr(typeof Qr == "object" && Qr) || mr(typeof Qr == "object" && Qr) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), cc = { exports: {} }, Fv = !1, po = A, Gv = Object.defineProperty, yi = function(e, r) {
  try {
    Gv(po, e, { value: r, configurable: !0, writable: !0 });
  } catch {
    po[e] = r;
  }
  return r;
}, Hv = A, zv = yi, go = "__core-js_shared__", yo = cc.exports = Hv[go] || zv(go, {});
(yo.versions || (yo.versions = [])).push({
  version: "3.38.0",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var mi = cc.exports, mo = mi, $i = function(e, r) {
  return mo[e] || (mo[e] = r || {});
}, T = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, Wv = T, Bt = !Wv(function() {
  var e = (function() {
  }).bind();
  return typeof e != "function" || e.hasOwnProperty("prototype");
}), lc = Bt, vc = Function.prototype, _a = vc.call, Kv = lc && vc.bind.bind(_a, _a), x = lc ? Kv : function(e) {
  return function() {
    return _a.apply(e, arguments);
  };
}, Fe = function(e) {
  return e == null;
}, qv = Fe, Vv = TypeError, fr = function(e) {
  if (qv(e)) throw new Vv("Can't call method on " + e);
  return e;
}, Yv = fr, Xv = Object, Pe = function(e) {
  return Xv(Yv(e));
}, Jv = x, Qv = Pe, Zv = Jv({}.hasOwnProperty), Y = Object.hasOwn || function(r, t) {
  return Zv(Qv(r), t);
}, ef = x, rf = 0, tf = Math.random(), nf = ef(1 .toString), bi = function(e) {
  return "Symbol(" + (e === void 0 ? "" : e) + ")_" + nf(++rf + tf, 36);
}, af = A, $o = af.navigator, bo = $o && $o.userAgent, Gr = bo ? String(bo) : "", fc = A, dn = Gr, wo = fc.process, So = fc.Deno, Eo = wo && wo.versions || So && So.version, Oo = Eo && Eo.v8, le, Tt;
Oo && (le = Oo.split("."), Tt = le[0] > 0 && le[0] < 4 ? 1 : +(le[0] + le[1]));
!Tt && dn && (le = dn.match(/Edge\/(\d+)/), (!le || le[1] >= 74) && (le = dn.match(/Chrome\/(\d+)/), le && (Tt = +le[1])));
var Dt = Tt, Io = Dt, of = T, sf = A, uf = sf.String, dc = !!Object.getOwnPropertySymbols && !of(function() {
  var e = Symbol("symbol detection");
  return !uf(e) || !(Object(e) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && Io && Io < 41;
}), cf = dc, hc = cf && !Symbol.sham && typeof Symbol.iterator == "symbol", lf = A, vf = $i, Po = Y, ff = bi, df = dc, hf = hc, tr = lf.Symbol, hn = vf("wks"), pf = hf ? tr.for || tr : tr && tr.withoutSetter || ff, U = function(e) {
  return Po(hn, e) || (hn[e] = df && Po(tr, e) ? tr[e] : pf("Symbol." + e)), hn[e];
}, gf = U, yf = gf("toStringTag"), pc = {};
pc[yf] = "z";
var wi = String(pc) === "[object z]", pn = typeof document == "object" && document.all, N = typeof pn > "u" && pn !== void 0 ? function(e) {
  return typeof e == "function" || e === pn;
} : function(e) {
  return typeof e == "function";
}, fe = {}, mf = T, G = !mf(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), $f = N, H = function(e) {
  return typeof e == "object" ? e !== null : $f(e);
}, bf = A, To = H, xa = bf.document, wf = To(xa) && To(xa.createElement), Ft = function(e) {
  return wf ? xa.createElement(e) : {};
}, Sf = G, Ef = T, Of = Ft, gc = !Sf && !Ef(function() {
  return Object.defineProperty(Of("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), If = G, Pf = T, yc = If && Pf(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), Tf = H, Rf = String, Cf = TypeError, K = function(e) {
  if (Tf(e)) return e;
  throw new Cf(Rf(e) + " is not an object");
}, _f = Bt, Zr = Function.prototype.call, F = _f ? Zr.bind(Zr) : function() {
  return Zr.apply(Zr, arguments);
}, gn = A, xf = N, Lf = function(e) {
  return xf(e) ? e : void 0;
}, Ge = function(e, r) {
  return arguments.length < 2 ? Lf(gn[e]) : gn[e] && gn[e][r];
}, Af = x, Gt = Af({}.isPrototypeOf), jf = Ge, Nf = N, kf = Gt, Mf = hc, Uf = Object, mc = Mf ? function(e) {
  return typeof e == "symbol";
} : function(e) {
  var r = jf("Symbol");
  return Nf(r) && kf(r.prototype, Uf(e));
}, Bf = String, Ht = function(e) {
  try {
    return Bf(e);
  } catch {
    return "Object";
  }
}, Df = N, Ff = Ht, Gf = TypeError, Te = function(e) {
  if (Df(e)) return e;
  throw new Gf(Ff(e) + " is not a function");
}, Hf = Te, zf = Fe, zt = function(e, r) {
  var t = e[r];
  return zf(t) ? void 0 : Hf(t);
}, yn = F, mn = N, $n = H, Wf = TypeError, Kf = function(e, r) {
  var t, n;
  if (r === "string" && mn(t = e.toString) && !$n(n = yn(t, e)) || mn(t = e.valueOf) && !$n(n = yn(t, e)) || r !== "string" && mn(t = e.toString) && !$n(n = yn(t, e))) return n;
  throw new Wf("Can't convert object to primitive value");
}, qf = F, Ro = H, Co = mc, Vf = zt, Yf = Kf, Xf = U, Jf = TypeError, Qf = Xf("toPrimitive"), Zf = function(e, r) {
  if (!Ro(e) || Co(e)) return e;
  var t = Vf(e, Qf), n;
  if (t) {
    if (r === void 0 && (r = "default"), n = qf(t, e, r), !Ro(n) || Co(n)) return n;
    throw new Jf("Can't convert object to primitive value");
  }
  return r === void 0 && (r = "number"), Yf(e, r);
}, ed = Zf, rd = mc, $c = function(e) {
  var r = ed(e, "string");
  return rd(r) ? r : r + "";
}, td = G, nd = gc, ad = yc, et = K, _o = $c, id = TypeError, bn = Object.defineProperty, od = Object.getOwnPropertyDescriptor, wn = "enumerable", Sn = "configurable", En = "writable";
fe.f = td ? ad ? function(r, t, n) {
  if (et(r), t = _o(t), et(n), typeof r == "function" && t === "prototype" && "value" in n && En in n && !n[En]) {
    var a = od(r, t);
    a && a[En] && (r[t] = n.value, n = {
      configurable: Sn in n ? n[Sn] : a[Sn],
      enumerable: wn in n ? n[wn] : a[wn],
      writable: !1
    });
  }
  return bn(r, t, n);
} : bn : function(r, t, n) {
  if (et(r), t = _o(t), et(n), nd) try {
    return bn(r, t, n);
  } catch {
  }
  if ("get" in n || "set" in n) throw new id("Accessors not supported");
  return "value" in n && (r[t] = n.value), r;
};
var bc = { exports: {} }, La = G, sd = Y, wc = Function.prototype, ud = La && Object.getOwnPropertyDescriptor, Si = sd(wc, "name"), cd = Si && (function() {
}).name === "something", ld = Si && (!La || La && ud(wc, "name").configurable), Wt = {
  EXISTS: Si,
  PROPER: cd,
  CONFIGURABLE: ld
}, vd = x, fd = N, Aa = mi, dd = vd(Function.toString);
fd(Aa.inspectSource) || (Aa.inspectSource = function(e) {
  return dd(e);
});
var Ei = Aa.inspectSource, hd = A, pd = N, xo = hd.WeakMap, gd = pd(xo) && /native code/.test(String(xo)), Hr = function(e, r) {
  return {
    enumerable: !(e & 1),
    configurable: !(e & 2),
    writable: !(e & 4),
    value: r
  };
}, yd = G, md = fe, $d = Hr, dr = yd ? function(e, r, t) {
  return md.f(e, r, $d(1, t));
} : function(e, r, t) {
  return e[r] = t, e;
}, bd = $i, wd = bi, Lo = bd("keys"), Oi = function(e) {
  return Lo[e] || (Lo[e] = wd(e));
}, Kt = {}, Sd = gd, Sc = A, Ed = H, Od = dr, On = Y, In = mi, Id = Oi, Pd = Kt, Ao = "Object already initialized", ja = Sc.TypeError, Td = Sc.WeakMap, Rt, Ur, Ct, Rd = function(e) {
  return Ct(e) ? Ur(e) : Rt(e, {});
}, Cd = function(e) {
  return function(r) {
    var t;
    if (!Ed(r) || (t = Ur(r)).type !== e)
      throw new ja("Incompatible receiver, " + e + " required");
    return t;
  };
};
if (Sd || In.state) {
  var de = In.state || (In.state = new Td());
  de.get = de.get, de.has = de.has, de.set = de.set, Rt = function(e, r) {
    if (de.has(e)) throw new ja(Ao);
    return r.facade = e, de.set(e, r), r;
  }, Ur = function(e) {
    return de.get(e) || {};
  }, Ct = function(e) {
    return de.has(e);
  };
} else {
  var qe = Id("state");
  Pd[qe] = !0, Rt = function(e, r) {
    if (On(e, qe)) throw new ja(Ao);
    return r.facade = e, Od(e, qe, r), r;
  }, Ur = function(e) {
    return On(e, qe) ? e[qe] : {};
  }, Ct = function(e) {
    return On(e, qe);
  };
}
var Re = {
  set: Rt,
  get: Ur,
  has: Ct,
  enforce: Rd,
  getterFor: Cd
}, Ii = x, _d = T, xd = N, rt = Y, Na = G, Ld = Wt.CONFIGURABLE, Ad = Ei, Ec = Re, jd = Ec.enforce, Nd = Ec.get, jo = String, $t = Object.defineProperty, kd = Ii("".slice), Md = Ii("".replace), Ud = Ii([].join), Bd = Na && !_d(function() {
  return $t(function() {
  }, "length", { value: 8 }).length !== 8;
}), Dd = String(String).split("String"), Fd = bc.exports = function(e, r, t) {
  kd(jo(r), 0, 7) === "Symbol(" && (r = "[" + Md(jo(r), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), t && t.getter && (r = "get " + r), t && t.setter && (r = "set " + r), (!rt(e, "name") || Ld && e.name !== r) && (Na ? $t(e, "name", { value: r, configurable: !0 }) : e.name = r), Bd && t && rt(t, "arity") && e.length !== t.arity && $t(e, "length", { value: t.arity });
  try {
    t && rt(t, "constructor") && t.constructor ? Na && $t(e, "prototype", { writable: !1 }) : e.prototype && (e.prototype = void 0);
  } catch {
  }
  var n = jd(e);
  return rt(n, "source") || (n.source = Ud(Dd, typeof r == "string" ? r : "")), e;
};
Function.prototype.toString = Fd(function() {
  return xd(this) && Nd(this).source || Ad(this);
}, "toString");
var Oc = bc.exports, Gd = N, Hd = fe, zd = Oc, Wd = yi, oe = function(e, r, t, n) {
  n || (n = {});
  var a = n.enumerable, i = n.name !== void 0 ? n.name : r;
  if (Gd(t) && zd(t, i, n), n.global)
    a ? e[r] = t : Wd(r, t);
  else {
    try {
      n.unsafe ? e[r] && (a = !0) : delete e[r];
    } catch {
    }
    a ? e[r] = t : Hd.f(e, r, {
      value: t,
      enumerable: !1,
      configurable: !n.nonConfigurable,
      writable: !n.nonWritable
    });
  }
  return e;
}, Ic = x, Kd = Ic({}.toString), qd = Ic("".slice), Ce = function(e) {
  return qd(Kd(e), 8, -1);
}, Vd = wi, Yd = N, bt = Ce, Xd = U, Jd = Xd("toStringTag"), Qd = Object, Zd = bt(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", eh = function(e, r) {
  try {
    return e[r];
  } catch {
  }
}, zr = Vd ? bt : function(e) {
  var r, t, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (t = eh(r = Qd(e), Jd)) == "string" ? t : Zd ? bt(r) : (n = bt(r)) === "Object" && Yd(r.callee) ? "Arguments" : n;
}, rh = wi, th = zr, nh = rh ? {}.toString : function() {
  return "[object " + th(this) + "]";
}, ah = wi, ih = oe, oh = nh;
ah || ih(Object.prototype, "toString", oh, { unsafe: !0 });
var Pi = {}, qt = {}, Pc = {}.propertyIsEnumerable, Tc = Object.getOwnPropertyDescriptor, sh = Tc && !Pc.call({ 1: 2 }, 1);
qt.f = sh ? function(r) {
  var t = Tc(this, r);
  return !!t && t.enumerable;
} : Pc;
var uh = x, ch = T, lh = Ce, Pn = Object, vh = uh("".split), Vt = ch(function() {
  return !Pn("z").propertyIsEnumerable(0);
}) ? function(e) {
  return lh(e) === "String" ? vh(e, "") : Pn(e);
} : Pn, fh = Vt, dh = fr, be = function(e) {
  return fh(dh(e));
}, hh = G, ph = F, gh = qt, yh = Hr, mh = be, $h = $c, bh = Y, wh = gc, No = Object.getOwnPropertyDescriptor;
Pi.f = hh ? No : function(r, t) {
  if (r = mh(r), t = $h(t), wh) try {
    return No(r, t);
  } catch {
  }
  if (bh(r, t)) return yh(!ph(gh.f, r, t), r[t]);
};
var Yt = {}, Sh = Math.ceil, Eh = Math.floor, Oh = Math.trunc || function(r) {
  var t = +r;
  return (t > 0 ? Eh : Sh)(t);
}, Ih = Oh, Xt = function(e) {
  var r = +e;
  return r !== r || r === 0 ? 0 : Ih(r);
}, Ph = Xt, Th = Math.max, Rh = Math.min, Rc = function(e, r) {
  var t = Ph(e);
  return t < 0 ? Th(t + r, 0) : Rh(t, r);
}, Ch = Xt, _h = Math.min, Cc = function(e) {
  var r = Ch(e);
  return r > 0 ? _h(r, 9007199254740991) : 0;
}, xh = Cc, hr = function(e) {
  return xh(e.length);
}, Lh = be, Ah = Rc, jh = hr, ko = function(e) {
  return function(r, t, n) {
    var a = Lh(r), i = jh(a);
    if (i === 0) return !e && -1;
    var o = Ah(n, i), s;
    if (e && t !== t) {
      for (; i > o; )
        if (s = a[o++], s !== s) return !0;
    } else for (; i > o; o++)
      if ((e || o in a) && a[o] === t) return e || o || 0;
    return !e && -1;
  };
}, Nh = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: ko(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: ko(!1)
}, kh = x, Tn = Y, Mh = be, Uh = Nh.indexOf, Bh = Kt, Mo = kh([].push), _c = function(e, r) {
  var t = Mh(e), n = 0, a = [], i;
  for (i in t) !Tn(Bh, i) && Tn(t, i) && Mo(a, i);
  for (; r.length > n; ) Tn(t, i = r[n++]) && (~Uh(a, i) || Mo(a, i));
  return a;
}, Ti = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], Dh = _c, Fh = Ti, Gh = Fh.concat("length", "prototype");
Yt.f = Object.getOwnPropertyNames || function(r) {
  return Dh(r, Gh);
};
var Ri = {};
Ri.f = Object.getOwnPropertySymbols;
var Hh = Ge, zh = x, Wh = Yt, Kh = Ri, qh = K, Vh = zh([].concat), Yh = Hh("Reflect", "ownKeys") || function(r) {
  var t = Wh.f(qh(r)), n = Kh.f;
  return n ? Vh(t, n(r)) : t;
}, Uo = Y, Xh = Yh, Jh = Pi, Qh = fe, Zh = function(e, r, t) {
  for (var n = Xh(r), a = Qh.f, i = Jh.f, o = 0; o < n.length; o++) {
    var s = n[o];
    !Uo(e, s) && !(t && Uo(t, s)) && a(e, s, i(r, s));
  }
}, ep = T, rp = N, tp = /#|\.prototype\./, Wr = function(e, r) {
  var t = ap[np(e)];
  return t === op ? !0 : t === ip ? !1 : rp(r) ? ep(r) : !!r;
}, np = Wr.normalize = function(e) {
  return String(e).replace(tp, ".").toLowerCase();
}, ap = Wr.data = {}, ip = Wr.NATIVE = "N", op = Wr.POLYFILL = "P", Ci = Wr, tt = A, sp = Pi.f, up = dr, cp = oe, lp = yi, vp = Zh, fp = Ci, D = function(e, r) {
  var t = e.target, n = e.global, a = e.stat, i, o, s, c, u, v;
  if (n ? o = tt : a ? o = tt[t] || lp(t, {}) : o = tt[t] && tt[t].prototype, o) for (s in r) {
    if (u = r[s], e.dontCallGetSet ? (v = sp(o, s), c = v && v.value) : c = o[s], i = fp(n ? s : t + (a ? "." : "#") + s, e.forced), !i && c !== void 0) {
      if (typeof u == typeof c) continue;
      vp(u, c);
    }
    (e.sham || c && c.sham) && up(u, "sham", !0), cp(o, s, u, e);
  }
}, $r = A, dp = Gr, hp = Ce, nt = function(e) {
  return dp.slice(0, e.length) === e;
}, xc = function() {
  return nt("Bun/") ? "BUN" : nt("Cloudflare-Workers") ? "CLOUDFLARE" : nt("Deno/") ? "DENO" : nt("Node.js/") ? "NODE" : $r.Bun && typeof Bun.version == "string" ? "BUN" : $r.Deno && typeof Deno.version == "object" ? "DENO" : hp($r.process) === "process" ? "NODE" : $r.window && $r.document ? "BROWSER" : "REST";
}(), pp = xc, _i = pp === "NODE", gp = x, yp = Te, mp = function(e, r, t) {
  try {
    return gp(yp(Object.getOwnPropertyDescriptor(e, r)[t]));
  } catch {
  }
}, $p = H, bp = function(e) {
  return $p(e) || e === null;
}, wp = bp, Sp = String, Ep = TypeError, Op = function(e) {
  if (wp(e)) return e;
  throw new Ep("Can't set " + Sp(e) + " as a prototype");
}, Ip = mp, Pp = H, Tp = fr, Rp = Op, xi = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e = !1, r = {}, t;
  try {
    t = Ip(Object.prototype, "__proto__", "set"), t(r, []), e = r instanceof Array;
  } catch {
  }
  return function(a, i) {
    return Tp(a), Rp(i), Pp(a) && (e ? t(a, i) : a.__proto__ = i), a;
  };
}() : void 0), Cp = fe.f, _p = Y, xp = U, Bo = xp("toStringTag"), He = function(e, r, t) {
  e && !t && (e = e.prototype), e && !_p(e, Bo) && Cp(e, Bo, { configurable: !0, value: r });
}, Do = Oc, Lp = fe, Jt = function(e, r, t) {
  return t.get && Do(t.get, r, { getter: !0 }), t.set && Do(t.set, r, { setter: !0 }), Lp.f(e, r, t);
}, Ap = Ge, jp = Jt, Np = U, kp = G, Fo = Np("species"), Lc = function(e) {
  var r = Ap(e);
  kp && r && !r[Fo] && jp(r, Fo, {
    configurable: !0,
    get: function() {
      return this;
    }
  });
}, Mp = Gt, Up = TypeError, Kr = function(e, r) {
  if (Mp(r, e)) return e;
  throw new Up("Incorrect invocation");
}, Bp = x, Dp = T, Ac = N, Fp = zr, Gp = Ge, Hp = Ei, jc = function() {
}, Nc = Gp("Reflect", "construct"), Li = /^\s*(?:class|function)\b/, zp = Bp(Li.exec), Wp = !Li.test(jc), br = function(r) {
  if (!Ac(r)) return !1;
  try {
    return Nc(jc, [], r), !0;
  } catch {
    return !1;
  }
}, kc = function(r) {
  if (!Ac(r)) return !1;
  switch (Fp(r)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return Wp || !!zp(Li, Hp(r));
  } catch {
    return !0;
  }
};
kc.sham = !0;
var Qt = !Nc || Dp(function() {
  var e;
  return br(br.call) || !br(Object) || !br(function() {
    e = !0;
  }) || e;
}) ? kc : br, Kp = Qt, qp = Ht, Vp = TypeError, Yp = function(e) {
  if (Kp(e)) return e;
  throw new Vp(qp(e) + " is not a constructor");
}, Go = K, Xp = Yp, Jp = Fe, Qp = U, Zp = Qp("species"), eg = function(e, r) {
  var t = Go(e).constructor, n;
  return t === void 0 || Jp(n = Go(t)[Zp]) ? r : Xp(n);
}, rg = Bt, Mc = Function.prototype, Ho = Mc.apply, zo = Mc.call, Uc = typeof Reflect == "object" && Reflect.apply || (rg ? zo.bind(Ho) : function() {
  return zo.apply(Ho, arguments);
}), tg = Ce, ng = x, ag = function(e) {
  if (tg(e) === "Function") return ng(e);
}, Wo = ag, ig = Te, og = Bt, sg = Wo(Wo.bind), _e = function(e, r) {
  return ig(e), r === void 0 ? e : og ? sg(e, r) : function() {
    return e.apply(r, arguments);
  };
}, ug = Ge, Bc = ug("document", "documentElement"), cg = x, qr = cg([].slice), lg = TypeError, Ai = function(e, r) {
  if (e < r) throw new lg("Not enough arguments");
  return e;
}, vg = Gr, Dc = /(?:ipad|iphone|ipod).*applewebkit/i.test(vg), Q = A, fg = Uc, dg = _e, Ko = N, hg = Y, Fc = T, qo = Bc, pg = qr, Vo = Ft, gg = Ai, yg = Dc, mg = _i, ka = Q.setImmediate, Ma = Q.clearImmediate, $g = Q.process, Rn = Q.Dispatch, bg = Q.Function, Yo = Q.MessageChannel, wg = Q.String, Cn = 0, _r = {}, Xo = "onreadystatechange", Br, Ne, _n, xn;
Fc(function() {
  Br = Q.location;
});
var ji = function(e) {
  if (hg(_r, e)) {
    var r = _r[e];
    delete _r[e], r();
  }
}, Ln = function(e) {
  return function() {
    ji(e);
  };
}, Jo = function(e) {
  ji(e.data);
}, Qo = function(e) {
  Q.postMessage(wg(e), Br.protocol + "//" + Br.host);
};
(!ka || !Ma) && (ka = function(r) {
  gg(arguments.length, 1);
  var t = Ko(r) ? r : bg(r), n = pg(arguments, 1);
  return _r[++Cn] = function() {
    fg(t, void 0, n);
  }, Ne(Cn), Cn;
}, Ma = function(r) {
  delete _r[r];
}, mg ? Ne = function(e) {
  $g.nextTick(Ln(e));
} : Rn && Rn.now ? Ne = function(e) {
  Rn.now(Ln(e));
} : Yo && !yg ? (_n = new Yo(), xn = _n.port2, _n.port1.onmessage = Jo, Ne = dg(xn.postMessage, xn)) : Q.addEventListener && Ko(Q.postMessage) && !Q.importScripts && Br && Br.protocol !== "file:" && !Fc(Qo) ? (Ne = Qo, Q.addEventListener("message", Jo, !1)) : Xo in Vo("script") ? Ne = function(e) {
  qo.appendChild(Vo("script"))[Xo] = function() {
    qo.removeChild(this), ji(e);
  };
} : Ne = function(e) {
  setTimeout(Ln(e), 0);
});
var Gc = {
  set: ka,
  clear: Ma
}, Zo = A, Sg = G, Eg = Object.getOwnPropertyDescriptor, Hc = function(e) {
  if (!Sg) return Zo[e];
  var r = Eg(Zo, e);
  return r && r.value;
}, zc = function() {
  this.head = null, this.tail = null;
};
zc.prototype = {
  add: function(e) {
    var r = { item: e, next: null }, t = this.tail;
    t ? t.next = r : this.head = r, this.tail = r;
  },
  get: function() {
    var e = this.head;
    if (e) {
      var r = this.head = e.next;
      return r === null && (this.tail = null), e.item;
    }
  }
};
var Wc = zc, Og = Gr, Ig = /ipad|iphone|ipod/i.test(Og) && typeof Pebble < "u", Pg = Gr, Tg = /web0s(?!.*chrome)/i.test(Pg), ur = A, Rg = Hc, es = _e, An = Gc.set, Cg = Wc, _g = Dc, xg = Ig, Lg = Tg, jn = _i, rs = ur.MutationObserver || ur.WebKitMutationObserver, ts = ur.document, ns = ur.process, at = ur.Promise, Ua = Rg("queueMicrotask"), Ve, Nn, kn, it, as;
if (!Ua) {
  var ot = new Cg(), st = function() {
    var e, r;
    for (jn && (e = ns.domain) && e.exit(); r = ot.get(); ) try {
      r();
    } catch (t) {
      throw ot.head && Ve(), t;
    }
    e && e.enter();
  };
  !_g && !jn && !Lg && rs && ts ? (Nn = !0, kn = ts.createTextNode(""), new rs(st).observe(kn, { characterData: !0 }), Ve = function() {
    kn.data = Nn = !Nn;
  }) : !xg && at && at.resolve ? (it = at.resolve(void 0), it.constructor = at, as = es(it.then, it), Ve = function() {
    as(st);
  }) : jn ? Ve = function() {
    ns.nextTick(st);
  } : (An = es(An, ur), Ve = function() {
    An(st);
  }), Ua = function(e) {
    ot.head || Ve(), ot.add(e);
  };
}
var Ag = Ua, jg = function(e, r) {
  try {
    arguments.length === 1 ? console.error(e) : console.error(e, r);
  } catch {
  }
}, Ni = function(e) {
  try {
    return { error: !1, value: e() };
  } catch (r) {
    return { error: !0, value: r };
  }
}, Ng = A, Zt = Ng.Promise, kg = A, xr = Zt, Mg = N, Ug = Ci, Bg = Ei, Dg = U, is = xc, Mn = Dt;
xr && xr.prototype;
var Fg = Dg("species"), Ba = !1, Kc = Mg(kg.PromiseRejectionEvent), Gg = Ug("Promise", function() {
  var e = Bg(xr), r = e !== String(xr);
  if (!r && Mn === 66) return !0;
  if (!Mn || Mn < 51 || !/native code/.test(e)) {
    var t = new xr(function(i) {
      i(1);
    }), n = function(i) {
      i(function() {
      }, function() {
      });
    }, a = t.constructor = {};
    if (a[Fg] = n, Ba = t.then(function() {
    }) instanceof n, !Ba) return !0;
  }
  return !r && (is === "BROWSER" || is === "DENO") && !Kc;
}), Vr = {
  CONSTRUCTOR: Gg,
  REJECTION_EVENT: Kc,
  SUBCLASSING: Ba
}, pr = {}, os = Te, Hg = TypeError, zg = function(e) {
  var r, t;
  this.promise = new e(function(n, a) {
    if (r !== void 0 || t !== void 0) throw new Hg("Bad Promise constructor");
    r = n, t = a;
  }), this.resolve = os(r), this.reject = os(t);
};
pr.f = function(e) {
  return new zg(e);
};
var Wg = D, _t = _i, Ie = A, cr = F, ss = oe, us = xi, Kg = He, qg = Lc, Vg = Te, wt = N, Yg = H, Xg = Kr, Jg = eg, qc = Gc.set, ki = Ag, Qg = jg, Zg = Ni, ey = Wc, Vc = Re, xt = Zt, Mi = Vr, Yc = pr, en = "Promise", Xc = Mi.CONSTRUCTOR, ry = Mi.REJECTION_EVENT, ty = Mi.SUBCLASSING, Un = Vc.getterFor(en), ny = Vc.set, er = xt && xt.prototype, Ue = xt, ut = er, Jc = Ie.TypeError, Da = Ie.document, Ui = Ie.process, Fa = Yc.f, ay = Fa, iy = !!(Da && Da.createEvent && Ie.dispatchEvent), Qc = "unhandledrejection", oy = "rejectionhandled", cs = 0, Zc = 1, sy = 2, Bi = 1, el = 2, ct, ls, uy, vs, rl = function(e) {
  var r;
  return Yg(e) && wt(r = e.then) ? r : !1;
}, tl = function(e, r) {
  var t = r.value, n = r.state === Zc, a = n ? e.ok : e.fail, i = e.resolve, o = e.reject, s = e.domain, c, u, v;
  try {
    a ? (n || (r.rejection === el && ly(r), r.rejection = Bi), a === !0 ? c = t : (s && s.enter(), c = a(t), s && (s.exit(), v = !0)), c === e.promise ? o(new Jc("Promise-chain cycle")) : (u = rl(c)) ? cr(u, c, i, o) : i(c)) : o(t);
  } catch (l) {
    s && !v && s.exit(), o(l);
  }
}, nl = function(e, r) {
  e.notified || (e.notified = !0, ki(function() {
    for (var t = e.reactions, n; n = t.get(); )
      tl(n, e);
    e.notified = !1, r && !e.rejection && cy(e);
  }));
}, al = function(e, r, t) {
  var n, a;
  iy ? (n = Da.createEvent("Event"), n.promise = r, n.reason = t, n.initEvent(e, !1, !0), Ie.dispatchEvent(n)) : n = { promise: r, reason: t }, !ry && (a = Ie["on" + e]) ? a(n) : e === Qc && Qg("Unhandled promise rejection", t);
}, cy = function(e) {
  cr(qc, Ie, function() {
    var r = e.facade, t = e.value, n = fs(e), a;
    if (n && (a = Zg(function() {
      _t ? Ui.emit("unhandledRejection", t, r) : al(Qc, r, t);
    }), e.rejection = _t || fs(e) ? el : Bi, a.error))
      throw a.value;
  });
}, fs = function(e) {
  return e.rejection !== Bi && !e.parent;
}, ly = function(e) {
  cr(qc, Ie, function() {
    var r = e.facade;
    _t ? Ui.emit("rejectionHandled", r) : al(oy, r, e.value);
  });
}, nr = function(e, r, t) {
  return function(n) {
    e(r, n, t);
  };
}, or = function(e, r, t) {
  e.done || (e.done = !0, t && (e = t), e.value = r, e.state = sy, nl(e, !0));
}, Ga = function(e, r, t) {
  if (!e.done) {
    e.done = !0, t && (e = t);
    try {
      if (e.facade === r) throw new Jc("Promise can't be resolved itself");
      var n = rl(r);
      n ? ki(function() {
        var a = { done: !1 };
        try {
          cr(
            n,
            r,
            nr(Ga, a, e),
            nr(or, a, e)
          );
        } catch (i) {
          or(a, i, e);
        }
      }) : (e.value = r, e.state = Zc, nl(e, !1));
    } catch (a) {
      or({ done: !1 }, a, e);
    }
  }
};
if (Xc && (Ue = function(r) {
  Xg(this, ut), Vg(r), cr(ct, this);
  var t = Un(this);
  try {
    r(nr(Ga, t), nr(or, t));
  } catch (n) {
    or(t, n);
  }
}, ut = Ue.prototype, ct = function(r) {
  ny(this, {
    type: en,
    done: !1,
    notified: !1,
    parent: !1,
    reactions: new ey(),
    rejection: !1,
    state: cs,
    value: void 0
  });
}, ct.prototype = ss(ut, "then", function(r, t) {
  var n = Un(this), a = Fa(Jg(this, Ue));
  return n.parent = !0, a.ok = wt(r) ? r : !0, a.fail = wt(t) && t, a.domain = _t ? Ui.domain : void 0, n.state === cs ? n.reactions.add(a) : ki(function() {
    tl(a, n);
  }), a.promise;
}), ls = function() {
  var e = new ct(), r = Un(e);
  this.promise = e, this.resolve = nr(Ga, r), this.reject = nr(or, r);
}, Yc.f = Fa = function(e) {
  return e === Ue || e === uy ? new ls(e) : ay(e);
}, wt(xt) && er !== Object.prototype)) {
  vs = er.then, ty || ss(er, "then", function(r, t) {
    var n = this;
    return new Ue(function(a, i) {
      cr(vs, n, a, i);
    }).then(r, t);
  }, { unsafe: !0 });
  try {
    delete er.constructor;
  } catch {
  }
  us && us(er, ut);
}
Wg({ global: !0, constructor: !0, wrap: !0, forced: Xc }, {
  Promise: Ue
});
Kg(Ue, en, !1);
qg(en);
var Yr = {}, vy = U, fy = Yr, dy = vy("iterator"), hy = Array.prototype, il = function(e) {
  return e !== void 0 && (fy.Array === e || hy[dy] === e);
}, py = zr, ds = zt, gy = Fe, yy = Yr, my = U, $y = my("iterator"), rn = function(e) {
  if (!gy(e)) return ds(e, $y) || ds(e, "@@iterator") || yy[py(e)];
}, by = F, wy = Te, Sy = K, Ey = Ht, Oy = rn, Iy = TypeError, Di = function(e, r) {
  var t = arguments.length < 2 ? Oy(e) : r;
  if (wy(t)) return Sy(by(t, e));
  throw new Iy(Ey(e) + " is not iterable");
}, Py = F, hs = K, Ty = zt, ol = function(e, r, t) {
  var n, a;
  hs(e);
  try {
    if (n = Ty(e, "return"), !n) {
      if (r === "throw") throw t;
      return t;
    }
    n = Py(n, e);
  } catch (i) {
    a = !0, n = i;
  }
  if (r === "throw") throw t;
  if (a) throw n;
  return hs(n), t;
}, Ry = _e, Cy = F, _y = K, xy = Ht, Ly = il, Ay = hr, ps = Gt, jy = Di, Ny = rn, gs = ol, ky = TypeError, St = function(e, r) {
  this.stopped = e, this.result = r;
}, ys = St.prototype, tn = function(e, r, t) {
  var n = t && t.that, a = !!(t && t.AS_ENTRIES), i = !!(t && t.IS_RECORD), o = !!(t && t.IS_ITERATOR), s = !!(t && t.INTERRUPTED), c = Ry(r, n), u, v, l, f, d, g, $, m = function(w) {
    return u && gs(u, "normal", w), new St(!0, w);
  }, S = function(w) {
    return a ? (_y(w), s ? c(w[0], w[1], m) : c(w[0], w[1])) : s ? c(w, m) : c(w);
  };
  if (i)
    u = e.iterator;
  else if (o)
    u = e;
  else {
    if (v = Ny(e), !v) throw new ky(xy(e) + " is not iterable");
    if (Ly(v)) {
      for (l = 0, f = Ay(e); f > l; l++)
        if (d = S(e[l]), d && ps(ys, d)) return d;
      return new St(!1);
    }
    u = jy(e, v);
  }
  for (g = i ? e.next : u.next; !($ = Cy(g, u)).done; ) {
    try {
      d = S($.value);
    } catch (w) {
      gs(u, "throw", w);
    }
    if (typeof d == "object" && d && ps(ys, d)) return d;
  }
  return new St(!1);
}, My = U, sl = My("iterator"), ul = !1;
try {
  var Uy = 0, ms = {
    next: function() {
      return { done: !!Uy++ };
    },
    return: function() {
      ul = !0;
    }
  };
  ms[sl] = function() {
    return this;
  }, Array.from(ms, function() {
    throw 2;
  });
} catch {
}
var cl = function(e, r) {
  try {
    if (!r && !ul) return !1;
  } catch {
    return !1;
  }
  var t = !1;
  try {
    var n = {};
    n[sl] = function() {
      return {
        next: function() {
          return { done: t = !0 };
        }
      };
    }, e(n);
  } catch {
  }
  return t;
}, By = Zt, Dy = cl, Fy = Vr.CONSTRUCTOR, ll = Fy || !Dy(function(e) {
  By.all(e).then(void 0, function() {
  });
}), Gy = D, Hy = F, zy = Te, Wy = pr, Ky = Ni, qy = tn, Vy = ll;
Gy({ target: "Promise", stat: !0, forced: Vy }, {
  all: function(r) {
    var t = this, n = Wy.f(t), a = n.resolve, i = n.reject, o = Ky(function() {
      var s = zy(t.resolve), c = [], u = 0, v = 1;
      qy(r, function(l) {
        var f = u++, d = !1;
        v++, Hy(s, t, l).then(function(g) {
          d || (d = !0, c[f] = g, --v || a(c));
        }, i);
      }), --v || a(c);
    });
    return o.error && i(o.value), n.promise;
  }
});
var Yy = D, Xy = Vr.CONSTRUCTOR, Ha = Zt, Jy = Ge, Qy = N, Zy = oe, $s = Ha && Ha.prototype;
Yy({ target: "Promise", proto: !0, forced: Xy, real: !0 }, {
  catch: function(e) {
    return this.then(void 0, e);
  }
});
if (Qy(Ha)) {
  var bs = Jy("Promise").prototype.catch;
  $s.catch !== bs && Zy($s, "catch", bs, { unsafe: !0 });
}
var em = D, rm = F, tm = Te, nm = pr, am = Ni, im = tn, om = ll;
em({ target: "Promise", stat: !0, forced: om }, {
  race: function(r) {
    var t = this, n = nm.f(t), a = n.reject, i = am(function() {
      var o = tm(t.resolve);
      im(r, function(s) {
        rm(o, t, s).then(n.resolve, a);
      });
    });
    return i.error && a(i.value), n.promise;
  }
});
var sm = D, um = pr, cm = Vr.CONSTRUCTOR;
sm({ target: "Promise", stat: !0, forced: cm }, {
  reject: function(r) {
    var t = um.f(this), n = t.reject;
    return n(r), t.promise;
  }
});
var lm = K, vm = H, fm = pr, dm = function(e, r) {
  if (lm(e), vm(r) && r.constructor === e) return r;
  var t = fm.f(e), n = t.resolve;
  return n(r), t.promise;
}, hm = D, pm = Ge, gm = Vr.CONSTRUCTOR, ym = dm;
pm("Promise");
hm({ target: "Promise", stat: !0, forced: gm }, {
  resolve: function(r) {
    return ym(this, r);
  }
});
var mm = zr, $m = String, xe = function(e) {
  if (mm(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
  return $m(e);
}, vl = `	
\v\f\r                　\u2028\u2029\uFEFF`, bm = x, wm = fr, Sm = xe, za = vl, ws = bm("".replace), Em = RegExp("^[" + za + "]+"), Om = RegExp("(^|[^" + za + "])[" + za + "]+$"), Bn = function(e) {
  return function(r) {
    var t = Sm(wm(r));
    return e & 1 && (t = ws(t, Em, "")), e & 2 && (t = ws(t, Om, "$1")), t;
  };
}, Im = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: Bn(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: Bn(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: Bn(3)
}, Pm = Wt.PROPER, Tm = T, Ss = vl, Es = "​᠎", Rm = function(e) {
  return Tm(function() {
    return !!Ss[e]() || Es[e]() !== Es || Pm && Ss[e].name !== e;
  });
}, Cm = D, _m = Im.trim, xm = Rm;
Cm({ target: "String", proto: !0, forced: xm("trim") }, {
  trim: function() {
    return _m(this);
  }
});
var Pr = {
  tdGatewayUs: "/tdgateway/us",
  tdGatewayEu: "/tdgateway/eu",
  tdGatewayCa: "/tdgateway/ca",
  tdGatewayUsFed: "/tdgateway/usfed",
  tdChatSdk: "/tdchatsdk",
  tdReporter: "/tdreporter",
  twilioUs1: "/tdsocketprovider/us1/v3/wsconnect",
  twilioIe1: "/tdsocketprovider/ie1/v3/wsconnect",
  twilioMcsUs1: "/tdmcsprovider/us1",
  twilioMcsIe1: "/tdmcsprovider/ie1",
  twilioMediaUs1: "/tdmediaprovider/us1",
  twilioMediaIe1: "/tdmediaprovider/ie1"
};
function Lm(e, r) {
  return !e || !r ? !1 : e.contains ? e.contains(r) : e.childNodes ? Array.prototype.indexOf.call(e.childNodes, r) !== -1 : !1;
}
var Am = T, fl = function(e, r) {
  var t = [][e];
  return !!t && Am(function() {
    t.call(null, r || function() {
      return 1;
    }, 1);
  });
}, jm = D, Nm = x, km = Vt, Mm = be, Um = fl, Bm = Nm([].join), Dm = km !== Object, Fm = Dm || !Um("join", ",");
jm({ target: "Array", proto: !0, forced: Fm }, {
  join: function(r) {
    return Bm(Mm(this), r === void 0 ? "," : r);
  }
});
var Gm = Ce, Fi = Array.isArray || function(r) {
  return Gm(r) === "Array";
}, Os = Fi, Hm = Qt, zm = H, Wm = U, Km = Wm("species"), Is = Array, qm = function(e) {
  var r;
  return Os(e) && (r = e.constructor, Hm(r) && (r === Is || Os(r.prototype)) ? r = void 0 : zm(r) && (r = r[Km], r === null && (r = void 0))), r === void 0 ? Is : r;
}, Vm = qm, dl = function(e, r) {
  return new (Vm(e))(r === 0 ? 0 : r);
}, Ym = _e, Xm = x, Jm = Vt, Qm = Pe, Zm = hr, e$ = dl, Ps = Xm([].push), we = function(e) {
  var r = e === 1, t = e === 2, n = e === 3, a = e === 4, i = e === 6, o = e === 7, s = e === 5 || i;
  return function(c, u, v, l) {
    for (var f = Qm(c), d = Jm(f), g = Zm(d), $ = Ym(u, v), m = 0, S = l || e$, w = r ? S(c, g) : t || o ? S(c, 0) : void 0, P, _; g > m; m++) if ((s || m in d) && (P = d[m], _ = $(P, m, f), e))
      if (r) w[m] = _;
      else if (_) switch (e) {
        case 3:
          return !0;
        case 5:
          return P;
        case 6:
          return m;
        case 2:
          Ps(w, P);
      }
      else switch (e) {
        case 4:
          return !1;
        case 7:
          Ps(w, P);
      }
    return i ? -1 : n || a ? a : w;
  };
}, Gi = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: we(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: we(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: we(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: we(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: we(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: we(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: we(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: we(7)
}, r$ = T, t$ = U, n$ = Dt, a$ = t$("species"), nn = function(e) {
  return n$ >= 51 || !r$(function() {
    var r = [], t = r.constructor = {};
    return t[a$] = function() {
      return { foo: 1 };
    }, r[e](Boolean).foo !== 1;
  });
}, i$ = D, o$ = Gi.map, s$ = nn, u$ = s$("map");
i$({ target: "Array", proto: !0, forced: !u$ }, {
  map: function(r) {
    return o$(this, r, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var c$ = _c, l$ = Ti, an = Object.keys || function(r) {
  return c$(r, l$);
}, v$ = D, f$ = Pe, hl = an, d$ = T, h$ = d$(function() {
  hl(1);
});
v$({ target: "Object", stat: !0, forced: h$ }, {
  keys: function(r) {
    return hl(f$(r));
  }
});
function p$(e) {
  var r = e.charCodeAt(0);
  return r >= 65 && r <= 90;
}
function Ts(e) {
  var r = Uv(e).map(function(t, n) {
    return p$(t) ? n === 0 ? t.toLowerCase() : "-" + t.toLowerCase() : t;
  }).join("");
  return "--".concat(r);
}
function g$(e, r) {
  var t = Object.keys(r);
  return t.length ? t.reduce(function(n, a) {
    return a.indexOf("-") > -1 || a.indexOf("_") > -1 ? n : (e.style.setProperty(Ts(a), r[a]), k(k({}, n), {}, L({}, Ts(a), r[a])));
  }, {}) : {};
}
function pl(e, r) {
  var t;
  if (typeof e == "string" ? t = e.indexOf("#") > -1 ? document.querySelector(e) : document.getElementById(e) : t = e, t)
    return g$(t, r);
}
function y$(e) {
  var r = document.createElement("style");
  return r.id = e, r;
}
function Dn(e, r) {
  return r.querySelector("#".concat(e));
}
function m$(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document.head, n = Dn(r, t);
  if (n)
    return n.innerHTML = e, function() {
      var i = Dn(r, t);
      i && t.removeChild(i);
    };
  var a = y$(r);
  return a.innerHTML = e, t.appendChild(a), function() {
    var i = Dn(r, t);
    i && t.removeChild(i);
  };
}
function $$(e, r, t) {
  try {
    return JSON.parse(e);
  } catch {
    return r;
  }
}
var b$ = /* @__PURE__ */ function() {
  function e(r) {
    var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Dr(this, e), L(this, "_moving", !1), L(this, "_moved", !1), L(this, "_initialXY", [0, 0]), L(this, "_startXY", [0, 0]), L(this, "_boundaryValue", 5), L(this, "_rb", null), L(this, "_isPC", !0), this.current = r, this.options = n, this.onMoveStart = this.onMoveStart.bind(this), this.onMoving = this.onMoving.bind(this), this.onMoveEnd = this.onMoveEnd.bind(this), this.removeDocumentListeners = this.removeDocumentListeners.bind(this), this.current.addEventListener("mousedown", this.onMoveStart), this.current.addEventListener("touchstart", this.onMoveStart), this._rb = new ResizeObserver(function() {
      t.reset();
    }), this._rb.observe(document.body);
  }
  return Fr(e, [{
    key: "getEventInfo",
    value: function(t) {
      return t.touches ? (this._isPC = !1, {
        clientXY: [t.touches[0].clientX, t.touches[0].clientY]
      }) : (this._isPC = !0, {
        clientXY: [t.clientX, t.clientY]
      });
    }
  }, {
    key: "onMoveStart",
    value: function(t) {
      t.stopPropagation(), t.preventDefault(), this._initialXY = [this.current.offsetLeft, this.current.offsetTop], this._startXY = this.getEventInfo(t).clientXY, this._moved = !1, this.addDocumentListeners();
    }
  }, {
    key: "onMoving",
    value: function(t) {
      var n, a;
      t.stopPropagation(), t.preventDefault();
      var i = this.getEventInfo(t), o = i.clientXY, s = gi(o, 2), c = s[0], u = s[1], v = c - this._startXY[0], l = u - this._startXY[1];
      Math.abs(v) < this._boundaryValue && Math.abs(l) < this._boundaryValue || (this._moved || (this._moved = !0), this._moving = !0, this.current.style.left = Math.min(Math.max(0, this._initialXY[0] + v), window.innerWidth - this.current.offsetWidth) + "px", this.current.style.top = Math.min(Math.max(0, this._initialXY[1] + l), window.innerHeight - this.current.offsetHeight) + "px", (n = this.options) === null || n === void 0 || (a = n.onChange) === null || a === void 0 || a.call(n, "moving"));
    }
  }, {
    key: "onMoveEnd",
    value: function(t) {
      if (t.stopPropagation(), t.preventDefault(), this._moving) {
        var n, a;
        (n = this.options) === null || n === void 0 || (a = n.onChange) === null || a === void 0 || a.call(n, "moveEnded");
      }
      if (!this._moved) {
        var i, o;
        (i = this.options) === null || i === void 0 || (o = i.onClick) === null || o === void 0 || o.call(i);
      }
      this._moved = !1, this.removeDocumentListeners();
    }
  }, {
    key: "addDocumentListeners",
    value: function() {
      document.addEventListener("mousemove", this.onMoving, {
        passive: !1
      }), document.addEventListener("mouseup", this.onMoveEnd, {
        passive: !1
      }), this.current.addEventListener("touchmove", this.onMoving, {
        passive: !1
      }), this.current.addEventListener("touchend", this.onMoveEnd, {
        passive: !1
      });
    }
  }, {
    key: "removeDocumentListeners",
    value: function() {
      document.removeEventListener("mousemove", this.onMoving), document.removeEventListener("mouseup", this.onMoveEnd), this.current.removeEventListener("touchmove", this.onMoveEnd), this.current.removeEventListener("touchend", this.onMoveEnd);
    }
  }, {
    key: "reset",
    value: function() {
      this._isPC && (this.current.style.top = "", this.current.style.left = "");
    }
  }, {
    key: "destroy",
    value: function() {
      var t;
      this.current.removeEventListener("mousedown", this.onMoveStart), this.current.removeEventListener("touchstart", this.onMoveStart), this.removeDocumentListeners(), (t = this._rb) === null || t === void 0 || t.disconnect(), this._rb = null;
    }
  }]);
}(), gl = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
}, w$ = Ft, Fn = w$("span").classList, Rs = Fn && Fn.constructor && Fn.constructor.prototype, yl = Rs === Object.prototype ? void 0 : Rs, S$ = Gi.forEach, E$ = fl, O$ = E$("forEach"), I$ = O$ ? [].forEach : function(r) {
  return S$(this, r, arguments.length > 1 ? arguments[1] : void 0);
}, Cs = A, _s = gl, P$ = yl, Gn = I$, T$ = dr, ml = function(e) {
  if (e && e.forEach !== Gn) try {
    T$(e, "forEach", Gn);
  } catch {
    e.forEach = Gn;
  }
};
for (var Hn in _s)
  _s[Hn] && ml(Cs[Hn] && Cs[Hn].prototype);
ml(P$);
function R$(e, r) {
  var t = k({}, e);
  return Object.keys(t).forEach(function(n) {
    (e[n] === void 0 || e[n] === null) && delete t[n], r != null && r.removeEmptyString && e[n] === "" && delete t[n];
  }), t;
}
function C$(e) {
  return new Promise(function(r) {
    e <= 0 ? r(!0) : setTimeout(function() {
      return r(!0);
    }, e);
  });
}
function _$(e) {
  return Math.min(2e3 * e, 3e4);
}
function x$(e) {
  return Wa.apply(this, arguments);
}
function Wa() {
  return Wa = V(/* @__PURE__ */ R().mark(function e(r) {
    var t, n, a, i, o, s, c, u, v = arguments;
    return R().wrap(function(f) {
      for (; ; ) switch (f.prev = f.next) {
        case 0:
          if (t = v.length > 1 && v[1] !== void 0 ? v[1] : {}, n = t.defaultRetry, a = n === void 0 ? 5 : n, i = t.retryDelay, o = i === void 0 ? _$ : i, s = t.onError, !(a <= 0)) {
            f.next = 6;
            break;
          }
          return f.next = 5, r();
        case 5:
          return f.abrupt("return", f.sent);
        case 6:
          return c = 0, u = /* @__PURE__ */ function() {
            var d = V(/* @__PURE__ */ R().mark(function g() {
              return R().wrap(function(m) {
                for (; ; ) switch (m.prev = m.next) {
                  case 0:
                    return m.prev = 0, m.next = 3, r();
                  case 3:
                    return m.abrupt("return", m.sent);
                  case 6:
                    if (m.prev = 6, m.t0 = m.catch(0), s == null || s(m.t0, c), c !== a) {
                      m.next = 11;
                      break;
                    }
                    throw m.t0;
                  case 11:
                    return c += 1, m.next = 14, C$(typeof o == "function" ? o(c) : o);
                  case 14:
                    return m.next = 16, u();
                  case 16:
                    return m.abrupt("return", m.sent);
                  case 17:
                  case "end":
                    return m.stop();
                }
              }, g, null, [[0, 6]]);
            }));
            return function() {
              return d.apply(this, arguments);
            };
          }(), f.abrupt("return", u());
        case 9:
        case "end":
          return f.stop();
      }
    }, e);
  })), Wa.apply(this, arguments);
}
var q = {
  Topic: "WidgetCommunication",
  Methods: {
    Maximize: "Maximize",
    Minimize: "Minimize",
    GetAllConfig: "GetAllConfig",
    GetCredentials: "GetCredentials",
    GetTdAccessToken: "GetTdAccessToken",
    SetBadge: "SetBadge",
    FrameOpened: "FrameOpened",
    DownloadTranscript: "DownloadTranscript",
    UpdatePreviewConfig: "UpdatePreviewConfig",
    PreviewReady: "PreviewReady",
    ConversationStart: "ConversationStart",
    FrameReady: "FrameReady",
    FrameResize: "FrameResize",
    UpdateAppConfigs: "UpdateAppConfigs",
    UpdateContext: "UpdateContext",
    OnSend: "OnSend",
    UpdateMessage: "UpdateMessage",
    OnComposer: "OnComposer"
  }
}, Hi = { exports: {} }, sr = typeof Reflect == "object" ? Reflect : null, xs = sr && typeof sr.apply == "function" ? sr.apply : function(r, t, n) {
  return Function.prototype.apply.call(r, t, n);
}, Et;
sr && typeof sr.ownKeys == "function" ? Et = sr.ownKeys : Object.getOwnPropertySymbols ? Et = function(r) {
  return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r));
} : Et = function(r) {
  return Object.getOwnPropertyNames(r);
};
function L$(e) {
  console && console.warn && console.warn(e);
}
var $l = Number.isNaN || function(r) {
  return r !== r;
};
function C() {
  C.init.call(this);
}
Hi.exports = C;
Hi.exports.once = k$;
C.EventEmitter = C;
C.prototype._events = void 0;
C.prototype._eventsCount = 0;
C.prototype._maxListeners = void 0;
var Ls = 10;
function on(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(C, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Ls;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || $l(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Ls = e;
  }
});
C.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
C.prototype.setMaxListeners = function(r) {
  if (typeof r != "number" || r < 0 || $l(r))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + r + ".");
  return this._maxListeners = r, this;
};
function bl(e) {
  return e._maxListeners === void 0 ? C.defaultMaxListeners : e._maxListeners;
}
C.prototype.getMaxListeners = function() {
  return bl(this);
};
C.prototype.emit = function(r) {
  for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
  var a = r === "error", i = this._events;
  if (i !== void 0)
    a = a && i.error === void 0;
  else if (!a)
    return !1;
  if (a) {
    var o;
    if (t.length > 0 && (o = t[0]), o instanceof Error)
      throw o;
    var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw s.context = o, s;
  }
  var c = i[r];
  if (c === void 0)
    return !1;
  if (typeof c == "function")
    xs(c, this, t);
  else
    for (var u = c.length, v = Il(c, u), n = 0; n < u; ++n)
      xs(v[n], this, t);
  return !0;
};
function wl(e, r, t, n) {
  var a, i, o;
  if (on(t), i = e._events, i === void 0 ? (i = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (i.newListener !== void 0 && (e.emit(
    "newListener",
    r,
    t.listener ? t.listener : t
  ), i = e._events), o = i[r]), o === void 0)
    o = i[r] = t, ++e._eventsCount;
  else if (typeof o == "function" ? o = i[r] = n ? [t, o] : [o, t] : n ? o.unshift(t) : o.push(t), a = bl(e), a > 0 && o.length > a && !o.warned) {
    o.warned = !0;
    var s = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(r) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    s.name = "MaxListenersExceededWarning", s.emitter = e, s.type = r, s.count = o.length, L$(s);
  }
  return e;
}
C.prototype.addListener = function(r, t) {
  return wl(this, r, t, !1);
};
C.prototype.on = C.prototype.addListener;
C.prototype.prependListener = function(r, t) {
  return wl(this, r, t, !0);
};
function A$() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Sl(e, r, t) {
  var n = { fired: !1, wrapFn: void 0, target: e, type: r, listener: t }, a = A$.bind(n);
  return a.listener = t, n.wrapFn = a, a;
}
C.prototype.once = function(r, t) {
  return on(t), this.on(r, Sl(this, r, t)), this;
};
C.prototype.prependOnceListener = function(r, t) {
  return on(t), this.prependListener(r, Sl(this, r, t)), this;
};
C.prototype.removeListener = function(r, t) {
  var n, a, i, o, s;
  if (on(t), a = this._events, a === void 0)
    return this;
  if (n = a[r], n === void 0)
    return this;
  if (n === t || n.listener === t)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete a[r], a.removeListener && this.emit("removeListener", r, n.listener || t));
  else if (typeof n != "function") {
    for (i = -1, o = n.length - 1; o >= 0; o--)
      if (n[o] === t || n[o].listener === t) {
        s = n[o].listener, i = o;
        break;
      }
    if (i < 0)
      return this;
    i === 0 ? n.shift() : j$(n, i), n.length === 1 && (a[r] = n[0]), a.removeListener !== void 0 && this.emit("removeListener", r, s || t);
  }
  return this;
};
C.prototype.off = C.prototype.removeListener;
C.prototype.removeAllListeners = function(r) {
  var t, n, a;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[r] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[r]), this;
  if (arguments.length === 0) {
    var i = Object.keys(n), o;
    for (a = 0; a < i.length; ++a)
      o = i[a], o !== "removeListener" && this.removeAllListeners(o);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (t = n[r], typeof t == "function")
    this.removeListener(r, t);
  else if (t !== void 0)
    for (a = t.length - 1; a >= 0; a--)
      this.removeListener(r, t[a]);
  return this;
};
function El(e, r, t) {
  var n = e._events;
  if (n === void 0)
    return [];
  var a = n[r];
  return a === void 0 ? [] : typeof a == "function" ? t ? [a.listener || a] : [a] : t ? N$(a) : Il(a, a.length);
}
C.prototype.listeners = function(r) {
  return El(this, r, !0);
};
C.prototype.rawListeners = function(r) {
  return El(this, r, !1);
};
C.listenerCount = function(e, r) {
  return typeof e.listenerCount == "function" ? e.listenerCount(r) : Ol.call(e, r);
};
C.prototype.listenerCount = Ol;
function Ol(e) {
  var r = this._events;
  if (r !== void 0) {
    var t = r[e];
    if (typeof t == "function")
      return 1;
    if (t !== void 0)
      return t.length;
  }
  return 0;
}
C.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Et(this._events) : [];
};
function Il(e, r) {
  for (var t = new Array(r), n = 0; n < r; ++n)
    t[n] = e[n];
  return t;
}
function j$(e, r) {
  for (; r + 1 < e.length; r++)
    e[r] = e[r + 1];
  e.pop();
}
function N$(e) {
  for (var r = new Array(e.length), t = 0; t < r.length; ++t)
    r[t] = e[t].listener || e[t];
  return r;
}
function k$(e, r) {
  return new Promise(function(t, n) {
    function a(o) {
      e.removeListener(r, i), n(o);
    }
    function i() {
      typeof e.removeListener == "function" && e.removeListener("error", a), t([].slice.call(arguments));
    }
    Pl(e, r, i, { once: !0 }), r !== "error" && M$(e, a, { once: !0 });
  });
}
function M$(e, r, t) {
  typeof e.on == "function" && Pl(e, "error", r, t);
}
function Pl(e, r, t, n) {
  if (typeof e.on == "function")
    n.once ? e.once(r, t) : e.on(r, t);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(r, function a(i) {
      n.once && e.removeEventListener(r, a), t(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var U$ = Hi.exports;
const B$ = /* @__PURE__ */ Dv(U$);
var Lt = function() {
  return Lt = Object.assign || function(r) {
    for (var t, n = 1, a = arguments.length; n < a; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, Lt.apply(this, arguments);
};
function As(e, r, t, n) {
  function a(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function s(v) {
      try {
        u(n.next(v));
      } catch (l) {
        o(l);
      }
    }
    function c(v) {
      try {
        u(n.throw(v));
      } catch (l) {
        o(l);
      }
    }
    function u(v) {
      v.done ? i(v.value) : a(v.value).then(s, c);
    }
    u((n = n.apply(e, [])).next());
  });
}
function js(e, r) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, a, i, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(v) {
      return c([u, v]);
    };
  }
  function c(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (t = 0)), t; ) try {
      if (n = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done) return i;
      switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
        case 0:
        case 1:
          i = u;
          break;
        case 4:
          return t.label++, { value: u[1], done: !1 };
        case 5:
          t.label++, a = u[1], u = [0];
          continue;
        case 7:
          u = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            t = 0;
            continue;
          }
          if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
            t.label = u[1];
            break;
          }
          if (u[0] === 6 && t.label < i[1]) {
            t.label = i[1], i = u;
            break;
          }
          if (i && t.label < i[2]) {
            t.label = i[2], t.ops.push(u);
            break;
          }
          i[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      u = r.call(e, t);
    } catch (v) {
      u = [6, v], a = 0;
    } finally {
      n = i = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var D$ = (
  /** @class */
  function() {
    function e(r) {
      this.options = r, this._traceId = 0, this._methods = /* @__PURE__ */ new Map(), this._emitter = new B$(), this._handlerOnMessageByBound = this.handlerOnMessage.bind(this), this.createService(), this.getListener().addEventListener("message", this._handlerOnMessageByBound, !1);
    }
    return e.jsonParseData = function(r, t) {
      try {
        return JSON.parse(r);
      } catch {
        return t;
      }
    }, e.jsonStringifyData = function(r) {
      try {
        return JSON.stringify(r);
      } catch {
        return "";
      }
    }, e.runHandler = function(r) {
      return As(this, void 0, void 0, function() {
        var t, n;
        return js(this, function(a) {
          switch (a.label) {
            case 0:
              return a.trys.push([0, 2, , 3]), [4, r()];
            case 1:
              return t = a.sent(), [2, { data: t, error: null }];
            case 2:
              return n = a.sent(), [2, { error: typeof n == "string" ? n : n.message }];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.destroy = function() {
      this._emitter.removeAllListeners(), this._methods.clear(), this.getListener().removeEventListener("message", this._handlerOnMessageByBound, !1);
    }, e.prototype.register = function(r, t) {
      this._methods.set(r, t), this.log("Register ".concat(r), this._methods);
    }, e.prototype.unregister = function(r) {
      this._methods.delete(r), this.log("Unregister ".concat(r), this._methods);
    }, e.prototype.trigger = function(r) {
      for (var t = this, n = [], a = 1; a < arguments.length; a++)
        n[a - 1] = arguments[a];
      return new Promise(function(i) {
        var o = t.createId();
        t.sendMessage({ id: o, method: r, payload: n, type: "request" }), t.log("Trigger ".concat(r, " | ").concat(o), n), t._emitter.once("response_".concat(o), function(s) {
          i(s.payload), t.log("Receive ".concat(r, " | ").concat(o), e.jsonStringifyData(s));
        });
      });
    }, e.prototype.createId = function() {
      return "".concat(this.options.name, "_").concat(this._traceId++);
    }, e.prototype.createService = function() {
      var r = this;
      this._emitter.on(this.options.topic, function(t) {
        return As(r, void 0, void 0, function() {
          var n, a, i, o, s;
          return js(this, function(c) {
            switch (c.label) {
              case 0:
                return n = t.id, a = t.payload, i = t.method, o = this._methods.get(i), o ? [4, e.runHandler(function() {
                  return o.apply(void 0, a);
                })] : [3, 2];
              case 1:
                return s = c.sent(), this.sendMessage({ id: n, method: i, payload: s, type: "response" }), [3, 3];
              case 2:
                this.sendMessage({
                  id: n,
                  method: i,
                  payload: { error: "No found method in service" },
                  type: "response"
                }), c.label = 3;
              case 3:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      });
    }, e.prototype.sendMessage = function(r) {
      var t = this.options, n = t.sender, a = t.origin, i = t.topic, o = e.jsonStringifyData(Lt(Lt({}, r), { topic: i }));
      if (!n.postMessage)
        throw new Error("The sender no found postMessage method please check the sender option");
      o && n.postMessage(o, a || "*");
    }, e.prototype.handlerOnMessage = function(r) {
      var t = r.data;
      if (t) {
        var n = e.jsonParseData(t, null);
        if (!(!n || n.topic !== this.options.topic)) {
          var a = n.id, i = n.type;
          i === "request" && this._emitter.emit(this.options.topic, n), i === "response" && this._emitter.emit("response_".concat(a), n);
        }
      }
    }, e.prototype.getListener = function() {
      return this.options.listener || window;
    }, e.prototype.log = function(r) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var a = this.options, i = a.debug, o = a.name;
      if (i) {
        var s = (/* @__PURE__ */ new Date()).toISOString(), c = "[RPC] [".concat(s, "] [").concat(o, "] ").concat(r);
        console.groupCollapsed(c), t != null && t.length && console.info.apply(console, t), console.groupEnd();
      }
    }, Object.defineProperty(e.prototype, "methods", {
      get: function() {
        return this._methods;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "emitter", {
      get: function() {
        return this._emitter;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }()
), F$ = TypeError, G$ = 9007199254740991, H$ = function(e) {
  if (e > G$) throw F$("Maximum allowed index exceeded");
  return e;
}, z$ = G, W$ = fe, K$ = Hr, zi = function(e, r, t) {
  z$ ? W$.f(e, r, K$(0, t)) : e[r] = t;
}, q$ = D, V$ = T, Y$ = Fi, X$ = H, J$ = Pe, Q$ = hr, Ns = H$, ks = zi, Z$ = dl, eb = nn, rb = U, tb = Dt, Tl = rb("isConcatSpreadable"), nb = tb >= 51 || !V$(function() {
  var e = [];
  return e[Tl] = !1, e.concat()[0] !== e;
}), ab = function(e) {
  if (!X$(e)) return !1;
  var r = e[Tl];
  return r !== void 0 ? !!r : Y$(e);
}, ib = !nb || !eb("concat");
q$({ target: "Array", proto: !0, arity: 1, forced: ib }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function(r) {
    var t = J$(this), n = Z$(t, 0), a = 0, i, o, s, c, u;
    for (i = -1, s = arguments.length; i < s; i++)
      if (u = i === -1 ? t : arguments[i], ab(u))
        for (c = Q$(u), Ns(a + c), o = 0; o < c; o++, a++) o in u && ks(n, a, u[o]);
      else
        Ns(a + 1), ks(n, a++, u);
    return n.length = a, n;
  }
});
var ob = D, Ms = Fi, sb = Qt, ub = H, Us = Rc, cb = hr, lb = be, vb = zi, fb = U, db = nn, hb = qr, pb = db("slice"), gb = fb("species"), zn = Array, yb = Math.max;
ob({ target: "Array", proto: !0, forced: !pb }, {
  slice: function(r, t) {
    var n = lb(this), a = cb(n), i = Us(r, a), o = Us(t === void 0 ? a : t, a), s, c, u;
    if (Ms(n) && (s = n.constructor, sb(s) && (s === zn || Ms(s.prototype)) ? s = void 0 : ub(s) && (s = s[gb], s === null && (s = void 0)), s === zn || s === void 0))
      return hb(n, i, o);
    for (c = new (s === void 0 ? zn : s)(yb(o - i, 0)), u = 0; i < o; i++, u++) i in n && vb(c, u, n[i]);
    return c.length = u, c;
  }
});
var mb = T, $b = !mb(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), bb = Y, wb = N, Sb = Pe, Eb = Oi, Ob = $b, Bs = Eb("IE_PROTO"), Ka = Object, Ib = Ka.prototype, Wi = Ob ? Ka.getPrototypeOf : function(e) {
  var r = Sb(e);
  if (bb(r, Bs)) return r[Bs];
  var t = r.constructor;
  return wb(t) && r instanceof t ? t.prototype : r instanceof Ka ? Ib : null;
}, Rl = G, Pb = T, Cl = x, Tb = Wi, Rb = an, Cb = be, _b = qt.f, _l = Cl(_b), xb = Cl([].push), Lb = Rl && Pb(function() {
  var e = /* @__PURE__ */ Object.create(null);
  return e[2] = 2, !_l(e, 2);
}), Ds = function(e) {
  return function(r) {
    for (var t = Cb(r), n = Rb(t), a = Lb && Tb(t) === null, i = n.length, o = 0, s = [], c; i > o; )
      c = n[o++], (!Rl || (a ? c in t : _l(t, c))) && xb(s, e ? [c, t[c]] : t[c]);
    return s;
  };
}, Ab = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: Ds(!0),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: Ds(!1)
}, jb = D, Nb = Ab.entries;
jb({ target: "Object", stat: !0 }, {
  entries: function(r) {
    return Nb(r);
  }
});
var kb = K, xl = function() {
  var e = kb(this), r = "";
  return e.hasIndices && (r += "d"), e.global && (r += "g"), e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.dotAll && (r += "s"), e.unicode && (r += "u"), e.unicodeSets && (r += "v"), e.sticky && (r += "y"), r;
}, Ki = T, Mb = A, qi = Mb.RegExp, Vi = Ki(function() {
  var e = qi("a", "y");
  return e.lastIndex = 2, e.exec("abcd") !== null;
}), Ub = Vi || Ki(function() {
  return !qi("a", "y").sticky;
}), Bb = Vi || Ki(function() {
  var e = qi("^r", "gy");
  return e.lastIndex = 2, e.exec("str") !== null;
}), Db = {
  BROKEN_CARET: Bb,
  MISSED_STICKY: Ub,
  UNSUPPORTED_Y: Vi
}, Ll = {}, Fb = G, Gb = yc, Hb = fe, zb = K, Wb = be, Kb = an;
Ll.f = Fb && !Gb ? Object.defineProperties : function(r, t) {
  zb(r);
  for (var n = Wb(t), a = Kb(t), i = a.length, o = 0, s; i > o; ) Hb.f(r, s = a[o++], n[s]);
  return r;
};
var qb = K, Vb = Ll, Fs = Ti, Yb = Kt, Xb = Bc, Jb = Ft, Qb = Oi, Gs = ">", Hs = "<", qa = "prototype", Va = "script", Al = Qb("IE_PROTO"), Wn = function() {
}, jl = function(e) {
  return Hs + Va + Gs + e + Hs + "/" + Va + Gs;
}, zs = function(e) {
  e.write(jl("")), e.close();
  var r = e.parentWindow.Object;
  return e = null, r;
}, Zb = function() {
  var e = Jb("iframe"), r = "java" + Va + ":", t;
  return e.style.display = "none", Xb.appendChild(e), e.src = String(r), t = e.contentWindow.document, t.open(), t.write(jl("document.F=Object")), t.close(), t.F;
}, lt, Ot = function() {
  try {
    lt = new ActiveXObject("htmlfile");
  } catch {
  }
  Ot = typeof document < "u" ? document.domain && lt ? zs(lt) : Zb() : zs(lt);
  for (var e = Fs.length; e--; ) delete Ot[qa][Fs[e]];
  return Ot();
};
Yb[Al] = !0;
var Xr = Object.create || function(r, t) {
  var n;
  return r !== null ? (Wn[qa] = qb(r), n = new Wn(), Wn[qa] = null, n[Al] = r) : n = Ot(), t === void 0 ? n : Vb.f(n, t);
}, e0 = T, r0 = A, t0 = r0.RegExp, n0 = e0(function() {
  var e = t0(".", "s");
  return !(e.dotAll && e.test(`
`) && e.flags === "s");
}), a0 = T, i0 = A, o0 = i0.RegExp, s0 = a0(function() {
  var e = o0("(?<a>b)", "g");
  return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
}), ar = F, sn = x, u0 = xe, c0 = xl, l0 = Db, v0 = $i, f0 = Xr, d0 = Re.get, h0 = n0, p0 = s0, g0 = v0("native-string-replace", String.prototype.replace), At = RegExp.prototype.exec, Ya = At, y0 = sn("".charAt), m0 = sn("".indexOf), $0 = sn("".replace), Kn = sn("".slice), Xa = function() {
  var e = /a/, r = /b*/g;
  return ar(At, e, "a"), ar(At, r, "a"), e.lastIndex !== 0 || r.lastIndex !== 0;
}(), Nl = l0.BROKEN_CARET, Ja = /()??/.exec("")[1] !== void 0, b0 = Xa || Ja || Nl || h0 || p0;
b0 && (Ya = function(r) {
  var t = this, n = d0(t), a = u0(r), i = n.raw, o, s, c, u, v, l, f;
  if (i)
    return i.lastIndex = t.lastIndex, o = ar(Ya, i, a), t.lastIndex = i.lastIndex, o;
  var d = n.groups, g = Nl && t.sticky, $ = ar(c0, t), m = t.source, S = 0, w = a;
  if (g && ($ = $0($, "y", ""), m0($, "g") === -1 && ($ += "g"), w = Kn(a, t.lastIndex), t.lastIndex > 0 && (!t.multiline || t.multiline && y0(a, t.lastIndex - 1) !== `
`) && (m = "(?: " + m + ")", w = " " + w, S++), s = new RegExp("^(?:" + m + ")", $)), Ja && (s = new RegExp("^" + m + "$(?!\\s)", $)), Xa && (c = t.lastIndex), u = ar(At, g ? s : t, w), g ? u ? (u.input = Kn(u.input, S), u[0] = Kn(u[0], S), u.index = t.lastIndex, t.lastIndex += u[0].length) : t.lastIndex = 0 : Xa && u && (t.lastIndex = t.global ? u.index + u[0].length : c), Ja && u && u.length > 1 && ar(g0, u[0], s, function() {
    for (v = 1; v < arguments.length - 2; v++)
      arguments[v] === void 0 && (u[v] = void 0);
  }), u && d)
    for (u.groups = l = f0(null), v = 0; v < d.length; v++)
      f = d[v], l[f[0]] = u[f[1]];
  return u;
});
var Yi = Ya, w0 = D, Ws = Yi;
w0({ target: "RegExp", proto: !0, forced: /./.exec !== Ws }, {
  exec: Ws
});
var Ks = F, qs = oe, S0 = Yi, Vs = T, kl = U, E0 = dr, O0 = kl("species"), qn = RegExp.prototype, I0 = function(e, r, t, n) {
  var a = kl(e), i = !Vs(function() {
    var u = {};
    return u[a] = function() {
      return 7;
    }, ""[e](u) !== 7;
  }), o = i && !Vs(function() {
    var u = !1, v = /a/;
    return e === "split" && (v = {}, v.constructor = {}, v.constructor[O0] = function() {
      return v;
    }, v.flags = "", v[a] = /./[a]), v.exec = function() {
      return u = !0, null;
    }, v[a](""), !u;
  });
  if (!i || !o || t) {
    var s = /./[a], c = r(a, ""[e], function(u, v, l, f, d) {
      var g = v.exec;
      return g === S0 || g === qn.exec ? i && !d ? { done: !0, value: Ks(s, v, l, f) } : { done: !0, value: Ks(u, l, v, f) } : { done: !1 };
    });
    qs(String.prototype, e, c[0]), qs(qn, a, c[1]);
  }
  n && E0(qn[a], "sham", !0);
}, Xi = x, P0 = Xt, T0 = xe, R0 = fr, C0 = Xi("".charAt), Ys = Xi("".charCodeAt), _0 = Xi("".slice), Xs = function(e) {
  return function(r, t) {
    var n = T0(R0(r)), a = P0(t), i = n.length, o, s;
    return a < 0 || a >= i ? e ? "" : void 0 : (o = Ys(n, a), o < 55296 || o > 56319 || a + 1 === i || (s = Ys(n, a + 1)) < 56320 || s > 57343 ? e ? C0(n, a) : o : e ? _0(n, a, a + 2) : (o - 55296 << 10) + (s - 56320) + 65536);
  };
}, Ji = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: Xs(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: Xs(!0)
}, x0 = Ji.charAt, L0 = function(e, r, t) {
  return r + (t ? x0(e, r).length : 1);
}, Qi = x, A0 = Pe, j0 = Math.floor, Vn = Qi("".charAt), N0 = Qi("".replace), Yn = Qi("".slice), k0 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, M0 = /\$([$&'`]|\d{1,2})/g, U0 = function(e, r, t, n, a, i) {
  var o = t + e.length, s = n.length, c = M0;
  return a !== void 0 && (a = A0(a), c = k0), N0(i, c, function(u, v) {
    var l;
    switch (Vn(v, 0)) {
      case "$":
        return "$";
      case "&":
        return e;
      case "`":
        return Yn(r, 0, t);
      case "'":
        return Yn(r, o);
      case "<":
        l = a[Yn(v, 1, -1)];
        break;
      default:
        var f = +v;
        if (f === 0) return u;
        if (f > s) {
          var d = j0(f / 10);
          return d === 0 ? u : d <= s ? n[d - 1] === void 0 ? Vn(v, 1) : n[d - 1] + Vn(v, 1) : u;
        }
        l = n[f - 1];
    }
    return l === void 0 ? "" : l;
  });
}, Js = F, B0 = K, D0 = N, F0 = Ce, G0 = Yi, H0 = TypeError, z0 = function(e, r) {
  var t = e.exec;
  if (D0(t)) {
    var n = Js(t, e, r);
    return n !== null && B0(n), n;
  }
  if (F0(e) === "RegExp") return Js(G0, e, r);
  throw new H0("RegExp#exec called on incompatible receiver");
}, W0 = Uc, Qs = F, un = x, K0 = I0, q0 = T, V0 = K, Y0 = N, X0 = Fe, J0 = Xt, Q0 = Cc, Ye = xe, Z0 = fr, ew = L0, rw = zt, tw = U0, nw = z0, aw = U, Qa = aw("replace"), iw = Math.max, ow = Math.min, sw = un([].concat), Xn = un([].push), Zs = un("".indexOf), eu = un("".slice), uw = function(e) {
  return e === void 0 ? e : String(e);
}, cw = function() {
  return "a".replace(/./, "$0") === "$0";
}(), ru = function() {
  return /./[Qa] ? /./[Qa]("a", "$0") === "" : !1;
}(), lw = !q0(function() {
  var e = /./;
  return e.exec = function() {
    var r = [];
    return r.groups = { a: "7" }, r;
  }, "".replace(e, "$<a>") !== "7";
});
K0("replace", function(e, r, t) {
  var n = ru ? "$" : "$0";
  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function(i, o) {
      var s = Z0(this), c = X0(i) ? void 0 : rw(i, Qa);
      return c ? Qs(c, i, s, o) : Qs(r, Ye(s), i, o);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function(a, i) {
      var o = V0(this), s = Ye(a);
      if (typeof i == "string" && Zs(i, n) === -1 && Zs(i, "$<") === -1) {
        var c = t(r, o, s, i);
        if (c.done) return c.value;
      }
      var u = Y0(i);
      u || (i = Ye(i));
      var v = o.global, l;
      v && (l = o.unicode, o.lastIndex = 0);
      for (var f = [], d; d = nw(o, s), !(d === null || (Xn(f, d), !v)); ) {
        var g = Ye(d[0]);
        g === "" && (o.lastIndex = ew(s, Q0(o.lastIndex), l));
      }
      for (var $ = "", m = 0, S = 0; S < f.length; S++) {
        d = f[S];
        for (var w = Ye(d[0]), P = iw(ow(J0(d.index), s.length), 0), _ = [], ue, M = 1; M < d.length; M++) Xn(_, uw(d[M]));
        var O = d.groups;
        if (u) {
          var j = sw([w], _, P, s);
          O !== void 0 && Xn(j, O), ue = Ye(W0(i, void 0, j));
        } else
          ue = tw(w, s, P, _, O, i);
        P >= m && ($ += eu(s, m, P) + ue, m = P + w.length);
      }
      return $ + eu(s, m);
    }
  ];
}, !lw || !cw || ru);
var vw = /* @__PURE__ */ function() {
  function e() {
    Dr(this, e), L(this, "appConfig", {}), L(this, "touchpoint", null), L(this, "appProps", null), L(this, "context", {}), L(this, "participantName", "");
  }
  return Fr(e, [{
    key: "setAppConfig",
    value: function(t) {
      var n, a = (t == null ? void 0 : t.styles) || {};
      return this.appConfig = k(k(k({}, this.appConfig), t), {}, {
        styles: Object.keys(a).length ? k(k({}, (n = this.appConfig) === null || n === void 0 ? void 0 : n.styles), a) : {}
      }), this.appConfig;
    }
  }, {
    key: "setTouchpoint",
    value: function(t) {
      this.touchpoint = t;
    }
  }, {
    key: "setParticipantName",
    value: function(t) {
      this.participantName = t;
    }
  }, {
    key: "setAppProps",
    value: function(t) {
      this.appProps = t;
    }
  }, {
    key: "getAllConfig",
    value: function() {
      return {
        appConfig: this.appConfig,
        touchpoint: this.touchpoint,
        context: this.context,
        appProps: this.appProps,
        participantName: this.participantName,
        injectorWindowHref: window.location.href,
        injectorWindowHostname: window.location.hostname
      };
    }
  }, {
    key: "setContextParam",
    value: function(t) {
      this.context = t;
    }
  }, {
    key: "clearAll",
    value: function() {
      this.appConfig = {}, this.touchpoint = null, this.context = {}, this.participantName = "";
    }
  }]);
}();
const Ee = new vw();
var fw = L(L(L(L({}, "td-us-1", "https://api.talkdeskapp.com"), "td-eu-1", "https://api.talkdeskapp.eu"), "td-ca-1", "https://api.talkdeskappca.com"), "td-usfed-1", "https://api.talkdeskapp-pubsec.com"), dw = L(L(L(L({}, "td-us-1", Pr.tdGatewayUs), "td-eu-1", Pr.tdGatewayEu), "td-ca-1", Pr.tdGatewayCa), "td-usfed-1", Pr.tdGatewayUsFed);
function hw(e, r) {
  return r ? "//".concat(r).concat(dw[e]) : fw[e];
}
var Ml = /* @__PURE__ */ function(e) {
  return e.TEXT = "TEXT", e.JSON = "JSON", e.BLOB = "BLOB", e.ARRAY_BUFFER = "ARRAY_BUFFER", e;
}(Ml || {}), Za = /* @__PURE__ */ function(e) {
  return e.GET = "GET", e.POST = "POST", e;
}(Za || {}), pw = {
  "Content-Type": "application/json"
}, gw = /* @__PURE__ */ function(e) {
  function r(t, n) {
    var a;
    return Dr(this, r), a = Tv(this, r, [t]), L(a, "code", void 0), L(a, "response", void 0), a.code = n.code, a.response = n.response, a;
  }
  return Cv(r, e), Fr(r);
}(/* @__PURE__ */ Ca(Error));
function tu(e) {
  var r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(t) {
    return r[t];
  });
}
function yw(e) {
  return Object.entries(e).reduce(function(r, t) {
    var n = gi(t, 2), a = n[0], i = n[1];
    return r.push("".concat(tu(a), "=").concat(tu(i))), r;
  }, []).join("&");
}
function mw(e) {
  return e >= 200 && e < 300;
}
function $w(e) {
  var r = Ee.getAllConfig(), t = r.appProps, n = hw(t == null ? void 0 : t.region, t == null ? void 0 : t.proxyHost);
  return e ? n + e : n;
}
function bw(e) {
  var r = e.url, t = e.params, n = $w(r);
  if (t) {
    var a = yw(t), i = n.indexOf("#");
    i !== -1 && (n = n.slice(0, i)), n += (n.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return n;
}
function ww(e) {
  var r = e.data;
  return r ? JSON.stringify(r) : void 0;
}
function Sw(e) {
  var r = e.token, t = k({}, pw);
  return r && (t.Authorization = "Bearer ".concat(r)), t;
}
function Ew() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.responseType || "JSON", t = e.method || "GET", n = bw(e), a = ww(e), i = Sw(e);
  return {
    url: n,
    method: t,
    body: a,
    headers: i,
    responseType: r
  };
}
function Ow(e) {
  return ei.apply(this, arguments);
}
function ei() {
  return ei = V(/* @__PURE__ */ R().mark(function e(r) {
    var t, n, a = arguments;
    return R().wrap(function(o) {
      for (; ; ) switch (o.prev = o.next) {
        case 0:
          t = a.length > 1 && a[1] !== void 0 ? a[1] : "JSON", o.t0 = t, o.next = o.t0 === "TEXT" ? 4 : o.t0 === "JSON" ? 8 : o.t0 === "BLOB" ? 12 : o.t0 === "ARRAY_BUFFER" ? 16 : 20;
          break;
        case 4:
          return o.next = 6, r.text();
        case 6:
          return n = o.sent, o.abrupt("break", 21);
        case 8:
          return o.next = 10, r.json();
        case 10:
          return n = o.sent, o.abrupt("break", 21);
        case 12:
          return o.next = 14, r.blob();
        case 14:
          return n = o.sent, o.abrupt("break", 21);
        case 16:
          return o.next = 18, r.arrayBuffer();
        case 18:
          return n = o.sent, o.abrupt("break", 21);
        case 20:
          return o.abrupt("break", 21);
        case 21:
          if (!(r.ok && mw(r.status))) {
            o.next = 23;
            break;
          }
          return o.abrupt("return", n);
        case 23:
          return o.abrupt("return", Promise.reject(new gw("Failed to http status error ".concat(r.status), {
            code: r.status,
            response: r
          })));
        case 24:
        case "end":
          return o.stop();
      }
    }, e);
  })), ei.apply(this, arguments);
}
var Ul = /* @__PURE__ */ function() {
  function e() {
    Dr(this, e);
  }
  return Fr(e, [{
    key: "request",
    value: function() {
      var r = V(/* @__PURE__ */ R().mark(function n(a) {
        var i, o = arguments;
        return R().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              return i = o.length > 1 && o[1] !== void 0 ? o[1] : {}, typeof a == "string" ? i.url = a : i = a, c.abrupt("return", e._request(i));
            case 3:
            case "end":
              return c.stop();
          }
        }, n);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "get",
    value: function() {
      var r = V(/* @__PURE__ */ R().mark(function n(a) {
        var i, o = arguments;
        return R().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              return i = o.length > 1 && o[1] !== void 0 ? o[1] : {}, c.next = 3, this.request(a, k(k({}, i), {}, {
                method: Za.GET
              }));
            case 3:
              return c.abrupt("return", c.sent);
            case 4:
            case "end":
              return c.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "post",
    value: function() {
      var r = V(/* @__PURE__ */ R().mark(function n(a, i) {
        var o, s = arguments;
        return R().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              return o = s.length > 2 && s[2] !== void 0 ? s[2] : {}, u.next = 3, this.request(a, k(k({}, o), {}, {
                method: Za.POST,
                data: i
              }));
            case 3:
              return u.abrupt("return", u.sent);
            case 4:
            case "end":
              return u.stop();
          }
        }, n, this);
      }));
      function t(n, a) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }], [{
    key: "create",
    value: function() {
      return e.http ? e.http : new e();
    }
  }, {
    key: "_request",
    value: function() {
      var r = V(/* @__PURE__ */ R().mark(function n(a) {
        var i, o, s, c, u, v, l;
        return R().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              return i = Ew(a), o = i.url, s = i.method, c = i.body, u = i.headers, v = i.responseType, d.next = 3, fetch(o, {
                method: s,
                body: c,
                headers: u
              });
            case 3:
              return l = d.sent, d.abrupt("return", Ow(l, v));
            case 5:
            case "end":
              return d.stop();
          }
        }, n);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }]);
}();
L(Ul, "http", void 0);
var cn = Ul.create();
function Iw(e) {
  return ri.apply(this, arguments);
}
function ri() {
  return ri = V(/* @__PURE__ */ R().mark(function e(r) {
    var t, n, a;
    return R().wrap(function(o) {
      for (; ; ) switch (o.prev = o.next) {
        case 0:
          return t = "/pas/livechat-auth", o.next = 3, cn.post(t, {
            app_id: r
          });
        case 3:
          return n = o.sent, a = n.td_access_token, o.abrupt("return", a);
        case 6:
        case "end":
          return o.stop();
      }
    }, e);
  })), ri.apply(this, arguments);
}
function Pw(e) {
  return ti.apply(this, arguments);
}
function ti() {
  return ti = V(/* @__PURE__ */ R().mark(function e(r) {
    var t, n, a, i, o;
    return R().wrap(function(c) {
      for (; ; ) switch (c.prev = c.next) {
        case 0:
          return t = "/2019-11/pas/livechats", c.next = 3, cn.post(t, k(k({}, r), {}, {
            page_url: window.location.href
          }));
        case 3:
          return n = c.sent, a = n.access_token, i = n.conversation_sid, o = n.region, c.abrupt("return", {
            accessToken: a,
            roomId: i,
            region: o
          });
        case 8:
        case "end":
          return c.stop();
      }
    }, e);
  })), ti.apply(this, arguments);
}
function Tw(e) {
  return ni.apply(this, arguments);
}
function ni() {
  return ni = V(/* @__PURE__ */ R().mark(function e(r) {
    return R().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.prev = 0, n.next = 3, x$(/* @__PURE__ */ V(/* @__PURE__ */ R().mark(function a() {
            var i;
            return R().wrap(function(s) {
              for (; ; ) switch (s.prev = s.next) {
                case 0:
                  return s.next = 2, cn.get("/2019-11/pas/livechats", {
                    params: {
                      touchpoint_value: r
                    }
                  });
                case 2:
                  return i = s.sent, s.abrupt("return", {
                    active: i.active,
                    config: i.config,
                    account_id: i.account_id,
                    release_version: i.release_version,
                    enable_split_twilio_bootstrap: !!(i != null && i.enable_split_twilio_bootstrap),
                    feedback_flow_id: (i == null ? void 0 : i.feedback_flow_id) || ""
                  });
                case 4:
                case "end":
                  return s.stop();
              }
            }, a);
          })), {
            defaultRetry: 2
          });
        case 3:
          return n.abrupt("return", n.sent);
        case 6:
          return n.prev = 6, n.t0 = n.catch(0), console.error("Failed to fetch td chat touchpoint", n.t0), n.abrupt("return", null);
        case 10:
        case "end":
          return n.stop();
      }
    }, e, null, [[0, 6]]);
  })), ni.apply(this, arguments);
}
var Rw = U, Cw = Xr, _w = fe.f, ai = Rw("unscopables"), ii = Array.prototype;
ii[ai] === void 0 && _w(ii, ai, {
  configurable: !0,
  value: Cw(null)
});
var xw = function(e) {
  ii[ai][e] = !0;
}, Lw = T, Aw = N, jw = H, nu = Wi, Nw = oe, kw = U, oi = kw("iterator"), Bl = !1, De, Jn, Qn;
[].keys && (Qn = [].keys(), "next" in Qn ? (Jn = nu(nu(Qn)), Jn !== Object.prototype && (De = Jn)) : Bl = !0);
var Mw = !jw(De) || Lw(function() {
  var e = {};
  return De[oi].call(e) !== e;
});
Mw && (De = {});
Aw(De[oi]) || Nw(De, oi, function() {
  return this;
});
var Dl = {
  IteratorPrototype: De,
  BUGGY_SAFARI_ITERATORS: Bl
}, Uw = Dl.IteratorPrototype, Bw = Xr, Dw = Hr, Fw = He, Gw = Yr, Hw = function() {
  return this;
}, Fl = function(e, r, t, n) {
  var a = r + " Iterator";
  return e.prototype = Bw(Uw, { next: Dw(+!n, t) }), Fw(e, a, !1), Gw[a] = Hw, e;
}, zw = D, Ww = F, Gl = Wt, Kw = N, qw = Fl, au = Wi, iu = xi, Vw = He, Yw = dr, Zn = oe, Xw = U, Jw = Yr, Hl = Dl, Qw = Gl.PROPER, Zw = Gl.CONFIGURABLE, ou = Hl.IteratorPrototype, vt = Hl.BUGGY_SAFARI_ITERATORS, wr = Xw("iterator"), su = "keys", Sr = "values", uu = "entries", eS = function() {
  return this;
}, Zi = function(e, r, t, n, a, i, o) {
  qw(t, r, n);
  var s = function(S) {
    if (S === a && f) return f;
    if (!vt && S && S in v) return v[S];
    switch (S) {
      case su:
        return function() {
          return new t(this, S);
        };
      case Sr:
        return function() {
          return new t(this, S);
        };
      case uu:
        return function() {
          return new t(this, S);
        };
    }
    return function() {
      return new t(this);
    };
  }, c = r + " Iterator", u = !1, v = e.prototype, l = v[wr] || v["@@iterator"] || a && v[a], f = !vt && l || s(a), d = r === "Array" && v.entries || l, g, $, m;
  if (d && (g = au(d.call(new e())), g !== Object.prototype && g.next && (au(g) !== ou && (iu ? iu(g, ou) : Kw(g[wr]) || Zn(g, wr, eS)), Vw(g, c, !0))), Qw && a === Sr && l && l.name !== Sr && (Zw ? Yw(v, "name", Sr) : (u = !0, f = function() {
    return Ww(l, this);
  })), a)
    if ($ = {
      values: s(Sr),
      keys: i ? f : s(su),
      entries: s(uu)
    }, o) for (m in $)
      (vt || u || !(m in v)) && Zn(v, m, $[m]);
    else zw({ target: r, proto: !0, forced: vt || u }, $);
  return v[wr] !== f && Zn(v, wr, f, { name: a }), Jw[r] = f, $;
}, ln = function(e, r) {
  return { value: e, done: r };
}, rS = be, eo = xw, cu = Yr, zl = Re, tS = fe.f, nS = Zi, ft = ln, aS = G, Wl = "Array Iterator", iS = zl.set, oS = zl.getterFor(Wl), sS = nS(Array, "Array", function(e, r) {
  iS(this, {
    type: Wl,
    target: rS(e),
    // target
    index: 0,
    // next index
    kind: r
    // kind
  });
}, function() {
  var e = oS(this), r = e.target, t = e.index++;
  if (!r || t >= r.length)
    return e.target = void 0, ft(void 0, !0);
  switch (e.kind) {
    case "keys":
      return ft(t, !1);
    case "values":
      return ft(r[t], !1);
  }
  return ft([t, r[t]], !1);
}, "values"), lu = cu.Arguments = cu.Array;
eo("keys");
eo("values");
eo("entries");
if (aS && lu.name !== "values") try {
  tS(lu, "name", { value: "values" });
} catch {
}
var uS = Ji.charAt, cS = xe, Kl = Re, lS = Zi, vu = ln, ql = "String Iterator", vS = Kl.set, fS = Kl.getterFor(ql);
lS(String, "String", function(e) {
  vS(this, {
    type: ql,
    string: cS(e),
    index: 0
  });
}, function() {
  var r = fS(this), t = r.string, n = r.index, a;
  return n >= t.length ? vu(void 0, !0) : (a = uS(t, n), r.index += a.length, vu(a, !1));
});
var fu = A, Vl = gl, dS = yl, Tr = sS, du = dr, hS = He, pS = U, ea = pS("iterator"), ra = Tr.values, Yl = function(e, r) {
  if (e) {
    if (e[ea] !== ra) try {
      du(e, ea, ra);
    } catch {
      e[ea] = ra;
    }
    if (hS(e, r, !0), Vl[r]) {
      for (var t in Tr)
        if (e[t] !== Tr[t]) try {
          du(e, t, Tr[t]);
        } catch {
          e[t] = Tr[t];
        }
    }
  }
};
for (var ta in Vl)
  Yl(fu[ta] && fu[ta].prototype, ta);
Yl(dS, "DOMTokenList");
var gS = T, yS = U, mS = G, hu = Fv, $S = yS("iterator"), Xl = !gS(function() {
  var e = new URL("b?a=1&b=2&c=3", "https://a"), r = e.searchParams, t = new URLSearchParams("a=1&a=2&b=3"), n = "";
  return e.pathname = "c%20d", r.forEach(function(a, i) {
    r.delete("b"), n += i + a;
  }), t.delete("a", 2), t.delete("b", void 0), hu && (!e.toJSON || !t.has("a", 1) || t.has("a", 2) || !t.has("a", void 0) || t.has("b")) || !r.size && (hu || !mS) || !r.sort || e.href !== "https://a/c%20d?a=1&c=3" || r.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !r[$S] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("https://тест").host !== "xn--e1aybc" || new URL("https://a#б").hash !== "#%D0%B1" || n !== "a1c3" || new URL("https://x", void 0).host !== "x";
}), pu = G, bS = x, wS = F, SS = T, na = an, ES = Ri, OS = qt, IS = Pe, PS = Vt, Xe = Object.assign, gu = Object.defineProperty, TS = bS([].concat), RS = !Xe || SS(function() {
  if (pu && Xe({ b: 1 }, Xe(gu({}, "a", {
    enumerable: !0,
    get: function() {
      gu(this, "b", {
        value: 3,
        enumerable: !1
      });
    }
  }), { b: 2 })).b !== 1) return !0;
  var e = {}, r = {}, t = Symbol("assign detection"), n = "abcdefghijklmnopqrst";
  return e[t] = 7, n.split("").forEach(function(a) {
    r[a] = a;
  }), Xe({}, e)[t] !== 7 || na(Xe({}, r)).join("") !== n;
}) ? function(r, t) {
  for (var n = IS(r), a = arguments.length, i = 1, o = ES.f, s = OS.f; a > i; )
    for (var c = PS(arguments[i++]), u = o ? TS(na(c), o(c)) : na(c), v = u.length, l = 0, f; v > l; )
      f = u[l++], (!pu || wS(s, c, f)) && (n[f] = c[f]);
  return n;
} : Xe, CS = K, _S = ol, xS = function(e, r, t, n) {
  try {
    return n ? r(CS(t)[0], t[1]) : r(t);
  } catch (a) {
    _S(e, "throw", a);
  }
}, LS = _e, AS = F, jS = Pe, NS = xS, kS = il, MS = Qt, US = hr, yu = zi, BS = Di, DS = rn, mu = Array, FS = function(r) {
  var t = jS(r), n = MS(this), a = arguments.length, i = a > 1 ? arguments[1] : void 0, o = i !== void 0;
  o && (i = LS(i, a > 2 ? arguments[2] : void 0));
  var s = DS(t), c = 0, u, v, l, f, d, g;
  if (s && !(this === mu && kS(s)))
    for (v = n ? new this() : [], f = BS(t, s), d = f.next; !(l = AS(d, f)).done; c++)
      g = o ? NS(f, i, [l.value, c], !0) : l.value, yu(v, c, g);
  else
    for (u = US(t), v = n ? new this(u) : mu(u); u > c; c++)
      g = o ? i(t[c], c) : t[c], yu(v, c, g);
  return v.length = c, v;
}, ze = x, aa = 2147483647, Lr = 36, Jl = 1, si = 26, GS = 38, HS = 700, zS = 72, WS = 128, KS = "-", qS = /[^\0-\u007E]/, Ql = /[.\u3002\uFF0E\uFF61]/g, $u = "Overflow: input needs wider integers to process", ia = Lr - Jl, bu = RangeError, VS = ze(Ql.exec), ir = Math.floor, oa = String.fromCharCode, wu = ze("".charCodeAt), Zl = ze([].join), Oe = ze([].push), YS = ze("".replace), XS = ze("".split), JS = ze("".toLowerCase), QS = function(e) {
  for (var r = [], t = 0, n = e.length; t < n; ) {
    var a = wu(e, t++);
    if (a >= 55296 && a <= 56319 && t < n) {
      var i = wu(e, t++);
      (i & 64512) === 56320 ? Oe(r, ((a & 1023) << 10) + (i & 1023) + 65536) : (Oe(r, a), t--);
    } else
      Oe(r, a);
  }
  return r;
}, Su = function(e) {
  return e + 22 + 75 * (e < 26);
}, ZS = function(e, r, t) {
  var n = 0;
  for (e = t ? ir(e / HS) : e >> 1, e += ir(e / r); e > ia * si >> 1; )
    e = ir(e / ia), n += Lr;
  return ir(n + (ia + 1) * e / (e + GS));
}, eE = function(e) {
  var r = [];
  e = QS(e);
  var t = e.length, n = WS, a = 0, i = zS, o, s;
  for (o = 0; o < e.length; o++)
    s = e[o], s < 128 && Oe(r, oa(s));
  var c = r.length, u = c;
  for (c && Oe(r, KS); u < t; ) {
    var v = aa;
    for (o = 0; o < e.length; o++)
      s = e[o], s >= n && s < v && (v = s);
    var l = u + 1;
    if (v - n > ir((aa - a) / l))
      throw new bu($u);
    for (a += (v - n) * l, n = v, o = 0; o < e.length; o++) {
      if (s = e[o], s < n && ++a > aa)
        throw new bu($u);
      if (s === n) {
        for (var f = a, d = Lr; ; ) {
          var g = d <= i ? Jl : d >= i + si ? si : d - i;
          if (f < g) break;
          var $ = f - g, m = Lr - g;
          Oe(r, oa(Su(g + $ % m))), f = ir($ / m), d += Lr;
        }
        Oe(r, oa(Su(f))), i = ZS(a, l, u === c), a = 0, u++;
      }
    }
    a++, n++;
  }
  return Zl(r, "");
}, rE = function(e) {
  var r = [], t = XS(YS(JS(e), Ql, "."), "."), n, a;
  for (n = 0; n < t.length; n++)
    a = t[n], Oe(r, VS(qS, a) ? "xn--" + eE(a) : a);
  return Zl(r, ".");
}, tE = oe, ev = function(e, r, t) {
  for (var n in r) tE(e, n, r[n], t);
  return e;
}, Eu = qr, nE = Math.floor, ui = function(e, r) {
  var t = e.length;
  if (t < 8)
    for (var n = 1, a, i; n < t; ) {
      for (i = n, a = e[n]; i && r(e[i - 1], a) > 0; )
        e[i] = e[--i];
      i !== n++ && (e[i] = a);
    }
  else
    for (var o = nE(t / 2), s = ui(Eu(e, 0, o), r), c = ui(Eu(e, o), r), u = s.length, v = c.length, l = 0, f = 0; l < u || f < v; )
      e[l + f] = l < u && f < v ? r(s[l], c[f]) <= 0 ? s[l++] : c[f++] : l < u ? s[l++] : c[f++];
  return e;
}, aE = ui, ci = D, vn = A, ro = Hc, dt = F, pe = x, Ar = G, rv = Xl, tv = oe, iE = Jt, oE = ev, sE = He, uE = Fl, to = Re, nv = Kr, sa = N, cE = Y, lE = _e, vE = zr, fE = K, av = H, W = xe, dE = Xr, Ou = Hr, Iu = Di, hE = rn, ht = ln, Je = Ai, pE = U, gE = aE, yE = pE("iterator"), gr = "URLSearchParams", iv = gr + "Iterator", ov = to.set, ae = to.getterFor(gr), mE = to.getterFor(iv), Pu = ro("fetch"), jt = ro("Request"), jr = ro("Headers"), ua = jt && jt.prototype, Tu = jr && jr.prototype, $E = vn.RegExp, bE = vn.TypeError, sv = vn.decodeURIComponent, wE = vn.encodeURIComponent, SE = pe("".charAt), Ru = pe([].join), Be = pe([].push), li = pe("".replace), EE = pe([].shift), Cu = pe([].splice), _u = pe("".split), OE = pe("".slice), IE = /\+/g, xu = Array(4), PE = function(e) {
  return xu[e - 1] || (xu[e - 1] = $E("((?:%[\\da-f]{2}){" + e + "})", "gi"));
}, TE = function(e) {
  try {
    return sv(e);
  } catch {
    return e;
  }
}, Lu = function(e) {
  var r = li(e, IE, " "), t = 4;
  try {
    return sv(r);
  } catch {
    for (; t; )
      r = li(r, PE(t--), TE);
    return r;
  }
}, RE = /[!'()~]|%20/g, CE = {
  "!": "%21",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "~": "%7E",
  "%20": "+"
}, _E = function(e) {
  return CE[e];
}, Au = function(e) {
  return li(wE(e), RE, _E);
}, ca = uE(function(r, t) {
  ov(this, {
    type: iv,
    target: ae(r).entries,
    index: 0,
    kind: t
  });
}, gr, function() {
  var r = mE(this), t = r.target, n = r.index++;
  if (!t || n >= t.length)
    return r.target = void 0, ht(void 0, !0);
  var a = t[n];
  switch (r.kind) {
    case "keys":
      return ht(a.key, !1);
    case "values":
      return ht(a.value, !1);
  }
  return ht([a.key, a.value], !1);
}, !0), uv = function(e) {
  this.entries = [], this.url = null, e !== void 0 && (av(e) ? this.parseObject(e) : this.parseQuery(typeof e == "string" ? SE(e, 0) === "?" ? OE(e, 1) : e : W(e)));
};
uv.prototype = {
  type: gr,
  bindURL: function(e) {
    this.url = e, this.update();
  },
  parseObject: function(e) {
    var r = this.entries, t = hE(e), n, a, i, o, s, c, u;
    if (t)
      for (n = Iu(e, t), a = n.next; !(i = dt(a, n)).done; ) {
        if (o = Iu(fE(i.value)), s = o.next, (c = dt(s, o)).done || (u = dt(s, o)).done || !dt(s, o).done) throw new bE("Expected sequence with length 2");
        Be(r, { key: W(c.value), value: W(u.value) });
      }
    else for (var v in e) cE(e, v) && Be(r, { key: v, value: W(e[v]) });
  },
  parseQuery: function(e) {
    if (e)
      for (var r = this.entries, t = _u(e, "&"), n = 0, a, i; n < t.length; )
        a = t[n++], a.length && (i = _u(a, "="), Be(r, {
          key: Lu(EE(i)),
          value: Lu(Ru(i, "="))
        }));
  },
  serialize: function() {
    for (var e = this.entries, r = [], t = 0, n; t < e.length; )
      n = e[t++], Be(r, Au(n.key) + "=" + Au(n.value));
    return Ru(r, "&");
  },
  update: function() {
    this.entries.length = 0, this.parseQuery(this.url.query);
  },
  updateURL: function() {
    this.url && this.url.update();
  }
};
var fn = function() {
  nv(this, lr);
  var r = arguments.length > 0 ? arguments[0] : void 0, t = ov(this, new uv(r));
  Ar || (this.size = t.entries.length);
}, lr = fn.prototype;
oE(lr, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function(r, t) {
    var n = ae(this);
    Je(arguments.length, 2), Be(n.entries, { key: W(r), value: W(t) }), Ar || this.length++, n.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  delete: function(e) {
    for (var r = ae(this), t = Je(arguments.length, 1), n = r.entries, a = W(e), i = t < 2 ? void 0 : arguments[1], o = i === void 0 ? i : W(i), s = 0; s < n.length; ) {
      var c = n[s];
      if (c.key === a && (o === void 0 || c.value === o)) {
        if (Cu(n, s, 1), o !== void 0) break;
      } else s++;
    }
    Ar || (this.size = n.length), r.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function(r) {
    var t = ae(this).entries;
    Je(arguments.length, 1);
    for (var n = W(r), a = 0; a < t.length; a++)
      if (t[a].key === n) return t[a].value;
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function(r) {
    var t = ae(this).entries;
    Je(arguments.length, 1);
    for (var n = W(r), a = [], i = 0; i < t.length; i++)
      t[i].key === n && Be(a, t[i].value);
    return a;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function(r) {
    for (var t = ae(this).entries, n = Je(arguments.length, 1), a = W(r), i = n < 2 ? void 0 : arguments[1], o = i === void 0 ? i : W(i), s = 0; s < t.length; ) {
      var c = t[s++];
      if (c.key === a && (o === void 0 || c.value === o)) return !0;
    }
    return !1;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function(r, t) {
    var n = ae(this);
    Je(arguments.length, 1);
    for (var a = n.entries, i = !1, o = W(r), s = W(t), c = 0, u; c < a.length; c++)
      u = a[c], u.key === o && (i ? Cu(a, c--, 1) : (i = !0, u.value = s));
    i || Be(a, { key: o, value: s }), Ar || (this.size = a.length), n.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function() {
    var r = ae(this);
    gE(r.entries, function(t, n) {
      return t.key > n.key ? 1 : -1;
    }), r.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function(r) {
    for (var t = ae(this).entries, n = lE(r, arguments.length > 1 ? arguments[1] : void 0), a = 0, i; a < t.length; )
      i = t[a++], n(i.value, i.key, this);
  },
  // `URLSearchParams.prototype.keys` method
  keys: function() {
    return new ca(this, "keys");
  },
  // `URLSearchParams.prototype.values` method
  values: function() {
    return new ca(this, "values");
  },
  // `URLSearchParams.prototype.entries` method
  entries: function() {
    return new ca(this, "entries");
  }
}, { enumerable: !0 });
tv(lr, yE, lr.entries, { name: "entries" });
tv(lr, "toString", function() {
  return ae(this).serialize();
}, { enumerable: !0 });
Ar && iE(lr, "size", {
  get: function() {
    return ae(this).entries.length;
  },
  configurable: !0,
  enumerable: !0
});
sE(fn, gr);
ci({ global: !0, constructor: !0, forced: !rv }, {
  URLSearchParams: fn
});
if (!rv && sa(jr)) {
  var xE = pe(Tu.has), LE = pe(Tu.set), ju = function(e) {
    if (av(e)) {
      var r = e.body, t;
      if (vE(r) === gr)
        return t = e.headers ? new jr(e.headers) : new jr(), xE(t, "content-type") || LE(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), dE(e, {
          body: Ou(0, W(r)),
          headers: Ou(0, t)
        });
    }
    return e;
  };
  if (sa(Pu) && ci({ global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0 }, {
    fetch: function(r) {
      return Pu(r, arguments.length > 1 ? ju(arguments[1]) : {});
    }
  }), sa(jt)) {
    var la = function(r) {
      return nv(this, ua), new jt(r, arguments.length > 1 ? ju(arguments[1]) : {});
    };
    ua.constructor = la, la.prototype = ua, ci({ global: !0, constructor: !0, dontCallGetSet: !0, forced: !0 }, {
      Request: la
    });
  }
}
var AE = {
  URLSearchParams: fn,
  getState: ae
}, jE = D, no = G, NE = Xl, ao = A, Nu = _e, se = x, Nt = oe, re = Jt, kE = Kr, vi = Y, io = RS, Qe = FS, ce = qr, ME = Ji.codeAt, UE = rE, me = xe, BE = He, DE = Ai, cv = AE, lv = Re, FE = lv.set, kt = lv.getterFor("URL"), GE = cv.URLSearchParams, HE = cv.getState, Er = ao.URL, fi = ao.TypeError, Mt = ao.parseInt, zE = Math.floor, ku = Math.pow, ie = se("".charAt), ve = se(/./.exec), Rr = se([].join), WE = se(1 .toString), KE = se([].pop), rr = se([].push), va = se("".replace), qE = se([].shift), VE = se("".split), Nr = se("".slice), Ut = se("".toLowerCase), YE = se([].unshift), XE = "Invalid authority", fa = "Invalid scheme", ke = "Invalid host", Mu = "Invalid port", vv = /[a-z]/i, JE = /[\d+-.a-z]/i, di = /\d/, QE = /^0x/i, ZE = /^[0-7]+$/, e1 = /^\d+$/, fv = /^[\da-f]+$/i, r1 = /[\0\t\n\r #%/:<>?@[\\\]^|]/, t1 = /[\0\t\n\r #/:<>?@[\\\]^|]/, n1 = /^[\u0000-\u0020]+/, a1 = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/, i1 = /[\t\n\r]/g, te, o1 = function(e) {
  var r = VE(e, "."), t, n, a, i, o, s, c;
  if (r.length && r[r.length - 1] === "" && r.length--, t = r.length, t > 4) return e;
  for (n = [], a = 0; a < t; a++) {
    if (i = r[a], i === "") return e;
    if (o = 10, i.length > 1 && ie(i, 0) === "0" && (o = ve(QE, i) ? 16 : 8, i = Nr(i, o === 8 ? 1 : 2)), i === "")
      s = 0;
    else {
      if (!ve(o === 10 ? e1 : o === 8 ? ZE : fv, i)) return e;
      s = Mt(i, o);
    }
    rr(n, s);
  }
  for (a = 0; a < t; a++)
    if (s = n[a], a === t - 1) {
      if (s >= ku(256, 5 - t)) return null;
    } else if (s > 255) return null;
  for (c = KE(n), a = 0; a < n.length; a++)
    c += n[a] * ku(256, 3 - a);
  return c;
}, s1 = function(e) {
  var r = [0, 0, 0, 0, 0, 0, 0, 0], t = 0, n = null, a = 0, i, o, s, c, u, v, l, f = function() {
    return ie(e, a);
  };
  if (f() === ":") {
    if (ie(e, 1) !== ":") return;
    a += 2, t++, n = t;
  }
  for (; f(); ) {
    if (t === 8) return;
    if (f() === ":") {
      if (n !== null) return;
      a++, t++, n = t;
      continue;
    }
    for (i = o = 0; o < 4 && ve(fv, f()); )
      i = i * 16 + Mt(f(), 16), a++, o++;
    if (f() === ".") {
      if (o === 0 || (a -= o, t > 6)) return;
      for (s = 0; f(); ) {
        if (c = null, s > 0)
          if (f() === "." && s < 4) a++;
          else return;
        if (!ve(di, f())) return;
        for (; ve(di, f()); ) {
          if (u = Mt(f(), 10), c === null) c = u;
          else {
            if (c === 0) return;
            c = c * 10 + u;
          }
          if (c > 255) return;
          a++;
        }
        r[t] = r[t] * 256 + c, s++, (s === 2 || s === 4) && t++;
      }
      if (s !== 4) return;
      break;
    } else if (f() === ":") {
      if (a++, !f()) return;
    } else if (f()) return;
    r[t++] = i;
  }
  if (n !== null)
    for (v = t - n, t = 7; t !== 0 && v > 0; )
      l = r[t], r[t--] = r[n + v - 1], r[n + --v] = l;
  else if (t !== 8) return;
  return r;
}, u1 = function(e) {
  for (var r = null, t = 1, n = null, a = 0, i = 0; i < 8; i++)
    e[i] !== 0 ? (a > t && (r = n, t = a), n = null, a = 0) : (n === null && (n = i), ++a);
  return a > t ? n : r;
}, Or = function(e) {
  var r, t, n, a;
  if (typeof e == "number") {
    for (r = [], t = 0; t < 4; t++)
      YE(r, e % 256), e = zE(e / 256);
    return Rr(r, ".");
  }
  if (typeof e == "object") {
    for (r = "", n = u1(e), t = 0; t < 8; t++)
      a && e[t] === 0 || (a && (a = !1), n === t ? (r += t ? ":" : "::", a = !0) : (r += WE(e[t], 16), t < 7 && (r += ":")));
    return "[" + r + "]";
  }
  return e;
}, It = {}, dv = io({}, It, {
  " ": 1,
  '"': 1,
  "<": 1,
  ">": 1,
  "`": 1
}), hv = io({}, dv, {
  "#": 1,
  "?": 1,
  "{": 1,
  "}": 1
}), da = io({}, hv, {
  "/": 1,
  ":": 1,
  ";": 1,
  "=": 1,
  "@": 1,
  "[": 1,
  "\\": 1,
  "]": 1,
  "^": 1,
  "|": 1
}), Se = function(e, r) {
  var t = ME(e, 0);
  return t > 32 && t < 127 && !vi(r, e) ? e : encodeURIComponent(e);
}, pt = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
}, Cr = function(e, r) {
  var t;
  return e.length === 2 && ve(vv, ie(e, 0)) && ((t = ie(e, 1)) === ":" || !r && t === "|");
}, Uu = function(e) {
  var r;
  return e.length > 1 && Cr(Nr(e, 0, 2)) && (e.length === 2 || (r = ie(e, 2)) === "/" || r === "\\" || r === "?" || r === "#");
}, c1 = function(e) {
  return e === "." || Ut(e) === "%2e";
}, l1 = function(e) {
  return e = Ut(e), e === ".." || e === "%2e." || e === ".%2e" || e === "%2e%2e";
}, ha = {}, Bu = {}, pa = {}, Du = {}, Fu = {}, ga = {}, Gu = {}, Hu = {}, gt = {}, yt = {}, ya = {}, ma = {}, $a = {}, ba = {}, zu = {}, wa = {}, Ze = {}, he = {}, Wu = {}, Me = {}, ye = {}, oo = function(e, r, t) {
  var n = me(e), a, i, o;
  if (r) {
    if (i = this.parse(n), i) throw new fi(i);
    this.searchParams = null;
  } else {
    if (t !== void 0 && (a = new oo(t, !0)), i = this.parse(n, null, a), i) throw new fi(i);
    o = HE(new GE()), o.bindURL(this), this.searchParams = o;
  }
};
oo.prototype = {
  type: "URL",
  // https://url.spec.whatwg.org/#url-parsing
  // eslint-disable-next-line max-statements -- TODO
  parse: function(e, r, t) {
    var n = this, a = r || ha, i = 0, o = "", s = !1, c = !1, u = !1, v, l, f, d;
    for (e = me(e), r || (n.scheme = "", n.username = "", n.password = "", n.host = null, n.port = null, n.path = [], n.query = null, n.fragment = null, n.cannotBeABaseURL = !1, e = va(e, n1, ""), e = va(e, a1, "$1")), e = va(e, i1, ""), v = Qe(e); i <= v.length; ) {
      switch (l = v[i], a) {
        case ha:
          if (l && ve(vv, l))
            o += Ut(l), a = Bu;
          else {
            if (r)
              return fa;
            a = pa;
            continue;
          }
          break;
        case Bu:
          if (l && (ve(JE, l) || l === "+" || l === "-" || l === "."))
            o += Ut(l);
          else if (l === ":") {
            if (r && (n.isSpecial() !== vi(pt, o) || o === "file" && (n.includesCredentials() || n.port !== null) || n.scheme === "file" && !n.host)) return;
            if (n.scheme = o, r) {
              n.isSpecial() && pt[n.scheme] === n.port && (n.port = null);
              return;
            }
            o = "", n.scheme === "file" ? a = ba : n.isSpecial() && t && t.scheme === n.scheme ? a = Du : n.isSpecial() ? a = Hu : v[i + 1] === "/" ? (a = Fu, i++) : (n.cannotBeABaseURL = !0, rr(n.path, ""), a = Wu);
          } else {
            if (r)
              return fa;
            o = "", a = pa, i = 0;
            continue;
          }
          break;
        case pa:
          if (!t || t.cannotBeABaseURL && l !== "#") return fa;
          if (t.cannotBeABaseURL && l === "#") {
            n.scheme = t.scheme, n.path = ce(t.path), n.query = t.query, n.fragment = "", n.cannotBeABaseURL = !0, a = ye;
            break;
          }
          a = t.scheme === "file" ? ba : ga;
          continue;
        case Du:
          if (l === "/" && v[i + 1] === "/")
            a = gt, i++;
          else {
            a = ga;
            continue;
          }
          break;
        case Fu:
          if (l === "/") {
            a = yt;
            break;
          } else {
            a = he;
            continue;
          }
        case ga:
          if (n.scheme = t.scheme, l === te)
            n.username = t.username, n.password = t.password, n.host = t.host, n.port = t.port, n.path = ce(t.path), n.query = t.query;
          else if (l === "/" || l === "\\" && n.isSpecial())
            a = Gu;
          else if (l === "?")
            n.username = t.username, n.password = t.password, n.host = t.host, n.port = t.port, n.path = ce(t.path), n.query = "", a = Me;
          else if (l === "#")
            n.username = t.username, n.password = t.password, n.host = t.host, n.port = t.port, n.path = ce(t.path), n.query = t.query, n.fragment = "", a = ye;
          else {
            n.username = t.username, n.password = t.password, n.host = t.host, n.port = t.port, n.path = ce(t.path), n.path.length--, a = he;
            continue;
          }
          break;
        case Gu:
          if (n.isSpecial() && (l === "/" || l === "\\"))
            a = gt;
          else if (l === "/")
            a = yt;
          else {
            n.username = t.username, n.password = t.password, n.host = t.host, n.port = t.port, a = he;
            continue;
          }
          break;
        case Hu:
          if (a = gt, l !== "/" || ie(o, i + 1) !== "/") continue;
          i++;
          break;
        case gt:
          if (l !== "/" && l !== "\\") {
            a = yt;
            continue;
          }
          break;
        case yt:
          if (l === "@") {
            s && (o = "%40" + o), s = !0, f = Qe(o);
            for (var g = 0; g < f.length; g++) {
              var $ = f[g];
              if ($ === ":" && !u) {
                u = !0;
                continue;
              }
              var m = Se($, da);
              u ? n.password += m : n.username += m;
            }
            o = "";
          } else if (l === te || l === "/" || l === "?" || l === "#" || l === "\\" && n.isSpecial()) {
            if (s && o === "") return XE;
            i -= Qe(o).length + 1, o = "", a = ya;
          } else o += l;
          break;
        case ya:
        case ma:
          if (r && n.scheme === "file") {
            a = wa;
            continue;
          } else if (l === ":" && !c) {
            if (o === "") return ke;
            if (d = n.parseHost(o), d) return d;
            if (o = "", a = $a, r === ma) return;
          } else if (l === te || l === "/" || l === "?" || l === "#" || l === "\\" && n.isSpecial()) {
            if (n.isSpecial() && o === "") return ke;
            if (r && o === "" && (n.includesCredentials() || n.port !== null)) return;
            if (d = n.parseHost(o), d) return d;
            if (o = "", a = Ze, r) return;
            continue;
          } else
            l === "[" ? c = !0 : l === "]" && (c = !1), o += l;
          break;
        case $a:
          if (ve(di, l))
            o += l;
          else if (l === te || l === "/" || l === "?" || l === "#" || l === "\\" && n.isSpecial() || r) {
            if (o !== "") {
              var S = Mt(o, 10);
              if (S > 65535) return Mu;
              n.port = n.isSpecial() && S === pt[n.scheme] ? null : S, o = "";
            }
            if (r) return;
            a = Ze;
            continue;
          } else return Mu;
          break;
        case ba:
          if (n.scheme = "file", l === "/" || l === "\\") a = zu;
          else if (t && t.scheme === "file")
            switch (l) {
              case te:
                n.host = t.host, n.path = ce(t.path), n.query = t.query;
                break;
              case "?":
                n.host = t.host, n.path = ce(t.path), n.query = "", a = Me;
                break;
              case "#":
                n.host = t.host, n.path = ce(t.path), n.query = t.query, n.fragment = "", a = ye;
                break;
              default:
                Uu(Rr(ce(v, i), "")) || (n.host = t.host, n.path = ce(t.path), n.shortenPath()), a = he;
                continue;
            }
          else {
            a = he;
            continue;
          }
          break;
        case zu:
          if (l === "/" || l === "\\") {
            a = wa;
            break;
          }
          t && t.scheme === "file" && !Uu(Rr(ce(v, i), "")) && (Cr(t.path[0], !0) ? rr(n.path, t.path[0]) : n.host = t.host), a = he;
          continue;
        case wa:
          if (l === te || l === "/" || l === "\\" || l === "?" || l === "#") {
            if (!r && Cr(o))
              a = he;
            else if (o === "") {
              if (n.host = "", r) return;
              a = Ze;
            } else {
              if (d = n.parseHost(o), d) return d;
              if (n.host === "localhost" && (n.host = ""), r) return;
              o = "", a = Ze;
            }
            continue;
          } else o += l;
          break;
        case Ze:
          if (n.isSpecial()) {
            if (a = he, l !== "/" && l !== "\\") continue;
          } else if (!r && l === "?")
            n.query = "", a = Me;
          else if (!r && l === "#")
            n.fragment = "", a = ye;
          else if (l !== te && (a = he, l !== "/"))
            continue;
          break;
        case he:
          if (l === te || l === "/" || l === "\\" && n.isSpecial() || !r && (l === "?" || l === "#")) {
            if (l1(o) ? (n.shortenPath(), l !== "/" && !(l === "\\" && n.isSpecial()) && rr(n.path, "")) : c1(o) ? l !== "/" && !(l === "\\" && n.isSpecial()) && rr(n.path, "") : (n.scheme === "file" && !n.path.length && Cr(o) && (n.host && (n.host = ""), o = ie(o, 0) + ":"), rr(n.path, o)), o = "", n.scheme === "file" && (l === te || l === "?" || l === "#"))
              for (; n.path.length > 1 && n.path[0] === ""; )
                qE(n.path);
            l === "?" ? (n.query = "", a = Me) : l === "#" && (n.fragment = "", a = ye);
          } else
            o += Se(l, hv);
          break;
        case Wu:
          l === "?" ? (n.query = "", a = Me) : l === "#" ? (n.fragment = "", a = ye) : l !== te && (n.path[0] += Se(l, It));
          break;
        case Me:
          !r && l === "#" ? (n.fragment = "", a = ye) : l !== te && (l === "'" && n.isSpecial() ? n.query += "%27" : l === "#" ? n.query += "%23" : n.query += Se(l, It));
          break;
        case ye:
          l !== te && (n.fragment += Se(l, dv));
          break;
      }
      i++;
    }
  },
  // https://url.spec.whatwg.org/#host-parsing
  parseHost: function(e) {
    var r, t, n;
    if (ie(e, 0) === "[") {
      if (ie(e, e.length - 1) !== "]" || (r = s1(Nr(e, 1, -1)), !r)) return ke;
      this.host = r;
    } else if (this.isSpecial()) {
      if (e = UE(e), ve(r1, e) || (r = o1(e), r === null)) return ke;
      this.host = r;
    } else {
      if (ve(t1, e)) return ke;
      for (r = "", t = Qe(e), n = 0; n < t.length; n++)
        r += Se(t[n], It);
      this.host = r;
    }
  },
  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
  cannotHaveUsernamePasswordPort: function() {
    return !this.host || this.cannotBeABaseURL || this.scheme === "file";
  },
  // https://url.spec.whatwg.org/#include-credentials
  includesCredentials: function() {
    return this.username !== "" || this.password !== "";
  },
  // https://url.spec.whatwg.org/#is-special
  isSpecial: function() {
    return vi(pt, this.scheme);
  },
  // https://url.spec.whatwg.org/#shorten-a-urls-path
  shortenPath: function() {
    var e = this.path, r = e.length;
    r && (this.scheme !== "file" || r !== 1 || !Cr(e[0], !0)) && e.length--;
  },
  // https://url.spec.whatwg.org/#concept-url-serializer
  serialize: function() {
    var e = this, r = e.scheme, t = e.username, n = e.password, a = e.host, i = e.port, o = e.path, s = e.query, c = e.fragment, u = r + ":";
    return a !== null ? (u += "//", e.includesCredentials() && (u += t + (n ? ":" + n : "") + "@"), u += Or(a), i !== null && (u += ":" + i)) : r === "file" && (u += "//"), u += e.cannotBeABaseURL ? o[0] : o.length ? "/" + Rr(o, "/") : "", s !== null && (u += "?" + s), c !== null && (u += "#" + c), u;
  },
  // https://url.spec.whatwg.org/#dom-url-href
  setHref: function(e) {
    var r = this.parse(e);
    if (r) throw new fi(r);
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-origin
  getOrigin: function() {
    var e = this.scheme, r = this.port;
    if (e === "blob") try {
      return new vr(e.path[0]).origin;
    } catch {
      return "null";
    }
    return e === "file" || !this.isSpecial() ? "null" : e + "://" + Or(this.host) + (r !== null ? ":" + r : "");
  },
  // https://url.spec.whatwg.org/#dom-url-protocol
  getProtocol: function() {
    return this.scheme + ":";
  },
  setProtocol: function(e) {
    this.parse(me(e) + ":", ha);
  },
  // https://url.spec.whatwg.org/#dom-url-username
  getUsername: function() {
    return this.username;
  },
  setUsername: function(e) {
    var r = Qe(me(e));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.username = "";
      for (var t = 0; t < r.length; t++)
        this.username += Se(r[t], da);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-password
  getPassword: function() {
    return this.password;
  },
  setPassword: function(e) {
    var r = Qe(me(e));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.password = "";
      for (var t = 0; t < r.length; t++)
        this.password += Se(r[t], da);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-host
  getHost: function() {
    var e = this.host, r = this.port;
    return e === null ? "" : r === null ? Or(e) : Or(e) + ":" + r;
  },
  setHost: function(e) {
    this.cannotBeABaseURL || this.parse(e, ya);
  },
  // https://url.spec.whatwg.org/#dom-url-hostname
  getHostname: function() {
    var e = this.host;
    return e === null ? "" : Or(e);
  },
  setHostname: function(e) {
    this.cannotBeABaseURL || this.parse(e, ma);
  },
  // https://url.spec.whatwg.org/#dom-url-port
  getPort: function() {
    var e = this.port;
    return e === null ? "" : me(e);
  },
  setPort: function(e) {
    this.cannotHaveUsernamePasswordPort() || (e = me(e), e === "" ? this.port = null : this.parse(e, $a));
  },
  // https://url.spec.whatwg.org/#dom-url-pathname
  getPathname: function() {
    var e = this.path;
    return this.cannotBeABaseURL ? e[0] : e.length ? "/" + Rr(e, "/") : "";
  },
  setPathname: function(e) {
    this.cannotBeABaseURL || (this.path = [], this.parse(e, Ze));
  },
  // https://url.spec.whatwg.org/#dom-url-search
  getSearch: function() {
    var e = this.query;
    return e ? "?" + e : "";
  },
  setSearch: function(e) {
    e = me(e), e === "" ? this.query = null : (ie(e, 0) === "?" && (e = Nr(e, 1)), this.query = "", this.parse(e, Me)), this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-searchparams
  getSearchParams: function() {
    return this.searchParams.facade;
  },
  // https://url.spec.whatwg.org/#dom-url-hash
  getHash: function() {
    var e = this.fragment;
    return e ? "#" + e : "";
  },
  setHash: function(e) {
    if (e = me(e), e === "") {
      this.fragment = null;
      return;
    }
    ie(e, 0) === "#" && (e = Nr(e, 1)), this.fragment = "", this.parse(e, ye);
  },
  update: function() {
    this.query = this.searchParams.serialize() || null;
  }
};
var vr = function(r) {
  var t = kE(this, z), n = DE(arguments.length, 1) > 1 ? arguments[1] : void 0, a = FE(t, new oo(r, !1, n));
  no || (t.href = a.serialize(), t.origin = a.getOrigin(), t.protocol = a.getProtocol(), t.username = a.getUsername(), t.password = a.getPassword(), t.host = a.getHost(), t.hostname = a.getHostname(), t.port = a.getPort(), t.pathname = a.getPathname(), t.search = a.getSearch(), t.searchParams = a.getSearchParams(), t.hash = a.getHash());
}, z = vr.prototype, ne = function(e, r) {
  return {
    get: function() {
      return kt(this)[e]();
    },
    set: r && function(t) {
      return kt(this)[r](t);
    },
    configurable: !0,
    enumerable: !0
  };
};
no && (re(z, "href", ne("serialize", "setHref")), re(z, "origin", ne("getOrigin")), re(z, "protocol", ne("getProtocol", "setProtocol")), re(z, "username", ne("getUsername", "setUsername")), re(z, "password", ne("getPassword", "setPassword")), re(z, "host", ne("getHost", "setHost")), re(z, "hostname", ne("getHostname", "setHostname")), re(z, "port", ne("getPort", "setPort")), re(z, "pathname", ne("getPathname", "setPathname")), re(z, "search", ne("getSearch", "setSearch")), re(z, "searchParams", ne("getSearchParams")), re(z, "hash", ne("getHash", "setHash")));
Nt(z, "toJSON", function() {
  return kt(this).serialize();
}, { enumerable: !0 });
Nt(z, "toString", function() {
  return kt(this).serialize();
}, { enumerable: !0 });
if (Er) {
  var Ku = Er.createObjectURL, qu = Er.revokeObjectURL;
  Ku && Nt(vr, "createObjectURL", Nu(Ku, Er)), qu && Nt(vr, "revokeObjectURL", Nu(qu, Er));
}
BE(vr, "URL");
jE({ global: !0, constructor: !0, forced: !NE, sham: !no }, {
  URL: vr
});
var v1 = D, f1 = F;
v1({ target: "URL", proto: !0, enumerable: !0 }, {
  toJSON: function() {
    return f1(URL.prototype.toString, this);
  }
});
function d1(e, r) {
  if (!e.length) return [];
  var t = URL.createObjectURL(new Blob(e)), n = document.createElement("a");
  return n.href = t, n.download = r, n.rel = "noopener", document.body.appendChild(n), n.click(), document.body.removeChild(n), URL.revokeObjectURL(t), e;
}
function h1(e) {
  return hi.apply(this, arguments);
}
function hi() {
  return hi = V(/* @__PURE__ */ R().mark(function e(r) {
    var t, n, a, i, o, s, c, u, v, l;
    return R().wrap(function(d) {
      for (; ; ) switch (d.prev = d.next) {
        case 0:
          if (t = r.interactionId, n = t === void 0 ? "" : t, a = r.token, i = a === void 0 ? "" : a, o = r.timezone, s = o === void 0 ? "" : o, c = r.fileName, u = c === void 0 ? "unknown.txt" : c, n) {
            d.next = 3;
            break;
          }
          throw new Error("Interaction ID is required");
        case 3:
          if (i) {
            d.next = 5;
            break;
          }
          throw new Error("Token is required");
        case 5:
          return v = "/cds/interactions/".concat(n, "/messages/transcript"), d.next = 8, cn.get(v, {
            params: {
              timezone: s
            },
            token: i,
            responseType: Ml.BLOB
          });
        case 8:
          return l = d.sent, d.abrupt("return", d1([l], u));
        case 10:
        case "end":
          return d.stop();
      }
    }, e);
  })), hi.apply(this, arguments);
}
var Sa = /* @__PURE__ */ function() {
  function e(r) {
    Dr(this, e), L(this, "current", void 0), this.current = r;
  }
  return Fr(e, null, [{
    key: "create",
    value: function(t) {
      return new e(t);
    }
  }, {
    key: "empty",
    value: function() {
      return new e(null);
    }
  }]);
}();
function Ea(e, r) {
  try {
    return e == null ? void 0 : e();
  } catch (t) {
    r == null || r(t);
  }
}
var p1 = function(r) {
  var t = {
    chatIcon: r.chatIcon ? "url(".concat(r.chatIcon, ")") : void 0,
    chatThemeColor: r.chatThemeColor,
    chatHoverThemeColor: r.chatHoverThemeColor,
    triggerButtonWidth: r.triggerButtonWidth,
    triggerButtonHeight: r.triggerButtonHeight,
    triggerButtonPositionBottom: r.triggerButtonPositionBottom,
    triggerButtonPositionRight: r.triggerButtonPositionRight,
    chatPositionBottom: r.chatPositionBottom,
    chatContainerHeight: r.chatContainerHeight,
    chatContainerWidth: r.chatContainerWidth,
    chatLauncherColor: r.chatLauncherColor,
    chatHoverLauncherColor: r.chatHoverLauncherColor
  };
  return R$(t, {
    removeEmptyString: !0
  });
};
const g1 = '.tdw-widget-wrapper{--chat-z-index: 99999;position:fixed;z-index:var(--chat-z-index)}.tdw-widget-wrapper[data-preview]{position:sticky;display:flex;flex-direction:column;gap:24px;align-items:self-end}.tdw-widget{position:fixed;right:20px;bottom:var(--chat-position-bottom, 20px);z-index:var(--chat-z-index);width:var(--chat-container-width, 360px);min-width:360px;height:var(--chat-container-height, 680px);border:none;border-radius:20px;box-shadow:0 32px 20px #00000005,0 16px 16px #0000000a,0 4px 8px #0000000f,0 -4px 24px #00000014;overflow:hidden;transition:height .2s linear;will-change:height;max-height:calc(var(--chat-screen-height) - var(--chat-position-bottom, 20px) - 20px)}.tdw-widget[data-preview]{position:unset}.tdw-widget iframe{width:100%;height:100%;border:none;border-radius:inherit}@media only screen and (max-width: 600px),(max-height: 620px){.tdw-widget[data-responsive-layout=true]{top:0;right:0;bottom:0;left:0;overflow:hidden;width:var(--chat-screen-width, 100%);min-width:var(--chat-screen-width, 100%);max-width:var(--chat-screen-width, 100%);height:var(--chat-screen-height, 100%);min-height:var(--chat-screen-height, 100%);max-height:var(--chat-screen-height, 100%);border-radius:0}}.tdw-widget-trigger{position:fixed;right:var(--trigger-button-position-right, 10px);bottom:var(--trigger-button-position-bottom, 20px);z-index:var(--chat-z-index);display:flex;justify-content:center;align-items:center;width:var(--trigger-button-width, 64px);height:var(--trigger-button-height, 64px);border:none;border-radius:50%;cursor:pointer;background-image:var(--chat-icon, url(https://prd-cdn-talkdesk.talkdesk.com/cdn-assets/latest/talkdesk/product/app-icons/sms.svg));background-color:var(--chat-launcher-color, #1f1f1f);background-size:56%;background-repeat:no-repeat;background-position:center;transition:background-color .1s ease-in-out}.tdw-widget-trigger:hover{background-color:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger[data-preview]{position:relative;right:unset;bottom:unset}.tdw-widget-trigger-badge{position:absolute;top:0;right:0;width:16px;height:16px;line-height:16px;text-align:center;color:#fff;background-color:#f5222d;font-size:10px;border-radius:50%;box-sizing:border-box;transition:right,width,border-radius .25s ease}.tdw-widget-trigger-badge-more{right:-4px;width:28px;border-radius:48px}.tdw-widget-loading{display:flex;flex-direction:column;width:100%;height:100%}.tdw-widget-header{height:64px;background-color:var(--chat-header-background-color, #f8f8f8);border-top-left-radius:8px;border-top-right-radius:8px}.tdw-widget-content{display:flex;flex-direction:column;justify-content:center;align-items:center;height:calc(100% - 56px);padding:16px;box-sizing:border-box}.tdw-loader{position:relative;width:100px;height:10px}.tdw-loader:before,.tdw-loader:after{content:"";position:absolute;top:0;left:0;width:10px;height:10px;margin-left:25%;border-radius:50%;box-shadow:20px 0 #e9e9e9;background:#e9e9e9;animation:move-x 1s linear infinite}.tdw-loader:after{box-shadow:none;transform:translate(40px) scale(1);z-index:2;animation:loading 1s linear infinite}@keyframes loading{0%,5%{transform:translate(40px) scale(1);background:#e9e9e9}10%{transform:translate(40px) scale(1);background:var(--chat-theme-color, #1f1f1f)}40%{transform:translate(20px) scale(1.5);background:var(--chat-theme-color, #1f1f1f)}90%,95%{transform:translate(0) scale(1);background:var(--chat-theme-color, #1f1f1f)}to{transform:translate(0) scale(1);background:#e9e9e9}}@keyframes move-x{0%,10%{transform:translate(0)}90%,to{transform:translate(20px)}}';
var y1 = "talkdesk-chat-widget-style";
function m1(e) {
  var r, t, n, a = e == null ? void 0 : e.config, i = a ? $$(a, {}) : e == null ? void 0 : e.widgetSettings, o = {};
  if (i != null && (r = i.appearance) !== null && r !== void 0 && (r = r.theme) !== null && r !== void 0 && r.brandColor) {
    var s, c;
    o.chatThemeColor = i == null || (s = i.appearance) === null || s === void 0 ? void 0 : s.theme.brandColor, o.chatHoverThemeColor = i == null || (c = i.appearance) === null || c === void 0 ? void 0 : c.theme.brandColor;
  }
  if (i != null && (t = i.appearance) !== null && t !== void 0 && (t = t.launcher) !== null && t !== void 0 && t.color) {
    var u, v;
    o.chatLauncherColor = i == null || (u = i.appearance) === null || u === void 0 || (u = u.launcher) === null || u === void 0 ? void 0 : u.color, o.chatHoverLauncherColor = i == null || (v = i.appearance) === null || v === void 0 || (v = v.launcher) === null || v === void 0 ? void 0 : v.color;
  }
  if (i != null && (n = i.appearance) !== null && n !== void 0 && (n = n.launcher) !== null && n !== void 0 && n.iconUrl) {
    var l;
    o.chatIcon = i == null || (l = i.appearance) === null || l === void 0 || (l = l.launcher) === null || l === void 0 ? void 0 : l.iconUrl;
  }
  return o;
}
function $1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
  return p1(k(k({}, m1(r)), e));
}
function b1(e) {
  var r = [];
  return r.push(m$(g1, y1, e)), function() {
    r.forEach(function(t) {
      return t();
    }), r.length = 0;
  };
}
function w1(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0, n = $1(r, t), a = Object.keys(n);
  if (a.length)
    return pl(e, n);
}
function S1(e, r) {
  var t = function() {
    pl(e, {
      chatScreenWidth: window.innerWidth + "px",
      chatScreenHeight: window.innerHeight + "px"
    });
  }, n = function() {
    t();
  };
  return t(), window.addEventListener("resize", n), function() {
    window.removeEventListener("resize", n);
  };
}
var Vu = "tdw-widget-wrapper";
function E1(e) {
  var r = e.root, t = e.isPreview, n = t === void 0 ? !1 : t, a = document.createElement("div");
  return a.className = Vu, a.setAttribute("data-".concat(Vu), ""), n && a.setAttribute("data-preview", ""), r.appendChild(a), {
    element: a,
    destroy: function() {
      Lm(r, a) && r.removeChild(a), a.remove();
    }
  };
}
var O1 = F, I1 = Y, P1 = Gt, T1 = xl, Yu = RegExp.prototype, R1 = function(e) {
  var r = e.flags;
  return r === void 0 && !("flags" in Yu) && !I1(e, "flags") && P1(Yu, e) ? O1(T1, e) : r;
}, C1 = Wt.PROPER, _1 = oe, x1 = K, Xu = xe, L1 = T, A1 = R1, so = "toString", pv = RegExp.prototype, gv = pv[so], j1 = L1(function() {
  return gv.call({ source: "a", flags: "b" }) !== "/a/b";
}), N1 = C1 && gv.name !== so;
(j1 || N1) && _1(pv, so, function() {
  var r = x1(this), t = Xu(r.source), n = Xu(A1(r));
  return "/" + t + "/" + n;
}, { unsafe: !0 });
var Ju = "talkdesk-chat-widget-trigger";
function k1(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = document.createElement("button");
  n.id = Ju, n.className = "tdw-widget-trigger", n.ariaLabel = "Open chat widget", t && n.setAttribute("data-preview", "");
  var a = null, i = null, o = function() {
    var $;
    ($ = i) === null || $ === void 0 || $.destroy(), i = null;
  }, s = function() {
    i || (i = new b$(n, {
      onClick: function() {
        r == null || r();
      }
    }));
  }, c = function() {
    document.getElementById(Ju) || (e.appendChild(n), n.onclick = function() {
      i || r == null || r();
    });
  }, u = function() {
    c(), n.style.display = "";
  }, v = function() {
    n.style.display = "none";
  }, l = function($) {
    var m = $.enablePointMoveTriggerButton;
    m && s();
  }, f = function() {
    o(), n.remove();
  }, d = function($) {
    $ > 0 ? (a || (a = document.createElement("span"), a.className = "tdw-widget-trigger-badge ".concat($ > 9 ? "tdw-widget-trigger-badge-more" : ""), a.ariaLabel = "new message indicator", n.appendChild(a)), a.textContent = $ > 99 ? "99+" : $.toString()) : a && (a.remove(), a = null);
  };
  return {
    open: u,
    close: v,
    update: l,
    destroy: f,
    setBadge: d
  };
}
var M1 = D, U1 = Gi.filter, B1 = nn, D1 = B1("filter");
M1({ target: "Array", proto: !0, forced: !D1 }, {
  filter: function(r) {
    return U1(this, r, arguments.length > 1 ? arguments[1] : void 0);
  }
});
function Oa(e) {
  try {
    return !isNaN(+e);
  } catch {
    return !1;
  }
}
function F1(e) {
  if (!e) return !1;
  try {
    var r = e.toString().split(".").map(function(o) {
      return o.trim();
    }).filter(Boolean);
    if (r.length !== 3) return !1;
    var t = gi(r, 3), n = t[0], a = t[1], i = t[2];
    return Oa(n) && Oa(a) && Oa(i);
  } catch {
    return !1;
  }
}
var yv = { exports: {} }, mv = {}, G1 = Ce, H1 = be, $v = Yt.f, z1 = qr, bv = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], W1 = function(e) {
  try {
    return $v(e);
  } catch {
    return z1(bv);
  }
};
mv.f = function(r) {
  return bv && G1(r) === "Window" ? W1(r) : $v(H1(r));
};
var K1 = T, q1 = K1(function() {
  if (typeof ArrayBuffer == "function") {
    var e = new ArrayBuffer(8);
    Object.isExtensible(e) && Object.defineProperty(e, "a", { value: 8 });
  }
}), V1 = T, Y1 = H, X1 = Ce, Qu = q1, Pt = Object.isExtensible, J1 = V1(function() {
  Pt(1);
}), Q1 = J1 || Qu ? function(r) {
  return !Y1(r) || Qu && X1(r) === "ArrayBuffer" ? !1 : Pt ? Pt(r) : !0;
} : Pt, Z1 = T, eO = !Z1(function() {
  return Object.isExtensible(Object.preventExtensions({}));
}), rO = D, tO = x, nO = Kt, aO = H, uo = Y, iO = fe.f, Zu = Yt, oO = mv, co = Q1, sO = bi, uO = eO, wv = !1, $e = sO("meta"), cO = 0, lo = function(e) {
  iO(e, $e, { value: {
    objectID: "O" + cO++,
    // object ID
    weakData: {}
    // weak collections IDs
  } });
}, lO = function(e, r) {
  if (!aO(e)) return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
  if (!uo(e, $e)) {
    if (!co(e)) return "F";
    if (!r) return "E";
    lo(e);
  }
  return e[$e].objectID;
}, vO = function(e, r) {
  if (!uo(e, $e)) {
    if (!co(e)) return !0;
    if (!r) return !1;
    lo(e);
  }
  return e[$e].weakData;
}, fO = function(e) {
  return uO && wv && co(e) && !uo(e, $e) && lo(e), e;
}, dO = function() {
  hO.enable = function() {
  }, wv = !0;
  var e = Zu.f, r = tO([].splice), t = {};
  t[$e] = 1, e(t).length && (Zu.f = function(n) {
    for (var a = e(n), i = 0, o = a.length; i < o; i++)
      if (a[i] === $e) {
        r(a, i, 1);
        break;
      }
    return a;
  }, rO({ target: "Object", stat: !0, forced: !0 }, {
    getOwnPropertyNames: oO.f
  }));
}, hO = yv.exports = {
  enable: dO,
  fastKey: lO,
  getWeakData: vO,
  onFreeze: fO
};
nO[$e] = !0;
var Sv = yv.exports, pO = N, gO = H, ec = xi, yO = function(e, r, t) {
  var n, a;
  return (
    // it can work only with native `setPrototypeOf`
    ec && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    pO(n = r.constructor) && n !== t && gO(a = n.prototype) && a !== t.prototype && ec(e, a), e
  );
}, mO = D, $O = A, bO = x, rc = Ci, wO = oe, SO = Sv, EO = tn, OO = Kr, IO = N, PO = Fe, Ia = H, Pa = T, TO = cl, RO = He, CO = yO, _O = function(e, r, t) {
  var n = e.indexOf("Map") !== -1, a = e.indexOf("Weak") !== -1, i = n ? "set" : "add", o = $O[e], s = o && o.prototype, c = o, u = {}, v = function(S) {
    var w = bO(s[S]);
    wO(
      s,
      S,
      S === "add" ? function(_) {
        return w(this, _ === 0 ? 0 : _), this;
      } : S === "delete" ? function(P) {
        return a && !Ia(P) ? !1 : w(this, P === 0 ? 0 : P);
      } : S === "get" ? function(_) {
        return a && !Ia(_) ? void 0 : w(this, _ === 0 ? 0 : _);
      } : S === "has" ? function(_) {
        return a && !Ia(_) ? !1 : w(this, _ === 0 ? 0 : _);
      } : function(_, ue) {
        return w(this, _ === 0 ? 0 : _, ue), this;
      }
    );
  }, l = rc(
    e,
    !IO(o) || !(a || s.forEach && !Pa(function() {
      new o().entries().next();
    }))
  );
  if (l)
    c = t.getConstructor(r, e, n, i), SO.enable();
  else if (rc(e, !0)) {
    var f = new c(), d = f[i](a ? {} : -0, 1) !== f, g = Pa(function() {
      f.has(1);
    }), $ = TO(function(S) {
      new o(S);
    }), m = !a && Pa(function() {
      for (var S = new o(), w = 5; w--; ) S[i](w, w);
      return !S.has(-0);
    });
    $ || (c = r(function(S, w) {
      OO(S, s);
      var P = CO(new o(), S, c);
      return PO(w) || EO(w, P[i], { that: P, AS_ENTRIES: n }), P;
    }), c.prototype = s, s.constructor = c), (g || m) && (v("delete"), v("has"), n && v("get")), (m || d) && v(i), a && s.clear && delete s.clear;
  }
  return u[e] = c, mO({ global: !0, constructor: !0, forced: c !== o }, u), RO(c, e), a || t.setStrong(c, e, n), c;
}, tc = Xr, xO = Jt, nc = ev, LO = _e, AO = Kr, jO = Fe, NO = tn, kO = Zi, mt = ln, MO = Lc, Ir = G, ac = Sv.fastKey, Ev = Re, ic = Ev.set, Ta = Ev.getterFor, UO = {
  getConstructor: function(e, r, t, n) {
    var a = e(function(u, v) {
      AO(u, i), ic(u, {
        type: r,
        index: tc(null),
        first: void 0,
        last: void 0,
        size: 0
      }), Ir || (u.size = 0), jO(v) || NO(v, u[n], { that: u, AS_ENTRIES: t });
    }), i = a.prototype, o = Ta(r), s = function(u, v, l) {
      var f = o(u), d = c(u, v), g, $;
      return d ? d.value = l : (f.last = d = {
        index: $ = ac(v, !0),
        key: v,
        value: l,
        previous: g = f.last,
        next: void 0,
        removed: !1
      }, f.first || (f.first = d), g && (g.next = d), Ir ? f.size++ : u.size++, $ !== "F" && (f.index[$] = d)), u;
    }, c = function(u, v) {
      var l = o(u), f = ac(v), d;
      if (f !== "F") return l.index[f];
      for (d = l.first; d; d = d.next)
        if (d.key === v) return d;
    };
    return nc(i, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function() {
        for (var v = this, l = o(v), f = l.first; f; )
          f.removed = !0, f.previous && (f.previous = f.previous.next = void 0), f = f.next;
        l.first = l.last = void 0, l.index = tc(null), Ir ? l.size = 0 : v.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      delete: function(u) {
        var v = this, l = o(v), f = c(v, u);
        if (f) {
          var d = f.next, g = f.previous;
          delete l.index[f.index], f.removed = !0, g && (g.next = d), d && (d.previous = g), l.first === f && (l.first = d), l.last === f && (l.last = g), Ir ? l.size-- : v.size--;
        }
        return !!f;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function(v) {
        for (var l = o(this), f = LO(v, arguments.length > 1 ? arguments[1] : void 0), d; d = d ? d.next : l.first; )
          for (f(d.value, d.key, this); d && d.removed; ) d = d.previous;
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function(v) {
        return !!c(this, v);
      }
    }), nc(i, t ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function(v) {
        var l = c(this, v);
        return l && l.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function(v, l) {
        return s(this, v === 0 ? 0 : v, l);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function(v) {
        return s(this, v = v === 0 ? 0 : v, v);
      }
    }), Ir && xO(i, "size", {
      configurable: !0,
      get: function() {
        return o(this).size;
      }
    }), a;
  },
  setStrong: function(e, r, t) {
    var n = r + " Iterator", a = Ta(r), i = Ta(n);
    kO(e, r, function(o, s) {
      ic(this, {
        type: n,
        target: o,
        state: a(o),
        kind: s,
        last: void 0
      });
    }, function() {
      for (var o = i(this), s = o.kind, c = o.last; c && c.removed; ) c = c.previous;
      return !o.target || !(o.last = c = c ? c.next : o.state.first) ? (o.target = void 0, mt(void 0, !0)) : mt(s === "keys" ? c.key : s === "values" ? c.value : [c.key, c.value], !1);
    }, t ? "entries" : "values", !t, !0), MO(r);
  }
}, BO = _O, DO = UO;
BO("Map", function(e) {
  return function() {
    return e(this, arguments.length ? arguments[0] : void 0);
  };
}, DO);
function FO(e) {
  var r = document.createElement("div");
  r.id = e, r.className = "tdw-widget";
  var t = /* @__PURE__ */ new Map(), n = function() {
    r.remove(), t.forEach(function(v) {
      return v.destroy();
    }), t.clear();
  }, a = function(v, l) {
    t.set(v, l), r.appendChild(l.element);
  }, i = function(v) {
    var l = t.get(v);
    l && (l.destroy(), t.delete(v));
  }, o = function() {
    r.style.visibility = "visible", r.style.pointerEvents = "auto";
  }, s = function() {
    r.style.visibility = "hidden", r.style.pointerEvents = "none";
  }, c = function() {
    return !!document.getElementById(e);
  };
  return {
    element: r,
    append: a,
    remove: i,
    show: o,
    hide: s,
    isMounted: c,
    destroy: n
  };
}
function GO() {
  var e = document.createElement("div");
  e.className = "tdw-widget-loading", e.id = "tdw-widget-loading", e.ariaLabel = "Loading", e.innerHTML = ['<div class="tdw-widget-content">', '<span class="tdw-loader"></span>', "</div>"].join("");
  var r = function() {
    e.remove();
  };
  return {
    element: e,
    destroy: r
  };
}
function HO(e) {
  var r = document.createElement("iframe");
  r.title = "Chat Widget", r.allowFullscreen = !0, r.style.display = "none";
  var t = function() {
    r.style.display = "block", e();
  };
  r.addEventListener("load", t);
  var n = function() {
    r.removeEventListener("load", t), r.remove();
  };
  return {
    element: r,
    destroy: n
  };
}
var zO = "talkdesk-chat-widget", oc = "loading-element", WO = "iframe-element", KO = function() {
  var r = Ee.getAllConfig(), t = r.touchpoint, n = r.appProps, a = n != null && n.proxyHost ? "//".concat(n.proxyHost).concat(Pr.tdChatSdk) : "", i = (t == null ? void 0 : t.release_version) || "", o = F1(i);
  return "".concat(a || "https://talkdeskchatsdk.talkdeskapp.com", "/v2/widget/").concat(o ? i : "latest", "/index.html?touchpointId=").concat(n == null ? void 0 : n.touchpointId);
}, qO = function() {
  return "./widget/latest/preview.html";
};
function VO(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = FO(zO), a = HO(function() {
    n.remove(oc);
  });
  n.append(oc, GO()), n.hide(), t && n.element.setAttribute("data-preview", "");
  var i = function() {
    n.isMounted() || (e.appendChild(n.element), a.element.src = t ? qO() : KO(), n.append(WO, a), r && a.element.contentWindow && r(a.element.contentWindow));
  }, o = function() {
    i();
  }, s = function(d) {
    var g = d.height;
    g && (n.element.style.height = typeof g == "string" ? g : "".concat(g, "px"));
  }, c = function() {
    i(), n.show();
  }, u = function() {
    n.hide();
  }, v = function() {
    n.destroy();
  }, l = function() {
    var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, g = d.enableResponsiveLayout, $ = g === void 0 ? !1 : g;
    $ ? n.element.setAttribute("data-responsive-layout", "true") : n.element.removeAttribute("data-responsive-layout");
  };
  return {
    initInBackground: o,
    resize: s,
    open: c,
    close: u,
    destroy: v,
    update: l
  };
}
var YO = ["enableResponsiveLayout", "enableUserInput", "enablePointMoveTriggerButton"];
function XO(e, r) {
  var t = document.getElementById(e);
  if (!t)
    throw new Error('The element not exist, element id = "#'.concat(e, '"'));
  var n = r.touchpointId || r.flowId;
  if (!n.trim())
    throw new Error("The td chat jssdk touchpointId or flowId no exist");
  if (!r.region)
    throw new Error("The td chat jssdk region not exist");
  Ee.setAppProps(k(k({}, r), {}, {
    touchpointId: n
  }));
  var a = [], i = null, o = !1, s = !1, c = null, u = null, v = null, l = Sa.empty(), f = Sa.empty(), d = Sa.empty(), g = E1({
    root: t
  }), $ = k1(g.element, function() {
    w();
  }), m = VO(g.element, function(M) {
    u = new D$({
      name: "SDK",
      sender: M,
      topic: q.Topic,
      debug: !1
    }), u.register(q.Methods.FrameReady, function() {
      if (!s) {
        var O;
        s = !0, (O = c) === null || O === void 0 || O(!0), $.open();
      }
    }), u.register(q.Methods.FrameResize, function(O) {
      m.resize(O);
    }), u.register(q.Methods.Maximize, function() {
      w();
    }), u.register(q.Methods.Minimize, function() {
      P();
    }), u.register(q.Methods.GetAllConfig, function() {
      return Ee.getAllConfig();
    }), u.register(q.Methods.GetCredentials, function(O) {
      return Pw(k(k({}, O), {}, {
        app_id: n
      }));
    }), u.register(q.Methods.ConversationStart, function() {
      Ea(d.current, function(O) {
        console.error('An error occurred in "onConversationStart" callback.', O);
      });
    }), u.register(q.Methods.SetBadge, function(O) {
      $.setBadge(O);
    }), u.register(q.Methods.GetTdAccessToken, function() {
      return Iw(n);
    }), u.register(q.Methods.DownloadTranscript, /* @__PURE__ */ function() {
      var O = V(/* @__PURE__ */ R().mark(function j(Z) {
        return R().wrap(function(ee) {
          for (; ; ) switch (ee.prev = ee.next) {
            case 0:
              return ee.next = 2, h1(Z);
            case 2:
              return ee.abrupt("return", !0);
            case 3:
            case "end":
              return ee.stop();
          }
        }, j);
      }));
      return function(j) {
        return O.apply(this, arguments);
      };
    }());
  }), S = /* @__PURE__ */ function() {
    var M = V(/* @__PURE__ */ R().mark(function O() {
      var j, Z, We, ee, Jr, Le, Ae, ge, p, h, y, E = arguments;
      return R().wrap(function(I) {
        for (; ; ) switch (I.prev = I.next) {
          case 0:
            return j = E.length > 0 && E[0] !== void 0 ? E[0] : {}, Z = j.enableResponsiveLayout, We = Z === void 0 ? !0 : Z, ee = j.enableUserInput, Jr = ee === void 0 ? !0 : ee, Le = j.enablePointMoveTriggerButton, Ae = Le === void 0 ? !1 : Le, ge = Nv(j, YO), i || (i = Tw(n)), I.next = 4, i;
          case 4:
            if (p = I.sent, p != null && p.active) {
              I.next = 7;
              break;
            }
            return I.abrupt("return", !1);
          case 7:
            if (h = Ee.setAppConfig(k(k({}, ge), {}, {
              enableResponsiveLayout: We,
              enableUserInput: Jr,
              enablePointMoveTriggerButton: Ae,
              languageCode: (ge == null ? void 0 : ge.languageCode) || (r == null ? void 0 : r.languageCode)
            })), Ee.setTouchpoint(p), o) {
              I.next = 19;
              break;
            }
            return o = !0, v = S1(g.element), a.push(b1(g.element)), m.update({
              enableResponsiveLayout: We
            }), $.update({
              enablePointMoveTriggerButton: Ae
            }), w1(g.element, h == null ? void 0 : h.styles, p), I.abrupt("return", new Promise(function(B) {
              c = B, m.initInBackground();
            }));
          case 19:
            return I.next = 21, (y = u) === null || y === void 0 ? void 0 : y.trigger(q.Methods.UpdateAppConfigs, {
              appConfig: h
            });
          case 21:
            return I.abrupt("return", !0);
          case 22:
          case "end":
            return I.stop();
        }
      }, O);
    }));
    return function() {
      return M.apply(this, arguments);
    };
  }(), w = function() {
    var O;
    $.close(), m.open(), (O = u) === null || O === void 0 || O.trigger(q.Methods.FrameOpened), Ea(l.current, function(j) {
      console.error('An error occurred in "onOpenWebchat" callback.', j);
    });
  }, P = function() {
    m.close(), $.open(), Ea(f.current, function(O) {
      console.error('An error occurred in "onCloseWebchat" callback.', O);
    });
  }, _ = function() {
    var O, j;
    $.destroy(), m.destroy(), g.destroy(), a.forEach(function(Z) {
      return Z();
    }), a.length = 0, (O = u) === null || O === void 0 || O.destroy(), u = null, f.current = null, l.current = null, d.current = null, Ee.clearAll(), i = null, o = !1, s = !1, c = null, (j = v) === null || j === void 0 || j(), v = null;
  }, ue = function(O) {
    var j;
    Ee.setContextParam(O), (j = u) === null || j === void 0 || j.trigger(q.Methods.UpdateContext, O);
  };
  return {
    open: w,
    close: P,
    init: S,
    destroy: _,
    setContextParam: ue,
    set onOpenWebchat(M) {
      l.current = M;
    },
    set onCloseWebchat(M) {
      f.current = M;
    },
    set onConversationStart(M) {
      d.current = M;
    }
  };
}
function JO(e, r) {
  return XO(e, r);
}
export {
  JO as default
};
