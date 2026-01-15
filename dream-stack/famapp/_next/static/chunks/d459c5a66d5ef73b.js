(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  55107,
  (e) => {
    e.v({
      content_container: "about-module-scss-module__AyfnqW__content_container",
      enterpreneurs_card:
        "about-module-scss-module__AyfnqW__enterpreneurs_card",
      entrepreneurs_section:
        "about-module-scss-module__AyfnqW__entrepreneurs_section",
      famstars_section: "about-module-scss-module__AyfnqW__famstars_section",
      header_heading: "about-module-scss-module__AyfnqW__header_heading",
      icon_container: "about-module-scss-module__AyfnqW__icon_container",
      opening_section: "about-module-scss-module__AyfnqW__opening_section",
      orange_horizontal_rule:
        "about-module-scss-module__AyfnqW__orange_horizontal_rule",
      text_container: "about-module-scss-module__AyfnqW__text_container",
      values_card: "about-module-scss-module__AyfnqW__values_card",
      values_section: "about-module-scss-module__AyfnqW__values_section",
    });
  },
  76460,
  (e) => {
    e.v({
      arrow_down: "FamstarsContainer-module-scss-module__VlQ8-q__arrow_down",
      arrow_up: "FamstarsContainer-module-scss-module__VlQ8-q__arrow_up",
      each_group_wrapper:
        "FamstarsContainer-module-scss-module__VlQ8-q__each_group_wrapper",
      famstar_card:
        "FamstarsContainer-module-scss-module__VlQ8-q__famstar_card",
      famstar_name:
        "FamstarsContainer-module-scss-module__VlQ8-q__famstar_name",
      famstar_role:
        "FamstarsContainer-module-scss-module__VlQ8-q__famstar_role",
      famstar_status:
        "FamstarsContainer-module-scss-module__VlQ8-q__famstar_status",
      famstars_container:
        "FamstarsContainer-module-scss-module__VlQ8-q__famstars_container",
      mob_famstar_card_container:
        "FamstarsContainer-module-scss-module__VlQ8-q__mob_famstar_card_container",
      mob_scrollable_container:
        "FamstarsContainer-module-scss-module__VlQ8-q__mob_scrollable_container",
      progress_bar:
        "FamstarsContainer-module-scss-module__VlQ8-q__progress_bar",
      progress_bar_wrapper:
        "FamstarsContainer-module-scss-module__VlQ8-q__progress_bar_wrapper",
      scrollable_container:
        "FamstarsContainer-module-scss-module__VlQ8-q__scrollable_container",
    });
  },
  67308,
  (e) => {
    "use strict";
    var t,
      a,
      r,
      n,
      s,
      i,
      o,
      l = e.i(68601),
      u = e.i(75705),
      d = e.i(83427),
      f = e.i(98011),
      c = e.i(64738),
      h = e.i(55107),
      m = e.i(29749),
      p = e.i(35792),
      g = N(),
      _ = (e) => S(e, g),
      x = N();
    _.write = (e) => S(e, x);
    var y = N();
    _.onStart = (e) => S(e, y);
    var b = N();
    _.onFrame = (e) => S(e, b);
    var v = N();
    _.onFinish = (e) => S(e, v);
    var w = [];
    _.setTimeout = (e, t) => {
      let a = _.now() + t,
        r = () => {
          let e = w.findIndex((e) => e.cancel == r);
          ~e && w.splice(e, 1), (E -= !!~e);
        },
        n = { time: a, handler: e, cancel: r };
      return w.splice(k(a), 0, n), (E += 1), C(), n;
    };
    var k = (e) => ~(~w.findIndex((t) => t.time > e) || ~w.length);
    (_.cancel = (e) => {
      y.delete(e), b.delete(e), v.delete(e), g.delete(e), x.delete(e);
    }),
      (_.sync = (e) => {
        (I = !0), _.batchedUpdates(e), (I = !1);
      }),
      (_.throttle = (e) => {
        let t;
        function a() {
          try {
            e(...t);
          } finally {
            t = null;
          }
        }
        function r(...e) {
          (t = e), _.onStart(a);
        }
        return (
          (r.handler = e),
          (r.cancel = () => {
            y.delete(a), (t = null);
          }),
          r
        );
      });
    var j =
      "undefined" != typeof window ? window.requestAnimationFrame : () => {};
    (_.use = (e) => (j = e)),
      (_.now =
        "undefined" != typeof performance ? () => performance.now() : Date.now),
      (_.batchedUpdates = (e) => e()),
      (_.catch = console.error),
      (_.frameLoop = "always"),
      (_.advance = () => {
        "demand" !== _.frameLoop
          ? console.warn(
              "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
            )
          : M();
      });
    var P = -1,
      E = 0,
      I = !1;
    function S(e, t) {
      I ? (t.delete(e), e(0)) : (t.add(e), C());
    }
    function C() {
      P < 0 && ((P = 0), "demand" !== _.frameLoop && j(A));
    }
    function A() {
      ~P && (j(A), _.batchedUpdates(M));
    }
    function M() {
      let e = P,
        t = k((P = _.now()));
      (t && (R(w.splice(0, t), (e) => e.handler()), (E -= t)), E)
        ? (y.flush(),
          g.flush(e ? Math.min(64, P - e) : 16.667),
          b.flush(),
          x.flush(),
          v.flush())
        : (P = -1);
    }
    function N() {
      let e = new Set(),
        t = e;
      return {
        add(a) {
          (E += +!(t != e || e.has(a))), e.add(a);
        },
        delete: (a) => ((E -= t == e && e.has(a) ? 1 : 0), e.delete(a)),
        flush(a) {
          t.size &&
            ((e = new Set()),
            (E -= t.size),
            R(t, (t) => t(a) && e.add(t)),
            (E += e.size),
            (t = e));
        },
      };
    }
    function R(e, t) {
      e.forEach((e) => {
        try {
          t(e);
        } catch (e) {
          _.catch(e);
        }
      });
    }
    var V = Object.defineProperty,
      O = {},
      F = {
        assign: () => J,
        colors: () => U,
        createStringInterpolator: () => r,
        skipAnimation: () => G,
        to: () => n,
        willAdvance: () => H,
      };
    for (var T in F) V(O, T, { get: F[T], enumerable: !0 });
    function q() {}
    var $ = {
      arr: Array.isArray,
      obj: (e) => !!e && "Object" === e.constructor.name,
      fun: (e) => "function" == typeof e,
      str: (e) => "string" == typeof e,
      num: (e) => "number" == typeof e,
      und: (e) => void 0 === e,
    };
    function z(e, t) {
      if ($.arr(e)) {
        if (!$.arr(t) || e.length !== t.length) return !1;
        for (let a = 0; a < e.length; a++) if (e[a] !== t[a]) return !1;
        return !0;
      }
      return e === t;
    }
    function D(e, t, a) {
      if ($.arr(e)) {
        for (let r = 0; r < e.length; r++) t.call(a, e[r], `${r}`);
        return;
      }
      for (let r in e) e.hasOwnProperty(r) && t.call(a, e[r], r);
    }
    var Q = (e) => ($.und(e) ? [] : $.arr(e) ? e : [e]);
    function L(e, t) {
      if (e.size) {
        let a = Array.from(e);
        e.clear(), a.forEach(t);
      }
    }
    var B = (e, ...t) => L(e, (e) => e(...t)),
      W = () =>
        "undefined" == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
      U = null,
      G = !1,
      H = q,
      J = (e) => {
        e.to && (n = e.to),
          e.now && (_.now = e.now),
          void 0 !== e.colors && (U = e.colors),
          null != e.skipAnimation && (G = e.skipAnimation),
          e.createStringInterpolator && (r = e.createStringInterpolator),
          e.requestAnimationFrame && _.use(e.requestAnimationFrame),
          e.batchedUpdates && (_.batchedUpdates = e.batchedUpdates),
          e.willAdvance && (H = e.willAdvance),
          e.frameLoop && (_.frameLoop = e.frameLoop);
      },
      K = new Set(),
      X = [],
      Y = [],
      Z = 0,
      ee = {
        get idle() {
          return !K.size && !X.length;
        },
        start(e) {
          Z > e.priority ? (K.add(e), _.onStart(et)) : (ea(e), _(en));
        },
        advance: en,
        sort(e) {
          if (Z) _.onFrame(() => ee.sort(e));
          else {
            let t = X.indexOf(e);
            ~t && (X.splice(t, 1), er(e));
          }
        },
        clear() {
          (X = []), K.clear();
        },
      };
    function et() {
      K.forEach(ea), K.clear(), _(en);
    }
    function ea(e) {
      X.includes(e) || er(e);
    }
    function er(e) {
      var t, a;
      let r;
      X.splice(
        ((t = X),
        (a = (t) => t.priority > e.priority),
        (r = t.findIndex(a)) < 0 ? t.length : r),
        0,
        e
      );
    }
    function en(e) {
      let t = Y;
      for (let a = 0; a < X.length; a++) {
        let r = X[a];
        (Z = r.priority), !r.idle && (H(r), r.advance(e), r.idle || t.push(r));
      }
      return (Z = 0), ((Y = X).length = 0), (X = t).length > 0;
    }
    var es = "[-+]?\\d*\\.?\\d+",
      ei = es + "%";
    function eo(...e) {
      return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
    }
    var el = RegExp("rgb" + eo(es, es, es)),
      eu = RegExp("rgba" + eo(es, es, es, es)),
      ed = RegExp("hsl" + eo(es, ei, ei)),
      ef = RegExp("hsla" + eo(es, ei, ei, es)),
      ec = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      eh =
        /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      em = /^#([0-9a-fA-F]{6})$/,
      ep = /^#([0-9a-fA-F]{8})$/;
    function eg(e, t, a) {
      return (a < 0 && (a += 1), a > 1 && (a -= 1), a < 1 / 6)
        ? e + (t - e) * 6 * a
        : a < 0.5
        ? t
        : a < 2 / 3
        ? e + (t - e) * (2 / 3 - a) * 6
        : e;
    }
    function e_(e, t, a) {
      let r = a < 0.5 ? a * (1 + t) : a + t - a * t,
        n = 2 * a - r;
      return (
        (Math.round(255 * eg(n, r, e + 1 / 3)) << 24) |
        (Math.round(255 * eg(n, r, e)) << 16) |
        (Math.round(255 * eg(n, r, e - 1 / 3)) << 8)
      );
    }
    function ex(e) {
      let t = parseInt(e, 10);
      return t < 0 ? 0 : t > 255 ? 255 : t;
    }
    function ey(e) {
      return (((parseFloat(e) % 360) + 360) % 360) / 360;
    }
    function eb(e) {
      let t = parseFloat(e);
      return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
    }
    function ev(e) {
      let t = parseFloat(e);
      return t < 0 ? 0 : t > 100 ? 1 : t / 100;
    }
    function ew(e) {
      let t,
        a =
          "number" == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 0xffffffff
              ? e
              : null
            : (t = em.exec(e))
            ? parseInt(t[1] + "ff", 16) >>> 0
            : U && void 0 !== U[e]
            ? U[e]
            : (t = el.exec(e))
            ? ((ex(t[1]) << 24) | (ex(t[2]) << 16) | (ex(t[3]) << 8) | 255) >>>
              0
            : (t = eu.exec(e))
            ? ((ex(t[1]) << 24) |
                (ex(t[2]) << 16) |
                (ex(t[3]) << 8) |
                eb(t[4])) >>>
              0
            : (t = ec.exec(e))
            ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
            : (t = ep.exec(e))
            ? parseInt(t[1], 16) >>> 0
            : (t = eh.exec(e))
            ? parseInt(
                t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4],
                16
              ) >>> 0
            : (t = ed.exec(e))
            ? (255 | e_(ey(t[1]), ev(t[2]), ev(t[3]))) >>> 0
            : (t = ef.exec(e))
            ? (e_(ey(t[1]), ev(t[2]), ev(t[3])) | eb(t[4])) >>> 0
            : null;
      if (null === a) return e;
      let r = (0xff000000 & (a = a || 0)) >>> 24,
        n = (0xff0000 & a) >>> 16,
        s = (65280 & a) >>> 8,
        i = (255 & a) / 255;
      return `rgba(${r}, ${n}, ${s}, ${i})`;
    }
    var ek = (e, t, a) => {
        if ($.fun(e)) return e;
        if ($.arr(e)) return ek({ range: e, output: t, extrapolate: a });
        if ($.str(e.output[0])) return r(e);
        let n = e.output,
          s = e.range || [0, 1],
          i = e.extrapolateLeft || e.extrapolate || "extend",
          o = e.extrapolateRight || e.extrapolate || "extend",
          l = e.easing || ((e) => e);
        return (t) => {
          let a = (function (e, t) {
            for (var a = 1; a < t.length - 1 && !(t[a] >= e); ++a);
            return a - 1;
          })(t, s);
          return (function (e, t, a, r, n, s, i, o, l) {
            let u = l ? l(e) : e;
            if (u < t)
              if ("identity" === i) return u;
              else "clamp" === i && (u = t);
            if (u > a)
              if ("identity" === o) return u;
              else "clamp" === o && (u = a);
            return r === n
              ? r
              : t === a
              ? e <= t
                ? r
                : n
              : (t === -1 / 0
                  ? (u = -u)
                  : a === 1 / 0
                  ? (u -= t)
                  : (u = (u - t) / (a - t)),
                (u = s(u)),
                r === -1 / 0
                  ? (u = -u)
                  : n === 1 / 0
                  ? (u += r)
                  : (u = u * (n - r) + r),
                u);
          })(t, s[a], s[a + 1], n[a], n[a + 1], l, i, o, e.map);
        };
      },
      ej = (2 * Math.PI) / 3,
      eP = (2 * Math.PI) / 4.5,
      eE = (e) =>
        e < 0.36363636363636365
          ? 7.5625 * e * e
          : e < 0.7272727272727273
          ? 7.5625 * (e -= 0.5454545454545454) * e + 0.75
          : e < 0.9090909090909091
          ? 7.5625 * (e -= 0.8181818181818182) * e + 0.9375
          : 7.5625 * (e -= 0.9545454545454546) * e + 0.984375,
      eI = {
        linear: (e) => e,
        easeInQuad: (e) => e * e,
        easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
        easeInOutQuad: (e) =>
          e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
        easeInCubic: (e) => e * e * e,
        easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
        easeInOutCubic: (e) =>
          e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
        easeInQuart: (e) => e * e * e * e,
        easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
        easeInOutQuart: (e) =>
          e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
        easeInQuint: (e) => e * e * e * e * e,
        easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
        easeInOutQuint: (e) =>
          e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
        easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
        easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
        easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
        easeInExpo: (e) => (0 === e ? 0 : Math.pow(2, 10 * e - 10)),
        easeOutExpo: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
        easeInOutExpo: (e) =>
          0 === e
            ? 0
            : 1 === e
            ? 1
            : e < 0.5
            ? Math.pow(2, 20 * e - 10) / 2
            : (2 - Math.pow(2, -20 * e + 10)) / 2,
        easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
        easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
        easeInOutCirc: (e) =>
          e < 0.5
            ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
            : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
        easeInBack: (e) => 2.70158 * e * e * e - 1.70158 * e * e,
        easeOutBack: (e) =>
          1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
        easeInOutBack: (e) =>
          e < 0.5
            ? (Math.pow(2 * e, 2) * (7.189819 * e - 2.5949095)) / 2
            : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + 2.5949095) +
                2) /
              2,
        easeInElastic: (e) =>
          0 === e
            ? 0
            : 1 === e
            ? 1
            : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ej),
        easeOutElastic: (e) =>
          0 === e
            ? 0
            : 1 === e
            ? 1
            : Math.pow(2, -10 * e) * Math.sin((10 * e - 0.75) * ej) + 1,
        easeInOutElastic: (e) =>
          0 === e
            ? 0
            : 1 === e
            ? 1
            : e < 0.5
            ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * eP)) / 2
            : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * eP)) /
                2 +
              1,
        easeInBounce: (e) => 1 - eE(1 - e),
        easeOutBounce: eE,
        easeInOutBounce: (e) =>
          e < 0.5 ? (1 - eE(1 - 2 * e)) / 2 : (1 + eE(2 * e - 1)) / 2,
        steps:
          (e, t = "end") =>
          (a) => {
            let r =
              (a = "end" === t ? Math.min(a, 0.999) : Math.max(a, 0.001)) * e;
            return Math.min(
              Math.max(("end" === t ? Math.floor(r) : Math.ceil(r)) / e, 0),
              1
            );
          },
      },
      eS = Symbol.for("FluidValue.get"),
      eC = Symbol.for("FluidValue.observers"),
      eA = (e) => !!(e && e[eS]),
      eM = (e) => (e && e[eS] ? e[eS]() : e),
      eN = (e) => e[eC] || null;
    function eR(e, t) {
      let a = e[eC];
      a &&
        a.forEach((e) => {
          e.eventObserved ? e.eventObserved(t) : e(t);
        });
    }
    var eV = class {
        constructor(e) {
          if (!e && !(e = this.get)) throw Error("Unknown getter");
          eO(this, e);
        }
      },
      eO = (e, t) => eq(e, eS, t);
    function eF(e, t) {
      if (e[eS]) {
        let a = e[eC];
        a || eq(e, eC, (a = new Set())),
          !a.has(t) &&
            (a.add(t), e.observerAdded && e.observerAdded(a.size, t));
      }
      return t;
    }
    function eT(e, t) {
      let a = e[eC];
      if (a && a.has(t)) {
        let r = a.size - 1;
        r ? a.delete(t) : (e[eC] = null),
          e.observerRemoved && e.observerRemoved(r, t);
      }
    }
    var eq = (e, t, a) =>
        Object.defineProperty(e, t, {
          value: a,
          writable: !0,
          configurable: !0,
        }),
      e$ = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
      ez =
        /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
      eD = RegExp(`(${e$.source})(%|[a-z]+)`, "i"),
      eQ = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
      eL = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
      eB = (e) => {
        let [t, a] = eW(e);
        if (!t || W()) return e;
        let r = window
          .getComputedStyle(document.documentElement)
          .getPropertyValue(t);
        if (r) return r.trim();
        if (a && a.startsWith("--")) {
          let e = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(a);
          if (e) return e;
        } else if (a && eL.test(a)) return eB(a);
        else if (a) return a;
        return e;
      },
      eW = (e) => {
        let t = eL.exec(e);
        if (!t) return [,];
        let [, a, r] = t;
        return [a, r];
      },
      eU = (e, t, a, r, n) =>
        `rgba(${Math.round(t)}, ${Math.round(a)}, ${Math.round(r)}, ${n})`,
      eG = (e) => {
        s ||
          (s = U
            ? RegExp(`(${Object.keys(U).join("|")})(?!\\w)`, "g")
            : /^\b$/);
        let t = e.output.map((e) =>
            eM(e).replace(eL, eB).replace(ez, ew).replace(s, ew)
          ),
          a = t.map((e) => e.match(e$).map(Number)),
          r = a[0]
            .map((e, t) =>
              a.map((e) => {
                if (!(t in e))
                  throw Error('The arity of each "output" value must be equal');
                return e[t];
              })
            )
            .map((t) => ek({ ...e, output: t }));
        return (e) => {
          let a = !eD.test(t[0]) && t.find((e) => eD.test(e))?.replace(e$, ""),
            n = 0;
          return t[0]
            .replace(e$, () => `${r[n++](e)}${a || ""}`)
            .replace(eQ, eU);
        };
      },
      eH = "react-spring: ",
      eJ = (e) => {
        let t = !1;
        if ("function" != typeof e)
          throw TypeError(`${eH}once requires a function parameter`);
        return (...a) => {
          t || (e(...a), (t = !0));
        };
      },
      eK = eJ(console.warn);
    function eX() {
      eK(
        `${eH}The "interpolate" function is deprecated in v9 (use "to" instead)`
      );
    }
    var eY = eJ(console.warn);
    function eZ(e) {
      return (
        $.str(e) &&
        ("#" == e[0] || /\d/.test(e) || (!W() && eL.test(e)) || e in (U || {}))
      );
    }
    var e0 = new WeakMap(),
      e1 = (e) =>
        e.forEach(({ target: e, contentRect: t }) =>
          e0.get(e)?.forEach((e) => e(t))
        ),
      e2 = new Set(),
      e5 = (e, { container: t = document.documentElement } = {}) => {
        let a;
        if (t === document.documentElement) {
          let t;
          return (
            e2.add(e),
            o ||
              ((t = () => {
                e2.forEach((e) =>
                  e({ width: window.innerWidth, height: window.innerHeight })
                );
              }),
              window.addEventListener("resize", t),
              (o = () => {
                window.removeEventListener("resize", t);
              })),
            () => {
              e2.delete(e), !e2.size && o && (o(), (o = void 0));
            }
          );
        }
        return (
          i ||
            "undefined" == typeof ResizeObserver ||
            (i = new ResizeObserver(e1)),
          (a = e0.get(t)) || ((a = new Set()), e0.set(t, a)),
          a.add(e),
          i && i.observe(t),
          () => {
            let a = e0.get(t);
            a && (a.delete(e), !a.size && i && i.unobserve(t));
          }
        );
      },
      e8 = {
        x: { length: "Width", position: "Left" },
        y: { length: "Height", position: "Top" },
      },
      e9 = class {
        constructor(e, t) {
          (this.createAxis = () => ({
            current: 0,
            progress: 0,
            scrollLength: 0,
          })),
            (this.updateAxis = (e) => {
              let t,
                a,
                r = this.info[e],
                { length: n, position: s } = e8[e];
              (r.current = this.container[`scroll${s}`]),
                (r.scrollLength =
                  this.container[`scroll${n}`] - this.container[`client${n}`]),
                (t = r.scrollLength),
                (a = r.current),
                (r.progress = t - 0 == 0 ? 1 : (a - 0) / (t - 0));
            }),
            (this.update = () => {
              this.updateAxis("x"), this.updateAxis("y");
            }),
            (this.sendEvent = () => {
              this.callback(this.info);
            }),
            (this.advance = () => {
              this.update(), this.sendEvent();
            }),
            (this.callback = e),
            (this.container = t),
            (this.info = {
              time: 0,
              x: this.createAxis(),
              y: this.createAxis(),
            });
        }
      },
      e6 = new WeakMap(),
      e3 = new WeakMap(),
      e4 = new WeakMap(),
      e7 = (e) => (e === document.documentElement ? window : e),
      te = W() ? u.useEffect : u.useLayoutEffect;
    function tt() {
      let e,
        t = (0, u.useState)()[1],
        a =
          ((e = (0, u.useRef)(!1)),
          te(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e);
      return () => {
        a.current && t(Math.random());
      };
    }
    var ta = (e) => (0, u.useEffect)(e, tr),
      tr = [];
    function tn(e) {
      let t = (0, u.useRef)();
      return (
        (0, u.useEffect)(() => {
          t.current = e;
        }),
        t.current
      );
    }
    var ts = () => {
        let [e, t] = (0, u.useState)(null);
        return (
          te(() => {
            let e = window.matchMedia("(prefers-reduced-motion)"),
              a = (e) => {
                t(e.matches), J({ skipAnimation: e.matches });
              };
            return (
              a(e),
              e.addEventListener
                ? e.addEventListener("change", a)
                : e.addListener(a),
              () => {
                e.removeEventListener
                  ? e.removeEventListener("change", a)
                  : e.removeListener(a);
              }
            );
          }, []),
          e
        );
      },
      ti = Symbol.for("Animated:node"),
      to = (e) => e && e[ti],
      tl = (e, t) =>
        Object.defineProperty(e, ti, {
          value: t,
          writable: !0,
          configurable: !0,
        }),
      tu = (e) => e && e[ti] && e[ti].getPayload(),
      td = class {
        constructor() {
          tl(this, this);
        }
        getPayload() {
          return this.payload || [];
        }
      },
      tf = class extends td {
        constructor(e) {
          super(),
            (this._value = e),
            (this.done = !0),
            (this.durationProgress = 0),
            $.num(this._value) && (this.lastPosition = this._value);
        }
        static create(e) {
          return new tf(e);
        }
        getPayload() {
          return [this];
        }
        getValue() {
          return this._value;
        }
        setValue(e, t) {
          return (
            $.num(e) &&
              ((this.lastPosition = e),
              t &&
                ((e = Math.round(e / t) * t),
                this.done && (this.lastPosition = e))),
            this._value !== e && ((this._value = e), !0)
          );
        }
        reset() {
          let { done: e } = this;
          (this.done = !1),
            $.num(this._value) &&
              ((this.elapsedTime = 0),
              (this.durationProgress = 0),
              (this.lastPosition = this._value),
              e && (this.lastVelocity = null),
              (this.v0 = null));
        }
      },
      tc = class extends tf {
        constructor(e) {
          super(0),
            (this._string = null),
            (this._toString = ek({ output: [e, e] }));
        }
        static create(e) {
          return new tc(e);
        }
        getValue() {
          let e = this._string;
          return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
          if ($.str(e)) {
            if (e == this._string) return !1;
            (this._string = e), (this._value = 1);
          } else {
            if (!super.setValue(e)) return !1;
            this._string = null;
          }
          return !0;
        }
        reset(e) {
          e && (this._toString = ek({ output: [this.getValue(), e] })),
            (this._value = 0),
            super.reset();
        }
      },
      th = { dependencies: null },
      tm = class extends td {
        constructor(e) {
          super(), (this.source = e), this.setValue(e);
        }
        getValue(e) {
          let t = {};
          return (
            D(this.source, (a, r) => {
              a && a[ti] === a
                ? (t[r] = a.getValue(e))
                : eA(a)
                ? (t[r] = eM(a))
                : e || (t[r] = a);
            }),
            t
          );
        }
        setValue(e) {
          (this.source = e), (this.payload = this._makePayload(e));
        }
        reset() {
          let e;
          this.payload && ((e = this.payload), e.forEach((e) => e.reset()));
        }
        _makePayload(e) {
          if (e) {
            let t = new Set();
            return D(e, this._addToPayload, t), Array.from(t);
          }
        }
        _addToPayload(e) {
          let t;
          th.dependencies && eA(e) && th.dependencies.add(e);
          let a = tu(e);
          a && ((t = (e) => this.add(e)), a.forEach(t));
        }
      },
      tp = class extends tm {
        constructor(e) {
          super(e);
        }
        static create(e) {
          return new tp(e);
        }
        getValue() {
          return this.source.map((e) => e.getValue());
        }
        setValue(e) {
          let t = this.getPayload();
          return e.length == t.length
            ? t.map((t, a) => t.setValue(e[a])).some(Boolean)
            : (super.setValue(e.map(tg)), !0);
        }
      };
    function tg(e) {
      return (eZ(e) ? tc : tf).create(e);
    }
    function t_(e) {
      let t = to(e);
      return t ? t.constructor : $.arr(e) ? tp : eZ(e) ? tc : tf;
    }
    var tx = (e, t) => {
        let a = !$.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return (0, u.forwardRef)((r, n) => {
          var s, i;
          let o,
            l = (0, u.useRef)(null),
            d =
              a &&
              (0, u.useCallback)(
                (e) => {
                  var t, a;
                  (t = n),
                    (a = e),
                    t && ($.fun(t) ? t(a) : (t.current = a)),
                    (l.current = a);
                },
                [n]
              ),
            [f, c] =
              ((s = r),
              (i = t),
              (th.dependencies = o = new Set()),
              s.style && (s = { ...s, style: i.createAnimatedStyle(s.style) }),
              (s = new tm(s)),
              (th.dependencies = null),
              [s, o]),
            h = tt(),
            m = () => {
              let e = l.current;
              (a && !e) ||
                (!1 === (!!e && t.applyAnimatedValues(e, f.getValue(!0))) &&
                  h());
            },
            p = new ty(m, c),
            g = (0, u.useRef)();
          te(() => {
            let e;
            return (
              (g.current = p),
              (e = (e) => eF(e, p)),
              c.forEach(e),
              () => {
                if (g.current) {
                  let e;
                  (e = g.current.deps),
                    e.forEach((e) => eT(e, g.current)),
                    _.cancel(g.current.update);
                }
              }
            );
          }),
            (0, u.useEffect)(m, []),
            ta(() => () => {
              let e,
                t = g.current;
              (e = t.deps), e.forEach((e) => eT(e, t));
            });
          let x = t.getComponentProps(f.getValue());
          return u.createElement(e, { ...x, ref: d });
        });
      },
      ty = class {
        constructor(e, t) {
          (this.update = e), (this.deps = t);
        }
        eventObserved(e) {
          "change" == e.type && _.write(this.update);
        }
      },
      tb = Symbol.for("AnimatedComponent"),
      tv = (e) =>
        $.str(e)
          ? e
          : e && $.str(e.displayName)
          ? e.displayName
          : ($.fun(e) && e.name) || null,
      tw = class {};
    function tk(e, ...t) {
      return $.fun(e) ? e(...t) : e;
    }
    e.s(["Any", () => tw], 84624);
    var tj = (e, t) =>
        !0 === e || !!(t && e && ($.fun(e) ? e(t) : Q(e).includes(t))),
      tP = (e, t) => ($.obj(e) ? t && e[t] : e),
      tE = (e, t) =>
        !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
      tI = (e) => e,
      tS = (e, t = tI) => {
        let a = tC;
        e.default && !0 !== e.default && (a = Object.keys((e = e.default)));
        let r = {};
        for (let n of a) {
          let a = t(e[n], n);
          $.und(a) || (r[n] = a);
        }
        return r;
      },
      tC = [
        "config",
        "onProps",
        "onStart",
        "onChange",
        "onPause",
        "onResume",
        "onRest",
      ],
      tA = {
        config: 1,
        from: 1,
        to: 1,
        ref: 1,
        loop: 1,
        reset: 1,
        pause: 1,
        cancel: 1,
        reverse: 1,
        immediate: 1,
        default: 1,
        delay: 1,
        onProps: 1,
        onStart: 1,
        onChange: 1,
        onPause: 1,
        onResume: 1,
        onRest: 1,
        onResolve: 1,
        items: 1,
        trail: 1,
        sort: 1,
        expires: 1,
        initial: 1,
        enter: 1,
        update: 1,
        leave: 1,
        children: 1,
        onDestroyed: 1,
        keys: 1,
        callId: 1,
        parentId: 1,
      };
    function tM(e) {
      let t = (function (e) {
        let t = {},
          a = 0;
        if (
          (D(e, (e, r) => {
            !tA[r] && ((t[r] = e), a++);
          }),
          a)
        )
          return t;
      })(e);
      if (t) {
        let a = { to: t };
        return D(e, (e, r) => r in t || (a[r] = e)), a;
      }
      return { ...e };
    }
    function tN(e) {
      return (
        (e = eM(e)),
        $.arr(e)
          ? e.map(tN)
          : eZ(e)
          ? O.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
          : e
      );
    }
    function tR(e) {
      for (let t in e) return !0;
      return !1;
    }
    function tV(e) {
      return $.fun(e) || ($.arr(e) && $.obj(e[0]));
    }
    function tO(e, t) {
      e.ref?.delete(e), t?.delete(e);
    }
    function tF(e, t) {
      t && e.ref !== t && (e.ref?.delete(e), t.add(e), (e.ref = t));
    }
    function tT(e, t, a = 1e3) {
      te(() => {
        if (t) {
          let r = 0;
          e.forEach((e, n) => {
            let s = e.current;
            if (s.length) {
              let i = a * t[n];
              isNaN(i) ? (i = r) : (r = i),
                s.forEach((e) => {
                  let t;
                  (t = e.queue),
                    t.forEach((e) => {
                      let t = e.delay;
                      e.delay = (e) => i + tk(t || 0, e);
                    });
                }),
                e.start();
            }
          });
        } else {
          let t = Promise.resolve();
          e.forEach((e) => {
            let a = e.current;
            if (a.length) {
              let r = a.map((e) => {
                let t = e.queue;
                return (e.queue = []), t;
              });
              t = t.then(() => {
                let t;
                return (
                  (t = (e, t) => {
                    let a, n;
                    return (
                      (a = r[t] || []),
                      (n = (t) => e.queue.push(t)),
                      a.forEach(n)
                    );
                  }),
                  a.forEach(t),
                  Promise.all(e.start())
                );
              });
            }
          });
        }
      });
    }
    var tq = {
        default: { tension: 170, friction: 26 },
        gentle: { tension: 120, friction: 14 },
        wobbly: { tension: 180, friction: 12 },
        stiff: { tension: 210, friction: 20 },
        slow: { tension: 280, friction: 60 },
        molasses: { tension: 280, friction: 120 },
      },
      t$ = { ...tq.default, mass: 1, damping: 1, easing: eI.linear, clamp: !1 },
      tz = class {
        constructor() {
          (this.velocity = 0), Object.assign(this, t$);
        }
      };
    function tD(e, t) {
      if ($.und(t.decay)) {
        let a = !$.und(t.tension) || !$.und(t.friction);
        (!a && $.und(t.frequency) && $.und(t.damping) && $.und(t.mass)) ||
          ((e.duration = void 0), (e.decay = void 0)),
          a && (e.frequency = void 0);
      } else e.duration = void 0;
    }
    var tQ = [],
      tL = class {
        constructor() {
          (this.changed = !1),
            (this.values = tQ),
            (this.toValues = null),
            (this.fromValues = tQ),
            (this.config = new tz()),
            (this.immediate = !1);
        }
      };
    function tB(
      e,
      { key: t, props: a, defaultProps: r, state: n, actions: s }
    ) {
      return new Promise((i, o) => {
        let l,
          u,
          d = tj(a.cancel ?? r?.cancel, t);
        if (d) h();
        else {
          $.und(a.pause) || (n.paused = tj(a.pause, t));
          let e = r?.pause;
          !0 !== e && (e = n.paused || tj(e, t)),
            (l = tk(a.delay || 0, t)),
            e ? (n.resumeQueue.add(c), s.pause()) : (s.resume(), c());
        }
        function f() {
          n.resumeQueue.add(c),
            n.timeouts.delete(u),
            u.cancel(),
            (l = u.time - _.now());
        }
        function c() {
          l > 0 && !O.skipAnimation
            ? ((n.delayed = !0),
              (u = _.setTimeout(h, l)),
              n.pauseQueue.add(f),
              n.timeouts.add(u))
            : h();
        }
        function h() {
          n.delayed && (n.delayed = !1),
            n.pauseQueue.delete(f),
            n.timeouts.delete(u),
            e <= (n.cancelId || 0) && (d = !0);
          try {
            s.start({ ...a, callId: e, cancel: d }, i);
          } catch (e) {
            o(e);
          }
        }
      });
    }
    var tW = (e, t) =>
        1 == t.length
          ? t[0]
          : t.some((e) => e.cancelled)
          ? tH(e.get())
          : t.every((e) => e.noop)
          ? tU(e.get())
          : tG(
              e.get(),
              t.every((e) => e.finished)
            ),
      tU = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
      tG = (e, t, a = !1) => ({ value: e, finished: t, cancelled: a }),
      tH = (e) => ({ value: e, cancelled: !0, finished: !1 });
    function tJ(e, t, a, r) {
      let { callId: n, parentId: s, onRest: i } = t,
        { asyncTo: o, promise: l } = a;
      return s || e !== o || t.reset
        ? (a.promise = (async () => {
            let u, d, f;
            (a.asyncId = n), (a.asyncTo = e);
            let c = tS(t, (e, t) => ("onRest" === t ? void 0 : e)),
              h = new Promise((e, t) => ((u = e), (d = t))),
              m = (e) => {
                let t =
                  (n <= (a.cancelId || 0) && tH(r)) ||
                  (n !== a.asyncId && tG(r, !1));
                if (t) throw ((e.result = t), d(e), e);
              },
              p = (e, t) => {
                let s = new tX(),
                  i = new tY();
                return (async () => {
                  if (O.skipAnimation)
                    throw (tK(a), (i.result = tG(r, !1)), d(i), i);
                  m(s);
                  let o = $.obj(e) ? { ...e } : { ...t, to: e };
                  (o.parentId = n),
                    D(c, (e, t) => {
                      $.und(o[t]) && (o[t] = e);
                    });
                  let l = await r.start(o);
                  return (
                    m(s),
                    a.paused &&
                      (await new Promise((e) => {
                        a.resumeQueue.add(e);
                      })),
                    l
                  );
                })();
              };
            if (O.skipAnimation) return tK(a), tG(r, !1);
            try {
              let t;
              (t = $.arr(e)
                ? (async (e) => {
                    for (let t of e) await p(t);
                  })(e)
                : Promise.resolve(e(p, r.stop.bind(r)))),
                await Promise.all([t.then(u), h]),
                (f = tG(r.get(), !0, !1));
            } catch (e) {
              if (e instanceof tX) f = e.result;
              else if (e instanceof tY) f = e.result;
              else throw e;
            } finally {
              n == a.asyncId &&
                ((a.asyncId = s),
                (a.asyncTo = s ? o : void 0),
                (a.promise = s ? l : void 0));
            }
            return (
              $.fun(i) &&
                _.batchedUpdates(() => {
                  i(f, r, r.item);
                }),
              f
            );
          })())
        : l;
    }
    function tK(e, t) {
      L(e.timeouts, (e) => e.cancel()),
        e.pauseQueue.clear(),
        e.resumeQueue.clear(),
        (e.asyncId = e.asyncTo = e.promise = void 0),
        t && (e.cancelId = t);
    }
    var tX = class extends Error {
        constructor() {
          super(
            "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
          );
        }
      },
      tY = class extends Error {
        constructor() {
          super("SkipAnimationSignal");
        }
      },
      tZ = 1,
      t0 = class extends eV {
        constructor() {
          super(...arguments), (this.id = tZ++), (this._priority = 0);
        }
        get priority() {
          return this._priority;
        }
        set priority(e) {
          this._priority != e &&
            ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
          let e = to(this);
          return e && e.getValue();
        }
        to(...e) {
          return O.to(this, e);
        }
        interpolate(...e) {
          return eX(), O.to(this, e);
        }
        toJSON() {
          return this.get();
        }
        observerAdded(e) {
          1 == e && this._attach();
        }
        observerRemoved(e) {
          0 == e && this._detach();
        }
        _attach() {}
        _detach() {}
        _onChange(e, t = !1) {
          eR(this, { type: "change", parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
          this.idle || ee.sort(this),
            eR(this, { type: "priority", parent: this, priority: e });
        }
      },
      t1 = Symbol.for("SpringPhase"),
      t2 = (e) => (1 & e[t1]) > 0,
      t5 = (e) => (2 & e[t1]) > 0,
      t8 = (e) => (4 & e[t1]) > 0,
      t9 = (e, t) => (t ? (e[t1] |= 3) : (e[t1] &= -3)),
      t6 = (e, t) => (t ? (e[t1] |= 4) : (e[t1] &= -5)),
      t3 = class extends t0 {
        constructor(e, t) {
          if (
            (super(),
            (this.animation = new tL()),
            (this.defaultProps = {}),
            (this._state = {
              paused: !1,
              delayed: !1,
              pauseQueue: new Set(),
              resumeQueue: new Set(),
              timeouts: new Set(),
            }),
            (this._pendingCalls = new Set()),
            (this._lastCallId = 0),
            (this._lastToId = 0),
            (this._memoizedDuration = 0),
            !$.und(e) || !$.und(t))
          ) {
            const a = $.obj(e) ? { ...e } : { ...t, from: e };
            $.und(a.default) && (a.default = !0), this.start(a);
          }
        }
        get idle() {
          return !(t5(this) || this._state.asyncTo) || t8(this);
        }
        get goal() {
          return eM(this.animation.to);
        }
        get velocity() {
          let e = to(this);
          return e instanceof tf
            ? e.lastVelocity || 0
            : e.getPayload().map((e) => e.lastVelocity || 0);
        }
        get hasAnimated() {
          return t2(this);
        }
        get isAnimating() {
          return t5(this);
        }
        get isPaused() {
          return t8(this);
        }
        get isDelayed() {
          return this._state.delayed;
        }
        advance(e) {
          let t = !0,
            a = !1,
            r = this.animation,
            { toValues: n } = r,
            { config: s } = r,
            i = tu(r.to);
          !i && eA(r.to) && (n = Q(eM(r.to))),
            r.values.forEach((o, l) => {
              if (o.done) return;
              let u = o.constructor == tc ? 1 : i ? i[l].lastPosition : n[l],
                d = r.immediate,
                f = u;
              if (!d) {
                let t;
                if (((f = o.lastPosition), s.tension <= 0)) {
                  o.done = !0;
                  return;
                }
                let a = (o.elapsedTime += e),
                  n = r.fromValues[l],
                  i =
                    null != o.v0
                      ? o.v0
                      : (o.v0 = $.arr(s.velocity) ? s.velocity[l] : s.velocity),
                  c =
                    s.precision ||
                    (n == u ? 0.005 : Math.min(1, 0.001 * Math.abs(u - n)));
                if ($.und(s.duration))
                  if (s.decay) {
                    let e = !0 === s.decay ? 0.998 : s.decay,
                      r = Math.exp(-(1 - e) * a);
                    (f = n + (i / (1 - e)) * (1 - r)),
                      (d = Math.abs(o.lastPosition - f) <= c),
                      (t = i * r);
                  } else {
                    t = null == o.lastVelocity ? i : o.lastVelocity;
                    let a = s.restVelocity || c / 10,
                      r = s.clamp ? 0 : s.bounce,
                      l = !$.und(r),
                      h = n == u ? o.v0 > 0 : n < u,
                      m = Math.ceil(e / 1);
                    for (
                      let e = 0;
                      e < m &&
                      !(!(Math.abs(t) > a) && (d = Math.abs(u - f) <= c));
                      ++e
                    ) {
                      l && (f == u || f > u == h) && ((t = -t * r), (f = u));
                      let e =
                        (-(1e-6 * s.tension) * (f - u) +
                          -(0.001 * s.friction) * t) /
                        s.mass;
                      (t += +e), (f += +t);
                    }
                  }
                else {
                  let r = 1;
                  s.duration > 0 &&
                    (this._memoizedDuration !== s.duration &&
                      ((this._memoizedDuration = s.duration),
                      o.durationProgress > 0 &&
                        ((o.elapsedTime = s.duration * o.durationProgress),
                        (a = o.elapsedTime += e))),
                    (o.durationProgress = r =
                      (r = (s.progress || 0) + a / this._memoizedDuration) > 1
                        ? 1
                        : r < 0
                        ? 0
                        : r)),
                    (t =
                      ((f = n + s.easing(r) * (u - n)) - o.lastPosition) / e),
                    (d = 1 == r);
                }
                (o.lastVelocity = t),
                  Number.isNaN(f) &&
                    (console.warn("Got NaN while animating:", this), (d = !0));
              }
              i && !i[l].done && (d = !1),
                d ? (o.done = !0) : (t = !1),
                o.setValue(f, s.round) && (a = !0);
            });
          let o = to(this),
            l = o.getValue();
          if (t) {
            let e = eM(r.to);
            (l !== e || a) && !s.decay
              ? (o.setValue(e), this._onChange(e))
              : a && s.decay && this._onChange(l),
              this._stop();
          } else a && this._onChange(l);
        }
        set(e) {
          return (
            _.batchedUpdates(() => {
              this._stop(), this._focus(e), this._set(e);
            }),
            this
          );
        }
        pause() {
          this._update({ pause: !0 });
        }
        resume() {
          this._update({ pause: !1 });
        }
        finish() {
          if (t5(this)) {
            let { to: e, config: t } = this.animation;
            _.batchedUpdates(() => {
              this._onStart(), t.decay || this._set(e, !1), this._stop();
            });
          }
          return this;
        }
        update(e) {
          return (this.queue || (this.queue = [])).push(e), this;
        }
        start(e, t) {
          let a;
          return (
            $.und(e)
              ? ((a = this.queue || []), (this.queue = []))
              : (a = [$.obj(e) ? e : { ...t, to: e }]),
            Promise.all(a.map((e) => this._update(e))).then((e) => tW(this, e))
          );
        }
        stop(e) {
          let { to: t } = this.animation;
          return (
            this._focus(this.get()),
            tK(this._state, e && this._lastCallId),
            _.batchedUpdates(() => this._stop(t, e)),
            this
          );
        }
        reset() {
          this._update({ reset: !0 });
        }
        eventObserved(e) {
          "change" == e.type
            ? this._start()
            : "priority" == e.type && (this.priority = e.priority + 1);
        }
        _prepareNode(e) {
          let t = this.key || "",
            { to: a, from: r } = e;
          (null == (a = $.obj(a) ? a[t] : a) || tV(a)) && (a = void 0),
            null == (r = $.obj(r) ? r[t] : r) && (r = void 0);
          let n = { to: a, from: r };
          return (
            !t2(this) &&
              (e.reverse && ([a, r] = [r, a]),
              (r = eM(r)),
              $.und(r) ? to(this) || this._set(a) : this._set(r)),
            n
          );
        }
        _update({ ...e }, t) {
          let { key: a, defaultProps: r } = this;
          e.default &&
            Object.assign(
              r,
              tS(e, (e, t) => (/^on/.test(t) ? tP(e, a) : e))
            ),
            ar(this, e, "onProps"),
            an(this, "onProps", e, this);
          let n = this._prepareNode(e);
          if (Object.isFrozen(this))
            throw Error(
              "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
            );
          let s = this._state;
          return tB(++this._lastCallId, {
            key: a,
            props: e,
            defaultProps: r,
            state: s,
            actions: {
              pause: () => {
                t8(this) ||
                  (t6(this, !0),
                  B(s.pauseQueue),
                  an(
                    this,
                    "onPause",
                    tG(this, t4(this, this.animation.to)),
                    this
                  ));
              },
              resume: () => {
                t8(this) &&
                  (t6(this, !1),
                  t5(this) && this._resume(),
                  B(s.resumeQueue),
                  an(
                    this,
                    "onResume",
                    tG(this, t4(this, this.animation.to)),
                    this
                  ));
              },
              start: this._merge.bind(this, n),
            },
          }).then((a) => {
            if (e.loop && a.finished && !(t && a.noop)) {
              let t = t7(e);
              if (t) return this._update(t, !0);
            }
            return a;
          });
        }
        _merge(e, t, a) {
          if (t.cancel) return this.stop(!0), a(tH(this));
          let r = !$.und(e.to),
            n = !$.und(e.from);
          if (r || n)
            if (!(t.callId > this._lastToId)) return a(tH(this));
            else this._lastToId = t.callId;
          let { key: s, defaultProps: i, animation: o } = this,
            { to: l, from: u } = o,
            { to: d = l, from: f = u } = e;
          n && !r && (!t.default || $.und(d)) && (d = f),
            t.reverse && ([d, f] = [f, d]);
          let c = !z(f, u);
          c && (o.from = f), (f = eM(f));
          let h = !z(d, l);
          h && this._focus(d);
          let m = tV(t.to),
            { config: p } = o,
            { decay: g, velocity: x } = p;
          (r || n) && (p.velocity = 0),
            t.config &&
              !m &&
              (function (e, t, a) {
                for (let r in (a &&
                  (tD((a = { ...a }), t), (t = { ...a, ...t })),
                tD(e, t),
                Object.assign(e, t),
                t$))
                  null == e[r] && (e[r] = t$[r]);
                let { frequency: r, damping: n } = e,
                  { mass: s } = e;
                $.und(r) ||
                  (r < 0.01 && (r = 0.01),
                  n < 0 && (n = 0),
                  (e.tension = Math.pow((2 * Math.PI) / r, 2) * s),
                  (e.friction = (4 * Math.PI * n * s) / r));
              })(
                p,
                tk(t.config, s),
                t.config !== i.config ? tk(i.config, s) : void 0
              );
          let y = to(this);
          if (!y || $.und(d)) return a(tG(this, !0));
          let b = $.und(t.reset)
              ? n && !t.default
              : !$.und(f) && tj(t.reset, s),
            v = b ? f : this.get(),
            w = tN(d),
            k = $.num(w) || $.arr(w) || eZ(w),
            j = !m && (!k || tj(i.immediate || t.immediate, s));
          if (h) {
            let e = t_(d);
            if (e !== y.constructor)
              if (j) y = this._set(w);
              else
                throw Error(
                  `Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`
                );
          }
          let P = y.constructor,
            E = eA(d),
            I = !1;
          if (!E) {
            let e = b || (!t2(this) && c);
            (h || e) && (E = !(I = z(tN(v), w))),
              ((z(o.immediate, j) || j) && z(p.decay, g) && z(p.velocity, x)) ||
                (E = !0);
          }
          if (
            (I && t5(this) && (o.changed && !b ? (E = !0) : E || this._stop(l)),
            !m &&
              ((E || eA(l)) &&
                ((o.values = y.getPayload()),
                (o.toValues = eA(d) ? null : P == tc ? [1] : Q(w))),
              o.immediate != j && ((o.immediate = j), j || b || this._set(l)),
              E))
          ) {
            let e,
              { onRest: r } = o;
            (e = (e) => ar(this, t, e)), aa.forEach(e);
            let n = tG(this, t4(this, l));
            B(this._pendingCalls, n),
              this._pendingCalls.add(a),
              o.changed &&
                _.batchedUpdates(() => {
                  (o.changed = !b),
                    r?.(n, this),
                    b ? tk(i.onRest, n) : o.onStart?.(n, this);
                });
          }
          b && this._set(v),
            m
              ? a(tJ(t.to, t, this._state, this))
              : E
              ? this._start()
              : t5(this) && !h
              ? this._pendingCalls.add(a)
              : a(tU(v));
        }
        _focus(e) {
          let t = this.animation;
          e !== t.to &&
            (eN(this) && this._detach(),
            (t.to = e),
            eN(this) && this._attach());
        }
        _attach() {
          let e = 0,
            { to: t } = this.animation;
          eA(t) && (eF(t, this), t instanceof t0 && (e = t.priority + 1)),
            (this.priority = e);
        }
        _detach() {
          let { to: e } = this.animation;
          eA(e) && eT(e, this);
        }
        _set(e, t = !0) {
          let a = eM(e);
          if (!$.und(a)) {
            let e = to(this);
            if (!e || !z(a, e.getValue())) {
              let r = t_(a);
              e && e.constructor == r ? e.setValue(a) : tl(this, r.create(a)),
                e &&
                  _.batchedUpdates(() => {
                    this._onChange(a, t);
                  });
            }
          }
          return to(this);
        }
        _onStart() {
          let e = this.animation;
          e.changed ||
            ((e.changed = !0),
            an(this, "onStart", tG(this, t4(this, e.to)), this));
        }
        _onChange(e, t) {
          t || (this._onStart(), tk(this.animation.onChange, e, this)),
            tk(this.defaultProps.onChange, e, this),
            super._onChange(e, t);
        }
        _start() {
          let e = this.animation;
          to(this).reset(eM(e.to)),
            e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
            !t5(this) && (t9(this, !0), t8(this) || this._resume());
        }
        _resume() {
          O.skipAnimation ? this.finish() : ee.start(this);
        }
        _stop(e, t) {
          if (t5(this)) {
            let a;
            t9(this, !1);
            let r = this.animation;
            (a = r.values),
              a.forEach((e) => {
                e.done = !0;
              }),
              r.toValues && (r.onChange = r.onPause = r.onResume = void 0),
              eR(this, { type: "idle", parent: this });
            let n = t ? tH(this.get()) : tG(this.get(), t4(this, e ?? r.to));
            B(this._pendingCalls, n),
              r.changed && ((r.changed = !1), an(this, "onRest", n, this));
          }
        }
      };
    function t4(e, t) {
      let a = tN(t);
      return z(tN(e.get()), a);
    }
    function t7(e, t = e.loop, a = e.to) {
      let r = tk(t);
      if (r) {
        let n = !0 !== r && tM(r),
          s = (n || e).reverse,
          i = !n || n.reset;
        return ae({
          ...e,
          loop: t,
          default: !1,
          pause: void 0,
          to: !s || tV(a) ? a : void 0,
          from: i ? e.from : void 0,
          reset: i,
          ...n,
        });
      }
    }
    function ae(e) {
      let { to: t, from: a } = (e = tM(e)),
        r = new Set();
      return (
        $.obj(t) && at(t, r),
        $.obj(a) && at(a, r),
        (e.keys = r.size ? Array.from(r) : null),
        e
      );
    }
    function at(e, t) {
      D(e, (e, a) => null != e && t.add(a));
    }
    var aa = ["onStart", "onRest", "onChange", "onPause", "onResume"];
    function ar(e, t, a) {
      e.animation[a] = t[a] !== tE(t, a) ? tP(t[a], e.key) : void 0;
    }
    function an(e, t, ...a) {
      e.animation[t]?.(...a), e.defaultProps[t]?.(...a);
    }
    var as = ["onStart", "onChange", "onRest"],
      ai = 1,
      ao = class {
        constructor(e, t) {
          (this.id = ai++),
            (this.springs = {}),
            (this.queue = []),
            (this._lastAsyncId = 0),
            (this._active = new Set()),
            (this._changed = new Set()),
            (this._started = !1),
            (this._state = {
              paused: !1,
              pauseQueue: new Set(),
              resumeQueue: new Set(),
              timeouts: new Set(),
            }),
            (this._events = {
              onStart: new Map(),
              onChange: new Map(),
              onRest: new Map(),
            }),
            (this._onFrame = this._onFrame.bind(this)),
            t && (this._flush = t),
            e && this.start({ default: !0, ...e });
        }
        get idle() {
          return (
            !this._state.asyncTo &&
            Object.values(this.springs).every(
              (e) => e.idle && !e.isDelayed && !e.isPaused
            )
          );
        }
        get item() {
          return this._item;
        }
        set item(e) {
          this._item = e;
        }
        get() {
          let e = {};
          return this.each((t, a) => (e[a] = t.get())), e;
        }
        set(e) {
          for (let t in e) {
            let a = e[t];
            $.und(a) || this.springs[t].set(a);
          }
        }
        update(e) {
          return e && this.queue.push(ae(e)), this;
        }
        start(e) {
          let { queue: t } = this;
          return (e ? (t = Q(e).map(ae)) : (this.queue = []), this._flush)
            ? this._flush(this, t)
            : (am(this, t), al(this, t));
        }
        stop(e, t) {
          if ((!!e !== e && (t = e), t)) {
            let a,
              r = this.springs;
            (a = Q(t)), a.forEach((t) => r[t].stop(!!e));
          } else
            tK(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e));
          return this;
        }
        pause(e) {
          if ($.und(e)) this.start({ pause: !0 });
          else {
            let t,
              a = this.springs;
            (t = Q(e)), t.forEach((e) => a[e].pause());
          }
          return this;
        }
        resume(e) {
          if ($.und(e)) this.start({ pause: !1 });
          else {
            let t,
              a = this.springs;
            (t = Q(e)), t.forEach((e) => a[e].resume());
          }
          return this;
        }
        each(e) {
          D(this.springs, e);
        }
        _onFrame() {
          let { onStart: e, onChange: t, onRest: a } = this._events,
            r = this._active.size > 0,
            n = this._changed.size > 0;
          ((r && !this._started) || (n && !this._started)) &&
            ((this._started = !0),
            L(e, ([e, t]) => {
              (t.value = this.get()), e(t, this, this._item);
            }));
          let s = !r && this._started,
            i = n || (s && a.size) ? this.get() : null;
          n &&
            t.size &&
            L(t, ([e, t]) => {
              (t.value = i), e(t, this, this._item);
            }),
            s &&
              ((this._started = !1),
              L(a, ([e, t]) => {
                (t.value = i), e(t, this, this._item);
              }));
        }
        eventObserved(e) {
          if ("change" == e.type)
            this._changed.add(e.parent), e.idle || this._active.add(e.parent);
          else {
            if ("idle" != e.type) return;
            this._active.delete(e.parent);
          }
          _.onFrame(this._onFrame);
        }
      };
    function al(e, t) {
      return Promise.all(t.map((t) => au(e, t))).then((t) => tW(e, t));
    }
    async function au(e, t, a) {
      let { keys: r, to: n, from: s, loop: i, onRest: o, onResolve: l } = t,
        u = $.obj(t.default) && t.default;
      i && (t.loop = !1),
        !1 === n && (t.to = null),
        !1 === s && (t.from = null);
      let d = $.arr(n) || $.fun(n) ? n : void 0;
      if (d) (t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0);
      else
        as.forEach((a) => {
          let r = t[a];
          if ($.fun(r)) {
            let n = e._events[a];
            (t[a] = ({ finished: e, cancelled: t }) => {
              let a = n.get(r);
              a
                ? (e || (a.finished = !1), t && (a.cancelled = !0))
                : n.set(r, {
                    value: null,
                    finished: e || !1,
                    cancelled: t || !1,
                  });
            }),
              u && (u[a] = t[a]);
          }
        });
      let f = e._state;
      !f.paused === t.pause
        ? ((f.paused = t.pause), B(t.pause ? f.pauseQueue : f.resumeQueue))
        : f.paused && (t.pause = !0);
      let c = (r || Object.keys(e.springs)).map((a) => e.springs[a].start(t)),
        h = !0 === t.cancel || !0 === tE(t, "cancel");
      (d || (h && f.asyncId)) &&
        c.push(
          tB(++e._lastAsyncId, {
            props: t,
            state: f,
            actions: {
              pause: q,
              resume: q,
              start(t, a) {
                h
                  ? (tK(f, e._lastAsyncId), a(tH(e)))
                  : ((t.onRest = o), a(tJ(d, t, f, e)));
              },
            },
          })
        ),
        f.paused &&
          (await new Promise((e) => {
            f.resumeQueue.add(e);
          }));
      let m = tW(e, await Promise.all(c));
      if (i && m.finished && !(a && m.noop)) {
        let a = t7(t, i, n);
        if (a) return am(e, [a]), au(e, a, !0);
      }
      return l && _.batchedUpdates(() => l(m, e, e.item)), m;
    }
    function ad(e, t) {
      let a,
        r,
        n = { ...e.springs };
      return (
        t &&
          ((a = Q(t)),
          (r = (e) => {
            $.und(e.keys) && (e = ae(e)),
              $.obj(e.to) || (e = { ...e, to: void 0 }),
              ah(n, e, (e) => ac(e));
          }),
          a.forEach(r)),
        af(e, n),
        n
      );
    }
    function af(e, t) {
      D(t, (t, a) => {
        e.springs[a] || ((e.springs[a] = t), eF(t, e));
      });
    }
    function ac(e, t) {
      let a = new t3();
      return (a.key = e), t && eF(a, t), a;
    }
    function ah(e, t, a) {
      let r;
      t.keys &&
        ((r = t.keys),
        r.forEach((r) => {
          (e[r] || (e[r] = a(r)))._prepareNode(t);
        }));
    }
    function am(e, t) {
      t.forEach((t) => {
        ah(e.springs, t, (t) => ac(t, e));
      });
    }
    var ap = ({ children: e, ...t }) => {
        let a = (0, u.useContext)(ag),
          r = t.pause || !!a.pause,
          n = t.immediate || !!a.immediate;
        t = (function (e, t) {
          let [a] = (0, u.useState)(() => ({ inputs: t, result: e() })),
            r = (0, u.useRef)(),
            n = r.current,
            s = n;
          return (
            s
              ? (t &&
                  s.inputs &&
                  (function (e, t) {
                    if (e.length !== t.length) return !1;
                    for (let a = 0; a < e.length; a++)
                      if (e[a] !== t[a]) return !1;
                    return !0;
                  })(t, s.inputs)) ||
                (s = { inputs: t, result: e() })
              : (s = a),
            (0, u.useEffect)(() => {
              (r.current = s), n == a && (a.inputs = a.result = void 0);
            }, [s]),
            s.result
          );
        })(() => ({ pause: r, immediate: n }), [r, n]);
        let { Provider: s } = ag;
        return u.createElement(s, { value: t }, e);
      },
      ag =
        ((a = {}),
        Object.assign((t = ap), u.createContext(a)),
        (t.Provider._context = t),
        (t.Consumer._context = t),
        t);
    (ap.Provider = ag.Provider), (ap.Consumer = ag.Consumer);
    var a_ = () => {
      let e = [],
        t = function (t) {
          let r;
          eY(
            `${eH}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
          );
          let n = [];
          return (
            (r = (e, r) => {
              if ($.und(t)) n.push(e.start());
              else {
                let s = a(t, e, r);
                s && n.push(e.start(s));
              }
            }),
            e.forEach(r),
            n
          );
        };
      (t.current = e),
        (t.add = function (t) {
          e.includes(t) || e.push(t);
        }),
        (t.delete = function (t) {
          let a = e.indexOf(t);
          ~a && e.splice(a, 1);
        }),
        (t.pause = function () {
          let t;
          return (t = (e) => e.pause(...arguments)), e.forEach(t), this;
        }),
        (t.resume = function () {
          let t;
          return (t = (e) => e.resume(...arguments)), e.forEach(t), this;
        }),
        (t.set = function (t) {
          e.forEach((e, a) => {
            let r = $.fun(t) ? t(a, e) : t;
            r && e.set(r);
          });
        }),
        (t.start = function (t) {
          let a,
            r = [];
          return (
            (a = (e, a) => {
              if ($.und(t)) r.push(e.start());
              else {
                let n = this._getProps(t, e, a);
                n && r.push(e.start(n));
              }
            }),
            e.forEach(a),
            r
          );
        }),
        (t.stop = function () {
          let t;
          return (t = (e) => e.stop(...arguments)), e.forEach(t), this;
        }),
        (t.update = function (t) {
          let a;
          return (
            (a = (e, a) => e.update(this._getProps(t, e, a))),
            e.forEach(a),
            this
          );
        });
      let a = function (e, t, a) {
        return $.fun(e) ? e(a, t) : e;
      };
      return (t._getProps = a), t;
    };
    function ax(e, t, a) {
      let r = $.fun(t) && t;
      r && !a && (a = []);
      let n = (0, u.useMemo)(
          () => (r || 3 == arguments.length ? a_() : void 0),
          []
        ),
        s = (0, u.useRef)(0),
        i = tt(),
        o = (0, u.useMemo)(
          () => ({
            ctrls: [],
            queue: [],
            flush(e, t) {
              let a = ad(e, t);
              return !(s.current > 0) ||
                o.queue.length ||
                Object.keys(a).some((t) => !e.springs[t])
                ? new Promise((r) => {
                    af(e, a),
                      o.queue.push(() => {
                        r(al(e, t));
                      }),
                      i();
                  })
                : al(e, t);
            },
          }),
          []
        ),
        l = (0, u.useRef)([...o.ctrls]),
        d = [],
        f = tn(e) || 0;
      function c(e, a) {
        for (let n = e; n < a; n++) {
          let e = l.current[n] || (l.current[n] = new ao(null, o.flush)),
            a = r ? r(n, e) : t[n];
          a &&
            (d[n] = (function (e) {
              let t = ae(e);
              return $.und(t.default) && (t.default = tS(t)), t;
            })(a));
        }
      }
      (0, u.useMemo)(() => {
        let t;
        (t = l.current.slice(e, f)),
          t.forEach((e) => {
            tO(e, n), e.stop(!0);
          }),
          (l.current.length = e),
          c(f, e);
      }, [e]),
        (0, u.useMemo)(() => {
          c(0, Math.min(f, e));
        }, a);
      let h = l.current.map((e, t) => ad(e, d[t])),
        m = (0, u.useContext)(ap),
        p = tn(m),
        g = m !== p && tR(m);
      te(() => {
        let e;
        s.current++, (o.ctrls = l.current);
        let { queue: t } = o;
        t.length && ((o.queue = []), t.forEach((e) => e()));
        (e = l.current),
          e.forEach((e, t) => {
            n?.add(e), g && e.start({ default: m });
            let a = d[t];
            a && (tF(e, a.ref), e.ref ? e.queue.push(a) : e.start(a));
          });
      }),
        ta(() => () => {
          let e;
          (e = o.ctrls), e.forEach((e) => e.stop(!0));
        });
      let _ = h.map((e) => ({ ...e }));
      return n ? [_, n] : _;
    }
    function ay(e, t) {
      let a = $.fun(e),
        [[r], n] = ax(1, a ? e : [e], a ? t || [] : t);
      return a || 2 == arguments.length ? [r, n] : r;
    }
    var ab = () => a_(),
      av = () => (0, u.useState)(ab)[0],
      aw = (e, t) => {
        var a;
        let r,
          n =
            ((a = () => new t3(e, t)),
            null === (r = (0, u.useRef)(null)).current && (r.current = a()),
            r.current);
        return (
          ta(() => () => {
            n.stop();
          }),
          n
        );
      };
    function ak(e, t, a) {
      let r,
        n = $.fun(t) && t;
      n && !a && (a = []);
      let s = !0,
        i = ax(
          e,
          (e, a) => {
            let i = n ? n(e, a) : t;
            return (r = i.ref), (s = s && i.reverse), i;
          },
          a || [{}]
        );
      if (
        (te(() => {
          let e;
          (e = i[1].current),
            e.forEach((e, t) => {
              let a = i[1].current[t + (s ? 1 : -1)];
              if ((tF(e, r), e.ref)) {
                a && e.update({ to: a.springs });
                return;
              }
              a ? e.start({ to: a.springs }) : e.start();
            });
        }, a),
        n || 3 == arguments.length)
      ) {
        let e = r ?? i[1];
        return (
          (e._getProps = (t, a, r) => {
            let n = $.fun(t) ? t(r, a) : t;
            if (n) {
              let t = e.current[r + (n.reverse ? 1 : -1)];
              return t && (n.to = t.springs), n;
            }
          }),
          i
        );
      }
      return i[0];
    }
    function aj(e, t, a) {
      let r,
        n = $.fun(t) && t,
        {
          reset: s,
          sort: i,
          trail: o = 0,
          expires: l = !0,
          exitBeforeEnter: d = !1,
          onDestroyed: f,
          ref: c,
          config: h,
        } = n ? n() : t,
        m = (0, u.useMemo)(
          () => (n || 3 == arguments.length ? a_() : void 0),
          []
        ),
        p = Q(e),
        g = [],
        _ = (0, u.useRef)(null),
        x = s ? null : _.current;
      te(() => {
        _.current = g;
      }),
        ta(() => {
          let e;
          return (
            (e = (e) => {
              m?.add(e.ctrl), (e.ctrl.ref = m);
            }),
            g.forEach(e),
            () => {
              let e;
              (e = _.current),
                e.forEach((e) => {
                  e.expired && clearTimeout(e.expirationId),
                    tO(e.ctrl, m),
                    e.ctrl.stop(!0);
                });
            }
          );
        });
      let y = (function (e, { key: t, keys: a = t }, r) {
          if (null === a) {
            let t = new Set();
            return e.map((e) => {
              let a =
                r &&
                r.find((a) => a.item === e && "leave" !== a.phase && !t.has(a));
              return a ? (t.add(a), a.key) : aP++;
            });
          }
          return $.und(a) ? e : $.fun(a) ? e.map(a) : Q(a);
        })(p, n ? n() : t, x),
        b = (s && _.current) || [];
      te(() => {
        let e;
        return (
          (e = ({ ctrl: e, item: t, key: a }) => {
            tO(e, m), tk(f, t, a);
          }),
          b.forEach(e)
        );
      });
      let v = [];
      if (
        (x &&
          x.forEach((e, t) => {
            e.expired
              ? (clearTimeout(e.expirationId), b.push(e))
              : ~(t = v[t] = y.indexOf(e.key)) && (g[t] = e);
          }),
        (r = (e, t) => {
          g[t] ||
            ((g[t] = { key: y[t], item: e, phase: "mount", ctrl: new ao() }),
            (g[t].ctrl.item = e));
        }),
        p.forEach(r),
        v.length)
      ) {
        let e = -1,
          { leave: a } = n ? n() : t;
        v.forEach((t, r) => {
          let n = x[r];
          ~t
            ? ((e = g.indexOf(n)), (g[e] = { ...n, item: p[t] }))
            : a && g.splice(++e, 0, n);
        });
      }
      $.fun(i) && g.sort((e, t) => i(e.item, t.item));
      let w = -o,
        k = tt(),
        j = tS(t),
        P = new Map(),
        E = (0, u.useRef)(new Map()),
        I = (0, u.useRef)(!1);
      g.forEach((e, a) => {
        let r,
          s,
          i = e.key,
          u = e.phase,
          f = n ? n() : t,
          m = tk(f.delay || 0, i);
        if ("mount" == u) (r = f.enter), (s = "enter");
        else {
          let e = 0 > y.indexOf(i);
          if ("leave" != u)
            if (e) (r = f.leave), (s = "leave");
            else {
              if (!(r = f.update)) return;
              s = "update";
            }
          else {
            if (e) return;
            (r = f.enter), (s = "enter");
          }
        }
        if (
          ((r = tk(r, e.item, a)), !(r = $.obj(r) ? tM(r) : { to: r }).config)
        ) {
          let t = h || j.config;
          r.config = tk(t, e.item, a, s);
        }
        w += o;
        let p = {
          ...j,
          delay: m + w,
          ref: c,
          immediate: f.immediate,
          reset: !1,
          ...r,
        };
        if ("enter" == s && $.und(p.from)) {
          let r = n ? n() : t;
          p.from = tk($.und(r.initial) || x ? r.from : r.initial, e.item, a);
        }
        let { onResolve: g } = p;
        p.onResolve = (e) => {
          tk(g, e);
          let t = _.current,
            a = t.find((e) => e.key === i);
          if (a && (!e.cancelled || "update" == a.phase) && a.ctrl.idle) {
            let e = t.every((e) => e.ctrl.idle);
            if ("leave" == a.phase) {
              let t = tk(l, a.item);
              if (!1 !== t) {
                let r = !0 === t ? 0 : t;
                if (((a.expired = !0), !e && r > 0)) {
                  r <= 0x7fffffff && (a.expirationId = setTimeout(k, r));
                  return;
                }
              }
            }
            e &&
              t.some((e) => e.expired) &&
              (E.current.delete(a), d && (I.current = !0), k());
          }
        };
        let b = ad(e.ctrl, p);
        "leave" === s && d
          ? E.current.set(e, { phase: s, springs: b, payload: p })
          : P.set(e, { phase: s, springs: b, payload: p });
      });
      let S = (0, u.useContext)(ap),
        C = tn(S),
        A = S !== C && tR(S);
      te(() => {
        A &&
          g.forEach((e) => {
            e.ctrl.start({ default: S });
          });
      }, [S]),
        P.forEach((e, t) => {
          if (E.current.size) {
            let e = g.findIndex((e) => e.key === t.key);
            g.splice(e, 1);
          }
        }),
        te(
          () => {
            let e;
            (e = E.current.size ? E.current : P),
              e.forEach(({ phase: e, payload: t }, a) => {
                let { ctrl: r } = a;
                (a.phase = e),
                  m?.add(r),
                  A && "enter" == e && r.start({ default: S }),
                  t &&
                    (tF(r, t.ref),
                    (r.ref || m) && !I.current
                      ? r.update(t)
                      : (r.start(t), I.current && (I.current = !1)));
              });
          },
          s ? void 0 : a
        );
      let M = (e) =>
        u.createElement(
          u.Fragment,
          null,
          g.map((t, a) => {
            let { springs: r } = P.get(t) || t.ctrl,
              n = e({ ...r }, t.item, t, a);
            return n && n.type
              ? u.createElement(n.type, {
                  ...n.props,
                  key: $.str(t.key) || $.num(t.key) ? t.key : t.ctrl.id,
                  ref: n.ref,
                })
              : n;
          })
        );
      return m ? [M, m] : M;
    }
    var aP = 1,
      aE = ({ container: e, ...t } = {}) => {
        let [a, r] = ay(
          () => ({
            scrollX: 0,
            scrollY: 0,
            scrollXProgress: 0,
            scrollYProgress: 0,
            ...t,
          }),
          []
        );
        return (
          te(() => {
            let t = ((e, { container: t = document.documentElement } = {}) => {
              let a = e4.get(t);
              a || ((a = new Set()), e4.set(t, a));
              let r = new e9(e, t);
              if ((a.add(r), !e6.has(t))) {
                let e = () => (a?.forEach((e) => e.advance()), !0);
                e6.set(t, e);
                let r = e7(t);
                window.addEventListener("resize", e, { passive: !0 }),
                  t !== document.documentElement &&
                    e3.set(t, e5(e, { container: t })),
                  r.addEventListener("scroll", e, { passive: !0 });
              }
              let n = e6.get(t);
              return (
                _(n),
                () => {
                  _.cancel(n);
                  let e = e4.get(t);
                  if (!e || (e.delete(r), e.size)) return;
                  let a = e6.get(t);
                  e6.delete(t),
                    a &&
                      (e7(t).removeEventListener("scroll", a),
                      window.removeEventListener("resize", a),
                      e3.get(t)?.());
                }
              );
            })(
              ({ x: e, y: t }) => {
                r.start({
                  scrollX: e.current,
                  scrollXProgress: e.progress,
                  scrollY: t.current,
                  scrollYProgress: t.progress,
                });
              },
              { container: e?.current || void 0 }
            );
            return () => {
              let e;
              (e = Object.values(a)), e.forEach((e) => e.stop()), t();
            };
          }, []),
          a
        );
      },
      aI = ({ container: e, ...t }) => {
        let [a, r] = ay(() => ({ width: 0, height: 0, ...t }), []);
        return (
          te(() => {
            let t = e5(
              ({ width: e, height: t }) => {
                r.start({
                  width: e,
                  height: t,
                  immediate: 0 === a.width.get() || 0 === a.height.get(),
                });
              },
              { container: e?.current || void 0 }
            );
            return () => {
              let e;
              (e = Object.values(a)), e.forEach((e) => e.stop()), t();
            };
          }, []),
          a
        );
      },
      aS = { any: 0, all: 1 };
    function aC(e, t) {
      let [a, r] = (0, u.useState)(!1),
        n = (0, u.useRef)(),
        s = $.fun(e) && e,
        { to: i = {}, from: o = {}, ...l } = s ? s() : {},
        d = s ? t : e,
        [f, c] = ay(() => ({ from: o, ...l }), []);
      return (te(() => {
        let e = n.current,
          { root: t, once: s, amount: l = "any", ...u } = d ?? {};
        if (!e || (s && a) || "undefined" == typeof IntersectionObserver)
          return;
        let f = new WeakMap(),
          h = new IntersectionObserver(
            (e) => {
              e.forEach((e) => {
                let t = f.get(e.target);
                if (!!t !== e.isIntersecting)
                  if (e.isIntersecting) {
                    let t =
                      (i && c.start(i),
                      r(!0),
                      s
                        ? void 0
                        : () => {
                            o && c.start(o), r(!1);
                          });
                    $.fun(t) ? f.set(e.target, t) : h.unobserve(e.target);
                  } else t && (t(), f.delete(e.target));
              });
            },
            {
              root: (t && t.current) || void 0,
              threshold: "number" == typeof l || Array.isArray(l) ? l : aS[l],
              ...u,
            }
          );
        return h.observe(e), () => h.unobserve(e);
      }, [d]),
      s)
        ? [n, f]
        : [n, a];
    }
    function aA({ children: e, ...t }) {
      return e(ay(t));
    }
    function aM({ items: e, children: t, ...a }) {
      let r = ak(e.length, a);
      return e.map((e, a) => {
        let n = t(e, a);
        return $.fun(n) ? n(r[a]) : n;
      });
    }
    function aN({ items: e, children: t, ...a }) {
      return aj(e, a)(t);
    }
    var aR = class extends t0 {
      constructor(e, t) {
        super(),
          (this.source = e),
          (this.idle = !0),
          (this._active = new Set()),
          (this.calc = ek(...t));
        const a = this._get();
        tl(this, t_(a).create(a));
      }
      advance(e) {
        let t = this._get();
        z(t, this.get()) ||
          (to(this).setValue(t), this._onChange(t, this.idle)),
          !this.idle && aO(this._active) && aF(this);
      }
      _get() {
        let e = $.arr(this.source) ? this.source.map(eM) : Q(eM(this.source));
        return this.calc(...e);
      }
      _start() {
        if (this.idle && !aO(this._active)) {
          let e;
          (this.idle = !1),
            (e = tu(this)),
            e.forEach((e) => {
              e.done = !1;
            }),
            O.skipAnimation
              ? (_.batchedUpdates(() => this.advance()), aF(this))
              : ee.start(this);
        }
      }
      _attach() {
        let e,
          t,
          a = 1;
        (e = Q(this.source)),
          (t = (e) => {
            eA(e) && eF(e, this),
              e instanceof t0 &&
                (e.idle || this._active.add(e),
                (a = Math.max(a, e.priority + 1)));
          }),
          e.forEach(t),
          (this.priority = a),
          this._start();
      }
      _detach() {
        let e, t;
        (e = Q(this.source)),
          (t = (e) => {
            eA(e) && eT(e, this);
          }),
          e.forEach(t),
          this._active.clear(),
          aF(this);
      }
      eventObserved(e) {
        "change" == e.type
          ? e.idle
            ? this.advance()
            : (this._active.add(e.parent), this._start())
          : "idle" == e.type
          ? this._active.delete(e.parent)
          : "priority" == e.type &&
            (this.priority = Q(this.source).reduce(
              (e, t) => Math.max(e, (t instanceof t0 ? t.priority : 0) + 1),
              0
            ));
      }
    };
    function aV(e) {
      return !1 !== e.idle;
    }
    function aO(e) {
      return !e.size || Array.from(e).every(aV);
    }
    function aF(e) {
      if (!e.idle) {
        let t;
        (e.idle = !0),
          (t = tu(e)),
          t.forEach((e) => {
            e.done = !0;
          }),
          eR(e, { type: "idle", parent: e });
      }
    }
    var aT = (e, ...t) => new aR(e, t),
      aq = (e, ...t) => (eX(), new aR(e, t));
    O.assign({ createStringInterpolator: eG, to: (e, t) => new aR(e, t) });
    var a$ = ee.advance;
    e.s(
      [
        "BailSignal",
        () => tX,
        "Controller",
        () => ao,
        "FrameValue",
        () => t0,
        "Interpolation",
        () => aR,
        "Spring",
        () => aA,
        "SpringContext",
        () => ap,
        "SpringRef",
        () => a_,
        "SpringValue",
        () => t3,
        "Trail",
        () => aM,
        "Transition",
        () => aN,
        "config",
        () => tq,
        "inferTo",
        () => tM,
        "interpolate",
        () => aq,
        "to",
        () => aT,
        "update",
        () => a$,
        "useChain",
        () => tT,
        "useInView",
        () => aC,
        "useResize",
        () => aI,
        "useScroll",
        () => aE,
        "useSpring",
        () => ay,
        "useSpringRef",
        () => av,
        "useSpringValue",
        () => aw,
        "useSprings",
        () => ax,
        "useTrail",
        () => ak,
        "useTransition",
        () => aj,
      ],
      82087
    );
    var az = e.i(11368),
      aD = /^--/,
      aQ = {},
      aL = {
        animationIterationCount: !0,
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
      aB = ["Webkit", "Ms", "Moz", "O"];
    aL = Object.keys(aL).reduce(
      (e, t) => (
        aB.forEach(
          (a) => (e[a + t.charAt(0).toUpperCase() + t.substring(1)] = e[t])
        ),
        e
      ),
      aL
    );
    var aW = /^(matrix|translate|scale|rotate|skew)/,
      aU = /^(translate)/,
      aG = /^(rotate|skew)/,
      aH = (e, t) => ($.num(e) && 0 !== e ? e + t : e),
      aJ = (e, t) =>
        $.arr(e)
          ? e.every((e) => aJ(e, t))
          : $.num(e)
          ? e === t
          : parseFloat(e) === t,
      aK = class extends tm {
        constructor({ x: e, y: t, z: a, ...r }) {
          const n = [],
            s = [];
          (e || t || a) &&
            (n.push([e || 0, t || 0, a || 0]),
            s.push((e) => [
              `translate3d(${e.map((e) => aH(e, "px")).join(",")})`,
              aJ(e, 0),
            ])),
            D(r, (e, t) => {
              if ("transform" === t)
                n.push([e || ""]), s.push((e) => [e, "" === e]);
              else if (aW.test(t)) {
                if ((delete r[t], $.und(e))) return;
                let a = aU.test(t) ? "px" : aG.test(t) ? "deg" : "";
                n.push(Q(e)),
                  s.push(
                    "rotate3d" === t
                      ? ([e, t, r, n]) => [
                          `rotate3d(${e},${t},${r},${aH(n, a)})`,
                          aJ(n, 0),
                        ]
                      : (e) => [
                          `${t}(${e.map((e) => aH(e, a)).join(",")})`,
                          aJ(e, +!!t.startsWith("scale")),
                        ]
                  );
              }
            }),
            n.length && (r.transform = new aX(n, s)),
            super(r);
        }
      },
      aX = class extends eV {
        constructor(e, t) {
          super(),
            (this.inputs = e),
            (this.transforms = t),
            (this._value = null);
        }
        get() {
          return this._value || (this._value = this._get());
        }
        _get() {
          let e,
            t,
            a = "",
            r = !0;
          return (
            (e = this.inputs),
            (t = (e, t) => {
              let n = eM(e[0]),
                [s, i] = this.transforms[t]($.arr(n) ? n : e.map(eM));
              (a += " " + s), (r = r && i);
            }),
            e.forEach(t),
            r ? "none" : a
          );
        }
        observerAdded(e) {
          let t, a;
          1 == e &&
            ((t = this.inputs),
            (a = (e) => {
              let t;
              return (t = (e) => eA(e) && eF(e, this)), e.forEach(t);
            }),
            t.forEach(a));
        }
        observerRemoved(e) {
          let t, a;
          0 == e &&
            ((t = this.inputs),
            (a = (e) => {
              let t;
              return (t = (e) => eA(e) && eT(e, this)), e.forEach(t);
            }),
            t.forEach(a));
        }
        eventObserved(e) {
          "change" == e.type && (this._value = null), eR(this, e);
        }
      };
    O.assign({
      batchedUpdates: az.unstable_batchedUpdates,
      createStringInterpolator: eG,
      colors: {
        transparent: 0,
        aliceblue: 0xf0f8ffff,
        antiquewhite: 0xfaebd7ff,
        aqua: 0xffffff,
        aquamarine: 0x7fffd4ff,
        azure: 0xf0ffffff,
        beige: 0xf5f5dcff,
        bisque: 0xffe4c4ff,
        black: 255,
        blanchedalmond: 0xffebcdff,
        blue: 65535,
        blueviolet: 0x8a2be2ff,
        brown: 0xa52a2aff,
        burlywood: 0xdeb887ff,
        burntsienna: 0xea7e5dff,
        cadetblue: 0x5f9ea0ff,
        chartreuse: 0x7fff00ff,
        chocolate: 0xd2691eff,
        coral: 0xff7f50ff,
        cornflowerblue: 0x6495edff,
        cornsilk: 0xfff8dcff,
        crimson: 0xdc143cff,
        cyan: 0xffffff,
        darkblue: 35839,
        darkcyan: 9145343,
        darkgoldenrod: 0xb8860bff,
        darkgray: 0xa9a9a9ff,
        darkgreen: 6553855,
        darkgrey: 0xa9a9a9ff,
        darkkhaki: 0xbdb76bff,
        darkmagenta: 0x8b008bff,
        darkolivegreen: 0x556b2fff,
        darkorange: 0xff8c00ff,
        darkorchid: 0x9932ccff,
        darkred: 0x8b0000ff,
        darksalmon: 0xe9967aff,
        darkseagreen: 0x8fbc8fff,
        darkslateblue: 0x483d8bff,
        darkslategray: 0x2f4f4fff,
        darkslategrey: 0x2f4f4fff,
        darkturquoise: 0xced1ff,
        darkviolet: 0x9400d3ff,
        deeppink: 0xff1493ff,
        deepskyblue: 0xbfffff,
        dimgray: 0x696969ff,
        dimgrey: 0x696969ff,
        dodgerblue: 0x1e90ffff,
        firebrick: 0xb22222ff,
        floralwhite: 0xfffaf0ff,
        forestgreen: 0x228b22ff,
        fuchsia: 0xff00ffff,
        gainsboro: 0xdcdcdcff,
        ghostwhite: 0xf8f8ffff,
        gold: 0xffd700ff,
        goldenrod: 0xdaa520ff,
        gray: 0x808080ff,
        green: 8388863,
        greenyellow: 0xadff2fff,
        grey: 0x808080ff,
        honeydew: 0xf0fff0ff,
        hotpink: 0xff69b4ff,
        indianred: 0xcd5c5cff,
        indigo: 0x4b0082ff,
        ivory: 0xfffff0ff,
        khaki: 0xf0e68cff,
        lavender: 0xe6e6faff,
        lavenderblush: 0xfff0f5ff,
        lawngreen: 0x7cfc00ff,
        lemonchiffon: 0xfffacdff,
        lightblue: 0xadd8e6ff,
        lightcoral: 0xf08080ff,
        lightcyan: 0xe0ffffff,
        lightgoldenrodyellow: 0xfafad2ff,
        lightgray: 0xd3d3d3ff,
        lightgreen: 0x90ee90ff,
        lightgrey: 0xd3d3d3ff,
        lightpink: 0xffb6c1ff,
        lightsalmon: 0xffa07aff,
        lightseagreen: 0x20b2aaff,
        lightskyblue: 0x87cefaff,
        lightslategray: 0x778899ff,
        lightslategrey: 0x778899ff,
        lightsteelblue: 0xb0c4deff,
        lightyellow: 0xffffe0ff,
        lime: 0xff00ff,
        limegreen: 0x32cd32ff,
        linen: 0xfaf0e6ff,
        magenta: 0xff00ffff,
        maroon: 0x800000ff,
        mediumaquamarine: 0x66cdaaff,
        mediumblue: 52735,
        mediumorchid: 0xba55d3ff,
        mediumpurple: 0x9370dbff,
        mediumseagreen: 0x3cb371ff,
        mediumslateblue: 0x7b68eeff,
        mediumspringgreen: 0xfa9aff,
        mediumturquoise: 0x48d1ccff,
        mediumvioletred: 0xc71585ff,
        midnightblue: 0x191970ff,
        mintcream: 0xf5fffaff,
        mistyrose: 0xffe4e1ff,
        moccasin: 0xffe4b5ff,
        navajowhite: 0xffdeadff,
        navy: 33023,
        oldlace: 0xfdf5e6ff,
        olive: 0x808000ff,
        olivedrab: 0x6b8e23ff,
        orange: 0xffa500ff,
        orangered: 0xff4500ff,
        orchid: 0xda70d6ff,
        palegoldenrod: 0xeee8aaff,
        palegreen: 0x98fb98ff,
        paleturquoise: 0xafeeeeff,
        palevioletred: 0xdb7093ff,
        papayawhip: 0xffefd5ff,
        peachpuff: 0xffdab9ff,
        peru: 0xcd853fff,
        pink: 0xffc0cbff,
        plum: 0xdda0ddff,
        powderblue: 0xb0e0e6ff,
        purple: 0x800080ff,
        rebeccapurple: 0x663399ff,
        red: 0xff0000ff,
        rosybrown: 0xbc8f8fff,
        royalblue: 0x4169e1ff,
        saddlebrown: 0x8b4513ff,
        salmon: 0xfa8072ff,
        sandybrown: 0xf4a460ff,
        seagreen: 0x2e8b57ff,
        seashell: 0xfff5eeff,
        sienna: 0xa0522dff,
        silver: 0xc0c0c0ff,
        skyblue: 0x87ceebff,
        slateblue: 0x6a5acdff,
        slategray: 0x708090ff,
        slategrey: 0x708090ff,
        snow: 0xfffafaff,
        springgreen: 0xff7fff,
        steelblue: 0x4682b4ff,
        tan: 0xd2b48cff,
        teal: 8421631,
        thistle: 0xd8bfd8ff,
        tomato: 0xff6347ff,
        turquoise: 0x40e0d0ff,
        violet: 0xee82eeff,
        wheat: 0xf5deb3ff,
        white: 0xffffffff,
        whitesmoke: 0xf5f5f5ff,
        yellow: 0xffff00ff,
        yellowgreen: 0x9acd32ff,
      },
    });
    var aY = ((
      e,
      {
        applyAnimatedValues: t = () => !1,
        createAnimatedStyle: a = (e) => new tm(e),
        getComponentProps: r = (e) => e,
      } = {}
    ) => {
      let n = {
          applyAnimatedValues: t,
          createAnimatedStyle: a,
          getComponentProps: r,
        },
        s = (e) => {
          let t = tv(e) || "Anonymous";
          return (
            ((e = $.str(e)
              ? s[e] || (s[e] = tx(e, n))
              : e[tb] || (e[tb] = tx(e, n))).displayName = `Animated(${t})`),
            e
          );
        };
      return (
        D(e, (t, a) => {
          $.arr(e) && (a = tv(t)), (s[a] = s(t));
        }),
        { animated: s }
      );
    })(
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
      ],
      {
        applyAnimatedValues: function (e, t) {
          if (!e.nodeType || !e.setAttribute) return !1;
          let a =
              "filter" === e.nodeName ||
              (e.parentNode && "filter" === e.parentNode.nodeName),
            {
              className: r,
              style: n,
              children: s,
              scrollTop: i,
              scrollLeft: o,
              viewBox: l,
              ...u
            } = t,
            d = Object.values(u),
            f = Object.keys(u).map((t) =>
              a || e.hasAttribute(t)
                ? t
                : aQ[t] ||
                  (aQ[t] = t.replace(/([A-Z])/g, (e) => "-" + e.toLowerCase()))
            );
          for (let t in (void 0 !== s && (e.textContent = s), n))
            if (n.hasOwnProperty(t)) {
              var c;
              let a =
                null == (c = n[t]) || "boolean" == typeof c || "" === c
                  ? ""
                  : "number" != typeof c ||
                    0 === c ||
                    aD.test(t) ||
                    (aL.hasOwnProperty(t) && aL[t])
                  ? ("" + c).trim()
                  : c + "px";
              aD.test(t) ? e.style.setProperty(t, a) : (e.style[t] = a);
            }
          f.forEach((t, a) => {
            e.setAttribute(t, d[a]);
          }),
            void 0 !== r && (e.className = r),
            void 0 !== i && (e.scrollTop = i),
            void 0 !== o && (e.scrollLeft = o),
            void 0 !== l && e.setAttribute("viewBox", l);
        },
        createAnimatedStyle: (e) => new aK(e),
        getComponentProps: ({ scrollTop: e, scrollLeft: t, ...a }) => a,
      }
    ).animated;
    e.s(["a", () => aY, "animated", () => aY], 85016),
      e.i(82087),
      e.i(84624),
      e.s(
        [
          "Any",
          () => tw,
          "BailSignal",
          () => tX,
          "Controller",
          () => ao,
          "FrameValue",
          () => t0,
          "Globals",
          () => O,
          "Interpolation",
          () => aR,
          "Spring",
          () => aA,
          "SpringContext",
          () => ap,
          "SpringRef",
          () => a_,
          "SpringValue",
          () => t3,
          "Trail",
          () => aM,
          "Transition",
          () => aN,
          "config",
          () => tq,
          "createInterpolator",
          () => ek,
          "easings",
          () => eI,
          "inferTo",
          () => tM,
          "interpolate",
          () => aq,
          "to",
          () => aT,
          "update",
          () => a$,
          "useChain",
          () => tT,
          "useInView",
          () => aC,
          "useIsomorphicLayoutEffect",
          () => te,
          "useReducedMotion",
          () => ts,
          "useResize",
          () => aI,
          "useScroll",
          () => aE,
          "useSpring",
          () => ay,
          "useSpringRef",
          () => av,
          "useSpringValue",
          () => aw,
          "useSprings",
          () => ax,
          "useTrail",
          () => ak,
          "useTransition",
          () => aj,
        ],
        79191
      ),
      e.i(85016),
      e.i(79191);
    var aZ = e.i(76460);
    let a0 = ({ details: e }) => {
        let {
          name: t,
          role: a,
          userImage: r,
          status: n,
          linkedinProfile: s,
        } = e;
        return (0, l.jsx)("a", {
          style: { textDecoration: "none" },
          href: `https://linkedin.com/in/${s}`,
          target: "_blank",
          rel: "noreferrer",
          children: (0, l.jsxs)("div", {
            className: aZ.default.famstar_card,
            children: [
              (0, l.jsx)("img", { src: r }),
              (0, l.jsx)("p", {
                className: `${aZ.default.famstar_name} subparagraph_text`,
                children: t,
              }),
              (0, l.jsx)("p", {
                className: `${aZ.default.famstar_role}`,
                children: a,
              }),
              (0, l.jsx)("div", {
                className: aZ.default.famstar_status,
                children: n,
              }),
            ],
          }),
        });
      },
      a1 = ({ famstarsGroup: e, animate: t }) => {
        let a = ay({ opacity: `${t ? 1 : 0.4}`, scale: `${t ? 1 : 0.9}` });
        return (0, l.jsx)(l.Fragment, {
          children: (e || []).map((e, t) =>
            (0, l.jsx)(
              aY.div,
              { style: a, children: (0, l.jsx)(a0, { details: e }) },
              t
            )
          ),
        });
      },
      a2 = ({ famstarsGroupedData: e, forwardedRef: t }) => {
        let [a, r] = (0, u.useState)(0.1),
          [n, s] = (0, u.useState)(1),
          i = ay({ height: `${100 * a}%` });
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: `${aZ.default.scrollable_container}`,
              onScroll: (e) => {
                var t;
                let a;
                (a = Math.ceil(
                  ((t = e.target).scrollTop + t.clientHeight) / t.clientHeight
                )) !== n && s(a),
                  r((t.scrollTop + t.clientHeight) / t.scrollHeight);
              },
              ref: t,
              children: (e || []).map((e, t) =>
                (0, l.jsx)(
                  "div",
                  {
                    className: `${aZ.default.each_group_wrapper}`,
                    children: (0, l.jsx)(a1, {
                      famstarsGroup: e,
                      animate: t + 1 === n,
                    }),
                  },
                  t
                )
              ),
            }),
            (0, l.jsx)("div", {
              className: aZ.default.progress_bar_wrapper,
              children: (0, l.jsx)(aY.span, {
                className: aZ.default.progress_bar,
                style: i,
              }),
            }),
          ],
        });
      },
      a5 = u.default.forwardRef((e, t) =>
        (0, l.jsx)(a2, { ...e, forwardedRef: t })
      );
    var a8 = e.i(12357);
    let a9 = [
      {
        name: "Sambhav Jain",
        role: "Founder",
        userImage: a8.Sambhav,
        status: "The celebrity dancer 🕺🏻",
        linkedinProfile: "sambhavanandjain",
      },
      {
        name: "Kush Taneja",
        role: "Founder",
        userImage: a8.KT,
        status: "Fit Chef 🥗",
        linkedinProfile: "iamkushtaneja",
      },
      {
        name: "Aayush Gupta",
        role: "Founding Team",
        userImage: a8.Aayush,
        status: "Organic farmer 👨🏻‍🌾",
        linkedinProfile: "aayushgupta02",
      },
      {
        name: "Diya Kaveramma",
        role: "Creative",
        userImage: a8.Diya,
        status: "In a relationship with food 💍",
        linkedinProfile: "kddiyakaveramma",
      },
      {
        name: "Chitra Yadav",
        role: "Talent",
        userImage: a8.Chitra,
        status: "Army Brat 🥇",
        linkedinProfile: "chitra-yadav-849263178",
      },
      {
        name: "Jitendra Patel",
        role: "Administration",
        userImage: a8.Jithu,
        status: "Fam’s Go-To Guy 🕶",
        linkedinProfile: "jitendra-patel-682021159",
      },
      {
        name: "Devansh Aggarwal",
        role: "Engineering",
        userImage: a8.DevanshAggarwal,
        status: "Heavy Driver",
        linkedinProfile: "devansh-aggarwal-437967192",
      },
      {
        name: "Aadesh Uikey",
        role: "Design",
        userImage: a8.AadeshUikey,
        status: "Chief Video Maverick 🧑‍💻",
        linkedinProfile: "aadesh-uikey-",
      },
      {
        name: "Aishwarya Nayak",
        role: "Design",
        userImage: a8.AishwaryaNayak,
        status: "Crafting memes, not spreadsheets!",
        linkedinProfile: "aishwarya-nayak-460741166",
      },
      {
        name: "Raunak Jalan",
        role: "Finance",
        userImage: a8.RaunakJalan,
        status: "All things money!",
        linkedinProfile: "raunak-jalan-23826166",
      },
      {
        name: "Yash Verma",
        role: "Engineering",
        userImage: a8.YashVerma,
        status: "FAFO with UPI",
        linkedinProfile: "yash-kumar-verma",
      },
      {
        name: "Abhishek More",
        role: "Engineering",
        userImage: a8.AbhishekMore,
        status: "inevitable",
        linkedinProfile: "abhishekmore-",
      },
      {
        name: "Amarender Singh",
        role: "Engineering",
        userImage: a8.AmarenderSingh,
        status: "Squelching bugs",
        linkedinProfile: "amarender-singh-18098013b",
      },
      {
        name: "Radhika Bhutada",
        role: "QA",
        userImage: a8.RadhikaBhutada,
        status: "Because Perfection is in the Details!",
        linkedinProfile: "radhikabhutada",
      },
      {
        name: "Shlok Patel",
        role: "Engineering",
        userImage: a8.ShlokPatel,
        status: "May the force be with you.",
        linkedinProfile: "madrix",
      },
      {
        name: "Faizan Haider",
        role: "Engineering",
        userImage: a8.FaizanHaider,
        status: "Weekend Chef",
        linkedinProfile: "haid-faiz",
      },
      {
        name: "Priya Sarsaiya",
        role: "Design",
        userImage: a8.PriyaSarsaiya,
        status: "Aloo bhujia enjoyer ",
        linkedinProfile: "priya-sarsaiya-2b6752218",
      },
      {
        name: "Kadambari Chikara",
        role: "Product Design",
        userImage: a8.KadambariChikara,
        status: "Pixels & Peaks🏔️🧡",
        linkedinProfile: "kadambari-chikara",
      },
      {
        name: "Kshitija Deshpande",
        role: "Design",
        userImage: a8.KshitijaDeshpande,
        status: "The cat mom 🐈",
        linkedinProfile: "kshitija-deshpande-6551031b6",
      },
      {
        name: "Anahita Iyer",
        role: "Engineering",
        userImage: a8.AnahitaIyer,
        status: "Enthu Cutlet",
        linkedinProfile: "anahita-iyer-82722111b",
      },
      {
        name: "Vedant Daigavane",
        role: "Engineering",
        userImage: a8.VedantDaigavane,
        status: "Code and Kick Crusader",
        linkedinProfile: "vedant-daigavane-25785315a",
      },
      {
        name: "Semal Sherathia",
        role: "Engineering",
        userImage: a8.SemalSherathia,
        status: "Be the dangerous illusion of yourself",
        linkedinProfile: "semal-sherathia",
      },
      {
        name: "Karan Singh Bist",
        role: "Finance",
        userImage: a8.KaranSinghBist,
        status: "Finance Ninja",
        linkedinProfile: "karan-singh-bist-97aa8b158",
      },
      {
        name: "Raxanda Bist",
        role: "Legal",
        userImage: a8.RaxandaBist,
        status: "Cat-a-holic otaku ",
        linkedinProfile: "raxandabist",
      },
      {
        name: "Vishesh Jain",
        role: "Engineering",
        userImage: a8.VisheshJain,
        status: "Curious! ",
        linkedinProfile: "jainvishesh",
      },
      {
        name: "Nayan Pahuja",
        role: "Engineering",
        userImage: a8.NayanPahuja,
        status: "Levelling up IRL, one quest at a time!",
        linkedinProfile: "nayanpahuja",
      },
      {
        name: "Jeevansh Gagroo",
        role: "Data Analyst",
        userImage: a8.JeevanshGagroo,
        status: "Decoding Data by Day, Gaming Worlds by Night",
        linkedinProfile: "jeevansh-gagroo",
      },
      {
        name: "Samarth Asthana",
        role: "Engineering ",
        userImage: a8.SamarthAsthana,
        status: "Life’s a Query – Keep Searching!",
        linkedinProfile: "samarth-asthana",
      },
      {
        name: "Mithilesh Mahajan",
        role: "Engineering",
        userImage: a8.MithileshMahajan,
        status: "Fluttering seamless experiences!",
        linkedinProfile: "mithilesh-mahajan",
      },
      {
        name: "Shubham Ranga",
        role: "Product Design",
        userImage: a8.ShubhamRanga,
        status: "Crafting magical product experiences",
        linkedinProfile: "shubhamrangaa",
      },
      {
        name: "Parag Gupta",
        role: "Engineering",
        userImage: a8.ParagGupta,
        status: "Less talk, more apps. 🚀",
        linkedinProfile: "parag-gupta-28n2001",
      },
      {
        name: "Sai Dinesh Radarapu",
        role: "Engineering",
        userImage: a8.SaiDineshRadarapu,
        status: "RSD",
        linkedinProfile: "sai-dinesh-radarapu-a74811169",
      },
      {
        name: "Jithendranadh Uddagiri",
        role: "Engineering",
        userImage: a8.UddagiriJithendranadh,
        status: "Breaking code and cracking physics",
        linkedinProfile: "jithendra-nadh-uddagiri",
      },
      {
        name: "Priyanshi Jaiswal",
        role: "Engineering",
        userImage: a8.PriyanshiJaiswal,
        status: "Pensive Puzzler",
        linkedinProfile: "priyanshi-jaiswal-8043541a1",
      },
      {
        name: "Rajshree Fadikar",
        role: "Design",
        userImage: a8.RajshreeFadikar,
        status: "cheesecake hunter 🍰😋",
        linkedinProfile: "rajshree-fadikar-179594251",
      },
      {
        name: "Harsh Jain",
        role: "Engineering",
        userImage: a8.HarshJain,
        status: "Driven, Dynamic, and Distracted by Snacks🍕",
        linkedinProfile: "harsh-jain-130527223",
      },
      {
        name: "Aman Jaiswal",
        role: "Engineering",
        userImage: a8.AmanJaiswal,
        status: "From Engineering bugs to mountain hugs",
        linkedinProfile: "aman-jaiswal-aa422a18b",
      },
      {
        name: "Sushil Kumar",
        role: "Engineering",
        userImage: a8.SushilKumar,
        status: "Coding the core, shaping the system",
        linkedinProfile: "sushil-kumar-bh20",
      },
      {
        name: "Srinivas Vangipuram",
        role: "Engineering",
        userImage: a8.SrinivasVangipuram,
        status: "I Deploy Things",
        linkedinProfile: "srinivasvangipuram",
      },
      {
        name: "Vinod Sonagra",
        role: "Engineering",
        userImage: a8.VinodSonagra,
        status: "Crafting code, connecting futures",
        linkedinProfile: "vinod-sonagra",
      },
      {
        name: "Saksham Gupta",
        role: "Engineering",
        userImage: a8.SakshamGupta,
        status: "Polymath mindset with generalist goals!",
        linkedinProfile: "sudo-saksha",
      },
      {
        name: "Puneet Naik",
        role: "QA",
        userImage: a8.PuneetNaik,
        status: "Precision in every step",
        linkedinProfile: "puneet-n-4a027b20",
      },
      {
        name: "Akash Singh",
        role: "Engineering",
        userImage: a8.AkashSingh,
        status: "Hacking is my love language!",
        linkedinProfile: "akashsingh2310",
      },
      {
        name: "Priyanshu Gupta",
        role: "Engineering",
        userImage: a8.PriyanshuGupta,
        status: "Perpetual learner",
        linkedinProfile: "guptapriyanshu7",
      },
      {
        name: "Sanskrithi K V",
        role: "People",
        userImage: a8.SanskrithiKV,
        status: "Delulu but divinely aligned ",
        linkedinProfile: "sanskrithikv",
      },
      {
        name: "Varun Deep Saini",
        role: "Engineering",
        userImage: a8.VarunDeepSaini,
        status: "Still learning. Still building. Still chasing impact.",
        linkedinProfile: "varundeepsaini",
      },
      {
        name: "Aditya Prajapati",
        role: "Engineering",
        userImage: a8.AdityaPrajapati,
        status: "Trails and scale! ",
        linkedinProfile: "aditya-prajapati-b29123173",
      },
      {
        name: "Shashank Shukla",
        role: "Data Science",
        userImage: a8.ShashankShukla,
        status: "Living in a world of likelihoods",
        linkedinProfile: "shashank-shekhar-shukla-722859227",
      },
      {
        name: "Harsh Chandravanshi",
        role: "Engineering",
        userImage: a8.HarshChandravanshi,
        status: "Admin: Dead Coders Society",
        linkedinProfile: "harshchandravanshi1",
      },
      {
        name: "Naman Tolasaria",
        role: "Product",
        userImage: a8.NamanTolasaria,
        status: "Roadtrips + Good Food = Perfect weekend ",
        linkedinProfile: "namantolasaria",
      },
      {
        name: "Gopi Krishnan",
        role: "Design",
        userImage: a8.GopiKrishnan,
        status: "Making art wherever the mood swings to ;)",
        linkedinProfile: "gopikrishnan98",
      },
      {
        name: "Rahul Mahotra",
        role: "Engineering",
        userImage: a8.RahulMahotra,
        status: "All in the game, yo...",
        linkedinProfile: "rahul-mahotra-a99a2019a",
      },
    ];
    var a6 = e.i(71389);
    let a3 = ({ isTabletView: e }) => {
      let t = (0, u.useRef)(),
        a = (e) => {
          let a = t.current;
          if (!a) return null;
          "down" === e
            ? a.scroll(0, a.scrollTop + a.clientHeight)
            : a.scroll(0, a.scrollTop - a.clientHeight);
        };
      return (0, l.jsx)(l.Fragment, {
        children: e
          ? (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)("div", {
                  className: aZ.default.mob_scrollable_container,
                  children: (0, l.jsx)("div", {
                    className: `${aZ.default.mob_famstar_card_container}`,
                    children: (a9 || []).map((e, t) =>
                      (0, l.jsx)(
                        "div",
                        { children: (0, l.jsx)(a0, { details: e }) },
                        t
                      )
                    ),
                  }),
                }),
                (0, l.jsx)(f.Row, {
                  children: (0, l.jsxs)(c.Col, {
                    xs: 12,
                    className: "text-center",
                    children: [
                      (0, l.jsx)("br", {}),
                      (0, l.jsx)("p", {
                        className: "paragraph_text",
                        style: { fontWeight: "600" },
                        children: (0, l.jsxs)("span", {
                          className: "white_text",
                          children: [
                            "100+ members. 20+ states. ",
                            (0, l.jsx)("span", {
                              className: "primary_orange_text",
                              children: "One Fam 🧡",
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("br", {}),
                    ],
                  }),
                }),
              ],
            })
          : (0, l.jsxs)("div", {
              className: `${aZ.default.famstars_container}`,
              children: [
                (0, l.jsx)("img", {
                  src: a6.singleGreyArrowIcon,
                  className: aZ.default.arrow_up,
                  onClick: () => a("up"),
                }),
                (0, l.jsx)(a5, {
                  famstarsGroupedData: ((e) => {
                    let t = [],
                      a = [...e];
                    for (; 0 !== a.length; ) t.push(a.splice(0, 6));
                    return t;
                  })(a9),
                  ref: t,
                }),
                (0, l.jsx)("img", {
                  src: a6.singleGreyArrowIcon,
                  className: aZ.default.arrow_down,
                  onClick: () => a("down"),
                }),
              ],
            }),
      });
    };
    var a4 = e.i(24894),
      a7 = e.i(68553);
    let re = [
      {
        icon: "🎓",
        title: "Be a student",
        subtitle:
          "Stay curious and don’t be afraid to ask questions. After all, the learning never stops.",
      },
      {
        icon: "💡",
        title: "Be entrepreneurial",
        subtitle:
          "Step out of your comfort zone by taking risks and being observant, resourceful, and fearless.",
      },
      {
        icon: "🙏🏻",
        title: "Be humble and grateful",
        subtitle:
          "Stay kind, grounded, accepting, and respectful to all. There’s no room for ego here.",
      },
      {
        icon: "🔈",
        title: "Be vocal",
        subtitle:
          "Share your opinions, perspectives, and beliefs. If you’ve got something to say, we’re all ears.",
      },
      {
        icon: "🔍",
        title: "Be self-governed",
        subtitle:
          "Build values and principles for yourself to stay self-aware and know what’s right and wrong.",
      },
      {
        icon: "🤝",
        title: "Be collaborative",
        subtitle:
          "Always share, care, play, fail, and celebrate together. Team work makes the dream work.",
      },
    ];
    e.s(
      [
        "default",
        0,
        () =>
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)(d.Container, {
                fluid: !0,
                children: [
                  (0, l.jsx)(p.default, {}),
                  (0, l.jsx)(a7.Media, {
                    lessThan: "lg",
                    children: (0, l.jsx)(f.Row, {
                      className: "header_section_background",
                      style: {
                        backgroundImage: `linear-gradient(180.63deg, rgba(0, 0, 0, 0.0001) 11.59%, rgba(0, 0, 0, 0.9) 99.7%), url(${a8.aboutMobHeaderImage})`,
                      },
                      children: (0, l.jsx)(c.Col, {
                        children: (0, l.jsxs)("div", {
                          className: `heading_text white_text ${h.default.header_heading}`,
                          children: [
                            "About",
                            (0, l.jsx)("span", {
                              className: "primary_orange_text",
                              children: " Us ",
                            }),
                            (0, l.jsx)("p", {
                              className: "paragraph_text white_text",
                              children:
                                "FamApp by Trio is built for all your money needs. With a focus on financial inclusion, we help you learn everything there is to know about money - from saving and spending to investing and earning.",
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  (0, l.jsx)(a7.Media, {
                    greaterThanOrEqual: "lg",
                    children: (0, l.jsx)(f.Row, {
                      className: "header_section_background",
                      style: {
                        backgroundImage: `linear-gradient(180.63deg, rgba(0, 0, 0, 0.0001) 11.59%, rgba(0, 0, 0, 0.9) 99.7%), url(${a8.aboutPCHeaderImage})`,
                      },
                      children: (0, l.jsx)(c.Col, {
                        children: (0, l.jsxs)("div", {
                          className: `heading_text white_text ${h.default.header_heading}`,
                          children: [
                            "About",
                            (0, l.jsx)("span", {
                              className: "primary_orange_text",
                              children: " Us ",
                            }),
                            (0, l.jsx)("p", {
                              className: "paragraph_text white_text",
                              children:
                                "FamApp by Trio is built for all your money needs. With a focus on financial inclusion, we help you learn everything there is to know about money - from saving and spending to investing and earning.",
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              (0, l.jsxs)(d.Container, {
                fluid: !0,
                className: "below_header_container",
                children: [
                  (0, l.jsxs)(d.Container, {
                    className: "grey_text extra_sides_padding",
                    children: [
                      (0, l.jsxs)(f.Row, {
                        className: "section_vertical_spacing",
                        children: [
                          (0, l.jsx)(c.Col, {
                            lg: 6,
                            className: "section_image_container",
                            children: (0, l.jsx)("img", {
                              className: "image_content",
                              src: a8.missionImage,
                              alt: "Mission",
                            }),
                          }),
                          (0, l.jsx)(c.Col, {
                            lg: 6,
                            className: "section_text_container",
                            children: (0, l.jsxs)("div", {
                              children: [
                                (0, l.jsxs)("h1", {
                                  className: "heading_text light_black_text",
                                  children: [
                                    "Our ",
                                    (0, l.jsx)("span", {
                                      className: "primary_orange_text",
                                      children: "mission",
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("p", {
                                  className: "paragraph_text",
                                  children:
                                    "To raise a new, financially aware generation of Indians who understand the fundamentals of personal finance and are capable of making decisions in their best long term interest.",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)(f.Row, {
                        className: "section_vertical_spacing",
                        children: [
                          (0, l.jsx)(c.Col, {
                            lg: 6,
                            className:
                              "section_image_container section_right_image",
                            children: (0, l.jsx)("img", {
                              className: "image_content",
                              src: a8.storyImage,
                              alt: "Story",
                            }),
                          }),
                          (0, l.jsx)(c.Col, {
                            lg: 6,
                            className: "section_text_container",
                            children: (0, l.jsxs)("div", {
                              children: [
                                (0, l.jsxs)("h1", {
                                  className: "heading_text light_black_text",
                                  children: [
                                    "Our ",
                                    (0, l.jsx)("span", {
                                      className: "primary_orange_text",
                                      children: "story",
                                    }),
                                    (0, l.jsx)("br", {}),
                                    "has been crazy",
                                  ],
                                }),
                                (0, l.jsx)("p", {
                                  className: "paragraph_text",
                                  children:
                                    "From a group of six friends working out of a one bedroom apartment, to a team of 60+ taking the country by storm, we’ve certainly come a long way.",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)(f.Row, {
                    className: `full_width_section ${h.default.values_section} grey_text`,
                    children: (0, l.jsxs)(c.Col, {
                      children: [
                        (0, l.jsx)(f.Row, {
                          className: "text-center",
                          children: (0, l.jsx)(c.Col, {
                            children: (0, l.jsxs)("h1", {
                              className: "heading_text light_black_text",
                              children: [
                                "The ",
                                (0, l.jsx)("span", {
                                  className: "primary_orange_text",
                                  children: "values",
                                }),
                                " we live for",
                              ],
                            }),
                          }),
                        }),
                        (0, l.jsx)(f.Row, {
                          children: re.map((e, t) =>
                            (0, l.jsx)(
                              c.Col,
                              {
                                md: 6,
                                children: (0, l.jsxs)(f.Row, {
                                  className: `${h.default.values_card}`,
                                  children: [
                                    (0, l.jsx)(c.Col, {
                                      sm: 12,
                                      xl: 2,
                                      className: `${h.default.icon_container}`,
                                      children: (0, l.jsx)("div", {
                                        children: e.icon,
                                      }),
                                    }),
                                    (0, l.jsxs)(c.Col, {
                                      sm: 12,
                                      xl: 10,
                                      className: `${h.default.content_container}`,
                                      children: [
                                        (0, l.jsx)("h4", {
                                          className:
                                            "subheading_text light_black_text",
                                          children: e.title,
                                        }),
                                        (0, l.jsx)("p", {
                                          className: "paragraph_text grey_text",
                                          children: e.subtitle,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              t
                            )
                          ),
                        }),
                        (0, l.jsx)(f.Row, {
                          className: "text-center section_vertical_spacing",
                          children: (0, l.jsxs)(c.Col, {
                            children: [
                              (0, l.jsx)(a7.Media, {
                                greaterThanOrEqual: "lg",
                                children: (0, l.jsxs)("h1", {
                                  className: "heading_text light_black_text",
                                  children: [
                                    "The ",
                                    (0, l.jsx)("span", {
                                      className: "primary_orange_text",
                                      children: "Fam",
                                    }),
                                  ],
                                }),
                              }),
                              (0, l.jsx)(a7.Media, {
                                between: ["lg", "xl"],
                                children: (0, l.jsxs)("p", {
                                  className: "subheading_text",
                                  children: [
                                    "60+ members. 20+ states. ",
                                    (0, l.jsx)("span", {
                                      className: "primary_orange_text",
                                      children: "One Fam 🧡",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsxs)(f.Row, {
                    className: `full_width_section ${h.default.famstars_section} grey_text`,
                    children: [
                      (0, l.jsxs)(c.Col, {
                        lg: 0,
                        xl: 3,
                        className: `${h.default.text_container}`,
                        children: [
                          (0, l.jsx)("hr", {
                            className: `${h.default.orange_horizontal_rule}`,
                          }),
                          (0, l.jsxs)("h1", {
                            className: "subheading_text white_text",
                            children: [
                              "60+ members. 20+ states. ",
                              (0, l.jsx)("span", {
                                className: "primary_orange_text",
                                children: "One Fam 🧡",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)(c.Col, {
                        lg: 12,
                        xl: 9,
                        children: [
                          (0, l.jsxs)(a7.Media, {
                            lessThan: "lg",
                            children: [
                              (0, l.jsxs)("h1", {
                                className: "heading_text white_text pl-3",
                                children: [
                                  (0, l.jsx)("br", {}),
                                  "The ",
                                  (0, l.jsx)("span", {
                                    className: "primary_orange_text",
                                    children: "Fam",
                                  }),
                                ],
                              }),
                              (0, l.jsx)(a3, { isTabletView: !0 }),
                            ],
                          }),
                          (0, l.jsx)(a7.Media, {
                            greaterThanOrEqual: "lg",
                            children: (0, l.jsx)(a3, { isTabletView: !1 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)(f.Row, {
                    className: `text-center full_width_section ${h.default.opening_section}`,
                    style: { backgroundImage: `url(${a8.openingsImage})` },
                    children: (0, l.jsxs)(c.Col, {
                      children: [
                        (0, l.jsxs)("h1", {
                          className: "heading_text white_text",
                          children: [
                            "Join the ",
                            (0, l.jsx)("span", {
                              className: "primary_orange_text",
                              children: "Fam",
                            }),
                          ],
                        }),
                        (0, l.jsx)(a4.default, {
                          buttonText: "View open positions",
                          wrapStyle: {
                            backgroundColor: "#f5a623",
                            marginTop: "-1rem",
                          },
                          url: "http://join.fampay.in/",
                          activeStatus: !0,
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)(m.default, {}),
                ],
              }),
            ],
          }),
      ],
      67308
    );
  },
  5841,
  (e, t, a) => {
    let r = "/about";
    (window.__NEXT_P = window.__NEXT_P || []).push([r, () => e.r(67308)]),
      t.hot &&
        t.hot.dispose(function () {
          window.__NEXT_P.push([r]);
        });
  },
]);

//# sourceMappingURL=e5cf5c4ebee73a4e.js.map
