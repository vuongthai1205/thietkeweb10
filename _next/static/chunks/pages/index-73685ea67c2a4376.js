(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        45301: function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return s(14186);
                },
            ]);
        },
        14186: function (e, t, s) {
            "use strict";
            s.r(t);
            var a = s(34051),
                n = s.n(a),
                r = s(85893),
                i = s(11163),
                o = s(45811),
                l = s(3283),
                c = s.n(l),
                p = s(42484),
                m = s.n(p),
                x = s(74845),
                u = s(67294),
                d = s(55678),
                h = (s(64213), s(9008)),
                f = s(21818);
            function g(e, t, s, a, n, r, i) {
                try {
                    var o = e[r](i),
                        l = o.value;
                } catch (c) {
                    return void s(c);
                }
                o.done ? t(l) : Promise.resolve(l).then(a, n);
            }
            function y(e) {
                return function () {
                    var t = this,
                        s = arguments;
                    return new Promise(function (a, n) {
                        var r = e.apply(t, s);
                        function i(e) {
                            g(r, a, n, i, o, "next", e);
                        }
                        function o(e) {
                            g(r, a, n, i, o, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var b = s(62996);
            t.default = function () {
                var e = (0, i.useRouter)(),
                    t = ((0, u.useRef)(null), (0, u.useRef)(null)),
                    s = (0, u.useRef)(null),
                    a = (0, u.useRef)(null),
                    l = (0, u.useState)(null),
                    p = l[0],
                    g = l[1],
                    w = (0, u.useState)(null),
                    v = w[0],
                    N = w[1],
                    j = (0, u.useState)(null),
                    k = j[0],
                    _ = j[1],
                    T = (0, u.useState)(""),
                    A = T[0],
                    F = T[1],
                    E = (0, u.useState)(0),
                    O = (E[0], E[1]),
                    S = (0, u.useState)([]),
                    M = S[0],
                    D = S[1],
                    I = (0, u.useState)([]),
                    C = I[0],
                    P = I[1],
                    Y = (0, u.useState)(0),
                    R = Y[0],
                    z = Y[1],
                    G = (0, u.useState)(!1),
                    W = (G[0], G[1]),
                    L = (0, u.useState)(!1),
                    B = L[0],
                    H = L[1],
                    U = (0, u.useState)(!1),
                    X = U[0],
                    Z = U[1],
                    K = (0, u.useState)(!1),
                    Q = (K[0], K[1]),
                    q = (0, u.useState)(1),
                    V = q[0],
                    J = q[1],
                    $ = (0, u.useState)(1e4),
                    ee = ($[0], $[1]),
                    te = (0, u.useState)(0),
                    se = (te[0], te[1]),
                    ae = (0, u.useState)(0),
                    ne = (ae[0], ae[1]),
                    re = (0, u.useState)(!1),
                    ie = re[0],
                    oe = re[1],
                    le = (0, u.useState)(!0),
                    ce = le[0],
                    pe = le[1],
                    me = (0, u.useState)(!1),
                    xe = (me[0], me[1]),
                    ue = (0, u.useState)(!0),
                    de = ue[0],
                    he = ue[1],
                    fe = (0, u.useState)(!1),
                    ge = fe[0],
                    ye = fe[1],
                    be = (0, u.useState)(!1),
                    we = be[0],
                    ve = be[1],
                    Ne = (0, u.useState)(!1),
                    je = Ne[0],
                    ke = Ne[1],
                    _e = (0, u.useState)(["_", "_", "_", "_", "_", "_"]),
                    Te = _e[0],
                    Ae = _e[1],
                    Fe = (0, u.useState)("_ _ _ _ _ _"),
                    Ee = (Fe[0], Fe[1]),
                    Oe = (0, u.useState)(1),
                    Se = (Oe[0], Oe[1]),
                    Me = (0, u.useState)(0),
                    De = Me[0],
                    Ie = Me[1],
                    Ce = (0, u.useState)(!1),
                    Pe = (Ce[0], Ce[1]),
                    Ye = !1,
                    Re = ["_", "_", "_", "_", "_", "_"];
                (0, u.useEffect)(
                    function () {
                        return (
                            window.addEventListener("keyup", function (e) {
                                !(function (e) {
                                    we &&
                                        (ze(e.key),
                                        e.stopImmediatePropagation());
                                })(e);
                            }),
                            window.addEventListener("click", function (e) {
                                !(function (e) {
                                    e.target.classList.contains("encryptI") &&
                                        (e.target.focus(),
                                        e.stopImmediatePropagation());
                                })(e);
                            }),
                            function () {}
                        );
                    },
                    [we, Ye]
                );
                var ze = function (e) {
                        if ((!isNaN(e) && " " !== e) || "Backspace" === e) {
                            var t = [],
                                s = !0;
                            Re.forEach(function (a, n) {
                                (5 === n && "Backspace" === e && s) ||
                                    (("_" !== a && "Backspace" !== e) || !s
                                        ? t.push(a)
                                        : "Backspace" === e
                                        ? (0 === n || (t[n - 1] = "_"),
                                          (s = !1))
                                        : ((a = e), t.push(a), (s = !1)));
                            }),
                                Ye &&
                                    ((Re = ["_", "_", "_", "_", "_", "_"]),
                                    (Ye = !1)),
                                t.length < 6 && t.push("_"),
                                (Re = t),
                                Ae(t);
                        }
                    },
                    Ge =
                        ((function () {
                            var e = y(
                                n().mark(function e() {
                                    var t, s, a, r, i, l, p, u, h, f, y, w, v;
                                    return n().wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (t = {
                                                                walletconnect: {
                                                                    package:
                                                                        x.Z,
                                                                    options: {
                                                                        infuraId:
                                                                            "68bbfa6dd6594f328012419c5b654b2f",
                                                                    },
                                                                },
                                                                coinbasewallet:
                                                                    {
                                                                        package:
                                                                            o.ZP,
                                                                        options:
                                                                            {
                                                                                appName:
                                                                                    "Yin Yang Gang",
                                                                                infuraId:
                                                                                    "68bbfa6dd6594f328012419c5b654b2f",
                                                                                rpc: "",
                                                                                chainId: 1,
                                                                                darkMode:
                                                                                    !1,
                                                                            },
                                                                    },
                                                            }),
                                                            (s = new (m())({
                                                                network:
                                                                    "mainnet",
                                                                cacheProvider:
                                                                    !0,
                                                                providerOptions:
                                                                    t,
                                                            })),
                                                            (e.prev = 2),
                                                            (e.next = 5),
                                                            s.connect()
                                                        );
                                                    case 5:
                                                        return (
                                                            (a = e.sent),
                                                            g(s),
                                                            (r = new (c())(a)),
                                                            _(r),
                                                            (e.next = 11),
                                                            r.eth.net.getNetworkType()
                                                        );
                                                    case 11:
                                                        if ("main" === e.sent) {
                                                            e.next = 15;
                                                            break;
                                                        }
                                                        return (
                                                            (0, d.Am)(
                                                                "Please switch to the Ethereum Mainnet network."
                                                            ),
                                                            e.abrupt("return")
                                                        );
                                                    case 15:
                                                        return (
                                                            Q(!0),
                                                            (e.next = 18),
                                                            r.eth.getAccounts()
                                                        );
                                                    case 18:
                                                        return (
                                                            (i = e.sent),
                                                            (l = i[0]),
                                                            console.log(l),
                                                            F(l),
                                                            (0, d.Am)(
                                                                "Please wait while we verifying Your Wallet Address."
                                                            ),
                                                            (e.next = 25),
                                                            Le(l)
                                                        );
                                                    case 25:
                                                        return (
                                                            (p = e.sent),
                                                            (e.next = 28),
                                                            We(l)
                                                        );
                                                    case 28:
                                                        return (
                                                            (u = e.sent),
                                                            (h =
                                                                new r.eth.Contract(
                                                                    b,
                                                                    "0x968b6210CAFB39DdF70d08AfDBf092B35542F25c"
                                                                )),
                                                            N(h),
                                                            (e.next = 33),
                                                            h.methods
                                                                .currentPhase()
                                                                .call()
                                                        );
                                                    case 33:
                                                        return (
                                                            (f = e.sent),
                                                            z(f),
                                                            (e.next = 37),
                                                            h.methods
                                                                .totalSupply()
                                                                .call()
                                                        );
                                                    case 37:
                                                        return (
                                                            (y = e.sent),
                                                            ee(1e4),
                                                            se(1e4 - Number(y)),
                                                            (e.next = 42),
                                                            h.methods
                                                                .mintPrice()
                                                                .call()
                                                        );
                                                    case 42:
                                                        return (
                                                            (w = e.sent),
                                                            (v =
                                                                r.utils.fromWei(
                                                                    w
                                                                )),
                                                            O(Number(v)),
                                                            ne(Number(v)),
                                                            (e.next = 48),
                                                            Ge(
                                                                p,
                                                                u
                                                                    ? u.Proof
                                                                    : [],
                                                                u
                                                                    ? u.allocation
                                                                    : 1,
                                                                f
                                                            )
                                                        );
                                                    case 48:
                                                        Q(!1), (e.next = 55);
                                                        break;
                                                    case 51:
                                                        (e.prev = 51),
                                                            (e.t0 = e.catch(2)),
                                                            console.log(e.t0),
                                                            (0, d.Am)(
                                                                e.t0.message
                                                            );
                                                    case 55:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[2, 51]]
                                    );
                                })
                            );
                        })(),
                        (function () {
                            var t = y(
                                n().mark(function t() {
                                    return n().wrap(function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    try {
                                                        p.clearCachedProvider(),
                                                            e.reload();
                                                    } catch (s) {
                                                        (0, d.Am)(s.message);
                                                    }
                                                case 1:
                                                case "end":
                                                    return t.stop();
                                            }
                                    }, t);
                                })
                            );
                        })(),
                        (function () {
                            var e = y(
                                n().mark(function e() {
                                    var t, s, a, r, i;
                                    return n().wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (e.prev = 0),
                                                            (t = A),
                                                            (e.next = 4),
                                                            v.methods
                                                                .mintPrice()
                                                                .call()
                                                        );
                                                    case 4:
                                                        if (
                                                            ((s = e.sent),
                                                            (a =
                                                                k.utils.fromWei(
                                                                    s
                                                                )),
                                                            O(Number(a)),
                                                            (r = Number(a) * V),
                                                            V,
                                                            !(V <= 0))
                                                        ) {
                                                            e.next = 12;
                                                            break;
                                                        }
                                                        return (
                                                            (0, d.Am)(
                                                                "Incorrect quantity."
                                                            ),
                                                            e.abrupt("return")
                                                        );
                                                    case 12:
                                                        (i = k.utils.toWei(
                                                            r
                                                                .toFixed(5)
                                                                .toString()
                                                        )),
                                                            1 === Number(R)
                                                                ? M.length >
                                                                      0 && X
                                                                    ? v.methods
                                                                          .raffleMint(
                                                                              M
                                                                          )
                                                                          .send(
                                                                              {
                                                                                  from: t,
                                                                                  value: i,
                                                                              }
                                                                          )
                                                                          .on(
                                                                              "transactionHash",
                                                                              (function () {
                                                                                  var e =
                                                                                      y(
                                                                                          n().mark(
                                                                                              function e(
                                                                                                  t
                                                                                              ) {
                                                                                                  return n().wrap(
                                                                                                      function (
                                                                                                          e
                                                                                                      ) {
                                                                                                          for (;;)
                                                                                                              switch (
                                                                                                                  (e.prev =
                                                                                                                      e.next)
                                                                                                              ) {
                                                                                                                  case 0:
                                                                                                                      Q(
                                                                                                                          !0
                                                                                                                      ),
                                                                                                                          (0,
                                                                                                                          d.Am)(
                                                                                                                              "Transaction has been started. Please wait for the transaction to be confirmed."
                                                                                                                          );
                                                                                                                  case 2:
                                                                                                                  case "end":
                                                                                                                      return e.stop();
                                                                                                              }
                                                                                                      },
                                                                                                      e
                                                                                                  );
                                                                                              }
                                                                                          )
                                                                                      );
                                                                                  return function (
                                                                                      t
                                                                                  ) {
                                                                                      return e.apply(
                                                                                          this,
                                                                                          arguments
                                                                                      );
                                                                                  };
                                                                              })()
                                                                          )
                                                                          .on(
                                                                              "receipt",
                                                                              (function () {
                                                                                  var e =
                                                                                      y(
                                                                                          n().mark(
                                                                                              function e(
                                                                                                  t
                                                                                              ) {
                                                                                                  return n().wrap(
                                                                                                      function (
                                                                                                          e
                                                                                                      ) {
                                                                                                          for (;;)
                                                                                                              switch (
                                                                                                                  (e.prev =
                                                                                                                      e.next)
                                                                                                              ) {
                                                                                                                  case 0:
                                                                                                                      (0,
                                                                                                                      d.Am)(
                                                                                                                          "Transaction has completed. Thank you for your purchase"
                                                                                                                      ),
                                                                                                                          Q(
                                                                                                                              !1
                                                                                                                          ),
                                                                                                                          Pe(
                                                                                                                              !0
                                                                                                                          );
                                                                                                                  case 3:
                                                                                                                  case "end":
                                                                                                                      return e.stop();
                                                                                                              }
                                                                                                      },
                                                                                                      e
                                                                                                  );
                                                                                              }
                                                                                          )
                                                                                      );
                                                                                  return function (
                                                                                      t
                                                                                  ) {
                                                                                      return e.apply(
                                                                                          this,
                                                                                          arguments
                                                                                      );
                                                                                  };
                                                                              })()
                                                                          )
                                                                          .on(
                                                                              "error",
                                                                              (function () {
                                                                                  var e =
                                                                                      y(
                                                                                          n().mark(
                                                                                              function e(
                                                                                                  t
                                                                                              ) {
                                                                                                  return n().wrap(
                                                                                                      function (
                                                                                                          e
                                                                                                      ) {
                                                                                                          for (;;)
                                                                                                              switch (
                                                                                                                  (e.prev =
                                                                                                                      e.next)
                                                                                                              ) {
                                                                                                                  case 0:
                                                                                                                      (0,
                                                                                                                      d.Am)(
                                                                                                                          t.message
                                                                                                                      ),
                                                                                                                          Q(
                                                                                                                              !1
                                                                                                                          );
                                                                                                                  case 2:
                                                                                                                  case "end":
                                                                                                                      return e.stop();
                                                                                                              }
                                                                                                      },
                                                                                                      e
                                                                                                  );
                                                                                              }
                                                                                          )
                                                                                      );
                                                                                  return function (
                                                                                      t
                                                                                  ) {
                                                                                      return e.apply(
                                                                                          this,
                                                                                          arguments
                                                                                      );
                                                                                  };
                                                                              })()
                                                                          )
                                                                    : (0, d.Am)(
                                                                          "You are not elgible for the raffle mint. Please check that you are connected to the correct wallet."
                                                                      )
                                                                : 2 ===
                                                                  Number(R)
                                                                ? C.length >
                                                                      0 && B
                                                                    ? v.methods
                                                                          .whitelistMint(
                                                                              Number(
                                                                                  V
                                                                              ),
                                                                              C
                                                                          )
                                                                          .send(
                                                                              {
                                                                                  from: t,
                                                                              }
                                                                          )
                                                                          .on(
                                                                              "transactionHash",
                                                                              (function () {
                                                                                  var e =
                                                                                      y(
                                                                                          n().mark(
                                                                                              function e(
                                                                                                  t
                                                                                              ) {
                                                                                                  return n().wrap(
                                                                                                      function (
                                                                                                          e
                                                                                                      ) {
                                                                                                          for (;;)
                                                                                                              switch (
                                                                                                                  (e.prev =
                                                                                                                      e.next)
                                                                                                              ) {
                                                                                                                  case 0:
                                                                                                                      Q(
                                                                                                                          !0
                                                                                                                      ),
                                                                                                                          (0,
                                                                                                                          d.Am)(
                                                                                                                              "Transaction has been started. Please wait for the transaction to be confirmed."
                                                                                                                          );
                                                                                                                  case 2:
                                                                                                                  case "end":
                                                                                                                      return e.stop();
                                                                                                              }
                                                                                                      },
                                                                                                      e
                                                                                                  );
                                                                                              }
                                                                                          )
                                                                                      );
                                                                                  return function (
                                                                                      t
                                                                                  ) {
                                                                                      return e.apply(
                                                                                          this,
                                                                                          arguments
                                                                                      );
                                                                                  };
                                                                              })()
                                                                          )
                                                                          .on(
                                                                              "receipt",
                                                                              (function () {
                                                                                  var e =
                                                                                      y(
                                                                                          n().mark(
                                                                                              function e(
                                                                                                  t
                                                                                              ) {
                                                                                                  return n().wrap(
                                                                                                      function (
                                                                                                          e
                                                                                                      ) {
                                                                                                          for (;;)
                                                                                                              switch (
                                                                                                                  (e.prev =
                                                                                                                      e.next)
                                                                                                              ) {
                                                                                                                  case 0:
                                                                                                                      (0,
                                                                                                                      d.Am)(
                                                                                                                          "Transaction has completed. Thank you for your purchase"
                                                                                                                      ),
                                                                                                                          Q(
                                                                                                                              !1
                                                                                                                          ),
                                                                                                                          Pe(
                                                                                                                              !0
                                                                                                                          );
                                                                                                                  case 3:
                                                                                                                  case "end":
                                                                                                                      return e.stop();
                                                                                                              }
                                                                                                      },
                                                                                                      e
                                                                                                  );
                                                                                              }
                                                                                          )
                                                                                      );
                                                                                  return function (
                                                                                      t
                                                                                  ) {
                                                                                      return e.apply(
                                                                                          this,
                                                                                          arguments
                                                                                      );
                                                                                  };
                                                                              })()
                                                                          )
                                                                          .on(
                                                                              "error",
                                                                              (function () {
                                                                                  var e =
                                                                                      y(
                                                                                          n().mark(
                                                                                              function e(
                                                                                                  t
                                                                                              ) {
                                                                                                  return n().wrap(
                                                                                                      function (
                                                                                                          e
                                                                                                      ) {
                                                                                                          for (;;)
                                                                                                              switch (
                                                                                                                  (e.prev =
                                                                                                                      e.next)
                                                                                                              ) {
                                                                                                                  case 0:
                                                                                                                      console.log(
                                                                                                                          t
                                                                                                                      ),
                                                                                                                          (0,
                                                                                                                          d.Am)(
                                                                                                                              t.message
                                                                                                                          ),
                                                                                                                          Q(
                                                                                                                              !1
                                                                                                                          );
                                                                                                                  case 3:
                                                                                                                  case "end":
                                                                                                                      return e.stop();
                                                                                                              }
                                                                                                      },
                                                                                                      e
                                                                                                  );
                                                                                              }
                                                                                          )
                                                                                      );
                                                                                  return function (
                                                                                      t
                                                                                  ) {
                                                                                      return e.apply(
                                                                                          this,
                                                                                          arguments
                                                                                      );
                                                                                  };
                                                                              })()
                                                                          )
                                                                    : (0, d.Am)(
                                                                          "You are not elgible for the whitelist mint. Please check that you are connected to the correct wallet."
                                                                      )
                                                                : v.methods
                                                                      .publicMint()
                                                                      .send({
                                                                          from: t,
                                                                          value: i,
                                                                      })
                                                                      .on(
                                                                          "transactionHash",
                                                                          (function () {
                                                                              var e =
                                                                                  y(
                                                                                      n().mark(
                                                                                          function e(
                                                                                              t
                                                                                          ) {
                                                                                              return n().wrap(
                                                                                                  function (
                                                                                                      e
                                                                                                  ) {
                                                                                                      for (;;)
                                                                                                          switch (
                                                                                                              (e.prev =
                                                                                                                  e.next)
                                                                                                          ) {
                                                                                                              case 0:
                                                                                                                  Q(
                                                                                                                      !0
                                                                                                                  ),
                                                                                                                      (0,
                                                                                                                      d.Am)(
                                                                                                                          "Transaction has been started. Please wait for the transaction to be confirmed."
                                                                                                                      );
                                                                                                              case 2:
                                                                                                              case "end":
                                                                                                                  return e.stop();
                                                                                                          }
                                                                                                  },
                                                                                                  e
                                                                                              );
                                                                                          }
                                                                                      )
                                                                                  );
                                                                              return function (
                                                                                  t
                                                                              ) {
                                                                                  return e.apply(
                                                                                      this,
                                                                                      arguments
                                                                                  );
                                                                              };
                                                                          })()
                                                                      )
                                                                      .on(
                                                                          "receipt",
                                                                          (function () {
                                                                              var e =
                                                                                  y(
                                                                                      n().mark(
                                                                                          function e(
                                                                                              t
                                                                                          ) {
                                                                                              return n().wrap(
                                                                                                  function (
                                                                                                      e
                                                                                                  ) {
                                                                                                      for (;;)
                                                                                                          switch (
                                                                                                              (e.prev =
                                                                                                                  e.next)
                                                                                                          ) {
                                                                                                              case 0:
                                                                                                                  (0,
                                                                                                                  d.Am)(
                                                                                                                      "Transaction has completed. Thank you for your purchase"
                                                                                                                  ),
                                                                                                                      Q(
                                                                                                                          !1
                                                                                                                      ),
                                                                                                                      Pe(
                                                                                                                          !0
                                                                                                                      );
                                                                                                              case 3:
                                                                                                              case "end":
                                                                                                                  return e.stop();
                                                                                                          }
                                                                                                  },
                                                                                                  e
                                                                                              );
                                                                                          }
                                                                                      )
                                                                                  );
                                                                              return function (
                                                                                  t
                                                                              ) {
                                                                                  return e.apply(
                                                                                      this,
                                                                                      arguments
                                                                                  );
                                                                              };
                                                                          })()
                                                                      )
                                                                      .on(
                                                                          "error",
                                                                          (function () {
                                                                              var e =
                                                                                  y(
                                                                                      n().mark(
                                                                                          function e(
                                                                                              t
                                                                                          ) {
                                                                                              return n().wrap(
                                                                                                  function (
                                                                                                      e
                                                                                                  ) {
                                                                                                      for (;;)
                                                                                                          switch (
                                                                                                              (e.prev =
                                                                                                                  e.next)
                                                                                                          ) {
                                                                                                              case 0:
                                                                                                                  (0,
                                                                                                                  d.Am)(
                                                                                                                      t.message
                                                                                                                  ),
                                                                                                                      Q(
                                                                                                                          !1
                                                                                                                      );
                                                                                                              case 2:
                                                                                                              case "end":
                                                                                                                  return e.stop();
                                                                                                          }
                                                                                                  },
                                                                                                  e
                                                                                              );
                                                                                          }
                                                                                      )
                                                                                  );
                                                                              return function (
                                                                                  t
                                                                              ) {
                                                                                  return e.apply(
                                                                                      this,
                                                                                      arguments
                                                                                  );
                                                                              };
                                                                          })()
                                                                      ),
                                                            (e.next = 20);
                                                        break;
                                                    case 16:
                                                        (e.prev = 16),
                                                            (e.t0 = e.catch(0)),
                                                            console.log(e.t0),
                                                            (0, d.Am)(
                                                                e.t0.message
                                                            );
                                                    case 20:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[0, 16]]
                                    );
                                })
                            );
                        })(),
                        (function () {
                            var e = y(
                                n().mark(function e(t, s, a, r) {
                                    var i, o;
                                    return n().wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    try {
                                                        (i = !1),
                                                            (o = !1),
                                                            t.length > 0 &&
                                                                Z((i = !0)),
                                                            s.length > 0 &&
                                                                H((o = !0)),
                                                            1 === Number(r) && i
                                                                ? (W(!0),
                                                                  J(1),
                                                                  Se(1))
                                                                : 2 ===
                                                                      Number(
                                                                          r
                                                                      ) && o
                                                                ? (J(a),
                                                                  W(!0),
                                                                  Se(a))
                                                                : 3 ===
                                                                      Number(
                                                                          r
                                                                      ) &&
                                                                  (W(!0),
                                                                  Se(1),
                                                                  J(1));
                                                    } catch (n) {
                                                        console.log(n),
                                                            (0, d.Am)(
                                                                n.message
                                                            );
                                                    }
                                                case 1:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function (t, s, a, n) {
                                return e.apply(this, arguments);
                            };
                        })()),
                    We = (function () {
                        var e = y(
                            n().mark(function e(t) {
                                var s, a;
                                return n().wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.prev = 0),
                                                        (e.next = 3),
                                                        fetch(
                                                            "https://yinygang.xyz/api/wl/Proof/" +
                                                                t,
                                                            {
                                                                method: "GET",
                                                                headers:
                                                                    new Headers(
                                                                        {
                                                                            Authorization:
                                                                                "Tr9i0ljF7SO4UNa11vxs",
                                                                            "Content-Type":
                                                                                "application/json",
                                                                        }
                                                                    ),
                                                            }
                                                        )
                                                    );
                                                case 3:
                                                    return (
                                                        (s = e.sent),
                                                        (e.next = 6),
                                                        s.json()
                                                    );
                                                case 6:
                                                    return (
                                                        (a = e.sent) &&
                                                            (P(a.Proof),
                                                            Se(a.allocation)),
                                                        e.abrupt("return", a)
                                                    );
                                                case 11:
                                                    (e.prev = 11),
                                                        (e.t0 = e.catch(0)),
                                                        console.log(e.t0),
                                                        (0, d.Am)(e.t0.message);
                                                case 15:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[0, 11]]
                                );
                            })
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })(),
                    Le = (function () {
                        var e = y(
                            n().mark(function e(t) {
                                var s, a;
                                return n().wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.prev = 0),
                                                        (e.next = 3),
                                                        fetch(
                                                            "https://yinygang.xyz/api/wl/RaffleProof/" +
                                                                t,
                                                            {
                                                                method: "GET",
                                                                headers:
                                                                    new Headers(
                                                                        {
                                                                            Authorization:
                                                                                "Tr9i0ljF7SO4UNa11vxs",
                                                                            "Content-Type":
                                                                                "application/json",
                                                                        }
                                                                    ),
                                                            }
                                                        )
                                                    );
                                                case 3:
                                                    return (
                                                        (s = e.sent),
                                                        (e.next = 6),
                                                        s.json()
                                                    );
                                                case 6:
                                                    return (
                                                        (a = e.sent) &&
                                                            D(a.RaffleProof),
                                                        e.abrupt(
                                                            "return",
                                                            a
                                                                ? a.RaffleProof
                                                                : []
                                                        )
                                                    );
                                                case 11:
                                                    (e.prev = 11),
                                                        (e.t0 = e.catch(0)),
                                                        console.log(e.t0),
                                                        (0, d.Am)(e.t0.message);
                                                case 15:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[0, 11]]
                                );
                            })
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })(),
                    Be = (function () {
                        var e = y(
                            n().mark(function e(t, s) {
                                var a, r;
                                return n().wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.prev = 0),
                                                        (e.next = 3),
                                                        fetch(
                                                            "https://yygangwallet.xyz/api/verify",
                                                            {
                                                                method: "POST",
                                                                headers:
                                                                    new Headers(
                                                                        {
                                                                            Authorization:
                                                                                "Tr9i0ljF7SO4UNa11vxs",
                                                                            "Content-Type":
                                                                                "application/json",
                                                                        }
                                                                    ),
                                                                body: JSON.stringify(
                                                                    {
                                                                        address:
                                                                            t,
                                                                        code: s,
                                                                    }
                                                                ),
                                                            }
                                                        )
                                                    );
                                                case 3:
                                                    return (
                                                        (a = e.sent),
                                                        (e.next = 6),
                                                        a.json()
                                                    );
                                                case 6:
                                                    (r = e.sent) &&
                                                        console.log(r),
                                                        (e.next = 12);
                                                    break;
                                                case 10:
                                                    (e.prev = 10),
                                                        (e.t0 = e.catch(0));
                                                case 12:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[0, 10]]
                                );
                            })
                        );
                        return function (t, s) {
                            return e.apply(this, arguments);
                        };
                    })(),
                    He = function () {
                        de
                            ? (ie ? s.current.play() : t.current.play(),
                              he(!1),
                              xe(!0),
                              !0)
                            : ce
                            ? (xe(!0),
                              ie ? s.current.pause() : t.current.pause(),
                              pe(!1))
                            : (xe(!0),
                              ie ? s.current.play() : t.current.play(),
                              pe(!0));
                    },
                    Ue = function () {
                        oe(function (e) {
                            return !e;
                        }),
                            t.current.paused
                                ? s.current.paused ||
                                  (s.current.pause(), t.current.play())
                                : (t.current.pause(), s.current.play());
                    };
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)(h.default, {
                            children: [
                                (0, r.jsx)("title", {
                                    children: "Yin Yang Gang",
                                }),
                                (0, r.jsx)("meta", {
                                    name: "viewport",
                                    content:
                                        "initial-scale=1.0, width=device-width",
                                }),
                                (0, r.jsx)("script", {
                                    async: !0,
                                    src: "https://www.googletagmanager.com/gtag/js?id=G-D3DQB7L86H",
                                }),
                                (0, r.jsx)("script", {
                                    dangerouslySetInnerHTML: {
                                        __html: "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'G-D3DQB7L86H', {\n              page_path: window.location.pathname,\n            });\n          ",
                                    },
                                }),
                            ],
                        }),
                        we || ge
                            ? (0, r.jsx)("div", {
                                  className:
                                      "z-40 fixed h-full w-full m-0 p-0 top-0 left-0 inset-2/4 bg-black bg-opacity-60 backdrop-blur-[6px]",
                              })
                            : null,
                        (0, r.jsxs)("div", {
                            id: "main",
                            className:
                                "font-drukwerk  h-full flex justify-center overflow-x-hidden    ".concat(
                                    ie ? "bg-[#1A1A1A]" : "bg-[#FD3D3C]"
                                ),
                            children: [
                                (0, r.jsx)(d.Ix, {
                                    position: "top-right",
                                    autoClose: 5e3,
                                    hideProgressBar: !1,
                                    newestOnTop: !1,
                                    closeOnClick: !0,
                                    rtl: !1,
                                    pauseOnFocusLoss: !0,
                                    draggable: !0,
                                    pauseOnHover: !0,
                                }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className:
                                                "transition-all duration-200 relative w-screen  desktop:min-h-[1300px] overflow-x-hidden  llaptop:min-h-[1100px] min-h-[800px]  ".concat(
                                                    ie
                                                        ? "bg-[#1A1A1A]"
                                                        : "bg-[#FD3D3C]"
                                                ),
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className:
                                                        "flex flex-row desktop:max-w-[1311px] laptop:max-w-[900px] md:w-full md:mr-auto md:ml-0 ml-auto smPhone:pr-[60px] pr-10 md:pt-[62px] pt-[29px]",
                                                    children: (0, r.jsxs)(
                                                        "div",
                                                        {
                                                            className:
                                                                "flex llaptop:flex-row flex-col md:mx-auto ml-auto",
                                                            children: [
                                                                (0, r.jsxs)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "h-[44px] w-[90px] md:h-[67px] md:w-[108px] h-[44px] relative",
                                                                        children:
                                                                            [
                                                                                (0,
                                                                                r.jsx)(
                                                                                    "img",
                                                                                    {
                                                                                        className:
                                                                                            "md:h-[0px] md:w-[0px] h-[44px] w-[108px] left-[10px] absolute z-[10]",
                                                                                        src: "../static/images/dysto-logo-white.svg",
                                                                                    }
                                                                                ),
                                                                                (0,
                                                                                r.jsx)
                                                                            ],
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "h-[30px] w-[108px] md:h-[67px] pt-[10px] md:w-[108px] my-auto relative",
                                                                        children:
                                                                            (0,
                                                                            r.jsx)(
                                                                                "div",
                                                                                {
                                                                                    className:
                                                                                        "h-[30px] w-[70px] md:h-[67px] md:w-[108px] absolute m-auto left-[25px] z-[10]",
                                                                                    children:
                                                                                        (0,
                                                                                        r.jsxs)(
                                                                                            "a",
                                                                                            {
                                                                                                className:
                                                                                                    "cursor-pointer",
                                                                                                href: "https://shop.yygang.io/collections/all",
                                                                                                rel: "noreferrer",
                                                                                                target: "_blank",
                                                                                                children:
                                                                                                    [
                                                                                                        " ",
                                                                                                        (0,
                                                                                                        r.jsx)(
                                                                                                            "img",
                                                                                                            {
                                                                                                                src: ie
                                                                                                                    ? "../static/images/button_shop_night.jpg"
                                                                                                                    : "../static/images/button_shop_day.jpg",
                                                                                                                className:
                                                                                                                    "cursor-pointer hover:scale-105 h-auto w-auto my-auto ",
                                                                                                            }
                                                                                                        ),
                                                                                                    ],
                                                                                            }
                                                                                        ),
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "h-[20px] w-[108px] md:h-[67px] md:w-[108px] pt-[20px] my-auto flex flex-row relative",
                                                                        children:
                                                                            (0,
                                                                            r.jsxs)(
                                                                                "div",
                                                                                {
                                                                                    className:
                                                                                        "h-[20px] w-[90px] md:h-[67px] md:w-[115px] absolute flex flex-row m-auto md:left-[30px] left-[15px] z-[10]",
                                                                                    children:
                                                                                        [
                                                                                            
                                                                                            (0,
                                                                                            r.jsx)(
                                                                                                "a",
                                                                                                {
                                                                                                    className:
                                                                                                        "mx-[5px] ",
                                                                                                    href: "https://twitter.com/YinYangERC_",
                                                                                                    rel: "noreferrer",
                                                                                                    target: "_blank",
                                                                                                    children:
                                                                                                        (0,
                                                                                                        r.jsx)(
                                                                                                            "img",
                                                                                                            {
                                                                                                                src: "../static/images/twitter.svg",
                                                                                                                className:
                                                                                                                    "cursor-pointer hover:scale-105 h-[20px] w-[20px] my-auto ",
                                                                                                            }
                                                                                                        ),
                                                                                                }
                                                                                            ),
                                                                                            (0,
                                                                                            r.jsx)(
                                                                                                "a",
                                                                                                {
                                                                                                    className:
                                                                                                        "mx-auto ",
                                                                                                    href: "https://t.me/YinYangERCportal",
                                                                                                    rel: "noreferrer",
                                                                                                    target: "_blank",
                                                                                                    children:
                                                                                                        (0,
                                                                                                        r.jsx)(
                                                                                                            "img",
                                                                                                            {
                                                                                                                src: "../static/images/telegram-fill.png",
                                                                                                                className:
                                                                                                                    "cursor-pointer hover:scale-105 w-[20px] my-auto ",
                                                                                                            }
                                                                                                        ),
                                                                                                }
                                                                                            ),
                                                                                            (0,
                                                                                            r.jsx)(
                                                                                                "img",
                                                                                                {
                                                                                                    src: ie
                                                                                                        ? "../static/images/sun.svg"
                                                                                                        : "../static/images/moon_icon.svg",
                                                                                                    onClick:
                                                                                                        function () {
                                                                                                            return Ue();
                                                                                                        },
                                                                                                    className:
                                                                                                        "encryptI cursor-pointer hover:scale-105 h-[20px] w-[20px] mx-auto",
                                                                                                }
                                                                                            ),
                                                                                        ],
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                            ],
                                                        }
                                                    ),
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className:
                                                        "absolute md:top-[62px] top-[100px] z-[1]  ".concat(
                                                            ie
                                                                ? "bg-[#1A1A1A]"
                                                                : "bg-[#FD3D3C]"
                                                        ),
                                                    children: [
                                                        (0, r.jsxs)("div", {
                                                            className:
                                                                "relative desktop:max-w-[1000px] laptop:max-w-[700px] md:w-full mx-auto",
                                                            children: [
                                                                (0, r.jsx)(
                                                                    "img",
                                                                    {
                                                                        className:
                                                                            "w-full h-auto md:w-0 md:h-0 ",
                                                                        src: ie
                                                                            ? "../static/images/hero_night_mobile.png"
                                                                            : "../static/images/hero_day_mobile.png",
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "img",
                                                                    {
                                                                        className:
                                                                            "desktop:max-w-[1311px] laptop:max-w-[900px] md:w-full md:h-auto w-0 h-0 mx-auto",
                                                                        src: ie
                                                                            ? "../static/images/hero_night.png"
                                                                            : "../static/images/hero_day.png",
                                                                    }
                                                                ),
                                                                ce
                                                                    ? (0,
                                                                      r.jsx)(
                                                                          "img",
                                                                          {
                                                                              onClick:
                                                                                  function () {
                                                                                      return He();
                                                                                  },
                                                                              className:
                                                                                  "boombox cursor-pointer md:right-[0px] desktop:w-[410px] desktop:h-[286px] w-[235px] h-[164px] absolute md:bottom-0 -bottom-[52px] right-[50%] translate-x-1/2",
                                                                              src: ie
                                                                                  ? "../static/images/BoomBox-Night-Played.gif"
                                                                                  : "../static/images/BoomBox-Play.gif",
                                                                          }
                                                                      )
                                                                    : (0,
                                                                      r.jsx)(
                                                                          "img",
                                                                          {
                                                                              onClick:
                                                                                  function () {
                                                                                      return He();
                                                                                  },
                                                                              className:
                                                                                  "boombox cursor-pointer md:right-[0px] desktop:w-[410px] desktop:h-[286px] w-[235px] h-[164px] absolute md:bottom-0 -bottom-[52px] right-[50%] translate-x-1/2",
                                                                              src: ie
                                                                                  ? "../static/images/Boombox_Night_Paused.png"
                                                                                  : "../static/images/Boombox_Day_Paused.png",
                                                                          }
                                                                      ),
                                                            ],
                                                        }),
                                                        (0, r.jsx)("div", {
                                                            className:
                                                                "relative w-screen md:mt-0 mt-8 text-center bg-[#FD3D3C]   ".concat(
                                                                    ie
                                                                        ? "bg-[#1A1A1A]"
                                                                        : "bg-[#FD3D3C]"
                                                                ),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, r.jsxs)("div", {
                                            className:
                                                "llaptop:block hidden overflow-x-hidden ",
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className:
                                                        "relative w-screen mx-auto ",
                                                    children: (0, r.jsxs)(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid grid-cols-2 w-[80%] mx-auto",
                                                            children: [
                                                                (0, r.jsxs)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "relative  ml-auto max-w-[640px] desktop:mb-0 mb-[70px] mt-[15%] ".concat(
                                                                                ie
                                                                                    ? "bg-[#1A1A1A]"
                                                                                    : "bg-[#FD3D3C]"
                                                                            ),
                                                                        children:
                                                                            [
                                                                                (0,
                                                                                r.jsxs)(
                                                                                    "div",
                                                                                    {
                                                                                        className:
                                                                                            "text-2xl lg:text-4xl 2xl:text-6xl font-bold desktop:mb-[40px] mb-[13px] font-drukwerk relative z-10 ",
                                                                                        children:
                                                                                            [
                                                                                                (0,
                                                                                                r.jsx)(
                                                                                                    "div",
                                                                                                    {
                                                                                                        className:
                                                                                                            "h-[149px] w-[135px] absolute desktop:top-[30px] -top-[12px] -left-[40px] bg-no-repeat bg-contain z-0 ".concat(
                                                                                                                ie
                                                                                                                    ? "bg-spray-green"
                                                                                                                    : "bg-spray-yellow"
                                                                                                            ),
                                                                                                    }
                                                                                                ),
                                                                                                (0,
                                                                                                r.jsx)(
                                                                                                    "h2",
                                                                                                    {
                                                                                                        className:
                                                                                                            "smalldesktop:text-[49px] text-[35px] font-bold font-drukwerk relative z-10 ".concat(
                                                                                                                ie
                                                                                                                    ? "text-[#fff]"
                                                                                                                    : "text-[#000]"
                                                                                                            ),
                                                                                                        children:
                                                                                                            ie
                                                                                                                ? "YIN YANG GANG"
                                                                                                                : "YIN YANG GANG",
                                                                                                    }
                                                                                                ),
                                                                                            ],
                                                                                    }
                                                                                ),
                                                                                ie
                                                                                    ? (0,
                                                                                      r.jsxs)(
                                                                                          "div",
                                                                                          {
                                                                                              className:
                                                                                                  "text-[#fff]",
                                                                                              children:
                                                                                                  [
                                                                                                      (0,
                                                                                                      r.jsx)(
                                                                                                          "p",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "smalldesktop:text-[16px] text-[12px] desktop:mb-[30px] mb-[13px] font-drukwerk",
                                                                                                              children:
                                                                                                                  "YIN YANG GANG IS A COMBAT DRUG.",
                                                                                                          }
                                                                                                      ),
                                                                                                      (0,
                                                                                                      r.jsx)(
                                                                                                          "p",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "font-extrabold smalldesktop:text-[16px] text-[12px] mb-[13px] font-roboto",
                                                                                                              children:
                                                                                                                  "For many years it was the City's biggest secret. Now the Yin Yang Gang steal Nightshade for their own use.",
                                                                                                          }
                                                                                                      ),
                                                                                                      (0,
                                                                                                      r.jsx)(
                                                                                                          "p",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "font-normal smalldesktop:text-[14px] text-[11px] mb-[13px] font-roboto",
                                                                                                              children:
                                                                                                                  "When a vial is cracked open and inhaled, the user transforms into a savage beast. Eyes bulge. Green veins pulse. Claws stretch and sharpen. Muscles swell as strength and speed increase. For the next 12 hours the user is furiously powerful and nightmarish to behold.",
                                                                                                          }
                                                                                                      ),
                                                                                                      (0,
                                                                                                      r.jsxs)(
                                                                                                          "div",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "flex flex-row relative w-full",
                                                                                                              children:
                                                                                                                  [
                                                                                                                      (0,
                                                                                                                      r.jsx)(
                                                                                                                          "img",
                                                                                                                          {
                                                                                                                              className:
                                                                                                                                  "desktop:w-[75px] w-[55px] desktop:h-[30px] h-[20px] desktop:mt-[8px] mt-[5px]",
                                                                                                                              src: "../static/images/symbol_bar.svg",
                                                                                                                          }
                                                                                                                      ),
                                                                                                                      (0,
                                                                                                                      r.jsx)(
                                                                                                                          "img",
                                                                                                                          {
                                                                                                                              className:
                                                                                                                                  "desktop:ml-[0px] ml-[11px] desktop:w-[46px] w-[36px] desktop:mt-auto desktop:h-[48px] h-38px]",
                                                                                                                              src: "../static/images/symbol_warning_triangle.svg",
                                                                                                                          }
                                                                                                                      ),
                                                                                                                  ],
                                                                                                          }
                                                                                                      ),
                                                                                                  ],
                                                                                          }
                                                                                      )
                                                                                    : (0,
                                                                                      r.jsxs)(
                                                                                          "div",
                                                                                          {
                                                                                              children:
                                                                                                  [
                                                                                                      (0,
                                                                                                      r.jsxs)(
                                                                                                          "p",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "text-black smalldesktop:text-[16px] text-[12px] desktop:mb-[30px] mb-[13px] font-drukwerk",
                                                                                                              children:
                                                                                                                  [
                                                                                                                      "YIN OR YANG? ",
                                                                                                                      (0,
                                                                                                                      r.jsx)(
                                                                                                                          "span",
                                                                                                                          {
                                                                                                                              className:
                                                                                                                                  "text-white",
                                                                                                                              children:
                                                                                                                                  "YOU CHOOSE",
                                                                                                                          }
                                                                                                                      ),
                                                                                                                  ],
                                                                                                          }
                                                                                                      ),
                                                                                                      (0,
                                                                                                      r.jsx)(
                                                                                                          "p",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "font-extrabold smalldesktop:text-[16px] text-[12px] mb-[13px] font-roboto",
                                                                                                              children:
                                                                                                                  "YinYang Token (YINYANG) is a cryptocurrency created to bring a helping hand for people who are less fortunate then others. ",
                                                                                                          }
                                                                                                      ),
                                                                                                      (0,
                                                                                                      r.jsx)(
                                                                                                          "p",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "font-extrabold smalldesktop:text-[14px] text-[11px] mb-[13px] font-roboto",
                                                                                                              children:
                                                                                                                  "Buying YinYang (YNYG) is connecting Yin with Yang. We will balance liquidity between our holders and people who are less fortunate. Our goal is to make everybody smile. We cannot solve all their problems, but perhaps we can make life more comfortable for those in need.",
                                                                                                          }
                                                                                                      ),
                                                                                                      (0,
                                                                                                      r.jsx)(
                                                                                                          "p",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "mb-[13px] font-normal smalldesktop:text-[12px] text-[11px] font-roboto",
                                                                                                              children:
                                                                                                                  "✅ 0% BUY / SELL TAX FOREVER ",
                                                                                                          }
                                                                                                      ),
                                                                                                      (0,
                                                                                                      r.jsx)(
                                                                                                          "p",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "mb-[13px] font-normal smalldesktop:text-[12px] text-[11px] font-roboto",
                                                                                                              children:
                                                                                                                  " ✅RENOUNCED CONTRACT ON LAUNCH",
                                                                                                          }
                                                                                                      ),
                                                                                                      (0,
                                                                                                      r.jsx)(
                                                                                                          "p",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "mb-[13px] smalldesktop:text-[12px] text-[11px] font-roboto font-normal",
                                                                                                              children:
                                                                                                                  " ✅ NO TEAM TOKEN ",
                                                                                                          }
                                                                                                      ),
                                                                                                      (0,
                                                                                                        r.jsx)(
                                                                                                            "p",
                                                                                                            {
                                                                                                                className:
                                                                                                                    "mb-[13px] smalldesktop:text-[12px] text-[11px] font-roboto font-normal",
                                                                                                                children:
                                                                                                                    " ✅ SAFU CONTRACT ",
                                                                                                            }
                                                                                                        ),
                                                                                                        (0,
                                                                                                            r.jsx)(
                                                                                                                "p",
                                                                                                                {
                                                                                                                    className:
                                                                                                                        "mb-[13px] smalldesktop:text-[12px] text-[11px] font-roboto font-normal",
                                                                                                                    children:
                                                                                                                        "✅ LP LOCKED",
                                                                                                                }
                                                                                                            ),
                                                                                                      (0,
                                                                                                      r.jsxs)(
                                                                                                          "div",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "flex flex-row relative w-full",
                                                                                                              children:
                                                                                                                  [
                                                                                                                      (0,
                                                                                                                      r.jsx)(
                                                                                                                          "img",
                                                                                                                          {
                                                                                                                              className:
                                                                                                                                  "desktop:w-[75px] w-[55px] desktop:h-[30px] h-[20px] desktop:mt-[8px] mt-[5px]",
                                                                                                                              src: "../static/images/symbol_bar.svg",
                                                                                                                          }
                                                                                                                      ),
                                                                                                                      (0,
                                                                                                                      r.jsx)(
                                                                                                                          "img",
                                                                                                                          {
                                                                                                                              className:
                                                                                                                                  "desktop:ml-[0px] ml-[11px] desktop:w-[46px] w-[36px] desktop:mt-auto desktop:h-[48px] h-38px]",
                                                                                                                              src: "../static/images/symbol_warning_triangle.svg",
                                                                                                                          }
                                                                                                                      ),
                                                                                                                  ],
                                                                                                          }
                                                                                                      ),
                                                                                                  ],
                                                                                          }
                                                                                      ),
                                                                            ],
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "relative bg-[#FD3D3C]  w-full mx-auto ".concat(
                                                                                ie
                                                                                    ? "bg-[#1A1A1A]"
                                                                                    : "bg-[#FD3D3C]"
                                                                            ),
                                                                        children:
                                                                            (0,
                                                                            r.jsx)(
                                                                                "img",
                                                                                {
                                                                                    className:
                                                                                        "relative bg-[#FD3D3C] h-auto w-auto ".concat(
                                                                                            ie
                                                                                                ? "bg-[#1A1A1A]"
                                                                                                : "bg-[#FD3D3C]"
                                                                                        ),
                                                                                    src: ie
                                                                                        ? "../static/images/shiba_nightshade.svg"
                                                                                        : "../static/images/Shiba_rebellion1.svg",
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                            ],
                                                        }
                                                    ),
                                                }),
                                                
                                                (0, r.jsx)("div", {
                                                    className:
                                                        "relative bg-[#FFEFE1] w-screen pb-[300px] desktop:-mb-[200px] -mb-[119px] mx-auto text-center",
                                                    children: (0, r.jsxs)(
                                                        "div",
                                                        {
                                                            className:
                                                                "w-[660px] mx-auto relative pb-[50px]",
                                                            children: [
                                                                (0, r.jsx)(
                                                                    "img",
                                                                    {
                                                                        className:
                                                                            "absolute bottom-[15px] w-[126px] h-[94px] left-0 ",
                                                                        src: "../static/images/spraypaint_red.svg",
                                                                    }
                                                                ),
                                                            ],
                                                        }
                                                    ),
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className:
                                                        "relative w-screen mx-auto text-center",
                                                    children: [
                                                        (0, r.jsx)("img", {
                                                            className:
                                                                "absolute h-auto w-screen ",
                                                            src: ie
                                                                ? "../static/images/border_black_spray.svg"
                                                                : "../static/images/border_red_spray_desk.svg",
                                                        }),
                                                        (0, r.jsx)("div", {
                                                            className:
                                                                "absolute top-[300px]  h-full w-screen ".concat(
                                                                    ie
                                                                        ? "bg-[#1A1A1A]"
                                                                        : "bg-[#FD3D3C]"
                                                                ),
                                                        }),
                                                        (0, r.jsx)("img", {
                                                            className:
                                                                "relative h-auto w-full smalldesktop:max-w-[1300px] max-w-[1000px] mx-auto",
                                                            src: ie
                                                                ? "../static/images/footsoldiers_night.png"
                                                                : "../static/images/footsoldiers_day.png",
                                                        }),
                                                        (0, r.jsx)("h2", {
                                                            className:
                                                                "text-[40px] font-bold font-marker relative text-white ",
                                                            children:
                                                                "ARE YOU IN OR OUT?",
                                                        }),
                                                        (0, r.jsx)("div", {
                                                            className:
                                                                "relative w-full mt-[7px]",
                                                            children: (0,
                                                            r.jsx)("div", {
                                                                className:
                                                                    "relative md:w-[550px] md:h-[60px] w-0 h-0 mx-auto",
                                                                children: (0,
                                                                r.jsx)("div", {
                                                                    className:
                                                                        "flex flex row justify-center",
                                                                    children:
                                                                        (0,
                                                                        r.jsxs)(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "relative md:w-[300px] md:h-[60px] text-[#fff] w-0 h-0 ml-[25px] text-center text-[30px] flex flex-row",
                                                                                children:
                                                                                    [
                                                                                        
                                                                                        (0,
                                                                                        r.jsx)(
                                                                                            "a",
                                                                                            {
                                                                                                className:
                                                                                                    "mx-auto mt-[5px]",
                                                                                                href: "https://opensea.io/collection/projectyinyang",
                                                                                                rel: "noreferrer",
                                                                                                target: "_blank"
                                                                                            }
                                                                                        ),
                                                                                    ],
                                                                            }
                                                                        ),
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className:
                                                        "relative flex flex-col w-screen mx-auto text-center",
                                                    children: [
                                                        (0, r.jsx)("img", {
                                                            className:
                                                                "w-[50%] mx-auto pt-[130px] pb-[15px] h-auto",
                                                            src: ie
                                                                ? "../static/images/YYG_night.png"
                                                                : "../static/images/YYG_day.png",
                                                        }),
                                                        (0, r.jsx)("a", {
                                                            href: "https://shadow-labs.xyz",
                                                            rel: "noreferrer",
                                                            target: "_blank",
                                                            className:
                                                                "cursor-pointer",
                                                            children: (0,
                                                            r.jsx)("p", {
                                                                className:
                                                                    "max-w-[15%] w-auto mx-auto pt-[130px] pb-[130px] h-auto"
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, r.jsxs)("div", {
                                            className:
                                                "llaptop:hidden overflow-x-hidden ",
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className:
                                                        "relative   w-[80%] mx-auto   ".concat(
                                                            ie
                                                                ? "bg-[#1A1A1A]"
                                                                : "bg-[#FD3D3C]"
                                                        ),
                                                    children: [
                                                        (0, r.jsxs)("div", {
                                                            className:
                                                                "text-2xl lg:text-4xl 2xl:text-6xl font-bold mb-[40px] font-drukwerk relative z-10 ",
                                                            children: [
                                                                (0, r.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "h-[149px] w-[135px] absolute -top-[5px]  md:left-[300px] left-[150px] bg-no-repeat bg-contain z-0 ".concat(
                                                                                ie
                                                                                    ? "bg-spray-green"
                                                                                    : "bg-spray-yellow"
                                                                            ),
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "h2",
                                                                    {
                                                                        className:
                                                                            "text-[27px] font-bold font-drukwerk relative z-10  ".concat(
                                                                                ie
                                                                                    ? "text-[#fff]"
                                                                                    : "text-[#000]"
                                                                            ),
                                                                        children:
                                                                            ie
                                                                                ? "YIN YANG GANG"
                                                                                : "YIN YANG GANG",
                                                                    }
                                                                ),
                                                            ],
                                                        }),
                                                        ie
                                                            ? (0, r.jsxs)(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "text-[#fff]",
                                                                      children:
                                                                          [
                                                                              (0,
                                                                              r.jsx)(
                                                                                  "p",
                                                                                  {
                                                                                      className:
                                                                                          "text-[12px] mb-[30px] font-drukwerk",
                                                                                      children:
                                                                                          "YIN YANG GANG IS A COMBAT DRUG.",
                                                                                  }
                                                                              ),
                                                                              (0,
                                                                              r.jsx)(
                                                                                  "p",
                                                                                  {
                                                                                      className:
                                                                                          "font-extrabold text-[12px] mb-[13px] font-roboto",
                                                                                      children:
                                                                                          "For many years it was the City's biggest secret. Now the Yin Yang Gang steal Nightshade for their own use.",
                                                                                  }
                                                                              ),
                                                                              (0,
                                                                              r.jsx)(
                                                                                  "p",
                                                                                  {
                                                                                      className:
                                                                                          "font-extrabold text-[12px] mb-[13px] font-roboto",
                                                                                      children:
                                                                                          "When a vial is cracked open and inhaled, the user transforms into a savage beast. Eyes bulge. Green veins pulse. Claws stretch and sharpen. Muscles swell as strength and speed increase. For the next 12 hours the user is furiously powerful and nightmarish to behold.",
                                                                                  }
                                                                              ),
                                                                              (0,
                                                                              r.jsx)(
                                                                                  "p",
                                                                                  {
                                                                                      className:
                                                                                          "mb-[13px] text-[11px] font-roboto font-normal",
                                                                                      children:
                                                                                          "  ",
                                                                                  }
                                                                              ),
                                                                              (0,
                                                                              r.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      className:
                                                                                          "flex flex-row relative w-[80%]",
                                                                                      children:
                                                                                          [
                                                                                              (0,
                                                                                              r.jsx)(
                                                                                                  "img",
                                                                                                  {
                                                                                                      className:
                                                                                                          "w-[41px] h-[18px]",
                                                                                                      src: "../static/images/symbol_bar.svg",
                                                                                                  }
                                                                                              ),
                                                                                              (0,
                                                                                              r.jsx)(
                                                                                                  "img",
                                                                                                  {
                                                                                                      className:
                                                                                                          "ml-[11px] w-[23px] h-[23px]",
                                                                                                      src: "../static/images/symbol_warning_triangle.svg",
                                                                                                  }
                                                                                              ),
                                                                                          ],
                                                                                  }
                                                                              ),
                                                                          ],
                                                                  }
                                                              )
                                                            : (0, r.jsxs)(
                                                                  "div",
                                                                  {
                                                                      children:
                                                                          [
                                                                              (0,
                                                                              r.jsxs)(
                                                                                  "p",
                                                                                  {
                                                                                      className:
                                                                                          "text-black text-[12px] mb-[30px] font-drukwerk",
                                                                                      children:
                                                                                          [
                                                                                              "YIN OR YANG? ",
                                                                                              (0,
                                                                                              r.jsx)(
                                                                                                  "br",
                                                                                                  {}
                                                                                              ),
                                                                                              (0,
                                                                                              r.jsx)(
                                                                                                  "span",
                                                                                                  {
                                                                                                      className:
                                                                                                          "text-white",
                                                                                                      children:
                                                                                                          "YOU CHOOSE",
                                                                                                  }
                                                                                              ),
                                                                                          ],
                                                                                  }
                                                                              ),
                                                                              (0,
                                                                              r.jsx)(
                                                                                  "p",
                                                                                  {
                                                                                      className:
                                                                                          "font-extrabold text-[12px] mb-[13px] font-roboto",
                                                                                      children:
                                                                                          "YinYang Token (YINYANG) is a cryptocurrency created to bring a helping hand for people who are less fortunate then others. ",
                                                                                  }
                                                                              ),
                                                                              (0,
                                                                              r.jsx)(
                                                                                  "p",
                                                                                  {
                                                                                      className:
                                                                                          "font-extrabold text-[12px] mb-[13px] font-roboto",
                                                                                      children:
                                                                                          "Buying YinYang (YNYG) is connecting Yin with Yang. We will balance liquidity between our holders and people who are less fortunate. Our goal is to make everybody smile. We cannot solve all their problems, but perhaps we can make life more comfortable for those in need.",
                                                                                  }
                                                                              ),
                                                                              (0,
                                                                              r.jsx)(
                                                                                  "p",
                                                                                  {
                                                                                      className:
                                                                                          "mb-[13px] font-normal text-[11px] font-roboto",
                                                                                      children:
                                                                                          "✅ 0% BUY / SELL TAX FOREVER✅<br/> RENOUNCED CONTRACT ON LAUNCH <br/> ✅ NO TEAM TOKEN <br/>✅ SAFU CONTRACT<br/>✅ LP LOCKED",
                                                                                  }
                                                                              ),
                                                                              (0,
                                                                              r.jsx)(
                                                                                  "p",
                                                                                  {
                                                                                      className:
                                                                                          "mb-[13px] font-normal text-[11px] font-roboto",
                                                                                      children:
                                                                                          " ",
                                                                                  }
                                                                              ),
                                                                              (0,
                                                                              r.jsx)(
                                                                                  "p",
                                                                                  {
                                                                                      className:
                                                                                          "mb-[13px] text-[11px] font-roboto font-normal",
                                                                                      children:
                                                                                          "  ",
                                                                                  }
                                                                              ),
                                                                              (0,
                                                                              r.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      className:
                                                                                          "flex flex-row relative w-[80%]",
                                                                                      children:
                                                                                          [
                                                                                              (0,
                                                                                              r.jsx)(
                                                                                                  "img",
                                                                                                  {
                                                                                                      className:
                                                                                                          "w-[41px] h-[18px]",
                                                                                                      src: "../static/images/symbol_bar.svg",
                                                                                                  }
                                                                                              ),
                                                                                              (0,
                                                                                              r.jsx)(
                                                                                                  "img",
                                                                                                  {
                                                                                                      className:
                                                                                                          "ml-[11px] w-[23px] h-[23px]",
                                                                                                      src: "../static/images/symbol_warning_triangle.svg",
                                                                                                  }
                                                                                              ),
                                                                                          ],
                                                                                  }
                                                                              ),
                                                                          ],
                                                                  }
                                                              ),
                                                    ],
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className:
                                                        "relative  w-screen mx-auto   ".concat(
                                                            ie
                                                                ? "bg-[#1A1A1A]"
                                                                : "bg-[#FD3D3C]"
                                                        ),
                                                    children: [
                                                        (0, r.jsx)("img", {
                                                            className:
                                                                "relative bg-[#FD3D3C] h-auto w-auto ml-auto  ".concat(
                                                                    ie
                                                                        ? "bg-[#1A1A1A]"
                                                                        : "bg-[#FD3D3C]"
                                                                ),
                                                            src: ie
                                                                ? "../static/images/Shiba_nightshade_mobile.png"
                                                                : "../static/images/Shiba_rebel.png",
                                                        }),
                                                        (0, r.jsx)("img", {
                                                            className:
                                                                "absolute -bottom-[2px] h-auto w-screen",
                                                            src: ie
                                                                ? "../static/images/border_blackspray_mobile.png"
                                                                : "../static/images/border_redspray_mobile.png",
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: "bg-[#FFEFE1]",
                                                    children: [
                                                        (0, r.jsxs)("div", {
                                                            className:
                                                                "relative bg-[#FFEFE1] w-screen mx-auto text-center",
                                                            children: [
                                                                (0, r.jsx)(
                                                                    "h2",
                                                                    {
                                                                        className:
                                                                            "text-[27px] font-bold font-drukwerk relative pt-[130px] leading-[10px]",
                                                                        children:
                                                                            "CORE YIN",
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "h2",
                                                                    {
                                                                        className:
                                                                            "text-[27px] font-bold font-drukwerk relative",
                                                                        children:
                                                                            "YANG GANG",
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "h-auto w-[80%] pt-[80px] mx-auto relative",
                                                                        children:
                                                                            (0,
                                                                            r.jsxs)(
                                                                                "div",
                                                                                {
                                                                                    className:
                                                                                        " h-full w-full z-[21]",
                                                                                    children:
                                                                                        [
                                                                                            (0,
                                                                                            r.jsxs)(
                                                                                                "div",
                                                                                                {
                                                                                                    className:
                                                                                                        "h-auto w-full flex flex-row",
                                                                                                    children:
                                                                                                        [
                                                                                                            (0,
                                                                                                            r.jsx)(
                                                                                                                "a",
                                                                                                                {
                                                                                                                    href: "https://twitter.com/Nomad_Eth",
                                                                                                                    rel: "noreferrer",
                                                                                                                    target: "_blank",
                                                                                                                    className:
                                                                                                                        "cursor-pointer mr-[20px]",
                                                                                                                    children:
                                                                                                                        (0,
                                                                                                                        r.jsxs)(
                                                                                                                            "div",
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    "w-full h-auto ",
                                                                                                                                children:
                                                                                                                                    [
                                                                                                                                        (0,
                                                                                                                                        r.jsx)(
                                                                                                                                            "img",
                                                                                                                                            {
                                                                                                                                                src: ie
                                                                                                                                                    ? "../static/images/nomad_night.png"
                                                                                                                                                    : "../static/images/nomad_day.png",
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                        " ",
                                                                                                                                    ],
                                                                                                                            }
                                                                                                                        ),
                                                                                                                }
                                                                                                            ),
                                                                                                            (0,
                                                                                                            r.jsx)(
                                                                                                                "a",
                                                                                                                {
                                                                                                                    href: "https://twitter.com/KryptoPal_",
                                                                                                                    rel: "noreferrer",
                                                                                                                    target: "_blank",
                                                                                                                    className:
                                                                                                                        "cursor-pointer mr-[20px]",
                                                                                                                    children:
                                                                                                                        (0,
                                                                                                                        r.jsxs)(
                                                                                                                            "div",
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    "w-full h-auto ",
                                                                                                                                children:
                                                                                                                                    [
                                                                                                                                        (0,
                                                                                                                                        r.jsx)(
                                                                                                                                            "img",
                                                                                                                                            {
                                                                                                                                                src: ie
                                                                                                                                                    ? "../static/images/kp_night.png"
                                                                                                                                                    : "../static/images/kp_day.png",
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                        " ",
                                                                                                                                    ],
                                                                                                                            }
                                                                                                                        ),
                                                                                                                }
                                                                                                            ),
                                                                                                        ],
                                                                                                }
                                                                                            ),
                                                                                            (0,
                                                                                            r.jsxs)(
                                                                                                "div",
                                                                                                {
                                                                                                    className:
                                                                                                        "h-auto w-full flex flex-row mt-[20px] ",
                                                                                                    children:
                                                                                                        [
                                                                                                            (0,
                                                                                                            r.jsx)(
                                                                                                                "a",
                                                                                                                {
                                                                                                                    href: "https://twitter.com/AvaIanche15",
                                                                                                                    rel: "noreferrer",
                                                                                                                    target: "_blank",
                                                                                                                    className:
                                                                                                                        "cursor-pointer mx-auto ",
                                                                                                                    children:
                                                                                                                        (0,
                                                                                                                        r.jsxs)(
                                                                                                                            "div",
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    "w-full mx-auto h-auto ",
                                                                                                                                children:
                                                                                                                                    [
                                                                                                                                        (0,
                                                                                                                                        r.jsx)(
                                                                                                                                            "img",
                                                                                                                                            {
                                                                                                                                                src: ie
                                                                                                                                                    ? "../static/images/ava_night.png"
                                                                                                                                                    : "../static/images/ava_day.png",
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                        " ",
                                                                                                                                    ],
                                                                                                                            }
                                                                                                                        ),
                                                                                                                }
                                                                                                            ),
                                                                                                            (0,
                                                                                                            r.jsx)(
                                                                                                                "a",
                                                                                                                {
                                                                                                                    href: "http://twitter.com/MaisonGhost",
                                                                                                                    rel: "noreferrer",
                                                                                                                    target: "_blank",
                                                                                                                    className:
                                                                                                                        "cursor-pointer mr-[20px]",
                                                                                                                    children:
                                                                                                                        (0,
                                                                                                                        r.jsxs)(
                                                                                                                            "div",
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    "w-full h-auto ",
                                                                                                                                children:
                                                                                                                                    [
                                                                                                                                        (0,
                                                                                                                                        r.jsx)(
                                                                                                                                            "img",
                                                                                                                                            {
                                                                                                                                                src: ie
                                                                                                                                                    ? "../static/images/maison_night.png"
                                                                                                                                                    : "../static/images/maison_day.png",
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                        " ",
                                                                                                                                    ],
                                                                                                                            }
                                                                                                                        ),
                                                                                                                }
                                                                                                            ),
                                                                                                        ],
                                                                                                }
                                                                                            ),
                                                                                            (0,
                                                                                            r.jsxs)(
                                                                                                "div",
                                                                                                {
                                                                                                    className:
                                                                                                        "h-auto w-full flex flex-row mt-[20px]",
                                                                                                    children:
                                                                                                        [
                                                                                                            (0,
                                                                                                            r.jsx)(
                                                                                                                "a",
                                                                                                                {
                                                                                                                    href: "https://twitter.com/4422HM",
                                                                                                                    rel: "noreferrer",
                                                                                                                    target: "_blank",
                                                                                                                    className:
                                                                                                                        "cursor-pointer mr-[10px]",
                                                                                                                    children:
                                                                                                                        (0,
                                                                                                                        r.jsxs)(
                                                                                                                            "div",
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    "w-full h-auto ",
                                                                                                                                children:
                                                                                                                                    [
                                                                                                                                        (0,
                                                                                                                                        r.jsx)(
                                                                                                                                            "img",
                                                                                                                                            {
                                                                                                                                                src: ie
                                                                                                                                                    ? "../static/images/4422_night.png"
                                                                                                                                                    : "../static/images/4422_day.png",
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                        " ",
                                                                                                                                    ],
                                                                                                                            }
                                                                                                                        ),
                                                                                                                }
                                                                                                            ),
                                                                                                            (0,
                                                                                                            r.jsx)(
                                                                                                                "a",
                                                                                                                {
                                                                                                                    href: "https://twitter.com/KRD_official_",
                                                                                                                    rel: "noreferrer",
                                                                                                                    target: "_blank",
                                                                                                                    className:
                                                                                                                        "cursor-pointer mr-[20px]",
                                                                                                                    children:
                                                                                                                        (0,
                                                                                                                        r.jsxs)(
                                                                                                                            "div",
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    "w-full h-auto ",
                                                                                                                                children:
                                                                                                                                    [
                                                                                                                                        (0,
                                                                                                                                        r.jsx)(
                                                                                                                                            "img",
                                                                                                                                            {
                                                                                                                                                src: ie
                                                                                                                                                    ? "../static/images/krd_night.png"
                                                                                                                                                    : "../static/images/krd_day.png",
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                        " ",
                                                                                                                                    ],
                                                                                                                            }
                                                                                                                        ),
                                                                                                                }
                                                                                                            ),
                                                                                                        ],
                                                                                                }
                                                                                            ),
                                                                                            (0,
                                                                                            r.jsxs)(
                                                                                                "div",
                                                                                                {
                                                                                                    className:
                                                                                                        "h-auto w-full mx-auto flex flex-row mt-[20px]",
                                                                                                    children:
                                                                                                        [
                                                                                                            (0,
                                                                                                            r.jsx)(
                                                                                                                "a",
                                                                                                                {
                                                                                                                    href: "https://twitter.com/Shiniga96",
                                                                                                                    rel: "noreferrer",
                                                                                                                    target: "_blank",
                                                                                                                    className:
                                                                                                                        "cursor-pointer mr-[20px]",
                                                                                                                    children:
                                                                                                                        (0,
                                                                                                                        r.jsxs)(
                                                                                                                            "div",
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    "w-full h-auto ",
                                                                                                                                children:
                                                                                                                                    [
                                                                                                                                        (0,
                                                                                                                                        r.jsx)(
                                                                                                                                            "img",
                                                                                                                                            {
                                                                                                                                                src: ie
                                                                                                                                                    ? "../static/images/shini_night.png"
                                                                                                                                                    : "../static/images/shini_day.png",
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                        " ",
                                                                                                                                    ],
                                                                                                                            }
                                                                                                                        ),
                                                                                                                }
                                                                                                            ),
                                                                                                            (0,
                                                                                                            r.jsx)(
                                                                                                                "a",
                                                                                                                {
                                                                                                                    href: "https://twitter.com/louistheguy02",
                                                                                                                    rel: "noreferrer",
                                                                                                                    target: "_blank",
                                                                                                                    className:
                                                                                                                        "cursor-pointer mr-[20px]",
                                                                                                                    children:
                                                                                                                        (0,
                                                                                                                        r.jsxs)(
                                                                                                                            "div",
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    "w-full h-auto ",
                                                                                                                                children:
                                                                                                                                    [
                                                                                                                                        (0,
                                                                                                                                        r.jsx)(
                                                                                                                                            "img",
                                                                                                                                            {
                                                                                                                                                src: ie
                                                                                                                                                    ? "../static/images/louis_night.png"
                                                                                                                                                    : "../static/images/louis_day.png",
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                        " ",
                                                                                                                                    ],
                                                                                                                            }
                                                                                                                        ),
                                                                                                                }
                                                                                                            ),
                                                                                                        ],
                                                                                                }
                                                                                            ),
                                                                                            (0,
                                                                                            r.jsxs)(
                                                                                                "div",
                                                                                                {
                                                                                                    className:
                                                                                                        "h-auto w-full mx-auto flex flex-row mt-[20px]",
                                                                                                    children:
                                                                                                        [
                                                                                                            (0,
                                                                                                            r.jsx)(
                                                                                                                "a",
                                                                                                                {
                                                                                                                    href: "https://twitter.com/mixartmarquez",
                                                                                                                    rel: "noreferrer",
                                                                                                                    target: "_blank",
                                                                                                                    className:
                                                                                                                        "cursor-pointer mr-[20px]",
                                                                                                                    children:
                                                                                                                        (0,
                                                                                                                        r.jsxs)(
                                                                                                                            "div",
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    "w-full h-auto ",
                                                                                                                                children:
                                                                                                                                    [
                                                                                                                                        (0,
                                                                                                                                        r.jsx)(
                                                                                                                                            "img",
                                                                                                                                            {
                                                                                                                                                src: ie
                                                                                                                                                    ? "../static/images/mix_night.png"
                                                                                                                                                    : "../static/images/mix_day.png",
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                        " ",
                                                                                                                                    ],
                                                                                                                            }
                                                                                                                        ),
                                                                                                                }
                                                                                                            ),
                                                                                                            (0,
                                                                                                            r.jsx)(
                                                                                                                "a",
                                                                                                                {
                                                                                                                    href: "https://twitter.com/LitskiNFT",
                                                                                                                    rel: "noreferrer",
                                                                                                                    target: "_blank",
                                                                                                                    className:
                                                                                                                        "cursor-pointer mr-[20px]",
                                                                                                                    children:
                                                                                                                        (0,
                                                                                                                        r.jsxs)(
                                                                                                                            "div",
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    "w-full h-auto ",
                                                                                                                                children:
                                                                                                                                    [
                                                                                                                                        (0,
                                                                                                                                        r.jsx)(
                                                                                                                                            "img",
                                                                                                                                            {
                                                                                                                                                src: ie
                                                                                                                                                    ? "../static/images/litski_night.png"
                                                                                                                                                    : "../static/images/litski_day.png",
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                        " ",
                                                                                                                                    ],
                                                                                                                            }
                                                                                                                        ),
                                                                                                                }
                                                                                                            ),
                                                                                                        ],
                                                                                                }
                                                                                            ),
                                                                                            (0,
                                                                                            r.jsxs)(
                                                                                                "div",
                                                                                                {
                                                                                                    className:
                                                                                                        "h-auto w-full mx-auto flex flex-row mt-[20px]",
                                                                                                    children:
                                                                                                        [
                                                                                                            (0,
                                                                                                            r.jsx)(
                                                                                                                "a",
                                                                                                                {
                                                                                                                    href: "https://twitter.com/SimplychaoticYt",
                                                                                                                    rel: "noreferrer",
                                                                                                                    target: "_blank",
                                                                                                                    className:
                                                                                                                        "cursor-pointer mr-[20px]",
                                                                                                                    children:
                                                                                                                        (0,
                                                                                                                        r.jsxs)(
                                                                                                                            "div",
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    "w-full h-auto ",
                                                                                                                                children:
                                                                                                                                    [
                                                                                                                                        (0,
                                                                                                                                        r.jsx)(
                                                                                                                                            "img",
                                                                                                                                            {
                                                                                                                                                src: ie
                                                                                                                                                    ? "../static/images/chaotic_night.png"
                                                                                                                                                    : "../static/images/chaotic_day.png",
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                        " ",
                                                                                                                                    ],
                                                                                                                            }
                                                                                                                        ),
                                                                                                                }
                                                                                                            ),
                                                                                                            (0,
                                                                                                            r.jsx)(
                                                                                                                "a",
                                                                                                                {
                                                                                                                    href: "https://twitter.com/Xirynx",
                                                                                                                    rel: "noreferrer",
                                                                                                                    target: "_blank",
                                                                                                                    className:
                                                                                                                        "cursor-pointer mr-[20px]",
                                                                                                                    children:
                                                                                                                        (0,
                                                                                                                        r.jsxs)(
                                                                                                                            "div",
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    "w-full h-auto ",
                                                                                                                                children:
                                                                                                                                    [
                                                                                                                                        (0,
                                                                                                                                        r.jsx)(
                                                                                                                                            "img",
                                                                                                                                            {
                                                                                                                                                src: ie
                                                                                                                                                    ? "../static/images/x_night.png"
                                                                                                                                                    : "../static/images/X_day.png",
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                        " ",
                                                                                                                                    ],
                                                                                                                            }
                                                                                                                        ),
                                                                                                                }
                                                                                                            ),
                                                                                                        ],
                                                                                                }
                                                                                            ),
                                                                                        ],
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                            ],
                                                        }),
                                                        (0, r.jsxs)("div", {
                                                            className:
                                                                "relative bg-[#FFEFE1] w-screen pb-[63px] mb-[60px] mx-auto text-center",
                                                            children: [
                                                                (0, r.jsx)(
                                                                    "img",
                                                                    {
                                                                        className:
                                                                            "absolute bottom-0 w-[126px] h-[94px] left-[35%] -translat-x-1/2 ",
                                                                        src: "../static/images/spraypaint_red.svg",
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "h2",
                                                                    {
                                                                        className:
                                                                            "text-[27px] font-bold font-drukwerk relative pt-[130px] ",
                                                                        children:
                                                                            "YYG NEEDS MORE",
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "h2",
                                                                    {
                                                                        className:
                                                                            "text-[27px] font-bold font-drukwerk relative",
                                                                        children:
                                                                            "FOOTSOLDIERS",
                                                                    }
                                                                ),
                                                            ],
                                                        }),
                                                        (0, r.jsxs)("div", {
                                                            className:
                                                                "relative w-screen mx-auto text-center",
                                                            children: [
                                                                (0, r.jsx)(
                                                                    "img",
                                                                    {
                                                                        className:
                                                                            "absolute top-[30px] h-auto w-screen ",
                                                                        src: ie
                                                                            ? "../static/images/border_black_mobile.png"
                                                                            : "../static/images/red_border_cremespray.png",
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "absolute top-[95px]  h-full w-screen  ".concat(
                                                                                ie
                                                                                    ? "bg-[#1A1A1A]"
                                                                                    : "bg-[#FD3D3C]"
                                                                            ),
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "img",
                                                                    {
                                                                        className:
                                                                            "relative h-auto w-screen mx-auto",
                                                                        src: ie
                                                                            ? "../static/images/footsoldiers_night_mobile.png"
                                                                            : "../static/images/footsoldiers_day_mobile.png",
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "h2",
                                                                    {
                                                                        className:
                                                                            "text-[20px] font-bold font-marker relative pt-[51px] text-white ",
                                                                        children:
                                                                            "ARE YOU IN OR OUT?",
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "relative w-full mt-[7px]",
                                                                        children:
                                                                            (0,
                                                                            r.jsx)(
                                                                                "div",
                                                                                {
                                                                                    className:
                                                                                        "w-full h-[60px] md:h-0 md:w-0 mx-auto",
                                                                                    children:
                                                                                        (0,
                                                                                        r.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                                className:
                                                                                                    "flex flex row justify-center",
                                                                                                children:
                                                                                                    (0,
                                                                                                    r.jsxs)(
                                                                                                        "div",
                                                                                                        {
                                                                                                            className:
                                                                                                                "relative w-[300px] h-[63px] md:opacity-0 md:w-0 md:h-0 ml-[10px] text-center text-[#fff] text-[24px] flex flex-row",
                                                                                                            children:
                                                                                                                [
                                                                                                                    (0,
                                                                                                                    r.jsx)(
                                                                                                                        "div",
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                "mt-[10px] ml-[5px]",
                                                                                                                            children:
                                                                                                                                "SOLD OUT",
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    (0,
                                                                                                                    r.jsx)(
                                                                                                                        "a",
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                "mx-auto ",
                                                                                                                            href: "https://opensea.io/collection/projectyinyang",
                                                                                                                            rel: "noreferrer",
                                                                                                                            target: "_blank",
                                                                                                                            children:
                                                                                                                                (0,
                                                                                                                                r.jsx)(
                                                                                                                                    "img",
                                                                                                                                    {
                                                                                                                                        src: "../static/images/OS.svg",
                                                                                                                                        className:
                                                                                                                                            "cursor-pointer hover:scale-105 h-[40px] w-[50px] my-auto ",
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                ],
                                                                                                        }
                                                                                                    ),
                                                                                            }
                                                                                        ),
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                            ],
                                                        }),
                                                        (0, r.jsxs)("div", {
                                                            className:
                                                                "relative w-screen mx-auto text-center",
                                                            children: [
                                                                (0, r.jsx)(
                                                                    "img",
                                                                    {
                                                                        className:
                                                                            "absolute top-[30px] h-auto w-screen ",
                                                                        src: ie
                                                                            ? "../static/images/border_black_sprayblack_mobile.png"
                                                                            : "../static/images/border_red_sprayred.png",
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "h2",
                                                                    {
                                                                        className:
                                                                            "text-[27px] font-bold font-drukwerk relative pt-[230px] ",
                                                                        children:
                                                                            "WHAT DO WE",
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "h2",
                                                                    {
                                                                        className:
                                                                            "text-[27px] font-bold font-drukwerk relative ",
                                                                        children:
                                                                            "KNOW ABOUT",
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "h2",
                                                                    {
                                                                        className:
                                                                            "text-[27px] font-bold font-drukwerk relative",
                                                                        children:
                                                                            "YYG?",
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "img",
                                                                    {
                                                                        className:
                                                                            "relative bg-[#FFEFE1] h-auto w-full pt-[80px] pb-[32px] mx-auto",
                                                                        src: ie
                                                                            ? "../static/images/bulletinboard_night.png"
                                                                            : "../static/images/bulletin-board-mobile.png",
                                                                    }
                                                                ),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className:
                                                        "relative bg-[#FFEFE1] pt-[130px] pb-[130px] w-screen mx-auto text-center",
                                                    children: [
                                                        (0, r.jsx)("img", {
                                                            className:
                                                                "absolute bottom-0 h-auto w-full left-0 ",
                                                            src: "../static/images/bridge.svg",
                                                        }),
                                                        (0, r.jsx)("div", {
                                                            className:
                                                                "relative min-h-[198px] max-h-[400px] h-auto w-full ",
                                                            children: (0,
                                                            r.jsx)("img", {
                                                                className:
                                                                    "absolute w-full h-auto",
                                                                src: "../static/images/bulletin_banner_mobile.png",
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className:
                                                        "relative w-screen mx-auto text-center",
                                                    children: [
                                                        (0, r.jsx)("img", {
                                                            className:
                                                                "absolute -top-[30px] h-auto w-screen ",
                                                            src: ie
                                                                ? "../static/images/bottom_border_black_mobile.png"
                                                                : "../static/images/bottom_border_red.png",
                                                        }),
                                                        (0, r.jsxs)("div", {
                                                            className:
                                                                "flex flex-col",
                                                            children: [
                                                                (0, r.jsx)(
                                                                    "img",
                                                                    {
                                                                        className:
                                                                            "w-full mx-auto px-[5px] pt-[130px] pb-[15px] h-auto",
                                                                        src: ie
                                                                            ? "../static/images/YYG_night.png"
                                                                            : "../static/images/YYG_day.png",
                                                                    }
                                                                ),
                                                                (0, r.jsx)(
                                                                    "a",
                                                                    {
                                                                        href: "https://shadow-labs.xyz",
                                                                        rel: "noreferrer",
                                                                        target: "_blank",
                                                                        className:
                                                                            "cursor-pointer",
                                                                        children:
                                                                            (0,
                                                                            r.jsx)(
                                                                                "img",
                                                                                {
                                                                                    className:
                                                                                        "max-w-[50%] w-auto mx-auto pt-[130px] pb-[130px] h-auto",
                                                                                    src: ie
                                                                                        ? "../static/images/shadowlabs_night.png"
                                                                                        : "../static/images/shadowlabs_day.png",
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        ge && C && C.length > 0
                                            ? (0, r.jsx)("div", {
                                                  className:
                                                      "z-[9000] font-alien md:bg-streetlist-found-desk bg-streetlist-found-mobile block top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 fixed md:w-[950px] h-[600px] w-[330px] bg-no-repeat bg-cover ",
                                                  children: (0, r.jsxs)("div", {
                                                      className:
                                                          "relative md:w-[950px] h-[600px]",
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className:
                                                                  "w-full md:h-[75px] h-[75px]",
                                                              children: (0,
                                                              r.jsxs)("div", {
                                                                  className:
                                                                      "h-full flex flex-row",
                                                                  children: [
                                                                      (0,
                                                                      r.jsx)(
                                                                          "div",
                                                                          {
                                                                              className:
                                                                                  "my-auto flex grow",
                                                                              children:
                                                                                  (0,
                                                                                  r.jsx)(
                                                                                      "div",
                                                                                      {
                                                                                          className:
                                                                                              "md:text-[28px] text-[22px] text-[#000] text-extrabold ml-6",
                                                                                      }
                                                                                  ),
                                                                          }
                                                                      ),
                                                                      (0,
                                                                      r.jsx)(
                                                                          "div",
                                                                          {
                                                                              className:
                                                                                  "md:my-auto mt-[27px] justify-content-end md:mr-4 mr-[25px]",
                                                                              children:
                                                                                  (0,
                                                                                  r.jsx)(
                                                                                      "div",
                                                                                      {
                                                                                          onClick:
                                                                                              function () {
                                                                                                  ye(
                                                                                                      !1
                                                                                                  );
                                                                                              },
                                                                                          className:
                                                                                              "md:w-[40px] md:h-[40px] w-[30px] h-[30px] hover:cursor-pointer",
                                                                                          children:
                                                                                              (0,
                                                                                              r.jsx)(
                                                                                                  "img",
                                                                                                  {
                                                                                                      className:
                                                                                                          "h-full w-full",
                                                                                                      src: "../static/images/close_button.svg",
                                                                                                  }
                                                                                              ),
                                                                                      }
                                                                                  ),
                                                                          }
                                                                      ),
                                                                  ],
                                                              }),
                                                          }),
                                                          (0, r.jsx)("div", {
                                                              className:
                                                                  "absolute z-[9001] md:bottom-[130px] md:bottom-[117px] bottom-[117px] md:left-[50%] left-[37%] -translate-x-1/2",
                                                              children: (0,
                                                              r.jsx)("div", {
                                                                  className:
                                                                      "w-full md:mt-[25px] mt-[5px] md:pl-[90px] pl-[100px] ",
                                                                  children: (0,
                                                                  r.jsx)(f.B, {
                                                                      url: "https://dystoapez.nyc3.digitaloceanspaces.com/Share_img.png",
                                                                      title: "I made it! Finally Streetlisted for @ProjectYinYang. Can't wait for mint!",
                                                                      hashtags:
                                                                          [
                                                                              "YY4L",
                                                                          ],
                                                                      children:
                                                                          (0,
                                                                          r.jsx)(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "w-[125px] mr-[15px] cursor-pointer-none",
                                                                                  children:
                                                                                      (0,
                                                                                      r.jsx)(
                                                                                          "img",
                                                                                          {
                                                                                              className:
                                                                                                  "w-[125px] h-[50px] cursor-pointer-none hover:scale-105",
                                                                                              src: "../static/images/tweet_button.svg",
                                                                                          }
                                                                                      ),
                                                                              }
                                                                          ),
                                                                  }),
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : null,
                                        ge && !C
                                            ? (0, r.jsx)("div", {
                                                  className:
                                                      "z-[9000] font-alien md:bg-streetlist-missing-desk bg-streetlist-missing-mobile block top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 fixed md:w-[950px] h-[600px] w-[330px] bg-no-repeat bg-cover ",
                                                  children: (0, r.jsxs)("div", {
                                                      className:
                                                          "relative md:w-[950px] h-[600px]",
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className:
                                                                  "w-full md:h-[75px] h-[75px]",
                                                              children: (0,
                                                              r.jsxs)("div", {
                                                                  className:
                                                                      "h-full flex flex-row",
                                                                  children: [
                                                                      (0,
                                                                      r.jsx)(
                                                                          "div",
                                                                          {
                                                                              className:
                                                                                  "my-auto flex grow",
                                                                              children:
                                                                                  (0,
                                                                                  r.jsx)(
                                                                                      "div",
                                                                                      {
                                                                                          className:
                                                                                              "md:text-[28px] text-[22px] text-[#000] text-extrabold ml-6",
                                                                                      }
                                                                                  ),
                                                                          }
                                                                      ),
                                                                      (0,
                                                                      r.jsx)(
                                                                          "div",
                                                                          {
                                                                              className:
                                                                                  "md:my-auto mt-[27px] justify-content-end md:mr-4 mr-[25px]",
                                                                              children:
                                                                                  (0,
                                                                                  r.jsx)(
                                                                                      "div",
                                                                                      {
                                                                                          onClick:
                                                                                              function () {
                                                                                                  ye(
                                                                                                      !1
                                                                                                  );
                                                                                              },
                                                                                          className:
                                                                                              "md:w-[40px] md:h-[40px] w-[30px] h-[30px] hover:cursor-pointer",
                                                                                          children:
                                                                                              (0,
                                                                                              r.jsx)(
                                                                                                  "img",
                                                                                                  {
                                                                                                      className:
                                                                                                          "h-full w-full",
                                                                                                      src: "../static/images/close_button.svg",
                                                                                                  }
                                                                                              ),
                                                                                      }
                                                                                  ),
                                                                          }
                                                                      ),
                                                                  ],
                                                              }),
                                                          }),
                                                          (0, r.jsx)("div", {
                                                              className:
                                                                  "absolute z-[9001] md:bottom-[130px] md:bottom-[125px] bottom-[110px] md:left-[50%] left-[37%] -translate-x-1/2",
                                                              children: (0,
                                                              r.jsx)("div", {
                                                                  className:
                                                                      "w-full md:mt-[25px] mt-[5px] md:pl-[90px] pl-[100px] ",
                                                                  children: (0,
                                                                  r.jsx)(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "md:w-[125px] w-[110px] mr-[15px] cursor-pointer-none",
                                                                          children:
                                                                              (0,
                                                                              r.jsx)(
                                                                                  "img",
                                                                                  {
                                                                                      className:
                                                                                          "md:w-[125px] w-[110px] h-[50px] cursor-pointer-none hover:scale-105",
                                                                                      src: "../static/images/raffle_button.svg",
                                                                                  }
                                                                              ),
                                                                      }
                                                                  ),
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : null,
                                        we
                                            ? (0, r.jsx)("div", {
                                                  ref: a,
                                                  className:
                                                      "z-[9000] font-alien md:bg-encrypt-desk bg-encrypt-mobile block top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 fixed md:w-[950px] h-[600px] w-[330px] bg-no-repeat bg-cover ",
                                                  children: (0, r.jsxs)("div", {
                                                      className:
                                                          "relative md:w-[950px] h-[600px]",
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className:
                                                                  "w-full md:h-[75px] h-[75px]",
                                                              children: (0,
                                                              r.jsxs)("div", {
                                                                  className:
                                                                      "h-full flex flex-row",
                                                                  children: [
                                                                      (0,
                                                                      r.jsx)(
                                                                          "div",
                                                                          {
                                                                              className:
                                                                                  "my-auto flex grow",
                                                                              children:
                                                                                  (0,
                                                                                  r.jsx)(
                                                                                      "div",
                                                                                      {
                                                                                          className:
                                                                                              "md:text-[28px] text-[22px] text-[#000] text-extrabold ml-6",
                                                                                      }
                                                                                  ),
                                                                          }
                                                                      ),
                                                                      (0,
                                                                      r.jsx)(
                                                                          "div",
                                                                          {
                                                                              className:
                                                                                  "md:my-auto mt-[27px] justify-content-end md:mr-4 mr-[25px]",
                                                                              children:
                                                                                  (0,
                                                                                  r.jsx)(
                                                                                      "div",
                                                                                      {
                                                                                          onClick:
                                                                                              function () {
                                                                                                  ve(
                                                                                                      !1
                                                                                                  );
                                                                                              },
                                                                                          className:
                                                                                              "md:w-[40px] md:h-[40px] w-[30px] h-[30px] hover:cursor-pointer",
                                                                                          children:
                                                                                              (0,
                                                                                              r.jsx)(
                                                                                                  "img",
                                                                                                  {
                                                                                                      className:
                                                                                                          "h-full w-full",
                                                                                                      src: "../static/images/close_button.svg",
                                                                                                  }
                                                                                              ),
                                                                                      }
                                                                                  ),
                                                                          }
                                                                      ),
                                                                  ],
                                                              }),
                                                          }),
                                                          je
                                                              ? (0, r.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "absolute z-[9001] md:bottom-[372px] bottom-[333px] md:left-[46.5%] left-[35%] -translate-x-1/2",
                                                                        children:
                                                                            (0,
                                                                            r.jsx)(
                                                                                "div",
                                                                                {
                                                                                    className:
                                                                                        "font-alien text-[#FD3D3C] text-center",
                                                                                    children:
                                                                                        je
                                                                                            ? "INVALID CODE"
                                                                                            : "",
                                                                                }
                                                                            ),
                                                                    }
                                                                )
                                                              : (0, r.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "absolute z-[9001] md:bottom-[372px] bottom-[335px] md:left-[40%] left-[20%] -translate-x-1/2",
                                                                        children:
                                                                            (0,
                                                                            r.jsx)(
                                                                                "img",
                                                                                {
                                                                                    className:
                                                                                        "blink",
                                                                                    src: "../static/images/chat_square_blink.svg",
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                          (0, r.jsx)("input", {
                                                              className:
                                                                  " absolute z-[9002] md:bottom-[180px] bottom-[134px] md:left-[55%] left-[50%] -translate-x-1/2 opacity-0",
                                                              value: Te,
                                                              onChange:
                                                                  function () {
                                                                      return Ee(
                                                                          ""
                                                                      );
                                                                  },
                                                          }),
                                                          (0, r.jsx)("div", {
                                                              className:
                                                                  "absolute z-[9001] md:bottom-[130px] bottom-[90px] md:left-[50%] left-[37%] -translate-x-1/2",
                                                              children: (0,
                                                              r.jsxs)("div", {
                                                                  className:
                                                                      "grid grid-rows-2",
                                                                  children: [
                                                                      (0,
                                                                      r.jsx)(
                                                                          "div",
                                                                          {
                                                                              className:
                                                                                  "md:text-[35px] text-[30px] text-[#FD3D3C] tracking-widest md:pl-[178px] pl-[93px] text-center",
                                                                              children:
                                                                                  (0,
                                                                                  r.jsx)(
                                                                                      "div",
                                                                                      {
                                                                                          className:
                                                                                              "flex flex-row",
                                                                                          children:
                                                                                              Te.map(
                                                                                                  function (
                                                                                                      e,
                                                                                                      t
                                                                                                  ) {
                                                                                                      return (0,
                                                                                                      r.jsx)(
                                                                                                          "div",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "mx-[1px]",
                                                                                                              children:
                                                                                                                  e,
                                                                                                          },
                                                                                                          t
                                                                                                      );
                                                                                                  }
                                                                                              ),
                                                                                      }
                                                                                  ),
                                                                          }
                                                                      ),
                                                                      (0,
                                                                      r.jsx)(
                                                                          "div",
                                                                          {
                                                                              className:
                                                                                  "w-full md:mt-[10px] mt-[5px] pl-[90px] ",
                                                                              children:
                                                                                  (0,
                                                                                  r.jsxs)(
                                                                                      "div",
                                                                                      {
                                                                                          className:
                                                                                              "flex flex-row md:h-[40px] h-[18px]",
                                                                                          children:
                                                                                              [
                                                                                                  (0,
                                                                                                  r.jsx)(
                                                                                                      "div",
                                                                                                      {
                                                                                                          className:
                                                                                                              "md:w-[160px] w-[70px] mr-[15px] cursor-pointer-none",
                                                                                                          children:
                                                                                                              (0,
                                                                                                              r.jsx)(
                                                                                                                  "img",
                                                                                                                  {
                                                                                                                      className:
                                                                                                                          "md:w-[160px] md:h-[40px] h-[18px] cursor-pointer-none hover:scale-105",
                                                                                                                      onClick:
                                                                                                                          function () {
                                                                                                                              return (function () {
                                                                                                                                  var e =
                                                                                                                                      Te.toString();
                                                                                                                                  De >=
                                                                                                                                  3
                                                                                                                                      ? (0,
                                                                                                                                        d.Am)(
                                                                                                                                            "You have exceeded your attempts."
                                                                                                                                        )
                                                                                                                                      : ("3,4,9,1,6,7" ===
                                                                                                                                        e
                                                                                                                                            ? (Ue(),
                                                                                                                                              ve(
                                                                                                                                                  !1
                                                                                                                                              ),
                                                                                                                                              ke(
                                                                                                                                                  !1
                                                                                                                                              ),
                                                                                                                                              Be(
                                                                                                                                                  A,
                                                                                                                                                  e
                                                                                                                                              ))
                                                                                                                                            : ke(
                                                                                                                                                  !0
                                                                                                                                              ),
                                                                                                                                        Ie(
                                                                                                                                            function (
                                                                                                                                                e
                                                                                                                                            ) {
                                                                                                                                                return (
                                                                                                                                                    e +
                                                                                                                                                    1
                                                                                                                                                );
                                                                                                                                            }
                                                                                                                                        ));
                                                                                                                              })();
                                                                                                                          },
                                                                                                                      src: "../static/images/enter_button.svg",
                                                                                                                  }
                                                                                                              ),
                                                                                                      }
                                                                                                  ),
                                                                                                  (0,
                                                                                                  r.jsx)(
                                                                                                      "div",
                                                                                                      {
                                                                                                          className:
                                                                                                              "md:w-[160px] ",
                                                                                                          children:
                                                                                                              (0,
                                                                                                              r.jsx)(
                                                                                                                  "img",
                                                                                                                  {
                                                                                                                      onClick:
                                                                                                                          function () {
                                                                                                                              return (
                                                                                                                                  (Re =
                                                                                                                                      []),
                                                                                                                                  (Ye =
                                                                                                                                      !0),
                                                                                                                                  void ve(
                                                                                                                                      !1
                                                                                                                                  )
                                                                                                                              );
                                                                                                                          },
                                                                                                                      className:
                                                                                                                          "md:w-[160px] md:h-[40px] h-[18px] cursor-pointer-none hover:scale-105",
                                                                                                                      src: "../static/images/cancel_button.svg",
                                                                                                                  }
                                                                                                              ),
                                                                                                      }
                                                                                                  ),
                                                                                              ],
                                                                                      }
                                                                                  ),
                                                                          }
                                                                      ),
                                                                  ],
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : null,
                                        (0, r.jsx)("audio", {
                                            ref: t,
                                            loop: !0,
                                            children: (0, r.jsx)("source", {
                                                src: "https://audio.jukehost.co.uk/v3AsfaTMP6XWjKsuiIdtNMy1c3Ma9TPo",
                                                type: "audio/mp3",
                                            }),
                                        }),
                                        (0, r.jsx)("audio", {
                                            ref: s,
                                            loop: !0,
                                            children: (0, r.jsx)("source", {
                                                src: "https://audio.jukehost.co.uk/d8RaBfKARDUh595WBdXDl1AOD2D2XbR2",
                                                type: "audio/mp3",
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
        },
        88677: function () {},
        62808: function () {},
        36563: function () {},
        80950: function () {},
        46601: function () {},
        89214: function () {},
        8623: function () {},
        7748: function () {},
        85568: function () {},
        89568: function () {},
        40127: function () {},
        40194: function () {},
        56619: function () {},
        24654: function () {},
        77108: function () {},
        52361: function () {},
        94616: function () {},
        43503: function () {},
        80390: function () {},
        41529: function () {},
        71190: function () {},
        22322: function () {},
        9324: function () {},
        24414: function () {},
        42009: function () {},
        87500: function () {},
        35091: function () {},
        62996: function (e) {
            "use strict";
            e.exports = JSON.parse(
                '[{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"adminMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentPhase","outputs":[{"internalType":"enum YinYangGangNFT.Phase","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_newMerkleRoot","type":"bytes32"},{"internalType":"uint256","name":"_newSupply","type":"uint256"},{"internalType":"uint256","name":"_newMintPrice","type":"uint256"}],"name":"cyclePhases","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"raffleMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintPrice","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum YinYangGangNFT.Phase","name":"_phase","type":"uint8"}],"name":"setSpecificPhase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_yang","type":"string"}],"name":"setYang","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_yin","type":"string"}],"name":"setYin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stopAllPhases","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"verifyMultiMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"verifySingleMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"whitelistMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"withdrawFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
            );
        },
    },
    function (e) {
        e.O(0, [482, 714, 277, 660, 45, 774, 888, 179], function () {
            return (t = 45301), e((e.s = t));
            var t;
        });
        var t = e.O();
        _N_E = t;
    },
]);
