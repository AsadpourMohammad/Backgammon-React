var Qc = Object.defineProperty;
var Gc = (e, t, n) =>
  t in e
    ? Qc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Z = (e, t, n) => (Gc(e, typeof t != "symbol" ? t + "" : t, n), n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerpolicy && (o.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qn = {},
  Yc = {
    get exports() {
      return Qn;
    },
    set exports(e) {
      Qn = e;
    },
  },
  El = {},
  D = {},
  Xc = {
    get exports() {
      return D;
    },
    set exports(e) {
      D = e;
    },
  },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sr = Symbol.for("react.element"),
  Zc = Symbol.for("react.portal"),
  Jc = Symbol.for("react.fragment"),
  qc = Symbol.for("react.strict_mode"),
  bc = Symbol.for("react.profiler"),
  ef = Symbol.for("react.provider"),
  tf = Symbol.for("react.context"),
  nf = Symbol.for("react.forward_ref"),
  rf = Symbol.for("react.suspense"),
  lf = Symbol.for("react.memo"),
  of = Symbol.for("react.lazy"),
  hu = Symbol.iterator;
function uf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hu && e[hu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ca = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Na = Object.assign,
  za = {};
function gn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = za),
    (this.updater = n || Ca);
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
gn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function La() {}
La.prototype = gn.prototype;
function wi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = za),
    (this.updater = n || Ca);
}
var ki = (wi.prototype = new La());
ki.constructor = wi;
Na(ki, gn.prototype);
ki.isPureReactComponent = !0;
var yu = Array.isArray,
  Ia = Object.prototype.hasOwnProperty,
  Si = { current: null },
  Oa = { key: !0, ref: !0, __self: !0, __source: !0 };
function $a(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ia.call(t, r) && !Oa.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: sr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Si.current,
  };
}
function af(e, t) {
  return {
    $$typeof: sr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function _i(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sr;
}
function sf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var vu = /\/+/g;
function Hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? sf("" + e.key)
    : t.toString(36);
}
function Rr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case sr:
          case Zc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Hl(i, 0) : r),
      yu(l)
        ? ((n = ""),
          e != null && (n = e.replace(vu, "$&/") + "/"),
          Rr(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (_i(l) &&
            (l = af(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(vu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), yu(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + Hl(o, u);
      i += Rr(o, t, n, a, l);
    }
  else if (((a = uf(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Hl(o, u++)), (i += Rr(o, t, n, a, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function vr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Rr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function cf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var fe = { current: null },
  Mr = { transition: null },
  ff = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: Mr,
    ReactCurrentOwner: Si,
  };
L.Children = {
  map: vr,
  forEach: function (e, t, n) {
    vr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!_i(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = gn;
L.Fragment = Jc;
L.Profiler = bc;
L.PureComponent = wi;
L.StrictMode = qc;
L.Suspense = rf;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ff;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Na({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Si.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      Ia.call(t, a) &&
        !Oa.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: sr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: tf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ef, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = $a;
L.createFactory = function (e) {
  var t = $a.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: nf, render: e };
};
L.isValidElement = _i;
L.lazy = function (e) {
  return { $$typeof: of, _payload: { _status: -1, _result: e }, _init: cf };
};
L.memo = function (e, t) {
  return { $$typeof: lf, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = Mr.transition;
  Mr.transition = {};
  try {
    e();
  } finally {
    Mr.transition = t;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
  return fe.current.useCallback(e, t);
};
L.useContext = function (e) {
  return fe.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return fe.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return fe.current.useEffect(e, t);
};
L.useId = function () {
  return fe.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return fe.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return fe.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return fe.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return fe.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return fe.current.useRef(e);
};
L.useState = function (e) {
  return fe.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return fe.current.useTransition();
};
L.version = "18.2.0";
(function (e) {
  e.exports = L;
})(Xc);
const df = Kc(D);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pf = D,
  mf = Symbol.for("react.element"),
  hf = Symbol.for("react.fragment"),
  yf = Object.prototype.hasOwnProperty,
  vf = pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  gf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ba(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) yf.call(t, r) && !gf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: mf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: vf.current,
  };
}
El.Fragment = hf;
El.jsx = Ba;
El.jsxs = Ba;
(function (e) {
  e.exports = El;
})(Yc);
const xi = Qn.Fragment,
  O = Qn.jsx,
  jt = Qn.jsxs;
var ko = {},
  So = {},
  wf = {
    get exports() {
      return So;
    },
    set exports(e) {
      So = e;
    },
  },
  _e = {},
  _o = {},
  kf = {
    get exports() {
      return _o;
    },
    set exports(e) {
      _o = e;
    },
  },
  Da = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(x, N) {
    var z = x.length;
    x.push(N);
    e: for (; 0 < z; ) {
      var G = (z - 1) >>> 1,
        b = x[G];
      if (0 < l(b, N)) (x[G] = N), (x[z] = b), (z = G);
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var N = x[0],
      z = x.pop();
    if (z !== N) {
      x[0] = z;
      e: for (var G = 0, b = x.length, hr = b >>> 1; G < hr; ) {
        var Et = 2 * (G + 1) - 1,
          Vl = x[Et],
          Pt = Et + 1,
          yr = x[Pt];
        if (0 > l(Vl, z))
          Pt < b && 0 > l(yr, Vl)
            ? ((x[G] = yr), (x[Pt] = z), (G = Pt))
            : ((x[G] = Vl), (x[Et] = z), (G = Et));
        else if (Pt < b && 0 > l(yr, z)) (x[G] = yr), (x[Pt] = z), (G = Pt);
        else break e;
      }
    }
    return N;
  }
  function l(x, N) {
    var z = x.sortIndex - N.sortIndex;
    return z !== 0 ? z : x.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    s = [],
    m = 1,
    h = null,
    p = 3,
    g = !1,
    w = !1,
    k = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var N = n(s); N !== null; ) {
      if (N.callback === null) r(s);
      else if (N.startTime <= x)
        r(s), (N.sortIndex = N.expirationTime), t(a, N);
      else break;
      N = n(s);
    }
  }
  function y(x) {
    if (((k = !1), d(x), !w))
      if (n(a) !== null) (w = !0), Ul(_);
      else {
        var N = n(s);
        N !== null && Al(y, N.startTime - x);
      }
  }
  function _(x, N) {
    (w = !1), k && ((k = !1), f(C), (C = -1)), (g = !0);
    var z = p;
    try {
      for (
        d(N), h = n(a);
        h !== null && (!(h.expirationTime > N) || (x && !Ie()));

      ) {
        var G = h.callback;
        if (typeof G == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var b = G(h.expirationTime <= N);
          (N = e.unstable_now()),
            typeof b == "function" ? (h.callback = b) : h === n(a) && r(a),
            d(N);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var hr = !0;
      else {
        var Et = n(s);
        Et !== null && Al(y, Et.startTime - N), (hr = !1);
      }
      return hr;
    } finally {
      (h = null), (p = z), (g = !1);
    }
  }
  var E = !1,
    P = null,
    C = -1,
    Q = 5,
    I = -1;
  function Ie() {
    return !(e.unstable_now() - I < Q);
  }
  function Sn() {
    if (P !== null) {
      var x = e.unstable_now();
      I = x;
      var N = !0;
      try {
        N = P(!0, x);
      } finally {
        N ? _n() : ((E = !1), (P = null));
      }
    } else E = !1;
  }
  var _n;
  if (typeof c == "function")
    _n = function () {
      c(Sn);
    };
  else if (typeof MessageChannel < "u") {
    var mu = new MessageChannel(),
      Hc = mu.port2;
    (mu.port1.onmessage = Sn),
      (_n = function () {
        Hc.postMessage(null);
      });
  } else
    _n = function () {
      j(Sn, 0);
    };
  function Ul(x) {
    (P = x), E || ((E = !0), _n());
  }
  function Al(x, N) {
    C = j(function () {
      x(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), Ul(_));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Q = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (x) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = p;
      }
      var z = p;
      p = N;
      try {
        return x();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, N) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var z = p;
      p = x;
      try {
        return N();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (x, N, z) {
      var G = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? G + z : G))
          : (z = G),
        x)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = z + b),
        (x = {
          id: m++,
          callback: N,
          priorityLevel: x,
          startTime: z,
          expirationTime: b,
          sortIndex: -1,
        }),
        z > G
          ? ((x.sortIndex = z),
            t(s, x),
            n(a) === null &&
              x === n(s) &&
              (k ? (f(C), (C = -1)) : (k = !0), Al(y, z - G)))
          : ((x.sortIndex = b), t(a, x), w || g || ((w = !0), Ul(_))),
        x
      );
    }),
    (e.unstable_shouldYield = Ie),
    (e.unstable_wrapCallback = function (x) {
      var N = p;
      return function () {
        var z = p;
        p = N;
        try {
          return x.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(Da);
(function (e) {
  e.exports = Da;
})(kf);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ra = D,
  Se = _o;
function v(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ma = new Set(),
  Gn = {};
function Wt(e, t) {
  fn(e, t), fn(e + "Capture", t);
}
function fn(e, t) {
  for (Gn[e] = t, e = 0; e < t.length; e++) Ma.add(t[e]);
}
var Xe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  xo = Object.prototype.hasOwnProperty,
  Sf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  gu = {},
  wu = {};
function _f(e) {
  return xo.call(wu, e)
    ? !0
    : xo.call(gu, e)
    ? !1
    : Sf.test(e)
    ? (wu[e] = !0)
    : ((gu[e] = !0), !1);
}
function xf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ef(e, t, n, r) {
  if (t === null || typeof t > "u" || xf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function de(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    le[e] = new de(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  le[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  le[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  le[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    le[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  le[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  le[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  le[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  le[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ei = /[\-:]([a-z])/g;
function Pi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ei, Pi);
    le[t] = new de(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ei, Pi);
    le[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ei, Pi);
  le[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  le[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new de(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ci(e, t, n, r) {
  var l = le.hasOwnProperty(t) ? le[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ef(t, n, l, r) && (n = null),
    r || l === null
      ? _f(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var et = Ra.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gr = Symbol.for("react.element"),
  Ht = Symbol.for("react.portal"),
  Qt = Symbol.for("react.fragment"),
  Ni = Symbol.for("react.strict_mode"),
  Eo = Symbol.for("react.profiler"),
  Ta = Symbol.for("react.provider"),
  Fa = Symbol.for("react.context"),
  zi = Symbol.for("react.forward_ref"),
  Po = Symbol.for("react.suspense"),
  Co = Symbol.for("react.suspense_list"),
  Li = Symbol.for("react.memo"),
  nt = Symbol.for("react.lazy"),
  ja = Symbol.for("react.offscreen"),
  ku = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ku && e[ku]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  Ql;
function On(e) {
  if (Ql === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ql = (t && t[1]) || "";
    }
  return (
    `
` +
    Ql +
    e
  );
}
var Gl = !1;
function Kl(e, t) {
  if (!e || Gl) return "";
  Gl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Gl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? On(e) : "";
}
function Pf(e) {
  switch (e.tag) {
    case 5:
      return On(e.type);
    case 16:
      return On("Lazy");
    case 13:
      return On("Suspense");
    case 19:
      return On("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Kl(e.type, !1)), e;
    case 11:
      return (e = Kl(e.type.render, !1)), e;
    case 1:
      return (e = Kl(e.type, !0)), e;
    default:
      return "";
  }
}
function No(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qt:
      return "Fragment";
    case Ht:
      return "Portal";
    case Eo:
      return "Profiler";
    case Ni:
      return "StrictMode";
    case Po:
      return "Suspense";
    case Co:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Fa:
        return (e.displayName || "Context") + ".Consumer";
      case Ta:
        return (e._context.displayName || "Context") + ".Provider";
      case zi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Li:
        return (
          (t = e.displayName || null), t !== null ? t : No(e.type) || "Memo"
        );
      case nt:
        (t = e._payload), (e = e._init);
        try {
          return No(e(t));
        } catch {}
    }
  return null;
}
function Cf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return No(t);
    case 8:
      return t === Ni ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function gt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Wa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Nf(e) {
  var t = Wa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function wr(e) {
  e._valueTracker || (e._valueTracker = Nf(e));
}
function Ua(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Wa(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Zr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zo(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Su(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Aa(e, t) {
  (t = t.checked), t != null && Ci(e, "checked", t, !1);
}
function Lo(e, t) {
  Aa(e, t);
  var n = gt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Io(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Io(e, t.type, gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function _u(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Io(e, t, n) {
  (t !== "number" || Zr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $n = Array.isArray;
function rn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + gt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Oo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(v(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function xu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(v(92));
      if ($n(n)) {
        if (1 < n.length) throw Error(v(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: gt(n) };
}
function Va(e, t) {
  var n = gt(t.value),
    r = gt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Eu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ha(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function $o(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ha(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var kr,
  Qa = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        kr = kr || document.createElement("div"),
          kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = kr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Kn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  zf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function (e) {
  zf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rn[t] = Rn[e]);
  });
});
function Ga(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Rn.hasOwnProperty(e) && Rn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ka(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ga(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Lf = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Bo(e, t) {
  if (t) {
    if (Lf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(v(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(v(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(v(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(v(62));
  }
}
function Do(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ro = null;
function Ii(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Mo = null,
  ln = null,
  on = null;
function Pu(e) {
  if ((e = dr(e))) {
    if (typeof Mo != "function") throw Error(v(280));
    var t = e.stateNode;
    t && ((t = Ll(t)), Mo(e.stateNode, e.type, t));
  }
}
function Ya(e) {
  ln ? (on ? on.push(e) : (on = [e])) : (ln = e);
}
function Xa() {
  if (ln) {
    var e = ln,
      t = on;
    if (((on = ln = null), Pu(e), t)) for (e = 0; e < t.length; e++) Pu(t[e]);
  }
}
function Za(e, t) {
  return e(t);
}
function Ja() {}
var Yl = !1;
function qa(e, t, n) {
  if (Yl) return e(t, n);
  Yl = !0;
  try {
    return Za(e, t, n);
  } finally {
    (Yl = !1), (ln !== null || on !== null) && (Ja(), Xa());
  }
}
function Yn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ll(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(v(231, t, typeof n));
  return n;
}
var To = !1;
if (Xe)
  try {
    var En = {};
    Object.defineProperty(En, "passive", {
      get: function () {
        To = !0;
      },
    }),
      window.addEventListener("test", En, En),
      window.removeEventListener("test", En, En);
  } catch {
    To = !1;
  }
function If(e, t, n, r, l, o, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (m) {
    this.onError(m);
  }
}
var Mn = !1,
  Jr = null,
  qr = !1,
  Fo = null,
  Of = {
    onError: function (e) {
      (Mn = !0), (Jr = e);
    },
  };
function $f(e, t, n, r, l, o, i, u, a) {
  (Mn = !1), (Jr = null), If.apply(Of, arguments);
}
function Bf(e, t, n, r, l, o, i, u, a) {
  if (($f.apply(this, arguments), Mn)) {
    if (Mn) {
      var s = Jr;
      (Mn = !1), (Jr = null);
    } else throw Error(v(198));
    qr || ((qr = !0), (Fo = s));
  }
}
function Ut(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ba(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Cu(e) {
  if (Ut(e) !== e) throw Error(v(188));
}
function Df(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ut(e)), t === null)) throw Error(v(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Cu(l), e;
        if (o === r) return Cu(l), t;
        o = o.sibling;
      }
      throw Error(v(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(v(189));
      }
    }
    if (n.alternate !== r) throw Error(v(190));
  }
  if (n.tag !== 3) throw Error(v(188));
  return n.stateNode.current === n ? e : t;
}
function es(e) {
  return (e = Df(e)), e !== null ? ts(e) : null;
}
function ts(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ts(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ns = Se.unstable_scheduleCallback,
  Nu = Se.unstable_cancelCallback,
  Rf = Se.unstable_shouldYield,
  Mf = Se.unstable_requestPaint,
  Y = Se.unstable_now,
  Tf = Se.unstable_getCurrentPriorityLevel,
  Oi = Se.unstable_ImmediatePriority,
  rs = Se.unstable_UserBlockingPriority,
  br = Se.unstable_NormalPriority,
  Ff = Se.unstable_LowPriority,
  ls = Se.unstable_IdlePriority,
  Pl = null,
  Ue = null;
function jf(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(Pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : Af,
  Wf = Math.log,
  Uf = Math.LN2;
function Af(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Wf(e) / Uf) | 0)) | 0;
}
var Sr = 64,
  _r = 4194304;
function Bn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function el(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Bn(u)) : ((o &= i), o !== 0 && (r = Bn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Bn(i)) : o !== 0 && (r = Bn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Re(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Vf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Hf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Re(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & n) || u & r) && (l[i] = Vf(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function jo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function os() {
  var e = Sr;
  return (Sr <<= 1), !(Sr & 4194240) && (Sr = 64), e;
}
function Xl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Re(t)),
    (e[t] = n);
}
function Qf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Re(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function $i(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function is(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var us,
  Bi,
  as,
  ss,
  cs,
  Wo = !1,
  xr = [],
  st = null,
  ct = null,
  ft = null,
  Xn = new Map(),
  Zn = new Map(),
  lt = [],
  Gf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function zu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      st = null;
      break;
    case "dragenter":
    case "dragleave":
      ct = null;
      break;
    case "mouseover":
    case "mouseout":
      ft = null;
      break;
    case "pointerover":
    case "pointerout":
      Xn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zn.delete(t.pointerId);
  }
}
function Pn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = dr(t)), t !== null && Bi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Kf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (st = Pn(st, e, t, n, r, l)), !0;
    case "dragenter":
      return (ct = Pn(ct, e, t, n, r, l)), !0;
    case "mouseover":
      return (ft = Pn(ft, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Xn.set(o, Pn(Xn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Zn.set(o, Pn(Zn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function fs(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Ut(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ba(n)), t !== null)) {
          (e.blockedOn = t),
            cs(e.priority, function () {
              as(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Tr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Uo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ro = r), n.target.dispatchEvent(r), (Ro = null);
    } else return (t = dr(n)), t !== null && Bi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Lu(e, t, n) {
  Tr(e) && n.delete(t);
}
function Yf() {
  (Wo = !1),
    st !== null && Tr(st) && (st = null),
    ct !== null && Tr(ct) && (ct = null),
    ft !== null && Tr(ft) && (ft = null),
    Xn.forEach(Lu),
    Zn.forEach(Lu);
}
function Cn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Wo ||
      ((Wo = !0),
      Se.unstable_scheduleCallback(Se.unstable_NormalPriority, Yf)));
}
function Jn(e) {
  function t(l) {
    return Cn(l, e);
  }
  if (0 < xr.length) {
    Cn(xr[0], e);
    for (var n = 1; n < xr.length; n++) {
      var r = xr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    st !== null && Cn(st, e),
      ct !== null && Cn(ct, e),
      ft !== null && Cn(ft, e),
      Xn.forEach(t),
      Zn.forEach(t),
      n = 0;
    n < lt.length;
    n++
  )
    (r = lt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < lt.length && ((n = lt[0]), n.blockedOn === null); )
    fs(n), n.blockedOn === null && lt.shift();
}
var un = et.ReactCurrentBatchConfig,
  tl = !0;
function Xf(e, t, n, r) {
  var l = R,
    o = un.transition;
  un.transition = null;
  try {
    (R = 1), Di(e, t, n, r);
  } finally {
    (R = l), (un.transition = o);
  }
}
function Zf(e, t, n, r) {
  var l = R,
    o = un.transition;
  un.transition = null;
  try {
    (R = 4), Di(e, t, n, r);
  } finally {
    (R = l), (un.transition = o);
  }
}
function Di(e, t, n, r) {
  if (tl) {
    var l = Uo(e, t, n, r);
    if (l === null) oo(e, t, r, nl, n), zu(e, r);
    else if (Kf(l, e, t, n, r)) r.stopPropagation();
    else if ((zu(e, r), t & 4 && -1 < Gf.indexOf(e))) {
      for (; l !== null; ) {
        var o = dr(l);
        if (
          (o !== null && us(o),
          (o = Uo(e, t, n, r)),
          o === null && oo(e, t, r, nl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else oo(e, t, r, null, n);
  }
}
var nl = null;
function Uo(e, t, n, r) {
  if (((nl = null), (e = Ii(r)), (e = zt(e)), e !== null))
    if (((t = Ut(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ba(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (nl = e), null;
}
function ds(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Tf()) {
        case Oi:
          return 1;
        case rs:
          return 4;
        case br:
        case Ff:
          return 16;
        case ls:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ut = null,
  Ri = null,
  Fr = null;
function ps() {
  if (Fr) return Fr;
  var e,
    t = Ri,
    n = t.length,
    r,
    l = "value" in ut ? ut.value : ut.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Fr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function jr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Er() {
  return !0;
}
function Iu() {
  return !1;
}
function xe(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Er
        : Iu),
      (this.isPropagationStopped = Iu),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Er));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Er));
      },
      persist: function () {},
      isPersistent: Er,
    }),
    t
  );
}
var wn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Mi = xe(wn),
  fr = V({}, wn, { view: 0, detail: 0 }),
  Jf = xe(fr),
  Zl,
  Jl,
  Nn,
  Cl = V({}, fr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ti,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Nn &&
            (Nn && e.type === "mousemove"
              ? ((Zl = e.screenX - Nn.screenX), (Jl = e.screenY - Nn.screenY))
              : (Jl = Zl = 0),
            (Nn = e)),
          Zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Jl;
    },
  }),
  Ou = xe(Cl),
  qf = V({}, Cl, { dataTransfer: 0 }),
  bf = xe(qf),
  ed = V({}, fr, { relatedTarget: 0 }),
  ql = xe(ed),
  td = V({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nd = xe(td),
  rd = V({}, wn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ld = xe(rd),
  od = V({}, wn, { data: 0 }),
  $u = xe(od),
  id = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ud = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ad = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function sd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ad[e]) ? !!t[e] : !1;
}
function Ti() {
  return sd;
}
var cd = V({}, fr, {
    key: function (e) {
      if (e.key) {
        var t = id[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = jr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ud[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ti,
    charCode: function (e) {
      return e.type === "keypress" ? jr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? jr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  fd = xe(cd),
  dd = V({}, Cl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Bu = xe(dd),
  pd = V({}, fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ti,
  }),
  md = xe(pd),
  hd = V({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yd = xe(hd),
  vd = V({}, Cl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  gd = xe(vd),
  wd = [9, 13, 27, 32],
  Fi = Xe && "CompositionEvent" in window,
  Tn = null;
Xe && "documentMode" in document && (Tn = document.documentMode);
var kd = Xe && "TextEvent" in window && !Tn,
  ms = Xe && (!Fi || (Tn && 8 < Tn && 11 >= Tn)),
  Du = String.fromCharCode(32),
  Ru = !1;
function hs(e, t) {
  switch (e) {
    case "keyup":
      return wd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ys(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Gt = !1;
function Sd(e, t) {
  switch (e) {
    case "compositionend":
      return ys(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ru = !0), Du);
    case "textInput":
      return (e = t.data), e === Du && Ru ? null : e;
    default:
      return null;
  }
}
function _d(e, t) {
  if (Gt)
    return e === "compositionend" || (!Fi && hs(e, t))
      ? ((e = ps()), (Fr = Ri = ut = null), (Gt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ms && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var xd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Mu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xd[e.type] : t === "textarea";
}
function vs(e, t, n, r) {
  Ya(r),
    (t = rl(t, "onChange")),
    0 < t.length &&
      ((n = new Mi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Fn = null,
  qn = null;
function Ed(e) {
  zs(e, 0);
}
function Nl(e) {
  var t = Xt(e);
  if (Ua(t)) return e;
}
function Pd(e, t) {
  if (e === "change") return t;
}
var gs = !1;
if (Xe) {
  var bl;
  if (Xe) {
    var eo = "oninput" in document;
    if (!eo) {
      var Tu = document.createElement("div");
      Tu.setAttribute("oninput", "return;"),
        (eo = typeof Tu.oninput == "function");
    }
    bl = eo;
  } else bl = !1;
  gs = bl && (!document.documentMode || 9 < document.documentMode);
}
function Fu() {
  Fn && (Fn.detachEvent("onpropertychange", ws), (qn = Fn = null));
}
function ws(e) {
  if (e.propertyName === "value" && Nl(qn)) {
    var t = [];
    vs(t, qn, e, Ii(e)), qa(Ed, t);
  }
}
function Cd(e, t, n) {
  e === "focusin"
    ? (Fu(), (Fn = t), (qn = n), Fn.attachEvent("onpropertychange", ws))
    : e === "focusout" && Fu();
}
function Nd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Nl(qn);
}
function zd(e, t) {
  if (e === "click") return Nl(t);
}
function Ld(e, t) {
  if (e === "input" || e === "change") return Nl(t);
}
function Id(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Te = typeof Object.is == "function" ? Object.is : Id;
function bn(e, t) {
  if (Te(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!xo.call(t, l) || !Te(e[l], t[l])) return !1;
  }
  return !0;
}
function ju(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wu(e, t) {
  var n = ju(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ju(n);
  }
}
function ks(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ks(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ss() {
  for (var e = window, t = Zr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zr(e.document);
  }
  return t;
}
function ji(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Od(e) {
  var t = Ss(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ks(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ji(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Wu(n, o));
        var i = Wu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var $d = Xe && "documentMode" in document && 11 >= document.documentMode,
  Kt = null,
  Ao = null,
  jn = null,
  Vo = !1;
function Uu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vo ||
    Kt == null ||
    Kt !== Zr(r) ||
    ((r = Kt),
    "selectionStart" in r && ji(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (jn && bn(jn, r)) ||
      ((jn = r),
      (r = rl(Ao, "onSelect")),
      0 < r.length &&
        ((t = new Mi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Kt))));
}
function Pr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Yt = {
    animationend: Pr("Animation", "AnimationEnd"),
    animationiteration: Pr("Animation", "AnimationIteration"),
    animationstart: Pr("Animation", "AnimationStart"),
    transitionend: Pr("Transition", "TransitionEnd"),
  },
  to = {},
  _s = {};
Xe &&
  ((_s = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Yt.animationend.animation,
    delete Yt.animationiteration.animation,
    delete Yt.animationstart.animation),
  "TransitionEvent" in window || delete Yt.transitionend.transition);
function zl(e) {
  if (to[e]) return to[e];
  if (!Yt[e]) return e;
  var t = Yt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in _s) return (to[e] = t[n]);
  return e;
}
var xs = zl("animationend"),
  Es = zl("animationiteration"),
  Ps = zl("animationstart"),
  Cs = zl("transitionend"),
  Ns = new Map(),
  Au =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function kt(e, t) {
  Ns.set(e, t), Wt(t, [e]);
}
for (var no = 0; no < Au.length; no++) {
  var ro = Au[no],
    Bd = ro.toLowerCase(),
    Dd = ro[0].toUpperCase() + ro.slice(1);
  kt(Bd, "on" + Dd);
}
kt(xs, "onAnimationEnd");
kt(Es, "onAnimationIteration");
kt(Ps, "onAnimationStart");
kt("dblclick", "onDoubleClick");
kt("focusin", "onFocus");
kt("focusout", "onBlur");
kt(Cs, "onTransitionEnd");
fn("onMouseEnter", ["mouseout", "mouseover"]);
fn("onMouseLeave", ["mouseout", "mouseover"]);
fn("onPointerEnter", ["pointerout", "pointerover"]);
fn("onPointerLeave", ["pointerout", "pointerover"]);
Wt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Wt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Wt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Wt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Dn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Rd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));
function Vu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Bf(r, t, void 0, e), (e.currentTarget = null);
}
function zs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          Vu(l, u, s), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          Vu(l, u, s), (o = a);
        }
    }
  }
  if (qr) throw ((e = Fo), (qr = !1), (Fo = null), e);
}
function T(e, t) {
  var n = t[Yo];
  n === void 0 && (n = t[Yo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ls(t, e, 2, !1), n.add(r));
}
function lo(e, t, n) {
  var r = 0;
  t && (r |= 4), Ls(n, e, r, t);
}
var Cr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Cr]) {
    (e[Cr] = !0),
      Ma.forEach(function (n) {
        n !== "selectionchange" && (Rd.has(n) || lo(n, !1, e), lo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Cr] || ((t[Cr] = !0), lo("selectionchange", !1, t));
  }
}
function Ls(e, t, n, r) {
  switch (ds(t)) {
    case 1:
      var l = Xf;
      break;
    case 4:
      l = Zf;
      break;
    default:
      l = Di;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !To ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function oo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = zt(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  qa(function () {
    var s = o,
      m = Ii(n),
      h = [];
    e: {
      var p = Ns.get(e);
      if (p !== void 0) {
        var g = Mi,
          w = e;
        switch (e) {
          case "keypress":
            if (jr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = fd;
            break;
          case "focusin":
            (w = "focus"), (g = ql);
            break;
          case "focusout":
            (w = "blur"), (g = ql);
            break;
          case "beforeblur":
          case "afterblur":
            g = ql;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Ou;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = bf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = md;
            break;
          case xs:
          case Es:
          case Ps:
            g = nd;
            break;
          case Cs:
            g = yd;
            break;
          case "scroll":
            g = Jf;
            break;
          case "wheel":
            g = gd;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = ld;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Bu;
        }
        var k = (t & 4) !== 0,
          j = !k && e === "scroll",
          f = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var c = s, d; c !== null; ) {
          d = c;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              f !== null && ((y = Yn(c, f)), y != null && k.push(tr(c, y, d)))),
            j)
          )
            break;
          c = c.return;
        }
        0 < k.length &&
          ((p = new g(p, w, null, n, m)), h.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Ro &&
            (w = n.relatedTarget || n.fromElement) &&
            (zt(w) || w[Ze]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = s),
              (w = w ? zt(w) : null),
              w !== null &&
                ((j = Ut(w)), w !== j || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = s)),
          g !== w)
        ) {
          if (
            ((k = Ou),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = Bu),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (j = g == null ? p : Xt(g)),
            (d = w == null ? p : Xt(w)),
            (p = new k(y, c + "leave", g, n, m)),
            (p.target = j),
            (p.relatedTarget = d),
            (y = null),
            zt(m) === s &&
              ((k = new k(f, c + "enter", w, n, m)),
              (k.target = d),
              (k.relatedTarget = j),
              (y = k)),
            (j = y),
            g && w)
          )
            t: {
              for (k = g, f = w, c = 0, d = k; d; d = Vt(d)) c++;
              for (d = 0, y = f; y; y = Vt(y)) d++;
              for (; 0 < c - d; ) (k = Vt(k)), c--;
              for (; 0 < d - c; ) (f = Vt(f)), d--;
              for (; c--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Vt(k)), (f = Vt(f));
              }
              k = null;
            }
          else k = null;
          g !== null && Hu(h, p, g, k, !1),
            w !== null && j !== null && Hu(h, j, w, k, !0);
        }
      }
      e: {
        if (
          ((p = s ? Xt(s) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var _ = Pd;
        else if (Mu(p))
          if (gs) _ = Ld;
          else {
            _ = Nd;
            var E = Cd;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (_ = zd);
        if (_ && (_ = _(e, s))) {
          vs(h, _, n, m);
          break e;
        }
        E && E(e, p, s),
          e === "focusout" &&
            (E = p._wrapperState) &&
            E.controlled &&
            p.type === "number" &&
            Io(p, "number", p.value);
      }
      switch (((E = s ? Xt(s) : window), e)) {
        case "focusin":
          (Mu(E) || E.contentEditable === "true") &&
            ((Kt = E), (Ao = s), (jn = null));
          break;
        case "focusout":
          jn = Ao = Kt = null;
          break;
        case "mousedown":
          Vo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Vo = !1), Uu(h, n, m);
          break;
        case "selectionchange":
          if ($d) break;
        case "keydown":
        case "keyup":
          Uu(h, n, m);
      }
      var P;
      if (Fi)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Gt
          ? hs(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (ms &&
          n.locale !== "ko" &&
          (Gt || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Gt && (P = ps())
            : ((ut = m),
              (Ri = "value" in ut ? ut.value : ut.textContent),
              (Gt = !0))),
        (E = rl(s, C)),
        0 < E.length &&
          ((C = new $u(C, e, null, n, m)),
          h.push({ event: C, listeners: E }),
          P ? (C.data = P) : ((P = ys(n)), P !== null && (C.data = P)))),
        (P = kd ? Sd(e, n) : _d(e, n)) &&
          ((s = rl(s, "onBeforeInput")),
          0 < s.length &&
            ((m = new $u("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: s }),
            (m.data = P)));
    }
    zs(h, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function rl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Yn(e, n)),
      o != null && r.unshift(tr(e, o, l)),
      (o = Yn(e, t)),
      o != null && r.push(tr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Vt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Hu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Yn(n, o)), a != null && i.unshift(tr(n, a, u)))
        : l || ((a = Yn(n, o)), a != null && i.push(tr(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Md = /\r\n?/g,
  Td = /\u0000|\uFFFD/g;
function Qu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Md,
      `
`
    )
    .replace(Td, "");
}
function Nr(e, t, n) {
  if (((t = Qu(t)), Qu(e) !== t && n)) throw Error(v(425));
}
function ll() {}
var Ho = null,
  Qo = null;
function Go(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ko = typeof setTimeout == "function" ? setTimeout : void 0,
  Fd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Gu = typeof Promise == "function" ? Promise : void 0,
  jd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Gu < "u"
      ? function (e) {
          return Gu.resolve(null).then(e).catch(Wd);
        }
      : Ko;
function Wd(e) {
  setTimeout(function () {
    throw e;
  });
}
function io(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Jn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Jn(t);
}
function dt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ku(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kn = Math.random().toString(36).slice(2),
  We = "__reactFiber$" + kn,
  nr = "__reactProps$" + kn,
  Ze = "__reactContainer$" + kn,
  Yo = "__reactEvents$" + kn,
  Ud = "__reactListeners$" + kn,
  Ad = "__reactHandles$" + kn;
function zt(e) {
  var t = e[We];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ze] || n[We])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ku(e); e !== null; ) {
          if ((n = e[We])) return n;
          e = Ku(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function dr(e) {
  return (
    (e = e[We] || e[Ze]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(v(33));
}
function Ll(e) {
  return e[nr] || null;
}
var Xo = [],
  Zt = -1;
function St(e) {
  return { current: e };
}
function F(e) {
  0 > Zt || ((e.current = Xo[Zt]), (Xo[Zt] = null), Zt--);
}
function M(e, t) {
  Zt++, (Xo[Zt] = e.current), (e.current = t);
}
var wt = {},
  ae = St(wt),
  he = St(!1),
  Dt = wt;
function dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ye(e) {
  return (e = e.childContextTypes), e != null;
}
function ol() {
  F(he), F(ae);
}
function Yu(e, t, n) {
  if (ae.current !== wt) throw Error(v(168));
  M(ae, t), M(he, n);
}
function Is(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(v(108, Cf(e) || "Unknown", l));
  return V({}, n, r);
}
function il(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wt),
    (Dt = ae.current),
    M(ae, e),
    M(he, he.current),
    !0
  );
}
function Xu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(v(169));
  n
    ? ((e = Is(e, t, Dt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(he),
      F(ae),
      M(ae, e))
    : F(he),
    M(he, n);
}
var Qe = null,
  Il = !1,
  uo = !1;
function Os(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
function Vd(e) {
  (Il = !0), Os(e);
}
function _t() {
  if (!uo && Qe !== null) {
    uo = !0;
    var e = 0,
      t = R;
    try {
      var n = Qe;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Qe = null), (Il = !1);
    } catch (l) {
      throw (Qe !== null && (Qe = Qe.slice(e + 1)), ns(Oi, _t), l);
    } finally {
      (R = t), (uo = !1);
    }
  }
  return null;
}
var Jt = [],
  qt = 0,
  ul = null,
  al = 0,
  Ee = [],
  Pe = 0,
  Rt = null,
  Ge = 1,
  Ke = "";
function Ct(e, t) {
  (Jt[qt++] = al), (Jt[qt++] = ul), (ul = e), (al = t);
}
function $s(e, t, n) {
  (Ee[Pe++] = Ge), (Ee[Pe++] = Ke), (Ee[Pe++] = Rt), (Rt = e);
  var r = Ge;
  e = Ke;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Re(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ge = (1 << (32 - Re(t) + l)) | (n << l) | r),
      (Ke = o + e);
  } else (Ge = (1 << o) | (n << l) | r), (Ke = e);
}
function Wi(e) {
  e.return !== null && (Ct(e, 1), $s(e, 1, 0));
}
function Ui(e) {
  for (; e === ul; )
    (ul = Jt[--qt]), (Jt[qt] = null), (al = Jt[--qt]), (Jt[qt] = null);
  for (; e === Rt; )
    (Rt = Ee[--Pe]),
      (Ee[Pe] = null),
      (Ke = Ee[--Pe]),
      (Ee[Pe] = null),
      (Ge = Ee[--Pe]),
      (Ee[Pe] = null);
}
var ke = null,
  we = null,
  W = !1,
  De = null;
function Bs(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Zu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ke = e), (we = dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ke = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Rt !== null ? { id: Ge, overflow: Ke } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ke = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Zo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jo(e) {
  if (W) {
    var t = we;
    if (t) {
      var n = t;
      if (!Zu(e, t)) {
        if (Zo(e)) throw Error(v(418));
        t = dt(n.nextSibling);
        var r = ke;
        t && Zu(e, t)
          ? Bs(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (ke = e));
      }
    } else {
      if (Zo(e)) throw Error(v(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (ke = e);
    }
  }
}
function Ju(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ke = e;
}
function zr(e) {
  if (e !== ke) return !1;
  if (!W) return Ju(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Go(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Zo(e)) throw (Ds(), Error(v(418)));
    for (; t; ) Bs(e, t), (t = dt(t.nextSibling));
  }
  if ((Ju(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(v(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = ke ? dt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ds() {
  for (var e = we; e; ) e = dt(e.nextSibling);
}
function pn() {
  (we = ke = null), (W = !1);
}
function Ai(e) {
  De === null ? (De = [e]) : De.push(e);
}
var Hd = et.ReactCurrentBatchConfig;
function $e(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var sl = St(null),
  cl = null,
  bt = null,
  Vi = null;
function Hi() {
  Vi = bt = cl = null;
}
function Qi(e) {
  var t = sl.current;
  F(sl), (e._currentValue = t);
}
function qo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function an(e, t) {
  (cl = e),
    (Vi = bt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (me = !0), (e.firstContext = null));
}
function ze(e) {
  var t = e._currentValue;
  if (Vi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), bt === null)) {
      if (cl === null) throw Error(v(308));
      (bt = e), (cl.dependencies = { lanes: 0, firstContext: e });
    } else bt = bt.next = e;
  return t;
}
var Lt = null;
function Gi(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
function Rs(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Gi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Je(e, r)
  );
}
function Je(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var rt = !1;
function Ki(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ms(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ye(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Je(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Gi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Je(e, n)
  );
}
function Wr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $i(e, n);
  }
}
function qu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function fl(e, t, n, r) {
  var l = e.updateQueue;
  rt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== i &&
        (u === null ? (m.firstBaseUpdate = s) : (u.next = s),
        (m.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (m = s = a = null), (u = o);
    do {
      var p = u.lane,
        g = u.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            k = u;
          switch (((p = t), (g = n), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                h = w.call(g, h, p);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (p = typeof w == "function" ? w.call(g, h, p) : w),
                p == null)
              )
                break e;
              h = V({}, h, p);
              break e;
            case 2:
              rt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((s = m = g), (a = h)) : (m = m.next = g),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (a = h),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Tt |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function bu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(v(191, l));
        l.call(r);
      }
    }
}
var Ts = new Ra.Component().refs;
function bo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ol = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ut(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      l = ht(e),
      o = Ye(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = pt(e, o, l)),
      t !== null && (Me(t, e, l, r), Wr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      l = ht(e),
      o = Ye(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = pt(e, o, l)),
      t !== null && (Me(t, e, l, r), Wr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ce(),
      r = ht(e),
      l = Ye(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = pt(e, l, r)),
      t !== null && (Me(t, e, r, n), Wr(t, e, r));
  },
};
function ea(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bn(n, r) || !bn(l, o)
      : !0
  );
}
function Fs(e, t, n) {
  var r = !1,
    l = wt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ze(o))
      : ((l = ye(t) ? Dt : ae.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? dn(e, l) : wt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ol),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ta(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ol.enqueueReplaceState(t, t.state, null);
}
function ei(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Ts), Ki(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = ze(o))
    : ((o = ye(t) ? Dt : ae.current), (l.context = dn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (bo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ol.enqueueReplaceState(l, l.state, null),
      fl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(v(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(v(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Ts && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(v(284));
    if (!n._owner) throw Error(v(290, e));
  }
  return e;
}
function Lr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      v(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function na(e) {
  var t = e._init;
  return t(e._payload);
}
function js(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = yt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, y) {
    return c === null || c.tag !== 6
      ? ((c = ho(d, f.mode, y)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function a(f, c, d, y) {
    var _ = d.type;
    return _ === Qt
      ? m(f, c, d.props.children, y, d.key)
      : c !== null &&
        (c.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === nt &&
            na(_) === c.type))
      ? ((y = l(c, d.props)), (y.ref = zn(f, c, d)), (y.return = f), y)
      : ((y = Gr(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = zn(f, c, d)),
        (y.return = f),
        y);
  }
  function s(f, c, d, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = yo(d, f.mode, y)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function m(f, c, d, y, _) {
    return c === null || c.tag !== 7
      ? ((c = $t(d, f.mode, y, _)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function h(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ho("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case gr:
          return (
            (d = Gr(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = zn(f, null, c)),
            (d.return = f),
            d
          );
        case Ht:
          return (c = yo(c, f.mode, d)), (c.return = f), c;
        case nt:
          var y = c._init;
          return h(f, y(c._payload), d);
      }
      if ($n(c) || xn(c))
        return (c = $t(c, f.mode, d, null)), (c.return = f), c;
      Lr(f, c);
    }
    return null;
  }
  function p(f, c, d, y) {
    var _ = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return _ !== null ? null : u(f, c, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case gr:
          return d.key === _ ? a(f, c, d, y) : null;
        case Ht:
          return d.key === _ ? s(f, c, d, y) : null;
        case nt:
          return (_ = d._init), p(f, c, _(d._payload), y);
      }
      if ($n(d) || xn(d)) return _ !== null ? null : m(f, c, d, y, null);
      Lr(f, d);
    }
    return null;
  }
  function g(f, c, d, y, _) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(d) || null), u(c, f, "" + y, _);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case gr:
          return (f = f.get(y.key === null ? d : y.key) || null), a(c, f, y, _);
        case Ht:
          return (f = f.get(y.key === null ? d : y.key) || null), s(c, f, y, _);
        case nt:
          var E = y._init;
          return g(f, c, d, E(y._payload), _);
      }
      if ($n(y) || xn(y)) return (f = f.get(d) || null), m(c, f, y, _, null);
      Lr(c, y);
    }
    return null;
  }
  function w(f, c, d, y) {
    for (
      var _ = null, E = null, P = c, C = (c = 0), Q = null;
      P !== null && C < d.length;
      C++
    ) {
      P.index > C ? ((Q = P), (P = null)) : (Q = P.sibling);
      var I = p(f, P, d[C], y);
      if (I === null) {
        P === null && (P = Q);
        break;
      }
      e && P && I.alternate === null && t(f, P),
        (c = o(I, c, C)),
        E === null ? (_ = I) : (E.sibling = I),
        (E = I),
        (P = Q);
    }
    if (C === d.length) return n(f, P), W && Ct(f, C), _;
    if (P === null) {
      for (; C < d.length; C++)
        (P = h(f, d[C], y)),
          P !== null &&
            ((c = o(P, c, C)), E === null ? (_ = P) : (E.sibling = P), (E = P));
      return W && Ct(f, C), _;
    }
    for (P = r(f, P); C < d.length; C++)
      (Q = g(P, f, C, d[C], y)),
        Q !== null &&
          (e && Q.alternate !== null && P.delete(Q.key === null ? C : Q.key),
          (c = o(Q, c, C)),
          E === null ? (_ = Q) : (E.sibling = Q),
          (E = Q));
    return (
      e &&
        P.forEach(function (Ie) {
          return t(f, Ie);
        }),
      W && Ct(f, C),
      _
    );
  }
  function k(f, c, d, y) {
    var _ = xn(d);
    if (typeof _ != "function") throw Error(v(150));
    if (((d = _.call(d)), d == null)) throw Error(v(151));
    for (
      var E = (_ = null), P = c, C = (c = 0), Q = null, I = d.next();
      P !== null && !I.done;
      C++, I = d.next()
    ) {
      P.index > C ? ((Q = P), (P = null)) : (Q = P.sibling);
      var Ie = p(f, P, I.value, y);
      if (Ie === null) {
        P === null && (P = Q);
        break;
      }
      e && P && Ie.alternate === null && t(f, P),
        (c = o(Ie, c, C)),
        E === null ? (_ = Ie) : (E.sibling = Ie),
        (E = Ie),
        (P = Q);
    }
    if (I.done) return n(f, P), W && Ct(f, C), _;
    if (P === null) {
      for (; !I.done; C++, I = d.next())
        (I = h(f, I.value, y)),
          I !== null &&
            ((c = o(I, c, C)), E === null ? (_ = I) : (E.sibling = I), (E = I));
      return W && Ct(f, C), _;
    }
    for (P = r(f, P); !I.done; C++, I = d.next())
      (I = g(P, f, C, I.value, y)),
        I !== null &&
          (e && I.alternate !== null && P.delete(I.key === null ? C : I.key),
          (c = o(I, c, C)),
          E === null ? (_ = I) : (E.sibling = I),
          (E = I));
    return (
      e &&
        P.forEach(function (Sn) {
          return t(f, Sn);
        }),
      W && Ct(f, C),
      _
    );
  }
  function j(f, c, d, y) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Qt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case gr:
          e: {
            for (var _ = d.key, E = c; E !== null; ) {
              if (E.key === _) {
                if (((_ = d.type), _ === Qt)) {
                  if (E.tag === 7) {
                    n(f, E.sibling),
                      (c = l(E, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  E.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === nt &&
                    na(_) === E.type)
                ) {
                  n(f, E.sibling),
                    (c = l(E, d.props)),
                    (c.ref = zn(f, E, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, E);
                break;
              } else t(f, E);
              E = E.sibling;
            }
            d.type === Qt
              ? ((c = $t(d.props.children, f.mode, y, d.key)),
                (c.return = f),
                (f = c))
              : ((y = Gr(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = zn(f, c, d)),
                (y.return = f),
                (f = y));
          }
          return i(f);
        case Ht:
          e: {
            for (E = d.key; c !== null; ) {
              if (c.key === E)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = yo(d, f.mode, y)), (c.return = f), (f = c);
          }
          return i(f);
        case nt:
          return (E = d._init), j(f, c, E(d._payload), y);
      }
      if ($n(d)) return w(f, c, d, y);
      if (xn(d)) return k(f, c, d, y);
      Lr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = ho(d, f.mode, y)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return j;
}
var mn = js(!0),
  Ws = js(!1),
  pr = {},
  Ae = St(pr),
  rr = St(pr),
  lr = St(pr);
function It(e) {
  if (e === pr) throw Error(v(174));
  return e;
}
function Yi(e, t) {
  switch ((M(lr, t), M(rr, e), M(Ae, pr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $o(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = $o(t, e));
  }
  F(Ae), M(Ae, t);
}
function hn() {
  F(Ae), F(rr), F(lr);
}
function Us(e) {
  It(lr.current);
  var t = It(Ae.current),
    n = $o(t, e.type);
  t !== n && (M(rr, e), M(Ae, n));
}
function Xi(e) {
  rr.current === e && (F(Ae), F(rr));
}
var U = St(0);
function dl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ao = [];
function Zi() {
  for (var e = 0; e < ao.length; e++)
    ao[e]._workInProgressVersionPrimary = null;
  ao.length = 0;
}
var Ur = et.ReactCurrentDispatcher,
  so = et.ReactCurrentBatchConfig,
  Mt = 0,
  A = null,
  J = null,
  ee = null,
  pl = !1,
  Wn = !1,
  or = 0,
  Qd = 0;
function oe() {
  throw Error(v(321));
}
function Ji(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Te(e[n], t[n])) return !1;
  return !0;
}
function qi(e, t, n, r, l, o) {
  if (
    ((Mt = o),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ur.current = e === null || e.memoizedState === null ? Xd : Zd),
    (e = n(r, l)),
    Wn)
  ) {
    o = 0;
    do {
      if (((Wn = !1), (or = 0), 25 <= o)) throw Error(v(301));
      (o += 1),
        (ee = J = null),
        (t.updateQueue = null),
        (Ur.current = Jd),
        (e = n(r, l));
    } while (Wn);
  }
  if (
    ((Ur.current = ml),
    (t = J !== null && J.next !== null),
    (Mt = 0),
    (ee = J = A = null),
    (pl = !1),
    t)
  )
    throw Error(v(300));
  return e;
}
function bi() {
  var e = or !== 0;
  return (or = 0), e;
}
function je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ee === null ? (A.memoizedState = ee = e) : (ee = ee.next = e), ee;
}
function Le() {
  if (J === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = ee === null ? A.memoizedState : ee.next;
  if (t !== null) (ee = t), (J = e);
  else {
    if (e === null) throw Error(v(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      ee === null ? (A.memoizedState = ee = e) : (ee = ee.next = e);
  }
  return ee;
}
function ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function co(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(v(311));
  n.lastRenderedReducer = e;
  var r = J,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      s = o;
    do {
      var m = s.lane;
      if ((Mt & m) === m)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var h = {
          lane: m,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = h), (i = r)) : (a = a.next = h),
          (A.lanes |= m),
          (Tt |= m);
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? (i = r) : (a.next = u),
      Te(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (A.lanes |= o), (Tt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fo(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(v(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Te(o, t.memoizedState) || (me = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function As() {}
function Vs(e, t) {
  var n = A,
    r = Le(),
    l = t(),
    o = !Te(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (me = !0)),
    (r = r.queue),
    eu(Gs.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ur(9, Qs.bind(null, n, r, l, t), void 0, null),
      te === null)
    )
      throw Error(v(349));
    Mt & 30 || Hs(n, t, l);
  }
  return l;
}
function Hs(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Qs(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ks(t) && Ys(e);
}
function Gs(e, t, n) {
  return n(function () {
    Ks(t) && Ys(e);
  });
}
function Ks(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Te(e, n);
  } catch {
    return !0;
  }
}
function Ys(e) {
  var t = Je(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function ra(e) {
  var t = je();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ir,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Yd.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function ur(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Xs() {
  return Le().memoizedState;
}
function Ar(e, t, n, r) {
  var l = je();
  (A.flags |= e),
    (l.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r));
}
function $l(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (J !== null) {
    var i = J.memoizedState;
    if (((o = i.destroy), r !== null && Ji(r, i.deps))) {
      l.memoizedState = ur(t, n, o, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = ur(1 | t, n, o, r));
}
function la(e, t) {
  return Ar(8390656, 8, e, t);
}
function eu(e, t) {
  return $l(2048, 8, e, t);
}
function Zs(e, t) {
  return $l(4, 2, e, t);
}
function Js(e, t) {
  return $l(4, 4, e, t);
}
function qs(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function bs(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), $l(4, 4, qs.bind(null, t, e), n)
  );
}
function tu() {}
function ec(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ji(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function tc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ji(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function nc(e, t, n) {
  return Mt & 21
    ? (Te(n, t) || ((n = os()), (A.lanes |= n), (Tt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n));
}
function Gd(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = so.transition;
  so.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), (so.transition = r);
  }
}
function rc() {
  return Le().memoizedState;
}
function Kd(e, t, n) {
  var r = ht(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    lc(e))
  )
    oc(t, n);
  else if (((n = Rs(e, t, n, r)), n !== null)) {
    var l = ce();
    Me(n, e, r, l), ic(n, t, r);
  }
}
function Yd(e, t, n) {
  var r = ht(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (lc(e)) oc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Te(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Gi(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Rs(e, t, l, r)),
      n !== null && ((l = ce()), Me(n, e, r, l), ic(n, t, r));
  }
}
function lc(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function oc(e, t) {
  Wn = pl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ic(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $i(e, n);
  }
}
var ml = {
    readContext: ze,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  Xd = {
    readContext: ze,
    useCallback: function (e, t) {
      return (je().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ze,
    useEffect: la,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ar(4194308, 4, qs.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ar(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ar(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = je();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = je();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Kd.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = je();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ra,
    useDebugValue: tu,
    useDeferredValue: function (e) {
      return (je().memoizedState = e);
    },
    useTransition: function () {
      var e = ra(!1),
        t = e[0];
      return (e = Gd.bind(null, e[1])), (je().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = je();
      if (W) {
        if (n === void 0) throw Error(v(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(v(349));
        Mt & 30 || Hs(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        la(Gs.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ur(9, Qs.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = je(),
        t = te.identifierPrefix;
      if (W) {
        var n = Ke,
          r = Ge;
        (n = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = or++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Qd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Zd = {
    readContext: ze,
    useCallback: ec,
    useContext: ze,
    useEffect: eu,
    useImperativeHandle: bs,
    useInsertionEffect: Zs,
    useLayoutEffect: Js,
    useMemo: tc,
    useReducer: co,
    useRef: Xs,
    useState: function () {
      return co(ir);
    },
    useDebugValue: tu,
    useDeferredValue: function (e) {
      var t = Le();
      return nc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = co(ir)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: As,
    useSyncExternalStore: Vs,
    useId: rc,
    unstable_isNewReconciler: !1,
  },
  Jd = {
    readContext: ze,
    useCallback: ec,
    useContext: ze,
    useEffect: eu,
    useImperativeHandle: bs,
    useInsertionEffect: Zs,
    useLayoutEffect: Js,
    useMemo: tc,
    useReducer: fo,
    useRef: Xs,
    useState: function () {
      return fo(ir);
    },
    useDebugValue: tu,
    useDeferredValue: function (e) {
      var t = Le();
      return J === null ? (t.memoizedState = e) : nc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = fo(ir)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: As,
    useSyncExternalStore: Vs,
    useId: rc,
    unstable_isNewReconciler: !1,
  };
function yn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Pf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function po(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ti(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var qd = typeof WeakMap == "function" ? WeakMap : Map;
function uc(e, t, n) {
  (n = Ye(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      yl || ((yl = !0), (fi = r)), ti(e, t);
    }),
    n
  );
}
function ac(e, t, n) {
  (n = Ye(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ti(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ti(e, t),
          typeof r != "function" &&
            (mt === null ? (mt = new Set([this])) : mt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function oa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = dp.bind(null, e, t, n)), t.then(e, e));
}
function ia(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ua(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ye(-1, 1)), (t.tag = 2), pt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var bd = et.ReactCurrentOwner,
  me = !1;
function se(e, t, n, r) {
  t.child = e === null ? Ws(t, null, n, r) : mn(t, e.child, n, r);
}
function aa(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    an(t, l),
    (r = qi(e, t, n, r, o, l)),
    (n = bi()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        qe(e, t, l))
      : (W && n && Wi(t), (t.flags |= 1), se(e, t, r, l), t.child)
  );
}
function sa(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !su(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), sc(e, t, o, r, l))
      : ((e = Gr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bn), n(i, r) && e.ref === t.ref)
    )
      return qe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = yt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (bn(o, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (me = !0);
      else return (t.lanes = e.lanes), qe(e, t, l);
  }
  return ni(e, t, n, r, l);
}
function cc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(tn, ge),
        (ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          M(tn, ge),
          (ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        M(tn, ge),
        (ge |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      M(tn, ge),
      (ge |= r);
  return se(e, t, l, n), t.child;
}
function fc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ni(e, t, n, r, l) {
  var o = ye(n) ? Dt : ae.current;
  return (
    (o = dn(t, o)),
    an(t, l),
    (n = qi(e, t, n, r, o, l)),
    (r = bi()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        qe(e, t, l))
      : (W && r && Wi(t), (t.flags |= 1), se(e, t, n, l), t.child)
  );
}
function ca(e, t, n, r, l) {
  if (ye(n)) {
    var o = !0;
    il(t);
  } else o = !1;
  if ((an(t, l), t.stateNode === null))
    Vr(e, t), Fs(t, n, r), ei(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = ze(s))
      : ((s = ye(n) ? Dt : ae.current), (s = dn(t, s)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && ta(t, i, r, s)),
      (rt = !1);
    var p = t.memoizedState;
    (i.state = p),
      fl(t, r, i, l),
      (a = t.memoizedState),
      u !== r || p !== a || he.current || rt
        ? (typeof m == "function" && (bo(t, n, m, r), (a = t.memoizedState)),
          (u = rt || ea(t, n, u, r, p, a, s))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = s),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ms(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : $e(t.type, u)),
      (i.props = s),
      (h = t.pendingProps),
      (p = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = ze(a))
        : ((a = ye(n) ? Dt : ae.current), (a = dn(t, a)));
    var g = n.getDerivedStateFromProps;
    (m =
      typeof g == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== h || p !== a) && ta(t, i, r, a)),
      (rt = !1),
      (p = t.memoizedState),
      (i.state = p),
      fl(t, r, i, l);
    var w = t.memoizedState;
    u !== h || p !== w || he.current || rt
      ? (typeof g == "function" && (bo(t, n, g, r), (w = t.memoizedState)),
        (s = rt || ea(t, n, s, r, p, w, a) || !1)
          ? (m ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = a),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ri(e, t, n, r, o, l);
}
function ri(e, t, n, r, l, o) {
  fc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Xu(t, n, !1), qe(e, t, o);
  (r = t.stateNode), (bd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = mn(t, e.child, null, o)), (t.child = mn(t, null, u, o)))
      : se(e, t, u, o),
    (t.memoizedState = r.state),
    l && Xu(t, n, !0),
    t.child
  );
}
function dc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Yu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Yu(e, t.context, !1),
    Yi(e, t.containerInfo);
}
function fa(e, t, n, r, l) {
  return pn(), Ai(l), (t.flags |= 256), se(e, t, n, r), t.child;
}
var li = { dehydrated: null, treeContext: null, retryLane: 0 };
function oi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pc(e, t, n) {
  var r = t.pendingProps,
    l = U.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    M(U, l & 1),
    e === null)
  )
    return (
      Jo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Rl(i, r, 0, null)),
              (e = $t(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = oi(n)),
              (t.memoizedState = li),
              e)
            : nu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return ep(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = yt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = yt(u, o)) : ((o = $t(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? oi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = li),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = yt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function nu(e, t) {
  return (
    (t = Rl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ir(e, t, n, r) {
  return (
    r !== null && Ai(r),
    mn(t, e.child, null, n),
    (e = nu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ep(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = po(Error(v(422)))), Ir(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Rl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = $t(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && mn(t, e.child, null, i),
        (t.child.memoizedState = oi(i)),
        (t.memoizedState = li),
        o);
  if (!(t.mode & 1)) return Ir(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(v(419))), (r = po(o, r, void 0)), Ir(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), me || u)) {
    if (((r = te), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Je(e, l), Me(r, e, l, -1));
    }
    return au(), (r = po(Error(v(421)))), Ir(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = pp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (we = dt(l.nextSibling)),
      (ke = t),
      (W = !0),
      (De = null),
      e !== null &&
        ((Ee[Pe++] = Ge),
        (Ee[Pe++] = Ke),
        (Ee[Pe++] = Rt),
        (Ge = e.id),
        (Ke = e.overflow),
        (Rt = t)),
      (t = nu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function da(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), qo(e.return, t, n);
}
function mo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function mc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((se(e, t, r.children, n), (r = U.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && da(e, n, t);
        else if (e.tag === 19) da(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((M(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && dl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          mo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && dl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        mo(t, !0, n, null, o);
        break;
      case "together":
        mo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function qe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Tt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(v(153));
  if (t.child !== null) {
    for (
      e = t.child, n = yt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = yt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function tp(e, t, n) {
  switch (t.tag) {
    case 3:
      dc(t), pn();
      break;
    case 5:
      Us(t);
      break;
    case 1:
      ye(t.type) && il(t);
      break;
    case 4:
      Yi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      M(sl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? pc(e, t, n)
          : (M(U, U.current & 1),
            (e = qe(e, t, n)),
            e !== null ? e.sibling : null);
      M(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return mc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        M(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), cc(e, t, n);
  }
  return qe(e, t, n);
}
var hc, ii, yc, vc;
hc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ii = function () {};
yc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), It(Ae.current);
    var o = null;
    switch (n) {
      case "input":
        (l = zo(e, l)), (r = zo(e, r)), (o = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Oo(e, l)), (r = Oo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ll);
    }
    Bo(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Gn.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(s, a))
            : s === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(s, "" + a)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Gn.hasOwnProperty(s)
                ? (a != null && s === "onScroll" && T("scroll", e),
                  o || u === a || (o = []))
                : (o = o || []).push(s, a));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
vc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ln(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function np(e, t, n) {
  var r = t.pendingProps;
  switch ((Ui(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ie(t), null;
    case 1:
      return ye(t.type) && ol(), ie(t), null;
    case 3:
      return (
        (r = t.stateNode),
        hn(),
        F(he),
        F(ae),
        Zi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (zr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (mi(De), (De = null)))),
        ii(e, t),
        ie(t),
        null
      );
    case 5:
      Xi(t);
      var l = It(lr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        yc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(v(166));
          return ie(t), null;
        }
        if (((e = It(Ae.current)), zr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[We] = t), (r[nr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              T("cancel", r), T("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              T("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Dn.length; l++) T(Dn[l], r);
              break;
            case "source":
              T("error", r);
              break;
            case "img":
            case "image":
            case "link":
              T("error", r), T("load", r);
              break;
            case "details":
              T("toggle", r);
              break;
            case "input":
              Su(r, o), T("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                T("invalid", r);
              break;
            case "textarea":
              xu(r, o), T("invalid", r);
          }
          Bo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Gn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  T("scroll", r);
            }
          switch (n) {
            case "input":
              wr(r), _u(r, o, !0);
              break;
            case "textarea":
              wr(r), Eu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ll);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ha(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[We] = t),
            (e[nr] = r),
            hc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Do(n, r)), n)) {
              case "dialog":
                T("cancel", e), T("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                T("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Dn.length; l++) T(Dn[l], e);
                l = r;
                break;
              case "source":
                T("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                T("error", e), T("load", e), (l = r);
                break;
              case "details":
                T("toggle", e), (l = r);
                break;
              case "input":
                Su(e, r), (l = zo(e, r)), T("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  T("invalid", e);
                break;
              case "textarea":
                xu(e, r), (l = Oo(e, r)), T("invalid", e);
                break;
              default:
                l = r;
            }
            Bo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style"
                  ? Ka(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Qa(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Kn(e, a)
                    : typeof a == "number" && Kn(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Gn.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && T("scroll", e)
                      : a != null && Ci(e, o, a, i));
              }
            switch (n) {
              case "input":
                wr(e), _u(e, r, !1);
                break;
              case "textarea":
                wr(e), Eu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? rn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      rn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ll);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ie(t), null;
    case 6:
      if (e && t.stateNode != null) vc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(v(166));
        if (((n = It(lr.current)), It(Ae.current), zr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[We] = t),
            (o = r.nodeValue !== n) && ((e = ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Nr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Nr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[We] = t),
            (t.stateNode = r);
      }
      return ie(t), null;
    case 13:
      if (
        (F(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && we !== null && t.mode & 1 && !(t.flags & 128))
          Ds(), pn(), (t.flags |= 98560), (o = !1);
        else if (((o = zr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(v(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(v(317));
            o[We] = t;
          } else
            pn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ie(t), (o = !1);
        } else De !== null && (mi(De), (De = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? q === 0 && (q = 3) : au())),
          t.updateQueue !== null && (t.flags |= 4),
          ie(t),
          null);
    case 4:
      return (
        hn(), ii(e, t), e === null && er(t.stateNode.containerInfo), ie(t), null
      );
    case 10:
      return Qi(t.type._context), ie(t), null;
    case 17:
      return ye(t.type) && ol(), ie(t), null;
    case 19:
      if ((F(U), (o = t.memoizedState), o === null)) return ie(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Ln(o, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = dl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Ln(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return M(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Y() > vn &&
            ((t.flags |= 128), (r = !0), Ln(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = dl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ln(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !W)
            )
              return ie(t), null;
          } else
            2 * Y() - o.renderingStartTime > vn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ln(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Y()),
          (t.sibling = null),
          (n = U.current),
          M(U, r ? (n & 1) | 2 : n & 1),
          t)
        : (ie(t), null);
    case 22:
    case 23:
      return (
        uu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(v(156, t.tag));
}
function rp(e, t) {
  switch ((Ui(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && ol(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        hn(),
        F(he),
        F(ae),
        Zi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Xi(t), null;
    case 13:
      if ((F(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(v(340));
        pn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F(U), null;
    case 4:
      return hn(), null;
    case 10:
      return Qi(t.type._context), null;
    case 22:
    case 23:
      return uu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Or = !1,
  ue = !1,
  lp = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function en(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        H(e, t, r);
      }
    else n.current = null;
}
function ui(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var pa = !1;
function op(e, t) {
  if (((Ho = tl), (e = Ss()), ji(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            s = 0,
            m = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (a = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (p = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++s === l && (u = i),
                p === o && ++m === r && (a = i),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = g;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Qo = { focusedElem: e, selectionRange: n }, tl = !1, S = t; S !== null; )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e);
    else
      for (; S !== null; ) {
        t = S;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    j = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : $e(t.type, k),
                      j
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(v(163));
            }
        } catch (y) {
          H(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (S = e);
          break;
        }
        S = t.return;
      }
  return (w = pa), (pa = !1), w;
}
function Un(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ui(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Bl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ai(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function gc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), gc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[We], delete t[nr], delete t[Yo], delete t[Ud], delete t[Ad])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function wc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ma(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || wc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function si(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ll));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (si(e, t, n), e = e.sibling; e !== null; ) si(e, t, n), (e = e.sibling);
}
function ci(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ci(e, t, n), e = e.sibling; e !== null; ) ci(e, t, n), (e = e.sibling);
}
var ne = null,
  Be = !1;
function tt(e, t, n) {
  for (n = n.child; n !== null; ) kc(e, t, n), (n = n.sibling);
}
function kc(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(Pl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || en(n, t);
    case 6:
      var r = ne,
        l = Be;
      (ne = null),
        tt(e, t, n),
        (ne = r),
        (Be = l),
        ne !== null &&
          (Be
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (Be
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? io(e.parentNode, n)
              : e.nodeType === 1 && io(e, n),
            Jn(e))
          : io(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (l = Be),
        (ne = n.stateNode.containerInfo),
        (Be = !0),
        tt(e, t, n),
        (ne = r),
        (Be = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ui(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      tt(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (en(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          H(n, t, u);
        }
      tt(e, t, n);
      break;
    case 21:
      tt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), tt(e, t, n), (ue = r))
        : tt(e, t, n);
      break;
    default:
      tt(e, t, n);
  }
}
function ha(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new lp()),
      t.forEach(function (r) {
        var l = mp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Oe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ne = u.stateNode), (Be = !1);
              break e;
            case 3:
              (ne = u.stateNode.containerInfo), (Be = !0);
              break e;
            case 4:
              (ne = u.stateNode.containerInfo), (Be = !0);
              break e;
          }
          u = u.return;
        }
        if (ne === null) throw Error(v(160));
        kc(o, i, l), (ne = null), (Be = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        H(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Sc(t, e), (t = t.sibling);
}
function Sc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Oe(t, e), Fe(e), r & 4)) {
        try {
          Un(3, e, e.return), Bl(3, e);
        } catch (k) {
          H(e, e.return, k);
        }
        try {
          Un(5, e, e.return);
        } catch (k) {
          H(e, e.return, k);
        }
      }
      break;
    case 1:
      Oe(t, e), Fe(e), r & 512 && n !== null && en(n, n.return);
      break;
    case 5:
      if (
        (Oe(t, e),
        Fe(e),
        r & 512 && n !== null && en(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Kn(l, "");
        } catch (k) {
          H(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Aa(l, o),
              Do(u, i);
            var s = Do(u, o);
            for (i = 0; i < a.length; i += 2) {
              var m = a[i],
                h = a[i + 1];
              m === "style"
                ? Ka(l, h)
                : m === "dangerouslySetInnerHTML"
                ? Qa(l, h)
                : m === "children"
                ? Kn(l, h)
                : Ci(l, m, h, s);
            }
            switch (u) {
              case "input":
                Lo(l, o);
                break;
              case "textarea":
                Va(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? rn(l, !!o.multiple, g, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? rn(l, !!o.multiple, o.defaultValue, !0)
                      : rn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[nr] = o;
          } catch (k) {
            H(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Oe(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(v(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (k) {
          H(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Oe(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jn(t.containerInfo);
        } catch (k) {
          H(e, e.return, k);
        }
      break;
    case 4:
      Oe(t, e), Fe(e);
      break;
    case 13:
      Oe(t, e),
        Fe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ou = Y())),
        r & 4 && ha(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (s = ue) || m), Oe(t, e), (ue = s)) : Oe(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !m && e.mode & 1)
        )
          for (S = e, m = e.child; m !== null; ) {
            for (h = S = m; S !== null; ) {
              switch (((p = S), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Un(4, p, p.return);
                  break;
                case 1:
                  en(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      H(r, n, k);
                    }
                  }
                  break;
                case 5:
                  en(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    va(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (S = g)) : va(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (l = h.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = h.stateNode),
                      (a = h.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = Ga("display", i)));
              } catch (k) {
                H(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = s ? "" : h.memoizedProps;
              } catch (k) {
                H(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Oe(t, e), Fe(e), r & 4 && ha(e);
      break;
    case 21:
      break;
    default:
      Oe(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (wc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(v(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Kn(l, ""), (r.flags &= -33));
          var o = ma(e);
          ci(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = ma(e);
          si(e, u, i);
          break;
        default:
          throw Error(v(161));
      }
    } catch (a) {
      H(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ip(e, t, n) {
  (S = e), _c(e);
}
function _c(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Or;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || ue;
        u = Or;
        var s = ue;
        if (((Or = i), (ue = a) && !s))
          for (S = l; S !== null; )
            (i = S),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ga(l)
                : a !== null
                ? ((a.return = i), (S = a))
                : ga(l);
        for (; o !== null; ) (S = o), _c(o), (o = o.sibling);
        (S = l), (Or = u), (ue = s);
      }
      ya(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (S = o)) : ya(e);
  }
}
function ya(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || Bl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : $e(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && bu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                bu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var m = s.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Jn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(v(163));
          }
        ue || (t.flags & 512 && ai(t));
      } catch (p) {
        H(t, t.return, p);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function va(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function ga(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bl(4, t);
          } catch (a) {
            H(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              H(t, l, a);
            }
          }
          var o = t.return;
          try {
            ai(t);
          } catch (a) {
            H(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ai(t);
          } catch (a) {
            H(t, i, a);
          }
      }
    } catch (a) {
      H(t, t.return, a);
    }
    if (t === e) {
      S = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (S = u);
      break;
    }
    S = t.return;
  }
}
var up = Math.ceil,
  hl = et.ReactCurrentDispatcher,
  ru = et.ReactCurrentOwner,
  Ne = et.ReactCurrentBatchConfig,
  B = 0,
  te = null,
  X = null,
  re = 0,
  ge = 0,
  tn = St(0),
  q = 0,
  ar = null,
  Tt = 0,
  Dl = 0,
  lu = 0,
  An = null,
  pe = null,
  ou = 0,
  vn = 1 / 0,
  He = null,
  yl = !1,
  fi = null,
  mt = null,
  $r = !1,
  at = null,
  vl = 0,
  Vn = 0,
  di = null,
  Hr = -1,
  Qr = 0;
function ce() {
  return B & 6 ? Y() : Hr !== -1 ? Hr : (Hr = Y());
}
function ht(e) {
  return e.mode & 1
    ? B & 2 && re !== 0
      ? re & -re
      : Hd.transition !== null
      ? (Qr === 0 && (Qr = os()), Qr)
      : ((e = R),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ds(e.type))),
        e)
    : 1;
}
function Me(e, t, n, r) {
  if (50 < Vn) throw ((Vn = 0), (di = null), Error(v(185)));
  cr(e, n, r),
    (!(B & 2) || e !== te) &&
      (e === te && (!(B & 2) && (Dl |= n), q === 4 && ot(e, re)),
      ve(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((vn = Y() + 500), Il && _t()));
}
function ve(e, t) {
  var n = e.callbackNode;
  Hf(e, t);
  var r = el(e, e === te ? re : 0);
  if (r === 0)
    n !== null && Nu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Nu(n), t === 1))
      e.tag === 0 ? Vd(wa.bind(null, e)) : Os(wa.bind(null, e)),
        jd(function () {
          !(B & 6) && _t();
        }),
        (n = null);
    else {
      switch (is(r)) {
        case 1:
          n = Oi;
          break;
        case 4:
          n = rs;
          break;
        case 16:
          n = br;
          break;
        case 536870912:
          n = ls;
          break;
        default:
          n = br;
      }
      n = Ic(n, xc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function xc(e, t) {
  if (((Hr = -1), (Qr = 0), B & 6)) throw Error(v(327));
  var n = e.callbackNode;
  if (sn() && e.callbackNode !== n) return null;
  var r = el(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = gl(e, r);
  else {
    t = r;
    var l = B;
    B |= 2;
    var o = Pc();
    (te !== e || re !== t) && ((He = null), (vn = Y() + 500), Ot(e, t));
    do
      try {
        cp();
        break;
      } catch (u) {
        Ec(e, u);
      }
    while (1);
    Hi(),
      (hl.current = o),
      (B = l),
      X !== null ? (t = 0) : ((te = null), (re = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = jo(e)), l !== 0 && ((r = l), (t = pi(e, l)))), t === 1)
    )
      throw ((n = ar), Ot(e, 0), ot(e, r), ve(e, Y()), n);
    if (t === 6) ot(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !ap(l) &&
          ((t = gl(e, r)),
          t === 2 && ((o = jo(e)), o !== 0 && ((r = o), (t = pi(e, o)))),
          t === 1))
      )
        throw ((n = ar), Ot(e, 0), ot(e, r), ve(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(v(345));
        case 2:
          Nt(e, pe, He);
          break;
        case 3:
          if (
            (ot(e, r), (r & 130023424) === r && ((t = ou + 500 - Y()), 10 < t))
          ) {
            if (el(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ce(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ko(Nt.bind(null, e, pe, He), t);
            break;
          }
          Nt(e, pe, He);
          break;
        case 4:
          if ((ot(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Re(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * up(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ko(Nt.bind(null, e, pe, He), r);
            break;
          }
          Nt(e, pe, He);
          break;
        case 5:
          Nt(e, pe, He);
          break;
        default:
          throw Error(v(329));
      }
    }
  }
  return ve(e, Y()), e.callbackNode === n ? xc.bind(null, e) : null;
}
function pi(e, t) {
  var n = An;
  return (
    e.current.memoizedState.isDehydrated && (Ot(e, t).flags |= 256),
    (e = gl(e, t)),
    e !== 2 && ((t = pe), (pe = n), t !== null && mi(t)),
    e
  );
}
function mi(e) {
  pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function ap(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Te(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ot(e, t) {
  for (
    t &= ~lu,
      t &= ~Dl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Re(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function wa(e) {
  if (B & 6) throw Error(v(327));
  sn();
  var t = el(e, 0);
  if (!(t & 1)) return ve(e, Y()), null;
  var n = gl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = jo(e);
    r !== 0 && ((t = r), (n = pi(e, r)));
  }
  if (n === 1) throw ((n = ar), Ot(e, 0), ot(e, t), ve(e, Y()), n);
  if (n === 6) throw Error(v(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nt(e, pe, He),
    ve(e, Y()),
    null
  );
}
function iu(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((vn = Y() + 500), Il && _t());
  }
}
function Ft(e) {
  at !== null && at.tag === 0 && !(B & 6) && sn();
  var t = B;
  B |= 1;
  var n = Ne.transition,
    r = R;
  try {
    if (((Ne.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (Ne.transition = n), (B = t), !(B & 6) && _t();
  }
}
function uu() {
  (ge = tn.current), F(tn);
}
function Ot(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Fd(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((Ui(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ol();
          break;
        case 3:
          hn(), F(he), F(ae), Zi();
          break;
        case 5:
          Xi(r);
          break;
        case 4:
          hn();
          break;
        case 13:
          F(U);
          break;
        case 19:
          F(U);
          break;
        case 10:
          Qi(r.type._context);
          break;
        case 22:
        case 23:
          uu();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (X = e = yt(e.current, null)),
    (re = ge = t),
    (q = 0),
    (ar = null),
    (lu = Dl = Tt = 0),
    (pe = An = null),
    Lt !== null)
  ) {
    for (t = 0; t < Lt.length; t++)
      if (((n = Lt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Lt = null;
  }
  return e;
}
function Ec(e, t) {
  do {
    var n = X;
    try {
      if ((Hi(), (Ur.current = ml), pl)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        pl = !1;
      }
      if (
        ((Mt = 0),
        (ee = J = A = null),
        (Wn = !1),
        (or = 0),
        (ru.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (ar = t), (X = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = re),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            m = u,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var g = ia(i);
          if (g !== null) {
            (g.flags &= -257),
              ua(g, i, u, o, t),
              g.mode & 1 && oa(o, s, t),
              (t = g),
              (a = s);
            var w = t.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(a), (t.updateQueue = k);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              oa(o, s, t), au();
              break e;
            }
            a = Error(v(426));
          }
        } else if (W && u.mode & 1) {
          var j = ia(i);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              ua(j, i, u, o, t),
              Ai(yn(a, u));
            break e;
          }
        }
        (o = a = yn(a, u)),
          q !== 4 && (q = 2),
          An === null ? (An = [o]) : An.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = uc(o, a, t);
              qu(o, f);
              break e;
            case 1:
              u = a;
              var c = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (mt === null || !mt.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = ac(o, u, t);
                qu(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Nc(n);
    } catch (_) {
      (t = _), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Pc() {
  var e = hl.current;
  return (hl.current = ml), e === null ? ml : e;
}
function au() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    te === null || (!(Tt & 268435455) && !(Dl & 268435455)) || ot(te, re);
}
function gl(e, t) {
  var n = B;
  B |= 2;
  var r = Pc();
  (te !== e || re !== t) && ((He = null), Ot(e, t));
  do
    try {
      sp();
      break;
    } catch (l) {
      Ec(e, l);
    }
  while (1);
  if ((Hi(), (B = n), (hl.current = r), X !== null)) throw Error(v(261));
  return (te = null), (re = 0), q;
}
function sp() {
  for (; X !== null; ) Cc(X);
}
function cp() {
  for (; X !== null && !Rf(); ) Cc(X);
}
function Cc(e) {
  var t = Lc(e.alternate, e, ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? Nc(e) : (X = t),
    (ru.current = null);
}
function Nc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = rp(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (X = null);
        return;
      }
    } else if (((n = np(n, t, ge)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function Nt(e, t, n) {
  var r = R,
    l = Ne.transition;
  try {
    (Ne.transition = null), (R = 1), fp(e, t, n, r);
  } finally {
    (Ne.transition = l), (R = r);
  }
  return null;
}
function fp(e, t, n, r) {
  do sn();
  while (at !== null);
  if (B & 6) throw Error(v(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(v(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Qf(e, o),
    e === te && ((X = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      $r ||
      (($r = !0),
      Ic(br, function () {
        return sn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ne.transition), (Ne.transition = null);
    var i = R;
    R = 1;
    var u = B;
    (B |= 4),
      (ru.current = null),
      op(e, n),
      Sc(n, e),
      Od(Qo),
      (tl = !!Ho),
      (Qo = Ho = null),
      (e.current = n),
      ip(n),
      Mf(),
      (B = u),
      (R = i),
      (Ne.transition = o);
  } else e.current = n;
  if (
    ($r && (($r = !1), (at = e), (vl = l)),
    (o = e.pendingLanes),
    o === 0 && (mt = null),
    jf(n.stateNode),
    ve(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (yl) throw ((yl = !1), (e = fi), (fi = null), e);
  return (
    vl & 1 && e.tag !== 0 && sn(),
    (o = e.pendingLanes),
    o & 1 ? (e === di ? Vn++ : ((Vn = 0), (di = e))) : (Vn = 0),
    _t(),
    null
  );
}
function sn() {
  if (at !== null) {
    var e = is(vl),
      t = Ne.transition,
      n = R;
    try {
      if (((Ne.transition = null), (R = 16 > e ? 16 : e), at === null))
        var r = !1;
      else {
        if (((e = at), (at = null), (vl = 0), B & 6)) throw Error(v(331));
        var l = B;
        for (B |= 4, S = e.current; S !== null; ) {
          var o = S,
            i = o.child;
          if (S.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (S = s; S !== null; ) {
                  var m = S;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Un(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (S = h);
                  else
                    for (; S !== null; ) {
                      m = S;
                      var p = m.sibling,
                        g = m.return;
                      if ((gc(m), m === s)) {
                        S = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (S = p);
                        break;
                      }
                      S = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var j = k.sibling;
                    (k.sibling = null), (k = j);
                  } while (k !== null);
                }
              }
              S = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (S = i);
          else
            e: for (; S !== null; ) {
              if (((o = S), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Un(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (S = f);
                break e;
              }
              S = o.return;
            }
        }
        var c = e.current;
        for (S = c; S !== null; ) {
          i = S;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (S = d);
          else
            e: for (i = c; S !== null; ) {
              if (((u = S), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bl(9, u);
                  }
                } catch (_) {
                  H(u, u.return, _);
                }
              if (u === i) {
                S = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (S = y);
                break e;
              }
              S = u.return;
            }
        }
        if (
          ((B = l), _t(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(Pl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (Ne.transition = t);
    }
  }
  return !1;
}
function ka(e, t, n) {
  (t = yn(n, t)),
    (t = uc(e, t, 1)),
    (e = pt(e, t, 1)),
    (t = ce()),
    e !== null && (cr(e, 1, t), ve(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) ka(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ka(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (mt === null || !mt.has(r)))
        ) {
          (e = yn(n, e)),
            (e = ac(t, e, 1)),
            (t = pt(t, e, 1)),
            (e = ce()),
            t !== null && (cr(t, 1, e), ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function dp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (q === 4 || (q === 3 && (re & 130023424) === re && 500 > Y() - ou)
        ? Ot(e, 0)
        : (lu |= n)),
    ve(e, t);
}
function zc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = _r), (_r <<= 1), !(_r & 130023424) && (_r = 4194304))
      : (t = 1));
  var n = ce();
  (e = Je(e, t)), e !== null && (cr(e, t, n), ve(e, n));
}
function pp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), zc(e, n);
}
function mp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(v(314));
  }
  r !== null && r.delete(t), zc(e, n);
}
var Lc;
Lc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (me = !1), tp(e, t, n);
      me = !!(e.flags & 131072);
    }
  else (me = !1), W && t.flags & 1048576 && $s(t, al, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Vr(e, t), (e = t.pendingProps);
      var l = dn(t, ae.current);
      an(t, n), (l = qi(null, t, r, e, l, n));
      var o = bi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((o = !0), il(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ki(t),
            (l.updater = Ol),
            (t.stateNode = l),
            (l._reactInternals = t),
            ei(t, r, e, n),
            (t = ri(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && Wi(t), se(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = yp(r)),
          (e = $e(r, e)),
          l)
        ) {
          case 0:
            t = ni(null, t, r, e, n);
            break e;
          case 1:
            t = ca(null, t, r, e, n);
            break e;
          case 11:
            t = aa(null, t, r, e, n);
            break e;
          case 14:
            t = sa(null, t, r, $e(r.type, e), n);
            break e;
        }
        throw Error(v(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : $e(r, l)),
        ni(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : $e(r, l)),
        ca(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((dc(t), e === null)) throw Error(v(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Ms(e, t),
          fl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = yn(Error(v(423)), t)), (t = fa(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = yn(Error(v(424)), t)), (t = fa(e, t, r, n, l));
            break e;
          } else
            for (
              we = dt(t.stateNode.containerInfo.firstChild),
                ke = t,
                W = !0,
                De = null,
                n = Ws(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pn(), r === l)) {
            t = qe(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Us(t),
        e === null && Jo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Go(r, l) ? (i = null) : o !== null && Go(r, o) && (t.flags |= 32),
        fc(e, t),
        se(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Jo(t), null;
    case 13:
      return pc(e, t, n);
    case 4:
      return (
        Yi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mn(t, null, r, n)) : se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : $e(r, l)),
        aa(e, t, r, l, n)
      );
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          M(sl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Te(o.value, i)) {
            if (o.children === l.children && !he.current) {
              t = qe(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Ye(-1, n & -n)), (a.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var m = s.pending;
                        m === null
                          ? (a.next = a)
                          : ((a.next = m.next), (m.next = a)),
                          (s.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      qo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(v(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  qo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        se(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        an(t, n),
        (l = ze(l)),
        (r = r(l)),
        (t.flags |= 1),
        se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = $e(r, t.pendingProps)),
        (l = $e(r.type, l)),
        sa(e, t, r, l, n)
      );
    case 15:
      return sc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : $e(r, l)),
        Vr(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), il(t)) : (e = !1),
        an(t, n),
        Fs(t, r, l),
        ei(t, r, l, n),
        ri(null, t, r, !0, e, n)
      );
    case 19:
      return mc(e, t, n);
    case 22:
      return cc(e, t, n);
  }
  throw Error(v(156, t.tag));
};
function Ic(e, t) {
  return ns(e, t);
}
function hp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new hp(e, t, n, r);
}
function su(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function yp(e) {
  if (typeof e == "function") return su(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === zi)) return 11;
    if (e === Li) return 14;
  }
  return 2;
}
function yt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Gr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) su(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Qt:
        return $t(n.children, l, o, t);
      case Ni:
        (i = 8), (l |= 8);
        break;
      case Eo:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = Eo), (e.lanes = o), e
        );
      case Po:
        return (e = Ce(13, n, t, l)), (e.elementType = Po), (e.lanes = o), e;
      case Co:
        return (e = Ce(19, n, t, l)), (e.elementType = Co), (e.lanes = o), e;
      case ja:
        return Rl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ta:
              i = 10;
              break e;
            case Fa:
              i = 9;
              break e;
            case zi:
              i = 11;
              break e;
            case Li:
              i = 14;
              break e;
            case nt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(v(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function $t(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function Rl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = ja),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ho(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function yo(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function vp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Xl(0)),
    (this.expirationTimes = Xl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function cu(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new vp(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ce(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ki(o),
    e
  );
}
function gp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ht,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Oc(e) {
  if (!e) return wt;
  e = e._reactInternals;
  e: {
    if (Ut(e) !== e || e.tag !== 1) throw Error(v(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(v(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return Is(e, n, t);
  }
  return t;
}
function $c(e, t, n, r, l, o, i, u, a) {
  return (
    (e = cu(n, r, !0, e, l, o, i, u, a)),
    (e.context = Oc(null)),
    (n = e.current),
    (r = ce()),
    (l = ht(n)),
    (o = Ye(r, l)),
    (o.callback = t ?? null),
    pt(n, o, l),
    (e.current.lanes = l),
    cr(e, l, r),
    ve(e, r),
    e
  );
}
function Ml(e, t, n, r) {
  var l = t.current,
    o = ce(),
    i = ht(l);
  return (
    (n = Oc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ye(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = pt(l, t, i)),
    e !== null && (Me(e, l, i, o), Wr(e, l, i)),
    i
  );
}
function wl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Sa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fu(e, t) {
  Sa(e, t), (e = e.alternate) && Sa(e, t);
}
function wp() {
  return null;
}
var Bc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function du(e) {
  this._internalRoot = e;
}
Tl.prototype.render = du.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(v(409));
  Ml(e, t, null, null);
};
Tl.prototype.unmount = du.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ft(function () {
      Ml(null, e, null, null);
    }),
      (t[Ze] = null);
  }
};
function Tl(e) {
  this._internalRoot = e;
}
Tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ss();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < lt.length && t !== 0 && t < lt[n].priority; n++);
    lt.splice(n, 0, e), n === 0 && fs(e);
  }
};
function pu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Fl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function _a() {}
function kp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = wl(i);
        o.call(s);
      };
    }
    var i = $c(t, r, e, 0, null, !1, !1, "", _a);
    return (
      (e._reactRootContainer = i),
      (e[Ze] = i.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      Ft(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = wl(a);
      u.call(s);
    };
  }
  var a = cu(e, 0, !1, null, null, !1, !1, "", _a);
  return (
    (e._reactRootContainer = a),
    (e[Ze] = a.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    Ft(function () {
      Ml(t, a, n, r);
    }),
    a
  );
}
function jl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = wl(i);
        u.call(a);
      };
    }
    Ml(t, i, e, l);
  } else i = kp(n, t, e, l, r);
  return wl(i);
}
us = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Bn(t.pendingLanes);
        n !== 0 &&
          ($i(t, n | 1), ve(t, Y()), !(B & 6) && ((vn = Y() + 500), _t()));
      }
      break;
    case 13:
      Ft(function () {
        var r = Je(e, 1);
        if (r !== null) {
          var l = ce();
          Me(r, e, 1, l);
        }
      }),
        fu(e, 1);
  }
};
Bi = function (e) {
  if (e.tag === 13) {
    var t = Je(e, 134217728);
    if (t !== null) {
      var n = ce();
      Me(t, e, 134217728, n);
    }
    fu(e, 134217728);
  }
};
as = function (e) {
  if (e.tag === 13) {
    var t = ht(e),
      n = Je(e, t);
    if (n !== null) {
      var r = ce();
      Me(n, e, t, r);
    }
    fu(e, t);
  }
};
ss = function () {
  return R;
};
cs = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
Mo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Lo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ll(r);
            if (!l) throw Error(v(90));
            Ua(r), Lo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Va(e, n);
      break;
    case "select":
      (t = n.value), t != null && rn(e, !!n.multiple, t, !1);
  }
};
Za = iu;
Ja = Ft;
var Sp = { usingClientEntryPoint: !1, Events: [dr, Xt, Ll, Ya, Xa, iu] },
  In = {
    findFiberByHostInstance: zt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  _p = {
    bundleType: In.bundleType,
    version: In.version,
    rendererPackageName: In.rendererPackageName,
    rendererConfig: In.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = es(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: In.findFiberByHostInstance || wp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Br = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Br.isDisabled && Br.supportsFiber)
    try {
      (Pl = Br.inject(_p)), (Ue = Br);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sp;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pu(t)) throw Error(v(200));
  return gp(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!pu(e)) throw Error(v(299));
  var n = !1,
    r = "",
    l = Bc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = cu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ze] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new du(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(v(188))
      : ((e = Object.keys(e).join(",")), Error(v(268, e)));
  return (e = es(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return Ft(e);
};
_e.hydrate = function (e, t, n) {
  if (!Fl(t)) throw Error(v(200));
  return jl(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!pu(e)) throw Error(v(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Bc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = $c(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ze] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Tl(t);
};
_e.render = function (e, t, n) {
  if (!Fl(t)) throw Error(v(200));
  return jl(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!Fl(e)) throw Error(v(40));
  return e._reactRootContainer
    ? (Ft(function () {
        jl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ze] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = iu;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Fl(n)) throw Error(v(200));
  if (e == null || e._reactInternals === void 0) throw Error(v(38));
  return jl(e, t, n, !1, r);
};
_e.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = _e);
})(wf);
var xa = So;
(ko.createRoot = xa.createRoot), (ko.hydrateRoot = xa.hydrateRoot);
let xp = { data: "" },
  Ep = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || xp,
  Pp = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Cp = /\/\*[^]*?\*\/|  +/g,
  Ea = /\n+/g,
  it = (e, t) => {
    let n = "",
      r = "",
      l = "";
    for (let o in e) {
      let i = e[o];
      o[0] == "@"
        ? o[1] == "i"
          ? (n = o + " " + i + ";")
          : (r +=
              o[1] == "f"
                ? it(i, o)
                : o + "{" + it(i, o[1] == "k" ? "" : t) + "}")
        : typeof i == "object"
        ? (r += it(
            i,
            t
              ? t.replace(/([^,])+/g, (u) =>
                  o.replace(/(^:.*)|([^,])+/g, (a) =>
                    /&/.test(a) ? a.replace(/&/g, u) : u ? u + " " + a : a
                  )
                )
              : o
          ))
        : i != null &&
          ((o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (l += it.p ? it.p(o, i) : o + ":" + i + ";"));
    }
    return n + (t && l ? t + "{" + l + "}" : l) + r;
  },
  Ve = {},
  Dc = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + Dc(e[n]);
      return t;
    }
    return e;
  },
  Np = (e, t, n, r, l) => {
    let o = Dc(e),
      i =
        Ve[o] ||
        (Ve[o] = ((a) => {
          let s = 0,
            m = 11;
          for (; s < a.length; ) m = (101 * m + a.charCodeAt(s++)) >>> 0;
          return "go" + m;
        })(o));
    if (!Ve[i]) {
      let a =
        o !== e
          ? e
          : ((s) => {
              let m,
                h,
                p = [{}];
              for (; (m = Pp.exec(s.replace(Cp, ""))); )
                m[4]
                  ? p.shift()
                  : m[3]
                  ? ((h = m[3].replace(Ea, " ").trim()),
                    p.unshift((p[0][h] = p[0][h] || {})))
                  : (p[0][m[1]] = m[2].replace(Ea, " ").trim());
              return p[0];
            })(e);
      Ve[i] = it(l ? { ["@keyframes " + i]: a } : a, n ? "" : "." + i);
    }
    let u = n && Ve.g ? Ve.g : null;
    return (
      n && (Ve.g = Ve[i]),
      ((a, s, m, h) => {
        h
          ? (s.data = s.data.replace(h, a))
          : s.data.indexOf(a) === -1 && (s.data = m ? a + s.data : s.data + a);
      })(Ve[i], t, r, u),
      i
    );
  },
  zp = (e, t, n) =>
    e.reduce((r, l, o) => {
      let i = t[o];
      if (i && i.call) {
        let u = i(n),
          a = (u && u.props && u.props.className) || (/^go/.test(u) && u);
        i = a
          ? "." + a
          : u && typeof u == "object"
          ? u.props
            ? ""
            : it(u, "")
          : u === !1
          ? ""
          : u;
      }
      return r + l + (i ?? "");
    }, "");
function Wl(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return Np(
    n.unshift
      ? n.raw
        ? zp(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, l) => Object.assign(r, l && l.call ? l(t.p) : l), {})
      : n,
    Ep(t.target),
    t.g,
    t.o,
    t.k
  );
}
let Rc, hi, yi;
Wl.bind({ g: 1 });
let be = Wl.bind({ k: 1 });
function Lp(e, t, n, r) {
  (it.p = t), (Rc = e), (hi = n), (yi = r);
}
function xt(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function l(o, i) {
      let u = Object.assign({}, o),
        a = u.className || l.className;
      (n.p = Object.assign({ theme: hi && hi() }, u)),
        (n.o = / *go\d+/.test(a)),
        (u.className = Wl.apply(n, r) + (a ? " " + a : "")),
        t && (u.ref = i);
      let s = e;
      return (
        e[0] && ((s = u.as || e), delete u.as), yi && s[0] && yi(u), Rc(s, u)
      );
    }
    return t ? t(l) : l;
  };
}
var Ip = (e) => typeof e == "function",
  kl = (e, t) => (Ip(e) ? e(t) : e),
  Op = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  Mc = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  $p = 20,
  Kr = new Map(),
  Bp = 1e3,
  Pa = (e) => {
    if (Kr.has(e)) return;
    let t = setTimeout(() => {
      Kr.delete(e), At({ type: 4, toastId: e });
    }, Bp);
    Kr.set(e, t);
  },
  Dp = (e) => {
    let t = Kr.get(e);
    t && clearTimeout(t);
  },
  vi = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, $p) };
      case 1:
        return (
          t.toast.id && Dp(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((o) =>
              o.id === t.toast.id ? { ...o, ...t.toast } : o
            ),
          }
        );
      case 2:
        let { toast: n } = t;
        return e.toasts.find((o) => o.id === n.id)
          ? vi(e, { type: 1, toast: n })
          : vi(e, { type: 0, toast: n });
      case 3:
        let { toastId: r } = t;
        return (
          r
            ? Pa(r)
            : e.toasts.forEach((o) => {
                Pa(o.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((o) =>
              o.id === r || r === void 0 ? { ...o, visible: !1 } : o
            ),
          }
        );
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((o) => o.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let l = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((o) => ({
            ...o,
            pauseDuration: o.pauseDuration + l,
          })),
        };
    }
  },
  Yr = [],
  Xr = { toasts: [], pausedAt: void 0 },
  At = (e) => {
    (Xr = vi(Xr, e)),
      Yr.forEach((t) => {
        t(Xr);
      });
  },
  Rp = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  Mp = (e = {}) => {
    let [t, n] = D.useState(Xr);
    D.useEffect(
      () => (
        Yr.push(n),
        () => {
          let l = Yr.indexOf(n);
          l > -1 && Yr.splice(l, 1);
        }
      ),
      [t]
    );
    let r = t.toasts.map((l) => {
      var o, i;
      return {
        ...e,
        ...e[l.type],
        ...l,
        duration:
          l.duration ||
          ((o = e[l.type]) == null ? void 0 : o.duration) ||
          (e == null ? void 0 : e.duration) ||
          Rp[l.type],
        style: {
          ...e.style,
          ...((i = e[l.type]) == null ? void 0 : i.style),
          ...l.style,
        },
      };
    });
    return { ...t, toasts: r };
  },
  Tp = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || Op(),
  }),
  mr = (e) => (t, n) => {
    let r = Tp(t, e, n);
    return At({ type: 2, toast: r }), r.id;
  },
  $ = (e, t) => mr("blank")(e, t);
$.error = mr("error");
$.success = mr("success");
$.loading = mr("loading");
$.custom = mr("custom");
$.dismiss = (e) => {
  At({ type: 3, toastId: e });
};
$.remove = (e) => At({ type: 4, toastId: e });
$.promise = (e, t, n) => {
  let r = $.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    e
      .then(
        (l) => (
          $.success(kl(t.success, l), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success),
          }),
          l
        )
      )
      .catch((l) => {
        $.error(kl(t.error, l), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error),
        });
      }),
    e
  );
};
var Fp = (e, t) => {
    At({ type: 1, toast: { id: e, height: t } });
  },
  jp = () => {
    At({ type: 5, time: Date.now() });
  },
  Wp = (e) => {
    let { toasts: t, pausedAt: n } = Mp(e);
    D.useEffect(() => {
      if (n) return;
      let o = Date.now(),
        i = t.map((u) => {
          if (u.duration === 1 / 0) return;
          let a = (u.duration || 0) + u.pauseDuration - (o - u.createdAt);
          if (a < 0) {
            u.visible && $.dismiss(u.id);
            return;
          }
          return setTimeout(() => $.dismiss(u.id), a);
        });
      return () => {
        i.forEach((u) => u && clearTimeout(u));
      };
    }, [t, n]);
    let r = D.useCallback(() => {
        n && At({ type: 6, time: Date.now() });
      }, [n]),
      l = D.useCallback(
        (o, i) => {
          let {
              reverseOrder: u = !1,
              gutter: a = 8,
              defaultPosition: s,
            } = i || {},
            m = t.filter(
              (g) => (g.position || s) === (o.position || s) && g.height
            ),
            h = m.findIndex((g) => g.id === o.id),
            p = m.filter((g, w) => w < h && g.visible).length;
          return m
            .filter((g) => g.visible)
            .slice(...(u ? [p + 1] : [0, p]))
            .reduce((g, w) => g + (w.height || 0) + a, 0);
        },
        [t]
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: Fp,
        startPause: jp,
        endPause: r,
        calculateOffset: l,
      },
    };
  },
  Up = be`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  Ap = be`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Vp = be`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  Hp = xt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Up} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ap} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Vp} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  Qp = be`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  Gp = xt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${Qp} 1s linear infinite;
`,
  Kp = be`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  Yp = be`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  Xp = xt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Kp} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Yp} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  Zp = xt("div")`
  position: absolute;
`,
  Jp = xt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  qp = be`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  bp = xt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${qp} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  e0 = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? D.createElement(bp, null, t)
        : t
      : n === "blank"
      ? null
      : D.createElement(
          Jp,
          null,
          D.createElement(Gp, { ...r }),
          n !== "loading" &&
            D.createElement(
              Zp,
              null,
              n === "error"
                ? D.createElement(Hp, { ...r })
                : D.createElement(Xp, { ...r })
            )
        );
  },
  t0 = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  n0 = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  r0 = "0%{opacity:0;} 100%{opacity:1;}",
  l0 = "0%{opacity:1;} 100%{opacity:0;}",
  o0 = xt("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  i0 = xt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  u0 = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, l] = Mc() ? [r0, l0] : [t0(n), n0(n)];
    return {
      animation: t
        ? `${be(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${be(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  a0 = D.memo(({ toast: e, position: t, style: n, children: r }) => {
    let l = e.height
        ? u0(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      o = D.createElement(e0, { toast: e }),
      i = D.createElement(i0, { ...e.ariaProps }, kl(e.message, e));
    return D.createElement(
      o0,
      { className: e.className, style: { ...l, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: o, message: i })
        : D.createElement(D.Fragment, null, o, i)
    );
  });
Lp(D.createElement);
var s0 = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: l,
  }) => {
    let o = D.useCallback(
      (i) => {
        if (i) {
          let u = () => {
            let a = i.getBoundingClientRect().height;
            r(e, a);
          };
          u(),
            new MutationObserver(u).observe(i, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return D.createElement("div", { ref: o, className: t, style: n }, l);
  },
  c0 = (e, t) => {
    let n = e.includes("top"),
      r = n ? { top: 0 } : { bottom: 0 },
      l = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: Mc() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...l,
    };
  },
  f0 = Wl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Dr = 16,
  d0 = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: l,
    containerStyle: o,
    containerClassName: i,
  }) => {
    let { toasts: u, handlers: a } = Wp(n);
    return D.createElement(
      "div",
      {
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Dr,
          left: Dr,
          right: Dr,
          bottom: Dr,
          pointerEvents: "none",
          ...o,
        },
        className: i,
        onMouseEnter: a.startPause,
        onMouseLeave: a.endPause,
      },
      u.map((s) => {
        let m = s.position || t,
          h = a.calculateOffset(s, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          p = c0(m, h);
        return D.createElement(
          s0,
          {
            id: s.id,
            key: s.id,
            onHeightUpdate: a.updateHeight,
            className: s.visible ? f0 : "",
            style: p,
          },
          s.type === "custom"
            ? kl(s.message, s)
            : l
            ? l(s)
            : D.createElement(a0, { toast: s, position: m })
        );
      })
    );
  };
const Sl = class {
  constructor(t, n, r, l, o, i) {
    Z(this, "_outBar");
    Z(this, "_endBar");
    Z(this, "_inTheEnd");
    (this._name = t),
      (this._icon = n),
      (this._outBarIdx = r),
      (this._endBarIdx = l),
      (this._pieceColor = o),
      (this._pieceBorderColor = i),
      (this._outBar = []),
      (this._endBar = []),
      (this._inTheEnd = !1);
  }
  get name() {
    return this._name;
  }
  get icon() {
    return this._icon;
  }
  get outBar() {
    return this._outBar;
  }
  set outBar(t) {
    this._outBar = t;
  }
  get outBarIdx() {
    return this._outBarIdx;
  }
  get endBar() {
    return this._endBar;
  }
  set endBar(t) {
    this._endBar = t;
  }
  get endBarIdx() {
    return this._endBarIdx;
  }
  get inTheEnd() {
    return this._inTheEnd;
  }
  set inTheEnd(t) {
    this._inTheEnd = t;
  }
  get pieceColor() {
    return this._pieceColor;
  }
  get pieceBorderColor() {
    return this._pieceBorderColor;
  }
  clone() {
    const t = new Sl(
      this._name,
      this._icon,
      this._outBarIdx,
      this._endBarIdx,
      this._pieceColor,
      this._pieceBorderColor
    );
    return (
      (t.outBar = [...this.outBar]),
      (t.endBar = [...this.endBar]),
      (t.inTheEnd = this._inTheEnd),
      t
    );
  }
};
let Bt = Sl;
Z(Bt, "new", () => new Sl("", "", "", "", "", ""));
const _l = class {
  constructor(t, n, r, l) {
    Z(this, "_rolledDice", !1);
    Z(this, "_maxMoves", 0);
    Z(this, "_movesMade", 0);
    (this._turnPlayer = t),
      (this._opponentPlayer = n),
      (this._dices = r),
      (this._beginning = l),
      l && r.length === 2
        ? (this._maxMoves === 0 &&
            this.dices[0] === this.dices[1] &&
            (this.dices.push(this.dices[0]), this.dices.push(this.dices[0])),
          (this._beginning = !1),
          (this._rolledDice = !0),
          (this._maxMoves = this._dices.reduce((o, i) => o + i, 0)),
          (this._movesMade = 0))
        : ((this._rolledDice = !1),
          (this._maxMoves = 0),
          (this._movesMade = 0));
  }
  get turnPlayer() {
    return this._turnPlayer;
  }
  get opponentPlayer() {
    return this._opponentPlayer;
  }
  get rolledDice() {
    return this._rolledDice;
  }
  set rolledDice(t) {
    this._rolledDice = t;
  }
  get dices() {
    return this._dices;
  }
  set dices(t) {
    this._dices = t;
  }
  get movesMade() {
    return this._movesMade;
  }
  set movesMade(t) {
    this._movesMade = t;
  }
  get maxMoves() {
    return this._maxMoves;
  }
  set maxMoves(t) {
    this._maxMoves = t;
  }
  clone() {
    const t = new _l(this._turnPlayer, this._opponentPlayer, this._dices, !1);
    return (
      (t.rolledDice = this._rolledDice),
      (t.maxMoves = this._maxMoves),
      (t.movesMade = this._movesMade),
      t
    );
  }
};
let vt = _l;
Z(vt, "new", () => new _l(Bt.new(), Bt.new(), [], !1));
function gi() {
  const e = Math.floor(Math.random() * 6) + 1,
    t = Math.floor(Math.random() * 6) + 1;
  return [e, t];
}
function p0(e) {
  const t = new vt(e.turnPlayer, e.opponentPlayer, gi(), !0);
  return (
    t.dices[0] === t.dices[1]
      ? $.success(
          `${t.turnPlayer.icon}
      🎲 Rolled a double ${t.dices} 🎲`,
          K(t)
        )
      : $.success(
          `${t.turnPlayer.icon}
      🎲 Rolled ${t.dices} 🎲`,
          K(t)
        ),
    t
  );
}
function m0() {
  $(
    `Backgammon...
  
  Is the oldest game in the world. Archaeologists found sets
  when they excavated the ruins
  of ancient Mesopotamia,
  five thousand years old. 

  That's older than Jesus Christ. 
  Their dice were made of bones.
  
  Two Players. Two Sides.

  One is Light, 
  One is Dark.

  -  John Locke. Lost.`,
    {
      duration: 9e3,
      style: {
        borderRadius: "10px",
        background: "black",
        color: "#fff",
        border: "2px solid white",
      },
    }
  );
}
function h0(e) {
  for (var t; ; ) {
    const [n, r] = gi(),
      [l, o] = gi();
    if (n + r > l + o) {
      (t = new vt(e.whitePlayer, e.blackPlayer, [], !1)),
        $.success("Game starts with ⚪ WHITE ⚪", K(t));
      break;
    } else if (n + r < l + o) {
      (t = new vt(e.blackPlayer, e.whitePlayer, [], !1)),
        $.success("Game starts with ⚫ BLACK ⚫", K(t));
      break;
    }
  }
  return t;
}
function y0(e, t) {
  var n = 0;
  const [r, l] = [t.fromBarIdx, t.toBarIdx];
  if (typeof r == "number")
    r <= 11
      ? (n = l <= 11 ? Math.abs(r - l) : r + (l - 11))
      : (n = l > 11 ? Math.abs(r - l) : r + (l - 11));
  else if (
    (r === e.turnPlayer.outBarIdx &&
      (n = e.turnPlayer.name === "White" ? 12 - l : 24 - l),
    r === e.turnPlayer.endBarIdx)
  )
    var n = e.turnPlayer.name === "White" ? 24 - l : 12 - l;
  return (
    (e.movesMade = n),
    e.movesMade === e.dices[0] || (e.turnPlayer.inTheEnd && n <= e.dices[0])
      ? (e.maxMoves -= e.dices.shift())
      : (e.movesMade === e.dices[1] ||
          (e.turnPlayer.inTheEnd && n <= e.dices[1])) &&
        (e.maxMoves -= e.dices.pop()),
    e
  );
}
function Tc(e, t) {
  return e.gameOn && (t = v0(t)), t;
}
function v0(e) {
  const t = new vt(e.opponentPlayer, e.turnPlayer, [], !1),
    n = `Turn is now ${t.turnPlayer.icon}`;
  return $.success(n, K(t)), t;
}
function Fc(e, t) {
  return (
    e.gameOn &&
      !g0(e, t) &&
      ($.error(
        `You have no possible moves.
      Turn changes to opponent.`,
        K(t)
      ),
      (t = Tc(e, t))),
    t
  );
}
function g0(e, t) {
  if (t.turnPlayer.outBar.length !== 0) return Wc(e, t).length !== 0;
  const n = [];
  e.board.map((o, i) => {
    o.includes(t.turnPlayer.name) && n.push(i);
  });
  const r = [];
  return (
    n.map((o) => {
      jc(e, o, t).map((u) => r.push(u));
    }),
    Uc(e, t).map((o) => r.push(o)),
    r.length !== 0
  );
}
function jc(e, t, n) {
  var [r, l] = n.dices;
  r === null && (r = 0), l === null && (l = 0);
  const o = [];
  for (let s = 0; s < e.board.length; s++) {
    var i = e.board[s],
      u = s;
    if (!(i.includes(n.opponentPlayer.name) && i.length > 1)) {
      if (n.turnPlayer.name === "White") {
        if (
          (t <= 11 && u <= 11 && u >= t) ||
          (t > 11 && u > 11 && u <= t) ||
          (t > 11 && u < 11)
        )
          continue;
      } else if (
        (t <= 11 && u <= 11 && u <= t) ||
        (t > 11 && u > 11 && u >= t) ||
        (t <= 11 && u > 11)
      )
        continue;
      var a = 0;
      t <= 11
        ? (a = u <= 11 ? Math.abs(t - u) : t + (u - 11))
        : (a = u > 11 ? Math.abs(t - u) : t + (u - 11)),
        !(a === 0 || (a !== r && a !== l)) && o.push(u);
    }
  }
  return o;
}
function Wc(e, t) {
  function n(i) {
    const u = t.opponentPlayer.name;
    return (
      !e.board[i].includes(u) ||
      (e.board[i].includes(u) && e.board[i].length === 1)
    );
  }
  const r = [],
    [l, o] = t.dices;
  return (
    t.turnPlayer.name === "White"
      ? (l > 0 && n(12 - l) && r.push(12 - l),
        o > 0 && n(12 - o) && r.push(12 - o))
      : (l > 0 && n(24 - l) && r.push(24 - l),
        o > 0 && n(24 - o) && r.push(24 - o)),
    r
  );
}
function Uc(e, t) {
  const n = t.turnPlayer.name;
  function r(u) {
    return e.board[u].includes(n);
  }
  const l = [];
  for (var [o, i] = t.dices; o > 0 || i > 0; )
    n === "White"
      ? (o > 0 && r(24 - o) && l.push(24 - o),
        i > 0 && o !== i && r(24 - i) && l.push(24 - i))
      : (o > 0 && r(12 - o) && l.push(12 - o),
        i > 0 && o !== i && r(12 - i) && l.push(12 - i)),
      o--,
      i--;
  return l;
}
const xl = class {
  constructor() {
    Z(this, "_fromBarIdx");
    Z(this, "_toBarIdx");
    Z(this, "_canGoTo");
    (this._fromBarIdx = -1), (this._toBarIdx = -1), (this._canGoTo = []);
  }
  get fromBarIdx() {
    return this._fromBarIdx;
  }
  set fromBarIdx(t) {
    this._fromBarIdx = t;
  }
  get toBarIdx() {
    return this._toBarIdx;
  }
  set toBarIdx(t) {
    this._toBarIdx = t;
  }
  get canGoTo() {
    return this._canGoTo;
  }
  set canGoTo(t) {
    this._canGoTo = t;
  }
  clone() {
    const t = new xl();
    return (
      (t.fromBarIdx = this._fromBarIdx),
      (t.toBarIdx = this._toBarIdx),
      (t.canGoTo = [...this._canGoTo]),
      t
    );
  }
};
let cn = xl;
Z(cn, "new", () => new xl());
function Ac(e, t) {
  const n = [];
  if (
    (e.board.map((r, l) => {
      r.includes(t.turnPlayer.name) && n.push(l);
    }),
    t.turnPlayer.name === "White")
  ) {
    for (let r = 0; r < n.length; r++) if (n[r] < 18) return !1;
  } else
    for (let r = 0; r < n.length; r++) {
      const l = n[r];
      if (l < 6 || l > 11) return !1;
    }
  return !0;
}
function w0(e) {
  $(`${e.turnPlayer.icon} has Won the Game!`, K(e));
}
function k0(e, t, n) {
  const [r, l] = [n.fromBarIdx, n.toBarIdx];
  return (
    e.board[l].includes(t.opponentPlayer.name) &&
      (t.opponentPlayer.outBar.push(e.board[l].pop()),
      (t.opponentPlayer.inTheEnd = !1),
      t.opponentPlayer.name === e.whitePlayer.name
        ? (e.whitePlayer = t.opponentPlayer)
        : (e.blackPlayer = t.opponentPlayer)),
    r === t.turnPlayer.outBarIdx
      ? (e.board[l].push(t.turnPlayer.outBar.pop()),
        t.turnPlayer.name === e.whitePlayer.name
          ? (e.whitePlayer = t.turnPlayer)
          : (e.blackPlayer = t.turnPlayer),
        e)
      : r === t.turnPlayer.endBarIdx
      ? (t.turnPlayer.endBar.push(e.board[l].pop()),
        t.turnPlayer.name === e.whitePlayer.name
          ? (e.whitePlayer = t.turnPlayer)
          : (e.blackPlayer = t.turnPlayer),
        t.turnPlayer.endBar.length === 15 && ((e.gameOn = !1), w0(t)),
        e)
      : (e.board[l].push(e.board[r].pop()), e)
  );
}
function S0(e, t, n, r) {
  const l = () => new cn();
  if (!t.gameOn) return $.error("Begin a Game first!", K(n)), [t, n, r];
  if (!n.rolledDice) return $.error("Roll a dice first!", K(n)), [t, n, r];
  if (n.turnPlayer.outBar.length == 0 && e === n.turnPlayer.outBarIdx)
    return $.error("You have no pieces on out bar.", K(n)), [t, n, r];
  if (!n.turnPlayer.inTheEnd && e === n.turnPlayer.endBarIdx)
    return (
      $.error(
        `You have not brought all your
      pieces to the ending area yet.`,
        K(n)
      ),
      [t, n, r]
    );
  if (r.fromBarIdx === -1 && typeof e == "number" && t.board[e].length == 0)
    return $.error("You can't select an empty bar.", K(n)), [t, n, r];
  if (
    typeof e == "number" &&
    t.board[e].includes(n.opponentPlayer.name) &&
    t.board[e].length > 1
  )
    return $.error("You can't select opponent's bar.", K(n)), [t, n, r];
  if (
    n.turnPlayer.outBar.length !== 0 &&
    r.fromBarIdx !== n.turnPlayer.outBarIdx &&
    e !== n.turnPlayer.outBarIdx
  )
    return (
      $.error(
        `You have to play 
      your out pieces first.`,
        K(n)
      ),
      [t, n, r]
    );
  if (e === r.fromBarIdx) return (r = l()), [t, n, r];
  if (r.fromBarIdx === -1 && e === n.turnPlayer.endBarIdx)
    return (r = E0(e, t, n, r)), [t, n, r];
  if (n.turnPlayer.outBar.length !== 0 && e === n.turnPlayer.outBarIdx)
    return (r = x0(e, t, n, r)), [t, n, r];
  if (typeof e != "number")
    return $.error("You can't select opponent's bar.", K(n)), [t, n, r];
  if (r.fromBarIdx === -1 && t.board[e].includes(n.turnPlayer.name))
    return (r = _0(t, e, n, r)), [t, n, r];
  if (r.toBarIdx === -1 && r.canGoTo.includes(e)) {
    if (
      ((n = P0(e, t, n, r)),
      (r = l()),
      !n.turnPlayer.inTheEnd &&
        Ac(t, n) &&
        ((n.turnPlayer.inTheEnd = !0),
        $.success(`${n.turnPlayer.icon} 
      is in the ending area!
      Select your ending bar
      & start putting pieces out.`),
        K(n)),
      n.maxMoves === 0)
    )
      return (n = Tc(t, n)), [t, n, r];
    if (n.rolledDice) return (n = Fc(t, n)), [t, n, r];
  } else return $.error("You can't select there.", K(n)), [t, n, r];
  return $("Why are you here?", K(n)), console.log(n), [t, n, r];
}
function _0(e, t, n, r) {
  const l = jc(e, t, n);
  return (
    l.length !== 0
      ? ((r.fromBarIdx = t), (r.canGoTo = l))
      : $.error("You can't select there.", K(n)),
    r
  );
}
function x0(e, t, n, r) {
  r.fromBarIdx = e;
  const l = Wc(t, n);
  return (r.canGoTo = l), r;
}
function E0(e, t, n, r) {
  if (Ac(t, n)) {
    const l = Uc(t, n);
    if (l.length !== 0) return (r.fromBarIdx = e), (r.canGoTo = l), r;
    $.error("You can't select there.", K(n));
  }
  return r;
}
function P0(e, t, n, r) {
  return (r.toBarIdx = e), k0(t, n, r), (n = y0(n, r)), n;
}
const C0 = "_barWrapper_xffma_1",
  N0 = "_bar_xffma_1",
  z0 = "_polygon_xffma_35",
  vo = { barWrapper: C0, bar: N0, polygon: z0 };
function L0(e) {
  return jt("div", {
    className: vo.barWrapper,
    style: { fill: e.fill },
    ...e,
    children: [
      O("div", {
        className: vo.bar,
        style: { justifyContent: e.isLeft ? "initial" : "flex-end" },
        children: e.children,
      }),
      O("svg", {
        height: "40",
        width: "250",
        children: O("polygon", {
          points: e.isLeft ? "0,0 0,40 250,20" : "0,20 250,0 250,40",
          className: vo.polygon,
        }),
      }),
    ],
  });
}
const I0 = "_piece_1qpfg_1",
  O0 = { piece: I0 };
function Vc(e) {
  return O("div", {
    className: O0.piece,
    style: {
      background: e.color !== "White" ? "black" : "#f8f7f3",
      border: e.border,
      color: e.color === "White" ? "black" : "#f8f7f3",
    },
    ...e,
  });
}
function $0(e) {
  return jt("div", {
    className: "board-bottom",
    children: [
      O(n, { player: e.game.whitePlayer, isLeft: !0, fill: "#e0ded7", ...e }),
      O(t, {}),
      O(n, { player: e.game.blackPlayer, isLeft: !1, fill: "#232937", ...e }),
    ],
  });
  function t() {
    return e.game.gameOn
      ? O("button", { onClick: e.rollDice, children: "🎲 roll Dice 🎲" })
      : O("button", { onClick: e.startGame, children: "⚪ Begin Game ⚫" });
  }
  function n(l) {
    return O(
      L0,
      {
        isLeft: l.isLeft,
        onClick: () => l.select(l.player.outBarIdx),
        fill: l.fill,
        children: l.player.outBar.map(
          (o, i) =>
            i < 6 &&
            O(
              r,
              {
                piece: o,
                pieceIdx: i,
                selectedPiece:
                  l.player.name === "White"
                    ? i === l.player.outBar.length - 1
                    : i === 0,
                ...l,
              },
              `${l.player.outBarIdx}-${i}-temp`
            )
        ),
      },
      l.player.outBarIdx
    );
  }
  function r(l) {
    return O(
      Vc,
      {
        border:
          (l.thisMove.fromBarIdx === l.player.outBarIdx &&
            l.selectedPiece &&
            "3px solid #671010") ||
          l.player.pieceBorderColor,
        color: l.piece,
        children:
          l.player.outBar.length > 6 &&
          ((l.pieceIdx === 5 && l.player.name === "White") ||
            (l.pieceIdx === 0 && l.player.name === "Black")) &&
          O(xi, { children: l.player.outBar.length - 6 }),
      },
      `${l.player.outBarIdx}-${l.pieceIdx}`
    );
  }
}
const Hn = class {
  constructor() {
    Z(this, "_gameOn");
    Z(this, "_board");
    Z(this, "_whitePlayer");
    Z(this, "_blackPlayer");
    (this._gameOn = !1),
      (this._board = Hn.initialState()),
      (this._whitePlayer = new Bt(
        "White",
        "⚪ WHITE ⚪",
        "WhiteOutBar",
        "WhiteEndBar",
        "White",
        "1px solid black"
      )),
      (this._blackPlayer = new Bt(
        "Black",
        "⚫ BLACK ⚫",
        "BlackOutBar",
        "BlackEndBar",
        "Black",
        "1px solid #e9e2d6"
      ));
  }
  get gameOn() {
    return this._gameOn;
  }
  set gameOn(t) {
    this._gameOn = t;
  }
  get board() {
    return this._board;
  }
  set board(t) {
    this._board = t;
  }
  get whitePlayer() {
    return this._whitePlayer;
  }
  set whitePlayer(t) {
    this._whitePlayer = t;
  }
  get blackPlayer() {
    return this._blackPlayer;
  }
  set blackPlayer(t) {
    this._blackPlayer = t;
  }
  clone() {
    const t = new Hn();
    return (
      (t.gameOn = this._gameOn),
      (t.board = [...this._board]),
      (t.whitePlayer = this._whitePlayer.clone()),
      (t.blackPlayer = this.blackPlayer.clone()),
      t
    );
  }
};
let nn = Hn;
Z(nn, "new", () => new Hn()),
  Z(nn, "initialState", () => [
    ["White", "White", "White", "White", "White"],
    [],
    [],
    [],
    ["Black", "Black", "Black"],
    [],
    ["Black", "Black", "Black", "Black", "Black"],
    [],
    [],
    [],
    [],
    ["White", "White"],
    ["Black", "Black", "Black", "Black", "Black"],
    [],
    [],
    [],
    ["White", "White", "White"],
    [],
    ["White", "White", "White", "White", "White"],
    [],
    [],
    [],
    [],
    ["Black", "Black"],
  ]);
const B0 = "_barWrapper_wi6n2_1",
  D0 = "_bar_wi6n2_1",
  R0 = "_polygon_wi6n2_39",
  go = { barWrapper: B0, bar: D0, polygon: R0 };
function M0(e) {
  return jt("div", {
    className: go.barWrapper,
    style: { fill: e.fill },
    ...e,
    children: [
      O("div", {
        className: go.bar,
        style: { justifyContent: e.isTopRow ? "flex-end" : "initial" },
        children: e.children,
      }),
      O("svg", {
        height: "250",
        width: "40",
        children: O("polygon", {
          points: e.isTopRow ? "20,0 0,250 40,250" : "0,0 20,250 40,0",
          className: go.polygon,
        }),
      }),
    ],
  });
}
const T0 = "_board_1ifok_1",
  F0 = { board: T0 };
function j0(e) {
  return O("div", { className: F0.board, children: e.children });
}
const W0 = "_barWrapper_1ba5v_1",
  U0 = "_bar_1ba5v_1",
  A0 = "_polygon_1ba5v_33",
  wo = { barWrapper: W0, bar: U0, polygon: A0 };
function V0(e) {
  return jt("div", {
    className: wo.barWrapper,
    style: { fill: e.fill },
    ...e,
    children: [
      O("div", {
        className: wo.bar,
        style: { justifyContent: "initial" },
        children: e.children,
      }),
      O("svg", {
        height: "600",
        width: "40",
        children: O("polygon", {
          points: "0,300 20,0 40,300 20,600",
          className: wo.polygon,
        }),
      }),
    ],
  });
}
function H0(e) {
  return jt("div", {
    className: "board-top",
    children: [
      O(r, { player: e.game.whitePlayer, ...e }, "left-bar"),
      O(t, {}),
      O(r, { player: e.game.blackPlayer, ...e }, "right-bar"),
    ],
  });
  function t() {
    return O(j0, {
      children: e.game.board.map((o, i) =>
        O(n, { bar: o, barIdx: i, ...e }, `${i}-temp`)
      ),
    });
  }
  function n(o) {
    return O(
      M0,
      {
        isTopRow: o.barIdx > 11,
        onClick: () => o.select(o.barIdx),
        fill:
          (o.thisMove.canGoTo.includes(o.barIdx) && "#671010") ||
          (o.barIdx % 2 === 0 && o.barIdx > 11 && "#232937") ||
          (o.barIdx % 2 !== 0 && o.barIdx <= 11 && "#232937") ||
          (o.barIdx % 2 === 0 && o.barIdx <= 11 && "#e0ded7") ||
          (o.barIdx % 2 !== 0 && o.barIdx > 11 && "#e0ded7") ||
          "Red",
        children: o.bar.map(
          (i, u) =>
            u < 6 &&
            O(
              l,
              {
                piece: i,
                pieceIdx: u,
                border:
                  (o.thisMove.fromBarIdx === o.barIdx &&
                    ((u === 0 && o.barIdx > 11) ||
                      (u === o.bar.length - 1 && o.barIdx <= 11)) &&
                    "2px solid #671010") ||
                  (i == "White"
                    ? o.game.whitePlayer.pieceBorderColor
                    : o.game.blackPlayer.pieceBorderColor),
                ...o,
              },
              `${o.barIdx}-${u}-temp`
            )
        ),
      },
      o.barIdx
    );
  }
  function r(o) {
    return O(
      V0,
      {
        onClick: () => o.select(o.player.endBarIdx),
        fill: o.player.name === "White" ? "#e0ded7" : "#232937",
        children: o.player.endBar.map((i, u) =>
          O(
            l,
            {
              bar: o.player.endBar,
              barIdx: o.player.endBarIdx,
              piece: i,
              pieceIdx: u,
              border: o.player.pieceBorderColor,
            },
            `${o.player.endBarIdx}-${u}-temp`
          )
        ),
      },
      o.player.endBarIdx
    );
  }
  function l(o) {
    return O(
      Vc,
      {
        border: o.border,
        color: o.piece,
        children:
          o.bar.length > 6 &&
          ((o.pieceIdx === 0 && o.barIdx > 11) ||
            (o.pieceIdx === 5 && o.barIdx <= 11)) &&
          O(xi, { children: o.bar.length - 6 }),
      },
      `${o.barIdx}-${o.pieceIdx}`
    );
  }
}
const K = (e) => ({
  style: {
    borderRadius: "10px",
    background: e.turnPlayer.name,
    color: e.opponentPlayer.name,
    border:
      e.turnPlayer.name === "White" ? "2px solid black" : "2px solid white",
  },
});
function Q0() {
  const [e, t] = D.useState(nn.new),
    [n, r] = D.useState(vt.new),
    [l, o] = D.useState(cn.new);
  window.onload = () => m0();
  function i() {
    const s = nn.new();
    (s.gameOn = !0), t(s);
    const m = h0(e.clone());
    r(m);
    const h = cn.new();
    o(h);
  }
  function u() {
    if (n.rolledDice) {
      $.error(
        `Play your move first
          ${n.turnPlayer.icon} 🎲 ${n.dices} 🎲`,
        K(n)
      );
      return;
    }
    var s = p0(n.clone());
    s.rolledDice && (s = Fc(e, s.clone())), r(s);
  }
  function a(s) {
    const [m, h, p] = S0(s, e.clone(), n.clone(), l.clone());
    t(m), r(h), o(p);
  }
  return jt(xi, {
    children: [
      O(H0, { game: e, thisMove: l, select: a }),
      O($0, { game: e, thisMove: l, rollDice: u, startGame: i, select: a }),
    ],
  });
}
ko.createRoot(document.getElementById("root")).render(
  jt(df.StrictMode, { children: [O(d0, {}), O(Q0, {})] })
);
