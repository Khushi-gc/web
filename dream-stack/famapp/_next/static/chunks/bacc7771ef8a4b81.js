(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  71620,
  (e) => {
    "use strict";
    var t = e.i(75705);
    let i = {
      initialize(e) {
        let t,
          i,
          o,
          n = {
            event: [],
            profile: [],
            account: [],
            region: "in1",
            onUserLogin: [],
            notifications: [],
            privacy: [],
            spa: !0,
          };
        n.account.push({ id: e }),
          n.privacy.push({ optOut: !1 }),
          n.privacy.push({ useIP: !1 }),
          (window.clevertap = n),
          (t =
            "https:" === window.location.protocol
              ? "https://d2r1yp2w7bby2u.cloudfront.net"
              : "http://static.clevertap.com"),
          ((i = document.createElement("script")).type = "text/javascript"),
          (i.async = !0),
          (i.src = t + "/js/clevertap.min.js"),
          (o =
            document.getElementsByTagName("script")[0]).parentNode.insertBefore(
            i,
            o
          );
      },
      event(e, t) {
        t
          ? window.clevertap?.event.push(e, t)
          : window.clevertap?.event.push(e);
      },
      profile(e) {
        window.clevertap?.profile.push(e);
      },
      onUserLogin(e) {
        window.clevertap?.onUserLogin.push(e);
      },
      logout() {
        window.clevertap?.logout();
      },
    };
    e.i(50963),
      e.s(
        [
          "default",
          0,
          () => (
            (0, t.useEffect)(() => {
              i.initialize("489-7K9-456Z");
            }, []),
            null
          ),
        ],
        71620
      );
  },
  210,
  (e) => {
    e.n(e.i(71620));
  },
]);

//# sourceMappingURL=20a354e09666bf72.js.map
