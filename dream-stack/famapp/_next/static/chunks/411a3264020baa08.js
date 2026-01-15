(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  93093,
  (e) => {
    "use strict";
    function t(e, n) {
      return (t = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          })(e, n);
    }
    function n(e, n) {
      (e.prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        t(e, n);
    }
    e.s(["default", () => n], 93093);
  },
  59219,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function () {
          return u;
        },
      });
    let r = e.r(75705),
      a = "undefined" == typeof window,
      o = a ? () => {} : r.useLayoutEffect,
      d = a ? () => {} : r.useEffect;
    function u(e) {
      let { headManager: t, reduceComponentsToState: n } = e;
      function u() {
        if (t && t.mountedInstances) {
          let e = r.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean)
          );
          t.updateHead(n(e));
        }
      }
      return (
        a && (t?.mountedInstances?.add(e.children), u()),
        o(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          )
        ),
        o(
          () => (
            t && (t._pendingUpdate = u),
            () => {
              t && (t._pendingUpdate = u);
            }
          )
        ),
        d(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
  },
  93401,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = {
      default: function () {
        return h;
      },
      defaultHead: function () {
        return s;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    let o = e.r(2879),
      d = e.r(87602),
      u = e.r(68601),
      c = d._(e.r(75705)),
      l = o._(e.r(59219)),
      i = e.r(36061);
    function s() {
      return [
        (0, u.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, u.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport"
        ),
      ];
    }
    function f(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === c.default.Fragment
        ? e.concat(
            c.default.Children.toArray(t.props.children).reduce(
              (e, t) =>
                "string" == typeof t || "number" == typeof t ? e : e.concat(t),
              []
            )
          )
        : e.concat(t);
    }
    e.r(74687);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];
    function y(e) {
      let t, n, r, a;
      return e
        .reduce(f, [])
        .reverse()
        .concat(s().reverse())
        .filter(
          ((t = new Set()),
          (n = new Set()),
          (r = new Set()),
          (a = {}),
          (e) => {
            let o = !0,
              d = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              d = !0;
              let n = e.key.slice(e.key.indexOf("$") + 1);
              t.has(n) ? (o = !1) : t.add(n);
            }
            switch (e.type) {
              case "title":
              case "base":
                n.has(e.type) ? (o = !1) : n.add(e.type);
                break;
              case "meta":
                for (let t = 0, n = p.length; t < n; t++) {
                  let n = p[t];
                  if (e.props.hasOwnProperty(n))
                    if ("charSet" === n) r.has(n) ? (o = !1) : r.add(n);
                    else {
                      let t = e.props[n],
                        r = a[n] || new Set();
                      ("name" !== n || !d) && r.has(t)
                        ? (o = !1)
                        : (r.add(t), (a[n] = r));
                    }
                }
            }
            return o;
          })
        )
        .reverse()
        .map((e, t) => {
          let n = e.key || t;
          return c.default.cloneElement(e, { key: n });
        });
    }
    let h = function ({ children: e }) {
      let t = (0, c.useContext)(i.HeadManagerContext);
      return (0, u.jsx)(l.default, {
        reduceComponentsToState: y,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof n.default ||
      ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  63584,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/2aa3493f97301b79.js"].map((t) => e.l(t))
      ).then(() => t(41507))
    );
  },
  17479,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/a8eb5ea5aeb59c86.js"].map((t) => e.l(t))
      ).then(() => t(26058))
    );
  },
  76812,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/bacc7771ef8a4b81.js"].map((t) => e.l(t))
      ).then(() => t(210))
    );
  },
]);

//# sourceMappingURL=4d21d7412d277af8.js.map
