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
var _e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ce = function(e) {
  return e && e.Math === Math && e;
}, O = (
  // eslint-disable-next-line es/no-global-this -- safe
  ce(typeof globalThis == "object" && globalThis) || ce(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  ce(typeof self == "object" && self) || ce(typeof _e == "object" && _e) || ce(typeof _e == "object" && _e) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), pi = { exports: {} }, pn = O, ds = Object.defineProperty, xt = function(e, r) {
  try {
    ds(pn, e, { value: r, configurable: !0, writable: !0 });
  } catch {
    pn[e] = r;
  }
  return r;
}, ps = O, hs = xt, hn = "__core-js_shared__", gn = pi.exports = ps[hn] || hs(hn, {});
(gn.versions || (gn.versions = [])).push({
  version: "3.38.0",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var jt = pi.exports, yn = jt, hi = function(e, r) {
  return yn[e] || (yn[e] = r || {});
}, S = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, gs = S, ir = !gs(function() {
  var e = (function() {
  }).bind();
  return typeof e != "function" || e.hasOwnProperty("prototype");
}), gi = ir, yi = Function.prototype, ct = yi.call, ys = gi && yi.bind.bind(ct, ct), I = gi ? ys : function(e) {
  return function() {
    return ct.apply(e, arguments);
  };
}, se = function(e) {
  return e == null;
}, ms = se, bs = TypeError, $e = function(e) {
  if (ms(e)) throw new bs("Can't call method on " + e);
  return e;
}, $s = $e, ws = Object, we = function(e) {
  return ws($s(e));
}, Ss = I, Os = we, Es = Ss({}.hasOwnProperty), j = Object.hasOwn || function(r, t) {
  return Es(Os(r), t);
}, Is = I, Ps = 0, Ts = Math.random(), Cs = Is(1 .toString), At = function(e) {
  return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Cs(++Ps + Ts, 36);
}, Rs = O, mn = Rs.navigator, bn = mn && mn.userAgent, Se = bn ? String(bn) : "", mi = O, wr = Se, $n = mi.process, wn = mi.Deno, Sn = $n && $n.versions || wn && wn.version, On = Sn && Sn.v8, A, Ze;
On && (A = On.split("."), Ze = A[0] > 0 && A[0] < 4 ? 1 : +(A[0] + A[1]));
!Ze && wr && (A = wr.match(/Edge\/(\d+)/), (!A || A[1] >= 74) && (A = wr.match(/Chrome\/(\d+)/), A && (Ze = +A[1])));
var or = Ze, En = or, _s = S, xs = O, js = xs.String, bi = !!Object.getOwnPropertySymbols && !_s(function() {
  var e = Symbol("symbol detection");
  return !js(e) || !(Object(e) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && En && En < 41;
}), As = bi, $i = As && !Symbol.sham && typeof Symbol.iterator == "symbol", Ls = O, Ms = hi, In = j, Ns = At, Ds = bi, Fs = $i, re = Ls.Symbol, Sr = Ms("wks"), Bs = Fs ? re.for || re : re && re.withoutSetter || Ns, P = function(e) {
  return In(Sr, e) || (Sr[e] = Ds && In(re, e) ? re[e] : Bs("Symbol." + e)), Sr[e];
}, ks = P, Gs = ks("toStringTag"), wi = {};
wi[Gs] = "z";
var Lt = String(wi) === "[object z]", Or = typeof document == "object" && document.all, E = typeof Or > "u" && Or !== void 0 ? function(e) {
  return typeof e == "function" || e === Or;
} : function(e) {
  return typeof e == "function";
}, L = {}, Us = S, x = !Us(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), Ks = E, T = function(e) {
  return typeof e == "object" ? e !== null : Ks(e);
}, Ws = O, Pn = T, vt = Ws.document, Vs = Pn(vt) && Pn(vt.createElement), sr = function(e) {
  return Vs ? vt.createElement(e) : {};
}, zs = x, Hs = S, Ys = sr, Si = !zs && !Hs(function() {
  return Object.defineProperty(Ys("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), Xs = x, Js = S, Oi = Xs && Js(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), qs = T, Qs = String, Zs = TypeError, M = function(e) {
  if (qs(e)) return e;
  throw new Zs(Qs(e) + " is not an object");
}, eu = ir, xe = Function.prototype.call, N = eu ? xe.bind(xe) : function() {
  return xe.apply(xe, arguments);
}, Er = O, ru = E, tu = function(e) {
  return ru(e) ? e : void 0;
}, X = function(e, r) {
  return arguments.length < 2 ? tu(Er[e]) : Er[e] && Er[e][r];
}, nu = I, ur = nu({}.isPrototypeOf), au = X, iu = E, ou = ur, su = $i, uu = Object, Ei = su ? function(e) {
  return typeof e == "symbol";
} : function(e) {
  var r = au("Symbol");
  return iu(r) && ou(r.prototype, uu(e));
}, cu = String, cr = function(e) {
  try {
    return cu(e);
  } catch {
    return "Object";
  }
}, vu = E, lu = cr, fu = TypeError, W = function(e) {
  if (vu(e)) return e;
  throw new fu(lu(e) + " is not a function");
}, du = W, pu = se, Mt = function(e, r) {
  var t = e[r];
  return pu(t) ? void 0 : du(t);
}, Ir = N, Pr = E, Tr = T, hu = TypeError, gu = function(e, r) {
  var t, n;
  if (r === "string" && Pr(t = e.toString) && !Tr(n = Ir(t, e)) || Pr(t = e.valueOf) && !Tr(n = Ir(t, e)) || r !== "string" && Pr(t = e.toString) && !Tr(n = Ir(t, e))) return n;
  throw new hu("Can't convert object to primitive value");
}, yu = N, Tn = T, Cn = Ei, mu = Mt, bu = gu, $u = P, wu = TypeError, Su = $u("toPrimitive"), Ou = function(e, r) {
  if (!Tn(e) || Cn(e)) return e;
  var t = mu(e, Su), n;
  if (t) {
    if (r === void 0 && (r = "default"), n = yu(t, e, r), !Tn(n) || Cn(n)) return n;
    throw new wu("Can't convert object to primitive value");
  }
  return r === void 0 && (r = "number"), bu(e, r);
}, Eu = Ou, Iu = Ei, Ii = function(e) {
  var r = Eu(e, "string");
  return Iu(r) ? r : r + "";
}, Pu = x, Tu = Si, Cu = Oi, je = M, Rn = Ii, Ru = TypeError, Cr = Object.defineProperty, _u = Object.getOwnPropertyDescriptor, Rr = "enumerable", _r = "configurable", xr = "writable";
L.f = Pu ? Cu ? function(r, t, n) {
  if (je(r), t = Rn(t), je(n), typeof r == "function" && t === "prototype" && "value" in n && xr in n && !n[xr]) {
    var a = _u(r, t);
    a && a[xr] && (r[t] = n.value, n = {
      configurable: _r in n ? n[_r] : a[_r],
      enumerable: Rr in n ? n[Rr] : a[Rr],
      writable: !1
    });
  }
  return Cr(r, t, n);
} : Cr : function(r, t, n) {
  if (je(r), t = Rn(t), je(n), Tu) try {
    return Cr(r, t, n);
  } catch {
  }
  if ("get" in n || "set" in n) throw new Ru("Accessors not supported");
  return "value" in n && (r[t] = n.value), r;
};
var Pi = { exports: {} }, lt = x, xu = j, Ti = Function.prototype, ju = lt && Object.getOwnPropertyDescriptor, Nt = xu(Ti, "name"), Au = Nt && (function() {
}).name === "something", Lu = Nt && (!lt || lt && ju(Ti, "name").configurable), vr = {
  EXISTS: Nt,
  PROPER: Au,
  CONFIGURABLE: Lu
}, Mu = I, Nu = E, ft = jt, Du = Mu(Function.toString);
Nu(ft.inspectSource) || (ft.inspectSource = function(e) {
  return Du(e);
});
var Dt = ft.inspectSource, Fu = O, Bu = E, _n = Fu.WeakMap, ku = Bu(_n) && /native code/.test(String(_n)), lr = function(e, r) {
  return {
    enumerable: !(e & 1),
    configurable: !(e & 2),
    writable: !(e & 4),
    value: r
  };
}, Gu = x, Uu = L, Ku = lr, Oe = Gu ? function(e, r, t) {
  return Uu.f(e, r, Ku(1, t));
} : function(e, r, t) {
  return e[r] = t, e;
}, Wu = hi, Vu = At, xn = Wu("keys"), Ft = function(e) {
  return xn[e] || (xn[e] = Vu(e));
}, fr = {}, zu = ku, Ci = O, Hu = T, Yu = Oe, jr = j, Ar = jt, Xu = Ft, Ju = fr, jn = "Object already initialized", dt = Ci.TypeError, qu = Ci.WeakMap, er, me, rr, Qu = function(e) {
  return rr(e) ? me(e) : er(e, {});
}, Zu = function(e) {
  return function(r) {
    var t;
    if (!Hu(r) || (t = me(r)).type !== e)
      throw new dt("Incompatible receiver, " + e + " required");
    return t;
  };
};
if (zu || Ar.state) {
  var D = Ar.state || (Ar.state = new qu());
  D.get = D.get, D.has = D.has, D.set = D.set, er = function(e, r) {
    if (D.has(e)) throw new dt(jn);
    return r.facade = e, D.set(e, r), r;
  }, me = function(e) {
    return D.get(e) || {};
  }, rr = function(e) {
    return D.has(e);
  };
} else {
  var Q = Xu("state");
  Ju[Q] = !0, er = function(e, r) {
    if (jr(e, Q)) throw new dt(jn);
    return r.facade = e, Yu(e, Q, r), r;
  }, me = function(e) {
    return jr(e, Q) ? e[Q] : {};
  }, rr = function(e) {
    return jr(e, Q);
  };
}
var Ee = {
  set: er,
  get: me,
  has: rr,
  enforce: Qu,
  getterFor: Zu
}, Bt = I, ec = S, rc = E, Ae = j, pt = x, tc = vr.CONFIGURABLE, nc = Dt, Ri = Ee, ac = Ri.enforce, ic = Ri.get, An = String, ze = Object.defineProperty, oc = Bt("".slice), sc = Bt("".replace), uc = Bt([].join), cc = pt && !ec(function() {
  return ze(function() {
  }, "length", { value: 8 }).length !== 8;
}), vc = String(String).split("String"), lc = Pi.exports = function(e, r, t) {
  oc(An(r), 0, 7) === "Symbol(" && (r = "[" + sc(An(r), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), t && t.getter && (r = "get " + r), t && t.setter && (r = "set " + r), (!Ae(e, "name") || tc && e.name !== r) && (pt ? ze(e, "name", { value: r, configurable: !0 }) : e.name = r), cc && t && Ae(t, "arity") && e.length !== t.arity && ze(e, "length", { value: t.arity });
  try {
    t && Ae(t, "constructor") && t.constructor ? pt && ze(e, "prototype", { writable: !1 }) : e.prototype && (e.prototype = void 0);
  } catch {
  }
  var n = ac(e);
  return Ae(n, "source") || (n.source = uc(vc, typeof r == "string" ? r : "")), e;
};
Function.prototype.toString = lc(function() {
  return rc(this) && ic(this).source || nc(this);
}, "toString");
var _i = Pi.exports, fc = E, dc = L, pc = _i, hc = xt, k = function(e, r, t, n) {
  n || (n = {});
  var a = n.enumerable, i = n.name !== void 0 ? n.name : r;
  if (fc(t) && pc(t, i, n), n.global)
    a ? e[r] = t : hc(r, t);
  else {
    try {
      n.unsafe ? e[r] && (a = !0) : delete e[r];
    } catch {
    }
    a ? e[r] = t : dc.f(e, r, {
      value: t,
      enumerable: !1,
      configurable: !n.nonConfigurable,
      writable: !n.nonWritable
    });
  }
  return e;
}, xi = I, gc = xi({}.toString), yc = xi("".slice), J = function(e) {
  return yc(gc(e), 8, -1);
}, mc = Lt, bc = E, He = J, $c = P, wc = $c("toStringTag"), Sc = Object, Oc = He(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", Ec = function(e, r) {
  try {
    return e[r];
  } catch {
  }
}, dr = mc ? He : function(e) {
  var r, t, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (t = Ec(r = Sc(e), wc)) == "string" ? t : Oc ? He(r) : (n = He(r)) === "Object" && bc(r.callee) ? "Arguments" : n;
}, Ic = Lt, Pc = dr, Tc = Ic ? {}.toString : function() {
  return "[object " + Pc(this) + "]";
}, Cc = Lt, Rc = k, _c = Tc;
Cc || Rc(Object.prototype, "toString", _c, { unsafe: !0 });
var xc = {
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
function jc(e, r) {
  return !e || !r ? !1 : e.contains ? e.contains(r) : e.childNodes ? Array.prototype.indexOf.call(e.childNodes, r) !== -1 : !1;
}
function ht(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Ac(e) {
  if (Array.isArray(e)) return e;
}
function Lc(e) {
  if (Array.isArray(e)) return ht(e);
}
function ji(e, r) {
  if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function Mc(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Mi(n.key), n);
  }
}
function Ai(e, r, t) {
  return r && Mc(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function R(e, r, t) {
  return (r = Mi(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Nc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Dc(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, a, i, o, u = [], v = !0, s = !1;
    try {
      if (i = (t = t.call(e)).next, r === 0) {
        if (Object(t) !== t) return;
        v = !1;
      } else for (; !(v = (n = i.call(t)).done) && (u.push(n.value), u.length !== r); v = !0) ;
    } catch (c) {
      s = !0, a = c;
    } finally {
      try {
        if (!v && t.return != null && (o = t.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw a;
      }
    }
    return u;
  }
}
function Fc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ln(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function F(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ln(Object(t), !0).forEach(function(n) {
      R(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ln(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Li(e, r) {
  return Ac(e) || Dc(e, r) || Ni(e, r) || Fc();
}
function kc(e) {
  return Lc(e) || Nc(e) || Ni(e) || Bc();
}
function Gc(e, r) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Mi(e) {
  var r = Gc(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function Ni(e, r) {
  if (e) {
    if (typeof e == "string") return ht(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ht(e, r) : void 0;
  }
}
var kt = {}, Di = {}, Fi = {}.propertyIsEnumerable, Bi = Object.getOwnPropertyDescriptor, Uc = Bi && !Fi.call({ 1: 2 }, 1);
Di.f = Uc ? function(r) {
  var t = Bi(this, r);
  return !!t && t.enumerable;
} : Fi;
var Kc = I, Wc = S, Vc = J, Lr = Object, zc = Kc("".split), Gt = Wc(function() {
  return !Lr("z").propertyIsEnumerable(0);
}) ? function(e) {
  return Vc(e) === "String" ? zc(e, "") : Lr(e);
} : Lr, Hc = Gt, Yc = $e, q = function(e) {
  return Hc(Yc(e));
}, Xc = x, Jc = N, qc = Di, Qc = lr, Zc = q, ev = Ii, rv = j, tv = Si, Mn = Object.getOwnPropertyDescriptor;
kt.f = Xc ? Mn : function(r, t) {
  if (r = Zc(r), t = ev(t), tv) try {
    return Mn(r, t);
  } catch {
  }
  if (rv(r, t)) return Qc(!Jc(qc.f, r, t), r[t]);
};
var pr = {}, nv = Math.ceil, av = Math.floor, iv = Math.trunc || function(r) {
  var t = +r;
  return (t > 0 ? av : nv)(t);
}, ov = iv, Ut = function(e) {
  var r = +e;
  return r !== r || r === 0 ? 0 : ov(r);
}, sv = Ut, uv = Math.max, cv = Math.min, vv = function(e, r) {
  var t = sv(e);
  return t < 0 ? uv(t + r, 0) : cv(t, r);
}, lv = Ut, fv = Math.min, dv = function(e) {
  var r = lv(e);
  return r > 0 ? fv(r, 9007199254740991) : 0;
}, pv = dv, hr = function(e) {
  return pv(e.length);
}, hv = q, gv = vv, yv = hr, Nn = function(e) {
  return function(r, t, n) {
    var a = hv(r), i = yv(a);
    if (i === 0) return !e && -1;
    var o = gv(n, i), u;
    if (e && t !== t) {
      for (; i > o; )
        if (u = a[o++], u !== u) return !0;
    } else for (; i > o; o++)
      if ((e || o in a) && a[o] === t) return e || o || 0;
    return !e && -1;
  };
}, mv = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Nn(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Nn(!1)
}, bv = I, Mr = j, $v = q, wv = mv.indexOf, Sv = fr, Dn = bv([].push), ki = function(e, r) {
  var t = $v(e), n = 0, a = [], i;
  for (i in t) !Mr(Sv, i) && Mr(t, i) && Dn(a, i);
  for (; r.length > n; ) Mr(t, i = r[n++]) && (~wv(a, i) || Dn(a, i));
  return a;
}, Kt = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], Ov = ki, Ev = Kt, Iv = Ev.concat("length", "prototype");
pr.f = Object.getOwnPropertyNames || function(r) {
  return Ov(r, Iv);
};
var Gi = {};
Gi.f = Object.getOwnPropertySymbols;
var Pv = X, Tv = I, Cv = pr, Rv = Gi, _v = M, xv = Tv([].concat), jv = Pv("Reflect", "ownKeys") || function(r) {
  var t = Cv.f(_v(r)), n = Rv.f;
  return n ? xv(t, n(r)) : t;
}, Fn = j, Av = jv, Lv = kt, Mv = L, Nv = function(e, r, t) {
  for (var n = Av(r), a = Mv.f, i = Lv.f, o = 0; o < n.length; o++) {
    var u = n[o];
    !Fn(e, u) && !(t && Fn(t, u)) && a(e, u, i(r, u));
  }
}, Dv = S, Fv = E, Bv = /#|\.prototype\./, Ie = function(e, r) {
  var t = Gv[kv(e)];
  return t === Kv ? !0 : t === Uv ? !1 : Fv(r) ? Dv(r) : !!r;
}, kv = Ie.normalize = function(e) {
  return String(e).replace(Bv, ".").toLowerCase();
}, Gv = Ie.data = {}, Uv = Ie.NATIVE = "N", Kv = Ie.POLYFILL = "P", Wt = Ie, Le = O, Wv = kt.f, Vv = Oe, zv = k, Hv = xt, Yv = Nv, Xv = Wt, C = function(e, r) {
  var t = e.target, n = e.global, a = e.stat, i, o, u, v, s, c;
  if (n ? o = Le : a ? o = Le[t] || Hv(t, {}) : o = Le[t] && Le[t].prototype, o) for (u in r) {
    if (s = r[u], e.dontCallGetSet ? (c = Wv(o, u), v = c && c.value) : v = o[u], i = Xv(n ? u : t + (a ? "." : "#") + u, e.forced), !i && v !== void 0) {
      if (typeof s == typeof v) continue;
      Yv(s, v);
    }
    (e.sham || v && v.sham) && Vv(s, "sham", !0), zv(o, u, s, e);
  }
}, Jv = S, Ui = function(e, r) {
  var t = [][e];
  return !!t && Jv(function() {
    t.call(null, r || function() {
      return 1;
    }, 1);
  });
}, qv = C, Qv = I, Zv = Gt, el = q, rl = Ui, tl = Qv([].join), nl = Zv !== Object, al = nl || !rl("join", ",");
qv({ target: "Array", proto: !0, forced: al }, {
  join: function(r) {
    return tl(el(this), r === void 0 ? "," : r);
  }
});
var il = J, ol = I, sl = function(e) {
  if (il(e) === "Function") return ol(e);
}, Bn = sl, ul = W, cl = ir, vl = Bn(Bn.bind), Pe = function(e, r) {
  return ul(e), r === void 0 ? e : cl ? vl(e, r) : function() {
    return e.apply(r, arguments);
  };
}, ll = J, Ki = Array.isArray || function(r) {
  return ll(r) === "Array";
}, fl = I, dl = S, Wi = E, pl = dr, hl = X, gl = Dt, Vi = function() {
}, zi = hl("Reflect", "construct"), Vt = /^\s*(?:class|function)\b/, yl = fl(Vt.exec), ml = !Vt.test(Vi), ve = function(r) {
  if (!Wi(r)) return !1;
  try {
    return zi(Vi, [], r), !0;
  } catch {
    return !1;
  }
}, Hi = function(r) {
  if (!Wi(r)) return !1;
  switch (pl(r)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return ml || !!yl(Vt, gl(r));
  } catch {
    return !0;
  }
};
Hi.sham = !0;
var Yi = !zi || dl(function() {
  var e;
  return ve(ve.call) || !ve(Object) || !ve(function() {
    e = !0;
  }) || e;
}) ? Hi : ve, kn = Ki, bl = Yi, $l = T, wl = P, Sl = wl("species"), Gn = Array, Ol = function(e) {
  var r;
  return kn(e) && (r = e.constructor, bl(r) && (r === Gn || kn(r.prototype)) ? r = void 0 : $l(r) && (r = r[Sl], r === null && (r = void 0))), r === void 0 ? Gn : r;
}, El = Ol, Xi = function(e, r) {
  return new (El(e))(r === 0 ? 0 : r);
}, Il = Pe, Pl = I, Tl = Gt, Cl = we, Rl = hr, _l = Xi, Un = Pl([].push), G = function(e) {
  var r = e === 1, t = e === 2, n = e === 3, a = e === 4, i = e === 6, o = e === 7, u = e === 5 || i;
  return function(v, s, c, l) {
    for (var f = Cl(v), d = Tl(f), g = Rl(d), y = Il(s, c), m = 0, p = l || _l, h = r ? p(v, g) : t || o ? p(v, 0) : void 0, $, w; g > m; m++) if ((u || m in d) && ($ = d[m], w = y($, m, f), e))
      if (r) h[m] = w;
      else if (w) switch (e) {
        case 3:
          return !0;
        case 5:
          return $;
        case 6:
          return m;
        case 2:
          Un(h, $);
      }
      else switch (e) {
        case 4:
          return !1;
        case 7:
          Un(h, $);
      }
    return i ? -1 : n || a ? a : h;
  };
}, zt = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: G(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: G(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: G(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: G(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: G(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: G(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: G(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: G(7)
}, xl = S, jl = P, Al = or, Ll = jl("species"), Ht = function(e) {
  return Al >= 51 || !xl(function() {
    var r = [], t = r.constructor = {};
    return t[Ll] = function() {
      return { foo: 1 };
    }, r[e](Boolean).foo !== 1;
  });
}, Ml = C, Nl = zt.map, Dl = Ht, Fl = Dl("map");
Ml({ target: "Array", proto: !0, forced: !Fl }, {
  map: function(r) {
    return Nl(this, r, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var Bl = ki, kl = Kt, Ji = Object.keys || function(r) {
  return Bl(r, kl);
}, Gl = C, Ul = we, qi = Ji, Kl = S, Wl = Kl(function() {
  qi(1);
});
Gl({ target: "Object", stat: !0, forced: Wl }, {
  keys: function(r) {
    return qi(Ul(r));
  }
});
function Vl(e) {
  var r = e.charCodeAt(0);
  return r >= 65 && r <= 90;
}
function Kn(e) {
  var r = kc(e).map(function(t, n) {
    return Vl(t) ? n === 0 ? t.toLowerCase() : "-" + t.toLowerCase() : t;
  }).join("");
  return "--".concat(r);
}
function zl(e, r) {
  var t = Object.keys(r);
  return t.length ? t.reduce(function(n, a) {
    return a.indexOf("-") > -1 || a.indexOf("_") > -1 ? n : (e.style.setProperty(Kn(a), r[a]), F(F({}, n), {}, R({}, Kn(a), r[a])));
  }, {}) : {};
}
function Qi(e, r) {
  var t;
  if (typeof e == "string" ? t = e.indexOf("#") > -1 ? document.querySelector(e) : document.getElementById(e) : t = e, t)
    return zl(t, r);
}
function Hl(e) {
  var r = document.createElement("style");
  return r.id = e, r;
}
function Nr(e, r) {
  return r.querySelector("#".concat(e));
}
function Yl(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document.head, n = Nr(r, t);
  if (n)
    return n.innerHTML = e, function() {
      var i = Nr(r, t);
      i && t.removeChild(i);
    };
  var a = Hl(r);
  return a.innerHTML = e, t.appendChild(a), function() {
    var i = Nr(r, t);
    i && t.removeChild(i);
  };
}
function Xl(e, r) {
  try {
    return JSON.stringify(e);
  } catch {
    return "";
  }
}
function Jl(e, r, t) {
  try {
    return JSON.parse(e);
  } catch {
    return r;
  }
}
var ql = /* @__PURE__ */ function() {
  function e(r) {
    var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ji(this, e), R(this, "_moving", !1), R(this, "_moved", !1), R(this, "_initialXY", [0, 0]), R(this, "_startXY", [0, 0]), R(this, "_boundaryValue", 5), R(this, "_rb", null), R(this, "_isPC", !0), this.current = r, this.options = n, this.onMoveStart = this.onMoveStart.bind(this), this.onMoving = this.onMoving.bind(this), this.onMoveEnd = this.onMoveEnd.bind(this), this.removeDocumentListeners = this.removeDocumentListeners.bind(this), this.current.addEventListener("mousedown", this.onMoveStart), this.current.addEventListener("touchstart", this.onMoveStart), this._rb = new ResizeObserver(function() {
      t.reset();
    }), this._rb.observe(document.body);
  }
  return Ai(e, [{
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
      var i = this.getEventInfo(t), o = i.clientXY, u = Li(o, 2), v = u[0], s = u[1], c = v - this._startXY[0], l = s - this._startXY[1];
      Math.abs(c) < this._boundaryValue && Math.abs(l) < this._boundaryValue || (this._moved || (this._moved = !0), this._moving = !0, this.current.style.left = Math.min(Math.max(0, this._initialXY[0] + c), window.innerWidth - this.current.offsetWidth) + "px", this.current.style.top = Math.min(Math.max(0, this._initialXY[1] + l), window.innerHeight - this.current.offsetHeight) + "px", (n = this.options) === null || n === void 0 || (a = n.onChange) === null || a === void 0 || a.call(n, "moving"));
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
}(), Zi = {
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
}, Ql = sr, Dr = Ql("span").classList, Wn = Dr && Dr.constructor && Dr.constructor.prototype, eo = Wn === Object.prototype ? void 0 : Wn, Zl = zt.forEach, ef = Ui, rf = ef("forEach"), tf = rf ? [].forEach : function(r) {
  return Zl(this, r, arguments.length > 1 ? arguments[1] : void 0);
}, Vn = O, zn = Zi, nf = eo, Fr = tf, af = Oe, ro = function(e) {
  if (e && e.forEach !== Fr) try {
    af(e, "forEach", Fr);
  } catch {
    e.forEach = Fr;
  }
};
for (var Br in zn)
  zn[Br] && ro(Vn[Br] && Vn[Br].prototype);
ro(nf);
function of(e, r) {
  var t = F({}, e);
  return Object.keys(t).forEach(function(n) {
    (e[n] === void 0 || e[n] === null) && delete t[n], r != null && r.removeEmptyString && e[n] === "" && delete t[n];
  }), t;
}
var le = O, sf = Se, uf = J, Me = function(e) {
  return sf.slice(0, e.length) === e;
}, to = function() {
  return Me("Bun/") ? "BUN" : Me("Cloudflare-Workers") ? "CLOUDFLARE" : Me("Deno/") ? "DENO" : Me("Node.js/") ? "NODE" : le.Bun && typeof Bun.version == "string" ? "BUN" : le.Deno && typeof Deno.version == "object" ? "DENO" : uf(le.process) === "process" ? "NODE" : le.window && le.document ? "BROWSER" : "REST";
}(), cf = to, Yt = cf === "NODE", vf = I, lf = W, ff = function(e, r, t) {
  try {
    return vf(lf(Object.getOwnPropertyDescriptor(e, r)[t]));
  } catch {
  }
}, df = T, pf = function(e) {
  return df(e) || e === null;
}, hf = pf, gf = String, yf = TypeError, mf = function(e) {
  if (hf(e)) return e;
  throw new yf("Can't set " + gf(e) + " as a prototype");
}, bf = ff, $f = T, wf = $e, Sf = mf, Xt = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e = !1, r = {}, t;
  try {
    t = bf(Object.prototype, "__proto__", "set"), t(r, []), e = r instanceof Array;
  } catch {
  }
  return function(a, i) {
    return wf(a), Sf(i), $f(a) && (e ? t(a, i) : a.__proto__ = i), a;
  };
}() : void 0), Of = L.f, Ef = j, If = P, Hn = If("toStringTag"), Te = function(e, r, t) {
  e && !t && (e = e.prototype), e && !Ef(e, Hn) && Of(e, Hn, { configurable: !0, value: r });
}, Yn = _i, Pf = L, no = function(e, r, t) {
  return t.get && Yn(t.get, r, { getter: !0 }), t.set && Yn(t.set, r, { setter: !0 }), Pf.f(e, r, t);
}, Tf = X, Cf = no, Rf = P, _f = x, Xn = Rf("species"), ao = function(e) {
  var r = Tf(e);
  _f && r && !r[Xn] && Cf(r, Xn, {
    configurable: !0,
    get: function() {
      return this;
    }
  });
}, xf = ur, jf = TypeError, Jt = function(e, r) {
  if (xf(r, e)) return e;
  throw new jf("Incorrect invocation");
}, Af = Yi, Lf = cr, Mf = TypeError, Nf = function(e) {
  if (Af(e)) return e;
  throw new Mf(Lf(e) + " is not a constructor");
}, Jn = M, Df = Nf, Ff = se, Bf = P, kf = Bf("species"), Gf = function(e, r) {
  var t = Jn(e).constructor, n;
  return t === void 0 || Ff(n = Jn(t)[kf]) ? r : Df(n);
}, Uf = ir, io = Function.prototype, qn = io.apply, Qn = io.call, Kf = typeof Reflect == "object" && Reflect.apply || (Uf ? Qn.bind(qn) : function() {
  return Qn.apply(qn, arguments);
}), Wf = X, oo = Wf("document", "documentElement"), Vf = I, so = Vf([].slice), zf = TypeError, Hf = function(e, r) {
  if (e < r) throw new zf("Not enough arguments");
  return e;
}, Yf = Se, uo = /(?:ipad|iphone|ipod).*applewebkit/i.test(Yf), _ = O, Xf = Kf, Jf = Pe, Zn = E, qf = j, co = S, ea = oo, Qf = so, ra = sr, Zf = Hf, ed = uo, rd = Yt, gt = _.setImmediate, yt = _.clearImmediate, td = _.process, kr = _.Dispatch, nd = _.Function, ta = _.MessageChannel, ad = _.String, Gr = 0, ge = {}, na = "onreadystatechange", be, V, Ur, Kr;
co(function() {
  be = _.location;
});
var qt = function(e) {
  if (qf(ge, e)) {
    var r = ge[e];
    delete ge[e], r();
  }
}, Wr = function(e) {
  return function() {
    qt(e);
  };
}, aa = function(e) {
  qt(e.data);
}, ia = function(e) {
  _.postMessage(ad(e), be.protocol + "//" + be.host);
};
(!gt || !yt) && (gt = function(r) {
  Zf(arguments.length, 1);
  var t = Zn(r) ? r : nd(r), n = Qf(arguments, 1);
  return ge[++Gr] = function() {
    Xf(t, void 0, n);
  }, V(Gr), Gr;
}, yt = function(r) {
  delete ge[r];
}, rd ? V = function(e) {
  td.nextTick(Wr(e));
} : kr && kr.now ? V = function(e) {
  kr.now(Wr(e));
} : ta && !ed ? (Ur = new ta(), Kr = Ur.port2, Ur.port1.onmessage = aa, V = Jf(Kr.postMessage, Kr)) : _.addEventListener && Zn(_.postMessage) && !_.importScripts && be && be.protocol !== "file:" && !co(ia) ? (V = ia, _.addEventListener("message", aa, !1)) : na in ra("script") ? V = function(e) {
  ea.appendChild(ra("script"))[na] = function() {
    ea.removeChild(this), qt(e);
  };
} : V = function(e) {
  setTimeout(Wr(e), 0);
});
var vo = {
  set: gt,
  clear: yt
}, oa = O, id = x, od = Object.getOwnPropertyDescriptor, sd = function(e) {
  if (!id) return oa[e];
  var r = od(oa, e);
  return r && r.value;
}, lo = function() {
  this.head = null, this.tail = null;
};
lo.prototype = {
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
var fo = lo, ud = Se, cd = /ipad|iphone|ipod/i.test(ud) && typeof Pebble < "u", vd = Se, ld = /web0s(?!.*chrome)/i.test(vd), ie = O, fd = sd, sa = Pe, Vr = vo.set, dd = fo, pd = uo, hd = cd, gd = ld, zr = Yt, ua = ie.MutationObserver || ie.WebKitMutationObserver, ca = ie.document, va = ie.process, Ne = ie.Promise, mt = fd("queueMicrotask"), Z, Hr, Yr, De, la;
if (!mt) {
  var Fe = new dd(), Be = function() {
    var e, r;
    for (zr && (e = va.domain) && e.exit(); r = Fe.get(); ) try {
      r();
    } catch (t) {
      throw Fe.head && Z(), t;
    }
    e && e.enter();
  };
  !pd && !zr && !gd && ua && ca ? (Hr = !0, Yr = ca.createTextNode(""), new ua(Be).observe(Yr, { characterData: !0 }), Z = function() {
    Yr.data = Hr = !Hr;
  }) : !hd && Ne && Ne.resolve ? (De = Ne.resolve(void 0), De.constructor = Ne, la = sa(De.then, De), Z = function() {
    la(Be);
  }) : zr ? Z = function() {
    va.nextTick(Be);
  } : (Vr = sa(Vr, ie), Z = function() {
    Vr(Be);
  }), mt = function(e) {
    Fe.head || Z(), Fe.add(e);
  };
}
var yd = mt, md = function(e, r) {
  try {
    arguments.length === 1 ? console.error(e) : console.error(e, r);
  } catch {
  }
}, Qt = function(e) {
  try {
    return { error: !1, value: e() };
  } catch (r) {
    return { error: !0, value: r };
  }
}, bd = O, gr = bd.Promise, $d = O, ye = gr, wd = E, Sd = Wt, Od = Dt, Ed = P, fa = to, Xr = or;
ye && ye.prototype;
var Id = Ed("species"), bt = !1, po = wd($d.PromiseRejectionEvent), Pd = Sd("Promise", function() {
  var e = Od(ye), r = e !== String(ye);
  if (!r && Xr === 66) return !0;
  if (!Xr || Xr < 51 || !/native code/.test(e)) {
    var t = new ye(function(i) {
      i(1);
    }), n = function(i) {
      i(function() {
      }, function() {
      });
    }, a = t.constructor = {};
    if (a[Id] = n, bt = t.then(function() {
    }) instanceof n, !bt) return !0;
  }
  return !r && (fa === "BROWSER" || fa === "DENO") && !po;
}), Ce = {
  CONSTRUCTOR: Pd,
  REJECTION_EVENT: po,
  SUBCLASSING: bt
}, ue = {}, da = W, Td = TypeError, Cd = function(e) {
  var r, t;
  this.promise = new e(function(n, a) {
    if (r !== void 0 || t !== void 0) throw new Td("Bad Promise constructor");
    r = n, t = a;
  }), this.resolve = da(r), this.reject = da(t);
};
ue.f = function(e) {
  return new Cd(e);
};
var Rd = C, tr = Yt, K = O, oe = N, pa = k, ha = Xt, _d = Te, xd = ao, jd = W, Ye = E, Ad = T, Ld = Jt, Md = Gf, ho = vo.set, Zt = yd, Nd = md, Dd = Qt, Fd = fo, go = Ee, nr = gr, en = Ce, yo = ue, yr = "Promise", mo = en.CONSTRUCTOR, Bd = en.REJECTION_EVENT, kd = en.SUBCLASSING, Jr = go.getterFor(yr), Gd = go.set, ee = nr && nr.prototype, H = nr, ke = ee, bo = K.TypeError, $t = K.document, rn = K.process, wt = yo.f, Ud = wt, Kd = !!($t && $t.createEvent && K.dispatchEvent), $o = "unhandledrejection", Wd = "rejectionhandled", ga = 0, wo = 1, Vd = 2, tn = 1, So = 2, Ge, ya, zd, ma, Oo = function(e) {
  var r;
  return Ad(e) && Ye(r = e.then) ? r : !1;
}, Eo = function(e, r) {
  var t = r.value, n = r.state === wo, a = n ? e.ok : e.fail, i = e.resolve, o = e.reject, u = e.domain, v, s, c;
  try {
    a ? (n || (r.rejection === So && Yd(r), r.rejection = tn), a === !0 ? v = t : (u && u.enter(), v = a(t), u && (u.exit(), c = !0)), v === e.promise ? o(new bo("Promise-chain cycle")) : (s = Oo(v)) ? oe(s, v, i, o) : i(v)) : o(t);
  } catch (l) {
    u && !c && u.exit(), o(l);
  }
}, Io = function(e, r) {
  e.notified || (e.notified = !0, Zt(function() {
    for (var t = e.reactions, n; n = t.get(); )
      Eo(n, e);
    e.notified = !1, r && !e.rejection && Hd(e);
  }));
}, Po = function(e, r, t) {
  var n, a;
  Kd ? (n = $t.createEvent("Event"), n.promise = r, n.reason = t, n.initEvent(e, !1, !0), K.dispatchEvent(n)) : n = { promise: r, reason: t }, !Bd && (a = K["on" + e]) ? a(n) : e === $o && Nd("Unhandled promise rejection", t);
}, Hd = function(e) {
  oe(ho, K, function() {
    var r = e.facade, t = e.value, n = ba(e), a;
    if (n && (a = Dd(function() {
      tr ? rn.emit("unhandledRejection", t, r) : Po($o, r, t);
    }), e.rejection = tr || ba(e) ? So : tn, a.error))
      throw a.value;
  });
}, ba = function(e) {
  return e.rejection !== tn && !e.parent;
}, Yd = function(e) {
  oe(ho, K, function() {
    var r = e.facade;
    tr ? rn.emit("rejectionHandled", r) : Po(Wd, r, e.value);
  });
}, te = function(e, r, t) {
  return function(n) {
    e(r, n, t);
  };
}, ne = function(e, r, t) {
  e.done || (e.done = !0, t && (e = t), e.value = r, e.state = Vd, Io(e, !0));
}, St = function(e, r, t) {
  if (!e.done) {
    e.done = !0, t && (e = t);
    try {
      if (e.facade === r) throw new bo("Promise can't be resolved itself");
      var n = Oo(r);
      n ? Zt(function() {
        var a = { done: !1 };
        try {
          oe(
            n,
            r,
            te(St, a, e),
            te(ne, a, e)
          );
        } catch (i) {
          ne(a, i, e);
        }
      }) : (e.value = r, e.state = wo, Io(e, !1));
    } catch (a) {
      ne({ done: !1 }, a, e);
    }
  }
};
if (mo && (H = function(r) {
  Ld(this, ke), jd(r), oe(Ge, this);
  var t = Jr(this);
  try {
    r(te(St, t), te(ne, t));
  } catch (n) {
    ne(t, n);
  }
}, ke = H.prototype, Ge = function(r) {
  Gd(this, {
    type: yr,
    done: !1,
    notified: !1,
    parent: !1,
    reactions: new Fd(),
    rejection: !1,
    state: ga,
    value: void 0
  });
}, Ge.prototype = pa(ke, "then", function(r, t) {
  var n = Jr(this), a = wt(Md(this, H));
  return n.parent = !0, a.ok = Ye(r) ? r : !0, a.fail = Ye(t) && t, a.domain = tr ? rn.domain : void 0, n.state === ga ? n.reactions.add(a) : Zt(function() {
    Eo(a, n);
  }), a.promise;
}), ya = function() {
  var e = new Ge(), r = Jr(e);
  this.promise = e, this.resolve = te(St, r), this.reject = te(ne, r);
}, yo.f = wt = function(e) {
  return e === H || e === zd ? new ya(e) : Ud(e);
}, Ye(nr) && ee !== Object.prototype)) {
  ma = ee.then, kd || pa(ee, "then", function(r, t) {
    var n = this;
    return new H(function(a, i) {
      oe(ma, n, a, i);
    }).then(r, t);
  }, { unsafe: !0 });
  try {
    delete ee.constructor;
  } catch {
  }
  ha && ha(ee, ke);
}
Rd({ global: !0, constructor: !0, wrap: !0, forced: mo }, {
  Promise: H
});
_d(H, yr, !1);
xd(yr);
var Re = {}, Xd = P, Jd = Re, qd = Xd("iterator"), Qd = Array.prototype, Zd = function(e) {
  return e !== void 0 && (Jd.Array === e || Qd[qd] === e);
}, ep = dr, $a = Mt, rp = se, tp = Re, np = P, ap = np("iterator"), To = function(e) {
  if (!rp(e)) return $a(e, ap) || $a(e, "@@iterator") || tp[ep(e)];
}, ip = N, op = W, sp = M, up = cr, cp = To, vp = TypeError, lp = function(e, r) {
  var t = arguments.length < 2 ? cp(e) : r;
  if (op(t)) return sp(ip(t, e));
  throw new vp(up(e) + " is not iterable");
}, fp = N, wa = M, dp = Mt, pp = function(e, r, t) {
  var n, a;
  wa(e);
  try {
    if (n = dp(e, "return"), !n) {
      if (r === "throw") throw t;
      return t;
    }
    n = fp(n, e);
  } catch (i) {
    a = !0, n = i;
  }
  if (r === "throw") throw t;
  if (a) throw n;
  return wa(n), t;
}, hp = Pe, gp = N, yp = M, mp = cr, bp = Zd, $p = hr, Sa = ur, wp = lp, Sp = To, Oa = pp, Op = TypeError, Xe = function(e, r) {
  this.stopped = e, this.result = r;
}, Ea = Xe.prototype, mr = function(e, r, t) {
  var n = t && t.that, a = !!(t && t.AS_ENTRIES), i = !!(t && t.IS_RECORD), o = !!(t && t.IS_ITERATOR), u = !!(t && t.INTERRUPTED), v = hp(r, n), s, c, l, f, d, g, y, m = function(h) {
    return s && Oa(s, "normal", h), new Xe(!0, h);
  }, p = function(h) {
    return a ? (yp(h), u ? v(h[0], h[1], m) : v(h[0], h[1])) : u ? v(h, m) : v(h);
  };
  if (i)
    s = e.iterator;
  else if (o)
    s = e;
  else {
    if (c = Sp(e), !c) throw new Op(mp(e) + " is not iterable");
    if (bp(c)) {
      for (l = 0, f = $p(e); f > l; l++)
        if (d = p(e[l]), d && Sa(Ea, d)) return d;
      return new Xe(!1);
    }
    s = wp(e, c);
  }
  for (g = i ? e.next : s.next; !(y = gp(g, s)).done; ) {
    try {
      d = p(y.value);
    } catch (h) {
      Oa(s, "throw", h);
    }
    if (typeof d == "object" && d && Sa(Ea, d)) return d;
  }
  return new Xe(!1);
}, Ep = P, Co = Ep("iterator"), Ro = !1;
try {
  var Ip = 0, Ia = {
    next: function() {
      return { done: !!Ip++ };
    },
    return: function() {
      Ro = !0;
    }
  };
  Ia[Co] = function() {
    return this;
  }, Array.from(Ia, function() {
    throw 2;
  });
} catch {
}
var _o = function(e, r) {
  try {
    if (!r && !Ro) return !1;
  } catch {
    return !1;
  }
  var t = !1;
  try {
    var n = {};
    n[Co] = function() {
      return {
        next: function() {
          return { done: t = !0 };
        }
      };
    }, e(n);
  } catch {
  }
  return t;
}, Pp = gr, Tp = _o, Cp = Ce.CONSTRUCTOR, xo = Cp || !Tp(function(e) {
  Pp.all(e).then(void 0, function() {
  });
}), Rp = C, _p = N, xp = W, jp = ue, Ap = Qt, Lp = mr, Mp = xo;
Rp({ target: "Promise", stat: !0, forced: Mp }, {
  all: function(r) {
    var t = this, n = jp.f(t), a = n.resolve, i = n.reject, o = Ap(function() {
      var u = xp(t.resolve), v = [], s = 0, c = 1;
      Lp(r, function(l) {
        var f = s++, d = !1;
        c++, _p(u, t, l).then(function(g) {
          d || (d = !0, v[f] = g, --c || a(v));
        }, i);
      }), --c || a(v);
    });
    return o.error && i(o.value), n.promise;
  }
});
var Np = C, Dp = Ce.CONSTRUCTOR, Ot = gr, Fp = X, Bp = E, kp = k, Pa = Ot && Ot.prototype;
Np({ target: "Promise", proto: !0, forced: Dp, real: !0 }, {
  catch: function(e) {
    return this.then(void 0, e);
  }
});
if (Bp(Ot)) {
  var Ta = Fp("Promise").prototype.catch;
  Pa.catch !== Ta && kp(Pa, "catch", Ta, { unsafe: !0 });
}
var Gp = C, Up = N, Kp = W, Wp = ue, Vp = Qt, zp = mr, Hp = xo;
Gp({ target: "Promise", stat: !0, forced: Hp }, {
  race: function(r) {
    var t = this, n = Wp.f(t), a = n.reject, i = Vp(function() {
      var o = Kp(t.resolve);
      zp(r, function(u) {
        Up(o, t, u).then(n.resolve, a);
      });
    });
    return i.error && a(i.value), n.promise;
  }
});
var Yp = C, Xp = ue, Jp = Ce.CONSTRUCTOR;
Yp({ target: "Promise", stat: !0, forced: Jp }, {
  reject: function(r) {
    var t = Xp.f(this), n = t.reject;
    return n(r), t.promise;
  }
});
var qp = M, Qp = T, Zp = ue, eh = function(e, r) {
  if (qp(e), Qp(r) && r.constructor === e) return r;
  var t = Zp.f(e), n = t.resolve;
  return n(r), t.promise;
}, rh = C, th = X, nh = Ce.CONSTRUCTOR, ah = eh;
th("Promise");
rh({ target: "Promise", stat: !0, forced: nh }, {
  resolve: function(r) {
    return ah(this, r);
  }
});
var U = {
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
}, nn = { exports: {} }, ae = typeof Reflect == "object" ? Reflect : null, Ca = ae && typeof ae.apply == "function" ? ae.apply : function(r, t, n) {
  return Function.prototype.apply.call(r, t, n);
}, Je;
ae && typeof ae.ownKeys == "function" ? Je = ae.ownKeys : Object.getOwnPropertySymbols ? Je = function(r) {
  return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r));
} : Je = function(r) {
  return Object.getOwnPropertyNames(r);
};
function ih(e) {
  console && console.warn && console.warn(e);
}
var jo = Number.isNaN || function(r) {
  return r !== r;
};
function b() {
  b.init.call(this);
}
nn.exports = b;
nn.exports.once = ch;
b.EventEmitter = b;
b.prototype._events = void 0;
b.prototype._eventsCount = 0;
b.prototype._maxListeners = void 0;
var Ra = 10;
function br(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(b, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Ra;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || jo(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Ra = e;
  }
});
b.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
b.prototype.setMaxListeners = function(r) {
  if (typeof r != "number" || r < 0 || jo(r))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + r + ".");
  return this._maxListeners = r, this;
};
function Ao(e) {
  return e._maxListeners === void 0 ? b.defaultMaxListeners : e._maxListeners;
}
b.prototype.getMaxListeners = function() {
  return Ao(this);
};
b.prototype.emit = function(r) {
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
    var u = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw u.context = o, u;
  }
  var v = i[r];
  if (v === void 0)
    return !1;
  if (typeof v == "function")
    Ca(v, this, t);
  else
    for (var s = v.length, c = Fo(v, s), n = 0; n < s; ++n)
      Ca(c[n], this, t);
  return !0;
};
function Lo(e, r, t, n) {
  var a, i, o;
  if (br(t), i = e._events, i === void 0 ? (i = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (i.newListener !== void 0 && (e.emit(
    "newListener",
    r,
    t.listener ? t.listener : t
  ), i = e._events), o = i[r]), o === void 0)
    o = i[r] = t, ++e._eventsCount;
  else if (typeof o == "function" ? o = i[r] = n ? [t, o] : [o, t] : n ? o.unshift(t) : o.push(t), a = Ao(e), a > 0 && o.length > a && !o.warned) {
    o.warned = !0;
    var u = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(r) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = r, u.count = o.length, ih(u);
  }
  return e;
}
b.prototype.addListener = function(r, t) {
  return Lo(this, r, t, !1);
};
b.prototype.on = b.prototype.addListener;
b.prototype.prependListener = function(r, t) {
  return Lo(this, r, t, !0);
};
function oh() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Mo(e, r, t) {
  var n = { fired: !1, wrapFn: void 0, target: e, type: r, listener: t }, a = oh.bind(n);
  return a.listener = t, n.wrapFn = a, a;
}
b.prototype.once = function(r, t) {
  return br(t), this.on(r, Mo(this, r, t)), this;
};
b.prototype.prependOnceListener = function(r, t) {
  return br(t), this.prependListener(r, Mo(this, r, t)), this;
};
b.prototype.removeListener = function(r, t) {
  var n, a, i, o, u;
  if (br(t), a = this._events, a === void 0)
    return this;
  if (n = a[r], n === void 0)
    return this;
  if (n === t || n.listener === t)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete a[r], a.removeListener && this.emit("removeListener", r, n.listener || t));
  else if (typeof n != "function") {
    for (i = -1, o = n.length - 1; o >= 0; o--)
      if (n[o] === t || n[o].listener === t) {
        u = n[o].listener, i = o;
        break;
      }
    if (i < 0)
      return this;
    i === 0 ? n.shift() : sh(n, i), n.length === 1 && (a[r] = n[0]), a.removeListener !== void 0 && this.emit("removeListener", r, u || t);
  }
  return this;
};
b.prototype.off = b.prototype.removeListener;
b.prototype.removeAllListeners = function(r) {
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
function No(e, r, t) {
  var n = e._events;
  if (n === void 0)
    return [];
  var a = n[r];
  return a === void 0 ? [] : typeof a == "function" ? t ? [a.listener || a] : [a] : t ? uh(a) : Fo(a, a.length);
}
b.prototype.listeners = function(r) {
  return No(this, r, !0);
};
b.prototype.rawListeners = function(r) {
  return No(this, r, !1);
};
b.listenerCount = function(e, r) {
  return typeof e.listenerCount == "function" ? e.listenerCount(r) : Do.call(e, r);
};
b.prototype.listenerCount = Do;
function Do(e) {
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
b.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Je(this._events) : [];
};
function Fo(e, r) {
  for (var t = new Array(r), n = 0; n < r; ++n)
    t[n] = e[n];
  return t;
}
function sh(e, r) {
  for (; r + 1 < e.length; r++)
    e[r] = e[r + 1];
  e.pop();
}
function uh(e) {
  for (var r = new Array(e.length), t = 0; t < r.length; ++t)
    r[t] = e[t].listener || e[t];
  return r;
}
function ch(e, r) {
  return new Promise(function(t, n) {
    function a(o) {
      e.removeListener(r, i), n(o);
    }
    function i() {
      typeof e.removeListener == "function" && e.removeListener("error", a), t([].slice.call(arguments));
    }
    Bo(e, r, i, { once: !0 }), r !== "error" && vh(e, a, { once: !0 });
  });
}
function vh(e, r, t) {
  typeof e.on == "function" && Bo(e, "error", r, t);
}
function Bo(e, r, t, n) {
  if (typeof e.on == "function")
    n.once ? e.once(r, t) : e.on(r, t);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(r, function a(i) {
      n.once && e.removeEventListener(r, a), t(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var lh = nn.exports;
const fh = /* @__PURE__ */ fs(lh);
var ar = function() {
  return ar = Object.assign || function(r) {
    for (var t, n = 1, a = arguments.length; n < a; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, ar.apply(this, arguments);
};
function _a(e, r, t, n) {
  function a(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function u(c) {
      try {
        s(n.next(c));
      } catch (l) {
        o(l);
      }
    }
    function v(c) {
      try {
        s(n.throw(c));
      } catch (l) {
        o(l);
      }
    }
    function s(c) {
      c.done ? i(c.value) : a(c.value).then(u, v);
    }
    s((n = n.apply(e, [])).next());
  });
}
function xa(e, r) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, a, i, o;
  return o = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function u(s) {
    return function(c) {
      return v([s, c]);
    };
  }
  function v(s) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, s[0] && (t = 0)), t; ) try {
      if (n = 1, a && (i = s[0] & 2 ? a.return : s[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, s[1])).done) return i;
      switch (a = 0, i && (s = [s[0] & 2, i.value]), s[0]) {
        case 0:
        case 1:
          i = s;
          break;
        case 4:
          return t.label++, { value: s[1], done: !1 };
        case 5:
          t.label++, a = s[1], s = [0];
          continue;
        case 7:
          s = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2)) {
            t = 0;
            continue;
          }
          if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
            t.label = s[1];
            break;
          }
          if (s[0] === 6 && t.label < i[1]) {
            t.label = i[1], i = s;
            break;
          }
          if (i && t.label < i[2]) {
            t.label = i[2], t.ops.push(s);
            break;
          }
          i[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      s = r.call(e, t);
    } catch (c) {
      s = [6, c], a = 0;
    } finally {
      n = i = 0;
    }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
var dh = (
  /** @class */
  function() {
    function e(r) {
      this.options = r, this._traceId = 0, this._methods = /* @__PURE__ */ new Map(), this._emitter = new fh(), this._handlerOnMessageByBound = this.handlerOnMessage.bind(this), this.createService(), this.getListener().addEventListener("message", this._handlerOnMessageByBound, !1);
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
      return _a(this, void 0, void 0, function() {
        var t, n;
        return xa(this, function(a) {
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
        t.sendMessage({ id: o, method: r, payload: n, type: "request" }), t.log("Trigger ".concat(r, " | ").concat(o), n), t._emitter.once("response_".concat(o), function(u) {
          i(u.payload), t.log("Receive ".concat(r, " | ").concat(o), e.jsonStringifyData(u));
        });
      });
    }, e.prototype.createId = function() {
      return "".concat(this.options.name, "_").concat(this._traceId++);
    }, e.prototype.createService = function() {
      var r = this;
      this._emitter.on(this.options.topic, function(t) {
        return _a(r, void 0, void 0, function() {
          var n, a, i, o, u;
          return xa(this, function(v) {
            switch (v.label) {
              case 0:
                return n = t.id, a = t.payload, i = t.method, o = this._methods.get(i), o ? [4, e.runHandler(function() {
                  return o.apply(void 0, a);
                })] : [3, 2];
              case 1:
                return u = v.sent(), this.sendMessage({ id: n, method: i, payload: u, type: "response" }), [3, 3];
              case 2:
                this.sendMessage({
                  id: n,
                  method: i,
                  payload: { error: "No found method in service" },
                  type: "response"
                }), v.label = 3;
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
      var t = this.options, n = t.sender, a = t.origin, i = t.topic, o = e.jsonStringifyData(ar(ar({}, r), { topic: i }));
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
        var u = (/* @__PURE__ */ new Date()).toISOString(), v = "[RPC] [".concat(u, "] [").concat(o, "] ").concat(r);
        console.groupCollapsed(v), t != null && t.length && console.info.apply(console, t), console.groupEnd();
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
), ph = /* @__PURE__ */ function() {
  function e() {
    ji(this, e), R(this, "appConfig", {}), R(this, "touchpoint", null), R(this, "appProps", null), R(this, "context", {}), R(this, "participantName", "");
  }
  return Ai(e, [{
    key: "setAppConfig",
    value: function(t) {
      var n, a = (t == null ? void 0 : t.styles) || {};
      return this.appConfig = F(F(F({}, this.appConfig), t), {}, {
        styles: Object.keys(a).length ? F(F({}, (n = this.appConfig) === null || n === void 0 ? void 0 : n.styles), a) : {}
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
const z = new ph();
var hh = function(r) {
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
  return of(t, {
    removeEmptyString: !0
  });
};
const gh = '.tdw-widget-wrapper{--chat-z-index: 99999;position:fixed;z-index:var(--chat-z-index)}.tdw-widget-wrapper[data-preview]{position:sticky;display:flex;flex-direction:column;gap:24px;align-items:self-end}.tdw-widget{position:fixed;right:20px;bottom:var(--chat-position-bottom, 20px);z-index:var(--chat-z-index);width:var(--chat-container-width, 360px);min-width:360px;height:var(--chat-container-height, 680px);border:none;border-radius:20px;box-shadow:0 32px 20px #00000005,0 16px 16px #0000000a,0 4px 8px #0000000f,0 -4px 24px #00000014;overflow:hidden;transition:height .2s linear;will-change:height;max-height:calc(var(--chat-screen-height) - var(--chat-position-bottom, 20px) - 20px)}.tdw-widget[data-preview]{position:unset}.tdw-widget iframe{width:100%;height:100%;border:none;border-radius:inherit}@media only screen and (max-width: 600px),(max-height: 620px){.tdw-widget[data-responsive-layout=true]{top:0;right:0;bottom:0;left:0;overflow:hidden;width:var(--chat-screen-width, 100%);min-width:var(--chat-screen-width, 100%);max-width:var(--chat-screen-width, 100%);height:var(--chat-screen-height, 100%);min-height:var(--chat-screen-height, 100%);max-height:var(--chat-screen-height, 100%);border-radius:0}}.tdw-widget-trigger{position:fixed;right:var(--trigger-button-position-right, 10px);bottom:var(--trigger-button-position-bottom, 20px);z-index:var(--chat-z-index);display:flex;justify-content:center;align-items:center;width:var(--trigger-button-width, 64px);height:var(--trigger-button-height, 64px);border:none;border-radius:50%;cursor:pointer;background-image:var(--chat-icon, url(https://prd-cdn-talkdesk.talkdesk.com/cdn-assets/latest/talkdesk/product/app-icons/sms.svg));background-color:var(--chat-launcher-color, #1f1f1f);background-size:56%;background-repeat:no-repeat;background-position:center;transition:background-color .1s ease-in-out}.tdw-widget-trigger:hover{background-color:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger[data-preview]{position:relative;right:unset;bottom:unset}.tdw-widget-trigger-badge{position:absolute;top:0;right:0;width:16px;height:16px;line-height:16px;text-align:center;color:#fff;background-color:#f5222d;font-size:10px;border-radius:50%;box-sizing:border-box;transition:right,width,border-radius .25s ease}.tdw-widget-trigger-badge-more{right:-4px;width:28px;border-radius:48px}.tdw-widget-loading{display:flex;flex-direction:column;width:100%;height:100%}.tdw-widget-header{height:64px;background-color:var(--chat-header-background-color, #f8f8f8);border-top-left-radius:8px;border-top-right-radius:8px}.tdw-widget-content{display:flex;flex-direction:column;justify-content:center;align-items:center;height:calc(100% - 56px);padding:16px;box-sizing:border-box}.tdw-loader{position:relative;width:100px;height:10px}.tdw-loader:before,.tdw-loader:after{content:"";position:absolute;top:0;left:0;width:10px;height:10px;margin-left:25%;border-radius:50%;box-shadow:20px 0 #e9e9e9;background:#e9e9e9;animation:move-x 1s linear infinite}.tdw-loader:after{box-shadow:none;transform:translate(40px) scale(1);z-index:2;animation:loading 1s linear infinite}@keyframes loading{0%,5%{transform:translate(40px) scale(1);background:#e9e9e9}10%{transform:translate(40px) scale(1);background:var(--chat-theme-color, #1f1f1f)}40%{transform:translate(20px) scale(1.5);background:var(--chat-theme-color, #1f1f1f)}90%,95%{transform:translate(0) scale(1);background:var(--chat-theme-color, #1f1f1f)}to{transform:translate(0) scale(1);background:#e9e9e9}}@keyframes move-x{0%,10%{transform:translate(0)}90%,to{transform:translate(20px)}}';
var yh = "talkdesk-chat-widget-style";
function mh(e) {
  var r, t, n, a = e == null ? void 0 : e.config, i = a ? Jl(a, {}) : e == null ? void 0 : e.widgetSettings, o = {};
  if (i != null && (r = i.appearance) !== null && r !== void 0 && (r = r.theme) !== null && r !== void 0 && r.brandColor) {
    var u, v;
    o.chatThemeColor = i == null || (u = i.appearance) === null || u === void 0 ? void 0 : u.theme.brandColor, o.chatHoverThemeColor = i == null || (v = i.appearance) === null || v === void 0 ? void 0 : v.theme.brandColor;
  }
  if (i != null && (t = i.appearance) !== null && t !== void 0 && (t = t.launcher) !== null && t !== void 0 && t.color) {
    var s, c;
    o.chatLauncherColor = i == null || (s = i.appearance) === null || s === void 0 || (s = s.launcher) === null || s === void 0 ? void 0 : s.color, o.chatHoverLauncherColor = i == null || (c = i.appearance) === null || c === void 0 || (c = c.launcher) === null || c === void 0 ? void 0 : c.color;
  }
  if (i != null && (n = i.appearance) !== null && n !== void 0 && (n = n.launcher) !== null && n !== void 0 && n.iconUrl) {
    var l;
    o.chatIcon = i == null || (l = i.appearance) === null || l === void 0 || (l = l.launcher) === null || l === void 0 ? void 0 : l.iconUrl;
  }
  return o;
}
function bh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
  return hh(F(F({}, mh(r)), e));
}
function $h(e) {
  var r = [];
  return r.push(Yl(gh, yh, e)), function() {
    r.forEach(function(t) {
      return t();
    }), r.length = 0;
  };
}
function wh(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0, n = bh(r, t), a = Object.keys(n);
  if (a.length)
    return Qi(e, n);
}
function Sh(e, r) {
  var t = function() {
    Qi(e, {
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
var ja = "tdw-widget-wrapper";
function Oh(e) {
  var r = e.root, t = e.isPreview, n = t === void 0 ? !1 : t, a = document.createElement("div");
  return a.className = ja, a.setAttribute("data-".concat(ja), ""), n && a.setAttribute("data-preview", ""), r.appendChild(a), {
    element: a,
    destroy: function() {
      jc(r, a) && r.removeChild(a), a.remove();
    }
  };
}
var Eh = dr, Ih = String, $r = function(e) {
  if (Eh(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
  return Ih(e);
}, Ph = M, Th = function() {
  var e = Ph(this), r = "";
  return e.hasIndices && (r += "d"), e.global && (r += "g"), e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.dotAll && (r += "s"), e.unicode && (r += "u"), e.unicodeSets && (r += "v"), e.sticky && (r += "y"), r;
}, Ch = N, Rh = j, _h = ur, xh = Th, Aa = RegExp.prototype, jh = function(e) {
  var r = e.flags;
  return r === void 0 && !("flags" in Aa) && !Rh(e, "flags") && _h(Aa, e) ? Ch(xh, e) : r;
}, Ah = vr.PROPER, Lh = k, Mh = M, La = $r, Nh = S, Dh = jh, an = "toString", ko = RegExp.prototype, Go = ko[an], Fh = Nh(function() {
  return Go.call({ source: "a", flags: "b" }) !== "/a/b";
}), Bh = Ah && Go.name !== an;
(Fh || Bh) && Lh(ko, an, function() {
  var r = Mh(this), t = La(r.source), n = La(Dh(r));
  return "/" + t + "/" + n;
}, { unsafe: !0 });
var Ma = "talkdesk-chat-widget-trigger";
function kh(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = document.createElement("button");
  n.id = Ma, n.className = "tdw-widget-trigger", n.ariaLabel = "Open chat widget", t && n.setAttribute("data-preview", "");
  var a = null, i = null, o = function() {
    var y;
    (y = i) === null || y === void 0 || y.destroy(), i = null;
  }, u = function() {
    i || (i = new ql(n, {
      onClick: function() {
      }
    }));
  }, v = function() {
    document.getElementById(Ma) || (e.appendChild(n), n.onclick = function() {
    });
  }, s = function() {
    v(), n.style.display = "";
  }, c = function() {
    n.style.display = "none";
  }, l = function(y) {
    var m = y.enablePointMoveTriggerButton;
    m && u();
  }, f = function() {
    o(), n.remove();
  }, d = function(y) {
    y > 0 ? (a || (a = document.createElement("span"), a.className = "tdw-widget-trigger-badge ".concat(y > 9 ? "tdw-widget-trigger-badge-more" : ""), a.ariaLabel = "new message indicator", n.appendChild(a)), a.textContent = y > 99 ? "99+" : y.toString()) : a && (a.remove(), a = null);
  };
  return {
    open: s,
    close: c,
    update: l,
    destroy: f,
    setBadge: d
  };
}
var Gh = TypeError, Uh = 9007199254740991, Kh = function(e) {
  if (e > Uh) throw Gh("Maximum allowed index exceeded");
  return e;
}, Wh = x, Vh = L, zh = lr, Hh = function(e, r, t) {
  Wh ? Vh.f(e, r, zh(0, t)) : e[r] = t;
}, Yh = C, Xh = S, Jh = Ki, qh = T, Qh = we, Zh = hr, Na = Kh, Da = Hh, eg = Xi, rg = Ht, tg = P, ng = or, Uo = tg("isConcatSpreadable"), ag = ng >= 51 || !Xh(function() {
  var e = [];
  return e[Uo] = !1, e.concat()[0] !== e;
}), ig = function(e) {
  if (!qh(e)) return !1;
  var r = e[Uo];
  return r !== void 0 ? !!r : Jh(e);
}, og = !ag || !rg("concat");
Yh({ target: "Array", proto: !0, arity: 1, forced: og }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function(r) {
    var t = Qh(this), n = eg(t, 0), a = 0, i, o, u, v, s;
    for (i = -1, u = arguments.length; i < u; i++)
      if (s = i === -1 ? t : arguments[i], ig(s))
        for (v = Zh(s), Na(a + v), o = 0; o < v; o++, a++) o in s && Da(n, a, s[o]);
      else
        Na(a + 1), Da(n, a++, s);
    return n.length = a, n;
  }
});
var sg = C, ug = zt.filter, cg = Ht, vg = cg("filter");
sg({ target: "Array", proto: !0, forced: !vg }, {
  filter: function(r) {
    return ug(this, r, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var Ko = `	
\v\f\r                　\u2028\u2029\uFEFF`, lg = I, fg = $e, dg = $r, Et = Ko, Fa = lg("".replace), pg = RegExp("^[" + Et + "]+"), hg = RegExp("(^|[^" + Et + "])[" + Et + "]+$"), qr = function(e) {
  return function(r) {
    var t = dg(fg(r));
    return e & 1 && (t = Fa(t, pg, "")), e & 2 && (t = Fa(t, hg, "$1")), t;
  };
}, gg = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: qr(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: qr(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: qr(3)
}, yg = vr.PROPER, mg = S, Ba = Ko, ka = "​᠎", bg = function(e) {
  return mg(function() {
    return !!Ba[e]() || ka[e]() !== ka || yg && Ba[e].name !== e;
  });
}, $g = C, wg = gg.trim, Sg = bg;
$g({ target: "String", proto: !0, forced: Sg("trim") }, {
  trim: function() {
    return wg(this);
  }
});
function Qr(e) {
  try {
    return !isNaN(+e);
  } catch {
    return !1;
  }
}
function Og(e) {
  if (!e) return !1;
  try {
    var r = e.toString().split(".").map(function(o) {
      return o.trim();
    }).filter(Boolean);
    if (r.length !== 3) return !1;
    var t = Li(r, 3), n = t[0], a = t[1], i = t[2];
    return Qr(n) && Qr(a) && Qr(i);
  } catch {
    return !1;
  }
}
var Wo = {}, Eg = x, Ig = Oi, Pg = L, Tg = M, Cg = q, Rg = Ji;
Wo.f = Eg && !Ig ? Object.defineProperties : function(r, t) {
  Tg(r);
  for (var n = Cg(t), a = Rg(t), i = a.length, o = 0, u; i > o; ) Pg.f(r, u = a[o++], n[u]);
  return r;
};
var _g = M, xg = Wo, Ga = Kt, jg = fr, Ag = oo, Lg = sr, Mg = Ft, Ua = ">", Ka = "<", It = "prototype", Pt = "script", Vo = Mg("IE_PROTO"), Zr = function() {
}, zo = function(e) {
  return Ka + Pt + Ua + e + Ka + "/" + Pt + Ua;
}, Wa = function(e) {
  e.write(zo("")), e.close();
  var r = e.parentWindow.Object;
  return e = null, r;
}, Ng = function() {
  var e = Lg("iframe"), r = "java" + Pt + ":", t;
  return e.style.display = "none", Ag.appendChild(e), e.src = String(r), t = e.contentWindow.document, t.open(), t.write(zo("document.F=Object")), t.close(), t.F;
}, Ue, qe = function() {
  try {
    Ue = new ActiveXObject("htmlfile");
  } catch {
  }
  qe = typeof document < "u" ? document.domain && Ue ? Wa(Ue) : Ng() : Wa(Ue);
  for (var e = Ga.length; e--; ) delete qe[It][Ga[e]];
  return qe();
};
jg[Vo] = !0;
var on = Object.create || function(r, t) {
  var n;
  return r !== null ? (Zr[It] = _g(r), n = new Zr(), Zr[It] = null, n[Vo] = r) : n = qe(), t === void 0 ? n : xg.f(n, t);
}, Dg = P, Fg = on, Bg = L.f, Tt = Dg("unscopables"), Ct = Array.prototype;
Ct[Tt] === void 0 && Bg(Ct, Tt, {
  configurable: !0,
  value: Fg(null)
});
var kg = function(e) {
  Ct[Tt][e] = !0;
}, Gg = S, Ug = !Gg(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), Kg = j, Wg = E, Vg = we, zg = Ft, Hg = Ug, Va = zg("IE_PROTO"), Rt = Object, Yg = Rt.prototype, Ho = Hg ? Rt.getPrototypeOf : function(e) {
  var r = Vg(e);
  if (Kg(r, Va)) return r[Va];
  var t = r.constructor;
  return Wg(t) && r instanceof t ? t.prototype : r instanceof Rt ? Yg : null;
}, Xg = S, Jg = E, qg = T, za = Ho, Qg = k, Zg = P, _t = Zg("iterator"), Yo = !1, Y, et, rt;
[].keys && (rt = [].keys(), "next" in rt ? (et = za(za(rt)), et !== Object.prototype && (Y = et)) : Yo = !0);
var ey = !qg(Y) || Xg(function() {
  var e = {};
  return Y[_t].call(e) !== e;
});
ey && (Y = {});
Jg(Y[_t]) || Qg(Y, _t, function() {
  return this;
});
var Xo = {
  IteratorPrototype: Y,
  BUGGY_SAFARI_ITERATORS: Yo
}, ry = Xo.IteratorPrototype, ty = on, ny = lr, ay = Te, iy = Re, oy = function() {
  return this;
}, sy = function(e, r, t, n) {
  var a = r + " Iterator";
  return e.prototype = ty(ry, { next: ny(+!n, t) }), ay(e, a, !1), iy[a] = oy, e;
}, uy = C, cy = N, Jo = vr, vy = E, ly = sy, Ha = Ho, Ya = Xt, fy = Te, dy = Oe, tt = k, py = P, hy = Re, qo = Xo, gy = Jo.PROPER, yy = Jo.CONFIGURABLE, Xa = qo.IteratorPrototype, Ke = qo.BUGGY_SAFARI_ITERATORS, fe = py("iterator"), Ja = "keys", de = "values", qa = "entries", my = function() {
  return this;
}, sn = function(e, r, t, n, a, i, o) {
  ly(t, r, n);
  var u = function(p) {
    if (p === a && f) return f;
    if (!Ke && p && p in c) return c[p];
    switch (p) {
      case Ja:
        return function() {
          return new t(this, p);
        };
      case de:
        return function() {
          return new t(this, p);
        };
      case qa:
        return function() {
          return new t(this, p);
        };
    }
    return function() {
      return new t(this);
    };
  }, v = r + " Iterator", s = !1, c = e.prototype, l = c[fe] || c["@@iterator"] || a && c[a], f = !Ke && l || u(a), d = r === "Array" && c.entries || l, g, y, m;
  if (d && (g = Ha(d.call(new e())), g !== Object.prototype && g.next && (Ha(g) !== Xa && (Ya ? Ya(g, Xa) : vy(g[fe]) || tt(g, fe, my)), fy(g, v, !0))), gy && a === de && l && l.name !== de && (yy ? dy(c, "name", de) : (s = !0, f = function() {
    return cy(l, this);
  })), a)
    if (y = {
      values: u(de),
      keys: i ? f : u(Ja),
      entries: u(qa)
    }, o) for (m in y)
      (Ke || s || !(m in c)) && tt(c, m, y[m]);
    else uy({ target: r, proto: !0, forced: Ke || s }, y);
  return c[fe] !== f && tt(c, fe, f, { name: a }), hy[r] = f, y;
}, un = function(e, r) {
  return { value: e, done: r };
}, by = q, cn = kg, Qa = Re, Qo = Ee, $y = L.f, wy = sn, We = un, Sy = x, Zo = "Array Iterator", Oy = Qo.set, Ey = Qo.getterFor(Zo), Iy = wy(Array, "Array", function(e, r) {
  Oy(this, {
    type: Zo,
    target: by(e),
    // target
    index: 0,
    // next index
    kind: r
    // kind
  });
}, function() {
  var e = Ey(this), r = e.target, t = e.index++;
  if (!r || t >= r.length)
    return e.target = void 0, We(void 0, !0);
  switch (e.kind) {
    case "keys":
      return We(t, !1);
    case "values":
      return We(r[t], !1);
  }
  return We([t, r[t]], !1);
}, "values"), Za = Qa.Arguments = Qa.Array;
cn("keys");
cn("values");
cn("entries");
if (Sy && Za.name !== "values") try {
  $y(Za, "name", { value: "values" });
} catch {
}
var es = { exports: {} }, rs = {}, Py = J, Ty = q, ts = pr.f, Cy = so, ns = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], Ry = function(e) {
  try {
    return ts(e);
  } catch {
    return Cy(ns);
  }
};
rs.f = function(r) {
  return ns && Py(r) === "Window" ? Ry(r) : ts(Ty(r));
};
var _y = S, xy = _y(function() {
  if (typeof ArrayBuffer == "function") {
    var e = new ArrayBuffer(8);
    Object.isExtensible(e) && Object.defineProperty(e, "a", { value: 8 });
  }
}), jy = S, Ay = T, Ly = J, ei = xy, Qe = Object.isExtensible, My = jy(function() {
  Qe(1);
}), Ny = My || ei ? function(r) {
  return !Ay(r) || ei && Ly(r) === "ArrayBuffer" ? !1 : Qe ? Qe(r) : !0;
} : Qe, Dy = S, Fy = !Dy(function() {
  return Object.isExtensible(Object.preventExtensions({}));
}), By = C, ky = I, Gy = fr, Uy = T, vn = j, Ky = L.f, ri = pr, Wy = rs, ln = Ny, Vy = At, zy = Fy, as = !1, B = Vy("meta"), Hy = 0, fn = function(e) {
  Ky(e, B, { value: {
    objectID: "O" + Hy++,
    // object ID
    weakData: {}
    // weak collections IDs
  } });
}, Yy = function(e, r) {
  if (!Uy(e)) return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
  if (!vn(e, B)) {
    if (!ln(e)) return "F";
    if (!r) return "E";
    fn(e);
  }
  return e[B].objectID;
}, Xy = function(e, r) {
  if (!vn(e, B)) {
    if (!ln(e)) return !0;
    if (!r) return !1;
    fn(e);
  }
  return e[B].weakData;
}, Jy = function(e) {
  return zy && as && ln(e) && !vn(e, B) && fn(e), e;
}, qy = function() {
  Qy.enable = function() {
  }, as = !0;
  var e = ri.f, r = ky([].splice), t = {};
  t[B] = 1, e(t).length && (ri.f = function(n) {
    for (var a = e(n), i = 0, o = a.length; i < o; i++)
      if (a[i] === B) {
        r(a, i, 1);
        break;
      }
    return a;
  }, By({ target: "Object", stat: !0, forced: !0 }, {
    getOwnPropertyNames: Wy.f
  }));
}, Qy = es.exports = {
  enable: qy,
  fastKey: Yy,
  getWeakData: Xy,
  onFreeze: Jy
};
Gy[B] = !0;
var is = es.exports, Zy = E, em = T, ti = Xt, rm = function(e, r, t) {
  var n, a;
  return (
    // it can work only with native `setPrototypeOf`
    ti && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    Zy(n = r.constructor) && n !== t && em(a = n.prototype) && a !== t.prototype && ti(e, a), e
  );
}, tm = C, nm = O, am = I, ni = Wt, im = k, om = is, sm = mr, um = Jt, cm = E, vm = se, nt = T, at = S, lm = _o, fm = Te, dm = rm, pm = function(e, r, t) {
  var n = e.indexOf("Map") !== -1, a = e.indexOf("Weak") !== -1, i = n ? "set" : "add", o = nm[e], u = o && o.prototype, v = o, s = {}, c = function(p) {
    var h = am(u[p]);
    im(
      u,
      p,
      p === "add" ? function(w) {
        return h(this, w === 0 ? 0 : w), this;
      } : p === "delete" ? function($) {
        return a && !nt($) ? !1 : h(this, $ === 0 ? 0 : $);
      } : p === "get" ? function(w) {
        return a && !nt(w) ? void 0 : h(this, w === 0 ? 0 : w);
      } : p === "has" ? function(w) {
        return a && !nt(w) ? !1 : h(this, w === 0 ? 0 : w);
      } : function(w, ls) {
        return h(this, w === 0 ? 0 : w, ls), this;
      }
    );
  }, l = ni(
    e,
    !cm(o) || !(a || u.forEach && !at(function() {
      new o().entries().next();
    }))
  );
  if (l)
    v = t.getConstructor(r, e, n, i), om.enable();
  else if (ni(e, !0)) {
    var f = new v(), d = f[i](a ? {} : -0, 1) !== f, g = at(function() {
      f.has(1);
    }), y = lm(function(p) {
      new o(p);
    }), m = !a && at(function() {
      for (var p = new o(), h = 5; h--; ) p[i](h, h);
      return !p.has(-0);
    });
    y || (v = r(function(p, h) {
      um(p, u);
      var $ = dm(new o(), p, v);
      return vm(h) || sm(h, $[i], { that: $, AS_ENTRIES: n }), $;
    }), v.prototype = u, u.constructor = v), (g || m) && (c("delete"), c("has"), n && c("get")), (m || d) && c(i), a && u.clear && delete u.clear;
  }
  return s[e] = v, tm({ global: !0, constructor: !0, forced: v !== o }, s), fm(v, e), a || t.setStrong(v, e, n), v;
}, hm = k, gm = function(e, r, t) {
  for (var n in r) hm(e, n, r[n], t);
  return e;
}, ai = on, ym = no, ii = gm, mm = Pe, bm = Jt, $m = se, wm = mr, Sm = sn, Ve = un, Om = ao, pe = x, oi = is.fastKey, os = Ee, si = os.set, it = os.getterFor, Em = {
  getConstructor: function(e, r, t, n) {
    var a = e(function(s, c) {
      bm(s, i), si(s, {
        type: r,
        index: ai(null),
        first: void 0,
        last: void 0,
        size: 0
      }), pe || (s.size = 0), $m(c) || wm(c, s[n], { that: s, AS_ENTRIES: t });
    }), i = a.prototype, o = it(r), u = function(s, c, l) {
      var f = o(s), d = v(s, c), g, y;
      return d ? d.value = l : (f.last = d = {
        index: y = oi(c, !0),
        key: c,
        value: l,
        previous: g = f.last,
        next: void 0,
        removed: !1
      }, f.first || (f.first = d), g && (g.next = d), pe ? f.size++ : s.size++, y !== "F" && (f.index[y] = d)), s;
    }, v = function(s, c) {
      var l = o(s), f = oi(c), d;
      if (f !== "F") return l.index[f];
      for (d = l.first; d; d = d.next)
        if (d.key === c) return d;
    };
    return ii(i, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function() {
        for (var c = this, l = o(c), f = l.first; f; )
          f.removed = !0, f.previous && (f.previous = f.previous.next = void 0), f = f.next;
        l.first = l.last = void 0, l.index = ai(null), pe ? l.size = 0 : c.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      delete: function(s) {
        var c = this, l = o(c), f = v(c, s);
        if (f) {
          var d = f.next, g = f.previous;
          delete l.index[f.index], f.removed = !0, g && (g.next = d), d && (d.previous = g), l.first === f && (l.first = d), l.last === f && (l.last = g), pe ? l.size-- : c.size--;
        }
        return !!f;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function(c) {
        for (var l = o(this), f = mm(c, arguments.length > 1 ? arguments[1] : void 0), d; d = d ? d.next : l.first; )
          for (f(d.value, d.key, this); d && d.removed; ) d = d.previous;
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function(c) {
        return !!v(this, c);
      }
    }), ii(i, t ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function(c) {
        var l = v(this, c);
        return l && l.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function(c, l) {
        return u(this, c === 0 ? 0 : c, l);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function(c) {
        return u(this, c = c === 0 ? 0 : c, c);
      }
    }), pe && ym(i, "size", {
      configurable: !0,
      get: function() {
        return o(this).size;
      }
    }), a;
  },
  setStrong: function(e, r, t) {
    var n = r + " Iterator", a = it(r), i = it(n);
    Sm(e, r, function(o, u) {
      si(this, {
        type: n,
        target: o,
        state: a(o),
        kind: u,
        last: void 0
      });
    }, function() {
      for (var o = i(this), u = o.kind, v = o.last; v && v.removed; ) v = v.previous;
      return !o.target || !(o.last = v = v ? v.next : o.state.first) ? (o.target = void 0, Ve(void 0, !0)) : Ve(u === "keys" ? v.key : u === "values" ? v.value : [v.key, v.value], !1);
    }, t ? "entries" : "values", !t, !0), Om(r);
  }
}, Im = pm, Pm = Em;
Im("Map", function(e) {
  return function() {
    return e(this, arguments.length ? arguments[0] : void 0);
  };
}, Pm);
var dn = I, Tm = Ut, Cm = $r, Rm = $e, _m = dn("".charAt), ui = dn("".charCodeAt), xm = dn("".slice), ci = function(e) {
  return function(r, t) {
    var n = Cm(Rm(r)), a = Tm(t), i = n.length, o, u;
    return a < 0 || a >= i ? e ? "" : void 0 : (o = ui(n, a), o < 55296 || o > 56319 || a + 1 === i || (u = ui(n, a + 1)) < 56320 || u > 57343 ? e ? _m(n, a) : o : e ? xm(n, a, a + 2) : (o - 55296 << 10) + (u - 56320) + 65536);
  };
}, jm = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: ci(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: ci(!0)
}, Am = jm.charAt, Lm = $r, ss = Ee, Mm = sn, vi = un, us = "String Iterator", Nm = ss.set, Dm = ss.getterFor(us);
Mm(String, "String", function(e) {
  Nm(this, {
    type: us,
    string: Lm(e),
    index: 0
  });
}, function() {
  var r = Dm(this), t = r.string, n = r.index, a;
  return n >= t.length ? vi(void 0, !0) : (a = Am(t, n), r.index += a.length, vi(a, !1));
});
var li = O, cs = Zi, Fm = eo, he = Iy, fi = Oe, Bm = Te, km = P, ot = km("iterator"), st = he.values, vs = function(e, r) {
  if (e) {
    if (e[ot] !== st) try {
      fi(e, ot, st);
    } catch {
      e[ot] = st;
    }
    if (Bm(e, r, !0), cs[r]) {
      for (var t in he)
        if (e[t] !== he[t]) try {
          fi(e, t, he[t]);
        } catch {
          e[t] = he[t];
        }
    }
  }
};
for (var ut in cs)
  vs(li[ut] && li[ut].prototype, ut);
vs(Fm, "DOMTokenList");
function Gm(e) {
  var r = document.createElement("div");
  r.id = e, r.className = "tdw-widget";
  var t = /* @__PURE__ */ new Map(), n = function() {
    r.remove(), t.forEach(function(c) {
      return c.destroy();
    }), t.clear();
  }, a = function(c, l) {
    t.set(c, l), r.appendChild(l.element);
  }, i = function(c) {
    var l = t.get(c);
    l && (l.destroy(), t.delete(c));
  }, o = function() {
    r.style.visibility = "visible", r.style.pointerEvents = "auto";
  }, u = function() {
    r.style.visibility = "hidden", r.style.pointerEvents = "none";
  }, v = function() {
    return !!document.getElementById(e);
  };
  return {
    element: r,
    append: a,
    remove: i,
    show: o,
    hide: u,
    isMounted: v,
    destroy: n
  };
}
function Um() {
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
function Km(e) {
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
var Wm = "talkdesk-chat-widget", di = "loading-element", Vm = "iframe-element", zm = function() {
  var r = z.getAllConfig(), t = r.touchpoint, n = r.appProps, a = n != null && n.proxyHost ? "//".concat(n.proxyHost).concat(xc.tdChatSdk) : "", i = (t == null ? void 0 : t.release_version) || "", o = Og(i);
  return "".concat(a || "https://talkdeskchatsdk.talkdeskapp.com", "/v2/widget/").concat(o ? i : "latest", "/index.html?touchpointId=").concat(n == null ? void 0 : n.touchpointId);
}, Hm = function() {
  return "./widget/latest/preview.html";
};
function Ym(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = Gm(Wm), a = Km(function() {
    n.remove(di);
  });
  n.append(di, Um()), n.hide(), t && n.element.setAttribute("data-preview", "");
  var i = function() {
    n.isMounted() || (e.appendChild(n.element), a.element.src = t ? Hm() : zm(), n.append(Vm, a), r && a.element.contentWindow && r(a.element.contentWindow));
  }, o = function() {
    i();
  }, u = function(d) {
    var g = d.height;
    g && (n.element.style.height = typeof g == "string" ? g : "".concat(g, "px"));
  }, v = function() {
    i(), n.show();
  }, s = function() {
    n.hide();
  }, c = function() {
    n.destroy();
  }, l = function() {
    var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, g = d.enableResponsiveLayout, y = g === void 0 ? !1 : g;
    y ? n.element.setAttribute("data-responsive-layout", "true") : n.element.removeAttribute("data-responsive-layout");
  };
  return {
    initInBackground: o,
    resize: u,
    open: v,
    close: s,
    destroy: c,
    update: l
  };
}
function Xm(e) {
  var r = document.getElementById(e);
  if (!r)
    throw new Error('The element not exist, element id = "#'.concat(e, '"'));
  var t = [], n = null, a = null, i = null, o = !1, u = null, v = null, s = Oh({
    root: r,
    isPreview: !0
  }), c = kh(s.element, function() {
  }, !0), l = Ym(s.element, function(m) {
    i = new dh({
      name: "SDK",
      sender: m,
      topic: U.Topic,
      debug: !1
    }), i.register(U.Methods.GetAllConfig, function() {
      var p = z.getAllConfig();
      return p;
    }), i.register(U.Methods.PreviewReady, function() {
      var p;
      o = !0, (p = i) === null || p === void 0 || p.trigger(U.Methods.UpdatePreviewConfig, u);
    }), i.register(U.Methods.OnSend, function(p) {
      var h;
      (h = n) === null || h === void 0 || h(p);
    }), i.register(U.Methods.OnComposer, function() {
      for (var p, h = arguments.length, $ = new Array(h), w = 0; w < h; w++)
        $[w] = arguments[w];
      (p = a) === null || p === void 0 || p.apply(void 0, $);
    });
  }, !0), f = function() {
    var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    z.setAppConfig(p), t.push($h(s.element)), v || (v = Sh(s.element)), l.open(), c.open();
  }, d = function() {
    var p;
    c.destroy(), l.destroy(), s.destroy(), t.forEach(function(h) {
      return h();
    }), t.length = 0, u = null, z.clearAll(), (p = v) === null || p === void 0 || p(), v = null, n = null, a = null;
  }, g = function(p) {
    var h;
    if (z.setTouchpoint({
      active: !0,
      config: Xl(p == null ? void 0 : p.widgetSettings),
      account_id: ""
    }), z.setParticipantName(p.userName || ""), wh(s.element, (h = z.getAllConfig()) === null || h === void 0 || (h = h.appConfig) === null || h === void 0 ? void 0 : h.styles, p), o) {
      var $;
      ($ = i) === null || $ === void 0 || $.trigger(U.Methods.UpdatePreviewConfig, p);
    } else
      u = p;
  }, y = function(p) {
    var h;
    (h = i) === null || h === void 0 || h.trigger(U.Methods.UpdateMessage, p);
  };
  return {
    init: f,
    destroy: d,
    updateConfig: g,
    updateMessage: y,
    set onSend(m) {
      n = m;
    },
    set onComposer(m) {
      a = m;
    }
  };
}
function Jm(e) {
  return Xm(e);
}
export {
  Jm as default
};
