(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  25137,
  (t, e, n) => {
    e.exports = t.r(93401);
  },
  61437,
  (t, e, n) => {},
  77611,
  (t, e, n) => {
    e.exports = {
      ReactQueryDevtools: function () {
        return null;
      },
      ReactQueryDevtoolsPanel: function () {
        return null;
      },
    };
  },
  95903,
  (t, e, n) => {
    !(function (r, i) {
      if ("function" == typeof define && define.amd) {
        let r;
        void 0 !== (r = i(t.r, n, e)) && t.v(r);
      } else e.exports = i();
    })(t.e, function () {
      var t,
        e,
        n,
        r = {};
      r.version = "0.2.0";
      var i = (r.settings = {
        minimum: 0.08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: !0,
        trickleRate: 0.02,
        trickleSpeed: 800,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template:
          '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
      });
      function o(t, e, n) {
        return t < e ? e : t > n ? n : t;
      }
      (r.configure = function (t) {
        var e, n;
        for (e in t) void 0 !== (n = t[e]) && t.hasOwnProperty(e) && (i[e] = n);
        return this;
      }),
        (r.status = null),
        (r.set = function (t) {
          var e = r.isStarted();
          r.status = 1 === (t = o(t, i.minimum, 1)) ? null : t;
          var n = r.render(!e),
            u = n.querySelector(i.barSelector),
            c = i.speed,
            l = i.easing;
          return (
            n.offsetWidth,
            s(function (e) {
              var o, s, d, p;
              "" === i.positionUsing &&
                (i.positionUsing = r.getPositioningCSS()),
                a(
                  u,
                  ((o = t),
                  (s = c),
                  (d = l),
                  ((p =
                    "translate3d" === i.positionUsing
                      ? {
                          transform: "translate3d(" + (-1 + o) * 100 + "%,0,0)",
                        }
                      : "translate" === i.positionUsing
                      ? { transform: "translate(" + (-1 + o) * 100 + "%,0)" }
                      : { "margin-left": (-1 + o) * 100 + "%" }).transition =
                    "all " + s + "ms " + d),
                  p)
                ),
                1 === t
                  ? (a(n, { transition: "none", opacity: 1 }),
                    n.offsetWidth,
                    setTimeout(function () {
                      a(n, {
                        transition: "all " + c + "ms linear",
                        opacity: 0,
                      }),
                        setTimeout(function () {
                          r.remove(), e();
                        }, c);
                    }, c))
                  : setTimeout(e, c);
            }),
            this
          );
        }),
        (r.isStarted = function () {
          return "number" == typeof r.status;
        }),
        (r.start = function () {
          r.status || r.set(0);
          var t = function () {
            setTimeout(function () {
              r.status && (r.trickle(), t());
            }, i.trickleSpeed);
          };
          return i.trickle && t(), this;
        }),
        (r.done = function (t) {
          return t || r.status ? r.inc(0.3 + 0.5 * Math.random()).set(1) : this;
        }),
        (r.inc = function (t) {
          var e = r.status;
          return e
            ? ("number" != typeof t &&
                (t = (1 - e) * o(Math.random() * e, 0.1, 0.95)),
              (e = o(e + t, 0, 0.994)),
              r.set(e))
            : r.start();
        }),
        (r.trickle = function () {
          return r.inc(Math.random() * i.trickleRate);
        }),
        (t = 0),
        (e = 0),
        (r.promise = function (n) {
          return (
            n &&
              "resolved" !== n.state() &&
              (0 === e && r.start(),
              t++,
              e++,
              n.always(function () {
                0 == --e ? ((t = 0), r.done()) : r.set((t - e) / t);
              })),
            this
          );
        }),
        (r.render = function (t) {
          if (r.isRendered()) return document.getElementById("nprogress");
          c(document.documentElement, "nprogress-busy");
          var e = document.createElement("div");
          (e.id = "nprogress"), (e.innerHTML = i.template);
          var n,
            o = e.querySelector(i.barSelector),
            s = t ? "-100" : (-1 + (r.status || 0)) * 100,
            u = document.querySelector(i.parent);
          return (
            a(o, {
              transition: "all 0 linear",
              transform: "translate3d(" + s + "%,0,0)",
            }),
            !i.showSpinner && (n = e.querySelector(i.spinnerSelector)) && p(n),
            u != document.body && c(u, "nprogress-custom-parent"),
            u.appendChild(e),
            e
          );
        }),
        (r.remove = function () {
          l(document.documentElement, "nprogress-busy"),
            l(document.querySelector(i.parent), "nprogress-custom-parent");
          var t = document.getElementById("nprogress");
          t && p(t);
        }),
        (r.isRendered = function () {
          return !!document.getElementById("nprogress");
        }),
        (r.getPositioningCSS = function () {
          var t = document.body.style,
            e =
              "WebkitTransform" in t
                ? "Webkit"
                : "MozTransform" in t
                ? "Moz"
                : "msTransform" in t
                ? "ms"
                : "OTransform" in t
                ? "O"
                : "";
          return e + "Perspective" in t
            ? "translate3d"
            : e + "Transform" in t
            ? "translate"
            : "margin";
        });
      var s =
          ((n = []),
          function (t) {
            n.push(t),
              1 == n.length &&
                (function t() {
                  var e = n.shift();
                  e && e(t);
                })();
          }),
        a = (function () {
          var t = ["Webkit", "O", "Moz", "ms"],
            e = {};
          function n(n, r, i) {
            var o;
            (r =
              e[
                (o = (o = r)
                  .replace(/^-ms-/, "ms-")
                  .replace(/-([\da-z])/gi, function (t, e) {
                    return e.toUpperCase();
                  }))
              ] ||
              (e[o] = (function (e) {
                var n = document.body.style;
                if (e in n) return e;
                for (
                  var r,
                    i = t.length,
                    o = e.charAt(0).toUpperCase() + e.slice(1);
                  i--;

                )
                  if ((r = t[i] + o) in n) return r;
                return e;
              })(o))),
              (n.style[r] = i);
          }
          return function (t, e) {
            var r,
              i,
              o = arguments;
            if (2 == o.length)
              for (r in e)
                void 0 !== (i = e[r]) && e.hasOwnProperty(r) && n(t, r, i);
            else n(t, o[1], o[2]);
          };
        })();
      function u(t, e) {
        return ("string" == typeof t ? t : d(t)).indexOf(" " + e + " ") >= 0;
      }
      function c(t, e) {
        var n = d(t),
          r = n + e;
        u(n, e) || (t.className = r.substring(1));
      }
      function l(t, e) {
        var n,
          r = d(t);
        u(t, e) &&
          (t.className = (n = r.replace(" " + e + " ", " ")).substring(
            1,
            n.length - 1
          ));
      }
      function d(t) {
        return (" " + (t.className || "") + " ").replace(/\s+/gi, " ");
      }
      function p(t) {
        t && t.parentNode && t.parentNode.removeChild(t);
      }
      return r;
    });
  },
  33275,
  (t, e, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "LoadableContext", {
        enumerable: !0,
        get: function () {
          return r;
        },
      });
    let r = t.r(2879)._(t.r(75705)).default.createContext(null);
  },
  6576,
  (t, e, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function () {
          return p;
        },
      });
    let r = t.r(2879)._(t.r(75705)),
      i = t.r(33275),
      o = [],
      s = [],
      a = !1;
    function u(t) {
      let e = t(),
        n = { loading: !0, loaded: null, error: null };
      return (
        (n.promise = e
          .then((t) => ((n.loading = !1), (n.loaded = t), t))
          .catch((t) => {
            throw ((n.loading = !1), (n.error = t), t);
          })),
        n
      );
    }
    class c {
      constructor(t, e) {
        (this._loadFn = t),
          (this._opts = e),
          (this._callbacks = new Set()),
          (this._delay = null),
          (this._timeout = null),
          this.retry();
      }
      promise() {
        return this._res.promise;
      }
      retry() {
        this._clearTimeouts(),
          (this._res = this._loadFn(this._opts.loader)),
          (this._state = { pastDelay: !1, timedOut: !1 });
        let { _res: t, _opts: e } = this;
        t.loading &&
          ("number" == typeof e.delay &&
            (0 === e.delay
              ? (this._state.pastDelay = !0)
              : (this._delay = setTimeout(() => {
                  this._update({ pastDelay: !0 });
                }, e.delay))),
          "number" == typeof e.timeout &&
            (this._timeout = setTimeout(() => {
              this._update({ timedOut: !0 });
            }, e.timeout))),
          this._res.promise
            .then(() => {
              this._update({}), this._clearTimeouts();
            })
            .catch((t) => {
              this._update({}), this._clearTimeouts();
            }),
          this._update({});
      }
      _update(t) {
        (this._state = {
          ...this._state,
          error: this._res.error,
          loaded: this._res.loaded,
          loading: this._res.loading,
          ...t,
        }),
          this._callbacks.forEach((t) => t());
      }
      _clearTimeouts() {
        clearTimeout(this._delay), clearTimeout(this._timeout);
      }
      getCurrentValue() {
        return this._state;
      }
      subscribe(t) {
        return (
          this._callbacks.add(t),
          () => {
            this._callbacks.delete(t);
          }
        );
      }
    }
    function l(e) {
      return (function (e, n) {
        let u = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              webpack: null,
              modules: null,
            },
            n
          ),
          l = null;
        function d() {
          if (!l) {
            let t = new c(e, u);
            l = {
              getCurrentValue: t.getCurrentValue.bind(t),
              subscribe: t.subscribe.bind(t),
              retry: t.retry.bind(t),
              promise: t.promise.bind(t),
            };
          }
          return l.promise();
        }
        if (
          ("undefined" == typeof window && o.push(d),
          !a && "undefined" != typeof window)
        ) {
          let e =
            u.webpack && "function" == typeof t.t.resolveWeak
              ? u.webpack()
              : u.modules;
          e &&
            s.push((t) => {
              for (let n of e) if (t.includes(n)) return d();
            });
        }
        function p(t, e) {
          let n;
          d(),
            (n = r.default.useContext(i.LoadableContext)) &&
              Array.isArray(u.modules) &&
              u.modules.forEach((t) => {
                n(t);
              });
          let o = r.default.useSyncExternalStore(
            l.subscribe,
            l.getCurrentValue,
            l.getCurrentValue
          );
          return (
            r.default.useImperativeHandle(e, () => ({ retry: l.retry }), []),
            r.default.useMemo(() => {
              var e;
              return o.loading || o.error
                ? r.default.createElement(u.loading, {
                    isLoading: o.loading,
                    pastDelay: o.pastDelay,
                    timedOut: o.timedOut,
                    error: o.error,
                    retry: l.retry,
                  })
                : o.loaded
                ? r.default.createElement(
                    (e = o.loaded) && e.default ? e.default : e,
                    t
                  )
                : null;
            }, [t, o])
          );
        }
        return (
          (p.preload = () => d()),
          (p.displayName = "LoadableComponent"),
          r.default.forwardRef(p)
        );
      })(u, e);
    }
    function d(t, e) {
      let n = [];
      for (; t.length; ) {
        let r = t.pop();
        n.push(r(e));
      }
      return Promise.all(n).then(() => {
        if (t.length) return d(t, e);
      });
    }
    (l.preloadAll = () =>
      new Promise((t, e) => {
        d(o).then(t, e);
      })),
      (l.preloadReady = (t = []) =>
        new Promise((e) => {
          let n = () => ((a = !0), e());
          d(s, t).then(n, n);
        })),
      "undefined" != typeof window &&
        (window.__NEXT_PRELOADREADY = l.preloadReady);
    let p = l;
  },
  66860,
  (t, e, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = {
      default: function () {
        return d;
      },
      noSSR: function () {
        return l;
      },
    };
    for (var i in r) Object.defineProperty(n, i, { enumerable: !0, get: r[i] });
    let o = t.r(2879),
      s = t.r(68601);
    t.r(75705);
    let a = o._(t.r(6576)),
      u = "undefined" == typeof window;
    function c(t) {
      return { default: t?.default || t };
    }
    function l(t, e) {
      if ((delete e.webpack, delete e.modules, !u)) return t(e);
      let n = e.loading;
      return () =>
        (0, s.jsx)(n, {
          error: null,
          isLoading: !0,
          pastDelay: !1,
          timedOut: !1,
        });
    }
    function d(t, e) {
      let n = a.default,
        r = { loading: ({ error: t, isLoading: e, pastDelay: n }) => null };
      t instanceof Promise
        ? (r.loader = () => t)
        : "function" == typeof t
        ? (r.loader = t)
        : "object" == typeof t && (r = { ...r, ...t });
      let i = (r = { ...r, ...e }).loader;
      return (r.loadableGenerated &&
        ((r = { ...r, ...r.loadableGenerated }), delete r.loadableGenerated),
      "boolean" != typeof r.ssr || r.ssr)
        ? n({
            ...r,
            loader: () =>
              null != i ? i().then(c) : Promise.resolve(c(() => null)),
          })
        : (delete r.webpack, delete r.modules, l(n, r));
    }
    ("function" == typeof n.default ||
      ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (e.exports = n.default));
  },
  92463,
  (t, e, n) => {
    e.exports = t.r(66860);
  },
  62302,
  (t) => {
    "use strict";
    let e, n;
    var r,
      i,
      o,
      s,
      a,
      u,
      c,
      l,
      d,
      p,
      f,
      h = t.i(68601),
      v = t.i(75705),
      m = t.i(25137),
      y = function (t, e) {
        return (y =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(t, e);
      };
    function g(t, e) {
      function n() {
        this.constructor = t;
      }
      y(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((n.prototype = e.prototype), new n()));
    }
    var _ = function () {
      return (_ =
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var i in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        }).apply(this, arguments);
    };
    function b(t) {
      var e = "function" == typeof Symbol && Symbol.iterator,
        n = e && t[e],
        r = 0;
      if (n) return n.call(t);
      if (t && "number" == typeof t.length)
        return {
          next: function () {
            return (
              t && r >= t.length && (t = void 0),
              { value: t && t[r++], done: !t }
            );
          },
        };
      throw TypeError(
        e ? "Object is not iterable." : "Symbol.iterator is not defined."
      );
    }
    function S(t, e) {
      var n = "function" == typeof Symbol && t[Symbol.iterator];
      if (!n) return t;
      var r,
        i,
        o = n.call(t),
        s = [];
      try {
        for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
          s.push(r.value);
      } catch (t) {
        i = { error: t };
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return s;
    }
    function x() {
      for (var t = [], e = 0; e < arguments.length; e++)
        t = t.concat(S(arguments[e]));
      return t;
    }
    var w = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
      E = t.i(50963);
    function T() {
      return (
        !(
          "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ &&
          __SENTRY_BROWSER_BUNDLE__
        ) &&
        "[object process]" ===
          Object.prototype.toString.call(void 0 !== E.default ? E.default : 0)
      );
    }
    function O(t, e) {
      return t.require(e);
    }
    function k(t) {
      var e;
      try {
        e = O(module, t);
      } catch (t) {}
      try {
        var n = O(module, "process").cwd;
        e = O(module, n() + "/node_modules/" + t);
      } catch (t) {}
      return e;
    }
    var C = {};
    function P() {
      return T()
        ? t.g
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof self
        ? self
        : C;
    }
    function R(t, e, n) {
      var r = n || P(),
        i = (r.__SENTRY__ = r.__SENTRY__ || {});
      return i[t] || (i[t] = e());
    }
    var q = P(),
      I = ["debug", "info", "warn", "error", "log", "assert"];
    function D(t) {
      var e = P();
      if (!("console" in e)) return t();
      var n = e.console,
        r = {};
      I.forEach(function (t) {
        var i = n[t] && n[t].__sentry_original__;
        t in e.console && i && ((r[t] = n[t]), (n[t] = i));
      });
      try {
        return t();
      } finally {
        Object.keys(r).forEach(function (t) {
          n[t] = r[t];
        });
      }
    }
    function M() {
      var t = !1,
        e = {
          enable: function () {
            t = !0;
          },
          disable: function () {
            t = !1;
          },
        };
      return (
        w
          ? I.forEach(function (n) {
              e[n] = function () {
                for (var e = [], r = 0; r < arguments.length; r++)
                  e[r] = arguments[r];
                t &&
                  D(function () {
                    var t;
                    (t = q.console)[n].apply(
                      t,
                      x(["Sentry Logger [" + n + "]:"], e)
                    );
                  });
              };
            })
          : I.forEach(function (t) {
              e[t] = function () {};
            }),
        e
      );
    }
    a = w ? R("logger", M) : M();
    var A = {
        nowSeconds: function () {
          return Date.now() / 1e3;
        },
      },
      j = T()
        ? (function () {
            try {
              return O(module, "perf_hooks").performance;
            } catch (t) {
              return;
            }
          })()
        : (function () {
            var t = P().performance;
            if (t && t.now)
              return {
                now: function () {
                  return t.now();
                },
                timeOrigin: Date.now() - t.now(),
              };
          })(),
      N =
        void 0 === j
          ? A
          : {
              nowSeconds: function () {
                return (j.timeOrigin + j.now()) / 1e3;
              },
            },
      L = A.nowSeconds.bind(A),
      F = N.nowSeconds.bind(N),
      U = (function () {
        var t = P().performance;
        if (t && t.now) {
          var e = t.now(),
            n = Date.now(),
            r = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
            i = t.timing && t.timing.navigationStart,
            o = "number" == typeof i ? Math.abs(i + e - n) : 36e5;
          if (r < 36e5 || o < 36e5)
            if (r <= o) return t.timeOrigin;
            else return i;
          return n;
        }
      })(),
      H = Object.prototype.toString;
    function B(t) {
      switch (H.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
          return !0;
        default:
          return V(t, Error);
      }
    }
    function z(t, e) {
      return H.call(t) === "[object " + e + "]";
    }
    function K(t) {
      return z(t, "ErrorEvent");
    }
    function Q(t) {
      return z(t, "DOMError");
    }
    function W(t) {
      return z(t, "String");
    }
    function Y(t) {
      return null === t || ("object" != typeof t && "function" != typeof t);
    }
    function G(t) {
      return z(t, "Object");
    }
    function $(t) {
      return "undefined" != typeof Event && V(t, Event);
    }
    function X(t) {
      return !!(t && t.then && "function" == typeof t.then);
    }
    function J(t) {
      return "number" == typeof t && t != t;
    }
    function V(t, e) {
      try {
        return t instanceof e;
      } catch (t) {
        return !1;
      }
    }
    function Z(t, e) {
      try {
        for (
          var n = t, r = [], i = 0, o = 0, s = void 0;
          n &&
          i++ < 5 &&
          ((s = (function (t, e) {
            var n,
              r,
              i,
              o,
              s,
              a = [];
            if (!t || !t.tagName) return "";
            a.push(t.tagName.toLowerCase());
            var u =
              e && e.length
                ? e
                    .filter(function (e) {
                      return t.getAttribute(e);
                    })
                    .map(function (e) {
                      return [e, t.getAttribute(e)];
                    })
                : null;
            if (u && u.length)
              u.forEach(function (t) {
                a.push("[" + t[0] + '="' + t[1] + '"]');
              });
            else if ((t.id && a.push("#" + t.id), (n = t.className) && W(n)))
              for (s = 0, r = n.split(/\s+/); s < r.length; s++)
                a.push("." + r[s]);
            var c = ["type", "name", "title", "alt"];
            for (s = 0; s < c.length; s++)
              (i = c[s]),
                (o = t.getAttribute(i)) && a.push("[" + i + '="' + o + '"]');
            return a.join("");
          })(n, e)),
          "html" !== s && (!(i > 1) || !(o + 3 * r.length + s.length >= 80)));

        )
          r.push(s), (o += s.length), (n = n.parentNode);
        return r.reverse().join(" > ");
      } catch (t) {
        return "<unknown>";
      }
    }
    function tt(t, e) {
      return (void 0 === e && (e = 0),
      "string" != typeof t || 0 === e || t.length <= e)
        ? t
        : t.substr(0, e) + "...";
    }
    function te(t, e) {
      if (!Array.isArray(t)) return "";
      for (var n = [], r = 0; r < t.length; r++) {
        var i = t[r];
        try {
          n.push(String(i));
        } catch (t) {
          n.push("[value cannot be serialized]");
        }
      }
      return n.join(e);
    }
    function tn(t, e) {
      return (
        !!W(t) &&
        (z(e, "RegExp")
          ? e.test(t)
          : "string" == typeof e && -1 !== t.indexOf(e))
      );
    }
    function tr(t, e, n) {
      if (e in t) {
        var r = t[e],
          i = n(r);
        if ("function" == typeof i)
          try {
            to(i, r);
          } catch (t) {}
        t[e] = i;
      }
    }
    function ti(t, e, n) {
      Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 });
    }
    function to(t, e) {
      var n = e.prototype || {};
      (t.prototype = e.prototype = n), ti(t, "__sentry_original__", e);
    }
    function ts(t) {
      return t.__sentry_original__;
    }
    function ta(t) {
      var e = t;
      return (
        B(t)
          ? (e = _({ message: t.message, name: t.name, stack: t.stack }, tc(t)))
          : $(t) &&
            ((e = _(
              {
                type: t.type,
                target: tu(t.target),
                currentTarget: tu(t.currentTarget),
              },
              tc(t)
            )),
            "undefined" != typeof CustomEvent &&
              V(t, CustomEvent) &&
              (e.detail = t.detail)),
        e
      );
    }
    function tu(t) {
      try {
        return "undefined" != typeof Element && V(t, Element)
          ? Z(t)
          : Object.prototype.toString.call(t);
      } catch (t) {
        return "<unknown>";
      }
    }
    function tc(t) {
      var e = {};
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e;
    }
    function tl(t) {
      var e, n;
      if (G(t)) {
        var r = {};
        try {
          for (var i = b(Object.keys(t)), o = i.next(); !o.done; o = i.next()) {
            var s = o.value;
            void 0 !== t[s] && (r[s] = tl(t[s]));
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return r;
      }
      return Array.isArray(t) ? t.map(tl) : t;
    }
    function td() {
      var t = P(),
        e = t.crypto || t.msCrypto;
      if (void 0 !== e && e.getRandomValues) {
        var n = new Uint16Array(8);
        e.getRandomValues(n),
          (n[3] = (4095 & n[3]) | 16384),
          (n[4] = (16383 & n[4]) | 32768);
        var r = function (t) {
          for (var e = t.toString(16); e.length < 4; ) e = "0" + e;
          return e;
        };
        return (
          r(n[0]) +
          r(n[1]) +
          r(n[2]) +
          r(n[3]) +
          r(n[4]) +
          r(n[5]) +
          r(n[6]) +
          r(n[7])
        );
      }
      return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        var e = (16 * Math.random()) | 0;
        return ("x" === t ? e : (3 & e) | 8).toString(16);
      });
    }
    function tp(t) {
      if (!t) return {};
      var e = t.match(
        /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
      );
      if (!e) return {};
      var n = e[6] || "",
        r = e[8] || "";
      return { host: e[4], path: e[5], protocol: e[2], relative: e[5] + n + r };
    }
    function tf(t) {
      return t.exception && t.exception.values ? t.exception.values[0] : void 0;
    }
    function th(t) {
      var e = t.message,
        n = t.event_id;
      if (e) return e;
      var r = tf(t);
      return r
        ? r.type && r.value
          ? r.type + ": " + r.value
          : r.type || r.value || n || "<unknown>"
        : n || "<unknown>";
    }
    function tv(t, e, n) {
      var r = (t.exception = t.exception || {}),
        i = (r.values = r.values || []),
        o = (i[0] = i[0] || {});
      o.value || (o.value = e || ""), o.type || (o.type = n || "Error");
    }
    function tm(t, e) {
      var n = tf(t);
      if (n) {
        var r = n.mechanism;
        if (
          ((n.mechanism = _(_(_({}, { type: "generic", handled: !0 }), r), e)),
          e && "data" in e)
        ) {
          var i = _(_({}, r && r.data), e.data);
          n.mechanism.data = i;
        }
      }
    }
    function ty(t) {
      if (t && t.__sentry_captured__) return !0;
      try {
        ti(t, "__sentry_captured__", !0);
      } catch (t) {}
      return !1;
    }
    var tg = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    function t_(t) {
      return new tS(function (e) {
        e(t);
      });
    }
    function tb(t) {
      return new tS(function (e, n) {
        n(t);
      });
    }
    var tS = (function () {
        function t(t) {
          var e = this;
          (this._state = 0),
            (this._handlers = []),
            (this._resolve = function (t) {
              e._setResult(1, t);
            }),
            (this._reject = function (t) {
              e._setResult(2, t);
            }),
            (this._setResult = function (t, n) {
              if (0 === e._state) {
                if (X(n)) return void n.then(e._resolve, e._reject);
                (e._state = t), (e._value = n), e._executeHandlers();
              }
            }),
            (this._executeHandlers = function () {
              if (0 !== e._state) {
                var t = e._handlers.slice();
                (e._handlers = []),
                  t.forEach(function (t) {
                    t[0] ||
                      (1 === e._state && t[1](e._value),
                      2 === e._state && t[2](e._value),
                      (t[0] = !0));
                  });
              }
            });
          try {
            t(this._resolve, this._reject);
          } catch (t) {
            this._reject(t);
          }
        }
        return (
          (t.prototype.then = function (e, n) {
            var r = this;
            return new t(function (t, i) {
              r._handlers.push([
                !1,
                function (n) {
                  if (e)
                    try {
                      t(e(n));
                    } catch (t) {
                      i(t);
                    }
                  else t(n);
                },
                function (e) {
                  if (n)
                    try {
                      t(n(e));
                    } catch (t) {
                      i(t);
                    }
                  else i(e);
                },
              ]),
                r._executeHandlers();
            });
          }),
          (t.prototype.catch = function (t) {
            return this.then(function (t) {
              return t;
            }, t);
          }),
          (t.prototype.finally = function (e) {
            var n = this;
            return new t(function (t, r) {
              var i, o;
              return n
                .then(
                  function (t) {
                    (o = !1), (i = t), e && e();
                  },
                  function (t) {
                    (o = !0), (i = t), e && e();
                  }
                )
                .then(function () {
                  o ? r(i) : t(i);
                });
            });
          }),
          t
        );
      })(),
      tx = (function () {
        function t() {
          (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {});
        }
        return (
          (t.clone = function (e) {
            var n = new t();
            return (
              e &&
                ((n._breadcrumbs = x(e._breadcrumbs)),
                (n._tags = _({}, e._tags)),
                (n._extra = _({}, e._extra)),
                (n._contexts = _({}, e._contexts)),
                (n._user = e._user),
                (n._level = e._level),
                (n._span = e._span),
                (n._session = e._session),
                (n._transactionName = e._transactionName),
                (n._fingerprint = e._fingerprint),
                (n._eventProcessors = x(e._eventProcessors)),
                (n._requestSession = e._requestSession)),
              n
            );
          }),
          (t.prototype.addScopeListener = function (t) {
            this._scopeListeners.push(t);
          }),
          (t.prototype.addEventProcessor = function (t) {
            return this._eventProcessors.push(t), this;
          }),
          (t.prototype.setUser = function (t) {
            return (
              (this._user = t || {}),
              this._session && this._session.update({ user: t }),
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.getUser = function () {
            return this._user;
          }),
          (t.prototype.getRequestSession = function () {
            return this._requestSession;
          }),
          (t.prototype.setRequestSession = function (t) {
            return (this._requestSession = t), this;
          }),
          (t.prototype.setTags = function (t) {
            return (
              (this._tags = _(_({}, this._tags), t)),
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.setTag = function (t, e) {
            var n;
            return (
              (this._tags = _(_({}, this._tags), (((n = {})[t] = e), n))),
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.setExtras = function (t) {
            return (
              (this._extra = _(_({}, this._extra), t)),
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.setExtra = function (t, e) {
            var n;
            return (
              (this._extra = _(_({}, this._extra), (((n = {})[t] = e), n))),
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.setFingerprint = function (t) {
            return (this._fingerprint = t), this._notifyScopeListeners(), this;
          }),
          (t.prototype.setLevel = function (t) {
            return (this._level = t), this._notifyScopeListeners(), this;
          }),
          (t.prototype.setTransactionName = function (t) {
            return (
              (this._transactionName = t), this._notifyScopeListeners(), this
            );
          }),
          (t.prototype.setTransaction = function (t) {
            return this.setTransactionName(t);
          }),
          (t.prototype.setContext = function (t, e) {
            var n;
            return (
              null === e
                ? delete this._contexts[t]
                : (this._contexts = _(
                    _({}, this._contexts),
                    (((n = {})[t] = e), n)
                  )),
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.setSpan = function (t) {
            return (this._span = t), this._notifyScopeListeners(), this;
          }),
          (t.prototype.getSpan = function () {
            return this._span;
          }),
          (t.prototype.getTransaction = function () {
            var t = this.getSpan();
            return t && t.transaction;
          }),
          (t.prototype.setSession = function (t) {
            return (
              t ? (this._session = t) : delete this._session,
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.getSession = function () {
            return this._session;
          }),
          (t.prototype.update = function (e) {
            if (!e) return this;
            if ("function" == typeof e) {
              var n = e(this);
              return n instanceof t ? n : this;
            }
            return (
              e instanceof t
                ? ((this._tags = _(_({}, this._tags), e._tags)),
                  (this._extra = _(_({}, this._extra), e._extra)),
                  (this._contexts = _(_({}, this._contexts), e._contexts)),
                  e._user &&
                    Object.keys(e._user).length &&
                    (this._user = e._user),
                  e._level && (this._level = e._level),
                  e._fingerprint && (this._fingerprint = e._fingerprint),
                  e._requestSession &&
                    (this._requestSession = e._requestSession))
                : G(e) &&
                  ((this._tags = _(_({}, this._tags), e.tags)),
                  (this._extra = _(_({}, this._extra), e.extra)),
                  (this._contexts = _(_({}, this._contexts), e.contexts)),
                  e.user && (this._user = e.user),
                  e.level && (this._level = e.level),
                  e.fingerprint && (this._fingerprint = e.fingerprint),
                  e.requestSession &&
                    (this._requestSession = e.requestSession)),
              this
            );
          }),
          (t.prototype.clear = function () {
            return (
              (this._breadcrumbs = []),
              (this._tags = {}),
              (this._extra = {}),
              (this._user = {}),
              (this._contexts = {}),
              (this._level = void 0),
              (this._transactionName = void 0),
              (this._fingerprint = void 0),
              (this._requestSession = void 0),
              (this._span = void 0),
              (this._session = void 0),
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.addBreadcrumb = function (t, e) {
            var n = "number" == typeof e ? Math.min(e, 100) : 100;
            if (n <= 0) return this;
            var r = _({ timestamp: L() }, t);
            return (
              (this._breadcrumbs = x(this._breadcrumbs, [r]).slice(-n)),
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.clearBreadcrumbs = function () {
            return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
          }),
          (t.prototype.applyToEvent = function (t, e) {
            if (
              (this._extra &&
                Object.keys(this._extra).length &&
                (t.extra = _(_({}, this._extra), t.extra)),
              this._tags &&
                Object.keys(this._tags).length &&
                (t.tags = _(_({}, this._tags), t.tags)),
              this._user &&
                Object.keys(this._user).length &&
                (t.user = _(_({}, this._user), t.user)),
              this._contexts &&
                Object.keys(this._contexts).length &&
                (t.contexts = _(_({}, this._contexts), t.contexts)),
              this._level && (t.level = this._level),
              this._transactionName && (t.transaction = this._transactionName),
              this._span)
            ) {
              t.contexts = _(
                { trace: this._span.getTraceContext() },
                t.contexts
              );
              var n = this._span.transaction && this._span.transaction.name;
              n && (t.tags = _({ transaction: n }, t.tags));
            }
            return (
              this._applyFingerprint(t),
              (t.breadcrumbs = x(t.breadcrumbs || [], this._breadcrumbs)),
              (t.breadcrumbs =
                t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
              (t.sdkProcessingMetadata = this._sdkProcessingMetadata),
              this._notifyEventProcessors(x(tw(), this._eventProcessors), t, e)
            );
          }),
          (t.prototype.setSDKProcessingMetadata = function (t) {
            return (
              (this._sdkProcessingMetadata = _(
                _({}, this._sdkProcessingMetadata),
                t
              )),
              this
            );
          }),
          (t.prototype._notifyEventProcessors = function (t, e, n, r) {
            var i = this;
            return (
              void 0 === r && (r = 0),
              new tS(function (o, s) {
                var a = t[r];
                if (null === e || "function" != typeof a) o(e);
                else {
                  var u = a(_({}, e), n);
                  X(u)
                    ? u
                        .then(function (e) {
                          return i
                            ._notifyEventProcessors(t, e, n, r + 1)
                            .then(o);
                        })
                        .then(null, s)
                    : i
                        ._notifyEventProcessors(t, u, n, r + 1)
                        .then(o)
                        .then(null, s);
                }
              })
            );
          }),
          (t.prototype._notifyScopeListeners = function () {
            var t = this;
            this._notifyingListeners ||
              ((this._notifyingListeners = !0),
              this._scopeListeners.forEach(function (e) {
                e(t);
              }),
              (this._notifyingListeners = !1));
          }),
          (t.prototype._applyFingerprint = function (t) {
            (t.fingerprint = t.fingerprint
              ? Array.isArray(t.fingerprint)
                ? t.fingerprint
                : [t.fingerprint]
              : []),
              this._fingerprint &&
                (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
              t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
          }),
          t
        );
      })();
    function tw() {
      return R("globalEventProcessors", function () {
        return [];
      });
    }
    function tE(t) {
      tw().push(t);
    }
    var tT = (function () {
        function t(t) {
          (this.errors = 0),
            (this.sid = td()),
            (this.duration = 0),
            (this.status = "ok"),
            (this.init = !0),
            (this.ignoreDuration = !1);
          var e = F();
          (this.timestamp = e), (this.started = e), t && this.update(t);
        }
        return (
          (t.prototype.update = function (t) {
            if (
              (void 0 === t && (t = {}),
              t.user &&
                (!this.ipAddress &&
                  t.user.ip_address &&
                  (this.ipAddress = t.user.ip_address),
                this.did ||
                  t.did ||
                  (this.did = t.user.id || t.user.email || t.user.username)),
              (this.timestamp = t.timestamp || F()),
              t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration),
              t.sid && (this.sid = 32 === t.sid.length ? t.sid : td()),
              void 0 !== t.init && (this.init = t.init),
              !this.did && t.did && (this.did = "" + t.did),
              "number" == typeof t.started && (this.started = t.started),
              this.ignoreDuration)
            )
              this.duration = void 0;
            else if ("number" == typeof t.duration) this.duration = t.duration;
            else {
              var e = this.timestamp - this.started;
              this.duration = e >= 0 ? e : 0;
            }
            t.release && (this.release = t.release),
              t.environment && (this.environment = t.environment),
              !this.ipAddress && t.ipAddress && (this.ipAddress = t.ipAddress),
              !this.userAgent && t.userAgent && (this.userAgent = t.userAgent),
              "number" == typeof t.errors && (this.errors = t.errors),
              t.status && (this.status = t.status);
          }),
          (t.prototype.close = function (t) {
            t
              ? this.update({ status: t })
              : "ok" === this.status
              ? this.update({ status: "exited" })
              : this.update();
          }),
          (t.prototype.toJSON = function () {
            return tl({
              sid: "" + this.sid,
              init: this.init,
              started: new Date(1e3 * this.started).toISOString(),
              timestamp: new Date(1e3 * this.timestamp).toISOString(),
              status: this.status,
              errors: this.errors,
              did:
                "number" == typeof this.did || "string" == typeof this.did
                  ? "" + this.did
                  : void 0,
              duration: this.duration,
              attrs: {
                release: this.release,
                environment: this.environment,
                ip_address: this.ipAddress,
                user_agent: this.userAgent,
              },
            });
          }),
          t
        );
      })(),
      tO = (function () {
        function t(t, e, n) {
          void 0 === e && (e = new tx()),
            void 0 === n && (n = 4),
            (this._version = n),
            (this._stack = [{}]),
            (this.getStackTop().scope = e),
            t && this.bindClient(t);
        }
        return (
          (t.prototype.isOlderThan = function (t) {
            return this._version < t;
          }),
          (t.prototype.bindClient = function (t) {
            (this.getStackTop().client = t),
              t && t.setupIntegrations && t.setupIntegrations();
          }),
          (t.prototype.pushScope = function () {
            var t = tx.clone(this.getScope());
            return (
              this.getStack().push({ client: this.getClient(), scope: t }), t
            );
          }),
          (t.prototype.popScope = function () {
            return !(this.getStack().length <= 1) && !!this.getStack().pop();
          }),
          (t.prototype.withScope = function (t) {
            var e = this.pushScope();
            try {
              t(e);
            } finally {
              this.popScope();
            }
          }),
          (t.prototype.getClient = function () {
            return this.getStackTop().client;
          }),
          (t.prototype.getScope = function () {
            return this.getStackTop().scope;
          }),
          (t.prototype.getStack = function () {
            return this._stack;
          }),
          (t.prototype.getStackTop = function () {
            return this._stack[this._stack.length - 1];
          }),
          (t.prototype.captureException = function (t, e) {
            var n = (this._lastEventId = e && e.event_id ? e.event_id : td()),
              r = e;
            if (!e) {
              var i = void 0;
              try {
                throw Error("Sentry syntheticException");
              } catch (t) {
                i = t;
              }
              r = { originalException: t, syntheticException: i };
            }
            return (
              this._invokeClient(
                "captureException",
                t,
                _(_({}, r), { event_id: n })
              ),
              n
            );
          }),
          (t.prototype.captureMessage = function (t, e, n) {
            var r = (this._lastEventId = n && n.event_id ? n.event_id : td()),
              i = n;
            if (!n) {
              var o = void 0;
              try {
                throw Error(t);
              } catch (t) {
                o = t;
              }
              i = { originalException: t, syntheticException: o };
            }
            return (
              this._invokeClient(
                "captureMessage",
                t,
                e,
                _(_({}, i), { event_id: r })
              ),
              r
            );
          }),
          (t.prototype.captureEvent = function (t, e) {
            var n = e && e.event_id ? e.event_id : td();
            return (
              "transaction" !== t.type && (this._lastEventId = n),
              this._invokeClient(
                "captureEvent",
                t,
                _(_({}, e), { event_id: n })
              ),
              n
            );
          }),
          (t.prototype.lastEventId = function () {
            return this._lastEventId;
          }),
          (t.prototype.addBreadcrumb = function (t, e) {
            var n = this.getStackTop(),
              r = n.scope,
              i = n.client;
            if (r && i) {
              var o = (i.getOptions && i.getOptions()) || {},
                s = o.beforeBreadcrumb,
                a = void 0 === s ? null : s,
                u = o.maxBreadcrumbs,
                c = void 0 === u ? 100 : u;
              if (!(c <= 0)) {
                var l = L(),
                  d = _({ timestamp: l }, t),
                  p = a
                    ? D(function () {
                        return a(d, e);
                      })
                    : d;
                null !== p && r.addBreadcrumb(p, c);
              }
            }
          }),
          (t.prototype.setUser = function (t) {
            var e = this.getScope();
            e && e.setUser(t);
          }),
          (t.prototype.setTags = function (t) {
            var e = this.getScope();
            e && e.setTags(t);
          }),
          (t.prototype.setExtras = function (t) {
            var e = this.getScope();
            e && e.setExtras(t);
          }),
          (t.prototype.setTag = function (t, e) {
            var n = this.getScope();
            n && n.setTag(t, e);
          }),
          (t.prototype.setExtra = function (t, e) {
            var n = this.getScope();
            n && n.setExtra(t, e);
          }),
          (t.prototype.setContext = function (t, e) {
            var n = this.getScope();
            n && n.setContext(t, e);
          }),
          (t.prototype.configureScope = function (t) {
            var e = this.getStackTop(),
              n = e.scope,
              r = e.client;
            n && r && t(n);
          }),
          (t.prototype.run = function (t) {
            var e = tC(this);
            try {
              t(this);
            } finally {
              tC(e);
            }
          }),
          (t.prototype.getIntegration = function (t) {
            var e = this.getClient();
            if (!e) return null;
            try {
              return e.getIntegration(t);
            } catch (e) {
              return (
                tg &&
                  a.warn(
                    "Cannot retrieve integration " +
                      t.id +
                      " from the current Hub"
                  ),
                null
              );
            }
          }),
          (t.prototype.startSpan = function (t) {
            return this._callExtensionMethod("startSpan", t);
          }),
          (t.prototype.startTransaction = function (t, e) {
            return this._callExtensionMethod("startTransaction", t, e);
          }),
          (t.prototype.traceHeaders = function () {
            return this._callExtensionMethod("traceHeaders");
          }),
          (t.prototype.captureSession = function (t) {
            if ((void 0 === t && (t = !1), t)) return this.endSession();
            this._sendSessionUpdate();
          }),
          (t.prototype.endSession = function () {
            var t = this.getStackTop(),
              e = t && t.scope,
              n = e && e.getSession();
            n && n.close(), this._sendSessionUpdate(), e && e.setSession();
          }),
          (t.prototype.startSession = function (t) {
            var e = this.getStackTop(),
              n = e.scope,
              r = e.client,
              i = (r && r.getOptions()) || {},
              o = i.release,
              s = i.environment,
              a = (P().navigator || {}).userAgent,
              u = new tT(
                _(
                  _(
                    _(
                      { release: o, environment: s },
                      n && { user: n.getUser() }
                    ),
                    a && { userAgent: a }
                  ),
                  t
                )
              );
            if (n) {
              var c = n.getSession && n.getSession();
              c && "ok" === c.status && c.update({ status: "exited" }),
                this.endSession(),
                n.setSession(u);
            }
            return u;
          }),
          (t.prototype._sendSessionUpdate = function () {
            var t = this.getStackTop(),
              e = t.scope,
              n = t.client;
            if (e) {
              var r = e.getSession && e.getSession();
              r && n && n.captureSession && n.captureSession(r);
            }
          }),
          (t.prototype._invokeClient = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
            var r = this.getStackTop(),
              i = r.scope,
              o = r.client;
            o && o[t] && o[t].apply(o, x(e, [i]));
          }),
          (t.prototype._callExtensionMethod = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
            var r = tk().__SENTRY__;
            if (r && r.extensions && "function" == typeof r.extensions[t])
              return r.extensions[t].apply(this, e);
            tg &&
              a.warn(
                "Extension method " + t + " couldn't be found, doing nothing."
              );
          }),
          t
        );
      })();
    function tk() {
      var t = P();
      return (
        (t.__SENTRY__ = t.__SENTRY__ || { extensions: {}, hub: void 0 }), t
      );
    }
    function tC(t) {
      var e = tk(),
        n = tq(e);
      return tI(e, t), n;
    }
    function tP() {
      var t = tk();
      return ((!tR(t) || tq(t).isOlderThan(4)) && tI(t, new tO()), T())
        ? (function (t) {
            try {
              var e = tk().__SENTRY__,
                n =
                  e &&
                  e.extensions &&
                  e.extensions.domain &&
                  e.extensions.domain.active;
              if (!n) return tq(t);
              if (!tR(n) || tq(n).isOlderThan(4)) {
                var r = tq(t).getStackTop();
                tI(n, new tO(r.client, tx.clone(r.scope)));
              }
              return tq(n);
            } catch (e) {
              return tq(t);
            }
          })(t)
        : tq(t);
    }
    function tR(t) {
      return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
    }
    function tq(t) {
      return R(
        "hub",
        function () {
          return new tO();
        },
        t
      );
    }
    function tI(t, e) {
      return !!t && (((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e), !0);
    }
    var tD = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    t.s([], 27886), t.i(27886);
    var tM = (function () {
        function t() {
          this.name = t.id;
        }
        return (
          (t.prototype.setupOnce = function () {
            (u = Function.prototype.toString),
              (Function.prototype.toString = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                var n = ts(this) || this;
                return u.apply(n, t);
              });
          }),
          (t.id = "FunctionToString"),
          t
        );
      })(),
      tA = [
        /^Script error\.?$/,
        /^Javascript error: Script error\.? on line 0$/,
      ],
      tj = (function () {
        function t(e) {
          void 0 === e && (e = {}), (this._options = e), (this.name = t.id);
        }
        return (
          (t.prototype.setupOnce = function (e, n) {
            e(function (e) {
              var r = n();
              if (r) {
                var i = r.getIntegration(t);
                if (i) {
                  var o,
                    s,
                    u,
                    c,
                    l,
                    d,
                    p = r.getClient(),
                    f = p ? p.getOptions() : {};
                  return ((u = e),
                  (c =
                    ((o = i._options),
                    void 0 === o && (o = {}),
                    void 0 === (s = f) && (s = {}),
                    {
                      allowUrls: x(
                        o.whitelistUrls || [],
                        o.allowUrls || [],
                        s.whitelistUrls || [],
                        s.allowUrls || []
                      ),
                      denyUrls: x(
                        o.blacklistUrls || [],
                        o.denyUrls || [],
                        s.blacklistUrls || [],
                        s.denyUrls || []
                      ),
                      ignoreErrors: x(
                        o.ignoreErrors || [],
                        s.ignoreErrors || [],
                        tA
                      ),
                      ignoreInternal:
                        void 0 === o.ignoreInternal || o.ignoreInternal,
                    })).ignoreInternal &&
                  (function (t) {
                    try {
                      return "SentryError" === t.exception.values[0].type;
                    } catch (t) {}
                    return !1;
                  })(u)
                    ? (tD &&
                        a.warn(
                          "Event dropped due to being internal Sentry Error.\nEvent: " +
                            th(u)
                        ),
                      0)
                    : ((l = u),
                      (d = c.ignoreErrors) &&
                        d.length &&
                        (function (t) {
                          if (t.message) return [t.message];
                          if (t.exception)
                            try {
                              var e =
                                  (t.exception.values &&
                                    t.exception.values[0]) ||
                                  {},
                                n = e.type,
                                r = e.value,
                                i = void 0 === r ? "" : r;
                              return [
                                "" + i,
                                (void 0 === n ? "" : n) + ": " + i,
                              ];
                            } catch (e) {
                              tD &&
                                a.error(
                                  "Cannot extract message for event " + th(t)
                                );
                            }
                          return [];
                        })(l).some(function (t) {
                          return d.some(function (e) {
                            return tn(t, e);
                          });
                        }))
                    ? (tD &&
                        a.warn(
                          "Event dropped due to being matched by `ignoreErrors` option.\nEvent: " +
                            th(u)
                        ),
                      0)
                    : !(function (t, e) {
                        if (!e || !e.length) return !1;
                        var n = tL(t);
                        return (
                          !!n &&
                          e.some(function (t) {
                            return tn(n, t);
                          })
                        );
                      })(u, c.denyUrls)
                    ? (function (t, e) {
                        if (!e || !e.length) return !0;
                        var n = tL(t);
                        return (
                          !n ||
                          e.some(function (t) {
                            return tn(n, t);
                          })
                        );
                      })(u, c.allowUrls) ||
                      (tD &&
                        a.warn(
                          "Event dropped due to not being matched by `allowUrls` option.\nEvent: " +
                            th(u) +
                            ".\nUrl: " +
                            tL(u)
                        ),
                      0)
                    : (tD &&
                        a.warn(
                          "Event dropped due to being matched by `denyUrls` option.\nEvent: " +
                            th(u) +
                            ".\nUrl: " +
                            tL(u)
                        ),
                      0))
                    ? e
                    : null;
                }
              }
              return e;
            });
          }),
          (t.id = "InboundFilters"),
          t
        );
      })();
    function tN(t) {
      void 0 === t && (t = []);
      for (var e = t.length - 1; e >= 0; e--) {
        var n = t[e];
        if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename)
          return n.filename || null;
      }
      return null;
    }
    function tL(t) {
      try {
        var e;
        if (t.stacktrace) return tN(t.stacktrace.frames);
        try {
          e = t.exception.values[0].stacktrace.frames;
        } catch (t) {}
        return e ? tN(e) : null;
      } catch (e) {
        return tD && a.error("Cannot extract url for event " + th(t)), null;
      }
    }
    t.s(["FunctionToString", () => tM, "InboundFilters", () => tj], 70496);
    var tF = t.i(70496),
      tF = tF,
      tU = "<anonymous>";
    function tH(t) {
      try {
        if (!t || "function" != typeof t) return tU;
        return t.name || tU;
      } catch (t) {
        return tU;
      }
    }
    function tB() {
      if (!("fetch" in P())) return !1;
      try {
        return new Headers(), new Request(""), new Response(), !0;
      } catch (t) {
        return !1;
      }
    }
    function tz(t) {
      return (
        t &&
        /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
      );
    }
    var tK = P(),
      tQ = {},
      tW = {};
    function tY(t, e) {
      (tQ[t] = tQ[t] || []),
        tQ[t].push(e),
        (function (t) {
          if (!tW[t])
            switch (((tW[t] = !0), t)) {
              case "console":
                "console" in tK &&
                  I.forEach(function (t) {
                    t in tK.console &&
                      tr(tK.console, t, function (e) {
                        return function () {
                          for (var n = [], r = 0; r < arguments.length; r++)
                            n[r] = arguments[r];
                          tG("console", { args: n, level: t }),
                            e && e.apply(tK.console, n);
                        };
                      });
                  });
                break;
              case "dom":
                if ("document" in tK) {
                  var e = tG.bind(null, "dom"),
                    n = t$(e, !0);
                  tK.document.addEventListener("click", n, !1),
                    tK.document.addEventListener("keypress", n, !1),
                    ["EventTarget", "Node"].forEach(function (t) {
                      var n = tK[t] && tK[t].prototype;
                      n &&
                        n.hasOwnProperty &&
                        n.hasOwnProperty("addEventListener") &&
                        (tr(n, "addEventListener", function (t) {
                          return function (n, r, i) {
                            if ("click" === n || "keypress" == n)
                              try {
                                var o =
                                    (this.__sentry_instrumentation_handlers__ =
                                      this
                                        .__sentry_instrumentation_handlers__ ||
                                      {}),
                                  s = (o[n] = o[n] || { refCount: 0 });
                                if (!s.handler) {
                                  var a = t$(e);
                                  (s.handler = a), t.call(this, n, a, i);
                                }
                                s.refCount += 1;
                              } catch (t) {}
                            return t.call(this, n, r, i);
                          };
                        }),
                        tr(n, "removeEventListener", function (t) {
                          return function (e, n, r) {
                            if ("click" === e || "keypress" == e)
                              try {
                                var i =
                                    this.__sentry_instrumentation_handlers__ ||
                                    {},
                                  o = i[e];
                                o &&
                                  ((o.refCount -= 1),
                                  o.refCount <= 0 &&
                                    (t.call(this, e, o.handler, r),
                                    (o.handler = void 0),
                                    delete i[e]),
                                  0 === Object.keys(i).length &&
                                    delete this
                                      .__sentry_instrumentation_handlers__);
                              } catch (t) {}
                            return t.call(this, e, n, r);
                          };
                        }));
                    });
                }
                break;
              case "xhr":
                if ("XMLHttpRequest" in tK) {
                  var r = XMLHttpRequest.prototype;
                  tr(r, "open", function (t) {
                    return function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      var r = this,
                        i = e[1],
                        o = (r.__sentry_xhr__ = {
                          method: W(e[0]) ? e[0].toUpperCase() : e[0],
                          url: e[1],
                        });
                      W(i) &&
                        "POST" === o.method &&
                        i.match(/sentry_key/) &&
                        (r.__sentry_own_request__ = !0);
                      var s = function () {
                        if (4 === r.readyState) {
                          try {
                            o.status_code = r.status;
                          } catch (t) {}
                          tG("xhr", {
                            args: e,
                            endTimestamp: Date.now(),
                            startTimestamp: Date.now(),
                            xhr: r,
                          });
                        }
                      };
                      return (
                        "onreadystatechange" in r &&
                        "function" == typeof r.onreadystatechange
                          ? tr(r, "onreadystatechange", function (t) {
                              return function () {
                                for (
                                  var e = [], n = 0;
                                  n < arguments.length;
                                  n++
                                )
                                  e[n] = arguments[n];
                                return s(), t.apply(r, e);
                              };
                            })
                          : r.addEventListener("readystatechange", s),
                        t.apply(r, e)
                      );
                    };
                  }),
                    tr(r, "send", function (t) {
                      return function () {
                        for (var e = [], n = 0; n < arguments.length; n++)
                          e[n] = arguments[n];
                        return (
                          this.__sentry_xhr__ &&
                            void 0 !== e[0] &&
                            (this.__sentry_xhr__.body = e[0]),
                          tG("xhr", {
                            args: e,
                            startTimestamp: Date.now(),
                            xhr: this,
                          }),
                          t.apply(this, e)
                        );
                      };
                    });
                }
                break;
              case "fetch":
                (function () {
                  if (!tB()) return !1;
                  var t = P();
                  if (tz(t.fetch)) return !0;
                  var e = !1,
                    n = t.document;
                  if (n && "function" == typeof n.createElement)
                    try {
                      var r = n.createElement("iframe");
                      (r.hidden = !0),
                        n.head.appendChild(r),
                        r.contentWindow &&
                          r.contentWindow.fetch &&
                          (e = tz(r.contentWindow.fetch)),
                        n.head.removeChild(r);
                    } catch (t) {
                      w &&
                        a.warn(
                          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                          t
                        );
                    }
                  return e;
                })() &&
                  tr(tK, "fetch", function (t) {
                    return function () {
                      for (var e, n, r = [], i = 0; i < arguments.length; i++)
                        r[i] = arguments[i];
                      var o = {
                        args: r,
                        fetchData: {
                          method: (void 0 === (e = r) && (e = []),
                          "Request" in tK && V(e[0], Request) && e[0].method)
                            ? String(e[0].method).toUpperCase()
                            : e[1] && e[1].method
                            ? String(e[1].method).toUpperCase()
                            : "GET",
                          url: (void 0 === (n = r) && (n = []),
                          "string" == typeof n[0])
                            ? n[0]
                            : "Request" in tK && V(n[0], Request)
                            ? n[0].url
                            : String(n[0]),
                        },
                        startTimestamp: Date.now(),
                      };
                      return (
                        tG("fetch", _({}, o)),
                        t.apply(tK, r).then(
                          function (t) {
                            return (
                              tG(
                                "fetch",
                                _(_({}, o), {
                                  endTimestamp: Date.now(),
                                  response: t,
                                })
                              ),
                              t
                            );
                          },
                          function (t) {
                            throw (
                              (tG(
                                "fetch",
                                _(_({}, o), {
                                  endTimestamp: Date.now(),
                                  error: t,
                                })
                              ),
                              t)
                            );
                          }
                        )
                      );
                    };
                  });
                break;
              case "history":
                !(function () {
                  if (
                    ((n = (e = (t = P()).chrome) && e.app && e.app.runtime),
                    (r =
                      "history" in t &&
                      !!t.history.pushState &&
                      !!t.history.replaceState),
                    !n && r)
                  ) {
                    var t,
                      e,
                      n,
                      r,
                      i = tK.onpopstate;
                    (tK.onpopstate = function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      var n = tK.location.href,
                        r = c;
                      if (((c = n), tG("history", { from: r, to: n }), i))
                        try {
                          return i.apply(this, t);
                        } catch (t) {}
                    }),
                      tr(tK.history, "pushState", o),
                      tr(tK.history, "replaceState", o);
                  }
                  function o(t) {
                    return function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      var r = e.length > 2 ? e[2] : void 0;
                      if (r) {
                        var i = c,
                          o = String(r);
                        (c = o), tG("history", { from: i, to: o });
                      }
                      return t.apply(this, e);
                    };
                  }
                })();
                break;
              case "error":
                (tX = tK.onerror),
                  (tK.onerror = function (t, e, n, r, i) {
                    return (
                      tG("error", {
                        column: r,
                        error: i,
                        line: n,
                        msg: t,
                        url: e,
                      }),
                      !!tX && tX.apply(this, arguments)
                    );
                  });
                break;
              case "unhandledrejection":
                (tJ = tK.onunhandledrejection),
                  (tK.onunhandledrejection = function (t) {
                    return (
                      tG("unhandledrejection", t),
                      !tJ || tJ.apply(this, arguments)
                    );
                  });
                break;
              default:
                w && a.warn("unknown instrumentation type:", t);
                return;
            }
        })(t);
    }
    function tG(t, e) {
      var n, r;
      if (t && tQ[t])
        try {
          for (var i = b(tQ[t] || []), o = i.next(); !o.done; o = i.next()) {
            var s = o.value;
            try {
              s(e);
            } catch (e) {
              w &&
                a.error(
                  "Error while triggering instrumentation handler.\nType: " +
                    t +
                    "\nName: " +
                    tH(s) +
                    "\nError:",
                  e
                );
            }
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            o && !o.done && (r = i.return) && r.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
    }
    function t$(t, e) {
      return (
        void 0 === e && (e = !1),
        function (n) {
          if (
            n &&
            d !== n &&
            !(function (t) {
              if ("keypress" !== t.type) return !1;
              try {
                var e = t.target;
                if (!e || !e.tagName) return !0;
                if (
                  "INPUT" === e.tagName ||
                  "TEXTAREA" === e.tagName ||
                  e.isContentEditable
                )
                  return !1;
              } catch (t) {}
              return !0;
            })(n)
          ) {
            var r = "keypress" === n.type ? "input" : n.type;
            void 0 === l
              ? (t({ event: n, name: r, global: e }), (d = n))
              : (function (t, e) {
                  if (!t || t.type !== e.type) return !0;
                  try {
                    if (t.target !== e.target) return !0;
                  } catch (t) {}
                  return !1;
                })(d, n) && (t({ event: n, name: r, global: e }), (d = n)),
              clearTimeout(l),
              (l = tK.setTimeout(function () {
                l = void 0;
              }, 1e3));
          }
        }
      );
    }
    var tX = null,
      tJ = null,
      tV =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array
          ? function (t, e) {
              return (t.__proto__ = e), t;
            }
          : function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
              return t;
            }),
      tZ = (function (t) {
        function e(e) {
          var n = this.constructor,
            r = t.call(this, e) || this;
          return (
            (r.message = e),
            (r.name = n.prototype.constructor.name),
            tV(r, n.prototype),
            r
          );
        }
        return g(e, t), e;
      })(Error),
      t0 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
    function t1(t, e) {
      void 0 === e && (e = !1);
      var n = t.host,
        r = t.path,
        i = t.pass,
        o = t.port,
        s = t.projectId;
      return (
        t.protocol +
        "://" +
        t.publicKey +
        (e && i ? ":" + i : "") +
        ("@" + n + (o ? ":" + o : "") + "/") +
        (r ? r + "/" : r) +
        s
      );
    }
    function t3(t) {
      return (
        "user" in t && !("publicKey" in t) && (t.publicKey = t.user),
        {
          user: t.publicKey || "",
          protocol: t.protocol,
          publicKey: t.publicKey || "",
          pass: t.pass || "",
          host: t.host,
          port: t.port || "",
          path: t.path || "",
          projectId: t.projectId,
        }
      );
    }
    function t2(t) {
      var e =
        "string" == typeof t
          ? (function (t) {
              var e = t0.exec(t);
              if (!e) throw new tZ("Invalid Sentry Dsn: " + t);
              var n = S(e.slice(1), 6),
                r = n[0],
                i = n[1],
                o = n[2],
                s = n[3],
                a = n[4],
                u = n[5],
                c = "",
                l = u,
                d = l.split("/");
              if (
                (d.length > 1 &&
                  ((c = d.slice(0, -1).join("/")), (l = d.pop())),
                l)
              ) {
                var p = l.match(/^\d+/);
                p && (l = p[0]);
              }
              return t3({
                host: s,
                pass: void 0 === o ? "" : o,
                path: c,
                projectId: l,
                port: void 0 === a ? "" : a,
                protocol: r,
                publicKey: i,
              });
            })(t)
          : t3(t);
      return (
        !(function (t) {
          if (w) {
            var e = t.port,
              n = t.projectId,
              r = t.protocol;
            if (
              (["protocol", "publicKey", "host", "projectId"].forEach(function (
                e
              ) {
                if (!t[e])
                  throw new tZ("Invalid Sentry Dsn: " + e + " missing");
              }),
              !n.match(/^\d+$/))
            )
              throw new tZ("Invalid Sentry Dsn: Invalid projectId " + n);
            if ("http" !== r && "https" !== r)
              throw new tZ("Invalid Sentry Dsn: Invalid protocol " + r);
            if (e && isNaN(parseInt(e, 10)))
              throw new tZ("Invalid Sentry Dsn: Invalid port " + e);
          }
        })(e),
        e
      );
    }
    function t4(e, n, r) {
      void 0 === n && (n = Infinity), void 0 === r && (r = Infinity);
      try {
        return (function e(n, r, i, o, s) {
          void 0 === i && (i = Infinity),
            void 0 === o && (o = Infinity),
            void 0 === s &&
              ((u = (a = "function" == typeof WeakSet) ? new WeakSet() : []),
              (s = [
                function (t) {
                  if (a) return !!u.has(t) || (u.add(t), !1);
                  for (var e = 0; e < u.length; e++) if (u[e] === t) return !0;
                  return u.push(t), !1;
                },
                function (t) {
                  if (a) u.delete(t);
                  else
                    for (var e = 0; e < u.length; e++)
                      if (u[e] === t) {
                        u.splice(e, 1);
                        break;
                      }
                },
              ]));
          var a,
            u,
            c = S(s, 2),
            l = c[0],
            d = c[1];
          if (r && "function" == typeof r.toJSON)
            try {
              return r.toJSON();
            } catch (t) {}
          if (
            null === r ||
            (["number", "boolean", "string"].includes(typeof r) && !J(r))
          )
            return r;
          var p = (function (e, n) {
            try {
              if ("domain" === e && n && "object" == typeof n && n._events)
                return "[Domain]";
              if ("domainEmitter" === e) return "[DomainEmitter]";
              if (n === t.g) return "[Global]";
              if ("undefined" != typeof window && n === window)
                return "[Window]";
              if ("undefined" != typeof document && n === document)
                return "[Document]";
              if (
                G(n) &&
                "nativeEvent" in n &&
                "preventDefault" in n &&
                "stopPropagation" in n
              )
                return "[SyntheticEvent]";
              if ("number" == typeof n && n != n) return "[NaN]";
              if (void 0 === n) return "[undefined]";
              if ("function" == typeof n) return "[Function: " + tH(n) + "]";
              if ("symbol" == typeof n) return "[" + String(n) + "]";
              if ("bigint" == typeof n) return "[BigInt: " + String(n) + "]";
              return (
                "[object " + Object.getPrototypeOf(n).constructor.name + "]"
              );
            } catch (t) {
              return "**non-serializable** (" + t + ")";
            }
          })(n, r);
          if (!p.startsWith("[object ")) return p;
          if (0 === i) return p.replace("object ", "");
          if (l(r)) return "[Circular ~]";
          var f = Array.isArray(r) ? [] : {},
            h = 0,
            v = B(r) || $(r) ? ta(r) : r;
          for (var m in v)
            if (Object.prototype.hasOwnProperty.call(v, m)) {
              if (h >= o) {
                f[m] = "[MaxProperties ~]";
                break;
              }
              var y = v[m];
              (f[m] = e(m, y, i - 1, o, s)), (h += 1);
            }
          return d(r), f;
        })("", e, n, r);
      } catch (t) {
        return { ERROR: "**non-serializable** (" + t + ")" };
      }
    }
    var t6 = [];
    function t5(t) {
      return t.reduce(function (t, e) {
        return (
          t.every(function (t) {
            return e.name !== t.name;
          }) && t.push(e),
          t
        );
      }, []);
    }
    var t9 = "Not capturing exception because it's already been captured.",
      t7 = (function () {
        function t(t, e) {
          (this._integrations = {}),
            (this._numProcessing = 0),
            (this._backend = new t(e)),
            (this._options = e),
            e.dsn && (this._dsn = t2(e.dsn));
        }
        return (
          (t.prototype.captureException = function (t, e, n) {
            var r = this;
            if (ty(t)) {
              tD && a.log(t9);
              return;
            }
            var i = e && e.event_id;
            return (
              this._process(
                this._getBackend()
                  .eventFromException(t, e)
                  .then(function (t) {
                    return r._captureEvent(t, e, n);
                  })
                  .then(function (t) {
                    i = t;
                  })
              ),
              i
            );
          }),
          (t.prototype.captureMessage = function (t, e, n, r) {
            var i = this,
              o = n && n.event_id,
              s = Y(t)
                ? this._getBackend().eventFromMessage(String(t), e, n)
                : this._getBackend().eventFromException(t, n);
            return (
              this._process(
                s
                  .then(function (t) {
                    return i._captureEvent(t, n, r);
                  })
                  .then(function (t) {
                    o = t;
                  })
              ),
              o
            );
          }),
          (t.prototype.captureEvent = function (t, e, n) {
            if (e && e.originalException && ty(e.originalException)) {
              tD && a.log(t9);
              return;
            }
            var r = e && e.event_id;
            return (
              this._process(
                this._captureEvent(t, e, n).then(function (t) {
                  r = t;
                })
              ),
              r
            );
          }),
          (t.prototype.captureSession = function (t) {
            if (!this._isEnabled()) {
              tD && a.warn("SDK not enabled, will not capture session.");
              return;
            }
            "string" != typeof t.release
              ? tD &&
                a.warn(
                  "Discarded session because of missing or non-string release"
                )
              : (this._sendSession(t), t.update({ init: !1 }));
          }),
          (t.prototype.getDsn = function () {
            return this._dsn;
          }),
          (t.prototype.getOptions = function () {
            return this._options;
          }),
          (t.prototype.getTransport = function () {
            return this._getBackend().getTransport();
          }),
          (t.prototype.flush = function (t) {
            var e = this;
            return this._isClientDoneProcessing(t).then(function (n) {
              return e
                .getTransport()
                .close(t)
                .then(function (t) {
                  return n && t;
                });
            });
          }),
          (t.prototype.close = function (t) {
            var e = this;
            return this.flush(t).then(function (t) {
              return (e.getOptions().enabled = !1), t;
            });
          }),
          (t.prototype.setupIntegrations = function () {
            var t, e, n, r, i, o, s;
            this._isEnabled() &&
              !this._integrations.initialized &&
              (this._integrations =
                ((t = this._options),
                (e = {}),
                ((n =
                  (t.defaultIntegrations && x(t.defaultIntegrations)) || []),
                (r = t.integrations),
                (i = x(t5(n))),
                Array.isArray(r)
                  ? (i = x(
                      i.filter(function (t) {
                        return r.every(function (e) {
                          return e.name !== t.name;
                        });
                      }),
                      t5(r)
                    ))
                  : "function" == typeof r &&
                    (i = Array.isArray((i = r(i))) ? i : [i]),
                (o = i.map(function (t) {
                  return t.name;
                })),
                (s = "Debug"),
                -1 !== o.indexOf(s) &&
                  i.push.apply(i, x(i.splice(o.indexOf(s), 1))),
                i).forEach(function (t) {
                  (e[t.name] = t),
                    -1 === t6.indexOf(t.name) &&
                      (t.setupOnce(tE, tP),
                      t6.push(t.name),
                      tD && a.log("Integration installed: " + t.name));
                }),
                ti(e, "initialized", !0),
                e));
          }),
          (t.prototype.getIntegration = function (t) {
            try {
              return this._integrations[t.id] || null;
            } catch (e) {
              return (
                tD &&
                  a.warn(
                    "Cannot retrieve integration " +
                      t.id +
                      " from the current Client"
                  ),
                null
              );
            }
          }),
          (t.prototype._updateSessionFromEvent = function (t, e) {
            var n,
              r,
              i = !1,
              o = !1,
              s = e.exception && e.exception.values;
            if (s) {
              o = !0;
              try {
                for (var a = b(s), u = a.next(); !u.done; u = a.next()) {
                  var c = u.value.mechanism;
                  if (c && !1 === c.handled) {
                    i = !0;
                    break;
                  }
                }
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  u && !u.done && (r = a.return) && r.call(a);
                } finally {
                  if (n) throw n.error;
                }
              }
            }
            var l = "ok" === t.status;
            ((l && 0 === t.errors) || (l && i)) &&
              (t.update(
                _(_({}, i && { status: "crashed" }), {
                  errors: t.errors || Number(o || i),
                })
              ),
              this.captureSession(t));
          }),
          (t.prototype._sendSession = function (t) {
            this._getBackend().sendSession(t);
          }),
          (t.prototype._isClientDoneProcessing = function (t) {
            var e = this;
            return new tS(function (n) {
              var r = 0,
                i = setInterval(function () {
                  0 == e._numProcessing
                    ? (clearInterval(i), n(!0))
                    : ((r += 1), t && r >= t && (clearInterval(i), n(!1)));
                }, 1);
            });
          }),
          (t.prototype._getBackend = function () {
            return this._backend;
          }),
          (t.prototype._isEnabled = function () {
            return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
          }),
          (t.prototype._prepareEvent = function (t, e, n) {
            var r = this,
              i = this.getOptions(),
              o = i.normalizeDepth,
              s = void 0 === o ? 3 : o,
              a = i.normalizeMaxBreadth,
              u = void 0 === a ? 1e3 : a,
              c = _(_({}, t), {
                event_id: t.event_id || (n && n.event_id ? n.event_id : td()),
                timestamp: t.timestamp || L(),
              });
            this._applyClientOptions(c), this._applyIntegrationsMetadata(c);
            var l = e;
            n && n.captureContext && (l = tx.clone(l).update(n.captureContext));
            var d = t_(c);
            return (
              l && (d = l.applyToEvent(c, n)),
              d.then(function (t) {
                return (t &&
                  (t.sdkProcessingMetadata = _(_({}, t.sdkProcessingMetadata), {
                    normalizeDepth: t4(s) + " (" + typeof s + ")",
                  })),
                "number" == typeof s && s > 0)
                  ? r._normalizeEvent(t, s, u)
                  : t;
              })
            );
          }),
          (t.prototype._normalizeEvent = function (t, e, n) {
            if (!t) return null;
            var r = _(
              _(
                _(
                  _(
                    _({}, t),
                    t.breadcrumbs && {
                      breadcrumbs: t.breadcrumbs.map(function (t) {
                        return _(
                          _({}, t),
                          t.data && { data: t4(t.data, e, n) }
                        );
                      }),
                    }
                  ),
                  t.user && { user: t4(t.user, e, n) }
                ),
                t.contexts && { contexts: t4(t.contexts, e, n) }
              ),
              t.extra && { extra: t4(t.extra, e, n) }
            );
            return (
              t.contexts &&
                t.contexts.trace &&
                (r.contexts.trace = t.contexts.trace),
              (r.sdkProcessingMetadata = _(_({}, r.sdkProcessingMetadata), {
                baseClientNormalized: !0,
              })),
              r
            );
          }),
          (t.prototype._applyClientOptions = function (t) {
            var e = this.getOptions(),
              n = e.environment,
              r = e.release,
              i = e.dist,
              o = e.maxValueLength,
              s = void 0 === o ? 250 : o;
            "environment" in t ||
              (t.environment = "environment" in e ? n : "production"),
              void 0 === t.release && void 0 !== r && (t.release = r),
              void 0 === t.dist && void 0 !== i && (t.dist = i),
              t.message && (t.message = tt(t.message, s));
            var a = t.exception && t.exception.values && t.exception.values[0];
            a && a.value && (a.value = tt(a.value, s));
            var u = t.request;
            u && u.url && (u.url = tt(u.url, s));
          }),
          (t.prototype._applyIntegrationsMetadata = function (t) {
            var e = Object.keys(this._integrations);
            e.length > 0 &&
              ((t.sdk = t.sdk || {}),
              (t.sdk.integrations = x(t.sdk.integrations || [], e)));
          }),
          (t.prototype._sendEvent = function (t) {
            this._getBackend().sendEvent(t);
          }),
          (t.prototype._captureEvent = function (t, e, n) {
            return this._processEvent(t, e, n).then(
              function (t) {
                return t.event_id;
              },
              function (t) {
                tD && a.error(t);
              }
            );
          }),
          (t.prototype._processEvent = function (t, e, n) {
            var r = this,
              i = this.getOptions(),
              o = i.beforeSend,
              s = i.sampleRate,
              a = this.getTransport();
            function u(t, e) {
              a.recordLostEvent && a.recordLostEvent(t, e);
            }
            if (!this._isEnabled())
              return tb(new tZ("SDK not enabled, will not capture event."));
            var c = "transaction" === t.type;
            return !c && "number" == typeof s && Math.random() > s
              ? (u("sample_rate", "event"),
                tb(
                  new tZ(
                    "Discarding event because it's not included in the random sample (sampling rate = " +
                      s +
                      ")"
                  )
                ))
              : this._prepareEvent(t, n, e)
                  .then(function (n) {
                    if (null === n)
                      throw (
                        (u("event_processor", t.type || "event"),
                        new tZ(
                          "An event processor returned null, will not send event."
                        ))
                      );
                    return (e && e.data && !0 === e.data.__sentry__) || c || !o
                      ? n
                      : (function (t) {
                          var e =
                            "`beforeSend` method has to return `null` or a valid event.";
                          if (X(t))
                            return t.then(
                              function (t) {
                                if (!(G(t) || null === t)) throw new tZ(e);
                                return t;
                              },
                              function (t) {
                                throw new tZ("beforeSend rejected with " + t);
                              }
                            );
                          if (!(G(t) || null === t)) throw new tZ(e);
                          return t;
                        })(o(n, e));
                  })
                  .then(function (e) {
                    if (null === e)
                      throw (
                        (u("before_send", t.type || "event"),
                        new tZ(
                          "`beforeSend` returned `null`, will not send event."
                        ))
                      );
                    var i = n && n.getSession && n.getSession();
                    return (
                      !c && i && r._updateSessionFromEvent(i, e),
                      r._sendEvent(e),
                      e
                    );
                  })
                  .then(null, function (t) {
                    if (t instanceof tZ) throw t;
                    throw (
                      (r.captureException(t, {
                        data: { __sentry__: !0 },
                        originalException: t,
                      }),
                      new tZ(
                        "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " +
                          t
                      ))
                    );
                  });
          }),
          (t.prototype._process = function (t) {
            var e = this;
            (this._numProcessing += 1),
              t.then(
                function (t) {
                  return (e._numProcessing -= 1), t;
                },
                function (t) {
                  return (e._numProcessing -= 1), t;
                }
              );
          }),
          t
        );
      })(),
      t8 = "6.19.7";
    function et(t, e, n) {
      void 0 === e && (e = {}),
        (this.dsn = t),
        (this._dsnObject = t2(t)),
        (this.metadata = e),
        (this._tunnel = n);
    }
    function ee(t, e, n) {
      return { initDsn: t, metadata: e || {}, dsn: t2(t), tunnel: n };
    }
    function en(t) {
      var e = t.protocol ? t.protocol + ":" : "",
        n = t.port ? ":" + t.port : "";
      return e + "//" + t.host + n + (t.path ? "/" + t.path : "") + "/api/";
    }
    function er(t, e) {
      return "" + en(t) + t.projectId + "/" + e + "/";
    }
    function ei(t) {
      var e;
      return Object.keys((e = { sentry_key: t.publicKey, sentry_version: "7" }))
        .map(function (t) {
          return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
        })
        .join("&");
    }
    function eo(t) {
      return er(t, "store");
    }
    function es(t) {
      return eo(t) + "?" + ei(t);
    }
    function ea(t, e) {
      return e || er(t, "envelope") + "?" + ei(t);
    }
    function eu(t, e) {
      return void 0 === e && (e = []), [t, e];
    }
    function ec(t) {
      var e = S(t, 2),
        n = e[0],
        r = e[1],
        i = JSON.stringify(n);
      return r.reduce(function (t, e) {
        var n = S(e, 2),
          r = n[0],
          i = n[1],
          o = Y(i) ? String(i) : JSON.stringify(i);
        return t + "\n" + JSON.stringify(r) + "\n" + o;
      }, i);
    }
    function el(t) {
      if (t.metadata && t.metadata.sdk) {
        var e = t.metadata.sdk;
        return { name: e.name, version: e.version };
      }
    }
    function ed(t, e) {
      return (
        e &&
          ((t.sdk = t.sdk || {}),
          (t.sdk.name = t.sdk.name || e.name),
          (t.sdk.version = t.sdk.version || e.version),
          (t.sdk.integrations = x(
            t.sdk.integrations || [],
            e.integrations || []
          )),
          (t.sdk.packages = x(t.sdk.packages || [], e.packages || []))),
        t
      );
    }
    function ep(t, e) {
      var n = el(e),
        r = _(
          _({ sent_at: new Date().toISOString() }, n && { sdk: n }),
          !!e.tunnel && { dsn: t1(e.dsn) }
        ),
        i = "aggregates" in t ? "sessions" : "session";
      return [eu(r, [[{ type: i }, t]]), i];
    }
    (et.prototype.getDsn = function () {
      return this._dsnObject;
    }),
      (et.prototype.forceEnvelope = function () {
        return !!this._tunnel;
      }),
      (et.prototype.getBaseApiEndpoint = function () {
        return en(this._dsnObject);
      }),
      (et.prototype.getStoreEndpoint = function () {
        return eo(this._dsnObject);
      }),
      (et.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
        return es(this._dsnObject);
      }),
      (et.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
        return ea(this._dsnObject, this._tunnel);
      });
    var ef = (function () {
        function t() {}
        return (
          (t.prototype.sendEvent = function (t) {
            return t_({
              reason:
                "NoopTransport: Event has been skipped because no Dsn is configured.",
              status: "skipped",
            });
          }),
          (t.prototype.close = function (t) {
            return t_(!0);
          }),
          t
        );
      })(),
      eh = (function () {
        function t(t) {
          (this._options = t),
            !this._options.dsn &&
              tD &&
              a.warn("No DSN provided, backend will not do anything."),
            (this._transport = this._setupTransport());
        }
        return (
          (t.prototype.eventFromException = function (t, e) {
            throw new tZ(
              "Backend has to implement `eventFromException` method"
            );
          }),
          (t.prototype.eventFromMessage = function (t, e, n) {
            throw new tZ("Backend has to implement `eventFromMessage` method");
          }),
          (t.prototype.sendEvent = function (t) {
            if (
              this._newTransport &&
              this._options.dsn &&
              this._options._experiments &&
              this._options._experiments.newTransport
            ) {
              var e,
                n,
                r,
                i,
                o,
                s = ee(
                  this._options.dsn,
                  this._options._metadata,
                  this._options.tunnel
                ),
                u =
                  ((e = el(s)),
                  (n = t.type || "event"),
                  (i = (r =
                    (t.sdkProcessingMetadata || {}).transactionSampling || {})
                    .method),
                  (o = r.rate),
                  ed(t, s.metadata.sdk),
                  (t.tags = t.tags || {}),
                  (t.extra = t.extra || {}),
                  (t.sdkProcessingMetadata &&
                    t.sdkProcessingMetadata.baseClientNormalized) ||
                    ((t.tags.skippedNormalization = !0),
                    (t.extra.normalizeDepth = t.sdkProcessingMetadata
                      ? t.sdkProcessingMetadata.normalizeDepth
                      : "unset")),
                  delete t.sdkProcessingMetadata,
                  eu(
                    _(
                      _(
                        {
                          event_id: t.event_id,
                          sent_at: new Date().toISOString(),
                        },
                        e && { sdk: e }
                      ),
                      !!s.tunnel && { dsn: t1(s.dsn) }
                    ),
                    [[{ type: n, sample_rates: [{ id: i, rate: o }] }, t]]
                  ));
              this._newTransport.send(u).then(null, function (t) {
                tD && a.error("Error while sending event:", t);
              });
            } else
              this._transport.sendEvent(t).then(null, function (t) {
                tD && a.error("Error while sending event:", t);
              });
          }),
          (t.prototype.sendSession = function (t) {
            if (!this._transport.sendSession) {
              tD &&
                a.warn(
                  "Dropping session because custom transport doesn't implement sendSession"
                );
              return;
            }
            if (
              this._newTransport &&
              this._options.dsn &&
              this._options._experiments &&
              this._options._experiments.newTransport
            ) {
              var e = S(
                ep(
                  t,
                  ee(
                    this._options.dsn,
                    this._options._metadata,
                    this._options.tunnel
                  )
                ),
                1
              )[0];
              this._newTransport.send(e).then(null, function (t) {
                tD && a.error("Error while sending session:", t);
              });
            } else
              this._transport.sendSession(t).then(null, function (t) {
                tD && a.error("Error while sending session:", t);
              });
          }),
          (t.prototype.getTransport = function () {
            return this._transport;
          }),
          (t.prototype._setupTransport = function () {
            return new ef();
          }),
          t
        );
      })();
    function ev(t, e, n, r) {
      var i = { filename: t, function: e, in_app: !0 };
      return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i;
    }
    ((r = p || (p = {})).Fatal = "fatal"),
      (r.Error = "error"),
      (r.Warning = "warning"),
      (r.Log = "log"),
      (r.Info = "info"),
      (r.Debug = "debug"),
      (r.Critical = "critical");
    var em =
        /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      ey = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      eg = [
        30,
        function (t) {
          var e = em.exec(t);
          if (e) {
            if (e[2] && 0 === e[2].indexOf("eval")) {
              var n = ey.exec(e[2]);
              n && ((e[2] = n[1]), (e[3] = n[2]), (e[4] = n[3]));
            }
            var r = S(eC(e[1] || "?", e[2]), 2),
              i = r[0];
            return ev(r[1], i, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0);
          }
        },
      ],
      e_ =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      eb = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      eS = [
        50,
        function (t) {
          var e,
            n = e_.exec(t);
          if (n) {
            if (n[3] && n[3].indexOf(" > eval") > -1) {
              var r = eb.exec(n[3]);
              r &&
                ((n[1] = n[1] || "eval"),
                (n[3] = r[1]),
                (n[4] = r[2]),
                (n[5] = ""));
            }
            var i = n[3],
              o = n[1] || "?";
            return (
              (o = (e = S(eC(o, i), 2))[0]),
              ev((i = e[1]), o, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0)
            );
          }
        },
      ],
      ex =
        /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
      ew = [
        40,
        function (t) {
          var e = ex.exec(t);
          return e
            ? ev(e[2], e[1] || "?", +e[3], e[4] ? +e[4] : void 0)
            : void 0;
        },
      ],
      eE = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
      eT = [
        10,
        function (t) {
          var e = eE.exec(t);
          return e ? ev(e[2], e[3] || "?", +e[1]) : void 0;
        },
      ],
      eO =
        / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
      ek = [
        20,
        function (t) {
          var e = eO.exec(t);
          return e ? ev(e[5], e[3] || e[4] || "?", +e[1], +e[2]) : void 0;
        },
      ],
      eC = function (t, e) {
        var n = -1 !== t.indexOf("safari-extension"),
          r = -1 !== t.indexOf("safari-web-extension");
        return n || r
          ? [
              -1 !== t.indexOf("@") ? t.split("@")[0] : "?",
              n ? "safari-extension:" + e : "safari-web-extension:" + e,
            ]
          : [t, e];
      };
    function eP(t) {
      var e,
        n,
        r = eq(t),
        i = {
          type: t && t.name,
          value: (n = (e = t) && e.message)
            ? n.error && "string" == typeof n.error.message
              ? n.error.message
              : n
            : "No error message",
        };
      return (
        r.length && (i.stacktrace = { frames: r }),
        void 0 === i.type &&
          "" === i.value &&
          (i.value = "Unrecoverable error caught"),
        i
      );
    }
    function eR(t) {
      return { exception: { values: [eP(t)] } };
    }
    function eq(t) {
      var e = t.stacktrace || t.stack || "",
        n = (function (t) {
          if (t) {
            if ("number" == typeof t.framesToPop) return t.framesToPop;
            if (eI.test(t.message)) return 1;
          }
          return 0;
        })(t);
      try {
        return (function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          var n = t
            .sort(function (t, e) {
              return t[0] - e[0];
            })
            .map(function (t) {
              return t[1];
            });
          return function (t, e) {
            void 0 === e && (e = 0);
            var r,
              i,
              o,
              s,
              a = [];
            try {
              for (
                var u = b(t.split("\n").slice(e)), c = u.next();
                !c.done;
                c = u.next()
              ) {
                var l = c.value;
                try {
                  for (
                    var d = ((o = void 0), b(n)), p = d.next();
                    !p.done;
                    p = d.next()
                  ) {
                    var f = (0, p.value)(l);
                    if (f) {
                      a.push(f);
                      break;
                    }
                  }
                } catch (t) {
                  o = { error: t };
                } finally {
                  try {
                    p && !p.done && (s = d.return) && s.call(d);
                  } finally {
                    if (o) throw o.error;
                  }
                }
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                c && !c.done && (i = u.return) && i.call(u);
              } finally {
                if (r) throw r.error;
              }
            }
            var h = a;
            if (!h.length) return [];
            var v = h,
              m = v[0].function || "",
              y = v[v.length - 1].function || "";
            return (
              (-1 !== m.indexOf("captureMessage") ||
                -1 !== m.indexOf("captureException")) &&
                (v = v.slice(1)),
              -1 !== y.indexOf("sentryWrapped") && (v = v.slice(0, -1)),
              v
                .slice(0, 50)
                .map(function (t) {
                  return _(_({}, t), {
                    filename: t.filename || v[0].filename,
                    function: t.function || "?",
                  });
                })
                .reverse()
            );
          };
        })(
          eT,
          ek,
          eg,
          ew,
          eS
        )(e, n);
      } catch (t) {}
      return [];
    }
    var eI = /Minified React error #\d+;/i;
    function eD(t, e, n, r) {
      var i;
      if (K(t) && t.error) return eR(t.error);
      if (Q(t) || z(t, "DOMException")) {
        if ("stack" in t) i = eR(t);
        else {
          var o = t.name || (Q(t) ? "DOMError" : "DOMException"),
            s = t.message ? o + ": " + t.message : o;
          tv((i = eM(s, e, n)), s);
        }
        return (
          "code" in t &&
            (i.tags = _(_({}, i.tags), { "DOMException.code": "" + t.code })),
          i
        );
      }
      return B(t)
        ? eR(t)
        : (G(t) || $(t)
            ? tm(
                (i = (function (t, e, n) {
                  var r = {
                    exception: {
                      values: [
                        {
                          type: $(t)
                            ? t.constructor.name
                            : n
                            ? "UnhandledRejection"
                            : "Error",
                          value:
                            "Non-Error " +
                            (n ? "promise rejection" : "exception") +
                            " captured with keys: " +
                            (function (t, e) {
                              void 0 === e && (e = 40);
                              var n = Object.keys(ta(t));
                              if ((n.sort(), !n.length))
                                return "[object has no keys]";
                              if (n[0].length >= e) return tt(n[0], e);
                              for (var r = n.length; r > 0; r--) {
                                var i = n.slice(0, r).join(", ");
                                if (!(i.length > e)) {
                                  if (r === n.length) return i;
                                  return tt(i, e);
                                }
                              }
                              return "";
                            })(t),
                        },
                      ],
                    },
                    extra: {
                      __serialized__: (function t(e, n, r) {
                        void 0 === n && (n = 3), void 0 === r && (r = 102400);
                        var i = t4(e, n);
                        return ~-encodeURI(JSON.stringify(i)).split(/%..|./)
                          .length > r
                          ? t(e, n - 1, r)
                          : i;
                      })(t),
                    },
                  };
                  if (e) {
                    var i = eq(e);
                    i.length && (r.stacktrace = { frames: i });
                  }
                  return r;
                })(t, e, r)),
                { synthetic: !0 }
              )
            : (tv((i = eM(t, e, n)), "" + t, void 0), tm(i, { synthetic: !0 })),
          i);
    }
    function eM(t, e, n) {
      var r = { message: t };
      if (n && e) {
        var i = eq(e);
        i.length && (r.stacktrace = { frames: i });
      }
      return r;
    }
    function eA(t, e) {
      return t[e] || t.all || 0;
    }
    function ej(t, e, n) {
      return void 0 === n && (n = Date.now()), eA(t, e) > n;
    }
    function eN(t, e, n) {
      void 0 === n && (n = Date.now());
      var r,
        i,
        o,
        s,
        a = _({}, t),
        u = e["x-sentry-rate-limits"],
        c = e["retry-after"];
      if (u)
        try {
          for (
            var l = b(u.trim().split(",")), d = l.next();
            !d.done;
            d = l.next()
          ) {
            var p = d.value.split(":", 2),
              f = parseInt(p[0], 10),
              h = (isNaN(f) ? 60 : f) * 1e3;
            if (p[1])
              try {
                for (
                  var v = ((o = void 0), b(p[1].split(";"))), m = v.next();
                  !m.done;
                  m = v.next()
                )
                  a[m.value] = n + h;
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  m && !m.done && (s = v.return) && s.call(v);
                } finally {
                  if (o) throw o.error;
                }
              }
            else a.all = n + h;
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            d && !d.done && (i = l.return) && i.call(l);
          } finally {
            if (r) throw r.error;
          }
        }
      else
        c &&
          (a.all =
            n +
            (function (t, e) {
              void 0 === e && (e = Date.now());
              var n = parseInt("" + t, 10);
              if (!isNaN(n)) return 1e3 * n;
              var r = Date.parse("" + t);
              return isNaN(r) ? 6e4 : r - e;
            })(c, n));
      return a;
    }
    function eL(t) {
      return t >= 200 && t < 300
        ? "success"
        : 429 === t
        ? "rate_limit"
        : t >= 400 && t < 500
        ? "invalid"
        : t >= 500
        ? "failed"
        : "unknown";
    }
    function eF(t) {
      var e = [];
      function n(t) {
        return e.splice(e.indexOf(t), 1)[0];
      }
      return {
        $: e,
        add: function (r) {
          if (!(void 0 === t || e.length < t))
            return tb(
              new tZ("Not adding Promise due to buffer limit reached.")
            );
          var i = r();
          return (
            -1 === e.indexOf(i) && e.push(i),
            i
              .then(function () {
                return n(i);
              })
              .then(null, function () {
                return n(i).then(null, function () {});
              }),
            i
          );
        },
        drain: function (t) {
          return new tS(function (n, r) {
            var i = e.length;
            if (!i) return n(!0);
            var o = setTimeout(function () {
              t && t > 0 && n(!1);
            }, t);
            e.forEach(function (t) {
              t_(t).then(function () {
                --i || (clearTimeout(o), n(!0));
              }, r);
            });
          });
        },
      };
    }
    var eU = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
      eH = P();
    function eB() {
      if (f) return f;
      if (tz(eH.fetch)) return (f = eH.fetch.bind(eH));
      var t = eH.document,
        e = eH.fetch;
      if (t && "function" == typeof t.createElement)
        try {
          var n = t.createElement("iframe");
          (n.hidden = !0), t.head.appendChild(n);
          var r = n.contentWindow;
          r && r.fetch && (e = r.fetch), t.head.removeChild(n);
        } catch (t) {
          eU &&
            a.warn(
              "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
              t
            );
        }
      return (f = e.bind(eH));
    }
    function ez(t) {
      return "event" === t ? "error" : t;
    }
    var eK = P(),
      eQ = (function () {
        function t(t) {
          var e = this;
          (this.options = t),
            (this._buffer = eF(30)),
            (this._rateLimits = {}),
            (this._outcomes = {}),
            (this._api = ee(t.dsn, t._metadata, t.tunnel)),
            (this.url = es(this._api.dsn)),
            this.options.sendClientReports &&
              eK.document &&
              eK.document.addEventListener("visibilitychange", function () {
                "hidden" === eK.document.visibilityState && e._flushOutcomes();
              });
        }
        return (
          (t.prototype.sendEvent = function (t) {
            return this._sendRequest(
              (function (t, e) {
                var n,
                  r = el(e),
                  i = t.type || "event",
                  o = "transaction" === i || !!e.tunnel,
                  s = (t.sdkProcessingMetadata || {}).transactionSampling || {},
                  a = s.method,
                  u = s.rate;
                ed(t, e.metadata.sdk),
                  (t.tags = t.tags || {}),
                  (t.extra = t.extra || {}),
                  (t.sdkProcessingMetadata &&
                    t.sdkProcessingMetadata.baseClientNormalized) ||
                    ((t.tags.skippedNormalization = !0),
                    (t.extra.normalizeDepth = t.sdkProcessingMetadata
                      ? t.sdkProcessingMetadata.normalizeDepth
                      : "unset")),
                  delete t.sdkProcessingMetadata;
                try {
                  n = JSON.stringify(t);
                } catch (e) {
                  (t.tags.JSONStringifyError = !0),
                    (t.extra.JSONStringifyError = e);
                  try {
                    n = JSON.stringify(t4(t));
                  } catch (t) {
                    n = JSON.stringify({
                      message: "JSON.stringify error after renormalization",
                      extra: { message: t.message, stack: t.stack },
                    });
                  }
                }
                var c = {
                  body: n,
                  type: i,
                  url: o ? ea(e.dsn, e.tunnel) : es(e.dsn),
                };
                if (o) {
                  var l = eu(
                    _(
                      _(
                        {
                          event_id: t.event_id,
                          sent_at: new Date().toISOString(),
                        },
                        r && { sdk: r }
                      ),
                      !!e.tunnel && { dsn: t1(e.dsn) }
                    ),
                    [[{ type: i, sample_rates: [{ id: a, rate: u }] }, c.body]]
                  );
                  c.body = ec(l);
                }
                return c;
              })(t, this._api),
              t
            );
          }),
          (t.prototype.sendSession = function (t) {
            var e, n, r, i;
            return this._sendRequest(
              ((r = (n = S(ep(t, (e = this._api)), 2))[0]),
              (i = n[1]),
              { body: ec(r), type: i, url: ea(e.dsn, e.tunnel) }),
              t
            );
          }),
          (t.prototype.close = function (t) {
            return this._buffer.drain(t);
          }),
          (t.prototype.recordLostEvent = function (t, e) {
            if (this.options.sendClientReports) {
              var n,
                r = ez(e) + ":" + t;
              eU && a.log("Adding outcome: " + r),
                (this._outcomes[r] =
                  (null != (n = this._outcomes[r]) ? n : 0) + 1);
            }
          }),
          (t.prototype._flushOutcomes = function () {
            if (this.options.sendClientReports) {
              var t,
                e,
                n = this._outcomes;
              if (((this._outcomes = {}), !Object.keys(n).length)) {
                eU && a.log("No outcomes to flush");
                return;
              }
              eU && a.log("Flushing outcomes:\n" + JSON.stringify(n, null, 2));
              var r = ea(this._api.dsn, this._api.tunnel),
                i =
                  ((t = Object.keys(n).map(function (t) {
                    var e = S(t.split(":"), 2),
                      r = e[0];
                    return { reason: e[1], category: r, quantity: n[t] };
                  })),
                  eu(
                    (e = this._api.tunnel && t1(this._api.dsn))
                      ? { dsn: e }
                      : {},
                    [
                      [
                        { type: "client_report" },
                        { timestamp: L(), discarded_events: t },
                      ],
                    ]
                  ));
              try {
                !(function (t, e) {
                  if (
                    "[object Navigator]" ===
                      Object.prototype.toString.call(eH && eH.navigator) &&
                    "function" == typeof eH.navigator.sendBeacon
                  )
                    return eH.navigator.sendBeacon.bind(eH.navigator)(t, e);
                  tB() &&
                    eB()(t, {
                      body: e,
                      method: "POST",
                      credentials: "omit",
                      keepalive: !0,
                    }).then(null, function (t) {
                      console.error(t);
                    });
                })(r, ec(i));
              } catch (t) {
                eU && a.error(t);
              }
            }
          }),
          (t.prototype._handleResponse = function (t) {
            var e = t.requestType,
              n = t.response,
              r = t.headers,
              i = t.resolve,
              o = t.reject,
              s = eL(n.status);
            ((this._rateLimits = eN(this._rateLimits, r)),
            this._isRateLimited(e) &&
              eU &&
              a.warn(
                "Too many " +
                  e +
                  " requests, backing off until: " +
                  this._disabledUntil(e)
              ),
            "success" === s)
              ? i({ status: s })
              : o(n);
          }),
          (t.prototype._disabledUntil = function (t) {
            var e = ez(t);
            return new Date(eA(this._rateLimits, e));
          }),
          (t.prototype._isRateLimited = function (t) {
            var e = ez(t);
            return ej(this._rateLimits, e);
          }),
          t
        );
      })(),
      eW = (function (t) {
        function e(e, n) {
          void 0 === n && (n = eB());
          var r = t.call(this, e) || this;
          return (r._fetch = n), r;
        }
        return (
          g(e, t),
          (e.prototype._sendRequest = function (t, e) {
            var n = this;
            if (this._isRateLimited(t.type))
              return (
                this.recordLostEvent("ratelimit_backoff", t.type),
                Promise.reject({
                  event: e,
                  type: t.type,
                  reason:
                    "Transport for " +
                    t.type +
                    " requests locked till " +
                    this._disabledUntil(t.type) +
                    " due to too many requests.",
                  status: 429,
                })
              );
            var r = {
              body: t.body,
              method: "POST",
              referrerPolicy: !(function () {
                if (!tB()) return !1;
                try {
                  return new Request("_", { referrerPolicy: "origin" }), !0;
                } catch (t) {
                  return !1;
                }
              })()
                ? ""
                : "origin",
            };
            return (
              void 0 !== this.options.fetchParameters &&
                Object.assign(r, this.options.fetchParameters),
              void 0 !== this.options.headers &&
                (r.headers = this.options.headers),
              this._buffer
                .add(function () {
                  return new tS(function (e, i) {
                    n._fetch(t.url, r)
                      .then(function (r) {
                        var o = {
                          "x-sentry-rate-limits": r.headers.get(
                            "X-Sentry-Rate-Limits"
                          ),
                          "retry-after": r.headers.get("Retry-After"),
                        };
                        n._handleResponse({
                          requestType: t.type,
                          response: r,
                          headers: o,
                          resolve: e,
                          reject: i,
                        });
                      })
                      .catch(i);
                  });
                })
                .then(void 0, function (e) {
                  throw (
                    (e instanceof tZ
                      ? n.recordLostEvent("queue_overflow", t.type)
                      : n.recordLostEvent("network_error", t.type),
                    e)
                  );
                })
            );
          }),
          e
        );
      })(eQ);
    function eY(t, e, n) {
      void 0 === n && (n = eF(t.bufferSize || 30));
      var r = {};
      return {
        send: function (t) {
          var i,
            o,
            s = ((i = S(t, 2)), (o = S(i[1], 1)), S(o[0], 1)[0].type),
            a = "event" === s ? "error" : s,
            u = { category: a, body: ec(t) };
          return ej(r, a)
            ? tb({ status: "rate_limit", reason: eG(r, a) })
            : n.add(function () {
                return e(u).then(function (t) {
                  var e = t.body,
                    n = t.headers,
                    i = t.reason,
                    o = eL(t.statusCode);
                  return (n && (r = eN(r, n)), "success" === o)
                    ? t_({ status: o, reason: i })
                    : tb({
                        status: o,
                        reason:
                          i ||
                          e ||
                          ("rate_limit" === o
                            ? eG(r, a)
                            : "Unknown transport error"),
                      });
                });
              });
        },
        flush: function (t) {
          return n.drain(t);
        },
      };
    }
    function eG(t, e) {
      return (
        "Too many " +
        e +
        " requests, backing off until: " +
        new Date(eA(t, e)).toISOString()
      );
    }
    var e$ = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          g(e, t),
          (e.prototype._sendRequest = function (t, e) {
            var n = this;
            return this._isRateLimited(t.type)
              ? (this.recordLostEvent("ratelimit_backoff", t.type),
                Promise.reject({
                  event: e,
                  type: t.type,
                  reason:
                    "Transport for " +
                    t.type +
                    " requests locked till " +
                    this._disabledUntil(t.type) +
                    " due to too many requests.",
                  status: 429,
                }))
              : this._buffer
                  .add(function () {
                    return new tS(function (e, r) {
                      var i = new XMLHttpRequest();
                      for (var o in ((i.onreadystatechange = function () {
                        if (4 === i.readyState) {
                          var o = {
                            "x-sentry-rate-limits": i.getResponseHeader(
                              "X-Sentry-Rate-Limits"
                            ),
                            "retry-after": i.getResponseHeader("Retry-After"),
                          };
                          n._handleResponse({
                            requestType: t.type,
                            response: i,
                            headers: o,
                            resolve: e,
                            reject: r,
                          });
                        }
                      }),
                      i.open("POST", t.url),
                      n.options.headers))
                        Object.prototype.hasOwnProperty.call(
                          n.options.headers,
                          o
                        ) && i.setRequestHeader(o, n.options.headers[o]);
                      i.send(t.body);
                    });
                  })
                  .then(void 0, function (e) {
                    throw (
                      (e instanceof tZ
                        ? n.recordLostEvent("queue_overflow", t.type)
                        : n.recordLostEvent("network_error", t.type),
                      e)
                    );
                  });
          }),
          e
        );
      })(eQ),
      eX = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          g(e, t),
          (e.prototype.eventFromException = function (t, e) {
            var n, r;
            return (
              (n = this._options.attachStacktrace),
              tm((r = eD(t, (e && e.syntheticException) || void 0, n))),
              (r.level = p.Error),
              e && e.event_id && (r.event_id = e.event_id),
              t_(r)
            );
          }),
          (e.prototype.eventFromMessage = function (t, e, n) {
            var r, i, o;
            return (
              void 0 === e && (e = p.Info),
              (r = e),
              (i = this._options.attachStacktrace),
              void 0 === r && (r = p.Info),
              ((o = eM(t, (n && n.syntheticException) || void 0, i)).level = r),
              n && n.event_id && (o.event_id = n.event_id),
              t_(o)
            );
          }),
          (e.prototype._setupTransport = function () {
            if (!this._options.dsn)
              return t.prototype._setupTransport.call(this);
            var e,
              n = _(_({}, this._options.transportOptions), {
                dsn: this._options.dsn,
                tunnel: this._options.tunnel,
                sendClientReports: this._options.sendClientReports,
                _metadata: this._options._metadata,
              }),
              r = ee(n.dsn, n._metadata, n.tunnel),
              i = ea(r.dsn, r.tunnel);
            if (this._options.transport) return new this._options.transport(n);
            if (tB()) {
              var o,
                s,
                a = _({}, n.fetchParameters);
              return (
                (this._newTransport =
                  ((o = { requestOptions: a, url: i }),
                  void 0 === s && (s = eB()),
                  eY({ bufferSize: o.bufferSize }, function (t) {
                    var e = _(
                      {
                        body: t.body,
                        method: "POST",
                        referrerPolicy: "origin",
                      },
                      o.requestOptions
                    );
                    return s(o.url, e).then(function (t) {
                      return t.text().then(function (e) {
                        return {
                          body: e,
                          headers: {
                            "x-sentry-rate-limits": t.headers.get(
                              "X-Sentry-Rate-Limits"
                            ),
                            "retry-after": t.headers.get("Retry-After"),
                          },
                          reason: t.statusText,
                          statusCode: t.status,
                        };
                      });
                    });
                  }))),
                new eW(n)
              );
            }
            return (
              (this._newTransport = eY(
                { bufferSize: (e = { url: i, headers: n.headers }).bufferSize },
                function (t) {
                  return new tS(function (n, r) {
                    var i = new XMLHttpRequest();
                    for (var o in ((i.onreadystatechange = function () {
                      4 === i.readyState &&
                        n({
                          body: i.response,
                          headers: {
                            "x-sentry-rate-limits": i.getResponseHeader(
                              "X-Sentry-Rate-Limits"
                            ),
                            "retry-after": i.getResponseHeader("Retry-After"),
                          },
                          reason: i.statusText,
                          statusCode: i.status,
                        });
                    }),
                    i.open("POST", e.url),
                    e.headers))
                      Object.prototype.hasOwnProperty.call(e.headers, o) &&
                        i.setRequestHeader(o, e.headers[o]);
                    i.send(t.body);
                  });
                }
              )),
              new e$(n)
            );
          }),
          e
        );
      })(eh);
    function eJ(t) {
      for (var e = [], n = 1; n < arguments.length; n++)
        e[n - 1] = arguments[n];
      var r = tP();
      if (r && r[t]) return r[t].apply(r, x(e));
      throw Error(
        "No hub defined or " +
          t +
          " was not found on the hub, please open a bug report."
      );
    }
    var eV = P(),
      eZ = 0;
    function e0(t, e, n) {
      if ((void 0 === e && (e = {}), "function" != typeof t)) return t;
      try {
        var r = t.__sentry_wrapped__;
        if (r) return r;
        if (ts(t)) return t;
      } catch (e) {
        return t;
      }
      var i = function () {
        var r,
          i = Array.prototype.slice.call(arguments);
        try {
          n && "function" == typeof n && n.apply(this, arguments);
          var o = i.map(function (t) {
            return e0(t, e);
          });
          return t.apply(this, o);
        } catch (t) {
          throw (
            ((eZ += 1),
            setTimeout(function () {
              eZ -= 1;
            }),
            (r = function (n) {
              n.addEventProcessor(function (t) {
                return (
                  e.mechanism && (tv(t, void 0, void 0), tm(t, e.mechanism)),
                  (t.extra = _(_({}, t.extra), { arguments: i })),
                  t
                );
              }),
                eJ("captureException", t, {
                  captureContext: void 0,
                  originalException: t,
                  syntheticException: Error("Sentry syntheticException"),
                });
            }),
            eJ("withScope", r),
            t)
          );
        }
      };
      try {
        for (var o in t)
          Object.prototype.hasOwnProperty.call(t, o) && (i[o] = t[o]);
      } catch (t) {}
      to(i, t), ti(t, "__sentry_wrapped__", i);
      try {
        Object.getOwnPropertyDescriptor(i, "name").configurable &&
          Object.defineProperty(i, "name", {
            get: function () {
              return t.name;
            },
          });
      } catch (t) {}
      return i;
    }
    var e1 = ["fatal", "error", "warning", "log", "info", "debug", "critical"],
      e3 = (function () {
        function t(e) {
          (this.name = t.id),
            (this._options = _(
              {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
              },
              e
            ));
        }
        return (
          (t.prototype.addSentryBreadcrumb = function (t) {
            this._options.sentry &&
              tP().addBreadcrumb(
                {
                  category:
                    "sentry." +
                    ("transaction" === t.type ? "transaction" : "event"),
                  event_id: t.event_id,
                  level: t.level,
                  message: th(t),
                },
                { event: t }
              );
          }),
          (t.prototype.setupOnce = function () {
            var t;
            this._options.console && tY("console", e2),
              this._options.dom &&
                tY(
                  "dom",
                  ((t = this._options.dom),
                  function (e) {
                    var n,
                      r = "object" == typeof t ? t.serializeAttribute : void 0;
                    "string" == typeof r && (r = [r]);
                    try {
                      n = e.event.target ? Z(e.event.target, r) : Z(e.event, r);
                    } catch (t) {
                      n = "<unknown>";
                    }
                    0 !== n.length &&
                      tP().addBreadcrumb(
                        { category: "ui." + e.name, message: n },
                        { event: e.event, name: e.name, global: e.global }
                      );
                  })
                ),
              this._options.xhr && tY("xhr", e4),
              this._options.fetch && tY("fetch", e6),
              this._options.history && tY("history", e5);
          }),
          (t.id = "Breadcrumbs"),
          t
        );
      })();
    function e2(t) {
      var e = {
        category: "console",
        data: { arguments: t.args, logger: "console" },
        level: (function (t) {
          return "warn" === t ? p.Warning : -1 !== e1.indexOf(t) ? t : p.Log;
        })(t.level),
        message: te(t.args, " "),
      };
      if ("assert" === t.level)
        if (!1 !== t.args[0]) return;
        else
          (e.message =
            "Assertion failed: " +
            (te(t.args.slice(1), " ") || "console.assert")),
            (e.data.arguments = t.args.slice(1));
      tP().addBreadcrumb(e, { input: t.args, level: t.level });
    }
    function e4(t) {
      if (t.endTimestamp && !t.xhr.__sentry_own_request__) {
        var e = t.xhr.__sentry_xhr__ || {},
          n = e.method,
          r = e.url,
          i = e.status_code,
          o = e.body;
        tP().addBreadcrumb(
          {
            category: "xhr",
            data: { method: n, url: r, status_code: i },
            type: "http",
          },
          { xhr: t.xhr, input: o }
        );
        return;
      }
    }
    function e6(t) {
      !t.endTimestamp ||
        (t.fetchData.url.match(/sentry_key/) &&
          "POST" === t.fetchData.method) ||
        (t.error
          ? tP().addBreadcrumb(
              {
                category: "fetch",
                data: t.fetchData,
                level: p.Error,
                type: "http",
              },
              { data: t.error, input: t.args }
            )
          : tP().addBreadcrumb(
              {
                category: "fetch",
                data: _(_({}, t.fetchData), { status_code: t.response.status }),
                type: "http",
              },
              { input: t.args, response: t.response }
            ));
    }
    function e5(t) {
      var e = P(),
        n = t.from,
        r = t.to,
        i = tp(e.location.href),
        o = tp(n),
        s = tp(r);
      o.path || (o = i),
        i.protocol === s.protocol && i.host === s.host && (r = s.relative),
        i.protocol === o.protocol && i.host === o.host && (n = o.relative),
        tP().addBreadcrumb({
          category: "navigation",
          data: { from: n, to: r },
        });
    }
    var e9 = (function (t) {
        function e(e) {
          void 0 === e && (e = {});
          return (
            (e._metadata = e._metadata || {}),
            (e._metadata.sdk = e._metadata.sdk || {
              name: "sentry.javascript.browser",
              packages: [{ name: "npm:@sentry/browser", version: t8 }],
              version: t8,
            }),
            t.call(this, eX, e) || this
          );
        }
        return (
          g(e, t),
          (e.prototype.showReportDialog = function (t) {
            if ((void 0 === t && (t = {}), P().document)) {
              if (!this._isEnabled()) {
                eU &&
                  a.error(
                    "Trying to call showReportDialog with Sentry Client disabled"
                  );
                return;
              }
              !(function (t) {
                if ((void 0 === t && (t = {}), eV.document)) {
                  if (!t.eventId) {
                    eU &&
                      a.error(
                        "Missing eventId option in showReportDialog call"
                      );
                    return;
                  }
                  if (!t.dsn) {
                    eU &&
                      a.error("Missing dsn option in showReportDialog call");
                    return;
                  }
                  var e = eV.document.createElement("script");
                  (e.async = !0),
                    (e.src = (function (t, e) {
                      var n = t2(t),
                        r = en(n) + "embed/error-page/",
                        i = "dsn=" + t1(n);
                      for (var o in e)
                        if ("dsn" !== o)
                          if ("user" === o) {
                            if (!e.user) continue;
                            e.user.name &&
                              (i += "&name=" + encodeURIComponent(e.user.name)),
                              e.user.email &&
                                (i +=
                                  "&email=" + encodeURIComponent(e.user.email));
                          } else
                            i +=
                              "&" +
                              encodeURIComponent(o) +
                              "=" +
                              encodeURIComponent(e[o]);
                      return r + "?" + i;
                    })(t.dsn, t)),
                    t.onLoad && (e.onload = t.onLoad);
                  var n = eV.document.head || eV.document.body;
                  n && n.appendChild(e);
                }
              })(_(_({}, t), { dsn: t.dsn || this.getDsn() }));
            }
          }),
          (e.prototype._prepareEvent = function (e, n, r) {
            return (
              (e.platform = e.platform || "javascript"),
              t.prototype._prepareEvent.call(this, e, n, r)
            );
          }),
          (e.prototype._sendEvent = function (e) {
            var n = this.getIntegration(e3);
            n && n.addSentryBreadcrumb(e), t.prototype._sendEvent.call(this, e);
          }),
          e
        );
      })(t7),
      e7 = (function () {
        function t() {
          this.name = t.id;
        }
        return (
          (t.prototype.setupOnce = function (e, n) {
            e(function (e) {
              var r,
                i,
                o,
                s,
                u,
                c,
                l,
                d,
                p,
                f,
                h = n().getIntegration(t);
              if (h) {
                try {
                  if (
                    ((r = e),
                    (i = h._previousEvent) &&
                      ((o = r),
                      (s = i),
                      (u = o.message),
                      (c = s.message),
                      ((u || c) &&
                        (!u || c) &&
                        (u || !c) &&
                        u === c &&
                        nt(o, s) &&
                        e8(o, s) &&
                        1) ||
                        ((l = r),
                        (d = i),
                        (p = ne(d)),
                        (f = ne(l)),
                        p &&
                          f &&
                          p.type === f.type &&
                          p.value === f.value &&
                          nt(l, d) &&
                          e8(l, d))))
                  )
                    return (
                      eU &&
                        a.warn(
                          "Event dropped due to being a duplicate of previously captured event."
                        ),
                      null
                    );
                } catch (t) {}
                return (h._previousEvent = e);
              }
              return e;
            });
          }),
          (t.id = "Dedupe"),
          t
        );
      })();
    function e8(t, e) {
      var n = nn(t),
        r = nn(e);
      if (!n && !r) return !0;
      if ((n && !r) || (!n && r) || r.length !== n.length) return !1;
      for (var i = 0; i < r.length; i++) {
        var o = r[i],
          s = n[i];
        if (
          o.filename !== s.filename ||
          o.lineno !== s.lineno ||
          o.colno !== s.colno ||
          o.function !== s.function
        )
          return !1;
      }
      return !0;
    }
    function nt(t, e) {
      var n = t.fingerprint,
        r = e.fingerprint;
      if (!n && !r) return !0;
      if ((n && !r) || (!n && r)) return !1;
      try {
        return n.join("") === r.join("");
      } catch (t) {
        return !1;
      }
    }
    function ne(t) {
      return t.exception && t.exception.values && t.exception.values[0];
    }
    function nn(t) {
      var e = t.exception;
      if (e)
        try {
          return e.values[0].stacktrace.frames;
        } catch (t) {}
      else if (t.stacktrace) return t.stacktrace.frames;
    }
    var nr = (function () {
      function t(e) {
        (this.name = t.id),
          (this._installFunc = { onerror: ni, onunhandledrejection: no }),
          (this._options = _({ onerror: !0, onunhandledrejection: !0 }, e));
      }
      return (
        (t.prototype.setupOnce = function () {
          Error.stackTraceLimit = 50;
          var t = this._options;
          for (var e in t) {
            var n,
              r = this._installFunc[e];
            r &&
              t[e] &&
              ((n = e),
              eU && a.log("Global Handler attached: " + n),
              r(),
              (this._installFunc[e] = void 0));
          }
        }),
        (t.id = "GlobalHandlers"),
        t
      );
    })();
    function ni() {
      tY("error", function (t) {
        var e = S(nu(), 2),
          n = e[0],
          r = e[1];
        if (n.getIntegration(nr)) {
          var i = t.msg,
            o = t.url,
            s = t.line,
            a = t.column,
            u = t.error;
          if (!(eZ > 0) && (!u || !u.__sentry_own_request__)) {
            var c,
              l,
              d,
              f,
              h,
              v,
              m,
              y =
                void 0 === u && W(i)
                  ? ((c = i),
                    (l = o),
                    (d = s),
                    (f = a),
                    (h = K(c) ? c.message : c),
                    (v = "Error"),
                    (m = h.match(
                      /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
                    )) && ((v = m[1]), (h = m[2])),
                    ns(
                      { exception: { values: [{ type: v, value: h }] } },
                      l,
                      d,
                      f
                    ))
                  : ns(eD(u || i, void 0, r, !1), o, s, a);
            (y.level = p.Error), na(n, u, y, "onerror");
          }
        }
      });
    }
    function no() {
      tY("unhandledrejection", function (t) {
        var e = S(nu(), 2),
          n = e[0],
          r = e[1];
        if (n.getIntegration(nr)) {
          var i = t;
          try {
            "reason" in t
              ? (i = t.reason)
              : "detail" in t && "reason" in t.detail && (i = t.detail.reason);
          } catch (t) {}
          if (eZ > 0 || (i && i.__sentry_own_request__)) return !0;
          var o = Y(i)
            ? {
                exception: {
                  values: [
                    {
                      type: "UnhandledRejection",
                      value:
                        "Non-Error promise rejection captured with value: " +
                        String(i),
                    },
                  ],
                },
              }
            : eD(i, void 0, r, !0);
          (o.level = p.Error), na(n, i, o, "onunhandledrejection");
        }
      });
    }
    function ns(t, e, n, r) {
      var i = (t.exception = t.exception || {}),
        o = (i.values = i.values || []),
        s = (o[0] = o[0] || {}),
        a = (s.stacktrace = s.stacktrace || {}),
        u = (a.frames = a.frames || []),
        c = isNaN(parseInt(r, 10)) ? void 0 : r,
        l = isNaN(parseInt(n, 10)) ? void 0 : n,
        d =
          W(e) && e.length > 0
            ? e
            : (function () {
                var t = P();
                try {
                  return t.document.location.href;
                } catch (t) {
                  return "";
                }
              })();
      return (
        0 === u.length &&
          u.push({
            colno: c,
            filename: d,
            function: "?",
            in_app: !0,
            lineno: l,
          }),
        t
      );
    }
    function na(t, e, n, r) {
      tm(n, { handled: !1, type: r }),
        t.captureEvent(n, { originalException: e });
    }
    function nu() {
      var t = tP(),
        e = t.getClient();
      return [t, e && e.getOptions().attachStacktrace];
    }
    var nc = (function () {
        function t(e) {
          void 0 === e && (e = {}),
            (this.name = t.id),
            (this._key = e.key || "cause"),
            (this._limit = e.limit || 5);
        }
        return (
          (t.prototype.setupOnce = function () {
            tE(function (e, n) {
              var r = tP().getIntegration(t);
              return r
                ? (function (t, e, n, r) {
                    if (
                      !n.exception ||
                      !n.exception.values ||
                      !r ||
                      !V(r.originalException, Error)
                    )
                      return n;
                    var i = (function t(e, n, r, i) {
                      if (
                        (void 0 === i && (i = []),
                        !V(n[r], Error) || i.length + 1 >= e)
                      )
                        return i;
                      var o = eP(n[r]);
                      return t(e, n[r], r, x([o], i));
                    })(e, r.originalException, t);
                    return (n.exception.values = x(i, n.exception.values)), n;
                  })(r._key, r._limit, e, n)
                : e;
            });
          }),
          (t.id = "LinkedErrors"),
          t
        );
      })(),
      nl = [
        "EventTarget",
        "Window",
        "Node",
        "ApplicationCache",
        "AudioTrackList",
        "ChannelMergerNode",
        "CryptoOperation",
        "EventSource",
        "FileReader",
        "HTMLUnknownElement",
        "IDBDatabase",
        "IDBRequest",
        "IDBTransaction",
        "KeyOperation",
        "MediaController",
        "MessagePort",
        "ModalWindow",
        "Notification",
        "SVGElementInstance",
        "Screen",
        "TextTrack",
        "TextTrackCue",
        "TextTrackList",
        "WebSocket",
        "WebSocketWorker",
        "Worker",
        "XMLHttpRequest",
        "XMLHttpRequestEventTarget",
        "XMLHttpRequestUpload",
      ],
      nd = (function () {
        function t(e) {
          (this.name = t.id),
            (this._options = _(
              {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
              },
              e
            ));
        }
        return (
          (t.prototype.setupOnce = function () {
            var t = P();
            this._options.setTimeout && tr(t, "setTimeout", np),
              this._options.setInterval && tr(t, "setInterval", np),
              this._options.requestAnimationFrame &&
                tr(t, "requestAnimationFrame", nf),
              this._options.XMLHttpRequest &&
                "XMLHttpRequest" in t &&
                tr(XMLHttpRequest.prototype, "send", nh);
            var e = this._options.eventTarget;
            e && (Array.isArray(e) ? e : nl).forEach(nv);
          }),
          (t.id = "TryCatch"),
          t
        );
      })();
    function np(t) {
      return function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        var r = e[0];
        return (
          (e[0] = e0(r, {
            mechanism: {
              data: { function: tH(t) },
              handled: !0,
              type: "instrument",
            },
          })),
          t.apply(this, e)
        );
      };
    }
    function nf(t) {
      return function (e) {
        return t.apply(this, [
          e0(e, {
            mechanism: {
              data: { function: "requestAnimationFrame", handler: tH(t) },
              handled: !0,
              type: "instrument",
            },
          }),
        ]);
      };
    }
    function nh(t) {
      return function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        var r = this;
        return (
          ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
            function (t) {
              t in r &&
                "function" == typeof r[t] &&
                tr(r, t, function (e) {
                  var n = {
                      mechanism: {
                        data: { function: t, handler: tH(e) },
                        handled: !0,
                        type: "instrument",
                      },
                    },
                    r = ts(e);
                  return r && (n.mechanism.data.handler = tH(r)), e0(e, n);
                });
            }
          ),
          t.apply(this, e)
        );
      };
    }
    function nv(t) {
      var e = P(),
        n = e[t] && e[t].prototype;
      n &&
        n.hasOwnProperty &&
        n.hasOwnProperty("addEventListener") &&
        (tr(n, "addEventListener", function (e) {
          return function (n, r, i) {
            try {
              "function" == typeof r.handleEvent &&
                (r.handleEvent = e0(r.handleEvent.bind(r), {
                  mechanism: {
                    data: {
                      function: "handleEvent",
                      handler: tH(r),
                      target: t,
                    },
                    handled: !0,
                    type: "instrument",
                  },
                }));
            } catch (t) {}
            return e.apply(this, [
              n,
              e0(r, {
                mechanism: {
                  data: {
                    function: "addEventListener",
                    handler: tH(r),
                    target: t,
                  },
                  handled: !0,
                  type: "instrument",
                },
              }),
              i,
            ]);
          };
        }),
        tr(n, "removeEventListener", function (t) {
          return function (e, n, r) {
            try {
              var i = n && n.__sentry_wrapped__;
              i && t.call(this, e, i, r);
            } catch (t) {}
            return t.call(this, e, n, r);
          };
        }));
    }
    var nm = P(),
      ny = (function () {
        function t() {
          this.name = t.id;
        }
        return (
          (t.prototype.setupOnce = function () {
            tE(function (e) {
              if (tP().getIntegration(t)) {
                if (!nm.navigator && !nm.location && !nm.document) return e;
                var n =
                    (e.request && e.request.url) ||
                    (nm.location && nm.location.href),
                  r = (nm.document || {}).referrer,
                  i = (nm.navigator || {}).userAgent,
                  o = _(
                    _(
                      _({}, e.request && e.request.headers),
                      r && { Referer: r }
                    ),
                    i && { "User-Agent": i }
                  ),
                  s = _(_({}, n && { url: n }), { headers: o });
                return _(_({}, e), { request: s });
              }
              return e;
            });
          }),
          (t.id = "UserAgent"),
          t
        );
      })(),
      ng = [
        new tF.InboundFilters(),
        new tF.FunctionToString(),
        new nd(),
        new e3(),
        new nr(),
        new nc(),
        new e7(),
        new ny(),
      ];
    function n_(t) {
      t.startSession({ ignoreDuration: !0 }), t.captureSession();
    }
    var nb = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    function nS(t) {
      var e = tP().getClient(),
        n = t || (e && e.getOptions());
      return !!n && ("tracesSampleRate" in n || "tracesSampler" in n);
    }
    function nx(t) {
      var e = (t || tP()).getScope();
      return e && e.getTransaction();
    }
    function nw(t) {
      return t / 1e3;
    }
    function nE() {
      var t = nx();
      if (t) {
        var e = "internal_error";
        nb && a.log("[Tracing] Transaction: " + e + " -> Global error occured"),
          t.setStatus(e);
      }
    }
    var nT = "finishReason",
      nO = (function () {
        function t(t) {
          void 0 === t && (t = 1e3), (this.spans = []), (this._maxlen = t);
        }
        return (
          (t.prototype.add = function (t) {
            this.spans.length > this._maxlen
              ? (t.spanRecorder = void 0)
              : this.spans.push(t);
          }),
          t
        );
      })(),
      nk = (function (t) {
        function e(e, n) {
          var r = t.call(this, e) || this;
          return (
            (r._measurements = {}),
            (r._hub = tP()),
            V(n, tO) && (r._hub = n),
            (r.name = e.name || ""),
            (r.metadata = e.metadata || {}),
            (r._trimEnd = e.trimEnd),
            (r.transaction = r),
            r
          );
        }
        return (
          g(e, t),
          (e.prototype.setName = function (t) {
            this.name = t;
          }),
          (e.prototype.initSpanRecorder = function (t) {
            void 0 === t && (t = 1e3),
              this.spanRecorder || (this.spanRecorder = new nO(t)),
              this.spanRecorder.add(this);
          }),
          (e.prototype.setMeasurements = function (t) {
            this._measurements = _({}, t);
          }),
          (e.prototype.setMetadata = function (t) {
            this.metadata = _(_({}, this.metadata), t);
          }),
          (e.prototype.finish = function (e) {
            var n = this;
            if (void 0 === this.endTimestamp) {
              if (
                (this.name ||
                  (nb &&
                    a.warn(
                      "Transaction has no name, falling back to `<unlabeled transaction>`."
                    ),
                  (this.name = "<unlabeled transaction>")),
                t.prototype.finish.call(this, e),
                !0 !== this.sampled)
              ) {
                nb &&
                  a.log(
                    "[Tracing] Discarding transaction because its trace was not chosen to be sampled."
                  );
                var r = this._hub.getClient(),
                  i = r && r.getTransport && r.getTransport();
                i &&
                  i.recordLostEvent &&
                  i.recordLostEvent("sample_rate", "transaction");
                return;
              }
              var o = this.spanRecorder
                ? this.spanRecorder.spans.filter(function (t) {
                    return t !== n && t.endTimestamp;
                  })
                : [];
              this._trimEnd &&
                o.length > 0 &&
                (this.endTimestamp = o.reduce(function (t, e) {
                  return t.endTimestamp && e.endTimestamp
                    ? t.endTimestamp > e.endTimestamp
                      ? t
                      : e
                    : t;
                }).endTimestamp);
              var s = {
                contexts: { trace: this.getTraceContext() },
                spans: o,
                start_timestamp: this.startTimestamp,
                tags: this.tags,
                timestamp: this.endTimestamp,
                transaction: this.name,
                type: "transaction",
                sdkProcessingMetadata: this.metadata,
              };
              return (
                Object.keys(this._measurements).length > 0 &&
                  (nb &&
                    a.log(
                      "[Measurements] Adding measurements to transaction",
                      JSON.stringify(this._measurements, void 0, 2)
                    ),
                  (s.measurements = this._measurements)),
                nb &&
                  a.log(
                    "[Tracing] Finishing " +
                      this.op +
                      " transaction: " +
                      this.name +
                      "."
                  ),
                this._hub.captureEvent(s)
              );
            }
          }),
          (e.prototype.toContext = function () {
            var e = t.prototype.toContext.call(this);
            return tl(_(_({}, e), { name: this.name, trimEnd: this._trimEnd }));
          }),
          (e.prototype.updateWithContext = function (e) {
            var n;
            return (
              t.prototype.updateWithContext.call(this, e),
              (this.name = null != (n = e.name) ? n : ""),
              (this._trimEnd = e.trimEnd),
              this
            );
          }),
          e
        );
      })(
        (function () {
          function t(t) {
            if (
              ((this.traceId = td()),
              (this.spanId = td().substring(16)),
              (this.startTimestamp = F()),
              (this.tags = {}),
              (this.data = {}),
              !t)
            )
              return this;
            t.traceId && (this.traceId = t.traceId),
              t.spanId && (this.spanId = t.spanId),
              t.parentSpanId && (this.parentSpanId = t.parentSpanId),
              "sampled" in t && (this.sampled = t.sampled),
              t.op && (this.op = t.op),
              t.description && (this.description = t.description),
              t.data && (this.data = t.data),
              t.tags && (this.tags = t.tags),
              t.status && (this.status = t.status),
              t.startTimestamp && (this.startTimestamp = t.startTimestamp),
              t.endTimestamp && (this.endTimestamp = t.endTimestamp);
          }
          return (
            (t.prototype.child = function (t) {
              return this.startChild(t);
            }),
            (t.prototype.startChild = function (e) {
              var n = new t(
                _(_({}, e), {
                  parentSpanId: this.spanId,
                  sampled: this.sampled,
                  traceId: this.traceId,
                })
              );
              return (
                (n.spanRecorder = this.spanRecorder),
                n.spanRecorder && n.spanRecorder.add(n),
                (n.transaction = this.transaction),
                n
              );
            }),
            (t.prototype.setTag = function (t, e) {
              var n;
              return (
                (this.tags = _(_({}, this.tags), (((n = {})[t] = e), n))), this
              );
            }),
            (t.prototype.setData = function (t, e) {
              var n;
              return (
                (this.data = _(_({}, this.data), (((n = {})[t] = e), n))), this
              );
            }),
            (t.prototype.setStatus = function (t) {
              return (this.status = t), this;
            }),
            (t.prototype.setHttpStatus = function (t) {
              this.setTag("http.status_code", String(t));
              var e = (function (t) {
                if (t < 400 && t >= 100) return "ok";
                if (t >= 400 && t < 500)
                  switch (t) {
                    case 401:
                      return "unauthenticated";
                    case 403:
                      return "permission_denied";
                    case 404:
                      return "not_found";
                    case 409:
                      return "already_exists";
                    case 413:
                      return "failed_precondition";
                    case 429:
                      return "resource_exhausted";
                    default:
                      return "invalid_argument";
                  }
                if (t >= 500 && t < 600)
                  switch (t) {
                    case 501:
                      return "unimplemented";
                    case 503:
                      return "unavailable";
                    case 504:
                      return "deadline_exceeded";
                    default:
                      return "internal_error";
                  }
                return "unknown_error";
              })(t);
              return "unknown_error" !== e && this.setStatus(e), this;
            }),
            (t.prototype.isSuccess = function () {
              return "ok" === this.status;
            }),
            (t.prototype.finish = function (t) {
              this.endTimestamp = "number" == typeof t ? t : F();
            }),
            (t.prototype.toTraceparent = function () {
              var t = "";
              return (
                void 0 !== this.sampled && (t = this.sampled ? "-1" : "-0"),
                this.traceId + "-" + this.spanId + t
              );
            }),
            (t.prototype.toContext = function () {
              return tl({
                data: this.data,
                description: this.description,
                endTimestamp: this.endTimestamp,
                op: this.op,
                parentSpanId: this.parentSpanId,
                sampled: this.sampled,
                spanId: this.spanId,
                startTimestamp: this.startTimestamp,
                status: this.status,
                tags: this.tags,
                traceId: this.traceId,
              });
            }),
            (t.prototype.updateWithContext = function (t) {
              var e, n, r, i, o;
              return (
                (this.data = null != (e = t.data) ? e : {}),
                (this.description = t.description),
                (this.endTimestamp = t.endTimestamp),
                (this.op = t.op),
                (this.parentSpanId = t.parentSpanId),
                (this.sampled = t.sampled),
                (this.spanId = null != (n = t.spanId) ? n : this.spanId),
                (this.startTimestamp =
                  null != (r = t.startTimestamp) ? r : this.startTimestamp),
                (this.status = t.status),
                (this.tags = null != (i = t.tags) ? i : {}),
                (this.traceId = null != (o = t.traceId) ? o : this.traceId),
                this
              );
            }),
            (t.prototype.getTraceContext = function () {
              return tl({
                data: Object.keys(this.data).length > 0 ? this.data : void 0,
                description: this.description,
                op: this.op,
                parent_span_id: this.parentSpanId,
                span_id: this.spanId,
                status: this.status,
                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                trace_id: this.traceId,
              });
            }),
            (t.prototype.toJSON = function () {
              return tl({
                data: Object.keys(this.data).length > 0 ? this.data : void 0,
                description: this.description,
                op: this.op,
                parent_span_id: this.parentSpanId,
                span_id: this.spanId,
                start_timestamp: this.startTimestamp,
                status: this.status,
                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                timestamp: this.endTimestamp,
                trace_id: this.traceId,
              });
            }),
            t
          );
        })()
      ),
      nC = (function (t) {
        function e(e, n, r, i) {
          void 0 === r && (r = "");
          var o = t.call(this, i) || this;
          return (
            (o._pushActivity = e),
            (o._popActivity = n),
            (o.transactionSpanId = r),
            o
          );
        }
        return (
          g(e, t),
          (e.prototype.add = function (e) {
            var n = this;
            e.spanId !== this.transactionSpanId &&
              ((e.finish = function (t) {
                (e.endTimestamp = "number" == typeof t ? t : F()),
                  n._popActivity(e.spanId);
              }),
              void 0 === e.endTimestamp && this._pushActivity(e.spanId)),
              t.prototype.add.call(this, e);
          }),
          e
        );
      })(nO),
      nP = (function (t) {
        function e(e, n, r, i) {
          void 0 === r && (r = 1e3), void 0 === i && (i = !1);
          var o = t.call(this, e, n) || this;
          return (
            (o._idleHub = n),
            (o._idleTimeout = r),
            (o._onScope = i),
            (o.activities = {}),
            (o._heartbeatCounter = 0),
            (o._finished = !1),
            (o._beforeFinishCallbacks = []),
            n &&
              i &&
              (nR(n),
              nb &&
                a.log(
                  "Setting idle transaction on scope. Span ID: " + o.spanId
                ),
              n.configureScope(function (t) {
                return t.setSpan(o);
              })),
            (o._initTimeout = setTimeout(function () {
              o._finished || o.finish();
            }, o._idleTimeout)),
            o
          );
        }
        return (
          g(e, t),
          (e.prototype.finish = function (e) {
            var n,
              r,
              i = this;
            if (
              (void 0 === e && (e = F()),
              (this._finished = !0),
              (this.activities = {}),
              this.spanRecorder)
            ) {
              nb &&
                a.log(
                  "[Tracing] finishing IdleTransaction",
                  new Date(1e3 * e).toISOString(),
                  this.op
                );
              try {
                for (
                  var o = b(this._beforeFinishCallbacks), s = o.next();
                  !s.done;
                  s = o.next()
                )
                  (0, s.value)(this, e);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  s && !s.done && (r = o.return) && r.call(o);
                } finally {
                  if (n) throw n.error;
                }
              }
              (this.spanRecorder.spans = this.spanRecorder.spans.filter(
                function (t) {
                  if (t.spanId === i.spanId) return !0;
                  !t.endTimestamp &&
                    ((t.endTimestamp = e),
                    t.setStatus("cancelled"),
                    nb &&
                      a.log(
                        "[Tracing] cancelling span since transaction ended early",
                        JSON.stringify(t, void 0, 2)
                      ));
                  var n = t.startTimestamp < e;
                  return (
                    !n &&
                      nb &&
                      a.log(
                        "[Tracing] discarding Span since it happened after Transaction was finished",
                        JSON.stringify(t, void 0, 2)
                      ),
                    n
                  );
                }
              )),
                nb && a.log("[Tracing] flushing IdleTransaction");
            } else nb && a.log("[Tracing] No active IdleTransaction");
            return (
              this._onScope && nR(this._idleHub),
              t.prototype.finish.call(this, e)
            );
          }),
          (e.prototype.registerBeforeFinishCallback = function (t) {
            this._beforeFinishCallbacks.push(t);
          }),
          (e.prototype.initSpanRecorder = function (t) {
            var e = this;
            this.spanRecorder ||
              ((this.spanRecorder = new nC(
                function (t) {
                  e._finished || e._pushActivity(t);
                },
                function (t) {
                  e._finished || e._popActivity(t);
                },
                this.spanId,
                t
              )),
              nb && a.log("Starting heartbeat"),
              this._pingHeartbeat()),
              this.spanRecorder.add(this);
          }),
          (e.prototype._pushActivity = function (t) {
            this._initTimeout &&
              (clearTimeout(this._initTimeout), (this._initTimeout = void 0)),
              nb && a.log("[Tracing] pushActivity: " + t),
              (this.activities[t] = !0),
              nb &&
                a.log(
                  "[Tracing] new activities count",
                  Object.keys(this.activities).length
                );
          }),
          (e.prototype._popActivity = function (t) {
            var e = this;
            if (
              (this.activities[t] &&
                (nb && a.log("[Tracing] popActivity " + t),
                delete this.activities[t],
                nb &&
                  a.log(
                    "[Tracing] new activities count",
                    Object.keys(this.activities).length
                  )),
              0 === Object.keys(this.activities).length)
            ) {
              var n = this._idleTimeout,
                r = F() + n / 1e3;
              setTimeout(function () {
                e._finished || (e.setTag(nT, "idleTimeout"), e.finish(r));
              }, n);
            }
          }),
          (e.prototype._beat = function () {
            if (!this._finished) {
              var t = Object.keys(this.activities).join("");
              t === this._prevHeartbeatString
                ? (this._heartbeatCounter += 1)
                : (this._heartbeatCounter = 1),
                (this._prevHeartbeatString = t),
                this._heartbeatCounter >= 3
                  ? (nb &&
                      a.log(
                        "[Tracing] Transaction finished because of no change for 3 heart beats"
                      ),
                    this.setStatus("deadline_exceeded"),
                    this.setTag(nT, "heartbeatFailed"),
                    this.finish())
                  : this._pingHeartbeat();
            }
          }),
          (e.prototype._pingHeartbeat = function () {
            var t = this;
            nb &&
              a.log(
                "pinging Heartbeat -> current counter: " +
                  this._heartbeatCounter
              ),
              setTimeout(function () {
                t._beat();
              }, 5e3);
          }),
          e
        );
      })(nk);
    function nR(t) {
      if (t) {
        var e = t.getScope();
        e && e.getTransaction() && e.setSpan(void 0);
      }
    }
    function nq(t, e, n) {
      var r, i;
      return (
        nS(e)
          ? void 0 !== t.sampled
            ? t.setMetadata({
                transactionSampling: { method: "explicitly_set" },
              })
            : ("function" == typeof e.tracesSampler
                ? ((r = e.tracesSampler(n)),
                  t.setMetadata({
                    transactionSampling: {
                      method: "client_sampler",
                      rate: Number(r),
                    },
                  }))
                : void 0 !== n.parentSampled
                ? ((r = n.parentSampled),
                  t.setMetadata({
                    transactionSampling: { method: "inheritance" },
                  }))
                : ((r = e.tracesSampleRate),
                  t.setMetadata({
                    transactionSampling: {
                      method: "client_rate",
                      rate: Number(r),
                    },
                  })),
              J((i = r)) || ("number" != typeof i && "boolean" != typeof i)
                ? (nb &&
                    a.warn(
                      "[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " +
                        JSON.stringify(i) +
                        " of type " +
                        JSON.stringify(typeof i) +
                        "."
                    ),
                  !1)
                : (!(i < 0) && !(i > 1)) ||
                  (nb &&
                    a.warn(
                      "[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " +
                        i +
                        "."
                    ),
                  !1))
            ? r
              ? ((t.sampled = Math.random() < r), t.sampled)
                ? nb &&
                  a.log(
                    "[Tracing] starting " + t.op + " transaction - " + t.name
                  )
                : nb &&
                  a.log(
                    "[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " +
                      Number(r) +
                      ")"
                  )
              : (nb &&
                  a.log(
                    "[Tracing] Discarding transaction because " +
                      ("function" == typeof e.tracesSampler
                        ? "tracesSampler returned 0 or false"
                        : "a negative sampling decision was inherited or tracesSampleRate is set to 0")
                  ),
                (t.sampled = !1))
            : (nb &&
                a.warn(
                  "[Tracing] Discarding transaction because of invalid sample rate."
                ),
              (t.sampled = !1))
          : (t.sampled = !1),
        t
      );
    }
    t.s([], 39080), t.i(39080);
    var nI = (function () {
      function t(e) {
        void 0 === e && (e = {}),
          (this.name = t.id),
          (this._router = e.router || e.app),
          (this._methods = (Array.isArray(e.methods) ? e.methods : []).concat(
            "use"
          ));
      }
      return (
        (t.prototype.setupOnce = function () {
          var t, e;
          if (!this._router) {
            nb && a.error("ExpressIntegration is missing an Express instance");
            return;
          }
          (t = this._router),
            void 0 === (e = this._methods) && (e = []),
            e.forEach(function (e) {
              var n;
              return (
                (n = t[e]),
                (t[e] = function () {
                  for (var t = [], r = 0; r < arguments.length; r++)
                    t[r] = arguments[r];
                  return n.call.apply(
                    n,
                    x(
                      [this],
                      t.map(function (t) {
                        return "function" == typeof t
                          ? nD(t, e)
                          : Array.isArray(t)
                          ? t.map(function (t) {
                              return "function" == typeof t ? nD(t, e) : t;
                            })
                          : t;
                      })
                    )
                  );
                }),
                t
              );
            });
        }),
        (t.id = "Express"),
        t
      );
    })();
    function nD(t, e) {
      var n = t.length;
      switch (n) {
        case 2:
          return function (n, r) {
            var i = r.__sentry_transaction;
            if (i) {
              var o = i.startChild({
                description: t.name,
                op: "express.middleware." + e,
              });
              r.once("finish", function () {
                o.finish();
              });
            }
            return t.call(this, n, r);
          };
        case 3:
          return function (n, r, i) {
            var o = r.__sentry_transaction,
              s =
                null == o
                  ? void 0
                  : o.startChild({
                      description: t.name,
                      op: "express.middleware." + e,
                    });
            t.call(this, n, r, function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              null == s || s.finish(), i.call.apply(i, x([this], t));
            });
          };
        case 4:
          return function (n, r, i, o) {
            var s = i.__sentry_transaction,
              a =
                null == s
                  ? void 0
                  : s.startChild({
                      description: t.name,
                      op: "express.middleware." + e,
                    });
            t.call(this, n, r, i, function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              null == a || a.finish(), o.call.apply(o, x([this], t));
            });
          };
        default:
          throw Error("Express middleware takes 2-4 arguments. Got: " + n);
      }
    }
    var nM = (function () {
        function t(e) {
          void 0 === e && (e = {}),
            (this.name = t.id),
            (this._usePgNative = !!e.usePgNative);
        }
        return (
          (t.prototype.setupOnce = function (t, e) {
            var n,
              r = k("pg");
            if (!r) {
              nb &&
                a.error(
                  "Postgres Integration was unable to require `pg` package."
                );
              return;
            }
            if (
              this._usePgNative &&
              !(null == (n = r.native) ? void 0 : n.Client)
            ) {
              nb &&
                a.error(
                  "Postgres Integration was unable to access 'pg-native' bindings."
                );
              return;
            }
            tr(
              (this._usePgNative ? r.native : r).Client.prototype,
              "query",
              function (t) {
                return function (n, r, i) {
                  var o = e().getScope(),
                    s = null == o ? void 0 : o.getSpan(),
                    a =
                      null == s
                        ? void 0
                        : s.startChild({
                            description: "string" == typeof n ? n : n.text,
                            op: "db",
                          });
                  if ("function" == typeof i)
                    return t.call(this, n, r, function (t, e) {
                      null == a || a.finish(), i(t, e);
                    });
                  if ("function" == typeof r)
                    return t.call(this, n, function (t, e) {
                      null == a || a.finish(), r(t, e);
                    });
                  var u = void 0 !== r ? t.call(this, n, r) : t.call(this, n);
                  return X(u)
                    ? u.then(function (t) {
                        return null == a || a.finish(), t;
                      })
                    : (null == a || a.finish(), u);
                };
              }
            );
          }),
          (t.id = "Postgres"),
          t
        );
      })(),
      nA = (function () {
        function t() {
          this.name = t.id;
        }
        return (
          (t.prototype.setupOnce = function (t, e) {
            var n = k("mysql/lib/Connection.js");
            if (!n) {
              nb &&
                a.error(
                  "Mysql Integration was unable to require `mysql` package."
                );
              return;
            }
            tr(n, "createQuery", function (t) {
              return function (n, r, i) {
                var o = e().getScope(),
                  s = null == o ? void 0 : o.getSpan(),
                  a =
                    null == s
                      ? void 0
                      : s.startChild({
                          description: "string" == typeof n ? n : n.sql,
                          op: "db",
                        });
                return "function" == typeof i
                  ? t.call(this, n, r, function (t, e, n) {
                      null == a || a.finish(), i(t, e, n);
                    })
                  : "function" == typeof r
                  ? t.call(this, n, function (t, e, n) {
                      null == a || a.finish(), r(t, e, n);
                    })
                  : t.call(this, n, r, i);
              };
            });
          }),
          (t.id = "Mysql"),
          t
        );
      })(),
      nj = [
        "aggregate",
        "bulkWrite",
        "countDocuments",
        "createIndex",
        "createIndexes",
        "deleteMany",
        "deleteOne",
        "distinct",
        "drop",
        "dropIndex",
        "dropIndexes",
        "estimatedDocumentCount",
        "find",
        "findOne",
        "findOneAndDelete",
        "findOneAndReplace",
        "findOneAndUpdate",
        "indexes",
        "indexExists",
        "indexInformation",
        "initializeOrderedBulkOp",
        "insertMany",
        "insertOne",
        "isCapped",
        "mapReduce",
        "options",
        "parallelCollectionScan",
        "rename",
        "replaceOne",
        "stats",
        "updateMany",
        "updateOne",
      ],
      nN = {
        bulkWrite: ["operations"],
        countDocuments: ["query"],
        createIndex: ["fieldOrSpec"],
        createIndexes: ["indexSpecs"],
        deleteMany: ["filter"],
        deleteOne: ["filter"],
        distinct: ["key", "query"],
        dropIndex: ["indexName"],
        find: ["query"],
        findOne: ["query"],
        findOneAndDelete: ["filter"],
        findOneAndReplace: ["filter", "replacement"],
        findOneAndUpdate: ["filter", "update"],
        indexExists: ["indexes"],
        insertMany: ["docs"],
        insertOne: ["doc"],
        mapReduce: ["map", "reduce"],
        rename: ["newName"],
        replaceOne: ["filter", "doc"],
        updateMany: ["filter", "update"],
        updateOne: ["filter", "update"],
      },
      nL = (function () {
        function t(e) {
          void 0 === e && (e = {}),
            (this.name = t.id),
            (this._operations = Array.isArray(e.operations)
              ? e.operations
              : nj),
            (this._describeOperations =
              !("describeOperations" in e) || e.describeOperations),
            (this._useMongoose = !!e.useMongoose);
        }
        return (
          (t.prototype.setupOnce = function (t, e) {
            var n = this._useMongoose ? "mongoose" : "mongodb",
              r = k(n);
            if (!r) {
              nb &&
                a.error(
                  "Mongo Integration was unable to require `" + n + "` package."
                );
              return;
            }
            this._instrumentOperations(r.Collection, this._operations, e);
          }),
          (t.prototype._instrumentOperations = function (t, e, n) {
            var r = this;
            e.forEach(function (e) {
              return r._patchOperation(t, e, n);
            });
          }),
          (t.prototype._patchOperation = function (t, e, n) {
            if (e in t.prototype) {
              var r = this._getSpanContextFromOperationArguments.bind(this);
              tr(t.prototype, e, function (t) {
                return function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  var s = i[i.length - 1],
                    a = n().getScope(),
                    u = null == a ? void 0 : a.getSpan();
                  if (
                    "function" != typeof s ||
                    ("mapReduce" === e && 2 === i.length)
                  ) {
                    var c = null == u ? void 0 : u.startChild(r(this, e, i)),
                      l = t.call.apply(t, x([this], i));
                    return X(l)
                      ? l.then(function (t) {
                          return null == c || c.finish(), t;
                        })
                      : (null == c || c.finish(), l);
                  }
                  var d =
                    null == u
                      ? void 0
                      : u.startChild(r(this, e, i.slice(0, -1)));
                  return t.call.apply(
                    t,
                    x([this], i.slice(0, -1), [
                      function (t, e) {
                        null == d || d.finish(), s(t, e);
                      },
                    ])
                  );
                };
              });
            }
          }),
          (t.prototype._getSpanContextFromOperationArguments = function (
            t,
            e,
            n
          ) {
            var r = {
                collectionName: t.collectionName,
                dbName: t.dbName,
                namespace: t.namespace,
              },
              i = { op: "db", description: e, data: r },
              o = nN[e],
              s = Array.isArray(this._describeOperations)
                ? this._describeOperations.includes(e)
                : this._describeOperations;
            if (!o || !s) return i;
            try {
              if ("mapReduce" === e) {
                var a = S(n, 2),
                  u = a[0],
                  c = a[1];
                (r[o[0]] = "string" == typeof u ? u : u.name || "<anonymous>"),
                  (r[o[1]] =
                    "string" == typeof c ? c : c.name || "<anonymous>");
              } else
                for (var l = 0; l < o.length; l++)
                  r[o[l]] = JSON.stringify(n[l]);
            } catch (t) {}
            return i;
          }),
          (t.id = "Mongo"),
          t
        );
      })(),
      nF = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"),
      nU = P(),
      nH = function (t, e, n) {
        var r;
        return function (i) {
          e.value >= 0 &&
            (i || n) &&
            ((e.delta = e.value - (r || 0)),
            (e.delta || void 0 === r) && ((r = e.value), t(e)));
        };
      },
      nB = function (t, e) {
        return {
          name: t,
          value: null != e ? e : -1,
          delta: 0,
          entries: [],
          id:
            "v2-" +
            Date.now() +
            "-" +
            (Math.floor(Math.random() * (9e12 - 1)) + 1e12),
        };
      },
      nz = function (t, e) {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(t)) {
            if ("first-input" === t && !("PerformanceEventTiming" in self))
              return;
            var n = new PerformanceObserver(function (t) {
              return t.getEntries().map(e);
            });
            return n.observe({ type: t, buffered: !0 }), n;
          }
        } catch (t) {}
      },
      nK = function (t, e) {
        var n = function (r) {
          ("pagehide" === r.type ||
            "hidden" === P().document.visibilityState) &&
            (t(r),
            e &&
              (removeEventListener("visibilitychange", n, !0),
              removeEventListener("pagehide", n, !0)));
        };
        addEventListener("visibilitychange", n, !0),
          addEventListener("pagehide", n, !0);
      },
      nQ = function (t, e) {
        var n,
          r = nB("CLS", 0),
          i = 0,
          o = [],
          s = function (t) {
            if (t && !t.hadRecentInput) {
              var e = o[0],
                s = o[o.length - 1];
              i &&
              0 !== o.length &&
              t.startTime - s.startTime < 1e3 &&
              t.startTime - e.startTime < 5e3
                ? ((i += t.value), o.push(t))
                : ((i = t.value), (o = [t])),
                i > r.value && ((r.value = i), (r.entries = o), n && n());
            }
          },
          a = nz("layout-shift", s);
        a &&
          ((n = nH(t, r, e)),
          nK(function () {
            a.takeRecords().map(s), n(!0);
          }));
      },
      nW = -1,
      nY = function () {
        nK(function (t) {
          nW = t.timeStamp;
        }, !0);
      },
      nG = function () {
        return (
          nW < 0 &&
            ((nW = "hidden" === P().document.visibilityState ? 0 : 1 / 0),
            nY()),
          {
            get firstHiddenTime() {
              return nW;
            },
          }
        );
      },
      n$ = function (t, e) {
        var n,
          r = nG(),
          i = nB("FID"),
          o = function (t) {
            n &&
              t.startTime < r.firstHiddenTime &&
              ((i.value = t.processingStart - t.startTime),
              i.entries.push(t),
              n(!0));
          },
          s = nz("first-input", o);
        s &&
          ((n = nH(t, i, e)),
          nK(function () {
            s.takeRecords().map(o), s.disconnect();
          }, !0));
      },
      nX = {},
      nJ = function (t, e) {
        var n,
          r = nG(),
          i = nB("LCP"),
          o = function (t) {
            var e = t.startTime;
            e < r.firstHiddenTime && ((i.value = e), i.entries.push(t)),
              n && n();
          },
          s = nz("largest-contentful-paint", o);
        if (s) {
          n = nH(t, i, e);
          var a = function () {
            nX[i.id] ||
              (s.takeRecords().map(o), s.disconnect(), (nX[i.id] = !0), n(!0));
          };
          ["keydown", "click"].forEach(function (t) {
            addEventListener(t, a, { once: !0, capture: !0 });
          }),
            nK(a, !0);
        }
      },
      nV = P(),
      nZ = (function () {
        function t(t) {
          void 0 === t && (t = !1),
            (this._reportAllChanges = t),
            (this._measurements = {}),
            (this._performanceCursor = 0),
            !T() &&
              nV &&
              nV.performance &&
              nV.document &&
              (nV.performance.mark &&
                nV.performance.mark("sentry-tracing-init"),
              this._trackCLS(),
              this._trackLCP(),
              this._trackFID());
        }
        return (
          (t.prototype.addPerformanceEntries = function (t) {
            var e,
              n,
              r = this;
            if (nV && nV.performance && nV.performance.getEntries && U) {
              nb &&
                a.log(
                  "[Tracing] Adding & adjusting spans using Performance API"
                );
              var i = nw(U);
              if (
                (nV.performance
                  .getEntries()
                  .slice(this._performanceCursor)
                  .forEach(function (o) {
                    var s = nw(o.startTime),
                      u = nw(o.duration);
                    if ("navigation" !== t.op || !(i + s < t.startTimestamp))
                      switch (o.entryType) {
                        case "navigation":
                          (c = t),
                            (l = o),
                            (d = i),
                            [
                              "unloadEvent",
                              "redirect",
                              "domContentLoadedEvent",
                              "loadEvent",
                              "connect",
                            ].forEach(function (t) {
                              n0(c, l, t, d);
                            }),
                            n0(
                              c,
                              l,
                              "secureConnection",
                              d,
                              "TLS/SSL",
                              "connectEnd"
                            ),
                            n0(c, l, "fetch", d, "cache", "domainLookupStart"),
                            n0(c, l, "domainLookup", d, "DNS"),
                            (p = c),
                            (f = l),
                            n1(p, {
                              op: "browser",
                              description: "request",
                              startTimestamp: (h = d) + nw(f.requestStart),
                              endTimestamp: h + nw(f.responseEnd),
                            }),
                            n1(p, {
                              op: "browser",
                              description: "response",
                              startTimestamp: h + nw(f.responseStart),
                              endTimestamp: h + nw(f.responseEnd),
                            }),
                            (e = i + nw(o.responseStart)),
                            (n = i + nw(o.requestStart));
                          break;
                        case "mark":
                        case "paint":
                        case "measure":
                          var c,
                            l,
                            d,
                            p,
                            f,
                            h,
                            v,
                            m,
                            y,
                            g,
                            _,
                            b =
                              ((v = t),
                              (m = o),
                              (y = s),
                              (g = u),
                              (_ = i + y),
                              n1(v, {
                                description: m.name,
                                endTimestamp: _ + g,
                                op: m.entryType,
                                startTimestamp: _,
                              }),
                              _),
                            S = nG(),
                            x = o.startTime < S.firstHiddenTime;
                          "first-paint" === o.name &&
                            x &&
                            (nb && a.log("[Measurements] Adding FP"),
                            (r._measurements.fp = { value: o.startTime }),
                            (r._measurements["mark.fp"] = { value: b })),
                            "first-contentful-paint" === o.name &&
                              x &&
                              (nb && a.log("[Measurements] Adding FCP"),
                              (r._measurements.fcp = { value: o.startTime }),
                              (r._measurements["mark.fcp"] = { value: b }));
                          break;
                        case "resource":
                          var w = o.name.replace(nV.location.origin, ""),
                            E = t,
                            T = o,
                            O = w,
                            k = s,
                            C = u,
                            P = i;
                          if (
                            "xmlhttprequest" !== T.initiatorType &&
                            "fetch" !== T.initiatorType
                          ) {
                            var R = {};
                            "transferSize" in T &&
                              (R["Transfer Size"] = T.transferSize),
                              "encodedBodySize" in T &&
                                (R["Encoded Body Size"] = T.encodedBodySize),
                              "decodedBodySize" in T &&
                                (R["Decoded Body Size"] = T.decodedBodySize);
                            var q = P + k;
                            n1(E, {
                              description: O,
                              endTimestamp: q + C,
                              op: T.initiatorType
                                ? "resource." + T.initiatorType
                                : "resource",
                              startTimestamp: q,
                              data: R,
                            });
                          }
                      }
                  }),
                (this._performanceCursor = Math.max(
                  performance.getEntries().length - 1,
                  0
                )),
                this._trackNavigator(t),
                "pageload" === t.op)
              ) {
                var o,
                  s,
                  u,
                  c = nw(U);
                "number" == typeof e &&
                  (nb && a.log("[Measurements] Adding TTFB"),
                  (this._measurements.ttfb = {
                    value: (e - t.startTimestamp) * 1e3,
                  }),
                  "number" == typeof n &&
                    n <= e &&
                    (this._measurements["ttfb.requestTime"] = {
                      value: (e - n) * 1e3,
                    })),
                  ["fcp", "fp", "lcp"].forEach(function (e) {
                    if (r._measurements[e] && !(c >= t.startTimestamp)) {
                      var n = r._measurements[e].value,
                        i = Math.abs((c + nw(n) - t.startTimestamp) * 1e3),
                        o = i - n;
                      nb &&
                        a.log(
                          "[Measurements] Normalized " +
                            e +
                            " from " +
                            n +
                            " to " +
                            i +
                            " (" +
                            o +
                            ")"
                        ),
                        (r._measurements[e].value = i);
                    }
                  }),
                  this._measurements["mark.fid"] &&
                    this._measurements.fid &&
                    n1(t, {
                      description: "first input delay",
                      endTimestamp:
                        this._measurements["mark.fid"].value +
                        nw(this._measurements.fid.value),
                      op: "web.vitals",
                      startTimestamp: this._measurements["mark.fid"].value,
                    }),
                  "fcp" in this._measurements || delete this._measurements.cls,
                  t.setMeasurements(this._measurements),
                  (o = t),
                  (s = this._lcpEntry),
                  (u = this._clsEntry),
                  s &&
                    (nb && a.log("[Measurements] Adding LCP Data"),
                    s.element && o.setTag("lcp.element", Z(s.element)),
                    s.id && o.setTag("lcp.id", s.id),
                    s.url && o.setTag("lcp.url", s.url.trim().slice(0, 200)),
                    o.setTag("lcp.size", s.size)),
                  u &&
                    u.sources &&
                    (nb && a.log("[Measurements] Adding CLS Data"),
                    u.sources.forEach(function (t, e) {
                      return o.setTag("cls.source." + (e + 1), Z(t.node));
                    })),
                  t.setTag("sentry_reportAllChanges", this._reportAllChanges);
              }
            }
          }),
          (t.prototype._trackNavigator = function (t) {
            var e = nV.navigator;
            if (e) {
              var n = e.connection;
              n &&
                (n.effectiveType &&
                  t.setTag("effectiveConnectionType", n.effectiveType),
                n.type && t.setTag("connectionType", n.type),
                n3(n.rtt) &&
                  (this._measurements["connection.rtt"] = { value: n.rtt }),
                n3(n.downlink) &&
                  (this._measurements["connection.downlink"] = {
                    value: n.downlink,
                  })),
                n3(e.deviceMemory) &&
                  t.setTag("deviceMemory", String(e.deviceMemory)),
                n3(e.hardwareConcurrency) &&
                  t.setTag(
                    "hardwareConcurrency",
                    String(e.hardwareConcurrency)
                  );
            }
          }),
          (t.prototype._trackCLS = function () {
            var t = this;
            nQ(function (e) {
              var n = e.entries.pop();
              n &&
                (nb && a.log("[Measurements] Adding CLS"),
                (t._measurements.cls = { value: e.value }),
                (t._clsEntry = n));
            });
          }),
          (t.prototype._trackLCP = function () {
            var t = this;
            nJ(function (e) {
              var n = e.entries.pop();
              if (n) {
                var r = nw(U),
                  i = nw(n.startTime);
                nb && a.log("[Measurements] Adding LCP"),
                  (t._measurements.lcp = { value: e.value }),
                  (t._measurements["mark.lcp"] = { value: r + i }),
                  (t._lcpEntry = n);
              }
            }, this._reportAllChanges);
          }),
          (t.prototype._trackFID = function () {
            var t = this;
            n$(function (e) {
              var n = e.entries.pop();
              if (n) {
                var r = nw(U),
                  i = nw(n.startTime);
                nb && a.log("[Measurements] Adding FID"),
                  (t._measurements.fid = { value: e.value }),
                  (t._measurements["mark.fid"] = { value: r + i });
              }
            });
          }),
          t
        );
      })();
    function n0(t, e, n, r, i, o) {
      var s = o ? e[o] : e[n + "End"],
        a = e[n + "Start"];
      a &&
        s &&
        n1(t, {
          op: "browser",
          description: null != i ? i : n,
          startTimestamp: r + nw(a),
          endTimestamp: r + nw(s),
        });
    }
    function n1(t, e) {
      var n = e.startTimestamp,
        r = (function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              0 > e.indexOf(r) &&
              (n[r] = t[r]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var i = 0, r = Object.getOwnPropertySymbols(t);
              i < r.length;
              i++
            )
              0 > e.indexOf(r[i]) &&
                Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                (n[r[i]] = t[r[i]]);
          return n;
        })(e, ["startTimestamp"]);
      return (
        n && t.startTimestamp > n && (t.startTimestamp = n),
        t.startChild(_({ startTimestamp: n }, r))
      );
    }
    function n3(t) {
      return "number" == typeof t && isFinite(t);
    }
    var n2 = {
        traceFetch: !0,
        traceXHR: !0,
        tracingOrigins: ["localhost", /^\//],
      },
      n4 = P(),
      n6 = _(
        {
          idleTimeout: 1e3,
          markBackgroundTransactions: !0,
          maxTransactionDuration: 600,
          routingInstrumentation: function (t, e, n) {
            if (
              (void 0 === e && (e = !0),
              void 0 === n && (n = !0),
              !n4 || !n4.location)
            ) {
              nb &&
                a.warn(
                  "Could not initialize routing instrumentation due to invalid location"
                );
              return;
            }
            var r,
              i = n4.location.href;
            e && (r = t({ name: n4.location.pathname, op: "pageload" })),
              n &&
                tY("history", function (e) {
                  var n = e.to,
                    o = e.from;
                  if (void 0 === o && i && -1 !== i.indexOf(n)) {
                    i = void 0;
                    return;
                  }
                  o !== n &&
                    ((i = void 0),
                    r &&
                      (nb &&
                        a.log(
                          "[Tracing] Finishing current transaction with op: " +
                            r.op
                        ),
                      r.finish()),
                    (r = t({ name: n4.location.pathname, op: "navigation" })));
                });
          },
          startTransactionOnLocationChange: !0,
          startTransactionOnPageLoad: !0,
        },
        n2
      ),
      n5 = (function () {
        function t(e) {
          (this.name = t.id), (this._configuredIdleTimeout = void 0);
          var n = n2.tracingOrigins;
          e &&
            ((this._configuredIdleTimeout = e.idleTimeout),
            e.tracingOrigins &&
            Array.isArray(e.tracingOrigins) &&
            0 !== e.tracingOrigins.length
              ? (n = e.tracingOrigins)
              : nb && (this._emitOptionsWarning = !0)),
            (this.options = _(_(_({}, n6), e), { tracingOrigins: n }));
          var r = this.options._metricOptions;
          this._metrics = new nZ(r && r._reportAllChanges);
        }
        return (
          (t.prototype.setupOnce = function (t, e) {
            var n,
              r,
              i,
              o,
              s,
              u,
              c,
              l,
              d,
              p = this;
            (this._getCurrentHub = e),
              this._emitOptionsWarning &&
                (nb &&
                  a.warn(
                    "[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."
                  ),
                nb &&
                  a.warn(
                    "[Tracing] We added a reasonable default for you: " +
                      n2.tracingOrigins
                  ));
            var f = this.options,
              h = f.routingInstrumentation,
              v = f.startTransactionOnLocationChange,
              m = f.startTransactionOnPageLoad,
              y = f.markBackgroundTransactions,
              g = f.traceFetch,
              b = f.traceXHR,
              S = f.tracingOrigins,
              w = f.shouldCreateSpanForRequest;
            h(
              function (t) {
                return p._createRouteTransaction(t);
              },
              m,
              v
            ),
              y &&
                (nU && nU.document
                  ? nU.document.addEventListener(
                      "visibilitychange",
                      function () {
                        var t = nx();
                        if (nU.document.hidden && t) {
                          var e = "cancelled";
                          nb &&
                            a.log(
                              "[Tracing] Transaction: " +
                                e +
                                " -> since tab moved to the background, op: " +
                                t.op
                            ),
                            t.status || t.setStatus(e),
                            t.setTag("visibilitychange", "document.hidden"),
                            t.setTag(nT, "documentHidden"),
                            t.finish();
                        }
                      }
                    )
                  : nb &&
                    a.warn(
                      "[Tracing] Could not set up background tab detection due to lack of global document"
                    )),
              (r = (n = _(_({}, n2), {
                traceFetch: g,
                traceXHR: b,
                tracingOrigins: S,
                shouldCreateSpanForRequest: w,
              })).traceFetch),
              (i = n.traceXHR),
              (o = n.tracingOrigins),
              (s = n.shouldCreateSpanForRequest),
              (u = {}),
              (l = c =
                function (t) {
                  return (
                    u[t] ||
                      (u[t] =
                        o.some(function (e) {
                          return tn(t, e);
                        }) && !tn(t, "sentry_key")),
                    u[t]
                  );
                }),
              "function" == typeof s &&
                (l = function (t) {
                  return c(t) && s(t);
                }),
              (d = {}),
              r &&
                tY("fetch", function (t) {
                  !(function (t, e, n) {
                    if (nS() && t.fetchData && e(t.fetchData.url)) {
                      if (t.endTimestamp) {
                        var r = t.fetchData.__span;
                        if (!r) return;
                        var i = n[r];
                        i &&
                          (t.response
                            ? i.setHttpStatus(t.response.status)
                            : t.error && i.setStatus("internal_error"),
                          i.finish(),
                          delete n[r]);
                        return;
                      }
                      var o = nx();
                      if (o) {
                        var i = o.startChild({
                          data: _(_({}, t.fetchData), { type: "fetch" }),
                          description:
                            t.fetchData.method + " " + t.fetchData.url,
                          op: "http.client",
                        });
                        (t.fetchData.__span = i.spanId), (n[i.spanId] = i);
                        var s = (t.args[0] = t.args[0]),
                          a = (t.args[1] = t.args[1] || {}),
                          u = a.headers;
                        V(s, Request) && (u = s.headers),
                          u
                            ? "function" == typeof u.append
                              ? u.append("sentry-trace", i.toTraceparent())
                              : (u = Array.isArray(u)
                                  ? x(u, [["sentry-trace", i.toTraceparent()]])
                                  : _(_({}, u), {
                                      "sentry-trace": i.toTraceparent(),
                                    }))
                            : (u = { "sentry-trace": i.toTraceparent() }),
                          (a.headers = u);
                      }
                    }
                  })(t, l, d);
                }),
              i &&
                tY("xhr", function (t) {
                  !(function (t, e, n) {
                    if (
                      nS() &&
                      (!t.xhr || !t.xhr.__sentry_own_request__) &&
                      t.xhr &&
                      t.xhr.__sentry_xhr__ &&
                      e(t.xhr.__sentry_xhr__.url)
                    ) {
                      var r = t.xhr.__sentry_xhr__;
                      if (t.endTimestamp) {
                        var i = t.xhr.__sentry_xhr_span_id__;
                        if (!i) return;
                        var o = n[i];
                        o &&
                          (o.setHttpStatus(r.status_code),
                          o.finish(),
                          delete n[i]);
                        return;
                      }
                      var s = nx();
                      if (s) {
                        var o = s.startChild({
                          data: _(_({}, r.data), {
                            type: "xhr",
                            method: r.method,
                            url: r.url,
                          }),
                          description: r.method + " " + r.url,
                          op: "http.client",
                        });
                        if (
                          ((t.xhr.__sentry_xhr_span_id__ = o.spanId),
                          (n[t.xhr.__sentry_xhr_span_id__] = o),
                          t.xhr.setRequestHeader)
                        )
                          try {
                            t.xhr.setRequestHeader(
                              "sentry-trace",
                              o.toTraceparent()
                            );
                          } catch (t) {}
                      }
                    }
                  })(t, l, d);
                });
          }),
          (t.prototype._createRouteTransaction = function (t) {
            var e,
              n,
              r,
              i,
              o = this;
            if (!this._getCurrentHub) {
              nb &&
                a.warn(
                  "[Tracing] Did not create " +
                    t.op +
                    " transaction because _getCurrentHub is invalid."
                );
              return;
            }
            var s = this.options,
              u = s.beforeNavigate,
              c = s.idleTimeout,
              l = s.maxTransactionDuration,
              d =
                "pageload" === t.op
                  ? (function () {
                      var t,
                        e = (t = P().document.querySelector(
                          "meta[name=sentry-trace]"
                        ))
                          ? t.getAttribute("content")
                          : null;
                      if (e) {
                        var n = e.match(nF);
                        if (n) {
                          var r = void 0;
                          return (
                            "1" === n[3] ? (r = !0) : "0" === n[3] && (r = !1),
                            {
                              traceId: n[1],
                              parentSampled: r,
                              parentSpanId: n[2],
                            }
                          );
                        }
                        return;
                      }
                    })()
                  : void 0,
              p = _(_(_({}, t), d), { trimEnd: !0 }),
              f = "function" == typeof u ? u(p) : p,
              h = void 0 === f ? _(_({}, p), { sampled: !1 }) : f;
            !1 === h.sampled &&
              nb &&
              a.log(
                "[Tracing] Will not send " +
                  h.op +
                  " transaction because of beforeNavigate."
              ),
              nb &&
                a.log("[Tracing] Starting " + h.op + " transaction on scope");
            var v = this._getCurrentHub(),
              m =
                ((e = { location: P().location }),
                (r = ((n = v.getClient()) && n.getOptions()) || {}),
                (i = nq(
                  (i = new nP(h, v, c, !0)),
                  r,
                  _(
                    { parentSampled: h.parentSampled, transactionContext: h },
                    e
                  )
                )).sampled &&
                  i.initSpanRecorder(r._experiments && r._experiments.maxSpans),
                i);
            return (
              m.registerBeforeFinishCallback(function (t, e) {
                var n, r, i, s;
                o._metrics.addPerformanceEntries(t),
                  (n = 1e3 * l),
                  (r = t),
                  (s = (i = e) - r.startTimestamp),
                  i &&
                    (s > n || s < 0) &&
                    (r.setStatus("deadline_exceeded"),
                    r.setTag("maxTransactionDurationExceeded", "true"));
              }),
              m.setTag("idleTimeout", this._configuredIdleTimeout),
              m
            );
          }),
          (t.id = "BrowserTracing"),
          t
        );
      })();
    t.s(
      [
        "BrowserTracing",
        () => n5,
        "Express",
        () => nI,
        "Mongo",
        () => nL,
        "Mysql",
        () => nA,
        "Postgres",
        () => nM,
      ],
      9790
    );
    var n9 = t.i(9790);
    (i = tk()).__SENTRY__ &&
      ((i.__SENTRY__.extensions = i.__SENTRY__.extensions || {}),
      i.__SENTRY__.extensions.startTransaction ||
        (i.__SENTRY__.extensions.startTransaction = function (t, e) {
          var n = this.getClient(),
            r = (n && n.getOptions()) || {},
            i = new nk(t, this);
          return (
            (i = nq(
              i,
              r,
              _({ parentSampled: t.parentSampled, transactionContext: t }, e)
            )).sampled &&
              i.initSpanRecorder(r._experiments && r._experiments.maxSpans),
            i
          );
        }),
      i.__SENTRY__.extensions.traceHeaders ||
        (i.__SENTRY__.extensions.traceHeaders = function () {
          var t = this.getScope();
          if (t) {
            var e = t.getSpan();
            if (e) return { "sentry-trace": e.toTraceparent() };
          }
          return {};
        })),
      T() &&
        (function () {
          var t = tk();
          if (t.__SENTRY__) {
            var e = {
                mongodb: function () {
                  return new (O(module, "./integrations/node/mongo").Mongo)();
                },
                mongoose: function () {
                  return new (O(module, "./integrations/node/mongo").Mongo)({
                    mongoose: !0,
                  });
                },
                mysql: function () {
                  return new (O(module, "./integrations/node/mysql").Mysql)();
                },
                pg: function () {
                  return new (O(
                    module,
                    "./integrations/node/postgres"
                  ).Postgres)();
                },
              },
              n = Object.keys(e)
                .filter(function (t) {
                  return !!k(t);
                })
                .map(function (t) {
                  try {
                    return e[t]();
                  } catch (t) {
                    return;
                  }
                })
                .filter(function (t) {
                  return t;
                });
            n.length > 0 &&
              (t.__SENTRY__.integrations = x(
                t.__SENTRY__.integrations || [],
                n
              ));
          }
        })(),
      tY("error", nE),
      tY("unhandledrejection", nE);
    var n7 = t.i(20614),
      n8 = t.i(33944),
      rt = "undefined" == typeof window;
    function re() {}
    function rn(t) {
      return Array.isArray(t) ? t : [t];
    }
    function rr(t, e, n) {
      return rp(t)
        ? "function" == typeof e
          ? (0, n8.default)({}, n, { queryKey: t, queryFn: e })
          : (0, n8.default)({}, e, { queryKey: t })
        : t;
    }
    function ri(t, e, n) {
      return rp(t)
        ? [(0, n8.default)({}, e, { queryKey: t }), n]
        : [t || {}, e];
    }
    function ro(t, e) {
      var n = t.active,
        r = t.exact,
        i = t.fetching,
        o = t.inactive,
        s = t.predicate,
        a = t.queryKey,
        u = t.stale;
      if (rp(a)) {
        if (r) {
          if (e.queryHash !== ra(a, e.options)) return !1;
        } else if (!rc(e.queryKey, a)) return !1;
      }
      var c =
        (!0 === n && !0 === o) || (null == n && null == o)
          ? "all"
          : !1 === n && !1 === o
          ? "none"
          : (null != n ? n : !o)
          ? "active"
          : "inactive";
      if ("none" === c) return !1;
      if ("all" !== c) {
        var l = e.isActive();
        if (("active" === c && !l) || ("inactive" === c && l)) return !1;
      }
      return (
        ("boolean" != typeof u || e.isStale() === u) &&
        ("boolean" != typeof i || e.isFetching() === i) &&
        (!s || !!s(e))
      );
    }
    function rs(t, e) {
      var n = t.exact,
        r = t.fetching,
        i = t.predicate,
        o = t.mutationKey;
      if (rp(o)) {
        if (!e.options.mutationKey) return !1;
        if (n) {
          if (ru(e.options.mutationKey) !== ru(o)) return !1;
        } else if (!rc(e.options.mutationKey, o)) return !1;
      }
      return (
        ("boolean" != typeof r || ("loading" === e.state.status) === r) &&
        (!i || !!i(e))
      );
    }
    function ra(t, e) {
      return ((null == e ? void 0 : e.queryKeyHashFn) || ru)(t);
    }
    function ru(t) {
      return JSON.stringify(rn(t), function (t, e) {
        return rl(e)
          ? Object.keys(e)
              .sort()
              .reduce(function (t, n) {
                return (t[n] = e[n]), t;
              }, {})
          : e;
      });
    }
    function rc(t, e) {
      return (function t(e, n) {
        return (
          e === n ||
          (typeof e == typeof n &&
            !!e &&
            !!n &&
            "object" == typeof e &&
            "object" == typeof n &&
            !Object.keys(n).some(function (r) {
              return !t(e[r], n[r]);
            }))
        );
      })(rn(t), rn(e));
    }
    function rl(t) {
      if (!rd(t)) return !1;
      var e = t.constructor;
      if (void 0 === e) return !0;
      var n = e.prototype;
      return !!rd(n) && !!n.hasOwnProperty("isPrototypeOf");
    }
    function rd(t) {
      return "[object Object]" === Object.prototype.toString.call(t);
    }
    function rp(t) {
      return "string" == typeof t || Array.isArray(t);
    }
    function rf(t) {
      Promise.resolve()
        .then(t)
        .catch(function (t) {
          return setTimeout(function () {
            throw t;
          });
        });
    }
    function rh() {
      if ("function" == typeof AbortController) return new AbortController();
    }
    var rv = new ((function () {
        function t() {
          (this.queue = []),
            (this.transactions = 0),
            (this.notifyFn = function (t) {
              t();
            }),
            (this.batchNotifyFn = function (t) {
              t();
            });
        }
        var e = t.prototype;
        return (
          (e.batch = function (t) {
            var e;
            this.transactions++;
            try {
              e = t();
            } finally {
              this.transactions--, this.transactions || this.flush();
            }
            return e;
          }),
          (e.schedule = function (t) {
            var e = this;
            this.transactions
              ? this.queue.push(t)
              : rf(function () {
                  e.notifyFn(t);
                });
          }),
          (e.batchCalls = function (t) {
            var e = this;
            return function () {
              for (var n = arguments.length, r = Array(n), i = 0; i < n; i++)
                r[i] = arguments[i];
              e.schedule(function () {
                t.apply(void 0, r);
              });
            };
          }),
          (e.flush = function () {
            var t = this,
              e = this.queue;
            (this.queue = []),
              e.length &&
                rf(function () {
                  t.batchNotifyFn(function () {
                    e.forEach(function (e) {
                      t.notifyFn(e);
                    });
                  });
                });
          }),
          (e.setNotifyFunction = function (t) {
            this.notifyFn = t;
          }),
          (e.setBatchNotifyFunction = function (t) {
            this.batchNotifyFn = t;
          }),
          t
        );
      })())(),
      rm = t.i(11368).default.unstable_batchedUpdates;
    rv.setBatchNotifyFunction(rm);
    var ry = console;
    (ry = console), t.s([], 98746);
    var rg = t.i(93093),
      r_ = (function () {
        function t() {
          this.listeners = [];
        }
        var e = t.prototype;
        return (
          (e.subscribe = function (t) {
            var e = this,
              n = t || function () {};
            return (
              this.listeners.push(n),
              this.onSubscribe(),
              function () {
                (e.listeners = e.listeners.filter(function (t) {
                  return t !== n;
                })),
                  e.onUnsubscribe();
              }
            );
          }),
          (e.hasListeners = function () {
            return this.listeners.length > 0;
          }),
          (e.onSubscribe = function () {}),
          (e.onUnsubscribe = function () {}),
          t
        );
      })(),
      rb = new ((function (t) {
        function e() {
          var e;
          return (
            ((e = t.call(this) || this).setup = function (t) {
              var e;
              if (!rt && (null == (e = window) ? void 0 : e.addEventListener)) {
                var n = function () {
                  return t();
                };
                return (
                  window.addEventListener("visibilitychange", n, !1),
                  window.addEventListener("focus", n, !1),
                  function () {
                    window.removeEventListener("visibilitychange", n),
                      window.removeEventListener("focus", n);
                  }
                );
              }
            }),
            e
          );
        }
        (0, rg.default)(e, t);
        var n = e.prototype;
        return (
          (n.onSubscribe = function () {
            this.cleanup || this.setEventListener(this.setup);
          }),
          (n.onUnsubscribe = function () {
            if (!this.hasListeners()) {
              var t;
              null == (t = this.cleanup) || t.call(this),
                (this.cleanup = void 0);
            }
          }),
          (n.setEventListener = function (t) {
            var e,
              n = this;
            (this.setup = t),
              null == (e = this.cleanup) || e.call(this),
              (this.cleanup = t(function (t) {
                "boolean" == typeof t ? n.setFocused(t) : n.onFocus();
              }));
          }),
          (n.setFocused = function (t) {
            (this.focused = t), t && this.onFocus();
          }),
          (n.onFocus = function () {
            this.listeners.forEach(function (t) {
              t();
            });
          }),
          (n.isFocused = function () {
            return "boolean" == typeof this.focused
              ? this.focused
              : "undefined" == typeof document ||
                  [void 0, "visible", "prerender"].includes(
                    document.visibilityState
                  );
          }),
          e
        );
      })(r_))(),
      rS = new ((function (t) {
        function e() {
          var e;
          return (
            ((e = t.call(this) || this).setup = function (t) {
              var e;
              if (!rt && (null == (e = window) ? void 0 : e.addEventListener)) {
                var n = function () {
                  return t();
                };
                return (
                  window.addEventListener("online", n, !1),
                  window.addEventListener("offline", n, !1),
                  function () {
                    window.removeEventListener("online", n),
                      window.removeEventListener("offline", n);
                  }
                );
              }
            }),
            e
          );
        }
        (0, rg.default)(e, t);
        var n = e.prototype;
        return (
          (n.onSubscribe = function () {
            this.cleanup || this.setEventListener(this.setup);
          }),
          (n.onUnsubscribe = function () {
            if (!this.hasListeners()) {
              var t;
              null == (t = this.cleanup) || t.call(this),
                (this.cleanup = void 0);
            }
          }),
          (n.setEventListener = function (t) {
            var e,
              n = this;
            (this.setup = t),
              null == (e = this.cleanup) || e.call(this),
              (this.cleanup = t(function (t) {
                "boolean" == typeof t ? n.setOnline(t) : n.onOnline();
              }));
          }),
          (n.setOnline = function (t) {
            (this.online = t), t && this.onOnline();
          }),
          (n.onOnline = function () {
            this.listeners.forEach(function (t) {
              t();
            });
          }),
          (n.isOnline = function () {
            return "boolean" == typeof this.online
              ? this.online
              : "undefined" == typeof navigator ||
                  void 0 === navigator.onLine ||
                  navigator.onLine;
          }),
          e
        );
      })(r_))();
    function rx(t) {
      return Math.min(1e3 * Math.pow(2, t), 3e4);
    }
    function rw(t) {
      return "function" == typeof (null == t ? void 0 : t.cancel);
    }
    var rE = function (t) {
      (this.revert = null == t ? void 0 : t.revert),
        (this.silent = null == t ? void 0 : t.silent);
    };
    function rT(t) {
      return t instanceof rE;
    }
    var rO = function (t) {
        var e,
          n,
          r,
          i,
          o = this,
          s = !1;
        (this.abort = t.abort),
          (this.cancel = function (t) {
            return null == e ? void 0 : e(t);
          }),
          (this.cancelRetry = function () {
            s = !0;
          }),
          (this.continueRetry = function () {
            s = !1;
          }),
          (this.continue = function () {
            return null == n ? void 0 : n();
          }),
          (this.failureCount = 0),
          (this.isPaused = !1),
          (this.isResolved = !1),
          (this.isTransportCancelable = !1),
          (this.promise = new Promise(function (t, e) {
            (r = t), (i = e);
          }));
        var a = function (e) {
            o.isResolved ||
              ((o.isResolved = !0),
              null == t.onSuccess || t.onSuccess(e),
              null == n || n(),
              r(e));
          },
          u = function (e) {
            o.isResolved ||
              ((o.isResolved = !0),
              null == t.onError || t.onError(e),
              null == n || n(),
              i(e));
          };
        !(function r() {
          var i;
          if (!o.isResolved) {
            try {
              i = t.fn();
            } catch (t) {
              i = Promise.reject(t);
            }
            (e = function (t) {
              if (
                !o.isResolved &&
                (u(new rE(t)), null == o.abort || o.abort(), rw(i))
              )
                try {
                  i.cancel();
                } catch (t) {}
            }),
              (o.isTransportCancelable = rw(i)),
              Promise.resolve(i)
                .then(a)
                .catch(function (e) {
                  if (!o.isResolved) {
                    var i,
                      a,
                      c = null != (i = t.retry) ? i : 3,
                      l = null != (a = t.retryDelay) ? a : rx,
                      d = "function" == typeof l ? l(o.failureCount, e) : l,
                      p =
                        !0 === c ||
                        ("number" == typeof c && o.failureCount < c) ||
                        ("function" == typeof c && c(o.failureCount, e));
                    if (s || !p) return void u(e);
                    o.failureCount++,
                      null == t.onFail || t.onFail(o.failureCount, e),
                      new Promise(function (t) {
                        setTimeout(t, d);
                      })
                        .then(function () {
                          if (!rb.isFocused() || !rS.isOnline())
                            return new Promise(function (e) {
                              (n = e),
                                (o.isPaused = !0),
                                null == t.onPause || t.onPause();
                            }).then(function () {
                              (n = void 0),
                                (o.isPaused = !1),
                                null == t.onContinue || t.onContinue();
                            });
                        })
                        .then(function () {
                          s ? u(e) : r();
                        });
                  }
                });
          }
        })();
      },
      rk = (function () {
        function t(t) {
          (this.abortSignalConsumed = !1),
            (this.hadObservers = !1),
            (this.defaultOptions = t.defaultOptions),
            this.setOptions(t.options),
            (this.observers = []),
            (this.cache = t.cache),
            (this.queryKey = t.queryKey),
            (this.queryHash = t.queryHash),
            (this.initialState = t.state || this.getDefaultState(this.options)),
            (this.state = this.initialState),
            (this.meta = t.meta),
            this.scheduleGc();
        }
        var e = t.prototype;
        return (
          (e.setOptions = function (t) {
            var e;
            (this.options = (0, n8.default)({}, this.defaultOptions, t)),
              (this.meta = null == t ? void 0 : t.meta),
              (this.cacheTime = Math.max(
                this.cacheTime || 0,
                null != (e = this.options.cacheTime) ? e : 3e5
              ));
          }),
          (e.setDefaultOptions = function (t) {
            this.defaultOptions = t;
          }),
          (e.scheduleGc = function () {
            var t,
              e = this;
            this.clearGcTimeout(),
              "number" == typeof (t = this.cacheTime) &&
                t >= 0 &&
                t !== 1 / 0 &&
                (this.gcTimeout = setTimeout(function () {
                  e.optionalRemove();
                }, this.cacheTime));
          }),
          (e.clearGcTimeout = function () {
            this.gcTimeout &&
              (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
          }),
          (e.optionalRemove = function () {
            !this.observers.length &&
              (this.state.isFetching
                ? this.hadObservers && this.scheduleGc()
                : this.cache.remove(this));
          }),
          (e.setData = function (t, e) {
            var n,
              r,
              i = this.state.data,
              o = "function" == typeof t ? t(i) : t;
            return (
              (
                null == (n = (r = this.options).isDataEqual)
                  ? void 0
                  : n.call(r, i, o)
              )
                ? (o = i)
                : !1 !== this.options.structuralSharing &&
                  (o = (function t(e, n) {
                    if (e === n) return e;
                    var r = Array.isArray(e) && Array.isArray(n);
                    if (r || (rl(e) && rl(n))) {
                      for (
                        var i = r ? e.length : Object.keys(e).length,
                          o = r ? n : Object.keys(n),
                          s = o.length,
                          a = r ? [] : {},
                          u = 0,
                          c = 0;
                        c < s;
                        c++
                      ) {
                        var l = r ? c : o[c];
                        (a[l] = t(e[l], n[l])), a[l] === e[l] && u++;
                      }
                      return i === s && u === i ? e : a;
                    }
                    return n;
                  })(i, o)),
              this.dispatch({
                data: o,
                type: "success",
                dataUpdatedAt: null == e ? void 0 : e.updatedAt,
              }),
              o
            );
          }),
          (e.setState = function (t, e) {
            this.dispatch({ type: "setState", state: t, setStateOptions: e });
          }),
          (e.cancel = function (t) {
            var e,
              n = this.promise;
            return (
              null == (e = this.retryer) || e.cancel(t),
              n ? n.then(re).catch(re) : Promise.resolve()
            );
          }),
          (e.destroy = function () {
            this.clearGcTimeout(), this.cancel({ silent: !0 });
          }),
          (e.reset = function () {
            this.destroy(), this.setState(this.initialState);
          }),
          (e.isActive = function () {
            return this.observers.some(function (t) {
              return !1 !== t.options.enabled;
            });
          }),
          (e.isFetching = function () {
            return this.state.isFetching;
          }),
          (e.isStale = function () {
            return (
              this.state.isInvalidated ||
              !this.state.dataUpdatedAt ||
              this.observers.some(function (t) {
                return t.getCurrentResult().isStale;
              })
            );
          }),
          (e.isStaleByTime = function (t) {
            var e;
            return (
              void 0 === t && (t = 0),
              this.state.isInvalidated ||
                !this.state.dataUpdatedAt ||
                ((e = this.state.dataUpdatedAt),
                !Math.max(e + (t || 0) - Date.now(), 0))
            );
          }),
          (e.onFocus = function () {
            var t,
              e = this.observers.find(function (t) {
                return t.shouldFetchOnWindowFocus();
              });
            e && e.refetch(), null == (t = this.retryer) || t.continue();
          }),
          (e.onOnline = function () {
            var t,
              e = this.observers.find(function (t) {
                return t.shouldFetchOnReconnect();
              });
            e && e.refetch(), null == (t = this.retryer) || t.continue();
          }),
          (e.addObserver = function (t) {
            -1 === this.observers.indexOf(t) &&
              (this.observers.push(t),
              (this.hadObservers = !0),
              this.clearGcTimeout(),
              this.cache.notify({
                type: "observerAdded",
                query: this,
                observer: t,
              }));
          }),
          (e.removeObserver = function (t) {
            -1 !== this.observers.indexOf(t) &&
              ((this.observers = this.observers.filter(function (e) {
                return e !== t;
              })),
              this.observers.length ||
                (this.retryer &&
                  (this.retryer.isTransportCancelable ||
                  this.abortSignalConsumed
                    ? this.retryer.cancel({ revert: !0 })
                    : this.retryer.cancelRetry()),
                this.cacheTime ? this.scheduleGc() : this.cache.remove(this)),
              this.cache.notify({
                type: "observerRemoved",
                query: this,
                observer: t,
              }));
          }),
          (e.getObserversCount = function () {
            return this.observers.length;
          }),
          (e.invalidate = function () {
            this.state.isInvalidated || this.dispatch({ type: "invalidate" });
          }),
          (e.fetch = function (t, e) {
            var n,
              r,
              i,
              o,
              s,
              a,
              u = this;
            if (this.state.isFetching) {
              if (
                this.state.dataUpdatedAt &&
                (null == e ? void 0 : e.cancelRefetch)
              )
                this.cancel({ silent: !0 });
              else if (this.promise)
                return (
                  null == (n = this.retryer) || n.continueRetry(), this.promise
                );
            }
            if ((t && this.setOptions(t), !this.options.queryFn)) {
              var c = this.observers.find(function (t) {
                return t.options.queryFn;
              });
              c && this.setOptions(c.options);
            }
            var l = rn(this.queryKey),
              d = rh(),
              p = { queryKey: l, pageParam: void 0, meta: this.meta };
            Object.defineProperty(p, "signal", {
              enumerable: !0,
              get: function () {
                if (d) return (u.abortSignalConsumed = !0), d.signal;
              },
            });
            var f = {
              fetchOptions: e,
              options: this.options,
              queryKey: l,
              state: this.state,
              fetchFn: function () {
                return u.options.queryFn
                  ? ((u.abortSignalConsumed = !1), u.options.queryFn(p))
                  : Promise.reject("Missing queryFn");
              },
              meta: this.meta,
            };
            return (
              (null == (o = this.options.behavior) ? void 0 : o.onFetch) &&
                (null == (r = this.options.behavior) || r.onFetch(f)),
              (this.revertState = this.state),
              (this.state.isFetching &&
                this.state.fetchMeta ===
                  (null == (s = f.fetchOptions) ? void 0 : s.meta)) ||
                this.dispatch({
                  type: "fetch",
                  meta: null == (i = f.fetchOptions) ? void 0 : i.meta,
                }),
              (this.retryer = new rO({
                fn: f.fetchFn,
                abort: null == d || null == (a = d.abort) ? void 0 : a.bind(d),
                onSuccess: function (t) {
                  u.setData(t),
                    null == u.cache.config.onSuccess ||
                      u.cache.config.onSuccess(t, u),
                    0 === u.cacheTime && u.optionalRemove();
                },
                onError: function (t) {
                  (rT(t) && t.silent) ||
                    u.dispatch({ type: "error", error: t }),
                    rT(t) ||
                      (null == u.cache.config.onError ||
                        u.cache.config.onError(t, u),
                      ry.error(t)),
                    0 === u.cacheTime && u.optionalRemove();
                },
                onFail: function () {
                  u.dispatch({ type: "failed" });
                },
                onPause: function () {
                  u.dispatch({ type: "pause" });
                },
                onContinue: function () {
                  u.dispatch({ type: "continue" });
                },
                retry: f.options.retry,
                retryDelay: f.options.retryDelay,
              })),
              (this.promise = this.retryer.promise),
              this.promise
            );
          }),
          (e.dispatch = function (t) {
            var e = this;
            (this.state = this.reducer(this.state, t)),
              rv.batch(function () {
                e.observers.forEach(function (e) {
                  e.onQueryUpdate(t);
                }),
                  e.cache.notify({ query: e, type: "queryUpdated", action: t });
              });
          }),
          (e.getDefaultState = function (t) {
            var e =
                "function" == typeof t.initialData
                  ? t.initialData()
                  : t.initialData,
              n =
                void 0 !== t.initialData
                  ? "function" == typeof t.initialDataUpdatedAt
                    ? t.initialDataUpdatedAt()
                    : t.initialDataUpdatedAt
                  : 0,
              r = void 0 !== e;
            return {
              data: e,
              dataUpdateCount: 0,
              dataUpdatedAt: r ? (null != n ? n : Date.now()) : 0,
              error: null,
              errorUpdateCount: 0,
              errorUpdatedAt: 0,
              fetchFailureCount: 0,
              fetchMeta: null,
              isFetching: !1,
              isInvalidated: !1,
              isPaused: !1,
              status: r ? "success" : "idle",
            };
          }),
          (e.reducer = function (t, e) {
            var n, r;
            switch (e.type) {
              case "failed":
                return (0, n8.default)({}, t, {
                  fetchFailureCount: t.fetchFailureCount + 1,
                });
              case "pause":
                return (0, n8.default)({}, t, { isPaused: !0 });
              case "continue":
                return (0, n8.default)({}, t, { isPaused: !1 });
              case "fetch":
                return (0, n8.default)(
                  {},
                  t,
                  {
                    fetchFailureCount: 0,
                    fetchMeta: null != (n = e.meta) ? n : null,
                    isFetching: !0,
                    isPaused: !1,
                  },
                  !t.dataUpdatedAt && { error: null, status: "loading" }
                );
              case "success":
                return (0, n8.default)({}, t, {
                  data: e.data,
                  dataUpdateCount: t.dataUpdateCount + 1,
                  dataUpdatedAt: null != (r = e.dataUpdatedAt) ? r : Date.now(),
                  error: null,
                  fetchFailureCount: 0,
                  isFetching: !1,
                  isInvalidated: !1,
                  isPaused: !1,
                  status: "success",
                });
              case "error":
                var i = e.error;
                if (rT(i) && i.revert && this.revertState)
                  return (0, n8.default)({}, this.revertState);
                return (0, n8.default)({}, t, {
                  error: i,
                  errorUpdateCount: t.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: t.fetchFailureCount + 1,
                  isFetching: !1,
                  isPaused: !1,
                  status: "error",
                });
              case "invalidate":
                return (0, n8.default)({}, t, { isInvalidated: !0 });
              case "setState":
                return (0, n8.default)({}, t, e.state);
              default:
                return t;
            }
          }),
          t
        );
      })(),
      rC = (function (t) {
        function e(e) {
          var n;
          return (
            ((n = t.call(this) || this).config = e || {}),
            (n.queries = []),
            (n.queriesMap = {}),
            n
          );
        }
        (0, rg.default)(e, t);
        var n = e.prototype;
        return (
          (n.build = function (t, e, n) {
            var r,
              i = e.queryKey,
              o = null != (r = e.queryHash) ? r : ra(i, e),
              s = this.get(o);
            return (
              s ||
                ((s = new rk({
                  cache: this,
                  queryKey: i,
                  queryHash: o,
                  options: t.defaultQueryOptions(e),
                  state: n,
                  defaultOptions: t.getQueryDefaults(i),
                  meta: e.meta,
                })),
                this.add(s)),
              s
            );
          }),
          (n.add = function (t) {
            this.queriesMap[t.queryHash] ||
              ((this.queriesMap[t.queryHash] = t),
              this.queries.push(t),
              this.notify({ type: "queryAdded", query: t }));
          }),
          (n.remove = function (t) {
            var e = this.queriesMap[t.queryHash];
            e &&
              (t.destroy(),
              (this.queries = this.queries.filter(function (e) {
                return e !== t;
              })),
              e === t && delete this.queriesMap[t.queryHash],
              this.notify({ type: "queryRemoved", query: t }));
          }),
          (n.clear = function () {
            var t = this;
            rv.batch(function () {
              t.queries.forEach(function (e) {
                t.remove(e);
              });
            });
          }),
          (n.get = function (t) {
            return this.queriesMap[t];
          }),
          (n.getAll = function () {
            return this.queries;
          }),
          (n.find = function (t, e) {
            var n = ri(t, e)[0];
            return (
              void 0 === n.exact && (n.exact = !0),
              this.queries.find(function (t) {
                return ro(n, t);
              })
            );
          }),
          (n.findAll = function (t, e) {
            var n = ri(t, e)[0];
            return Object.keys(n).length > 0
              ? this.queries.filter(function (t) {
                  return ro(n, t);
                })
              : this.queries;
          }),
          (n.notify = function (t) {
            var e = this;
            rv.batch(function () {
              e.listeners.forEach(function (e) {
                e(t);
              });
            });
          }),
          (n.onFocus = function () {
            var t = this;
            rv.batch(function () {
              t.queries.forEach(function (t) {
                t.onFocus();
              });
            });
          }),
          (n.onOnline = function () {
            var t = this;
            rv.batch(function () {
              t.queries.forEach(function (t) {
                t.onOnline();
              });
            });
          }),
          e
        );
      })(r_),
      rP = (function () {
        function t(t) {
          (this.options = (0, n8.default)({}, t.defaultOptions, t.options)),
            (this.mutationId = t.mutationId),
            (this.mutationCache = t.mutationCache),
            (this.observers = []),
            (this.state = t.state || {
              context: void 0,
              data: void 0,
              error: null,
              failureCount: 0,
              isPaused: !1,
              status: "idle",
              variables: void 0,
            }),
            (this.meta = t.meta);
        }
        var e = t.prototype;
        return (
          (e.setState = function (t) {
            this.dispatch({ type: "setState", state: t });
          }),
          (e.addObserver = function (t) {
            -1 === this.observers.indexOf(t) && this.observers.push(t);
          }),
          (e.removeObserver = function (t) {
            this.observers = this.observers.filter(function (e) {
              return e !== t;
            });
          }),
          (e.cancel = function () {
            return this.retryer
              ? (this.retryer.cancel(), this.retryer.promise.then(re).catch(re))
              : Promise.resolve();
          }),
          (e.continue = function () {
            return this.retryer
              ? (this.retryer.continue(), this.retryer.promise)
              : this.execute();
          }),
          (e.execute = function () {
            var t,
              e = this,
              n = "loading" === this.state.status,
              r = Promise.resolve();
            return (
              n ||
                (this.dispatch({
                  type: "loading",
                  variables: this.options.variables,
                }),
                (r = r
                  .then(function () {
                    null == e.mutationCache.config.onMutate ||
                      e.mutationCache.config.onMutate(e.state.variables, e);
                  })
                  .then(function () {
                    return null == e.options.onMutate
                      ? void 0
                      : e.options.onMutate(e.state.variables);
                  })
                  .then(function (t) {
                    t !== e.state.context &&
                      e.dispatch({
                        type: "loading",
                        context: t,
                        variables: e.state.variables,
                      });
                  }))),
              r
                .then(function () {
                  return e.executeMutation();
                })
                .then(function (n) {
                  (t = n),
                    null == e.mutationCache.config.onSuccess ||
                      e.mutationCache.config.onSuccess(
                        t,
                        e.state.variables,
                        e.state.context,
                        e
                      );
                })
                .then(function () {
                  return null == e.options.onSuccess
                    ? void 0
                    : e.options.onSuccess(
                        t,
                        e.state.variables,
                        e.state.context
                      );
                })
                .then(function () {
                  return null == e.options.onSettled
                    ? void 0
                    : e.options.onSettled(
                        t,
                        null,
                        e.state.variables,
                        e.state.context
                      );
                })
                .then(function () {
                  return e.dispatch({ type: "success", data: t }), t;
                })
                .catch(function (t) {
                  return (
                    null == e.mutationCache.config.onError ||
                      e.mutationCache.config.onError(
                        t,
                        e.state.variables,
                        e.state.context,
                        e
                      ),
                    ry.error(t),
                    Promise.resolve()
                      .then(function () {
                        return null == e.options.onError
                          ? void 0
                          : e.options.onError(
                              t,
                              e.state.variables,
                              e.state.context
                            );
                      })
                      .then(function () {
                        return null == e.options.onSettled
                          ? void 0
                          : e.options.onSettled(
                              void 0,
                              t,
                              e.state.variables,
                              e.state.context
                            );
                      })
                      .then(function () {
                        throw (e.dispatch({ type: "error", error: t }), t);
                      })
                  );
                })
            );
          }),
          (e.executeMutation = function () {
            var t,
              e = this;
            return (
              (this.retryer = new rO({
                fn: function () {
                  return e.options.mutationFn
                    ? e.options.mutationFn(e.state.variables)
                    : Promise.reject("No mutationFn found");
                },
                onFail: function () {
                  e.dispatch({ type: "failed" });
                },
                onPause: function () {
                  e.dispatch({ type: "pause" });
                },
                onContinue: function () {
                  e.dispatch({ type: "continue" });
                },
                retry: null != (t = this.options.retry) ? t : 0,
                retryDelay: this.options.retryDelay,
              })),
              this.retryer.promise
            );
          }),
          (e.dispatch = function (t) {
            var e = this;
            (this.state = (function (t, e) {
              switch (e.type) {
                case "failed":
                  return (0, n8.default)({}, t, {
                    failureCount: t.failureCount + 1,
                  });
                case "pause":
                  return (0, n8.default)({}, t, { isPaused: !0 });
                case "continue":
                  return (0, n8.default)({}, t, { isPaused: !1 });
                case "loading":
                  return (0, n8.default)({}, t, {
                    context: e.context,
                    data: void 0,
                    error: null,
                    isPaused: !1,
                    status: "loading",
                    variables: e.variables,
                  });
                case "success":
                  return (0, n8.default)({}, t, {
                    data: e.data,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  });
                case "error":
                  return (0, n8.default)({}, t, {
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    isPaused: !1,
                    status: "error",
                  });
                case "setState":
                  return (0, n8.default)({}, t, e.state);
                default:
                  return t;
              }
            })(this.state, t)),
              rv.batch(function () {
                e.observers.forEach(function (e) {
                  e.onMutationUpdate(t);
                }),
                  e.mutationCache.notify(e);
              });
          }),
          t
        );
      })(),
      rR = (function (t) {
        function e(e) {
          var n;
          return (
            ((n = t.call(this) || this).config = e || {}),
            (n.mutations = []),
            (n.mutationId = 0),
            n
          );
        }
        (0, rg.default)(e, t);
        var n = e.prototype;
        return (
          (n.build = function (t, e, n) {
            var r = new rP({
              mutationCache: this,
              mutationId: ++this.mutationId,
              options: t.defaultMutationOptions(e),
              state: n,
              defaultOptions: e.mutationKey
                ? t.getMutationDefaults(e.mutationKey)
                : void 0,
              meta: e.meta,
            });
            return this.add(r), r;
          }),
          (n.add = function (t) {
            this.mutations.push(t), this.notify(t);
          }),
          (n.remove = function (t) {
            (this.mutations = this.mutations.filter(function (e) {
              return e !== t;
            })),
              t.cancel(),
              this.notify(t);
          }),
          (n.clear = function () {
            var t = this;
            rv.batch(function () {
              t.mutations.forEach(function (e) {
                t.remove(e);
              });
            });
          }),
          (n.getAll = function () {
            return this.mutations;
          }),
          (n.find = function (t) {
            return (
              void 0 === t.exact && (t.exact = !0),
              this.mutations.find(function (e) {
                return rs(t, e);
              })
            );
          }),
          (n.findAll = function (t) {
            return this.mutations.filter(function (e) {
              return rs(t, e);
            });
          }),
          (n.notify = function (t) {
            var e = this;
            rv.batch(function () {
              e.listeners.forEach(function (e) {
                e(t);
              });
            });
          }),
          (n.onFocus = function () {
            this.resumePausedMutations();
          }),
          (n.onOnline = function () {
            this.resumePausedMutations();
          }),
          (n.resumePausedMutations = function () {
            var t = this.mutations.filter(function (t) {
              return t.state.isPaused;
            });
            return rv.batch(function () {
              return t.reduce(function (t, e) {
                return t.then(function () {
                  return e.continue().catch(re);
                });
              }, Promise.resolve());
            });
          }),
          e
        );
      })(r_);
    function rq(t, e) {
      return null == t.getNextPageParam
        ? void 0
        : t.getNextPageParam(e[e.length - 1], e);
    }
    var rI = (function () {
      function t(t) {
        void 0 === t && (t = {}),
          (this.queryCache = t.queryCache || new rC()),
          (this.mutationCache = t.mutationCache || new rR()),
          (this.defaultOptions = t.defaultOptions || {}),
          (this.queryDefaults = []),
          (this.mutationDefaults = []);
      }
      var e = t.prototype;
      return (
        (e.mount = function () {
          var t = this;
          (this.unsubscribeFocus = rb.subscribe(function () {
            rb.isFocused() &&
              rS.isOnline() &&
              (t.mutationCache.onFocus(), t.queryCache.onFocus());
          })),
            (this.unsubscribeOnline = rS.subscribe(function () {
              rb.isFocused() &&
                rS.isOnline() &&
                (t.mutationCache.onOnline(), t.queryCache.onOnline());
            }));
        }),
        (e.unmount = function () {
          var t, e;
          null == (t = this.unsubscribeFocus) || t.call(this),
            null == (e = this.unsubscribeOnline) || e.call(this);
        }),
        (e.isFetching = function (t, e) {
          var n = ri(t, e)[0];
          return (n.fetching = !0), this.queryCache.findAll(n).length;
        }),
        (e.isMutating = function (t) {
          return this.mutationCache.findAll(
            (0, n8.default)({}, t, { fetching: !0 })
          ).length;
        }),
        (e.getQueryData = function (t, e) {
          var n;
          return null == (n = this.queryCache.find(t, e))
            ? void 0
            : n.state.data;
        }),
        (e.getQueriesData = function (t) {
          return this.getQueryCache()
            .findAll(t)
            .map(function (t) {
              return [t.queryKey, t.state.data];
            });
        }),
        (e.setQueryData = function (t, e, n) {
          var r = rr(t),
            i = this.defaultQueryOptions(r);
          return this.queryCache.build(this, i).setData(e, n);
        }),
        (e.setQueriesData = function (t, e, n) {
          var r = this;
          return rv.batch(function () {
            return r
              .getQueryCache()
              .findAll(t)
              .map(function (t) {
                var i = t.queryKey;
                return [i, r.setQueryData(i, e, n)];
              });
          });
        }),
        (e.getQueryState = function (t, e) {
          var n;
          return null == (n = this.queryCache.find(t, e)) ? void 0 : n.state;
        }),
        (e.removeQueries = function (t, e) {
          var n = ri(t, e)[0],
            r = this.queryCache;
          rv.batch(function () {
            r.findAll(n).forEach(function (t) {
              r.remove(t);
            });
          });
        }),
        (e.resetQueries = function (t, e, n) {
          var r = this,
            i = ri(t, e, n),
            o = i[0],
            s = i[1],
            a = this.queryCache,
            u = (0, n8.default)({}, o, { active: !0 });
          return rv.batch(function () {
            return (
              a.findAll(o).forEach(function (t) {
                t.reset();
              }),
              r.refetchQueries(u, s)
            );
          });
        }),
        (e.cancelQueries = function (t, e, n) {
          var r = this,
            i = ri(t, e, n),
            o = i[0],
            s = i[1],
            a = void 0 === s ? {} : s;
          return (
            void 0 === a.revert && (a.revert = !0),
            Promise.all(
              rv.batch(function () {
                return r.queryCache.findAll(o).map(function (t) {
                  return t.cancel(a);
                });
              })
            )
              .then(re)
              .catch(re)
          );
        }),
        (e.invalidateQueries = function (t, e, n) {
          var r,
            i,
            o,
            s = this,
            a = ri(t, e, n),
            u = a[0],
            c = a[1],
            l = (0, n8.default)({}, u, {
              active:
                null == (r = null != (i = u.refetchActive) ? i : u.active) || r,
              inactive: null != (o = u.refetchInactive) && o,
            });
          return rv.batch(function () {
            return (
              s.queryCache.findAll(u).forEach(function (t) {
                t.invalidate();
              }),
              s.refetchQueries(l, c)
            );
          });
        }),
        (e.refetchQueries = function (t, e, n) {
          var r = this,
            i = ri(t, e, n),
            o = i[0],
            s = i[1],
            a = Promise.all(
              rv.batch(function () {
                return r.queryCache.findAll(o).map(function (t) {
                  return t.fetch(
                    void 0,
                    (0, n8.default)({}, s, {
                      meta: { refetchPage: null == o ? void 0 : o.refetchPage },
                    })
                  );
                });
              })
            ).then(re);
          return (null == s ? void 0 : s.throwOnError) || (a = a.catch(re)), a;
        }),
        (e.fetchQuery = function (t, e, n) {
          var r = rr(t, e, n),
            i = this.defaultQueryOptions(r);
          void 0 === i.retry && (i.retry = !1);
          var o = this.queryCache.build(this, i);
          return o.isStaleByTime(i.staleTime)
            ? o.fetch(i)
            : Promise.resolve(o.state.data);
        }),
        (e.prefetchQuery = function (t, e, n) {
          return this.fetchQuery(t, e, n).then(re).catch(re);
        }),
        (e.fetchInfiniteQuery = function (t, e, n) {
          var r = rr(t, e, n);
          return (
            (r.behavior = {
              onFetch: function (t) {
                t.fetchFn = function () {
                  var e,
                    n,
                    r,
                    i,
                    o,
                    s,
                    a,
                    u =
                      null == (e = t.fetchOptions) || null == (n = e.meta)
                        ? void 0
                        : n.refetchPage,
                    c =
                      null == (r = t.fetchOptions) || null == (i = r.meta)
                        ? void 0
                        : i.fetchMore,
                    l = null == c ? void 0 : c.pageParam,
                    d = (null == c ? void 0 : c.direction) === "forward",
                    p = (null == c ? void 0 : c.direction) === "backward",
                    f = (null == (o = t.state.data) ? void 0 : o.pages) || [],
                    h =
                      (null == (s = t.state.data) ? void 0 : s.pageParams) ||
                      [],
                    v = rh(),
                    m = null == v ? void 0 : v.signal,
                    y = h,
                    g = !1,
                    _ =
                      t.options.queryFn ||
                      function () {
                        return Promise.reject("Missing queryFn");
                      },
                    b = function (t, e, n, r) {
                      return (
                        (y = r ? [e].concat(y) : [].concat(y, [e])),
                        r ? [n].concat(t) : [].concat(t, [n])
                      );
                    },
                    S = function (e, n, r, i) {
                      if (g) return Promise.reject("Cancelled");
                      if (void 0 === r && !n && e.length)
                        return Promise.resolve(e);
                      var o = _({
                          queryKey: t.queryKey,
                          signal: m,
                          pageParam: r,
                          meta: t.meta,
                        }),
                        s = Promise.resolve(o).then(function (t) {
                          return b(e, r, t, i);
                        });
                      return rw(o) && (s.cancel = o.cancel), s;
                    };
                  if (f.length)
                    if (d) {
                      var x = void 0 !== l,
                        w = x ? l : rq(t.options, f);
                      a = S(f, x, w);
                    } else if (p) {
                      var E,
                        T,
                        O = void 0 !== l,
                        k = O
                          ? l
                          : ((E = t.options),
                            (T = f),
                            null == E.getPreviousPageParam
                              ? void 0
                              : E.getPreviousPageParam(T[0], T));
                      a = S(f, O, k, !0);
                    } else {
                      y = [];
                      var C = void 0 === t.options.getNextPageParam;
                      a =
                        !u || !f[0] || u(f[0], 0, f)
                          ? S([], C, h[0])
                          : Promise.resolve(b([], h[0], f[0]));
                      for (
                        var P = function (e) {
                            a = a.then(function (n) {
                              if (!u || !f[e] || u(f[e], e, f)) {
                                var r = C ? h[e] : rq(t.options, n);
                                return S(n, C, r);
                              }
                              return Promise.resolve(b(n, h[e], f[e]));
                            });
                          },
                          R = 1;
                        R < f.length;
                        R++
                      )
                        P(R);
                    }
                  else a = S([]);
                  var q = a.then(function (t) {
                    return { pages: t, pageParams: y };
                  });
                  return (
                    (q.cancel = function () {
                      (g = !0), null == v || v.abort(), rw(a) && a.cancel();
                    }),
                    q
                  );
                };
              },
            }),
            this.fetchQuery(r)
          );
        }),
        (e.prefetchInfiniteQuery = function (t, e, n) {
          return this.fetchInfiniteQuery(t, e, n).then(re).catch(re);
        }),
        (e.cancelMutations = function () {
          var t = this;
          return Promise.all(
            rv.batch(function () {
              return t.mutationCache.getAll().map(function (t) {
                return t.cancel();
              });
            })
          )
            .then(re)
            .catch(re);
        }),
        (e.resumePausedMutations = function () {
          return this.getMutationCache().resumePausedMutations();
        }),
        (e.executeMutation = function (t) {
          return this.mutationCache.build(this, t).execute();
        }),
        (e.getQueryCache = function () {
          return this.queryCache;
        }),
        (e.getMutationCache = function () {
          return this.mutationCache;
        }),
        (e.getDefaultOptions = function () {
          return this.defaultOptions;
        }),
        (e.setDefaultOptions = function (t) {
          this.defaultOptions = t;
        }),
        (e.setQueryDefaults = function (t, e) {
          var n = this.queryDefaults.find(function (e) {
            return ru(t) === ru(e.queryKey);
          });
          n
            ? (n.defaultOptions = e)
            : this.queryDefaults.push({ queryKey: t, defaultOptions: e });
        }),
        (e.getQueryDefaults = function (t) {
          var e;
          return t
            ? null ==
              (e = this.queryDefaults.find(function (e) {
                return rc(t, e.queryKey);
              }))
              ? void 0
              : e.defaultOptions
            : void 0;
        }),
        (e.setMutationDefaults = function (t, e) {
          var n = this.mutationDefaults.find(function (e) {
            return ru(t) === ru(e.mutationKey);
          });
          n
            ? (n.defaultOptions = e)
            : this.mutationDefaults.push({ mutationKey: t, defaultOptions: e });
        }),
        (e.getMutationDefaults = function (t) {
          var e;
          return t
            ? null ==
              (e = this.mutationDefaults.find(function (e) {
                return rc(t, e.mutationKey);
              }))
              ? void 0
              : e.defaultOptions
            : void 0;
        }),
        (e.defaultQueryOptions = function (t) {
          if (null == t ? void 0 : t._defaulted) return t;
          var e = (0, n8.default)(
            {},
            this.defaultOptions.queries,
            this.getQueryDefaults(null == t ? void 0 : t.queryKey),
            t,
            { _defaulted: !0 }
          );
          return (
            !e.queryHash && e.queryKey && (e.queryHash = ra(e.queryKey, e)), e
          );
        }),
        (e.defaultQueryObserverOptions = function (t) {
          return this.defaultQueryOptions(t);
        }),
        (e.defaultMutationOptions = function (t) {
          return (null == t ? void 0 : t._defaulted)
            ? t
            : (0, n8.default)(
                {},
                this.defaultOptions.mutations,
                this.getMutationDefaults(null == t ? void 0 : t.mutationKey),
                t,
                { _defaulted: !0 }
              );
        }),
        (e.clear = function () {
          this.queryCache.clear(), this.mutationCache.clear();
        }),
        t
      );
    })();
    t.i(98746);
    var rD = v.default.createContext(void 0),
      rM = v.default.createContext(!1);
    function rA(t) {
      return t && "undefined" != typeof window
        ? (window.ReactQueryClientContext ||
            (window.ReactQueryClientContext = rD),
          window.ReactQueryClientContext)
        : rD;
    }
    var rj = function () {
        var t = v.default.useContext(rA(v.default.useContext(rM)));
        if (!t)
          throw Error("No QueryClient set, use QueryClientProvider to set one");
        return t;
      },
      rN = function (t) {
        var e = t.client,
          n = t.contextSharing,
          r = void 0 !== n && n,
          i = t.children;
        v.default.useEffect(
          function () {
            return (
              e.mount(),
              function () {
                e.unmount();
              }
            );
          },
          [e]
        );
        var o = rA(r);
        return v.default.createElement(
          rM.Provider,
          { value: r },
          v.default.createElement(o.Provider, { value: e }, i)
        );
      },
      rL = function (t) {
        var e,
          n,
          r,
          i = t.children,
          o = t.options;
        return (
          (e = t.state),
          (n = rj()),
          ((r = v.default.useRef(o)).current = o),
          v.default.useMemo(
            function () {
              e &&
                (function (t, e, n) {
                  if ("object" == typeof e && null !== e) {
                    var r = t.getMutationCache(),
                      i = t.getQueryCache(),
                      o = e.mutations || [],
                      s = e.queries || [];
                    o.forEach(function (e) {
                      var i;
                      r.build(
                        t,
                        (0, n8.default)(
                          {},
                          null == n || null == (i = n.defaultOptions)
                            ? void 0
                            : i.mutations,
                          { mutationKey: e.mutationKey }
                        ),
                        e.state
                      );
                    }),
                      s.forEach(function (e) {
                        var r,
                          o = i.get(e.queryHash);
                        if (o) {
                          o.state.dataUpdatedAt < e.state.dataUpdatedAt &&
                            o.setState(e.state);
                          return;
                        }
                        i.build(
                          t,
                          (0, n8.default)(
                            {},
                            null == n || null == (r = n.defaultOptions)
                              ? void 0
                              : r.queries,
                            { queryKey: e.queryKey, queryHash: e.queryHash }
                          ),
                          e.state
                        );
                      });
                  }
                })(n, e, r.current);
            },
            [n, e]
          ),
          i
        );
      };
    t.i(61437);
    var rF = t.i(77611);
    let rU = { data: "" },
      rH = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
      rB = /\/\*[^]*?\*\/|  +/g,
      rz = /\n+/g,
      rK = (t, e) => {
        let n = "",
          r = "",
          i = "";
        for (let o in t) {
          let s = t[o];
          "@" == o[0]
            ? "i" == o[1]
              ? (n = o + " " + s + ";")
              : (r +=
                  "f" == o[1]
                    ? rK(s, o)
                    : o + "{" + rK(s, "k" == o[1] ? "" : e) + "}")
            : "object" == typeof s
            ? (r += rK(
                s,
                e
                  ? e.replace(/([^,])+/g, (t) =>
                      o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (e) =>
                        /&/.test(e) ? e.replace(/&/g, t) : t ? t + " " + e : e
                      )
                    )
                  : o
              ))
            : null != s &&
              ((o = /^--/.test(o)
                ? o
                : o.replace(/[A-Z]/g, "-$&").toLowerCase()),
              (i += rK.p ? rK.p(o, s) : o + ":" + s + ";"));
        }
        return n + (e && i ? e + "{" + i + "}" : i) + r;
      },
      rQ = {},
      rW = (t) => {
        if ("object" == typeof t) {
          let e = "";
          for (let n in t) e += n + rW(t[n]);
          return e;
        }
        return t;
      };
    function rY(t) {
      let e,
        n,
        r,
        i = this || {},
        o = t.call ? t(i.p) : t;
      return ((t, e, n, r, i) => {
        var o;
        let s = rW(t),
          a =
            rQ[s] ||
            (rQ[s] = ((t) => {
              let e = 0,
                n = 11;
              for (; e < t.length; ) n = (101 * n + t.charCodeAt(e++)) >>> 0;
              return "go" + n;
            })(s));
        if (!rQ[a]) {
          let e =
            s !== t
              ? t
              : ((t) => {
                  let e,
                    n,
                    r = [{}];
                  for (; (e = rH.exec(t.replace(rB, ""))); )
                    e[4]
                      ? r.shift()
                      : e[3]
                      ? ((n = e[3].replace(rz, " ").trim()),
                        r.unshift((r[0][n] = r[0][n] || {})))
                      : (r[0][e[1]] = e[2].replace(rz, " ").trim());
                  return r[0];
                })(t);
          rQ[a] = rK(i ? { ["@keyframes " + a]: e } : e, n ? "" : "." + a);
        }
        let u = n && rQ.g ? rQ.g : null;
        return (
          n && (rQ.g = rQ[a]),
          (o = rQ[a]),
          u
            ? (e.data = e.data.replace(u, o))
            : -1 === e.data.indexOf(o) &&
              (e.data = r ? o + e.data : e.data + o),
          a
        );
      })(
        o.unshift
          ? o.raw
            ? ((e = [].slice.call(arguments, 1)),
              (n = i.p),
              o.reduce((t, r, i) => {
                let o = e[i];
                if (o && o.call) {
                  let t = o(n),
                    e =
                      (t && t.props && t.props.className) ||
                      (/^go/.test(t) && t);
                  o = e
                    ? "." + e
                    : t && "object" == typeof t
                    ? t.props
                      ? ""
                      : rK(t, "")
                    : !1 === t
                    ? ""
                    : t;
                }
                return t + r + (null == o ? "" : o);
              }, ""))
            : o.reduce((t, e) => Object.assign(t, e && e.call ? e(i.p) : e), {})
          : o,
        ((r = i.target),
        "object" == typeof window
          ? (
              (r ? r.querySelector("#_goober") : window._goober) ||
              Object.assign(
                (r || document.head).appendChild(
                  document.createElement("style")
                ),
                { innerHTML: " ", id: "_goober" }
              )
            ).firstChild
          : r || rU),
        i.g,
        i.o,
        i.k
      );
    }
    rY.bind({ g: 1 });
    let rG,
      r$,
      rX,
      rJ = rY.bind({ k: 1 });
    function rV(t, e) {
      let n = this || {};
      return function () {
        let r = arguments;
        function i(o, s) {
          let a = Object.assign({}, o),
            u = a.className || i.className;
          (n.p = Object.assign({ theme: r$ && r$() }, a)),
            (n.o = / *go\d+/.test(u)),
            (a.className = rY.apply(n, r) + (u ? " " + u : "")),
            e && (a.ref = s);
          let c = t;
          return (
            t[0] && ((c = a.as || t), delete a.as),
            rX && c[0] && rX(a),
            rG(c, a)
          );
        }
        return e ? e(i) : i;
      };
    }
    var rZ = (t, e) => ("function" == typeof t ? t(e) : t),
      r0 = ((e = 0), () => (++e).toString()),
      r1 = () => {
        if (void 0 === n && "u" > typeof window) {
          let t = matchMedia("(prefers-reduced-motion: reduce)");
          n = !t || t.matches;
        }
        return n;
      },
      r3 = (t, e) => {
        switch (e.type) {
          case 0:
            return { ...t, toasts: [e.toast, ...t.toasts].slice(0, 20) };
          case 1:
            return {
              ...t,
              toasts: t.toasts.map((t) =>
                t.id === e.toast.id ? { ...t, ...e.toast } : t
              ),
            };
          case 2:
            let { toast: n } = e;
            return r3(t, {
              type: +!!t.toasts.find((t) => t.id === n.id),
              toast: n,
            });
          case 3:
            let { toastId: r } = e;
            return {
              ...t,
              toasts: t.toasts.map((t) =>
                t.id === r || void 0 === r
                  ? { ...t, dismissed: !0, visible: !1 }
                  : t
              ),
            };
          case 4:
            return void 0 === e.toastId
              ? { ...t, toasts: [] }
              : { ...t, toasts: t.toasts.filter((t) => t.id !== e.toastId) };
          case 5:
            return { ...t, pausedAt: e.time };
          case 6:
            let i = e.time - (t.pausedAt || 0);
            return {
              ...t,
              pausedAt: void 0,
              toasts: t.toasts.map((t) => ({
                ...t,
                pauseDuration: t.pauseDuration + i,
              })),
            };
        }
      },
      r2 = [],
      r4 = { toasts: [], pausedAt: void 0 },
      r6 = (t) => {
        (r4 = r3(r4, t)),
          r2.forEach((t) => {
            t(r4);
          });
      },
      r5 = {
        blank: 4e3,
        error: 4e3,
        success: 2e3,
        loading: 1 / 0,
        custom: 4e3,
      },
      r9 = (t) => (e, n) => {
        let r = ((t, e = "blank", n) => ({
          createdAt: Date.now(),
          visible: !0,
          dismissed: !1,
          type: e,
          ariaProps: { role: "status", "aria-live": "polite" },
          message: t,
          pauseDuration: 0,
          ...n,
          id: (null == n ? void 0 : n.id) || r0(),
        }))(e, t, n);
        return r6({ type: 2, toast: r }), r.id;
      },
      r7 = (t, e) => r9("blank")(t, e);
    (r7.error = r9("error")),
      (r7.success = r9("success")),
      (r7.loading = r9("loading")),
      (r7.custom = r9("custom")),
      (r7.dismiss = (t) => {
        r6({ type: 3, toastId: t });
      }),
      (r7.remove = (t) => r6({ type: 4, toastId: t })),
      (r7.promise = (t, e, n) => {
        let r = r7.loading(e.loading, {
          ...n,
          ...(null == n ? void 0 : n.loading),
        });
        return (
          "function" == typeof t && (t = t()),
          t
            .then((t) => {
              let i = e.success ? rZ(e.success, t) : void 0;
              return (
                i
                  ? r7.success(i, {
                      id: r,
                      ...n,
                      ...(null == n ? void 0 : n.success),
                    })
                  : r7.dismiss(r),
                t
              );
            })
            .catch((t) => {
              let i = e.error ? rZ(e.error, t) : void 0;
              i
                ? r7.error(i, {
                    id: r,
                    ...n,
                    ...(null == n ? void 0 : n.error),
                  })
                : r7.dismiss(r);
            }),
          t
        );
      });
    var r8 = (t, e) => {
        r6({ type: 1, toast: { id: t, height: e } });
      },
      it = () => {
        r6({ type: 5, time: Date.now() });
      },
      ie = new Map(),
      ir = 1e3,
      ii = rJ`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
      io = rJ`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
      is = rJ`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
      ia = rV("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ii} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${io} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(t) => t.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${is} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
      iu = rJ`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
      ic = rV("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(t) => t.secondary || "#e0e0e0"};
  border-right-color: ${(t) => t.primary || "#616161"};
  animation: ${iu} 1s linear infinite;
`,
      il = rJ`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
      id = rJ`
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
      ip = rV("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${il} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${id} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(t) => t.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
      ih = rV("div")`
  position: absolute;
`,
      iv = rV("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
      im = rJ`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
      iy = rV("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${im} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
      ig = ({ toast: t }) => {
        let { icon: e, type: n, iconTheme: r } = t;
        return void 0 !== e
          ? "string" == typeof e
            ? v.createElement(iy, null, e)
            : e
          : "blank" === n
          ? null
          : v.createElement(
              iv,
              null,
              v.createElement(ic, { ...r }),
              "loading" !== n &&
                v.createElement(
                  ih,
                  null,
                  "error" === n
                    ? v.createElement(ia, { ...r })
                    : v.createElement(ip, { ...r })
                )
            );
      },
      i_ = rV("div")`
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
      ib = rV("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
      iS = v.memo(({ toast: t, position: e, style: n, children: r }) => {
        let i = t.height
            ? ((t, e) => {
                let n = t.includes("top") ? 1 : -1,
                  [r, i] = r1()
                    ? [
                        "0%{opacity:0;} 100%{opacity:1;}",
                        "0%{opacity:1;} 100%{opacity:0;}",
                      ]
                    : [
                        `
0% {transform: translate3d(0,${-200 * n}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
                        `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150 * n}%,-1px) scale(.6); opacity:0;}
`,
                      ];
                return {
                  animation: e
                    ? `${rJ(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
                    : `${rJ(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
                };
              })(t.position || e || "top-center", t.visible)
            : { opacity: 0 },
          o = v.createElement(ig, { toast: t }),
          s = v.createElement(ib, { ...t.ariaProps }, rZ(t.message, t));
        return v.createElement(
          i_,
          { className: t.className, style: { ...i, ...n, ...t.style } },
          "function" == typeof r
            ? r({ icon: o, message: s })
            : v.createElement(v.Fragment, null, o, s)
        );
      });
    (o = v.createElement),
      (rK.p = void 0),
      (rG = o),
      (r$ = void 0),
      (rX = void 0);
    var ix = ({
        id: t,
        className: e,
        style: n,
        onHeightUpdate: r,
        children: i,
      }) => {
        let o = v.useCallback(
          (e) => {
            if (e) {
              let n = () => {
                r(t, e.getBoundingClientRect().height);
              };
              n(),
                new MutationObserver(n).observe(e, {
                  subtree: !0,
                  childList: !0,
                  characterData: !0,
                });
            }
          },
          [t, r]
        );
        return v.createElement("div", { ref: o, className: e, style: n }, i);
      },
      iw = rY`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
      iE = ({
        reverseOrder: t,
        position: e = "top-center",
        toastOptions: n,
        gutter: r,
        children: i,
        containerStyle: o,
        containerClassName: s,
      }) => {
        let { toasts: a, handlers: u } = ((t) => {
          let { toasts: e, pausedAt: n } = ((t = {}) => {
            let [e, n] = (0, v.useState)(r4),
              r = (0, v.useRef)(r4);
            (0, v.useEffect)(
              () => (
                r.current !== r4 && n(r4),
                r2.push(n),
                () => {
                  let t = r2.indexOf(n);
                  t > -1 && r2.splice(t, 1);
                }
              ),
              []
            );
            let i = e.toasts.map((e) => {
              var n, r, i;
              return {
                ...t,
                ...t[e.type],
                ...e,
                removeDelay:
                  e.removeDelay ||
                  (null == (n = t[e.type]) ? void 0 : n.removeDelay) ||
                  (null == t ? void 0 : t.removeDelay),
                duration:
                  e.duration ||
                  (null == (r = t[e.type]) ? void 0 : r.duration) ||
                  (null == t ? void 0 : t.duration) ||
                  r5[e.type],
                style: {
                  ...t.style,
                  ...(null == (i = t[e.type]) ? void 0 : i.style),
                  ...e.style,
                },
              };
            });
            return { ...e, toasts: i };
          })(t);
          (0, v.useEffect)(() => {
            if (n) return;
            let t = Date.now(),
              r = e.map((e) => {
                if (e.duration === 1 / 0) return;
                let n = (e.duration || 0) + e.pauseDuration - (t - e.createdAt);
                if (n < 0) {
                  e.visible && r7.dismiss(e.id);
                  return;
                }
                return setTimeout(() => r7.dismiss(e.id), n);
              });
            return () => {
              r.forEach((t) => t && clearTimeout(t));
            };
          }, [e, n]);
          let r = (0, v.useCallback)(() => {
              n && r6({ type: 6, time: Date.now() });
            }, [n]),
            i = (0, v.useCallback)(
              (t, n) => {
                let {
                    reverseOrder: r = !1,
                    gutter: i = 8,
                    defaultPosition: o,
                  } = n || {},
                  s = e.filter(
                    (e) => (e.position || o) === (t.position || o) && e.height
                  ),
                  a = s.findIndex((e) => e.id === t.id),
                  u = s.filter((t, e) => e < a && t.visible).length;
                return s
                  .filter((t) => t.visible)
                  .slice(...(r ? [u + 1] : [0, u]))
                  .reduce((t, e) => t + (e.height || 0) + i, 0);
              },
              [e]
            );
          return (
            (0, v.useEffect)(() => {
              e.forEach((t) => {
                if (t.dismissed)
                  ((t, e = ir) => {
                    if (ie.has(t)) return;
                    let n = setTimeout(() => {
                      ie.delete(t), r6({ type: 4, toastId: t });
                    }, e);
                    ie.set(t, n);
                  })(t.id, t.removeDelay);
                else {
                  let e = ie.get(t.id);
                  e && (clearTimeout(e), ie.delete(t.id));
                }
              });
            }, [e]),
            {
              toasts: e,
              handlers: {
                updateHeight: r8,
                startPause: it,
                endPause: r,
                calculateOffset: i,
              },
            }
          );
        })(n);
        return v.createElement(
          "div",
          {
            id: "_rht_toaster",
            style: {
              position: "fixed",
              zIndex: 9999,
              top: 16,
              left: 16,
              right: 16,
              bottom: 16,
              pointerEvents: "none",
              ...o,
            },
            className: s,
            onMouseEnter: u.startPause,
            onMouseLeave: u.endPause,
          },
          a.map((n) => {
            let o,
              s,
              a = n.position || e,
              c = u.calculateOffset(n, {
                reverseOrder: t,
                gutter: r,
                defaultPosition: e,
              }),
              l =
                ((o = a.includes("top")),
                (s = a.includes("center")
                  ? { justifyContent: "center" }
                  : a.includes("right")
                  ? { justifyContent: "flex-end" }
                  : {}),
                {
                  left: 0,
                  right: 0,
                  display: "flex",
                  position: "absolute",
                  transition: r1()
                    ? void 0
                    : "all 230ms cubic-bezier(.21,1.02,.73,1)",
                  transform: `translateY(${c * (o ? 1 : -1)}px)`,
                  ...(o ? { top: 0 } : { bottom: 0 }),
                  ...s,
                });
            return v.createElement(
              ix,
              {
                id: n.id,
                key: n.id,
                onHeightUpdate: u.updateHeight,
                className: n.visible ? iw : "",
                style: l,
              },
              "custom" === n.type
                ? rZ(n.message, n)
                : i
                ? i(n)
                : v.createElement(iS, { toast: n, position: a })
            );
          })
        );
      },
      iT = t.i(95903),
      iO = t.i(92463),
      ik = t.i(68553);
    let iC = (0, iO.default)(() => t.A(76812), {
      loadableGenerated: { modules: [210] },
      ssr: !1,
    });
    ((s = {
      dsn: "https://774b07ea29644bc1897a8d429ca5d3ff@sentry-op.fampay.in/6",
      integrations: [new n9.BrowserTracing()],
      tracesSampleRate: 0.01,
    })._metadata = s._metadata || {}),
      (s._metadata.sdk = s._metadata.sdk || {
        name: "sentry.javascript.react",
        packages: [{ name: "npm:@sentry/react", version: t8 }],
        version: t8,
      }),
      (function (t) {
        if (
          (void 0 === t && (t = {}),
          void 0 === t.defaultIntegrations && (t.defaultIntegrations = ng),
          void 0 === t.release)
        ) {
          var e,
            n,
            r,
            i,
            o = P();
          o.SENTRY_RELEASE &&
            o.SENTRY_RELEASE.id &&
            (t.release = o.SENTRY_RELEASE.id);
        }
        void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
          void 0 === t.sendClientReports && (t.sendClientReports = !0),
          !0 === (e = t).debug &&
            (tD
              ? a.enable()
              : console.warn(
                  "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
                )),
          (r = (n = tP()).getScope()) && r.update(e.initialScope),
          (i = new e9(e)),
          n.bindClient(i),
          t.autoSessionTracking &&
            (function () {
              if (void 0 === P().document) {
                eU &&
                  a.warn(
                    "Session tracking in non-browser environment with @sentry/browser is not supported."
                  );
                return;
              }
              var t = tP();
              t.captureSession &&
                (n_(t),
                tY("history", function (t) {
                  var e = t.from,
                    n = t.to;
                  void 0 !== e && e !== n && n_(tP());
                }));
            })();
      })(s),
      t.s(
        [
          "default",
          0,
          function ({ Component: t, pageProps: e }) {
            let [n] = (0, v.useState)(
              () =>
                new rI({
                  defaultOptions: {
                    queries: { refetchOnWindowFocus: !1, retry: !1 },
                  },
                })
            );
            return (
              iT.default.configure({ showSpinner: !1 }),
              n7.default.events.on("routeChangeStart", () =>
                iT.default.start()
              ),
              n7.default.events.on("routeChangeComplete", () =>
                iT.default.done()
              ),
              n7.default.events.on("routeChangeError", () => iT.default.done()),
              (0, h.jsx)(rN, {
                client: n,
                children: (0, h.jsxs)(rL, {
                  state: e.dehydratedState,
                  children: [
                    (0, h.jsxs)(m.default, {
                      children: [
                        (0, h.jsx)("meta", {
                          name: "viewport",
                          content:
                            "width=device-width, initial-scale=1, user-scalable=0, shrink-to-fit=no",
                        }),
                        (0, h.jsx)("title", {
                          children:
                            "FamApp: Make payments with your own UPI and Card",
                        }),
                      ],
                    }),
                    (0, h.jsxs)(ik.MediaContextProvider, {
                      disableDynamicMediaQueries: !0,
                      children: [
                        (0, h.jsx)(iC, {}),
                        (0, h.jsx)(t, { ...e, isAnnouncement: !0 }),
                        (0, h.jsx)(rF.ReactQueryDevtools, {
                          initialIsOpen: !1,
                        }),
                        (0, h.jsx)(iE, {}),
                      ],
                    }),
                  ],
                }),
              })
            );
          },
        ],
        62302
      );
  },
  88709,
  (t, e, n) => {
    let r = "/_app";
    (window.__NEXT_P = window.__NEXT_P || []).push([r, () => t.r(62302)]),
      e.hot &&
        e.hot.dispose(function () {
          window.__NEXT_P.push([r]);
        });
  },
]);

//# sourceMappingURL=75e966caf0c61c0f.js.map
