(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888],
    {
        81780: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/_app",
                function () {
                    return t(38484);
                },
            ]);
        },
        38484: function (e, n, t) {
            "use strict";
            t.r(n);
            var r = t(85893),
                o = (t(16774), t(67294));
            t(73935), t(83457);
            function i(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            function s(e, n, t) {
                return (
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = t),
                    e
                );
            }
            function a(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(t).filter(function (
                                e
                            ) {
                                return Object.getOwnPropertyDescriptor(t, e)
                                    .enumerable;
                            })
                        )),
                        r.forEach(function (n) {
                            s(e, n, t[n]);
                        });
                }
                return e;
            }
            function u(e, n) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, n) {
                        var t =
                            null == e
                                ? null
                                : ("undefined" !== typeof Symbol &&
                                      e[Symbol.iterator]) ||
                                  e["@@iterator"];
                        if (null != t) {
                            var r,
                                o,
                                i = [],
                                s = !0,
                                a = !1;
                            try {
                                for (
                                    t = t.call(e);
                                    !(s = (r = t.next()).done) &&
                                    (i.push(r.value), !n || i.length !== n);
                                    s = !0
                                );
                            } catch (u) {
                                (a = !0), (o = u);
                            } finally {
                                try {
                                    s || null == t.return || t.return();
                                } finally {
                                    if (a) throw o;
                                }
                            }
                            return i;
                        }
                    })(e, n) ||
                    (function (e, n) {
                        if (!e) return;
                        if ("string" === typeof e) return i(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t &&
                            e.constructor &&
                            (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(t);
                        if (
                            "Arguments" === t ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        )
                            return i(e, n);
                    })(e, n) ||
                    (function () {
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                    })()
                );
            }
            n.default = function (e) {
                var n = e.Component,
                    t = e.pageProps,
                    i = u(o.useState(!0), 2),
                    s = i[0],
                    c = i[1];
                return (
                    o.useEffect(function () {
                        setTimeout(function () {
                            return c(!1);
                        }, 3e3);
                    }),
                    (0, r.jsx)(r.Fragment, {
                        children: s
                            ? (0, r.jsxs)("div", {
                                  children: [
                                      (0, r.jsx)("img", {
                                          src: "../static/images/Loader.jpg",
                                          className:
                                              "fixed w-screen opacity-0 md:opacity-100 h-screen top-0 left-0",
                                      }),
                                      (0, r.jsx)("img", {
                                          src: "../static/images/Loader-Mobile.jpg",
                                          className:
                                              "fixed w-screen h-screen opacity-100 md:opacity-0 top-0 left-0",
                                      }),
                                  ],
                              })
                            : (0, r.jsx)(n, a({}, t)),
                    })
                );
            };
        },
        16774: function () {},
        11163: function (e, n, t) {
            e.exports = t(80880);
        },
        83457: function (e, n, t) {
            var r,
                o = Object.create,
                i = Object.defineProperty,
                s = Object.getOwnPropertyDescriptor,
                a = Object.getOwnPropertyNames,
                u = Object.getPrototypeOf,
                c = Object.prototype.hasOwnProperty,
                l = (e) => i(e, "__esModule", { value: !0 }),
                p = (e, n) => i(e, "name", { value: n, configurable: !0 }),
                f = (e, n, t, r) => {
                    if ((n && "object" == typeof n) || "function" == typeof n)
                        for (let o of a(n))
                            !c.call(e, o) &&
                                (t || "default" !== o) &&
                                i(e, o, {
                                    get: () => n[o],
                                    enumerable: !(r = s(n, o)) || r.enumerable,
                                });
                    return e;
                },
                d = (e, n) =>
                    f(
                        l(
                            i(
                                null != e ? o(u(e)) : {},
                                "default",
                                !n && e && e.__esModule
                                    ? { get: () => e.default, enumerable: !0 }
                                    : { value: e, enumerable: !0 }
                            )
                        ),
                        e
                    ),
                m =
                    ((r = "undefined" != typeof WeakMap ? new WeakMap() : 0),
                    (e, n) =>
                        (r && r.get(e)) ||
                        ((n = f(l({}), e, 1)), r && r.set(e, n), n)),
                g = {};
            ((e, n) => {
                for (var t in n) i(e, t, { get: n[t], enumerable: !0 });
            })(g, { default: () => w });
            var b = d(t(11163)),
                y = d(t(74865)),
                h = d(t(45697)),
                v = d(t(67294));
            function w({
                color: e = "#29D",
                startPosition: n = 0.3,
                stopDelayMs: t = 200,
                height: r = 3,
                showOnShallow: o = !0,
                options: i,
                nonce: s,
            }) {
                let a = null;
                v.useEffect(
                    () => (
                        i && y.configure(i),
                        b.default.events.on("routeChangeStart", u),
                        b.default.events.on("routeChangeComplete", c),
                        b.default.events.on("routeChangeError", c),
                        () => {
                            b.default.events.off("routeChangeStart", u),
                                b.default.events.off("routeChangeComplete", c),
                                b.default.events.off("routeChangeError", c);
                        }
                    ),
                    []
                );
                let u = p((e, { shallow: t }) => {
                        (!t || o) && (y.set(n), y.start());
                    }, "routeChangeStart"),
                    c = p((e, { shallow: n }) => {
                        (!n || o) &&
                            (a && clearTimeout(a),
                            (a = setTimeout(() => {
                                y.done(!0);
                            }, t)));
                    }, "routeChangeEnd");
                return v.createElement(
                    "style",
                    { nonce: s },
                    `\n      #nprogress {\n        pointer-events: none;\n      }\n      #nprogress .bar {\n        background: ${e};\n        position: fixed;\n        z-index: 9999;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: ${r}px;\n      }\n      #nprogress .peg {\n        display: block;\n        position: absolute;\n        right: 0px;\n        width: 100px;\n        height: 100%;\n        box-shadow: 0 0 10px ${e}, 0 0 5px ${e};\n        opacity: 1;\n        -webkit-transform: rotate(3deg) translate(0px, -4px);\n        -ms-transform: rotate(3deg) translate(0px, -4px);\n        transform: rotate(3deg) translate(0px, -4px);\n      }\n      #nprogress .spinner {\n        display: block;\n        position: fixed;\n        z-index: 1031;\n        top: 15px;\n        right: 15px;\n      }\n      #nprogress .spinner-icon {\n        width: 18px;\n        height: 18px;\n        box-sizing: border-box;\n        border: solid 2px transparent;\n        border-top-color: ${e};\n        border-left-color: ${e};\n        border-radius: 50%;\n        -webkit-animation: nprogresss-spinner 400ms linear infinite;\n        animation: nprogress-spinner 400ms linear infinite;\n      }\n      .nprogress-custom-parent {\n        overflow: hidden;\n        position: relative;\n      }\n      .nprogress-custom-parent #nprogress .spinner,\n      .nprogress-custom-parent #nprogress .bar {\n        position: absolute;\n      }\n      @-webkit-keyframes nprogress-spinner {\n        0% {\n          -webkit-transform: rotate(0deg);\n        }\n        100% {\n          -webkit-transform: rotate(360deg);\n        }\n      }\n      @keyframes nprogress-spinner {\n        0% {\n          transform: rotate(0deg);\n        }\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n    `
                );
            }
            p(w, "NextNProgress"),
                (w.propTypes = {
                    color: h.string,
                    startPosition: h.number,
                    stopDelayMs: h.number,
                    height: h.number,
                    showOnShallow: h.bool,
                    options: h.object,
                    nonce: h.string,
                }),
                (e.exports = m(g));
        },
        74865: function (e, n, t) {
            var r, o;
            (r = function () {
                var e = { version: "0.2.0" },
                    n = (e.settings = {
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
                function t(e, n, t) {
                    return e < n ? n : e > t ? t : e;
                }
                function r(e) {
                    return 100 * (-1 + e);
                }
                function o(e, t, o) {
                    var i;
                    return (
                        ((i =
                            "translate3d" === n.positionUsing
                                ? {
                                      transform:
                                          "translate3d(" + r(e) + "%,0,0)",
                                  }
                                : "translate" === n.positionUsing
                                ? { transform: "translate(" + r(e) + "%,0)" }
                                : { "margin-left": r(e) + "%" }).transition =
                            "all " + t + "ms " + o),
                        i
                    );
                }
                (e.configure = function (e) {
                    var t, r;
                    for (t in e)
                        void 0 !== (r = e[t]) &&
                            e.hasOwnProperty(t) &&
                            (n[t] = r);
                    return this;
                }),
                    (e.status = null),
                    (e.set = function (r) {
                        var a = e.isStarted();
                        (r = t(r, n.minimum, 1)),
                            (e.status = 1 === r ? null : r);
                        var u = e.render(!a),
                            c = u.querySelector(n.barSelector),
                            l = n.speed,
                            p = n.easing;
                        return (
                            u.offsetWidth,
                            i(function (t) {
                                "" === n.positionUsing &&
                                    (n.positionUsing = e.getPositioningCSS()),
                                    s(c, o(r, l, p)),
                                    1 === r
                                        ? (s(u, {
                                              transition: "none",
                                              opacity: 1,
                                          }),
                                          u.offsetWidth,
                                          setTimeout(function () {
                                              s(u, {
                                                  transition:
                                                      "all " + l + "ms linear",
                                                  opacity: 0,
                                              }),
                                                  setTimeout(function () {
                                                      e.remove(), t();
                                                  }, l);
                                          }, l))
                                        : setTimeout(t, l);
                            }),
                            this
                        );
                    }),
                    (e.isStarted = function () {
                        return "number" === typeof e.status;
                    }),
                    (e.start = function () {
                        e.status || e.set(0);
                        var t = function () {
                            setTimeout(function () {
                                e.status && (e.trickle(), t());
                            }, n.trickleSpeed);
                        };
                        return n.trickle && t(), this;
                    }),
                    (e.done = function (n) {
                        return n || e.status
                            ? e.inc(0.3 + 0.5 * Math.random()).set(1)
                            : this;
                    }),
                    (e.inc = function (n) {
                        var r = e.status;
                        return r
                            ? ("number" !== typeof n &&
                                  (n =
                                      (1 - r) *
                                      t(Math.random() * r, 0.1, 0.95)),
                              (r = t(r + n, 0, 0.994)),
                              e.set(r))
                            : e.start();
                    }),
                    (e.trickle = function () {
                        return e.inc(Math.random() * n.trickleRate);
                    }),
                    (function () {
                        var n = 0,
                            t = 0;
                        e.promise = function (r) {
                            return r && "resolved" !== r.state()
                                ? (0 === t && e.start(),
                                  n++,
                                  t++,
                                  r.always(function () {
                                      0 === --t
                                          ? ((n = 0), e.done())
                                          : e.set((n - t) / n);
                                  }),
                                  this)
                                : this;
                        };
                    })(),
                    (e.render = function (t) {
                        if (e.isRendered())
                            return document.getElementById("nprogress");
                        u(document.documentElement, "nprogress-busy");
                        var o = document.createElement("div");
                        (o.id = "nprogress"), (o.innerHTML = n.template);
                        var i,
                            a = o.querySelector(n.barSelector),
                            c = t ? "-100" : r(e.status || 0),
                            l = document.querySelector(n.parent);
                        return (
                            s(a, {
                                transition: "all 0 linear",
                                transform: "translate3d(" + c + "%,0,0)",
                            }),
                            n.showSpinner ||
                                ((i = o.querySelector(n.spinnerSelector)) &&
                                    p(i)),
                            l != document.body &&
                                u(l, "nprogress-custom-parent"),
                            l.appendChild(o),
                            o
                        );
                    }),
                    (e.remove = function () {
                        c(document.documentElement, "nprogress-busy"),
                            c(
                                document.querySelector(n.parent),
                                "nprogress-custom-parent"
                            );
                        var e = document.getElementById("nprogress");
                        e && p(e);
                    }),
                    (e.isRendered = function () {
                        return !!document.getElementById("nprogress");
                    }),
                    (e.getPositioningCSS = function () {
                        var e = document.body.style,
                            n =
                                "WebkitTransform" in e
                                    ? "Webkit"
                                    : "MozTransform" in e
                                    ? "Moz"
                                    : "msTransform" in e
                                    ? "ms"
                                    : "OTransform" in e
                                    ? "O"
                                    : "";
                        return n + "Perspective" in e
                            ? "translate3d"
                            : n + "Transform" in e
                            ? "translate"
                            : "margin";
                    });
                var i = (function () {
                        var e = [];
                        function n() {
                            var t = e.shift();
                            t && t(n);
                        }
                        return function (t) {
                            e.push(t), 1 == e.length && n();
                        };
                    })(),
                    s = (function () {
                        var e = ["Webkit", "O", "Moz", "ms"],
                            n = {};
                        function t(e) {
                            return e
                                .replace(/^-ms-/, "ms-")
                                .replace(/-([\da-z])/gi, function (e, n) {
                                    return n.toUpperCase();
                                });
                        }
                        function r(n) {
                            var t = document.body.style;
                            if (n in t) return n;
                            for (
                                var r,
                                    o = e.length,
                                    i = n.charAt(0).toUpperCase() + n.slice(1);
                                o--;

                            )
                                if ((r = e[o] + i) in t) return r;
                            return n;
                        }
                        function o(e) {
                            return (e = t(e)), n[e] || (n[e] = r(e));
                        }
                        function i(e, n, t) {
                            (n = o(n)), (e.style[n] = t);
                        }
                        return function (e, n) {
                            var t,
                                r,
                                o = arguments;
                            if (2 == o.length)
                                for (t in n)
                                    void 0 !== (r = n[t]) &&
                                        n.hasOwnProperty(t) &&
                                        i(e, t, r);
                            else i(e, o[1], o[2]);
                        };
                    })();
                function a(e, n) {
                    return (
                        ("string" == typeof e ? e : l(e)).indexOf(
                            " " + n + " "
                        ) >= 0
                    );
                }
                function u(e, n) {
                    var t = l(e),
                        r = t + n;
                    a(t, n) || (e.className = r.substring(1));
                }
                function c(e, n) {
                    var t,
                        r = l(e);
                    a(e, n) &&
                        ((t = r.replace(" " + n + " ", " ")),
                        (e.className = t.substring(1, t.length - 1)));
                }
                function l(e) {
                    return (" " + (e.className || "") + " ").replace(
                        /\s+/gi,
                        " "
                    );
                }
                function p(e) {
                    e && e.parentNode && e.parentNode.removeChild(e);
                }
                return e;
            }),
                void 0 ===
                    (o = "function" === typeof r ? r.call(n, t, n, e) : r) ||
                    (e.exports = o);
        },
        92703: function (e, n, t) {
            "use strict";
            var r = t(50414);
            function o() {}
            function i() {}
            (i.resetWarningCache = o),
                (e.exports = function () {
                    function e(e, n, t, o, i, s) {
                        if (s !== r) {
                            var a = new Error(
                                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                            );
                            throw ((a.name = "Invariant Violation"), a);
                        }
                    }
                    function n() {
                        return e;
                    }
                    e.isRequired = e;
                    var t = {
                        array: e,
                        bigint: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: n,
                        element: e,
                        elementType: e,
                        instanceOf: n,
                        node: e,
                        objectOf: n,
                        oneOf: n,
                        oneOfType: n,
                        shape: n,
                        exact: n,
                        checkPropTypes: i,
                        resetWarningCache: o,
                    };
                    return (t.PropTypes = t), t;
                });
        },
        45697: function (e, n, t) {
            e.exports = t(92703)();
        },
        50414: function (e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
    },
    function (e) {
        var n = function (n) {
            return e((e.s = n));
        };
        e.O(0, [774, 179], function () {
            return n(81780), n(80880);
        });
        var t = e.O();
        _N_E = t;
    },
]);
